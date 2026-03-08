import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTABar } from "@/components/layout/StickyMobileCTABar";
import { AIChatWidget } from "@/components/ui/AIChatWidget";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NY Prop Firms — המדריך הישראלי לחברות פרופ",
  description: "כללי Apex Trader Funding בעברית — ממסמכים רשמיים בלבד",
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
          <AIChatWidget />
        </Providers>
      </body>
    </html>
  );
}
