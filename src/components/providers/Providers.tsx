"use client";
import { ToastProvider } from "@/context/ToastContext";
import { Toast } from "@/components/layout/Toast";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
        <Toast />
      </ToastProvider>
    </ThemeProvider>
  );
}
