"use client";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { WA } from "@/lib/whatsapp";
import { track } from "@/lib/track";

/** Inline WhatsApp logo */
function WhatsAppIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.47 19.26c-.37-.185-2.19-1.08-2.53-1.203-.34-.122-.587-.185-.834.185-.247.37-.957 1.204-1.173 1.45-.216.247-.432.278-.802.093-.37-.186-1.562-.576-2.975-1.839-1.1-.983-1.843-2.195-2.059-2.566-.216-.37-.023-.57.162-.755.167-.165.37-.432.555-.648.185-.216.247-.37.37-.617.124-.247.062-.463-.031-.648-.093-.185-.834-2.01-1.142-2.751-.3-.72-.607-.623-.834-.636-.216-.01-.463-.012-.71-.012-.247 0-.648.093-.988.463-.34.37-1.296 1.266-1.296 3.088 0 1.822 1.327 3.582 1.512 3.83.185.247 2.612 3.99 6.33 5.595.885.381 1.575.609 2.113.779.888.283 1.696.243 2.334.148.712-.107 2.192-.896 2.502-1.763.31-.864.31-1.606.216-1.762-.093-.154-.34-.247-.71-.432z"
        fill="white"
      />
    </svg>
  );
}

/**
 * WhatsApp community group button.
 * Direct-message to Noam is now handled via the AI chat escalation flow.
 */
export function WhatsAppButtons() {
  const pathname = usePathname();
  return (
    <a
      href={WA.GROUP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_group_click", { page: pathname })}
      className="flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--surface-border-strong)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
      style={{
        backgroundColor: "var(--surface-raised)",
        border: "1px solid var(--surface-border-strong)",
        textDecoration: "none",
      }}
    >
      <WhatsAppIcon />
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold text-sm leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          לקבוצת הווטסאפ
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
          עדכונים, הסברים ותוכן על Apex
        </p>
      </div>
      <ExternalLink
        size={13}
        style={{ color: "var(--text-muted)", flexShrink: 0 }}
      />
    </a>
  );
}
