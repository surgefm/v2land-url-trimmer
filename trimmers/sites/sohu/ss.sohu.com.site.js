const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');

function sohuNewsShareUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);

  const pathname = getPathname(url);
  if (pathname.length > 2 && pathname[0] === 'infonews' && pathname[1] === 'article') {
    setPathname(url, pathname.slice(0, 3));
  }

  url.host = 'ss.sohu.com';
  return url;
}

module.exports = {
  trimmer: sohuNewsShareUrlTrimmer,
  domains: ['ss.sohu.com'],
};
