---
route: /payout-rules
title: Apex Payout Rules & Consistency Calculator | NY Prop Firms
meta: Apex PA payout gates for EOD and Intraday: qualifying days, safety net, sequential caps, and the 50% Consistency Calculator.
h1: Apex payout rules and the 50% consistency calculator
slots: [S06, S07, S08, S18, S19, S20, S21, S22, S24, S62, S63]
ctaIds: [calc_consistency, calc_payout_eligibility, en_payout_rules_cta]
---

# Apex payout rules and the 50% consistency calculator

**Performance Accounts only.** Apex writes its payout requirements for Performance Accounts {S63:payout.pa_only_applicability}.

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


## Five gates

Check each gate for your PA type (EOD PA or Intraday PA) and size.

1. **Qualifying days** {S20:pa.payout.min_trading_days}
2. **Minimum daily profit** for a qualifying day {S20:pa.payout.min_daily_profit}
3. **Safety net and minimum request** {S19:pa.payout.safety_net|pa.payout.min_balance_to_request|pa.payout.min_payout_amount}
4. **Sequential payout caps** {S21:pa.payout.sequential_caps}
5. **50% consistency** (below)

EOD and Intraday figures differ. Read the one for your type.

<a id="calculator"></a>
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

> Unofficial helper, not advice; Apex's system decides. Applies to Performance Accounts only (Evaluations: 'Not Applied'). Losing days count in net profit. Near 50% (from 49.95% up to, not including, 50.05%) this site gives no pass/fail verdict. That range is this site's own rule, not an Apex rule, and Apex's Help Center words the exact-50% case differently — check Apex's 50% Consistency Requirement page.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


<a id="eligibility-checker"></a>
## Check all five gates

The Payout Eligibility Checker runs the full list for your PA type and size.

[Open the Payout Eligibility Checker](/trading-calculators#payout-eligibility)

## After a denial, and after the last payout

- After a request, if your balance falls below the required threshold, Apex's pages describe the outcome in more than one way. Read Apex's payout page for the current wording {S22:pa.payout.post_request_denial}.
- Apex sets a maximum number of approved payouts {S18:pa.payout.max_payouts}. What happens after the last one is worded differently on Apex's pages. Check Apex's payout page {S24:pa.payout.closure_after_max}.

<!-- CONFLICT C5 / C8: DEV renders both official quotes from the record (no chosen side) in place of the sentences above if the design allows -->

<!-- inactivity block: identical wording on /payout-rules#inactivity and /performance-account-rules#inactivity; S62 (retired pending tag; facts in rule-slots 2.J); every figure/date comes from the slot, none written here -->
<a id="inactivity"></a>
## PA Inactivity — account-scope note

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

This is not the same rule as the one for new PAs. Legacy closure is not described here as automatic or non-reinstatable. More: [PA Rules, inactivity](/performance-account-rules#inactivity).



<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_payout_rules_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_payout_rules_cta -->


More: [PA Rules](/performance-account-rules) · [Account Comparison](/account-comparison) · [FAQ](/faq) · [Sources](/sources)
