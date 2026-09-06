import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const concepts = [
  { number:'01', type:'Personal injury', title:'Classic authority', route:'/portfolio/legal-websites/personal-injury-classic/', image:'/pi-lawyer-hero-generated.png', className:'classic', description:'A calm, premium personal-injury experience built around credibility, direct access, and a clear consultation path.', tags:['Timeless','Conversion-led','Editorial'] },
  { number:'02', type:'Personal injury', title:'Bold human advocate', route:'/portfolio/legal-websites/personal-injury-bold/', image:'/pi-lawyer-hero-generated.png', className:'bold', description:'An expressive, high-energy identity that makes the lawyer memorable without losing empathy or professional confidence.', tags:['Expressive','Vivid','Human'] },
  { number:'03', type:'Litigation', title:'Editorial litigation', route:'/portfolio/legal-websites/litigation-editorial/', image:'/pi-lawyer-hero-generated.png', className:'editorial', description:'A monochrome, newspaper-inspired litigation site where motion turns complicated cases into decisive visual storytelling.', tags:['3D motion','Editorial','Trial-ready'] },
  { number:'04', type:'Serious injury', title:'Brain injury 3D', route:'/portfolio/legal-websites/brain-injury-3d/', image:'/brain-injury-head-3d-v2.png', className:'brain', description:'An immersive specialist concept using a dimensional neurological portrait to communicate focus, evidence, and dignity.', tags:['3D experience','Specialist','Immersive'] },
  { number:'05', type:'Personal injury', title:'Cinematic recovery', route:'/portfolio/legal-websites/personal-injury-cinematic/', image:'/test5-cinematic-hero.png', className:'cinematic', description:'A documentary-style scroll narrative that follows the human story from disruption through evidence and recovery.', tags:['Cinematic','Story-led','Atmospheric'] },
  { number:'06', type:'Personal injury', title:'Family-focused care', route:'/portfolio/legal-websites/personal-injury-family-focused/', image:'/test6-family-hero.png', className:'family', description:'A warm, reassuring experience designed for families making difficult decisions after a life-changing injury.', tags:['Empathetic','Warm','Family-first'] },
];

export default function LegalWebsitesTest(){
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? concepts : concepts.filter((item)=>item.type === filter);
  const scrollToCollection = (event) => {
    event.preventDefault();
    const target = document.getElementById('legal-collection');
    if (!target) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.history.replaceState(null, '', '#legal-collection');
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 68, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  useEffect(()=>{
    document.title = 'Legal Website Design Portfolio — Test | Magneo';
    let description = document.querySelector('meta[name="description"]');
    if(!description){ description=document.createElement('meta'); description.name='description'; document.head.appendChild(description); }
    description.content='Explore six original Magneo website concepts for personal injury, brain injury, and litigation law firms.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){ canonical=document.createElement('link'); canonical.rel='canonical'; document.head.appendChild(canonical); }
    canonical.href='https://magneo.ca/portfolio/legal-websites/test/';
    const robots=document.createElement('meta');
    robots.name='robots';
    robots.content='noindex, nofollow, noarchive';
    robots.dataset.legalWebsitesTest='true';
    document.head.appendChild(robots);
    return ()=>robots.remove();
  },[]);

  return <div className="lwp">
    <section className="lwp-hero">
      <div className="container lwp-hero-grid">
        <div><div className="lwp-overline"><i/> Magneo legal design collection · 2026</div><h1>Law firm websites<br/>people <em>remember.</em></h1></div>
        <div className="lwp-hero-side"><p>Six original directions. Each one combines a distinct visual identity with the clarity, trust, and decisive next step a legal website needs.</p><a href="#legal-collection" onClick={scrollToCollection}>Explore the collection <span>↓</span></a></div>
      </div>
      <div className="lwp-ticker"><div>STRATEGY <i/> IDENTITY <i/> MOTION <i/> TRUST <i/> CONVERSION <i/> STRATEGY <i/> IDENTITY <i/> MOTION <i/> TRUST <i/> CONVERSION</div></div>
    </section>

    <section className="lwp-intro">
      <div className="container lwp-intro-grid"><span>Not themes pulled from a shelf.</span><h2>Built around how a legal client needs to <em>feel</em> before they make the first call.</h2><p>Every concept explores a different route to confidence—from quiet authority and specialist expertise to cinematic storytelling and family-centered reassurance.</p></div>
    </section>

    <section className="lwp-collection" id="legal-collection">
      <div className="container">
        <div className="lwp-collection-head"><div><span>Selected concepts</span><h2>Choose a direction.</h2></div><div className="lwp-filters" aria-label="Filter legal website concepts">{['All','Personal injury','Litigation','Serious injury'].map((name)=><button type="button" className={filter===name?'active':''} aria-pressed={filter===name} onClick={()=>setFilter(name)} key={name}>{name}</button>)}</div></div>
        <div className="lwp-grid">{visible.map((concept)=><article className={`lwp-card ${concept.className}`} key={concept.route}>
          <Link className="lwp-visual" to={concept.route} aria-label={`Explore ${concept.title}`}><img src={concept.image} alt=""/><div className="lwp-art"><span>{concept.type}</span><b>{concept.className==='editorial'?'COMPLICATED\nCASES':concept.className==='brain'?'THE MIND\nMATTERS':concept.className==='cinematic'?'ONE SECOND\nCHANGED\nEVERYTHING':concept.className==='family'?'YOUR FAMILY\nIS NOT ALONE':concept.className==='bold'?'HURT.\nHEARD.\nREADY.':'ADVOCACY\nWITH\nCLARITY.'}</b></div><i className="lwp-open">↗</i></Link>
          <div className="lwp-card-meta"><div className="lwp-number">{concept.number}</div><div><span>{concept.type} · Fictional concept</span><h3><Link to={concept.route}>{concept.title}</Link></h3><p>{concept.description}</p><div className="lwp-tags">{concept.tags.map((tag)=><span key={tag}>{tag}</span>)}</div></div></div>
        </article>)}</div>
      </div>
    </section>

    <section className="lwp-method"><div className="container"><div className="lwp-method-head"><span>One standard across every direction</span><h2>Distinctive enough to win attention.<br/><em>Disciplined enough to win trust.</em></h2></div><div className="lwp-method-grid"><article><b>01</b><h3>Position first</h3><p>The design begins with the kind of case, client, and competitive position the firm wants.</p></article><article><b>02</b><h3>Build belief</h3><p>Language, evidence, imagery, and interactions work together to reduce uncertainty.</p></article><article><b>03</b><h3>Make action easy</h3><p>Every experience creates a clear path from first impression to confidential consultation.</p></article></div></div></section>

    <section className="lwp-cta"><div className="container lwp-cta-inner"><span>Need a direction that belongs only to your firm?</span><h2>Let’s create the seventh.</h2><p>We adapt the strongest strategic ideas to your market, practice, people, and voice—then build an original website around them.</p><Link className="btn" to="/contact/">Discuss your law firm website ↗</Link></div></section>

    <section className="lwp-disclosure"><div className="container"><b>About this collection</b><p>All six experiences are original fictional design concepts created by Magneo. Firm names, lawyers, claims, credentials, testimonials, and results shown inside the concepts are illustrative and do not represent real clients or legal services.</p></div></section>
  </div>;
}
