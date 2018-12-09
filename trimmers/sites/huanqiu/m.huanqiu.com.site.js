const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');
const huanqiuUrlTrimmer = require('./www.huanqiu.com.site');
const agent = require('superagent');
const cheerio = require('cheerio');
const { userAgent } = require('../../../config');
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
  const response = await agent.get(url.toString()).set('user-agent', userAgent);
  const text = response.text;
  const $ = cheerio.load(text);
  const a = $('a', '.fromSummary');

  // const exec = regex.exec(text);
  if (a.length > 0) {
    return huanqiuUrlTrimmer.trimmer(new URL(a[0].attribs.href));
  }

  return url;
}

module.exports = {
  trimmer: mobileHuanqiuUrlTrimmer,
  domains: ['m.huanqiu.com'],
};
