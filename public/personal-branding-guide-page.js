(function () {
  var PAGE_PATHS = [
    '/personal-branding-ultimate-guide-legal-professionals',
    '/branding-guide-for-lawyers'
  ];
  var CANONICAL_PATH = '/personal-branding-ultimate-guide-legal-professionals';

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
    description.content = 'Download Magneo’s free personal-branding guide for legal professionals. Explore audience focus, content topics and a consistent online presence.';
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca' + CANONICAL_PATH + '/';

    var robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'index, follow';

    var social = {
      'og:title': document.title,
      'og:description': description.content,
      'og:url': canonical.href,
      'og:image': 'https://magneo.ca/adele-salikhova.jpg'
    };
    Object.keys(social).forEach(function (property) {
      var meta = document.querySelector('meta[property="' + property + '"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = social[property];
    });
  }

  function activateGuideForm(event) {
    var formSection = document.getElementById('guide-form');
    var firstField = document.querySelector('.magneo-guide-form input[name="firstname"]');
    if (!formSection || !firstField) return true;
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    formSection.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(function () {
      var currentFirstField = document.querySelector('.magneo-guide-form input[name="firstname"]');
      if (currentFirstField) currentFirstField.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 450);
    return false;
  }

  function bindGuideAnchors() {
    window.magneoGuideFormCta = activateGuideForm;
    if (document.documentElement.dataset.guideAnchorsBound === 'true') return;
    document.documentElement.dataset.guideAnchorsBound = 'true';
    document.addEventListener('click', function (event) {
      var link = event.target.closest && event.target.closest('a[href="#guide-form"]');
      if (!link || !isGuidePage()) return;
      activateGuideForm(event);
    });
  }

  function bindGuideForm() {
    if (document.documentElement.dataset.guideFormBound === 'true') return;
    document.documentElement.dataset.guideFormBound = 'true';
    var currentDownloadUrl = '';
    document.addEventListener('submit', function (event) {
      var form = event.target;
      if (!form.matches || !form.matches('.magneo-guide-form') || !isGuidePage()) return;
      event.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var status = form.querySelector('.guide-form-status');
      button.disabled = true;
      status.textContent = 'Preparing your Magneo guide…';
      var payload = {
        firstname: form.elements.firstname.value.trim(),
        lastname: form.elements.lastname.value.trim(),
        email: form.elements.email.value.trim(),
        consent: form.elements.consent.checked,
        website: form.elements.website.value
      };
      var ready = document.querySelector('.guide-download-ready');
      var download = document.querySelector('.guide-download-button');
      ready.hidden = true;
      download.removeAttribute('href');
      fetch('/api/legal-guide-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (response) {
        if (!response.ok) throw new Error('request failed');
        return response.blob();
      }).then(function (blob) {
        if (currentDownloadUrl) URL.revokeObjectURL(currentDownloadUrl);
        var url = URL.createObjectURL(blob);
        currentDownloadUrl = url;
        download.href = url;
        ready.hidden = false;
        status.textContent = 'Your guide is ready. Use the download button below.';
        form.reset();
        window.setTimeout(function () {
          if (currentDownloadUrl !== url) return;
          URL.revokeObjectURL(url);
          currentDownloadUrl = '';
          download.removeAttribute('href');
          ready.hidden = true;
        }, 300000);
      }).catch(function () {
        status.textContent = 'The guide could not be prepared. Please email contact@magneo.ca and we will help.';
      }).finally(function () {
        button.disabled = false;
      });
    });
  }

  function checklist(items) {
    return items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
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
            <h1>Build a personal brand that reflects your <em>legal expertise.</em></h1>\
            <p class="guide-intro">A practical guide to explaining your expertise, choosing useful content topics and building a consistent presence online.</p>\
            <div class="guide-actions"><a class="btn guide-form-cta" href="#guide-form" onclick="return window.magneoGuideFormCta ? window.magneoGuideFormCta(event) : true">Download Guide <span class="guide-form-arrow" aria-hidden="true">→</span></a><a class="btn outline" href="#tools-legal-niche">What is inside</a></div>\
            <div class="guide-points">\
              <span>Areas of expertise</span>\
              <span>Channel choices</span>\
              <span>Educational content</span>\
              <span>Content review and professional requirements</span>\
            </div>\
          </div>\
          <aside class="guide-form-card" id="guide-form-section">\
            <div class="label">Fill out the form</div>\
            <h2>Get your free guide</h2>\
            <p>Complete the form to download the guide securely.</p>\
            <form class="magneo-guide-form">\
              <div class="guide-form-row"><label>First name<input id="guide-form" name="firstname" autocomplete="given-name" required></label><label>Last name<input name="lastname" autocomplete="family-name" required></label></div>\
              <label>Email address<input name="email" type="email" autocomplete="email" required></label>\
              <input class="guide-honeypot" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">\
              <label class="guide-consent"><input name="consent" type="checkbox" required><span>I agree that Magneo may store and use my information to provide the requested guide. Read the <a href="https://magneo.ca/privacy-policy/" target="_blank" rel="noopener">Magneo Privacy Policy</a>.</span></label>\
              <button class="btn" type="submit">DOWNLOAD THE GUIDE</button>\
              <p class="guide-form-status" role="status" aria-live="polite"></p>\
            </form>\
            <div class="guide-download-ready" hidden><strong>Your guide is ready.</strong><a class="btn guide-download-button" download="magneo-personal-branding-guide-legal-professionals.pdf">Download Guide <span aria-hidden="true">→</span></a></div>\
          </aside>\
        </div>\
      </section>\
      <section class="guide-about" id="inside-guide">\
        <div class="container guide-two">\
          <div>\
            <div class="label">About the guide</div>\
            <h2 id="tools-legal-niche">A clearer way to explain your legal practice.</h2>\
            <p>The guide covers your intended audience, professional presentation, useful content topics and the channels that fit your work. Review any marketing material against your own professional requirements before publishing.</p>\
          </div>\
          <ul class="guide-checklist">' + checklist([
            'What a personal brand is and why it matters',
            'How to identify the people you want to reach',
            'Professional presentation and profile messaging',
            'Eight content types to consider for your practice',
            'How to choose platforms for your audience',
            'Relationships and referrals beyond online content'
          ]) + '</ul>\
        </div>\
      </section>\
      <section class="guide-detail">\
        <div class="container">\
          <h2>10 practical tips to grow your personal brand</h2>\
          <p class="guide-tip-intro">Discover practical advice from the guide to make your expertise more visible, strengthen your professional image and build valuable connections.</p>\
          <ol class="guide-tip-list">\
            <li><strong>Define your expertise.</strong> Get clear about what you want to be known for.</li>\
            <li><strong>Know your ideal clients.</strong> Understand their needs and explain how your expertise helps.</li>\
            <li><strong>Strengthen your first impression.</strong> Present a professional image online and in person.</li>\
            <li><strong>Improve your bio.</strong> Explain who you help and what makes your approach different.</li>\
            <li><strong>Create useful content.</strong> Turn client questions and professional insights into engaging posts.</li>\
            <li><strong>Repurpose your ideas.</strong> Turn articles, interviews and videos into multiple pieces of content.</li>\
            <li><strong>Choose the right platforms.</strong> Focus on the channels your audience actually uses.</li>\
            <li><strong>Expand your visibility.</strong> Explore podcasts, guest articles, webinars and speaking opportunities.</li>\
            <li><strong>Build referral relationships.</strong> Make meaningful connections and follow up consistently.</li>\
            <li><strong>Support your business growth.</strong> Connect your reputation, specialisation and services with your goals.</li>\
          </ol>\
        </div>\
      </section>\
      <section class="guide-stats">\
        <div class="container guide-stat-grid">\
          <div><strong>48</strong><span>Pages in the guide</span></div>\
          <div><strong>8</strong><span>Content types covered</span></div>\
          <div><strong>1</strong><span>Audience to clarify</span></div>\
          <div><strong>1</strong><span>Professional presence to develop</span></div>\
        </div>\
      </section>\
      <section class="guide-final">\
        <div class="container">\
          <h2>Ready to make your expertise easier to trust?</h2>\
          <a class="btn guide-form-cta" href="#guide-form" onclick="return window.magneoGuideFormCta ? window.magneoGuideFormCta(event) : true">Download Guide <span class="guide-form-arrow" aria-hidden="true">→</span></a>\
        </div>\
      </section>';

    bindGuideForm();
    bindGuideAnchors();
  }

  function addStyles() {
    if (document.getElementById('guide-page-styles')) return;
    var style = document.createElement('style');
    style.id = 'guide-page-styles';
    style.textContent = '\
      #tools-legal-niche{scroll-margin-top:110px}#guide-form{scroll-margin-top:150px}.guide-hero{background:#050505;color:#fff;padding:150px 0 96px}.guide-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(340px,440px);gap:64px;align-items:start}.guide-hero h1{font-family:var(--display);font-size:clamp(50px,7vw,92px);font-weight:400;line-height:.96;letter-spacing:0;margin:18px 0 24px;max-width:900px}.guide-hero h1 em{color:#8cff00}.guide-intro{max-width:760px;color:rgba(255,255,255,.72);font-size:20px;line-height:1.7}.guide-actions{display:flex;gap:12px;flex-wrap:wrap;margin:30px 0 0}.guide-form-cta{gap:10px}.guide-form-arrow{display:inline-block;font-size:1.2em;line-height:1}.guide-points{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}.guide-points span{border:1px solid rgba(140,255,0,.3);border-radius:999px;padding:10px 14px;color:#cdeeb9;background:rgba(140,255,0,.06)}.guide-form-card{border:1px solid #e8e8e8;border-radius:20px;background:#fff;color:#111;padding:30px;box-shadow:0 24px 80px rgba(0,0,0,.35)}.guide-form-card .label{color:#5aaa00}.guide-form-card h2{font-family:var(--display);font-size:40px;font-weight:400;margin:10px 0 12px;color:#111}.guide-form-card p{color:#4c5961;line-height:1.6}.guide-form-card .hs-form-frame{min-height:420px;margin-top:18px;background:#fff}.guide-form-card iframe{background:#fff!important}.guide-form-card form,.guide-form-card .hs-form,.guide-form-card .hs-form-field{background:#fff!important;color:#111!important}.guide-form-card label,.guide-form-card legend,.guide-form-card .hs-form-field>label,.guide-form-card .hs-richtext,.guide-form-card .hs-richtext p{color:#1d2a32!important}.guide-form-card input,.guide-form-card select,.guide-form-card textarea{background:#f7fafc!important;color:#111!important;border:1px solid #cfd8df!important;border-radius:4px!important}.guide-form-card input[type=submit],.guide-form-card .hs-button{background:#8cff00!important;color:#111!important;border:0!important;border-radius:999px!important;font-weight:700!important;text-transform:none!important}.guide-download-ready{margin-top:22px;padding:18px;border-radius:14px;background:#ecffd9;color:#111}.guide-download-ready strong{display:block;margin-bottom:14px}.guide-about,.guide-detail,.guide-reviews{background:#fff;color:#111;padding:86px 0}.guide-two{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:64px;align-items:start}.guide-two h2,.guide-detail h2,.guide-reviews h2,.guide-final h2{font-family:var(--display);font-size:clamp(34px,4.5vw,58px);font-weight:400;line-height:1.04;margin:10px 0 22px}.guide-two p{color:#59636b;line-height:1.8;font-size:18px}.guide-checklist{list-style:none;margin:0;padding:0;border:1px solid #e8e8e8;border-radius:18px;overflow:hidden;background:#fff}.guide-checklist li{position:relative;padding:18px 22px 18px 52px;border-bottom:1px solid #e8e8e8;color:#34424c;line-height:1.55}.guide-checklist li:last-child{border-bottom:0}.guide-checklist li:before{content:"✓";position:absolute;left:20px;top:18px;color:#4c8d00;font-weight:800}.guide-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.guide-card,.guide-review{border:1px solid #e8e8e8;border-radius:16px;background:#fff;padding:24px}.guide-card small{color:#5aaa00;text-transform:uppercase;letter-spacing:1px}.guide-card h3{font-size:20px;margin:12px 0 10px}.guide-card p,.guide-review p{color:#5d6972;line-height:1.7}.guide-reviews{background:#f7f7f5}.guide-review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.guide-review p{font-style:italic}.guide-review b{display:block;color:#111}.guide-review span{display:block;color:#7b858c;font-size:13px;margin-top:4px}.guide-stats{background:#050505;color:#fff;padding:70px 0}.guide-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px}.guide-stat-grid div{border-right:1px solid rgba(255,255,255,.1);padding:10px 28px}.guide-stat-grid div:last-child{border-right:0}.guide-stat-grid strong{display:block;font-family:var(--display);font-size:54px;font-weight:400;color:#8cff00;line-height:1}.guide-stat-grid span{display:block;color:rgba(255,255,255,.55);margin-top:8px}.guide-final{background:#fff;padding:90px 0;text-align:center}.guide-final h2{margin-left:auto;margin-right:auto}.guide-final .btn{margin-top:8px}@media(max-width:980px){.guide-grid,.guide-two{grid-template-columns:1fr;gap:36px}.guide-card-grid,.guide-review-grid,.guide-stat-grid{grid-template-columns:repeat(2,1fr)}.guide-hero{padding:116px 0 70px}.guide-form-arrow{transform:rotate(90deg)}.guide-form-card{padding:24px}.guide-intro{font-size:18px}}@media(max-width:620px){.guide-hero h1{font-size:44px}.guide-about,.guide-detail,.guide-reviews,.guide-final{padding:56px 0}.guide-card-grid,.guide-review-grid,.guide-stat-grid{grid-template-columns:1fr}.guide-stat-grid div{border-right:0;border-bottom:1px solid rgba(255,255,255,.1);padding:22px 0}.guide-stat-grid div:last-child{border-bottom:0}.guide-actions .btn{width:100%}.guide-form-card{padding:20px;border-radius:16px}.guide-points span{font-size:13px}}';
    style.textContent += '.guide-form-cta{white-space:nowrap}.guide-form-cta:focus-visible{outline:3px solid #8cff00;outline-offset:4px}.guide-download-ready[hidden]{display:none}.magneo-guide-form{display:grid;gap:16px;margin-top:20px}.guide-form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.magneo-guide-form label{display:grid;gap:7px;color:#1d2a32;font-weight:650;font-size:14px}.magneo-guide-form input{box-sizing:border-box;width:100%;background:#f7fafc;color:#111;border:1px solid #aebcc6;border-radius:8px;padding:12px;font:inherit}.magneo-guide-form input:focus-visible,.magneo-guide-form a:focus-visible,.magneo-guide-form button:focus-visible{outline:3px solid #111;outline-offset:3px}.magneo-guide-form .guide-consent{display:flex;align-items:flex-start;gap:10px;font-weight:400;line-height:1.5}.guide-consent input{width:20px;min-width:20px;height:20px;margin-top:2px}.guide-consent a{color:#2f6200;text-decoration:underline}.magneo-guide-form button{justify-self:start}.magneo-guide-form button:disabled{opacity:.55;cursor:wait}.guide-form-status{min-height:1.5em;margin:0!important;font-size:14px}.guide-honeypot{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important}@media(max-width:620px){.guide-form-row{grid-template-columns:1fr}}';
    style.textContent += '.guide-hero{padding-top:56px}@media(max-width:980px){.guide-hero{padding-top:40px}}@media(max-width:620px){.guide-hero{padding-top:28px}}';
    style.textContent += '.guide-detail{padding:64px 0}.guide-detail h2{font-size:clamp(34px,4vw,52px);margin:0 0 18px}.guide-detail .guide-tip-intro{max-width:780px;margin:0 0 20px;color:#59636b;font-size:18px;line-height:1.6}.guide-tip-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:36px;list-style:decimal-leading-zero;margin:0;padding-left:30px}.guide-tip-list li{min-width:0;padding:12px 0;border-bottom:1px solid #e8e8e8;color:#34424c;font-size:16px;line-height:1.5}.guide-tip-list li::marker{color:#5aaa00;font-size:14px;font-weight:700}.guide-tip-list strong{color:#111}@media(max-width:620px){.guide-detail{padding:40px 0}.guide-detail .guide-tip-intro{font-size:16px}.guide-tip-list{grid-template-columns:1fr;padding-left:26px}.guide-tip-list li{padding:11px 0}}';
    document.head.appendChild(style);
  }

  function boot() {
    if (!isGuidePage()) return;
    addStyles();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      var staticMain = document.querySelector('main[data-guide-static="true"]');
      if (staticMain) return;
      render();
      if (document.querySelector('main[data-guide-rendered="true"]') || attempts > 30) window.clearInterval(timer);
    }, 100);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
