(function () {
  function isHome() {
    return window.location.pathname === '/';
  }

  function addStyles() {
    if (document.getElementById('magneo-home-sections-style')) return;
    var style = document.createElement('style');
    style.id = 'magneo-home-sections-style';
    style.textContent = [
      '.home-service-strip{display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap;background:#8cff00;text-align:center}',
      '.home-service-strip a{display:inline-flex;align-items:center;justify-content:center;min-height:68px;padding:0 28px;border-right:1px solid rgba(0,0,0,.12);color:#2d4a00;font-size:12px;text-transform:uppercase}',
      '.home-service-strip a:first-child{border-left:1px solid rgba(0,0,0,.08)}.home-service-strip a:hover{background:rgba(0,0,0,.08)}',
      '.home-feature-section{background:#070707;color:#fff;padding:86px 0}',
      '.home-feature-section .home-feature-head{display:flex;justify-content:space-between;gap:40px;align-items:flex-end;margin-bottom:34px}',
      '.home-feature-section h2,.home-testimonials h2{font-family:var(--display);font-size:clamp(34px,4.8vw,58px);font-weight:400;line-height:1.04;margin:0;color:inherit}',
      '.home-feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}',
      '.home-feature-card{min-height:360px;border:1px solid rgba(255,255,255,.1);border-radius:22px;background:rgba(255,255,255,.045);padding:34px;overflow:hidden}',
      '.home-feature-card h3{font-size:28px;line-height:1.08;margin:0 0 18px;color:#fff}.home-feature-card p{color:rgba(255,255,255,.62);line-height:1.7;margin:0 0 24px}',
      '.home-check-list{display:grid;gap:12px;margin-top:28px}.home-check-item{display:flex;align-items:center;gap:10px;color:rgba(255,255,255,.78);font-size:14px}.home-check-dot{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#8cff00;color:#2d4a00;font-weight:800;font-size:12px}',
      '.home-bars{height:160px;display:flex;align-items:end;gap:12px;margin-top:42px}.home-bar{flex:1;border-radius:12px 12px 0 0;background:rgba(255,255,255,.12)}.home-bar.lit{background:#8cff00;box-shadow:0 0 28px rgba(140,255,0,.25)}',
      '.home-testimonials{background:#fff;color:#0a0a0a;padding:86px 0}.home-testimonials .section-head{margin-bottom:34px}',
      '.home-testimonial-grid{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:16px}.home-testimonial-card{position:relative;min-height:250px;border:1px solid #e8e8e8;border-radius:22px;background:#fff;padding:28px;overflow:hidden}.home-testimonial-card.featured{grid-row:span 2;background:#0a0a0a;color:#fff;border-color:#0a0a0a}.home-testimonial-card:before{content:"";position:absolute;left:0;top:0;width:100%;height:5px;background:#8cff00}',
      '.home-testimonial-card p{font-size:15px;line-height:1.7;color:#5f6870;margin:0 0 26px}.home-testimonial-card.featured p{font-size:22px;line-height:1.45;color:rgba(255,255,255,.86)}',
      '.home-testimonial-foot{display:flex;align-items:center;gap:12px;margin-top:auto}.home-avatar{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#8cff00;color:#2d4a00;font-weight:800}.home-testimonial-card.featured .home-avatar{background:#fff;color:#111}.home-name{font-weight:700}.home-role{font-size:12px;color:#8b949b}.home-testimonial-card.featured .home-role{color:rgba(255,255,255,.5)}',
      '@media(max-width:900px){.home-feature-section .home-feature-head{display:block}.home-feature-grid,.home-testimonial-grid{grid-template-columns:1fr}.home-testimonial-card.featured{grid-row:auto}.home-feature-card{min-height:0}.home-service-strip a{min-height:52px;padding:0 18px;font-size:11px}}'
    ].join('');
    document.head.appendChild(style);
  }

  function stripHtml() {
    var items = [
      ['SEO for Law Firms', '/services/seo-for-the-legal-industry/'],
      ['PPC & Landing Pages', '/services/ppc-landing-pages-for-regulated-industries/'],
      ['LinkedIn Growth', '/services/linkedin-growth-law-firms/'],
      ['AI Automation', '/services/ai-automation-for-regulated-industries-magneo/'],
      ['Website Design', '/services/website-design-for-regulated-professional-industries-magneo/'],
      ['Personal Branding', '/services/personal-branding-for-regulated-professionals/'],
      ['Financial Advisors', '/financial-firm-marketing/'],
      ['Healthcare Marketing', '/healthcare-marketing/'],
      ['SaaS & Tech', '/tech-company-marketing/']
    ];
    return '<div class="home-service-strip">' + items.map(function (item) {
      return '<a href="' + item[1] + '">' + item[0] + '</a>';
    }).join('') + '</div>';
  }

  function featureHtml() {
    return [
      '<section class="home-feature-section"><div class="container">',
      '<div class="home-feature-head"><div><div class="label">Why Magneo</div><h2>Built different<br>for regulated industries</h2></div></div>',
      '<div class="home-feature-grid">',
      '<article class="home-feature-card"><h3>Compliance-safe<br>by design</h3><p>Every strategy respects Law Society rules, CIRO/CSA requirements, and healthcare advertising standards. No risky wording, ever.</p><div class="home-check-list"><div class="home-check-item"><span class="home-check-dot">✓</span>Law Society compliant</div><div class="home-check-item"><span class="home-check-dot">✓</span>CIRO / CSA aware messaging</div><div class="home-check-item"><span class="home-check-dot">✓</span>No guarantees or risky claims</div></div></article>',
      '<article class="home-feature-card"><h3>Measurable ROI,<br>not vanity metrics</h3><p>We track what matters: qualified inquiries, booked consultations, and pipeline growth. Transparent reporting every month.</p><div class="home-bars"><span class="home-bar" style="height:30%"></span><span class="home-bar" style="height:42%"></span><span class="home-bar" style="height:55%"></span><span class="home-bar" style="height:64%"></span><span class="home-bar lit" style="height:75%"></span><span class="home-bar lit" style="height:88%"></span><span class="home-bar lit" style="height:100%"></span></div></article>',
      '</div></div></section>'
    ].join('');
  }

  function testimonialsHtml() {
    var cards = [
      ['featured', 'None understood the restrictions of legal advertising like Magneo. Qualified case inquiries up 160%, and every strategy was compliant with the Law Society rules.', 'AC', 'Andy Chen', 'Managing Partner, Corporate Law Firm, Toronto'],
      ['', 'In six months, we moved from page five to the top three results for high-value investment keywords. They speak compliance and still deliver ROI.', 'RD', 'Ruhat Djionlihan', 'Head of Marketing, FinTech Startup, Vancouver'],
      ['', 'Our clinic traffic doubled and patient bookings increased by 90%. The best part: zero risk to our reputation.', 'AK', 'Amelia Kirkstone', 'Clinic Director, Private Medical Center, Ottawa'],
      ['', 'Magneo AI-driven SEO gave us a fighting chance against massive brands. Their content strategy now generates 70% of our leads organically.', 'SA', 'Sagib Amir', 'Co-Founder, LegalTech SaaS Platform']
    ];
    return '<section class="home-testimonials"><div class="container"><div class="section-head"><div><div class="label">Client results</div><h2>What clients say</h2></div></div><div class="home-testimonial-grid">' + cards.map(function (card) {
      return '<article class="home-testimonial-card ' + card[0] + '"><p>"' + card[1] + '"</p><div class="home-testimonial-foot"><span class="home-avatar">' + card[2] + '</span><div><div class="home-name">' + card[3] + '</div><div class="home-role">' + card[4] + '</div></div></div></article>';
    }).join('') + '</div></div></section>';
  }

  function initHomepageSections() {
    if (!isHome()) return true;
    addStyles();
    var main = document.querySelector('main');
    if (!main) return false;
    var hero = main.querySelector('.home-hero');
    var services = main.querySelector('.svc-grid');
    var servicesSection = services && services.closest('section');
    var process = main.querySelector('.process');
    var processSection = process && process.closest('section');
    var cta = main.querySelector('.cta');
    var ctaSection = cta && cta.closest('section');
    if (hero && !main.querySelector('.home-service-strip')) hero.insertAdjacentHTML('afterend', stripHtml());
    if (servicesSection && !main.querySelector('.home-feature-section')) servicesSection.insertAdjacentHTML('afterend', featureHtml());
    if ((ctaSection || processSection) && !main.querySelector('.home-testimonials')) (ctaSection || processSection).insertAdjacentHTML('beforebegin', testimonialsHtml());
    return true;
  }

  function boot() {
    initHomepageSections();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      initHomepageSections();
      if (attempts > 40) window.clearInterval(timer);
    }, 100);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(initHomepageSections);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 6000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
