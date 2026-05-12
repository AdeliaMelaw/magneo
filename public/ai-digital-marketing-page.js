(function(){
  const AI_PAGE='/services/ai-powered-digital-marketing/';
  const AI_AUTOMATION='/services/ai-automation-for-regulated-industries-magneo/';
  const BLOG='https://blog.magneo.ca';
  const wait=(fn,tries=30)=>{const tick=()=>{if(fn()!==false)return;if(--tries>0)setTimeout(tick,120)};tick()};
  function setMeta(){
    document.title='AI-Powered Digital Marketing | Magneo';
    let d=document.querySelector('meta[name="description"]');
    if(!d){d=document.createElement('meta');d.name='description';document.head.appendChild(d)}
    d.content='AI SEO, AI social media marketing, AI UGC and video production, AI web design, conversion, and content marketing for regulated industries.';
    let c=document.querySelector('link[rel="canonical"]');
    if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)}
    c.href='https://magneo.ca'+AI_PAGE;
  }
  function patchHome(){
    const path=location.pathname.replace(/\/$/,'')||'/';
    if(path!=='/')return;
    return wait(()=>{
      const grid=document.querySelector('.svc-grid');
      if(!grid)return false;
      const cards=[...grid.querySelectorAll('.svc')];
      const fourth=cards[3];
      if(fourth){
        fourth.setAttribute('href',AI_AUTOMATION);
        const h=fourth.querySelector('h3');
        const p=fourth.querySelector('p');
        if(h)h.textContent='AI Automation for Regulated Industries';
        if(p)p.textContent='Intelligent workflows for regulated teams, follow-up, intake, reporting, and conversion.';
      }
      if(!grid.querySelector('[href="'+AI_PAGE+'"]')){
        const card=document.createElement('a');
        card.className='svc';
        card.href=AI_PAGE;
        card.innerHTML='<div class="svc-top"><span>06</span><b>↗</b></div><h3>AI-Powered Digital Marketing</h3><p>AI SEO, AI social media, AI UGC, AI video, web design, conversion, and content marketing.</p><small>Regulated growth</small>';
        grid.appendChild(card);
      }
    });
  }
  function renderAiPage(){
    const path=location.pathname.replace(/\/$/,'/') ;
    if(path!==AI_PAGE)return;
    wait(()=>{
      const main=document.querySelector('main');
      if(!main)return false;
      setMeta();
      main.innerHTML='\
<section class="hero"><div class="container hero-grid"><div><div class="crumb">Home / Services / AI-Powered Digital Marketing</div><div class="label">AI Marketing Systems</div><h1>AI-powered digital marketing<br/>for <em>regulated industries.</em></h1><p class="intro">Magneo builds AI-assisted marketing systems that help regulated businesses publish better content, improve search visibility, create trustworthy video and UGC, and convert more qualified demand without losing compliance discipline.</p><div class="actions"><a class="btn" href="/contact/">Start with a free audit</a><a class="btn outline" href="/services/">View all services</a></div></div><div class="glass"><span class="label">What it covers</span><ul><li>✓ AI SEO</li><li>✓ AI Social Media Marketing</li><li>✓ AI UGC & AI Video Production</li><li>✓ AI Web Design & Conversion</li><li>✓ AI Content Marketing</li></ul><p><a href="/contact/">Plan your AI marketing system ↗</a></p></div></div></section>\
<div class="marquee"><span>AI SEO</span><span>AI Social Media</span><span>AI UGC</span><span>AI Video Production</span><span>AI Web Design</span><span>AI Content Marketing</span><span>Compliance-Aware AI</span><span>Regulated Growth</span></div>\
<section class="section"><div class="container"><div class="label">AI service areas</div><h2>Use AI where it strengthens quality, speed, and trust.</h2><div class="grid"><article class="card"><small>Search</small><h3>AI SEO</h3><p>Search architecture, entity strategy, content briefs, internal linking, and optimization workflows built for regulated topics.</p></article><article class="card"><small>Social</small><h3>AI Social Media Marketing</h3><p>LinkedIn and social content systems that turn expertise into consistent, reviewable authority content.</p></article><article class="card"><small>Video</small><h3>AI UGC & AI Video Production</h3><p>Scripts, short-form video concepts, avatar-assisted production, and UGC-style campaigns with brand guardrails.</p></article><article class="card"><small>Conversion</small><h3>AI Web Design & Conversion</h3><p>Landing pages, UX testing ideas, CRO messaging, and conversion paths informed by buyer intent.</p></article><article class="card"><small>Content</small><h3>AI Content Marketing</h3><p>Editorial calendars, topical maps, long-form content, repurposing systems, and expert-led review workflows.</p></article><article class="card"><small>Governance</small><h3>Compliance-Aware AI Workflows</h3><p>Human review, claim checks, disclaimers, approval steps, and brand voice controls before anything goes live.</p></article></div></div></section>\
<section class="section dark"><div class="container"><div class="label">How we use AI</div><h2>AI supports the system. Strategy and review stay human.</h2><div class="process"><div class="process-row"><b>01</b><div><h3>Audit the opportunity</h3><p>We review content gaps, search demand, buyer questions, existing assets, and compliance constraints.</p></div></div><div class="process-row"><b>02</b><div><h3>Build the AI workflow</h3><p>We define prompts, approvals, templates, QA checks, and production steps for each channel.</p></div></div><div class="process-row"><b>03</b><div><h3>Produce and optimize</h3><p>We create content, pages, videos, campaigns, and reporting systems around measurable demand.</p></div></div><div class="process-row"><b>04</b><div><h3>Review and improve</h3><p>We refine outputs based on rankings, engagement, booked calls, and qualified inquiry quality.</p></div></div></div></div></section>\
<section class="related-section"><div class="container related-grid"><div><h2>Related Services</h2><i></i><ul><li><a href="/services/seo-for-regulated-industries/">SEO for Regulated Industries</a></li><li><a href="/services/social-media-linkedin-marketing-for-regulated-industries/">Social Media & LinkedIn Marketing</a></li><li><a href="/services/ai-automation-for-regulated-industries-magneo/">AI Automation for Regulated Industries</a></li><li><a href="/services/website-design-for-regulated-professional-industries-magneo/">Website Design for Regulated Industries</a></li><li><a href="/services/personal-branding-for-regulated-professionals/">Personal Branding for Regulated Professionals</a></li></ul></div><div><h2>Related Industries</h2><i></i><ul><li><a href="/law-firm-marketing/">Law Firms</a></li><li><a href="/financial-firm-marketing/">Financial Firms</a></li><li><a href="/healthcare-marketing/">Healthcare Providers & Clinics</a></li><li><a href="/tech-company-marketing/">Tech & SaaS Companies</a></li><li><a href="/tech-company-marketing/fintech-marketing/">FinTech</a></li></ul></div><div><h2>Related Insights</h2><i></i><ul><li><a href="'+BLOG+'/hyper-personalization-with-ai-for-saas-tech-brands/">Hyper-Personalization with AI for SaaS & Tech Brands</a></li><li><a href="'+BLOG+'/community-building-user-generated-content-for-saas-ai-companies/">Community Building & User-Generated Content for SaaS & AI Companies</a></li><li><a href="'+BLOG+'/using-ai-to-repurpose-content-and-personalize-advisor-outreach/">Using AI to Repurpose Content and Personalize Advisor Outreach</a></li><li><a href="'+BLOG+'/ai-marketing-for-law-firms/">AI Marketing for Law Firms</a></li></ul></div></div></section>\
<section class="section"><div class="container"><div class="cta"><h2>Ready to build an AI marketing system<br/>with <em>real guardrails?</em></h2><div class="actions"><a class="btn" href="/contact/">Request a free audit ↗</a><span>Free · No commitment · 30 min call</span></div></div></div></section>';
    });
  }
  function run(){patchHome();renderAiPage()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  window.addEventListener('popstate',()=>setTimeout(run,120));
})();
