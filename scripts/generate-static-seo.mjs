import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE_URL = 'https://magneo.ca';
const DIST_DIR = 'dist';
const INDEX_PATH = join(DIST_DIR, 'index.html');
const SITEMAP_PATH = join(DIST_DIR, 'sitemap.xml');

const descriptions = {
  '/': 'Authority-first marketing systems for law firms, financial advisors, healthcare providers, and tech companies. Compliance-safe. Measurable. Built to last.',
  '/about/': 'Magneo is a Toronto-based digital marketing agency for regulated industries, serving law firms, financial advisors, healthcare providers, and tech companies.',
  '/services/': 'Explore Magneo services for regulated industries, including SEO, PPC, LinkedIn marketing, website design, AI automation, and personal branding.',
  '/industries/': 'Magneo builds marketing systems for law firms, financial advisors, healthcare clinics, and tech companies across Canada and the USA.',
  '/contact/': 'Contact Magneo to request a brand, SEO, website, PPC, LinkedIn, or AI automation audit for a regulated-industry business.',
  '/law-firm-marketing/': 'Magneo is a law firm marketing agency built for compliance-first growth, authority, rankings, and qualified consultation requests.',
  '/financial-firm-marketing/': 'Marketing systems for financial firms, advisors, portfolio managers, investment firms, insurance advisors, and tax professionals.',
  '/healthcare-marketing/': 'Healthcare marketing systems for clinics and providers that improve visibility, simplify patient decisions, and respect privacy expectations.',
  '/tech-company-marketing/': 'Growth systems for FinTech, LegalTech, Crypto, AI, and SaaS companies that need authority, clarity, and demand without hype.'
};

const titleOverrides = {
  '/': 'Magneo | Digital Marketing for Regulated Industries',
  '/about/': 'About Magneo | Marketing for Regulated Industries',
  '/services/': 'Services | Magneo',
  '/industries/': 'Industries We Serve | Magneo',
  '/contact/': 'Contact Magneo | Request a Free Audit',
  '/law-firm-marketing/': 'Law Firm Marketing Agency | Magneo',
  '/financial-firm-marketing/': 'Financial Firm Marketing Agency | Magneo',
  '/healthcare-marketing/': 'Healthcare Marketing Agency | Magneo',
  '/tech-company-marketing/': 'Tech Company Marketing Agency | Magneo'
};

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function normalizePath(url) {
  const pathname = new URL(url).pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function titleCase(slug) {
  const acronyms = new Map([
    ['seo', 'SEO'],
    ['ppc', 'PPC'],
    ['ai', 'AI'],
    ['saas', 'SaaS'],
    ['crm', 'CRM'],
    ['ux', 'UX']
  ]);

  return slug
    .split('/')
    .filter(Boolean)
    .pop()
    ?.split('-')
    .filter((word) => word && word !== 'magneo')
    .map((word) => acronyms.get(word) || word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Magneo';
}

function titleFor(pathname) {
  return titleOverrides[pathname] || `${titleCase(pathname)} | Magneo`;
}

function descriptionFor(pathname) {
  if (descriptions[pathname]) return descriptions[pathname];

  const label = titleCase(pathname);
  if (pathname.startsWith('/services/')) {
    return `${label} from Magneo for regulated industries, built around authority, compliance-aware messaging, qualified demand, and measurable conversion.`;
  }
  if (pathname.includes('law-firm-marketing')) {
    return `${label} with Magneo: compliance-aware SEO, website, PPC, LinkedIn, AI automation, and authority systems for legal practices.`;
  }
  if (pathname.includes('financial-firm-marketing')) {
    return `${label} with Magneo: trust-led marketing systems for financial professionals and regulated advisory businesses.`;
  }
  if (pathname.includes('healthcare-marketing')) {
    return `${label} with Magneo: privacy-aware marketing systems for healthcare clinics, providers, and patient-facing practices.`;
  }
  if (pathname.includes('tech-company-marketing')) {
    return `${label} with Magneo: authority, content, website, and demand systems for tech, SaaS, AI, FinTech, and LegalTech companies.`;
  }
  return `${label} from Magneo, a digital marketing agency for regulated industries in Canada and the USA.`;
}

function injectSeo(html, { title, description, canonical }) {
  let next = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/i, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/i, '')
    .replace(/\s*<meta\s+property=["']og:title["'][^>]*>/i, '')
    .replace(/\s*<meta\s+property=["']og:description["'][^>]*>/i, '')
    .replace(/\s*<meta\s+property=["']og:url["'][^>]*>/i, '')
    .replace(/\s*<meta\s+name=["']twitter:title["'][^>]*>/i, '')
    .replace(/\s*<meta\s+name=["']twitter:description["'][^>]*>/i, '');

  const tags = [
    `    <title>${escapeHtml(title)}</title>`,
    `    <meta name="description" content="${escapeHtml(description)}" />`,
    `    <link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `    <meta property="og:title" content="${escapeHtml(title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(canonical)}" />`,
    '    <meta property="og:type" content="website" />',
    `    <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(description)}" />`
  ].join('\n');

  return next.replace(/(\s*<meta\s+name=["']viewport["'][^>]*>)/i, `$1\n${tags}`);
}

const indexHtml = await readFile(INDEX_PATH, 'utf8');
const sitemapXml = await readFile(SITEMAP_PATH, 'utf8');
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1].trim())
  .filter((url) => url.startsWith(BASE_URL));

for (const url of urls) {
  const pathname = normalizePath(url);
  const canonical = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
  const html = injectSeo(indexHtml, {
    title: titleFor(pathname),
    description: descriptionFor(pathname),
    canonical
  });

  const outputPath = pathname === '/'
    ? INDEX_PATH
    : join(DIST_DIR, pathname.replace(/^\//, ''), 'index.html');

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

console.log(`Generated static SEO HTML for ${urls.length} routes.`);
