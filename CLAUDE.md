# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project

Marketing and lead-capture site for Gold Lion Painting Inc, house painters in Manatee and Sarasota County, Florida (`https://lionpaintingservicesfl.com`; the repo and package are named `goldpainting`). English-language copy for a US audience. Next.js 16.4 App Router (Turbopack, Cache Components, Partial Prefetching, typed routes, React Compiler on), React 19.3, Tailwind CSS 4, shadcn (base-ui), npm. Bootstrapped with create-t3-app; `README.md` is the untouched boilerplate.

## Commands

- `npm run dev | build | start | preview`.
- `npm run check` is `npm run lint && tsc --noEmit`. There are no git hooks (no Husky/Lefthook). Central lint config: `eslint.config.mjs` (ignores `.agents/**`, `doc/**`, `public/**`); project-wide rule-offs go only there.
- `npm run lint | lint:fix` (`eslint . --cache`), `typecheck`, `format:check`, `format:write`. `check:ts6` and `typecheck:ts6` run the TypeScript 6 compiler (`tsc6`).
- There is no `test`, `test:e2e` or `db:*` script. Do not run Drizzle commands without checking with the user first.
- `.eslintcache` is tracked in git, so `npm run lint` dirties it; do not commit it by accident.

## Architecture

- Two TypeScript versions on purpose: `typescript` is aliased to `@typescript/typescript6` (typescript-eslint and Next need its JS compiler API), while `tsc` resolves to `@typescript/native` (TS 7). `next.config.ts` sets `experimental.useTypeScriptCli: false` because of this alias. Do not remove the alias or that flag.
- Content flow: the three service pages (`interior-painting`, `exterior-painting`, `cabinet-painting`) and the ten area pages (`bradenton`, `sarasota`, `venice`, ...) render Markdown from `doc/infor_services/*.md` and `doc/info-areas/*.md` through `readMarkdownContent` / `parseMarkdownContent` (`src/app/content/markdownContent.ts`), a lenient parser for the copy's notation (`H1:`/`H2:` lines, `✔` and `•` items, FAQ blocks). Change the `.md` first and render from it; never invent or replace that copy without an explicit request. The home page (`src/app/page.tsx`) and the blog (`src/app/blog/blogData.ts`) are TypeScript, not Markdown, and `doc/landing-home/home.md` and `doc/home-lading/home.md` are not read by any code.
- Business and SEO facts live in `src/app/siteConfig.ts`: `siteUrl`, business name/phone/email/hours, Google place ID, hard-coded rating (`4.9`) and review count (`120`) shown in copy and schema, `serviceAreaNames`, and `indexedRoutes`. `indexedRoutes` is a manual list that feeds `sitemap.ts` together with the blog routes, so a new public page must be added there. Sitemap `lastModified` comes from a `'use cache'` helper (`cacheLife('days')`), so `sitemap.xml` stays static and refreshes at most daily.
- Removed pages are deliberate: `commercial-painting`, `deck-fence-painting`, `painters-st-petersburg-fl`, `pressure-washing`, `privacy-policy`, `roof-painting` and `terms-condition` are `route.ts` handlers answering 410 with `noindex` (`src/app/oldRouteResponse.ts`); other retired URLs are 301 redirects in `next.config.ts`.
- Cache Components: every page prerenders; the only request-time read is `searchParams` on `/blog`, isolated in a `<Suspense>` child (`BlogPostList`). `export const runtime` is not allowed with `cacheComponents` (Node is the default); keep `maxDuration` only. New pages must not read `searchParams`/`cookies()`/`headers()` outside `<Suspense>`, and must not call `new Date()` at render without `'use cache'`.
- API routes (Node runtime by default): `/api/estimate` validates with Zod and emails the company; `/api/chat` is a Gemini (`gemini-2.5-flash-lite`) function-calling chatbot whose `createServiceAppointment` tool emails an appointment request (fixed windows 8-10 AM and 4-6 PM, dates computed in `America/New_York`, history capped at 12 messages); `/api/google-reviews` calls Google Places (revalidate 3600, needs `GOOGLE_PLACES_API_KEY`); `/api/photo-proxy?url=` currently fetches any caller-supplied URL with no allowlist.
- Email: `src/server/email.ts` uses nodemailer over SMTP (Gmail defaults) when `SMTP_USER` and `PASS` are set, otherwise the routes answer 503 (`MISSING_SMTP_CONFIG`). The recipient address is hard-coded.
- Database: `src/server/db/` (Drizzle + postgres-js, one example `posts` table with a `goldpainting_` prefix) is unused scaffolding. Nothing imports it, `DATABASE_URL` is not in `src/env.ts`, `drizzle.config.ts` points to `./src/server/schema.ts` (the real file is `src/server/db/schema.ts`), and no migrations directory exists.

## Rules and pitfalls

- Import alias is `~/*` to `src/*` (also the shadcn aliases in `components.json`), not `@/`.
- Env vars are validated in `src/env.ts` (T3 Env): `GEMINI_API_KEY` (required), `GOOGLE_PLACES_API_KEY`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `PASS`; `SKIP_ENV_VALIDATION` bypasses validation. Avoid raw `process.env` in app code (today `/api/google-reviews` and `src/server/db/*` still read it directly). Never read, print or store values.
- Conventions: strict TypeScript, avoid `any`, let the compiler infer return types; named exports except Next.js pages/layouts; no unnecessary `useEffect`; no `useMemo`/`useCallback` without a documented exception; use `React.ReactNode`. Tailwind CSS 4 utilities with the theme tokens in `src/styles/globals.css`; reuse shared components before creating new ones.
