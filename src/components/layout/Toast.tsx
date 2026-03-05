"use client";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export function Toast() {
  const { message, visible } = useToast();

  return (
    <div
      role="status"
      aria-live="polite"
      className={`toast fixed bottom-8 z-[200] flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium ${
        visible ? "toast-visible" : "toast-hidden"
      }`}
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "var(--surface-overlay)",
        border: "1px solid var(--green-edge)",
        color: "var(--text-primary)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
      }}
    >
      <CheckCircle size={15} style={{ color: "var(--green-400)", flexShrink: 0 }} />
      {message}
    </div>
  );
}
