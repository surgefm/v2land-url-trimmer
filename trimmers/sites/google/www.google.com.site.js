const { removeAllQueriesExcept, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function googleUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueriesExcept(url, ['q']);
  removeTrailingSlash(url);
  url.host = 'www.google.com';
  return url;
}

module.exports = {
  trimmer: googleUrlTrimmer,
  domains: ['www.google.com', 'google.com'],
};
