import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const legalPreviews = [
  ['/pi-lawyer-hero-generated.png','classic'],
  ['/pi-lawyer-hero-generated.png','bold'],
  ['/pi-lawyer-hero-generated.png','editorial'],
  ['/brain-injury-head-3d-v2.png','brain'],
  ['/test5-cinematic-hero.png','cinematic'],
  ['/test6-family-hero.png','family'],
];

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
        <a href="#web-design"><small>01 / Portfolio discipline</small><strong>Websites</strong><span>Design, positioning and conversion</span><i aria-hidden="true">↓</i></a>
        <a href="#social-media"><small>02 / Portfolio discipline</small><strong>Social media</strong><span>Authority, content and distribution</span><i aria-hidden="true">↓</i></a>
        <a href="#ai-marketing"><small>03 / Portfolio discipline</small><strong>AI-powered marketing</strong><span>Research, production and optimization</span><i aria-hidden="true">↓</i></a>
      </div>
    </section>

    <section className="pf-intro" id="disciplines"><div className="container pf-intro-grid"><span>How the portfolio is organized</span><h2>Not by industry.<br/>By the work we do.</h2><p>Each discipline solves a different part of the same problem: becoming easier to find, easier to trust, and easier to choose.</p></div></section>

    <section className="pf-discipline pf-web" id="web-design">
      <div className="container">
        <div className="pf-discipline-head"><div><span>01 / Website design</span><h2>Turn expertise into<br/><em>an experience.</em></h2></div><div><p>Distinctive, conversion-focused websites for regulated businesses—where clarity, credibility, and visual memory all matter.</p><Link to="/services/website-design-for-regulated-professional-industries-magneo/">Explore website design ↗</Link></div></div>
        <Link className="pf-web-showcase" to="/portfolio/legal-websites/" aria-label="Explore six legal website concepts">
          <div className="pf-preview-grid">{legalPreviews.map(([src,style],index)=><div className={`pf-preview ${style}`} key={`${style}-${index}`}><img src={src} alt={`Legal website concept ${index+1}`}/><span>{String(index+1).padStart(2,'0')}</span></div>)}</div>
          <div className="pf-showcase-bar"><div><span>Featured collection · Legal websites</span><b>Six ways to make legal expertise unforgettable.</b></div><i>→</i></div>
        </Link>
        <div className="pf-web-meta"><span>Live collection</span><span>6 original concepts</span><span>Personal injury + litigation</span><Link to="/portfolio/legal-websites/">View the complete collection ↗</Link></div>
      </div>
    </section>

    <section className="pf-discipline pf-social" id="social-media">
      <div className="container pf-social-grid">
        <div className="pf-social-copy"><span>02 / Social media marketing</span><h2>Build authority<br/>before the <em>click.</em></h2><p>Content systems that turn specialist knowledge into recognizable points of view—designed for consistency, credibility, and sustained attention.</p><div className="pf-capabilities"><span>Strategy</span><span>LinkedIn</span><span>Short-form video</span><span>Founder brands</span></div><Link to="/services/social-media-linkedin-marketing-for-regulated-industries/">Explore social media marketing ↗</Link></div>
        <div className="pf-social-board" aria-label="Social content system concept">
          <article className="pf-post pf-post-one"><small>Authority series / 01</small><b>What your audience<br/>needs explained.</b><i>↗</i></article>
          <article className="pf-post pf-post-two"><small>Founder point of view</small><b>Expertise becomes<br/>recognition through<br/>repetition.</b><div><i/><i/><i/><i/></div></article>
          <article className="pf-post pf-post-three"><span>03</span><b>One idea.<br/>Multiple formats.</b><small>Article → carousel → video → conversation</small></article>
          <div className="pf-board-label">Portfolio collection in development</div>
        </div>
      </div>
    </section>

    <section className="pf-discipline pf-ai" id="ai-marketing">
      <div className="container">
        <div className="pf-discipline-head"><div><span>03 / AI-powered digital marketing</span><h2>Move faster.<br/><em>Keep judgment human.</em></h2></div><div><p>AI-assisted research, content, search, creative production, and optimization—with the review systems regulated brands require.</p><Link to="/services/ai-powered-digital-marketing/">Explore AI-powered marketing ↗</Link></div></div>
        <div className="pf-ai-system">
          <div className="pf-ai-map" aria-label="AI-powered marketing workflow concept"><span className="pf-node node-one">Signal<small>Audience + search</small></span><i/><span className="pf-node node-two">Strategy<small>Human direction</small></span><i/><span className="pf-node node-three">Create<small>Content + campaigns</small></span><i/><span className="pf-node node-four">Learn<small>Measure + improve</small></span></div>
          <div className="pf-ai-detail"><span>Controlled acceleration</span><h3>Automation where it helps.<br/>Review where it matters.</h3><p>The system increases production capacity without outsourcing brand judgment, factual accuracy, or compliance responsibility.</p><div><b>Research</b><b>SEO</b><b>Content</b><b>Video</b><b>Workflows</b></div><small>Portfolio collection in development</small></div>
        </div>
      </div>
    </section>

    <section className="pf-system"><div className="container"><span>One connected system</span><div className="pf-system-flow"><b>Website</b><i>→</i><b>Content</b><i>→</i><b>Attention</b><i>→</i><b>Demand</b><i>→</i><b>Learning</b></div><p>Each service can stand alone. The strongest results come when the website, publishing system, distribution, and optimization loop reinforce one another.</p></div></section>

    <section className="pf-cta"><div className="container"><span>Which discipline needs to move first?</span><h2>Let’s make the next<br/>piece of work <em>yours.</em></h2><div><p>Tell us what your audience needs to understand, believe, and do.</p><Link className="btn" to="/contact/">Start a conversation ↗</Link></div></div></section>
  </div>;
}
