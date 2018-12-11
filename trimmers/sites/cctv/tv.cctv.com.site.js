const { removeAllQueries, removeHash, useHttp } = require('../../tools');
const { getPathname } = require('../../utils');
const { URL } = require('url');
const { mobileUserAgent } = require('../../../config');
const agent = require('superagent');
const cheerio = require('cheerio');
async function tvCCTVTrimmer(url) {
  useHttp(url);
  removeHash(url);
  removeAllQueries(url);
  const pathname = getPathname(url);
  if (pathname[0] === 'v') {
    const response = await agent.get(url.toString()).set('user-agent', mobileUserAgent);
    const text = response.text;
    const $ = cheerio.load(text);
    const p = $('#updatetime');
    const time = p.text().split(' ')[0].split('：')[1];
    const arr = time.split('-');
    const year = arr[0];
    const month = arr[1];
    const day = arr[2];

    const id = pathname[pathname.length - 1].replace('.html', '');

    return new URL(`http://tv.cctv.com/${year}/${month}/${day}/${id}.shtml`);
  }

  return url;
}
module.exports = {
  trimmer: tvCCTVTrimmer,
  domains: ['tv.cctv.com'],
};
