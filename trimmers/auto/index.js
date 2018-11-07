const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const rulePaths = fs.readdirSync(path.resolve(__dirname, './rules'));
const findRule = require('./findRule');
const getFilename = require('./getFilename');
const parseRule = require('./parseRule');

async function autoTrimmer(url) {
  const filename = getFilename(url);
  if (rulePaths.includes(filename)) {
    let rule = await fsPromises.readFile(path.resolve(__dirname, 'rules', filename));
    rule = parseRule(rule);
    return findRule(url, rule);
  } else {
    return findRule(url);
  }
}

module.exports = autoTrimmer;
