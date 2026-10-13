/**
 * Google's required (ERROR) and recommended (warn) structured data properties
 * for the types the site uses, as one table for scripts/schema-check.mjs and
 * scripts/seo-lint.mjs. A rule takes a JSON-LD node and returns its problems.
 */
export const has = (o, path) => path.split('.').reduce((v, k) => (v == null ? v : Array.isArray(v) ? v[0]?.[k] : v[k]), o) != null;
export const arr = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

/** type -> (object) => [{ level, msg }] */
export const RULES = {
  Article: (o) => [
    ...['headline', 'datePublished', 'dateModified', 'image'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
    ...arr(o.author).flatMap((a, i) => (a?.name ? [] : [{ level: 'warn', msg: `author[${i}] has no name` }])),
    ...(arr(o.author).length ? [] : [{ level: 'warn', msg: 'recommended "author" missing' }]),
    ...['datePublished', 'dateModified'].filter((k) => o[k] && !/T\d\d:\d\d(:\d\d)?([+-]\d\d:\d\d|Z)$/.test(o[k])).map((k) => ({ level: 'warn', msg: `${k} has no time and timezone` })),
  ],
  BreadcrumbList: (o) => {
    const items = arr(o.itemListElement);
    if (!items.length) return [{ level: 'ERROR', msg: 'itemListElement missing' }];
    return items.flatMap((it, i) => [
      ...(it.position == null ? [{ level: 'ERROR', msg: `item ${i + 1}: position missing` }] : []),
      ...(!it.name ? [{ level: 'ERROR', msg: `item ${i + 1}: name missing` }] : []),
      ...(!it.item && i < items.length - 1 ? [{ level: 'ERROR', msg: `item ${i + 1}: item (URL) missing` }] : []),
    ]);
  },
  FAQPage: (o) => {
    const qs = arr(o.mainEntity);
    if (!qs.length) return [{ level: 'ERROR', msg: 'mainEntity (questions) missing' }];
    return qs.flatMap((q, i) => [
      ...(!q.name ? [{ level: 'ERROR', msg: `question ${i + 1}: name missing` }] : []),
      ...(!q.acceptedAnswer?.text ? [{ level: 'ERROR', msg: `question ${i + 1}: acceptedAnswer.text missing` }] : []),
    ]);
  },
  VideoObject: (o) => [
    ...['name', 'thumbnailUrl', 'uploadDate'].filter((k) => !has(o, k)).map((k) => ({ level: 'ERROR', msg: `required "${k}" missing` })),
    ...(o.uploadDate && !/T\d\d:\d\d(:\d\d)?([+-]\d\d:\d\d|Z)$/.test(o.uploadDate) ? [{ level: 'warn', msg: `uploadDate "${o.uploadDate}" has no time and timezone` }] : []),
    ...['description', 'duration'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
    ...(!o.contentUrl && !o.embedUrl ? [{ level: 'warn', msg: 'recommended contentUrl or embedUrl missing' }] : []),
  ],
  ImageObject: (o) => [
    ...(!o.contentUrl ? [{ level: 'ERROR', msg: 'required "contentUrl" missing' }] : []),
    ...(!o.creator && !o.creditText && !o.copyrightNotice && !o.license ? [{ level: 'ERROR', msg: 'needs one of creator, creditText, copyrightNotice, license' }] : []),
    ...(!o.license || !o.acquireLicensePage ? [{ level: 'warn', msg: 'license / acquireLicensePage missing (image metadata)' }] : []),
  ],
  Organization: (o) => ['name', 'url', 'logo'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
  AboutPage: (o) => (o.dateModified && !/T\d\d:\d\d(:\d\d)?([+-]\d\d:\d\d|Z)$/.test(o.dateModified) ? [{ level: 'warn', msg: 'dateModified has no time and timezone' }] : []),
  WebSite: (o) => ['name', 'url'].filter((k) => !has(o, k)).map((k) => ({ level: 'warn', msg: `"${k}" missing` })),
  SoftwareApplication: (o) => [
    ...(!o.name ? [{ level: 'ERROR', msg: 'required "name" missing' }] : []),
    ...(!has(o, 'offers.price') ? [{ level: 'warn', msg: '"offers.price" missing (needed for an app rich result)' }] : []),
    ...(!o.aggregateRating && !o.review ? [{ level: 'info', msg: 'no aggregateRating/review: not eligible for an app rich result until there are real ratings (never add fake ones)' }] : []),
    ...['operatingSystem', 'applicationCategory'].filter((k) => !o[k]).map((k) => ({ level: 'warn', msg: `recommended "${k}" missing` })),
  ],
};
