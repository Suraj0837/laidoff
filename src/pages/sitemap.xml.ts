import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

export const GET: APIRoute = () => {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const lastMod = new Date().toISOString().split('T')[0];

  const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/privacy', priority: '0.4', changefreq: 'monthly' },
  ];

  const urlsXml = pages
    .map(
      (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
