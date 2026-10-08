// Anatomy illustrations for the guides: where each source image is cropped and
// where its labels go. Rendered to `public/anatomy/<id>.<lang>.webp` (+ `@600w`)
// by `scripts/anatomy/render.html` in a browser, so the labels use real text
// shaping for every script (Cyrillic, accents) with no extra tooling.
//
// Coordinates are in a 1000 x 1000 box the square source is drawn into. A crop
// may reach past the source; that margin is filled with the source's own
// background colour, so labels get room without a visible seam.
//
// Sources:
//  - plantar-fascia, calf, heel-side, achilles: InjuryMap, CC BY-SA 4.0, via
//    Wikimedia Commons. Their English labels were removed (plantar-fascia,
//    calf) and new labels added, so the derived images are CC BY-SA 4.0 too.
//  - arches, bunion, mortons, ball, haglund: made for Walkito, image model
//    with anatomy checked by hand.
//
// Label: { k: text key, a: anchor [x, y] (dot), p: text position [x, y]
//   (top of the first line), align: 'left' | 'right' | 'center',
//   w: max text width before wrapping, b: second anchor (line from the other
//   end of the underline), plain: true for a caption with no line }.

export const OUT_W = 1200;
export const FONT = 45; // px in the 1200 px output; about 13 px on a phone

export const FIGURES = {
  'plantar-fascia': {
    src: 'plantar-fascia.svg',
    credit: 'injurymap',
    crop: [110, 70, 990, 1050],
    glow: [[505, 840, 70]],
    labels: [
      { k: 'fascia', a: [535, 560], p: [700, 470], align: 'left', w: 250 },
      { k: 'pain', a: [510, 845], p: [700, 760], align: 'left', w: 278 },
      { k: 'heel', a: [462, 882], p: [340, 930], align: 'right', w: 215 },
    ],
  },
  'heel-side': {
    src: 'heel-side.svg',
    credit: 'injurymap',
    crop: [0, 120, 960, 860],
    labels: [
      { k: 'heel', a: [330, 500], p: [250, 260], align: 'right', w: 190 },
      { k: 'pain', a: [325, 600], p: [20, 680], align: 'left', w: 280 },
      { k: 'fascia', a: [560, 690], p: [640, 520], align: 'left', w: 300 },
    ],
  },
  calf: {
    src: 'calf.svg',
    credit: 'injurymap',
    crop: [0, 220, 1000, 960],
    labels: [
      { k: 'gastroc', a: [348, 442], b: [754, 449], p: [545, 390], align: 'center', w: 300 },
      { k: 'soleus', a: [314, 593], b: [768, 620], p: [545, 530], align: 'center', w: 300 },
      { k: 'achilles', a: [332, 737], b: [823, 736], p: [545, 680], align: 'center', w: 300 },
    ],
  },
  achilles: {
    src: 'achilles.svg',
    credit: 'injurymap',
    crop: [-330, 120, 900, 860],
    labels: [
      { k: 'tendon', a: [330, 210], p: [230, 160], align: 'right', w: 460 },
      { k: 'mid', a: [292, 310], p: [230, 300], align: 'right', w: 460 },
      { k: 'insertion', a: [205, 470], p: [140, 520], align: 'right', w: 440 },
    ],
  },
  arches: {
    src: 'arches.webp',
    credit: 'walkito',
    crop: [0, 340, 1000, 700],
    labels: [
      { k: 'flat', p: [172, 615], align: 'center', w: 300, plain: true },
      { k: 'typical', p: [505, 615], align: 'center', w: 330, plain: true },
      { k: 'high', p: [838, 615], align: 'center', w: 300, plain: true },
    ],
  },
  bunion: {
    src: 'bunion.webp',
    credit: 'walkito',
    crop: [-170, 60, 900, 840],
    labels: [
      { k: 'bump', a: [318, 330], p: [270, 330], align: 'right', w: 420 },
      { k: 'toe', a: [425, 215], p: [340, 80], align: 'right', w: 480 },
    ],
  },
  mortons: {
    src: 'mortons.webp',
    credit: 'walkito',
    crop: [20, 60, 1100, 840],
    labels: [
      { k: 'neuroma', a: [578, 465], p: [735, 400], align: 'left', w: 350 },
      { k: 'nerves', a: [468, 590], p: [355, 560], align: 'right', w: 310 },
    ],
  },
  ball: {
    src: 'ball.webp',
    credit: 'walkito',
    crop: [20, 60, 1100, 840],
    labels: [
      { k: 'ball', a: [560, 410], p: [735, 340], align: 'left', w: 350 },
      { k: 'meta', a: [490, 560], p: [360, 560], align: 'right', w: 310 },
    ],
  },
  haglund: {
    src: 'haglund.webp',
    credit: 'walkito',
    crop: [-320, 50, 1000, 880],
    labels: [
      { k: 'tendon', a: [285, 250], p: [215, 170], align: 'right', w: 500 },
      { k: 'bump', a: [272, 470], p: [120, 360], align: 'right', w: 420 },
      { k: 'bursa', a: [222, 505], p: [120, 590], align: 'right', w: 420 },
    ],
  },
};

/** Label text. Only the languages a figure is placed in are needed. */
export const TEXT = {
  'plantar-fascia': {
    en: { fascia: 'Plantar fascia', pain: 'Where heel pain usually starts', heel: 'Heel bone' },
    es: { fascia: 'Fascia plantar', pain: 'Donde suele empezar el dolor', heel: 'Hueso del talón' },
    ru: { fascia: 'Подошвенная фасция', pain: 'Где обычно начинается боль', heel: 'Пяточная кость' },
    pt: { fascia: 'Fáscia plantar', pain: 'Onde a dor costuma começar', heel: 'Osso do calcanhar' },
    fr: { fascia: 'Fascia plantaire', pain: 'Là où la douleur commence souvent', heel: 'Os du talon' },
    it: { fascia: 'Fascia plantare', pain: 'Dove di solito inizia il dolore', heel: 'Osso del tallone' },
    de: { fascia: 'Plantarfaszie', pain: 'Wo der Schmerz meist beginnt', heel: 'Fersenbein' },
  },
  'heel-side': {
    en: { fascia: 'Plantar fascia', pain: 'Where heel pain usually starts', heel: 'Heel bone' },
    es: { fascia: 'Fascia plantar', pain: 'Donde suele empezar el dolor', heel: 'Hueso del talón' },
    ru: { fascia: 'Подошвенная фасция', pain: 'Где обычно начинается боль', heel: 'Пяточная кость' },
  },
  calf: {
    en: { gastroc: 'Gastrocnemius', soleus: 'Soleus', achilles: 'Achilles tendon' },
    es: { gastroc: 'Gastrocnemio', soleus: 'Sóleo', achilles: 'Tendón de Aquiles' },
    ru: { gastroc: 'Икроножная мышца', soleus: 'Камбаловидная мышца', achilles: 'Ахиллово сухожилие' },
  },
  achilles: {
    en: { tendon: 'Achilles tendon', mid: 'Pain in the middle of the tendon', insertion: 'Where it attaches to the heel bone' },
    es: { tendon: 'Tendón de Aquiles', mid: 'Dolor en la parte media del tendón', insertion: 'Donde se une al hueso del talón' },
    ru: { tendon: 'Ахиллово сухожилие', mid: 'Боль в середине сухожилия', insertion: 'Место крепления к пяточной кости' },
  },
  arches: {
    en: { flat: 'Flat foot', typical: 'Typical arch', high: 'High arch' },
    es: { flat: 'Pie plano', typical: 'Arco típico', high: 'Arco alto' },
    ru: { flat: 'Плоская стопа', typical: 'Обычный свод', high: 'Высокий свод' },
    pt: { flat: 'Pé chato', typical: 'Arco típico', high: 'Arco alto' },
    fr: { flat: 'Pied plat', typical: 'Voûte normale', high: 'Voûte haute' },
    it: { flat: 'Piede piatto', typical: 'Arco normale', high: 'Arco alto' },
    de: { flat: 'Plattfuß', typical: 'Normal', high: 'Hohes Gewölbe' },
  },
  bunion: {
    en: { bump: 'Bunion: the bump at the big toe joint', toe: 'Big toe leans toward the other toes' },
    es: { bump: 'Juanete: el bulto en la articulación del dedo gordo', toe: 'El dedo gordo se inclina hacia los demás' },
    ru: { bump: 'Косточка: выступ у\u00a0сустава большого пальца', toe: 'Большой палец отклонён к остальным' },
  },
  mortons: {
    en: { neuroma: 'Thickened nerve (neuroma) between the 3rd and 4th toes', nerves: 'Nerves to the toes' },
    es: { neuroma: 'Nervio engrosado (neuroma) entre el 3.º y el 4.º dedo', nerves: 'Nervios de los dedos' },
    ru: { neuroma: 'Утолщённый нерв (неврома) между 3-м и\u00a04-м пальцами', nerves: 'Нервы пальцев' },
  },
  ball: {
    en: { ball: 'Ball of the foot: the ends of the metatarsal bones', meta: 'Metatarsal bones' },
    es: { ball: 'Parte delantera de la planta: el extremo de los metatarsianos', meta: 'Metatarsianos' },
    ru: { ball: 'Подушечка стопы: головки плюсневых костей', meta: 'Плюсневые кости' },
  },
  haglund: {
    en: { tendon: 'Achilles tendon', bump: "Haglund's bump on the heel bone", bursa: 'Bursa (a small fluid sac)' },
    es: { tendon: 'Tendón de Aquiles', bump: 'Bulto de Haglund en el calcáneo', bursa: 'Bursa (una pequeña bolsa de líquido)' },
    ru: { tendon: 'Ахиллово сухожилие', bump: 'Шишка Хаглунда на пяточной кости', bursa: 'Бурса (сумка с\u00a0жидкостью)' },
  },
};
