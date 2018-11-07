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

  const names = [];
  for (const key of url.searchParams.keys()) {
    names.push(key);
  }

  for (const name of names) {
    if (!keys.includes(name)) {
      url.searchParams.delete(name);
    }
  };

  return url;
}

module.exports = removeAllQueriesExcept;
