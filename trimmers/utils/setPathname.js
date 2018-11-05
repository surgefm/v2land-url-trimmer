const getPathname = require('./getPathname');

function setPathname(url, pathname) {
  if (!pathname) {
    // The setter basically remove the trailing '/' in the original url.
    pathname = getPathname(url.pathname);
  }
  url.pathname = '/' + pathname.join('/');
  return url;
}

module.exports = setPathname;
