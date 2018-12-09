const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function caixinGlobalUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.caixinglobal.com';
  return url;
}

module.exports = {
  trimmer: caixinGlobalUrlTrimmer,
  domains: ['caixinglobal.com', 'www.caixinglobal.com'],
};
