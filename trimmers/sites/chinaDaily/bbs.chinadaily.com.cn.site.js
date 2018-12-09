const { removeAllQueriesExcept, removeHash, removeTrailingSlash, useHttps } = require('../../tools');

function chinaDailyBBSUrlTrimmer(url) {
  removeHash(url);
  useHttps(url);
  removeAllQueriesExcept(url, ['mod', 'tid', 'gid', 'fid', 'uid']);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: chinaDailyBBSUrlTrimmer,
  domains: ['bbs.chinadaily.com.cn'],
};
