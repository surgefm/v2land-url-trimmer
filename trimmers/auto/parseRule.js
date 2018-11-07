function parseRule(rule) {
  const rules = rule.toString().split('\n');
  return rules;
}

module.exports = parseRule;
