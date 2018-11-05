const agent = require('superagent');
async function TcnURLTrimmer(url) {
  const topTrimmer = require('../../index.js');
  const callback = await agent.get(url.toString());
  return topTrimmer(callback.redirects[0]);
}

module.exports = {
  domains: ['t.cn'],
  trimmer: TcnURLTrimmer,
};
