/**
 * The four papers the site leans on, in one place.
 *
 * `/science` prints them and every guide cites them by index, so a reference
 * corrected here is corrected everywhere it is quoted. They stay in English on
 * the translated pages: a citation is looked up, not read, and a translated
 * journal title is one nobody can find.
 */
export const CITATIONS = [
  'Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scandinavian Journal of Medicine & Science in Sports. 2015;25(3):e292–e300.',
  'Brijwasi T, Borkar P. A comprehensive exercise program improves foot alignment in people with flexible flat foot: a randomised trial. Journal of Physiotherapy. 2023;69(1):42–46.',
  'Cheng J, Han D, Qu J, et al. Effects of short foot training on foot posture in patients with flatfeet: a systematic review and meta-analysis. Journal of Back and Musculoskeletal Rehabilitation. 2024;37(4):839–851.',
  'Koc TA Jr, Bise CG, Neville C, et al. Heel Pain — Plantar Fasciitis: Revision 2023. Journal of Orthopaedic & Sports Physical Therapy. 2023;53(12):CPG1–CPG39.',
] as const;

/** Readable names for the indices, so a guide says `CITE.rathleff` rather than `0`. */
export const CITE = { rathleff: 0, brijwasi: 1, cheng: 2, guideline: 3 } as const;
