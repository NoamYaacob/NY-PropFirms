"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps {
  label: string;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  /** Optional extra click handler (e.g. for analytics from client callers). */
  onClick?: () => void;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "font-semibold transition-all duration-150 active:scale-[0.98] focus:outline-none",
  secondary:
    "font-semibold transition-all duration-150 focus:outline-none",
  ghost:
    "font-medium transition-all duration-150 focus:outline-none",
};

const sizes: Record<ButtonSize, string> = {
  lg: "px-6 py-3 text-base rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-lg",
  sm: "px-4 py-2 text-xs rounded-md",
};

export function Button({
  label,
  href,
  variant = "primary",
  size = "lg",
  external = false,
  fullWidth = false,
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const pathname = usePathname();
  const base = `inline-flex items-center justify-center gap-2 ${styles[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  const variantStyle =
    variant === "primary"
      ? {
          backgroundColor: "var(--gold-500)",
          color: "var(--text-inverse)",
        }
      : variant === "secondary"
      ? {
          backgroundColor: "transparent",
          border: "1px solid var(--surface-border-strong)",
          color: "var(--text-primary)",
        }
      : {
          backgroundColor: "transparent",
          color: "var(--text-secondary)",
        };

  const hoverClass =
    variant === "primary"
      ? "hover:brightness-110"
      : variant === "secondary"
      ? "hover:border-[var(--gold-edge)] hover:text-[var(--gold-300)] hover:bg-[var(--gold-900)]"
      : "hover:bg-[var(--surface-overlay)] hover:text-[var(--text-primary)]";

  const finalClass = `${base} ${hoverClass}`;

  const content = (
    <>
      {label}
      {external && <ExternalLink size={14} />}
    </>
  );

  // Auto-fire open_apex_cta_click for any external link to Apex Trader Funding.
  // This covers all Button instances site-wide without needing per-page changes.
  function handleClick() {
    if (external && href.includes("apextraderfunding.com")) {
      track("open_apex_cta_click", { label, page: pathname });
    }
    onClick?.();
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClass}
        style={variantStyle}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={finalClass} style={variantStyle} onClick={handleClick}>
      {content}
    </Link>
  );
}
