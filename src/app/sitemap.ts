import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/design-system/strings";

/** 12 English root URLs only. No Hebrew entries, no hreflang to Hebrew. */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-21");
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.href === "/" ? "/" : r.href}`,
    lastModified: updated,
    changeFrequency: r.href === "/updates" ? "weekly" : "monthly",
    priority: r.href === "/" ? 1 : 0.7,
  }));
}
