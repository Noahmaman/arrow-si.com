import type { APIRoute } from 'astro';
import { articles } from '../lib/articles';
import { SITE } from '../lib/site';

export const GET: APIRoute = () => {
  const parts = articles.map((a) => {
    const faq = a.faq.map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
    const sources = a.sources.map((s) => `- ${s.title}: ${s.url}`).join('\n');
    return `# ${a.title}\n\nURL: ${SITE.url}${a.url}\nCategory: ${a.category}\nPublished: ${a.published} · Updated: ${a.updated}\nPublisher: Arrow AI (https://arrow-ai.us/)\n\n## Short answer\n\n${a.summary}\n\n## Key takeaways\n\n${a.takeaways.map((t) => `- ${t}`).join('\n')}\n\n${a.body.trim()}\n\n## FAQ\n\n${faq}\n\n## Sources\n\n${sources}\n`;
  });
  const body = `# Arrow Signal: full text\n\n> All guides published at ${SITE.url}, published by Arrow AI (https://arrow-ai.us/). Free AI visibility audit: https://arrow-ai.us/free-audit/\n\n---\n\n${parts.join('\n---\n\n')}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
