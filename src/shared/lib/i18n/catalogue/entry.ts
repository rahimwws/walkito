/**
 * The shape one English catalogue entry may take.
 *
 * Applied with `satisfies` in each domain file rather than as an annotation, so
 * the literal types survive for the placeholder inference in `translate.ts`
 * while the shape is still checked. A plain `: Record<string, SourceEntry>`
 * annotation would widen every template to `string` and take the parameter
 * types with it.
 */
export type SourceEntry = string | { one: string; other: string };
