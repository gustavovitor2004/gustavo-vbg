# Work Section

**Component:** `src/components/sections/WorkSection.tsx`
**Section ID:** `work`
**Data source:** Hardcoded `WORK` array in component (see also `src/data/projects.ts` for extended project data)

---

## Purpose

The Work section communicates the breadth and volume of Gustavo's portfolio in the most efficient format possible: a table. Seven projects. Seven rows. One second to scan.

The table format references editorial design — specifically the way magazines and books list contents or filmographies. It is not a card grid. Cards invite comparison by visual similarity; a table invites scanning by metadata.

---

## Data Model

Each work entry:

```ts
interface WorkEntry {
  index: string;     // "01" through "07" — zero-padded
  title: string;     // Display name of the project
  type: string;      // Project category in prose (e.g. "SaaS Platform", "Landing Page")
  year: string;      // "2024"
  url?: string;      // External URL; if absent, row is not clickable
  featured?: boolean; // Shows copper "Featured" badge when true
}
```

---

## Current Work Entries

| Index | Title | Type | Year | Featured |
|-------|-------|------|------|----------|
| 01 | GridHunter | SaaS Platform | 2024 | ✓ |
| 02 | Espaço Prime | Landing Page | 2024 | |
| 03 | Costelão do Gaúcho | Restaurant Site | 2024 | |
| 04 | Cheiro & Pão | Bakery Site | 2024 | |
| 05 | Lalay Pet Shop | Pet Shop Site | 2024 | |
| 06 | Pinheiro Escapamentos | Automotive Site | 2024 | |
| 07 | Casa da Mangueira | Events Site | 2024 | |

---

## Adding a New Project

To add a project:
1. Add an entry to the `WORK` array in `WorkSection.tsx`.
2. Increment the index (`"08"`).
3. Set `featured: true` if the project is a primary showcase piece.
4. Optionally add full project data to `src/data/projects.ts` for use in a future case study page.

Remove old entries only when they are truly no longer relevant to the portfolio. Do not remove entries to make room for new ones — the list can grow.

---

## Row Anatomy

```
48px    1fr          auto          auto    32px
[01]    [GridHunter  Featured]     [SaaS]  [2024] [→]
```

Column breakdown:

| Column | Width | Content |
|--------|-------|---------|
| Index | 48px fixed | Zero-padded number ("01"–"07") |
| Title | 1fr flexible | Project name + optional "Featured" badge |
| Type | auto (hidden mobile) | Category label in mono uppercase |
| Year | auto | Four-digit year in mono |
| Arrow | 32px fixed | `→` glyph |

---

## Interactive Behavior

### Hover state transitions

All transitions are `0.2s` except the arrow which is `0.15s` via Framer Motion.

| Element | Rest | Hover |
|---------|------|-------|
| Row background | transparent | `rgba(255,255,255,0.025)` dark / `rgba(0,0,0,0.03)` light |
| Index color | `--text-faint` | `--accent` |
| Title weight | 400 | 500 |
| Title color | `--text-secondary` | `--text-primary` |
| Arrow color | `--text-faint` | `--accent` |
| Arrow position | 0 | +4px (Framer Motion x) |

### Click behavior

If `entry.url` is defined, the entire row is wrapped in an `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"`. The row has `cursor: pointer`.

If `entry.url` is absent, no link wrapper. The row has `cursor: default`.

---

## Section Header

The header consists of:
- Left: "Selected Work" label (mono, 10px, copper accent) + "Projects" h2 (`clamp(2.4rem, 5vw, 4rem)`, weight 800)
- Right: Descriptive text (mono, 11px, text-muted, max-width 280px, text-align right)

The header uses `align-items: flex-end` so the description text aligns to the bottom of the heading.

---

## Table Column Header

Above the first data row, a column header row shows:

```
#  |  Project  |  Type  |  Year  |  (no label)
```

All labels are mono, 9px, weight 600, `--text-faint`, uppercase. This is the smallest text on the page, which is intentional — it reads as a structural annotation rather than content.

---

## Animation

Each row animates in with `whileInView`:

```ts
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" as const }}
```

The stagger (`0.05 * i`) means each row appears slightly after the previous one — the table "builds" visually as the user scrolls into it.

---

## Responsive Behavior

| Breakpoint | Layout change |
|-----------|--------------|
| `≥ 768px` | Full table with Type column visible |
| `< 768px` | Type column hidden (`className="hidden md:block"`). Grid still shows index, title, year, arrow. |

On mobile, the title column expands to fill the space freed by the hidden Type column.

---

## Acceptance Criteria

- [ ] Seven rows render in the correct order
- [ ] GridHunter row has the "Featured" badge
- [ ] All rows with URLs open in new tabs on click
- [ ] Hover state activates correctly (background, index color, arrow shift)
- [ ] Type column hides on mobile
- [ ] Rows animate in on scroll with stagger
- [ ] The section is reachable via the `#work` anchor
