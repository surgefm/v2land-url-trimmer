const { URL } = require('url');
async function userGuanchaTrimmer(url) {
  return new URL(`https://user.guancha.cn/main/content?id=${url.searchParams.get('id')}`);
}
module.exports = {
  trimmer: userGuanchaTrimmer,
  domains: ['user.guancha.cn'],
};
