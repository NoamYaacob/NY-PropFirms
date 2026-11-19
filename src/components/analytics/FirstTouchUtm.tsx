"use client";

import { useLayoutEffect } from "react";
import { captureFirstTouchUtm } from "@/lib/affiliate";

/** Records the landing page's utm_content before any CTA click. No other parameters are stored. */
export function FirstTouchUtm() {
  useLayoutEffect(() => {
    captureFirstTouchUtm();
  }, []);
  return null;
}
