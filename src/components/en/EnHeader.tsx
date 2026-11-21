"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
  { href: "/en", label: "Home" },
  { href: "/en/apex-eod-vs-intraday", label: "EOD vs Intraday" },
  { href: "/en/apex-payouts", label: "Payouts" },
  { href: "/en/account-size", label: "Account size" },
  { href: "/en/faq", label: "FAQ" },
  { href: "/en/sources", label: "Sources" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/en") return pathname === "/en";
  return pathname === href || pathname.startsWith(href + "/");
}

export function EnHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-[100] border-b"
      style={{
        backgroundColor: "var(--surface-overlay)",
        borderColor: "var(--surface-border)",
      }}
    >
      <div className="container-page flex items-center justify-between gap-3 min-h-16 py-3">
        <Link href="/en" className="font-bold text-base tracking-tight min-w-0 leading-tight" style={{ color: "var(--text-primary)" }}>
          <span style={{ color: "var(--gold-300)" }}>NY Prop Firms</span>
          <span className="font-medium" style={{ color: "var(--text-muted)" }}>
            {" "}
            · Futures prop rules, decoded
          </span>
        </Link>

        <div className="flex items-center gap-1 shrink-0">
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {NAV.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="px-2.5 py-2 rounded-md text-sm font-medium"
                  style={{
                    color: current ? "var(--gold-300)" : "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/"
            hrefLang="he"
            lang="he"
            className="inline-flex items-center min-h-11 px-2 text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            עברית
          </Link>
          <ThemeToggle locale="en" />
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-md"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="lg:hidden border-t px-5 py-3 flex flex-col" aria-label="Main" style={{ borderColor: "var(--surface-border)" }}>
          {NAV.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="py-3 text-lg font-semibold"
                style={{ color: current ? "var(--gold-300)" : "var(--text-primary)" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
