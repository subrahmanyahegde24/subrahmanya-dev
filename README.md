# Subrahmanya Shivaram Hegde — Portfolio

Cinematic personal portfolio showcasing my work in Agentic AI, RAG, and Edge LLMs.

## Live Site

[subrahmanyaportfoliowebsite.vercel.app](https://subrahmanyaportfoliowebsite.vercel.app)

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, GSAP ScrollTrigger, Lenis smooth scroll
- **Backend**: Python FastAPI (Vercel Serverless Functions)
- **Deployment**: Vercel

## Features

- Cinematic single-page layout with a hero video and scroll-driven animations
- Stacked project cards, bento skill grid, and an animated experience timeline
- Swappable accent palette (`?accent=violet` etc. to preview; default silver)
- Downloadable 1-page resume (`frontend/public/resume.pdf`)
- Respects `prefers-reduced-motion`; fully responsive

## Project Structure

```text
subrahmanya-dev/
├── frontend/                  # React + Vite single-page site
│   ├── public/
│   │   ├── media/             # Hero video, posters, portrait
│   │   ├── resume.pdf         # Downloadable 1-page resume
│   │   └── favicon.svg
│   └── src/
│       ├── components/        # Hero, About, Projects, Skills, Experience, Contact, Nav…
│       ├── data/content.js    # All site text: profile, projects, skills, timeline
│       ├── lib/motion.js      # GSAP + Lenis setup
│       └── index.css          # Theme tokens and accent palettes
├── api/                       # FastAPI serverless functions (health, contact, chat)
├── vercel.json                # Build + routing config
└── .github/workflows/         # CI on PRs, deploy to Vercel on push to main
```

## Local Development

Requires Node.js 18+.

```bash
cd frontend
npm install
npm run dev        # http://127.0.0.1:5173
npm run build      # production build into frontend/dist
npm run preview    # serve the production build locally
```

> If the browser shows **431 Request Header Fields Too Large**, open `127.0.0.1` instead of `localhost` (old cookies on `localhost` are too large).
> After editing `tailwind.config.js`, restart `npm run dev`.

## Updating Content

| What | Where |
|---|---|
| Text, projects, skills, experience, links | `frontend/src/data/content.js` |
| Resume download | Replace `frontend/public/resume.pdf` (keep the file name) |
| Hero video / portrait | Replace files in `frontend/public/media/` (keep the names) |
| Accent colour | Palettes in `frontend/src/index.css`; set the default on `:root` |

Placeholder **Live Demo** links for SimplyReview and the Reddit Sentiment Analyzer are marked `TODO` in `content.js`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `frontend/` and deploys to Vercel production. It needs the `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` repository secrets.

## Contact

- Email: subrahmanyashegde24@gmail.com
- GitHub: [subrahmanyahegde24](https://github.com/subrahmanyahegde24)
- LinkedIn: [Subrahmanya Shivaram Hegde](https://linkedin.com/in/subrahmanya24)

