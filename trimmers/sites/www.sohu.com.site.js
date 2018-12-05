const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../tools');

function sohuNewsUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.sohu.com';
  return url;
}

module.exports = {
  trimmer: sohuNewsUrlTrimmer,
  domains: ['www.sohu.com'],
};
