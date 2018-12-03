const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../tools');

function twitterUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'twitter.com';

  return url;
}

module.exports = {
  trimmer: twitterUrlTrimmer,
  domains: ['twitter.com', 'www.twitter.com', 'mobile.twitter.com'],
};
