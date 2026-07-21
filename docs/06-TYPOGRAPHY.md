# Typography

## Typefaces

### Inter — Primary Typeface

Inter is the body and display typeface. It is loaded from Google Fonts with the full optical size axis and weight range (100–900), which enables the extreme weight contrasts used in the hero and section headings.

**Loading URL:**
```html
https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100;0,14..32,200;0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,300;1,14..32,400&display=swap
```

**CSS token:** `--font-sans`

**Character:** Variable-weight geometric sans-serif. At weight 100 it is airy and editorial. At weight 900 it is dense and impactful. This range is used intentionally to create contrast between elements on the same page.

### JetBrains Mono — Monospace Typeface

JetBrains Mono is used for all labels, metadata, navigation links, badges, and code-related content. It communicates precision and technical credibility.

**Loading URL:**
```html
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap
```

**CSS token:** `--font-mono`

**Character:** Engineering monospace. Wide letterforms with a clear technical identity. Never used for large body text.

---

## Type Scale

The following sizes define the typographic scale. Every text element in the site falls into one of these roles.

### Display — Hero Name

| Property | Value |
|----------|-------|
| Font family | Inter |
| Font size | `clamp(64px, 14.5vw, 200px)` |
| Font weight | 100 (first line) / 900 (second line) |
| Letter spacing | -0.03em / -0.04em |
| Line height | 0.9 / 0.88 |
| Color | `--text-primary` / `--accent` |
| Use | Hero section name only |

This is the largest text on the site. It should appear on exactly one page: the home page hero.

### Display-2 — Section Headings

| Property | Value |
|----------|-------|
| Font family | Inter |
| Font size | `clamp(2rem, 4vw, 3rem)` to `clamp(2.4rem, 5vw, 4rem)` |
| Font weight | 800 |
| Letter spacing | -0.03em to -0.035em |
| Line height | 1.0 to 1.1 |
| Color | `--text-primary` |
| Use | `h2` elements inside sections: "Projects", "Let's build something together." |

### Heading-3 — Sub-headings and Card Titles

| Property | Value |
|----------|-------|
| Font family | Inter |
| Font size | 15px to 18px |
| Font weight | 600 to 700 |
| Letter spacing | -0.01em |
| Color | `--text-primary` |
| Use | Card titles, server name, link labels |

### Body — Section Body Copy

| Property | Value |
|----------|-------|
| Font family | Inter |
| Font size | 14px to 15px |
| Font weight | 400 |
| Line height | 1.7 to 1.8 |
| Color | `--text-muted` |
| Use | Paragraph text in ManifestoSection, DiscordServers, ConnectSection |

### Body-Light — Hero Tagline

| Property | Value |
|----------|-------|
| Font family | Inter |
| Font size | `clamp(14px, 1.6vw, 20px)` |
| Font weight | 300 |
| Letter spacing | -0.01em |
| Line height | 1.5 |
| Color | `--text-muted` |
| Use | Hero tagline text |

### Label — Section Identifiers

| Property | Value |
|----------|-------|
| Font family | JetBrains Mono |
| Font size | 10px |
| Font weight | 600 |
| Letter spacing | 0.14em |
| Text transform | uppercase |
| Color | `--accent` (for section labels) / `--text-muted` or `--text-faint` (for metadata) |
| Use | "Selected Work", "About", "Community", "Get in touch", table column headers |

This is the `.label` utility class.

### Metadata — Secondary Information

| Property | Value |
|----------|-------|
| Font family | JetBrains Mono |
| Font size | 10px to 11px |
| Font weight | 500 to 600 |
| Letter spacing | 0.06em to 0.12em |
| Color | `--text-muted` or `--text-faint` |
| Use | Year values, location text, member counts, handle names |

### Navigation — Navbar Links

| Property | Value |
|----------|-------|
| Font family | JetBrains Mono |
| Font size | 10px |
| Font weight | 600 |
| Letter spacing | 0.14em |
| Text transform | uppercase |
| Color | `--text-muted` (rest) / `--text-primary` (hover) |
| Use | Navbar links, footer links |

### Table Index — Row Numbers

| Property | Value |
|----------|-------|
| Font family | JetBrains Mono |
| Font size | 11px |
| Font weight | 500 |
| Letter spacing | 0.06em |
| Color | `--text-faint` (rest) / `--accent` (hover) |
| Use | Index numbers in WorkSection rows (01, 02, ...) |

---

## Typography Rules

### Never use body text in JetBrains Mono
JetBrains Mono is narrow and technical. Reading a paragraph in it is tiring. It is for labels, metadata, code, and navigation only.

### Letter spacing direction
- Tight tracking (`-0.04em` to `-0.01em`) on large display type and headings
- Neutral tracking (`0`) on body text
- Wide tracking (`0.06em` to `0.15em`) on uppercase labels and mono metadata

### Line height discipline
- Display type (hero): `0.88` to `0.9` — tight stack for visual density
- Section headings: `1.0` to `1.1` — just enough for multi-line readability
- Body text: `1.7` to `1.8` — generous for paragraph readability

### Weight pairing
The design uses three weight tiers:
1. **Ultra-light tier:** 100, 200, 300 — for large display text and secondary body
2. **Regular tier:** 400, 500 — for body text and metadata
3. **Heavy tier:** 600, 700, 800, 900 — for headings, navigation, and emphasis

A page is visually interesting when all three tiers appear. Do not use only the middle tier — it produces a flat, undifferentiated visual hierarchy.

---

## Common Mistakes

### Using `font-weight: 400` for headings
Section headings should be `font-weight: 800`. Weight 400 headings look like body copy at a larger size.

### Using `font-size: 14px` for section labels
Labels are `10px`. This tiny size is intentional — it creates visual contrast with the larger elements around it. Increasing it to 14px destroys the hierarchy.

### Setting `line-height: 1` on body text
Paragraphs need `line-height: 1.7` or more. A line height of 1 makes multi-line text illegible.

### Adding `font-family: Inter` to a `.label` element
Labels use JetBrains Mono. If a label accidentally inherits Inter, it loses its technical character and blends into the surrounding copy.
