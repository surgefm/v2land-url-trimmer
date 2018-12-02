const { removeAllQueries, removeHash, useHttps } = require('../tools');

async function bbcTrimmer(url) {
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);

  return url;
}

module.exports = {
  trimmer: bbcTrimmer,
  domains: ['www.bbc.com'],
};
