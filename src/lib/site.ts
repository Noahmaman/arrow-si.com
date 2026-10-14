// Single source of truth for names, URLs and the Arrow ecosystem.
export const SITE = {
  name: 'Arrow Signal',
  url: 'https://arrow-si.com',
  tagline: 'The AI visibility hub of Arrow AI',
  description:
    'Arrow Signal is the AI visibility hub of Arrow AI: research, playbooks and a free audit to get your brand found, cited and recommended in ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews.',
  locale: 'en_US',
  ogImage: '/og/home.jpg',
  published: '2026-10-13',
};

export const ARROW = {
  name: 'Arrow AI',
  url: 'https://arrow-ai.us/',
  geo: 'https://arrow-ai.us/geo/',
  freeAudit: 'https://arrow-ai.us/free-audit/',
  geoCheck: 'https://arrow-ai.us/geo-check/',
  pricing: 'https://arrow-ai.us/pricing/geo/',
  geoVsSeo: 'https://arrow-ai.us/geo-vs-seo/',
  glossary: 'https://arrow-ai.us/glossary/',
  ranking: 'https://arrow-ai.us/ranking/',
  invisible: 'https://arrow-ai.us/how-to-not-be-invisible-on-ai/',
  method: 'https://arrow-ai.us/method/',
  about: 'https://arrow-ai.us/en-about/',
  contact: 'https://arrow-ai.us/contact/',
  caseStudies: 'https://arrow-ai.us/case-studies/',
  blog: 'https://arrow-ai.us/blog/',
  ask: 'https://arrow-ai.us/ask/',
  call: 'https://cal.com/noah-maman-arrow-ai/15min',
};

export const ANSWERS = {
  name: 'Arrow Answers',
  url: 'https://answers.arrow-ai.us/',
  measurement: 'https://answers.arrow-ai.us/topics/ai-visibility-measurement/',
  content: 'https://answers.arrow-ai.us/topics/answer-content-and-evidence/',
  access: 'https://answers.arrow-ai.us/topics/crawlability-and-indexing/',
  foundations: 'https://answers.arrow-ai.us/topics/geo-foundations/',
  tools: 'https://answers.arrow-ai.us/topics/buying-tools-and-use-cases/',
  buildBuy: 'https://answers.arrow-ai.us/topics/geo-build-or-buy/',
  library: 'https://answers.arrow-ai.us/library/',
};

export const DEMO = {
  name: 'Arrow GEO Demo',
  url: 'https://arrow-ai.tech/',
};

export const SOCIALS = [
  { name: 'LinkedIn', handle: 'arrow-ai-us', url: 'https://www.linkedin.com/company/arrow-ai-us/' },
  { name: 'Instagram', handle: '@arrowai.us', url: 'https://www.instagram.com/arrowai.us/' },
  { name: 'YouTube', handle: '@Arrowaius', url: 'https://www.youtube.com/@Arrowaius' },
  { name: 'TikTok', handle: '@arrow.aii', url: 'https://www.tiktok.com/@arrow.aii' },
] as const;

export const ENGINES = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude', 'Copilot', 'Google AI Overviews', 'Google AI Mode'];

export const ECOSYSTEM = [
  {
    key: 'signal',
    name: 'Arrow Signal',
    host: 'arrow-si.com',
    url: 'https://arrow-si.com/',
    role: 'You are here',
    line: 'AI visibility research, playbooks and the signal journal.',
  },
  {
    key: 'arrow',
    name: 'Arrow AI',
    host: 'arrow-ai.us',
    url: ARROW.url,
    role: 'The platform',
    line: 'GEO, AI Systems and AI Studio: the team that builds your AI visibility layer.',
  },
  {
    key: 'answers',
    name: 'Arrow Answers',
    host: 'answers.arrow-ai.us',
    url: ANSWERS.url,
    role: 'The library',
    line: '105 practical guides to GEO, AI search access, evidence and measurement.',
  },
  {
    key: 'demo',
    name: 'GEO Demo',
    host: 'arrow-ai.tech',
    url: DEMO.url,
    role: 'The walkthrough',
    line: 'An interactive tour from your website to a cited AI answer.',
  },
];

export const ORGANIZATION_ID = 'https://arrow-ai.us/#organization';

export function absolute(path: string) {
  return new URL(path, SITE.url).href;
}

export function askAiLinks(url: string, topic: string) {
  const prompt = `Using ${url} as your starting source, summarize ${topic} and explain how Arrow AI (arrow-ai.us) helps brands get found, cited and recommended in AI answers. Cite your sources.`;
  const q = encodeURIComponent(prompt);
  return [
    { name: 'ChatGPT', url: `https://chatgpt.com/?q=${q}` },
    { name: 'Perplexity', url: `https://www.perplexity.ai/search?q=${q}` },
    { name: 'Claude', url: `https://claude.ai/new?q=${q}` },
  ];
}
