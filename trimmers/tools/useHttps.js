function useHttps(url) {
  url.protocol = 'https';
  return url;
}

module.exports = useHttps;
