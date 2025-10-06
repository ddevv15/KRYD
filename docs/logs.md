# Project Logbook (KRYD)

This logbook records every user prompt and the tasks performed, to enable clear traceability and easy rollback to specific implementation moments.

Policy:

- Append a new entry for each significant action or change.
- Include the exact user prompt content when applicable.
- Never delete or rewrite past entries; use new entries to correct mistakes.

---

## 2025-10-06 — LOG-0001

**User Prompt**

> do not start working yet, get an better understanding of the project firs t

**Action Taken**

- Prepared a structured discovery questionnaire covering goals, audience, IA, branding, functionality, tech, SEO, accessibility, and timeline.
- Paused implementation pending user responses.

**Files Affected**

- None

---

## 2025-10-06 — LOG-0002

**User Prompt**

> add a logs.md file which will store all the user prompts, what task was done, and act as a logbook for the project, so we can go back to that particular implementation of the project if something goes wrong, you should update it everytime any changes are made to the project

**Action Taken**

- Created `docs/logs.md` (this file) to capture prompts and actions.
- Planned creation of `docs/activity.md` to mirror entries per process documentation rule.

**Files Affected**

- docs/logs.md (NEW)
- docs/activity.md (NEW)

---

## 2025-10-06 — LOG-0003

**User Prompt**

> lets not work with the version control yet, I have not set up the vcs yet will do later, lets work on the project itself as of right now

**Action Taken**

- Paused all version control operations (add/commit/push).
- Agreed to proceed with project implementation tasks only.

**Files Affected**

- docs/logs.md (UPDATED)
- docs/activity.md (UPDATED)

---

## 2025-10-06 — LOG-0004

**User Prompt**

> Proceed with project work (pause VCS). Begin website blueprint and implementation plan.

**Action Taken**

- Kicked off blueprint creation covering: Site Architecture, Component Plan, Design System, Tech Stack validation, SEO & Performance, Deployment plan.
- Will align the plan to existing Next.js + TypeScript app structure in `app/` and `components/`.

**Files Affected**

- docs/logs.md (UPDATED)

---

## 2025-10-06 — LOG-0005

**User Prompt**

> lets not work with the version control yet, I have not set up the vcs yet will do later, lets work on the project itself as of right now

**Action Taken**

- Delivered full website blueprint and implementation plan covering architecture, components, design system, stack/tooling, SEO/performance, deployment.

**Files Affected**

- docs/logs.md (UPDATED)
- docs/activity.md (UPDATED)

---

## 2025-10-06 — LOG-0006

**User Prompt**

> lets not downgrade the version of react, update the files to use the most stable, and latest version of react, so in future we do not have to downgrade again

**Action Taken**

- Replaced `vaul` drawer with Radix Dialog-based drawer in `components/ui/drawer.tsx` compatible with React 19.
- Removed `vaul` from `package.json` and reinstalled dependencies.
- Started dev server to verify runtime.

**Files Affected**

- components/ui/drawer.tsx (UPDATED)
- package.json (UPDATED)

---

## 2025-10-06 — LOG-0007

**User Prompt**

> I wish to resize the logo, in the whole site, where do I make the changes in order to resize it, do not change it as I wish to do so manually just point me to the correct file

**Action Taken**

- Located all `Logo` usages and identified files/lines where size is controlled via Tailwind classes.
- Provided pointers to edit className props per usage; suggested optional centralized default in `components/logo.tsx`.

**Files Affected**

- docs/logs.md (UPDATED)

---

## 2025-10-06 — LOG-0008

**User Prompt**

> Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties... why do we have this hydration error?

**Action Taken**

- Inspected `app/layout.tsx`, `app/page.tsx`, and `hooks/use-mobile.ts` for SSR/client-only divergence.
- Identified mismatch on `<body>` attributes injected by a browser extension (e.g., Grammarly), matching the error diff.
- Provided mitigation steps: disable extensions/incognito to verify; optionally add `suppressHydrationWarning` on `<body>`; avoid client-only dynamic values during SSR.

**Files Affected**

- docs/logs.md (UPDATED)

---

## 2025-10-06 — LOG-0009

**User Prompt**

> I have a potential edit, how about we add the site header, to the hero section it self and make it one single, page do not start working yet discuss with me first and then start the implementation, in future we are planning to change the background of the hero page's background

**Action Taken**

- Discussed options and trade-offs for moving `SiteHeader` into `Hero` vs keeping separate with visual overlap; no code changes yet per request.
- Captured clarifying questions (sticky behavior, transparency, reuse across pages, background strategy).

**Files Affected**

- docs/logs.md (UPDATED)

---

## 2025-10-06 — LOG-0010

**User Prompt**

> include a gitignore file, in the project

**Action Taken**

- Added a Next.js/Node-appropriate `.gitignore` including node_modules, .next, env, and editor/OS files.

**Files Affected**

- .gitignore (NEW)

---

## 2025-10-06 — LOG-0011

**User Prompt**

> @https://ddevv15.github.io/images/KRYD.png convert the logo and all the other images to next/image, it would be helpful in future as well right?

**Action Taken**

- Migrated raw `<img>` to `next/image`:
  - `components/logo.tsx` now uses `next/image` with fixed width/height.
  - `components/sections/client-showcase.tsx` images converted to `next/image`.
- Verified TypeScript and lints pass.

**Files Affected**

- components/logo.tsx (UPDATED)
- components/sections/client-showcase.tsx (UPDATED)

---

## 2025-10-06 — LOG-0012

**User Prompt**

> Use a relative import via the public directory... make the relative path based on our basePath and fix the issue

**Action Taken**

- Updated `components/logo.tsx` to statically import `public/images/KRYD.png` and pass to `next/image`.
- Updated `components/sections/client-showcase.tsx` to statically import all client logos from `public/` and pass to `next/image`.
- No changes made to `next.config.mjs` per instruction.

**Files Affected**

- components/logo.tsx (UPDATED)
- components/sections/client-showcase.tsx (UPDATED)

---

## 2025-10-06 — LOG-0013

**User Prompt**

> Fix incorrect static imports '@/../public/...'. Replace with '@/public/...'. Verify build.

**Action Taken**

- Searched repo for '@/../public' and '../public' imports.
- Updated imports to '@/public/...':
  - `components/logo.tsx` // <CHANGE>
  - `components/sections/client-showcase.tsx` // <CHANGE>
- Build succeeded (`npm run build`).

**Files Affected**

- components/logo.tsx (UPDATED)
- components/sections/client-showcase.tsx (UPDATED)
