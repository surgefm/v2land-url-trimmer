const { removeAllQueriesExcept, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function youtubeUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueriesExcept(url, ['v']);
  removeTrailingSlash(url);
  url.host = 'www.youtube.com';
  return url;
}

module.exports = {
  trimmer: youtubeUrlTrimmer,
  domains: ['www.youtube.com', 'youtube.com'],
};
