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

export default function Portfolio(){
  useEffect(()=>{
    document.title='Portfolio | Magneo — Web, Social & AI Marketing';
    let description=document.querySelector('meta[name="description"]');
    if(!description){description=document.createElement('meta');description.name='description';document.head.appendChild(description);}
    description.content='Explore Magneo work across website design, social media marketing, and AI-powered digital marketing for regulated industries.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href='https://magneo.ca/portfolio/';
  },[]);

  return <div className="pf-main">
    <section className="pf-hero">
      <div className="container pf-hero-inner">
        <div className="pf-kicker"><span>Magneo portfolio · Selected work</span><span>Three connected disciplines</span></div>
        <h1>Three disciplines.<br/><em>One growth system.</em></h1>
        <div className="pf-hero-foot"><p>Website design, social media, and AI-powered marketing—built together for businesses whose reputation has to perform before the first conversation begins.</p><a href="#portfolio-categories">Explore the portfolio <span>↓</span></a></div>
      </div>
      <div className="pf-hero-code" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
    </section>

    <section className="pf-index" id="portfolio-categories">
      <div className="pf-index-line" aria-hidden="true"/>
      <div className="container pf-index-grid">
        <a href="#website-gallery"><small>01 / Portfolio discipline</small><strong>Websites</strong><span>Design, positioning and conversion</span><i aria-hidden="true">↓</i></a>
        <a href="#social-gallery"><small>02 / Portfolio discipline</small><strong>Social media</strong><span>Authority, content and distribution</span><i aria-hidden="true">↓</i></a>
        <a href="#ai-gallery"><small>03 / Portfolio discipline</small><strong>AI-powered marketing</strong><span>Research, production and optimization</span><i aria-hidden="true">↓</i></a>
      </div>
      <div className="container pf-category-galleries" aria-label="Selected portfolio previews">
        <PreviewGallery items={websiteGallery} className="pf-mini-web" id="website-gallery" title="Website previews" summary="06 selected directions" cta={{eyebrow:'Featured collection · Legal websites',label:'View legal websites',href:'/portfolio/legal-websites/'}}/>
        <PreviewGallery items={socialGallery} className="pf-mini-social" id="social-gallery" title="Social previews" summary="04 reel concepts" offset={700} cta={{eyebrow:'Social media collection · Coming soon',label:'View social media posts'}}/>
        <PreviewGallery items={aiGallery} className="pf-mini-ai" id="ai-gallery" title="AI marketing previews" summary="03 applied systems" offset={1400} cta={{eyebrow:'AI systems collection · Coming soon',label:'View AI-marketing systems'}}/>
      </div>
      <div className="container pf-web-meta"><span>Live collection</span><span>6 original concepts</span><span>Personal injury + litigation</span><Link to="/portfolio/legal-websites/">View the complete collection ↗</Link></div>
    </section>

    <section className="pf-intro" id="disciplines"><div className="container pf-intro-grid"><span>How the portfolio is organized</span><h2>Not by industry.<br/>By the work we do.</h2><p>Each discipline solves a different part of the same problem: becoming easier to find, easier to trust, and easier to choose.</p></div></section>

    <section className="pf-web-info" aria-labelledby="website-development-title">
      <div className="container pf-web-info-grid">
        <div><span>01 / Website development</span><h2 id="website-development-title">Designed to be remembered.<br/><em>Built to perform.</em></h2></div>
        <div><p>Strategy, UX, copy, design, and development brought together in one focused build—creating a fast, accessible website that earns trust and turns attention into qualified enquiries.</p><div className="pf-capabilities"><span>Strategy + UX</span><span>Custom development</span><span>SEO foundations</span><span>Conversion</span></div><Link to="/services/website-design-for-regulated-professional-industries-magneo/">Explore website development ↗</Link></div>
      </div>
    </section>

    <section className="pf-discipline pf-social" id="social-media">
      <div className="container pf-social-grid">
        <div className="pf-social-copy"><span>02 / Social media marketing</span><h2>Build authority<br/>before the <em>click.</em></h2><p>Content systems that turn specialist knowledge into recognizable points of view—designed for consistency, credibility, and sustained attention.</p><div className="pf-capabilities"><span>Strategy</span><span>LinkedIn</span><span>Short-form video</span><span>Founder brands</span></div><Link to="/services/social-media-linkedin-marketing-for-regulated-industries/">Explore social media marketing ↗</Link></div>
        <div className="pf-social-board" aria-label="Social content system concept">
          <article className="pf-post pf-post-one"><small>Authority series / 01</small><b>What your audience<br/>needs explained.</b><i>↗</i></article>
          <article className="pf-post pf-post-two"><small>Founder point of view</small><b>Expertise becomes<br/>recognition through<br/>repetition.</b><div><i/><i/><i/><i/></div></article>
          <article className="pf-post pf-post-three"><span>03</span><b>One idea.<br/>Multiple formats.</b><small>Article → carousel → video → conversation</small></article>
          <div className="pf-board-label">Content system concept</div>
        </div>
      </div>
    </section>

    <section className="pf-discipline pf-ai" id="ai-marketing">
      <div className="container">
        <div className="pf-discipline-head"><div><span>03 / AI-powered digital marketing</span><h2>Move faster.<br/><em>Keep judgment human.</em></h2></div><div><p>AI-assisted research, content, search, creative production, and optimization—with the review systems regulated brands require.</p><Link to="/services/ai-powered-digital-marketing/">Explore AI-powered marketing ↗</Link></div></div>
        <div className="pf-ai-system">
          <div className="pf-ai-map" aria-label="AI-powered marketing workflow concept"><span className="pf-node node-one">Signal<small>Audience + search</small></span><i/><span className="pf-node node-two">Strategy<small>Human direction</small></span><i/><span className="pf-node node-three">Create<small>Content + campaigns</small></span><i/><span className="pf-node node-four">Learn<small>Measure + improve</small></span></div>
          <div className="pf-ai-detail"><span>Controlled acceleration</span><h3>Automation where it helps.<br/>Review where it matters.</h3><p>The system increases production capacity without outsourcing brand judgment, factual accuracy, or compliance responsibility.</p><div><b>Research</b><b>SEO</b><b>Content</b><b>Video</b><b>Workflows</b></div><small>Applied systems portfolio</small></div>
        </div>
      </div>
    </section>

    <section className="pf-system"><div className="container"><span>One connected system</span><div className="pf-system-flow"><b>Website</b><i>→</i><b>Content</b><i>→</i><b>Attention</b><i>→</i><b>Demand</b><i>→</i><b>Learning</b></div><p>Each service can stand alone. The strongest results come when the website, publishing system, distribution, and optimization loop reinforce one another.</p></div></section>

    <section className="pf-cta"><div className="container"><span>Which discipline needs to move first?</span><h2>Let’s make the next<br/>piece of work <em>yours.</em></h2><div><p>Tell us what your audience needs to understand, believe, and do.</p><Link className="btn" to="/contact/">Start a conversation ↗</Link></div></div></section>
  </div>;
}
