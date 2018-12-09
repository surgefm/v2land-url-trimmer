const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');

function caijingUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: caijingUrlTrimmer,
  domains: [
    'www.caijing.com.cn',
    'economy.caijing.com.cn',
    'stock.caijing.com.cn',
    'finance.caijing.com.cn',
    'industry.caijing.com.cn',
    'tech.caijing.com.cn',
    'auto.caijing.com.cn',
    'estate.caijing.com.cn',
    'politics.caijing.com.cn',
    'overseas.caijing.com.cn',
    'life.caijing.com.cn',
    'photos.caijing.com.cn',
    'comments.caijing.com.cn',
    'column.caijing.com.cn',
    'blog.caijing.com.cn',
    'magazine.caijing.com.cn',
    'english.caijing.com.cn',
    'm.caijing.com.cn',
  ],
};
