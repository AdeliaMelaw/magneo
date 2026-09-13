import { useEffect } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import './styles/service-content-review.css';
import { getChildServiceData } from './data/child-service-review-data.js';
import { relatedArticlesFor } from './data/related-articles.js';

const portfolioLinks = {
  websites: '/portfolio/#portfolio-websites',
  social: '/portfolio/#social-media',
  ai: '/portfolio/#ai-marketing',
};

const audiences = [
  ['Law firms', '/law-firm-marketing/'],
  ['Financial firms', '/financial-firm-marketing/'],
  ['Healthcare providers', '/healthcare-marketing/'],
  ['Tech and SaaS companies', '/tech-company-marketing/'],
];

const pageData = {
  'website-design-for-regulated-professional-industries-magneo': {
    title: 'Website Design for Regulated Industries',
    description: 'A professional website should explain your services, make your expertise easy to assess, and give visitors a clear next step. Magneo brings website strategy, copy, design, and development together for regulated industries and expert-led businesses.',
    seoTitle: 'Website Design for Regulated Industries | Magneo',
    metaDescription: 'Website strategy, copy, design, and development for regulated industries. Explore industry-specific services, website concepts, and project options.',
    primary: ['Discuss your website', '/contact/#contact-enquiry'], secondary: ['Explore website concepts', portfolioLinks.websites],
    card: ['WEBSITES', 'Positioning, copy, design, and development.'],
    heroPortfolio: {
      label: 'WEBSITE CONCEPT',
      title: 'Personal Injury · Modern',
      image: '/portfolio/websites/personal-injury-modern-hero-preview.webp',
      imageAlt: 'Preview of Magneo’s modern personal-injury website concept',
      demoUrl: '/portfolio/legal-websites/personal-injury-bold/',
      portfolioUrl: '/portfolio/',
    },
    audienceHeading: 'Find the website approach for your industry.',
    audienceIntro: 'Different visitors need different information before they enquire. Explore the website service shaped around your audience.',
    audiences: [
      ['Law firms', '/services/website-design-rebrand-for-law-firms-magneo/', 'Practice areas, lawyer profiles, and clear routes for prospective client enquiries.'],
      ['Financial advisors and wealth firms', '/services/website-design-for-financial-advisors-wealth-firms-magneo/', 'Service explanations, advisor credentials, and information about starting a professional relationship.'],
      ['Healthcare clinics and doctors', '/services/website-design-for-healthcare-clinics-doctors-magneo/', 'Treatment and service information, practitioner profiles, locations, and appointment guidance.'],
      ['Tech companies and SaaS products', '/services/website-design-for-tech-companies-saas-products-magneo/', 'Product messaging, use cases, and journeys towards a demo or trial.'],
    ],
    scopeHeading: 'From website planning to launch.',
    scopeIntro: 'Your proposal confirms the pages, functionality, review stages, and support included.',
    included: [
      ['Structure and messaging','A page plan based on your services, audience, and the information visitors need before making contact.'],
      ['Copy and design','Website copy and visual layouts developed together so the message and presentation support each other.'],
      ['Development and connections','Responsive pages, enquiry forms, and agreed integrations with the tools your business uses.'],
      ['Search foundations','Descriptive page titles, headings, internal links, and agreed technical checks to support a usable, discoverable website.'],
      ['Launch and handover','Testing, launch preparation, and guidance for managing the finished website.'],
    ],
    examples: [
      ['New business website','A clear introduction to your business, services, and expertise, with a practical route from browsing to enquiry.'],
      ['Existing website redesign','An updated structure, message, and visual presentation for a website that no longer reflects your business.'],
      ['Additional service pages','New pages that explain a growing service range without making the website harder to navigate.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'A new website, a redesign, or a focused addition.',
    processEyebrow: 'How we work',
    processHeading: 'A clear route from brief to launch.',
    process: [['Project definition','Magneo reviews your goals and existing materials, then proposes the website scope and direction.'],['Copy and visual direction','The agreed content and layouts are developed for your review. You confirm business information and provide feedback.'],['Development and testing','Approved designs become responsive pages, with checks on navigation, forms, and included functionality.'],['Launch and handover','Following approval, Magneo completes the agreed launch tasks and provides guidance on managing the website.']],
    faq: [
      ['Is website copy included?','Copywriting can be included in the scope. The proposal will specify which pages we write and which information or materials you provide.'],
      ['Can you redesign an existing website?','Yes. We first review the existing website, content, and platform to determine what can be retained and what needs to change.'],
      ['How long does a website project take?','Timing depends on the number of pages, required functionality, content readiness, and review stages. Your proposal will include a project timeline.'],
      ['Who handles content approval?','You approve the final content. Where industry-specific claims need specialist review, we agree who reviews them before publication.'],
      ['What happens after launch?','Handover and any ongoing maintenance, hosting, or content support are defined in the proposal. Recurring services are scoped separately.'],
      ['What affects the cost of a website?','Page count, content requirements, design scope, integrations, and migration work all affect the cost. A proposal confirms the deliverables and fees before the project begins.'],
      ['Does website design include ongoing SEO?','A website project can include on-page and technical search foundations. Ongoing keyword research, content development, and SEO monitoring are separate services unless included in the proposal.'],
      ['Can an existing website be redesigned without changing every URL?','Existing URLs and content can be reviewed before the new structure is agreed. Where a URL needs to change, the launch plan should include the appropriate redirect. A redesign cannot guarantee unchanged search rankings.'],
    ],
    cta: ['What does your next website need to do?','Share your existing website or describe what you are planning. Include the services it needs to explain and the next step you want visitors to take.'],
    ctaButton: ['Discuss your website', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: audiences,
    related: [['SEO & Content','/services/seo-for-regulated-industries/'],['PPC & Landing Pages','/services/ppc-landing-pages-for-regulated-industries/']],
  },
  'social-media-linkedin-marketing-for-regulated-industries': {
    title: 'Social Media & LinkedIn Marketing for Regulated Industries',
    description: 'Content strategy, posts, and short-form video that help you communicate your expertise consistently. Choose the channels and formats that fit your audience, with an agreed process for review and publishing.',
    primary: ['Discuss your content', '/contact/#contact-enquiry'], secondary: ['Explore content examples', portfolioLinks.social],
    card: ['CONTENT', 'Posts, reels, and LinkedIn content shaped around your expertise.'],
    heroPortfolio: {
      variant: 'social',
      label: 'ORIGINAL CONCEPTS',
      title: 'Video & Reels',
      image: '/portfolio/social/podcast-interview-reel-cover-v2.png',
      imageAlt: 'Preview of Magneo’s podcast interview reel concept',
      primaryUrl: '/portfolio/#social-media',
      primaryLabel: 'Explore video and reels ↗',
      ariaLabel: 'Explore social media video and reel concepts',
    },
    included: ['Audience and channel planning','Content themes and editorial calendars','Post copy and visual creative','Short-form video concepts, scripts, and agreed production','Content approval and publishing arrangements','Reporting on agreed content and enquiry metrics'],
    examples: [
      ['LinkedIn content series','We turn recurring audience questions and your professional perspective into a connected series of posts.'],
      ['Interview content package','We develop short clips, post ideas, and supporting copy from a recorded conversation.'],
      ['Service content campaign','We create a sequence of explanations, examples, and invitations that helps people understand a specific offer.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'Content shaped around your expertise and audience.',
    processEyebrow: 'How we work',
    processHeading: 'We turn your expertise into content.',
    process: [['We define the direction','We discuss your audience, goals, and point of view, then recommend content themes, formats, and channels.'],['We create the content','We develop the agreed posts, visuals, or scripts using your input and approved source material.'],['We refine with your feedback','You review the drafts for accuracy and tone and arrange any required internal approvals. We make the agreed revisions.'],['We prepare for publication','We deliver approved content ready to use, or schedule it where publishing is included. For ongoing engagements, we review performance to guide future content.']],
    faq: [
      ['Which platforms should we use?','We recommend channels based on your audience, objectives, and available content. You do not need to publish everywhere.'],
      ['Do I need to appear on camera?','No. Options include written posts, graphics, narrated explainers, and other formats. Where your personal presence supports the idea, we can plan an interview or recording.'],
      ['Who approves and publishes the content?','We agree on these responsibilities before work starts. Publishing can be included in the scope or handled by your team after approval.'],
      ['How much content is included?','The proposal defines the number of posts or videos, formats, channels, and review stages.'],
      ['Does this include personal branding?','Content can support your personal brand. A broader positioning, profile, or professional-voice project is scoped separately where needed.'],
    ],
    cta: ['What would you like your content to communicate?','Tell Adele about your audience, current channels, and where you need support.'],
    related: [['Personal Branding','/services/personal-branding-for-regulated-professionals/'],['AI Creative & Brand Voice','/services/ai-powered-digital-marketing/']],
  },
  'ai-automation-for-regulated-industries-magneo': {
    title: 'AI Automation for Regulated Industries',
    description: 'Connect repetitive marketing tasks across your existing tools. Start with a defined workflow for content, enquiries, or follow-up, with clear responsibilities and human review where needed.',
    primary: ['Discuss a workflow', '/contact/#contact-enquiry'], secondary: ['Explore workflow examples', portfolioLinks.ai],
    card: ['WORKFLOWS', 'Connect repetitive tasks with clear review and approval steps.'],
    heroOrbit: {
      url: '/portfolio/#ai-marketing',
      tools: ['ChatGPT', 'Claude', 'Make', 'AI agents', 'HubSpot', 'Zapier'],
    },
    included: ['Review of the current process and tools','Workflow mapping and requirements','Agreed integrations and automation setup','AI-assisted steps where appropriate','Review points, exception handling, and testing','Documentation, handover, and separately scoped maintenance'],
    examples: [
      ['Enquiry-routing workflow','We transfer agreed form information into a CRM, notify the responsible person, and create a follow-up task.'],
      ['Content-approval workflow','We connect defined review stages and notify the next person when action is needed.'],
      ['Reporting-summary workflow','We bring selected marketing data into a draft summary for someone to check before sharing.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'Automation designed around repeatable marketing tasks.',
    processEyebrow: 'How we work',
    processHeading: 'We build automation around how you work.',
    process: [['We map the workflow','We review the task, tools, and handoffs involved, then identify what could be automated and where human review is needed.'],['We build the agreed setup','We confirm the workflow, required access, and responsibilities, then configure the connections and AI steps included in the scope.'],['We test it with you','We test typical scenarios, exceptions, and approval steps. You confirm that the workflow fits your process before it is put into use.'],['We explain and hand over','We document how the workflow operates, what needs monitoring, and how to pause it. Ongoing support and third-party tool costs are clarified in the scope.']],
    faq: [
      ['Can you work with our existing tools?','We first check their integration options, permissions, and limitations. The proposed workflow will identify any additional tools or subscriptions needed.'],
      ['Does every automation need AI?','No. Some tasks are better handled by standard rules and integrations. AI is included where it serves a defined purpose.'],
      ['What stays under human control?','We agree which steps require review, approval, or manual handling. External actions and exceptions are considered during workflow planning.'],
      ['How is information handled?','Before implementation, we identify what information is needed, where it moves, which tools process it, and who can access it. Your organisation reviews the proposed setup against its requirements.'],
      ['Who maintains the workflow?','The proposal identifies the owner and handover arrangements. Monitoring, updates, and ongoing support are scoped separately.'],
      ['Are software subscriptions included?','The proposal distinguishes implementation fees from any third-party subscriptions or usage charges.'],
    ],
    cta: ['Which task keeps repeating?','Tell Adele how the process works today and where it slows you down.'],
    related: [['AI Creative & Brand Voice','/services/ai-powered-digital-marketing/'],['Website Design','/services/website-design-for-regulated-professional-industries-magneo/']],
  },
  'ppc-landing-pages-for-regulated-industries': {
    title: 'PPC & Landing Pages for Regulated Industries',
    description: 'Paid advertising and landing pages built around a defined offer, audience, and budget. Connect your campaign message to a clear next step and measure the actions that matter to your business.',
    primary: ['Discuss a campaign', '/contact/#contact-enquiry'], secondary: ['View all services', '/services/'],
    card: ['CAMPAIGNS', 'Ads and landing pages built around a defined offer.'],
    cardClass: 'scr-hero-card-campaigns',
    included: ['Campaign objectives and audience planning','Keyword or targeting research for the agreed platform','Ad copy and agreed creative assets','Landing-page copy, design, and implementation','Conversion tracking and pre-launch checks','Campaign management and reporting where included'],
    examples: [
      ['Service campaign','We connect an advertisement to a landing page that explains one offer and how to enquire.'],
      ['Event or consultation campaign','We build a campaign around a defined invitation, with a relevant registration or enquiry page.'],
      ['Existing campaign refinement','We review the targeting, message, landing page, and tracking to identify changes worth testing.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'Campaigns built around a clear offer and next step.',
    processEyebrow: 'How we work',
    processHeading: 'We plan, create, and launch your campaign.',
    process: [
      ['We plan the campaign','We discuss your goals and audience, then propose the campaign approach, scope, advertising budget, and measurement plan for your approval.'],
      ['We create the ads and landing page','We develop the agreed copy, creative, and landing page. You review business details, provide feedback, and arrange any required internal approvals.'],
      ['We check and launch','We test the landing page, check the agreed tracking, and complete campaign setup. We submit approved ads to the platform and launch once its required review is complete.'],
      ['We review the next steps','We explain what has been delivered and how to access it. Where ongoing campaign management is included, we monitor performance and make adjustments within the agreed scope.'],
    ],
    faq: [
      ['Is advertising spend included in your fee?','The proposal separates Magneo’s fees from the budget paid to advertising platforms.'],
      ['Do you create the landing page?','Landing-page copy, design, and implementation can be included. The proposal specifies whether we build a new page or work with an existing one.'],
      ['Which advertising platforms do you use?','We recommend a platform based on your audience, offer, budget, and any applicable restrictions. Platform selection is agreed before setup.'],
      ['Can you guarantee leads or platform approval?','No. Results depend on factors including competition, budget, demand, and the offer. Advertising platforms make their own approval decisions.'],
      ['What will reporting cover?','We agree on the relevant measures, such as spend, clicks, tracked enquiries, and cost per enquiry. Assessing enquiry quality requires feedback or connected business data.'],
      ['Who reviews advertising claims?','You approve the final offer and claims, with your designated reviewer involved where required.'],
    ],
    cta: ['What would you like to promote?','Tell Adele about your offer, audience, and any campaigns already running.'],
    related: [['Website Design','/services/website-design-for-regulated-professional-industries-magneo/'],['SEO & Content','/services/seo-for-regulated-industries/']],
  },
  'personal-branding-for-regulated-professionals': {
    title: 'Personal Branding for Regulated Professionals',
    description: 'Personal branding for lawyers, financial advisors, healthcare professionals, and technology founders. Magneo develops your professional positioning, LinkedIn profile, biography, and content direction so potential clients can understand your expertise and what you offer.',
    seoTitle: 'Personal Branding for Regulated Professionals | Magneo',
    metaDescription: 'Personal brand strategy, LinkedIn profile writing, and professional bios for lawyers, financial advisors, healthcare professionals, and tech founders.',
    primary: ['Talk about your personal brand', '/contact/#contact-enquiry'], secondary: ['View all services', '/services/'],
    card: ['YOUR VOICE', 'Positioning, profile messaging, and content direction.'],
    audiences: [
      ['Lawyers & law firm leaders', '/law-firm-marketing/'],
      ['Financial advisors & wealth professionals', '/financial-firm-marketing/'],
      ['Healthcare practitioners & clinic founders', '/healthcare-marketing/'],
      ['Technology founders & executives', '/tech-company-marketing/'],
    ],
    included: [
      ['Personal brand strategy','Your audience, professional focus, key messages, and how your experience supports your positioning.'],
      ['LinkedIn profile writing','Headline and About copy that explain your work, your expertise, and who you help.'],
      ['Professional biography','An introduction for your website, speaking opportunities, and professional profiles, adapted to the agreed formats.'],
      ['Content strategy and voice','Themes and writing guidance for sharing your expertise through posts, articles, or video.'],
      ['Visual direction','Recommendations for profile imagery and a consistent presentation across your professional channels.'],
      ['Putting your positioning into practice','Guidance on using the approved messages and materials across your profiles and content.'],
    ],
    examples: [
      ['A clear professional focus','When your profile lists everything you do but leaves your specialism unclear, Magneo develops messaging that explains your focus, audience, and relevant experience.'],
      ['A profile that reflects your experience','An outdated headline or biography can miss what matters about your work today. Your profile copy is refreshed to reflect your current expertise and professional direction.'],
      ['One clear story across multiple roles','If you lead several businesses or work across different disciplines, Magneo develops a coherent introduction that explains how those roles connect.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'Personal-brand assets grounded in your real expertise.',
    processEyebrow: 'How we work',
    processHeading: 'From professional experience to a clear personal brand.',
    process: [['Positioning','A conversation about your experience, audience, and goals gives Magneo the foundation to recommend your professional focus and key messages.'],['Profile development','Magneo develops the agreed biographies, profile copy, and content direction using information and examples you provide.'],['Feedback and refinement','You confirm accuracy and share feedback. The agreed revisions refine the wording so it reflects your experience and point of view.'],['Delivery and guidance','You receive the approved materials and guidance for using them consistently. Ongoing content creation or profile management is scoped separately.']],
    faq: [
      ['How is personal branding different from social media management?','Personal branding defines your positioning, message, and voice. Social media management handles ongoing content and publishing. They can be combined, but are scoped separately.'],
      ['What do you need from me?','We need your background, areas of expertise, goals, and examples of how you communicate. Interviews and feedback help the work reflect your actual perspective.'],
      ['Do I need to appear on video?','No. Your positioning can be expressed through written profiles, articles, presentations, and other formats. Video is an option.'],
      ['Can you help me communicate more than one role or business?','Yes. The work can clarify how your roles connect while keeping the message understandable to your intended audience.'],
      ['Is ongoing content included?','Only where specified. Your proposal distinguishes positioning and profile work from recurring content production.'],
      ['Can personal branding help people find me online?',<>Clear, consistent profiles help people understand your expertise when they search for your name or visit your professional pages. Personal branding can support your wider online presence, but <Link to="/services/seo-for-regulated-industries/">website SEO</Link> and ongoing search optimisation are separate services.</>],
      ['Can my personal brand fit within my firm’s brand?','Yes. Your positioning and profile can reflect your individual expertise while following your firm’s tone, visual identity, and approval requirements.'],
    ],
    cta: ['What do you want to be known for?','Tell us about your work, the people you want to reach, and what your current profile does not yet communicate.'],
    ctaButton: ['Talk about your personal brand', '/contact/#contact-enquiry'],
    related: [['Social Media & LinkedIn','/services/social-media-linkedin-marketing-for-regulated-industries/'],['Website Design','/services/website-design-for-regulated-professional-industries-magneo/']],
  },
};

const aiOverview = {
  title: 'AI-powered digital marketing for regulated industries.',
  description: 'Explore practical uses of AI across content, video, search, websites, and marketing workflows. Each project starts with a defined purpose, suitable tools, and an agreed review process.',
  primary: ['Discuss an AI project','/contact/#contact-enquiry'], secondary: ['Explore AI examples',portfolioLinks.ai],
  card: ['AI','Creative, content, search, websites, and connected workflows.'],
  processEyebrow: 'How we work',
  processHeading: 'We bring AI into your marketing with clear direction.',
  process: [['We identify the right application','We discuss your goals and current marketing, then recommend where AI could support content, creative production, or a repeatable task.'],['We develop the agreed work','We create the concepts, content, or custom tools included in your project, using your brand guidance and approved information.'],['We review and refine','We check the work for quality and consistency. You confirm business-specific facts, provide feedback, and arrange any required specialist approvals.'],['We prepare it for use','We deliver the approved assets or configure the agreed tools, with guidance on how to use them. Further production, updates, and support are scoped separately.']],
  cta: ['Where could AI support your marketing?','Bring a specific idea or a recurring task, and we’ll explore a practical starting point.'],
};

const aiServices = [
  ['AI SEO','/services/ai-seo/','We plan search architecture, content briefs, and optimisation workflows with defined review steps.'],
  ['AI Social Media Marketing','/services/ai-social-media-marketing/','We support repeatable social-content planning, drafting, and review.'],
  ['AI UGC & AI Video Production','/services/ai-ugc-ai-video-production/','We develop clearly labelled visual and video concepts without presenting generated people as real customers.'],
  ['AI Web Design & Conversion','/services/ai-web-design-conversion/','We use AI-assisted exploration to support website messaging, layouts, and conversion ideas.'],
  ['AI Content Marketing','/services/ai-content-marketing/','We support content research, drafting, repurposing, and editorial workflows.'],
  ['Compliance-Aware AI Workflows','/services/compliance-aware-ai-workflows/','We define review points, claim checks, and approval responsibilities around AI-assisted work.'],
];

function useReviewMetadata(data, slug, isReview) {
  useEffect(() => {
    const title = data.seoTitle || `${data.title.replace(/\.$/, '')} | Magneo`;
    const description = data.metaDescription || data.description;
    document.title = title;
    const canonicalUrl = `https://magneo.ca/services/${slug}/`;
    const setMeta = (selector, attributes, content) => {
      const matches = [...document.head.querySelectorAll(selector)];
      const element = matches.shift() || document.createElement('meta');
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
      element.setAttribute('content', content);
      if (!element.parentNode) document.head.appendChild(element);
      matches.forEach((duplicate) => duplicate.remove());
    };
    setMeta('meta[name="description"]', { name: 'description' }, description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    const canonicals = [...document.head.querySelectorAll('link[rel="canonical"]')];
    const canonical = canonicals.shift() || document.createElement('link');
    canonical.rel = 'canonical'; canonical.href = canonicalUrl;
    if (!canonical.parentNode) document.head.appendChild(canonical);
    canonicals.forEach((duplicate) => duplicate.remove());
    const robots = document.createElement('meta');
    robots.name = 'robots'; robots.content = isReview ? 'noindex, nofollow, noarchive' : 'index, follow'; robots.dataset.serviceContentReview = 'true';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [data, slug, isReview]);
}

function PortfolioHeroCard({ preview }) {
  const primaryUrl = preview.primaryUrl || preview.demoUrl;
  const primaryLabel = preview.primaryLabel || 'View website demo →';
  const secondaryUrl = preview.secondaryUrl || preview.portfolioUrl;
  const secondaryLabel = preview.secondaryLabel || 'Explore website designs →';
  return <aside className={`scr-portfolio-card${preview.variant ? ` scr-portfolio-card-${preview.variant}` : ''}`} aria-label={preview.ariaLabel || `${preview.title} website concept`}>
    <Link className="scr-portfolio-image-link" to={primaryUrl} aria-label={preview.ariaLabel || `View ${preview.title} website demo`}>
      <span className="scr-browser-chrome" aria-hidden="true"><i/><i/><i/></span>
      <img src={preview.image} alt={preview.imageAlt} width="1440" height="720" loading="eager" decoding="async"/>
    </Link>
    <div className="scr-portfolio-card-copy">
      <span>{preview.label}</span>
      <h2>{preview.title}</h2>
      <div className="scr-portfolio-actions">
        <Link to={primaryUrl}>{primaryLabel}</Link>
        {secondaryUrl && <Link to={secondaryUrl}>{secondaryLabel}</Link>}
      </div>
    </div>
  </aside>;
}

function AutomationOrbitCard({ orbit }) {
  return <Link className="scr-orbit-card" to={orbit.url} aria-label="Explore AI marketing and automation concepts">
    <span className="scr-orbit-eyebrow">AI TOOL ECOSYSTEM</span>
    <div className="scr-orbit-scene" aria-hidden="true">
      <span className="scr-orbit-line scr-orbit-line-one"/>
      <span className="scr-orbit-line scr-orbit-line-two"/>
      <span className="scr-orbit-core"><strong>AI</strong><small>automation</small></span>
      {orbit.tools.map((tool, index) => <span className={`scr-orbit-tool scr-orbit-tool-${index + 1}`} key={tool}>{tool}</span>)}
    </div>
    <div className="scr-orbit-copy"><h2>Connected tools.<br/>Practical workflows.</h2><p>See how AI and automation can support a defined marketing task.</p><b>Explore AI marketing <span aria-hidden="true">↗</span></b></div>
  </Link>;
}

function ReviewHero({ data }) {
  const hasFeatureCard = data.heroPortfolio || data.heroOrbit;
  return <section className={`hero scr-hero${hasFeatureCard ? ' scr-hero-with-portfolio' : ''}`}><div className="container hero-grid"><div><div className="crumb">Home / Services / {data.title.replace(/\.$/, '')}</div><div className="label">Marketing service</div><h1>{data.title}</h1><p className="intro">{data.description}</p><div className="actions"><Link className="btn" to={data.primary[1]}>{data.primary[0]}</Link><Link className="btn outline" to={data.secondary[1]}>{data.secondary[0]}</Link></div></div>{data.heroPortfolio ? <PortfolioHeroCard preview={data.heroPortfolio}/> : data.heroOrbit ? <AutomationOrbitCard orbit={data.heroOrbit}/> : <div className={`glass scr-hero-card ${data.cardClass || ''}`}>{data.cardEyebrow && <span className="label">{data.cardEyebrow}</span>}<strong>{data.card[0]}</strong><p>{data.card[1]}</p></div>}</div></section>;
}

function ProcessSection({ items, eyebrow = 'How we work', heading = 'We define the work, responsibilities, and next steps.' }) {
  return <section className="section dark"><div className="container"><div className="label">{eyebrow}</div><h2>{Array.isArray(heading) ? <>{heading[0]}<br/>{heading[1]}</> : heading}</h2><div className="process">{items.map(([title,copy],index)=><div className="process-row" key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>;
}

function DecisionSection({ decision }) {
  if (!decision) return null;
  return <section className="section soft scr-decision"><div className="container"><div className="label">Website journey</div><h2>{decision.heading}</h2>{decision.text && <p className="scr-decision-copy">{decision.text}</p>}{decision.panels && <div className="scr-decision-grid">{decision.panels.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>}<p className="scr-decision-closing">{decision.closing}</p></div></section>;
}

function FinalCta({ data }) {
  const button = data.ctaButton || ['Discuss your project', '/contact/#contact-enquiry'];
  return <section className="section"><div className="container"><div className="cta scr-cta"><h2>{data.cta[0]}</h2><p>{data.cta[1]}</p><div className="actions"><Link className="btn" to={button[1]}>{button[0]}</Link></div></div></div></section>;
}

function RelatedColumns({ serviceLinks, industryLinks, articles }) {
  useEffect(() => {
    if (window.location.hash === '#related-resources') document.getElementById('related-resources')?.scrollIntoView();
  }, []);
  return <section id="related-resources" className="related-section scr-related scr-related-with-articles"><div className="container">
    <div><h2>Related Services</h2><i/><ul>{serviceLinks.map(([label,path])=><li key={`${path}-${label}`}><Link to={path}>{label}</Link></li>)}</ul></div>
    <div><h2>Related Industries</h2><i/><ul>{industryLinks.map(([label,path])=><li key={`${path}-${label}`}><Link to={path}>{label}</Link></li>)}</ul></div>
    <div><h2>Related Articles</h2><i/><ul>{articles.map(([label,path])=><li key={path}><a href={path}>{label}</a></li>)}</ul></div>
  </div></section>;
}

function StandardReview({ data, slug }) {
  const relatedArticles = relatedArticlesFor({ slug });
  const pageAudiences = data.audiences || audiences;
  const resources = <RelatedColumns serviceLinks={data.related} industryLinks={data.relatedIndustries || pageAudiences} articles={relatedArticles}/>;
  return <div className="scr-page"><ReviewHero data={data}/>
    <section className="section soft"><div className="container"><div className="label">Audience</div><h2>{data.audienceHeading || 'Who this service is for.'}</h2>{data.audienceIntro && <p className="scr-section-intro">{data.audienceIntro}</p>}<div className="grid four scr-audience">{pageAudiences.map(([label,path,copy])=><Link className="card" to={path} key={path}><small>Explore</small><h3>{label}</h3>{copy && <p>{copy}</p>}</Link>)}</div></div></section>
    <section className="section"><div className="container scr-included"><div><div className="label">Project scope</div><h2>{data.scopeHeading || 'What your project can include.'}</h2><p>{data.scopeIntro || 'Your proposal will confirm the deliverables, responsibilities, and any ongoing support.'}</p></div><ul>{data.included.map(item=>Array.isArray(item)?<li key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></li>:<li key={item}>{item}</li>)}</ul></div></section>
    <section className="section soft"><div className="container"><div className="label">{data.examplesEyebrow || 'What we can create'}</div><h2>{data.examplesHeading || 'Services shaped around your goals.'}</h2><div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    {!data.resourcesAfterCta && resources}
    <FinalCta data={data}/>
    {data.resourcesAfterCta && resources}
  </div>;
}

function ChildReview({ data }) {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId && targetId === data.scopeId) document.getElementById(targetId)?.scrollIntoView();
  }, [data.scopeId]);
  const serviceLinks = data.related.filter(([,path]) => path.startsWith('/services/') || path.startsWith('/portfolio/'));
  const industryLinks = data.related.filter(([,path]) => !path.startsWith('/services/') && !path.startsWith('/portfolio/'));
  const relatedArticles = relatedArticlesFor(data);
  const resources = <RelatedColumns serviceLinks={serviceLinks} industryLinks={industryLinks} articles={relatedArticles}/>;
  return <div className="scr-page"><ReviewHero data={data}/>
    {data.showAudience && <section className="section soft"><div className="container scr-child-audience"><div className="label">Audience</div><h2>AI-assisted marketing with the review your work requires.</h2><p>Suitable for expert-led and regulated businesses when the task, source material, responsibilities, and approval process are clearly defined.</p></div></section>}
    <section id={data.scopeId} className="section"><div className="container scr-included"><div><div className="label">Project scope</div><h2>{data.scopeHeading || 'What your project can include.'}</h2>{data.scopeIntro !== '' && <p>{data.scopeIntro || 'Your proposal confirms the deliverables, responsibilities, tools, and any ongoing support.'}</p>}</div><ul>{data.included.map(item=>Array.isArray(item)?<li key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></li>:<li key={item}>{item}</li>)}</ul></div></section>
    <DecisionSection decision={data.decision}/>
    <section className="section soft"><div className="container"><div className="label">{data.examplesEyebrow || 'What we can create'}</div><h2>{data.examplesHeading || 'Services shaped around your goals.'}</h2><div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    {!data.resourcesAfterCta && resources}
    <FinalCta data={data}/>
    {data.resourcesAfterCta && resources}
  </div>;
}

function AiOverviewReview() {
  const relatedArticles = relatedArticlesFor({ slug: 'ai-powered-digital-marketing' });
  return <div className="scr-page"><ReviewHero data={aiOverview}/>
    <section className="section"><div className="container"><div className="label">AI service areas</div><h2>Use AI where it supports a defined marketing task.</h2><p className="scr-ai-intro">AI creative produces assets such as visuals and video. Brand-voice tools and custom GPTs support drafting and repeatable tasks. Automation connects steps across tools. These can be scoped separately or combined.</p><div className="grid scr-ai-grid">{aiServices.map(([title,path,copy])=><Link className="card" to={path} key={path}><small>Explore</small><h3>{title}</h3><p>{copy}</p></Link>)}</div></div></section>
    <ProcessSection items={aiOverview.process} eyebrow={aiOverview.processEyebrow} heading={aiOverview.processHeading}/>
    <RelatedColumns serviceLinks={[["AI Automation", "/services/ai-automation-for-regulated-industries-magneo/"], ["Social Media & LinkedIn", "/services/social-media-linkedin-marketing-for-regulated-industries/"]]} industryLinks={audiences} articles={relatedArticles}/>
    <FinalCta data={aiOverview}/>
  </div>;
}

export default function ServiceContentReview({ serviceSlugOverride }) {
  const params = useParams();
  const isReview = useLocation().pathname.split('/').includes('test');
  const serviceSlug = serviceSlugOverride || params.serviceSlug;
  const childData = getChildServiceData(serviceSlug);
  const data = childData || (serviceSlug === 'ai-powered-digital-marketing' ? aiOverview : pageData[serviceSlug]);
  useReviewMetadata(data || aiOverview, serviceSlug || 'ai-powered-digital-marketing', isReview);
  if (!data) return <Navigate to="/services/test/" replace/>;
  if (childData) return <ChildReview data={childData}/>;
  return serviceSlug === 'ai-powered-digital-marketing' ? <AiOverviewReview/> : <StandardReview data={data} slug={serviceSlug}/>;
}
