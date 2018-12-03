const { removeAllQueries, removeHash, useHttp, useHttps } = require('../tools');
async function oeeeeTrimmer(url) {
  if (url.host === 'm.mp.oeeee.com') {
    useHttps(url);
  } else {
    useHttp(url);
  }
  removeHash(url);
  removeAllQueries(url);
  return url;
}
module.exports = {
  trimmer: oeeeeTrimmer,
  domains: [
    'www.oeeee.com',
    'm.mp.oeeee.com',
  ],
};
