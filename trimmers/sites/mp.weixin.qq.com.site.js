const { removeQueries, removeAllQueries, removeHash, useHttps } = require('../tools');
const { getPathname } = require('../utils');

function mediaPlatformWeixinUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  url.host = 'mp.weixin.qq.com';
  const pathname = getPathname(url);
  if (pathname.length === 2) {
    removeAllQueries(url);
  } else {
    removeQueries(url, ['chksm', 'mpshare', 'scene', 'srcid', 'news']);
  }
  return url;
}

module.exports = {
  trimmer: mediaPlatformWeixinUrlTrimmer,
  domains: ['mp.weixin.qq.com'],
};
