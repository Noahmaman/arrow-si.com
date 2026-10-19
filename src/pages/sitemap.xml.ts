import type { APIRoute } from 'astro';
import { articles } from '../lib/articles';
import { SITE } from '../lib/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
  const pages = [
    { loc: '/', lastmod: SITE.published, priority: '1.0', image: { loc: '/og/home.jpg', title: 'Arrow Signal: get your brand into AI answers' } },
    { loc: '/blog/', lastmod: SITE.published, priority: '0.9', image: { loc: '/og/blog.jpg', title: 'Arrow Signal: 15 AI visibility guides' } },
    ...articles.map((a) => ({ loc: a.url, lastmod: a.updated, priority: '0.8', image: { loc: `/og/${a.slug}.jpg`, title: a.title } })),
    { loc: '/glossary/', lastmod: SITE.published, priority: '0.7', image: { loc: '/og/glossary.jpg', title: 'AI visibility glossary' } },
    { loc: '/about/', lastmod: SITE.published, priority: '0.5' },
    { loc: '/privacy/', lastmod: SITE.published, priority: '0.2' },
  ];
  const urls = pages
    .map((p) => {
      const img = 'image' in p && p.image ? `\n    <image:image><image:loc>${SITE.url}${p.image.loc}</image:loc><image:title>${esc(p.image.title)}</image:title></image:image>` : '';
      return `  <url>\n    <loc>${SITE.url}${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <priority>${p.priority}</priority>${img}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
