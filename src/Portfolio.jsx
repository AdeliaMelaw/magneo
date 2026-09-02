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
    document.title='Portfolio | Magneo — Work for Regulated Industries';
    let description=document.querySelector('meta[name="description"]');
    if(!description){description=document.createElement('meta');description.name='description';document.head.appendChild(description);}
    description.content='Explore Magneo portfolio work and original website concepts for legal and other regulated industries.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href='https://magneo.ca/portfolio/';
  },[]);

  return <div className="pf-main">
    <section className="pf-hero">
      <div className="container pf-hero-inner">
        <div className="pf-kicker"><span>Selected work · Magneo</span><span>Toronto / Canada + USA</span></div>
        <h1>Work built to<br/>earn <em>trust.</em></h1>
        <div className="pf-hero-foot"><p>Strategy, identity, websites, and growth systems for businesses where credibility is part of the product.</p><a href="#featured-work">View selected work <span>↓</span></a></div>
      </div>
      <div className="pf-orbit" aria-hidden="true"><i/><i/><i/></div>
    </section>

    <section className="pf-index"><div className="container"><div><b>01</b><span>Live collection</span></div><div><b>06</b><span>Original legal concepts</span></div><div><b>04</b><span>Regulated sectors</span></div><div><b>01</b><span>Standard: earn trust</span></div></div></section>

    <section className="pf-intro"><div className="container pf-intro-grid"><span>Our portfolio</span><h2>Different industries.<br/>One difficult brief.</h2><p>Make a complex, high-stakes service feel clear enough to understand, credible enough to believe, and human enough to choose.</p></div></section>

    <section className="pf-featured" id="featured-work">
      <div className="container">
        <div className="pf-section-head"><div><span>Featured collection · 01</span><h2>Legal websites</h2></div><p>Six fictional law-firm directions exploring authority, empathy, specialist expertise, motion, and conversion.</p></div>
        <Link className="pf-showcase" to="/portfolio/legal-websites/" aria-label="Explore the legal website design collection">
          <div className="pf-preview-grid">{legalPreviews.map(([src,style],index)=><div className={`pf-preview ${style}`} key={`${style}-${index}`}><img src={src} alt=""/><span>{String(index+1).padStart(2,'0')}</span></div>)}</div>
          <div className="pf-showcase-bar"><div><span>Law firm website design</span><b>Six ways to make legal expertise unforgettable.</b></div><i>↗</i></div>
        </Link>
        <div className="pf-featured-meta"><span>Personal injury</span><span>Litigation</span><span>Serious injury</span><span>Strategy + UX + Art direction</span><Link to="/portfolio/legal-websites/">Explore all six concepts ↗</Link></div>
      </div>
    </section>

    <section className="pf-principles"><div className="container"><div className="pf-principles-title"><span>The work behind the work</span><h2>Designed to perform<br/>under scrutiny.</h2></div><div className="pf-principles-grid"><article><b>01 / Position</b><h3>Look unmistakably like yourself.</h3><p>We start with the audience, competitive landscape, and point of view—not a fashionable template.</p></article><article><b>02 / Explain</b><h3>Make complexity feel navigable.</h3><p>Structure, language, and interaction turn expertise into a decision people can confidently make.</p></article><article><b>03 / Convert</b><h3>Give trust somewhere to go.</h3><p>Every journey ends in a clear, low-friction next step built around how real buyers behave.</p></article></div></div></section>

    <section className="pf-sectors"><div className="container"><div className="pf-sectors-head"><span>Portfolio architecture</span><h2>A growing record of work<br/>for regulated industries.</h2><p>New collections will appear only when they are ready to demonstrate a complete strategic and creative direction.</p></div><div className="pf-sector-list"><Link to="/portfolio/legal-websites/"><b>01</b><span>Legal</span><small>Live · 6 concepts</small><i>↗</i></Link><div><b>02</b><span>Healthcare</span><small>Collection in development</small></div><div><b>03</b><span>Financial</span><small>Collection in development</small></div><div><b>04</b><span>Technology</span><small>Collection in development</small></div></div></div></section>

    <section className="pf-cta"><div className="container"><span>Have a high-trust brief?</span><h2>Let’s make the next<br/>piece of work <em>yours.</em></h2><div><p>Tell us what your audience needs to understand, believe, and do.</p><Link className="btn" to="/contact/">Start a conversation ↗</Link></div></div></section>
  </div>;
}
