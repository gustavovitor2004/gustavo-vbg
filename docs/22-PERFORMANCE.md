# Performance

## Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | ≥ 90 | PageSpeed Insights |
| LCP | < 2.5s | Core Web Vitals |
| CLS | < 0.1 | Core Web Vitals |
| INP | < 200ms | Core Web Vitals |
| FCP (First Contentful Paint) | < 1.8s | Core Web Vitals |
| TTFB (Time to First Byte) | < 0.8s | Vercel Analytics |
| Build time | < 60s | Vercel build logs |
| Bundle size (JS) | < 200kB gzipped | Next.js build output |

---

## Font Loading

Fonts are loaded from Google Fonts via `<link rel="preconnect">` and `<link rel="stylesheet">` in the `<head>`. This is handled in `src/app/layout.tsx`.

### Preconnect targets
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

### Display swap
The Google Fonts URL includes `display=swap`, which means text is rendered in a fallback font while the custom font loads. This prevents invisible text during font loading (FOIT).

### Font subsetting
Inter is loaded with the full weight range (100–900) and optical sizes. This is a large font — consider subsetting to only the weights used in production if bundle size becomes an issue:

Used weights: 100, 300, 400, 500, 700, 800, 900

JetBrains Mono used weights: 400, 500, 600, 700

---

## Image Optimization

### Work section screenshots
The `src/data/projects.ts` file uses `thum.io` to generate live screenshots. These are external images loaded at runtime.

Current parameters:
- Output width: 1280px
- Crop height: 800px
- Viewport: 1440px desktop

These are not used in the current homepage design (WorkSection uses a text table, not screenshots). They are used in the legacy `ProjectsSection` component and will be needed for case study pages.

When screenshots are used:
- Add `loading="lazy"` and `decoding="async"` to all `<img>` tags below the fold.
- Consider replacing `thum.io` with pre-captured local screenshots in `/public/projects/` for production reliability.

### Hero noise texture
The hero background noise is an inline SVG data URI — no network request. This is the correct approach.

---

## JavaScript Bundle

### Client components
Only components that need browser APIs, event handlers, or animation are marked `"use client"`. Server components are preferred when no interactivity is needed.

Current client components:
- `LoadingScreen` — needs `sessionStorage` and timing
- `ScrollProgress` — needs `window.scrollY`
- `Navbar` — needs scroll listener, state, theme toggle
- `Footer` — uses `useThemeTokens`
- All section components — use `useThemeTokens` and Framer Motion

**Opportunity:** `Footer` could be a server component if the `useThemeTokens` hook is removed and theme-dependent styling is handled via CSS custom properties alone. Consider this refactor to reduce client-side JS.

### Third-party scripts
No third-party analytics, chat widgets, or tracking scripts are loaded. This is a significant performance benefit. Keep it this way.

---

## CSS

The site uses TailwindCSS v4, which generates only the CSS classes used in the project. The global CSS file (`globals.css`) is small (< 5kB).

Avoid adding unused CSS utility classes to `globals.css`. If a utility class is added, it must be used somewhere in the codebase.

---

## Rendering Strategy

The site uses Next.js App Router with:
- **Static Generation** for all pages (no dynamic data, no authentication)
- **Client Components** only where necessary (see above)

This means Vercel serves pre-rendered HTML for every page, with no server-side computation on each request. TTFB should be < 50ms from Vercel's edge network.

---

## Framer Motion Optimization

Framer Motion adds ~40kB to the client bundle. This is acceptable given that it is used extensively throughout the site for scroll animations and hover effects.

To minimize the cost:
- Use `whileInView` with `viewport={{ once: true }}` — animations fire only once, not every time the element scrolls in and out.
- Avoid `AnimatePresence` where simple CSS transitions suffice.
- Do not import the full `motion` API if only one motion type is used — though in practice the tree-shaking happens automatically.

---

## Vercel Edge Configuration

The project deploys to Vercel with default configuration. No `vercel.json` custom headers or rewrites are configured.

Consider adding:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## Loading Screen Performance

The LoadingScreen adds a ~1.5s perceived delay on first visit, but:
- The actual HTML and JS are loading during this time.
- The animation is pure CSS — zero additional JavaScript cost.
- Return visits skip it via `sessionStorage`.

If Lighthouse flags the loading screen as a performance issue, consider reducing its duration from 1.5s to 0.8s.

---

## Performance Testing Procedure

Before every significant deploy:

1. Run `npm run build` locally. Check the Next.js output for bundle size warnings.
2. Run `npx tsc --noEmit`. Zero type errors required.
3. Deploy to Vercel.
4. Open PageSpeed Insights (pagespeed.web.dev) with the production URL.
5. Run analysis for both Mobile and Desktop.
6. Verify all Core Web Vitals are green.
7. If LCP is yellow or red: identify the LCP element and optimize it (usually the hero heading, which is text — should be fast).
