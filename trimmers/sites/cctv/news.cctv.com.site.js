const { removeHash, useHttp, removeAllQueries } = require('../../tools');
const { getPathname } = require('../../utils');
const { URL } = require('url');
const agent = require('superagent');
async function newsCCTVTrimmer(url) {
  useHttp(url);
  removeHash(url);
  const pathname = getPathname(url);
  if (pathname[0] === 'm') {
    const id = url.searchParams.get('id');
    const response = await agent.get(`http://api.cntv.cn/Article/getXinwenNextArticleInfo?serviceId=sjnews&id=${id}`);

    const responseObject = JSON.parse(response.text);
    const time = responseObject.article_focus_date.split(' ')[0];
    const arr = time.split('-');
    const year = arr[0];
    const month = arr[1];
    const day = arr[2];


    return new URL(`http://${url.host}/${year}/${month}/${day}/${id}.shtml`);
  } else {
    removeAllQueries(url);
    removeHash(url);
  }
  return url;
}
module.exports = {
  trimmer: newsCCTVTrimmer,
  domains: [
    'xuexi.cctv.com',
    'news.cctv.com',
    'jingji.cctv.com',
    'military.cctv.com',
    'opinion.cctv.com',
    'sannong.cctv.com',
    'jiankang.cctv.com',
    'donghua.cctv.com',
    'arts.cctv.com',
  ],
};
