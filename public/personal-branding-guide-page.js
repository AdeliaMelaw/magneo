(function () {
  var PAGE_PATHS = [
    '/personal-branding-ultimate-guide-legal-professionals',
    '/branding-guide-for-lawyers'
  ];
  var CANONICAL_PATH = '/personal-branding-ultimate-guide-legal-professionals';
  var PDF_URL = '/downloads/personal-branding-guide-legal-professionals.pdf';

  function currentPath() {
    return window.location.pathname.replace(/\/$/, '');
  }

  function isGuidePage() {
    return PAGE_PATHS.indexOf(currentPath()) !== -1;
  }

  function setMeta() {
    document.title = 'Personal Branding Guide for Legal Professionals | Magneo';
    var description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Download Magneo\'s free personal branding guide for lawyers and legal professionals. Build authority, trust, LinkedIn visibility, and qualified demand.';
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca' + CANONICAL_PATH + '/';
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

  function checklist(items) {
    return items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
  }

  function review(quote, name, role) {
    return '<article class="guide-review"><p>"' + quote + '"</p><div><b>' + name + '</b><span>' + role + '</span></div></article>';
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
            <div class="label">The must-read guide</div>\
            <h1>Turn your name into your most trusted <em>legal brand.</em></h1>\
            <p class="guide-intro">Personal Branding: The Ultimate Guide for Legal Professionals helps lawyers, consultants, and legal experts build authority, trust, and qualified demand without sounding like every other firm online.</p>\
            <div class="guide-actions"><a class="btn" href="' + PDF_URL + '" target="_blank" rel="noopener">Download now</a><a class="btn outline" href="#tools-legal-niche">What is inside</a></div>\
            <div class="guide-points">\
              <span>Authority positioning</span>\
              <span>LinkedIn growth</span>\
              <span>Trust-first content</span>\
              <span>Legal marketing guardrails</span>\
            </div>\
          </div>\
          <aside class="guide-form-card" id="guide-form">\
            <div class="label">Fill out the form</div>\
            <h2>Get your free guide</h2>\
            <p>Submit the form and the download link will appear on this page.</p>\
            <div class="hs-form-frame" data-region="na3" data-form-id="ff7b6ed0-a222-476a-ac58-191ec4e0ab67" data-portal-id="342136473"></div>\
            <div class="guide-download-ready" hidden>\
              <strong>Your guide is ready.</strong>\
              <a class="btn" href="' + PDF_URL + '" target="_blank" rel="noopener">Download PDF</a>\
            </div>\
          </aside>\
        </div>\
      </section>\
      <section class="guide-about" id="inside-guide">\
        <div class="container guide-two">\
          <div>\
            <div class="label">About the guide</div>\
            <h2 id="tools-legal-niche">Tools to own your legal niche.</h2>\
            <p>This is not surface-level visibility. It is a practical guide for becoming the lawyer your ideal clients instantly trust, remember, and refer.</p>\
          </div>\
          <ul class="guide-checklist">' + checklist([
            'Why many lawyers stay invisible and how to change that fast',
            'The branding mistake legal professionals keep repeating',
            'LinkedIn myths that quietly weaken credibility',
            'The Authority Triangle that attracts better-fit clients',
            'Five post types that build legal trust quickly',
            'How to become memorable without chasing likes'
          ]) + '</ul>\
        </div>\
      </section>\
      <section class="guide-detail">\
        <div class="container">\
          <div class="label">Inside the framework</div>\
          <h2>A practical path from invisible expert to trusted authority.</h2>\
          <div class="guide-card-grid">\
            <div class="guide-card"><small>01</small><h3>Define your authority lane</h3><p>Clarify what you want to be known for, who you serve, and why your expertise matters.</p></div>\
            <div class="guide-card"><small>02</small><h3>Build proof signals</h3><p>Use case themes, credentials, media, reviews, and content to increase confidence.</p></div>\
            <div class="guide-card"><small>03</small><h3>Create repeatable content</h3><p>Turn legal expertise into educational posts, articles, and website assets.</p></div>\
            <div class="guide-card"><small>04</small><h3>Stay compliant</h3><p>Grow visibility while respecting professional rules, disclaimers, and client trust.</p></div>\
          </div>\
        </div>\
      </section>\
      <section class="guide-reviews">\
        <div class="container">\
          <div class="label">Reader reviews</div>\
          <h2>What legal professionals say about the guide.</h2>\
          <div class="guide-review-grid">' + [
            review('Clear, smart, and genuinely useful for lawyers who want to be known for something specific.', 'Daniel K.', 'Corporate lawyer, Toronto'),
            review('It helped me reposition my practice without sounding salesy or generic.', 'Aisha M.', 'Family lawyer, Ottawa'),
            review('The LinkedIn and authority sections gave me a simple system I could actually use.', 'Hamid T.', 'Business lawyer, Montreal')
          ].join('') + '</div>\
        </div>\
      </section>\
      <section class="guide-stats">\
        <div class="container guide-stat-grid">\
          <div><strong>100%</strong><span>Strategy-first approach</span></div>\
          <div><strong>5</strong><span>Trust-building content types</span></div>\
          <div><strong>3</strong><span>Authority-building pillars</span></div>\
          <div><strong>1</strong><span>Focused guide for legal experts</span></div>\
        </div>\
      </section>\
      <section class="guide-final">\
        <div class="container">\
          <h2>Ready to make your expertise easier to trust?</h2>\
          <a class="btn" href="#guide-form">Download the guide</a>\
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
      #tools-legal-niche{scroll-margin-top:110px}.guide-hero{background:#050505;color:#fff;padding:150px 0 96px}.guide-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(340px,440px);gap:64px;align-items:start}.guide-hero h1{font-family:var(--display);font-size:clamp(50px,7vw,92px);font-weight:400;line-height:.96;letter-spacing:0;margin:18px 0 24px;max-width:900px}.guide-hero h1 em{color:#8cff00}.guide-intro{max-width:760px;color:rgba(255,255,255,.72);font-size:20px;line-height:1.7}.guide-actions{display:flex;gap:12px;flex-wrap:wrap;margin:30px 0 0}.guide-points{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}.guide-points span{border:1px solid rgba(140,255,0,.3);border-radius:999px;padding:10px 14px;color:#cdeeb9;background:rgba(140,255,0,.06)}.guide-form-card{border:1px solid #e8e8e8;border-radius:20px;background:#fff;color:#111;padding:30px;box-shadow:0 24px 80px rgba(0,0,0,.35)}.guide-form-card .label{color:#5aaa00}.guide-form-card h2{font-family:var(--display);font-size:40px;font-weight:400;margin:10px 0 12px;color:#111}.guide-form-card p{color:#4c5961;line-height:1.6}.guide-form-card .hs-form-frame{min-height:420px;margin-top:18px;background:#fff}.guide-form-card iframe{background:#fff!important}.guide-form-card form,.guide-form-card .hs-form,.guide-form-card .hs-form-field{background:#fff!important;color:#111!important}.guide-form-card label,.guide-form-card legend,.guide-form-card .hs-form-field>label,.guide-form-card .hs-richtext,.guide-form-card .hs-richtext p{color:#1d2a32!important}.guide-form-card input,.guide-form-card select,.guide-form-card textarea{background:#f7fafc!important;color:#111!important;border:1px solid #cfd8df!important;border-radius:4px!important}.guide-form-card input[type=submit],.guide-form-card .hs-button{background:#8cff00!important;color:#111!important;border:0!important;border-radius:999px!important;font-weight:700!important;text-transform:none!important}.guide-download-ready{margin-top:22px;padding:18px;border-radius:14px;background:#ecffd9;color:#111}.guide-download-ready strong{display:block;margin-bottom:14px}.guide-about,.guide-detail,.guide-reviews{background:#fff;color:#111;padding:86px 0}.guide-two{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:64px;align-items:start}.guide-two h2,.guide-detail h2,.guide-reviews h2,.guide-final h2{font-family:var(--display);font-size:clamp(34px,4.5vw,58px);font-weight:400;line-height:1.04;margin:10px 0 22px}.guide-two p{color:#59636b;line-height:1.8;font-size:18px}.guide-checklist{list-style:none;margin:0;padding:0;border:1px solid #e8e8e8;border-radius:18px;overflow:hidden;background:#fff}.guide-checklist li{position:relative;padding:18px 22px 18px 52px;border-bottom:1px solid #e8e8e8;color:#34424c;line-height:1.55}.guide-checklist li:last-child{border-bottom:0}.guide-checklist li:before{content:"✓";position:absolute;left:20px;top:18px;color:#4c8d00;font-weight:800}.guide-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.guide-card,.guide-review{border:1px solid #e8e8e8;border-radius:16px;background:#fff;padding:24px}.guide-card small{color:#5aaa00;text-transform:uppercase;letter-spacing:1px}.guide-card h3{font-size:20px;margin:12px 0 10px}.guide-card p,.guide-review p{color:#5d6972;line-height:1.7}.guide-reviews{background:#f7f7f5}.guide-review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.guide-review p{font-style:italic}.guide-review b{display:block;color:#111}.guide-review span{display:block;color:#7b858c;font-size:13px;margin-top:4px}.guide-stats{background:#050505;color:#fff;padding:70px 0}.guide-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px}.guide-stat-grid div{border-right:1px solid rgba(255,255,255,.1);padding:10px 28px}.guide-stat-grid div:last-child{border-right:0}.guide-stat-grid strong{display:block;font-family:var(--display);font-size:54px;font-weight:400;color:#8cff00;line-height:1}.guide-stat-grid span{display:block;color:rgba(255,255,255,.55);margin-top:8px}.guide-final{background:#fff;padding:90px 0;text-align:center}.guide-final h2{margin-left:auto;margin-right:auto}.guide-final .btn{margin-top:8px}@media(max-width:980px){.guide-grid,.guide-two{grid-template-columns:1fr;gap:36px}.guide-card-grid,.guide-review-grid,.guide-stat-grid{grid-template-columns:repeat(2,1fr)}.guide-hero{padding:116px 0 70px}.guide-form-card{padding:24px}.guide-intro{font-size:18px}}@media(max-width:620px){.guide-hero h1{font-size:44px}.guide-about,.guide-detail,.guide-reviews,.guide-final{padding:56px 0}.guide-card-grid,.guide-review-grid,.guide-stat-grid{grid-template-columns:1fr}.guide-stat-grid div{border-right:0;border-bottom:1px solid rgba(255,255,255,.1);padding:22px 0}.guide-stat-grid div:last-child{border-bottom:0}.guide-actions .btn{width:100%}.guide-form-card{padding:20px;border-radius:16px}.guide-points span{font-size:13px}}';
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
