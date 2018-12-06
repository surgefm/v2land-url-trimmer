const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function thePaperUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.thepaper.cn';
  return url;
}

module.exports = {
  trimmer: thePaperUrlTrimmer,
  domains: ['thepaper.cn', 'www.thepaper.cn', 'm.thepaper.cn'],
};
