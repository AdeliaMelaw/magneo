import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const services = [
  ['Website Design & Development', 'Custom websites that help visitors understand your value, explore your services, and take the next step.', '/services/website-design-for-regulated-professional-industries-magneo/'],
  ['SEO & Content', 'Search strategy and useful content that make your expertise easier to find and understand.', '/services/seo-for-regulated-industries/'],
  ['Paid Advertising & Landing Pages', 'Focused campaigns and landing pages designed around a clear offer and a clear conversion path.', '/services/ppc-landing-pages-for-regulated-industries/'],
  ['Social Media & Personal Branding', 'Content that helps experts share useful ideas, build recognition, and stay consistent.', '/services/social-media-linkedin-marketing-for-regulated-industries/'],
  ['AI Creative & Brand Voice', 'AI-assisted visuals, video, and content systems shaped around your brand and reviewed by people.', '/services/ai-powered-digital-marketing/'],
  ['AI Automation', 'Practical workflows that reduce repetitive marketing tasks while keeping people in control.', '/services/ai-automation-for-regulated-industries-magneo/']
];

const process = [
  ['01', 'Understand the project', 'We clarify the audience, goals, constraints, and what needs to improve.'],
  ['02', 'Shape the direction', 'We define the structure, message, and creative approach before production begins.'],
  ['03', 'Create and refine', 'We design, write, build, and review the work with clear checkpoints.'],
  ['04', 'Launch and improve', 'We prepare the final assets, support launch, and identify useful next steps.']
];

function HomeSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Magneo | Marketing That Makes Your Expertise Clear';
    let description = document.querySelector('meta[name="description"]');
    const existingDescription = description;
    const previousDescription = description?.content;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Website design, content, and AI-powered marketing for regulated and expert-led businesses.';
    let canonical = document.querySelector('link[rel="canonical"]');
    const existingCanonical = canonical;
    const previousCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca/';
    let robots = document.querySelector('meta[name="robots"]');
    const existing = robots;
    const previousRobots = robots?.content;
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'index, follow';
    return () => {
      document.title = previousTitle;
      if (!existingDescription) description.remove();
      else description.content = previousDescription || '';
      if (!existingCanonical) canonical.remove();
      else canonical.href = previousCanonical || '';
      if (!existing) robots.remove();
      else robots.content = previousRobots || '';
    };
  }, []);
  return null;
}

export default function HomeTest() {
  const [videoOpen, setVideoOpen] = useState(false);
  const dialogRef = useRef(null);
  const videoButtonRef = useRef(null);

  const closeVideo = () => {
    setVideoOpen(false);
    window.setTimeout(() => videoButtonRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!videoOpen) return undefined;
    dialogRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeVideo();
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll('button, video, [href], [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [videoOpen]);

  return <div className="ht-page">
    <HomeSeo />
    <main>
      <section className="ht-hero">
        <div className="ht-shell ht-hero-inner">
          <div className="ht-badge"><span aria-hidden="true" />Based in Toronto · Serving Canada &amp; the USA</div>
          <h1>Marketing that makes<br />your expertise <em>clear.</em></h1>
          <p>Website design, content, and AI-powered marketing for law firms, financial advisors, healthcare providers, and expert-led businesses.</p>
          <div className="ht-actions">
            <Link className="ht-button" to="/contact/#contact-form">Discuss your project</Link>
            <Link className="ht-button ht-button-outline" to="/portfolio/">Explore the portfolio</Link>
          </div>
        </div>
      </section>

      <section className="ht-section ht-portfolio" aria-labelledby="ht-portfolio-title">
        <div className="ht-shell">
          <div className="ht-section-copy">
            <span className="ht-eyebrow">Portfolio</span>
            <h2 id="ht-portfolio-title">See what we can create for your business.</h2>
            <p>Explore website concepts, video creative, and automation demonstrations to see how the ideas work in practice.</p>
          </div>
          <div className="ht-preview-grid">
            <article className="ht-preview-card">
              <Link className="ht-preview-media" to="/portfolio/#portfolio-websites" aria-label="Explore website designs"><img src="/portfolio/websites/litigation-editorial-preview-v2.png" alt="Preview of an original Magneo website concept" /></Link>
              <div className="ht-preview-body"><span>Original concept</span><h3>Find your next website.</h3><p>Explore original website concepts and choose a direction to tailor to your business.</p><Link to="/portfolio/#portfolio-websites">Explore website designs <b aria-hidden="true">↗</b></Link></div>
            </article>
            <article className="ht-preview-card">
              <button className="ht-preview-media ht-video-trigger" type="button" onClick={() => setVideoOpen(true)} aria-label="Play the commentary reel"><img src="/portfolio/social/commentary-reel-cover.jpg" alt="Commentary reel cover showing an expert conversation" /><span className="ht-play" aria-hidden="true">▶</span></button>
              <div className="ht-preview-body"><span>Original concept</span><h3>Give your message a new format.</h3><p>Explore short-form video and AI-assisted creative designed to make ideas engaging and easy to follow.</p><button ref={videoButtonRef} className="ht-card-action" type="button" onClick={() => setVideoOpen(true)}>Watch a reel <b aria-hidden="true">↗</b></button></div>
            </article>
            <article className="ht-preview-card">
              <Link className="ht-preview-media" to="/portfolio/#ai-marketing" aria-label="Explore the AI workflow concept"><img src="/portfolio/ai/hubspot-automation.webp" alt="Visual concept for a connected marketing workflow" /></Link>
              <div className="ht-preview-body"><span>Workflow concept</span><h3>See a workflow in action.</h3><p>Explore how connected tools can support content production, enquiries, or follow-up.</p><div className="ht-workflow-path" aria-label="Workflow concept: enquiry input, capture and routing steps, organized follow-up output"><small>Input · Enquiry</small><small>Steps · Capture, route, follow up</small><small>Output · Organized handoff</small></div><Link to="/portfolio/#ai-marketing">Explore the concept <b aria-hidden="true">↗</b></Link></div>
            </article>
          </div>
          <Link className="ht-text-link" to="/portfolio/">Explore the full portfolio <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="ht-section ht-services" aria-labelledby="ht-services-title">
        <div className="ht-shell">
          <div className="ht-section-copy"><span className="ht-eyebrow">What we do</span><h2 id="ht-services-title">Find the right support for your next project.</h2><p>Start with the service you need now, or combine several into a connected marketing system.</p></div>
          <div className="ht-service-grid">
            {services.map(([title, description, path], index) => <Link className="ht-service-card" to={path} key={path}><div><span>0{index + 1}</span><b aria-hidden="true">↗</b></div><h3>{title}</h3><p>{description}</p></Link>)}
          </div>
          <Link className="ht-text-link" to="/services/">View all services <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="ht-section ht-why" aria-labelledby="ht-why-title">
        <div className="ht-shell">
          <div className="ht-section-copy ht-section-copy-light"><span className="ht-eyebrow">Why Magneo</span><h2 id="ht-why-title">Clear scope. Thoughtful work. Practical collaboration.</h2></div>
          <div className="ht-why-grid">
            <article className="ht-why-card ht-adele-card"><img src="/adele-salikhova.jpg" alt="Adele Salikhova, founder of Magneo" /><div><span>Founder-led</span><h3>Led by Adele Salikhova</h3><p>Adele brings 10+ years of marketing experience to businesses in regulated industries and stays closely involved from strategy through delivery.</p><Link to="/about/">About Magneo <b aria-hidden="true">→</b></Link></div></article>
            <article className="ht-why-card ht-review-card"><span>Built for collaboration</span><h3>A clear review process</h3><p>You know what is being created, when feedback is needed, and what happens next. For regulated businesses, the process can include internal review before anything is published.</p><div className="ht-review-line" aria-hidden="true"><i /><i /><i /></div></article>
          </div>
        </div>
      </section>

      <section className="ht-section ht-process" aria-labelledby="ht-process-title">
        <div className="ht-shell"><div className="ht-section-copy ht-section-copy-light"><span className="ht-eyebrow">How we work</span><h2 id="ht-process-title">A focused process from first conversation to launch.</h2></div><div className="ht-process-list">{process.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
      </section>

      <section className="ht-section ht-final" aria-labelledby="ht-final-title"><div className="ht-shell"><div className="ht-final-panel"><span className="ht-eyebrow">Start a conversation</span><h2 id="ht-final-title">Have a project in mind?</h2><p>Tell us what you want to improve. You do not need a finished brief.</p><Link className="ht-button" to="/contact/#contact-form">Discuss your project</Link></div></div></section>
    </main>

    {videoOpen && <div className="ht-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeVideo(); }}>
      <div className="ht-video-dialog" role="dialog" aria-modal="true" aria-labelledby="ht-video-title" tabIndex="-1" ref={dialogRef}>
        <div className="ht-video-head"><div><span>Original concept</span><h2 id="ht-video-title">Commentary reel</h2></div><button type="button" onClick={closeVideo} aria-label="Close video">Close <b aria-hidden="true">×</b></button></div>
        <video controls preload="metadata" poster="/portfolio/social/commentary-reel-cover.jpg"><source src="/portfolio/social/commentary-reel.mp4" type="video/mp4"/>Your browser does not support embedded video.</video>
      </div>
    </div>}

    <footer className="ht-footer"><div className="ht-shell ht-footer-grid"><div><Link className="ht-brand" to="/">Mag<span>neo</span></Link><p>Website design, content, and AI-powered marketing for regulated and expert-led businesses.</p><a href="mailto:contact@magneo.ca">contact@magneo.ca</a><a href="tel:+14378731155">437 873 1155</a></div><div><strong>Services</strong><Link to="/services/website-design-for-regulated-professional-industries-magneo/">Website Design</Link><Link to="/services/seo-for-regulated-industries/">SEO &amp; Content</Link><Link to="/services/ppc-landing-pages-for-regulated-industries/">Paid Advertising</Link><Link to="/services/social-media-linkedin-marketing-for-regulated-industries/">Social Media</Link><Link to="/services/ai-automation-for-regulated-industries-magneo/">AI Automation</Link></div><div><strong>Company</strong><Link to="/portfolio/">Portfolio</Link><Link to="/about/">About Magneo</Link><Link to="/contact/">Contact</Link><a href="https://blog.magneo.ca">Insights &amp; Blog</a></div></div></footer>
  </div>;
}
