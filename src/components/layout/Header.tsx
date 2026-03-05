"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV = [
  { label: "ראשי", href: "/" },
  {
    label: "Apex",
    href: "/apex",
    children: [
      { label: "כל הכללים", href: "/apex" },
      { label: "EOD", href: "/apex/eod" },
      { label: "Intraday", href: "/apex/intraday" },
      { label: "תשלומים", href: "/apex/payouts" },
      { label: "ציות", href: "/apex/compliance" },
    ],
  },
  { label: "שאלות נפוצות", href: "/faq" },
  { label: "אודות", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [apexOpen, setApexOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setApexOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-[100] transition-all duration-200"
        style={{
          backgroundColor: scrolled || mobileOpen ? "var(--surface-overlay)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--surface-border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container-page flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 font-bold text-lg tracking-tight">
            <span style={{ color: "var(--gold-300)" }}>NY</span>
            <span style={{ color: "var(--text-primary)" }}>PROP FIRMS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              if (item.children) {
                return (
                  <div key={item.href} className="relative">
                    <button
                      onClick={() => setApexOpen((v) => !v)}
                      className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      style={{ color: isActive ? "var(--gold-300)" : "var(--text-secondary)" }}
                      onMouseEnter={() => setApexOpen(true)}
                      onMouseLeave={() => setApexOpen(false)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        style={{ transform: apexOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }}
                      />
                    </button>
                    {apexOpen && (
                      <div
                        className="absolute top-full mt-1 rounded-xl py-2 min-w-[160px]"
                        style={{
                          backgroundColor: "var(--surface-overlay)",
                          border: "1px solid var(--surface-border-strong)",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                          insetInlineEnd: 0,
                        }}
                        onMouseEnter={() => setApexOpen(true)}
                        onMouseLeave={() => setApexOpen(false)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-[var(--surface-border)]"
                            style={{ color: pathname === child.href ? "var(--gold-300)" : "var(--text-primary)" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-[var(--text-primary)]"
                  style={{
                    color: isActive ? "var(--gold-300)" : "var(--text-secondary)",
                    borderBottom: isActive ? "2px solid var(--gold-500)" : "2px solid transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="תפריט"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[90] flex flex-col pt-16 md:hidden"
          style={{ backgroundColor: "var(--surface-base)" }}
        >
          <nav className="flex flex-col gap-1 p-6">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 rounded-lg text-xl font-semibold transition-colors"
                  style={{
                    color: pathname === item.href ? "var(--gold-300)" : "var(--text-primary)",
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-1 mb-2 ms-4 flex flex-col gap-1">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 px-4 rounded-md text-base transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
