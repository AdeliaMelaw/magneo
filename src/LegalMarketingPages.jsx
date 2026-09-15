import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from './data/related-articles.js';
import './styles/legal-marketing-pages.css';

const BASE = 'https://magneo.ca';

const legalServices = [
  ['Law firm website design', 'Service pages, lawyer profiles, and clear contact routes built around the firm’s practice.', '/services/website-design-rebrand-for-law-firms-magneo/'],
  ['Legal SEO', 'Search-focused content and website improvements organised around the services and locations that matter to the firm.', '/services/seo-for-the-legal-industry/'],
  ['PPC and landing pages', 'Focused campaigns and pages connecting a legal service with a relevant enquiry.', '/services/ppc-landing-pages-for-law-firms/'],
  ['Social media and video', 'Educational posts, Reels, and lawyer-led content developed for selected platforms.', '/services/linkedin-growth-law-firms/'],
  ['Personal branding', 'Positioning, professional profiles, and brand-voice guidance for individual lawyers.', '/services/personal-branding-for-lawyers-legal-professionals/'],
  ['CRM and automation', 'Enquiry organisation, follow-up tasks, and content-approval workflows.', '/services/ai-automation-for-law-firms-legal-departments-magneo/']
];

const sharedProcess = [
  ['01', 'Priorities', 'Magneo reviews the firm’s practice, existing marketing, and the work that needs attention.'],
  ['02', 'Plan', 'The proposal defines the pages, content, campaigns, or workflow changes included in the project.'],
  ['03', 'Production and review', 'The agreed materials are developed, with the firm confirming factual details and required approvals.'],
  ['04', 'Launch and follow-up', 'Approved work is delivered or launched. Ongoing production, campaign management, and reporting follow the selected scope.']
];

const sharedFaqs = [
  ['Can I start with a website only?', 'Yes. Website design can be a standalone project, with content, campaigns, or automation added when needed.'],
  ['Can an existing website concept be adapted for our firm?', 'An existing concept can provide a starting direction. The proposal defines the changes to branding, copy, pages, and functionality.'],
  ['Can you work with our current website?', 'Yes. The existing site can be reviewed to identify whether targeted improvements or a broader redesign would be more useful.'],
  ['Can you help lawyers create video content?', 'Yes. Topic planning, scripts, recording guidance, and editing can support a recurring educational series. Expert-led content puts the lawyer’s own voice and perspective at the centre.'],
  ['Can the writing reflect our firm’s voice?', 'Yes. Existing materials, interviews, and feedback inform the writing style. Brand-voice guidance and a custom GPT can support drafting where included.'],
  ['Is ongoing marketing included?', 'The proposal separates initial project work from recurring content, campaign management, and maintenance.']
];

const relatedLegalArticles = [articles.legalFundamentals, articles.legalSeo, articles.lawyerVideo, articles.legalAnalytics];

const websiteConcepts = {
  immigration: { title: 'Immigration law · Welcome', path: '/portfolio/legal-websites/immigration-welcome/', image: '/portfolio/websites/immigration-welcome-preview.png', alt: 'Preview of the Immigration law Welcome website concept' },
  classic: { title: 'Personal injury · Classic', path: '/portfolio/legal-websites/personal-injury-classic/', image: '/portfolio/websites/personal-injury-classic-preview.webp', alt: 'Preview of the Personal injury Classic website concept' },
  bold: { title: 'Personal injury · Bold', path: '/portfolio/legal-websites/personal-injury-bold/', image: '/portfolio/websites/personal-injury-bold-preview.webp', alt: 'Preview of the Personal injury Bold website concept' },
  litigation: { title: 'Litigation · Editorial', path: '/portfolio/legal-websites/litigation-editorial/', image: '/portfolio/websites/litigation-editorial-preview.webp', alt: 'Preview of the Litigation Editorial website concept' }
};

const practicePages = {
  'employment-lawyers': {
    h1: 'Marketing for Employment Lawyers', seoTitle: 'Marketing for Employment Lawyers | Magneo',
    meta: 'Website design, search content, campaigns, and lawyer-led video for employment firms representing employees, employers, or both.',
    description: 'Make it clear who your firm represents and which employment matters it handles. Magneo develops websites, search content, campaigns, and lawyer-led video around your employee-side, employer-side, or combined practice.',
    primary: 'Discuss your employment-law marketing', secondary: 'Explore website examples',
    focusHeading: 'Clear positioning for the people your firm represents.',
    focus: [['Employee services', 'Pages that explain the employment services available to individuals and what an initial conversation involves.'], ['Employer services', 'Content presenting the firm’s work for businesses, including the advisory or dispute services it actually provides.'], ['Combined practices', 'Distinct service navigation and messaging so visitors can find the relevant information without confusion.']],
    contentHeading: 'Turn recurring questions into useful content.',
    content: 'Questions about the firm’s services, consultation process, and approach can become educational articles, short videos, and focused website pages. Topics follow the lawyer’s actual practice and approved perspective.',
    project: ['A clearer website for a mixed employment practice.', 'Separate employee and employer service pages, consistent lawyer profiles, and a straightforward enquiry route can help visitors understand where to start.', 'Illustrative project scope.'],
    concepts: [{ ...websiteConcepts.litigation, note: 'No employment-specific concept is currently available. This legal website concept illustrates a possible design direction.' }],
    distinctFaq: ['Can the website serve both employers and employees?', 'Yes. Separate navigation, pages, and messaging can help each audience find the relevant service.']
  },
  'immigration-lawyers': {
    h1: 'Marketing for Immigration Lawyers', seoTitle: 'Marketing for Immigration Lawyers | Magneo',
    meta: 'Websites, educational content, search marketing, and campaigns that explain immigration services and make the consultation route clear.',
    description: 'Help prospective clients understand your immigration services and how to begin a conversation with the firm. Magneo creates clear websites, educational content, and campaigns organised around the services you provide and the audiences you serve.',
    primary: 'Discuss your immigration-law marketing', secondary: 'View the immigration website example',
    focusHeading: 'Make your immigration services easier to navigate.',
    focus: [['Service pages', 'Separate explanations for the immigration services the firm actually offers.'], ['Consultation information', 'Clear information about contacting the firm, the first conversation, and any preparation the firm requests.'], ['Language and audience needs', 'Content planning that considers the languages and audiences the firm can support, with translation and review scoped where needed.']],
    contentHeading: 'Explain the process in your own professional voice.',
    content: 'Lawyer-led videos and articles can introduce the firm’s approach, explain its services, and answer common questions about getting started. A brand-voice guide helps keep those explanations consistent across channels.',
    concepts: [websiteConcepts.immigration],
    distinctFaq: ['Can the website support several languages?', 'Multilingual content can be scoped according to the languages the firm supports, with translation and review responsibilities agreed.']
  },
  'personal-injury-lawyers': {
    h1: 'Marketing for Personal Injury Lawyers', seoTitle: 'Marketing for Personal Injury Lawyers | Magneo',
    meta: 'Website design, search content, and campaigns for personal injury firms, with clear case information and straightforward contact routes.',
    description: 'Give people a clear introduction to your firm when they are looking for legal help after an injury. Magneo develops websites, search content, and campaigns that explain the matters you handle and make contacting the firm straightforward.',
    primary: 'Discuss your personal-injury marketing', secondary: 'Explore personal-injury website examples',
    focusHeading: 'Clear information when visitors need a straightforward answer.',
    focus: [['Cases handled', 'Plain-language pages explaining the injury matters within the firm’s practice.'], ['The first conversation', 'An accessible explanation of the consultation process and approved fee information where available.'], ['Mobile contact', 'Readable pages and clear call or enquiry options for visitors using their phones.']],
    contentHeading: 'Show the people and approach behind the firm.',
    content: 'Lawyer introductions, educational videos, and useful service explanations help visitors understand how the firm communicates. Content should reflect the actual team, experience, and approach.',
    concepts: [websiteConcepts.classic, websiteConcepts.bold],
    distinctFaq: ['Can you show our case experience?', 'Approved, accurate experience information can be incorporated. Any client details or results require appropriate permission and firm review.']
  },
  'family-lawyers': {
    h1: 'Marketing for family-law firms', seoTitle: 'Marketing for Family-Law Firms | Magneo',
    meta: 'Websites, useful articles and videos, local search, and focused campaigns for family-law firms, with clear service and consultation information.',
    description: 'Help prospective clients understand your services and feel prepared to make contact. Clear websites, useful articles and videos, local search and focused campaigns can explain how your firm helps with separation, parenting arrangements and other family-law matters.',
    primary: 'Discuss your family-law marketing', secondary: 'Explore legal website concepts', secondaryHref: '/portfolio/#portfolio-websites',
    focusHeading: 'Make the first conversation easier to prepare for.',
    focus: [['Service pages based on your practice', 'Organise pages around the family-law matters your firm actually handles, with clear descriptions of each service.'], ['Lawyers and consultations', 'Introduce your lawyers accurately and explain how an initial consultation works and what prospective clients should prepare.'], ['Enquiries matched to capacity', 'Set up contact routes and follow-up tasks around the firm’s intake process, availability and capacity.']],
    contentHeading: 'Answer practical questions without promising outcomes.',
    content: 'Useful articles and lawyer-led videos can explain your services and first steps in plain language. Your team reviews legal details before publication, and the content does not promise a result.',
    distinctFaq: ['Can the website explain different family-law services?', 'Yes. Separate pages can explain the services your firm offers, who they help and what an initial consultation involves. Your team confirms legal details before publication.']
  },
  'litigation-lawyers': {
    h1: 'Marketing for Litigation Lawyers', seoTitle: 'Marketing for Litigation Lawyers | Magneo',
    meta: 'Websites, search content, lawyer-led video, and campaigns that present a litigation firm’s disputes, experience, and contact route clearly.',
    description: 'Make your dispute practice and professional approach easier to understand. Magneo develops websites, search content, lawyer-led video, and campaigns that explain the matters you handle and help prospective clients or referral partners find the right contact.',
    primary: 'Discuss your litigation marketing', secondary: 'View the litigation website example',
    focusHeading: 'Present the disputes your firm handles clearly.',
    focus: [['Practice focus', 'Service pages organised around the civil, commercial, or other dispute areas the firm actually handles.'], ['Professional experience', 'Accurate lawyer profiles and approved experience summaries that explain the team’s background.'], ['Initial enquiries', 'A clear introduction to the first discussion and a concise contact route.']],
    contentHeading: 'Give your professional perspective a visible place.',
    content: 'Articles, interviews, and short videos can explain the firm’s approach to dispute work and the questions prospective clients commonly ask. This material also gives referral partners a clearer introduction to the practice.',
    concepts: [websiteConcepts.litigation],
    distinctFaq: ['Can the content support referrals as well as direct enquiries?', 'Yes. Practice descriptions, lawyer profiles, and professional content can help referral partners understand the firm’s focus.']
  }
};

export const legalPracticeSlugs = Object.keys(practicePages);

function useLegalSeo(title, description, path) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${BASE}${path}`;
  }, [title, description, path]);
}

function LegalHero({ page, hub = false }) {
  return <section className={`lm-hero ${hub ? 'lm-hero-hub' : ''}`}><div className="container lm-hero-grid"><div className="lm-hero-copy"><nav className="lm-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>→</span>{hub ? <span>Law Firm Marketing</span> : <><Link to="/law-firm-marketing/">Law Firm Marketing</Link><span>→</span><span>{page.h1.replace('Marketing for ', '')}</span></>}</nav><h1>{page.h1}</h1><p>{page.description}</p><div className="lm-actions"><Link className="btn" to="/contact/#contact-enquiry">{page.primary}</Link><a className="lm-button-secondary" href={page.secondaryHref || '#website-examples'}>{page.secondary}</a></div></div>{hub && <Link className="lm-hero-preview" to={websiteConcepts.immigration.path}><img src={websiteConcepts.immigration.image} alt={websiteConcepts.immigration.alt}/><span>Website concept</span><strong>{websiteConcepts.immigration.title}</strong><small>View demo →</small></Link>}</div></section>;
}

function WebsiteExamples({ concepts }) {
  return <section id="website-examples" className="lm-section lm-websites" aria-labelledby="lm-websites-title"><div className="container"><h2 id="lm-websites-title">Explore a website direction for your practice.</h2><p className="lm-lead">These Magneo website concepts show how design, service information, and contact options can work together. Your project’s content, branding, and functionality are defined around your firm.</p><div className={`lm-website-grid ${concepts.length === 1 ? 'lm-one' : ''}`}>{concepts.map((concept)=><article className="lm-website-card" key={concept.path}><Link to={concept.path} className="lm-website-image"><img src={concept.image} alt={concept.alt}/></Link><div><span>Website concept</span><h3>{concept.title}</h3>{concept.note && <p>{concept.note}</p>}<div className="lm-card-actions"><Link to={concept.path}>View demo <span aria-hidden="true">↗</span></Link><Link to="/contact/#contact-enquiry">Discuss a similar website <span aria-hidden="true">→</span></Link></div></div></article>)}</div></div></section>;
}

function ProcessSection() { return <section className="lm-section lm-process" aria-labelledby="lm-process-title"><div className="container"><h2 id="lm-process-title">How the project moves forward.</h2><div className="lm-process-grid">{sharedProcess.map(([number,title,copy])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>; }

function ServicesSection({ compact = false }) { if(compact) return <nav className="lm-practice-services" aria-label="Legal-specific services"><div className="container">{legalServices.map(([title,,path])=><Link to={path} key={path}>{title} <span aria-hidden="true">→</span></Link>)}</div></nav>; return <section className="lm-section lm-services" aria-labelledby="lm-services-title"><div className="container"><h2 id="lm-services-title">Choose the support your firm needs.</h2><div className="lm-service-grid">{legalServices.map(([title,copy,path])=><Link to={path} key={path}><h3>{title}</h3><p>{copy}</p><span aria-hidden="true">→</span></Link>)}</div></div></section>; }

function FaqSection({ distinctFaq }) { const faqs=distinctFaq?[...sharedFaqs,distinctFaq]:sharedFaqs; return <section className="lm-section lm-faq" aria-labelledby="lm-faq-title"><div className="container"><h2 id="lm-faq-title">Frequently asked questions</h2><div>{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>; }

function RelatedArticles() { return <section className="lm-section lm-related" aria-labelledby="lm-related-title"><div className="container"><h2 id="lm-related-title">Related Articles</h2><ul>{relatedLegalArticles.map(([title,path])=><li key={path}><a href={path}>{title}</a></li>)}</ul></div></section>; }

function FinalCta() { return <section className="lm-section lm-final" aria-labelledby="lm-final-title"><div className="container"><div><h2 id="lm-final-title">Discuss your firm’s next marketing priority.</h2><p>Start with your website, content, campaigns, or enquiry process. Magneo can help define a focused scope.</p><Link className="btn" to="/contact/#contact-enquiry">Discuss your project</Link></div></div></section>; }

function PracticeLinks({ current }) { const links=Object.entries(practicePages).map(([slug,page])=>[page.h1.replace('Marketing for ',''),`/law-firm-marketing/${slug}/`]).filter(([,path])=>path!==`/law-firm-marketing/${current}/`); return <section className="lm-practice-links" aria-label="Explore other practice areas"><div className="container"><strong>Explore other practice areas</strong><div>{links.map(([label,path])=><Link key={path} to={path}>{label}</Link>)}</div></div></section>; }

export function LegalMarketingHub() {
  const page={ h1:'Marketing for Law Firms', description:'Websites, search marketing, video, and campaigns that make your legal services easier to understand. Magneo helps law firms present their practice clearly, develop a consistent professional presence, and organise the next step from enquiry to follow-up.', primary:'Discuss your firm’s marketing', secondary:'Explore legal website examples' };
  useLegalSeo('Law Firm Marketing Agency | Magneo','Website design, legal SEO, video, paid campaigns, personal branding, and CRM implementation for law firms and their practice areas.','/law-firm-marketing/');
  const practices=[['Employment law','Clear service positioning for firms representing employees, employers, or both.','/law-firm-marketing/employment-lawyers/'],['Immigration law','Service information and educational content that explain the firm’s work and consultation process.','/law-firm-marketing/immigration-lawyers/'],['Personal injury','Accessible websites and content explaining the cases handled and how to contact the firm.','/law-firm-marketing/personal-injury-lawyers/'],['Litigation','Practice positioning and professional content that communicate the disputes handled and the firm’s approach.','/law-firm-marketing/litigation-lawyers/'],['Family law','Clear information about the family matters handled, the firm’s approach, and how to start a conversation.','/law-firm-marketing/family-lawyers/']];
  const starts=[['Website launch or redesign','A new presentation of the firm’s services, people, and contact process.'],['Practice-area promotion','A coordinated page, content, and campaign plan for a particular legal service.'],['Consistent expert content','A recurring series of articles, posts, and videos grounded in the lawyers’ knowledge.'],['Enquiry organisation','A review of how requests reach the firm and where CRM setup or follow-up automation could help.']];
  return <div className="lm-page"><LegalHero page={page} hub/><section className="lm-section lm-practices" aria-labelledby="lm-practices-title"><div className="container"><h2 id="lm-practices-title">Marketing shaped around your practice.</h2><div>{practices.map(([title,copy,path])=><Link to={path} key={path}><h3>{title}</h3><p>{copy}</p><span aria-hidden="true">→</span></Link>)}</div></div></section><WebsiteExamples concepts={[websiteConcepts.immigration,websiteConcepts.classic,websiteConcepts.litigation]}/><ServicesSection/><section className="lm-section lm-starting" aria-labelledby="lm-starting-title"><div className="container"><h2 id="lm-starting-title">Start with a clear priority.</h2><div>{starts.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><ProcessSection/><FaqSection/><RelatedArticles/><FinalCta/></div>;
}

export function LegalPracticePage({ slug }) {
  const page=practicePages[slug];
  useLegalSeo(page.seoTitle,page.meta,`/law-firm-marketing/${slug}/`);
  return <div className="lm-page"><LegalHero page={page}/><section className="lm-section lm-focus" aria-labelledby="lm-focus-title"><div className="container"><h2 id="lm-focus-title">{page.focusHeading}</h2><div>{page.focus.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>{page.concepts?.length > 0 && <WebsiteExamples concepts={page.concepts}/>}<section className="lm-section lm-content" aria-labelledby="lm-content-title"><div className="container"><h2 id="lm-content-title">{page.contentHeading}</h2><p>{page.content}</p>{page.project&&<aside><span>{page.project[2]}</span><h3>{page.project[0]}</h3><p>{page.project[1]}</p></aside>}</div></section><ServicesSection compact/><ProcessSection/><FaqSection distinctFaq={page.distinctFaq}/><PracticeLinks current={slug}/><RelatedArticles/><FinalCta/></div>;
}
