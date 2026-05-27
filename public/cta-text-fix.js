(function () {
  var FROM = 'Request a free audit';
  var TO = 'Let\u2019s Talk';
  var GUIDE_HREF = '/personal-branding-ultimate-guide-legal-professionals';
  var GUIDE_LABEL = 'Law Firm Growth Guide';
  var guideScheduled = false;

  function replaceInTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    if (!node.nodeValue || node.nodeValue.indexOf(FROM) === -1) return;
    node.nodeValue = node.nodeValue.split(FROM).join(TO);
  }

  function replaceCtaText(root) {
    var scope = root && root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if (!scope) return;

    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        return node.nodeValue && node.nodeValue.indexOf(FROM) !== -1
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceInTextNode);
  }

  function ensureGuideStyle() {
    if (document.getElementById('free-branding-guide-nav-style')) return;
    var style = document.createElement('style');
    style.id = 'free-branding-guide-nav-style';
    style.textContent = [
      '.nav-links .free-branding-guide-link{',
      '  display:flex;',
      '  align-items:center;',
      '  min-height:68px;',
      '  padding:0;',
      '  border-radius:0;',
      '  background:transparent;',
      '  color:rgba(255,255,255,.72) !important;',
      '  font-family:var(--body), system-ui, sans-serif;',
      '  font-size:14px;',
      '  font-weight:400;',
      '  letter-spacing:0;',
      '  text-transform:none;',
      '  line-height:1;',
      '  box-shadow:none;',
      '}',
      '.nav-links .free-branding-guide-link:hover{background:transparent;color:white !important}',
      '@media(max-width:1050px){',
      '  .nav-links .free-branding-guide-link{min-height:auto;padding:8px 0;align-self:auto;margin:0}',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function ensureGuideLinkNow() {
    guideScheduled = false;
    ensureGuideStyle();
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    var existing = navLinks.querySelector('.free-branding-guide-link');
    var contact = Array.from(navLinks.querySelectorAll('a')).find(function (link) {
      return link.getAttribute('href') === '/contact/' || link.textContent.trim().toLowerCase() === 'contact';
    });

    if (!existing) {
      existing = document.createElement('a');
      existing.className = 'free-branding-guide-link';
      existing.href = GUIDE_HREF;
      existing.textContent = GUIDE_LABEL;
    } else {
      if (existing.getAttribute('href') !== GUIDE_HREF) existing.setAttribute('href', GUIDE_HREF);
      if (existing.textContent !== GUIDE_LABEL) existing.textContent = GUIDE_LABEL;
    }

    if (contact && existing.nextElementSibling !== contact) {
      navLinks.insertBefore(existing, contact);
    } else if (!contact && !existing.parentNode) {
      navLinks.appendChild(existing);
    }
  }

  function ensureGuideLink() {
    if (guideScheduled) return;
    guideScheduled = true;
    window.requestAnimationFrame(ensureGuideLinkNow);
  }

  function boot() {
    replaceCtaText(document.body);
    ensureGuideLink();
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function (mutations) {
        var shouldCheckGuide = false;
        mutations.forEach(function (mutation) {
          mutation.addedNodes && mutation.addedNodes.forEach(function (node) {
            replaceCtaText(node);
            if (node.nodeType === Node.ELEMENT_NODE && (node.matches('.nav-links') || node.querySelector('.nav-links'))) {
              shouldCheckGuide = true;
            }
          });
          if (mutation.type === 'characterData') replaceInTextNode(mutation.target);
        });
        if (shouldCheckGuide || !document.querySelector('.nav-links .free-branding-guide-link')) ensureGuideLink();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }
    window.setInterval(function () {
      replaceCtaText(document.body);
      if (!document.querySelector('.nav-links .free-branding-guide-link')) ensureGuideLink();
    }, 1500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
