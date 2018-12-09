const { removeAllQueries, removeHash, useHttps } = require('../../tools');
const { getPathname, setPathname } = require('../../utils');
async function eastdayTrimmer(url) {
  useHttps(url);
  removeAllQueries(url);
  removeHash(url);
  const pathname = getPathname(url);
  if (pathname[pathname.length - 1].includes('_')) {
    pathname[pathname.length - 1] = pathname[pathname.length - 1].split('_')[0] + '.html';
    setPathname(url, pathname);
  }
  return url;
}
module.exports = {
  trimmer: eastdayTrimmer,
  domains: [
    'dangjian.eastday.com',
    'news.eastday.com',
    'shzw.eastday.com',
    'pinglun.eastday.com',
    'sh.eastday.com',
    'city.eastday.com',
    'world.eastday.com',
    'china.eastday.com',
    'enjoy.eastday.com',
    'finance.eastday.com',
    'imedia.eastday.com',
    'history.eastday.com',
    'lysh.eastday.com',
    'panorama.eastday.com',
    'mil.021east.com',
    'people.eastday.com',
    'gov.eastday.com',
    'edu.eastday.com',
    'me.eastday.com',
    'canada.eastday.com',
    'www.spcsc.sh.cn',
    'www.shtzb.org.cn',
    'sh.eastday.com',
    'finance.eastday.com',
    'liuxue.eastday.com',
    'sjj.eastday.com',
    'life.eastday.com',
    'kid.eastday.com',
    'www.smwhj.org.cn',
    'qiye.eastday.com'],
};
