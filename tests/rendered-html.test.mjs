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

test("renders the public Gifted Garden enrollment website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Gifted Garden Child Care \| Lomita Village, San Diego<\/title>/i);
  assert.match(html, /Skip to main content/);
  assert.match(html, /Request a Tour/);
  assert.match(html, /Join the Waitlist/);
  assert.match(html, /Prepare Waitlist Request Email/);
  assert.match(html, /Family home child care/);
  assert.match(html, /birth through age 5/i);
  assert.match(html, /\/brand\/gifted-garden-horizontal.webp/);
  assert.match(html, /\/brand\/gifted-garden-elephant.webp/);
  assert.doesNotMatch(html, /gifted-garden-seal/);
  assert.match(html, /https:\/\/giftedgarden\.github\.io\/og\.png/);
  assert.match(html, /rel="canonical" href="https:\/\/giftedgarden\.github\.io\/"/);
  assert.match(html, /1 current opening/);
  assert.doesNotMatch(html, /Contact for current availability|3 spaces/);
  assert.match(html, /6:00 AM/);
  assert.match(html, /Monday through Friday/);
  assert.match(html, /Dionne Panton Family Child Care/);
  assert.match(html, /Small Family Child Care Home/);
  assert.match(html, /376628431/);
  assert.match(html, /Active and in good standing/);
  assert.match(html, /no resident children currently count/i);
  assert.match(html, /full-time first shift/i);
  assert.match(html, /Twenty-four-hour and weekend care may be negotiated as needed/);
  assert.match(html, /Infant care/);
  assert.match(html, /Toddler care/);
  assert.match(html, /Preschool care/);
  assert.match(html, /School-age \/ before &amp; after/);
  assert.match(html, /Waitlist open/);
  assert.match(html, /Future availability depends on licensing, staffing, enrolled age mix, and program capacity/);
  assert.match(html, /Is Gifted Garden growing\?/);
  assert.doesNotMatch(html, /expansion project|CDSS approval pending|Large Family Child Care Home license/);
  assert.match(html, /late pickup, late payment, and returned payments/);
  assert.match(html, /Pickup and drop-off transportation may be negotiated for schools within a five-mile radius/);
  assert.match(html, /December 24–January 1/);
  assert.match(html, /https:\/\/cdss\.ca\.gov\/inforesources\/community-care-licensing\/facility-search-welcome/);
  assert.match(html, /Dionne Panton/);
  assert.match(html, /Dionne Panton, Gifted Garden child-care provider/);
  assert.match(html, /\/images\/dionne-panton.webp/);
  assert.match(html, /src="\/images\/friendships.webp"/);
  assert.match(html, /Three children smiling and sharing a group hug at Gifted Garden/);
  assert.match(html, /src="\/images\/community-outing.webp"/);
  assert.doesNotMatch(html, /\/_vinext\/image\?/);
  assert.doesNotMatch(html, /Provider photograph placeholder/);
  assert.match(html, /Master of Science in Early Childhood Education/);
  assert.doesNotMatch(html, /CalWORKs Child Care/);
  assert.doesNotMatch(html, /YMCA Alternative Payments/);
  assert.doesNotMatch(html, /Crystal Stairs/);
  assert.doesNotMatch(html, /California Tribal TANF/);
  assert.match(html, /Military fee assistance/);
  assert.match(html, /\(619\) 646-1029/);
  assert.match(html, /giftedgarden1@gmail.com/);
  assert.match(html, /appointment is confirmed/);
  assert.match(html, /Three children smiling and sharing a group hug indoors/);
  assert.match(html, /Stories shared together/);
  assert.match(html, /Adventures beyond the playroom/);
  assert.doesNotMatch(html, /Future authentic photo/);
  assert.match(html, /name="robots" content="index, follow"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"ChildCare"/);
  assert.match(html, /https:\/\/share\.google\/S2uAsv1C6g9qcipQH/);
  assert.match(html, /https:\/\/www\.yelp\.com\/biz\/gifted-garden-san-diego/);
  assert.match(html, /https:\/\/www\.instagram\.com\/gifted_garden/);
  assert.match(html, /https:\/\/www\.facebook\.com\/GiftedGardenChildCare/);
  assert.match(html, /Independent profiles/);
  assert.match(html, /Ratings and review text are intentionally not copied here/);
  assert.match(html, /Take the next step toward care that stays personal/);
  assert.match(html, /Meet Dionne and see the learning and play environment/);
  assert.doesNotMatch(html, /room to be known|every (?:child|kid) is known/i);
  assert.doesNotMatch(html, /Enrollment preview/);
  assert.doesNotMatch(html, /Private owner-review version/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);

  const staticImagePaths = [...new Set(
    [...html.matchAll(/src="(\/(?:brand|images)\/[^"]+)"/g)].map((match) => match[1]),
  )];
  assert.ok(staticImagePaths.length >= 12, "expected all brand and gallery images in the rendered page");
  await Promise.all(staticImagePaths.map(async (imagePath) => {
    const bytes = await readFile(new URL(`../public${imagePath}`, import.meta.url));
    assert.ok(bytes.length > 0, `${imagePath} must be included in the public site`);
  }));
});

test("publishes local-search discovery files", async () => {
  const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  assert.match(robots, /Allow: \//);
  assert.match(robots, /https:\/\/giftedgarden\.github\.io\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/giftedgarden\.github\.io\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-07-23<\/lastmod>/);
});

test("renders active email-preparation forms without an external form processor", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /Prepare Tour Request Email/);
  assert.match(html, /Prepare Question Email/);
  assert.match(html, /Prepare Waitlist Request Email/);
  assert.doesNotMatch(html, /form setup pending/);
  assert.match(html, /Nothing is sent automatically/);
  assert.match(html, /No external form processor or analytics provider/);
});

test("prepares structured messages for the verified business email", async () => {
  const source = await readFile(new URL("../app/EnrollmentForm.tsx", import.meta.url), "utf8");
  assert.match(source, /mailto:\$\{destination\}/);
  assert.match(source, /giftedgarden1@gmail\.com/);
  assert.match(source, /Gifted Garden Tour Request/);
  assert.match(source, /Gifted Garden Waitlist Request/);
  assert.match(source, /care-timing/);
  assert.match(source, /Interested in a future opening/);
  assert.doesNotMatch(source, /pending CDSS approval|future expansion/i);
  assert.match(source, /Operational contact consent: Yes/);
  assert.doesNotMatch(source, /How they heard about Gifted Garden/);
  assert.doesNotMatch(source, /marketing-consent/);
  assert.match(source, /navigator\.clipboard\.writeText\(destination\)/);
  assert.match(source, /encodeURIComponent/);
  assert.match(source, /window\.location\.assign\(mailto\)/);
});
