import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTABar } from "@/components/layout/StickyMobileCTABar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="antialiased">
        <Providers>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <StickyMobileCTABar />
        </Providers>
      </body>
    </html>
  );
}
