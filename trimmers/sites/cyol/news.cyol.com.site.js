const { trimmer } = require('./shareapp.cyol.com.site');
const { URL } = require('url');

async function cyolNewsUrlTrimmer(url) {
  const { searchParams } = url;
  const type = searchParams.get('para1');
  const month = searchParams.get('para2');
  const date = searchParams.get('para3');
  const uid = searchParams.get('urlId');
  if (!(type && month && date && uid)) {
    url.host = 'news.cyol.com';
    return url;
  }

  const newUrl = new URL(`https://shareapp.cyol.com/cmsfile/${type}/${month}/${date}/share${uid}.html`);

  return trimmer(newUrl);
}

module.exports = {
  trimmer: cyolNewsUrlTrimmer,
  domains: ['news.cyol.com', 'm.cyol.com'],
};
