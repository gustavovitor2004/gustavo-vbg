# Blog

**Route:** `/blog`
**Status:** Planned — infrastructure exists, no published posts
**Data source:** `src/data/articles.ts`

---

## Purpose

The blog will serve as the long-form writing channel for Gustavo's ideas, lessons, and opinions on:
- Building products as a solo developer
- Freelancing for small businesses in Brazil
- Frontend craft (specific techniques, tools, decisions)
- Community building

The blog is not a tutorial site. It is not a news aggregator. It is a personal voice with a professional audience.

---

## Content Strategy

### Voice
First-person, direct, opinionated. Same as the brand voice defined in `04-VISUAL_IDENTITY.md`. Articles should read like the best conversations at a developer meetup — knowledgeable, clear, no fluff.

### Article types

| Type | Description | Target length |
|------|-------------|--------------|
| Process | How I built X | 800–1500 words |
| Opinion | Why I prefer X over Y | 500–1000 words |
| Lesson | What I learned from X | 600–1200 words |
| Resource | The tools I use for X | 400–800 words |

### Frequency
No publishing schedule is required. Publish when you have something worth saying. Quality over cadence.

---

## Blog Index Page (`/blog`)

### Layout

```
[Section header: "Writing" label + "Articles" h2]

[Article list — full width]
  Each article:
    [Year · Category]   [Title]        [Date]
    [Reading time]      [Excerpt]      [→ Read]
```

The article list uses the same table-row visual language as the Work section — editorial, scannable, no cards.

### Article row specification

```
columns: auto | 1fr | auto
padding: 28px 0
border-bottom: 1px solid var(--card-border)
```

On hover:
- Background: subtle tint (same as WorkRow hover)
- Title: weight bumps from 400 to 500
- Arrow: shifts right

### Filtering

Initially: no category filter. If more than 15 articles are published, add a filter by topic using the same button pill pattern as the existing category filters.

---

## Article Page (`/blog/[slug]`)

### URL structure

```
/blog/how-i-built-gridhunter
/blog/why-i-chose-nextjs-for-freelance
```

Slug is the kebab-case article title.

### Layout

```
[Breadcrumb: ← Writing]

[Article header]
  Category label (copper accent)
  Article title (display scale, weight 800)
  Date · Reading time (mono metadata)

[Reading progress bar]  ← same component as ScrollProgress, scoped to article

[Article body]
  max-width: 680px
  centered in container

[End of article]
  Author card: GG monogram + "Written by Gustavo Gomes" + date
  ← Previous article  |  Next article →
```

### Typography — Article Body

Body text in blog articles uses a slightly more generous type treatment than the portfolio sections:

| Role | Font | Size | Weight | Line height |
|------|------|------|--------|-------------|
| Title | Inter | `clamp(2rem, 5vw, 3.5rem)` | 800 | 1.05 |
| Lead paragraph | Inter | 18px | 300 | 1.8 |
| Body | Inter | 16px | 400 | 1.85 |
| Code inline | JetBrains Mono | 14px | 500 | — |
| Code block | JetBrains Mono | 13px | 400 | 1.6 |
| Heading 2 | Inter | 24px | 700 | 1.2 |
| Heading 3 | Inter | 19px | 600 | 1.3 |
| Caption | Inter | 13px | 400 | 1.6 |

### Code Blocks

Code blocks use the same background as `--bg-1` with a left border in the accent color:

```css
background: var(--bg-1)
border-left: 2px solid var(--accent)
padding: 20px 24px
font-family: var(--font-mono)
font-size: 13px
overflow-x: auto
```

No syntax highlighting library is required initially. If added, use a theme that respects the site's color palette — specifically one using warm neutrals, not the purple-heavy themes common in developer blogs.

---

## Data Model

```ts
// src/data/articles.ts
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;  // MDX or markdown string
  date: string;     // ISO 8601: "2025-01-15"
  readingTime: number; // minutes
  category: "process" | "opinion" | "lesson" | "resource";
  published: boolean;
}
```

---

## SEO for Blog

```tsx
export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  return {
    title: `${article.title} — Gustavo Gomes`,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: ["Gustavo Gomes"],
    }
  };
}
```

---

## Launch Criteria

Do not launch the blog route until:
1. At least three articles are fully written and proofread.
2. The article page renders correctly on mobile at 320px width.
3. The reading progress bar works at all scroll speeds.
4. All code blocks are readable in both light and dark mode.
5. The `/blog` index page is linked from the Navbar (under "Writing") and Footer.
