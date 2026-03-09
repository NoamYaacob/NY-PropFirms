"use client";

/**
 * AccessibilityWidget — site-wide floating accessibility panel.
 *
 * ── TO REMOVE ──────────────────────────────────────────────────────────────
 *   1. Delete this file.
 *   2. Remove <AccessibilityWidget /> from src/app/layout.tsx.
 *   3. Remove the "Accessibility preference overrides" block in globals.css.
 * ── TO CONFIGURE ───────────────────────────────────────────────────────────
 *   Adjust FONT_STEPS or add/remove feature toggles in the panel JSX below.
 *
 * Position (mirrors WhatsAppFloat on the opposite physical corner):
 *   mobile   bottom-20 left-4   — above StickyMobileCTABar, clear of WhatsApp
 *   desktop  bottom-6  left-6   — clear of WhatsApp (bottom-6 right-6)
 * z-index: z-[100] — same level as WhatsAppFloat, different corners → no overlap.
 */

import { useState, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type FontStep = "md" | "lg" | "xl";
interface Prefs {
  font: FontStep;
  contrast: boolean;
  links: boolean;
}
const DEFAULT_PREFS: Prefs = { font: "md", contrast: false, links: false };
const STORAGE_KEY = "ny-a11y-prefs";

// ── Helpers ────────────────────────────────────────────────────────────────
const FONT_CLASS: Record<FontStep, string> = {
  md: "",
  lg: "a11y-text-lg",
  xl: "a11y-text-xl",
};

function applyPrefs(p: Prefs) {
  const cl = document.documentElement.classList;
  // Font size
  cl.remove("a11y-text-lg", "a11y-text-xl");
  if (FONT_CLASS[p.font]) cl.add(FONT_CLASS[p.font]);
  // High contrast
  cl.toggle("a11y-contrast", p.contrast);
  // Underline links
  cl.toggle("a11y-links", p.links);
}

// ── Icons ──────────────────────────────────────────────────────────────────
function IconA11y() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <circle cx="12" cy="4.5" r="2.1" />
      {/* arms */}
      <rect x="7" y="8.5" width="10" height="2" rx="1" />
      {/* body + legs */}
      <path d="M11 10.5h2v4.2l1.8 4.8h-2L12 17l-.8 2.5h-2l1.8-4.8v-4.2z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// ── Toggle switch ──────────────────────────────────────────────────────────
function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none">
      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="relative rounded-full flex-shrink-0 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
        style={{
          width: "36px",
          height: "20px",
          background: checked ? "var(--gold-500)" : "var(--surface-border-strong)",
        }}
      >
        <span
          className="absolute top-0.5 rounded-full transition-transform duration-200"
          style={{
            width: "16px",
            height: "16px",
            background: "#fff",
            // Physical translateX — correct in both LTR and RTL
            transform: checked ? "translateX(18px)" : "translateX(2px)",
          }}
        />
      </button>
    </label>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);

  // Restore saved preferences on mount (SSR-safe)
  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(raw) });
    } catch { /* ignore */ }
  }, []);

  // Apply preferences to <html> and persist
  useEffect(() => {
    if (!mounted) return;
    applyPrefs(prefs);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch { /* ignore */ }
  }, [prefs, mounted]);

  // Close panel on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const set = <K extends keyof Prefs>(key: K, value: Prefs[K]) =>
    setPrefs((p) => ({ ...p, [key]: value }));

  const FONT_LABELS: Record<FontStep, string> = { md: "רגיל", lg: "גדול", xl: "גדול מאוד" };

  return (
    // Mirrors WhatsAppFloat position but on physical-left side
    <div className="fixed z-[100] bottom-20 left-4 md:bottom-6 md:left-6" dir="rtl">

      {/* ── Panel ── */}
      {open && (
        <div
          className="absolute bottom-full mb-3 left-0 rounded-xl p-4"
          style={{
            width: "248px",
            background: "var(--surface-overlay)",
            border: "1px solid var(--surface-border-strong)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
          }}
          role="dialog"
          aria-label="הגדרות נגישות"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              נגישות
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="סגור תפריט נגישות"
              className="rounded-lg p-1 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              style={{ color: "var(--text-muted)" }}
            >
              <IconClose />
            </button>
          </div>

          {/* Font size */}
          <div className="mb-4">
            <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>גודל טקסט</p>
            <div className="flex gap-2">
              {(["md", "lg", "xl"] as FontStep[]).map((step) => {
                const active = prefs.font === step;
                return (
                  <button
                    key={step}
                    onClick={() => set("font", step)}
                    aria-pressed={active}
                    className="flex-1 rounded-lg py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    style={{
                      background: active ? "var(--gold-900)" : "var(--surface-base)",
                      border: `1px solid ${active ? "var(--gold-edge)" : "var(--surface-border)"}`,
                      color: active ? "var(--gold-300)" : "var(--text-secondary)",
                    }}
                  >
                    {FONT_LABELS[step]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-col gap-3">
            <Toggle label="ניגודיות גבוהה" checked={prefs.contrast} onChange={(v) => set("contrast", v)} />
            <Toggle label="הדגשת קישורים" checked={prefs.links}    onChange={(v) => set("links",    v)} />
          </div>

          {/* Reset */}
          {(prefs.font !== "md" || prefs.contrast || prefs.links) && (
            <button
              onClick={() => setPrefs(DEFAULT_PREFS)}
              className="mt-4 w-full text-xs py-1.5 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              style={{ color: "var(--text-muted)", border: "1px solid var(--surface-border)" }}
            >
              איפוס הגדרות
            </button>
          )}
        </div>
      )}

      {/* ── Trigger button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="פתח הגדרות נגישות"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        style={{
          width: "48px",
          height: "48px",
          background: "var(--surface-overlay)",
          border: "1.5px solid var(--surface-border-strong)",
          color: "var(--text-secondary)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
        }}
      >
        <IconA11y />
      </button>
    </div>
  );
}
