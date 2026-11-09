# Word

The first complete concept website for Word, a fictional contemporary architecture
studio, built with Astro, TypeScript, and Tailwind CSS. The visual direction follows
the GPT Taste image-first workflow: six section references and four standalone
architectural images were generated before implementation.

## Development

Requires Node.js compatible with the installed Astro version and npm.

```sh
npm ci
npm run dev
```

The development server defaults to `http://localhost:4321`.

```sh
npm run check    # Astro and TypeScript diagnostics
npm run build    # Check, then generate the static site in dist/
npm run preview  # Serve the production build locally
```

## Structure

- `src/layouts/BaseLayout.astro`: shared document shell and page metadata.
- `src/styles/global.css`: Tailwind entry point, theme tokens, and responsive styles.
- `src/data/site.ts`: studio metadata and typed planned section identifiers.
- `src/pages/index.astro`: composes the six page sections.
- `src/components/sections/`: hero, studio, projects, philosophy, services, contact.
- `src/components/`: navigation, footer, and the shared arrow icon.
- `src/data/projects.ts`: typed fictional concept study content and image imports.
- `src/scripts/site.ts`: reveal effects, navigation, dialogs, and local enquiry builder.
- `src/assets/images/`: four original AI-generated images, optimized by Astro.
- `public/`: files served without processing, including the favicon.
- `output/references/`: six generated section references and the exact prompt set
  in `prompts.json`, produced with the built-in image generation tool.
- `design.md`: original brief, preserved unchanged for the next design stage.

## Interactions and limitations

The site includes responsive navigation, native project dialogs, expandable service
descriptions, and subtle progressive reveal effects. Motion respects reduced-motion
preferences. DM Sans is self-hosted through Fontsource; no external font requests
are required. GSAP is unnecessary for the current interactions.

The contact form validates the fields and prepares a downloadable text brief entirely
in the browser. It does not send messages, store submissions, or connect to a backend.
Submission stays disabled without JavaScript. A real contact destination and delivery
integration must be supplied before using this as a client enquiry channel.

Projects and imagery are fictional concept studies. There are no claims of built
commissions, awards, clients, or studio locations. Word remains the working brand;
the supplied brief also mentions Atelier Norte. No deployment is configured.

## Verification

`npm run build` includes Astro and TypeScript checks and static image generation.
There is currently no automated unit or browser test suite. For UI changes, check
mobile and laptop layouts, navigation, keyboard focus, dialog open/close behavior,
service expansion, and enquiry validation/download in a browser.
