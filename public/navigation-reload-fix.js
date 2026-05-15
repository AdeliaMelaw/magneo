(function () {
  function isInternal(url) {
    return url.origin === window.location.origin && url.pathname !== window.location.pathname;
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('.mega a[href], .mega-link[href]');
    if (!link) return;

    var url;
    try {
      url = new URL(link.getAttribute('href'), window.location.origin);
    } catch (error) {
      return;
    }

    if (!isInternal(url)) return;
    event.preventDefault();
    window.location.href = url.pathname + url.search + url.hash;
  }, true);
})();
