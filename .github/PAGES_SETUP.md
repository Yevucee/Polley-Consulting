# GitHub Pages setup

## Current deploy (branch)

The latest built site is on the **`gh-pages`** branch. If GitHub Actions is not running, use branch deploy:

1. Open **https://github.com/Yevucee/Polley-Consulting/settings/pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Branch: **`gh-pages`**, folder: **`/ (root)`**
4. Save

The site will be published at:

**https://yevucee.github.io/Polley-Consulting/**

## GitHub Actions (preferred when working)

1. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main` or run the **Deploy Samuel Polley site to GitHub Pages** workflow manually.

The workflow builds a static export from `Samuel-Polley-Website-GitHub/` using `npm run build:pages`.
