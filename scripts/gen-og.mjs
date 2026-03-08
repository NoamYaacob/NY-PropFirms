/**
 * Generates /public/og-image.jpg — run once, commit the file.
 * Minimal brand-only card: "NY PROP FIRMS" on dark background.
 * No Hebrew, no subtitle, no URL, no divider — logo card only.
 */
import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../public/og-image.jpg");

const W = 1200;
const H = 630;

const svg = /* xml */ `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#C9A84C"/>
      <stop offset="50%"  stop-color="#EDCB72"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
    <radialGradient id="brandGlow" cx="50%" cy="50%" r="42%">
      <stop offset="0%"   stop-color="#1E1809" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#09090E" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#09090E"/>

  <!-- Soft warm glow behind text -->
  <ellipse cx="600" cy="315" rx="540" ry="230" fill="url(#brandGlow)"/>

  <!-- Top gold bar -->
  <rect x="0" y="0" width="${W}" height="6" fill="url(#goldBar)"/>

  <!--
    Single centered text block — xml:space="preserve" keeps the space
    between "NY" and "PROP FIRMS". text-anchor="middle" centres the whole
    string at x=600. font-size 108 → ~750 px wide, comfortable in 1200 px.
    Vertical centre: baseline y=348; cap-top ≈ y=272; visual centre ≈ y=314.
  -->
  <text
    x="600" y="348"
    font-family="DejaVu Sans" font-weight="bold" font-size="108"
    text-anchor="middle" letter-spacing="-2"
    xml:space="preserve"
  ><tspan fill="#EDCB72">NY </tspan><tspan fill="#EAEAF0">PROP FIRMS</tspan></text>

  <!-- Bottom gold bar -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#goldBar)"/>
</svg>
`.trim();

const buf = await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, mozjpeg: true })
  .toBuffer();

writeFileSync(OUT, buf);
console.log(`Written ${buf.length} bytes → ${OUT}`);
