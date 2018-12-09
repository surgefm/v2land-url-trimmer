const { removeAllQueries, removeHash, useHttps } = require('../../tools');
async function scmpTrimmer(url) {
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);
  url.host = 'www.scmp.com';
  return url;
}

module.exports = {
  trimmer: scmpTrimmer,
  domains: [
    'www.scmp.com',
    'beta.scmp.com',
  ],
};
