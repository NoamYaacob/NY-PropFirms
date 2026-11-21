import type { Metadata } from "next";
import localFont from "next/font/local";
import { OptionA2 } from "./view";
import "./a2.css";

const interTight = localFont({
  src: [
    { path: "../fonts/inter-tight-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-tight-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter-tight-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/inter-tight-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-a2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A2 — NY Prop Firms",
  description: "Design preview. Not indexed.",
  robots: { index: false, follow: false },
};

export default function DesignA2Page() {
  return <OptionA2 fontClass={interTight.variable} />;
}
