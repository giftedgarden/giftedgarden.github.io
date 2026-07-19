import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Gifted Garden enrollment prototype", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Gifted Garden Child Care \| Lomita Village, San Diego<\/title>/i);
  assert.match(html, /Skip to main content/);
  assert.match(html, /Request a Tour/);
  assert.match(html, /Join the Waitlist/);
  assert.match(html, /Family home child care/);
  assert.match(html, /Birth through age 5/);
  assert.match(html, /3 spaces/);
  assert.match(html, /6:00 AM/);
  assert.match(html, /Dionne Panton/);
  assert.match(html, /Master of Science in Early Childhood Education/);
  assert.match(html, /\(619\) 646-1029/);
  assert.match(html, /giftedgarden1@gmail.com/);
  assert.match(html, /appointment is confirmed/);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps prototype forms inactive until the privacy workflow is approved", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /Tour form setup pending/);
  assert.match(html, /Waitlist form setup pending/);
  assert.match(html, /Inquiry form setup pending/);
  assert.match(html, /disabled=""/);
  assert.match(html, /No analytics are enabled in this prototype/);
});
