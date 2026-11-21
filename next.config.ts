import type { NextConfig } from "next";

/**
 * 308 redirect map from kpis/redirect_and_measurement_plan.md v3 and sitemap v2.3.1.
 * permanent: true yields 308. The full query string is preserved by Next and every redirect is one hop.
 * No fragment in the Location header, except the two documented hub-anchor exceptions
 * (/apex/compliance and /en/rules-checklist). /go/* is never redirected.
 * Hebrew and other-firm page files stay in the repo; the old paths are disabled by redirect only
 * (/firms/*, /debug/links stay live, noindex and unlinked).
 */
const REDIRECTS: Array<[string, string]> = [
  ["/en", "/"],
  ["/en/apex-eod-vs-intraday", "/eod-vs-intraday"],
  ["/en/apex-payouts", "/payout-rules"],
  ["/en/account-size", "/account-comparison"],
  ["/en/faq", "/faq"],
  ["/en/how-i-make-money", "/about"],
  ["/en/sources", "/sources"],
  ["/apex", "/apex-rules"],
  ["/apex/eod", "/eod-vs-intraday"],
  ["/apex/intraday", "/eod-vs-intraday"],
  ["/apex/payouts", "/payout-rules"],
  ["/apex/compliance", "/apex-rules#prohibited-activities"],
  ["/en/apex-rules", "/apex-rules"],
  ["/en/rules-checklist", "/apex-rules#before-you-buy"],
  ["/en/newsletter", "/"],
  ["/en/consistency-calculator", "/trading-calculators"],
];

const nextConfig: NextConfig = {
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
