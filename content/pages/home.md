---
route: /
title: Apex Trader Funding Rules in Plain English | NY Prop Firms
meta: Independent, source-linked guide to Apex Trader Funding rules, EOD vs Intraday drawdown, PA payouts, and trading calculators for US futures traders.
h1: Futures prop rules, decoded
slots: [S10, S11, S12, S13, S14, S15, S16, S37, S38, S39, S60]
ctaIds: [en_mid_cta]  # home-only; calculators/tool ids calc_consistency, calc_drawdown also render here
---

<!-- section 1: hero. No hero affiliate CTA (policy minimum: DISC_LINE + RISK_COMPACT before any hero button; there is no hero button that is affiliate) -->
# Futures prop rules, decoded

**Apex Trader Funding, in plain English.** Know the account before you open it.

Evaluation and Performance Account (PA) rules are different. So are EOD and Intraday. This site keeps them apart.

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


[Explore Apex Rules](/apex-rules) · [Open Trading Calculators](/trading-calculators)

This site last re-checked Apex's Help Center rules on {S37:meta.audit_date}. [See sources](/sources) <!-- hidden if no audit date on file; not a certification -->

<!-- section 2: path card -->
## Pick a path

**Account type:** EOD | Intraday
**Size:** 25K | 50K | 100K | 150K

Evaluation stage only. Four rows for your pick:

- **Profit target** {S38:eval.profit_target}
- **Max drawdown** {S38:eval.max_drawdown}
- **Daily Loss Limit** {S38:eval.daily_loss_limit} (EOD Evaluation fixed DLL, or "N/A — Intraday Evaluation has no DLL")
- **Max contracts** {S38:eval.max_contracts_fixed}

Evaluation figures for current EOD and Intraday accounts. Official Apex pages control.

Performance Account rules differ. [See PA Rules](/performance-account-rules)

<!-- section 3: tool index -->
## Tools

Six unofficial helpers. Tap one to open it.

- [**50% Consistency Calculator**](/trading-calculators#consistency). PA payout gate.
- [**Drawdown Distance Calculator**](/trading-calculators#drawdown-distance). Distance to the published threshold.
- [**Payout Eligibility Checker**](/trading-calculators#payout-eligibility). A PA payout checklist.
- [**Contract Multiplier & Apex Cap Reference**](/trading-calculators#contract-reference). CME point values and published Apex limits.
- [**Account Comparison**](/account-comparison). EOD and Intraday side by side.
- [**Path Picker**](/trading-calculators#path-picker). Rule mechanics, not a recommendation.

<!-- consistency link card: SHORT canonical copy, href only -->
### Consistency, in one card

PA payout gate: compare your best single day with 50% of net profit since the last approved payout. Losing days count. Exact cutoff: Apex's consistency page.

[Open the 50% Consistency Calculator](/trading-calculators#consistency)

<!-- section 5: desk module (Option B) -->
## The desk: drawdown distance

> Disclosure: I'm an Apex affiliate.

**Path:** Evaluation | Performance Account, and EOD | Intraday.

This unofficial helper estimates the distance, in dollars and in NQ, MNQ, ES, or MES points, from a stated simulated-account balance to Apex's published trailing or end-of-day threshold for the account you select. It is not a stop, a target, or a position-size recommendation.

*Chart: illustration only. Not an account result.*

**Inputs:** account type, stage, size, platform, instrument (NQ, MNQ, ES, MES), prior EOD close or peak balance, current simulated balance.
**Results:** published threshold {S10:eval.start_threshold|pa.start_threshold}, threshold state {S11:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate|pa.lock_threshold_level}, remaining dollars, equivalent points, Daily Loss Limit {S12:eval.daily_loss_limit} (Evaluation) or tier-based {S60:pa.dll_note} (PA).

Messages: the threshold never moves down after a losing day {S14:dd.mechanics}. Intraday counts unrealized peaks; EOD uses the close {S15:dd.mechanics}. At or below the threshold: "Threshold breached — evaluation fails or PA permanently closes per Apex rules" {S16:dd.market_fill_caveat} <!-- render only when Stage = Evaluation and Type = Intraday; otherwise nothing -->.

> Unofficial helper, not advice; Apex's system decides.

This tool estimates the distance, in dollars and in contract points, from a stated balance to the published Apex trailing or end-of-day threshold for the selected simulated account. Select Evaluation or Performance Account, EOD or Intraday, and the account size. The threshold is an account rule, not a stop order and not a target to trade to. Using the trailing threshold as a stop-loss is a prohibited activity. Drawdown is not your stop.

Point values are CME Group contract multipliers, checked on CME's pages on 21 Nov 2026: NQ $20/point, MNQ $2/point, ES $50/point, MES $5/point. Re-check CME before launch. Apex dollar thresholds are filled only from the official Help Center with a source URL and retrieval date.
Sources: [Apex Prohibited Activities](https://apextraderfunding.com/help-center/getting-started/prohibited-activities/) · Apex drawdown pages {S13:sources.tool_list.S13} · CME contract specs {S13:cme.NQ.point_value|cme.MNQ.point_value|cme.ES.point_value|cme.MES.point_value} · [Privacy](/about#privacy)
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)

[Open the full calculator](/trading-calculators#drawdown-distance)

<!-- section 6: drawdown essay -->
## Two ways drawdown moves {S39:dd.mechanics}

**EOD: marked from the close.** The threshold updates from your end-of-day balance.

**Intraday: following the session.** The threshold follows your account during the session, unrealized peaks included.

*Illustration only. Not a calculator and not an account result.*

Drawdown is not your stop. It is an account threshold. Crossing it can fail the Evaluation or close the PA.

[EOD vs Intraday, side by side](/eod-vs-intraday)

<!-- section 7: consistency sheet -->
## Consistency sheet

A blank worksheet preview. Two fields: net profit since last approved payout (losing days included) and your best single day.

PA payout gate: compare your best single day with 50% of net profit since the last approved payout. Losing days count. Exact cutoff: Apex's consistency page.

Near 50% the calculator gives no verdict. That range is this site's own rule. [See how it works](/payout-rules#calculator) · [Open the calculator](/trading-calculators#consistency)

<!-- section 8: the single mid-page CTA (home-only) -->

<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_mid_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_mid_cta -->


<!-- section 9: contents -->
## What's on this site

1. [Home](/)
2. [Apex Rules](/apex-rules). Start here for stages, hours and prohibited activities.
3. [Account Comparison](/account-comparison). Sizes side by side. [Current Apex pricing](/account-comparison#pricing)
4. [EOD vs Intraday](/eod-vs-intraday). How the two drawdowns differ.
5. [Evaluation Rules](/evaluation-rules). Stage 1 only.
6. [Performance Account Rules](/performance-account-rules). Stage 2 only.
7. [Payout Rules](/payout-rules). PA payout gates and the consistency calculator.
8. [Trading Calculators](/trading-calculators). All six tools.
9. [FAQ](/faq). Short answers.
10. [Latest Apex Updates](/updates). Official sources only.
11. [About & Affiliate Disclosure](/about). Who runs this site and how it earns.
12. [Official Sources](/sources). Every link behind the numbers.
