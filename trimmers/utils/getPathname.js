function getPathname(url) {
  let pathname = url.pathname.slice(1);
  if (pathname.length === 0) return [];
  while (pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, -1);
  }
  return pathname.split('/');
}

module.exports = getPathname;
