(function () {
  var GUIDE_PATH = '/personal-branding-ultimate-guide-legal-professionals';

  function isGuidePage() {
    return window.location.pathname.replace(/\/$/, '') === GUIDE_PATH;
  }

  function activateGuideForm(event) {
    var formSection = document.getElementById('guide-form');
    if (!formSection) return true;
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    formSection.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(function () {
      var firstField = document.querySelector('.magneo-guide-form input[name="firstname"]');
      if (firstField) firstField.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 450);
    return false;
  }

  window.magneoGuideFormCta = activateGuideForm;
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href="#guide-form"]');
    if (link && isGuidePage()) activateGuideForm(event);
  }, true);
})();
