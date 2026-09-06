import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const concepts = [
  { number:'01', type:'Personal injury', title:'Classic authority', route:'/portfolio/legal-websites/personal-injury-classic/', image:'/pi-lawyer-hero-generated.png', className:'classic', description:'A restrained personal injury concept that puts practice information, lawyer profiles, and the consultation route at the centre of the experience.', tags:['Timeless','Clear next steps','Editorial'] },
  { number:'02', type:'Personal injury', title:'Bold human advocate', route:'/portfolio/legal-websites/personal-injury-bold/', image:'/pi-lawyer-hero-generated.png', className:'bold', description:'A personality-led personal injury concept that gives the lawyer a prominent voice while keeping the tone approachable and empathetic.', tags:['Expressive','Vivid','Human'] },
  { number:'03', type:'Litigation', title:'Editorial litigation', route:'/portfolio/legal-websites/litigation-editorial/', image:'/pi-lawyer-hero-generated.png', className:'editorial', description:'A publication-inspired litigation concept that uses strong typography and structured storytelling to present complex legal work.', tags:['3D motion','Editorial','Litigation-focused'] },
  { number:'04', type:'Serious injury', title:'Brain injury 3D', route:'/portfolio/legal-websites/brain-injury-3d/', image:'/brain-injury-head-3d-v2.png', className:'brain', description:'A specialist injury concept that uses 3D imagery to establish its focus and explore a distinctive way to introduce brain injury information.', tags:['3D experience','Specialist','Immersive'] },
  { number:'05', type:'Personal injury', title:'Cinematic recovery', route:'/portfolio/legal-websites/personal-injury-cinematic/', image:'/test5-cinematic-hero.png', className:'cinematic', description:'A personal injury concept that uses a documentary-style narrative to introduce the human context behind an injury claim.', tags:['Cinematic','Story-led','Atmospheric'] },
  { number:'06', type:'Personal injury', title:'Family-focused care', route:'/portfolio/legal-websites/personal-injury-family-focused/', image:'/test6-family-hero.png', className:'family', description:'A reassuring personal injury concept written for families seeking clear information after a life-changing injury.', tags:['Empathetic','Warm','Family-first'] },
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

  return <div className="lwp lwp-test-copy">
    <section className="lwp-hero">
      <div className="container lwp-hero-grid">
        <div><div className="lwp-overline"><i/> Magneo · Law firm website concepts</div><h1>Your expertise.<br/>A clear reason to <em>choose your firm.</em></h1></div>
        <div className="lwp-hero-side"><p>Magneo brings positioning, copy, design, and development together for law firm websites. Explore six original concepts for personal injury and litigation practices, each showing a different approach to presenting expertise and guiding prospective clients toward an enquiry.</p><small className="lwp-hero-disclosure">These are fictional demonstration websites created by Magneo, not commissioned client projects.</small><a href="#legal-collection" onClick={scrollToCollection}>Explore the website concepts <span>↓</span></a></div>
      </div>
      <div className="lwp-ticker"><div>STRATEGY <i/> IDENTITY <i/> CONTENT <i/> DESIGN <i/> DEVELOPMENT <i/> STRATEGY <i/> IDENTITY <i/> CONTENT <i/> DESIGN <i/> DEVELOPMENT</div></div>
    </section>

    <section className="lwp-intro">
      <div className="container lwp-intro-grid"><span>Designed around the client’s questions</span><h2>Help prospective clients understand<br/>whether your firm is right for them.</h2><p>A prospective client needs to understand what you handle, why your experience matters, and what happens when they contact you. These concepts explore how content and design can make those answers easier to find.</p></div>
    </section>

    <section className="lwp-collection" id="legal-collection">
      <div className="container">
        <div className="lwp-collection-head"><div><span>Selected concepts</span><h2>Explore the possibilities for your firm.</h2></div><div className="lwp-filters" aria-label="Filter legal website concepts">{['All','Personal injury','Litigation','Serious injury'].map((name)=><button type="button" className={filter===name?'active':''} aria-pressed={filter===name} onClick={()=>setFilter(name)} key={name}>{name}</button>)}</div></div>
        <div className="lwp-grid">{visible.map((concept)=><article className={`lwp-card ${concept.className}`} key={concept.route}>
          <Link className="lwp-visual" to={concept.route} aria-label={`Explore ${concept.title}`}><img src={concept.image} alt=""/><div className="lwp-art"><span>{concept.type}</span><b>{concept.className==='editorial'?'COMPLICATED\nCASES':concept.className==='brain'?'THE MIND\nMATTERS':concept.className==='cinematic'?'ONE SECOND\nCHANGED\nEVERYTHING':concept.className==='family'?'YOUR FAMILY\nIS NOT ALONE':concept.className==='bold'?'HURT.\nHEARD.\nREADY.':'ADVOCACY\nWITH\nCLARITY.'}</b></div><i className="lwp-open">↗</i></Link>
          <div className="lwp-card-meta"><div className="lwp-number">{concept.number}</div><div><span>{concept.type} · Fictional concept</span><h3><Link to={concept.route}>{concept.title}</Link></h3><p>{concept.description}</p><div className="lwp-tags">{concept.tags.map((tag)=><span key={tag}>{tag}</span>)}</div></div></div>
        </article>)}</div>
      </div>
    </section>

    <section className="lwp-method"><div className="container"><div className="lwp-method-head"><span>The thinking behind the design</span><h2>Clear positioning.<br/>Credible content.<br/><em>An obvious next step.</em></h2></div><div className="lwp-method-grid"><article><b>01</b><h3>Clarify your focus</h3><p>Make it clear which matters your firm handles, who you serve, and what distinguishes your approach.</p></article><article><b>02</b><h3>Support your expertise</h3><p>Use relevant experience, accurate credentials, and clear explanations to help prospective clients assess your firm.</p></article><article><b>03</b><h3>Make contact straightforward</h3><p>Explain how to get in touch and what to expect next, so visitors do not have to guess how the process begins.</p></article></div></div></section>

    <section className="lwp-cta"><div className="container lwp-cta-inner"><span>Your firm’s website</span><h2>Let’s build around<br/>what sets your firm apart.</h2><p>Tell us about your practice areas, the clients you want to reach, and what your current website needs to do better. We’ll discuss an approach to content and design that reflects your firm.</p><Link className="btn" to="/contact/">Discuss your law firm website ↗</Link></div></section>

    <section className="lwp-disclosure"><div className="container"><b>About this collection</b><p>All six experiences are original fictional design concepts created by Magneo. Firm names, lawyers, claims, credentials, testimonials, and results shown inside the concepts are illustrative and do not represent real clients or legal services.</p></div></section>
  </div>;
}
