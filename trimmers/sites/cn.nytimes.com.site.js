const { removeAllQueries, removeHash, useHttps } = require('../tools');

async function cnNewYorkTimesTrimmer (url) {
    useHttps(url);
    removeHash(url);
    removeAllQueries(url);

    return url;
}

module.exports = {
trimmer: cnNewYorkTimesTrimmer,
domains: ['cn.nytimes.com'],
};