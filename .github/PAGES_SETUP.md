# GitHub Pages setup (one-time)

1. Open **https://github.com/Yevucee/Polley-Consulting/settings/pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run the **Deploy Samuel Polley site to GitHub Pages** workflow manually).

The site will be published at:

**https://yevucee.github.io/Polley-Consulting/**

The workflow builds a static export from `Samuel-Polley-Website-GitHub/` using `npm run build:pages`.
