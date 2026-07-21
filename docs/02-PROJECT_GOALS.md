# Project Goals

## Primary Goals

### 1. Establish Professional Credibility
The site must function as a high-quality proof of work. A visitor who has never met Gustavo should leave with a clear, accurate impression of his skill level. This is measured by whether clients who find the site feel confident enough to reach out without asking for additional credentials first.

### 2. Generate Freelance Leads
Every page should make it easy to contact Gustavo. The WhatsApp CTA exists for a reason: the target audience in Brazil uses WhatsApp, not email, as the primary communication channel for business inquiries. This should never be removed, de-emphasised, or buried.

### 3. Document the Work
Client websites built by Gustavo should be visible and linkable. The Work section exists to make this easy. When a client wants to know "what else have you built?", the answer is one URL away.

### 4. Serve the Creator Identity
Gustavo is not just a developer. He creates content, runs a Discord community, and has a YouTube channel. The site must present this dual identity without making either feel secondary.

---

## Secondary Goals

### 5. Demonstrate Technical Taste
The site is itself a portfolio piece. Developers and technical clients evaluate the quality of the product. Technical choices — Next.js App Router, TailwindCSS v4, Framer Motion, TypeScript strict mode, view transitions — are deliberate signals.

### 6. Reach International Clients
The i18n system (EN/PT/ES) exists to serve Portuguese speakers in Brazil and the diaspora, and Spanish speakers in Latin America. The default language is English for SEO and international reach.

### 7. Support Community Growth
The Discord section promotes Trophi, Gustavo's community. It is a first-class section of the home page, not an afterthought.

---

## Non-Goals

These are explicit decisions about what this site does not try to do:

- **Not a blog (yet).** Blog infrastructure exists in `src/data/articles.ts`, but the blog is not live. Do not surface placeholder blog content.
- **Not a resume.** The site does not replicate every line of a CV. The `/now` page serves the "what are you doing right now" use case.
- **Not a social media aggregator.** The site links to social platforms but does not embed feeds or live follower counts.
- **Not a job board.** The site signals availability for freelance work, not salaried employment.

---

## Success Metrics

| Metric | Definition | Target |
|--------|-----------|--------|
| Time to first impression | Seconds until a visitor understands Gustavo is a developer | ≤ 3s |
| Contact rate | Percentage of visitors who click WhatsApp or another contact link | > 2% |
| Bounce rate on mobile | Visitors who leave immediately on mobile | < 60% |
| Core Web Vitals | LCP / CLS / INP scores | All green in PageSpeed |
| Build time | Vercel production build | < 60s |
| Lighthouse score | Overall on desktop | ≥ 90 all categories |

---

## Constraints

| Constraint | Reason |
|-----------|--------|
| No database | Portfolio data is static; a CMS would add cost and complexity with no benefit |
| No analytics beyond Vercel | Privacy-first; no third-party tracking scripts |
| Deploy to Vercel only | The project is linked to the Vercel "blog" project; do not introduce a second deployment target |
| No TypeScript `any` | Strict mode is on; type everything correctly |
| No inline media queries | Use Tailwind responsive prefixes (`md:`, `lg:`) or CSS custom properties |

---

## Decisions Already Made

These decisions are settled. Do not revisit them without a strong, documented reason:

- **Framework: Next.js App Router.** Not Astro, not Remix, not Vite.
- **Styling: TailwindCSS v4.** No `tailwind.config.ts`. Tokens in `@theme {}` blocks in `globals.css`.
- **Animation: Framer Motion.** Not GSAP, not CSS keyframes (except for the CSS animations in `globals.css` that don't need JS).
- **Deployment: Vercel.** Production URL is `gustavogomes.vercel.app`.
- **Design language: Editorial / Swiss.** Copper amber accent, near-black background, Inter + JetBrains Mono.
