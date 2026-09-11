import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/about-test.css';
import './styles/about-test-update.css';
import './styles/about-legal-test.css';

const workingSteps = [
  ['01', 'Understand your business', 'We discuss your services, audience, existing marketing, and the priorities behind the project.'],
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

const industries = [
  ['Law Firms', 'Flagship focus', 'Practice positioning, lawyer visibility, and clear communication that helps prospective clients understand your services.', '/law-firm-marketing/'],
  ['Financial Services', '', 'Brand positioning, educational content, and websites shaped around your audience and your firm’s review process.', '/financial-firm-marketing/'],
  ['Healthcare', '', 'Clear service information, practitioner profiles, and content that helps patients understand their options and how to get in touch.', '/healthcare-marketing/'],
  ['Technology Companies', '', 'Product positioning, websites, and content that make complex SaaS, AI, FinTech, and LegalTech offerings easier to understand.', '/tech-company-marketing/'],
];

const portfolioPreviews = [
  {
    title: 'Websites',
    label: 'Original concepts',
    description: 'Explore distinctive website directions that can be tailored to a business.',
    image: '/portfolio/websites/litigation-editorial-preview-v2.png',
    alt: 'Preview of an original Magneo website concept',
    href: '/portfolio/#portfolio-websites',
  },
  {
    title: 'Video & Reels',
    label: 'Original concepts',
    description: 'See short-form video and reel concepts built to make expertise easier to follow.',
    image: '/portfolio/social/podcast-interview-reel-cover-v2.png',
    alt: 'Cover for an original podcast interview reel concept',
    href: '/portfolio/#social-media',
  },
  {
    title: 'AI Automation',
    label: 'Workflow concept',
    description: 'Review a visual concept showing how connected tools can support marketing workflows.',
    image: '/portfolio/ai/hubspot-automation.webp',
    alt: 'Visual concept for a connected marketing automation workflow',
    href: '/portfolio/#ai-marketing',
  },
];

function useAboutTestSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    const title = 'About Magneo | Marketing for Regulated Industries';
    const summary = 'Meet Adele Salikhova, founder of Magneo. Explore marketing, creative, and AI services for regulated industries, with legal marketing as the flagship focus.';
    document.title = title;

    let description = document.querySelector('meta[name="description"]');
    const existingDescription = description;
    const previousDescription = description?.content;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = summary;

    let canonical = document.querySelector('link[rel="canonical"]');
    const existingCanonical = canonical;
    const previousCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca/about/';

    const socialSelectors = [
      ['meta[property="og:title"]', 'property', 'og:title', title],
      ['meta[property="og:description"]', 'property', 'og:description', summary],
      ['meta[property="og:url"]', 'property', 'og:url', 'https://magneo.ca/about/'],
      ['meta[name="twitter:title"]', 'name', 'twitter:title', title],
      ['meta[name="twitter:description"]', 'name', 'twitter:description', summary],
    ];
    const socialState = socialSelectors.map(([selector, attribute, name, value]) => {
      let element = document.querySelector(selector);
      const existed = Boolean(element);
      const previous = element?.content;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = value;
      return { element, existed, previous };
    });

    return () => {
      document.title = previousTitle;
      if (!existingDescription) description.remove();
      else description.content = previousDescription || '';
      if (!existingCanonical) canonical.remove();
      else canonical.href = previousCanonical || '';
      socialState.forEach(({ element, existed, previous }) => {
        if (!existed) element.remove();
        else element.content = previous || '';
      });
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
          <h1>Marketing for regulated industries.<br/><em>With a creative point of view.</em></h1>
          <div className="abt-hero-intro"><p>Magneo is a founder-led marketing and creative business for regulated industries and expert-led businesses. Legal marketing is our flagship focus, alongside services for financial firms, healthcare providers, and technology companies.</p><p>Work directly with Adele Salikhova to shape your message and bring it to life through brand strategy, content, websites, AI-powered creative, and automation.</p></div>
          <div className="abt-actions">
            <Link className="btn" to="/contact/">Talk with Adele</Link>
            <Link className="abt-outline" to="/portfolio/">Explore the portfolio</Link>
          </div>
        </div>
        <figure className="abt-portrait">
          <img src="/adele-salikhova.jpg" alt="Adele Salikhova, founder of Magneo"/>
          <figcaption><strong>Adele Salikhova</strong><span className="abt-portrait-role">Founder &amp; Marketing Strategist</span><span>Based in Toronto · Serving Canada and the USA</span><a className="abt-portrait-link" href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">Connect with Adele on LinkedIn <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      </div>
    </section>

    <section className="abt-experience">
      <div className="container abt-two-col">
        <div><span className="abt-label">The experience behind Magneo</span><h2><strong>10+</strong> years of marketing experience.<small>A broad background. An industry-specific approach.</small></h2></div>
        <div className="abt-copy">
          <p>Adele Salikhova brings more than a decade of marketing experience across industries and markets. Her work connects brand strategy, creative thinking, digital marketing, and AI.</p>
          <p>Through Magneo, she applies that experience to businesses whose services need clear explanation and careful communication. Each project starts with the business’s audience, offer, and review requirements, with legal marketing as Magneo’s flagship focus.</p>
          <div className="abt-text-links"><a href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a></div>
        </div>
      </div>
    </section>

    <section className="abt-industries" aria-labelledby="abt-industries-title">
      <div className="container">
        <div className="abt-section-head abt-industries-head"><div><span className="abt-label">Who we work with</span><h2 id="abt-industries-title">A legal focus. A broader reach.</h2></div><p>Legal marketing leads our work. We also offer marketing and creative services for financial firms, healthcare providers, and technology businesses.</p></div>
        <div className="abt-industries-grid">{industries.map(([title, focus, text, path]) => <Link className="abt-industry-card" to={path} key={path}><span>{focus || 'Industry'}</span><h3>{title}</h3><p>{text}</p><b>Explore <span aria-hidden="true">↗</span></b></Link>)}</div>
        <Link className="abt-industries-all" to="/industries/">Explore all industries <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="abt-public">
      <div className="container">
        <div className="abt-section-head"><div><span className="abt-label">Ideas &amp; perspectives</span><h2>How I think about marketing.</h2></div><p>Explore Adele’s thinking on positioning, visibility, and client acquisition. The selected articles below focus on law firms, Magneo’s flagship industry.</p></div>
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
        <div className="abt-section-head"><div><span className="abt-label">Working with Magneo</span><h2>A clear scope.<br/><em>Direct communication.</em></h2></div><p>We start with your business, the people you want to reach, and what you need your marketing to do. Together, we agree on the work, the review stages, and who approves content before publication.</p></div>
        <div className="abt-process-grid">{workingSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="abt-portfolio">
      <div className="container abt-portfolio-showcase">
        <div className="abt-section-head abt-portfolio-head"><div><span className="abt-label">Original concepts &amp; demonstrations</span><h2>See how the ideas take shape.</h2></div><p>Explore website concepts, social content, and AI demonstrations that show how Magneo approaches messaging, design, and practical applications of AI.</p></div>
        <div className="abt-portfolio-grid">
          {portfolioPreviews.map((item) => <Link className="abt-portfolio-card" to={item.href} key={item.title}>
            <img src={item.image} alt={item.alt}/>
            <div><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><b>Explore <i aria-hidden="true">↗</i></b></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="abt-contact">
      <div className="container"><div className="abt-contact-box"><span className="abt-label">Start a conversation</span><h2>Let’s talk about your next move.</h2><p>Whether you need a clearer message, distinctive content, a new website, or help with AI automation, tell Adele what you want to improve.</p><Link className="btn" to="/contact/">Talk with Adele</Link></div></div>
    </section>

  </div>;
}
