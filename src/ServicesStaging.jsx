import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/services-staging.css';

const SERVICES_SHARE_IMAGE = 'https://magneo.ca/portfolio-og.png';
const SERVICES_SHARE_IMAGE_ALT = 'Magneo service system for website design, social media, and AI-powered marketing.';

const overviewServices = [
  {
    number: '01',
    title: 'Social Media & Personal Branding',
    description: 'Turn your expertise into posts, reels, and LinkedIn content with a consistent voice and clear direction.',
    link: ['/services/social-media-linkedin-marketing-for-regulated-industries/', 'Explore social media'],
    secondary: ['/services/personal-branding-for-regulated-professionals/', 'Explore personal branding'],
  },
  {
    number: '02',
    title: 'AI Creative & Brand Voice',
    description: 'Develop AI-assisted video, advertising creative, brand-voice tools, and custom GPTs around your business.',
    link: ['/services/ai-powered-digital-marketing/', 'Explore AI creative'],
  },
  {
    number: '03',
    title: 'AI Automation',
    description: 'Connect content production, enquiries, and follow-up through practical workflows with agreed review steps.',
    link: ['/services/ai-automation-for-regulated-industries-magneo/', 'Explore AI automation'],
  },
  {
    number: '04',
    title: 'Website Design & Development',
    description: 'Bring your positioning, copy, and design together in a website that helps visitors understand your services and enquire.',
    link: ['/services/website-design-for-regulated-professional-industries-magneo/', 'Explore website services'],
  },
  {
    number: '05',
    title: 'SEO & Content',
    description: 'Develop search visibility through useful content, clear service pages, and technical improvements.',
    link: ['/services/seo-for-regulated-industries/', 'Explore SEO and content'],
  },
  {
    number: '06',
    title: 'Paid Advertising & Landing Pages',
    description: 'Build campaigns and landing pages around a defined audience, offer, and next step.',
    link: ['/services/ppc-landing-pages-for-regulated-industries/', 'Explore paid advertising'],
  },
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

const directoryGroups = [
  {
    id: 'social-personal-branding',
    number: '01',
    title: 'Social Media & Personal Branding',
    subgroups: [
      {
        title: 'Social media',
        links: [
          ['Overview', '/services/social-media-linkedin-marketing-for-regulated-industries/'],
          ['Law Firms & Legal Professionals', '/services/linkedin-growth-law-firms/'],
          ['Financial Advisors & FinTech', '/services/linkedin-growth-financial-advisors/'],
          ['Healthcare Providers & Clinics', '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/'],
          ['Tech Companies & SaaS Products', '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/'],
          ['Crypto & AI Companies', '/services/crypto-and-ai-social-media/'],
          ['AI Social Media', '/services/ai-social-media-marketing/'],
        ],
      },
      {
        title: 'Personal branding',
        links: [
          ['Overview', '/services/personal-branding-for-regulated-professionals/'],
          ['Lawyers & Legal Professionals', '/services/personal-branding-for-lawyers-legal-professionals/'],
          ['Financial Advisors & Wealth Professionals', '/services/personal-branding-for-financial-advisors-wealth-professionals/'],
        ],
      },
    ],
  },
  {
    id: 'ai-creative',
    number: '02',
    title: 'AI Creative & Brand Voice',
    links: [
      ['AI-Powered Digital Marketing Overview', '/services/ai-powered-digital-marketing/'],
      ['AI UGC & Video Production', '/services/ai-ugc-ai-video-production/'],
    ],
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI Automation',
    links: [
      ['Overview', '/services/ai-automation-for-regulated-industries-magneo/'],
      ['Law Firms & Legal Departments', '/services/ai-automation-for-law-firms-legal-departments-magneo/'],
      ['Financial Advisors, Firms & FinTech', '/services/ai-automation-for-financial-advisors-firms-fintech-magneo/'],
      ['Tech, SaaS & AI Companies', '/services/ai-marketing-automation-for-tech-saas-ai-companies-magneo/'],
      ['Healthcare Providers & Clinics', '/services/ai-automation-for-healthcare-providers-clinics-magneo/'],
      ['Compliance-Aware AI Workflows', '/services/compliance-aware-ai-workflows/'],
    ],
  },
  {
    id: 'website-design',
    number: '04',
    title: 'Website Design & Development',
    links: [
      ['Overview', '/services/website-design-for-regulated-professional-industries-magneo/'],
      ['Law Firms', '/services/website-design-rebrand-for-law-firms-magneo/'],
      ['Financial Advisors & Wealth Firms', '/services/website-design-for-financial-advisors-wealth-firms-magneo/'],
      ['Healthcare Clinics & Doctors', '/services/website-design-for-healthcare-clinics-doctors-magneo/'],
      ['Tech Companies & SaaS Products', '/services/website-design-for-tech-companies-saas-products-magneo/'],
      ['AI Web Design & Conversion', '/services/ai-web-design-conversion/'],
    ],
  },
  {
    id: 'seo-content',
    number: '05',
    title: 'SEO & Content',
    links: [
      ['Overview', '/services/seo-for-regulated-industries/'],
      ['Law Firms & Legal Professionals', '/services/seo-for-the-legal-industry/'],
      ['Financial Advisors & Wealth Firms', '/services/seo-for-financial-advisors-wealth-firms/'],
      ['Healthcare & MedTech', '/services/seo-for-the-healthcare-medtech-industry/'],
      ['AI SEO', '/services/ai-seo/'],
      ['AI Content Marketing', '/services/ai-content-marketing/'],
    ],
  },
  {
    id: 'paid-advertising',
    number: '06',
    title: 'Paid Advertising & Landing Pages',
    links: [
      ['Overview', '/services/ppc-landing-pages-for-regulated-industries/'],
      ['Law Firms', '/services/ppc-landing-pages-for-law-firms-magneo/'],
      ['Healthcare & MedTech', '/services/ppc-landing-pages-for-healthcare-medtech/'],
      ['Financial Advisors & FinTech', '/services/ppc-landing-pages-for-financial-advisors-fintech-magneo/'],
    ],
  },
];

export function useServicesPageSeo(title, description, canonical) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const existingMeta = meta;
    const previousDescription = meta?.content;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const existingCanonical = canonicalLink;
    const previousCanonical = canonicalLink?.href;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const managed = [];
    const setMeta = (attribute, key, content) => {
      const selector = `meta[${attribute}="${key}"]`;
      const matches = [...document.querySelectorAll(selector)];
      let node = matches.shift();
      matches.forEach((duplicate) => duplicate.remove());
      const created = !node;
      const previous = node?.getAttribute('content');
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute(attribute, key);
        document.head.appendChild(node);
      }
      node.setAttribute('content', content);
      managed.push(() => created ? node.remove() : node.setAttribute('content', previous || ''));
    };

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', SERVICES_SHARE_IMAGE);
    setMeta('property', 'og:image:alt', SERVICES_SHARE_IMAGE_ALT);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', SERVICES_SHARE_IMAGE);
    setMeta('name', 'twitter:image:alt', SERVICES_SHARE_IMAGE_ALT);

    const isReview = window.location.pathname.split('/').includes('test');
    setMeta('name', 'robots', isReview ? 'noindex, nofollow, noarchive' : 'index, follow');

    return () => {
      document.title = previousTitle;
      if (!existingMeta) meta.remove();
      else meta.content = previousDescription || '';
      if (!existingCanonical) canonicalLink.remove();
      else canonicalLink.href = previousCanonical || '';
      managed.reverse().forEach((restore) => restore());
    };
  }, [title, description, canonical]);
}

export function ServicesOverviewReview() {
  const isReview = useLocation().pathname.split('/').includes('test');
  useServicesPageSeo(
    'Marketing Services for Regulated Industries | Magneo',
    'Explore website design, SEO, social media, paid advertising, AI creative, and automation for regulated industries and expert-led businesses.',
    'https://magneo.ca/services/',
  );

  return <div className="services-review services-overview-review">
    <section className="sr-hero">
      <div className="container sr-hero-inner">
        <div className="sr-eyebrow">Marketing services</div>
        <h1>Strategy, creative, and AI.<br/> <em>Built around your business.</em></h1>
        <p>Website design, content, campaigns, and automation for regulated industries and expert-led businesses. Start with one priority or bring several services together.</p>
        <div className="sr-actions"><a className="btn" href="#service-areas">Browse services</a><Link className="sr-outline" to="/portfolio/">Explore the portfolio</Link></div>
      </div>
    </section>

    <section className="sr-section sr-service-area" id="service-areas" aria-labelledby="service-area-title">
      <div className="container">
        <div className="sr-section-head"><div><span className="sr-eyebrow">Service areas</span><h2 id="service-area-title">Find the right support for your next project.</h2></div><p>Explore the services below, or tell us what you want to improve and we’ll help you identify a starting point.</p></div>
        <div className="sr-service-grid">
          {overviewServices.map((service) => <article className="sr-service-card" key={service.number}>
            <span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p>
            <div className="sr-card-links"><Link to={service.link[0]}>{service.link[1]} <b aria-hidden="true">↗</b></Link>{service.secondary && <Link className="sr-secondary-link" to={service.secondary[0]}>{service.secondary[1]}</Link>}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="sr-section sr-portfolio" aria-labelledby="services-portfolio-title">
      <div className="container">
        <div className="sr-section-head"><div><span className="sr-eyebrow">Portfolio</span><h2 id="services-portfolio-title">See the ideas in practice.</h2></div><p>Explore website concepts, video creative, and automation demonstrations.</p></div>
        <div className="sr-preview-grid">
          {portfolioPreviews.map((item) => <Link className="sr-preview" to={item.href} key={item.title}><img src={item.image} alt={item.alt}/><div><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><b>Explore <i aria-hidden="true">↗</i></b></div></Link>)}
        </div>
        <Link className="sr-text-link" to="/portfolio/">Explore the portfolio <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="sr-directory-row"><div className="container"><p>Looking for a specific service or industry?</p><Link to={isReview ? '/services/directory/test/' : '/services/directory/'}>Browse the full service directory <span aria-hidden="true">→</span></Link></div></section>

    <section className="sr-section sr-contact"><div className="container"><div className="sr-contact-box"><span className="sr-eyebrow">Start a conversation</span><h2>Not sure which service you need?</h2><p>Tell Adele what you want to improve and what you already have. You don’t need to choose a package before starting a conversation.</p><Link className="btn" to="/contact/#contact-enquiry">Discuss your project</Link></div></div></section>
  </div>;
}

function DirectoryLinks({ links }) {
  return <ul>{links.map(([label, path]) => <li key={path}><Link to={path}>{label}<span aria-hidden="true">↗</span></Link></li>)}</ul>;
}

export function ServicesDirectoryReview() {
  const isReview = useLocation().pathname.split('/').includes('test');
  const servicesOverviewPath = isReview ? '/services/test/' : '/services/';
  useServicesPageSeo(
    'Marketing Service Directory by Industry | Magneo',
    'Browse Magneo’s marketing services by industry, including websites, SEO, social media, AI creative, automation, and paid advertising.',
    'https://magneo.ca/services/directory/',
  );

  return <div className="services-review services-directory-review">
    <section className="sr-directory-hero">
      <div className="container">
        <nav className="sr-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to={servicesOverviewPath}>Services</Link><span>/</span><span aria-current="page">Directory</span></nav>
        <div className="sr-eyebrow">Service directory</div>
        <h1>All services by industry.</h1>
        <p>Browse Magneo’s service pages by marketing need and industry.</p>
        <Link className="sr-back-link" to={servicesOverviewPath}>Back to the services overview <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <nav className="sr-shortcuts" aria-label="Service directory shortcuts"><div className="container">{directoryGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.number} {group.title}</a>)}</div></nav>

    <section className="sr-directory-list" aria-label="All service groups">
      <div className="container">
        {directoryGroups.map((group) => <section className="sr-directory-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
          <div className="sr-group-heading"><span>{group.number}</span><h2 id={`${group.id}-title`}>{group.title}</h2></div>
          {group.subgroups ? <div className="sr-subgroup-grid">{group.subgroups.map((subgroup) => <div className="sr-subgroup" key={subgroup.title}><h3>{subgroup.title}</h3><DirectoryLinks links={subgroup.links}/></div>)}</div> : <DirectoryLinks links={group.links}/>} 
        </section>)}
      </div>
    </section>

    <section className="sr-directory-contact"><div className="container"><p>Can’t find what you need?</p><Link to="/contact/#contact-enquiry">Tell us about your project. <span aria-hidden="true">→</span></Link></div></section>
  </div>;
}
