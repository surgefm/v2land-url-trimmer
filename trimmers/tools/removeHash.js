function removeAllQueries(url) {
  url.hash = '';
  return url;
}

module.exports = removeAllQueries;
