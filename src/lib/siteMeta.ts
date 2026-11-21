import type { Metadata } from "next";
import { SITE_URL } from "@/design-system/strings";

/** Per-route metadata: absolute title, description, self-canonical (en-US), Open Graph. */
export function pageMeta(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: { "en-US": url, "x-default": url } },
    openGraph: { type: "website", url, siteName: "NY Prop Firms", title, description, locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}
