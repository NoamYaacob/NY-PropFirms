import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ny-propfirms.com"),
  title: "Continuing to Apex",
  robots: { index: false, follow: false },
};

export default function GoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
