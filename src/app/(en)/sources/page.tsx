import { pageMeta } from "@/lib/siteMeta";
import { CME, CME_CHECKED_LABEL, CME_SYMBOLS, SOURCE_REGISTRY, labelDate } from "@/data/apex";
import { DisclosurePair, PageHeader, Section, TodoCS } from "@/design-system/Blocks";

export const metadata = pageMeta("/sources", "Official Apex & CME Sources | NY Prop Firms", "Master registry of official Apex Trader Funding Help Center, Status Updates, and CME Group contract source links used across NY Prop Firms.");

const modified = (iso: string) => (iso ? labelDate(iso.slice(0, 10)) : "n/a");

export default function SourcesPage() {
  const apex = SOURCE_REGISTRY.filter((s) => s.publisher === "Apex");
  const cme = SOURCE_REGISTRY.filter((s) => s.publisher === "CME Group");
  return (
    <>
      <PageHeader eyebrow="Citations" title="Official sources">
        <DisclosurePair className="mt-3" />
        <TodoCS file="pages/sources.md" note="Intro and source-error reporting note" />
      </PageHeader>
      <Section id="apex" title="Apex Help Center pages">
        <div className="ds-tablewrap">
          <table className="ds-table">
            <caption>Apex pages used across the site</caption>
            <thead>
              <tr>
                <th scope="col">Page</th>
                <th scope="col">Apex last modified</th>
                <th scope="col">Checked</th>
              </tr>
            </thead>
            <tbody>
              {apex.map((s) => (
                <tr key={s.url}>
                  <th scope="row">
                    <a className="ds-link" href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                  </th>
                  <td>{modified(s.modified)}</td>
                  <td>{labelDate(s.checkedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section id="cme" title="CME Group contract pages">
        <div className="ds-tablewrap">
          <table className="ds-table">
            <caption>Point values: NQ, MNQ, ES, MES</caption>
            <thead>
              <tr>
                <th scope="col">Contract</th>
                <th scope="col">Point value</th>
                <th scope="col">Page</th>
                <th scope="col">Checked</th>
              </tr>
            </thead>
            <tbody>
              {CME_SYMBOLS.map((s) => (
                <tr key={s}>
                  <th scope="row">{s}</th>
                  <td>${CME[s].pointValue.value} per point</td>
                  <td><a className="ds-link" href={CME[s].url} target="_blank" rel="noopener noreferrer">{CME[s].label}</a></td>
                  <td>{CME_CHECKED_LABEL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ds-hint">{cme.length} CME records in the registry.</p>
      </Section>
    </>
  );
}
