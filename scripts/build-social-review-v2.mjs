import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const svgDir = path.join(root, "design", "social-media-review-v2");
const pngDir = path.join(root, "public", "social-media", "review-v2");
const width = 1080;
const height = 1350;
const reviewLinks = {
  google: "share.google/S2uAsv1C6g9qcipQH",
  yelp: "yelp.com/biz/gifted-garden-san-diego",
};

await fs.mkdir(svgDir, { recursive: true });
await fs.mkdir(pngDir, { recursive: true });

const palette = {
  purple: "#673781",
  purpleDark: "#432254",
  lavender: "#E8DDF0",
  lavenderMid: "#C7ABD8",
  green: "#66863B",
  greenDark: "#3F5D27",
  greenLight: "#DCE8C6",
  gold: "#F2C34B",
  warm: "#FCFAF5",
  white: "#FFFFFF",
  ink: "#29262D",
  muted: "#625D66",
  line: "#D8D1DB",
};

const fontFiles = {
  fredoka600: path.join(root, "node_modules/@fontsource/fredoka/files/fredoka-latin-600-normal.woff2"),
  fredoka700: path.join(root, "node_modules/@fontsource/fredoka/files/fredoka-latin-700-normal.woff2"),
  nunito400: path.join(root, "node_modules/@fontsource/nunito-sans/files/nunito-sans-latin-400-normal.woff2"),
  nunito600: path.join(root, "node_modules/@fontsource/nunito-sans/files/nunito-sans-latin-600-normal.woff2"),
  nunito700: path.join(root, "node_modules/@fontsource/nunito-sans/files/nunito-sans-latin-700-normal.woff2"),
  nunito800: path.join(root, "node_modules/@fontsource/nunito-sans/files/nunito-sans-latin-800-normal.woff2"),
};

const fonts = {};
for (const [name, file] of Object.entries(fontFiles)) {
  fonts[name] = (await fs.readFile(file)).toString("base64");
}

const elephantData = (await fs.readFile(path.join(root, "public/brand/gifted-garden-elephant.png"))).toString("base64");
const dionneData = (await fs.readFile(path.join(root, "public/images/dionne-panton.jpg"))).toString("base64");

function fontCss() {
  return `
    @font-face { font-family: Fredoka; src: url(data:font/woff2;base64,${fonts.fredoka600}); font-weight: 600; }
    @font-face { font-family: Fredoka; src: url(data:font/woff2;base64,${fonts.fredoka700}); font-weight: 700; }
    @font-face { font-family: Nunito; src: url(data:font/woff2;base64,${fonts.nunito400}); font-weight: 400; }
    @font-face { font-family: Nunito; src: url(data:font/woff2;base64,${fonts.nunito600}); font-weight: 600; }
    @font-face { font-family: Nunito; src: url(data:font/woff2;base64,${fonts.nunito700}); font-weight: 700; }
    @font-face { font-family: Nunito; src: url(data:font/woff2;base64,${fonts.nunito800}); font-weight: 800; }
    .display { font-family: Fredoka, sans-serif; font-weight: 600; }
    .display-bold { font-family: Fredoka, sans-serif; font-weight: 700; }
    .body { font-family: Nunito, sans-serif; font-weight: 400; }
    .body-semibold { font-family: Nunito, sans-serif; font-weight: 600; }
    .body-bold { font-family: Nunito, sans-serif; font-weight: 700; }
    .body-extrabold { font-family: Nunito, sans-serif; font-weight: 800; }
  `;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function svgDocument(content, defs = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <style>${fontCss()}</style>
      ${defs}
    </defs>
    ${content}
  </svg>`;
}

function brandLockup({ x = 80, y = 72, light = false } = {}) {
  const first = light ? palette.white : palette.purple;
  const second = light ? palette.greenLight : palette.green;
  const rule = light ? "#B99CCB" : palette.lavenderMid;
  return `
    <g transform="translate(${x} ${y})">
      <text class="display-bold" x="0" y="38" font-size="42" letter-spacing="6" fill="${first}">GIFTED</text>
      <text class="display-bold" x="222" y="38" font-size="42" letter-spacing="6" fill="${second}">GARDEN</text>
      <line x1="0" y1="60" x2="78" y2="60" stroke="${rule}" stroke-width="3"/>
      <text class="body-bold" x="94" y="68" font-size="18" letter-spacing="5" fill="${first}">CHILDCARE SERVICE</text>
      <line x1="358" y1="60" x2="436" y2="60" stroke="${rule}" stroke-width="3"/>
    </g>`;
}

function sparkle(x, y, size = 26) {
  return `<path d="M ${x} ${y - size} C ${x + 3} ${y - 7}, ${x + 7} ${y - 3}, ${x + size} ${y}
    C ${x + 7} ${y + 3}, ${x + 3} ${y + 7}, ${x} ${y + size}
    C ${x - 3} ${y + 7}, ${x - 7} ${y + 3}, ${x - size} ${y}
    C ${x - 7} ${y - 3}, ${x - 3} ${y - 7}, ${x} ${y - size} Z" fill="${palette.gold}"/>`;
}

function lavenderStem(x, y, scale = 1, color = palette.purple, opacity = 1) {
  const buds = [
    [0, -18, -14], [0, -40, 14], [0, -62, -13], [0, -84, 12],
    [0, -106, -10], [0, -126, 9], [0, -145, 0],
  ];
  return `<g transform="translate(${x} ${y}) scale(${scale})" opacity="${opacity}">
    <path d="M0 0 C-3 -54, 8 -102, 0 -160" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
    ${buds.map(([, yy, xx]) => `<ellipse cx="${xx}" cy="${yy}" rx="10" ry="18" fill="${color}" transform="rotate(${xx > 0 ? 38 : -38} ${xx} ${yy})"/>`).join("")}
  </g>`;
}

function eyebrow(text, x, y, fill = palette.greenDark) {
  return `<text class="body-extrabold" x="${x}" y="${y}" font-size="23" letter-spacing="4.5" fill="${fill}">${escapeXml(text.toUpperCase())}</text>`;
}

function lines(items, { x, y, size, gap, fill = palette.ink, klass = "display" }) {
  return `<text class="${klass}" x="${x}" y="${y}" font-size="${size}" fill="${fill}">
    ${items.map((item, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : gap}">${escapeXml(item)}</tspan>`).join("")}
  </text>`;
}

function footer({ dark = false, text = "GIFTEDGARDEN.GITHUB.IO" } = {}) {
  const fill = dark ? palette.white : palette.purpleDark;
  const rule = dark ? "#8A679D" : palette.line;
  return `
    <line x1="80" y1="1240" x2="1000" y2="1240" stroke="${rule}" stroke-width="2"/>
    <text class="body-bold" x="80" y="1288" font-size="22" letter-spacing="3.5" fill="${fill}">${escapeXml(text)}</text>
    ${sparkle(970, 1280, 15)}
  `;
}

function elephantBadge(x, y, size) {
  const clipId = `elephant-badge-${x}-${y}`;
  return `
    <g transform="translate(${x} ${y})">
      <clipPath id="${clipId}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 8}"/></clipPath>
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${palette.white}" stroke="${palette.lavender}" stroke-width="8"/>
      <image href="data:image/png;base64,${elephantData}" x="${size * 0.08}" y="${size * 0.08}" width="${size * 0.84}" height="${size * 0.84}" preserveAspectRatio="xMidYMid meet" clip-path="url(#${clipId})"/>
    </g>`;
}

const designs = [
  {
    slug: "01-brand-introduction",
    svg: svgDocument(`
      <rect width="${width}" height="${height}" fill="${palette.warm}"/>
      <rect width="24" height="${height}" fill="${palette.purple}"/>
      ${brandLockup()}
      ${sparkle(936, 122, 24)}
      ${eyebrow("Family home child care", 80, 282)}
      ${lines(["Where every", "child blooms."], { x: 80, y: 390, size: 100, gap: 105, fill: palette.purpleDark, klass: "display-bold" })}
      <line x1="80" y1="635" x2="520" y2="635" stroke="${palette.gold}" stroke-width="8" stroke-linecap="round"/>
      <text class="body-semibold" x="80" y="715" font-size="35" fill="${palette.ink}">
        <tspan x="80">Small-group care rooted in play,</tspan>
        <tspan x="80" dy="48">connection, and early learning.</tspan>
      </text>
      <g transform="translate(80 858)">
        <rect width="520" height="145" rx="28" fill="${palette.greenLight}"/>
        <text class="body-extrabold" x="34" y="54" font-size="24" letter-spacing="3" fill="${palette.greenDark}">SERVING</text>
        <text class="body-semibold" x="34" y="104" font-size="31" fill="${palette.ink}">Birth–5 · Lomita Village</text>
      </g>
      ${elephantBadge(740, 725, 250)}
      ${lavenderStem(735, 1110, 0.7, palette.green, 0.9)}
      ${lavenderStem(920, 1140, 0.55, palette.purple, 0.65)}
      ${footer()}
    `),
  },
  {
    slug: "02-request-a-tour",
    svg: svgDocument(`
      <rect width="${width}" height="${height}" fill="${palette.warm}"/>
      <rect x="0" y="0" width="1080" height="560" fill="${palette.purpleDark}"/>
      ${brandLockup({ light: true })}
      ${sparkle(936, 122, 24)}
      ${eyebrow("Tours by appointment", 80, 265, palette.greenLight)}
      ${lines(["Come see what", "small-group care", "feels like."], { x: 80, y: 338, size: 66, gap: 70, fill: palette.white, klass: "display-bold" })}
      <text class="body-semibold" x="80" y="650" font-size="32" fill="${palette.ink}">
        <tspan x="80">A private tour gives your family time to</tspan>
        <tspan x="80" dy="46">meet the provider and ask the right questions.</tspan>
      </text>
      <g transform="translate(80 790)">
        <rect width="920" height="296" rx="34" fill="${palette.white}" stroke="${palette.line}" stroke-width="2"/>
        <g transform="translate(42 48)">
          <circle cx="28" cy="28" r="28" fill="${palette.lavender}"/>
          <path d="M28 14 v28 M14 28 h28" stroke="${palette.purple}" stroke-width="5" stroke-linecap="round"/>
          <text class="body-bold" x="82" y="25" font-size="23" letter-spacing="2" fill="${palette.muted}">CARE HOURS</text>
          <text class="display" x="82" y="68" font-size="38" fill="${palette.ink}">6:00 AM–4:30 PM</text>
        </g>
        <line x1="42" y1="144" x2="878" y2="144" stroke="${palette.line}" stroke-width="2"/>
        <g transform="translate(42 188)">
          <circle cx="28" cy="28" r="28" fill="${palette.greenLight}"/>
          <path d="M14 28 h28 M28 14 v28" stroke="${palette.greenDark}" stroke-width="5" stroke-linecap="round"/>
          <text class="body-bold" x="82" y="25" font-size="23" letter-spacing="2" fill="${palette.muted}">CALL OR EMAIL</text>
          <text class="display" x="82" y="68" font-size="36" fill="${palette.ink}">(619) 646-1029</text>
          <text class="body-semibold" x="510" y="65" font-size="26" fill="${palette.purple}">giftedgarden1@gmail.com</text>
        </g>
      </g>
      ${footer({ text: "REQUEST A TOUR · GIFTEDGARDEN.GITHUB.IO" })}
    `),
  },
  {
    slug: "03-program-overview",
    svg: svgDocument(`
      <rect width="${width}" height="${height}" fill="${palette.warm}"/>
      ${brandLockup()}
      ${sparkle(936, 122, 24)}
      ${eyebrow("Programs", 80, 270)}
      ${lines(["Care designed", "around early", "childhood."], { x: 80, y: 360, size: 82, gap: 88, fill: palette.purpleDark, klass: "display-bold" })}
      <g transform="translate(80 690)">
        <g>
          <rect width="440" height="190" rx="30" fill="${palette.lavender}"/>
          <text class="body-extrabold" x="32" y="54" font-size="21" letter-spacing="3" fill="${palette.purple}">BEGINNINGS</text>
          <text class="display" x="32" y="112" font-size="40" fill="${palette.ink}">Infant care</text>
          <text class="body-semibold" x="32" y="156" font-size="24" fill="${palette.muted}">Warm, responsive routines</text>
        </g>
        <g transform="translate(480 0)">
          <rect width="440" height="190" rx="30" fill="${palette.greenLight}"/>
          <text class="body-extrabold" x="32" y="54" font-size="21" letter-spacing="3" fill="${palette.greenDark}">DISCOVERY</text>
          <text class="display" x="32" y="112" font-size="40" fill="${palette.ink}">Toddler care</text>
          <text class="body-semibold" x="32" y="156" font-size="24" fill="${palette.muted}">Movement, language, play</text>
        </g>
        <g transform="translate(0 230)">
          <rect width="440" height="190" rx="30" fill="${palette.greenLight}"/>
          <text class="body-extrabold" x="32" y="54" font-size="21" letter-spacing="3" fill="${palette.greenDark}">GROWTH</text>
          <text class="display" x="32" y="112" font-size="40" fill="${palette.ink}">Preschool</text>
          <text class="body-semibold" x="32" y="156" font-size="24" fill="${palette.muted}">Curiosity and school readiness</text>
        </g>
        <g transform="translate(480 230)">
          <rect width="440" height="190" rx="30" fill="${palette.lavender}"/>
          <text class="body-extrabold" x="32" y="54" font-size="21" letter-spacing="3" fill="${palette.purple}">FLEXIBILITY</text>
          <text class="display" x="32" y="112" font-size="40" fill="${palette.ink}">School-age care</text>
          <text class="body-semibold" x="32" y="156" font-size="24" fill="${palette.muted}">Before &amp; after school</text>
        </g>
      </g>
      ${lavenderStem(946, 632, 0.46, palette.purple, 0.6)}
      ${footer({ text: "INFANT · TODDLER · PRESCHOOL · SCHOOL-AGE CARE" })}
    `),
  },
  {
    slug: "04-meet-dionne-panton",
    svg: svgDocument(`
      <rect width="${width}" height="${height}" fill="${palette.warm}"/>
      <clipPath id="providerCrop"><rect x="0" y="0" width="520" height="1350"/></clipPath>
      <image href="data:image/jpeg;base64,${dionneData}" x="-110" y="0" width="800" height="1350" preserveAspectRatio="xMidYMid slice" clip-path="url(#providerCrop)"/>
      <rect x="0" y="0" width="520" height="1350" fill="#321D3A" opacity="0.10"/>
      <rect x="520" y="0" width="560" height="1350" fill="${palette.warm}"/>
      <g transform="translate(588 72)">
        <text class="display-bold" x="0" y="38" font-size="38" letter-spacing="5" fill="${palette.purple}">GIFTED</text>
        <text class="display-bold" x="200" y="38" font-size="38" letter-spacing="5" fill="${palette.green}">GARDEN</text>
        <line x1="0" y1="62" x2="392" y2="62" stroke="${palette.line}" stroke-width="2"/>
      </g>
      ${sparkle(964, 116, 22)}
      ${eyebrow("Meet the provider", 588, 278)}
      ${lines(["Dionne", "Panton"], { x: 588, y: 390, size: 90, gap: 96, fill: palette.purpleDark, klass: "display-bold" })}
      <text class="body-extrabold" x="588" y="604" font-size="20" letter-spacing="2.5" fill="${palette.greenDark}">CARE PHILOSOPHY</text>
      <text class="body-semibold" x="588" y="655" font-size="31" fill="${palette.ink}">
        <tspan x="588">Children are supported,</tspan>
        <tspan x="588" dy="42">respected, and encouraged</tspan>
        <tspan x="588" dy="42">to explore.</tspan>
      </text>
      <g transform="translate(588 820)">
        <line x1="0" y1="0" x2="412" y2="0" stroke="${palette.gold}" stroke-width="7" stroke-linecap="round"/>
        <text class="body-extrabold" x="0" y="62" font-size="21" letter-spacing="2.4" fill="${palette.greenDark}">EDUCATION</text>
        <text class="display" x="0" y="112" font-size="35" fill="${palette.ink}">M.S. in Early Childhood</text>
        <text class="display" x="0" y="154" font-size="35" fill="${palette.ink}">Education</text>
        <text class="body-extrabold" x="0" y="230" font-size="21" letter-spacing="2.4" fill="${palette.greenDark}">EXPERIENCE</text>
        <text class="display" x="0" y="282" font-size="35" fill="${palette.ink}">7 years in child care</text>
      </g>
      <rect x="548" y="1218" width="484" height="84" rx="24" fill="${palette.purpleDark}"/>
      <text class="body-bold" x="588" y="1271" font-size="24" letter-spacing="2.6" fill="${palette.white}">WHERE EVERY CHILD BLOOMS.</text>
    `, `<clipPath id="providerCrop"><rect x="0" y="0" width="520" height="1350"/></clipPath>`),
  },
  {
    slug: "05-review-request",
    svg: svgDocument(`
      <rect width="${width}" height="${height}" fill="${palette.warm}"/>
      ${brandLockup()}
      ${sparkle(936, 122, 24)}
      ${eyebrow("Community feedback", 80, 282)}
      ${lines(["Your experience", "helps another", "family choose."], { x: 80, y: 380, size: 82, gap: 88, fill: palette.purpleDark, klass: "display-bold" })}
      <g transform="translate(80 720)">
        <rect width="920" height="320" rx="34" fill="${palette.white}" stroke="${palette.line}" stroke-width="2"/>
        <path d="M70 92 q0 -36 36 -36 h708 q36 0 36 36 v100 q0 36 -36 36 H248 l-78 54 18-54 h-82 q-36 0 -36 -36Z" fill="${palette.lavender}"/>
        <text class="body-bold" x="116" y="126" font-size="30" fill="${palette.purpleDark}">Have feedback about your Gifted Garden experience?</text>
        <text class="body-semibold" x="116" y="184" font-size="25" fill="${palette.ink}">An honest review helps local families make informed choices.</text>
      </g>
      <g transform="translate(80 1070)">
        <rect width="920" height="70" rx="22" fill="${palette.purpleDark}"/>
        <text class="body-extrabold" x="30" y="45" font-size="20" letter-spacing="2.2" fill="${palette.white}">GOOGLE</text>
        <text class="body-bold" x="190" y="45" font-size="22" fill="${palette.white}">${reviewLinks.google}</text>
      </g>
      <g transform="translate(80 1152)">
        <rect width="920" height="70" rx="22" fill="${palette.greenDark}"/>
        <text class="body-extrabold" x="30" y="45" font-size="20" letter-spacing="2.2" fill="${palette.white}">YELP</text>
        <text class="body-bold" x="190" y="45" font-size="22" fill="${palette.white}">${reviewLinks.yelp}</text>
      </g>
      ${footer({ text: "THANK YOU FOR SUPPORTING LOCAL CHILD CARE" })}
    `),
  },
];

for (const design of designs) {
  const svgPath = path.join(svgDir, `${design.slug}.svg`);
  const pngPath = path.join(pngDir, `${design.slug}.png`);
  await fs.writeFile(svgPath, design.svg);
  await sharp(Buffer.from(design.svg))
    .png({ compressionLevel: 9, palette: false })
    .toFile(pngPath);
}

const thumbWidth = 324;
const thumbHeight = 405;
const gap = 28;
const contactWidth = thumbWidth * 3 + gap * 4;
const contactHeight = thumbHeight * 2 + gap * 3 + 72;
const contactBase = sharp({
  create: {
    width: contactWidth,
    height: contactHeight,
    channels: 4,
    background: palette.warm,
  },
});

const composites = [];
for (let index = 0; index < designs.length; index += 1) {
  const input = await sharp(path.join(pngDir, `${designs[index].slug}.png`))
    .resize(thumbWidth, thumbHeight)
    .png()
    .toBuffer();
  const col = index % 3;
  const row = Math.floor(index / 3);
  composites.push({
    input,
    left: gap + col * (thumbWidth + gap),
    top: 72 + gap + row * (thumbHeight + gap),
  });
}

const titleSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${contactWidth}" height="72">
  <style>${fontCss()}</style>
  <rect width="${contactWidth}" height="72" fill="${palette.purpleDark}"/>
  <text class="body-extrabold" x="28" y="46" font-size="22" letter-spacing="3" fill="${palette.white}">GIFTED GARDEN · PROFESSIONAL SOCIAL REDESIGN · OWNER REVIEW</text>
</svg>`);
composites.unshift({ input: titleSvg, left: 0, top: 0 });

await contactBase
  .composite(composites)
  .png({ compressionLevel: 9 })
  .toFile(path.join(pngDir, "00-review-contact-sheet.png"));

console.log(`Created ${designs.length} editable SVGs in ${svgDir}`);
console.log(`Created ${designs.length} review PNGs and a contact sheet in ${pngDir}`);
