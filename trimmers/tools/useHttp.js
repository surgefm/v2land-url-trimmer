function useHttp(url) {
  url.protocol = 'http';
  return url;
}

module.exports = useHttp;
