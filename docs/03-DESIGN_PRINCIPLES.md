# Design Principles

These are the load-bearing beliefs behind every visual decision on this site. Read them before proposing any change. A proposal that violates a principle must explicitly name the principle it's breaking and explain why the exception is justified.

---

## 1. Contrast Through Scale, Not Decoration

The most powerful visual contrast on this site comes from size differences, not from gradients, shadows, or glow effects.

The hero section demonstrates this: the name "GUSTAVO" renders at up to 200px with `font-weight: 100`. "GOMES" renders at the same size with `font-weight: 900`. The contrast between ultralight and black weight, at that scale, produces more visual impact than any gradient or neon effect ever could.

**Rule:** Before adding a shadow, glow, or gradient, ask whether increasing or decreasing scale would achieve the same contrast. In most cases it will.

---

## 2. One Accent, Used Sparingly

The accent color — copper amber (`#C8935A` in dark mode, `#8B5A27` in light mode) — appears in a small number of places:
- The "GOMES" surname in the hero
- Section labels (the mono uppercase identifiers like "Selected Work", "About", "Community")
- Arrow icons on hover states
- The progress bar in `ScrollProgress`
- The loading screen progress bar
- The "Available for work" status text

Everywhere else is neutral. The accent earns its authority by being rare. Do not introduce it into body copy, backgrounds, badges, or large surface areas.

---

## 3. Type Is the Primary Visual Element

Most pages have no photography, no illustration, and no icons beyond the minimum required. Typography carries the visual weight that other sites assign to images. This means:

- Type sizes must be intentional and contrasting. Use the full range from `10px` (mono labels) to `200px` (hero display).
- Weights must pull in opposite directions. Pair `font-weight: 100` with `font-weight: 800` or `900`.
- Tracking (letter-spacing) is tool for expression. Tight tracking on display type (`-0.04em`). Wide tracking on labels (`0.14em`).

---

## 4. Whitespace Is Structure

Empty space is not a failure to fill the canvas. It is load-bearing. The generous padding between sections (120px vertical) communicates that each section is complete and self-contained. Reducing this to make things "fit" on a smaller screen without an intentional mobile layout decision is wrong.

**Rule:** Never reduce section padding without simultaneously designing the mobile layout. Responsive padding values should be set with `clamp()`, not removed.

---

## 5. No Cosmetic Noise

The following elements are categorically prohibited on this site because they add visual complexity without adding meaning:
- Particle systems and animated backgrounds
- Floating orbs or glowing blobs
- Glass morphism (frosted card surfaces)
- Gradient text on body copy
- Neon borders or neon glows
- Rounded corners on primary layout containers (cards, section dividers, the navbar)
- Drop shadows on cards (use border instead)

Exception: the navbar uses `backdrop-filter: blur(20px)` when scrolled. This is a functional effect that communicates that the navbar is a floating layer, not decoration.

---

## 6. The Grid Holds

All content lives inside a `1200px` max-width container with `48px` horizontal padding. Inside that container, sections use either:
- A two-column editorial split (`1fr 1fr`, 80px gap)
- A full-width single column

There are no three-column layouts at the section level. There are no asymmetric grids (e.g., `2fr 1fr`) except in specific components like the stats grid.

---

## 7. Dark First, Light Respected

The default theme is dark. The design was conceived on a near-black canvas (`#090909`). However, the light mode is not an afterthought — it uses a warm parchment background (`#F5F1EB`) and a darker copper accent (`#8B5A27`) that maintains the same character at higher contrast.

**Rule:** Every new component must be implemented in both themes. Using `isLight ? ... : ...` ternaries is acceptable. Leaving a component that only looks correct in dark mode is not.

---

## 8. Motion Has a Job

Animations exist to communicate state, guide attention, or provide feedback. They do not exist to demonstrate that animation is possible.

Accepted uses of motion:
- Fade-up on scroll entry (communicates content arriving)
- Arrow nudge on row hover (communicates the row is clickable)
- View transition circle-reveal on theme toggle (communicates a fundamental change)
- Scroll indicator bounce (communicates the page is scrollable)

Not accepted:
- Background animations or ambient motion with no informational purpose
- Entrance animations for elements that are already visible above the fold
- Hover animations that take more than 200ms to complete

---

## 9. Every Pixel Must Be Earned

Before adding any element, ask: what does this communicate that is not already communicated? If the answer is "nothing" or "decoration," remove it.

This principle applies to:
- Section dividers (use only when separating conceptually different areas)
- Labels above headings (use only when the label adds information not in the heading)
- Icons (use only when the icon disambiguates; text alone is often better)
- Badges (use only for status information that a reader would act on)

---

## 10. Consistency Is Kindness

Inconsistency is a tax on the reader. When they see a new element that looks similar to one they've already seen but behaves differently, they must stop and evaluate it. Consistency eliminates this cost.

**Rule:** When creating a new element that resembles an existing one, inherit its structure exactly. When creating a genuinely new element type, document it in `18-COMPONENT_LIBRARY.md`.
