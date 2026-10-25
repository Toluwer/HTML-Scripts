# HTML Scripts

A calm, warm-minimal CDN for our HTML files. **Currently blank — by design.**

## What this is

`HTML Scripts` is a small static site that will one day list every HTML
file we publish and serve each one on its own full page. Today it ships
as an empty canvas: the page shell, the design tokens, and the light and
dark theming are all in place, and the library itself arrives later.

## Repository layout

    html-scripts/
    ├── index.html        # CDN front page — blank state
    ├── assets/
    │   ├── styles.css    # Warm Minimal design system (tokens + components)
    │   └── app.js        # Theme handling; listing & viewer arrive later
    ├── files/            # Future home of every HTML file
    └── README.md

## The plan (future)

1. **Listing** — every `*.html` file dropped into `files/` appears as a row
   on the front page: leading badge, file name, meta, trailing arrow.
2. **Viewer** — clicking a row opens the file full-page, with a back
   button that returns to the front page.

None of that is wired up yet. What you see today is intentionally blank.

## Style

The site follows the **Warm Minimal Interface Design System (v1.0)**:

- warm paper light theme and warm charcoal dark theme (retuned, not inverted)
- hairline borders define structure; shadows only add atmosphere
- ink is the accent; semantic color appears only where meaning exists
- quiet, fast motion with full reduced-motion support

All tokens are defined at the top of `assets/styles.css`; themes swap on
the root element, so components never know which theme is active.

## Run locally

Any static file server works:

    python3 -m http.server 8000
    # then open http://localhost:8000

Or simply open `index.html` directly — there is no build step and there
are no dependencies. To publish, push this folder to GitHub Pages,
Netlify, Cloudflare Pages, or any object storage behind a CDN.

## Pushing to GitHub

The repository starts with a single commit on `main`. When you are ready
to host it, add your remote and push:

    git remote add origin git@github.com:<you>/html-scripts.git
    git push -u origin main
