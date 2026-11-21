import type { NextConfig } from "next";
import { REDIRECTS } from "./src/lib/redirects";

/**
 * 308 redirect map from kpis/redirect_and_measurement_plan.md v3 and sitemap v2.3.1.
 * permanent: true yields 308. The full query string is preserved by Next and every redirect is one hop.
 * No fragment in the Location header, except the two documented hub-anchor exceptions
 * (/apex/compliance and /en/rules-checklist). /go/* is never redirected.
 * Hebrew and other-firm page files stay in the repo; the old paths are disabled by redirect only
 * (/firms/*, /debug/links stay live, noindex and unlinked).
 */
const nextConfig: NextConfig = {
  // trailing-slash variants are redirected in src/proxy.ts so they take one hop
  skipTrailingSlashRedirect: true,
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  async redirects() {
    return REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/go/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
