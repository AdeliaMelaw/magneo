import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/about-test.css';
import './styles/about-test-update.css';

const workingSteps = [
  ['01', 'Understand the need', 'We discuss your business, audience, existing marketing, and the problem you want to solve.'],
  ['02', 'Agree on the work', 'You receive a proposed scope, deliverables, timeline, and fee before the project begins.'],
  ['03', 'Create and review', 'Adele develops the agreed work and brings it to you at defined review points for feedback and approval.'],
  ['04', 'Complete and plan ahead', 'We review the deliverables and identify any next steps. Ongoing support is scoped separately where needed.'],
];

const publicWork = [
  {
    label: 'LinkedIn insight',
    title: 'The real visibility problem for law firms',
    text: 'Adele explains why positioning and memorable expertise matter more than simply attracting more attention.',
    href: 'https://www.linkedin.com/posts/adele-salikhova_legalmarketing-lawfirmgrowth-clientacquisition-activity-7461826623479177216-aOEg',
  },
  {
    label: 'LinkedIn insight',
    title: 'Why a law firm needs critical mass before growth',
    text: 'A practical look at how consistent visibility helps a name, message, and offer become recognizable.',
    href: 'https://www.linkedin.com/posts/adele-salikhova_lawfirmgrowth-criticalmass-legalmarketing-activity-7342910564303589376-GCxM',
  },
  {
    label: 'LinkedIn insight',
    title: 'Where a law firm’s best clients come from',
    text: 'Adele considers how CRM tracking can replace assumptions with clearer information about referral and acquisition sources.',
    href: 'https://www.linkedin.com/posts/adele-salikhova_legalmarketing-lawfirmgrowth-crm-activity-7470212918811197440-fgZN',
  },
];

const relatedServices = [
  ['Website design', '/services/website-design-for-regulated-professional-industries-magneo/'],
  ['Social media and LinkedIn marketing', '/services/social-media-linkedin-marketing-for-regulated-industries/'],
  ['AI marketing automation', '/services/ai-automation-for-regulated-industries-magneo/'],
  ['Personal branding', '/services/personal-branding-for-regulated-professionals/'],
];

const relatedIndustries = [
  ['Law firms', '/law-firm-marketing/'],
  ['Financial firms', '/financial-firm-marketing/'],
  ['Healthcare', '/healthcare-marketing/'],
  ['Technology companies', '/tech-company-marketing/'],
];

const relatedInsights = [
  ['Reimagining Digital Marketing Fundamentals for Law Firms', 'https://blog.magneo.ca/blog/reimagining-digital-marketing-fundamentals-for-law-firms-2025/'],
  ['Hyper-Personalization with AI for SaaS & Tech Brands', 'https://blog.magneo.ca/blog/hyper-personalization-with-ai-for-saas-tech-brands/'],
  ['Reputation Management for Clinics', 'https://blog.magneo.ca/blog/reputation-management-for-clinics-growing-your-google-profile-in-2025/'],
];

function useReviewSeo() {
  useEffect(() => {
    document.title = 'About Magneo — Founder-Led Marketing';
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Meet Adele Salikhova and learn how Magneo brings websites, content, and AI tools together for businesses where credibility matters.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca/about/test/';

    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow, noarchive';
    robots.dataset.magneoPrivateReview = 'true';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);
}

export default function AboutTest() {
  useReviewSeo();

  return <div className="abt-page">
    <section className="abt-hero">
      <div className="container abt-hero-grid">
        <div className="abt-hero-copy">
          <span className="abt-kicker">About Magneo</span>
          <h1>Marketing built around your expertise.<br/><em>Led by Adele Salikhova.</em></h1>
          <p>Magneo is a founder-led marketing business bringing websites, content, and AI tools together for businesses where credibility matters. You work directly with Adele to clarify your message and plan what to create next.</p>
          <div className="abt-actions">
            <Link className="btn" to="/contact/">Talk with Adele</Link>
            <Link className="abt-outline" to="/portfolio/">Explore the portfolio</Link>
          </div>
        </div>
        <figure className="abt-portrait">
          <img src="/adele-salikhova.jpg" alt="Adele Salikhova, founder of Magneo"/>
          <figcaption><strong>Adele Salikhova · Founder</strong><span>Based in Toronto · Serving Canada and the USA</span><a className="abt-portrait-link" href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">Connect with Adele on LinkedIn <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      </div>
    </section>

    <section className="abt-experience">
      <div className="container abt-two-col">
        <div><span className="abt-label">The experience behind Magneo</span><h2><strong>10+</strong> years of marketing experience.<small>Brought to businesses in regulated industries.</small></h2></div>
        <div className="abt-copy">
          <p>Adele Salikhova brings more than a decade of marketing experience to Magneo. Her focus is on making complex expertise easier to understand through clear positioning, thoughtful design, useful content, and practical execution.</p>
          <p>Magneo brings that experience into a direct working relationship: your priorities shape the scope, and you know who is responsible for the work.</p>
          <div className="abt-text-links"><a href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a></div>
        </div>
      </div>
    </section>

    <section className="abt-public">
      <div className="container">
        <div className="abt-section-head"><div><span className="abt-label">Public work</span><h2>Get to know the thinking behind the work.</h2></div><p>Explore Adele’s conversations, writing, and observations on marketing, professional visibility, and AI.</p></div>
        <div className="abt-public-grid">
          {publicWork.map((item, index) => <a className="abt-public-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}>
            <div className="abt-public-visual"><span>0{index + 1}</span><strong>{item.title}</strong></div>
            <small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><b>Read the original on LinkedIn ↗</b>
          </a>)}
        </div>
      </div>
    </section>

    <section className="abt-process">
      <div className="container">
        <div className="abt-section-head"><div><span className="abt-label">How working with Magneo works</span><h2>A clear scope.<br/><em>Direct communication.</em></h2></div><p>For regulated businesses, project planning includes agreeing which claims need support and who will review content before publication.</p></div>
        <div className="abt-process-grid">{workingSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="abt-portfolio">
      <div className="container abt-portfolio-box"><div><span className="abt-label">Original concepts and demonstrations</span><h2>See how the ideas take shape.</h2></div><div><p>Explore original website concepts, social creative, and AI demonstrations to see Magneo’s approach to design and communication.</p><Link className="btn" to="/portfolio/">Explore the portfolio</Link></div></div>
    </section>

    <section className="abt-contact">
      <div className="container"><div className="abt-contact-box"><span className="abt-label">Start a conversation</span><h2>Let’s talk about what your marketing needs next.</h2><p>Tell Adele what you want to improve, what you already have, and where you need support. Start by exploring whether the project is a good fit.</p><Link className="btn" to="/contact/">Talk with Adele</Link></div></div>
    </section>

    <section className="related-section abt-related">
      <div className="container related-grid">
        <div><h2>Related Services</h2><i/><ul>{relatedServices.map(([name, path]) => <li key={path}><Link to={path}>{name}</Link></li>)}</ul></div>
        <div><h2>Related Industries</h2><i/><ul>{relatedIndustries.map(([name, path]) => <li key={path}><Link to={path}>{name}</Link></li>)}</ul></div>
        <div><h2>Related Insights</h2><i/><ul>{relatedInsights.map(([name, path]) => <li key={path}><a href={path}>{name}</a></li>)}</ul></div>
      </div>
    </section>
  </div>;
}
