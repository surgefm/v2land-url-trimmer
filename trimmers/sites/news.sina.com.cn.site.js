const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../tools');

function sinaNewsUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  let host = url.host;
  if (host.slice(-8) === '.sina.cn') {
    host = host.slice(0, -8) + '.sina.com.cn';
  }
  return url;
}

module.exports = {
  trimmer: sinaNewsUrlTrimmer,
  domains: [
    'news.sina.com.cn',
    'news.sina.cn',
    'sports.sina.com.cn',
    'sports.sina.cn',
    'tech.sina.com.cn',
    'tech.sina.cn',
    'ent.sina.com.cn',
    'ent.sina.cn',
  ],
};
