---
name: weekly-blog-topic-planner
description: Plan weekly SEO blog topics for the Gold Lion Painting Next.js project. Use this skill whenever the user asks for recurring blog ideas, Codex Automations for blogs, weekly content planning, painting company blog topics, SEO blog recommendations, or avoiding duplicate blog topics in this repository. This skill is designed for Codex Automations and should be explicitly invoked with $weekly-blog-topic-planner in scheduled prompts.
---

# Weekly Blog Topic Planner

## Purpose

Recommend 2 publishable blog topics per weekly run for the Gold Lion Painting website without repeating existing blog topics. The output should help the user show topic ideas to the business owner before asking Codex to write and publish the approved posts.

This skill is for recommendations only. Do not publish or edit blog code unless the user explicitly asks to create the approved posts.

## Project Context

The project is a Next.js App Router site for Gold Lion Painting Inc. Blog content is stored in:

- `src/app/blog/blogData.ts`
- `src/app/blog/[slug]/page.tsx`
- `src/app/blog/category/[category]/page.tsx`

The known blog categories are defined in `blogData.ts`. Always read that file first because categories and published posts may change.

## Weekly Automation Workflow

When this skill runs from a Codex Automation:

1. Read `src/app/blog/blogData.ts`.
2. Extract the current blog categories, titles, slugs, categories, and excerpts.
3. Build a "do not repeat" list from exact titles, exact slugs, close topic variants, and already-covered angles inside existing excerpts.
4. Choose 2 new topics that fit existing categories.
5. Prefer categories that have fewer recent posts, unless a stronger SEO opportunity exists.
6. Research current search intent when internet access is available.
7. Prioritize official or primary sources for factual support:
   - EPA or government sources for lead paint, safety, older homes, weather, or environmental claims.
   - Paint manufacturer docs for product, finish, color, or prep guidance.
   - Project pages in this repo for local internal-link targets.
8. Return findings in the automation run/inbox. Do not make file changes by default.

## Topic Selection Rules

Choose topics that are specific enough to rank and different enough from existing posts.

Good topic patterns:

- local service + problem:
  - `How Florida Sun and Humidity Affect Exterior Paint`
  - `Hairline Stucco Cracks Before Painting: What Florida Homeowners Should Know`
- local area + service:
  - `Best Interior Paint Colors for Bradenton Living Rooms`
  - `Cabinet Painting Ideas for Lakewood Ranch Kitchens`
- comparison/search intent:
  - `Eggshell vs. Satin Paint for Florida Homes`
  - `Painted Cabinets vs. Replacing Cabinets`
- seasonal/maintenance:
  - `How to Maintain Stained Front Doors in Florida Sun`
  - `When to Wash a Painted Exterior in Coastal Florida`

Avoid topics that are too close to existing posts, even if the title is different. For example, if there is already a post about signs a Florida home needs exterior paint, do not suggest another general exterior repaint warning-sign article.

## Required Output Format

Return exactly 2 topic recommendations in Spanish explanation, but keep publish-facing titles in English because the website blog is in English.

Use this format:

```markdown
## Weekly Blog Recommendations

### Blog 1
- Category: [exact category from blogData.ts]
- Suggested title: [English SEO title]
- Suggested slug: [kebab-case slug]
- Target keyword: [primary keyword]
- Secondary keywords: [3-5 related keywords]
- Why this does not repeat existing posts: [short explanation]
- Recommended angle: [short content direction]
- Suggested internal links:
  - /example
  - /blog/example
- Research/source notes:
  - [source name]: [URL]

### Blog 2
- Category: [exact category from blogData.ts]
- Suggested title: [English SEO title]
- Suggested slug: [kebab-case slug]
- Target keyword: [primary keyword]
- Secondary keywords: [3-5 related keywords]
- Why this does not repeat existing posts: [short explanation]
- Recommended angle: [short content direction]
- Suggested internal links:
  - /example
  - /blog/example
- Research/source notes:
  - [source name]: [URL]

## Recommendation
[One short sentence explaining which one should be prioritized first and why.]
```

## Internal Link Guidance

Use varied internal links that support the topic. Prefer these when relevant:

- `/blog`
- `/interior-painting`
- `/exterior-painting`
- `/cabinet-painting`
- `/color-consultation`
- `/warranty-service`
- `/bradenton`
- `/lakewood-ranch`
- `/sarasota`
- `/siesta-key`
- `/ana-maria`
- `/palmetto`
- existing related `/blog/[slug]` posts

Do not invent routes. Confirm routes locally before recommending them when possible.

## Publication Boundary

If the user later says to publish approved topics:

1. Read `AGENTS.md`.
2. Read the relevant Next.js docs under `node_modules/next/dist/docs/` before coding.
3. Follow existing blog patterns in `blogData.ts` and `src/app/blog/[slug]/page.tsx`.
4. Add FAQ data if the post should include FAQ schema.
5. Run the smallest relevant verification, usually:
   - `npm run typecheck`
   - `npm run build` when routes or metadata are affected

Do not publish during the weekly recommendation automation unless the automation prompt explicitly says publishing is allowed.

## Automation Prompt Template

Use this exact prompt for a Codex standalone project automation:

```markdown
$weekly-blog-topic-planner

Every Tuesday at 10:00 AM, review the current Gold Lion Painting project blog section and recommend 2 new SEO blog topics that have not already been published.

Scope:
- Read `src/app/blog/blogData.ts`.
- Identify existing blog categories, titles, slugs, excerpts, and covered angles.
- Recommend exactly 2 new topics in existing categories.
- Do not edit files.
- Do not publish posts.
- Keep the blog titles in English.
- Explain in Spanish why each topic is not a duplicate.
- Include target keyword, secondary keywords, suggested slug, suggested internal links, and source notes.
- Prefer official or primary sources when internet access is available.

Report the recommendations in Triage/inbox only. If no genuinely new topic is available, report that clearly and suggest categories that need more research.
```
