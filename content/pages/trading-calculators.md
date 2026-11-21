---
route: /trading-calculators
title: Apex Trading Calculators & Mechanics Tools | NY Prop Firms
meta: Unofficial interactive tools for Apex futures accounts: 50% Consistency, Drawdown Distance, Payout Eligibility, and EOD vs Intraday Path Picker.
h1: Apex trading calculators
slots: [S06, S07, S08, S10, S11, S12, S13, S14, S15, S16, S18, S19, S20, S21, S22, S23, S24, S25, S26, S27, S28, S29, S32, S33, S34, S35, S60, S63]
ctaIds: [calc_consistency, calc_drawdown, calc_payout_eligibility, calc_position_size, calc_account_comparison, calc_path_picker, en_calculators_cta]
---

# Apex trading calculators

Six unofficial helpers. Each one shows its stage, type and size. Nothing you type is stored or sent.

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


**Jump to:** [Consistency](#consistency) · [Drawdown Distance](#drawdown-distance) · [Payout Eligibility](#payout-eligibility) · [Contract Multiplier & Apex Cap Reference](#contract-reference) · [Path Picker](#path-picker) · [Account Comparison](/account-comparison)

<a id="consistency"></a>
<!-- tool-1; ctaId calc_consistency; anchors: #consistency (/trading-calculators), #calculator (/payout-rules) -->
## 50% Consistency Calculator

> Disclosure: I'm an Apex affiliate.

**Performance Accounts only.** EOD PA and Intraday PA. In Evaluations, consistency is "Not Applied" {S06:eval.consistency}.

PA payout gate: compare your best single day with 50% of net profit since the last approved payout. Losing days count. Exact cutoff: Apex's consistency page.

**Inputs**

- **Net profit since last approved payout, losing days included ($)**
  Helper: Apex's 50% Consistency page measures this from your last approved payout in some places and from your last payout request in others. Check Apex's 50% Consistency Requirement page.
  [Apex's 50% Consistency Requirement page](https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/)
- **Biggest single profitable day in that period ($)**

**Result**

- **Best-day share (%)**

**Result states** {S07:pa.consistency.exact_50_case}

- **Below the 50% mark.**
- **About 50%.** Best-day share: about 50%. This calculator gives no verdict in this range. Apex's own pages word the exact-50% case differently, so check Apex's 50% Consistency Requirement page.
- **Above the 50% mark.** Apex's payout request button is unavailable while the PA remains active {S08:pa.consistency.rule}.

Each state links to [Apex's 50% Consistency Requirement page](https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/).

**Messages**

- Empty fields: "Enter both amounts to see the best-day share."
- Net profit of zero or less: "N/A — positive net profit is required before consistency can be calculated; account stays active"
- Best day below zero: "Enter a best day of $0 or more."

> Unofficial helper, not advice; Apex's system decides. Performance Accounts only (Evaluations: 'Not Applied'). Losing days count in net profit. Near 50% (from 49.95% up to, not including, 50.05%) this site gives no pass/fail verdict. That range is this site's own rule, not Apex's, and Apex words the exact-50% case differently; see [Apex's 50% Consistency Requirement page](https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/).
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


<a id="drawdown-distance"></a>
<!-- tool-2; ctaId calc_drawdown; anchors: #drawdown-distance -->
## Drawdown Distance Calculator

> Disclosure: I'm an Apex affiliate.

This unofficial helper estimates the distance, in dollars and in NQ, MNQ, ES, or MES points, from a stated simulated-account balance to Apex's published trailing or end-of-day threshold for the account you select. It is not a stop, a target, or a position-size recommendation.

**Inputs**

- **Account type:** EOD or Intraday
- **Stage:** Evaluation or Performance Account
- **Account size:** 25K, 50K, 100K, 150K
- **Platform:** Rithmic / Wealthcharts, Tradovate, or Not sure
- **Instrument:** NQ, MNQ, ES, or MES
- **Prior EOD close / highest peak balance ($)**
- **Current simulated balance ($)**

**Results** (each labeled with stage, type and size)

- **Published threshold level ($)** {S10:eval.start_threshold|pa.start_threshold}
- **Threshold state:** Locked or Trailing {S11:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate|pa.lock_threshold_level}. Check the platform on your account.
- **Remaining dollars to the published threshold ($)**
- **Equivalent points on the selected contract.** 1 point = CME point value for that contract.
- **Daily Loss Limit:** shown by stage and type. Evaluation: {S12:eval.daily_loss_limit} ("N/A — Intraday Evaluation has no DLL" where it applies). PA: tier-based {S60:pa.dll_note}.

**Messages**

- Losing day: the threshold never moves down {S14:dd.mechanics}.
- Intraday counts unrealized peaks as they happen; EOD uses the end-of-day close {S15:dd.mechanics}.
- Balance at or below the threshold: "Threshold breached — evaluation fails or PA permanently closes per Apex rules" {S16:dd.market_fill_caveat} <!-- render only when Stage = Evaluation and Type = Intraday; otherwise nothing -->
- Peak below current balance: "Peak balance can't be lower than your current balance."

Unofficial helper, not advice; Apex's system decides.

Distance, in dollars and contract points, from a stated balance to the published Apex threshold for the selected simulated account. The threshold is not a stop order; using the trailing threshold as a stop-loss is prohibited.

Point values are CME Group contract multipliers, checked on CME's pages on 21 Nov 2026: NQ $20/point, MNQ $2/point, ES $50/point, MES $5/point.

Sources: [Apex Prohibited Activities](https://apextraderfunding.com/help-center/getting-started/prohibited-activities/) · Apex drawdown pages {S13:sources.tool_list.S13} · CME contract specs {S13:cme.NQ.point_value|cme.MNQ.point_value|cme.ES.point_value|cme.MES.point_value} · [Privacy](/about#privacy)
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


<a id="payout-eligibility"></a>
<!-- tool-3; ctaId calc_payout_eligibility; anchors: #payout-eligibility (/trading-calculators), #eligibility-checker (/payout-rules link card) -->
## Payout Eligibility Checker

> Disclosure: I'm an Apex affiliate.

**Performance Accounts only.** Apex writes its payout requirements for Performance Accounts {S63:payout.pa_only_applicability}.

**Inputs**

- **PA type:** EOD PA or Intraday PA
- **Account size:** 25K, 50K, 100K, 150K
- **Current PA balance ($)**
- **Approved payouts already received** {S18:pa.payout.max_payouts}
- **Qualifying trading days completed** (days that meet the minimum daily profit for your PA type)
- **Net profit since last approved payout, losing days included ($)**
  Helper: Apex's 50% Consistency page measures this from your last approved payout in some places and from your last payout request in others. Check Apex's 50% Consistency Requirement page.
- **Biggest single profitable day in that period ($)**
- **Planned request amount ($)**

**Checklist results**

1. **Balance vs safety net and minimum request** {S19:pa.payout.safety_net|pa.payout.min_balance_to_request|pa.payout.min_payout_amount}
2. **Qualifying days vs required days** {S20:pa.payout.min_trading_days|pa.payout.min_daily_profit}
3. **Sequential payout cap for this payout number** {S21:pa.payout.sequential_caps}
4. **50% consistency gate.** Best-day share: about 50%. This checker gives no verdict in this range, the same as the calculator. Apex's own pages word the exact-50% case differently, so check Apex's 50% Consistency Requirement page.
5. **After a request:** if your balance then falls below the required threshold, Apex's pages describe the outcome in more than one way. Check Apex's payout page {S22:pa.payout.post_request_denial}.

**Messages**

- Maximum approved payouts reached: Apex's pages word what happens next differently. Check Apex's payout page {S24:pa.payout.closure_after_max}.
- Request below the minimum or above the cap: shown as a plain note.
- Net profit of zero or less: "Consistency N/A — positive net profit is required."
- Negative or non-whole day counts are rejected.

> Unofficial helper, not advice; Apex's system decides. Performance Accounts only. Meeting the published checklist does not guarantee payout approval; Apex's automated system makes the final determination. Losing days count in net profit.

Sources: Apex EOD Payouts and Intraday Payouts {S23:sources.tool_list.S23} · [Apex's 50% Consistency Requirement page](https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/) · [Privacy](/about#privacy)
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


<a id="contract-reference"></a>
<!-- tool-4; ctaId calc_position_size (id name retained from AF v3; never shown); anchor #contract-reference -->
## Contract Multiplier & Apex Cap Reference

> Disclosure: I'm an Apex affiliate.

Two separate parts. They are never combined.

**Part 1. Notional P&L move (CME arithmetic only)**

- **Contract:** NQ, MNQ, ES, or MES
- **Quantity (whole number)**
- **Price move (points)**
- **Result:** N × P points on [Instrument] = $D notional P&L move (CME arithmetic only; not trade or stop advice)

Contract point values come from CME Group, checked 21 Nov 2026.

**Part 2. Published Apex contract limits (reference table)**

- **Selectors:** Stage (Evaluation or PA scaling tier {S25:pa.scaling_tiers}), Type (EOD or Intraday), Size (25K, 50K, 100K, 150K)
- **Published limit** {S26:eval.max_contracts_fixed|pa.max_contracts_ceiling}
- **Micro ratio** {S27:contracts.micro_equivalency}
- **Order rejection (by stage)** {S28:contracts.order_rejection_eval|contracts.order_rejection_pa}
- If the quantity entered is above the published limit: "Exceeds published limit for the selected stage, type and size" {S29:contracts.order_rejection_eval}. This is a reference note only.

> Unofficial helper, not advice; Apex's system decides. Notional CME arithmetic only (NQ $20/pt, MNQ $2/pt, ES $50/pt, MES $5/pt, checked 21 Nov 2026), not trade, sizing or stop advice. The Apex cap table is a separate reference by stage. Drawdown is not your stop.

Sources: Apex Evaluation, PA, Scaling and [Prohibited Activities](https://apextraderfunding.com/help-center/getting-started/prohibited-activities/) pages · CME Group contract specs · [Privacy](/about#privacy)
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


<a id="path-picker"></a>
<!-- tool-6; ctaId calc_path_picker; anchor #path-picker -->
## Trading-Style Path Picker

> Disclosure: I'm an Apex affiliate.

Four neutral questions about trading mechanics. No budget, income or purchase questions.

**1. Open-trade swings.** Do you routinely hold open positions through intraday swings and pullbacks, or exit quickly on realized scalps?
Hold swings / trail runners | Quick realized scalps | Mixed

**2. Evaluation Daily Loss Limit.** During an Evaluation, do you prefer a fixed session Daily Loss Limit that pauses the day if reached {S32:eval.daily_loss_limit}, or no Evaluation DLL?
Prefer Eval DLL pause | Prefer no Eval DLL | No preference

**3. Partial exits.** Do you scale out of partials while keeping a runner open?
Yes, often | Usually all-in / all-out

**4. Platform check (informational only).** Which platform will you check on your account?
Rithmic / Wealthcharts | Tradovate | Not sure yet
This only shows how Evaluation locks differ by platform {S33:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate}. It does not choose for you.

**Result:** Rule-Mechanics Fit Summary (Informational Comparison Only — Not a Recommendation to Buy)

- **EOD mechanics fit**, **Intraday mechanics fit**, or **Mixed / Trade-Off View**, each with rule-based reasoning {S34:path_picker.reasoning_facts}.
- Mixed answers always show both rules side by side.
- "Not sure yet" shows both platform-lock behaviors.
- Links only to [EOD vs Intraday](/eod-vs-intraday), [Evaluation Rules](/evaluation-rules), [PA Rules](/performance-account-rules) and [Account Comparison](/account-comparison). No buy button in the result.

> Unofficial helper, not advice; Apex's system decides. Maps trading-style mechanics to published Apex EOD and Intraday rules for education only; not a recommendation to buy any evaluation or account.

Sources: Apex EOD and Intraday rule pages {S35:sources.tool_list.S35} · [Privacy](/about#privacy)
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


## Account Comparison

Sizes, stages and types side by side. It lives on its own page.

[Open Account Comparison](/account-comparison#account-comparison)


<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_calculators_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_calculators_cta -->


More: [Payout Rules](/payout-rules) · [EOD vs Intraday](/eod-vs-intraday) · [Evaluation Rules](/evaluation-rules) · [PA Rules](/performance-account-rules) · [Privacy](/about#privacy) · [Sources](/sources)
