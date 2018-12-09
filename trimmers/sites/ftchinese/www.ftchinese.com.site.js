const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');

function ftChineseUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.ftchinese.com';

  const pathname = getPathname(url);
  if (['en', 'ce'].includes(pathname[pathname.length - 1])) {
    setPathname(url, pathname.slice(0, pathname.length - 1));
  }

  return url;
}

module.exports = {
  trimmer: ftChineseUrlTrimmer,
  domains: ['ftchinese.com', 'www.ftchinese.com', 'big5.ftchinese.com'],
};
