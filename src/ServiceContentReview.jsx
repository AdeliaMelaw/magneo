import { useEffect } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import './styles/service-content-review.css';
import { getChildServiceData } from './data/child-service-review-data.js';

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
    description: 'Website strategy, copy, design, and development for businesses where credibility matters. Help visitors understand your services, find relevant information, and take the next step.',
    primary: ['Discuss your website', '/contact/#contact-enquiry'], secondary: ['Explore website concepts', portfolioLinks.websites],
    card: ['WEBSITES', 'Positioning, copy, design, and development.'],
    heroPortfolio: {
      label: 'WEBSITE CONCEPT',
      title: 'Personal Injury · Modern',
      image: '/portfolio/websites/personal-injury-modern-hero-preview.webp',
      imageAlt: 'Preview of Magneo’s modern personal-injury website concept',
      demoUrl: '/portfolio/legal-websites/personal-injury-bold/',
      portfolioUrl: portfolioLinks.websites,
    },
    included: ['Website structure and page planning','Messaging and website copy','Visual design and mobile layouts','Website development and agreed integrations','Forms, on-page SEO, and agreed analytics setup','Pre-launch checks and handover guidance'],
    examples: [
      ['Redesign an existing website','Reorganise your pages, clarify your services, and update the design around what visitors need to know.'],
      ['Create a focused service website','Build a clear set of pages explaining your offer, relevant experience, and how to enquire.'],
      ['Build a campaign landing page','Create a dedicated page that connects a specific campaign message with a relevant next step.'],
    ],
    process: [['Plan','Agree on the audience, pages, functionality, and project scope.'],['Write and design','Develop the messaging and layouts for review before the build progresses.'],['Build and check','Implement the approved direction and check navigation, forms, and mobile presentation.'],['Launch and hand over','Complete the agreed launch steps and explain how the website will be maintained.']],
    faq: [
      ['Is website copy included?','Copywriting can be included in the scope. The proposal will specify which pages we write and which information or materials you provide.'],
      ['Can you redesign an existing website?','Yes. We first review the existing website, content, and platform to determine what can be retained and what needs to change.'],
      ['How long does a website project take?','Timing depends on the number of pages, required functionality, content readiness, and review stages. Your proposal will include a project timeline.'],
      ['Who handles content approval?','You approve the final content. Where industry-specific claims need specialist review, we agree who reviews them before publication.'],
      ['What happens after launch?','Handover and any ongoing maintenance, hosting, or content support are defined in the proposal. Recurring services are scoped separately.'],
    ],
    cta: ['Planning a new website?','Share your current website or your plans, and tell Adele what needs to improve.'],
    related: [['SEO & Content','/services/seo-for-regulated-industries/'],['PPC & Landing Pages','/services/ppc-landing-pages-for-regulated-industries/']],
  },
  'social-media-linkedin-marketing-for-regulated-industries': {
    title: 'Social Media & LinkedIn Marketing for Regulated Industries',
    description: 'Content strategy, posts, and short-form video that help you communicate your expertise consistently. Choose the channels and formats that fit your audience, with an agreed process for review and publishing.',
    primary: ['Discuss your content', '/contact/#contact-enquiry'], secondary: ['Explore content examples', portfolioLinks.social],
    card: ['CONTENT', 'Posts, reels, and LinkedIn content shaped around your expertise.'],
    included: ['Audience and channel planning','Content themes and editorial calendars','Post copy and visual creative','Short-form video concepts, scripts, and agreed production','Content approval and publishing arrangements','Reporting on agreed content and enquiry metrics'],
    examples: [
      ['Build a LinkedIn content series','Turn recurring audience questions and your professional perspective into a connected series of posts.'],
      ['Repurpose an interview','Develop short clips, post ideas, and supporting copy from a recorded conversation.'],
      ['Plan content around a service','Create a sequence of explanations, examples, and invitations that help people understand a specific offer.'],
    ],
    process: [['Set the direction','Choose the audience, channels, themes, and formats.'],['Develop the content','Create the agreed copy, visuals, scripts, or videos.'],['Review and publish','Collect feedback and follow the agreed approval and publishing process.'],['Learn and refine','Review performance and use relevant findings to guide the next content cycle.']],
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
    included: ['Review of the current process and tools','Workflow mapping and requirements','Agreed integrations and automation setup','AI-assisted steps where appropriate','Review points, exception handling, and testing','Documentation, handover, and separately scoped maintenance'],
    examples: [
      ['Route an enquiry','Transfer agreed form information into a CRM, notify the responsible person, and create a follow-up task.'],
      ['Coordinate content approval','Move a draft through defined review stages and notify the next person when action is needed.'],
      ['Prepare a reporting summary','Bring selected marketing data into a draft summary for someone to check before sharing.'],
    ],
    process: [['Map the task','Understand the current process, tools, information, and people involved.'],['Define the workflow','Agree on triggers, actions, review points, and what happens when something fails.'],['Build and test','Configure the agreed connections and test normal cases and exceptions.'],['Hand over','Document the workflow, responsibilities, and any maintenance arrangements.']],
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
    included: ['Campaign objectives and audience planning','Keyword or targeting research for the agreed platform','Ad copy and agreed creative assets','Landing-page copy, design, and implementation','Conversion tracking and pre-launch checks','Campaign management and reporting where included'],
    examples: [
      ['Promote a specific service','Connect an advertisement to a landing page explaining one offer and how to enquire.'],
      ['Support an event or consultation offer','Build a campaign around a defined invitation, with a relevant registration or enquiry page.'],
      ['Refine an existing campaign','Review the targeting, message, landing page, and tracking to identify changes worth testing.'],
    ],
    process: [['Plan','Agree on the offer, audience, platform, budget, and measurement.'],['Create','Develop the ads and landing page for review.'],['Check and launch','Verify the agreed tracking and complete campaign setup before launch.'],['Review and adjust','Assess campaign data and refine the elements included in the management scope.']],
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
    description: 'Clarify what you want to be known for and how you communicate it. Develop positioning, profile messaging, and content direction that reflect your real expertise and professional voice.',
    primary: ['Discuss your positioning', '/contact/#contact-enquiry'], secondary: ['View all services', '/services/'],
    card: ['YOUR VOICE', 'Positioning, profile messaging, and content direction.'],
    included: ['Audience and positioning discovery','A clear professional introduction and core messages','LinkedIn headline, About section, and biography copy','Voice and content-theme guidance','Direction for profile imagery and visual consistency','A practical plan for putting the positioning into use'],
    examples: [
      ['Clarify a specialist position','Explain who you help, what you focus on, and what makes your perspective relevant.'],
      ['Refresh a professional profile','Bring your headline, biography, and profile messaging into a consistent direction.'],
      ['Connect several professional roles','Develop a clear personal narrative that explains how your businesses or areas of expertise relate.'],
    ],
    process: [['Understand the background','Explore your experience, audience, goals, and current presentation.'],['Define the positioning','Agree on the focus, core message, and professional voice.'],['Develop the assets','Write and refine the profile copy and other agreed materials.'],['Put it into practice','Create a practical direction for applying the positioning across your presence and content.']],
    faq: [
      ['How is personal branding different from social media management?','Personal branding defines your positioning, message, and voice. Social media management handles ongoing content and publishing. They can be combined, but are scoped separately.'],
      ['What do you need from me?','We need your background, areas of expertise, goals, and examples of how you communicate. Interviews and feedback help the work reflect your actual perspective.'],
      ['Do I need to appear on video?','No. Your positioning can be expressed through written profiles, articles, presentations, and other formats. Video is an option.'],
      ['Can you help me communicate more than one role or business?','Yes. The work can clarify how your roles connect while keeping the message understandable to your intended audience.'],
      ['Is ongoing content included?','Only where specified. Your proposal distinguishes positioning and profile work from recurring content production.'],
    ],
    cta: ['What do you want to be known for?','Tell Adele about your work, your audience, and what your current profile does not yet communicate.'],
    related: [['Social Media & LinkedIn','/services/social-media-linkedin-marketing-for-regulated-industries/'],['Website Design','/services/website-design-for-regulated-professional-industries-magneo/']],
  },
};

const aiOverview = {
  title: 'AI-powered digital marketing for regulated industries.',
  description: 'Explore practical uses of AI across content, video, search, websites, and marketing workflows. Each project starts with a defined purpose, suitable tools, and an agreed review process.',
  primary: ['Discuss an AI project','/contact/#contact-enquiry'], secondary: ['Explore AI examples',portfolioLinks.ai],
  card: ['AI','Creative, content, search, websites, and connected workflows.'],
  process: [['Define the use','Identify the task, audience, and intended output.'],['Select the approach','Choose suitable tools, source materials, and review requirements.'],['Create and test','Develop the assets or workflow and check them against the agreed brief.'],['Deliver and document','Provide the agreed outputs and explain their use, limitations, and next steps.']],
  cta: ['Where could AI support your marketing?','Bring a specific idea or a recurring task, and we’ll explore a practical starting point.'],
};

const aiServices = [
  ['AI SEO','/services/ai-seo/','Plan search architecture, content briefs, and optimisation workflows with defined review steps.'],
  ['AI Social Media Marketing','/services/ai-social-media-marketing/','Support repeatable social-content planning, drafting, and review.'],
  ['AI UGC & AI Video Production','/services/ai-ugc-ai-video-production/','Develop clearly labelled visual and video concepts without presenting generated people as real customers.'],
  ['AI Web Design & Conversion','/services/ai-web-design-conversion/','Use AI-assisted exploration to support website messaging, layouts, and conversion ideas.'],
  ['AI Content Marketing','/services/ai-content-marketing/','Support content research, drafting, repurposing, and editorial workflows.'],
  ['Compliance-Aware AI Workflows','/services/compliance-aware-ai-workflows/','Define review points, claim checks, and approval responsibilities around AI-assisted work.'],
];

function useReviewMetadata(data, slug, isReview) {
  useEffect(() => {
    const title = data.seoTitle || `${data.title.replace(/\.$/, '')} | Magneo`;
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
    setMeta('meta[name="description"]', { name: 'description' }, data.description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, data.description);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, data.description);
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
  return <aside className="scr-portfolio-card" aria-label={`${preview.title} website concept`}>
    <Link className="scr-portfolio-image-link" to={preview.demoUrl} aria-label={`View ${preview.title} website demo`}>
      <span className="scr-browser-chrome" aria-hidden="true"><i/><i/><i/></span>
      <img src={preview.image} alt={preview.imageAlt} width="1440" height="720" loading="eager" decoding="async"/>
    </Link>
    <div className="scr-portfolio-card-copy">
      <span>{preview.label}</span>
      <h2>{preview.title}</h2>
      <div className="scr-portfolio-actions">
        <Link to={preview.demoUrl}>View website demo <span aria-hidden="true">→</span></Link>
        <Link to={preview.portfolioUrl}>Explore website designs <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </aside>;
}

function ReviewHero({ data }) {
  return <section className={`hero scr-hero${data.heroPortfolio ? ' scr-hero-with-portfolio' : ''}`}><div className="container hero-grid"><div><div className="crumb">Home / Services / {data.title.replace(/\.$/, '')}</div><div className="label">Marketing service</div><h1>{data.title}</h1><p className="intro">{data.description}</p><div className="actions"><Link className="btn" to={data.primary[1]}>{data.primary[0]}</Link><Link className="btn outline" to={data.secondary[1]}>{data.secondary[0]}</Link></div></div>{data.heroPortfolio ? <PortfolioHeroCard preview={data.heroPortfolio}/> : <div className="glass scr-hero-card"><strong>{data.card[0]}</strong><p>{data.card[1]}</p></div>}</div></section>;
}

function ProcessSection({ items }) {
  return <section className="section dark"><div className="container"><div className="label">Process</div><h2>A clear project from first decision to handover.</h2><div className="process">{items.map(([title,copy],index)=><div className="process-row" key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>;
}

function FinalCta({ data }) {
  return <section className="section"><div className="container"><div className="cta scr-cta"><h2>{data.cta[0]}</h2><p>{data.cta[1]}</p><div className="actions"><Link className="btn" to="/contact/#contact-enquiry">Discuss your project</Link></div></div></div></section>;
}

function StandardReview({ data }) {
  return <div className="scr-page"><ReviewHero data={data}/>
    <section className="section soft"><div className="container"><div className="label">Audience</div><h2>Who this service is for.</h2><div className="grid four scr-audience">{audiences.map(([label,path])=><Link className="card" to={path} key={path}><small>Explore</small><h3>{label}</h3></Link>)}</div></div></section>
    <section className="section"><div className="container scr-included"><div><div className="label">Project scope</div><h2>What your project can include.</h2><p>Your proposal will confirm the deliverables, responsibilities, and any ongoing support.</p></div><ul>{data.included.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="section soft"><div className="container"><div className="label">Example applications</div><h2>Practical ways to apply the service.</h2><div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <ProcessSection items={data.process}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-section scr-related"><div className="container"><div><h2>Related Services</h2><i/><ul>{data.related.map(([label,path])=><li key={path}><Link to={path}>{label}</Link></li>)}</ul></div><div><h2>Related Industries</h2><i/><ul>{audiences.map(([label,path])=><li key={path}><Link to={path}>{label}</Link></li>)}</ul></div></div></section>
    <FinalCta data={data}/>
  </div>;
}

function ChildReview({ data }) {
  return <div className="scr-page"><ReviewHero data={data}/>
    {data.showAudience && <section className="section soft"><div className="container scr-child-audience"><div className="label">Audience</div><h2>AI-assisted marketing with the review your work requires.</h2><p>Suitable for expert-led and regulated businesses when the task, source material, responsibilities, and approval process are clearly defined.</p></div></section>}
    <section className="section"><div className="container scr-included"><div><div className="label">Project scope</div><h2>What your project can include.</h2><p>Your proposal confirms the deliverables, responsibilities, tools, and any ongoing support.</p></div><ul>{data.included.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="section soft"><div className="container"><div className="label">Example applications</div><h2>Example applications.</h2><div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <ProcessSection items={data.process}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-section scr-related scr-child-related"><div className="container"><div><h2>Continue exploring</h2><i/><ul>{data.related.map(([label,path])=><li key={`${path}-${label}`}><Link to={path}>{label}</Link></li>)}</ul></div></div></section>
    <FinalCta data={data}/>
  </div>;
}

function AiOverviewReview() {
  return <div className="scr-page"><ReviewHero data={aiOverview}/>
    <section className="section"><div className="container"><div className="label">AI service areas</div><h2>Use AI where it supports a defined marketing task.</h2><p className="scr-ai-intro">AI creative produces assets such as visuals and video. Brand-voice tools and custom GPTs support drafting and repeatable tasks. Automation connects steps across tools. These can be scoped separately or combined.</p><div className="grid scr-ai-grid">{aiServices.map(([title,path,copy])=><Link className="card" to={path} key={path}><small>Explore</small><h3>{title}</h3><p>{copy}</p></Link>)}</div></div></section>
    <ProcessSection items={aiOverview.process}/>
    <section className="related-section scr-related"><div className="container"><div><h2>Related Services</h2><i/><ul><li><Link to="/services/ai-automation-for-regulated-industries-magneo/">AI Automation</Link></li><li><Link to="/services/social-media-linkedin-marketing-for-regulated-industries/">Social Media & LinkedIn</Link></li></ul></div><div><h2>Related Industries</h2><i/><ul>{audiences.map(([label,path])=><li key={path}><Link to={path}>{label}</Link></li>)}</ul></div></div></section>
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
  return serviceSlug === 'ai-powered-digital-marketing' ? <AiOverviewReview/> : <StandardReview data={data}/>;
}
