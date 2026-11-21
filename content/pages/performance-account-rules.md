---
route: /performance-account-rules
title: Apex Performance Account (PA) Rules | NY Prop Firms
meta: Performance Account (Sim Funded) rules for Apex EOD and Intraday: scaling tiers, PA daily loss limit, threshold lock, inactivity rule, and payout link.
h1: Apex Performance Account (PA) rules
slots: [S06, S10, S11, S12, S25, S27, S28, S49, S57, S58, S60, S61, S62]
ctaIds: [en_pa_rules_cta]
---

# Apex Performance Account (PA) rules

**Stage 2: Performance Account only.** A PA is a simulated funded account {S57:pa.is_simulated_funded}. Evaluation rules are on [Evaluation Rules](/evaluation-rules).

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


## What changes after the Evaluation

- **Contracts:** fixed in the Evaluation, scaling tiers in the PA.
- **Daily Loss Limit:** Intraday Evaluation has none {S12:eval.daily_loss_limit}. Intraday PA has a tiered DLL.
- **Consistency:** "Not Applied" in the Evaluation {S06:eval.consistency}. In the PA it is a payout gate.
- **Active PAs:** Apex limits how many PAs you can hold at once. Check Apex's household article for how it counts them {S58:pa.max_active_pa_household}.

## PA drawdown and lock

- **EOD PA:** {S10:pa.start_threshold|pa.max_drawdown}
- **Intraday PA:** {S10:pa.start_threshold|pa.max_drawdown}
- **Threshold lock:** {S11:pa.lock_threshold_level|pa.lock_trigger_balance}

Drawdown is not your stop {S49:rules.trailing_threshold_not_a_stop}. It is an account threshold. Crossing it can close the PA.

## PA Daily Loss Limit {S60:pa.dll_note}

Applies to both EOD PA and Intraday PA.

- When the limit is reached, positions are flattened and trading pauses until the next session open.
- The limit is tied to your scaling tier {S60:pa.dll_note} {S61:pa.scaling_tiers}.

## PA scaling tiers

Your tier is set from your prior close {S61:pa.scaling_tiers}.

- Contract limits by tier and size {S61:pa.scaling_tiers} {S25:pa.scaling_tiers}
- Micro-to-mini conversion {S27:contracts.micro_equivalency}
- Orders above your limit are rejected {S28:contracts.order_rejection_pa}

<!-- inactivity block: identical wording on /payout-rules#inactivity and /performance-account-rules#inactivity; S62 (retired pending tag; facts in rule-slots 2.J); every figure/date comes from the slot, none written here -->
<a id="inactivity"></a>
## PA Inactivity Policy

Two different policies. Check which one covers your account.

**New EOD and Intraday PAs, and the promotional Legacy accounts Apex lists with them** {S62:pa.inactivity.new.note}

- Apex requires a minimum number of profit days of a minimum size inside every rolling window {S62:pa.inactivity.new.min_days|pa.inactivity.new.min_net_profit_per_day}.
- The window is the most recent run of consecutive calendar days, weekends and holidays included {S62:pa.inactivity.new.window_days}.
- Courtesy notices go out partway through the window, and the account appears under Dormant PAs {S62:pa.inactivity.new_notices}.
- If the window passes without the threshold being met, the account is closed. Access is removed, rewards and payout eligibility are forfeited, and closed accounts cannot be reinstated.
- For a new PA, the purchase date is the first day of the first period (Eastern Time).
- Trading alone does not prevent closure. The profit-day threshold has to be met.

[Apex's inactivity policy for PAs](https://apextraderfunding.com/help-center/billing/inactivity-policy-on-performance-accounts-pa/)

**Legacy PAs bought before Apex's cutoff date, including lifetime subscriptions** {S62:pa.inactivity.legacy_pre_2026_03_01}

- Apex treats the account as inactive when it reaches its Legacy window without a trading day that meets Apex's Legacy profit minimum {S62:pa.inactivity.legacy_pre_2026_03_01.min_net_profit_per_day}.
- Warnings appear partway through, first yellow and then orange {S62:pa.inactivity.legacy_warnings}.
- When the window ends the account reaches the inactivity threshold and may be terminated.
- Apex also states: "If any inactivity-related enforcement is implemented in the future, you will be notified in advance."

[Apex's Legacy PA inactivity policy](https://apextraderfunding.com/help-center/performance-accounts-pa/legacy-pa-inactivity-policy/)

This is not the same rule as the one for new PAs. Legacy closure is not described here as automatic or non-reinstatable. More: [Payout Rules, inactivity](/payout-rules#inactivity).


## Next: payouts

- [Payout Rules](/payout-rules)
- [50% Consistency Calculator](/trading-calculators#consistency)
- [Payout Eligibility Checker](/trading-calculators#payout-eligibility)


<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_pa_rules_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_pa_rules_cta -->


More: [Rules Hub](/apex-rules) · [Evaluation Rules](/evaluation-rules) · [Sources](/sources)
