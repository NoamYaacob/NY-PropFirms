import localFont from "next/font/local";

export const newsreader = localFont({
  src: [
    { path: "./fonts/newsreader-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/newsreader-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/newsreader-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/newsreader-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

export const sourceSans = localFont({
  src: [
    { path: "./fonts/source-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/source-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

export const plexSans = localFont({
  src: [
    { path: "./fonts/plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex-sans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plex-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "./fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const familjen = localFont({
  src: [
    { path: "./fonts/familjen-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/familjen-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/familjen-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-familjen",
  display: "swap",
});

export const designFontVariables = [
  newsreader.variable,
  sourceSans.variable,
  plexSans.variable,
  plexMono.variable,
  familjen.variable,
].join(" ");
