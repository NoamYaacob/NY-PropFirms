/**
 * Evaluation and PA activation prices are not shown.
 * A struck list price next to a lower "current" price implied an unverified NOAM discount.
 */
export function PricingTable() {
  return (
    <div
      className="mb-10 rounded-xl px-5 py-4 text-sm leading-relaxed"
      style={{
        border: "1px solid var(--gold-edge)",
        backgroundColor: "var(--gold-900)",
        color: "var(--text-secondary)",
      }}
    >
      <p>
        המחירים והמבצעים של Apex משתנים לעיתים קרובות, ולכן לא מוצגים כאן. בדקו את המחיר בקופה באתר Apex, והשוו את הסכום עם הקוד NOAM ובלעדיו.
      </p>
    </div>
  );
}
