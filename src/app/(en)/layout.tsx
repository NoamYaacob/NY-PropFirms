import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { FirstTouchUtm } from "@/components/analytics/FirstTouchUtm";
import { Providers } from "@/components/providers/Providers";
import { Footer, Header, HdrBar } from "@/design-system/Chrome";
import { SITE_URL } from "@/design-system/strings";
import "../globals.css";
import "@/design-system/ds.css";

const interTight = localFont({
  src: [
    { path: "../../design-system/fonts/inter-tight-400.woff2", weight: "400", style: "normal" },
    { path: "../../design-system/fonts/inter-tight-500.woff2", weight: "500", style: "normal" },
    { path: "../../design-system/fonts/inter-tight-700.woff2", weight: "700", style: "normal" },
    { path: "../../design-system/fonts/inter-tight-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-ds",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../../design-system/fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../../design-system/fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "NY Prop Firms", template: "%s" },
  openGraph: { type: "website", siteName: "NY Prop Firms", locale: "en_US" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" dir="ltr" className={`${interTight.variable} ${plexMono.variable}`} data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="ds-body antialiased">
        <Providers>
          <FirstTouchUtm />
          <div className="ds">
            <a className="skip-link" href="#content">
              Skip to content
            </a>
            <HdrBar />
            <Header />
            <main id="content">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
