(function () {
  function closeAllMegaMenus(event) {
    var closeButton = event.target && event.target.closest && event.target.closest('.mega-close');
    if (!closeButton) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();

    var nav = document.querySelector('.nav');
    if (!nav) return;

    nav.classList.add('mega-hard-closed');
    nav.querySelectorAll('.nav-item').forEach(function (item) {
      item.classList.add('mega-dismissed');
    });
    nav.querySelectorAll('.mega').forEach(function (mega) {
      mega.style.setProperty('display', 'none', 'important');
      mega.style.setProperty('opacity', '0', 'important');
      mega.style.setProperty('visibility', 'hidden', 'important');
      mega.style.setProperty('pointer-events', 'none', 'important');
    });
  }

  function reopenFromTrigger(event) {
    var trigger = event.target && event.target.closest && event.target.closest('.nav-trigger');
    if (!trigger) return;
    var nav = document.querySelector('.nav');
    if (!nav) return;
    nav.classList.remove('mega-hard-closed');
    nav.querySelectorAll('.nav-item').forEach(function (item) {
      item.classList.remove('mega-dismissed');
    });
    nav.querySelectorAll('.mega').forEach(function (mega) {
      mega.style.removeProperty('display');
      mega.style.removeProperty('opacity');
      mega.style.removeProperty('visibility');
      mega.style.removeProperty('pointer-events');
    });
  }

  function internalUrl(link) {
    try {
      return new URL(link.getAttribute('href'), window.location.origin);
    } catch (error) {
      return null;
    }
  }

  function loadInternalLinkNormally(event) {
    var link = event.target && event.target.closest && event.target.closest('.mega a[href], .mega-link[href], .brand[href], .nav-links > a[href]');
    if (!link) return;
    if (link.classList && link.classList.contains('nav-trigger')) return;

    var url = internalUrl(link);
    if (!url || url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash === window.location.hash) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    window.location.href = url.pathname + url.search + url.hash;
  }

  function loadScriptOnce(flag, src) {
    if (window[flag]) return;
    window[flag] = true;
    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  }

  function loadEnhancementScripts() {
    loadScriptOnce('__magneoIndustryDepthLoaded', '/industry-depth.js');
    loadScriptOnce('__magneoHomepageSectionsLoaded', '/homepage-sections.js');
  }

  function homepageWatchdog() {
    if (window.location.pathname !== '/') return;
    window.setTimeout(function () {
      var root = document.getElementById('root');
      var hasContent = root && root.textContent && root.textContent.trim().length > 30;
      if (hasContent) {
        try { sessionStorage.removeItem('magneo-home-reload'); } catch (error) {}
        return;
      }
      var alreadyReloaded = false;
      try { alreadyReloaded = sessionStorage.getItem('magneo-home-reload') === '1'; } catch (error) {}
      if (alreadyReloaded) return;
      try { sessionStorage.setItem('magneo-home-reload', '1'); } catch (error) {}
      window.location.reload();
    }, 2200);
  }

  document.addEventListener('click', loadInternalLinkNormally, true);
  document.addEventListener('click', closeAllMegaMenus, true);
  document.addEventListener('pointerdown', closeAllMegaMenus, true);
  document.addEventListener('mouseover', reopenFromTrigger, true);
  document.addEventListener('focusin', reopenFromTrigger, true);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadEnhancementScripts);
    document.addEventListener('DOMContentLoaded', homepageWatchdog);
  } else {
    loadEnhancementScripts();
    homepageWatchdog();
  }
})();
