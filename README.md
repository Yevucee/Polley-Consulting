# Samuel Polley — personal website

A cinematic personal site for Samuel Polley: communications, culture, and aerial film, between Switzerland and Ghana.

The consultancy site remains [polleyconsulting.com](https://www.polleyconsulting.com/). This repository is the personal site.

## Stack

Plain static HTML, CSS, and a little JavaScript. No build step, no framework.

## Preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Drone videos

Placeholder stills are in place so you can judge layout now. When you have chosen the films, drop them into `assets/video/` using the names in [assets/video/README.md](assets/video/README.md). The page will play them automatically.

## GitHub Pages

Push to `main` and enable Pages with **GitHub Actions** as the source. The workflow in `.github/workflows/pages.yml` deploys the site.
