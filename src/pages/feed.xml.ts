import type { APIRoute } from 'astro';
import { articles } from '../lib/articles';
import { SITE } from '../lib/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = () => {
  const items = articles
    .map(
      (a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>${SITE.url}${a.url}</link>
      <guid isPermaLink="true">${SITE.url}${a.url}</guid>
      <pubDate>${new Date(`${a.published}T09:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(a.category)}</category>
      <description>${esc(a.summary)}</description>
    </item>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Signal Journal — Arrow Signal</title>
    <link>${SITE.url}/blog/</link>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>AI visibility and GEO guides from Arrow Signal, the AI visibility hub of Arrow AI.</description>
    <language>en</language>
    <lastBuildDate>${new Date(`${SITE.published}T09:00:00Z`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
