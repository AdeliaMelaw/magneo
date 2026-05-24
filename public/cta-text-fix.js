(function () {
  var FROM = 'Request a free audit';
  var TO = 'Let\u2019s Talk';

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

  function boot() {
    replaceCtaText(document.body);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes && mutation.addedNodes.forEach(function (node) {
            replaceCtaText(node);
          });
          if (mutation.type === 'characterData') replaceInTextNode(mutation.target);
        });
      });
      observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    }
    window.setInterval(function () { replaceCtaText(document.body); }, 1000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
