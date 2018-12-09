const { removeAllQueries, removeHash, removeTrailingSlash, useHttp } = require('../../tools');

function caixinUrlTrimmer(url) {
  removeHash(url);
  useHttp(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: caixinUrlTrimmer,
  domains: [
    'www.caixin.com',
    'economy.caixin.com',
    'finance.caixin.com',
    'companies.caixin.com',
    'china.caixin.com',
    'international.caixin.com',
    'opinion.caixin.com',
    'culture.caixin.com',
    'blog.caixin.com',
    'weekly.caixin.com',
    'photos.caixin.com',
    'video.caixin.com',
    'english.caixin.com',
    'datanews.caixin.com',
    'topics.caixin.com',
    'special.caixin.com',
    'gbiz.caixin.com',
    'cnreform.caixin.com',
    'bijiao.caixin.com',
    'nei.caixin.com',
  ],
};
