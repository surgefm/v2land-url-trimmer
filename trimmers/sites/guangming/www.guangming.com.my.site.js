const { removeAllQueries, removeHash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');
async function scmpTrimmer(url) {
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);
  const pathname = getPathname(url);
  setPathname(url, pathname.slice(0, 2));

  return url;
}

module.exports = {
  trimmer: scmpTrimmer,
  domains: [
    'www.guangming.com.my',
  ],
};
