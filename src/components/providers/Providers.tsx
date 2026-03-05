"use client";
import { ToastProvider } from "@/context/ToastContext";
import { Toast } from "@/components/layout/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <Toast />
    </ToastProvider>
  );
}
