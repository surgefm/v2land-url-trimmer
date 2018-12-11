const { removeAllQueries, removeHash, useHttp } = require('../../tools');
async function oldCCTVTrimmer(url) {
  useHttp(url);
  removeAllQueries(url);
  removeHash(url);
  return url;
}
module.exports = {
  trimmer: oldCCTVTrimmer,
  domains: [
    'gongyi.cctv.com',
    'travel.cctv.com',
    'food.cctv.com',
    'shengai.cctv.com',
  ],
};
