const { removeAllQueries, removeHash, removeTrailingSlash, useHttps, useHttp } = require('../../tools');

function chinaDailyUrlTrimmer(url) {
  removeHash(url);
  if (url.host === 'chinadailyasia.com') {
    useHttps(url);
  } else {
    useHttp(url);
  }
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: chinaDailyUrlTrimmer,
  domains: [
    'www.chinadaily.com.cn',
    'usa.chinadaily.com.cn',
    'africa.chinadaily.com.cn',
    'europe.chinadaily.com.cn',
    'language.chinadaily.com.cn',
    'watchthis.chinadaily.com.cn',
    'chinadailyasia.com',
  ],
};
