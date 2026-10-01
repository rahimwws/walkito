/**
 * The papers the site leans on, in one place.
 *
 * `/science` prints them and every guide cites them by index, so a reference
 * corrected here is corrected everywhere it is quoted. They stay in English on
 * the translated pages: a citation is looked up, not read, and a translated
 * journal title is one nobody can find.
 *
 * Every entry carries a resolvable identifier — a DOI, a PubMed id, or both —
 * so a reader (or an engine deciding whether to trust the page) can check the
 * claim in one click. A figure on this site with no identifier behind it does
 * not belong on this site.
 */
export type Citation = {
  /** Vancouver style, as printed. */
  text: string;
  /** Without the `https://doi.org/` prefix. */
  doi?: string;
  pmid?: string;
};

export const CITATIONS: readonly Citation[] = [
  {
    text: 'Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scandinavian Journal of Medicine & Science in Sports. 2015;25(3):e292–e300.',
    doi: '10.1111/sms.12313',
    pmid: '25145882',
  },
  {
    text: 'Brijwasi T, Borkar P. A comprehensive exercise program improves foot alignment in people with flexible flat foot: a randomised trial. Journal of Physiotherapy. 2023;69(1):42–46.',
    doi: '10.1016/j.jphys.2022.11.011',
    pmid: '36526555',
  },
  {
    text: 'Cheng J, Han D, Qu J, et al. Effects of short foot training on foot posture in patients with flatfeet: a systematic review and meta-analysis. Journal of Back and Musculoskeletal Rehabilitation. 2024;37(4):839–851.',
    doi: '10.3233/BMR-230226',
    pmid: '38517769',
  },
  {
    text: 'Koc TA Jr, Bise CG, Neville C, et al. Heel Pain - Plantar Fasciitis: Revision 2023. Journal of Orthopaedic & Sports Physical Therapy. 2023;53(12):CPG1–CPG39.',
    doi: '10.2519/jospt.2023.0303',
    pmid: '38037331',
  },
];

/** Readable names for the indices, so a guide says `CITE.rathleff` rather than `0`. */
export const CITE = { rathleff: 0, brijwasi: 1, cheng: 2, guideline: 3 } as const;

/** Where a citation resolves: the DOI when there is one, else PubMed. */
export function citationUrl(citation: Citation): string | undefined {
  if (citation.doi) return `https://doi.org/${citation.doi}`;
  if (citation.pmid) return `https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/`;
  return undefined;
}

/** schema.org `ScholarlyArticle` for a citation, for Article `citation`. */
export function citationSchema(citation: Citation) {
  const url = citationUrl(citation);
  return {
    '@type': 'ScholarlyArticle',
    name: citation.text,
    ...(url ? { url } : {}),
    ...(citation.doi ? { identifier: `https://doi.org/${citation.doi}` } : {}),
    ...(citation.pmid ? { sameAs: `https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/` } : {}),
  };
}
