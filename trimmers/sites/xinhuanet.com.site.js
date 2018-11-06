const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../tools');

function xinhuaUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.xinhuanet.com';
  return url;
}

module.exports = {
  trimmer: xinhuaUrlTrimmer,
  domains: ['xinhuanet.com', 'www.xinhuanet.com'],
};
