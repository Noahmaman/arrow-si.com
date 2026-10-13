# Arrow Signal

English editorial website for **arrow-si.com**, focused on AI visibility and generative engine optimization (GEO). Built with Astro, static HTML, locally hosted fonts and a small amount of progressive-enhancement JavaScript.

## Development

Use the existing checkout; cloud tasks are already isolated. No worktree is needed.

Requirements: Node.js 24 (see `.nvmrc`) and npm. No database or application secrets are required to build or run the site.

```sh
cd /workspace/arrow-si.com
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
ASTRO_TELEMETRY_DISABLED=1 npm run dev -- --port 4321
```

Production validation:

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm test
ASTRO_TELEMETRY_DISABLED=1 npm run preview -- --port 4322
```

`ASTRO_TELEMETRY_DISABLED=1` also avoids Astro writing telemetry configuration to a read-only home directory in cloud environments.

## Contents

- Animated signal homepage, responsive navigation and native FAQ disclosures.
- 15 substantive original English articles in `src/data/articles.ts`, each with a direct answer, four topic sections, action checklist and primary reference links.
- Searchable, filterable journal; related guides; article sharing and clipboard actions.
- Unique titles, descriptions and canonical URLs; Organization, Article and BreadcrumbList JSON-LD.
- Sitemap, RSS, robots.txt, social image and an experimental `llms.txt` reading index. No claim is made that `llms.txt` affects any engine's ranking or citation behavior.
- Transparent backlinks to Arrow AI, Arrow Answers and Arrow AI Tech. Share buttons work independently of official social-profile links.
- Reduced-motion support, semantic headings, keyboard navigation and no third-party tracking scripts.

## Brand sources

Verified against `https://arrow-ai.us/`: official app icon, GEO blue `#2563eb`, DM Sans, LinkedIn `arrow-ai-us`, Instagram `arrowai.us` and YouTube `@Arrowaius`. The 36-second GEO film and poster are retained locally from Arrow's public assets, as authorized in the brief. The visual-summary text and description track were added for the signal site.

The original site covers GEO, AI Systems and AI Studio; Arrow Signal intentionally focuses on AI visibility and directs visitors to Arrow's existing GEO check. The homepage reuses the current Arrow main-site stylesheet, retained as `public/brand/arrow-home.css`, with DM Sans and Geist Mono hosted locally. It follows the original neutral background, dotted grid, blue GEO emphasis, orange call to action, navigation and card styling. `arrow-base.css` supplies only integration rules for local content, access to the existing Arrow audit, and responsive navigation. No additional creative direction is applied to the homepage; future twists await user instructions. No supplied design attachments were visible in this session.

The official site identifies `https://answers.arrow-ai.us/` (with a dot) as the answers destination, correcting the brief's hyphenated spelling. `arrow-ai.tech` is the interactive GEO demo. Owned ecosystem links are transparent, rather than presented as independent endorsements.

## Vercel

`vercel.json` sets the Astro framework, build command, static output and basic security headers. Import `Noahmaman/arrow-si.com` into the authorized Vercel account, create the project with the name `arrow-si`, and attach `arrow-si.com` in its domain settings. Use Vercel's actual DNS instructions; do not assume the domain is already connected.

Programmatic deployment requires authorized Vercel access (a secure `VERCEL_TOKEN` binding or an authenticated integration), access to `api.vercel.com`, and the intended team scope if multiple teams are available. Never commit credentials or `.vercel` account metadata. Verify the deployed home, an article, sitemap and custom domain after deployment.

## Content maintenance

Keep article dates accurate when content changes. Do not refresh `dateModified` merely because the site builds. Add verified official social profiles to navigation and Organization `sameAs` only after confirming identity. Editorial claims should stay factual, sourced and free of guaranteed AI-placement promises.
