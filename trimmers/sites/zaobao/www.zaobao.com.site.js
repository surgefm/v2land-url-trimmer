const { removeAllQueries, removeHash, useHttps } = require('../../tools');
async function zaobaoTrimmer(url) {
  useHttps(url);
  removeAllQueries(url);
  removeHash(url);
  return url;
}
module.exports = {
  trimmer: zaobaoTrimmer,
  domains: [
    'www.zaobao.com',
    'beltandroad.zaobao.com',
  ],
};
