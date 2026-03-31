# Axonary Cursor rules hub

All project SEO, content, governance, and workflow rules for the AI agent live in **`rules/*.mdc`**.

## Files

| File | Role |
|------|------|
| `rules/axonary-core.mdc` | **`alwaysApply: true`** — global contract, forbidden patterns, pointers |
| `rules/seo-rules.mdc` | Intent, keywords, on-page, NLP, linking, meta, schema, **URL registry** |
| `rules/content-rules.mdc` | Voice, tone, formatting, conversion copy |
| `rules/governance.mdc` | QA checklist, publishing, CRO, metrics, update log |
| `rules/workflow.mdc` | Page-by-page process and iteration |

**Note:** Cursor loads `.mdc` rules from `rules/` automatically. A root `/.cursorrules` file is **not** used in this repo — enforcement is via `axonary-core.mdc`.

## Legacy paths removed

Root `.cursorrules`, root `.seo-rules`, and `guard-structure/` were retired in favor of this folder.
