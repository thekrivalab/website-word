# Project guidance

## Purpose and current scope

Word is a fictional premium contemporary architecture studio specializing in
residential architecture, minimalist interiors, and sophisticated architectural
experiences. The website will showcase projects, communicate the studio's
philosophy, and attract prospective high-end residential clients.

The initial brief also mentions Atelier Norte. Use Word as the working public
brand unless the user changes it. Read `design.md` for the brief and pending design
decisions, and `README.md` for setup information.

This project is currently a foundation only. Preserve the placeholder page until
the user requests implementation. The planned sections are hero, studio
introduction, selected projects, design philosophy, services, and contact. Do not
build these sections, invent project details, or finalize visual direction as part
of setup or documentation work. Apply the dedicated design skill and visual
references when provided for the design stage.

## Tech stack

- Astro with static output, configured in `astro.config.mjs`.
- TypeScript using `astro/tsconfigs/strict`.
- Tailwind CSS through `@tailwindcss/vite`, imported in `src/styles/global.css`.
- npm with `package-lock.json` as the dependency lockfile.
- GSAP is not installed; add it only if requested motion requires it.

Use a Node.js version compatible with the installed Astro package. Consult
`package.json` and `package-lock.json` for dependency versions rather than assuming
a specific framework version.

## Coding conventions

- Prefer Astro components and static HTML; add browser JavaScript only for an
  interaction that requires it. Do not introduce a client framework by default.
- Use strict types, explicit component `Props` interfaces, and type-only imports
  where appropriate. Avoid `any` and unexplained type-check suppressions.
- Follow existing formatting: two-space indentation, single quotes in TypeScript
  and JavaScript, semicolons, and double quotes in markup attributes.
- Use PascalCase for component and layout files, camelCase for variables and
  functions, and descriptive kebab-case HTML IDs.
- Use the configured `@/*` alias for imports from `src/`.
- Keep studio metadata and shared content in `src/data/`, rather than duplicating
  strings across components. Preserve the typed section IDs in `src/data/site.ts`.
- Prefer Tailwind utilities for layout and responsive styling. Define shared
  design tokens in the existing CSS `@theme` block; use scoped component CSS for
  styles that need it. Current colors and typography are provisional.
- Build responsive layouts from small screens upward. Preserve semantic HTML,
  heading order, keyboard access, visible focus states, the skip link, and its
  `main-content` target. Supply meaningful image alternatives and respect reduced
  motion when animation is introduced.
- Keep changes focused on the request. Preserve unrelated work and avoid adding
  dependencies or abstractions without a concrete need.
- Do not edit generated files in `dist/`, `.astro/`, or `node_modules/`. Keep secrets
  out of source control; environment files are ignored.

## Component and file organization

- `src/pages/`: file-based routes; `index.astro` currently contains the placeholder.
  Keep future page files focused on composing layouts and sections.
- `src/layouts/`: shared document shells. `BaseLayout.astro` owns metadata, global
  styles, document language, and the skip link.
- `src/components/`: currently empty. Place reusable `.astro` UI here. When section
  implementation is requested, group page sections in `src/components/sections/`
  and create additional groups only when needed.
- `src/data/`: typed metadata and shared content; `site.ts` defines the studio and
  planned sections.
- `src/styles/`: Tailwind entry point, theme tokens, and shared base styles.
- `src/assets/`: images and assets intended for Astro processing. Prefer Astro's
  image pipeline for future content photography.
- `public/`: files served unchanged, referenced by root-relative URLs.
- `design.md`: design brief and pending decisions; update it when the user approves
  a direction. `README.md` documents developer setup and project structure.

## Autonomous development workflow

Within the user's requested scope, proceed without additional confirmation for
routine project inspection, local source and documentation edits, focused
refactoring, bug fixes, dependency installation needed for authorized work,
development servers, checks, tests, and production builds. Make reasonable routine
implementation choices and carry the task through validation.

This authorization does not expand the requested scope: do not implement the
website while only foundation work is requested. Do not publish, deploy, push,
perform destructive cleanup, or change external services without user
authorization. Respect tool and sandbox permission requirements.

1. Read the relevant source, `design.md`, and any more specific `AGENTS.md` before
   editing. Inspect existing work and preserve unrelated changes.
2. Install dependencies with `npm ci` when needed. For intentional dependency
   changes, use npm and keep both package files consistent.
3. Use `npm run dev` for local development (normally `http://localhost:4321`).
4. Implement only the authorized change, following the existing structure.
5. Run validation appropriate to the change and resolve failures caused by it.
6. Report the result, checks performed, and any remaining limitations. Update
   documentation when setup, scripts, or structure change.

## Testing and builds

```sh
npm ci           # Install the locked dependencies
npm run dev      # Start the development server
npm run check    # Run Astro and TypeScript diagnostics
npm run build    # Run astro check, then generate the static site in dist/
npm run preview  # Serve the existing production build locally
```

There is currently no automated unit or browser test suite, test script, lint
script, or formatter configuration. Do not claim these checks exist or add test
infrastructure for documentation-only work.

For source or configuration changes, run `npm run build`; it already includes
`npm run check`, so a separate check is unnecessary unless useful during iteration.
For documentation-only changes, review accuracy against the files and scripts;
a production rebuild is normally unnecessary.

When UI work is authorized, inspect relevant mobile and desktop layouts and
keyboard behavior in an available browser. For future behavior or logic changes,
add focused tests where meaningful. Run any relevant tests introduced by the
change, and report browser or test verification that could not be performed.
