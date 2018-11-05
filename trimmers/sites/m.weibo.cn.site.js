const { removeAllQueries, removeHash, useHttps } = require('../tools');
const { getPathname, setPathname } = require('../utils');
const _ = require('lodash');

function mobileWeiboUrlTrimmer(url) {
  removeAllQueries(url);
  removeHash(url);
  useHttps(url);
  url.host = 'm.weibo.cn';
  const pathname = getPathname(url);
  if (pathname.length === 2 && _.isNumber(+pathname[0])) {
    pathname[0] = 'status';
  }
  url = setPathname(url, pathname);
  return url;
}

module.exports = {
  trimmer: mobileWeiboUrlTrimmer,
  domains: ['m.weibo.cn', 'weibo.cn'],
};
