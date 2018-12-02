const { removeAllQueries, removeHash, useHttps } = require('../tools');
const { getPathname, setPathname } = require('../utils');

async function cnNewYorkTimesTrimmer(url) {
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);

  const pathname = getPathname(url);
  while (pathname.length > 3) {
    pathname.pop();
  }

  setPathname(url, pathname);

  return url;
}

module.exports = {
  trimmer: cnNewYorkTimesTrimmer,
  domains: ['cn.nytimes.com'],
};
