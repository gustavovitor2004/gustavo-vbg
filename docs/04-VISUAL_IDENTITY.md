# Visual Identity

## Brand Overview

The brand identity for this site is deliberately minimal. There is no logo in the traditional sense — no wordmark, no icon, no mascot. The identity is carried entirely by the typography, the monogram, and the color system.

---

## The "GG" Monogram

The primary brand mark is the two-letter monogram **GG** — for Gustavo Gomes.

### Specification

| Property | Value |
|----------|-------|
| Characters | GG |
| Font family | `var(--font-mono)` — JetBrains Mono |
| Font size | 12px in the navbar |
| Font weight | 700 |
| Letter spacing | 0.08em |
| Text transform | uppercase |
| Color | `var(--text-primary)` |

### Usage

- Appears in the navbar top-left as the primary brand link.
- Appears in the LoadingScreen as the primary loading identity (48px, weight 700).
- Does not appear anywhere else.

### Rules

- Never render it in the accent color unless explicitly making it a hover/active state.
- Never add a box, circle, or background behind it in the navbar.
- Never replace it with a full name in the navbar. The monogram is sufficient; the full name appears in the hero.

---

## Name Presentation

In the hero section, the full name "GUSTAVO GOMES" is split across two lines for maximum typographic impact:

```
GUSTAVO     ← font-weight: 100, color: --text-primary
GOMES       ← font-weight: 900, color: --accent
```

This presentation — weight contrast, two colors — is the closest thing this brand has to a logo. It should never appear in this form outside the hero section.

---

## The Copper Amber Accent

The defining color of this brand is copper amber. It is warm, aged, and non-digital in character — a deliberate choice against the purple/blue palette common in developer portfolios.

| Mode | Hex | HSL |
|------|-----|-----|
| Dark primary | `#C8935A` | hsl(28, 50%, 57%) |
| Dark dim | `#7A5832` | hsl(28, 38%, 34%) |
| Light primary | `#8B5A27` | hsl(28, 58%, 35%) |

The copper accent connotes craft, precision, and warmth. It references the patina of copper, not the digital blue of technology.

---

## Tone of Voice

The brand speaks in short, declarative sentences. No superlatives, no self-promotion, no passive voice.

**Examples of the correct tone:**

> "Building digital products that matter."

> "I build products on the internet."

> "From architecture to deployment, independently."

> "Let's build something together."

**Examples of the wrong tone:**

> "Passionate developer with a love for creating stunning web experiences that delight users!"

> "I am dedicated to delivering high-quality solutions that exceed client expectations."

The brand voice is direct, confident, and slightly understated. Let the work do the boasting.

---

## Tagline

The working tagline for this portfolio is:

> **"Building digital products that matter."**

This appears in the hero section body copy and in the meta description. It communicates:
- What Gustavo does (builds digital products)
- What distinguishes his work (matters — implies quality, purpose, real impact)

---

## Brand Don'ts

| Don't | Why |
|-------|-----|
| Use purple or cyan as an accent | Replaced by copper amber in the rebrand |
| Use the full name as a navbar label | The monogram is the navbar identity |
| Use rounded corners on brand containers | Swiss aesthetic requires sharp geometry |
| Add a subtitle like "Developer & Designer" to the monogram | The work communicates skills; the label is redundant |
| Use gradient text on the name | The weight contrast is the effect; gradients dilute it |
