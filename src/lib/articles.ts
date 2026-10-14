// Loads the 15 journal articles from src/content/blog/*.md.
export interface Faq { q: string; a: string }
export interface LinkRef { title: string; url: string; note?: string }
export interface ArticleData {
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  order: number;
  published: string;
  updated: string;
  summary: string;
  takeaways: string[];
  faq: Faq[];
  sources: LinkRef[];
  ecosystem: LinkRef[];
  keywords: string[];
  motif: 'wave' | 'rings' | 'bars' | 'nodes' | 'scope' | 'grid';
  coverAlt: string;
}
export interface Article extends ArticleData {
  slug: string;
  url: string;
  words: number;
  minutes: number;
  body: string;
  headings: { depth: number; slug: string; text: string }[];
  Content: any;
}

type MdModule = {
  frontmatter: ArticleData;
  Content: any;
  rawContent: () => string;
  getHeadings: () => { depth: number; slug: string; text: string }[];
};

const modules = import.meta.glob<MdModule>('../content/blog/*.md', { eager: true });

export const articles: Article[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const body = mod.rawContent();
    const fm = mod.frontmatter;
    const extra = [fm.summary, ...fm.takeaways, ...fm.faq.flatMap((f) => [f.q, f.a])].join(' ');
    const words = `${body} ${extra}`.split(/\s+/).filter(Boolean).length;
    return {
      ...mod.frontmatter,
      slug,
      url: `/blog/${slug}/`,
      words,
      minutes: Math.max(4, Math.round(words / 200)),
      body,
      headings: mod.getHeadings(),
      Content: mod.Content,
    };
  })
  .sort((a, b) => a.order - b.order);

export const categories = [...new Set(articles.map((a) => a.category))];

export function related(article: Article, count = 3) {
  const same = articles.filter((a) => a.slug !== article.slug && a.category === article.category);
  const rest = articles.filter((a) => a.slug !== article.slug && a.category !== article.category);
  const start = articles.findIndex((a) => a.slug === article.slug);
  const rotated = [...rest.slice(start % Math.max(1, rest.length)), ...rest.slice(0, start % Math.max(1, rest.length))];
  return [...same, ...rotated].slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
