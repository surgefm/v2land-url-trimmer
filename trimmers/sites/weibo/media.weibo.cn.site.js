const { removeAllQueriesExcept, removeHash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');

function weiboUrlTrimmer(url) {
  removeAllQueriesExcept(url, 'id');
  removeHash(url);
  useHttps(url);
  const pathname = getPathname(url);
  if (['ttarticle', 'article'].includes(pathname[0])) {
    url.host = 'www.weibo.com';
    url = setPathname(url, ['ttarticle', 'p', 'show']);
  } else if (['ttwenda', 'wenda'].includes(pathname[0])) {
    url.host = 'www.weibo.com';
    url = setPathname(url, ['ttwenda', 'p', 'show']);
  }

  return url;
}

module.exports = {
  trimmer: weiboUrlTrimmer,
  domains: ['media.weibo.cn'],
};
