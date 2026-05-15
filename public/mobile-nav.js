(function () {
  function initMobileNav() {
    var nav = document.querySelector('.nav');
    if (!nav || nav.dataset.mobileNavReady === 'true') return false;
    var brand = nav.querySelector('.brand');
    var links = nav.querySelector('.nav-links');
    if (!brand || !links) return false;
    nav.dataset.mobileNavReady = 'true';
    var button = document.createElement('button');
    button.className = 'nav-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Open menu');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span></span><span></span><span></span>';
    brand.insertAdjacentElement('afterend', button);
    function isMobile() { return window.matchMedia('(max-width: 1050px)').matches; }
    function setOpen(open) {
      nav.classList.toggle('nav--open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.documentElement.classList.toggle('nav-lock', open);
      if (!open) nav.querySelectorAll('.nav-item--open').forEach(function (item) { item.classList.remove('nav-item--open'); });
    }
    button.addEventListener('click', function () { setOpen(!nav.classList.contains('nav--open')); });
    links.addEventListener('click', function (event) {
      var target = event.target.closest('a');
      if (!target) return;
      if (isMobile() && target.classList.contains('nav-trigger')) {
        var item = target.closest('.nav-item');
        if (item && !item.classList.contains('nav-item--open')) {
          event.preventDefault();
          item.classList.add('nav-item--open');
          return;
        }
      }
      setOpen(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setOpen(false);
        nav.querySelectorAll('.nav-item').forEach(function (item) {
          item.classList.add('mega-dismissed');
          var mega = item.querySelector('.mega');
          if (mega) mega.style.display = 'none';
        });
      }
    });
    window.addEventListener('resize', function () { if (!isMobile()) setOpen(false); });
    return true;
  }

  function initDesktopMegaClose() {
    var nav = document.querySelector('.nav');
    if (!nav || nav.dataset.megaCloseReady === 'true') return false;
    var megas = nav.querySelectorAll('.nav-item .mega');
    if (!megas.length) return false;
    nav.dataset.megaCloseReady = 'true';
    megas.forEach(function (mega) {
      if (mega.querySelector('.mega-close')) return;
      var item = mega.closest('.nav-item');
      var close = document.createElement('button');
      close.className = 'mega-close';
      close.type = 'button';
      close.setAttribute('aria-label', 'Close menu');
      close.textContent = '×';
      mega.insertAdjacentElement('afterbegin', close);
      close.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        item.classList.add('mega-dismissed');
        mega.style.display = 'none';
        var trigger = item.querySelector('.nav-trigger');
        if (trigger) trigger.blur();
      });
      item.addEventListener('mouseleave', function () {
        item.classList.remove('mega-dismissed');
        mega.style.display = '';
      });
      var trigger = item.querySelector('.nav-trigger');
      if (trigger) {
        trigger.addEventListener('mouseenter', function () {
          item.classList.remove('mega-dismissed');
          mega.style.display = '';
        });
        trigger.addEventListener('focus', function () {
          item.classList.remove('mega-dismissed');
          mega.style.display = '';
        });
      }
    });
    return true;
  }

  var marqueeSets = {
    law: [['LAW FIRM SEO', '/services/seo-for-the-legal-industry/'], ['LAW FIRM PPC', '/services/ppc-landing-pages-for-law-firms-magneo/'], ['LINKEDIN GROWTH', '/services/linkedin-growth-law-firms/'], ['LEGAL WEBSITE DESIGN', '/services/website-design-rebrand-for-law-firms-magneo/'], ['AI AUTOMATION', '/services/ai-automation-for-law-firms-legal-departments-magneo/'], ['LAW FIRM MARKETING', '/law-firm-marketing/']],
    finance: [['FINANCIAL SEO', '/services/seo-for-financial-advisors-wealth-firms/'], ['FINANCIAL PPC', '/services/ppc-landing-pages-for-financial-advisors-fintech-magneo/'], ['LINKEDIN GROWTH', '/services/linkedin-growth-financial-advisors/'], ['FINANCIAL WEBSITE DESIGN', '/services/website-design-for-financial-advisors-wealth-firms-magneo/'], ['AI AUTOMATION', '/services/ai-automation-for-financial-advisors-firms-fintech-magneo/'], ['FINANCIAL MARKETING', '/financial-firm-marketing/']],
    healthcare: [['HEALTHCARE SEO', '/services/seo-for-the-healthcare-medtech-industry/'], ['HEALTHCARE PPC', '/services/ppc-landing-pages-for-healthcare-medtech/'], ['SOCIAL MEDIA', '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/'], ['HEALTHCARE WEB DESIGN', '/services/website-design-for-healthcare-clinics-doctors-magneo/'], ['AI AUTOMATION', '/services/ai-automation-for-healthcare-providers-clinics-magneo/'], ['HEALTHCARE MARKETING', '/healthcare-marketing/']],
    tech: [['TECH SEO', '/services/seo-for-regulated-industries/'], ['SAAS MARKETING', '/tech-company-marketing/saas-marketing/'], ['TECH SOCIAL MEDIA', '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/'], ['TECH WEB DESIGN', '/services/website-design-for-tech-companies-saas-products-magneo/'], ['AI AUTOMATION', '/services/ai-marketing-automation-for-tech-saas-ai-companies-magneo/'], ['TECH MARKETING', '/tech-company-marketing/']],
    ai: [['AI SEO', '/services/ai-seo/'], ['AI SOCIAL MEDIA MARKETING', '/services/ai-social-media-marketing/'], ['AI UGC & AI VIDEO PRODUCTION', '/services/ai-ugc-ai-video-production/'], ['AI WEB DESIGN & CONVERSION', '/services/ai-web-design-conversion/'], ['AI CONTENT MARKETING', '/services/ai-content-marketing/'], ['COMPLIANCE-AWARE AI WORKFLOWS', '/services/compliance-aware-ai-workflows/'], ['REGULATED GROWTH', '/services/ai-powered-digital-marketing/']],
    services: [['SEO', '/services/seo-for-regulated-industries/'], ['PPC & LANDING PAGES', '/services/ppc-landing-pages-for-regulated-industries/'], ['SOCIAL MEDIA & LINKEDIN', '/services/social-media-linkedin-marketing-for-regulated-industries/'], ['WEBSITE DESIGN', '/services/website-design-for-regulated-professional-industries-magneo/'], ['AI AUTOMATION', '/services/ai-automation-for-regulated-industries-magneo/'], ['PERSONAL BRANDING', '/services/personal-branding-for-regulated-professionals/']]
  };

  function marqueeForPath(path) {
    if (path.indexOf('/services/ai-powered-digital-marketing') === 0) return null;
    if (path.indexOf('/services/ai-') === 0 || path.indexOf('/services/compliance-aware-ai') === 0) return marqueeSets.ai;
    if (path.indexOf('/law-firm-marketing') === 0) return marqueeSets.law;
    if (path.indexOf('/financial-firm-marketing') === 0) return marqueeSets.finance;
    if (path.indexOf('/healthcare-marketing') === 0) return marqueeSets.healthcare;
    if (path.indexOf('/tech-company-marketing') === 0) return marqueeSets.tech;
    if (path.indexOf('/services/') === 0) return marqueeSets.services;
    return null;
  }

  function initContextMarquee() {
    var main = document.querySelector('main');
    var hero = main && main.querySelector('.hero');
    if (!main || !hero) return false;
    var items = marqueeForPath(window.location.pathname);
    var existing = hero.nextElementSibling;
    if (!items || (existing && existing.classList && existing.classList.contains('marquee'))) return true;
    var marquee = document.createElement('div');
    marquee.className = 'marquee ai-marquee contextual-marquee';
    items.forEach(function (entry) {
      var link = document.createElement('a');
      link.href = entry[1];
      link.textContent = entry[0];
      marquee.appendChild(link);
    });
    hero.insertAdjacentElement('afterend', marquee);
    return true;
  }

  function titleFromPath(path) {
    var slug = path.split('/').filter(Boolean).pop() || 'regulated-growth';
    var acronyms = { seo: 'SEO', ppc: 'PPC', ai: 'AI', saas: 'SaaS', ugc: 'UGC' };
    return slug.replace(/magneo/g, '').split('-').filter(Boolean).map(function (word) {
      return ['for', 'and', 'the'].indexOf(word) >= 0 ? word : (acronyms[word] || word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ').replace(/\s+/g, ' ').trim();
  }

  function serviceContext(title, path) {
    var lower = (title + ' ' + path).toLowerCase();
    if (lower.indexOf('financial') >= 0 || lower.indexOf('advisor') >= 0 || lower.indexOf('wealth') >= 0 || lower.indexOf('fintech') >= 0) return { name: 'financial services', guard: 'CIRO, CSA, fiduciary, disclaimer, and claim review', examples: ['Financial advisor credibility site', 'Wealth firm service architecture', 'FinTech conversion landing pages', 'Portfolio manager trust content'] };
    if (lower.indexOf('health') >= 0 || lower.indexOf('clinic') >= 0 || lower.indexOf('medical') >= 0 || lower.indexOf('medtech') >= 0) return { name: 'healthcare', guard: 'privacy, patient trust, healthcare advertising, and evidence-aware messaging', examples: ['Clinic appointment growth system', 'Patient education page set', 'Provider reputation workflow', 'MedTech demand campaign'] };
    if (lower.indexOf('tech') >= 0 || lower.indexOf('saas') >= 0 || lower.indexOf('crypto') >= 0 || lower.indexOf('legaltech') >= 0) return { name: 'tech and SaaS', guard: 'technical proof, accuracy, security, investor scrutiny, and conversion clarity', examples: ['SaaS product marketing site', 'LegalTech authority system', 'AI company content engine', 'Crypto trust-building campaign'] };
    if (lower.indexOf('ai') >= 0) return { name: 'AI-driven regulated marketing', guard: 'human review, source checks, claim controls, and approval workflows', examples: ['AI SEO workflow', 'AI content review system', 'AI social media calendar', 'AI video and UGC campaign'] };
    return { name: 'law firms and professional services', guard: 'bar advertising rules, professional responsibility, disclaimers, and trust signals', examples: ['Law firm rebrand and new site', 'Practice-area SEO architecture', 'LinkedIn authority program', 'Consultation funnel rebuild'] };
  }

  function createEl(tag, className, html) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (html) el.innerHTML = html;
    return el;
  }

  function initServiceDepth() {
    var path = window.location.pathname;
    if (path.indexOf('/services/') !== 0 || path === '/services/' || path.indexOf('/services/ai-powered-digital-marketing/') === 0) return true;
    var main = document.querySelector('main');
    var hero = main && main.querySelector('.hero');
    if (!main || !hero) return false;
    var existing = main.querySelector('.service-depth');
    if (existing && existing.dataset.path === path) return true;
    if (existing) existing.remove();

    var title = titleFromPath(path);
    var context = serviceContext(title, path);
    var process = main.querySelector('.process');
    var after = process && process.closest('section') ? process.closest('section') : (hero.nextElementSibling && hero.nextElementSibling.classList.contains('marquee') ? hero.nextElementSibling : hero);
    var section = createEl('section', 'service-depth');
    section.dataset.path = path;
    section.innerHTML = [
      '<div class="container">',
      '<div class="sd-block sd-who"><div class="label">Who it is for</div><h2>' + title + ' for teams where trust is the conversion asset.</h2><div class="sd-grid four">',
      '<div class="sd-card"><small>01</small><h3>Law Firms</h3><p>Authority-first strategy that helps legal teams present expertise clearly and turn visitors into qualified consultations.</p></div>',
      '<div class="sd-card"><small>02</small><h3>Financial Firms</h3><p>Credibility-driven messaging, review-ready claims, and conversion paths built for serious prospects.</p></div>',
      '<div class="sd-card"><small>03</small><h3>Healthcare Providers</h3><p>Patient-focused experiences that improve clarity, reduce friction, and respect healthcare advertising expectations.</p></div>',
      '<div class="sd-card"><small>04</small><h3>Tech & SaaS</h3><p>Modern demand systems that explain complex value, build confidence, and support demo or sales conversations.</p></div>',
      '</div></div>',
      '<div class="sd-block sd-included"><div><div class="label">What is included</div><h2>Everything needed to turn ' + title.toLowerCase() + ' into a working growth system.</h2></div><ul class="sd-checks">',
      '<li>Strategy and messaging aligned to your audience, offer, and compliance requirements.</li><li>Page, campaign, or content structure built around search intent and qualified conversion.</li><li>Authority proof, calls-to-action, trust signals, and review-ready language.</li><li>Analytics, conversion tracking, and reporting so performance is visible.</li><li>Internal linking and related-page pathways that support SEO migration.</li><li>Launch QA, optimization notes, and next-step recommendations.</li>',
      '</ul></div>',
      '<div class="sd-block sd-process-block"><div class="label">How it works</div><h2>Our process — transparent from day one.</h2><div class="sd-process">',
      '<div><b>01</b><h3>Discovery & Audit</h3><p>We review your current digital presence, buyer journey, competitors, and ' + context.guard + '.</p></div>',
      '<div><b>02</b><h3>Strategy Blueprint</h3><p>We map the structure, messaging, proof points, and conversion logic before execution starts.</p></div>',
      '<div><b>03</b><h3>Build & Launch</h3><p>We create the pages, content, workflows, or campaigns with responsive design and SEO-ready structure.</p></div>',
      '<div><b>04</b><h3>Optimize to ROI</h3><p>We refine based on rankings, qualified inquiries, booked calls, and lead quality after launch.</p></div>',
      '</div></div>',
      '<div class="sd-block"><div class="label">Results</div><h2>What clients typically see.</h2><div class="sd-grid three">',
      '<div class="sd-card"><h3>More qualified inquiries</h3><p>Better-fit prospects because the message, proof, and path are clearer.</p></div>',
      '<div class="sd-card"><h3>Improved user experience</h3><p>Cleaner navigation, stronger pages, and fewer points of friction.</p></div>',
      '<div class="sd-card"><h3>Consistent brand presence</h3><p>A trustworthy online presence across service, industry, and insight pages.</p></div>',
      '<div class="sd-card"><h3>Clearer messaging</h3><p>Visitors understand who you help, what you do, and why they should trust you.</p></div>',
      '<div class="sd-card"><h3>SEO-ready architecture</h3><p>Service and internal-linking structures support long-term search visibility.</p></div>',
      '<div class="sd-card"><h3>Visible ROI</h3><p>Performance can be measured through conversion tracking and reporting.</p></div>',
      '</div></div>',
      '<div class="sd-block"><div class="label">Use cases</div><h2>How ' + title.toLowerCase() + ' can be applied in ' + context.name + '.</h2><div class="sd-grid four">',
      context.examples.map(function (example, index) { return '<div class="sd-card"><small>Case 0' + (index + 1) + '</small><h3>' + example + '</h3><p>A focused use case designed around trust, clarity, search visibility, and measurable demand.</p></div>'; }).join(''),
      '</div></div>',
      '<div class="sd-block sd-faq"><div><div class="label">FAQ</div><h2>Common questions before starting.</h2></div><div class="sd-faq-list">',
      '<details><summary>Is this compliant for regulated industries?</summary><p>Yes. We build with review-ready language, clear proof, and guardrails appropriate to your industry.</p></details>',
      '<details open><summary>How many pages or assets do we need?</summary><p>Most teams start with a focused core set, then expand into service, industry, and insight pages as performance data comes in.</p></details>',
      '<details><summary>Can you work with our compliance team?</summary><p>Yes. We can support review workflows, claim checks, disclaimers, and approval steps.</p></details>',
      '<details><summary>How quickly can we see results?</summary><p>Conversion improvements can appear quickly after launch. SEO and authority gains usually compound over several months.</p></details>',
      '<details><summary>What does pricing look like?</summary><p>Pricing depends on scope, page count, content depth, and how much strategy or production support is needed.</p></details>',
      '</div></div>',
      '</div>'
    ].join('');
    after.insertAdjacentElement('afterend', section);
    return true;
  }

  function bootEnhancements() {
    initMobileNav();
    initDesktopMegaClose();
    initContextMarquee();
    initServiceDepth();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      initMobileNav();
      initDesktopMegaClose();
      initContextMarquee();
      initServiceDepth();
      if (attempts > 40) window.clearInterval(timer);
    }, 100);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function () {
        initMobileNav();
        initDesktopMegaClose();
        initContextMarquee();
        initServiceDepth();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 6000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootEnhancements);
  else bootEnhancements();
})();
