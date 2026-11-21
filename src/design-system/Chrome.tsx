"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FOOTER_COLUMNS, FTR_FULL, HDR_BAR, NAV_MAIN, ROUTES } from "./strings";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link href="/" className={`ds-logo ${size === "lg" ? "ds-logo-lg" : ""}`} dir="ltr" aria-label="NY Prop Firms, home">
      <span className="ds-gold-text">NY</span>
      <span>PROP FIRMS</span>
    </Link>
  );
}

export function HdrBar() {
  return (
    <div className="ds-hdrbar">
      <Link href="/about#disclosure" className="ds-hdrbar-text">
        {HDR_BAR}
      </Link>
      <nav className="ds-hdrbar-util" aria-label="Utility">
        <Link href="/updates">Latest Updates</Link>
        <Link href="/sources">Sources</Link>
      </nav>
    </div>
  );
}

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  useEffect(() => close(), [pathname, close]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname === href);
  const rulesActive = pathname === "/apex-rules" || pathname === "/evaluation-rules" || pathname === "/performance-account-rules";

  return (
    <header className="ds-header" data-scrolled={scrolled || open ? "1" : "0"}>
      <div className="mx-auto flex h-[4.1rem] max-w-[1180px] items-center justify-between gap-3 px-4 md:h-[4.5rem] md:px-6">
        <Logo />
        <div className="flex items-center gap-1">
          <nav className="hidden items-center xl:flex" aria-label="Main">
            {NAV_MAIN.map((item) =>
              item.children ? (
                <div key={item.href} className="ds-dd">
                  <Link href={item.href} className="ds-navlink" aria-current={rulesActive ? "page" : undefined}>
                    {item.label} <ChevronDown size={14} aria-hidden />
                  </Link>
                  <div className="ds-dd-menu" role="group" aria-label="Apex Rules">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="ds-navlink" aria-current={active(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <ThemeToggle locale="en" />
          <button type="button" className="ds-menubtn xl:hidden" aria-expanded={open} aria-controls="ds-drawer" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="ds-drawer" className="ds-drawer" aria-label="Site">
          <ul className="mx-auto grid max-w-[1180px] gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="ds-drawer-link" aria-current={active(r.href) ? "page" : undefined} onClick={close}>
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ds-footer">
      <div className="mx-auto max-w-[1180px] px-4 py-6 md:px-6">
        <Logo size="lg" />
        <div className="mt-4 grid gap-x-5 gap-y-4 md:grid-cols-3">
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="ds-footer-h">{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="ds-footer-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="ds-ftr mt-4">{FTR_FULL}</p>
        <p className="ds-ftr-c">
          © {new Date().getFullYear()} NY Prop Firms ·{" "}
          <Link href="/about#privacy" className="underline">
            Privacy &amp; Cookies
          </Link>
        </p>
      </div>
    </footer>
  );
}
