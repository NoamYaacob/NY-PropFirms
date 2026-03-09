"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/context/ToastContext";
import { track } from "@/lib/track";

interface CopyButtonProps {
  value: string;
  label?: string;
  size?: "sm" | "md";
}

export function CopyButton({ value, label = "העתק", size = "sm" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    track("coupon_copy_click", { value });
    setCopied(true);
    showToast("הקוד הועתק ✓");
    setTimeout(() => setCopied(false), 2000);
  }

  const iconSize = size === "sm" ? 13 : 15;

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md transition-colors duration-150 focus:outline-none"
      style={{
        padding: size === "sm" ? "4px 10px" : "6px 14px",
        fontSize: size === "sm" ? "13px" : "14px",
        fontWeight: 500,
        color: copied ? "var(--green-400)" : "var(--text-secondary)",
        backgroundColor: "var(--surface-overlay)",
        border: "1px solid var(--surface-border-strong)",
      }}
      aria-label={`העתק ${value}`}
    >
      {copied ? (
        <Check size={iconSize} style={{ color: "var(--green-400)" }} />
      ) : (
        <Copy size={iconSize} />
      )}
      {copied ? "הועתק!" : label}
    </button>
  );
}
