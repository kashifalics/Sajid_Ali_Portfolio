# Sajid Ali — Portfolio

Personal portfolio for Sajid Ali, Solutions Architect & Enterprise Full-Stack Engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/            # routes, layout, global styles
  components/     # one folder per section (hero, about, systems, ...)
  data/           # content — profile, experience, projects, technologies
  lib/            # small shared utilities
public/images/    # profile portrait
```

Content lives in `src/data/*.ts`, separate from the components that render it.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
