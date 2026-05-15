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

  function loadMegaLinkNormally(event) {
    var link = event.target && event.target.closest && event.target.closest('.mega a[href], .mega-link[href]');
    if (!link) return;

    var url;
    try {
      url = new URL(link.getAttribute('href'), window.location.origin);
    } catch (error) {
      return;
    }

    if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    window.location.href = url.pathname + url.search + url.hash;
  }

  function loadIndustryDepth() {
    if (window.__magneoIndustryDepthLoaded) return;
    window.__magneoIndustryDepthLoaded = true;
    var script = document.createElement('script');
    script.src = '/industry-depth.js';
    script.defer = true;
    document.head.appendChild(script);
  }

  document.addEventListener('click', loadMegaLinkNormally, true);
  document.addEventListener('click', closeAllMegaMenus, true);
  document.addEventListener('pointerdown', closeAllMegaMenus, true);
  document.addEventListener('mouseover', reopenFromTrigger, true);
  document.addEventListener('focusin', reopenFromTrigger, true);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadIndustryDepth);
  else loadIndustryDepth();
})();
