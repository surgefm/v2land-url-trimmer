const { removeAllQueries, removeHash, useHttp } = require('../../tools');
async function usaEastDayTrimmer(url) {
  useHttp(url);
  removeAllQueries(url);
  removeHash(url);
  return url;
}
module.exports = {
  trimmer: usaEastDayTrimmer,
  domains: ['usa.eastday.com'],
};
