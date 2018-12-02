function removeQueries(url, keys = []) {
  if (typeof keys === 'string') {
    keys = [keys];
  }

  if (!url.searchParams) {
    return url;
  }

  for (const key of keys) {
    url.searchParams.delete(key);
  }

  return url;
}

module.exports = removeQueries;
