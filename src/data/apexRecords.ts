/**
 * GENERATED from research/site_data/apex_site_data_2026-11-21.json (RI, schema 1.1, 291 records).
 * Do not edit by hand. Prices are deliberately absent (they render only from src/data/prices.gated.json).
 */
export interface SiteRecord {
  id: string;
  slot_id?: string;
  key: string;
  value?: unknown;
  unit?: string;
  value_type: string;
  applies_to: { account_type: string; stage: string; size: string; instrument?: string; tool?: string };
  source_url: string;
  source_title?: string;
  source_modified?: string;
  checked_at: string;
  status: "VERIFIED_SNAPSHOT" | "CONFLICT" | "NOT_FOUND";
  note?: string;
  quote?: string | string[];
  derived_from?: string;
  conflict_id?: string;
  also_source?: string | string[];
  evidence_kind?: string;
}

export const SITE_DATA_GENERATED_FOR = "APEX Affiliate OS English site calculators";
export const SITE_DATA_RECORDS: SiteRecord[] = [
{
"id": "SD001",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 1500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD002",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 1000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD003",
"slot_id": "S12/S32/S53/S38",
"key": "eval.daily_loss_limit",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed; hitting DLL pauses the session, does not fail the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD004",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 4,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD005",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD006",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD007",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD008",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 25000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD009",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 24000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "Initial EOD Threshold:$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD010",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 3000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD011",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 2000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD012",
"slot_id": "S12/S32/S53/S38",
"key": "eval.daily_loss_limit",
"value": 1000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed; hitting DLL pauses the session, does not fail the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD013",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 6,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD014",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD015",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD016",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD017",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 50000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD018",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 48000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "Initial EOD Threshold:$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD019",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 6000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD020",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 3000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD021",
"slot_id": "S12/S32/S53/S38",
"key": "eval.daily_loss_limit",
"value": 1500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed; hitting DLL pauses the session, does not fail the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD022",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 8,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD023",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD024",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD025",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD026",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 100000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD027",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 97000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "Initial EOD Threshold:$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD028",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 9000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD029",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 4000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD030",
"slot_id": "S12/S32/S53/S38",
"key": "eval.daily_loss_limit",
"value": 2000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed; hitting DLL pauses the session, does not fail the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD031",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 12,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD032",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD033",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD034",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD035",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 150000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD036",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 146000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "Initial EOD Threshold:$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD037",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 26500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at the Profit Target Balance on Rithmic / WealthCharts evaluations. Official 50K page text has typo \"$53.000\".",
"quote": [
"Threshold Stop Level = $53.000",
"$55,000 ($53,000 + $2,000)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD038",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 27500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD closing balance closes above this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD039",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 53000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at the Profit Target Balance on Rithmic / WealthCharts evaluations. Official 50K page text has typo \"$53.000\".",
"quote": [
"Threshold Stop Level = $53.000",
"$55,000 ($53,000 + $2,000)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD040",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 55000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD closing balance closes above this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD041",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 106000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at the Profit Target Balance on Rithmic / WealthCharts evaluations. Official 50K page text has typo \"$53.000\".",
"quote": [
"Threshold Stop Level = $53.000",
"$55,000 ($53,000 + $2,000)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD042",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 109000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD closing balance closes above this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD043",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 159000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at the Profit Target Balance on Rithmic / WealthCharts evaluations. Official 50K page text has typo \"$53.000\".",
"quote": [
"Threshold Stop Level = $53.000",
"$55,000 ($53,000 + $2,000)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD044",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 163000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD closing balance closes above this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD045",
"slot_id": "S11/S33/S55",
"key": "eval.lock_rule.tradovate",
"value": "Tradovate evaluations: drawdown trails indefinitely with the peak balance; no fixed lock level. If the platform is unknown, show both platform rules and do not assume a lock.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Summary of the official Tradovate wording (quote attached).",
"quote": "EOD Drawdown trails indefinitely with the peak EOD account balance.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD046",
"slot_id": "S14/S15/S39",
"key": "dd.mechanics",
"value": "Threshold recalculated once per trading day at 4:59:59 PM ET from the closing balance; trails the highest EOD balance; never moves down; unrealized profit does not move it mid-session; enforced in real time.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official 50K walkthrough: Day 1 close $50,800 -> threshold $48,800.",
"quote": [
"4:59:59 PM ET",
"never moves downward"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD047",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 1500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD048",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 1000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD049",
"slot_id": "S12/S32/S54/S38",
"key": "eval.daily_loss_limit",
"unit": "USD",
"value_type": "absent_by_rule",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"source_title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "No DLL on Intraday Evaluations (official). Not a NOT_FOUND: absence is the rule.",
"quote": "There is no DLL for Intraday Drawdown Evaluations.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD050",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 4,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD051",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD052",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD053",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD054",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 25000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD055",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 24000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD056",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 3000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD057",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 2000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD058",
"slot_id": "S12/S32/S54/S38",
"key": "eval.daily_loss_limit",
"unit": "USD",
"value_type": "absent_by_rule",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"source_title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "No DLL on Intraday Evaluations (official). Not a NOT_FOUND: absence is the rule.",
"quote": "There is no DLL for Intraday Drawdown Evaluations.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD059",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 6,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD060",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD061",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD062",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD063",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 50000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD064",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 48000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD065",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 6000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD066",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 3000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD067",
"slot_id": "S12/S32/S54/S38",
"key": "eval.daily_loss_limit",
"unit": "USD",
"value_type": "absent_by_rule",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"source_title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "No DLL on Intraday Evaluations (official). Not a NOT_FOUND: absence is the rule.",
"quote": "There is no DLL for Intraday Drawdown Evaluations.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD068",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 8,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD069",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD070",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD071",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD072",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 100000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD073",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 97000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD074",
"slot_id": "S30/S52/S38",
"key": "eval.profit_target",
"value": 9000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD075",
"slot_id": "S10/S30/S52/S38",
"key": "eval.max_drawdown",
"value": 4000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD076",
"slot_id": "S12/S32/S54/S38",
"key": "eval.daily_loss_limit",
"unit": "USD",
"value_type": "absent_by_rule",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"source_title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "No DLL on Intraday Evaluations (official). Not a NOT_FOUND: absence is the rule.",
"quote": "There is no DLL for Intraday Drawdown Evaluations.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD077",
"slot_id": "S04/S26/S52/S38",
"key": "eval.max_contracts_fixed",
"value": 12,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fixed for the whole evaluation; same on EOD and Intraday. These are NOT the PA maxima.",
"quote": "Contract limits are identical for both EOD and Intraday Trailing evaluations.",
"also_source": [
"https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD078",
"slot_id": "S50/S52/S56",
"key": "eval.access_period_days",
"value": 30,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official table: 30 Days. Evaluation Plan Fees and Access page (snapshot, same date): expires automatically at 6:00 PM ET on Day 30, no extensions.",
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD079",
"slot_id": "S06/S52/S73",
"key": "eval.consistency",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Consistency is not an evaluation rule.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD080",
"slot_id": "S52",
"key": "eval.scaling",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD081",
"slot_id": "S10",
"key": "eval.starting_balance",
"value": 150000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Starting balance = account size.",
"derived_from": "Account size label; official examples use $50,000 start for 50K",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD082",
"slot_id": "S10",
"key": "eval.start_threshold",
"value": 146000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Arithmetic from official table; only the 50K case is printed as an official worked example.",
"quote": "$50,000 − $2,000 = $48,000",
"derived_from": "starting balance minus max drawdown (official 50K example: $50,000 - $2,000 = $48,000)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD083",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 26500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C4 CONFLICT: same page FAQ says the threshold stops at \"Profit Target Balance + $2,000\" while the worked numbers lock at $53,000 on a 50K. Do not generalise +$2,000 to other sizes. Show both; do not pick one.",
"quote": [
"Profit Target Balance = $53,000",
"reaches $55,000 (Profit Target Balance + Max Drawdown)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD084",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 27500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance, realized or unrealized, reaches this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD085",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 53000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C4 CONFLICT: same page FAQ says the threshold stops at \"Profit Target Balance + $2,000\" while the worked numbers lock at $53,000 on a 50K. Do not generalise +$2,000 to other sizes. Show both; do not pick one.",
"quote": [
"Profit Target Balance = $53,000",
"reaches $55,000 (Profit Target Balance + Max Drawdown)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD086",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 55000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance, realized or unrealized, reaches this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD087",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 106000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C4 CONFLICT: same page FAQ says the threshold stops at \"Profit Target Balance + $2,000\" while the worked numbers lock at $53,000 on a 50K. Do not generalise +$2,000 to other sizes. Show both; do not pick one.",
"quote": [
"Profit Target Balance = $53,000",
"reaches $55,000 (Profit Target Balance + Max Drawdown)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD088",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 109000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance, realized or unrealized, reaches this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD089",
"slot_id": "S11/S33/S55",
"key": "eval.lock_level.rithmic_wealthcharts",
"value": 159000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C4 CONFLICT: same page FAQ says the threshold stops at \"Profit Target Balance + $2,000\" while the worked numbers lock at $53,000 on a 50K. Do not generalise +$2,000 to other sizes. Show both; do not pick one.",
"quote": [
"Profit Target Balance = $53,000",
"reaches $55,000 (Profit Target Balance + Max Drawdown)"
],
"derived_from": "starting balance + profit target (official 50K example: $53,000); other sizes by arithmetic",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD090",
"slot_id": "S11/S33/S55",
"key": "eval.lock_trigger_balance.rithmic_wealthcharts",
"value": 163000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance, realized or unrealized, reaches this level to fix the threshold.",
"derived_from": "profit target balance + max drawdown (official 50K example: $55,000)",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD091",
"slot_id": "S11/S33/S55",
"key": "eval.lock_rule.tradovate",
"value": "Tradovate evaluations: drawdown trails indefinitely with the peak balance; no fixed lock level. If the platform is unknown, show both platform rules and do not assume a lock.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Summary of the official Tradovate wording (quote attached).",
"quote": "continues to trail indefinitely with the Peak Balance and does not stop at a fixed level",
"conflict_id": "C4",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD092",
"slot_id": "S14/S15/S39",
"key": "dd.mechanics",
"value": "Threshold follows the highest intraday (peak) balance including unrealized PnL, updates immediately, never decreases, does not reset daily.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official 50K example: unrealized $50,900 moves the threshold to $48,900.",
"quote": [
"$50,900 − $2,000 = $48,900"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD093",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 1000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD094",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 24000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD095",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 25100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at starting balance + $100. Not locked from day one.",
"quote": "Threshold Stop Level = $50,100",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD096",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 26100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD balance that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD097",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 999,
"max_contracts": 1,
"dll": 500
},
{
"level": 2,
"profit_from": 1000,
"profit_to": 1999,
"max_contracts": 2,
"dll": 500
},
{
"level": 3,
"profit_from": 2000,
"profit_to": null,
"max_contracts": 2,
"dll": 1250
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD098",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 1,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD099",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 2,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD100",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD101",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD102",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 26100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD103",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 26600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD104",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD105",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD106",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
1000,
1000,
1000,
1000,
1000,
1000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $6,000.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD107",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD108",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 2000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD109",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 48000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD110",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 50100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at starting balance + $100. Not locked from day one.",
"quote": "Threshold Stop Level = $50,100",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD111",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 52100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD balance that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD112",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 1499,
"max_contracts": 2,
"dll": 1000
},
{
"level": 2,
"profit_from": 1500,
"profit_to": 2999,
"max_contracts": 3,
"dll": 1000
},
{
"level": 3,
"profit_from": 3000,
"profit_to": 5999,
"max_contracts": 4,
"dll": 2000
},
{
"level": 4,
"profit_from": 6000,
"profit_to": null,
"max_contracts": 4,
"dll": 3000
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD113",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 2,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD114",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 4,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD115",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD116",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 250,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD117",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 52100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD118",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 52600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD119",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD120",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD121",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
1500,
1500,
2000,
2500,
2500,
3000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $13,000.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD122",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD123",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 3000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD124",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 97000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD125",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 100100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at starting balance + $100. Not locked from day one.",
"quote": "Threshold Stop Level = $50,100",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD126",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 103100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD balance that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD127",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 1999,
"max_contracts": 3,
"dll": 1750
},
{
"level": 2,
"profit_from": 2000,
"profit_to": 2999,
"max_contracts": 4,
"dll": 1750
},
{
"level": 3,
"profit_from": 3000,
"profit_to": 4999,
"max_contracts": 5,
"dll": 1750
},
{
"level": 4,
"profit_from": 5000,
"profit_to": 9999,
"max_contracts": 6,
"dll": 2500
},
{
"level": 5,
"profit_from": 10000,
"profit_to": null,
"max_contracts": 6,
"dll": 3500
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD128",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 3,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD129",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 6,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD130",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD131",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 300,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD132",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 103100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD133",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 103600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD134",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD135",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD136",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
2000,
2500,
2500,
3000,
4000,
4000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $18,000.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD137",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD138",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 4000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD139",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 146000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD140",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 150100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Threshold stops trailing at starting balance + $100. Not locked from day one.",
"quote": "Threshold Stop Level = $50,100",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD141",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 154100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Highest EOD balance that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD142",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 1999,
"max_contracts": 4,
"dll": 2500
},
{
"level": 2,
"profit_from": 2000,
"profit_to": 2999,
"max_contracts": 5,
"dll": 2500
},
{
"level": 3,
"profit_from": 3000,
"profit_to": 4999,
"max_contracts": 7,
"dll": 2500
},
{
"level": 4,
"profit_from": 5000,
"profit_to": 9999,
"max_contracts": 10,
"dll": 3000
},
{
"level": 5,
"profit_from": 10000,
"profit_to": null,
"max_contracts": 10,
"dll": 4000
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD143",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 4,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD144",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 10,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD145",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD146",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 350,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD147",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 154100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD148",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 154600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD149",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD150",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD151",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
2500,
3000,
3000,
3000,
4000,
5000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $20,500.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD152",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD153",
"slot_id": "S24",
"key": "pa.payout.closure_after_max",
"value": "After 6 payouts, the PA is closed (payout-page body) vs. FAQ: \"After the sixth payout, the account completes its payout cycle.\"",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Both sentences are on the same page. Do not resolve; quote both.",
"quote": [
"After 6 payouts, the PA is closed",
"After the sixth payout, the account completes its payout cycle."
],
"conflict_id": "C8",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD154",
"slot_id": "S22",
"key": "pa.payout.post_request_denial",
"value": "After a request, trade as if the requested amount is already removed; if the balance then falls below the required threshold the payout is denied automatically; account stays active.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C5 CONFLICT: Apex homepage marketing says \"NO Payout Denials\" (RI record, master C5, fetched 2026-11-21; no raw file in repo). Rules copy follows the Help Center; do not repeat the marketing claim.",
"quote": "the payout will be denied automatically",
"conflict_id": "C5",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD155",
"slot_id": "S60",
"key": "pa.dll_note",
"value": "PAs have a tier-based Daily Loss Limit (see pa.scaling_tiers); hitting it liquidates positions and pauses trading for the session; the account stays active.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"source_title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "trading is paused for the remainder of the session",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD156",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 1000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD157",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 24000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD158",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 25100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C6 CONFLICT: the Intraday PA glance page says \"Trailing stops once Max Trailing Drawdown Amount + $100 is reached\"; the Intraday Explained article says Starting Balance + $100 (50K = $50,100). Show both; do not pick.",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"conflict_id": "C6",
"also_source": [
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD159",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 26100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance (realized or unrealized) that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"conflict_id": "C6",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD160",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 999,
"max_contracts": 1,
"dll": 500
},
{
"level": 2,
"profit_from": 1000,
"profit_to": 1999,
"max_contracts": 2,
"dll": 500
},
{
"level": 3,
"profit_from": 2000,
"profit_to": null,
"max_contracts": 2,
"dll": 1250
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD161",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 1,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD162",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 2,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD163",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD164",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD165",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 26100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD166",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 26600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD167",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD168",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD169",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
1000,
1000,
1000,
1000,
1000,
1000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $6,000.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD170",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "25K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD171",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 2000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD172",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 48000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD173",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 50100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C6 CONFLICT: the Intraday PA glance page says \"Trailing stops once Max Trailing Drawdown Amount + $100 is reached\"; the Intraday Explained article says Starting Balance + $100 (50K = $50,100). Show both; do not pick.",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"conflict_id": "C6",
"also_source": [
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD174",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 52100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance (realized or unrealized) that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"conflict_id": "C6",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD175",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 1499,
"max_contracts": 2,
"dll": 1000
},
{
"level": 2,
"profit_from": 1500,
"profit_to": 2999,
"max_contracts": 3,
"dll": 1000
},
{
"level": 3,
"profit_from": 3000,
"profit_to": 5999,
"max_contracts": 4,
"dll": 2000
},
{
"level": 4,
"profit_from": 6000,
"profit_to": null,
"max_contracts": 4,
"dll": 3000
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD176",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 2,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD177",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 4,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD178",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD179",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 200,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD180",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 52100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD181",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 52600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD182",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD183",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD184",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
1500,
2000,
2500,
2500,
3000,
3000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $14,500.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD185",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD186",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 3000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD187",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 97000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD188",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 100100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C6 CONFLICT: the Intraday PA glance page says \"Trailing stops once Max Trailing Drawdown Amount + $100 is reached\"; the Intraday Explained article says Starting Balance + $100 (50K = $50,100). Show both; do not pick.",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"conflict_id": "C6",
"also_source": [
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD189",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 103100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance (realized or unrealized) that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"conflict_id": "C6",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD190",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 1999,
"max_contracts": 3,
"dll": 1750
},
{
"level": 2,
"profit_from": 2000,
"profit_to": 2999,
"max_contracts": 4,
"dll": 1750
},
{
"level": 3,
"profit_from": 3000,
"profit_to": 4999,
"max_contracts": 5,
"dll": 1750
},
{
"level": 4,
"profit_from": 5000,
"profit_to": 9999,
"max_contracts": 6,
"dll": 2500
},
{
"level": 5,
"profit_from": 10000,
"profit_to": null,
"max_contracts": 6,
"dll": 3500
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD191",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 3,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD192",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 6,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD193",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD194",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 250,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD195",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 103100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD196",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 103600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD197",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD198",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD199",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
2000,
2500,
3000,
3000,
4000,
4000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $18,500.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD200",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "100K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD201",
"slot_id": "S10",
"key": "pa.max_drawdown",
"value": 4000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official PA parameter table; same distance as the evaluation.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD202",
"slot_id": "S10",
"key": "pa.start_threshold",
"value": 146000,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "starting balance minus max drawdown",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD203",
"slot_id": "S11",
"key": "pa.lock_threshold_level",
"value": 150100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C6 CONFLICT: the Intraday PA glance page says \"Trailing stops once Max Trailing Drawdown Amount + $100 is reached\"; the Intraday Explained article says Starting Balance + $100 (50K = $50,100). Show both; do not pick.",
"derived_from": "starting balance + $100 (official 50K: $50,100)",
"conflict_id": "C6",
"also_source": [
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD204",
"slot_id": "S11",
"key": "pa.lock_trigger_balance",
"value": 154100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Highest balance (realized or unrealized) that fixes the threshold.",
"derived_from": "starting balance + max drawdown + $100 (official 50K: $52,100)",
"conflict_id": "C6",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD205",
"slot_id": "S25/S26/S61",
"key": "pa.scaling_tiers",
"value": [
{
"level": 1,
"profit_from": 0,
"profit_to": 1999,
"max_contracts": 4,
"dll": 2500
},
{
"level": 2,
"profit_from": 2000,
"profit_to": 2999,
"max_contracts": 5,
"dll": 2500
},
{
"level": 3,
"profit_from": 3000,
"profit_to": 4999,
"max_contracts": 7,
"dll": 2500
},
{
"level": 4,
"profit_from": 5000,
"profit_to": 9999,
"max_contracts": 10,
"dll": 3000
},
{
"level": 5,
"profit_from": 10000,
"profit_to": null,
"max_contracts": 10,
"dll": 4000
}
],
"unit": "tiers[{level,profit_from_usd,profit_to_usd|null,max_contracts,dll_usd}]",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Same official tables for EOD PA and Intraday PA. Tier updates once per day from the prior session close balance (4:59:59 PM ET).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD206",
"slot_id": "S25/S61",
"key": "pa.level1_contracts",
"value": 4,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Day-one contract limit.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD207",
"slot_id": "S26",
"key": "pa.max_contracts_ceiling",
"value": 10,
"unit": "contracts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Top-tier ceiling in the official PA table; not the day-one size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD208",
"slot_id": "S20",
"key": "pa.payout.min_trading_days",
"value": 5,
"unit": "days",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Qualifying days need not be consecutive; no deadline.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD209",
"slot_id": "S20",
"key": "pa.payout.min_daily_profit",
"value": 300,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD210",
"slot_id": "S19",
"key": "pa.payout.safety_net",
"value": 154100,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The Safety Net is calculated as your account’s drawdown limit plus $100.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD211",
"slot_id": "S19",
"key": "pa.payout.min_balance_to_request",
"value": 154600,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Already reflects safety net + $500 minimum payout.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD212",
"slot_id": "S19",
"key": "pa.payout.min_payout_amount",
"value": 500,
"unit": "USD",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "The minimum payout amount is $500 per request, regardless of account size.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD213",
"slot_id": "S18/S24",
"key": "pa.payout.max_payouts",
"value": 6,
"unit": "payouts",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Maximum 6 payouts per Performance Account",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD214",
"slot_id": "S21",
"key": "pa.payout.sequential_caps",
"value": [
2500,
3000,
3000,
4000,
4000,
5000
],
"unit": "USD per payout #1..#6",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official \"Max Payouts\" table. Sum of caps is a ceiling, not an expectation: $21,500.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD215",
"slot_id": "S20",
"key": "pa.payout.split",
"value": 100,
"unit": "percent",
"value_type": "number",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "150K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday PA only; Legacy split not included.",
"quote": "Approved payouts are issued at a 100% payout split",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD216",
"slot_id": "S24",
"key": "pa.payout.closure_after_max",
"value": "After 6 payouts, the PA is closed (payout-page body) vs. FAQ: \"After the sixth payout, the account completes its payout cycle.\"",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Both sentences are on the same page. Do not resolve; quote both.",
"quote": [
"After 6 payouts, the PA is closed",
"After the sixth payout, the account completes its payout cycle."
],
"conflict_id": "C8",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD217",
"slot_id": "S22",
"key": "pa.payout.post_request_denial",
"value": "After a request, trade as if the requested amount is already removed; if the balance then falls below the required threshold the payout is denied automatically; account stays active.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "C5 CONFLICT: Apex homepage marketing says \"NO Payout Denials\" (RI record, master C5, fetched 2026-11-21; no raw file in repo). Rules copy follows the Help Center; do not repeat the marketing claim.",
"quote": "the payout will be denied automatically",
"conflict_id": "C5",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD218",
"slot_id": "S60",
"key": "pa.dll_note",
"value": "PAs have a tier-based Daily Loss Limit (see pa.scaling_tiers); hitting it liquidates positions and pauses trading for the session; the account stays active.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Daily Loss Limit (DLL) enforced intraday",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD219",
"slot_id": "S07/S08/S64",
"key": "pa.consistency.rule",
"value": "Largest profitable day must represent less than 50% of net profit since the last approved payout (or account inception). Formula: Highest Profit Day / Total Profit. Losing days count in the denominator. Above the line, the payout request option is unavailable; the account stays active.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"source_title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Applies to EOD PA and Intraday PA payouts. Not applied in evaluations.",
"quote": [
"Your largest profitable trading day must represent less than 50% of your net profit",
"The result must be below 50%.",
"payout request option will just not be available",
"which is 125%"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD220",
"slot_id": "S07",
"key": "pa.consistency.exact_50_case",
"unit": "percent",
"value_type": "conflict",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"source_title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "CONFLICT, NOT RESOLVED. Text says the result must be below 50% (payout pages: \"50% or more\" fails), yet the worked table marks an exactly-50% day as \"Consistency Met\". Never assert pass or fail at exactly 50%. The 49.95-50.05% no-verdict band is the SITE's own policy (Noam decision relayed by CEO), not an Apex figure.",
"quote": [
"The result must be below 50%.",
"✓ Consistency Met"
],
"conflict_id": "C2",
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD221",
"slot_id": "S07/S68",
"key": "pa.consistency.window_start",
"unit": "text",
"value_type": "conflict",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"source_title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "CONFLICT: the same article says \"last approved payout\" in some places and \"last payout request\" in others. Quote both; show the helper line CF specified.",
"quote": [
"since your last payout request",
"since your last approved payout"
],
"conflict_id": "C3",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD222",
"slot_id": "S06/S73",
"key": "pa.consistency.eval",
"value": "Not Applied",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official evaluation parameter table.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD223",
"slot_id": "S58",
"key": "pa.max_active_pa_household",
"value": 20,
"unit": "active PAs",
"value_type": "number",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/performance-accounts-pa/how-many-paid-funded-accounts-am-i-allowed-to-have/",
"source_title": "How Many Paid/Funded Accounts Am I Allowed to Have?",
"source_modified": "2026-04-15T05:46:38",
"checked_at": "2026-11-19",
"status": "CONFLICT",
"note": "Number is consistent (20); the SCOPE wording differs: EOD PA page \"across all PA accounts combined, whether different size, EOD, or Intraday\"; Intraday PA page adds Legacy; household article covers all PAs. Use the household article; do not state a scope from memory.",
"quote": [
"The total limit is 20 active PA accounts across all people in the same house, companies, and connections",
"You CANNOT exceed a total of 20 active PA accounts."
],
"conflict_id": "C7",
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD224",
"slot_id": "S58",
"key": "eval.max_concurrent",
"value": "No limit on Evaluation accounts",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/performance-accounts-pa/how-many-paid-funded-accounts-am-i-allowed-to-have/",
"source_title": "How Many Paid/Funded Accounts Am I Allowed to Have?",
"source_modified": "2026-04-15T05:46:38",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "There are no limits to Evaluation accounts.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD225",
"slot_id": "S56",
"key": "pa.activation_window_days",
"value": 7,
"unit": "calendar days",
"value_type": "number",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/billing/pa-activation-process-deadline-explained/",
"source_title": "PA Activation Process & Deadline Explained",
"source_modified": "2026-10-26T07:14:54",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Window starts when the evaluation is marked Passed after the 6 PM ET reopen. Fee amount is NOT in this file (prices stay with validate_prices.py --gate).",
"quote": "If the activation fee is not completed within 7 calendar days of the Evaluation being marked as Passed, the activation link expires permanently.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD226",
"slot_id": "S62/S70",
"key": "pa.inactivity.new",
"value": {
"min_days": 2,
"min_net_profit_per_day": 50,
"window_days": 30
},
"unit": "days / USD / rolling days",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/billing/inactivity-policy-on-performance-accounts-pa/",
"source_title": "Inactivity Policy on Performance Accounts (PA)",
"source_modified": "2026-10-08T07:39:26",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Applies to all Intraday and EOD PAs and promotional Legacy accounts purchased after March 1st, 2026. Closure is permanent.",
"quote": "you must record at least 2 trading days with $50 or more in net profit within every rolling 30-day period",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD227",
"slot_id": "S62/S70",
"key": "pa.inactivity.legacy_pre_2026_03_01",
"value": {
"min_days": 1,
"min_net_profit_per_day": 150,
"window_days": 30
},
"unit": "days / USD / calendar days",
"value_type": "object",
"applies_to": {
"account_type": "Legacy",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/performance-accounts-pa/legacy-pa-inactivity-policy/",
"source_title": "Legacy PA Inactivity Policy",
"source_modified": "2026-09-16T11:43:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Legacy PAs bought before 1 March 2026 incl. lifetime subscriptions. Scope note only; not for current-account pages beyond the CF-approved account-scope note.",
"quote": "without recording at least one single trading day with $150 or more in net profit",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD228",
"slot_id": "S57",
"key": "pa.is_simulated_funded",
"value": "Simulated Funded (Sim Funded) account",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"source_title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Never describe as live brokerage.",
"quote": "Simulated Funded (Sim Funded)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD229",
"slot_id": "S57",
"key": "pa.is_simulated_funded",
"value": "Simulated Funded (Sim Funded) account",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"source_title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Never describe as live brokerage.",
"quote": "Simulated Funded (Sim Funded)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD230",
"slot_id": "S03/S41",
"key": "hours.flatten_before",
"value": "4:59 PM ET",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/futures-trading-times/",
"source_title": "Futures Trading Times",
"source_modified": "2026-04-20T14:05:07",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "All trades must be closed before 4:59 PM ET.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD231",
"slot_id": "S41",
"key": "hours.trading_resumes",
"value": "6:00 PM ET",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/futures-trading-times/",
"source_title": "Futures Trading Times",
"source_modified": "2026-04-20T14:05:07",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Starting at 6:00 PM ET, you can start placing trades again.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD232",
"slot_id": "S41",
"key": "hours.trading_day_definition",
"value": "6 PM ET one day to 4:59 PM ET the next day",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/futures-trading-times/",
"source_title": "Futures Trading Times",
"source_modified": "2026-04-20T14:05:07",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "A trading day is defined from 6 PM ET one day to 4:59 PM ET the next day.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD233",
"slot_id": "S42/S67",
"key": "hours.holiday_dll_continuation",
"value": "Holiday or CME half-day session does not create a new trading day for DLL reset purposes; DLL does not reset after it.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/helpful-items/holiday-trading/",
"source_title": "Holiday Trading",
"source_modified": "2026-04-15T09:04:52",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Read the full paragraph live before quoting beyond this sentence.",
"quote": "does not create a new trading day for Daily Loss Limit reset purposes",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD234",
"slot_id": "S42",
"key": "hours.holiday_trading_allowed",
"value": "Trading allowed on holidays while the market is open; all rules and limits stay in effect; no exemptions.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/helpful-items/holiday-trading/",
"source_title": "Holiday Trading",
"source_modified": "2026-04-15T09:04:52",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Trading on holidays does not provide any exemptions or exceptions.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD235",
"slot_id": "S42",
"key": "hours.thanksgiving_2026_flatten_time",
"unit": "text",
"value_type": "null",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/helpful-items/holiday-trading/",
"source_title": "Holiday Trading",
"source_modified": "2026-04-15T09:04:52",
"checked_at": "2026-11-19",
"status": "NOT_FOUND",
"note": "Holiday Trading article defers to the CME holiday schedule; no 2026 Thanksgiving flatten time published. Do not invent. (CME holiday calendar page not captured.)",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD236",
"slot_id": "S43",
"key": "rules.news_day_blackout_calendar",
"unit": "text",
"value_type": "null",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"source_title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"status": "NOT_FOUND",
"note": "No news blackout calendar on retrieved Apex pages. The only news rule is the NEWS TRADING sentence (separate record).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD237",
"slot_id": "S43",
"key": "rules.news_trading",
"value": "Trading during news is allowed for your normal strategy; \"news trading\" strategies that chase the market or place orders on both sides to gamble the outcome are not allowed.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"source_title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": " CEO decision (Build Note 19): this record stays in the data only; the site makes NO news statement and must not render this record.",
"quote": "Trading during news is allowed for your normal trading strategy.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD238",
"slot_id": "S49",
"key": "rules.trailing_threshold_not_a_stop",
"value": "Using the full trailing threshold as a stop loss is prohibited.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"source_title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "Using the Trailing Threshold as a Stop Loss",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD239",
"slot_id": "S43",
"key": "rules.stop_losses_required",
"value": "All trades must have pending or mental stop losses and a well-defined risk management strategy.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"source_title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "All trades must have either pending or mental stop losses",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD240",
"slot_id": "S43",
"key": "rules.no_hedging",
"value": "No hedging of any kind; directional trading only.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"source_title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "No Hedging of Any Kind – Directional Trading only.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD241",
"slot_id": "S43",
"key": "rules.no_automation",
"value": "No automation or algorithm usage allowed.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"source_title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "No Automation or Algorithm Usage allowed",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD242",
"slot_id": "S27",
"key": "contracts.micro_equivalency",
"value": "10 micro contracts = 1 standard contract (Apex exposure calculation)",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "New EOD/Intraday products only (Legacy has C10).",
"quote": "ten (10) micro contracts equal one (1) standard contract",
"also_source": [
"https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD243",
"slot_id": "S28/S29",
"key": "contracts.order_rejection_eval",
"value": "Orders exceeding the maximum are automatically rejected and are not a rule violation.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"source_title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "it will be automatically rejected and it will not count as a rule violation",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD244",
"slot_id": "S28",
"key": "contracts.order_rejection_pa",
"value": "Orders that would exceed the allowed size are automatically rejected with no penalty.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"source_title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "it is automatically rejected",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD245",
"slot_id": "S13/S31",
"key": "cme.NQ.point_value",
"value": 20,
"unit": "USD per index point",
"value_type": "number",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "NQ"
},
"source_url": "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
"source_title": "E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "Official About text: \"$20 x the Nasdaq-100 index\".",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD246",
"slot_id": "S13/S31",
"key": "cme.NQ.tick_size",
"value": 0.25,
"unit": "index points",
"value_type": "number",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "NQ"
},
"source_url": "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
"source_title": "E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "Official About text: minimum tick 0.25 index points.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD247",
"slot_id": "S13/S31",
"key": "cme.NQ.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "NQ"
},
"source_url": "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
"source_title": "E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Dollar tick value not printed in retrieved HTML. Do not compute and present as a CME figure.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD248",
"slot_id": "S13/S31",
"key": "cme.MNQ.point_value",
"value": 2,
"unit": "USD per index point",
"value_type": "number",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MNQ"
},
"source_url": "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
"source_title": "Micro E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "Official About text: \"$2 x the Nasdaq-100 Index\".",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD249",
"slot_id": "S13/S31",
"key": "cme.MNQ.tick_size",
"value": 0.25,
"unit": "index points",
"value_type": "number",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MNQ"
},
"source_url": "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
"source_title": "Micro E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD250",
"slot_id": "S13/S31",
"key": "cme.MNQ.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MNQ"
},
"source_url": "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
"source_title": "Micro E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Dollar tick value not printed in retrieved HTML.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD251",
"slot_id": "S13/S31",
"key": "cme.ES.point_value",
"value": 50,
"unit": "USD per index point",
"value_type": "number",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "ES"
},
"source_url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"source_title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "Official FAQ: \"$50 x the S&P 500 Index\". Contract-spec page itself did not render; value comes from the CME overview page.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD252",
"slot_id": "S13/S31",
"key": "cme.ES.tick_size",
"unit": "index points",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "ES"
},
"source_url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"source_title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML. Do not fill from memory.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD253",
"slot_id": "S13/S31",
"key": "cme.ES.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "ES"
},
"source_url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"source_title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML. Do not fill from memory.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD254",
"slot_id": "S13/S31",
"key": "cme.MES.point_value",
"value": 5,
"unit": "USD per index point",
"value_type": "number",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MES"
},
"source_url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"source_title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "Official FAQ: Micro E-mini S&P 500 \"$5 x the S&P 500 Index\".",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD255",
"slot_id": "S13/S31",
"key": "cme.MES.tick_size",
"unit": "index points",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MES"
},
"source_url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"source_title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD256",
"slot_id": "S13/S31",
"key": "cme.MES.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MES"
},
"source_url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"source_title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD257",
"slot_id": "S13/S31",
"key": "cme.YM.point_value",
"unit": "USD per index point",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "YM"
},
"source_url": "https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html",
"source_title": "YM Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD258",
"slot_id": "S13/S31",
"key": "cme.YM.tick_size",
"unit": "index points",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "YM"
},
"source_url": "https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html",
"source_title": "YM Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD259",
"slot_id": "S13/S31",
"key": "cme.YM.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "YM"
},
"source_url": "https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html",
"source_title": "YM Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD260",
"slot_id": "S13/S31",
"key": "cme.MYM.point_value",
"unit": "USD per index point",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MYM"
},
"source_url": "https://www.cmegroup.com/markets/equities/dow-jones/micro-e-mini-dow.contractSpecs.html",
"source_title": "MYM Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD261",
"slot_id": "S13/S31",
"key": "cme.MYM.tick_size",
"unit": "index points",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MYM"
},
"source_url": "https://www.cmegroup.com/markets/equities/dow-jones/micro-e-mini-dow.contractSpecs.html",
"source_title": "MYM Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD262",
"slot_id": "S13/S31",
"key": "cme.MYM.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "MYM"
},
"source_url": "https://www.cmegroup.com/markets/equities/dow-jones/micro-e-mini-dow.contractSpecs.html",
"source_title": "MYM Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD263",
"slot_id": "S13/S31",
"key": "cme.RTY.point_value",
"unit": "USD per index point",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "RTY"
},
"source_url": "https://www.cmegroup.com/markets/equities/russell/e-mini-russell-2000.contractSpecs.html",
"source_title": "RTY Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD264",
"slot_id": "S13/S31",
"key": "cme.RTY.tick_size",
"unit": "index points",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "RTY"
},
"source_url": "https://www.cmegroup.com/markets/equities/russell/e-mini-russell-2000.contractSpecs.html",
"source_title": "RTY Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD265",
"slot_id": "S13/S31",
"key": "cme.RTY.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "RTY"
},
"source_url": "https://www.cmegroup.com/markets/equities/russell/e-mini-russell-2000.contractSpecs.html",
"source_title": "RTY Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD266",
"slot_id": "S13/S31",
"key": "cme.M2K.point_value",
"unit": "USD per index point",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "M2K"
},
"source_url": "https://www.cmegroup.com/markets/equities/russell/micro-e-mini-russell-2000.contractSpecs.html",
"source_title": "M2K Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD267",
"slot_id": "S13/S31",
"key": "cme.M2K.tick_size",
"unit": "index points",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "M2K"
},
"source_url": "https://www.cmegroup.com/markets/equities/russell/micro-e-mini-russell-2000.contractSpecs.html",
"source_title": "M2K Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD268",
"slot_id": "S13/S31",
"key": "cme.M2K.tick_value",
"unit": "USD",
"value_type": "null",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a",
"instrument": "M2K"
},
"source_url": "https://www.cmegroup.com/markets/equities/russell/micro-e-mini-russell-2000.contractSpecs.html",
"source_title": "M2K Contract Specs (CME Group)",
"checked_at": "2026-11-21",
"status": "NOT_FOUND",
"note": "Not in retrieved HTML; symbol excluded from Tools 2/4/5.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD269",
"slot_id": "S16",
"key": "dd.market_fill_caveat",
"value": "Liquidation happens at market price, so the final filled balance may be slightly above or below the threshold; the threshold was still breached and the evaluation is failed.",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Fill wording is on the Intraday Evaluations article. The EOD Evaluations article says open positions are automatically liquidated if the EOD Threshold is touched, without the fill sentence. Do not print the Intraday sentence as an EOD quote.",
"quote": [
"Because liquidation occurs at market price, the final filled balance may be slightly above or below the Trailing Threshold depending on market conditions at the time of execution.",
"This does not change the fact that the threshold was breached and the account is considered failed."
],
"also_source": [
"https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD270",
"slot_id": "S17",
"key": "payout.evaluations_not_eligible",
"unit": "text",
"value_type": "null",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "NOT_FOUND",
"note": "No official sentence stating that Evaluations are not eligible for payouts was found in the snapshots (EOD/Intraday Evaluations pages carry no payout section). Do not assert it as an Apex statement. See payout.pa_only_applicability for what Apex does say.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD271",
"slot_id": "S63",
"key": "payout.pa_only_applicability",
"value": "Apex payout requirements are written for Performance Accounts: \"To request a payout, your EOD Performance Account must meet all of the following requirements.\"",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "EOD",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "To request a payout, your EOD Performance Account must meet all of the following requirements.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD272",
"slot_id": "S63",
"key": "payout.pa_only_applicability",
"value": "Apex payout requirements are written for Performance Accounts: \"To request a payout, your Intraday Performance Account must meet all of the following requirements.\"",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "Intraday",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"source_title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"quote": "To request a payout, your Intraday Performance Account must meet all of the following requirements.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD273",
"slot_id": "S66",
"key": "eval.pass_conditions",
"value": [
"Reach the profit target",
"Not reach EOD Drawdown level at any point",
"No minimum number of trading days"
],
"unit": "list",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Time limit: 30 calendar days from purchase (see eval.access_period_days).",
"quote": [
"To pass an evaluation, you must:",
"Reach the profit target",
"Not reach EOD Drawdown level at any point",
"There is no minimum number of trading days required. You may pass as soon as the profit target is reached, provided all rules are respected."
],
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD274",
"slot_id": "S66",
"key": "eval.pass_conditions",
"value": [
"Reach the profit target",
"Not breach the Intraday Trailing Drawdown at any point",
"No minimum number of trading days"
],
"unit": "list",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"source_title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Touching or falling below the trailing threshold at any time fails the evaluation immediately.",
"quote": [
"To pass an evaluation, you must:",
"Reach the profit target",
"Not breach the Intraday Trailing Drawdown at any point",
"There is no minimum number of trading days required. You may pass as soon as the profit target is reached, provided all rules are respected.",
"the evaluation fails immediately"
],
"also_source": [
"https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD275",
"slot_id": "S56",
"key": "eval.pass_review_timing",
"value": "Account is reviewed at market close (4:59:59 PM ET); if approved it is marked Passed after 6 PM ET; the 7-day PA activation window starts then, not when the target is hit intraday. If the target is met before market close on the expiration date, the evaluation is marked Passed after end-of-day reports are processed (before midnight on the expiration date).",
"unit": "text",
"value_type": "text",
"applies_to": {
"account_type": "both",
"stage": "Eval",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/",
"source_title": "Evaluation Plan Fees and Access Explained",
"source_modified": "2026-06-25T15:48:03",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "No dollar fee in this record.",
"quote": [
"your account is reviewed at market close (4:59:59 PM ET). If approved, the Evaluation is marked as Passed after 6 PM ET.",
"The 7-day activation period begins when your Evaluation is officially marked as Passed after market close (after 6 PM ET), not when you hit the profit target during the day.",
"before midnight on your access expiration date"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD276",
"slot_id": "S62",
"key": "pa.inactivity.new_notices",
"value": {
"courtesy_notice_days": [
15,
20
],
"dormant_from_day": 15,
"permanent_closure_day": 30
},
"unit": "days of inactivity",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/billing/inactivity-policy-on-performance-accounts-pa/",
"source_title": "Inactivity Policy on Performance Accounts (PA)",
"source_modified": "2026-10-08T07:39:26",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Closure day 30 is in pa.inactivity.new (rolling 30-day rule). Courtesy notices are reminders, not a rule change.",
"quote": [
"Courtesy notifications will be sent out on days 15 and 20 of inactivity",
"At this point the account moves into the dormant phase"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD277",
"slot_id": "S62",
"key": "pa.inactivity.legacy_warnings",
"value": {
"warning_1_yellow_day": 15,
"warning_2_orange_day": 20,
"termination_red_day": 30,
"termination_wording": "may be terminated"
},
"unit": "days of inactivity",
"value_type": "object",
"applies_to": {
"account_type": "Legacy",
"stage": "PA",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/performance-accounts-pa/legacy-pa-inactivity-policy/",
"source_title": "Legacy PA Inactivity Policy",
"source_modified": "2026-09-16T11:43:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Legacy PAs bought before 1 March 2026 only. Keep \"may be terminated\" wording.",
"quote": [
"Yellow Highlight – Warning 1: At 15 days without qualifying activity",
"Orange Highlight – Warning 2: At 20 days without qualifying activity",
"the account reaches the inactivity threshold and may be terminated"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD278",
"slot_id": "S48",
"key": "worked_example.eod_walkthrough",
"value": {
"account": "50K EOD",
"starting_balance": 50000,
"max_drawdown": 2000,
"steps": [
{
"step": "Start",
"closing_balance": 50000,
"threshold": 48000
},
{
"step": "Day 1 profitable",
"closing_balance": 50800,
"threshold": 48800
},
{
"step": "Day 2 profitable",
"closing_balance": 51600,
"threshold": 49600
},
{
"step": "Day 3 losing",
"closing_balance": 50900,
"threshold": 49600,
"note": "below highest EOD balance $51,600; threshold unchanged"
},
{
"step": "Day 4 new high at close",
"closing_balance": 52000,
"threshold": 50000
}
]
},
"unit": "USD",
"value_type": "object",
"applies_to": {
"account_type": "EOD",
"stage": "both",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "OFFICIAL worked example (all numbers printed by Apex).",
"quote": [
"Initial EOD Threshold:$50,000 − $2,000 = $48,000",
"Day 1 Closing Balance: $50,800",
"New EOD Threshold:$51,600 − $2,000 = $49,600",
"Day 3 Closing Balance: $50,900",
"EOD Threshold stays at $49,600",
"Day 4 Closing Balance: $52,000",
"New EOD Threshold:$52,000 − $2,000 = $50,000"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD279",
"slot_id": "S48",
"key": "worked_example.intraday_realtime",
"value": {
"account": "50K Intraday",
"starting_balance": 50000,
"max_drawdown": 2000,
"steps": [
{
"step": "Start",
"balance": 50000,
"threshold": 48000
},
{
"step": "Unrealized peak",
"balance": 50900,
"threshold": 48900
},
{
"step": "Balance declines",
"balance": 50200,
"threshold": 48900
},
{
"step": "Trade closes",
"balance": 50300,
"threshold": 48900,
"note": "peak stays $50,900"
}
]
},
"unit": "USD",
"value_type": "object",
"applies_to": {
"account_type": "Intraday",
"stage": "both",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"source_title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "OFFICIAL worked example.",
"quote": [
"$50,900 − $2,000 = $48,900",
"The threshold adjusts immediately. No closing trade is required.",
"If the balance later declines to $50,200, the threshold remains $48,900.",
"If the trade closes at $50,300, the Peak Balance remains $50,900 and the threshold remains $48,900."
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD280",
"slot_id": "S48",
"key": "worked_example.same_trade",
"value": {
"label": "DERIVED illustration, not an Apex example",
"account": "50K, starting balance $50,000, max drawdown $2,000",
"trade": "Unrealized profit reaches $50,900 during the session, price falls back, trade closes at $50,300; that close is the first end-of-day balance.",
"intraday_threshold_during_session": 48900,
"eod_threshold_during_session": 48000,
"intraday_threshold_after_close": 48900,
"eod_threshold_after_close": 48300
},
"unit": "USD",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "50K"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Apex publishes no side-by-side example. Label as illustrative arithmetic on Apex formulas.",
"quote": [
"It always trails the highest achieved EOD balance and never moves downward."
],
"derived_from": "Combines the official Intraday example ($50,900 peak -> $48,900; close $50,300 -> $48,900) with the official EOD rule (threshold recalculated at 4:59:59 PM ET from the closing balance: closing balance - $2,000, never moves down; open profit does not move it mid-session). EOD after close: $50,300 - $2,000 = $48,300 (assumes $50,300 is the highest EOD balance so far).",
"also_source": [
"https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/"
],
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD281",
"slot_id": "S37/S71",
"key": "meta.audit_date",
"value": "2026-11-21",
"unit": "ISO date",
"value_type": "text",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a"
},
"source_url": "https://apextraderfunding.com/wp-json/wp/v2/help-center",
"source_title": "Apex Help Center REST listing (WordPress modified dates)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "Latest RI check actually on record: 2026-11-21 08:58-09:00 IST re-check of all 127 Help Center modified dates (unchanged vs 2026-11-19 snapshot). It checked modified dates, not a full body re-read. No raw file saved. Live fetch was blocked on 2026-11-21 in this container, so do not display a later date. CF requires the stamp date to come from a recorded RI/CF check file.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD282",
"slot_id": "S37/S71",
"key": "meta.snapshot_body_date",
"value": "2026-11-19",
"unit": "ISO date",
"value_type": "text",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a"
},
"source_url": "https://apextraderfunding.com/help-center/",
"source_title": "Apex Help Center snapshot set (127 articles)",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Date the rule BODIES in this file were captured (18:14 IST). Use if the site wants the stricter date.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD283",
"slot_id": "S09",
"key": "sources.tool_list.S09",
"value": [
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/50-consistency-requirement.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-payouts.md",
"evidence_kind": "help_center_snapshot"
}
],
"unit": "list of sources",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all",
"tool": "Tool 1 Consistency"
},
"source_url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"source_title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "Composed by RI from the source_url of every record the tool consumes (rule-dependency lists in research/en_rule_slots_2026-11.md S09/S13/S23/S31/S35). Confirm against the final tool spec.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD284",
"slot_id": "S13",
"key": "sources.tool_list.S13",
"value": [
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-drawdown-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/daily-loss-limit-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-evaluations.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-evaluations.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
"title": "E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"url": "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
"title": "Micro E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file"
}
],
"unit": "list of sources",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all",
"tool": "Tool 2 Drawdown Distance"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "Composed by RI from the source_url of every record the tool consumes (rule-dependency lists in research/en_rule_slots_2026-11.md S09/S13/S23/S31/S35). Confirm against the final tool spec.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD285",
"slot_id": "S23",
"key": "sources.tool_list.S23",
"value": [
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/50-consistency-requirement.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot"
}
],
"unit": "list of sources",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all",
"tool": "Tool 3 Payout Eligibility"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"source_title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "Composed by RI from the source_url of every record the tool consumes (rule-dependency lists in research/en_rule_slots_2026-11.md S09/S13/S23/S31/S35). Confirm against the final tool spec.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD286",
"slot_id": "S31",
"key": "sources.tool_list.S31",
"value": [
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-evaluations.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-evaluations.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/position-sizing-evaluation.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/scaling-levels-pa-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/daily-loss-limit-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
"title": "E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"url": "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
"title": "Micro E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file"
}
],
"unit": "list of sources",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all",
"tool": "Tool 5 Account Comparison"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"source_title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "Composed by RI from the source_url of every record the tool consumes (rule-dependency lists in research/en_rule_slots_2026-11.md S09/S13/S23/S31/S35). Confirm against the final tool spec.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD287",
"slot_id": "S35",
"key": "sources.tool_list.S35",
"value": [
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-drawdown-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/daily-loss-limit-explained.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-evaluations.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-evaluations.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-payouts.md",
"evidence_kind": "help_center_snapshot"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/50-consistency-requirement.md",
"evidence_kind": "help_center_snapshot"
}
],
"unit": "list of sources",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all",
"tool": "Tool 6 Path Picker"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"derived_from": "Composed by RI from the source_url of every record the tool consumes (rule-dependency lists in research/en_rule_slots_2026-11.md S09/S13/S23/S31/S35). Confirm against the final tool spec.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD288",
"slot_id": "S34",
"key": "path_picker.reasoning_facts",
"value": {
"eod_vs_intraday_clock": {
"key": "dd.mechanics",
"summary": "EOD: threshold recalculated once per day at 4:59:59 PM ET from the closing balance. Intraday: threshold follows the peak balance including unrealized PnL in real time."
},
"eval_dll": {
"key": "eval.daily_loss_limit",
"summary": "EOD Eval has a fixed DLL ($500/$1,000/$1,500/$2,000); Intraday Eval has none."
},
"eval_lock": {
"key": "eval.lock_level.rithmic_wealthcharts",
"summary": "Platform-dependent; Tradovate trails indefinitely (Intraday Eval lock is CONFLICT C4)."
},
"pa_payout_min_daily_profit": {
"key": "pa.payout.min_daily_profit",
"summary": "Min daily profit differs: EOD 100/250/300/350, Intraday 100/200/250/300."
},
"pa_caps": {
"key": "pa.payout.sequential_caps",
"summary": "Sequential payout caps differ between EOD and Intraday for 50K, 100K and 150K."
},
"consistency": {
"key": "pa.consistency.rule",
"summary": "50% consistency applies to both PA types; exact-50% case is CONFLICT C2."
}
},
"unit": "keys",
"value_type": "object",
"applies_to": {
"account_type": "both",
"stage": "both",
"size": "all"
},
"source_url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"source_title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Use only these keys for rule-based reasoning; EOD vs Intraday payout figures come from the two payout pages.",
"derived_from": "Index only: each entry points to an existing record carrying its own source and quote. No recommendation, no \"best account\" claim, no new facts.",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD289",
"slot_id": "S72/G14",
"key": "sources.status_updates",
"value": "https://apextraderfunding.com/help-center/helpful-items/status-updates/",
"unit": "url",
"value_type": "text",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a"
},
"source_url": "https://apextraderfunding.com/help-center/helpful-items/status-updates/",
"source_title": "Status Updates",
"source_modified": "2026-09-23T11:05:28",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "Official Apex Help Center Status Updates page. Page modified (ET) is in source_modified. Body text in the snapshot is a generic \"All systems are operating as expected\" line; no Thanksgiving or holiday notice was read from it by RI (see hours.thanksgiving_2026_flatten_time NOT_FOUND).",
"evidence_kind": "help_center_snapshot"
},
{
"id": "SD290",
"slot_id": "S72/G14",
"key": "sources.pricing_page",
"value": "https://apextraderfunding.com/",
"unit": "url",
"value_type": "text",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a"
},
"source_url": "https://apextraderfunding.com/",
"source_title": "Apex Trader Funding homepage (account picker pricing view)",
"checked_at": "2026-11-21",
"status": "VERIFIED_SNAPSHOT",
"note": "URL/title/date record only. NO prices or amounts here. Title is RI label (page <title> not recorded). Evidence is a browser read at 2026-11-21 08:56 IST plus one screenshot; no raw HTML. Price rows still hidden by validate_prices.py --gate (0/126). Legacy prices live on /legacy-products/ and are never shown.",
"evidence_kind": "ri_fetch_record_no_raw_file"
},
{
"id": "SD291",
"slot_id": "S72",
"key": "sources.registry",
"value": [
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-evaluations/",
"title": "EOD Evaluations",
"source_modified": "2026-10-26T07:16:14",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-evaluations.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/position-sizing-evaluation/",
"title": "Position Sizing – Evaluation",
"source_modified": "2026-04-15T08:58:02",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/position-sizing-evaluation.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/billing/evaluation-plan-fees-and-access-explained/",
"title": "Evaluation Plan Fees and Access Explained",
"source_modified": "2026-06-25T15:48:03",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/evaluation-plan-fees-and-access-explained.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-drawdown-explained/",
"title": "EOD Drawdown Explained",
"source_modified": "2026-04-28T16:28:51",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-drawdown-explained.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/evaluation-accounts-ea/intraday-trailing-drawdown-evaluations/",
"title": "Intraday Trailing Drawdown Evaluations",
"source_modified": "2026-10-26T07:17:22",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-evaluations.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/daily-loss-limit-explained/",
"title": "Daily Loss Limit Explained",
"source_modified": "2026-04-15T08:45:05",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/daily-loss-limit-explained.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-explained/",
"title": "Intraday Trailing Drawdown Explained",
"source_modified": "2026-10-12T11:03:59",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-explained.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-performance-accounts-pa/",
"title": "EOD Performance Accounts (PA)",
"source_modified": "2026-04-28T16:29:04",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/scaling-levels-pa-explained/",
"title": "Scaling Levels (PA) Explained",
"source_modified": "2026-11-16T09:26:03",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/scaling-levels-pa-explained.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/eod-trailing-drawdown-accounts/eod-payouts/",
"title": "EOD Payouts",
"source_modified": "2026-04-28T16:29:16",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/eod-payouts.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-performance-accounts-pa/",
"title": "Intraday Trailing Drawdown Performance Accounts (PA)",
"source_modified": "2026-05-21T08:52:17",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/intraday-trailing-drawdown-accounts/intraday-trailing-drawdown-payouts/",
"title": "Intraday Trailing Drawdown Payouts",
"source_modified": "2026-04-28T16:27:37",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/intraday-trailing-drawdown-payouts.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/",
"title": "50% Consistency Requirement",
"source_modified": "2026-04-24T14:36:44",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/50-consistency-requirement.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/performance-accounts-pa/how-many-paid-funded-accounts-am-i-allowed-to-have/",
"title": "How Many Paid/Funded Accounts Am I Allowed to Have?",
"source_modified": "2026-04-15T05:46:38",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/how-many-paid-funded-accounts-am-i-allowed-to-have.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/billing/pa-activation-process-deadline-explained/",
"title": "PA Activation Process & Deadline Explained",
"source_modified": "2026-10-26T07:14:54",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/pa-activation-process-deadline-explained.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/billing/inactivity-policy-on-performance-accounts-pa/",
"title": "Inactivity Policy on Performance Accounts (PA)",
"source_modified": "2026-10-08T07:39:26",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/inactivity-policy-on-performance-accounts-pa.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/performance-accounts-pa/legacy-pa-inactivity-policy/",
"title": "Legacy PA Inactivity Policy",
"source_modified": "2026-09-16T11:43:59",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/legacy-pa-inactivity-policy.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/getting-started/futures-trading-times/",
"title": "Futures Trading Times",
"source_modified": "2026-04-20T14:05:07",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/futures-trading-times.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/helpful-items/holiday-trading/",
"title": "Holiday Trading",
"source_modified": "2026-04-15T09:04:52",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/holiday-trading.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/getting-started/prohibited-activities/",
"title": "Prohibited Activities",
"source_modified": "2026-07-31T16:12:48",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/prohibited-activities.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
"title": "E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://www.cmegroup.com/markets/equities/nasdaq/micro-e-mini-nasdaq-100.contractSpecs.html",
"title": "Micro E-mini Nasdaq-100 Futures - Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://www.cmegroup.com/markets/equities/sp-500-and-nasdaq-100-futures.html",
"title": "S&P 500 and Nasdaq-100 Futures (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html",
"title": "YM Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://www.cmegroup.com/markets/equities/dow-jones/micro-e-mini-dow.contractSpecs.html",
"title": "MYM Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://www.cmegroup.com/markets/equities/russell/e-mini-russell-2000.contractSpecs.html",
"title": "RTY Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://www.cmegroup.com/markets/equities/russell/micro-e-mini-russell-2000.contractSpecs.html",
"title": "M2K Contract Specs (CME Group)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#4-cme-point--tick-values",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "CME Group"
},
{
"url": "https://apextraderfunding.com/wp-json/wp/v2/help-center",
"title": "Apex Help Center REST listing (WordPress modified dates)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/en_rule_slots_2026-11.md#0-method",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/",
"title": "Apex Help Center snapshot set (127 articles)",
"source_modified": null,
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/_index.json",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/help-center/helpful-items/status-updates/",
"title": "Status Updates",
"source_modified": "2026-09-23T11:05:28",
"checked_at": "2026-11-19",
"evidence_path": "research/helpcenter/snapshots/2026-11-19/status-updates.md",
"evidence_kind": "help_center_snapshot",
"publisher": "Apex Trader Funding"
},
{
"url": "https://apextraderfunding.com/",
"title": "Apex Trader Funding homepage (account picker pricing view)",
"source_modified": null,
"checked_at": "2026-11-21",
"evidence_path": "research/apex_prices_current.json (source_url, verified_at 2026-11-21T08:56+02:00); screenshot research/apex_prices_history/screens/2026-11-21T0856_tradovate_25k_intraday_standard.png; research/PRICES_STATUS_2026-11-21.md",
"evidence_kind": "ri_fetch_record_no_raw_file",
"publisher": "Apex Trader Funding"
}
],
"unit": "list of sources",
"value_type": "object",
"applies_to": {
"account_type": "n/a",
"stage": "n/a",
"size": "n/a"
},
"source_url": "https://apextraderfunding.com/help-center/",
"source_title": "Apex Help Center snapshot set (127 articles)",
"checked_at": "2026-11-19",
"status": "VERIFIED_SNAPSHOT",
"note": "31 entries. Legacy and unrelated pages are included only if a record cites them.",
"derived_from": "Every distinct source_url / also_source URL in this file, plus the CME URLs recorded in en_rule_slots section 4. CME entries have no raw file.",
"evidence_kind": "help_center_snapshot"
}
];
