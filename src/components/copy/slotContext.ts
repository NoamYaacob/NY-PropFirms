/**
 * Render context of every {Sxx:key} token site in content/pages/*.md.
 * Every site declares the account type (EOD / Intraday), stage (Eval / PA) and size it speaks about:
 *   EOD | Intraday | Eval | PA   the line is about exactly that one (records of other types or stages are never shown);
 *   each                          the line lists every type / stage, and every value is labelled with its own;
 *   na                            the key is type-neutral (records of type "both" or "n/a" only);
 *   dup                           same key already rendered on the same line (CF F1-g): printed once.
 * A test (slotModel.test.ts) fails when a token site has no entry here, when an entry matches no site, when a record that
 * does not match the declared context is rendered, or when a multi-record key renders without labels.
 */
export type CtxType = "EOD" | "Intraday" | "each" | "na";
export type CtxStage = "Eval" | "PA" | "each" | "na";
export interface SiteCtx {
  type: CtxType;
  stage: CtxStage;
  size: "all" | "25K" | "50K" | "100K" | "150K";
  dup?: boolean;
  /** index-only record that is never printed (RI's reasoning-facts index) */
  none?: boolean;
  /** the copy puts a bold label naming exactly this type and stage right before the token, so the line adds no label of its own */
  named?: boolean;
}
interface Site {
  page: string;
  token: string;
  /** substring of the copy line that holds the token; omit to cover every line of that token on the page */
  line?: string;
  ctx: SiteCtx;
}

const c = (type: CtxType, stage: CtxStage, size: SiteCtx["size"] = "all"): SiteCtx => ({ type, stage, size });
const DUP: SiteCtx = { type: "na", stage: "na", size: "all", dup: true };
const NA = c("na", "na");
const NONE: SiteCtx = { type: "na", stage: "na", size: "all", none: true };
const EACH_EVAL = c("each", "Eval");
const EACH_PA = c("each", "PA");

const CME4 = "{S13:cme.NQ.point_value|cme.MNQ.point_value|cme.ES.point_value|cme.MES.point_value}";
const CME4_31 = "{S31:cme.NQ.point_value|cme.MNQ.point_value|cme.ES.point_value|cme.MES.point_value}";
const FILL = "{S16:dd.market_fill_caveat}";

export const SITES: Site[] = [
  // ---- account-comparison
  { page: "account-comparison", token: "{S30:eval.profit_target|eval.max_drawdown}", ctx: EACH_EVAL },
  { page: "account-comparison", token: "{S12:eval.daily_loss_limit}", line: "Intraday Evaluation: \"N/A", ctx: c("Intraday", "Eval") },
  { page: "account-comparison", token: "{S12:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "account-comparison", token: CME4_31, ctx: NA },
  { page: "account-comparison", token: "{S52:eval.profit_target}", ctx: EACH_EVAL },
  { page: "account-comparison", token: "{S52:eval.max_drawdown}", ctx: EACH_EVAL },
  { page: "account-comparison", token: "{S52:eval.max_contracts_fixed}", ctx: EACH_EVAL },
  // ---- apex-rules
  { page: "apex-rules", token: "{S06:eval.consistency}", ctx: EACH_EVAL },
  { page: "apex-rules", token: "{S41:hours.flatten_before|hours.trading_resumes|hours.trading_day_definition}", ctx: NA },
  { page: "apex-rules", token: "{S42:hours.holiday_dll_continuation|hours.holiday_trading_allowed}", ctx: NA },
  { page: "apex-rules", token: "{S43:rules.stop_losses_required|rules.no_hedging|rules.no_automation}", ctx: NA },
  { page: "apex-rules", token: "{S49:rules.trailing_threshold_not_a_stop}", ctx: NA },
  // ---- eod-vs-intraday
  { page: "eod-vs-intraday", token: "{S15:dd.mechanics}", line: "Threshold follows your end-of-day close", ctx: c("EOD", "na") },
  { page: "eod-vs-intraday", token: "{S15:dd.mechanics}", line: "Unrealized profit during the day does not move it", ctx: c("EOD", "na") },
  { page: "eod-vs-intraday", token: "{S15:dd.mechanics}", line: "Threshold follows the account during the session", ctx: c("Intraday", "na") },
  { page: "eod-vs-intraday", token: "{S15:dd.mechanics}", line: "Unrealized peaks count as they happen", ctx: c("Intraday", "na") },
  { page: "eod-vs-intraday", token: "{S15:dd.mechanics}", line: "Intraday counts unrealized peaks as they happen; EOD uses", ctx: c("each", "na") },
  { page: "eod-vs-intraday", token: "{S14:dd.mechanics}", ctx: c("each", "na") },
  { page: "eod-vs-intraday", token: "{S12:eval.daily_loss_limit}", line: "The EOD PA has a tiered DLL", ctx: c("EOD", "Eval") },
  { page: "eod-vs-intraday", token: "{S60:pa.dll_note}", line: "The EOD PA has a tiered DLL", ctx: c("EOD", "PA") },
  { page: "eod-vs-intraday", token: "{S12:eval.daily_loss_limit}", line: "The Intraday PA has a tiered DLL", ctx: c("Intraday", "Eval") },
  { page: "eod-vs-intraday", token: "{S60:pa.dll_note}", line: "The Intraday PA has a tiered DLL", ctx: c("Intraday", "PA") },
  { page: "eod-vs-intraday", token: "{S12:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "eod-vs-intraday", token: "{S60:pa.dll_note}", ctx: EACH_PA },
  { page: "eod-vs-intraday", token: "{S55:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate}", ctx: EACH_EVAL },
  { page: "eod-vs-intraday", token: "{S20:pa.payout.min_daily_profit}", ctx: EACH_PA },
  { page: "eod-vs-intraday", token: "{S21:pa.payout.sequential_caps}", ctx: EACH_PA },
  { page: "eod-vs-intraday", token: "{S48:worked_example.eod_walkthrough}", ctx: c("EOD", "na", "50K") },
  { page: "eod-vs-intraday", token: "{S48:worked_example.same_trade}", ctx: c("na", "na", "50K") },
  { page: "eod-vs-intraday", token: "{S10:eval.start_threshold|pa.start_threshold}", ctx: c("each", "each") },
  { page: "eod-vs-intraday", token: "{S11:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate|pa.lock_threshold_level}", ctx: c("each", "each") },
  { page: "eod-vs-intraday", token: FILL, ctx: c("Intraday", "Eval") },
  { page: "eod-vs-intraday", token: "{S32:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "eod-vs-intraday", token: "{S33:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate}", ctx: EACH_EVAL },
  { page: "eod-vs-intraday", token: "{S34:path_picker.reasoning_facts}", ctx: NONE },
  { page: "eod-vs-intraday", token: "{S13:sources.tool_list.S13}", ctx: NA },
  { page: "eod-vs-intraday", token: "{S35:sources.tool_list.S35}", ctx: NA },
  { page: "eod-vs-intraday", token: CME4, ctx: NA },
  // ---- evaluation-rules
  { page: "evaluation-rules", token: "{S52:eval.profit_target}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S52:eval.max_drawdown}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S12:eval.daily_loss_limit}", line: "**Daily Loss Limit**", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S12:eval.daily_loss_limit}", line: "Intraday Evaluation has no Daily Loss Limit", ctx: c("Intraday", "Eval") },
  { page: "evaluation-rules", token: "{S53:eval.daily_loss_limit}", ctx: c("EOD", "Eval") },
  { page: "evaluation-rules", token: "{S52:eval.max_contracts_fixed}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S04:eval.max_contracts_fixed}", ctx: DUP },
  { page: "evaluation-rules", token: "{S52:eval.access_period_days}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S06:eval.consistency}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S52:eval.scaling}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S55:eval.lock_level.rithmic_wealthcharts|eval.lock_trigger_balance.rithmic_wealthcharts}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S55:eval.lock_rule.tradovate}", ctx: EACH_EVAL },
  { page: "evaluation-rules", token: "{S56:eval.pass_review_timing}", ctx: c("na", "Eval") },
  { page: "evaluation-rules", token: "{S56:pa.activation_window_days}", ctx: c("na", "Eval") },
  // ---- faq
  { page: "faq", token: "{S57:pa.is_simulated_funded}", ctx: EACH_PA },
  { page: "faq", token: "{S66:eval.pass_conditions}", ctx: EACH_EVAL },
  { page: "faq", token: "{S63:payout.pa_only_applicability}", ctx: EACH_PA },
  { page: "faq", token: "{S41:hours.flatten_before|hours.trading_resumes|hours.trading_day_definition}", ctx: NA },
  { page: "faq", token: "{S42:hours.holiday_dll_continuation|hours.holiday_trading_allowed}", ctx: NA },
  { page: "faq", token: "{S15:dd.mechanics}", ctx: c("each", "na") },
  { page: "faq", token: "{S49:rules.trailing_threshold_not_a_stop}", ctx: NA },
  { page: "faq", token: "{S68:pa.consistency.window_start}", ctx: c("na", "PA") },
  { page: "faq", token: "{S08:pa.consistency.rule}", ctx: c("na", "PA") },
  { page: "faq", token: "{S18:pa.payout.max_payouts}", ctx: EACH_PA },
  { page: "faq", token: "{S24:pa.payout.closure_after_max}", ctx: EACH_PA },
  { page: "faq", token: "{S62:pa.inactivity.new|pa.inactivity.legacy_pre_2026_03_01}", ctx: EACH_PA },
  // ---- home
  { page: "home", token: "{S37:meta.audit_date}", ctx: NA },
  { page: "home", token: "{S38:eval.profit_target}", ctx: EACH_EVAL },
  { page: "home", token: "{S38:eval.max_drawdown}", ctx: EACH_EVAL },
  { page: "home", token: "{S38:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "home", token: "{S38:eval.max_contracts_fixed}", ctx: EACH_EVAL },
  { page: "home", token: "{S10:eval.start_threshold|pa.start_threshold}", ctx: c("each", "each") },
  { page: "home", token: "{S11:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate|pa.lock_threshold_level}", ctx: c("each", "each") },
  { page: "home", token: "{S12:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "home", token: "{S60:pa.dll_note}", ctx: EACH_PA },
  { page: "home", token: "{S14:dd.mechanics}", ctx: c("each", "na") },
  { page: "home", token: "{S15:dd.mechanics}", ctx: c("each", "na") },
  { page: "home", token: FILL, ctx: c("Intraday", "Eval") },
  { page: "home", token: CME4, ctx: NA },
  { page: "home", token: "{S13:sources.tool_list.S13}", ctx: NA },
  // ---- payout-rules
  { page: "payout-rules", token: "{S63:payout.pa_only_applicability}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S20:pa.payout.min_trading_days}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S20:pa.payout.min_daily_profit}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S19:pa.payout.safety_net|pa.payout.min_balance_to_request|pa.payout.min_payout_amount}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S21:pa.payout.sequential_caps}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S06:eval.consistency}", ctx: EACH_EVAL },
  { page: "payout-rules", token: "{S07:pa.consistency.exact_50_case}", ctx: c("na", "PA") },
  { page: "payout-rules", token: "{S08:pa.consistency.rule}", ctx: c("na", "PA") },
  { page: "payout-rules", token: "{S22:pa.payout.post_request_denial}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S18:pa.payout.max_payouts}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S24:pa.payout.closure_after_max}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.new.note}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.new.min_days|pa.inactivity.new.min_net_profit_per_day}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.new.window_days}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.new_notices}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.legacy_pre_2026_03_01}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.legacy_pre_2026_03_01.min_net_profit_per_day}", ctx: EACH_PA },
  { page: "payout-rules", token: "{S62:pa.inactivity.legacy_warnings}", ctx: EACH_PA },
  // ---- performance-account-rules
  { page: "performance-account-rules", token: "{S57:pa.is_simulated_funded}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S12:eval.daily_loss_limit}", ctx: c("Intraday", "Eval") },
  { page: "performance-account-rules", token: "{S06:eval.consistency}", ctx: EACH_EVAL },
  { page: "performance-account-rules", token: "{S58:pa.max_active_pa_household}", ctx: c("na", "PA") },
  { page: "performance-account-rules", token: "{S10:pa.start_threshold|pa.max_drawdown}", line: "**EOD PA:**", ctx: { ...c("EOD", "PA"), named: true } },
  { page: "performance-account-rules", token: "{S10:pa.start_threshold|pa.max_drawdown}", line: "**Intraday PA:**", ctx: { ...c("Intraday", "PA"), named: true } },
  { page: "performance-account-rules", token: "{S11:pa.lock_threshold_level|pa.lock_trigger_balance}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S49:rules.trailing_threshold_not_a_stop}", ctx: NA },
  { page: "performance-account-rules", token: "{S60:pa.dll_note}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S61:pa.scaling_tiers}", line: "Contract limits by tier and size", ctx: EACH_PA },
  // same key as the full render on the "Contract limits by tier and size" line below: printed once on the page
  { page: "performance-account-rules", token: "{S61:pa.scaling_tiers}", ctx: DUP },
  { page: "performance-account-rules", token: "{S25:pa.scaling_tiers}", ctx: DUP },
  { page: "performance-account-rules", token: "{S27:contracts.micro_equivalency}", ctx: NA },
  { page: "performance-account-rules", token: "{S28:contracts.order_rejection_pa}", ctx: c("na", "PA") },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.new.note}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.new.min_days|pa.inactivity.new.min_net_profit_per_day}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.new.window_days}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.new_notices}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.legacy_pre_2026_03_01}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.legacy_pre_2026_03_01.min_net_profit_per_day}", ctx: EACH_PA },
  { page: "performance-account-rules", token: "{S62:pa.inactivity.legacy_warnings}", ctx: EACH_PA },
  // ---- trading-calculators
  { page: "trading-calculators", token: "{S06:eval.consistency}", ctx: EACH_EVAL },
  { page: "trading-calculators", token: "{S07:pa.consistency.exact_50_case}", ctx: c("na", "PA") },
  { page: "trading-calculators", token: "{S08:pa.consistency.rule}", ctx: c("na", "PA") },
  { page: "trading-calculators", token: "{S10:eval.start_threshold|pa.start_threshold}", ctx: c("each", "each") },
  { page: "trading-calculators", token: "{S11:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate|pa.lock_threshold_level}", ctx: c("each", "each") },
  { page: "trading-calculators", token: "{S12:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "trading-calculators", token: "{S60:pa.dll_note}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S14:dd.mechanics}", ctx: c("each", "na") },
  { page: "trading-calculators", token: "{S15:dd.mechanics}", ctx: c("each", "na") },
  { page: "trading-calculators", token: FILL, ctx: c("Intraday", "Eval") },
  { page: "trading-calculators", token: CME4, ctx: NA },
  { page: "trading-calculators", token: "{S13:sources.tool_list.S13}", ctx: NA },
  { page: "trading-calculators", token: "{S63:payout.pa_only_applicability}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S18:pa.payout.max_payouts}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S19:pa.payout.safety_net|pa.payout.min_balance_to_request|pa.payout.min_payout_amount}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S20:pa.payout.min_trading_days|pa.payout.min_daily_profit}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S21:pa.payout.sequential_caps}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S22:pa.payout.post_request_denial}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S24:pa.payout.closure_after_max}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S23:sources.tool_list.S23}", ctx: NA },
  { page: "trading-calculators", token: "{S25:pa.scaling_tiers}", ctx: EACH_PA },
  { page: "trading-calculators", token: "{S26:eval.max_contracts_fixed|pa.max_contracts_ceiling}", ctx: c("each", "each") },
  { page: "trading-calculators", token: "{S27:contracts.micro_equivalency}", ctx: NA },
  { page: "trading-calculators", token: "{S28:contracts.order_rejection_eval|contracts.order_rejection_pa}", ctx: c("na", "each") },
  { page: "trading-calculators", token: "{S29:contracts.order_rejection_eval}", ctx: c("na", "Eval") },
  { page: "trading-calculators", token: "{S32:eval.daily_loss_limit}", ctx: EACH_EVAL },
  { page: "trading-calculators", token: "{S33:eval.lock_level.rithmic_wealthcharts|eval.lock_rule.tradovate}", ctx: EACH_EVAL },
  { page: "trading-calculators", token: "{S34:path_picker.reasoning_facts}", ctx: NONE },
  { page: "trading-calculators", token: "{S35:sources.tool_list.S35}", ctx: NA },
  // ---- updates
  { page: "updates", token: "{S71:meta.audit_date}", ctx: NA },
];

/** Lookup order: entries with a `line` substring that is present win over line-less entries. */
export function ctxFor(page: string, token: string, line: string): SiteCtx | undefined {
  const cands = SITES.filter((s) => s.page === page && s.token === token);
  return cands.find((s) => s.line && line.includes(s.line))?.ctx ?? cands.find((s) => !s.line)?.ctx;
}
