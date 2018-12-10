const agent = require('superagent');
const { userAgent } = require('../../../config');

async function scmpShortLinkTrimmer(url) {
  const topTrimmer = require('../../../index').trim;

  let found;
  try {
    await agent.get(url.toString()).set('user-agent', userAgent).redirects(1);
  } catch (err) {
    if (err.status === 301) {
      found = true;
      const realUrl = err.response.headers.location;
      return await topTrimmer(realUrl);
    }
  }

  if (!found) {
    return url;
  }
}

module.exports = {
  trimmer: scmpShortLinkTrimmer,
  domains: ['sc.mp'],
};
