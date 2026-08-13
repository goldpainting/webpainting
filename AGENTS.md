<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# Repository Agent Instructions

How AI coding agents must work in this repository. The user describes changes in plain natural language; the agent infers the workflow, keeps token usage minimal, and protects the repo.

## Core Rules

Shared agent rules — work modes (DIRECT / SDD CONTROLLED / SDD STRICT), token budget, language contract, commits and integrity, Engram scope, GGA, and safety — live in the user-level global `~/.claude/CLAUDE.md` under "Shared Repo Rules — Next.js Projects (DEV)" and apply here without repetition. Repo-specific deltas:

- No pre-commit hooks configured — before any authorized commit/push run `npm run check` (ESLint + tsc) manually; project-wide rule-offs only in the central ESLint config.

## Skills

Skills live in `.agents/skills/` (source of truth; `skills-lock.json` is the install record). Before an action matching "Use for" below, read only that skill's `SKILL.md`. At most one skill for small changes; load more only when the task genuinely spans several domains — and never for tiny copy/style edits.

| Skill | Use for |
| --- | --- |
| `accessibility` | WCAG, ARIA, keyboard navigation, focus, contrast |
| `agents-md-maintainer` | Syncing AGENTS.md with skills, scripts, workflows, hooks |
| `bash-defensive-patterns` | Production-grade shell scripts and CI/CD shell steps |
| `composition-patterns` | Component APIs: children, slots, compound components |
| `deploy-to-vercel` | Vercel preview/production deployments |
| `drizzle` | Drizzle ORM schemas, queries, migrations |
| `frontend-design` | Layout, visual hierarchy, responsive UI, polish |
| `next-best-practices` | App Router, RSC, Server Actions, async APIs, routing, metadata |
| `next-cache-components` | `use cache`, cache lifetimes, tags, revalidation |
| `next-upgrade` | Next.js upgrades and codemods |
| `nodejs-backend-patterns` | API route handlers, server logic, middleware, errors |
| `nodejs-best-practices` | Node.js architecture, async, security, performance |
| `react-best-practices` | Writing/refactoring React components, rerender hygiene |
| `seo` | Metadata, sitemap, robots, Open Graph, structured data |
| `shadcn` | Adding, fixing, styling, composing shadcn/ui components |
| `tailwind-css-patterns` | Tailwind utilities, responsive layouts, dark mode |
| `tailwind-v4-shadcn` | Tailwind v4 + shadcn/ui setup, theming, CSS variables |
| `typescript-advanced-types` | Generics, conditional/mapped types, narrowing |
| `weekly-blog-topic-planner` | Planning weekly blog topics for the marketing blog |
| `zod` | Zod schemas, parsing, composition, inference |

Sync rule: keep this table aligned with the actual directories in `.agents/skills/`. Read a new skill's `SKILL.md` before documenting it; if its trigger is unclear, write `PENDING: review trigger for <skill>`.

## Project Overview

Gold Painting marketing site and lead-capture app (Next.js App Router).

| Area | Location | Stack |
| --- | --- | --- |
| App Router | `src/app/` | Next.js 16, React 19, Server Components |
| Components | `src/components/`, `src/app/components/` | React 19, TypeScript, Tailwind CSS 4 |
| Database | `src/server/db/`, `drizzle.config.ts` | Drizzle ORM, Postgres.js |
| Content | `doc/`, `src/app/content/`, `src/app/blog/` | Markdown-driven marketing and blog content |
| Styles | `src/styles/globals.css` | Tailwind CSS 4, CSS-first theme tokens |
| APIs | `src/app/api/` | Next.js Route Handlers |
| Tooling | root configs | ESLint, Prettier, TypeScript, Drizzle Kit |

Verified repo notes (do not assume otherwise):

- `package.json` has NO `test`, `test:e2e`, or `db:*` scripts. Verify any database workflow with the user before running Drizzle commands.
- `drizzle.config.ts` points to `./src/server/schema.ts`, but the actual schema is `src/server/db/schema.ts`; no `migrations/` directory exists.
- Marketing/service copy comes from the Markdown content flow in `doc/` and `src/app/content/` — change the `.md` first, then render from it. Do not invent or replace that content without explicit request.
- No git hooks are configured; do not assume Husky/Lefthook.

## Commands

Verified scripts (`npm run`, npm 11.x):

```bash
npm run dev
npm run build
npm run start
npm run preview
npm run check          # lint + tsc
npm run lint / lint:fix
npm run typecheck
npm run format:check / format:write
```

For tiny visual or copy changes, run the smallest relevant validation only when it adds real signal (usually `typecheck` or nothing). Do not run `build` by default. Do not invent or rename commands.

## Code Quality

- ESLint + Prettier + strict TypeScript; avoid `any`; let the compiler infer return types.
- Named exports except Next.js pages/layouts; absolute imports via `@/`.
- Never reformat unrelated files.
- Env vars: validate through the project env layer; never read `process.env` directly in app code; never read, print, or store secret values.
- No unnecessary `useEffect`; no `useMemo`/`useCallback` without a documented exception; use `React.ReactNode`.
- Tailwind CSS 4 utilities and existing theme tokens; reuse shared components before creating new ones.

## Model Routing

Plan expensive, execute cheap. For medium/large changes (several files, new behavior, architecture, DB/auth): do the analysis and a written implementation plan with the strongest available model (Opus-class), hand implementation to a cheaper model (Sonnet-class; Haiku-class for mechanical edits), then review the diff against the plan on the strong model. Plans for a cheaper executor must be self-contained: exact file paths, current-state code excerpts, this repo's check-gate commands as verification steps, an explicit out-of-scope list, and STOP conditions. Tiny one-file changes skip the split — plan/delegate overhead costs more than it saves.

## Integrated Browser

When a change affects visible UI, when debugging layout/hydration/console errors, or when the user asks, verify it in the agent's own integrated browser against the local dev server — `npm run dev`, default `http://localhost:3000` — instead of asking the user for screenshots. Integrated browser means the browser built into the agent's native app: Claude Code Browser pane (`mcp__Claude_Browser__*` tools), Codex app browser. NEVER use the Playwright MCP, chrome-devtools MCP, `playwright-cli`, or anything that opens an external Google Chrome window for this — those are only for explicit Playwright/E2E test requests. Reuse a running dev server; never start a second instance on another port without saying so. Skip for logic-only changes with no visual surface.

## Installed Plugins / Extensions

Use the tooling already installed instead of reinventing it or giving a generic answer. In Claude Code these are plugins (skills, agents, slash commands, MCP servers, hooks); in Codex they are complementos/extensiones. Before doing a task by hand, check whether an installed plugin/complemento already covers it — a dedicated MCP for a service, a domain skill, a review agent, a workflow command — and prefer the most specific installed tool. Do not install new ones or enable disabled ones on your own; only use what is installed, and if a clearly-relevant one is missing, say so and let the user decide.

## Validation Timing

Do NOT run `npm run check`, lint, typecheck, build, format, `npm audit`, or test suites after ordinary small edits — they are slow and block the next change. Make the edit and hand it back with a short summary; rely on the editor to surface type/lint errors while iterating. Run the check gate ONLY when the user says to ship / deploy / "mandar todo a producción", when the user explicitly asks to run it, or immediately before an authorized commit/push. The single exception: a change to build config, dependencies, migrations, or CI where a broken build is likely — then name the one command you want to run and why, and run only that. This overrides any softer per-change validation wording above.