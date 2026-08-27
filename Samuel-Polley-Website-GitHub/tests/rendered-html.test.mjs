import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Samuel Polley website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /The story changes/);
  assert.match(html, /Most of my work is not made public/);
  assert.match(html, /Private intelligence/);
  assert.match(html, /From above, you see the pattern/);
  assert.match(html, /I bring the room into the investigation/);
  assert.doesNotMatch(html, /Field note 01|Ground truth|namibiaVisual|Tools I build|AI-assisted|vinext-starter|Your site is taking shape|FieldLens/);
});

test("keeps the named films and removes starter content", async () => {
  const [page, packageJson, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /\/namibia-field\.m4v/);
  assert.match(page, /\/namibia-field-02\.m4v/);
  assert.match(page, /\/croatia-bridge\.m4v/);
  assert.match(page, /On-the-ground verification/);
  assert.doesNotMatch(page, /Global Graduate Academy|FieldLens/);
  assert.match(packageJson, /"name": "samuel-polley-site"/);
  assert.match(readme, /Publish from GitHub/);
});
