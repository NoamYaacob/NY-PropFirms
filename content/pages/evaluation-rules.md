---
route: /evaluation-rules
title: Apex Evaluation Rules (EOD & Intraday) | NY Prop Firms
meta: Evaluation-only rules for Apex Trader Funding EOD and Intraday accounts: targets, drawdown, DLL, fixed contracts, platform locks, and activation.
h1: Apex Evaluation rules (EOD and Intraday)
slots: [S04, S06, S12, S52, S53, S54, S55, S56]
ctaIds: [en_eval_rules_cta]
---

# Apex Evaluation rules (EOD and Intraday)

**Stage 1: Evaluation only.** Funded-stage rules are on a separate page: [Performance Account Rules](/performance-account-rules).

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


## Evaluation parameters

Pick a type and size. Each row links to the official Apex page.

- **Profit target** {S52:eval.profit_target}
- **Max drawdown** {S52:eval.max_drawdown}
- **Daily Loss Limit** {S12:eval.daily_loss_limit}
- **Max contracts (fixed)** {S52:eval.max_contracts_fixed} {S04:eval.max_contracts_fixed}
- **Access period** {S52:eval.access_period_days}
- **Consistency:** Not Applied {S06:eval.consistency}
- **Scaling:** Not Applied {S52:eval.scaling}

Types: EOD | Intraday. Sizes: 25K | 50K | 100K | 150K.

## EOD Evaluation: drawdown and DLL

- The threshold updates from your end-of-day balance.
- A fixed Daily Loss Limit pauses the session when reached {S53:eval.daily_loss_limit}.

## Intraday Evaluation: drawdown, no DLL {S54:eval.daily_loss_limit}

- The threshold follows your account during the session, unrealized peaks included.
- Intraday Evaluation has no Daily Loss Limit {S12:eval.daily_loss_limit}.

## Platform threshold locks

Locks work differently by platform. Check the platform on your account. Where Apex's pages word a lock differently, the official page controls.
<!-- CONFLICT C4: render both official sentences, no chosen side; if the platform is unknown show both -->

- **Rithmic / Wealthcharts:** {S55:eval.lock_level.rithmic_wealthcharts|eval.lock_trigger_balance.rithmic_wealthcharts}
- **Tradovate:** {S55:eval.lock_rule.tradovate}

Drawdown is not your stop. Using the trailing threshold as a stop-loss is a prohibited activity. [Apex Prohibited Activities](https://apextraderfunding.com/help-center/getting-started/prohibited-activities/)

## Passing and activating a PA {S56:pa.activation_window_days}

- Review timing after you meet the pass conditions {S56:eval.pass_review_timing}
- PA activation window {S56:pa.activation_window_days}
- A one-time, non-refundable activation fee applies ([Apex's PA activation page](https://apextraderfunding.com/help-center/billing/pa-activation-process-deadline-explained/)). This page shows no dollar amount. See [Current Apex pricing](/account-comparison#pricing).

Passing an Evaluation is not the same as being paid. PA payouts have their own gates. [Payout Rules](/payout-rules)

## Tools for this stage

- [Drawdown Distance Calculator](/trading-calculators#drawdown-distance)
- [Account Comparison](/account-comparison)


<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_eval_rules_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_eval_rules_cta -->


More: [PA Rules](/performance-account-rules) · [Rules Hub](/apex-rules) · [EOD vs Intraday](/eod-vs-intraday) · [Sources](/sources)
