const { removeAllQueries, removeHash, removeTrailingSlash, useHttps } = require('../../tools');
const agent = require('superagent');
const { URL } = require('url');
const { userAgent } = require('../../../config');

async function iFengNewsUrlTrimmer(url) {
  // Get desktop url
  if (url.host === 'inews.ifeng.com') {
    const response = await agent.get(url.toString()).set('user-agent', userAgent);
    const text = response.text;
    let index = text.indexOf('"docUrl": ') + 11;
    let realUrl = '';
    while (text[index] !== '"') {
      realUrl += text[index++];
    }
    url = new URL(realUrl);
  }
  useHttps(url);
  removeHash(url);
  removeAllQueries(url);
  removeTrailingSlash(url);
  return url;
}

module.exports = {
  trimmer: iFengNewsUrlTrimmer,
  domains: [
    'news.ifeng.com',
    'ent.ifeng.com',
    'sports.ifeng.com',
    'finance.ifeng.com',
    'tech.ifeng.com',
    'culture.ifeng.com',
    'games.ifeng.com',
    'v.ifeng.com',
    'inews.ifeng.com',
    'wemedia.ifeng.com',
  ],
};
