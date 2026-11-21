---
route: /account-comparison
title: Apex Account Comparison (25K–150K) & Pricing | NY Prop Firms
meta: Compare Apex 25K to 150K EOD and Intraday accounts across Evaluation and PA rules, with CME point equivalents and a link to Apex's current pricing.
h1: Apex account comparison: 25K to 150K
slots: [S12, S30, S31, S52]
ctaIds: [calc_account_comparison, en_account_comparison_cta, en_pricing_link]  # en_pricing_link = NEW id for the #pricing fallback link (CEO decision), needs allowlist
---

# Apex account comparison: 25K to 150K

EOD and Intraday, side by side. Evaluation and PA stay on separate views.

> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


Apex only. Current EOD and Intraday accounts.

<!-- tool-5; ctaId calc_account_comparison; anchor #account-comparison -->
## Account Comparison Tool

> Disclosure: I'm an Apex affiliate.

Compare current Apex EOD and Intraday accounts. Evaluation and Performance Account rules stay separate.

**Controls**

- **View:** Evaluation | Performance Account | Eval vs PA Side-by-Side
- **Model:** EOD | Intraday | Both
- **Size:** 25K | 50K | 100K | 150K (stacked cards on mobile)
- **Points converter (optional):** USD only | NQ | MNQ | ES | MES

**Rows shown** {S30:eval.profit_target|eval.max_drawdown} {S12:eval.daily_loss_limit}

- Profit target (Evaluation only)
- Access period (Evaluation only)
- Max drawdown. Published account rule, not a stop.
- Daily Loss Limit (N/A on Intraday Evaluation)
- Contract limits (fixed in Evaluation, scaling tiers in PA)
- Consistency and scaling ("Not Applied" in Evaluation)
- Threshold lock. Check the platform on your account.
- PA qualifying days and minimum daily profit
- Safety net and minimum request
- Sequential payout caps
- Inactivity policy (two policies by purchase date; see [PA Rules, inactivity](/performance-account-rules#inactivity))
- Activation window

Every row links to its official Apex page. Switching to Evaluation hides PA-only rows.

> Unofficial comparison helper, not advice; Apex's system decides. Current Apex EOD and Intraday accounts only (Legacy not included); Evaluation and Performance Account rules shown separately. Point equivalents use CME multipliers checked 21 Nov 2026 (NQ $20, MNQ $2, ES $50, MES $5/pt).

Sources: [Official Sources](/sources) · CME contract specs {S31:cme.NQ.point_value|cme.MNQ.point_value|cme.ES.point_value|cme.MES.point_value} · [Privacy](/about#privacy)
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.
> Browser-only: nothing you type is stored or sent. [How this site handles privacy](/about#privacy)


## Three checks for a size

Pick an Evaluation type and size. Look at three things:

1. **Target vs drawdown.** The Evaluation profit target next to the max drawdown. No ratio, no odds.
2. **Daily Loss Limit.** EOD Evaluation has a fixed DLL that pauses the session. Intraday Evaluation: "N/A — Intraday Evaluation has no DLL" {S12:eval.daily_loss_limit}.
3. **Contract limit.** The fixed Evaluation maximum for that size, not the PA scaling ceiling.

Values: {S52:eval.profit_target}, {S52:eval.max_drawdown}, {S12:eval.daily_loss_limit}, {S52:eval.max_contracts_fixed}. Official link beside each.

[Try the Drawdown Distance Calculator](/trading-calculators#drawdown-distance)

<a id="pricing"></a>
## Current Apex pricing

<!-- RENDER STATE A (today; --gate allows 0 rows): fallback only -->
> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.


Prices change often, so this site does not show a number it cannot check against Apex's own page.

> Ad: I earn a commission if you use my code NOAM.
> Disclosure: I'm an Apex affiliate.
> Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

See current pricing on Apex's site: [Go to Apex (affiliate link) →](/go/apex/en_pricing_link) <!-- rel="sponsored nofollow noopener"; ctaId en_pricing_link -->

<!-- RENDER STATE B (only when compliance/tools/validate_prices.py --gate passes for a row AND Noam approves): one card per plan/path; each card shows account type, size and stage; labels exactly:
  Apex list price
  Apex sale price (per Apex, as of <date time ET>)   [only if that sale passes the gate]
  Activation fee
  Last updated <date time ET> · Source: Apex pricing page   [link to Apex source_url]
  Prices are set by Apex and can change at any time. Confirm the total at Apex checkout.
  Cards sit under one STRIP above and RISK_COMPACT below the group. No code NOAM and no promo code in any card. -->


<!-- component: cta-cluster; DOM order per policy §3: heading > CODE_CAVEAT > AD_LINE > DISC_LINE > RISK_COMPACT > copy control > button -->
### If you decide to use Apex

Code NOAM is optional. Compare the checkout total yourself. This page does not claim a discount, or that codes can be stacked.

Ad: I earn a commission if you use my code NOAM.

Disclosure: I'm an Apex affiliate.

Not advice. Futures trading involves substantial risk of loss. Evals and PAs are simulated.

**Referral code NOAM** · [Copy code] (copies `NOAM` only; toast: `Copied`)

[Explore Apex Accounts](/go/apex/en_account_comparison_cta) <!-- rel="sponsored nofollow noopener"; ctaId en_account_comparison_cta -->


More: [EOD vs Intraday](/eod-vs-intraday) · [Evaluation Rules](/evaluation-rules) · [PA Rules](/performance-account-rules) · [Payout Rules](/payout-rules) · [Path Picker](/trading-calculators#path-picker) · [Sources](/sources)
