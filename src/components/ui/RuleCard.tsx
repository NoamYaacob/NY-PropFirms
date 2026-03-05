import { LucideIcon } from "lucide-react";
import { SourceBadge, SourceBadgeProps } from "./SourceBadge";
import { AccountTypeBadge, AccountType } from "./AccountTypeBadge";
import { CalloutBox } from "./CalloutBox";

interface RuleCardProps {
  title: string;
  body: React.ReactNode;
  icon?: LucideIcon;
  accountType?: AccountType;
  source: SourceBadgeProps;
  variant?: "default" | "prohibited";
  verifyNote?: string;
}

export function RuleCard({
  title,
  body,
  icon: Icon,
  accountType,
  source,
  variant = "default",
  verifyNote,
}: RuleCardProps) {
  const isProhibited = variant === "prohibited";

  return (
    <div
      className={`rounded-xl p-5 flex flex-col gap-4 transition-all duration-200 ${
        isProhibited
          ? ""
          : "hover:-translate-y-0.5 hover:border-[var(--surface-border-strong)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
      }`}
      style={{
        backgroundColor: isProhibited ? "var(--red-900)" : "var(--surface-raised)",
        border: `1px solid ${isProhibited ? "var(--red-edge)" : "var(--surface-border)"}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon
              size={18}
              style={{
                color: isProhibited ? "var(--red-500)" : "var(--gold-400)",
                flexShrink: 0,
              }}
            />
          )}
          <h3
            className="font-semibold text-base"
            style={{ color: isProhibited ? "#FFAAAA" : "var(--text-primary)" }}
          >
            {title}
          </h3>
        </div>
        {accountType && <AccountTypeBadge type={accountType} />}
      </div>

      {/* Body */}
      <div className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {body}
      </div>

      {/* Verify note */}
      {verifyNote && (
        <CalloutBox variant="verify" body={verifyNote} source={source} />
      )}

      {/* Footer */}
      {!verifyNote && (
        <div className="pt-1">
          <SourceBadge {...source} />
        </div>
      )}
    </div>
  );
}
