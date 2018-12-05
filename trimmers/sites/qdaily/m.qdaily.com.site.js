const { removeAllQueries, removeHash, useHttps } = require('../../tools');
const { getPathname } = require('../../utils');
const { URL } = require('url');

async function mqdailyTrimmer(url) {
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);
  const pathname = getPathname(url);
  const lastPath = pathname[pathname.length - 1];
  return new URL(`https://www.qdaily.com/articles/${lastPath}`);
}

module.exports = {
  trimmer: mqdailyTrimmer,
  domains: ['m.qdaily.com'],
};
