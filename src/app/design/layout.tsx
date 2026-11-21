import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { FirstTouchUtm } from "@/components/analytics/FirstTouchUtm";
import { Providers } from "@/components/providers/Providers";
import { designFontVariables } from "./font-setup";
import "../globals.css";
import "./design.css";

export const metadata: Metadata = {
  title: {
    default: "Design preview — NY Prop Firms",
    template: "%s",
  },
  robots: { index: false, follow: false },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" dir="ltr" className={designFontVariables} data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="design-body antialiased">
        <Providers>
          <FirstTouchUtm />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
