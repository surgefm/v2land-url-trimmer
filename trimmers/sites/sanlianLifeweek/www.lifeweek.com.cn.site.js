const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');

function sanlianLifeweekUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.lifeweek.com.cn';
  return url;
}

module.exports = {
  trimmer: sanlianLifeweekUrlTrimmer,
  domains: ['lifeweek.com.cn', 'www.lifeweek.com.cn'],
};
