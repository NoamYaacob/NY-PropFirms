/**
 * Generates /public/og-image.jpg — run once, commit the file.
 * Uses only system fonts (no network required).
 *   DejaVu Sans Bold  → Latin + Hebrew in description (vector, clean at any size)
 *   Unifont           → Hebrew in headings (full Unicode coverage)
 *
 * Vertical layout maths (canvas 1200 × 630):
 *
 *   Top gold bar           y =   0–6
 *   ──────────────────────────────────────────────────────────────
 *   UPPER BRAND BLOCK      y =   6 → 330  (324 px available)
 *     content visual span ≈ 175 px  →  padding ≈ 74 px each side
 *       NY PROP FIRMS  baseline  y = 148    96 px bold
 *       Hebrew subtitle baseline  y = 208    38 px
 *       Apex tagline   baseline  y = 251    21 px  ls=3
 *   ── divider ──────────────────────────────────────── y = 330
 *   LOWER INFO BLOCK       y = 330 → 624  (294 px available)
 *     content visual span ≈ 131 px  →  padding ≈ 81 px each side
 *       lower title    baseline  y = 433    30 px bold
 *       lower desc     baseline  y = 481    26 px
 *       URL            baseline  y = 539    19 px gold
 *   ──────────────────────────────────────────────────────────────
 *   Bottom gold bar        y = 624–630
 */

import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../public/og-image.jpg");

const W = 1200;
const H = 630;

// Hebrew hex entities — avoids any BiDi control characters that librsvg/Unifont
// might render as visible glyphs.
// "בעברית"    = &#x05D1;&#x05E2;&#x05D1;&#x05E8;&#x05D9;&#x05EA;
// "תשלומים"  = &#x05EA;&#x05E9;&#x05DC;&#x05D5;&#x05DE;&#x05D9;&#x05DD;
// "ו"         = &#x05D5;
// These are plain Unicode scalar values — no BiDi marks.

const svg = /* xml */ `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#C9A84C"/>
      <stop offset="50%"  stop-color="#EDCB72"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
    <radialGradient id="brandGlow" cx="50%" cy="24%" r="36%">
      <stop offset="0%"   stop-color="#1E1809" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#09090E" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#09090E"/>
  <ellipse cx="600" cy="150" rx="480" ry="180" fill="url(#brandGlow)"/>

  <!-- TOP GOLD BAR -->
  <rect x="0" y="0" width="${W}" height="6" fill="url(#goldBar)"/>

  <!-- ═══════════════════════════════════════════════
       UPPER BRAND BLOCK  (centred in y 6 → 330)
       ═══════════════════════════════════════════════ -->

  <text x="432" y="148"
    font-family="DejaVu Sans" font-weight="bold" font-size="96"
    fill="#EDCB72" text-anchor="end" letter-spacing="-2"
  >NY</text>

  <text x="450" y="148"
    font-family="DejaVu Sans" font-weight="bold" font-size="96"
    fill="#EAEAF0" text-anchor="start" letter-spacing="-2"
  >PROP FIRMS</text>

  <text x="600" y="208"
    font-family="Unifont, DejaVu Sans, sans-serif" font-size="38"
    fill="#EAEAF0" text-anchor="middle"
  >&#x05D4;&#x05DE;&#x05D3;&#x05E8;&#x05D9;&#x05DA; &#x05D4;&#x05D9;&#x05E9;&#x05E8;&#x05D0;&#x05DC;&#x05D9; &#x05DC;&#x05D7;&#x05D1;&#x05E8;&#x05D5;&#x05EA; &#x05E4;&#x05E8;&#x05D5;&#x05E4;</text>

  <text x="600" y="251"
    font-family="DejaVu Sans" font-size="21"
    fill="#55556A" text-anchor="middle" letter-spacing="3"
  >Apex &#x2022; EOD &#x2022; Intraday &#x2022; PA</text>

  <!-- DIVIDER  y = 330 -->
  <line x1="480" y1="330" x2="720" y2="330"
    stroke="#EDCB72" stroke-width="1" opacity="0.28"/>

  <!-- ═══════════════════════════════════════════════
       LOWER INFO BLOCK  (centred in y 330 → 624)
       ═══════════════════════════════════════════════ -->

  <!-- Lower title: same Hebrew copy as subtitle, bold -->
  <text x="600" y="433"
    font-family="Unifont, DejaVu Sans, sans-serif" font-size="30" font-weight="bold"
    fill="#EAEAF0" text-anchor="middle"
  >&#x05D4;&#x05DE;&#x05D3;&#x05E8;&#x05D9;&#x05DA; &#x05D4;&#x05D9;&#x05E9;&#x05E8;&#x05D0;&#x05DC;&#x05D9; &#x05DC;&#x05D7;&#x05D1;&#x05E8;&#x05D5;&#x05EA; &#x05E4;&#x05E8;&#x05D5;&#x05E4;</text>

  <!-- Lower description: RTL base direction so Hebrew reads naturally;
       Latin terms (EOD, Intraday, PA, DLL) are embedded LTR runs within the RTL flow.
       font-size 28 keeps the Unifont Hebrew glyphs crisp and legible. -->
  <text x="600" y="481"
    font-family="DejaVu Sans, Unifont, sans-serif" font-size="27"
    fill="#7878A0" text-anchor="middle"
    direction="rtl" unicode-bidi="embed"
  >Apex &#x05D1;&#x05E2;&#x05D1;&#x05E8;&#x05D9;&#x05EA;: EOD, Intraday, PA, &#x05EA;&#x05E9;&#x05DC;&#x05D5;&#x05DE;&#x05D9;&#x05DD; &#x05D5;-DLL</text>

  <!-- URL row -->
  <text x="600" y="539"
    font-family="DejaVu Sans" font-size="19"
    fill="#EDCB72" text-anchor="middle" letter-spacing="1" opacity="0.80"
  >ny-propfirms.com</text>

  <!-- BOTTOM GOLD BAR -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#goldBar)"/>
</svg>
`.trim();

const buf = await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, mozjpeg: true })
  .toBuffer();

writeFileSync(OUT, buf);
console.log(`Written ${buf.length} bytes → ${OUT}`);
