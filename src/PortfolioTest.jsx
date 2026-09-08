import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const websites = [
  { image:'/portfolio/websites/personal-injury-classic-preview-v2.png', name:'Personal injury · Classic', route:'/portfolio/legal-websites/personal-injury-classic/', style:'showcase' },
  { image:'/portfolio/websites/immigration-welcome-preview.png', name:'Immigration law · Welcome', route:'/portfolio/legal-websites/immigration-welcome/', style:'showcase' },
  { image:'/portfolio/websites/personal-injury-family-preview.png', name:'Personal injury · Family-focused', route:'/portfolio/legal-websites/personal-injury-family-focused/', style:'showcase' },
  { image:'/portfolio/websites/litigation-editorial-preview-v2.png', name:'Litigation · Editorial', route:'/portfolio/legal-websites/litigation-editorial/', style:'showcase' },
  { image:'/portfolio/websites/personal-injury-bold-preview-v2.png', name:'Personal injury · Bold', route:'/portfolio/legal-websites/personal-injury-bold/', style:'showcase' },
  { image:'/portfolio/websites/brain-injury-3d-preview.png', name:'Brain injury · 3D', route:'/portfolio/legal-websites/brain-injury-3d/', style:'showcase' },
  { image:'/portfolio/websites/personal-injury-cinematic-preview.png', name:'Personal injury · Cinematic', route:'/portfolio/legal-websites/personal-injury-cinematic/', style:'showcase' },
  { image:'/portfolio/websites/notary-document-desk-preview.png', name:'Notary services · Document desk', route:'/portfolio/notary-services/', style:'showcase' },
];

const socialExamples = [
  { image:'/portfolio/social/immersive-scenario.webp', title:'Know your rights', format:'Video concept' },
  { image:'/portfolio/social/podcast-interview.webp', title:'Expert perspective', format:'Interview video concept' },
  { image:'/portfolio/social/conversational-reel.webp', title:'One clear answer', format:'Conversational video concept' },
];

function SocialBoard(){
  return <div className="pf-social-board" aria-label="Illustrative social content series">
    <article className="pf-post pf-post-one"><small>Client questions / 01</small><b>Answer what people<br/>want to know.</b><i>↗</i></article>
    <article className="pf-post pf-post-two"><small>Your perspective</small><b>Explain what you think.<br/>Show why it matters.</b><div><i/><i/><i/><i/></div></article>
    <article className="pf-post pf-post-three"><span>03</span><b>One idea.<br/>Multiple formats.</b><small>Article → carousel → video</small></article>
    <div className="pf-board-label">Illustrative content series</div>
  </div>;
}

export default function PortfolioTest(){
  const [showAllWebsites,setShowAllWebsites]=useState(false);

  useEffect(()=>{
    document.title='Portfolio | Magneo — Web, Social & AI Marketing';
    let description=document.querySelector('meta[name="description"]');
    if(!description){description=document.createElement('meta');description.name='description';document.head.appendChild(description);}
    description.content='Explore Magneo website concepts, social media creative, and AI marketing demonstrations for regulated industries.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href='https://magneo.ca/portfolio/';
  },[]);

  return <div className="pf-main pf-portfolio-hub pf-portfolio-test">
    <section className="pf-hero">
      <div className="container pf-hero-inner">
        <div className="pf-kicker"><span>Magneo portfolio · Concepts &amp; demonstrations</span><span>Websites · Social media · AI marketing</span></div>
        <h1>Distinctive websites.<br/>Engaging content.<br/><em>AI-powered marketing.</em></h1>
        <div className="pf-hero-foot"><div><p>Explore website concepts, social media creative, and AI marketing demonstrations for businesses in regulated industries. Discover ideas for your next website, content campaign, or custom AI tool.</p><small className="pf-hero-disclosure">The examples shown are original Magneo concepts and demonstrations, not commissioned client projects.</small></div><a href="#portfolio-websites">Explore the portfolio <span>↓</span></a></div>
      </div>
      <div className="pf-hero-code" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
    </section>

    <section className="pf-web-info" id="portfolio-websites" aria-labelledby="portfolio-websites-title">
      <div className="container pf-web-info-grid">
        <div><span>Portfolio | Websites</span><h2 id="portfolio-websites-title">Distinctive design.<br/><em>A clear next step.</em></h2></div>
        <div><p>Explore website concepts that bring design, copy, and development together—helping visitors understand the business, explore its services, and get in touch.</p><Link to="/services/website-design-for-regulated-professional-industries-magneo/">Explore website development ↗</Link></div>
      </div>
    </section>

    <section className="pft-website-examples" aria-label="Website concepts">
      <div className="container">
        <div className="pft-website-grid" id="pft-website-grid">
          {websites.map((item,index)=><Link className={`pft-website-card ${item.style}${index>3&&!showAllWebsites?' is-concealed':''}`} to={item.route} key={item.route} aria-hidden={index>3&&!showAllWebsites ? 'true' : undefined} tabIndex={index>3&&!showAllWebsites ? -1 : undefined}>
            <div><img src={item.image} alt={`${item.name} website demonstration preview`} loading={index>3?'lazy':'eager'}/></div>
            <span><small>Website concept</small><strong>{item.name}</strong><i aria-hidden="true">↗</i></span>
          </Link>)}
        </div>
        <button className="pft-show-more" type="button" aria-expanded={showAllWebsites} aria-controls="pft-website-grid" onClick={()=>setShowAllWebsites((value)=>!value)}>{showAllWebsites?'Show fewer websites':'Show more websites'} <span aria-hidden="true">{showAllWebsites?'↑':'↓'}</span></button>
      </div>
    </section>

    <section className="pft-social-intro" id="social-media">
      <div className="container pf-discipline-head">
        <div><span>Portfolio | Social media</span><h2>Your expertise,<br/><em>made worth following.</em></h2></div>
        <div><p>Explore social posts, visual concepts, and short videos designed to explain ideas clearly and give your audience a reason to pay attention.</p></div>
      </div>
    </section>

    <section className="pft-social-story">
      <div className="container pft-social-story-grid">
        <div className="pft-social-story-image"><img src="/portfolio/social/commentary-reel.webp" alt="Social-media video creative featuring an expert explaining an idea" loading="lazy"/></div>
        <div><span>Content in context</span><h2>One idea. Different ways to tell it.</h2><p>A useful question can become a post, a carousel, or a short video—each shaped for the format while keeping a consistent message and visual style.</p></div>
      </div>
    </section>

    <section className="pft-social-black"><div className="container"><SocialBoard/></div></section>

    <section className="pft-social-examples" aria-labelledby="pft-social-examples-title">
      <div className="container">
        <h2 id="pft-social-examples-title">Social media examples</h2>
        <div className="pft-social-example-grid">
          {socialExamples.map((item)=><article className="pft-social-example" key={item.title}>
            <div><img src={item.image} alt={`${item.title} ${item.format.toLowerCase()} preview`} loading="lazy"/></div>
            <span><small>{item.format}</small><strong>{item.title}</strong></span>
          </article>)}
        </div>
      </div>
    </section>

    <section className="pf-discipline pf-ai" id="ai-marketing">
      <div className="container">
        <div className="pf-discipline-head"><div><span>03 / AI-powered digital marketing</span><h2>Your brand.<br/><em>More possibilities with AI.</em></h2></div><div><p>From brand voice tools and custom GPTs to UGC-style videos, advertising creative, and automation, explore how AI can support your marketing.</p><Link to="/services/ai-powered-digital-marketing/">Explore AI-powered marketing ↗</Link></div></div>
        <div className="pf-ai-system">
          <div className="pf-ai-map" aria-label="AI marketing capabilities"><span className="pf-node node-one">Brand voice<small>Consistent messaging</small></span><i/><span className="pf-node node-two">Custom GPTs<small>Tailored assistants</small></span><i/><span className="pf-node node-three">Video &amp; ads<small>UGC-style video &amp; ad creative</small></span><i/><span className="pf-node node-four">Automation<small>Repeatable marketing tasks</small></span></div>
          <div className="pf-ai-detail"><span>AI marketing capabilities</span><h3>Create for your brand.<br/>Simplify the everyday.</h3><p>Give your team tools to write in your brand’s voice, explore new video and ad concepts, and automate repetitive marketing tasks.</p><div><b>AI brand voice</b><b>Custom GPTs</b><b>AI UGC-style video</b><b>AI ad creative</b><b>AI automation</b></div><small>AI tools &amp; creative possibilities</small></div>
        </div>
      </div>
    </section>

    <section className="pf-system"><div className="container"><span>How the work connects</span><div className="pf-system-flow"><b>Plan</b><i>→</i><b>Build</b><i>→</i><b>Publish</b><i>→</i><b>Review</b><i>→</i><b>Refine</b></div><p>Start with the service you need now. When your project spans several services, we keep the message, visual identity, and priorities consistent across them.</p></div></section>

    <section className="pf-cta"><div className="container"><span>Your next project</span><h2>Let’s talk about<br/><em>what you want to create.</em></h2><div><p>Need a new website, a clearer content direction, or help using AI in your marketing? Tell us what you have in mind and where you need support.</p><Link className="btn" to="/contact/">Discuss your project ↗</Link></div></div></section>
  </div>;
}
