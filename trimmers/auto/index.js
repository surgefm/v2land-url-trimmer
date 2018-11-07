const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const rulePaths = fs.readdirSync(path.resolve(__dirname, './rules'));
const ruleFinder = require('./ruleFinder');
const { getPathname } = require('../utils');

async function autoTrimmer(url) {
  const { host, pathname } = url;
  const filename = `${host}.${pathname.join('-')}.rule`;
  if (rulePaths.includes(filename)) {
    const rule = await fsPromises.readFile(path.resolve(__dirname, 'rules', filename));
    console.log(rule);
  }
}

module.exports = autoTrimmer;
