// Where each anatomy figure goes, with its caption and alt text per language.
// `scripts/anatomy/place.mjs` writes these into the guide files as `figure`
// fields on the given section (0-based index in `sections`).

const PF = {
  en: { caption: 'The plantar fascia runs from the heel bone to the toes. Plantar fasciitis pain usually starts where it attaches to the heel.', alt: 'Sole of a foot showing the plantar fascia as white bands fanning out from the heel bone to the base of the toes, with a red spot on the heel where pain usually starts.' },
  es: { caption: 'La fascia plantar va del hueso del talón a los dedos. El dolor de la fascitis plantar suele empezar donde se une al talón.', alt: 'Planta de un pie con la fascia plantar como bandas blancas que se abren desde el hueso del talón hasta la base de los dedos, y una mancha roja en el talón donde suele empezar el dolor.' },
  ru: { caption: 'Подошвенная фасция идёт от пяточной кости к пальцам. Боль при плантарном фасциите обычно начинается там, где фасция крепится к пятке.', alt: 'Подошва стопы: подошвенная фасция в виде белых тяжей, которые веером расходятся от пяточной кости к основанию пальцев, и красное пятно на пятке там, где обычно начинается боль.' },
  pt: { caption: 'A fáscia plantar vai do osso do calcanhar até os dedos. A dor da fascite plantar costuma começar onde ela se prende ao calcanhar.', alt: 'Sola de um pé com a fáscia plantar em faixas brancas que se abrem do osso do calcanhar até a base dos dedos, e uma mancha vermelha no calcanhar onde a dor costuma começar.' },
  fr: { caption: 'Le fascia plantaire va de l’os du talon jusqu’aux orteils. La douleur de la fasciite plantaire commence souvent là où il s’attache au talon.', alt: 'Plante d’un pied montrant le fascia plantaire en bandes blanches qui s’étalent de l’os du talon jusqu’à la base des orteils, avec une tache rouge sur le talon là où la douleur commence souvent.' },
  it: { caption: 'La fascia plantare va dall’osso del tallone alle dita. Il dolore della fascite plantare di solito inizia dove si attacca al tallone.', alt: 'Pianta di un piede con la fascia plantare come fasce bianche che si aprono a ventaglio dall’osso del tallone alla base delle dita, e una macchia rossa sul tallone dove di solito inizia il dolore.' },
  de: { caption: 'Die Plantarfaszie verläuft vom Fersenbein bis zu den Zehen. Der Schmerz bei Plantarfasziitis beginnt meist dort, wo sie an der Ferse ansetzt.', alt: 'Fußsohle mit der Plantarfaszie als weiße Bänder, die sich vom Fersenbein fächerförmig bis zu den Zehen ausbreiten, und einem roten Fleck an der Ferse, wo der Schmerz meist beginnt.' },
};

const ARCHES = {
  en: { caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
  es: { caption: 'Los mismos huesos del pie con pie plano, arco típico y arco alto, vistos desde el lado interior.', alt: 'Tres pies vistos desde el lado interior sobre un suelo plano: un pie plano con el arco apoyado en el suelo, un arco típico con un pequeño espacio debajo y un arco alto con un gran espacio bajo el centro del pie.' },
  ru: { caption: 'Одни и те же кости стопы при плоской стопе, обычном и высоком своде, вид с внутренней стороны.', alt: 'Три стопы с внутренней стороны на ровном полу: плоская стопа, у которой свод лежит на полу, обычный свод с небольшим просветом и высокий свод с большим просветом под серединой стопы.' },
  pt: { caption: 'Os mesmos ossos do pé com pé chato, arco típico e arco alto, vistos pelo lado de dentro.', alt: 'Três pés vistos pelo lado de dentro sobre um chão plano: um pé chato com o arco apoiado no chão, um arco típico com um pequeno espaço embaixo e um arco alto com um grande espaço sob o meio do pé.' },
  fr: { caption: 'Les mêmes os du pied avec un pied plat, une voûte normale et une voûte haute, vus du côté intérieur.', alt: 'Trois pieds vus du côté intérieur sur un sol plat\u00A0: un pied plat dont la voûte repose au sol, une voûte normale avec un petit espace dessous et une voûte haute avec un grand espace sous le milieu du pied.' },
  it: { caption: 'Le stesse ossa del piede con piede piatto, arco normale e arco alto, viste dal lato interno.', alt: 'Tre piedi visti dal lato interno su un pavimento piano: un piede piatto con l’arco appoggiato a terra, un arco normale con un piccolo spazio sotto e un arco alto con un grande spazio sotto la parte centrale del piede.' },
  de: { caption: 'Dieselben Fußknochen bei Plattfuß, normalem und hohem Gewölbe, von der Innenseite gesehen.', alt: 'Drei Füße von der Innenseite auf ebenem Boden: ein Plattfuß, dessen Gewölbe auf dem Boden aufliegt, ein normales Gewölbe mit kleinem Spalt darunter und ein hohes Gewölbe mit großem Spalt unter der Fußmitte.' },
};

const HEEL_SIDE_ALT = {
  en: 'Inner side view of a foot with see-through skin showing the heel bone, the plantar fascia running under the arch, and a red area under the heel where pain usually starts.',
  es: 'Vista lateral interior de un pie con la piel transparente que muestra el hueso del talón, la fascia plantar bajo el arco y una zona roja bajo el talón donde suele empezar el dolor.',
  ru: 'Стопа с внутренней стороны, кожа прозрачная: видны пяточная кость, подошвенная фасция под сводом и красная зона под пяткой, где обычно начинается боль.',
  pt: 'Vista lateral interna de um pé com a pele transparente, mostrando o osso do calcanhar, a fáscia plantar sob o arco e uma área vermelha sob o calcanhar onde a dor costuma começar.',
  fr: 'Vue de côté, face intérieure, d’un pied à la peau transparente montrant l’os du talon, le fascia plantaire sous la voûte et une zone rouge sous le talon là où la douleur commence souvent.',
  it: 'Vista laterale interna di un piede con la pelle trasparente che mostra l’osso del tallone, la fascia plantare sotto l’arco e una zona rossa sotto il tallone dove di solito inizia il dolore.',
  de: 'Fuß von der Innenseite mit durchsichtiger Haut: Fersenbein, Plantarfaszie unter dem Gewölbe und eine rote Stelle unter der Ferse, wo der Schmerz meist beginnt.',
};

const HEEL_SIDE = {
  en: { caption: 'Side view: the plantar fascia attaches under the heel bone, where plantar fasciitis pain usually starts.', alt: HEEL_SIDE_ALT.en },
  es: { caption: 'Vista lateral: la fascia plantar se une por debajo del hueso del talón, donde suele empezar el dolor de la fascitis plantar.', alt: HEEL_SIDE_ALT.es },
  ru: { caption: 'Вид сбоку: подошвенная фасция крепится к нижней стороне пяточной кости, и именно там обычно начинается боль при плантарном фасциите.', alt: HEEL_SIDE_ALT.ru },
  pt: { caption: 'Vista lateral: a fáscia plantar se prende embaixo do osso do calcanhar, onde a dor da fascite plantar costuma começar.', alt: HEEL_SIDE_ALT.pt },
  fr: { caption: 'Vue de côté\u00A0: le fascia plantaire s’attache sous l’os du talon, là où la douleur de la fasciite plantaire commence souvent.', alt: HEEL_SIDE_ALT.fr },
  it: { caption: 'Vista laterale: la fascia plantare si attacca sotto l’osso del tallone, dove di solito inizia il dolore della fascite plantare.', alt: HEEL_SIDE_ALT.it },
  de: { caption: 'Seitenansicht: Die Plantarfaszie setzt unten am Fersenbein an, dort beginnt der Schmerz bei Plantarfasziitis meist.', alt: HEEL_SIDE_ALT.de },
};

const HEEL_SPUR = {
  en: { caption: 'A heel spur, when there is one, forms on the underside of the heel bone, close to where the plantar fascia attaches.', alt: HEEL_SIDE_ALT.en },
  es: { caption: 'Un espolón, cuando existe, se forma en la parte inferior del hueso del talón, cerca de donde se une la fascia plantar.', alt: HEEL_SIDE_ALT.es },
  ru: { caption: 'Пяточная шпора, если она есть, образуется на нижней стороне пяточной кости, рядом с местом крепления подошвенной фасции.', alt: HEEL_SIDE_ALT.ru },
  pt: { caption: 'O esporão, quando existe, se forma na parte de baixo do osso do calcanhar, perto de onde a fáscia plantar se prende.', alt: HEEL_SIDE_ALT.pt },
  fr: { caption: 'Une épine calcanéenne, quand il y en a une, se forme sous l’os du talon, près de l’endroit où s’attache le fascia plantaire.', alt: HEEL_SIDE_ALT.fr },
  it: { caption: 'Una spina calcaneare, quando c’è, si forma nella parte inferiore dell’osso del tallone, vicino al punto in cui si attacca la fascia plantare.', alt: HEEL_SIDE_ALT.it },
  de: { caption: 'Ein Fersensporn bildet sich, wenn es einen gibt, an der Unterseite des Fersenbeins, nahe dem Ansatz der Plantarfaszie.', alt: HEEL_SIDE_ALT.de },
};

const CALF = {
  en: { caption: 'The two calf muscles, the gastrocnemius and the soleus, join into the Achilles tendon, which attaches to the heel bone.', alt: 'Side and back views of a lower leg showing the gastrocnemius and soleus muscles narrowing into the Achilles tendon above the heel.' },
  es: { caption: 'Los dos músculos de la pantorrilla, el gastrocnemio y el sóleo, se unen en el tendón de Aquiles, que se inserta en el hueso del talón.', alt: 'Vistas lateral y posterior de una pierna con los músculos gastrocnemio y sóleo que se estrechan hasta el tendón de Aquiles por encima del talón.' },
  ru: { caption: 'Две мышцы голени, икроножная и камбаловидная, переходят в ахиллово сухожилие, которое крепится к пяточной кости.', alt: 'Голень сбоку и сзади: икроножная и камбаловидная мышцы сужаются и переходят в ахиллово сухожилие над пяткой.' },
  pt: { caption: 'Os dois músculos da panturrilha, o gastrocnêmio e o sóleo, se unem no tendão de Aquiles, que se prende ao osso do calcanhar.', alt: 'Vistas lateral e de trás de uma perna mostrando os músculos gastrocnêmio e sóleo afinando até o tendão de Aquiles, acima do calcanhar.' },
  fr: { caption: 'Les deux muscles du mollet, le gastrocnémien et le soléaire, se rejoignent dans le tendon d’Achille, qui s’attache à l’os du talon.', alt: 'Vues de côté et de dos d’une jambe montrant le gastrocnémien et le soléaire qui s’affinent jusqu’au tendon d’Achille, au-dessus du talon.' },
  it: { caption: 'I due muscoli del polpaccio, il gastrocnemio e il soleo, si uniscono nel tendine d’Achille, che si attacca all’osso del tallone.', alt: 'Viste laterale e posteriore di una gamba con i muscoli gastrocnemio e soleo che si assottigliano nel tendine d’Achille, sopra il tallone.' },
  de: { caption: 'Die beiden Wadenmuskeln, Gastrocnemius und Soleus, gehen in die Achillessehne über, die am Fersenbein ansetzt.', alt: 'Unterschenkel von der Seite und von hinten: Gastrocnemius und Soleus werden schmaler und gehen über der Ferse in die Achillessehne über.' },
};

const ACHILLES = {
  en: { caption: 'Achilles tendon pain is usually in one of two places: the middle of the tendon, or where it attaches to the heel bone.', alt: 'Side view of a foot and ankle showing the Achilles tendon running from the calf to the back of the heel bone, with a red area in the middle of the tendon.' },
  es: { caption: 'El dolor del tendón de Aquiles suele estar en uno de dos sitios: la parte media del tendón o donde se une al hueso del talón.', alt: 'Vista lateral de un pie y un tobillo con el tendón de Aquiles desde la pantorrilla hasta la parte de atrás del hueso del talón, y una zona roja en la parte media del tendón.' },
  ru: { caption: 'Боль в ахилловом сухожилии обычно бывает в одном из двух мест: в середине сухожилия или там, где оно крепится к пяточной кости.', alt: 'Стопа и голеностоп сбоку: ахиллово сухожилие идёт от икры к задней части пяточной кости, в середине сухожилия красная зона.' },
  pt: { caption: 'A dor no tendão de Aquiles costuma ficar em um de dois lugares: no meio do tendão ou onde ele se prende ao osso do calcanhar.', alt: 'Vista lateral de um pé e tornozelo com o tendão de Aquiles indo da panturrilha até a parte de trás do osso do calcanhar, e uma área vermelha no meio do tendão.' },
  fr: { caption: 'La douleur du tendon d’Achille se situe le plus souvent à l’un de deux endroits\u00A0: au corps du tendon, ou là où il s’attache à l’os du talon.', alt: 'Vue de côté d’un pied et d’une cheville montrant le tendon d’Achille, du mollet jusqu’à l’arrière de l’os du talon, avec une zone rouge au milieu du tendon.' },
  it: { caption: 'Il dolore al tendine d’Achille di solito è in uno di due punti: nella parte media del tendine o dove si attacca all’osso del tallone.', alt: 'Vista laterale di un piede e una caviglia con il tendine d’Achille dal polpaccio alla parte posteriore dell’osso del tallone, e una zona rossa nella parte media del tendine.' },
  de: { caption: 'Schmerzen an der Achillessehne sitzen meist an einer von zwei Stellen: im Mittelteil der Sehne oder dort, wo sie am Fersenbein ansetzt.', alt: 'Fuß und Sprunggelenk von der Seite: die Achillessehne von der Wade bis zur Rückseite des Fersenbeins, mit einer roten Stelle im Mittelteil der Sehne.' },
};

const BUNION = {
  en: { caption: 'A bunion is a bony bump at the big toe joint, with the big toe leaning toward the other toes.', alt: 'Top view of the foot bones with the big toe angled toward the second toe and a red bump on the inner side of the big toe joint.' },
  es: { caption: 'Un juanete es un bulto óseo en la articulación del dedo gordo, con el dedo gordo inclinado hacia los demás.', alt: 'Vista superior de los huesos del pie con el dedo gordo inclinado hacia el segundo dedo y un bulto rojo en el lado interior de la articulación del dedo gordo.' },
  ru: { caption: 'Косточка на ноге: костный выступ у сустава большого пальца, при этом сам палец отклонён к остальным.', alt: 'Кости стопы сверху: большой палец отклонён ко второму, на внутренней стороне сустава большого пальца красный выступ.' },
};

const MORTONS = {
  en: { caption: "Morton's neuroma is a thickened nerve between the metatarsal heads, most often between the third and fourth toes.", alt: 'Top view of the foot bones with yellow nerves running to the toes and a swollen oval on the nerve between the third and fourth toes.' },
  es: { caption: 'El neuroma de Morton es un engrosamiento del nervio entre las cabezas de los metatarsianos, con más frecuencia entre el tercer y el cuarto dedo.', alt: 'Vista superior de los huesos del pie con nervios amarillos hacia los dedos y un óvalo hinchado en el nervio entre el tercer y el cuarto dedo.' },
  ru: { caption: 'Неврома Мортона: утолщение нерва между головками плюсневых костей, чаще всего между третьим и четвёртым пальцами.', alt: 'Кости стопы сверху: жёлтые нервы идут к пальцам, на нерве между третьим и четвёртым пальцами овальное утолщение.' },
};

const BALL = {
  en: { caption: 'The ball of the foot sits under the ends of the metatarsal bones. Metatarsalgia pain is often under the second and third.', alt: 'Top view of the foot bones with the ends of the second, third and fourth metatarsal bones highlighted in red.' },
  es: { caption: 'La parte delantera de la planta está bajo el extremo de los metatarsianos. El dolor de la metatarsalgia suele estar bajo el segundo y el tercero.', alt: 'Vista superior de los huesos del pie con el extremo del segundo, tercer y cuarto metatarsiano resaltado en rojo.' },
  ru: { caption: 'Подушечка стопы находится под головками плюсневых костей. При метатарзалгии боль часто бывает под второй и третьей.', alt: 'Кости стопы сверху: головки второй, третьей и четвёртой плюсневых костей выделены красным.' },
};

const HAGLUND = {
  en: { caption: "Haglund's deformity is a bony bump on the upper back corner of the heel bone. The bursa between it and the Achilles tendon can get pinched.", alt: 'Side view of an ankle and heel showing the Achilles tendon, a bony bump at the upper back corner of the heel bone, and a small fluid sac between them.' },
  es: { caption: 'La deformidad de Haglund es un bulto óseo en la esquina superior trasera del calcáneo. La bursa entre el bulto y el tendón de Aquiles puede quedar pinzada.', alt: 'Vista lateral de un tobillo y un talón con el tendón de Aquiles, un bulto óseo en la esquina superior trasera del calcáneo y una pequeña bolsa de líquido entre ambos.' },
  ru: { caption: 'Деформация Хаглунда: костный выступ в верхнем заднем углу пяточной кости. Бурса между ним и ахилловым сухожилием может защемляться.', alt: 'Голеностоп и пятка сбоку: ахиллово сухожилие, костный выступ в верхнем заднем углу пяточной кости и небольшая сумка с жидкостью между ними.' },
};

const ARTICLE_DIR = { en: 'articles', es: 'articles-es', ru: 'articles-ru', pt: 'articles-pt', fr: 'articles-fr', it: 'articles-it', de: 'articles-de' };

/** Articles that also exist in Portuguese, French, Italian and German. */
const ALL_SEVEN = new Set(['hub-plantar-fasciitis', 'morning-heel-pain', 'pf-vs-heel-spur', 'achilles', 'calf-raises', 'hub-flat-feet']);

/** Articles exist in en, es and ru (six also in pt, fr, it, de); same file
 * name and section order in every language. */
const ARTICLES = [
  ['hub-plantar-fasciitis', 0, 'plantar-fascia', PF],
  ['morning-heel-pain', 0, 'heel-side', HEEL_SIDE],
  ['pf-vs-heel-spur', 0, 'heel-side', HEEL_SPUR],
  ['achilles', 5, 'achilles', ACHILLES],
  ['calf-raises', 4, 'calf', CALF],
  ['hub-flat-feet', 0, 'arches', ARCHES],
  ['high-arches', 0, 'arches', ARCHES],
  ['arch-pain', 4, 'arches', ARCHES],
  ['bunions', 0, 'bunion', BUNION],
  ['mortons', 0, 'mortons', MORTONS],
  ['ball-of-foot', 0, 'ball', BALL],
  ['haglunds', 0, 'haglund', HAGLUND],
];

export const PLACEMENTS = [
  ...ARTICLES.flatMap(([file, section, id, text]) =>
    (ALL_SEVEN.has(file) ? ['en', 'es', 'ru', 'pt', 'fr', 'it', 'de'] : ['en', 'es', 'ru']).map((lang) => ({
      file: `lib/guides/${ARTICLE_DIR[lang]}/${file}.ts`,
      guide: null,
      section,
      lang,
      figure: { id, ...text[lang] },
    })),
  ),
  // The two main guides, in all seven languages.
  ...['en', 'es', 'ru', 'pt', 'fr', 'it', 'de'].flatMap((lang) => [
    { file: `lib/guides/${lang}.ts`, guide: `HEEL_PAIN_${lang.toUpperCase()}`, section: 0, lang, figure: { id: 'plantar-fascia', ...PF[lang] } },
    { file: `lib/guides/${lang}.ts`, guide: `FLAT_FEET_${lang.toUpperCase()}`, section: 0, lang, figure: { id: 'arches', ...ARCHES[lang] } },
  ]),
];
