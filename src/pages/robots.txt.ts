import type { APIRoute } from 'astro';

// Visibility-first policy: search, retrieval and training crawlers are all welcome.
const agents = [
  'Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot',
  'OAI-SearchBot', 'ChatGPT-User', 'GPTBot',
  'PerplexityBot', 'Perplexity-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'Google-Extended', 'Applebot-Extended', 'CCBot', 'Meta-ExternalAgent', 'MistralAI-User', 'cohere-ai',
];

export const GET: APIRoute = () => {
  const body = [
    '# Arrow Signal (arrow-si.com)',
    '# The AI visibility hub of Arrow AI (arrow-ai.us). AI and search crawlers are welcome.',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    ...agents.flatMap((a) => [`User-agent: ${a}`, 'Allow: /', '']),
    'Sitemap: https://arrow-si.com/sitemap.xml',
    '',
    '# LLM-readable summary: https://arrow-si.com/llms.txt',
    '# Full text for LLMs: https://arrow-si.com/llms-full.txt',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
