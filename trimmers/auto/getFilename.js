const { getPathname } = require('../utils');

function getFilename(url) {
  const { host } = url;
  const pathname = getPathname(url);
  const filename = `${host}.${pathname.join('-')}.rule`;
  return filename;
}

module.exports = getFilename;
