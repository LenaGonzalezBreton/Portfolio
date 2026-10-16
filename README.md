# Portfolio — Léna Gonzalez Breton

Single-page, bilingual (FR/EN), light/dark portfolio. Routes: `/fr` and `/en` (`/` redirects from the browser language or the `lang` cookie).

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, lucide-react. Tests: Vitest, Testing Library, vitest-axe.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # unit + accessibility tests
npm run lint
npm run build
```

## Content

All copy lives in `app/i18n/dictionary.ts` and `app/data/*.ts` (FR and EN side by side). Colours and themes are tokens in `app/globals.css`.

The CV buttons appear automatically once `public/cv/cv-fr.pdf` and `public/cv/cv-en.pdf` exist.

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Design and plan: `docs/superpowers/`.
