import { Tag } from "lucide-react";
import { CopyButton } from "./CopyButton";

const COUPON = "TLHCODE";

interface CouponChipProps {
  size?: "sm" | "lg";
}

export function CouponChip({ size = "sm" }: CouponChipProps) {
  if (size === "sm") {
    return (
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-2"
        style={{
          backgroundColor: "var(--surface-overlay)",
          border: "1px solid var(--gold-edge)",
        }}
      >
        <Tag size={14} style={{ color: "var(--gold-400)" }} />
        <span
          className="font-mono font-bold tracking-widest"
          style={{ color: "var(--gold-300)", fontSize: "15px", letterSpacing: "0.08em" }}
        >
          {COUPON}
        </span>
        <CopyButton value={COUPON} size="sm" />
      </div>
    );
  }

  return (
    <div
      className="card-featured flex flex-col items-center gap-4 px-8 py-8 text-center"
      style={{ maxWidth: 420, margin: "0 auto" }}
    >
      <div className="flex items-center gap-2">
        <Tag size={18} style={{ color: "var(--gold-400)" }} />
        <span
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          קוד הנחה
        </span>
      </div>
      <span
        className="font-mono font-bold tracking-widest"
        style={{ color: "var(--gold-300)", fontSize: "28px", letterSpacing: "0.1em" }}
      >
        {COUPON}
      </span>
      <CopyButton value={COUPON} size="md" label="העתק קוד" />
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        הזן את הקוד בעת פתיחת המבחן באתר Apex
      </p>
    </div>
  );
}
