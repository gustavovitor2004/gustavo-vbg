# SEO

## Overview

SEO for this site is handled at two levels: site-wide metadata in `src/app/layout.tsx`, and page-specific metadata in each `page.tsx` file that supports it.

---

## Site-Wide Metadata

Defined in `src/app/layout.tsx` using Next.js `Metadata` type:

```ts
export const metadata: Metadata = {
  title: "Gustavo VBG — Developer & Content Creator",
  description: "Personal portfolio and creator hub of Gustavo Gomes — developer, content creator, and community builder.",
  keywords: ["portfolio", "developer", "full-stack", "freelance", "Next.js", "TypeScript", "Bahia", "Brazil"],
  metadataBase: new URL("https://gustavogomes.vercel.app"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gustavo VBG — Developer & Content Creator",
    description: "Personal portfolio and creator hub of Gustavo Gomes...",
    type: "website",
    url: "https://gustavogomes.vercel.app",
    siteName: "Gustavo Gomes",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo VBG — Developer & Content Creator",
    description: "Personal portfolio and creator hub of Gustavo Gomes...",
    creator: "@gustavo_vbg",
  },
};
```

---

## Title Format

| Page | Title format |
|------|-------------|
| Home | `Gustavo VBG — Developer & Content Creator` |
| /now | `Now — Gustavo Gomes` |
| /uses | `Uses — Gustavo Gomes` |
| /links | `Links — Gustavo Gomes` |
| /blog/[slug] | `{Article Title} — Gustavo Gomes` |
| /work/[slug] | `{Project Name} — Gustavo Gomes` |

The separator is ` — ` (em dash with spaces), matching the brand typography's preference for precision.

The home page title leads with the brand name and role. All other pages lead with the content title and trail with the site name.

---

## Meta Description

| Page | Description |
|------|-------------|
| Home | "Personal portfolio and creator hub of Gustavo Gomes — developer, content creator, and community builder." |
| /now | "What Gustavo Gomes is doing right now — current projects, focus, and location." |
| /uses | "Tools, languages, and apps Gustavo Gomes uses daily for development and content creation." |
| /links | "All important links from Gustavo Gomes — social media, projects, communities, and resources." |

Descriptions should be 150–160 characters. They are not used for ranking but are critical for click-through rate.

---

## OpenGraph

### Home page
```ts
openGraph: {
  title: "Gustavo VBG — Developer & Content Creator",
  description: "Personal portfolio...",
  type: "website",
  url: "https://gustavogomes.vercel.app",
  siteName: "Gustavo Gomes",
  locale: "pt_BR",
  images: [{
    url: "https://gustavogomes.vercel.app/og-image.png",
    width: 1200,
    height: 630,
    alt: "Gustavo Gomes — Developer & Content Creator",
  }],
}
```

### Blog articles
```ts
openGraph: {
  type: "article",
  title: article.title,
  description: article.excerpt,
  publishedTime: article.date,
  authors: ["Gustavo Gomes"],
  images: [{ url: article.ogImage || "/og-image.png" }],
}
```

---

## OpenGraph Image

**Status:** Not yet created. Needs a static `/public/og-image.png` file.

**Specification:**
- Dimensions: 1200 × 630px
- Design: Dark background (`#090909`), "GG" monogram top-left, "GUSTAVO GOMES" in the editorial hero style (without the extreme size — about 80px), tagline below, URL bottom-right.
- Format: PNG (not JPEG — avoid compression artefacts on text).
- File location: `/public/og-image.png`

---

## Twitter Cards

```ts
twitter: {
  card: "summary_large_image",
  title: "...",
  description: "...",
  creator: "@gustavo_vbg",
}
```

`summary_large_image` renders a large image preview card on Twitter/X. The same OG image at 1200×630 is used.

---

## Canonical URLs

Every page should specify its canonical URL to prevent duplicate content issues:

```ts
alternates: { canonical: "/blog/article-slug" }
```

The `metadataBase` in the root layout is `https://gustavogomes.vercel.app`. All relative canonical URLs resolve against this base.

---

## Robots

The root layout sets:
```ts
robots: { index: true, follow: true }
```

No pages should be `noindex` in the current site. If a page is in development and must be deployed but not indexed, add:
```ts
robots: { index: false, follow: false }
```

There is no `robots.txt` file explicitly. Next.js generates one from the `robots` metadata configuration.

---

## Sitemap

No sitemap is currently configured. Add one when the site has more than five routes or when blog content is added.

Using Next.js App Router, add `src/app/sitemap.ts`:

```ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://gustavogomes.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://gustavogomes.vercel.app/now", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://gustavogomes.vercel.app/uses", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://gustavogomes.vercel.app/links", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];
}
```

---

## Structured Data (Schema.org)

**Status:** Not yet implemented. Add when implementing blog or case study pages.

### Person schema (home page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gustavo Gomes",
  "alternateName": "Gustavo VBG",
  "url": "https://gustavogomes.vercel.app",
  "jobTitle": "Full-Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "sameAs": [
    "https://github.com/gustavovitor2004",
    "https://www.instagram.com/gustavo_vbg/",
    "https://www.youtube.com/@nnijup"
  ]
}
```

Add this as a `<script type="application/ld+json">` tag in `layout.tsx`.

### Article schema (blog posts)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "datePublished": "2025-01-15",
  "author": {
    "@type": "Person",
    "name": "Gustavo Gomes"
  }
}
```

---

## Performance Impact on SEO

Core Web Vitals are a Google ranking factor. See `22-PERFORMANCE.md` for full targets, but the SEO-relevant ones are:

| Metric | Target | Impact |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | High |
| CLS (Cumulative Layout Shift) | < 0.1 | High |
| INP (Interaction to Next Paint) | < 200ms | Medium |

---

## SEO Anti-Patterns to Avoid

| Anti-pattern | Problem |
|-------------|---------|
| Missing `alt` on images | Reduces image search indexing and accessibility |
| Multiple `<h1>` on one page | Confuses crawlers about page topic |
| Generic title tags (`"Portfolio"`) | Zero differentiation in search results |
| Duplicate descriptions across pages | Dilutes relevance signals |
| Dynamic routes without `generateMetadata` | Pages use root metadata; no page-specific titles |
