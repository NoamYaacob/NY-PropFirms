"use client";

import { useRef, useEffect } from "react";
import { X } from "lucide-react";

export interface TimelineStep {
  label: string;
  sublabel?: string;
  variant?: "default" | "warning" | "danger" | "closure";
}

interface TimelineStripProps {
  steps: TimelineStep[];
  variant?: "horizontal" | "vertical";
}

const NODE_STYLE: Record<string, { bg: string; border: string; color: string }> = {
  default: {
    bg: "var(--surface-overlay)",
    border: "var(--gold-edge)",
    color: "var(--gold-300)",
  },
  warning: {
    bg: "var(--amber-900)",
    border: "var(--amber-edge)",
    color: "var(--amber-400)",
  },
  danger: {
    bg: "var(--red-900)",
    border: "var(--red-edge)",
    color: "var(--red-500)",
  },
  closure: {
    bg: "var(--red-900)",
    border: "var(--red-edge)",
    color: "var(--red-500)",
  },
};

export function TimelineStrip({ steps, variant = "horizontal" }: TimelineStripProps) {
  // Hooks must be unconditional — no-op for vertical variant
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "horizontal") return;
    const el = scrollRef.current;
    if (!el) return;
    // Only nudge when content actually overflows (i.e. on narrow screens)
    if (el.scrollWidth <= el.clientWidth) return;

    // One-time subtle nudge: peek left to reveal hidden steps, then return
    const t1 = setTimeout(() => {
      el.scrollBy({ left: -60, behavior: "smooth" });
      const t2 = setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 650);
      return () => clearTimeout(t2);
    }, 900);

    return () => clearTimeout(t1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (variant === "vertical") {
    return (
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => {
          const ns = NODE_STYLE[step.variant ?? "default"];
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    backgroundColor: ns.bg,
                    border: `1px solid ${ns.border}`,
                    color: ns.color,
                  }}
                >
                  {step.variant === "closure" ? (
                    <X size={14} style={{ color: ns.color }} />
                  ) : (
                    i + 1
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-1"
                    style={{
                      backgroundColor: "var(--surface-border-strong)",
                      minHeight: "32px",
                    }}
                  />
                )}
              </div>
              <div className="pb-6">
                <p className="text-sm font-semibold mt-2" style={{ color: ns.color }}>
                  {step.label}
                </p>
                {step.sublabel && (
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {step.sublabel}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal — scrollable on mobile, RTL-aware
  return (
    <div>
      {/* Mobile-only swipe hint */}
      <p
        className="md:hidden text-xs mb-3 text-center select-none"
        style={{ color: "var(--text-muted)" }}
        aria-hidden="true"
      >
        ← החליקו לצדדים כדי לראות את כל התשלומים →
      </p>

      {/* Scroll container with left-edge fade (content overflows to the left in RTL) */}
      <div className="relative">
        {/* Fade on the left edge — indicates more content is hidden there */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 md:hidden"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, var(--surface-raised) 0%, transparent 100%)",
          }}
        />

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none" } as React.CSSProperties}
        >
          <div className="flex items-center gap-0 min-w-max">
            {steps.map((step, i) => {
              const ns = NODE_STYLE[step.variant ?? "default"];
              return (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        backgroundColor: ns.bg,
                        border: `2px solid ${ns.border}`,
                        color: ns.color,
                      }}
                    >
                      {step.variant === "closure" ? (
                        <X size={15} style={{ color: ns.color }} />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className="text-xs text-center"
                      style={{
                        color:
                          step.variant === "closure" ? "var(--red-500)" : "var(--text-muted)",
                        maxWidth: 60,
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-8 h-px mx-1 mb-5"
                      style={{ backgroundColor: "var(--surface-border-strong)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
