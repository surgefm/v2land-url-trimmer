const fs = require('fs').promises;
const getFilename = require('./getFilename');
const path = require('path');

async function saveRule(url, ruleMethodList, ruleQueryRemoveList, ruleQueryPreserveList) {
  let str = '';
  for (const method of ruleMethodList) {
    str += `method:${method}\n`;
  }
  for (const query of ruleQueryRemoveList) {
    str += `query:remove:${query}\n`;
  }
  for (const query of ruleQueryPreserveList) {
    str += `query:preserve:${query}\n`;
  }
  
  await fs.writeFile(path.resolve(__dirname, 'rules', getFilename(url)), str);
}

module.exports = saveRule;
