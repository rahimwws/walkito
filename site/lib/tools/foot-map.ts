import { CUSTOM_PAGES, EN_ONLY, ES_ARTICLES, RU_ARTICLES, type EnglishPage, type FullLang } from '@/lib/i18n';

/**
 * "Where does your foot hurt?": the areas of the foot, where they sit on the
 * two pictures, and the conditions that most often cause pain there. Each
 * condition line restates what its own guide says; nothing here is new
 * information, so every claim is backed by the guide it links to.
 *
 * Positions are percentages of the cropped images in /anatomy/map-side.webp
 * and /anatomy/map-sole.webp (rendered by scripts/anatomy/render.html).
 */

export type RegionId =
  | 'under-heel'
  | 'back-of-heel'
  | 'achilles'
  | 'arch'
  | 'inner-ankle'
  | 'top-of-foot'
  | 'ball'
  | 'big-toe'
  | 'toes'
  | 'shin';

export type MapView = 'side' | 'sole';

/** Tap points: view, x %, y % of the image, and where the label sits. */
export const HOTSPOTS: readonly {
  region: RegionId;
  view: MapView;
  x: number;
  y: number;
  side: 'left' | 'right' | 'above' | 'below';
}[] = [
  { region: 'shin', view: 'side', x: 39, y: 48, side: 'right' },
  { region: 'achilles', view: 'side', x: 26, y: 62, side: 'left' },
  { region: 'inner-ankle', view: 'side', x: 33, y: 80, side: 'left' },
  { region: 'back-of-heel', view: 'side', x: 16, y: 90, side: 'left' },
  { region: 'top-of-foot', view: 'side', x: 57, y: 82, side: 'right' },
  { region: 'arch', view: 'side', x: 47, y: 93, side: 'left' },
  { region: 'big-toe', view: 'side', x: 71, y: 92, side: 'below' },
  { region: 'toes', view: 'sole', x: 36, y: 16, side: 'left' },
  { region: 'ball', view: 'sole', x: 42, y: 32, side: 'left' },
  { region: 'big-toe', view: 'sole', x: 65, y: 31, side: 'right' },
  { region: 'arch', view: 'sole', x: 66, y: 60, side: 'right' },
  { region: 'under-heel', view: 'sole', x: 47, y: 87, side: 'right' },
];

/** Card order on the page: heel first (most searched), then up and forward. */
export const REGION_ORDER: readonly RegionId[] = [
  'under-heel',
  'back-of-heel',
  'achilles',
  'arch',
  'inner-ankle',
  'top-of-foot',
  'ball',
  'big-toe',
  'toes',
  'shin',
];

type Condition = { page: EnglishPage; name: string; line: string };
type Region = {
  label: string;
  h2: string;
  conditions: readonly Condition[];
  more?: readonly { page: EnglishPage; text: string }[];
  moreLead?: string;
};

export type FootMapCopy = {
  title: string;
  description: string;
  h1: string;
  lede: string;
  views: Record<MapView, string>;
  pick: string;
  crumb: string;
  home: string;
  regions: Record<RegionId, Region>;
  redFlags: { h2: string; bullets: readonly string[] };
  appText: string;
  imageAlt: Record<MapView, string>;
  credit: string;
};

export const FOOT_MAP_PATH: Record<FullLang, string> = CUSTOM_PAGES.footMap;

export function guideHref(page: EnglishPage, lang: FullLang): string {
  if (lang === 'es') return (ES_ARTICLES as Record<string, string>)[page] ?? EN_ONLY[page];
  if (lang === 'ru') return (RU_ARTICLES as Record<string, string>)[page] ?? EN_ONLY[page];
  return EN_ONLY[page];
}

export const FOOT_MAP: Record<FullLang, FootMapCopy> = {
  en: {
    title: 'Foot Pain Identifier: Where Does Your Foot Hurt?',
    description:
      'Tap where your foot hurts to see the conditions that most often cause pain in that spot, with a guide for each. A guide to common causes, not a diagnosis.',
    h1: 'Where does your foot hurt?',
    lede: 'Tap the spot that hurts on either picture. You will see the conditions that most often cause pain there, each with a short description and a link to its full guide. This is a guide to common causes, not a diagnosis.',
    views: { side: 'Right foot, inner side', sole: 'Right foot, sole' },
    pick: 'Or pick an area:',
    crumb: 'Where does your foot hurt?',
    home: 'Home',
    regions: {
      'under-heel': {
        label: 'Under the heel',
        h2: 'Pain under the heel',
        conditions: [
          {
            page: 'hubPlantarFasciitis',
            name: 'Plantar fasciitis',
            line: 'Sharp pain under the heel, worst with the first steps in the morning or after sitting.',
          },
          {
            page: 'pfVsHeelSpur',
            name: 'Heel spur',
            line: 'A small bony growth under the heel bone. Many people with a spur on an X-ray have no pain at all.',
          },
          {
            page: 'heelFatPad',
            name: 'Heel fat pad syndrome',
            line: 'A deep, bruise-like ache in the centre of the heel, worse barefoot and on hard surfaces.',
          },
        ],
        moreLead: 'More on heel pain:',
        more: [
          { page: 'morningHeelPain', text: 'in the morning' },
          { page: 'heelPainAfterWalking', text: 'after walking' },
          { page: 'heelPainAtNight', text: 'at night' },
        ],
      },
      'back-of-heel': {
        label: 'Back of heel',
        h2: 'Pain at the back of the heel',
        conditions: [
          {
            page: 'achilles',
            name: 'Insertional Achilles tendinopathy',
            line: 'Pain right where the Achilles tendon attaches to the heel bone.',
          },
          {
            page: 'haglunds',
            name: "Haglund's deformity",
            line: 'A bony bump on the upper back of the heel, irritated when shoes press on it.',
          },
          {
            page: 'severs',
            name: "Sever's disease",
            line: 'Heel pain in active children aged 8 to 15.',
          },
        ],
      },
      achilles: {
        label: 'Achilles',
        h2: 'Pain at the back of the ankle, above the heel',
        conditions: [
          {
            page: 'achilles',
            name: 'Achilles tendinopathy (mid-portion)',
            line: 'Pain in the body of the tendon, typically 2 to 6 centimeters above the heel bone, that hurts with loading.',
          },
          {
            page: 'calfRaiseTest',
            name: 'Calf raise test',
            line: 'Check your calf endurance, a useful number to know with Achilles pain.',
          },
        ],
      },
      arch: {
        label: 'Arch',
        h2: 'Pain in the arch',
        conditions: [
          {
            page: 'hubPlantarFasciitis',
            name: 'Plantar fasciitis',
            line: 'Usually felt at the heel, but the pain can spread along the arch.',
          },
          {
            page: 'hubFlatFeet',
            name: 'Flat feet',
            line: 'A low or flattened arch. Often painless; the guide covers when it needs attention.',
          },
          {
            page: 'archPain',
            name: 'Arch pain',
            line: 'The common causes of arch pain and how to tell them apart.',
          },
        ],
      },
      'inner-ankle': {
        label: 'Inner ankle',
        h2: 'Pain on the inside of the ankle',
        conditions: [
          {
            page: 'pttd',
            name: 'Posterior tibial tendon dysfunction',
            line: 'The tendon that supports the arch runs behind the inner ankle bone. When it weakens or becomes inflamed, this area hurts.',
          },
          {
            page: 'hubFlatFeet',
            name: 'Adult-acquired flatfoot',
            line: 'An arch that flattens in adulthood, sometimes on one side. If it happens suddenly, see a clinician.',
          },
        ],
      },
      'top-of-foot': {
        label: 'Top of foot',
        h2: 'Pain on the top of the foot',
        conditions: [
          {
            page: 'topOfFoot',
            name: 'Top of foot pain',
            line: 'Often irritated extensor tendons from tight laces. It can also be a stress fracture, gout or an irritated nerve.',
          },
        ],
      },
      ball: {
        label: 'Ball of foot',
        h2: 'Pain in the ball of the foot',
        conditions: [
          {
            page: 'ballOfFoot',
            name: 'Metatarsalgia',
            line: 'An ache under the ball of the foot, often under the second and third metatarsal heads.',
          },
          {
            page: 'mortons',
            name: "Morton's neuroma",
            line: 'Burning, tingling or the feeling of a pebble in the shoe, most often between the third and fourth toes.',
          },
        ],
      },
      'big-toe': {
        label: 'Big toe joint',
        h2: 'Pain at the big toe joint',
        conditions: [
          {
            page: 'bunions',
            name: 'Bunion',
            line: 'A bony bump on the inner side of the big toe joint, with the big toe leaning toward the others.',
          },
          {
            page: 'sesamoiditis',
            name: 'Sesamoiditis',
            line: 'Pain under the big toe joint, where two small bones sit inside the tendon.',
          },
        ],
      },
      toes: {
        label: 'Toes',
        h2: 'Pain in the toes',
        conditions: [
          {
            page: 'hammerToe',
            name: 'Hammer toe',
            line: 'A toe that bends down at the middle joint, most often the second.',
          },
          {
            page: 'mortons',
            name: "Morton's neuroma",
            line: 'Nerve pain that can shoot into the third and fourth toes.',
          },
        ],
      },
      shin: {
        label: 'Shin',
        h2: 'Pain along the shin',
        conditions: [
          {
            page: 'shinSplints',
            name: 'Shin splints',
            line: 'Pain along the inner edge of the shinbone, spread over several inches. Pain in one small spot can be a stress fracture.',
          },
        ],
      },
    },
    redFlags: {
      h2: 'See a clinician first if',
      bullets: [
        'the pain followed an injury or a fall',
        'you cannot put weight on the foot, or you are limping',
        'the foot is red, hot or swollen, or you have a fever or feel unwell',
        'it wakes you at night',
        'it is sharp, or getting worse despite easing the load',
        'one small spot on a bone is tender, or the pain builds during runs after you increased your mileage; both can be signs of a stress fracture',
        'you have diabetes, reduced feeling in your feet or poor circulation',
        'it has not improved after several weeks of exercise and a lighter load',
        'one arch has flattened suddenly as an adult',
      ],
    },
    appText:
      'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
    imageAlt: {
      side: 'Inner side of a right lower leg and foot, showing the shin, the Achilles tendon, the heel, the ankle, the arch and the big toe.',
      sole: 'Sole of a right foot showing the heel bone, the arch, the metatarsal bones and the toes.',
    },
    credit: 'Illustrations: Walkito',
  },
  es: {
    title: 'Dónde me duele el pie: identificador de dolor de pie',
    description:
      'Toca donde te duele el pie para ver las causas más comunes de dolor en esa zona, con una guía para cada una. Una guía de causas comunes, no un diagnóstico.',
    h1: '¿Dónde te duele el pie?',
    lede: 'Toca el punto que te duele en cualquiera de los dos dibujos. Verás las afecciones que con más frecuencia causan dolor ahí, cada una con una descripción breve y un enlace a su guía completa. Es una guía de causas comunes, no un diagnóstico.',
    views: { side: 'Pie derecho, lado interior', sole: 'Pie derecho, planta' },
    pick: 'O elige una zona:',
    crumb: '¿Dónde te duele el pie?',
    home: 'Inicio',
    regions: {
      'under-heel': {
        label: 'Bajo el talón',
        h2: 'Dolor debajo del talón',
        conditions: [
          {
            page: 'hubPlantarFasciitis',
            name: 'Fascitis plantar',
            line: 'Dolor agudo debajo del talón, peor en los primeros pasos de la mañana o después de estar sentado.',
          },
          {
            page: 'pfVsHeelSpur',
            name: 'Espolón calcáneo',
            line: 'Un pequeño crecimiento óseo debajo del hueso del talón. Muchas personas con un espolón en la radiografía no tienen ningún dolor.',
          },
          {
            page: 'heelFatPad',
            name: 'Síndrome de la almohadilla grasa del talón',
            line: 'Un dolor profundo, como de moretón, en el centro del talón, peor descalzo y sobre superficies duras.',
          },
        ],
        moreLead: 'Más sobre el dolor de talón:',
        more: [
          { page: 'morningHeelPain', text: 'al levantarse' },
          { page: 'heelPainAfterWalking', text: 'al caminar' },
          { page: 'heelPainAtNight', text: 'por la noche' },
        ],
      },
      'back-of-heel': {
        label: 'Detrás del talón',
        h2: 'Dolor en la parte de atrás del talón',
        conditions: [
          {
            page: 'achilles',
            name: 'Tendinopatía insercional de Aquiles',
            line: 'Dolor justo donde el tendón de Aquiles se une al hueso del talón.',
          },
          {
            page: 'haglunds',
            name: 'Deformidad de Haglund',
            line: 'Un bulto óseo en la parte superior trasera del talón, que se irrita cuando el zapato presiona.',
          },
          {
            page: 'severs',
            name: 'Enfermedad de Sever',
            line: 'Dolor de talón en niños activos de 8 a 15 años.',
          },
        ],
      },
      achilles: {
        label: 'Aquiles',
        h2: 'Dolor en la parte de atrás del tobillo, por encima del talón',
        conditions: [
          {
            page: 'achilles',
            name: 'Tendinopatía de Aquiles (porción media)',
            line: 'Dolor en el cuerpo del tendón, normalmente de 2 a 6 centímetros por encima del hueso del talón, que duele al cargarlo.',
          },
          {
            page: 'calfRaiseTest',
            name: 'Test de elevación de talón',
            line: 'Comprueba la resistencia de tu pantorrilla, un dato útil si te duele el Aquiles.',
          },
        ],
      },
      arch: {
        label: 'Arco',
        h2: 'Dolor en el arco',
        conditions: [
          {
            page: 'hubPlantarFasciitis',
            name: 'Fascitis plantar',
            line: 'Suele notarse en el talón, pero el dolor puede extenderse por el arco.',
          },
          {
            page: 'hubFlatFeet',
            name: 'Pie plano',
            line: 'Un arco bajo o hundido. A menudo no duele; la guía explica cuándo merece atención.',
          },
          {
            page: 'archPain',
            name: 'Dolor en el arco',
            line: 'Las causas comunes del dolor en el arco y cómo distinguirlas.',
          },
        ],
      },
      'inner-ankle': {
        label: 'Tobillo interior',
        h2: 'Dolor en la parte interior del tobillo',
        conditions: [
          {
            page: 'pttd',
            name: 'Disfunción del tendón tibial posterior',
            line: 'El tendón que sostiene el arco pasa por detrás del hueso interior del tobillo. Cuando se debilita o se inflama, duele esta zona.',
          },
          {
            page: 'hubFlatFeet',
            name: 'Pie plano adquirido del adulto',
            line: 'Un arco que se hunde en la edad adulta, a veces en un solo pie. Si pasa de repente, consulta a un profesional.',
          },
        ],
      },
      'top-of-foot': {
        label: 'Empeine',
        h2: 'Dolor en el empeine',
        conditions: [
          {
            page: 'topOfFoot',
            name: 'Dolor en el empeine',
            line: 'A menudo son los tendones extensores irritados por cordones apretados. También puede ser una fractura por estrés, gota o un nervio irritado.',
          },
        ],
      },
      ball: {
        label: 'Planta delantera',
        h2: 'Dolor en la parte delantera de la planta',
        conditions: [
          {
            page: 'ballOfFoot',
            name: 'Metatarsalgia',
            line: 'Dolor bajo la parte delantera de la planta, a menudo bajo las cabezas del segundo y tercer metatarsiano.',
          },
          {
            page: 'mortons',
            name: 'Neuroma de Morton',
            line: 'Ardor, hormigueo o la sensación de una piedra en el zapato, con más frecuencia entre el tercer y el cuarto dedo.',
          },
        ],
      },
      'big-toe': {
        label: 'Dedo gordo',
        h2: 'Dolor en la articulación del dedo gordo',
        conditions: [
          {
            page: 'bunions',
            name: 'Juanete',
            line: 'Un bulto óseo en el lado interior de la articulación del dedo gordo, con el dedo gordo inclinado hacia los demás.',
          },
          {
            page: 'sesamoiditis',
            name: 'Sesamoiditis',
            line: 'Dolor debajo de la articulación del dedo gordo, donde hay dos huesos pequeños dentro del tendón.',
          },
        ],
      },
      toes: {
        label: 'Dedos',
        h2: 'Dolor en los dedos',
        conditions: [
          {
            page: 'hammerToe',
            name: 'Dedo en martillo',
            line: 'Un dedo que se dobla hacia abajo en la articulación del medio, con más frecuencia el segundo.',
          },
          {
            page: 'mortons',
            name: 'Neuroma de Morton',
            line: 'Dolor de tipo nervioso que puede llegar al tercer y cuarto dedo.',
          },
        ],
      },
      shin: {
        label: 'Espinilla',
        h2: 'Dolor en la espinilla',
        conditions: [
          {
            page: 'shinSplints',
            name: 'Periostitis tibial',
            line: 'Dolor a lo largo del borde interior de la tibia, repartido en varios centímetros. Un dolor en un solo punto pequeño puede ser una fractura por estrés.',
          },
        ],
      },
    },
    redFlags: {
      h2: 'Consulta primero a un profesional de la salud si',
      bullets: [
        'el dolor empezó después de una lesión o una caída',
        'no puedes apoyar el pie, o cojeas',
        'el pie está rojo, caliente o hinchado, o tienes fiebre o te sientes mal',
        'te despierta por la noche',
        'es un dolor agudo, o empeora aunque hayas bajado la carga',
        'te duele un solo punto pequeño de un hueso, o el dolor aumenta durante tus carreras después de subir el kilometraje; las dos cosas pueden ser señales de una fractura por estrés',
        'tienes diabetes, menos sensibilidad en los pies o mala circulación',
        'no ha mejorado después de varias semanas de ejercicio y menos carga',
        'un arco se aplanó de repente en la edad adulta',
      ],
    },
    appText:
      'Walkito es un plan de ejercicios personal para el dolor de talón, pie y pierna que se adapta a cómo sientes los pies cada día.',
    imageAlt: {
      side: 'Lado interior de una pierna y un pie derechos, con la espinilla, el tendón de Aquiles, el talón, el tobillo, el arco y el dedo gordo.',
      sole: 'Planta de un pie derecho con el hueso del talón, el arco, los metatarsianos y los dedos.',
    },
    credit: 'Ilustraciones: Walkito',
  },
  ru: {
    title: 'Где болит стопа: определитель боли в стопе',
    description:
      'Нажмите туда, где болит стопа, и посмотрите, какие состояния чаще всего вызывают боль в этом месте, со ссылкой на руководство. Подсказка о частых причинах, а не диагноз.',
    h1: 'Где болит стопа?',
    lede: 'Нажмите на место, которое болит, на любом из двух рисунков. Вы увидите состояния, которые чаще всего вызывают боль именно там, с коротким описанием и ссылкой на подробное руководство. Это подсказка о частых причинах, а не диагноз.',
    views: {
      side: 'Правая стопа, внутренняя сторона',
      sole: 'Правая стопа, подошва',
    },
    pick: 'Или выберите область:',
    crumb: 'Где болит стопа?',
    home: 'Главная',
    regions: {
      'under-heel': {
        label: 'Пятка снизу',
        h2: 'Боль под пяткой',
        conditions: [
          {
            page: 'hubPlantarFasciitis',
            name: 'Плантарный фасциит',
            line: 'Острая боль под пяткой, сильнее всего на первых шагах утром или после сидения.',
          },
          {
            page: 'pfVsHeelSpur',
            name: 'Пяточная шпора',
            line: 'Небольшой костный нарост на нижней стороне пяточной кости. У многих людей шпора видна на рентгене, но совсем не болит.',
          },
          {
            page: 'heelFatPad',
            name: 'Синдром жировой подушки пятки',
            line: 'Глубокая боль, как от ушиба, в центре пятки, сильнее босиком и на твёрдой поверхности.',
          },
        ],
        moreLead: 'Ещё о боли в пятке:',
        more: [
          { page: 'morningHeelPain', text: 'утром' },
          { page: 'heelPainAfterWalking', text: 'после ходьбы' },
          { page: 'heelPainAtNight', text: 'ночью' },
        ],
      },
      'back-of-heel': {
        label: 'Пятка сзади',
        h2: 'Боль в задней части пятки',
        conditions: [
          {
            page: 'achilles',
            name: 'Инсерционная тендинопатия ахиллова сухожилия',
            line: 'Боль прямо там, где ахиллово сухожилие крепится к пяточной кости.',
          },
          {
            page: 'haglunds',
            name: 'Деформация Хаглунда',
            line: 'Костный выступ в верхней задней части пятки, который раздражается, когда на него давит обувь.',
          },
          {
            page: 'severs',
            name: 'Болезнь Севера',
            line: 'Боль в пятке у активных детей от 8 до 15 лет.',
          },
        ],
      },
      achilles: {
        label: 'Ахилл',
        h2: 'Боль сзади над пяткой',
        conditions: [
          {
            page: 'achilles',
            name: 'Тендинопатия ахиллова сухожилия (средняя часть)',
            line: 'Боль в самом сухожилии, обычно на расстоянии от 2 до 6 сантиметров выше пяточной кости; она появляется при нагрузке.',
          },
          {
            page: 'calfRaiseTest',
            name: 'Тест подъёма на носки',
            line: 'Проверьте выносливость икроножных мышц: это полезно знать при боли в ахилловом сухожилии.',
          },
        ],
      },
      arch: {
        label: 'Свод',
        h2: 'Боль в своде стопы',
        conditions: [
          {
            page: 'hubPlantarFasciitis',
            name: 'Плантарный фасциит',
            line: 'Обычно болит пятка, но боль может отдавать вдоль свода.',
          },
          {
            page: 'hubFlatFeet',
            name: 'Плоскостопие',
            line: 'Низкий или опущенный свод. Часто не болит; в руководстве сказано, когда на него стоит обратить внимание.',
          },
          {
            page: 'archPain',
            name: 'Боль в своде стопы',
            line: 'Частые причины боли в своде и как их различить.',
          },
        ],
      },
      'inner-ankle': {
        label: 'Внутренняя лодыжка',
        h2: 'Боль с внутренней стороны лодыжки',
        conditions: [
          {
            page: 'pttd',
            name: 'Дисфункция заднего большеберцового сухожилия',
            line: 'Это сухожилие поддерживает свод и проходит за внутренней лодыжкой. Когда оно слабеет или воспаляется, болит эта область.',
          },
          {
            page: 'hubFlatFeet',
            name: 'Приобретённое плоскостопие у взрослых',
            line: 'Свод опускается уже во взрослом возрасте, иногда только на одной ноге. Если это произошло внезапно, обратитесь к врачу.',
          },
        ],
      },
      'top-of-foot': {
        label: 'Подъём стопы',
        h2: 'Боль в подъёме стопы',
        conditions: [
          {
            page: 'topOfFoot',
            name: 'Боль в подъёме стопы',
            line: 'Часто это раздражение сухожилий-разгибателей из-за туго затянутых шнурков. Возможны также стрессовый перелом, подагра или раздражение нерва.',
          },
        ],
      },
      ball: {
        label: 'Подушечка стопы',
        h2: 'Боль в подушечке стопы',
        conditions: [
          {
            page: 'ballOfFoot',
            name: 'Метатарзалгия',
            line: 'Боль под подушечкой стопы, часто под головками второй и третьей плюсневых костей.',
          },
          {
            page: 'mortons',
            name: 'Неврома Мортона',
            line: 'Жжение, покалывание или ощущение камешка в обуви, чаще всего между третьим и четвёртым пальцами.',
          },
        ],
      },
      'big-toe': {
        label: 'Большой палец',
        h2: 'Боль в суставе большого пальца',
        conditions: [
          {
            page: 'bunions',
            name: 'Косточка на ноге',
            line: 'Костный выступ с внутренней стороны сустава большого пальца, а сам палец отклонён к остальным.',
          },
          {
            page: 'sesamoiditis',
            name: 'Сесамоидит',
            line: 'Боль под суставом большого пальца, где в сухожилии лежат две маленькие косточки.',
          },
        ],
      },
      toes: {
        label: 'Пальцы',
        h2: 'Боль в пальцах',
        conditions: [
          {
            page: 'hammerToe',
            name: 'Молоткообразные пальцы',
            line: 'Палец сгибается вниз в среднем суставе, чаще всего второй.',
          },
          {
            page: 'mortons',
            name: 'Неврома Мортона',
            line: 'Нервная боль, которая может отдавать в третий и четвёртый пальцы.',
          },
        ],
      },
      shin: {
        label: 'Голень',
        h2: 'Боль в голени',
        conditions: [
          {
            page: 'shinSplints',
            name: 'Периостит голени',
            line: 'Боль вдоль внутреннего края большеберцовой кости на протяжении нескольких сантиметров. Боль в одной маленькой точке может быть стрессовым переломом.',
          },
        ],
      },
    },
    redFlags: {
      h2: 'Сначала обратитесь к врачу, если',
      bullets: [
        'боль появилась после травмы или падения',
        'на ногу нельзя наступить или вы хромаете',
        'стопа покраснела, горячая или опухла, у вас температура или общее недомогание',
        'боль будит вас ночью',
        'боль острая или усиливается, хотя вы снизили нагрузку',
        'болит одна маленькая точка на кости или боль нарастает во время пробежек после того, как вы увеличили объём бега: и то и другое может быть признаком стрессового перелома',
        'у вас диабет, сниженная чувствительность стоп или плохое кровообращение',
        'за несколько недель упражнений и сниженной нагрузки лучше не стало',
        'свод одной стопы резко опустился уже во взрослом возрасте',
      ],
    },
    appText:
      'Walkito: персональный план упражнений при боли в пятке, стопе и ноге, который подстраивается под то, как ваши стопы чувствуют себя каждый день.',
    imageAlt: {
      side: 'Правая голень и стопа с внутренней стороны: голень, ахиллово сухожилие, пятка, лодыжка, свод и большой палец.',
      sole: 'Подошва правой стопы: пяточная кость, свод, плюсневые кости и пальцы.',
    },
    credit: 'Иллюстрации: Walkito',
  },
};
