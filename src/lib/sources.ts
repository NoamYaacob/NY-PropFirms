export interface Source {
  title: string;
  href: string;
}

const HC = "https://apextraderfunding.com/help-center/";

export const S = {
  EVALUATION_FEES: {
    title: "Evaluation Plan Fees and Access Explained",
    href: HC + "billing/evaluation-plan-fees-and-access-explained/",
  },
  EOD_EVALUATIONS: {
    title: "EOD Evaluations",
    href: HC + "eod-trailing-drawdown-accounts/eod-evaluations/",
  },
  INTRADAY_EVALUATIONS: {
    title: "Intraday Trailing Drawdown Evaluations",
    href: HC + "evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
  },
  INTRADAY_TRAILING_DD: {
    title: "Intraday Trailing Drawdown Explained",
    href: HC + "intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
  },
  DAILY_LOSS_LIMIT: {
    title: "Daily Loss Limit Explained",
    href: HC + "additional-helpful-items/daily-loss-limit-explained/",
  },
  EOD_PA: {
    title: "EOD Performance Accounts (PA)",
    href: HC + "eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
  },
  INTRADAY_PA: {
    title: "Intraday Trailing Drawdown Performance Accounts (PA)",
    href: HC + "intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
  },
  CONSISTENCY_50: {
    title: "50% Consistency Requirement",
    href: HC + "additional-helpful-items/50-consistency-requirement/",
  },
  EOD_PAYOUTS: {
    title: "EOD Payouts",
    href: HC + "eod-trailing-drawdown-accounts/eod-payouts/",
  },
  INTRADAY_PAYOUTS: {
    title: "Intraday Trailing Drawdown Payouts",
    href: HC + "intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
  },
  SCALING_LEVELS_PA: {
    title: "Scaling Levels (PA) Explained",
    href: HC + "additional-helpful-items/scaling-levels-pa-explained/",
  },
  PROHIBITED: {
    title: "Prohibited Activities",
    href: HC + "getting-started/prohibited-activities/",
  },
  CLOSE_459: {
    title: "Futures Trading Times",
    href: HC + "getting-started/futures-trading-times/",
  },
  EVALUATION_PLANS: {
    title: "Apex Evaluation Plans",
    href: "https://apextraderfunding.com/evaluation-plans",
  },
} satisfies Record<string, Source>;
