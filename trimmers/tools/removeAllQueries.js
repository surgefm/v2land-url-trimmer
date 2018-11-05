function removeAllQueries(url) {
  url.search = '';
  return url;
}

module.exports = removeAllQueries;
