import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/about-test.css';
import './styles/about-test-update.css';
import './styles/about-legal-test.css';

const workingSteps = [
  ['01', 'Understand your practice', 'We discuss your services, audience, existing marketing, and the priorities behind the project.'],
  ['02', 'Agree on the work', 'You receive a proposed scope, deliverables, timeline, and fee before the project begins.'],
  ['03', 'Create and review', 'Adele develops the agreed work and brings it to you at defined review points for feedback and approval.'],
  ['04', 'Complete and plan ahead', 'We review the deliverables and identify the next steps. Ongoing support is scoped separately where needed.'],
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
  ['Website Design', '/services/website-design-for-regulated-professional-industries-magneo/'],
  ['Social Media & LinkedIn', '/services/social-media-linkedin-marketing-for-regulated-industries/'],
  ['AI Marketing & Automation', '/services/ai-automation-for-regulated-industries-magneo/'],
  ['Lawyer Personal Branding', '/services/personal-branding-for-regulated-professionals/'],
];

const legalInsights = [
  ['Reimagining Digital Marketing Fundamentals for Law Firms', 'https://blog.magneo.ca/blog/reimagining-digital-marketing-fundamentals-for-law-firms-2025/'],
];

function useAboutTestSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'About Magneo | Legal Marketing & Creative';

    let description = document.querySelector('meta[name="description"]');
    const existingDescription = description;
    const previousDescription = description?.content;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Meet Adele Salikhova, founder of Magneo. Explore the experience and creative approach behind marketing, content, websites, and AI for law firms.';

    let canonical = document.querySelector('link[rel="canonical"]');
    const existingCanonical = canonical;
    const previousCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca/about/';

    return () => {
      document.title = previousTitle;
      if (!existingDescription) description.remove();
      else description.content = previousDescription || '';
      if (!existingCanonical) canonical.remove();
      else canonical.href = previousCanonical || '';
    };
  }, []);
}

export default function AboutLegalTest() {
  useAboutTestSeo();

  return <div className="abt-page abt-legal-test">
    <section className="abt-hero">
      <div className="container abt-hero-grid">
        <div className="abt-hero-copy">
          <span className="abt-kicker">About Magneo</span>
          <h1>Legal marketing with a<br/><em>creative point of view.</em></h1>
          <p>Magneo is a founder-led marketing and creative business for lawyers and law firms. Strategy, personal branding, content, and AI-powered creative come together to make your expertise easier to understand and more memorable.<br/><br/>Work directly with Adele Salikhova to shape your message and bring it to life through content, websites, and campaigns.</p>
          <div className="abt-actions">
            <Link className="btn" to="/contact/">Talk with Adele</Link>
            <Link className="abt-outline" to="/portfolio/">Explore the portfolio</Link>
          </div>
        </div>
        <figure className="abt-portrait">
          <img src="/adele-salikhova.jpg" alt="Adele Salikhova, founder and legal marketing strategist at Magneo"/>
          <figcaption><strong>Adele Salikhova</strong><span className="abt-portrait-role">Founder &amp; Legal Marketing Strategist</span><span>Based in Toronto · Serving Canada and the USA</span><a className="abt-portrait-link" href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">Connect with Adele on LinkedIn <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      </div>
    </section>

    <section className="abt-experience">
      <div className="container abt-two-col">
        <div><span className="abt-label">The experience behind Magneo</span><h2><strong>10+</strong> years of marketing experience.<small>A broader background. A legal focus.</small></h2></div>
        <div className="abt-copy">
          <p>Adele Salikhova brings more than a decade of marketing experience across industries and markets. Her work connects brand strategy, creative thinking, digital marketing, and AI.</p>
          <p>Through Magneo, she applies that background specifically to lawyers and law firms: clarifying what makes a practice different, developing a recognisable voice, and making complex services easier for potential clients to understand.</p>
          <div className="abt-text-links"><a href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a></div>
        </div>
      </div>
    </section>

    <section className="abt-public">
      <div className="container">
        <div className="abt-section-head"><div><span className="abt-label">Ideas &amp; perspectives</span><h2>How I think about legal marketing.</h2></div><p>Explore Adele’s perspectives on lawyer visibility, personal branding, and the decisions behind client acquisition.</p></div>
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
        <div className="abt-section-head"><div><span className="abt-label">Working with Magneo</span><h2>A clear scope.<br/><em>Direct communication.</em></h2></div><p>We start with your practice, the clients you want to reach, and what you need your marketing to do. Together, we agree on the work, the review stages, and who approves content before publication.</p></div>
        <div className="abt-process-grid">{workingSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="abt-portfolio">
      <div className="container abt-portfolio-box"><div><span className="abt-label">Original concepts &amp; demonstrations</span><h2>See how the ideas take shape.</h2></div><div><p>Explore website concepts, social content, and AI creative that demonstrate Magneo’s approach to legal marketing.</p><Link className="btn" to="/portfolio/">Explore the portfolio</Link></div></div>
    </section>

    <section className="abt-contact">
      <div className="container"><div className="abt-contact-box"><span className="abt-label">Start a conversation</span><h2>Let’s talk about your firm’s next move.</h2><p>Whether you need a clearer message, distinctive content, or a new website, tell Adele what you want to improve.</p><Link className="btn" to="/contact/">Talk with Adele</Link></div></div>
    </section>

    <section className="related-section abt-related abt-related-two">
      <div className="container related-grid">
        <div><h2>Explore Services</h2><i/><ul>{relatedServices.map(([name, path]) => <li key={path}><Link to={path}>{name}</Link></li>)}</ul></div>
        <div><h2>Legal Marketing Insights</h2><i/><ul>{legalInsights.map(([name, path]) => <li key={path}><a href={path}>{name}</a></li>)}</ul></div>
      </div>
    </section>
  </div>;
}
