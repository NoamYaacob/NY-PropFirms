import type { MetadataRoute } from "next";

/** Allow /, disallow /go/. Old /en/* and /apex* paths are not disallowed so crawlers can see the 308s. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/go/", "/design/"] },
    sitemap: "https://ny-propfirms.com/sitemap.xml",
  };
}
