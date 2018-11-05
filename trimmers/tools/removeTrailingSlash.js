function removeTrailingSlash(url) {
  while (url.pathname[url.pathname.length - 1] === '/') {
    url.pathname = url.pathname.slice(0, -1);
  } 
  return url;
}

module.exports = removeTrailingSlash;
