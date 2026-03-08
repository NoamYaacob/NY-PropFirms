/**
 * Generates /public/og-image.jpg — run once, commit the file.
 * Uses only system fonts so no network is required.
 *   DejaVu Sans Bold  → Latin (NY PROP FIRMS)
 *   Unifont           → Hebrew (full Unicode coverage)
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
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#C9A84C"/>
      <stop offset="50%"  stop-color="#EDCB72"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#09090E"/>

  <!-- Top gold bar -->
  <rect width="${W}" height="6" fill="url(#gold)"/>

  <!-- Logo: NY (gold) -->
  <text
    x="430" y="268"
    font-family="DejaVu Sans"
    font-weight="bold"
    font-size="96"
    fill="#EDCB72"
    text-anchor="end"
    letter-spacing="-2"
  >NY</text>

  <!-- Logo: PROP FIRMS (white) -->
  <text
    x="448" y="268"
    font-family="DejaVu Sans"
    font-weight="bold"
    font-size="96"
    fill="#EAEAF0"
    text-anchor="start"
    letter-spacing="-2"
  >PROP FIRMS</text>

  <!-- Hebrew subtitle — Unifont covers all Hebrew glyphs -->
  <text
    x="${W / 2}" y="352"
    font-family="Unifont, DejaVu Sans, sans-serif"
    font-size="44"
    fill="#EAEAF0"
    text-anchor="middle"
    direction="rtl"
  >המדריך הישראלי לחברות פרופ</text>

  <!-- Supporting line -->
  <text
    x="${W / 2}" y="418"
    font-family="DejaVu Sans"
    font-size="26"
    fill="#55556A"
    text-anchor="middle"
    letter-spacing="3"
  >Apex &#x2022; EOD &#x2022; Intraday &#x2022; PA</text>

  <!-- Bottom gold bar -->
  <rect y="${H - 6}" width="${W}" height="6" fill="url(#gold)"/>
</svg>
`.trim();

const buf = await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, mozjpeg: true })
  .toBuffer();

writeFileSync(OUT, buf);
console.log(`Written ${buf.length} bytes → ${OUT}`);
