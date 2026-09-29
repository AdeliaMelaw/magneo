import { useEffect } from 'react';
import './styles/legal-circle-test.css';

const BASE = 'https://magneo.ca';
const PAGE_PATH = '/the-legal-circle-test/';

const topics = [
  ['01', 'Connections & networking', 'Meet peers across practice areas, exchange experiences and build relationships that extend beyond a connection request.'],
  ['02', 'Marketing & visibility', 'Explore how websites, search, social media and video can help the right people discover and understand your expertise.'],
  ['03', 'Personal branding & PR', 'Discuss professional positioning, speaking opportunities, media contributions and ways to develop a recognisable voice.'],
  ['04', 'Practice development', 'Exchange perspectives on client experience, business development, partnerships and the practical challenges of growing a firm.'],
  ['05', 'Technology & the changing profession', 'Explore how AI and digital tools are shaping communication, productivity and the business of law.']
];

const participation = [
  ['01', 'Join the conversation', 'Ask a question, contribute to a discussion or share something you have learned in practice.'],
  ['02', 'Exchange useful ideas', 'Discover approaches to marketing, visibility and practice development—and add your own experience.'],
  ['03', 'Build relationships', 'Get to know other lawyers through thoughtful conversations and shared professional interests.']
];

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  const created = !element;
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return { element, created };
}

function CommunityLogo({ footer = false }) {
  return (
    <span className={`tlc-logo${footer ? ' tlc-logo-footer' : ''}`}>
      <img src="/the-legal-circle-logo.png" alt="The Legal Circle" />
    </span>
  );
}

function PendingLinkedInLink({ className = '', children }) {
  return (
    <a className={className} href="#join" aria-describedby="tlc-link-status">
      {children}
    </a>
  );
}

export default function LegalCircleTest() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Legal Circle | A Community for Lawyers';

    const tags = [
      setMeta('meta[name="description"]', { name: 'description', content: 'The Legal Circle is a community for lawyers to exchange ideas, build professional relationships and explore the business of legal practice.' }),
      setMeta('meta[name="robots"]', { name: 'robots', content: 'noindex, nofollow' }),
      setMeta('meta[property="og:title"]', { property: 'og:title', content: 'The Legal Circle | A Community for Lawyers' }),
      setMeta('meta[property="og:description"]', { property: 'og:description', content: 'Ideas, relationships and practical conversations for lawyers building their careers and practices.' }),
      setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' }),
      setMeta('meta[property="og:url"]', { property: 'og:url', content: `${BASE}${PAGE_PATH}` })
    ];

    let canonical = document.head.querySelector('link[rel="canonical"]');
    const canonicalCreated = !canonical;
    const previousCanonical = canonical?.getAttribute('href');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE}${PAGE_PATH}`);

    return () => {
      document.title = previousTitle;
      tags.forEach(({ element, created }) => created && element.remove());
      if (canonicalCreated) canonical.remove();
      else if (previousCanonical) canonical.setAttribute('href', previousCanonical);
    };
  }, []);

  return (
    <div className="tlc-page">
      <a className="tlc-skip" href="#main-content">Skip to content</a>

      <header className="tlc-header">
        <a className="tlc-brand" href="#top" aria-label="The Legal Circle home">
          <CommunityLogo />
        </a>
        <nav className="tlc-nav" aria-label="Community navigation">
          <a href="#about">About</a>
          <a href="#topics">Topics</a>
          <a href="#join">Join</a>
        </nav>
        <PendingLinkedInLink className="tlc-button tlc-button-small">Join on LinkedIn</PendingLinkedInLink>
      </header>

      <main id="main-content">
        <section className="tlc-hero" id="top" aria-labelledby="tlc-hero-title">
          <div className="tlc-hero-grid">
            <div className="tlc-hero-copy">
              <p className="tlc-eyebrow"><span>01</span> A community for lawyers</p>
              <h1 id="tlc-hero-title">Your next connection.<br /><em>Your next perspective.</em></h1>
              <p className="tlc-lede">The Legal Circle brings lawyers together to exchange ideas, build professional relationships and explore the business of legal practice—from marketing and personal branding to PR and practice development.</p>
              <div className="tlc-actions">
                <PendingLinkedInLink className="tlc-button">Join The Legal Circle on LinkedIn</PendingLinkedInLink>
                <a className="tlc-text-link" href="#about">Explore the community <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <figure className="tlc-hero-art">
              <div className="tlc-orbits" aria-hidden="true"><i /><i /><i /><b /></div>
              <img src="/the-legal-circle-community-banner.png" alt="The Legal Circle — a place for lawyers to connect through ideas, peers and opportunities" />
              <figcaption>Ideas <span>•</span> Peers <span>•</span> Opportunities</figcaption>
            </figure>
          </div>
        </section>

        <section className="tlc-section tlc-about" id="about" aria-labelledby="tlc-about-title">
          <div className="tlc-section-number">02 / About</div>
          <div className="tlc-copy-column">
            <h2 id="tlc-about-title">A place for the conversations beyond casework.</h2>
            <div className="tlc-prose-grid">
              <p>Building a legal career or growing a practice involves more than legal expertise. It also means developing relationships, communicating your value and finding your own professional voice.</p>
              <p>The Legal Circle is a space to share experiences, ask practical questions and learn from other lawyers. Whether you are developing your profile, building a firm or exploring a new direction, the community gives those conversations a place to happen.</p>
            </div>
          </div>
        </section>

        <section className="tlc-section tlc-topics" id="topics" aria-labelledby="tlc-topics-title">
          <div className="tlc-section-intro">
            <p className="tlc-eyebrow"><span>03</span> Inside the circle</p>
            <h2 id="tlc-topics-title">Ideas for your career, your reputation and your practice.</h2>
          </div>
          <div className="tlc-topic-list">
            {topics.map(([number, title, text]) => (
              <article className="tlc-topic" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tlc-section tlc-participation" aria-labelledby="tlc-participation-title">
          <div className="tlc-section-number">04 / Participate</div>
          <h2 id="tlc-participation-title">Bring a question. Share a perspective. Make a connection.</h2>
          <div className="tlc-participation-grid">
            {participation.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className="tlc-community-note">
            <strong>Community note</strong>
            <p>Keep discussions respectful and protect client confidentiality. Share useful perspectives without turning conversations into sales pitches.</p>
          </aside>
        </section>

        <section className="tlc-invitation" id="join" aria-labelledby="tlc-join-title">
          <div className="tlc-invitation-index" aria-hidden="true">05</div>
          <div>
            <p className="tlc-eyebrow">Join the conversation</p>
            <h2 id="tlc-join-title">Be part of The Legal Circle.</h2>
            <p>Connect with lawyers interested in building stronger relationships, a clearer professional presence and a thriving practice. Join the conversation on LinkedIn.</p>
            <span className="tlc-button tlc-button-disabled" role="link" aria-disabled="true">Join on LinkedIn</span>
            <small id="tlc-link-status">The LinkedIn community link is required before launch.</small>
          </div>
        </section>
      </main>

      <footer className="tlc-footer">
        <CommunityLogo footer />
        <p>A community initiative by <a href="https://magneo.ca/">Magneo</a>.</p>
        <nav aria-label="Legal Circle footer">
          <a href="https://magneo.ca/">Magneo</a>
          <a href="https://magneo.ca/privacy-policy/">Privacy Policy</a>
          <a href="https://magneo.ca/terms-of-service/">Website Terms of Use</a>
          <a href="#join" aria-describedby="tlc-link-status">LinkedIn community</a>
        </nav>
      </footer>
    </div>
  );
}
