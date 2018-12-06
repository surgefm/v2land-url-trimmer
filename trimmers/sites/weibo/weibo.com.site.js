const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');
const { getPathname } = require('../../utils');
const mediaWeiboTrimmer = require('./media.weibo.cn.site').trimmer;

function weiboUrlTrimmer(url) {
  const pathname = getPathname(url);
  if (['ttarticle', 'ttwenda'].includes(pathname[0])) {
    return mediaWeiboTrimmer(url);
  }
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.weibo.com';
  return url;
}

module.exports = {
  trimmer: weiboUrlTrimmer,
  domains: ['weibo.com', 'www.weibo.com'],
};
