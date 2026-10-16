# Portfolio redesign — design

Owner: Léna Gonzalez Breton. Existing repo: `LenaGonzalezBreton/Portfolio` (Next.js 16, React 19, Tailwind v4, Framer Motion, Docker, Vercel Analytics). Date: 2026-10-16.

Legend: **[Léna]** = decided by Léna. **[My call]** = default chosen by the brainstormer, to be checked by Léna.

## Intent and why

The current site is out of date and visually busy (3D hero, emoji interests, percentage skill bars, six detailed project cards). Léna's situation has changed: both apprenticeships ended in autumn 2025, she is looking for a **permanent job (CDI) starting in 2027**, in **Product Owner or DevOps** (flexible), and in the meantime takes **freelance web projects as a micro-entrepreneur** (showcase sites "or more, to be discussed").

The new site must make a recruiter or a prospective client understand in a few seconds who she is, show 4 convincing projects, and give them one obvious way to reach her.

## Goals

- **[Léna]** Much cleaner, Apple-like look: whitespace, strong typography, "straight to the essentials".
- **[Léna]** Bilingual FR / EN (as today), light and dark themes (as today).
- **[Léna]** Strict compliance with current UI/UX norms.
- **[Léna]** Audience: recruiters and potential clients. Goal after a visit: they contact her.
- **[Léna]** Single page.
- **[Léna]** Hero: name large, no job-title label, a photo, a "download CV" button (FR and EN versions of the CV), one contact button.
- **[Léna]** Content must be refreshed (see Content).

## Non-goals / anti-goals

- No 3D hero, no Three.js, no decorative emojis, no percentage/"level" bars, no "years of experience" counters.
- No pricing shown. Freelance is "showcase sites and more, on discussion".
- No multi-page site, no blog, no CMS, no backend. The contact must still work (see Open items for builder).
- Anti-goal: anything that looks flashy or "template-y" at the cost of clarity. A page that is pretty but slow, low-contrast or hard to use with a keyboard is a failure.

## Page structure (single page, in order)

1. **Navbar** (sticky, translucent): name/monogram, anchor links, FR/EN switch, theme toggle (light / dark / [My call] follow system by default).
2. **Hero** **[Léna]/[My call]**
   - Name, large. No job title.
   - One-sentence pitch **[My call]**: "I design and ship products, from the need to production" (FR equivalent). Léna to confirm wording.
   - Discreet availability line **[My call]**: "Available for a permanent role from 2027" (FR equivalent).
   - Photo **[Léna]**, existing `public/portrait.jpg` / `portrait2.jpg` (the first is 1.7 MB: must be optimized).
   - Buttons: primary "Contact me", secondary "Download CV" (opens the CV in the current language). **[Léna]** for CV; the CV PDFs (FR and EN) are not in the repo yet: Léna must supply them.
3. **Projects** — exactly four **[Léna]**: **OPSY**, **FitMe**, **Copilote**, **Tizzy**. Each: name, one-sentence description, a few tech tags, link if public (FitMe repo; others are private/NDA). FluCast and Portfolio are removed from the page **[My call]** (FluCast stays reachable via GitHub).
4. **Web / Freelance section** **[Léna]**: "Showcase sites, or more — let's discuss it." Reference project: **dommartinavecvous.fr** (municipal campaign site for the list that won the March 2026 election: news, appointments, team, programme). Screenshot, one line of context, link, and a "Tell me about your project" button. No prices.
5. **Experience / background** — Eurosérum apprenticeship (09/2023–09/2025), Tizzy apprenticeship (09/2024–11/2025), volunteer firefighter SDIS 70 (since 09/2020, **[My call]** kept as a single line as a differentiator), education (Epitech). Short entries, a few bullets maximum. **[My call]** Frame achievements toward PO/DevOps (needs analysis, prioritisation, OPC/automation, Docker, GitLab, CI/CD where true).
6. **Skills** — grouped plain lists of technologies **[My call]**, no ratings. Groups to reflect the new targets (e.g. Product / Design, DevOps, Development, Data & tools). Léna to validate that the list is accurate and current.
7. **Contact** — email (`lena.gonzalez.breton@gmail.com` as in the current site), LinkedIn, GitHub, location (Épinal | Nancy). One clear call to action.
8. **Footer** — minimal.

## Visual and interaction direction

- **[Léna]** Apple-like: generous whitespace, large type, restrained palette, high content-to-chrome ratio.
- **[My call]** One typeface family (Satoshi, already self-hosted) with a clear scale; Clash Display dropped. System-font fallback.
- **[My call]** One accent colour used sparingly (links, primary button, focus ring). Neutral greys otherwise.
- **[My call]** Motion: subtle fade/translate on scroll and hover, nothing decorative. Must respect `prefers-reduced-motion`.

### UI/UX norms to satisfy **[Léna]** (concrete reading by the brainstormer)

- WCAG 2.2 AA minimum: text contrast ≥ 4.5:1 (3:1 for large text and UI components) in **both** themes.
- Full keyboard navigation, visible focus indicators, a "skip to content" link, logical heading order, semantic landmarks.
- Touch targets ≥ 44×44 px; mobile-first; no horizontal scroll from 320 px up.
- Correct `lang` attribute per language, readable line length, relative units, respects browser text-size settings.
- `prefers-color-scheme` honoured on first visit; theme and language choices persisted; no flash of wrong theme on load.
- Meaningful alt text, accessible names on icon-only buttons (theme, language, social).
- Performance: good Core Web Vitals; optimized images (`next/image`, modern formats); no heavy 3D assets shipped (remove `public/models`).
- SEO/sharing: proper title, description, Open Graph image, per-language metadata.

## Constraints

- **[My call]** Keep the existing stack (Next.js App Router, TypeScript, Tailwind v4, Framer Motion, lucide-react) and the Docker/standalone deployment; remove Three.js / R3F and any other unused dependency.
- Existing i18n approach (`LanguageContext`, FR/EN data files) can be reworked as the builder sees fit, as long as all text exists in both languages.
- Keep Vercel Analytics unless Léna says otherwise.
- Work is currently on a fresh clone; the old `.idea`, unused `public/*.svg`, fonts and models can be cleaned.

## Left to the builder

Component breakdown, exact type scale and colour values, spacing, animation details, responsive breakpoints, how i18n and theming are implemented, image optimization, the contact mechanism (see below), testing approach.

## Calls made after the builder check **[My call]**

- **Project content:** start from the existing FR/EN text in `app/data/projects.ts` (OPSY, FitMe, Copilote, Tizzy), shortened to one sentence + tech tags. Private projects (OPSY, Copilote, Tizzy) are shown by name, description and tech only: no screenshots, no client internals. Only FitMe has a public repo link (`github.com/LenaGonzalezBreton/FitMe`).
- **Copy:** the builder drafts all FR and EN copy (pitch, availability line, experience bullets, skills groups). All copy lives in editable data files so Léna can review and rewrite it before launch; the build is not "shipped" until she has read it.
- **Photo:** the builder picks the better of `portrait.jpg` / `portrait2.jpg` and may crop and process it (rounded or rectangular, optimized). Easy to swap later.
- **CV:** files expected at `public/cv/cv-fr.pdf` and `public/cv/cv-en.pdf`. Until Léna adds them, the button is hidden rather than leading to a 404.
- **Dommartin screenshot:** captured by the builder from the live public site, subject to Léna's confirmation below.
- **Accent colour:** the builder proposes one, kept as a single design token that is trivial to change.
- **Education:** taken from the existing data, flagged for Léna's check.
- **Rollout:** work on a feature branch of the existing repo, history preserved; switching the production site (same Docker/self-hosted setup) is a separate step after Léna approves.

## Open items for the builder to settle or raise

- Contact: the current Contact component may rely on a form or on a mailto/copy button; builder should choose the simplest reliable option that needs no backend (default: mailto + copy-to-clipboard) unless the existing code already handles a form.
- CV files and the final pitch/tagline wording are inputs Léna still has to provide or confirm.
- Education details (Epitech years/programme) to be taken from the existing data and confirmed.
