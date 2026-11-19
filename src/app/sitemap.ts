import type { MetadataRoute } from "next";

const BASE = "https://ny-propfirms.com";

const EN_PATHS = [
  "/en",
  "/en/apex-eod-vs-intraday",
  "/en/apex-payouts",
  "/en/account-size",
  "/en/how-i-make-money",
  "/en/sources",
  "/en/faq",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const enUpdated = new Date("2026-11-19");
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "he-IL": `${BASE}/`,
          "en-US": `${BASE}/en`,
          "x-default": `${BASE}/`,
        },
      },
    },
    { url: `${BASE}/apex`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/apex/eod`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/apex/intraday`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/apex/payouts`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...EN_PATHS.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: enUpdated,
      changeFrequency: "weekly" as const,
      priority: path === "/en" ? 0.9 : 0.7,
      alternates:
        path === "/en"
          ? {
              languages: {
                "en-US": `${BASE}/en`,
                "he-IL": `${BASE}/`,
                "x-default": `${BASE}/`,
              },
            }
          : undefined,
    })),
  ];
}
