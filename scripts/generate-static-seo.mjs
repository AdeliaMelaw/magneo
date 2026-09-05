import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE_URL = 'https://magneo.ca';
const DIST_DIR = 'dist';
const INDEX_PATH = join(DIST_DIR, 'index.html');
const SITEMAP_PATH = join(DIST_DIR, 'sitemap.xml');
const EXTRA_PATHS = [
  '/services/ai-seo/',
  '/services/ai-social-media-marketing/',
  '/services/ai-ugc-ai-video-production/',
  '/services/ai-web-design-conversion/',
  '/services/ai-content-marketing/',
  '/services/compliance-aware-ai-workflows/'
];

const descriptions = {
  '/': 'Authority-first marketing systems for law firms, financial advisors, healthcare providers, and tech companies. Compliance-safe. Measurable. Built to last.',
  '/about/': 'Magneo is a Toronto-based digital marketing agency for regulated industries, serving law firms, financial advisors, healthcare providers, and tech companies.',
  '/about/adele-salikhova/': 'Meet Adele Salikhova, the marketing strategist behind Magneo and its growth systems for regulated industries.',
  '/services/': 'Explore Magneo services for regulated industries, including SEO, PPC, LinkedIn marketing, website design, AI automation, and personal branding.',
  '/industries/': 'Magneo builds marketing systems for law firms, financial advisors, healthcare clinics, and tech companies across Canada and the USA.',
  '/contact/': 'Contact Magneo to request a brand, SEO, website, PPC, LinkedIn, or AI automation audit for a regulated-industry business.',
  '/law-firm-marketing/': 'Magneo is a law firm marketing agency built for compliance-first growth, authority, rankings, and qualified consultation requests.',
  '/financial-firm-marketing/': 'Marketing systems for financial firms, advisors, portfolio managers, investment firms, insurance advisors, and tax professionals.',
  '/healthcare-marketing/': 'Healthcare marketing systems for clinics and providers that improve visibility, simplify patient decisions, and respect privacy expectations.',
  '/tech-company-marketing/': 'Growth systems for FinTech, LegalTech, Crypto, AI, and SaaS companies that need authority, clarity, and demand without hype.',
  '/services/ai-seo/': 'AI SEO for regulated industries, including search architecture, entity strategy, content briefs, internal links, and optimization workflows.',
  '/services/ai-social-media-marketing/': 'AI social media marketing for regulated industries, with reviewable LinkedIn and social content systems built around authority.',
  '/services/ai-ugc-ai-video-production/': 'AI UGC and AI video production for regulated brands, including scripts, short-form concepts, and brand-safe video workflows.',
  '/services/ai-web-design-conversion/': 'AI web design and conversion support for regulated businesses, including landing pages, CRO messaging, and buyer-intent testing ideas.',
  '/services/ai-content-marketing/': 'AI content marketing for regulated industries, including editorial calendars, topical maps, repurposing, and expert review workflows.',
  '/services/compliance-aware-ai-workflows/': 'Compliance-aware AI workflows for regulated marketing, with human review, claim checks, disclaimers, approvals, and brand controls.',
  '/portfolio/': 'Explore Magneo work across website design, social media marketing, and AI-powered digital marketing for regulated industries.',
  '/portfolio/legal-websites/': 'Explore six original Magneo website concepts for personal injury, brain injury, and litigation law firms.',
  '/portfolio/legal-websites/personal-injury-classic/': 'A timeless, conversion-focused personal injury law firm website concept by Magneo.',
  '/portfolio/legal-websites/personal-injury-bold/': 'A bold, expressive personal injury law firm website concept designed to make the advocate memorable.',
  '/portfolio/legal-websites/litigation-editorial/': 'An editorial litigation law firm website concept combining monochrome typography, motion, and decisive positioning.',
  '/portfolio/legal-websites/brain-injury-3d/': 'An immersive 3D brain injury law firm website concept built around specialist expertise and human dignity.',
  '/portfolio/legal-websites/personal-injury-cinematic/': 'A cinematic personal injury law firm website concept that turns recovery and evidence into a human story.',
  '/portfolio/legal-websites/personal-injury-family-focused/': 'A warm, family-focused personal injury law firm website concept designed to build reassurance and trust.'
};

const titleOverrides = {
  '/': 'Magneo | Digital Marketing for Regulated Industries',
  '/about/': 'About Magneo | Marketing for Regulated Industries',
  '/about/adele-salikhova/': 'About Adele Salikhova | Magneo',
  '/services/': 'Services | Magneo',
  '/industries/': 'Industries We Serve | Magneo',
  '/contact/': 'Contact Magneo | Request a Free Audit',
  '/law-firm-marketing/': 'Law Firm Marketing Agency | Magneo',
  '/financial-firm-marketing/': 'Financial Firm Marketing Agency | Magneo',
  '/healthcare-marketing/': 'Healthcare Marketing Agency | Magneo',
  '/tech-company-marketing/': 'Tech Company Marketing Agency | Magneo',
  '/services/ai-seo/': 'AI SEO | Magneo',
  '/services/ai-social-media-marketing/': 'AI Social Media Marketing | Magneo',
  '/services/ai-ugc-ai-video-production/': 'AI UGC & AI Video Production | Magneo',
  '/services/ai-web-design-conversion/': 'AI Web Design & Conversion | Magneo',
  '/services/ai-content-marketing/': 'AI Content Marketing | Magneo',
  '/services/compliance-aware-ai-workflows/': 'Compliance-Aware AI Workflows | Magneo',
  '/services/personal-branding-for-financial-advisors-wealth-professionals/': 'Personal Branding for Financial Advisors | Magneo',
  '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/': 'LinkedIn Marketing for Healthcare Providers | Magneo',
  '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/': 'LinkedIn Marketing for Tech & SaaS Companies | Magneo',
  '/services/social-media-linkedin-marketing-for-regulated-industries/': 'LinkedIn Marketing for Regulated Industries | Magneo',
  '/services/website-design-for-regulated-professional-industries-magneo/': 'Web Design for Regulated Industries | Magneo',
  '/portfolio/': 'Portfolio | Magneo — Web, Social & AI Marketing',
  '/portfolio/legal-websites/': 'Legal Website Design Portfolio | Magneo',
  '/portfolio/legal-websites/personal-injury-classic/': 'Classic Personal Injury Website Concept | Magneo',
  '/portfolio/legal-websites/personal-injury-bold/': 'Bold Personal Injury Website Concept | Magneo',
  '/portfolio/legal-websites/litigation-editorial/': 'Editorial Litigation Website Concept | Magneo',
  '/portfolio/legal-websites/brain-injury-3d/': '3D Brain Injury Website Concept | Magneo',
  '/portfolio/legal-websites/personal-injury-cinematic/': 'Cinematic Personal Injury Website Concept | Magneo',
  '/portfolio/legal-websites/personal-injury-family-focused/': 'Family-Focused Injury Website Concept | Magneo'
};

const imageOverrides = {
  '/portfolio/': '/portfolio-og.png',
  '/portfolio/legal-websites/': '/legal-websites-og.png',
  '/portfolio/legal-websites/personal-injury-classic/': '/pi-lawyer-hero-generated.png',
  '/portfolio/legal-websites/personal-injury-bold/': '/pi-lawyer-hero-generated.png',
  '/portfolio/legal-websites/litigation-editorial/': '/pi-lawyer-hero-generated.png',
  '/portfolio/legal-websites/brain-injury-3d/': '/brain-injury-head-3d-v2.png',
  '/portfolio/legal-websites/personal-injury-cinematic/': '/test5-cinematic-hero.png',
  '/portfolio/legal-websites/personal-injury-family-focused/': '/test6-family-hero.png'
};

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function normalizePath(urlOrPath) {
  const pathname = urlOrPath.startsWith('http') ? new URL(urlOrPath).pathname : urlOrPath;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function titleCase(pathname) {
  const acronyms = new Map([['seo', 'SEO'], ['ppc', 'PPC'], ['ai', 'AI'], ['saas', 'SaaS'], ['ugc', 'UGC'], ['cro', 'CRO'], ['ux', 'UX']]);
  return pathname.split('/').filter(Boolean).pop()?.split('-').filter((word) => word && word !== 'magneo').map((word) => acronyms.get(word) || word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Magneo';
}

function titleFor(pathname) {
  return titleOverrides[pathname] || `${titleCase(pathname)} | Magneo`;
}

function descriptionFor(pathname) {
  if (descriptions[pathname]) return descriptions[pathname];
  const label = titleCase(pathname);
  if (pathname.startsWith('/services/')) return `${label} from Magneo for regulated industries, built around authority, compliance-aware messaging, qualified demand, and measurable conversion.`;
  if (pathname.includes('law-firm-marketing')) return `${label} with Magneo: compliance-aware SEO, website, PPC, LinkedIn, AI automation, and authority systems for legal practices.`;
  if (pathname.includes('financial-firm-marketing')) return `${label} with Magneo: trust-led marketing systems for financial professionals and regulated advisory businesses.`;
  if (pathname.includes('healthcare-marketing')) return `${label} with Magneo: privacy-aware marketing systems for healthcare clinics, providers, and patient-facing practices.`;
  if (pathname.includes('tech-company-marketing')) return `${label} with Magneo: authority, content, website, and demand systems for tech, SaaS, AI, FinTech, and LegalTech companies.`;
  return `${label} from Magneo, a digital marketing agency for regulated industries in Canada and the USA.`;
}

function injectSeo(html, { title, description, canonical, image }) {
  const clean = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/i, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/i, '')
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '');
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    ...(image ? [`<meta property="og:image" content="${escapeHtml(image)}" />`, `<meta name="twitter:image" content="${escapeHtml(image)}" />`] : [])
  ].map((tag) => `    ${tag}`).join('\n');
  return clean.replace(/(\s*<meta\s+name=["']viewport["'][^>]*>)/i, `$1\n${tags}`);
}

const indexHtml = await readFile(INDEX_PATH, 'utf8');
const sitemapXml = await readFile(SITEMAP_PATH, 'utf8');
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim()).filter((url) => url.startsWith(BASE_URL)).map(normalizePath);
const paths = [...new Set([...sitemapPaths, ...EXTRA_PATHS.map(normalizePath)])];

for (const pathname of paths) {
  const canonical = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
  const image = imageOverrides[pathname] ? `${BASE_URL}${imageOverrides[pathname]}` : undefined;
  const html = injectSeo(indexHtml, { title: titleFor(pathname), description: descriptionFor(pathname), canonical, image });
  const outputPath = pathname === '/' ? INDEX_PATH : join(DIST_DIR, pathname.replace(/^\//, ''), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

console.log(`Generated static SEO HTML for ${paths.length} routes.`);
