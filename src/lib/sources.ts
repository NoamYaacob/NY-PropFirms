export interface Source {
  title: string;
  href: string;
}

export const S = {
  APEX_30_RULES: {
    title: "Apex 3.0 Payout and Trading Rules",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/30306093336603",
  },
  EVALUATION_FEES: {
    title: "Evaluation Plan Fees and Access Explained",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/46723099925403",
  },
  EOD_EVALUATIONS: {
    title: "EOD Evaluations",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/46724640813083",
  },
  INTRADAY_EVALUATIONS: {
    title: "Intraday Trailing Drawdown Evaluations",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/45683414022299",
  },
  DAILY_LOSS_LIMIT: {
    title: "Daily Loss Limit Explained",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/47257193113371",
  },
  PA_COMPLIANCE: {
    title: "Performance Account (PA) and Compliance",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/31519788944411",
  },
  PAYOUT_RULES: {
    title: "PA Payout Rules and Payout Method",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/31519771933211",
  },
  CONSISTENCY_50: {
    title: "50% Consistency Requirement",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/47237316722075",
  },
  SAFETY_NET: {
    title: "Safety Net Requirement Rule",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/40463578114715",
  },
  EOD_PAYOUTS: {
    title: "EOD Payouts",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/47205823183003",
  },
  INTRADAY_PAYOUTS: {
    title: "Intraday Trailing Drawdown Payouts",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/47206370796827",
  },
  CONTRACT_SCALING: {
    title: "Contract Scaling Rule",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/40463165052955",
  },
  PROHIBITED: {
    title: "Prohibited Activities",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/40463668243099",
  },
  CLOSE_459: {
    title: "In Which Markets Must Trades Be Closed Earlier Than Before 4:59 PM ET?",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/4413998546587",
  },
  LEGACY_RULES: {
    title: "Legacy Evaluation Rules",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/31519769997083",
  },
  LEGACY_PRODUCTS: {
    title: "Legacy Products Overview",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/47114837287067",
  },
  LEGACY_CONSISTENCY: {
    title: "Legacy 30% Consistency Rule — Windfall",
    href: "https://support.apextraderfunding.com/hc/en-us/articles/40463260337819",
  },
} satisfies Record<string, Source>;
