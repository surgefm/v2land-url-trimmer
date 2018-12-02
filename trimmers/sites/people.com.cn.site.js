const { removeAllQueries, removeHash, useHttp } = require('../tools');
async function peopleNewsTrimmer(url) {
  useHttp(url);
  removeHash(url);
  removeAllQueries(url);

  return url;
}
module.exports = {
  trimmer: peopleNewsTrimmer,
  domains: [
    'news.people.com.cn',
    'politics.people.com.cn',
    'world.people.com.cn',
    'finance.people.com.cn',
    'tw.people.com.cn',
    'military.people.com.cn',
    'opinion.people.com.cn',
    'leaders.people.com.cn',
    'tv.people.com.cn',
    'renshi.people.com.cn',
    'theory.people.com.cn',
    'legal.people.com.cn',
    'society.people.com.cn',
    'industry.people.com.cn',
    'edu.people.com.cn',
    'kpzg.people.com.cn',
    'sports.people.com.cn',
    'culture.people.com.cn',
    'art.people.com.cn',
    'house.people.com.cn',
    'auto.people.com.cn',
    'health.people.com.cn',
    'scitech.people.com.cn',
  ],
};
