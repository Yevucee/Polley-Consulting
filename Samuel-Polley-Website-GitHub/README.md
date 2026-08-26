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

- `public/namibia-field.m4v` and `public/namibia-poster.png` are the hero.
- `public/croatia-bridge.m4v` and `public/croatia-bridge-poster.png` are the
  bridge sequence and should remain.
- A future Namibia coast film belongs in the field-story section, replacing the
  typographic `fieldNote` panel. It should not replace or repeat the bridge.

Use an optimised web export in the repository, not the original camera file.
Keep each film below GitHub's 100 MB per-file limit; 1080p H.264 MP4 is a good
delivery format. Always include a poster image for visitors who reduce motion
or whose connection does not autoplay video.

## Publish from GitHub

This project targets Cloudflare Workers. After pushing it to GitHub, connect the
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
