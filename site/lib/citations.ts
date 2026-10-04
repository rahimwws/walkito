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
  {
    text: 'Alfredson H, Pietilä T, Jonsson P, Lorentzon R. Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. American Journal of Sports Medicine. 1998;26(3):360–366.',
    doi: '10.1177/03635465980260030301',
    pmid: '9617396',
  },
  {
    text: 'Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. American Journal of Sports Medicine. 2007;35(6):897–906.',
    doi: '10.1177/0363546506298279',
    pmid: '17307888',
  },
  {
    text: 'Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. American Journal of Sports Medicine. 2015;43(7):1704–1711.',
    doi: '10.1177/0363546515584760',
    pmid: '26018970',
  },
  {
    text: 'Chimenti RL, Neville C, Houck J, Cuddeford T, Carreira D, Martin RL. Achilles Pain, Stiffness, and Muscle Power Deficits: Midportion Achilles Tendinopathy Revision 2024. Journal of Orthopaedic & Sports Physical Therapy. 2024;54(12):CPG1–CPG32.',
    doi: '10.2519/jospt.2024.0302',
    pmid: '39611662',
  },
  {
    text: 'Menéndez C, Batalla L, Prieto A, Rodríguez MÁ, Crespo I, Olmedillas H. Medial tibial stress syndrome in novice and recreational runners: a systematic review. International Journal of Environmental Research and Public Health. 2020;17(20):E7457.',
    doi: '10.3390/ijerph17207457',
    pmid: '33066291',
  },
  {
    text: 'Chang AH, Rasmussen SZ, Jensen AE, Sørensen T, Rathleff MS. What do we actually know about a common cause of plantar heel pain? A scoping review of heel fat pad syndrome. Journal of Foot and Ankle Research. 2022;15(1):60.',
    doi: '10.1186/s13047-022-00568-x',
    pmid: '35974398',
  },
  {
    text: 'Ross MH, Smith MD, Mellor R, Vicenzino B. Exercise for posterior tibial tendon dysfunction: a systematic review of randomised clinical trials and clinical guidelines. BMJ Open Sport & Exercise Medicine. 2018;4(1):e000430.',
    doi: '10.1136/bmjsem-2018-000430',
    pmid: '30271611',
  },
  {
    text: 'Buist I, Bredeweg SW, van Mechelen W, Lemmink KAPM, Pepping GJ, Diercks RL. No effect of a graded training program on the number of running-related injuries in novice runners: a randomized controlled trial. American Journal of Sports Medicine. 2008;36(1):33–39.',
    doi: '10.1177/0363546507307505',
    pmid: '17940147',
  },
  {
    text: 'Nielsen RØ, Parner ET, Nohr EA, Sørensen H, Lind M, Rasmussen S. Excessive progression in weekly running distance and risk of running-related injuries: an association which varies according to type of injury. Journal of Orthopaedic & Sports Physical Therapy. 2014;44(10):739–747.',
    doi: '10.2519/jospt.2014.5164',
    pmid: '25155475',
  },
  {
    text: 'Malisoux L, Ramesh J, Mann R, Seil R, Urhausen A, Theisen D. Can parallel use of different running shoes decrease running-related injury risk? Scandinavian Journal of Medicine & Science in Sports. 2015;25(1):110–115.',
    doi: '10.1111/sms.12154',
    pmid: '24286345',
  },
  {
    text: 'Latt LD, Jaffe DE, Tang Y, Taljanovic MS. Evaluation and treatment of chronic plantar fasciitis. Foot & Ankle Orthopaedics. 2020;5(1):2473011419896763.',
    doi: '10.1177/2473011419896763',
    pmid: '35097359',
  },
  {
    text: 'Menz HB, Dufour AB, Riskowski JL, Hillstrom HJ, Hannan MT. Foot posture, foot function and low back pain: the Framingham Foot Study. Rheumatology (Oxford). 2013;52(12):2275–2282.',
    doi: '10.1093/rheumatology/ket298',
    pmid: '24049103',
  },
  {
    text: 'Ling SK, Lui TH. Posterior tibial tendon dysfunction: an overview. The Open Orthopaedics Journal. 2017;11:714–723.',
    doi: '10.2174/1874325001711010714',
    pmid: '28979585',
  },
];

/** Readable names for the indices, so a guide says `CITE.rathleff` rather than `0`. */
export const CITE = {
  rathleff: 0,
  brijwasi: 1,
  cheng: 2,
  guideline: 3,
  alfredson: 4,
  silbernagel: 5,
  beyer: 6,
  achillesGuideline: 7,
  mtssReview: 8,
  fatPadReview: 9,
  posteriorTibialReview: 10,
  buist: 11,
  nielsen: 12,
  malisoux: 13,
  latt: 14,
  menz: 15,
  ling: 16,
} as const;

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
