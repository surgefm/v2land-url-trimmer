const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../tools');

function nfPeopleUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.nfpeople.com';
  return url;
}

module.exports = {
  trimmer: nfPeopleUrlTrimmer,
  domains: ['nfpeople.com', 'www.nfpeople.com'],
};
