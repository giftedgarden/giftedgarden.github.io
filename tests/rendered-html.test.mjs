import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /Dionne Panton, Gifted Garden child-care provider/);
  assert.match(html, /\/images\/dionne-panton.jpg/);
  assert.doesNotMatch(html, /Provider photograph placeholder/);
  assert.match(html, /Master of Science in Early Childhood Education/);
  assert.match(html, /\(619\) 646-1029/);
  assert.match(html, /giftedgarden1@gmail.com/);
  assert.match(html, /appointment is confirmed/);
  assert.match(html, /Three children smiling and sharing a group hug indoors/);
  assert.match(html, /Stories shared together/);
  assert.match(html, /Adventures beyond the playroom/);
  assert.doesNotMatch(html, /Future authentic photo/);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders active email-preparation forms without an external form processor", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /Prepare Tour Request Email/);
  assert.match(html, /Prepare Waitlist Email/);
  assert.match(html, /Prepare Question Email/);
  assert.doesNotMatch(html, /form setup pending/);
  assert.match(html, /Nothing is sent automatically/);
  assert.match(html, /No external form processor or analytics provider/);
});

test("prepares structured messages for the verified business email", async () => {
  const source = await readFile(new URL("../app/EnrollmentForm.tsx", import.meta.url), "utf8");
  assert.match(source, /mailto:\$\{destination\}/);
  assert.match(source, /giftedgarden1@gmail\.com/);
  assert.match(source, /Gifted Garden Tour Request/);
  assert.match(source, /Operational contact consent: Yes/);
  assert.match(source, /encodeURIComponent/);
  assert.match(source, /window\.location\.assign\(mailto\)/);
});
