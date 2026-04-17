import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers/Providers";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTABar } from "@/components/layout/StickyMobileCTABar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { AccessibilityWidget } from "@/components/ui/AccessibilityWidget";
import { Analytics } from "@vercel/analytics/next";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ny-propfirms.com"),
  title: "NY Prop Firms — המדריך הישראלי לחברות פרופ",
  description:
    "הסברים ברורים בעברית על Apex, EOD, Intraday, PA, תשלומים, DLL, Tier ועוד.",
  openGraph: {
    type: "website",
    url: "https://ny-propfirms.com/",
    siteName: "NY Prop Firms",
    title: "NY Prop Firms — המדריך הישראלי לחברות פרופ",
    description:
      "הסברים ברורים בעברית על Apex, EOD, Intraday, PA, תשלומים, DLL, Tier ועוד.",
    images: [
      {
        url: "https://ny-propfirms.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NY Prop Firms — המדריך הישראלי לחברות פרופ",
      },
    ],
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "NY Prop Firms — המדריך הישראלי לחברות פרופ",
    description:
      "הסברים ברורים בעברית על Apex, EOD, Intraday, PA, תשלומים, DLL, Tier ועוד.",
    images: ["https://ny-propfirms.com/og-image.jpg"],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable} data-theme="dark">
      <head>
        {/* Inline script: sets data-theme before first paint to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Providers>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <StickyMobileCTABar />
          <WhatsAppFloat />
          <AccessibilityWidget />
          {/* Custom page_*_view events for key routes (funnel analysis) */}
          <PageViewTracker />
          {/* Vercel Analytics — automatic pageviews + custom events via src/lib/track.ts */}
          <Analytics />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
