# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Léna's portfolio as a clean, Apple-like, bilingual (FR/EN), light/dark single page aimed at recruiters (PO/DevOps CDI 2027) and freelance clients.

**Architecture:** Next.js App Router with a static `app/[lang]/page.tsx` (`/fr`, `/en`); `proxy.ts` redirects `/` to the visitor's language. All copy lives in typed dictionaries/data files passed to server components as props, so `lang`, metadata and content are server-rendered (no language context, no flash, works without JS). Theme is a `data-theme` attribute set by an inline pre-paint script; CSS tokens drive both themes. Scroll reveal is CSS-only.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, lucide-react, Vitest + Testing Library + vitest-axe (new, for tests).

**Spec:** `docs/superpowers/specs/2026-10-16-portfolio-redesign-design.md`

## Global Constraints

- Single page, sections in order: Navbar, Hero, Projects, Web (freelance), Experience, Skills, Contact, Footer.
- Languages `fr` and `en` only; every user-visible string exists in both.
- Projects shown: exactly OPSY, FitMe, Copilote, Tizzy. Only FitMe links to a repo (`https://github.com/LenaGonzalezBreton/FitMe`); no screenshots of private projects.
- No 3D, no Three.js, no emojis as decoration, no skill ratings/percentages/years counters, no prices.
- Hero: name large, **no job title**, photo, primary "Contact" button, secondary "Download CV" (FR/EN file by language, hidden if the file is missing).
- Contact: `lena.gonzalez.breton@gmail.com`, LinkedIn `https://www.linkedin.com/in/lenagonzalezbreton/`, GitHub `https://github.com/lenagonzalezbreton`, location "Epinal | Nancy, France". Mailto + copy-to-clipboard, no backend.
- WCAG 2.2 AA in both themes (text 4.5:1, large text/UI 3:1); visible focus; skip link; touch targets ≥ 44×44 px; works at 320 px width; honours `prefers-reduced-motion` and `prefers-color-scheme`.
- Typeface: Satoshi only (self-hosted). One accent token. Keep `output: "standalone"`, Dockerfile, Vercel Analytics.
- Work on branch `redesign`; commit per task.

## Review Focus

1. JavaScript disabled or slow: all content must be visible and readable (no content hidden until hydration) — Task 6, 12.
2. `prefers-reduced-motion: reduce`: no reveal/transition animations — Task 6.
3. French strings are longer than English: nav and buttons must not overflow or wrap badly at 320 px — Task 7, 12.
4. CV file missing: no dead link, no 404 — Task 8.
5. Unknown language route (`/de`) and bare `/` with unusual `Accept-Language`: must 404 / fall back to `en`, never crash — Task 4.
6. Stored theme or language preference vs. system preference: stored choice wins, no flash of the wrong theme on load — Task 5.
7. Long email address and tech-tag lists at 200 % zoom / 320 px: no horizontal scroll — Task 11, 12.

---

## File Structure

- `app/locales.ts` — `Lang`, `locales`, `isLang`, `defaultLang`.
- `app/i18n/dictionary.ts` — `Dictionary` type + `fr`/`en` objects, `getDictionary(lang)`.
- `app/data/` — `projects.ts`, `experience.ts`, `skills.ts`, `site.ts` (links, contact; replaces `app/constants/index.ts`).
- `app/globals.css` — tokens (light/dark), base styles, `.reveal`, focus ring.
- `app/fonts.ts` — Satoshi only.
- `app/[lang]/layout.tsx`, `app/[lang]/page.tsx` — html/lang, theme script, metadata, page assembly.
- `proxy.ts` (repo root) — `/` → `/{lang}` redirect.
- `app/components/` — `Navbar.tsx`, `ThemeToggle.tsx`, `LangSwitch.tsx`, `Hero.tsx`, `Projects.tsx`, `WebSection.tsx`, `Experience.tsx`, `Skills.tsx`, `Contact.tsx`, `CopyEmailButton.tsx`, `Footer.tsx`, `ui/Button.tsx`, `ui/Section.tsx`.
- `tests/` — Vitest tests mirroring the above; `vitest.config.ts`, `tests/setup.ts`.
- Deleted at the end: old components, `context/`, `lib/`, `types/`, `constants/`, `public/models`, `public/*.svg`, `public/emojis`, Clash Display fonts, `.idea`.

---

### Task 1: Branch and test tooling

**Files:** Create `vitest.config.ts`, `tests/setup.ts`, `tests/smoke.test.ts`; Modify `package.json`.

**Interfaces:** Produces: `npm test` (vitest run, jsdom, globals, `@/` alias → repo root), `expect(...).toHaveNoViolations()` registered in setup.

- [ ] **Step 1:** `git checkout -b redesign`; `npm install`; `npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest-axe`.
- [ ] **Step 2:** Create `vitest.config.ts` (react plugin, `environment: "jsdom"`, `setupFiles: ["./tests/setup.ts"]`, alias `@` → `.`), `tests/setup.ts` (import `@testing-library/jest-dom/vitest`; extend expect with `vitest-axe/matchers`), add script `"test": "vitest run"`.
- [ ] **Step 3:** `tests/smoke.test.ts` asserting `1 + 1 === 2`; run `npm test` → PASS.
- [ ] **Step 4:** Commit `chore: add vitest tooling`.

### Task 2: Design tokens, fonts, contrast test

**Files:** Rewrite `app/globals.css`, `app/fonts.ts`; Test `tests/contrast.test.ts`.

**Interfaces:** Produces CSS custom properties on `:root` and `[data-theme="dark"]`: `--background --surface --foreground --muted-foreground --border --accent --on-accent`; Tailwind v4 `@theme inline` colors `bg-background`, `bg-surface`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-accent`, `text-on-accent`, `text-accent`; utilities `.container-clean`, `.reveal`; `fonts.ts` exports `satoshi` (variable `--font-satoshi`).

- [ ] **Step 1: Failing test** `tests/contrast.test.ts` reads `app/globals.css`, parses the two token blocks, and asserts WCAG ratios in **both** themes: `foreground/background ≥ 4.5`, `muted-foreground/background ≥ 4.5`, `muted-foreground/surface ≥ 4.5`, `on-accent/accent ≥ 4.5`, `accent/background ≥ 4.5`, `border/background ≥ 3`. Include a small `contrast(hexA, hexB)` helper in the test file.
- [ ] **Step 2:** Run → FAIL (tokens absent).
- [ ] **Step 3:** Write the CSS. Starting values (adjust until the test passes): light `#ffffff / #f5f5f7 / #1d1d1f / #6e6e73 / #86868b / #0066cc / #ffffff`; dark `#000000 / #1c1c1e / #f5f5f7 / #a1a1a6 / #6e6e73 / #2997ff / #000000`. Base: `html { scroll-behavior: smooth }` only under `prefers-reduced-motion: no-preference`; global `:focus-visible` 2 px accent ring with offset; body uses Satoshi with system fallback; `.reveal` is a scroll-driven fade/translate inside `@supports (animation-timeline: view())` **and** `@media (prefers-reduced-motion: no-preference)`, otherwise no effect (content always visible).
- [ ] **Step 4:** Reduce `fonts.ts` to Satoshi (400/500/700). Run `npm test` → PASS.
- [ ] **Step 5:** Commit `feat: design tokens and contrast test`.

### Task 3: Locales, dictionaries, content data

**Files:** Create `app/locales.ts`, `app/i18n/dictionary.ts`, `app/data/site.ts`, `app/data/projects.ts`, `app/data/experience.ts`, `app/data/skills.ts`; Test `tests/content.test.ts`.

**Interfaces:**
- `locales = ["fr","en"] as const; type Lang; isLang(x: string): x is Lang; defaultLang: Lang = "en"`.
- `getDictionary(lang: Lang): Dictionary` with sections `meta{title,description}`, `nav{projects,web,experience,skills,contact,skipToContent,switchLanguage,toggleTheme}`, `hero{pitch,availability,contact,downloadCv,photoAlt}`, `projects{title,private,repo}`, `web{title,intro,reference,visit,cta}`, `experience{title,present}`, `skills{title}`, `contact{title,intro,copy,copied,location}`, `footer{rights}`.
- `site.ts`: `site = { name, email, linkedin, github, location }`.
- `getProjects(lang): Project[]` where `Project = { id: "opsy"|"fitme"|"copilote"|"tizzy"; name: string; description: string; tech: string[]; repo?: string }`.
- `getExperience(lang): ExperienceItem[]` where `ExperienceItem = { id: string; role: string; org: string; start: string; end?: string; place?: string; bullets: string[] }` (Eurosérum, Tizzy, SDIS 70 as one-liner, Epitech education entry).
- `getSkillGroups(lang): { label: string; items: string[] }[]` — groups Product & Design / DevOps / Development / Data & tools, plain strings only.

- [ ] **Step 1: Failing tests** (`tests/content.test.ts`): (a) `getDictionary("fr")` and `("en")` have identical recursive key sets and no empty string; (b) `getProjects("en").map(p=>p.id)` equals `["opsy","fitme","copilote","tizzy"]` and only `fitme` has `repo`; (c) FR and EN project/experience/skill arrays have equal lengths and ids; (d) no skill item matches `/\d+\s?%/` and no project description exceeds 160 chars; (e) `isLang("de") === false`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement. Reuse and shorten the existing text from `app/data/*.ts` (git history of `main`); draft the pitch ("I design and ship products, from the need to production") and PO/DevOps-oriented bullets in both languages. Update `app/data/*.ts` in place; move `constants` content into `site.ts`.
- [ ] **Step 4:** Run → PASS. Commit `feat: i18n dictionaries and content data`.

### Task 4: Language routing, layout, metadata

**Files:** Create `app/[lang]/layout.tsx`, `app/[lang]/page.tsx` (placeholder `<main id="main">`), `proxy.ts`; Delete `app/layout.tsx`, `app/page.tsx`; Test `tests/proxy.test.ts`, `tests/layout.test.tsx`.

**Interfaces:** Produces `generateStaticParams()` → `[{lang:"fr"},{lang:"en"}]`; `generateMetadata({params})` using `dictionary.meta` and OG tags; `proxy.ts` exports `proxy(request: NextRequest)` and `config.matcher = ["/"]`; exports helper `pickLang(acceptLanguage: string | null, cookie?: string): Lang` from `app/locales.ts`.

- [ ] **Step 1: Failing tests:** `pickLang("fr-FR,fr;q=0.9,en;q=0.8") === "fr"`; `pickLang("de-DE") === "en"`; `pickLang(null) === "en"`; cookie `fr` overrides header `en`; invalid cookie ignored. Layout test: rendering `[lang]/layout` with `lang="fr"` outputs `<html lang="fr">`; unknown lang calls `notFound()`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement. Check the Next 16 docs (context7 or `node_modules/next/dist/docs`) for the current proxy/middleware file convention and name accordingly. Layout renders `<html lang>`, `<body>` with Satoshi class, `<Analytics />`, skip link `<a href="#main">`, and the inline theme script (Task 5). Add `app/opengraph-image` or a static `public/og.png` (builder's choice).
- [ ] **Step 4:** Run tests → PASS; `npm run build` succeeds. Commit `feat: language routes and metadata`.

### Task 5: Theme (pre-paint script + toggle)

**Files:** Create `app/components/ThemeToggle.tsx`, `app/theme-script.ts`; Test `tests/theme.test.tsx`.

**Interfaces:** Produces `themeInitScript: string` (inline IIFE: reads `localStorage.theme` if `"light"|"dark"`, else `matchMedia("(prefers-color-scheme: dark)")`, sets `document.documentElement.dataset.theme`, wrapped in try/catch); `<ThemeToggle label: string />` — client button, `aria-pressed` reflects dark, icon-only with `aria-label={label}`, persists to `localStorage.theme`.

- [ ] **Step 1: Failing tests:** evaluating `themeInitScript` with stored `"dark"` sets `data-theme="dark"` even when system is light; with nothing stored and system dark sets dark; with `localStorage` throwing, no exception and falls back to system. Toggle click flips attribute and stores value; button has accessible name and a ≥44 px target class.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement; inject script in `[lang]/layout.tsx` `<head>` and add `suppressHydrationWarning` on `<html>`. **Step 4:** PASS. Commit `feat: theme toggle without flash`.

### Task 6: UI primitives

**Files:** Create `app/components/ui/Button.tsx`, `app/components/ui/Section.tsx`; Test `tests/ui.test.tsx`.

**Interfaces:** `<Button href?: string; variant?: "primary"|"secondary"; children>` renders `<a>` when `href` else `<button>`, min height 44 px, uses tokens; `<Section id: string; title: string; children>` renders `<section aria-labelledby>` with an `<h2>`, adds class `reveal` to its inner container.

- [ ] **Step 1: Failing tests:** Button with `href` is a link with the role `link`; without, role `button`; Section exposes a region named by its title; `Section` markup is present and non-hidden without any JS (no `hidden`, `opacity-0` or inline `visibility` in the server HTML); vitest-axe finds no violations on both.
- [ ] **Step 2–4:** FAIL → implement → PASS. Commit `feat: ui primitives`.

### Task 7: Navbar, language switch

**Files:** Create `app/components/Navbar.tsx`, `app/components/LangSwitch.tsx`; Test `tests/navbar.test.tsx`.

**Interfaces:** `<Navbar lang: Lang; dict: Dictionary["nav"]; name: string />`; `<LangSwitch lang: Lang; label: string />` renders a link to `/{other}` (preserving `#hash` client-side) and sets cookie `lang=<other>` on click.

- [ ] **Step 1: Failing tests:** nav is a `<nav aria-label>` containing anchors `#projects #web #experience #skills #contact`; the skip link is the first focusable element; `LangSwitch` on `fr` links to `/en` with `hreflang="en"` and `lang="en"`; clicking sets the cookie; at narrow width links collapse into a labelled disclosure menu (`aria-expanded`) that is keyboard operable and closes on Escape; axe clean.
- [ ] **Step 2–4:** FAIL → implement (sticky, translucent `backdrop-blur`, all controls ≥44 px, FR labels must fit at 320 px) → PASS. Commit `feat: navbar and language switch`.

### Task 8: Hero

**Files:** Create `app/components/Hero.tsx`; Modify `public/` (optimized portrait); Test `tests/hero.test.tsx`.

**Interfaces:** `<Hero lang: Lang; dict: Dictionary["hero"]; name: string; cvHref?: string>` — `cvHref` is `/cv/cv-{lang}.pdf` when the file exists, else `undefined`. Exported helper in `app/data/site.ts`: `cvHref(lang: Lang): string | undefined` using `fs.existsSync(path.join(process.cwd(), "public/cv", \`cv-${lang}.pdf\`))`.

- [ ] **Step 1: Failing tests:** `<h1>` is the name; the pitch and availability text render; no element states a job title (`/product owner|devops|développeuse/i` absent from hero heading); Contact button links to `#contact`; with `cvHref` the CV link has `download` and the right href, without it **no** CV link renders; photo has non-empty `alt`; axe clean.
- [ ] **Step 2–4:** FAIL → implement (choose the better portrait, crop/optimize with `next/image`, `priority`, explicit width/height) → PASS. Commit `feat: hero`.

### Task 9: Projects and Web section

**Files:** Create `app/components/Projects.tsx`, `app/components/WebSection.tsx`; add `public/web/dommartin.webp` (screenshot of https://dommartinavecvous.fr, 2× optimized); Test `tests/projects.test.tsx`.

**Interfaces:** `<Projects dict: Dictionary["projects"]; projects: Project[]>`; `<WebSection dict: Dictionary["web"]>` with reference link `https://dommartinavecvous.fr`, CTA to `#contact`.

- [ ] **Step 1: Failing tests:** exactly four project articles in order; a repo link renders only for FitMe, opens with `rel="noopener noreferrer"`, and has an accessible name containing the project name; private projects show a "private" label and no link; Web section has a link to the reference site, the screenshot has alt text, and no price (`/€|\$/` absent); axe clean.
- [ ] **Step 2–4:** FAIL → implement → PASS. Léna confirmed (2026-10-16) she has permission to feature the Dommartin site, screenshot included. Commit `feat: projects and web sections`.

### Task 10: Experience and Skills

**Files:** Create `app/components/Experience.tsx`, `app/components/Skills.tsx`; Test `tests/experience-skills.test.tsx`.

**Interfaces:** `<Experience dict; items: ExperienceItem[]; lang: Lang>` (dates formatted with `Intl.DateTimeFormat(lang, {month:"short", year:"numeric"})`, ongoing shows `dict.present`); `<Skills dict; groups>` as `<h3>` + `<ul>` per group.

- [ ] **Step 1: Failing tests:** items render in the given order with `<time dateTime>`; ongoing item (SDIS 70) shows the localized "present"; each skill group is a list with the group label as heading; no `role="progressbar"`, no `%`; axe clean.
- [ ] **Step 2–4:** FAIL → implement → PASS. Commit `feat: experience and skills`.

### Task 11: Contact and Footer

**Files:** Create `app/components/Contact.tsx`, `app/components/CopyEmailButton.tsx`, `app/components/Footer.tsx`; Test `tests/contact.test.tsx`.

**Interfaces:** `<CopyEmailButton email: string; copyLabel: string; copiedLabel: string />` client; copies via `navigator.clipboard.writeText`, announces result in an `aria-live="polite"` region, no crash if the Clipboard API is missing (falls back to showing the mailto only).

- [ ] **Step 1: Failing tests:** mailto link with the exact email; clicking copy calls `writeText` with the email and shows the "copied" text in the live region; with `navigator.clipboard` undefined, click does not throw; LinkedIn/GitHub links have accessible names and `rel="noopener noreferrer"`; the email wraps (`break-words`/`overflow-wrap:anywhere`) so no horizontal overflow; axe clean.
- [ ] **Step 2–4:** FAIL → implement → PASS. Commit `feat: contact and footer`.

### Task 12: Assembly, cleanup, verification

**Files:** Modify `app/[lang]/page.tsx`, `README.md`, `package.json`; Delete old components/dirs listed in File Structure; Test `tests/page.test.tsx`.

- [ ] **Step 1: Failing test:** render `app/[lang]/page.tsx` for `fr` and `en`; headings order `h1` then `h2`s in the Global Constraints order; exactly one `<main id="main">`; axe clean on the whole page; no occurrence of `three`, `framer-motion` imports left unused.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Assemble sections with `id`s `projects web experience skills contact`; delete old files; remove unused dependencies (`npm uninstall` for anything not imported — check with `npx depcheck`); update README to the new stack and routes.
- [ ] **Step 4:** `npm test`, `npm run lint`, `npm run build` all pass. Run `npm run dev` and check `/en`, `/fr`, `/` redirect, `/de` 404 in the browser at 320 px and 1440 px, light and dark, JS disabled, reduced motion on, 200 % zoom; run Lighthouse (accessibility ≥ 95, performance ≥ 90 on mobile); `docker build -t portfolio .` succeeds.
- [ ] **Step 5:** Commit `feat: assemble redesigned portfolio`.

---

## Self-review notes

- Spec coverage: structure, bilingual, themes, UI norms (Tasks 2, 5–7, 12), four projects (3, 9), freelance (9), experience/skills (10), hero/CV/photo (8), contact (11), cleanup and rollout on a branch (1, 12). Out of plan: production cutover (separate, after Léna approves).
- Framer Motion: the spec said to keep the stack; the plan uses CSS-only reveal (no-JS safe), so `framer-motion` is removed in Task 12 if unused. Flagged as a call.
- Routing by `/fr` and `/en` instead of one URL with a client language switch is a plan-level decision made so `lang` and metadata are correct per language.
