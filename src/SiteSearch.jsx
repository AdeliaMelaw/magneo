import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/site-search.css';

const synonymGroups = [
  ['lawyer', 'lawyers', 'law firm', 'law firms', 'legal'],
  ['website', 'websites', 'web design', 'website design'],
  ['crm', 'automation', 'workflow', 'workflows'],
  ['ppc', 'paid ads', 'paid advertising', 'google ads'],
  ['social media', 'linkedin', 'social'],
  ['doctor', 'clinic', 'healthcare', 'medical'],
  ['financial advisor', 'financial advisors', 'wealth advisor', 'finance']
];

const serviceNeedTerms = ['website', 'design', 'seo', 'content', 'social', 'linkedin', 'ppc', 'advertising', 'landing', 'automation', 'crm', 'branding', 'marketing'];
const industryNeedTerms = ['lawyer', 'legal', 'law firm', 'financial', 'advisor', 'healthcare', 'clinic', 'doctor', 'technology', 'saas', 'fintech', 'crypto'];

function normalise(value = '') {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function expandedTerms(query) {
  const clean = normalise(query);
  const terms = new Set(clean.split(' ').filter(Boolean));
  synonymGroups.forEach((group) => {
    if (group.some((item) => clean.includes(normalise(item)))) group.forEach((item) => normalise(item).split(' ').forEach((term) => terms.add(term)));
  });
  return { clean, terms: [...terms] };
}

function scoreItem(item, query) {
  const { clean, terms } = expandedTerms(query);
  if (!clean) return 0;
  const title = normalise(item.title);
  const description = normalise(item.description);
  const keywords = normalise(item.keywords);
  let score = title.includes(clean) ? 80 : 0;
  terms.forEach((term) => {
    if (title.includes(term)) score += 24;
    if (keywords.includes(term)) score += 14;
    if (description.includes(term)) score += 6;
  });
  if (item.type === 'Service' && serviceNeedTerms.some((term) => clean.includes(term))) score += 18;
  if (item.type === 'Industry' && industryNeedTerms.some((term) => clean.includes(term))) score += 16;
  return score;
}

function track(event, details) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details });
}

function analyticsTerm(value = '') {
  return value.trim().slice(0, 120)
    .replace(/https?:\/\/\S+/gi, '[url]')
    .replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi, '[email]')
    .replace(/\+?\d[\d\s().-]{6,}\d/g, '[number]');
}

export default function SiteSearch({ items, mobile = false }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [blogItems, setBlogItems] = useState([]);
  const [blogReady, setBlogReady] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const trackedNoResults = useRef(new Set());

  useEffect(() => {
    let active = true;
    fetch('/api/blog-search')
      .then((response) => response.ok ? response.json() : [])
      .then((posts) => { if (active && Array.isArray(posts)) setBlogItems(posts); })
      .catch(() => {})
      .finally(() => { if (active) setBlogReady(true); });
    return () => { active = false; };
  }, []);

  const searchableItems = useMemo(() => {
    const unique = new Map();
    [...items, ...blogItems].forEach((item) => {
      const key = item.url.replace(/\/$/, '').toLowerCase();
      if (!unique.has(key)) unique.set(key, item);
    });
    return [...unique.values()];
  }, [items, blogItems]);

  const results = useMemo(() => query.trim().length < 2 ? [] : searchableItems
    .map((item) => ({ ...item, score: scoreItem(item, query) }))
    .filter((item) => item.score > 5)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 12), [query, searchableItems]);

  const close = () => {
    setOpen(false);
    setQuery('');
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); close(); return; }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll('button,input,a[href]')].filter((element) => !element.hasAttribute('disabled'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('search-open');
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('search-open'); };
  }, [open]);

  useEffect(() => {
    const clean = query.trim();
    if (!blogReady || clean.length < 2 || results.length || trackedNoResults.current.has(clean)) return undefined;
    const timer = window.setTimeout(() => {
      track('site_search_no_results', { search_term: analyticsTerm(clean) });
      trackedNoResults.current.add(clean);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [blogReady, query, results.length]);

  const submit = (event) => {
    event.preventDefault();
    const clean = query.trim().slice(0, 120);
    if (clean.length < 2) return;
    track('site_search', { search_term: analyticsTerm(clean), results_count: results.length });
  };

  return <>
    <button ref={triggerRef} type="button" className={`site-search-trigger ${mobile ? 'site-search-trigger-mobile' : 'site-search-trigger-desktop'}`} aria-label="Search Magneo" aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg><span>Search</span>
    </button>
    {open && <div className="site-search-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <section ref={dialogRef} className="site-search-dialog" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
        <header><div><small>Site search</small><h2 id="site-search-title">What are you looking for?</h2></div><button type="button" className="site-search-close" onClick={close} aria-label="Close search">Close <span aria-hidden="true">×</span></button></header>
        <form role="search" onSubmit={submit}>
          <label htmlFor={`site-search-input-${mobile ? 'mobile' : 'desktop'}`}>Search Magneo</label>
          <div><input ref={inputRef} id={`site-search-input-${mobile ? 'mobile' : 'desktop'}`} type="search" value={query} maxLength="120" onChange={(event) => setQuery(event.target.value)} placeholder="Search services, industries and articles" autoComplete="off"/><button type="submit">Search</button></div>
        </form>
        <div className="site-search-results" aria-live="polite">
          {query.trim().length < 2 && <p className="site-search-prompt">Search across services, industries, portfolio projects and articles.</p>}
          {query.trim().length >= 2 && results.length > 0 && <ul>{results.map((item) => <li key={item.url}><a href={item.url} onClick={() => track('site_search_result_click', { search_term: analyticsTerm(query), result_url: item.url, result_type: item.type })}><small>{item.type}</small><strong>{item.title}</strong><span>{item.description}</span></a></li>)}</ul>}
          {query.trim().length >= 2 && results.length === 0 && <div className="site-search-empty"><p>No matches found. Try a broader term or explore our services.</p><div><Link to="/services/" onClick={close}>Explore Services</Link><Link to="/contact/" onClick={close}>Contact Magneo</Link></div></div>}
        </div>
      </section>
    </div>}
  </>;
}
