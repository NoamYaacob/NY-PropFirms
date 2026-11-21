---
route: /faq
title: Apex Trader Funding FAQ | NY Prop Firms
meta: Clear, source-linked answers to common Apex Trader Funding questions: Evaluation vs PA rules, EOD vs Intraday, consistency, payouts, and code NOAM.
h1: Apex Trader Funding FAQ
slots: [S08, S15, S18, S24, S41, S42, S49, S57, S62, S63, S66, S68]
ctaIds: [en_faq_box]
jsonld: FAQPage (all Q&As below; the two NOAM answers must include their AD_LINE + CODE_CAVEAT text inside the answer string)
---

# Apex Trader Funding FAQ

Short answers for US futures traders. Each links to the full page.

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


## Rules and phases

### What is the difference between an Evaluation and a Performance Account?
The Evaluation is the assessment stage. The Performance Account (PA) is the simulated funded stage after you pass. Their rules differ, so this site keeps them on separate pages. [Evaluation Rules](/evaluation-rules) · [PA Rules](/performance-account-rules)

### Which accounts does this site cover?
Current Apex EOD and Intraday accounts. Legacy accounts are out of scope, except for the PA inactivity note. [Rules Hub](/apex-rules)

### Are Performance Accounts simulated?
Yes. Evaluations and PAs are simulated {S57:pa.is_simulated_funded}. Futures trading involves substantial risk of loss.

### Can I pass in one day, and does passing mean I get paid?
Apex lists the pass conditions per account type {S66:eval.pass_conditions}. Passing is not the same as a payout. PA payouts have their own gates {S63:payout.pa_only_applicability}. [Payout Rules](/payout-rules)

### What are Apex's trading hours and holiday rules?
Apex publishes its regular clock and flatten cutoff {S41:hours.flatten_before|hours.trading_resumes|hours.trading_day_definition}. For holidays, Apex points to the CME holiday schedule and Apex Status Updates {S42:hours.holiday_dll_continuation|hours.holiday_trading_allowed}. This site does not publish holiday-specific flatten times. [Hours and holidays](/apex-rules#hours-holidays)

## Drawdown and consistency

### How do EOD and Intraday drawdown differ?
EOD follows your end-of-day close. Intraday follows the account during the session, unrealized peaks included {S15:dd.mechanics}. [EOD vs Intraday](/eod-vs-intraday)

### Is the drawdown my stop?
No {S49:rules.trailing_threshold_not_a_stop}. It is an account threshold. Crossing it can fail the Evaluation or close the PA. Using the trailing threshold as a stop-loss is a prohibited activity. [Prohibited activities](/apex-rules#prohibited-activities)

### How does the 50% consistency rule work?
Apex's 50% consistency rule is a payout gate on the Performance Account (evals: "Not Applied"). It compares your best single day with 50% of net profit since the last approved payout. Losing days count. For exactly how the cutoff is applied, see Apex's consistency page. Apex's 50% Consistency page measures this from your last approved payout in some places and from your last payout request in others. Check Apex's 50% Consistency Requirement page. {S68:pa.consistency.window_start}

[50% Consistency Calculator](/trading-calculators#consistency)

### What does the calculator say near 50%?
Best-day share: about 50%. This calculator gives no verdict in this range. Apex's own pages word the exact-50% case differently, so check Apex's 50% Consistency Requirement page. The range (from 49.95% up to, not including, 50.05%) is this site's own rule, not an Apex rule.

PA payout gate: compare your best single day with 50% of net profit since the last approved payout. Losing days count. Exact cutoff: Apex's consistency page.

## Payouts and scaling

### Why can't I request a payout?
One reason: the 50% consistency gate. If the check isn't met, Apex's request button is unavailable while the PA stays active {S08:pa.consistency.rule}. Other gates are listed on [Payout Rules](/payout-rules).

### How many payouts can a PA have?
Apex sets a maximum number of approved payouts {S18:pa.payout.max_payouts}. What happens after the last one is worded differently on Apex's pages, so check Apex's payout page {S24:pa.payout.closure_after_max}. [Payout Rules](/payout-rules)

### What is Apex's PA inactivity policy?
There are two policies, one for new EOD and Intraday PAs and one for Legacy PAs bought earlier. They are not the same rule. Both are on [PA Rules, inactivity](/performance-account-rules#inactivity) and [Payout Rules, inactivity](/payout-rules#inactivity) {S62:pa.inactivity.new|pa.inactivity.legacy_pre_2026_03_01}.

## Referral code NOAM and this site

### What is Referral code NOAM?
NOAM is my affiliate referral code for Apex. Apex's Help Center lists its rules by account type and size.

Ad: I earn a commission if you use my code NOAM.

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Disclosure: I'm an Apex affiliate.

### What happens when I click an Apex link here?
Apex's affiliate link sets an Apex cookie (180 days, per Apex's own redirect responses) so Apex can credit the referral. When you click through, you leave this site for Apex Trader Funding; their terms, pricing and rules apply there. Apex's privacy and cookie policies apply there.

Ad: I earn a commission if you use my code NOAM.

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

[About and privacy](/about#privacy)

### Is this site Apex?
No. This is an independent site operated by Noam (@NoamPropFirms), an Apex Trader Funding affiliate. This site is not Apex Trader Funding, is not owned by Apex, and is not endorsed by or an official representative of Apex. [About & Affiliate Disclosure](/about#disclosure)


<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_faq_box) <!-- rel="sponsored nofollow noopener"; ctaId en_faq_box -->


More: [Rules Hub](/apex-rules) · [Account Comparison](/account-comparison) · [Calculators](/trading-calculators) · [Latest Updates](/updates) · [Sources](/sources)
