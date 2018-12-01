const { removeAllQueries, removeHash, useHttps } = require('../tools');

async function qdailyTrimmer (url) {
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);

  return url;
}

module.exports = {
  trimmer: qdailyTrimmer,
  domains: ['www.qdaily.com']
};