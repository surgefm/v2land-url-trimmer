
const { removeAllQueries, removeHash, useHttps } = require('../tools');
const { getPathname } = require('../utils');
const { URL } = require('url');

async function mobileTencentNewsUrlTrimmer(url) {
  removeAllQueries(url);
  removeHash(url);
  useHttps(url);
  const pathname = getPathname(url);

  const lastPath = pathname[pathname.length - 1];
  return new URL(`https://new.qq.com/omn/${lastPath}`);
}

module.exports = {
  trimmer: mobileTencentNewsUrlTrimmer,
  domains: ['view.inews.qq.com'],
};