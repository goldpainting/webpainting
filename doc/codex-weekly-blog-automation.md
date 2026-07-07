# Codex Automation: Weekly Blog Topic Recommendations

This project should use Codex App Automations, not Windows Task Scheduler.

Skill draft:

- `doc/codex-skills/weekly-blog-topic-planner/SKILL.md`

The current sandbox did not allow writing directly to `.agents/skills`, so install the skill by copying that folder to:

```text
.agents/skills/weekly-blog-topic-planner/
```

After it is installed, Codex can invoke it as:

```text
$weekly-blog-topic-planner
```

## Recommended Automation Type

Create a standalone project automation in the Codex app.

Use a worktree if you want every automation run isolated from local changes. Since this automation should only recommend topics and not edit files, either worktree or local mode is acceptable.

## Schedule

Weekly:

- Tuesday
- 10:00 AM

If the Codex app asks for cron syntax, use:

```text
0 10 * * 2
```

## Automation Prompt

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

## Notes From OpenAI Docs

Codex Automations run recurring tasks in the background and can report findings to Triage. Project-scoped automations require the machine running the local Codex app to be on, Codex to be running, and the selected project to exist on disk when the run starts.

Automations can use skills, so this setup explicitly calls `$weekly-blog-topic-planner` to keep the recurring workflow consistent.
