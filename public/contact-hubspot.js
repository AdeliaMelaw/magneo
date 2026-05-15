(function () {
  var HUBSPOT_SRC = 'https://js-na3.hsforms.net/forms/embed/v2.js';
  var PORTAL_ID = '342767601';
  var FORM_ID = '46c6b70f-b1ee-4907-a137-be8b2faff1e8';
  var REGION = 'na3';

  function isContactPage() {
    return window.location.pathname.replace(/\/+$/, '') === '/contact';
  }

  function loadHubSpot(callback) {
    if (window.hbspt && window.hbspt.forms) {
      callback();
      return;
    }
    var existing = document.querySelector('script[src="' + HUBSPOT_SRC + '"]');
    if (existing) {
      existing.addEventListener('load', callback, { once: true });
      return;
    }
    var script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = HUBSPOT_SRC;
    script.onload = callback;
    document.head.appendChild(script);
  }

  function mountForm() {
    if (!isContactPage()) return false;
    var form = document.querySelector('.form');
    if (!form || form.dataset.hubspotReady === 'true') return false;
    form.dataset.hubspotReady = 'true';
    form.innerHTML = '<div class="hubspot-form" id="hubspot-contact-form"></div>';
    loadHubSpot(function () {
      if (!window.hbspt || !window.hbspt.forms) return;
      var target = document.querySelector('#hubspot-contact-form');
      if (!target || target.dataset.rendered === 'true') return;
      target.dataset.rendered = 'true';
      window.hbspt.forms.create({
        portalId: PORTAL_ID,
        formId: FORM_ID,
        region: REGION,
        target: '#hubspot-contact-form'
      });
    });
    return true;
  }

  function boot() {
    mountForm();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      mountForm();
      if (attempts > 50) window.clearInterval(timer);
    }, 100);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(mountForm);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 7000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
