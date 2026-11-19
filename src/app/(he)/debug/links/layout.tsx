import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Link debug",
};

export default function DebugLinksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
