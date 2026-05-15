(function () {
  function isServicePage() {
    var path = window.location.pathname;
    return path.indexOf('/services/') === 0 && path !== '/services/' && path.indexOf('/services/ai-powered-digital-marketing/') !== 0;
  }

  function moveProcessAfterResults() {
    if (!isServicePage()) return false;
    var main = document.querySelector('main');
    if (!main) return false;

    var depth = main.querySelector('.service-depth');
    var process = main.querySelector('.process');
    var processSection = process && process.closest('section');
    if (!depth || !processSection) return false;

    var resultBlock = Array.prototype.find.call(depth.querySelectorAll('.sd-block'), function (block) {
      return block.textContent.indexOf('What clients typically see') !== -1;
    });
    if (!resultBlock) return false;

    if (resultBlock.nextElementSibling === processSection) return true;

    processSection.classList.add('process-after-results');
    resultBlock.insertAdjacentElement('afterend', processSection);
    return true;
  }

  function boot() {
    moveProcessAfterResults();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      moveProcessAfterResults();
      if (attempts > 80) window.clearInterval(timer);
    }, 100);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(moveProcessAfterResults);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 10000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
