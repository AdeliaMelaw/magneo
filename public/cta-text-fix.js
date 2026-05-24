(function () {
  var FROM = 'Request a free audit';
  var TO = 'Let\u2019s Talk';
  var GUIDE_HREF = '/personal-branding-ultimate-guide-legal-professionals';
  var GUIDE_LABEL = 'Free Branding Guide';

  function replaceInTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    if (!node.nodeValue || node.nodeValue.indexOf(FROM) === -1) return;
    node.nodeValue = node.nodeValue.split(FROM).join(TO);
  }

  function replaceCtaText(root) {
    var scope = root && root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if (!scope) return;

    if (scope.childNodes) {
      scope.childNodes.forEach(function (child) {
        if (child.nodeType === Node.TEXT_NODE) replaceInTextNode(child);
      });
    }

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
      '  min-height:auto;',
      '  padding:10px 18px;',
      '  border-radius:10px;',
      '  background:#fff;',
      '  color:#111324 !important;',
      '  font-family:var(--display), Georgia, serif;',
      '  font-size:14px;',
      '  font-weight:700;',
      '  letter-spacing:.15px;',
      '  text-transform:uppercase;',
      '  line-height:1;',
      '  box-shadow:0 10px 24px rgba(0,0,0,.18);',
      '}',
      '.nav-links .free-branding-guide-link:hover{background:var(--mg);color:#1d3000 !important}',
      '@media(max-width:1050px){',
      '  .nav-links .free-branding-guide-link{display:inline-flex;align-self:flex-start;margin:4px 0;padding:12px 16px}',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function ensureGuideLink() {
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
    }

    if (contact) {
      if (existing.nextElementSibling !== contact) navLinks.insertBefore(existing, contact);
    } else if (!existing.parentNode) {
      navLinks.appendChild(existing);
    }
  }

  function boot() {
    replaceCtaText(document.body);
    ensureGuideLink();
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes && mutation.addedNodes.forEach(function (node) {
            replaceCtaText(node);
          });
          if (mutation.type === 'characterData') replaceInTextNode(mutation.target);
        });
        ensureGuideLink();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }
    window.setInterval(function () {
      replaceCtaText(document.body);
      ensureGuideLink();
    }, 1000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
