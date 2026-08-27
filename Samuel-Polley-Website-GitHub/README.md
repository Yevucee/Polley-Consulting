# Samuel Polley

The personal website of investigator and journalist Samuel Polley.

## Open in Cursor

Open this folder as a project, then run:

```bash
npm ci
npm run dev
```

The finished site is a single responsive page. The main content lives in
`app/page.tsx`; the design is in `app/globals.css`.

## Final checks

```bash
npm test
npm run lint
```

## Footage

The current films are configured together in the `films` object at the top of
`app/page.tsx`.

- `public/namibia-field.m4v`, `public/namibia-field-02.m4v`, and
  `public/namibia-poster.png` are the hero playlist.
- `public/croatia-bridge.m4v` and `public/croatia-bridge-poster.png` are the
  bridge sequence and should remain.
- A future Namibia coast film belongs in the field-story section, replacing the
  typographic `fieldNote` panel. It should not replace or repeat the bridge.

Use an optimised web export in the repository, not the original camera file.
1080p H.264 is a good delivery format. Always include a poster image for
visitors who reduce motion or whose connection does not autoplay video.

**GitHub file size limits**

| Method | Limit |
| --- | --- |
| Upload on github.com (Add file) | **25 MB** |
| `git push` from Terminal | **100 MB** per file |

The current hero is only ~6 MB because it is a low-resolution export. A DJI
original will usually be much larger than 25 MB, so the web uploader will reject
it even though git would accept it.

**Replace the hero video**

On your Mac (with [ffmpeg](https://ffmpeg.org/) installed):

```bash
cd Samuel-Polley-Website-GitHub
chmod +x scripts/compress-hero-video.sh

# First clip (also refreshes the poster)
./scripts/compress-hero-video.sh ~/Downloads/dji_fly_20260216_175918_0185_1771262160517_video.mp4

# Second clip for the hero playlist
./scripts/compress-hero-video.sh ~/Downloads/dji_fly_20260218_123200_0215_1771429811164_video.mp4 20 namibia-field-02

git add public/namibia-field.m4v public/namibia-field-02.m4v public/namibia-poster.png
git commit -m "Update hero video playlist"
git push
```

The hero plays both clips back to back, then loops. The script targets **20 MB**
per file by default (safe for web upload). Pass a second argument to change the
cap, e.g. `./scripts/compress-hero-video.sh input.mp4 90 namibia-field-02` if
you only push via Terminal and want higher quality (stay under 100 MB per file).

## Publish from GitHub

### GitHub Pages (this repo)

The site can be published to GitHub Pages at:

**https://yevucee.github.io/Polley-Consulting/**

1. In the repository on GitHub, open **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Merge to `main` — the `pages.yml` workflow builds a static export and deploys it

Local check:

```bash
npm run build:pages
# static files land in dist/client/
```

### Cloudflare Workers (optional)

This project can also target Cloudflare Workers. After pushing to GitHub, connect the
repository in Cloudflare Workers Builds and use:

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node.js: `22.13` or newer

Every push to `main` can then publish automatically. Add the final domain in the
Worker's custom-domain settings once the first deployment succeeds.

The same deployment can also be triggered from Cursor with:

```bash
npm run deploy
```

## Contact links

The WhatsApp and LinkedIn destinations are near the bottom of `app/page.tsx`.
Check both before launch if the public contact details change.
