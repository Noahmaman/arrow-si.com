export interface Term { term: string; slug: string; def: string; link?: string }

const t = (term: string, def: string, link?: string): Term => ({
  term,
  def,
  link,
  slug: term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
});

export const glossary: Term[] = [
  t('AI visibility', 'How often and how accurately a brand appears inside AI-generated answers — mentioned, cited as a source, recommended and described correctly — across engines such as ChatGPT, Gemini, Perplexity, Claude, Copilot and Google AI Overviews.', '/blog/what-is-ai-visibility/'),
  t('Generative Engine Optimization (GEO)', 'The practice of making a brand’s public information clear, accessible and well-sourced so generative AI engines can find, understand and recommend it, then measuring how the brand appears in their answers.', '/blog/geo-vs-seo/'),
  t('Answer Engine Optimization (AEO)', 'Optimising content to be used as a direct answer — in featured snippets, voice assistants and AI answers. Often used interchangeably with GEO.', '/blog/geo-vs-seo/'),
  t('AI mention', 'An AI answer names the brand in its text, whether or not it links to a source.', '/blog/mentions-citations-recommendations/'),
  t('AI citation', 'An AI answer links to a source to support what it says. A citation of your own URL shows your page is being used as evidence.', '/blog/mentions-citations-recommendations/'),
  t('AI recommendation', 'An AI answer suggests a brand as a top choice for the buyer’s stated need — the AI visibility signal closest to revenue.', '/blog/mentions-citations-recommendations/'),
  t('Answer accuracy', 'Whether everything an AI answer says about a brand — offer, pricing, locations, audience — is correct and current.', '/blog/entity-clarity-ai-search/'),
  t('AI share of voice', 'A brand’s share of mentions, recommendations or citations across a fixed panel of AI answers, compared with a defined competitor set.', '/blog/ai-share-of-voice/'),
  t('Buyer-question panel', 'A frozen set of 20–50 real buyer questions, grouped by intent, run on a fixed schedule across chosen AI engines to measure AI visibility.', '/blog/how-to-measure-ai-visibility/'),
  t('Signal score', 'An Arrow Signal term for a weighted composite of mention, citation, recommendation and accuracy rates. Useful for reporting, as long as the underlying rates stay visible.', '/blog/how-to-measure-ai-visibility/'),
  t('Entity', 'A distinct, identifiable thing — a company, person, product or place — with attributes and relationships that search engines and AI systems use to organise knowledge.', '/blog/entity-clarity-ai-search/'),
  t('Entity clarity', 'The degree to which AI systems can identify a brand without ambiguity and know its core facts: what it does, for whom, where, at what price and with what proof.', '/blog/entity-clarity-ai-search/'),
  t('sameAs', 'A schema.org property that links an entity to its official profiles elsewhere (LinkedIn, YouTube, Wikidata…), telling systems they all describe the same thing.', '/blog/schema-markup-ai-visibility/'),
  t('Structured data', 'Machine-readable markup, usually JSON-LD using the schema.org vocabulary, that labels facts on a page. It helps interpretation; it does not guarantee inclusion in answers.', '/blog/schema-markup-ai-visibility/'),
  t('Google AI Overviews', 'AI-generated summaries shown at the top of some Google Search results, with links to sources. They draw on Google’s index; pages must be indexed and snippet-eligible.', '/blog/google-ai-overviews-visibility/'),
  t('Google AI Mode', 'A conversational search experience in Google Search that answers complex questions with AI and cites web sources, using a query fan-out approach.', '/blog/google-ai-overviews-visibility/'),
  t('Query fan-out', 'A technique where an AI search feature issues several related sub-queries to build a fuller answer — so a page can be cited for a sub-question it answers well.', '/blog/google-ai-overviews-visibility/'),
  t('Grounding', 'Basing a generated answer on retrieved sources, such as web pages fetched at question time, rather than only on what the model learned in training.', '/blog/what-is-ai-visibility/'),
  t('Retrieval-augmented generation (RAG)', 'An architecture where a system retrieves relevant documents and passes them to a language model to generate an answer. Most AI search products work this way.', '/blog/what-is-ai-visibility/'),
  t('Search crawler (AI)', 'A crawler that fetches pages so an AI product can answer and cite them, such as OAI-SearchBot for ChatGPT search or PerplexityBot. Blocking it prevents citations.', '/blog/technical-ai-visibility-checklist/'),
  t('Training crawler', 'A crawler or control token governing use of content for model training, such as GPTBot, ClaudeBot or Google-Extended. Allowing or blocking it is a policy choice.', '/blog/technical-ai-visibility-checklist/'),
  t('llms.txt', 'A community proposal for a Markdown file at a site’s root that gives language-model tools a concise map of the site’s most useful content. Optional; not a confirmed ranking signal.', '/blog/technical-ai-visibility-checklist/'),
  t('AI referral traffic', 'Website visits that arrive from AI products such as ChatGPT, Perplexity, Gemini, Copilot or Claude, trackable in analytics with a custom channel.', '/blog/track-ai-referral-traffic-ga4/'),
  t('Zero-click answer', 'An answer that satisfies the user without a visit to any website. AI answers are often zero-click, which is why visibility must be measured in the answer itself.', '/blog/track-ai-referral-traffic-ga4/'),
  t('Synthetic authority', 'Arrow’s term for authority that AI engines synthesize from many sources — reviews, publications, comparisons, communities — rather than from a brand’s own claims.', '/blog/third-party-sources-ai-trust/'),
  t('Hallucination', 'When an AI system states something false with confidence. For brands, it often traces back to outdated or inconsistent sources that can be corrected.', '/blog/why-chatgpt-doesnt-mention-your-brand/'),
];
