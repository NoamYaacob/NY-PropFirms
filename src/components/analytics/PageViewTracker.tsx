"use client";

/**
 * PageViewTracker — fires custom page_*_view events for key routes.
 *
 * WHY: Vercel Analytics automatically tracks all pageviews (visible in the
 * "Pages" tab of the dashboard). This component fires *custom events* for
 * the same key pages so they appear in the "Events" tab alongside CTA
 * events — making funnel analysis easier without leaving that tab.
 *
 * Mount once in layout.tsx. Re-fires on every client-side navigation.
 *
 * TO REMOVE: delete this file and remove <PageViewTracker /> from layout.tsx.
 * TO ADD A PAGE: add an entry to PAGE_EVENTS below.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

const PAGE_EVENTS: Record<string, string> = {
  "/":                 "page_home_view",
  "/apex":             "page_apex_view",
  "/apex/eod":         "page_apex_eod_view",
  "/apex/intraday":    "page_apex_intraday_view",
  "/apex/payouts":     "page_apex_payouts_view",
  "/faq":              "page_faq_view",
  "/about":            "page_about_view",
};

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const eventName = PAGE_EVENTS[pathname];
    if (eventName) track(eventName);
  }, [pathname]);

  return null;
}
