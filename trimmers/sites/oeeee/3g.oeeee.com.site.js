const { URL } = require('url');
async function oeeee3gTrimmer(url) {
  const keyValues = url.searchParams.get('s').split('/');
  const keyValuesObj = {};
  for (let i = 1; i < keyValues.length; i++) {
    const element = keyValues[i];
    if (i % 2 === 0) {
      keyValuesObj[keyValues[i - 1]] = element;
    }
  }

  const date = new Date(keyValuesObj.ctime * 1000);

  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
  const yearAndMonth = date.getUTCFullYear().toString() + month;
  const day = ('0' + date.getUTCDate()).slice(-2);

  return new URL(`http://www.oeeee.com/html/${yearAndMonth}/${day}/${keyValuesObj.id}.html`);
}
module.exports = {
  trimmer: oeeee3gTrimmer,
  domains: ['3g.oeeee.com'],
};
