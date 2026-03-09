"use client";
import { usePathname } from "next/navigation";
import { WA } from "@/lib/whatsapp";
import { track } from "@/lib/track";

/** Inline WhatsApp logo SVG — recognisable, no external dependency */
function WhatsAppIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 0C7.163 0 0 7.163 0 16c0 2.835.74 5.494 2.036 7.8L0 32l8.442-2.008A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
        fill="white"
      />
      <path
        d="M23.47 19.26c-.37-.185-2.19-1.08-2.53-1.203-.34-.122-.587-.185-.834.185-.247.37-.957 1.204-1.173 1.45-.216.247-.432.278-.802.093-.37-.186-1.562-.576-2.975-1.839-1.1-.983-1.843-2.195-2.059-2.566-.216-.37-.023-.57.162-.755.167-.165.37-.432.555-.648.185-.216.247-.37.37-.617.124-.247.062-.463-.031-.648-.093-.185-.834-2.01-1.142-2.751-.3-.72-.607-.623-.834-.636-.216-.01-.463-.012-.71-.012-.247 0-.648.093-.988.463-.34.37-1.296 1.266-1.296 3.088 0 1.822 1.327 3.582 1.512 3.83.185.247 2.612 3.99 6.33 5.595.885.381 1.575.609 2.113.779.888.283 1.696.243 2.334.148.712-.107 2.192-.896 2.502-1.763.31-.864.31-1.606.216-1.762-.093-.154-.34-.247-.71-.432z"
        fill="#25D366"
      />
    </svg>
  );
}

/**
 * Site-wide floating WhatsApp button.
 * - Desktop: bottom-right corner
 * - Mobile: bottom-right, elevated above the StickyMobileCTABar (bottom-20)
 * - z-[100] — visible above content, below z-[150] sticky bar
 */
export function WhatsAppFloat() {
  const pathname = usePathname();
  return (
    <a
      href={WA.DIRECT}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_direct_click", { page: pathname })}
      aria-label="שלחו לי הודעה בוואטסאפ"
      title="שלחו לי הודעה בוואטסאפ"
      className="fixed z-[100] bottom-20 right-4 md:bottom-6 md:right-6 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      style={{
        width: "52px",
        height: "52px",
        backgroundColor: "#25D366",
        boxShadow:
          "0 4px 16px rgba(37, 211, 102, 0.35), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <WhatsAppIcon />
    </a>
  );
}
