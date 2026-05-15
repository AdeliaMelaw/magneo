(function () {
  var configs = {
    law: {
      match: '/law-firm-marketing',
      name: 'law firm marketing',
      audience: ['Employment lawyers', 'Immigration lawyers', 'Family lawyers', 'Personal injury lawyers'],
      included: ['Practice-area SEO architecture', 'Law firm website and conversion paths', 'LinkedIn authority content', 'PPC and landing page structure', 'AI-assisted intake and follow-up workflows', 'Reputation and trust-building systems'],
      useCases: ['New practice-area launch', 'Local SEO expansion', 'Consultation funnel rebuild', 'Referral-brand authority system']
    },
    finance: {
      match: '/financial-firm-marketing',
      name: 'financial firm marketing',
      audience: ['Wealth advisors', 'Insurance advisors', 'Investment firms', 'Portfolio managers'],
      included: ['Financial SEO and topic architecture', 'Trust-first website messaging', 'LinkedIn authority content', 'PPC and compliant landing pages', 'AI follow-up and reporting workflows', 'Review-ready proof and disclaimer support'],
      useCases: ['Advisor lead-generation system', 'Wealth firm rebrand', 'FinTech conversion campaign', 'Portfolio manager authority program']
    },
    healthcare: {
      match: '/healthcare-marketing',
      name: 'healthcare marketing',
      audience: ['Mental health clinics', 'Chiropractic clinics', 'Family medicine practices', 'Dental and aesthetic clinics'],
      included: ['Healthcare SEO and local visibility', 'Patient-focused website structure', 'Social content and education systems', 'Google Ads and landing page support', 'AI-assisted intake workflows', 'Reputation and review growth paths'],
      useCases: ['Clinic booking growth system', 'Provider reputation rebuild', 'New location launch', 'Patient education content engine']
    },
    tech: {
      match: '/tech-company-marketing',
      name: 'tech company marketing',
      audience: ['SaaS companies', 'FinTech companies', 'LegalTech teams', 'AI and crypto brands'],
      included: ['Technical SEO and content architecture', 'Product website and conversion messaging', 'LinkedIn thought leadership systems', 'Demo and pipeline landing pages', 'AI-assisted content operations', 'Proof, security, and trust storytelling'],
      useCases: ['SaaS demo funnel', 'AI company authority build', 'FinTech launch campaign', 'LegalTech product repositioning']
    }
  };

  function currentConfig() {
    var path = window.location.pathname;
    return Object.keys(configs).map(function (key) { return configs[key]; }).find(function (config) {
      return path.indexOf(config.match) === 0;
    });
  }

  function card(title, text, index) {
    return '<div class="sd-card"><small>0' + index + '</small><h3>' + title + '</h3><p>' + text + '</p></div>';
  }

  function initIndustryDepth() {
    var config = currentConfig();
    if (!config) return true;
    var main = document.querySelector('main');
    if (!main) return false;
    var existing = main.querySelector('.industry-depth');
    if (existing && existing.dataset.path === window.location.pathname) return true;
    if (existing) existing.remove();

    var process = main.querySelector('.process');
    var after = process && process.closest('section');
    if (!after) return false;

    var section = document.createElement('section');
    section.className = 'service-depth industry-depth';
    section.dataset.path = window.location.pathname;
    section.innerHTML = [
      '<div class="container">',
      '<div class="sd-block"><div class="label">Who it is for</div><h2>' + titleCase(config.name) + ' for high-trust teams that need qualified demand.</h2><div class="sd-grid four">',
      config.audience.map(function (item, i) { return card(item, 'A focused growth path built around trust, search visibility, conversion clarity, and industry-specific buyer decisions.', i + 1); }).join(''),
      '</div></div>',
      '<div class="sd-block sd-included"><div><div class="label">What is included</div><h2>A complete industry growth system, not a one-off marketing tactic.</h2></div><ul class="sd-checks">',
      config.included.map(function (item) { return '<li>' + item + '</li>'; }).join(''),
      '</ul></div>',
      '<div class="sd-block"><div class="label">Results</div><h2>What clients typically see.</h2><div class="sd-grid three">',
      card('More qualified inquiries', 'Better-fit prospects because the industry message, proof, and offer are clearer.', 1),
      card('Higher trust before contact', 'Pages, content, and proof points answer buyer concerns before a call is booked.', 2),
      card('Cleaner conversion paths', 'Visitors can move from industry context to relevant services without confusion.', 3),
      card('Stronger SEO coverage', 'Service, industry, and sub-industry pages support topical authority and internal linking.', 4),
      card('Better content consistency', 'Social, search, website, and automation all point to the same market position.', 5),
      card('Measurable pipeline signals', 'Tracking and reporting make it easier to see which pages and campaigns drive demand.', 6),
      '</div></div>',
      '<div class="sd-block"><div class="label">Use cases</div><h2>Common ways we apply ' + config.name + '.</h2><div class="sd-grid four">',
      config.useCases.map(function (item, i) { return card(item, 'A practical buildout combining strategy, pages, content, conversion paths, and performance review.', i + 1); }).join(''),
      '</div></div>',
      '<div class="sd-block sd-faq"><div><div class="label">FAQ</div><h2>Common questions before starting.</h2></div><div class="sd-faq-list">',
      '<details><summary>Is this different from a regular marketing plan?</summary><p>Yes. The work is built around your industry, buyer expectations, trust signals, and the rules that shape what you can say.</p></details>',
      '<details open><summary>Do you create both strategy and pages?</summary><p>Yes. We can map the strategy, build the page structure, write the messaging, and connect the services, industry pages, and insights together.</p></details>',
      '<details><summary>Can this support SEO migration?</summary><p>Yes. The sections, links, and page structure are designed to preserve important URLs and strengthen internal linking after the WordPress-to-React move.</p></details>',
      '<details><summary>Can you adapt this for sub-industries?</summary><p>Yes. The same structure can be expanded for wealth advisors, clinics, SaaS companies, legal practices, and other focused markets.</p></details>',
      '</div></div>',
      '</div>'
    ].join('');
    after.insertAdjacentElement('afterend', section);
    return true;
  }

  function titleCase(text) {
    return text.replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
  }

  function boot() {
    initIndustryDepth();
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      initIndustryDepth();
      if (attempts > 40) window.clearInterval(timer);
    }, 100);
    if ('MutationObserver' in window) {
      var observer = new MutationObserver(initIndustryDepth);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      window.setTimeout(function () { observer.disconnect(); }, 6000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
