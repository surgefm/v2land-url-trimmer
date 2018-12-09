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
    'fashion.huanqiu.com',
    'ent.huanqiu.com',
    'v.huanqiu.com',
    'city.huanqiu.com',
    'lx.huanqiu.com',
    'hope.huanqiu.com',
    'society.huanqiu.com',
    'tech.huanqiu.com',
    'smart.huanqiu.com',
    'run.huanqiu.com',
    'ski.huanqiu.com',
    'uav.huanqiu.com',
    'oversea.huanqiu.com',
    'finance.huanqiu.com',
    'cul.huanqiu.com',
    'world.huanqiu.com',
    'china.huanqiu.com',
    'mil.huanqiu.com',
    'taiwan.huanqiu.com',
    'opinion.huanqiu.com',
    'finance.huanqiu.com',
    'tech.huanqiu.com',
    'auto.huanqiu.com',
    'art.huanqiu.com',
    'go.huanqiu.com',
    'health.huanqiu.com',
    'sports.huanqiu.com',
    'quality.huanqiu.com',
    'bigdata.huanqiu.com',
    'look.huanqiu.com',
    'chamber.huanqiu.com',
    'biz.huanqiu.com',
  ],
};
