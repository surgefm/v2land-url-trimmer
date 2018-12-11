const { removeAllQueries, removeHash, useHttp } = require('../../tools');
async function gmwTrimmer(url) {
  useHttp(url);
  removeAllQueries(url);
  removeHash(url);

  return url;
}
module.exports = {
  trimmer: gmwTrimmer,
  domains: [
    'cm.health.gmw.cn',
    'culture.gmw.cn',
    'dangjian.gmw.cn',
    'difang.gmw.cn',
    'e.gmw.cn',
    'economy.gmw.cn',
    'edu.gmw.cn',
    'en.gmw.cn',
    'finance.gmw.cn',
    'gongyi.gmw.cn',
    'guancha.gmw.cn',
    'health.gmw.cn',
    'interview.gmw.cn',
    'it.gmw.cn',
    'kepu.gmw.cn',
    'lady.gmw.cn',
    'legal.gmw.cn',
    'life.gmw.cn',
    'meiwen.gmw.cn',
    'mil.gmw.cn',
    'museum.gmw.cn',
    'news.gmw.cn',
    'photo.gmw.cn',
    'pic.gmw.cn',
    'politics.gmw.cn',
    'reader.gmw.cn',
    'shipin.gmw.cn',
    'shuhua.gmw.cn',
    'sports.gmw.cn',
    'tech.gmw.cn',
    'theory.gmw.cn',
    'travel.gmw.cn',
    'v.gmw.cn',
    'wenyi.gmw.cn',
    'world.gmw.cn',
    'www.gmw.cn',
    'yangsheng.gmw.cn',
  ],
};
