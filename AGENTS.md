# FarhadLafarie — agent guide

Personal portfolio site for **Farhad Lafarie** (Next.js App Router). Deployed on Vercel.

## Repository layout

| Path | Role |
|------|------|
| `app/` | Next.js routes (`/`, `/cv/`, `/portfolio/`), root layout, navbar |
| `components/` | UI sections (featured, projects, stack, contact, scroll, vibe) |
| `content/` | **Single source of truth** for portfolio copy/data (`site.ts`, `projects.ts`, `modes.ts`, …) |
| `context/` | Mode switcher + vibe (sketch) context |
| `public/` | Static assets (logo, PDF, characters) |
| `styles/` | Global + portfolio CSS |
| `app/cv/` | CV HTML sources and `/cv` page |

**Package manager:** pnpm. **Framework:** Next.js 16, React 19, Tailwind 4, GSAP/Lenis.

## Canonical CV

| File | Role |
|------|------|
| **`app/cv/cv-tailwind-dev.html`** | **The CV.** Edit this file for all CV content changes. `/cv` serves this file. |
| `app/cv/cv-tailwind.html` | Older / alternate Tailwind CV — do **not** treat as source of truth unless asked. |
| `app/cv/cv.html` + `cv.css` | Legacy CV assets. |
| `public/FarhadLafarieCV.pdf` | PDF download linked from portfolio (`SITE.meta.cvUrl`). Regenerate from the HTML when content is final. |

Rules for CV work:

- Only update **`app/cv/cv-tailwind-dev.html`** unless the user names another file.
- Do **not** re-duplicate CV copy into `app/cv/page.tsx` as separate React markup — that page must load the HTML file.
- Print/layout tweaks go in the HTML file’s styles.

## Portfolio projects

- Live project cards come from **`content/projects.ts`** (wired via `content/site.ts` → `ProjectsSection`).
- Mode-featured IDs live in **`content/modes.ts`** (`featuredProjectIds`).
- **Do not add, remove, or rewrite projects** unless the user explicitly asks (e.g. “add project X” / “update projects”). When they do, update `content/projects.ts` and, if relevant, featured IDs + `SITE.stats.projects`.
- CV project sections in the HTML and portfolio projects may diverge until the user asks to sync them.

## Content & modes

- Modes: `devops` · `developer` · `content-creator` (`content/modes.ts`, `context/ModeContext.tsx`).
- Shared site meta, nav, contact, stats: `content/site.ts`.
- Prefer editing `content/*` over hardcoding strings in components.

## Agent rules

- Prefer small, focused diffs. Do not drive-by refactor.
- Do not commit unless the user asks.
- Do not invent project metrics, links, or employment claims — only use what the user provides or what already exists in the canonical CV / content files.
- Keep SEO routes (`app/sitemap.ts`, `app/robots.ts`) consistent with real pages.
- `trailingSlash: true` in `next.config.js` — external/sitemap URLs should include trailing slashes where applicable.

## Common commands

```bash
pnpm install
pnpm dev      # local dev server
pnpm build
pnpm start
```

## When the user updates projects

1. Wait for their list/details (or HTML edits they made).
2. Update **`content/projects.ts`** as instructed.
3. If they also want the CV updated, edit **only** `app/cv/cv-tailwind-dev.html`.
4. Adjust `featuredProjectIds` / stats only if they ask or a new project is meant to be featured.
