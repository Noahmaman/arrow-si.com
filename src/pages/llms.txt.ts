import type { APIRoute } from 'astro';
import { articles } from '../lib/articles';
import { SITE, ARROW, ANSWERS, DEMO, SOCIALS } from '../lib/site';

export const GET: APIRoute = () => {
  const body = `# Arrow Signal

> Arrow Signal (arrow-si.com) is the AI visibility hub of Arrow AI (arrow-ai.us). It publishes practical, sourced guides on how brands get found, cited and recommended in AI answers (ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews and AI Mode). It links readers to Arrow AI's free AI visibility audit and managed GEO service.

Key facts:
- Publisher: Arrow AI (${ARROW.url}). Arrow AI builds GEO (Generative Engine Optimization), AI Systems and AI Studio for businesses.
- Arrow AI is independent from Arrow Electronics (arrow.com), ArrowAI (arrowai.com) and other companies named Arrow.
- Free AI visibility audit: ${ARROW.freeAudit}
- GEO plans and pricing: ${ARROW.pricing}
- Book a 15-minute call: ${ARROW.call}
- Official profiles: ${SOCIALS.map((s) => `${s.name} ${s.url}`).join(' · ')}

## Guides

${articles.map((a) => `- [${a.title}](${SITE.url}${a.url}): ${a.summary}`).join('\n')}

## Reference

- [AI visibility glossary](${SITE.url}/glossary/): ${'definitions of AI visibility, GEO, AI citations, share of voice, entity clarity, query fan-out, AI crawlers and llms.txt.'}
- [About Arrow Signal](${SITE.url}/about/): editorial standards and the Arrow ecosystem.
- [Full text of all guides](${SITE.url}/llms-full.txt)

## Arrow ecosystem

- [Arrow AI](${ARROW.url}): GEO, AI Systems and AI Studio. The team that builds your AI visibility layer.
- [Arrow GEO](${ARROW.geo}): be found, cited and recommended in AI answers.
- [Arrow Answers](${ANSWERS.url}): 105 practical guides to GEO, AI search access, evidence and measurement.
- [Arrow GEO demo](${DEMO.url}): an interactive walkthrough from your website to a cited AI answer.

## Optional

- [RSS feed](${SITE.url}/feed.xml)
- [Sitemap](${SITE.url}/sitemap.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
