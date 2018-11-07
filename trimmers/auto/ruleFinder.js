const { removeHash, removeTrailingSlash, useHttp, useHttps } = require('../tools');
const { URL } = require('url');
const agent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const { getPathname } = require('../utils');

async function ruleFinder(url) {
  removeHash(url);
  removeTrailingSlash(url);
  const ruleMethodList = ['removeHash', 'removeTrailingSlash'];
  let originalWebpage;
  try {
    useHttps(url);
    originalWebpage = await agent.get(url.toString());
    ruleMethodList.push('useHttps');
  } catch (err) {
    try {
      useHttp(url);
      originalWebpage = await agent.get(url.toString());
      ruleMethodList.push('useHttp');
    } catch (err) {
      return url;
    }
  }
  const original$ = cheerio.load(originalWebpage.text);
  const originalTitle = original$('title')[0].children[0].data;
  
  const ruleQueryRemoveList = [];
  const ruleQueryPreserveList = [];
  let lastUrl = new URL(url);
  try {
    if (!url.searchParams) {
      await saveRule(url, ruleMethodList, ruleQueryRemoveList, ruleQueryPreserveList);
      return url;
    }

    const queryKeys = [];
    for (const key of url.searchParams.keys()) {
      queryKeys.push(key);
    }
    for (const key of queryKeys) {
      lastUrl = new URL(url);
      url.searchParams.delete(key);
      try {
        if (await checkSamePage(url, originalTitle)) {
          ruleQueryRemoveList.push(key);
        } else {
          ruleQueryPreserveList.push(key);
        }
      } catch (err) {
        url = lastUrl;
        ruleQueryPreserveList.push(key);
      }
    }
    lastUrl = new URL(url);
  } catch (err) {}
  finally {
    await saveRule(lastUrl, ruleMethodList, ruleQueryRemoveList, ruleQueryPreserveList);
    return lastUrl;
  }
}

function getFilename(url) {
  const { host } = url;
  const pathname = getPathname(url);
  const filename = `${host}.${pathname.join('-')}.rule`;
  return filename;
}

async function checkSamePage(url, originalTitle) {
  const response = await agent.get(url.toString());
  const $ = cheerio.load(response.text);
  const title = $('title')[0].children[0].data;
  return title === originalTitle;
}

async function saveRule(url, ruleMethodList, ruleQueryRemoveList, ruleQueryPreserveList) {
  let str = '';
  for (const method of ruleMethodList) {
    str += `method:${method}\n`;
  }
  for (const query of ruleQueryRemoveList) {
    str += `query:remove:${query}\n`;
  }
  for (const query of ruleQueryPreserveList) {
    str += `query:preserve:${query}\n`;
  }
  
  await fs.appendFile(path.resolve(__dirname, 'rules', getFilename(url)), str);
}

module.exports = ruleFinder;
