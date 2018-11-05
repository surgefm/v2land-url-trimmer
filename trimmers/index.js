const fs = require('fs');
const path = require('path');
const siteTrimmerPaths = fs.readdirSync(path.resolve(__dirname, './sites'));

const siteTrimmers = {};
for (const path of siteTrimmerPaths) {
  if (path.slice(-8) === '.site.js') {
    const { domains, trimmer } = require(`./sites/${path}`);
    for (const domain of domains) {
      siteTrimmers[domain] = trimmer;
    }
  }
}

module.exports = siteTrimmers;
