const testcases = require('./testcases');
const trimmer = require('../index');
const expect = require('expect');

describe('Test URL trimmer', async function() {
  for (const testcase of Object.keys(testcases)) {
    it('#url: ' + testcase, async function() {
      const result = await trimmer(testcase);
      console.log(result);
      expect(result).toEqual(testcases[testcase]);
    }).timeout(10000);
  }
});
