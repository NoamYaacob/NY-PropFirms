/**
 * Renders a JSON-LD <script> block.
 * Use one per page for structured data (WebSite, BreadcrumbList, etc.).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
