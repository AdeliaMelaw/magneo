import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const concepts = [
  ['/pi-lawyer-hero-generated.png', 'Personal injury · Classic', 'classic'],
  ['/pi-lawyer-hero-generated.png', 'Personal injury · Bold', 'bold'],
  ['/pi-lawyer-hero-generated.png', 'Litigation · Editorial', 'editorial'],
  ['/brain-injury-head-3d-v2.png', 'Brain injury · 3D', 'brain'],
  ['/test5-cinematic-hero.png', 'Personal injury · Cinematic', 'cinematic'],
  ['/test6-family-hero.png', 'Personal injury · Family focused', 'family'],
];

function ConceptPreview(){
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const cycle = window.setInterval(() => setActive((current) => (current + 1) % concepts.length), 4200);
    return () => window.clearInterval(cycle);
  }, []);

  const [src, label, style] = concepts[active];
  return <div className="pft-preview">
    <figure className={`pft-preview-frame ${style}`} key={`${label}-${active}`}>
      <img src={src} alt={`${label} law firm website concept`} />
      <figcaption><span>{String(active + 1).padStart(2, '0')}</span>{label}</figcaption>
    </figure>
    <div className="pft-progress" aria-hidden="true">{concepts.map((concept, index) => <i className={index === active ? 'active' : ''} key={concept[1]} />)}</div>
  </div>;
}

export default function PortfolioTest(){
  useEffect(() => {
    document.title = 'Law Firm Website Concepts | Magneo Portfolio Preview';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'Private review page for Magneo original law firm website concepts.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/test/';
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow, noarchive';
    robots.dataset.portfolioTest = 'true';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  const questions = [
    ['01', 'Does this firm handle my situation?', 'Practice descriptions should make it easy to understand the firm’s focus and who its services are for.'],
    ['02', 'What do I need to know before reaching out?', 'Clear explanations should address the questions and uncertainties that can delay a first conversation.'],
    ['03', 'How do I take the next step?', 'Contact information and consultation prompts should make the next action easy to find and understand.'],
  ];

  return <div className="pft-main">
    <section className="pft-hero">
      <div className="container pft-hero-inner">
        <span className="pft-eyebrow">Magneo portfolio · Original concepts</span>
        <h1>Make your firm’s expertise <em>easier to understand.</em></h1>
        <div className="pft-hero-lower">
          <div><p>Explore law firm website concepts that show how positioning, copy, and design can explain your services, answer prospective clients’ questions, and guide them toward contacting your firm.</p><small>These are original demonstration concepts created by Magneo, not commissioned client projects.</small></div>
          <a href="#website-concepts">Explore the website concepts <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>

    <section className="pft-collection" id="website-concepts" aria-labelledby="website-concepts-title">
      <div className="container">
        <header className="pft-collection-head">
          <div><span>Law firm website concepts</span><small>6 original concepts</small></div>
          <p id="website-concepts-title">Six approaches to presenting personal injury and litigation practices, each exploring a different balance of professional authority, clear information, and reassurance.</p>
        </header>
        <ConceptPreview />
        <Link className="pft-collection-link" to="/portfolio/legal-websites/"><span><small>Explore the collection</small><b>Explore all six concepts</b></span><i aria-hidden="true">→</i></Link>
      </div>
    </section>

    <section className="pft-questions" aria-labelledby="portfolio-questions-title">
      <div className="container">
        <header><h2 id="portfolio-questions-title">Look beyond the visual style.</h2><p>As you explore the concepts, consider how the content helps a prospective client answer three questions.</p></header>
        <div className="pft-question-grid">{questions.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="pft-contact">
      <div className="container">
        <h2>What should prospective clients understand about your firm?</h2>
        <div><p>Tell us about your practice, the clients you want to reach, and what your current website does not communicate clearly. We can discuss the direction for your website and content.</p><Link className="btn" to="/contact/">Discuss your firm’s website ↗</Link></div>
      </div>
    </section>
  </div>;
}
