const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');
const { getPathname } = require('../../utils');
const caixinUrlTrimmer = require('./www.caixin.com.site');
const { URL } = require('url');

function mobileCaixinUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);

  const pathname = getPathname(url);
  if (pathname[0] === 'm' && pathname.length === 3) {
    const newUrl = new URL(`http://${url.host.slice(2)}/${pathname[1]}/${pathname[2]}`);
    return caixinUrlTrimmer.trimmer(newUrl);
  }

  return url;
}

module.exports = {
  trimmer: mobileCaixinUrlTrimmer,
  domains: caixinUrlTrimmer.domains.map(domain => 'm.' + domain),
};
