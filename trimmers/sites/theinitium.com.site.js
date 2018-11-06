const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../tools');

function theInitiumUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'theinitium.com';
  return url;
}

module.exports = {
  trimmer: theInitiumUrlTrimmer,
  domains: ['theinitium.com', 'www.theinitium.com'],
};
