const { removeAllQueries, useHttp } = require('../../tools');
const { URL } = require('url');

async function infzmTrimmer(url) {
  useHttp(url);
  removeAllQueries(url);
  return new URL(url.toString().replace('/wap/#', ''));
}

module.exports = {
  trimmer: infzmTrimmer,
  domains: ['www.infzm.com'],
};
