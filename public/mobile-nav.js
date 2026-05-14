(function () {
  function initMobileNav() {
    var nav = document.querySelector('.nav');
    if (!nav || nav.dataset.mobileNavReady === 'true') return false;

    var brand = nav.querySelector('.brand');
    var links = nav.querySelector('.nav-links');
    if (!brand || !links) return false;

    nav.dataset.mobileNavReady = 'true';

    var button = document.createElement('button');
    button.className = 'nav-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Open menu');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span></span><span></span><span></span>';
    brand.insertAdjacentElement('afterend', button);

    function isMobile() {
      return window.matchMedia('(max-width: 1050px)').matches;
    }

    function setOpen(open) {
      nav.classList.toggle('nav--open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.documentElement.classList.toggle('nav-lock', open);
      if (!open) {
        nav.querySelectorAll('.nav-item--open').forEach(function (item) {
          item.classList.remove('nav-item--open');
        });
      }
    }

    button.addEventListener('click', function () {
      setOpen(!nav.classList.contains('nav--open'));
    });

    links.addEventListener('click', function (event) {
      var target = event.target.closest('a');
      if (!target) return;

      if (isMobile() && target.classList.contains('nav-trigger')) {
        var item = target.closest('.nav-item');
        if (item && !item.classList.contains('nav-item--open')) {
          event.preventDefault();
          item.classList.add('nav-item--open');
          return;
        }
      }

      setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (!isMobile()) setOpen(false);
    });

    return true;
  }

  function bootMobileNav() {
    if (initMobileNav()) return;

    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (initMobileNav() || attempts > 40) window.clearInterval(timer);
    }, 100);

    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function () {
        if (initMobileNav()) observer.disconnect();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 6000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootMobileNav);
  } else {
    bootMobileNav();
  }
})();
