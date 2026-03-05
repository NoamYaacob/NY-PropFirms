import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { SourceBadge, SourceBadgeProps } from "./SourceBadge";
import { AccountTypeBadge, AccountType } from "./AccountTypeBadge";

export type CalloutVariant = "info" | "warning" | "success" | "prohibited" | "verify";

interface CalloutBoxProps {
  variant: CalloutVariant;
  title?: string;
  body: React.ReactNode;
  source?: SourceBadgeProps;
  accountType?: AccountType;
}

const ICON = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  prohibited: XCircle,
  verify: AlertTriangle,
};

const ICON_COLOR: Record<CalloutVariant, string> = {
  info: "var(--teal-400)",
  warning: "var(--amber-400)",
  success: "var(--green-400)",
  prohibited: "var(--red-500)",
  verify: "var(--amber-400)",
};

const TITLE_COLOR: Record<CalloutVariant, string> = {
  info: "var(--teal-400)",
  warning: "var(--amber-400)",
  success: "var(--green-400)",
  prohibited: "var(--red-500)",
  verify: "var(--amber-400)",
};

export function CalloutBox({
  variant,
  title,
  body,
  source,
  accountType,
}: CalloutBoxProps) {
  const Icon = ICON[variant];
  const cssClass = `callout-${variant}`;

  return (
    <div className={`${cssClass} rounded-xl p-4 flex flex-col gap-3`}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon
            size={17}
            style={{ color: ICON_COLOR[variant], flexShrink: 0, marginTop: 1 }}
          />
          {title && (
            <span
              className="text-sm font-semibold"
              style={{ color: TITLE_COLOR[variant] }}
            >
              {title}
            </span>
          )}
        </div>
        {accountType && <AccountTypeBadge type={accountType} />}
      </div>

      {/* Body */}
      <div className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {body}
      </div>

      {/* Source */}
      {source && (
        <div>
          <SourceBadge {...source} />
        </div>
      )}
    </div>
  );
}
