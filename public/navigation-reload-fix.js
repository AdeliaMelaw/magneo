(function () {
  var routeGroups = [
    '/law-firm-marketing',
    '/financial-firm-marketing',
    '/healthcare-marketing',
    '/tech-company-marketing',
    '/services',
    '/industries',
    '/about',
    '/contact',
    '/personal-branding-ultimate-guide-legal-professionals'
  ];

  function isInternal(url) {
    return url.origin === window.location.origin && url.pathname !== window.location.pathname;
  }

  function shouldForceNormalLoad(url) {
    if (!url || url.origin !== window.location.origin) return false;
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash === window.location.hash) return false;
    if (/\.pdf$/i.test(url.pathname)) return false;
    return routeGroups.some(function (prefix) { return url.pathname.indexOf(prefix) === 0; }) || url.pathname === '/';
  }

  function go(url) {
    window.location.href = url.pathname + url.search + url.hash;
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    if ((link.getAttribute('target') || '').toLowerCase() === '_blank') return;
    if (link.hasAttribute('download')) return;

    var url;
    try {
      url = new URL(link.getAttribute('href'), window.location.origin);
    } catch (error) {
      return;
    }

    if (!shouldForceNormalLoad(url) && !isInternal(url)) return;
    if (!shouldForceNormalLoad(url)) return;
    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    go(url);
  }, true);

  function watchHistoryMethod(method) {
    var original = history[method];
    if (typeof original !== 'function') return;
    history[method] = function () {
      var before = window.location.pathname + window.location.search + window.location.hash;
      var result = original.apply(this, arguments);
      var after = window.location.pathname + window.location.search + window.location.hash;
      if (after !== before) {
        try {
          var url = new URL(window.location.href);
          if (routeGroups.some(function (prefix) { return url.pathname.indexOf(prefix) === 0; })) {
            window.setTimeout(function () { go(url); }, 0);
          }
        } catch (error) {}
      }
      return result;
    };
  }

  watchHistoryMethod('pushState');
  watchHistoryMethod('replaceState');
})();
