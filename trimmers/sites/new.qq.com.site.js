
const { removeAllQueries, removeHash, useHttps } = require('../tools');
const { getPathname } = require('../utils');
const { URL } = require('url');

async function tencentNewsUrlTrimmer(url) {
  removeAllQueries(url);
  removeHash(url);
  useHttps(url);
  const pathname = getPathname(url);

  const lastPath = pathname[pathname.length - 1].replace('.html', '');
  return new URL(`https://new.qq.com/omn/${lastPath}`);
}

module.exports = {
  trimmer: tencentNewsUrlTrimmer,
  domains: ['new.qq.com'],
};