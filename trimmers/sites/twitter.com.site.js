const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../tools');

function theInitiumUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'twitter.com';

  return url;
}

module.exports = {
  trimmer: theInitiumUrlTrimmer,
  domains: ['twitter.com', 'www.twitter.com', 'mobile.twitter.com'],
};
