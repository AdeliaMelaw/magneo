(function () {
  var PAGE_PATH = '/personal-branding-ultimate-guide-legal-professionals';
  var PDF_URL = '/Personal-Branding-The-Ultimate-Guide-for-Legal-Professionals.pdf';

  function isGuidePage() {
    return window.location.pathname.replace(/\/$/, '') === PAGE_PATH;
  }

  function setMeta() {
    document.title = 'Personal Branding Guide for Legal Professionals | Magneo';
    var description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Download Magneo\'s personal branding guide for legal professionals and learn how to build authority, trust, and qualified demand.';
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca' + PAGE_PATH + '/';
  }

  function loadHubSpot() {
    if (!document.querySelector('script[src="https://js-na3.hsforms.net/forms/embed/342136473.js"]')) {
      var script = document.createElement('script');
      script.src = 'https://js-na3.hsforms.net/forms/embed/342136473.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }

  function revealDownload() {
    var box = document.querySelector('.guide-download-ready');
    if (!box) return;
    box.hidden = false;
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function render() {
    if (!isGuidePage()) return;
    setMeta();

    var main = document.querySelector('main');
    if (!main) return;
    if (main.dataset.guideRendered === 'true') return;
    main.dataset.guideRendered = 'true';

    main.innerHTML = '\
      <section class="guide-hero">\
        <div class="container guide-grid">\
          <div>\
            <div class="hero-tag"><span></span>Free guide for legal professionals</div>\
            <h1>Personal Branding: The Ultimate Guide for <em>Legal Professionals.</em></h1>\
            <p class="guide-intro">Build a credible personal brand that earns trust before the first consultation. This guide walks through positioning, LinkedIn authority, content strategy, reputation signals, and compliant visibility for lawyers and legal experts.</p>\
            <div class="guide-points">\
              <span>Authority positioning</span>\
              <span>LinkedIn growth</span>\
              <span>Trust-first content</span>\
              <span>Legal marketing guardrails</span>\
            </div>\
          </div>\
          <aside class="guide-form-card">\
            <div class="label">Download the guide</div>\
            <h2>Get the PDF</h2>\
            <p>Fill out the form and the download link will appear on this page.</p>\
            <div class="hs-form-frame" data-region="na3" data-form-id="ff7b6ed0-a222-476a-ac58-191ec4e0ab67" data-portal-id="342136473"></div>\
            <div class="guide-download-ready" hidden>\
              <strong>Your guide is ready.</strong>\
              <a class="btn" href="' + PDF_URL + '" target="_blank" rel="noopener">Download PDF</a>\
            </div>\
          </aside>\
        </div>\
      </section>\
      <section class="section guide-detail">\
        <div class="container">\
          <div class="label">Inside the guide</div>\
          <h2>A practical framework for becoming the trusted choice.</h2>\
          <div class="grid four">\
            <div class="card"><small>01</small><h3>Define your authority lane</h3><p>Clarify what you want to be known for, who you serve, and why your expertise matters.</p></div>\
            <div class="card"><small>02</small><h3>Build proof signals</h3><p>Use case themes, credentials, media, reviews, and content to increase confidence.</p></div>\
            <div class="card"><small>03</small><h3>Create repeatable content</h3><p>Turn legal expertise into educational posts, articles, and website assets.</p></div>\
            <div class="card"><small>04</small><h3>Stay compliant</h3><p>Grow visibility while respecting professional rules, disclaimers, and client trust.</p></div>\
          </div>\
        </div>\
      </section>';

    loadHubSpot();
  }

  window.addEventListener('message', function (event) {
    var data = event.data;
    if (!data || typeof data !== 'object') return;
    if (data.type === 'hsFormCallback' && (data.eventName === 'onFormSubmitted' || data.eventName === 'onFormSubmit')) {
      revealDownload();
    }
  });

  function addStyles() {
    if (document.getElementById('guide-page-styles')) return;
    var style = document.createElement('style');
    style.id = 'guide-page-styles';
    style.textContent = '\
      .guide-hero{background:#050505;color:#fff;padding:150px 0 92px}.guide-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(340px,440px);gap:64px;align-items:start}.guide-hero h1{font-family:var(--display);font-size:clamp(48px,7vw,88px);font-weight:400;line-height:.96;letter-spacing:0;margin:28px 0 24px;max-width:900px}.guide-hero h1 em{color:#8cff00}.guide-intro{max-width:760px;color:rgba(255,255,255,.72);font-size:20px;line-height:1.7}.guide-points{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.guide-points span{border:1px solid rgba(140,255,0,.3);border-radius:999px;padding:10px 14px;color:#cdeeb9;background:rgba(140,255,0,.06)}.guide-form-card{border:1px solid #e8e8e8;border-radius:20px;background:#fff;color:#111;padding:30px;box-shadow:0 24px 80px rgba(0,0,0,.35)}.guide-form-card .label{color:#5aaa00}.guide-form-card h2{font-family:var(--display);font-size:40px;font-weight:400;margin:10px 0 12px;color:#111}.guide-form-card p{color:#4c5961;line-height:1.6}.guide-form-card .hs-form-frame{min-height:420px;margin-top:18px;background:#fff}.guide-form-card iframe{background:#fff!important}.guide-form-card form,.guide-form-card .hs-form,.guide-form-card .hs-form-field{background:#fff!important;color:#111!important}.guide-form-card label,.guide-form-card legend,.guide-form-card .hs-form-field>label,.guide-form-card .hs-richtext,.guide-form-card .hs-richtext p{color:#1d2a32!important}.guide-form-card input,.guide-form-card select,.guide-form-card textarea{background:#f7fafc!important;color:#111!important;border:1px solid #cfd8df!important;border-radius:4px!important}.guide-form-card input[type=submit],.guide-form-card .hs-button{background:#8cff00!important;color:#111!important;border:0!important;border-radius:999px!important;font-weight:700!important;text-transform:none!important}.guide-download-ready{margin-top:22px;padding:18px;border-radius:14px;background:#ecffd9;color:#111}.guide-download-ready strong{display:block;margin-bottom:14px}.guide-detail{background:#fff}.guide-detail .card{background:#fff}@media(max-width:900px){.guide-hero{padding:112px 0 68px}.guide-grid{grid-template-columns:1fr;gap:36px}.guide-form-card{padding:24px}.guide-intro{font-size:18px}.guide-points span{font-size:13px}}';
    document.head.appendChild(style);
  }

  function boot() {
    if (!isGuidePage()) return;
    addStyles();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      render();
      if (document.querySelector('main[data-guide-rendered="true"]') || attempts > 30) window.clearInterval(timer);
    }, 100);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
