import { readFile } from 'node:fs/promises';

const GUIDE_PATH = new URL('./_private/magneo-personal-branding-guide-legal-professionals.pdf', import.meta.url);

export default async function handler(request, response) {
  response.setHeader('X-Robots-Tag', 'noindex, noarchive');
  response.setHeader('Cache-Control', 'public, max-age=300');

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    return response.status(405).end();
  }

  try {
    const pdf = await readFile(GUIDE_PATH);
    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Disposition', 'attachment; filename="magneo-personal-branding-guide-legal-professionals.pdf"');
    response.setHeader('Content-Length', String(pdf.length));
    if (request.method === 'HEAD') return response.status(200).end();
    return response.status(200).send(pdf);
  } catch {
    return response.status(500).end('The guide is temporarily unavailable.');
  }
}
