import type { APIRoute } from 'astro';
import { articles } from '../data/articles';
export const GET: APIRoute = () => {
  const paths = ['/', '/blog/', '/privacy/', ...articles.map(article => `/blog/${article.slug}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>https://arrow-si.com${path}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
