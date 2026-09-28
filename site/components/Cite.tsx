import { CITATIONS, citationUrl } from '@/lib/citations';

/**
 * One reference, printed under the text that relies on it, and linked.
 *
 * Linked because a citation nobody can open is decoration: the DOI or PubMed
 * link is what lets a reader check the figure above it, and what tells a
 * crawler the claim points at the primary source rather than at another blog.
 */
export function Cite({ index }: { index: number }) {
  const citation = CITATIONS[index];
  const url = citationUrl(citation);
  return (
    <p className="cite">
      {url ? (
        <a href={url} rel="noopener" target="_blank">
          {citation.text}
        </a>
      ) : (
        citation.text
      )}
    </p>
  );
}
