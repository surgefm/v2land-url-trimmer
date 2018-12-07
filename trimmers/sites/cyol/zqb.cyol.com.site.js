const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');

function cyolZQBUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: cyolZQBUrlTrimmer,
  domains: ['zqb.cyol.com', 'mzqb.cyol.com'],
};
