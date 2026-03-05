import Link from "next/link";

export interface StepItem {
  number: number;
  label: string;
  href?: string;
}

interface StepFlowStripProps {
  steps: StepItem[];
}

export function StepFlowStrip({ steps }: StepFlowStripProps) {
  return (
    <div
      className="rounded-xl px-6 py-5"
      style={{
        backgroundColor: "var(--surface-subtle)",
        border: "1px solid var(--surface-border)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center gap-3">
            {/* Step card */}
            <div
              className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-colors ${
                step.href ? "cursor-pointer hover:bg-[var(--surface-overlay)]" : ""
              }`}
              style={{
                backgroundColor: "var(--surface-raised)",
                border: "1px solid var(--surface-border)",
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  backgroundColor: "var(--gold-900)",
                  color: "var(--gold-300)",
                  border: "1px solid var(--gold-edge)",
                }}
              >
                {step.number}
              </div>
              {step.href ? (
                <Link
                  href={step.href}
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.label}
                </Link>
              ) : (
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {step.label}
                </span>
              )}
            </div>

            {/* Arrow — points left in RTL (= forward) */}
            {i < steps.length - 1 && (
              <span
                className="hidden md:block text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                ←
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
