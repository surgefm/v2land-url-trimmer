const { removeAllQueriesExcept, removeHash, useHttps } = require('../tools');
const { getPathname, setPathname } = require('../utils');

function weiboUrlTrimmer(url) {
  removeAllQueriesExcept(url, 'id');
  removeHash(url);
  useHttps(url);
  if (['ttarticle', 'article'].includes(getPathname(url)[0])) {
    url.host = 'www.weibo.com';
    url = setPathname(url, ['ttarticle', 'p', 'show']);
  }

  return url;
}

module.exports = {
  trimmer: weiboUrlTrimmer,
  domains: ['media.weibo.cn'],
};
