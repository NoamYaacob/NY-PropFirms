import { SOURCE_REGISTRY, labelDate } from "@/data/apex";

export type SourceGroup = "evaluations" | "drawdown" | "performance-accounts" | "payouts-consistency" | "hours-holidays-prohibited" | "pricing-source" | "cme";

const EXCLUDE = /(dow|russell|wp-json)|\/help-center\/$/;

function groupOf(url: string): SourceGroup | null {
  if (EXCLUDE.test(url)) return null;
  if (url.includes("cmegroup.com")) return "cme";
  if (/eod-evaluations|intraday-trailing-drawdown-evaluations|position-sizing-evaluation|evaluation-plan-fees/.test(url)) return "evaluations";
  if (/drawdown-explained/.test(url)) return "drawdown";
  if (/payouts|50-consistency/.test(url)) return "payouts-consistency";
  if (/futures-trading-times|holiday-trading|prohibited-activities|status-updates/.test(url)) return "hours-holidays-prohibited";
  if (url === "https://apextraderfunding.com/") return "pricing-source";
  if (/performance-accounts|scaling-levels|daily-loss-limit|inactivity|activation|how-many-paid/.test(url)) return "performance-accounts";
  return null;
}

const modified = (iso: string) => (iso ? labelDate(iso.slice(0, 10)) : "n/a");

/** Official links only: title, direct link, Apex last-modified date, date this site checked it. No evidence paths. */
export function SourcesGroup({ group }: { group: SourceGroup }) {
  const rows = SOURCE_REGISTRY.filter((s, i, a) => groupOf(s.url) === group && a.findIndex((x) => x.url === s.url) === i);
  if (!rows.length) return null;
  return (
    <div className="ds-tablewrap">
      <table className="ds-table">
        <thead>
          <tr>
            <th scope="col">Page</th>
            <th scope="col">{group === "cme" ? "Publisher" : "Apex last modified (ET)"}</th>
            <th scope="col">Checked</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s) => (
            <tr key={s.url}>
              <th scope="row">
                <a className="ds-link" href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.title}
                </a>
              </th>
              <td>{group === "cme" ? "CME Group" : modified(s.modified)}</td>
              <td>{labelDate(s.checkedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
