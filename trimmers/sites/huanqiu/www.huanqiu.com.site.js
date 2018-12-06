const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');

function huanqiuUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: huanqiuUrlTrimmer,
  domains: [
    'www.huanqiu.com',
    'world.huanqiu.com',
    'china.huanqiu.com',
    'mil.huanqiu.com',
    'taiwan.huanqiu.com',
    'opinion.huanqiu.com',
    'tech.huanqiu.com',
    'smart.huanqiu.com',
    'game.huanqiu.com',
    'ent.huanqiu.com',
    'fashion.huanqiu.com',
    'v.huanqiu.com',
    'ski.huanqiu.com',
    'run.huanqiu.com',
    'auto.huanqiu.com',
    'health.huanqiu.com',
    'lx.huanqiu.com',
    'city.huanqiu.com',
    'anquan.huanqiu.com',
    'quality.huanqiu.com',
    'data.huanqiu.com',
    'corp.huanqiu.com',
  ],
};
