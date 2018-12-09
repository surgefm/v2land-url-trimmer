const { removeAllQueries, removeHash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');
async function chinaNewsTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  const pathname = getPathname(url);
  if (pathname.includes('wap')) {
    setPathname(url, pathname.slice(3, 7));
  }
  return url;
}
module.exports = {
  trimmer: chinaNewsTrimmer,
  domains: ['www.chinanews.com'],
};
