const { URL } = require('url');
const siteTrimmers = require('./trimmers');

async function urlTrimmer(inputUrl) {
  let url = new URL(inputUrl);
  if (siteTrimmers[url.hostname]) {
    url = await siteTrimmers[url.hostname](url);
  } else if (url.hostname.slice(0, 4) === 'www.' &&
    siteTrimmers[url.hostname.slice(4)]) {
    url = await siteTrimmers[url.hostname](url);
  }

  return url.toString();
}

module.exports = urlTrimmer;
