const { removeAllQueries, removeHash, removeTrailingSlash, useHttps, useHttp } = require('../../tools');

function neteaseNewsUrlTrimmer(url) {
  if (url.host === 'news.163.com') {
    useHttps(url);
  } else {
    useHttp(url);
  }
  removeHash(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: neteaseNewsUrlTrimmer,
  domains: [
    'news.163.com',
    'tech.163.com',
    'war.163.com',
    'gov.163.com',
    'sports.163.com',
    'ent.163.com',
    'money.163.com',
    'auto.163.com',
    'mobile.163.com',
    'digi.163.com',
    'lady.163.com',
    'travel.163.com',
    'house.163.com',
    'home.163.com',
    'read.163.com',
    'edu.163.com',
    'art.163.com',
    'media.163.com',
    'data.163.com',
    'renjian.163.com',
    'gongyi.163.com',
    'jiankang.163.com',
    'caipiao.163.com',
    'baoxian.163.com',
  ],
};
