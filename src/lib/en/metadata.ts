import type { Metadata } from "next";

const SITE = "https://ny-propfirms.com";

export function enMetadata(
  path: string,
  title: string,
  description: string,
  options?: { pairWithHebrewHome?: boolean }
): Metadata {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      ...(options?.pairWithHebrewHome
        ? { languages: { "en-US": "/en", "he-IL": "/", "x-default": "/" } }
        : {}),
    },
    openGraph: {
      type: "website",
      url,
      locale: "en_US",
      siteName: "NY Prop Firms",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function enBreadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}
