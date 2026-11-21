import json
d=json.load(open('../APEX-Affiliate-OS/research/site_data/apex_site_data_2026-11-21.json'))
keep=['id','slot_id','key','value','unit','value_type','applies_to','source_url','source_title','source_modified','checked_at','status','note','quote','derived_from','conflict_id','also_source','evidence_kind']
recs=[{k:r[k] for k in keep if k in r and r[k] is not None} for r in d['records']]
for r in recs:
    r['applies_to']={k:v for k,v in r['applies_to'].items()}
head=f'''/**
 * GENERATED from research/site_data/apex_site_data_2026-11-21.json (RI, schema {d.get('schema_version')}, {d['total']} records).
 * Do not edit by hand. Prices are deliberately absent (they render only from src/data/prices.gated.json).
 */
export interface SiteRecord {{
  id: string;
  slot_id?: string;
  key: string;
  value?: unknown;
  unit?: string;
  value_type: string;
  applies_to: {{ account_type: string; stage: string; size: string; instrument?: string; tool?: string }};
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
}}

export const SITE_DATA_GENERATED_FOR = {json.dumps(d.get('generated_for'))};
export const SITE_DATA_RECORDS: SiteRecord[] = {json.dumps(recs,ensure_ascii=False,indent=0)};
'''
open('src/data/apexRecords.ts','w').write(head)
print(len(head))
