import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const websiteGallery = [
  ['/pi-lawyer-hero-generated.png','Personal injury · Classic','classic'],
  ['/pi-lawyer-hero-generated.png','Personal injury · Bold','bold'],
  ['/pi-lawyer-hero-generated.png','Litigation · Editorial','editorial'],
  ['/brain-injury-head-3d-v2.png','Brain injury · 3D','brain'],
  ['/test5-cinematic-hero.png','Personal injury · Cinematic','cinematic'],
  ['/test6-family-hero.png','Personal injury · Family','family'],
];

const socialGallery = [
  ['/portfolio/social/immersive-scenario.webp','Immersive scenario reel'],
  ['/portfolio/social/commentary-reel.webp','Commentary reel'],
  ['/portfolio/social/podcast-interview.webp','Podcast interview reel'],
  ['/portfolio/social/conversational-reel.webp','Conversational reel'],
];

const aiGallery = [
  ['/portfolio/ai/custom-gpt.webp','Custom GPT'],
  ['/portfolio/ai/ai-content-system.webp','AI content systems'],
  ['/portfolio/ai/hubspot-automation.webp','HubSpot automation'],
];

function PreviewGallery({items, className, title, summary, offset=0, cta, id}){
  const [active,setActive]=useState(0);

  useEffect(()=>{
    if(items.length<2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let cycle;
    const start=window.setTimeout(()=>{
      setActive(current=>(current+1)%items.length);
      cycle=window.setInterval(()=>setActive(current=>(current+1)%items.length),4200);
    },4200+offset);
    return ()=>{window.clearTimeout(start);window.clearInterval(cycle);};
  },[items,offset]);

  const [src,label,style='']=items[active];
  const ctaContent=<><span><small>{cta.eyebrow}</small><b>{cta.label}</b></span><i aria-hidden="true">→</i></>;
  return <section className={`pf-mini-gallery ${className}`} id={id} aria-label={`${title}: rotating portfolio previews`}>
    <div className="pf-mini-head"><span>{title}</span><small>{summary}</small></div>
    <div className="pf-mini-stage">
      <figure className={`pf-mini-card ${style}`} key={`${label}-${active}`}>
        <img src={src} alt={label} loading="lazy"/>
        <figcaption><span>{String(active+1).padStart(2,'0')}</span>{label}</figcaption>
      </figure>
      <div className="pf-mini-progress" aria-hidden="true">{items.map((item,index)=><i className={index===active?'active':''} key={item[1]}/>)}</div>
    </div>
    {cta.href
      ? <Link className="pf-gallery-cta" to={cta.href} aria-label={cta.label}>{ctaContent}</Link>
      : <div className="pf-gallery-cta is-disabled" aria-disabled="true">{ctaContent}</div>}
  </section>;
}

export default function PortfolioTest(){
  useEffect(()=>{
    document.title='Portfolio Concepts & Demonstrations | Magneo';
    let description=document.querySelector('meta[name="description"]');
    if(!description){description=document.createElement('meta');description.name='description';document.head.appendChild(description);}
    description.content='Private review of Magneo portfolio concepts and demonstrations across websites, social media, and AI-powered marketing.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href='https://magneo.ca/portfolio/test/';
    const robots=document.createElement('meta');
    robots.name='robots';
    robots.content='noindex, nofollow, noarchive';
    robots.dataset.portfolioTest='true';
    document.head.appendChild(robots);
    return ()=>robots.remove();
  },[]);

  return <div className="pf-main pf-copy-test">
    <section className="pf-hero">
      <div className="container pf-hero-inner">
        <div className="pf-kicker"><span>Magneo portfolio · Concepts &amp; demonstrations</span><span>Three connected disciplines</span></div>
        <h1>Distinctive websites.<br/><em>Content with purpose.</em></h1>
        <div className="pf-hero-foot"><div><p>Explore our approach to website design, social media, and AI-powered marketing for businesses in regulated industries. See how we bring clear messaging and creative execution together.</p><small className="pf-hero-disclosure">The examples shown are original Magneo concepts and demonstrations, not commissioned client projects.</small></div><a href="#portfolio-previews">Explore the portfolio <span>↓</span></a></div>
      </div>
      <div className="pf-hero-code" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
    </section>

    <section className="pf-index" id="portfolio-categories">
      <div className="pf-index-line" aria-hidden="true"/>
      <div className="container pf-index-grid">
        <div className="pf-index-card"><small>01 / Explore</small><strong>Websites</strong><span>Design, content &amp; development</span><i aria-hidden="true">↓</i></div>
        <div className="pf-index-card"><small>02 / Explore</small><strong>Social media</strong><span>Posts, video &amp; content strategy</span><i aria-hidden="true">↓</i></div>
        <div className="pf-index-card"><small>03 / Explore</small><strong>AI-powered marketing</strong><span>Research, content &amp; workflows</span><i aria-hidden="true">↓</i></div>
      </div>
      <div className="container pf-category-galleries" id="portfolio-previews" aria-label="Portfolio concepts and demonstrations">
        <PreviewGallery items={websiteGallery} className="pf-mini-web" id="website-gallery" title="Website concepts" summary="06 original concepts" cta={{eyebrow:'Featured collection · Legal websites',label:'Explore law firm website concepts',href:'/portfolio/legal-websites/'}}/>
        <PreviewGallery items={socialGallery} className="pf-mini-social" id="social-gallery" title="Social media concepts" summary="04 reel concepts" offset={700} cta={{eyebrow:'Reel previews',label:'Full collection coming soon'}}/>
        <PreviewGallery items={aiGallery} className="pf-mini-ai" id="ai-gallery" title="AI marketing demonstrations" summary="03 workflow concepts" offset={1400} cta={{eyebrow:'Workflow previews',label:'Full collection coming soon'}}/>
      </div>
      <div className="container pf-web-meta"><span>Explore now</span><span>6 law firm website concepts</span><span>Personal injury + litigation</span></div>
    </section>

    <section className="pf-web-info" aria-labelledby="website-development-title">
      <div className="container pf-web-info-grid">
        <div><span>01 / Website development</span><h2 id="website-development-title">Show what sets you apart.<br/><em>Make the next step clear.</em></h2></div>
        <div><p>We bring strategy, copy, design, and development together to explain what you offer, help visitors assess whether you are the right fit, and make it easy to contact you.</p><div className="pf-capabilities"><span>Website strategy</span><span>Copy &amp; design</span><span>Development</span><span>SEO foundations</span></div><Link to="/services/website-design-for-regulated-professional-industries-magneo/">Explore website development ↗</Link></div>
      </div>
    </section>

    <section className="pf-discipline pf-social" id="social-media">
      <div className="container pf-social-grid">
        <div className="pf-social-copy"><span>02 / Social media marketing</span><h2>Share your expertise.<br/>Give people a reason to <em>follow.</em></h2><p>We turn your expertise and your audience’s questions into LinkedIn posts, short videos, and recurring content series—with a clear message and a consistent voice.</p><div className="pf-capabilities"><span>Content strategy</span><span>LinkedIn</span><span>Short-form video</span><span>Personal branding</span></div><Link to="/services/social-media-linkedin-marketing-for-regulated-industries/">Explore social media marketing ↗</Link></div>
        <div className="pf-social-board" aria-label="Illustrative social content series">
          <article className="pf-post pf-post-one"><small>Client questions / 01</small><b>Answer what people<br/>want to know.</b><i>↗</i></article>
          <article className="pf-post pf-post-two"><small>Your perspective</small><b>Explain what you think.<br/>Show why it matters.</b><div><i/><i/><i/><i/></div></article>
          <article className="pf-post pf-post-three"><span>03</span><b>One idea.<br/>Multiple formats.</b><small>Article → carousel → video</small></article>
          <div className="pf-board-label">Illustrative content series</div>
        </div>
      </div>
    </section>

    <section className="pf-discipline pf-ai" id="ai-marketing">
      <div className="container">
        <div className="pf-discipline-head"><div><span>03 / AI-powered digital marketing</span><h2>Move faster.<br/><em>Keep judgment human.</em></h2></div><div><p>Explore how AI can support marketing research, content drafts, and creative production, with people directing the work and reviewing the output.</p><Link to="/services/ai-powered-digital-marketing/">Explore AI-powered marketing ↗</Link></div></div>
        <div className="pf-ai-system">
          <div className="pf-ai-map" aria-label="Illustrative AI marketing workflow"><span className="pf-node node-one">Research<small>Audience &amp; topics</small></span><i/><span className="pf-node node-two">Plan<small>Human direction</small></span><i/><span className="pf-node node-three">Create<small>Drafts &amp; creative</small></span><i/><span className="pf-node node-four">Review<small>Check &amp; refine</small></span></div>
          <div className="pf-ai-detail"><span>Human review</span><h3>Useful drafts.<br/>Careful review.</h3><p>AI output is a starting point. Facts, sources, tone, and suitability for the intended audience need checking before publication.</p><div><b>Research</b><b>SEO</b><b>Content</b><b>Video</b><b>Workflows</b></div><small>Illustrative AI workflow</small></div>
        </div>
      </div>
    </section>

    <section className="pf-system"><div className="container"><span>How the work connects</span><div className="pf-system-flow"><b>Plan</b><i>→</i><b>Build</b><i>→</i><b>Publish</b><i>→</i><b>Review</b><i>→</i><b>Refine</b></div><p>Start with the service you need now. When your project spans several services, we keep the message, visual identity, and priorities consistent across them.</p></div></section>

    <section className="pf-cta"><div className="container"><span>Your next project</span><h2>Let’s talk about<br/><em>what you want to create.</em></h2><div><p>Need a new website, a clearer content direction, or help using AI in your marketing? Tell us what you have in mind and where you need support.</p><Link className="btn" to="/contact/">Discuss your project ↗</Link></div></div></section>
  </div>;
}
