import { useEffect } from 'react';
import './styles/legal-circle-test.css';

const BASE = 'https://magneo.ca';
const PAGE_PATH = '/the-legal-circle-test/';

const topics = [
  ['01', 'Conversations & connections', 'Comment on discussions, ask questions and exchange perspectives with lawyers across practice areas. Build relationships through shared interests and professional experience.'],
  ['02', 'Legal marketing & PR', 'Explore ways to communicate your expertise, strengthen your professional reputation and develop your practice—from personal branding and LinkedIn to media opportunities and public speaking.'],
  ['03', 'Interviews & podcasts', 'Share your professional story, discuss an issue that matters to you or express interest in joining an interview or podcast conversation.'],
  ['04', 'Articles & member perspectives', 'Contribute ideas for articles, interviews and collaborative features. Published contributions include clear author credit, a short biography and a professional profile link.'],
  ['05', 'Online & in-person meetings', 'Get to know fellow members through planned online discussions and in-person gatherings, with opportunities to exchange ideas and continue conversations beyond the feed.'],
  ['06', 'Professional webinars & workshops', 'Explore focused learning opportunities around professional visibility, marketing and practice development. Paid sessions will clearly explain the topic, presenter, learning outcomes and price.']
];

const benefits = [
  ['Get your expertise seen', 'Put yourself forward for interviews, podcast conversations and credited articles. Share your perspective and give more people a reason to remember your name.'],
  ['Discover ways to grow your practice', 'Explore legal marketing, PR, personal branding and business development through practical discussions, shared experiences and professional webinars.'],
  ['Build relationships beyond a connection request', 'Meet peers, exchange ideas and discover potential collaborators and referral relationships through online conversations and planned in-person gatherings.'],
  ['Have a voice in the conversation', 'Comment on posts, ask questions and share what has worked for you. Suggest the topics, guests and challenges you want the community to explore.']
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
      setMeta('meta[name="description"]', { name: 'description', content: 'The Legal Circle brings lawyers, paralegals, notaries and other legal professionals together to exchange ideas, build relationships and explore the business of law.' }),
      setMeta('meta[name="robots"]', { name: 'robots', content: 'noindex, nofollow' }),
      setMeta('meta[property="og:title"]', { property: 'og:title', content: 'The Legal Circle | A Community for Lawyers' }),
      setMeta('meta[property="og:description"]', { property: 'og:description', content: 'A participatory community for lawyers to exchange ideas, build relationships and contribute to conversations, interviews and events.' }),
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
              <p className="tlc-eyebrow">The Legal Circle</p>
              <h1 id="tlc-hero-title">Connect with peers.<br /><em>Share your perspective.</em></h1>
              <p className="tlc-lede">A community for lawyers, paralegals, notaries and other legal professionals to exchange ideas, build relationships and explore the business of law.</p>
              <div className="tlc-actions">
                <PendingLinkedInLink className="tlc-button">Join on LinkedIn</PendingLinkedInLink>
                <a className="tlc-text-link" href="#about">Explore the community <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="tlc-hero-art" role="img" aria-label="Animated circular paths moving around a bright green centre">
              <div className="tlc-orbit-field" aria-hidden="true">
                <span className="tlc-orbit tlc-orbit-1" />
                <span className="tlc-orbit tlc-orbit-2" />
                <span className="tlc-orbit tlc-orbit-3" />
                <span className="tlc-orbit tlc-orbit-4" />
                <span className="tlc-orbit tlc-orbit-5" />
                <span className="tlc-orbit tlc-orbit-6" />
                <span className="tlc-orbit tlc-orbit-7" />
                <span className="tlc-orbit tlc-orbit-8" />
                <span className="tlc-orbit-core" />
              </div>
              <div className="tlc-audience-labels" aria-hidden="true">
                <span className="tlc-audience-lawyers">Lawyers</span>
                <span className="tlc-audience-paralegals">Paralegals</span>
                <span className="tlc-audience-notaries">Notaries</span>
                <span className="tlc-audience-professionals">Legal professionals</span>
              </div>
              <span className="tlc-art-caption">Ideas <b>•</b> Peers <b>•</b> Opportunities</span>
            </div>
          </div>
        </section>

        <section className="tlc-section tlc-why" id="about" aria-labelledby="tlc-about-title">
          <div className="tlc-why-intro">
            <p className="tlc-eyebrow">Why join The Legal Circle?</p>
            <h2 id="tlc-about-title">Build your reputation.<br />Grow your connections.<br />Develop your practice.</h2>
            <p className="tlc-why-lede">Your expertise deserves to be known. The Legal Circle brings legal professionals together to share their knowledge, explore ways to grow their practices and build relationships that can lead to new opportunities.</p>
          </div>
          <div className="tlc-benefit-grid">
            {benefits.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="tlc-why-action">
            <PendingLinkedInLink className="tlc-button">Join The Legal Circle on LinkedIn</PendingLinkedInLink>
            <p>Help shape upcoming interviews, discussions and events as the community grows.</p>
          </div>
        </section>

        <section className="tlc-section tlc-topics" id="topics" aria-labelledby="tlc-topics-title">
          <div className="tlc-section-intro">
            <p className="tlc-eyebrow"><span>03</span> Inside the circle</p>
            <h2 id="tlc-topics-title">A community you can take part in.</h2>
          </div>
          <div className="tlc-topic-list">
            {topics.map(([number, title, text]) => (
              <article className="tlc-topic" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <p className="tlc-topics-note">The community is taking shape. Events, interviews and learning opportunities will develop around members’ interests and participation.</p>
          </div>
        </section>

        <section className="tlc-invitation" id="join" aria-labelledby="tlc-join-title">
          <div className="tlc-invitation-index" aria-hidden="true">04</div>
          <div>
            <p className="tlc-eyebrow">Join the conversation</p>
            <h2 id="tlc-join-title">Bring a question. Share a perspective. Join the circle.</h2>
            <p>Meet fellow lawyers, contribute to discussions or suggest a topic for a future interview, event or webinar. Start by joining The Legal Circle on LinkedIn.</p>
            <span className="tlc-button tlc-button-disabled" role="link" aria-disabled="true">Join on LinkedIn</span>
            <small id="tlc-link-status">The LinkedIn community link is required before launch.</small>
          </div>
        </section>
      </main>

      <footer className="tlc-footer">
        <CommunityLogo footer />
        <p>Founded by Adele Salikhova of <a href="https://magneo.ca/">Magneo</a>.</p>
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
