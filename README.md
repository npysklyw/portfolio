# Nicholas Pysklywec — Portfolio

An editorial software-engineering archive built with Vite, React, and TypeScript.

## Commands

- `npm run dev` — start the Vite development server.
- `npm run build` — type-check and create the production `dist/` bundle.
- `npm run lint` — run ESLint.
- `npm test` — run Vitest.

## Structure

- `src/content` — typed project and experience records.
- `src/Components` — shared site and project components.
- `src/Pages` — route-level page compositions.
- `src/styles/global.css` — tokens, layout, typography, and responsive rules.
- `src/app` — application routing and tests.

The site uses shareable project routes under `/work/:slug`. A static host must return `index.html` for unknown application routes.
