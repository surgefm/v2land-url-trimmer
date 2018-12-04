const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../tools');

function cyolZQBUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'zqb.cyol.com';
  return url;
}

module.exports = {
  trimmer: cyolZQBUrlTrimmer,
  domains: ['zqb.cyol.com'],
};
