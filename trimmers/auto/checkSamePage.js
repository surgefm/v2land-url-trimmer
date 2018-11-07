const agent = require('superagent');
const cheerio = require('cheerio');

async function checkSamePage(url, originalTitle) {
  const response = await agent.get(url.toString());
  const $ = cheerio.load(response.text);
  const title = $('title')[0].children[0].data;
  return title === originalTitle;
}

module.exports = checkSamePage;
