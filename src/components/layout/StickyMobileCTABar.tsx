"use client";
import { useState, useEffect, useRef } from "react";
import { CouponChip } from "@/components/ui/CouponChip";
import { Button } from "@/components/ui/Button";

const APEX_URL = "https://apextraderfunding.com/member/aff/go/noamyaacob?c=BSQTZBMJ";

export function StickyMobileCTABar() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Show bar after scrolling past 80% of viewport height
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sentinel div — placed at hero bottom by homepage; used as fallback here */}
      <div ref={sentinelRef} />

      <div
        className={`sticky-cta-bar fixed bottom-0 inset-x-0 z-[150] flex items-center justify-between px-5 pt-3 md:hidden transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--surface-overlay)",
          borderTop: "1px solid var(--surface-border-strong)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.7)",
        }}
      >
        <CouponChip size="sm" />
        <Button
          label="פתח ב-Apex"
          href={APEX_URL}
          variant="primary"
          size="sm"
          external
        />
      </div>
    </>
  );
}
