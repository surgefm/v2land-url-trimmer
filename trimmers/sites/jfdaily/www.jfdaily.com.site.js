const { removeHash, useHttps } = require('../../tools');
const { URL } = require('url');
async function jfdailyTrimmer(url) {
  removeHash(url);
  useHttps(url);
  return new URL(`https://www.jfdaily.com/news/detail?id=${url.searchParams.get('id')}`)
}
module.exports = {
  trimmer: jfdailyTrimmer,
  domains: [
    'www.jfdaily.com',
    'web.shobserver.com',
  ],
};