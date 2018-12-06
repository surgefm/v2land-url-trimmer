const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');
const huanqiuUrlTrimmer = require('./www.huanqiu.com.site');
const agent = require('superagent');
const { mobileUserAgent } = require('../../../config');
const { URL } = require('url');

async function mobileHuanqiuUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'm.huanqiu.com';
  const pathname = getPathname(url);
  if (pathname.length > 1) {
    pathname[1].replace('==', '');
    setPathname(url, pathname);
  }
  const response = await agent.get(url.toString()).set('user-agent', mobileUserAgent);
  const text = response.text;
  const regex = /<!--http:\/\/[a-z]*.huanqiu.com\/article\//g;
  const exec = regex.exec(text);
  if (exec !== null) {
    const str = [];
    let index = exec.index + '<!--'.length;
    while (text[index] && !(text[index] === '-' && text[index + 1] === '-')) {
      str.push(text[index]);
      index++;
    }
    return huanqiuUrlTrimmer.trimmer(new URL(str.join('')));
  }

  return url;
}

module.exports = {
  trimmer: mobileHuanqiuUrlTrimmer,
  domains: ['m.huanqiu.com'],
};
