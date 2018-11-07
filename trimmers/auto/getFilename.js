const { getPathname } = require('../utils');
const _ = require('lodash');

function getFilename(url) {
  const { host } = url;
  const pathname = getPathname(url);
  for (let i = 0; i < pathname.length; i++) {
    if (pathname[i].length && _.isNumber(+pathname[i])) {
      pathname[i] = '[num]';
    }
  }
  const filename = `${host}.${pathname.length ? (pathname.join('-') + '.') : ''}rule`;
  return filename;
}

module.exports = getFilename;
