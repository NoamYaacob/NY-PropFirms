import { GATED_PRICE_ROWS } from "@/data/prices";
import { GoLink } from "@/components/analytics/GoLink";
import { AD_LINE, DISC_LINE, LINK_LABEL, PRICE_NOTICE, PRICING_FALLBACK, RISK_COMPACT } from "@/design-system/strings";
import { Section } from "@/design-system/Blocks";

/**
 * /account-comparison#pricing. Renders only rows present in src/data/prices.gated.json (validator output).
 * With zero gated rows (today) it renders only the fallback: AD_LINE + DISC_LINE + RISK_COMPACT directly before the
 * labelled affiliate link. No NOAM mention here. The CTA id is en_pricing_link (CS map, pending AF confirmation).
 */
export function PricingSection() {
  const rows = GATED_PRICE_ROWS;
  return (
    <Section id="pricing" title="Current Apex pricing">
      <div className="ds-pair">
        <p className="ds-legal ds-legal-strong">{DISC_LINE}</p>
        <p className="ds-risk">{RISK_COMPACT}</p>
      </div>
      {rows.length === 0 ? (
        <div className="ds-card ds-pricefall">
          <p className="ds-body-p" style={{ marginTop: 0 }}>Prices change often, so this site does not show a number it cannot check against Apex&apos;s own page.</p>
          <div className="ds-cta-disc" style={{ marginTop: 0 }}>
            <p className="ds-legal ds-legal-strong">{AD_LINE}</p>
            <p className="ds-legal ds-legal-strong">{DISC_LINE}</p>
            <p className="ds-risk">{RISK_COMPACT}</p>
          </div>
          <p className="ds-pricefall-t">{PRICING_FALLBACK}:</p>
          <GoLink ctaId="en_pricing_link" trackLabel={PRICING_FALLBACK} className="ds-btn">
            Go to Apex (affiliate link) →
          </GoLink>
        </div>
      ) : (
        <>
          <div className="grid gap-3 lg:grid-cols-3">
            {rows.map((r) => (
              <article key={`${r.accountType}-${r.size}-${r.stage}`} className="ds-card p-4">
                <p className="ds-mono ds-kicker">
                  {r.accountType} · {r.stage}
                </p>
                <h3 className="ds-h2">{r.size}</h3>
                <dl className="mt-3 space-y-3">
                  {r.list != null ? (
                    <div>
                      <dt className="ds-hint">Apex list price</dt>
                      <dd className="ds-mono ds-readout-val">${r.list.toLocaleString("en-US")}</dd>
                    </div>
                  ) : null}
                  {r.sale ? (
                    <div>
                      <dt className="ds-hint">Apex sale price (per Apex, as of {r.sale.asOfEt})</dt>
                      <dd className="ds-mono ds-readout-val">${r.sale.amount.toLocaleString("en-US")}</dd>
                    </div>
                  ) : null}
                  {r.activationFee != null ? (
                    <div>
                      <dt className="ds-hint">Activation fee</dt>
                      <dd className="ds-mono ds-readout-val">${r.activationFee.toLocaleString("en-US")}</dd>
                    </div>
                  ) : null}
                </dl>
                <p className="ds-hint mt-3">
                  Last updated {r.lastUpdatedEt} · Source:{" "}
                  <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="ds-link">
                    Apex pricing page
                  </a>
                </p>
              </article>
            ))}
          </div>
          <p className="ds-hint">{PRICE_NOTICE}</p>
        </>
      )}
    </Section>
  );
}
