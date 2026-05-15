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

    function isMobile() {
      return window.matchMedia('(max-width: 1050px)').matches;
    }

    function setOpen(open) {
      nav.classList.toggle('nav--open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.documentElement.classList.toggle('nav-lock', open);
      if (!open) {
        nav.querySelectorAll('.nav-item--open').forEach(function (item) {
          item.classList.remove('nav-item--open');
        });
      }
    }

    button.addEventListener('click', function () {
      setOpen(!nav.classList.contains('nav--open'));
    });

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
        });
      }
    });

    window.addEventListener('resize', function () {
      if (!isMobile()) setOpen(false);
    });

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
        var trigger = item.querySelector('.nav-trigger');
        if (trigger) trigger.blur();
      });
      item.addEventListener('mouseleave', function () {
        item.classList.remove('mega-dismissed');
      });
      item.addEventListener('mouseenter', function () {
        window.setTimeout(function () {
          if (!item.matches(':hover')) item.classList.remove('mega-dismissed');
        }, 50);
      });
    });
    return true;
  }

  var marqueeSets = {
    law: [
      ['LAW FIRM SEO', '/services/seo-for-the-legal-industry/'],
      ['LAW FIRM PPC', '/services/ppc-landing-pages-for-law-firms-magneo/'],
      ['LINKEDIN GROWTH', '/services/linkedin-growth-law-firms/'],
      ['LEGAL WEBSITE DESIGN', '/services/website-design-rebrand-for-law-firms-magneo/'],
      ['AI AUTOMATION', '/services/ai-automation-for-law-firms-legal-departments-magneo/'],
      ['LAW FIRM MARKETING', '/law-firm-marketing/']
    ],
    finance: [
      ['FINANCIAL SEO', '/services/seo-for-financial-advisors-wealth-firms/'],
      ['FINANCIAL PPC', '/services/ppc-landing-pages-for-financial-advisors-fintech-magneo/'],
      ['LINKEDIN GROWTH', '/services/linkedin-growth-financial-advisors/'],
      ['FINANCIAL WEBSITE DESIGN', '/services/website-design-for-financial-advisors-wealth-firms-magneo/'],
      ['AI AUTOMATION', '/services/ai-automation-for-financial-advisors-firms-fintech-magneo/'],
      ['FINANCIAL MARKETING', '/financial-firm-marketing/']
    ],
    healthcare: [
      ['HEALTHCARE SEO', '/services/seo-for-the-healthcare-medtech-industry/'],
      ['HEALTHCARE PPC', '/services/ppc-landing-pages-for-healthcare-medtech/'],
      ['SOCIAL MEDIA', '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/'],
      ['HEALTHCARE WEB DESIGN', '/services/website-design-for-healthcare-clinics-doctors-magneo/'],
      ['AI AUTOMATION', '/services/ai-automation-for-healthcare-providers-clinics-magneo/'],
      ['HEALTHCARE MARKETING', '/healthcare-marketing/']
    ],
    tech: [
      ['TECH SEO', '/services/seo-for-regulated-industries/'],
      ['SAAS MARKETING', '/tech-company-marketing/saas-marketing/'],
      ['TECH SOCIAL MEDIA', '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/'],
      ['TECH WEB DESIGN', '/services/website-design-for-tech-companies-saas-products-magneo/'],
      ['AI AUTOMATION', '/services/ai-marketing-automation-for-tech-saas-ai-companies-magneo/'],
      ['TECH MARKETING', '/tech-company-marketing/']
    ],
    ai: [
      ['AI SEO', '/services/ai-seo/'],
      ['AI SOCIAL MEDIA MARKETING', '/services/ai-social-media-marketing/'],
      ['AI UGC & AI VIDEO PRODUCTION', '/services/ai-ugc-ai-video-production/'],
      ['AI WEB DESIGN & CONVERSION', '/services/ai-web-design-conversion/'],
      ['AI CONTENT MARKETING', '/services/ai-content-marketing/'],
      ['COMPLIANCE-AWARE AI WORKFLOWS', '/services/compliance-aware-ai-workflows/'],
      ['REGULATED GROWTH', '/services/ai-powered-digital-marketing/']
    ],
    services: [
      ['SEO', '/services/seo-for-regulated-industries/'],
      ['PPC & LANDING PAGES', '/services/ppc-landing-pages-for-regulated-industries/'],
      ['SOCIAL MEDIA & LINKEDIN', '/services/social-media-linkedin-marketing-for-regulated-industries/'],
      ['WEBSITE DESIGN', '/services/website-design-for-regulated-professional-industries-magneo/'],
      ['AI AUTOMATION', '/services/ai-automation-for-regulated-industries-magneo/'],
      ['PERSONAL BRANDING', '/services/personal-branding-for-regulated-professionals/']
    ]
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

    var path = window.location.pathname;
    var items = marqueeForPath(path);
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

  function bootEnhancements() {
    initMobileNav();
    initDesktopMegaClose();
    initContextMarquee();

    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      initMobileNav();
      initDesktopMegaClose();
      initContextMarquee();
      if (attempts > 40) window.clearInterval(timer);
    }, 100);

    if ('MutationObserver' in window) {
      var observer = new MutationObserver(function () {
        initMobileNav();
        initDesktopMegaClose();
        initContextMarquee();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 6000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootEnhancements);
  } else {
    bootEnhancements();
  }
})();
