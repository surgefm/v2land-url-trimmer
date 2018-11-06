const removeAllQueries = require('./removeAllQueries');

function removeAllQueriesExcept(url, keys = []) {
  if (typeof keys === 'string') {
    keys = [keys];
  }

  if (!url.searchParams) {
    return url;
  }

  if (keys.length === 0) {
    return removeAllQueries(url);
  }

  url.searchParams.forEach((value, name) => {
    if (!keys.includes(name)) {
      url.searchParams.remove(name);
    }
  });

  return url;
}

module.exports = removeAllQueriesExcept;
