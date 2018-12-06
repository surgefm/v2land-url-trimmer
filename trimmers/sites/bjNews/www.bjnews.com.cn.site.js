const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');

function bjNewsUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  url.host = 'www.bjnews.com.cn';
  return url;
}

module.exports = {
  trimmer: bjNewsUrlTrimmer,
  domains: ['bjnews.com.cn', 'www.bjnews.com.cn'],
};
