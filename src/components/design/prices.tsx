"use client";

const PLANS = [
  { name: "50K", path: "EOD evaluation", hidden: false },
  { name: "50K", path: "Intraday evaluation", hidden: false },
  { name: "100K", path: "EOD evaluation", hidden: true },
] as const;

const FIELDS = ["Regular price", "Sale price", "Activation fee"] as const;

function SourceLine({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[13px] leading-snug ${className}`} style={{ color: "var(--text-secondary)" }}>
      Last updated Sample
      {" · "}
      <a
        href="#"
        className="underline underline-offset-2"
        style={{ color: "var(--text-primary)" }}
        onClick={(event) => event.preventDefault()}
      >
        Apex pricing source (sample)
      </a>
    </p>
  );
}

function Intro({ id, headingClass }: { id: string; headingClass: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[15px] font-semibold leading-snug" style={{ color: "var(--gold-400)" }}>
        Sample pricing, verified figures pending
      </p>
      <h2 id={id} className={`mt-3 ${headingClass}`} style={{ color: "var(--text-primary)" }}>
        Prices, by plan and path
      </h2>
      <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        Each plan shows a regular price, a sale price, and an activation fee. A figure that is unverified or expired is
        hidden. Referral code NOAM is not part of these amounts.
      </p>
    </div>
  );
}

export function PriceSection({ variant }: { variant: "briefing" | "desk" | "house" }) {
  if (variant === "desk") return <DeskPrices />;
  if (variant === "house") return <HousePrices />;
  return <BriefingPrices />;
}

function BriefingPrices() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-20 md:px-8" aria-labelledby="prices-a">
      <Intro id="prices-a" headingClass="text-4xl font-medium tracking-[-0.02em]" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={`${plan.name}-${plan.path}`}
            data-price-state={plan.hidden ? "hidden" : "sample"}
            className="flex flex-col p-6"
            style={{
              backgroundColor: "var(--surface-raised)",
              borderTop: plan.hidden ? "2px dashed var(--surface-border-strong)" : "2px solid var(--gold-500)",
              boxShadow: plan.hidden ? "none" : "0 16px 40px rgba(0,0,0,0.18)",
            }}
          >
            <p className="serif text-3xl" style={{ color: "var(--text-primary)" }}>
              {plan.name}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--gold-400)" }}>
              {plan.path}
            </p>
            <dl className="mt-6 space-y-4">
              {FIELDS.map((field) => (
                <div key={field}>
                  <dt className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    {field}
                  </dt>
                  <dd className="serif mt-1 text-3xl" style={{ color: "var(--text-primary)" }}>
                    {plan.hidden ? "Hidden" : "$XXX"}
                  </dd>
                </div>
              ))}
            </dl>
            {plan.hidden ? (
              <p className="mt-5 text-[15px] leading-snug" style={{ color: "var(--text-primary)" }}>
                Hidden while unverified or expired.
              </p>
            ) : null}
            <SourceLine className="mt-auto pt-6" />
          </article>
        ))}
      </div>
    </section>
  );
}

function DeskPrices() {
  return (
    <section className="border-t px-4 py-16 md:px-8" style={{ borderColor: "var(--surface-border)" }} aria-labelledby="prices-b">
      <Intro id="prices-b" headingClass="text-3xl font-medium tracking-[-0.03em]" />
      <div className="mt-8 grid gap-3 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={`${plan.name}-${plan.path}`}
            data-price-state={plan.hidden ? "hidden" : "sample"}
            className="border"
            style={{
              backgroundColor: plan.hidden ? "var(--surface-base)" : "var(--surface-raised)",
              borderColor: plan.hidden ? "var(--surface-border)" : "var(--gold-edge)",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-4 py-2"
              style={{ borderColor: "var(--surface-border)" }}
            >
              <span className="mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--gold-400)" }}>
                {plan.hidden ? "Hidden" : "Sample"}
              </span>
              <span className="mono text-[11px]" style={{ color: "var(--text-secondary)" }}>
                {plan.path}
              </span>
            </div>
            <div className="px-4 py-5">
              <h3 className="text-4xl font-medium tracking-[-0.04em]" style={{ color: "var(--text-primary)" }}>
                {plan.name}
              </h3>
              <dl className="mt-5">
                {FIELDS.map((field) => (
                  <div
                    key={field}
                    className="flex items-baseline justify-between gap-3 border-t py-3"
                    style={{ borderColor: "var(--surface-border)" }}
                  >
                    <dt className="mono text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      {field}
                    </dt>
                    <dd className="text-lg" style={{ color: "var(--text-primary)" }}>
                      {plan.hidden ? "—" : "$XXX"}
                    </dd>
                  </div>
                ))}
              </dl>
              {plan.hidden ? (
                <p className="text-[15px] leading-snug" style={{ color: "var(--text-primary)" }}>
                  Hidden while unverified or expired.
                </p>
              ) : null}
              <SourceLine className="mt-4" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HousePrices() {
  return (
    <section className="px-5 py-16 md:px-10 md:py-24" aria-labelledby="prices-c">
      <div className="mx-auto max-w-[1240px]">
        <Intro id="prices-c" headingClass="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-6xl" />
        <div className="mt-12 grid gap-px md:grid-cols-3" style={{ backgroundColor: "var(--surface-border)" }}>
          {PLANS.map((plan) => (
            <article
              key={`${plan.name}-${plan.path}`}
              data-price-state={plan.hidden ? "hidden" : "sample"}
              className="flex min-h-[420px] flex-col px-6 py-8"
              style={{ backgroundColor: plan.hidden ? "var(--surface-subtle)" : "var(--surface-base)" }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold-400)" }}>
                {plan.path}
              </p>
              <h3 className="mt-4 text-6xl font-semibold tracking-[-0.05em]" style={{ color: "var(--text-primary)" }}>
                {plan.name}
              </h3>
              <div className="mt-8 space-y-5">
                {FIELDS.map((field) => (
                  <div key={field}>
                    <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
                      {field}
                    </p>
                    <p className="mt-1 text-4xl font-semibold tracking-[-0.04em]" style={{ color: plan.hidden ? "var(--text-secondary)" : "var(--text-primary)" }}>
                      {plan.hidden ? "Hidden" : "$XXX"}
                    </p>
                  </div>
                ))}
              </div>
              {plan.hidden ? (
                <p className="mt-6 text-[15px] leading-snug" style={{ color: "var(--text-primary)" }}>
                  Hidden while unverified or expired.
                </p>
              ) : null}
              <SourceLine className="mt-auto pt-8" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
