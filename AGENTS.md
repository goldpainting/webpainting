<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# Repository Agent Instructions

How AI coding agents must work in this repository. The user describes changes in plain natural language; the agent infers the workflow, keeps token usage minimal, and protects the repo.

## Context Loading

`CLAUDE.md` must contain only `@AGENTS.md`. Never `@`-import skills, docs, or other files into session context — they are read on demand, per task.

## Natural Language First

The user says things like "make these titles fit on one line on desktop" — nothing more. From that, the agent infers the size and risk of the change, the relevant files, whether SDD/OpenSpec or Engram is needed, and the smallest sufficient validation. Never require the user to name modes, workflows, or tooling; this file controls that behavior.

## Language Contract

- Replies to the user: always Spanish.
- Code, comments, UI copy, docs, commits, PRs, and all generated artifacts: English, unless the user explicitly requests otherwise or the existing project context requires it.

## Token Budget (hard rules)

- Use the smallest workflow that safely solves the task.
- Read only files likely relevant to the change. Never crawl the repo or `node_modules`.
- No web search unless the task needs current external information or the user asks.
- No subagents for tiny or local changes.
- No SDD/OpenSpec artifacts for tiny direct changes.
- Do not read skills or documentation for small copy, typography, spacing, color, or Tailwind-class edits.
- Engram: at most ~3 calls before implementation; only when continuing prior work or recording a real decision.
- Never store screenshots, base64 images, logs, or large code dumps in Engram, specs, or prompts. If the user provides an image, summarize the visual issue in 1-2 sentences.
- If a small task grows, stop and explain before escalating.

## Automatic Work Mode Selection

Classify every implementation request silently — the user never names the mode. There is no mode called "SDD Lite".

| Mode | Use when | Behavior |
| --- | --- | --- |
| `DIRECT` | Tiny, low-risk change in 1 file or a small local area: copy, typography, spacing, color, Tailwind classes, a label, a typo, an isolated bug fix | No SDD, no subagents, no web, no broad reading; touch only the exact files |
| `SDD CONTROLLED` (`strict_tdd: false`) | 1-3 related files; limited UI behavior, component structure, validation, data fetching, or tests; reversible; no new architecture | Short plan and traceability only when useful; no RED/GREEN/REFACTOR; at most 1 focused skill |
| `SDD STRICT` (`strict_tdd: true`) | 4+ files; database schema/migrations, middleware, caching, routing, public APIs, server actions, security, CI; new features or integrations; ambiguous or high-risk work; user explicitly asks for SDD/TDD | Full SDD/OpenSpec discipline, Engram recovery, small batches, verification |

Tie-breaks: DIRECT vs CONTROLLED → choose DIRECT and stop if scope grows. CONTROLLED vs STRICT → choose STRICT. If the user explicitly picks a mode, follow it unless unsafe. Never turn a tiny visual change into SDD STRICT.

Escalation: DIRECT → CONTROLLED when more files or non-trivial behavior appear; CONTROLLED → STRICT when architecture, database, cache, routes, public APIs, or a 4th file appears. De-escalate only after explaining why.

### Workflow per mode

`DIRECT`: inspect only the exact relevant files → tell the user briefly in Spanish (small direct change, likely files, short plan) → wait for approval only if the user asked to approve first or the impact is not obvious → make the minimal change → run the smallest relevant validation only when it adds real signal → summarize in 1-3 lines.

`SDD CONTROLLED`: check `git status` → inspect only relevant files → keep proposal/tasks short, and only when they truly help or the user asked → explain briefly in Spanish (workflow, files, plan, validation) → wait for approval unless risk is trivial → smallest coherent change → relevant checks only → save an Engram memory only for real decisions or non-trivial fixes → summarize.

`SDD STRICT`: recover Engram context → check `git status` and OpenSpec state (initialize SDD context if missing; reuse an active relevant change) → proposal/design/tasks before implementing → explain in Spanish (change name, files, plan, validation strategy, risks) → wait for explicit approval → apply in small batches → verify against specs → run relevant checks → sync/archive after verification with approval → save an Engram session summary.

## Next.js Documentation Rule

Read the relevant installed doc under `node_modules/next/dist/docs/` only when the task depends on Next.js behavior (routing, Server Components, caching, metadata, route handlers, middleware/proxy, App Router conventions). Never for visual-only Tailwind, copy, typography, or spacing edits. Read only the exact relevant file; if it is missing, fall back to local skills and installed versions — do not fail the task.

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

## Commits and PRs

Conventional commits without scope: `type: short specific summary` (feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert). Never add Co-Authored-By or AI attribution. Run relevant checks before committing; screenshots for visible UI changes; no unrelated formatting churn. Never commit, push, or open a PR without explicit user approval.

## Commit & Push Integrity (MANDATORY)

Two absolute anti-cheating rules — suppressing a problem is not fixing it.

1. **Never disable linters/formatters to force a pass.** Do NOT add `eslint-disable` / `eslint-disable-next-line`, `@ts-ignore`, `@ts-expect-error`, a `// prettier-ignore`, or blanket rule-offs just to silence a warning or error. Fix the real cause (refactor deprecated APIs, use proper types, mark decorative elements `aria-hidden`, etc.). A rule that genuinely does not apply project-wide may be turned off once in the central ESLint config with a justifying comment — never silenced inline per file or per line, and never the Prettier formatter.
2. **Never bypass the commit/push gate.** This project currently has no pre-commit hooks configured, so before any authorized commit/push run `npm run check` (ESLint + tsc) and fix every reported error at its real cause; only then `git commit` and push. If Husky/lint-staged hooks are added later, never skip them with `git commit --no-verify` / `-n` or `HUSKY=0` — fix the errors instead.

## Engram Memory

Use Engram only for: continuing prior work ("continúa", "retoma", "vengo de otro agente"), meaningful decisions, non-trivial bug fixes, architecture/DB/integration changes, end-of-session summaries, and cross-agent handoffs (objective, files changed, commands run, risks, next safe step). Never store secrets, `.env` values, base64, screenshots, logs, or code dumps. Not for tiny visual or copy edits.

## GGA Code Review

GGA (Gentleman Guardian Angel) reviews staged files on pre-commit when `.gga` exists. Point its `RULES_FILE` to a short review file (e.g. `docs/CODE-REVIEW.md`), never this manual. Treat failures as real review feedback and fix the reported violations; never bypass with `git commit --no-verify` (see Commit & Push Integrity above).

## Final Safety Rules

- Never commit, push, deploy, or run migrations without explicit user approval.
- Never expose secrets or `.env` values; keep `.env*` out of git.
- Never overwrite or revert unrelated work.
- Never run destructive database operations without explicit approval.
- Never convert a tiny visual change into a full SDD STRICT workflow.
- If unsure, ask one concise question in Spanish and stop.
