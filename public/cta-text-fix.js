(function () {
  var FROM = 'Request a free audit';
  var TO = 'Let\u2019s Talk';
  var CONTACT_FORM_HREF = '/contact/#contact-form';
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

  function pointLetsTalkToForm(root) {
    var scope = root && root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if (!scope) return;
    scope.querySelectorAll('a, button').forEach(function (el) {
      var text = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (text !== 'let\u2019s talk' && text !== "let's talk") return;
      if (el.tagName === 'A') {
        el.setAttribute('href', CONTACT_FORM_HREF);
      } else {
        el.addEventListener('click', function () { window.location.href = CONTACT_FORM_HREF; }, { once: true });
      }
    });
  }

  function ensureContactFormAnchor() {
    if (window.location.pathname !== '/contact/' && window.location.pathname !== '/contact') return;
    var form = document.querySelector('.hbspt-form, .hs-form-frame, form.form, form');
    if (!form) return;
    var section = form.closest('section') || form.parentElement;
    if (!section) return;
    section.id = 'contact-form';
  }

  function scrollToContactFormHash() {
    if (window.location.hash !== '#contact-form') return;
    ensureContactFormAnchor();
    var target = document.getElementById('contact-form');
    if (!target) return;
    window.setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 250);
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
      '  color:var(--mg) !important;',
      '  font-family:var(--body), system-ui, sans-serif;',
      '  font-size:14px;',
      '  font-weight:400;',
      '  letter-spacing:0;',
      '  text-transform:none;',
      '  line-height:1;',
      '  box-shadow:none;',
      '}',
      '.nav-links .free-branding-guide-link:hover{background:transparent;color:var(--mg) !important}',
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

  function refresh(root) {
    replaceCtaText(root || document.body);
    pointLetsTalkToForm(root || document.body);
    ensureContactFormAnchor();
    scrollToContactFormHash();
  }

  function boot() {
    refresh(document.body);
    ensureGuideLink();
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function (mutations) {
        var shouldCheckGuide = false;
        mutations.forEach(function (mutation) {
          mutation.addedNodes && mutation.addedNodes.forEach(function (node) {
            refresh(node);
            if (node.nodeType === Node.ELEMENT_NODE && (node.matches('.nav-links') || node.querySelector('.nav-links'))) {
              shouldCheckGuide = true;
            }
          });
          if (mutation.type === 'characterData') replaceInTextNode(mutation.target);
        });
        pointLetsTalkToForm(document.body);
        ensureContactFormAnchor();
        if (shouldCheckGuide || !document.querySelector('.nav-links .free-branding-guide-link')) ensureGuideLink();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }
    window.addEventListener('hashchange', scrollToContactFormHash);
    window.setInterval(function () {
      refresh(document.body);
      if (!document.querySelector('.nav-links .free-branding-guide-link')) ensureGuideLink();
    }, 1500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
