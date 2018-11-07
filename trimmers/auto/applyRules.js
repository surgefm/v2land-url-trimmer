async function applyRules(url, rules) {
  const ruleQueryPreserveList = [];
  const ruleQueryRemoveList = [];

  for (const rule of rules) {
    if (rule === '') break;
    const info = rule.split(':');
    if (info.length === 2 && info[0] === 'method') {
      url = require('../tools/' + info[1])(url);
    } else if (info.length === 3 && info[1] === 'remove') {
      url.searchParams.delete(info[2]);
      ruleQueryRemoveList.push(info[2]);
    } else if (info.length === 3 && info[1] === 'preserve') {
      ruleQueryPreserveList.push(info[2]);
    }
  }

  return { ruleQueryRemoveList, ruleQueryPreserveList };
}

module.exports = applyRules;
