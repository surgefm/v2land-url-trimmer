const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function sohuMobileNewsUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = '3g.k.sohu.com';
  return url;
}

module.exports = {
  trimmer: sohuMobileNewsUrlTrimmer,
  domains: ['3g.k.sohu.com'],
};
