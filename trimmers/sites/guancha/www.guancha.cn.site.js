const { removeAllQueries, removeHash, useHttps } = require('../../tools');
async function guanchaTrimmer(url) {
  useHttps(url);
  removeAllQueries(url);
  removeHash(url);
  return url;
}
module.exports = {
  trimmer: guanchaTrimmer,
  domains: [
    'www.guancha.cn',
  ],
};
