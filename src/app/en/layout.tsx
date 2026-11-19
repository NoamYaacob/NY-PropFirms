import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers/Providers";
import { FirstTouchUtm } from "@/components/analytics/FirstTouchUtm";
import { DisclosureBar } from "@/components/en/DisclosureBar";
import { EnHeader } from "@/components/en/EnHeader";
import { EnFooter } from "@/components/en/EnFooter";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ny-propfirms.com"),
  title: {
    default: "NY Prop Firms",
    template: "%s",
  },
  openGraph: {
    type: "website",
    siteName: "NY Prop Firms",
    locale: "en_US",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" dir="ltr" className={heebo.variable} data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Providers>
          <FirstTouchUtm />
          <DisclosureBar />
          <EnHeader />
          <main>{children}</main>
          <EnFooter />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
