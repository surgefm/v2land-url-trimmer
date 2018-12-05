const fs = require('fs');
const path = require('path');
const siteTrimmerPaths = fs.readdirSync(path.resolve(__dirname, './sites'));

const siteTrimmers = {};
for (const p of siteTrimmerPaths) {
  const filePath = path.resolve(__dirname, './sites', p);
  const stat = fs.statSync(filePath);
  if (stat.isFile() && p.slice(-8) === '.site.js') {
    const { domains, trimmer } = require(`./sites/${p}`);
    for (const domain of domains) {
      siteTrimmers[domain] = trimmer;
    }
  } else if (stat.isDirectory()) {
    const paths = fs.readdirSync(filePath);
    for (const item of paths) {
      siteTrimmerPaths.push(`${p}/${item}`);
    }
  }
}

module.exports = siteTrimmers;
