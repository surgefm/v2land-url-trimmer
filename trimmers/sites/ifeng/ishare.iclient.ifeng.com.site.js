const { removeAllQueriesExcept, removeHash, useHttps } = require('../../tools');
const { getPathname } = require('../../utils');
const agent = require('superagent');
const cheerio = require('cheerio');
const iFengNewsUrlTrimmer = require('./news.ifeng.com.site').trimmer;
const { URL } = require('url');
const validator = require('validator');

async function mobileIFengUrlTrimmer(url) {
  removeAllQueriesExcept(url, ['aid', 'id']);
  useHttps(url);
  removeHash(url);
  const pathname = getPathname(url);
  if (pathname.length) {
    if (pathname[0] === 'shareNews') {
      const response = await agent.get(url.toString());
      const text = response.text;
      let index = text.indexOf(`commentsUrl = '`);
      if (index) {
        let realUrl = '';
        index += 15;
        while (text[index] !== `'`) {
          realUrl += text[index++];
        }
        if (validator.isURL(realUrl)) {
          return iFengNewsUrlTrimmer(new URL(realUrl));
        }
      }

      const $ = cheerio.load(text);
      let date = $('.n-i-time')[0].children[0].data.split(' ')[0];
      date = date.split('/').join('');
      const uid = url.searchParams.get('aid').slice(-8);
      const realUrl = `https://news.ifeng.com/a/${date}/${uid}_0.shtml`;
      const test = await agent.get(realUrl.toString());
      const test$ = cheerio.load(test.text);
      if (test$('title')[0].children[0].data.includes($('title')[0].children[0].data)) {
        return iFengNewsUrlTrimmer(new URL(realUrl));
      }
    // 凤凰大风号
    } else if (pathname.join('/') === 'xvotr/news/shareNews') {
      const uid = url.searchParams.get('aid').slice(4);
      const realUrl = `https://wemedia.ifeng.com/${uid}/wemedia.shtml`;
      return iFengNewsUrlTrimmer(new URL(realUrl));
    }
  }

  return url;
}

module.exports = {
  trimmer: mobileIFengUrlTrimmer,
  domains: ['share.iclient.ifeng.com', 'ishare.iclient.ifeng.com'],
};
