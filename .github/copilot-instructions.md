## Conversly — Copilot instructions for code changes

Purpose: help AI coding agents get productive quickly in this repository by documenting the project shape, key files, concrete edit examples, and developer commands.

- Quick commands
  - Install & run dev server: `npm install` then `npm run dev` (Next.js App Router on port 3000)
  - Build for prod: `npm run build` then `npm start`
  - Lint: `npm run lint` (ESLint + Next.js config)

- Big picture (what to know first)
  - Next.js 16 App Router + TypeScript. The app lives in `app/` (root-level layouts + page). Components are in `components/` and static assets in `public/`.
  - Styling: Tailwind CSS + global vars in `app/globals.css` (edit color tokens here).
  - Animations: Framer Motion is used across components; waveform animation logic lives in `lib/waveform.ts`.

- Where to look for common edits (concrete examples)
  - Change color tokens: edit `app/globals.css` (CSS variables at the top of the file).
  - Waveform bars / animation tuning: `lib/waveform.ts` (waveform arrays / timing used by Hero and Demo sections).
  - Page layout/content: `app/layout.tsx` and `app/page.tsx` (root layout and landing page composition).
  - Section components: `components/sections/*` (HeroSection, DemoSection, AboutSection, etc.) — change copy, reorder sections, or adjust local animations here.

- Project-specific conventions and patterns
  - App Router conventions: files under `app/` are the canonical routing/layouts. Add `use client` at top of a file when a component requires client-only APIs (state, effects, browser-only libs).
  - Keep animation parameterization centralized where possible: the repo uses `lib/waveform.ts` + per-component motion props rather than duplicating animation numbers.
  - Global visual tokens (colors, spacing) live in `app/globals.css` rather than scattered inline styles.

- Integration & runtime notes
  - Node 20+ recommended (see README). `next dev` and `next build` are the canonical runtime commands.
  - No test runner currently observed. If adding tests, add dependencies and scripts to `package.json` and create `__tests__` or `tests/` alongside affected code.

- Debugging / local checks
  - Use `npm run dev` then open `http://localhost:3000` to validate visual/animation changes.
  - Linting: run `npm run lint` after edits. ESLint config lives at `eslint.config.mjs`.

- Quick Do / Don't
  - Do: update `lib/waveform.ts` for waveform/timing concerns and `app/globals.css` for color theme changes.
  - Don't: add global runtime changes (server middleware, new runtime) without explicit coordination — this is a visual marketing site; minimize infra changes.

If anything here is unclear or you want more detail in a specific area (build steps, where animation props are composed, or an example PR that changes color + waveform), tell me which area and I'll expand or add concrete snippets. 
