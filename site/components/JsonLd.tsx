/**
 * Structured data, rendered into the initial HTML.
 *
 * A Server Component on purpose. Most AI crawlers fetch raw HTML and never run
 * JavaScript, so schema injected after hydration is schema they will never see
 * — which is the single most expensive way to get this wrong, because it looks
 * correct in every browser devtools panel.
 *
 * Invalid JSON-LD is ignored silently by Google rather than reported, so this
 * takes an object and serialises it instead of taking a string: a typo becomes
 * a TypeScript error rather than a block that quietly does nothing.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
