const { removeAllQueries, removeHash, useHttps } = require('../../tools');
async function oldEastDayTrimmer(url) {
  useHttps(url);
  removeAllQueries(url);
  removeHash(url);
  return url;
}
module.exports = {
  trimmer: oldEastDayTrimmer,
  domains: [
    'auto.eastday.com',
    'money.eastday.com',
    'health.eastday.com',
    'shfda.eastday.com',
    'jiazhuang.eastday.com',
  ],
};
