(function () {
  var GUIDE_PATH = '/personal-branding-ultimate-guide-legal-professionals';

  function isGuidePage() {
    return window.location.pathname.replace(/\/$/, '') === GUIDE_PATH;
  }

  function ensureNativeFormTarget() {
    if (!isGuidePage()) return;
    var firstField = document.querySelector('.magneo-guide-form input[name="firstname"]');
    if (!firstField) return;
    var oldTarget = document.getElementById('guide-form');
    if (oldTarget && oldTarget !== firstField) oldTarget.id = 'guide-form-section';
    firstField.id = 'guide-form';
    document.documentElement.dataset.guideInteractionVersion = '20260914-v2';
  }

  function activateGuideForm(event) {
    ensureNativeFormTarget();
    var firstField = document.getElementById('guide-form');
    if (!firstField) return true;
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    firstField.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(function () { firstField.focus({ preventScroll: true }); }, reduceMotion ? 0 : 450);
    return false;
  }

  window.magneoGuideFormCta = activateGuideForm;
  ensureNativeFormTarget();
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href="#guide-form"]');
    if (link && isGuidePage()) activateGuideForm(event);
  }, true);
  new MutationObserver(ensureNativeFormTarget).observe(document.documentElement, { childList: true, subtree: true });
})();
