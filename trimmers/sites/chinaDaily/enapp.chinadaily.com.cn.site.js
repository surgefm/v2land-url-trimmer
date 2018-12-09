const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function chinaDailyAppUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: chinaDailyAppUrlTrimmer,
  domains: ['enapp.chinadaily.com.cn'],
};
