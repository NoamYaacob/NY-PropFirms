---
route: /eod-vs-intraday
title: Apex EOD vs Intraday Drawdown Explained | NY Prop Firms
meta: How Apex EOD and Intraday trailing drawdowns differ, with worked examples, the Drawdown Distance Calculator, and a trading-style mechanics picker.
h1: Apex EOD vs Intraday: how the drawdown works
slots: [S10, S11, S12, S13, S14, S15, S16, S20, S21, S32, S33, S34, S35, S48, S49, S55, S60]
ctaIds: [calc_drawdown, calc_path_picker, en_eod_intraday_cta]
---

# Apex EOD vs Intraday: how the drawdown works

Same idea, different clock. Know which one your account uses.

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


<a id="comparison"></a>
## Side by side

**EOD**

- Threshold follows your end-of-day close {S15:dd.mechanics}.
- Unrealized profit during the day does not move it {S15:dd.mechanics}.
- Evaluation has a fixed Daily Loss Limit {S12:eval.daily_loss_limit}. The EOD PA has a tiered DLL {S60:pa.dll_note}.

**Intraday**

- Threshold follows the account during the session {S15:dd.mechanics}.
- Unrealized peaks count as they happen {S15:dd.mechanics}.
- Evaluation has no Daily Loss Limit. The Intraday PA has a tiered DLL {S12:eval.daily_loss_limit} {S60:pa.dll_note}.

**Both**

- Threshold locks work differently by platform. Check the platform on your account {S55:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate}.
- PA payout details differ by type {S20:pa.payout.min_daily_profit} {S21:pa.payout.sequential_caps}. See [Payout Rules](/payout-rules).

<a id="examples"></a>
## Worked examples

**An EOD day, start to finish.** {S48:worked_example.eod_walkthrough}

**The same trade, EOD and Intraday.** {S48:worked_example.same_trade}

The EOD example is Apex's own 50K example. The side-by-side is this site's arithmetic on Apex's published rules for a 50K account; Apex does not publish it. Illustrations only, not results.

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


## Drawdown is not your stop {S49:rules.trailing_threshold_not_a_stop}

The drawdown threshold is an account rule. It is not a stop order, a target or a budget.

Crossing it can fail the Evaluation or close the PA. Using the trailing threshold as a stop-loss is a prohibited activity. [Apex Prohibited Activities](https://apextraderfunding.com/help-center/getting-started/prohibited-activities/)


<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_eod_intraday_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_eod_intraday_cta -->


More: [Account Comparison](/account-comparison) · [Evaluation Rules](/evaluation-rules) · [PA Rules](/performance-account-rules) · [Sources](/sources)
