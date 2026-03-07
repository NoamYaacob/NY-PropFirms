export type AccountType =
  | "eod"
  | "intraday"
  | "universal"
  | "pa"
  | "eod-pa"
  | "intraday-pa"
  | "verify";

interface Config {
  label: string;
  bg: string;
  color: string;
  border: string;
}

const CONFIG: Record<AccountType, Config> = {
  eod: {
    label: "EOD בלבד",
    bg: "#1A1A30",
    color: "#7EA0FF",
    border: "#2A2A50",
  },
  intraday: {
    label: "Intraday בלבד",
    bg: "var(--teal-900)",
    color: "var(--teal-400)",
    border: "var(--teal-edge)",
  },
  universal: {
    label: "כל סוגי החשבונות",
    bg: "var(--green-900)",
    color: "var(--green-400)",
    border: "var(--green-edge)",
  },
  pa: {
    label: "PA בלבד",
    bg: "#1A1530",
    color: "#9B8AE0",
    border: "#352A60",
  },
  "eod-pa": {
    label: "EOD PA",
    bg: "#1A1530",
    color: "#9B8AE0",
    border: "#352A60",
  },
  "intraday-pa": {
    label: "Intraday PA",
    bg: "var(--teal-900)",
    color: "var(--teal-400)",
    border: "var(--teal-edge)",
  },
  verify: {
    label: "יש לאמת ישירות",
    bg: "var(--amber-900)",
    color: "var(--amber-400)",
    border: "var(--amber-edge)",
  },
};

interface AccountTypeBadgeProps {
  type: AccountType;
}

export function AccountTypeBadge({ type }: AccountTypeBadgeProps) {
  const cfg = CONFIG[type];
  return (
    <span
      className="inline-flex items-center shrink-0 whitespace-nowrap text-xs font-medium rounded-full px-2.5 py-1 leading-none"
      style={{
        backgroundColor: cfg.bg,
        color: cfg.color,
        border: `1px solid ${cfg.border}`,
      }}
    >
      {cfg.label}
    </span>
  );
}
