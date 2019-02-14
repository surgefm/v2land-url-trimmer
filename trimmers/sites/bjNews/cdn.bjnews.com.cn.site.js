const { removeAllQueries, useHttps } = require('../../tools');
const { URL } = require('url');

function bjNewsShareUrlTrimmer(url) {
  const str = url.toString();
  let hash;
  const hashIndex = str.indexOf('#');
  if (hashIndex > 0) {
    const end = str.slice(hashIndex).indexOf('?');
    hash = str.slice(hashIndex, end >= 0 ? end : str.length);
  }
  url = new URL(str.slice(0, hashIndex) + (hash || ''));
  useHttps(url);
  removeAllQueries(url);
  url.host = 'cdn.bjnews.com.cn';
  return url;
}

module.exports = {
  trimmer: bjNewsShareUrlTrimmer,
  domains: ['cdn.bjnews.com.cn'],
};
