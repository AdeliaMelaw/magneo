(function () {
  var HUBSPOT_SRC = 'https://js-na3.hsforms.net/forms/embed/v2.js';
  var PORTAL_ID = '342767601';
  var FORM_ID = '46c6b70f-b1ee-4907-a137-be8b2faff1e8';
  var REGION = 'na3';

  function isContactPage() {
    return window.location.pathname.replace(/\/+$/, '') === '/contact';
  }

  function addContactStyles() {
    if (!isContactPage() || document.getElementById('magneo-contact-form-size')) return;
    var style = document.createElement('style');
    style.id = 'magneo-contact-form-size';
    style.textContent = [
      'body .form[data-hubspot-ready="true"]{max-width:880px!important;margin:0 auto!important;padding:34px!important;border-radius:22px!important}',
      'body #hubspot-contact-form{width:100%!important;max-width:760px!important;margin:0 auto!important}',
      'body #hubspot-contact-form iframe,body #hubspot-contact-form form{width:100%!important;max-width:100%!important}',
      'body #hubspot-contact-form .hs-form-field{max-width:100%!important}',
      'body #hubspot-contact-form input,body #hubspot-contact-form select,body #hubspot-contact-form textarea{max-width:100%!important}',
      '@media(max-width:900px){body .form[data-hubspot-ready="true"]{max-width:100%!important;padding:24px!important;border-radius:18px!important}body #hubspot-contact-form{max-width:100%!important}}',
      '@media(max-width:620px){body .form[data-hubspot-ready="true"]{padding:18px!important;margin-left:-2px!important;margin-right:-2px!important;border-radius:16px!important}body #hubspot-contact-form{font-size:15px!important}}'
    ].join('\n');
    document.head.appendChild(style);
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

  function removeContactRelatedLinks() {
    if (!isContactPage()) return;
    document.querySelectorAll('.related-section').forEach(function (section) {
      section.remove();
    });
  }

  function mountForm() {
    if (!isContactPage()) return false;
    addContactStyles();
    removeContactRelatedLinks();

    var form = document.querySelector('form.form, .form');
    if (!form) return false;
    if (form.dataset.hubspotReady === 'true' && document.querySelector('#hubspot-contact-form')) return true;

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
    addContactStyles();
    mountForm();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      addContactStyles();
      mountForm();
      removeContactRelatedLinks();
      if (attempts > 80) window.clearInterval(timer);
    }, 100);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function () {
        addContactStyles();
        mountForm();
        removeContactRelatedLinks();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 10000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
