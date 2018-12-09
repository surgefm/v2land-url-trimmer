const { removeAllQueries, removeHash, useHttps } = require('../../tools');
async function sportsEastDayTrimmer(url) {
  useHttps(url);
  removeAllQueries(url);
  removeHash(url);
  url.host = 'sports.eastday.com';
  return url;
}
module.exports = {
  trimmer: sportsEastDayTrimmer,
  domains: [
    'sports.eastday.com',
    'msports.eastday.com',
  ],
};
