const agent = require('superagent');

async function TcnURLTrimmer(url) {
  const topTrimmer = require('../../../index.js');
  let found;
  try {
    await agent.get(url.toString()).redirects(false);
  } catch (err) {
    if (err.status === 302) {
      found = true;
      const realUrl = err.response.header.location;
      return topTrimmer(realUrl);
    }
  }

  if (!found) {
    return url;
  }
}

module.exports = {
  domains: ['t.cn'],
  trimmer: TcnURLTrimmer,
};
