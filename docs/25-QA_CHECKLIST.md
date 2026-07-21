# QA Checklist

Use this checklist before every production deployment. Mark every item. Do not deploy with unchecked items unless you have explicitly documented why the item is being skipped and when it will be addressed.

---

## Build Quality

- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` completes successfully
- [ ] No `console.error` or `console.warn` in the browser console on page load
- [ ] No hydration errors in the browser console
- [ ] No "Warning: Each child in a list should have a unique key prop" errors

---

## Visual QA — Dark Mode

Test at 1440px viewport width, dark mode:

### Hero
- [ ] "GUSTAVO" renders in ultra-light weight (weight 100)
- [ ] "GOMES" renders in black weight (weight 900) in copper accent color
- [ ] "Full-Stack Developer" label is visible and correctly positioned (bottom-right of GOMES line)
- [ ] Pulse dot is green and animating
- [ ] "Available for work" text is in copper accent
- [ ] "Portfolio" label and year are visible but subtle
- [ ] "View Work" link underline is `--card-border` at rest, copper on hover
- [ ] "WhatsApp ↗" is in `--text-muted` at rest, `--text-primary` on hover
- [ ] "Bahia · Brazil · GMT-3" is visible but in `--text-faint`
- [ ] Scroll indicator arrow is visible and bouncing
- [ ] Background noise texture is subtle (not distracting)

### WorkSection
- [ ] "Selected Work" label is in copper accent
- [ ] "Projects" heading is bold and large
- [ ] Table column header row is visible with faint text
- [ ] All 7 rows render in correct order (01–07)
- [ ] GridHunter has "Featured" badge
- [ ] Row hover: background tints, index turns copper, arrow shifts right
- [ ] All rows with URLs are clickable
- [ ] Row dividers are visible

### ManifestoSection
- [ ] Alternate background is subtly different from page background
- [ ] Border top and bottom are visible
- [ ] "About" label is in copper accent
- [ ] Main statement: first line in `--text-primary`, second line in `--text-muted`
- [ ] Stats grid: 3 cells with correct numbers and labels
- [ ] Grid cell borders are visible (1px gap creates line effect)
- [ ] Tech pills render in two rows (flex-wrap)
- [ ] Pill hover: copper border, text-primary color

### DiscordServers
- [ ] "Community" label is in Discord blue (#5865F2)
- [ ] Server name heading renders at correct size
- [ ] Pulse dot (green) is visible and animating
- [ ] "Join Server" button is Discord blue with white text
- [ ] Server card (right column) has visible 2px top stripe in Discord blue
- [ ] Border-top between previous section and this section is visible

### ConnectSection
- [ ] "Get in touch" label is in copper accent
- [ ] Headline spans 3 lines: "Let's build / something / together."
- [ ] All 4 links render with correct labels and notes
- [ ] Link row hover: subtle background tint
- [ ] Arrow icons (↗) visible in copper accent

### Footer
- [ ] Copyright year is current year (from JavaScript)
- [ ] All 5 footer links render
- [ ] External links hover to `--text-primary`
- [ ] `/now` and `/uses` hover to copper accent
- [ ] Border-top is visible

---

## Visual QA — Light Mode

Switch to light mode and repeat the critical checks:

- [ ] Background changes to warm parchment (#F5F1EB)
- [ ] Hero background uses `--hero-bg` (#F0EDE7)
- [ ] All text remains legible (no white-on-white or black-on-black)
- [ ] Copper accent adapts to darker shade (#8B5A27)
- [ ] ManifestoSection stats cells are white (#FFFFFF) on parchment background
- [ ] Server card uses white background
- [ ] Navbar frosted glass uses parchment tint when scrolled
- [ ] Mobile overlay uses parchment background

---

## Responsive QA

Test each viewport:

### 320px
- [ ] No horizontal scroll
- [ ] Hero name is legible (minimum 64px)
- [ ] Container padding reduces (no text flush against edge)
- [ ] WorkSection rows are readable (Type column hidden)

### 375px
- [ ] No horizontal scroll
- [ ] Hero layout intact
- [ ] All sections readable

### 768px (breakpoint)
- [ ] Layout transitions from single to two-column above this point
- [ ] Navbar shows links above this point
- [ ] Test both 767px (mobile) and 769px (desktop) explicitly

### 1280px
- [ ] Full desktop layout with correct gaps

### 1440px
- [ ] Reference design — everything should be perfect here

### 1920px
- [ ] Content is centered, max-width container holds
- [ ] No stretched or broken layouts

---

## Animation QA

- [ ] Hero entrance sequence fires on page load (staggered fade-up)
- [ ] LoadingScreen exits cleanly before hero animations begin
- [ ] LoadingScreen skips on page refresh (sessionStorage check)
- [ ] Scroll indicator arrow bounces continuously
- [ ] Work rows animate in on scroll with stagger
- [ ] Section content animates in on scroll (ManifestoSection, DiscordServers, ConnectSection)
- [ ] Theme toggle triggers circle-reveal view transition
- [ ] View transition origin is at the click position (not center)
- [ ] All hover transitions complete within 200ms

### Reduced Motion
- [ ] With `prefers-reduced-motion: reduce` set in OS: animations are minimal or absent
- [ ] View transition falls back to instant switch (not circle reveal)

---

## Translation QA

Test each language (EN, PT, ES):

- [ ] Language persists after page refresh
- [ ] Language selector shows correct active language
- [ ] Switching language updates visible text
- [ ] No raw translation keys visible (e.g., "nav.work" instead of "Work")
- [ ] No sections show empty strings after language switch

---

## Accessibility QA

- [ ] Tab key reaches all interactive elements
- [ ] Focus indicator is visible on all focusable elements
- [ ] Theme toggle `aria-label` is set ("Toggle theme")
- [ ] Mobile menu hamburger has `aria-label`
- [ ] External links have `rel="noopener noreferrer"`
- [ ] All decorative SVGs have `aria-hidden="true"`
- [ ] Color contrast passes for all text elements (use browser DevTools contrast checker)

---

## SEO QA

- [ ] Page `<title>` is correct and not generic
- [ ] Meta description is present and descriptive
- [ ] `<h1>` exists exactly once per page
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Canonical URL is set
- [ ] OpenGraph tags are populated (use Facebook Sharing Debugger or opengraph.xyz to verify)
- [ ] Twitter card tags are populated
- [ ] `robots: index: true` on all public pages

---

## Performance QA

- [ ] Run PageSpeed Insights on production URL
- [ ] Lighthouse Performance score ≥ 90 on desktop
- [ ] LCP < 2.5s
- [ ] CLS < 0.1 (no layout shift after fonts load)
- [ ] INP < 200ms (interactions feel instant)
- [ ] No render-blocking resources in the Lighthouse waterfall

---

## Functional QA

- [ ] All Work row URLs open in new tab
- [ ] WhatsApp link opens `wa.me/5575998596215` in new tab
- [ ] "Join Server" Discord link opens `discord.gg/5tMJDxH8vc` in new tab
- [ ] GitHub link opens `github.com/gustavovitor2004` in new tab
- [ ] Instagram link opens correct profile in new tab
- [ ] Footer `/now` routes to `/now` page
- [ ] Footer `/uses` routes to `/uses` page
- [ ] Navbar "Links" routes to `/links` page
- [ ] All anchor links (`#work`, `#manifesto`, `#servers`, `#connect`) scroll to correct section
- [ ] Navbar "GG" monogram links to `/`
- [ ] ManifestoSection "What I'm doing now →" routes to `/now`

---

## Cross-Browser QA

Test on the following browsers before major releases:

| Browser | Platform | Status |
|---------|----------|--------|
| Chrome (latest) | Windows/Mac | Required |
| Safari (latest) | macOS | Required |
| Firefox (latest) | Windows/Mac | Required |
| Chrome Mobile | Android | Required |
| Safari Mobile | iOS | Required |

Known browser considerations:
- View Transitions API: not supported in Firefox. The theme toggle falls back to an instant change. This is acceptable.
- `100svh`: supported in all modern browsers. Do not change to `100vh`.

---

## Deployment Verification

After deploying:

- [ ] Visit `https://gustavogomes.vercel.app` — page loads
- [ ] Check Vercel dashboard: deployment is "READY" not "ERROR"
- [ ] Hard refresh the page (Ctrl+Shift+R) — no stale cache
- [ ] Run a final visual check at 1440px / dark mode
