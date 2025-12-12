# Frame Portfolio — Fullstack & Data Portfolio

This repository contains a Vite + React + TypeScript portfolio site adapted to showcase full‑stack and data projects.

## Quick overview
- Framework: Vite + React (SWC)
- Language: TypeScript
- Styling: Tailwind CSS
- Purpose: showcase web, data, ML and infra projects with detailed technical narratives, links to repos and demos.

## Getting started (local)
### Prerequisites
- Node.js (LTS 18/20 recommended)
- npm

### Install
```bash
cd /path/to/mfv-portfolio25
npm install
```

### Development
```bash
npm run dev
# open http://localhost:5173 (or the port printed by Vite)
```

### Build
```bash
npm run build
```

## Deploy
There are two deployment methods included:

1. GitHub Pages (workflow)
   - A GitHub Actions workflow is provided at `.github/workflows/deploy-gh-pages.yml` and will build and publish the site automatically when you push to `main`.
   - Alternatively, the site has been published to the `gh-pages` branch. To update manually:
     ```bash
     npm run build
     # copy ./dist content to a branch named gh-pages and push
     ```

2. Vercel / Netlify
   - These platforms can deploy from the repository automatically. Set the build command to `npm run build` and publish directory to `dist`.

## Adding a new project
Edit `src/data/projects.ts` and add a new object following existing entries. Required fields:
- `id`, `title`, `slug`, `category`, `year`, `description`, `coverImage`, `images` (array)
Optional fields for technical portfolio:
- `role`, `tech`, `repo`, `demo`, `context`, `problem`, `solution`, `results`, `architecture`, `reproduce`

## Contributing
1. Create a branch
2. Make changes
3. Commit with clear message
4. Push and create a PR

## License
MIT
