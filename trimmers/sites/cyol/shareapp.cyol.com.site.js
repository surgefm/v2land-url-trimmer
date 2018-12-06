const { removeAllQueries, removeHash, useHttps } = require('../../tools');
const { getPathname } = require('../../utils');
const { URL } = require('url');
const cyolZQBUrlTrimmer = require('./zqb.cyol.com.site').trimmer;

async function cyolShareUrlTrimmer(url) {
  removeAllQueries(url);
  removeHash(url);
  useHttps(url);
  url.host = 'shareapp.cyol.com';

  const pathname = getPathname(url);
  if (pathname.slice(0, 5).join('/') === 'cmsfile/cms_json/zqzx/Newspaper/2') {
    const date = pathname[5].split('-');
    const id = pathname[7].replace('.html', '.htm');
    const newUrl = new URL(`http://zqb.cyol.com/html/${date[0]}-${date[1]}/${date[2]}/${id}`);
    return cyolZQBUrlTrimmer(newUrl);
  }

  return url;
}

module.exports = {
  trimmer: cyolShareUrlTrimmer,
  domains: ['shareapp.cyol.com'],
};
