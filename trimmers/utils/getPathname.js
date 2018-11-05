function getPathname(url) {
  let pathname = url.pathname.slice(1);
  while (pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, -1);
  }
  return pathname.split('/');
}

module.exports = getPathname;
