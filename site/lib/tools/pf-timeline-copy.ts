/**
 * The recovery timeline's words and stages, shared by the React component
 * (components/tools/PfTimeline.tsx) and the plain version for pages served
 * without React (lib/vanilla/tools.ts).
 */
import type { Lang } from '@/lib/i18n';
import type { HansenYear } from '@/lib/tools/pf-timeline';

export type Stage = 'early' | 'window' | 'past' | 'years' | 'long';
export const STAGES: readonly Stage[] = ['early', 'window', 'past', 'years', 'long'];

/** Which Hansen bars to highlight for each stage. */
export const HIGHLIGHT: Record<Stage, readonly HansenYear[]> = {
  early: [],
  window: [],
  past: [1],
  years: [1, 5],
  long: [5, 10, 15],
};

export type TimelineCopy = {
  heading: string;
  question: string;
  stages: Record<Stage, string>;
  chartTitle: string;
  year: (y: HansenYear) => string;
  pct: (n: number) => string;
  chartNote: string;
  latt: string;
  text: Record<Stage, readonly string[]>;
  notForecast: string;
  cta: string;
};

const NBSP = '\u00A0';

export const TIMELINE_COPY: Partial<Record<Lang, TimelineCopy>> = {
  en: {
    heading: 'Where are you on the timeline?',
    question: 'How long have you had heel pain?',
    stages: {
      early: 'Under 3 months',
      window: '3 to 6 months',
      past: '6 months to a year',
      years: '1 to 5 years',
      long: 'Over 5 years',
    },
    chartTitle: 'Share of 174 people still with symptoms, by time since the pain started (Hansen 2018)',
    year: (y) => (y === 1 ? '1 year' : `${y} years`),
    pct: (n) => `${n.toFixed(1)}%`,
    chartNote:
      'A hard-case group: 93 percent had received a cortisone injection. Those still with symptoms at follow-up reported mild pain on average, about 2 to 3 out of 10 when walking.',
    latt: 'About 90 percent of people improve with non-surgical care, usually within three to six months (Latt 2020 review).',
    text: {
      early: [
        'You are early. The 2020 review reports that about 90 percent of people improve with non-surgical care, usually within three to six months (Latt 2020).',
        'Do not expect much change in the first weeks. In the Rathleff trial, the clear difference between the exercise groups showed up at three months (Rathleff 2015). The number to watch is your morning pain, month against month.',
      ],
      window: [
        'You are in the window the 2020 review names: about 90 percent of people improve with non-surgical care, usually within three to six months (Latt 2020).',
        'If your morning pain is lower than it was a month ago, that trend is the milestone. If it is flat or getting worse, see the sections below on what to do next.',
      ],
      past: [
        'You are past the three to six month window from the 2020 review. The 2023 guideline suggests considering other options when several months of stretching, strengthening and footwear changes have not helped enough. This is a reasonable point to see a clinician and check the diagnosis.',
        'Slower recovery is common. In the Hansen cohort, 80.5 percent still had symptoms at one year, and those who became symptom-free had symptoms for about 725 days on average (Hansen 2018).',
      ],
      years: [
        'In the Hansen cohort, the share still with symptoms fell from 80.5 percent at one year to 50.0 percent at five years (Hansen 2018). Recovery after the first year was common.',
        'If you have not seen a clinician yet, now is a good time to check the diagnosis and go over the options in the table below. In that cohort, women and people with pain in both heels recovered more slowly.',
      ],
      long: [
        'In the Hansen cohort, the share still with symptoms went from 50.0 percent at five years to 45.6 percent at ten and 44.0 percent at fifteen (Hansen 2018). Some people still became symptom-free, but more slowly.',
        'Pain this long is worth a clinician visit to confirm the diagnosis, especially if both heels hurt or other joints are stiff or swollen.',
      ],
    },
    notForecast: 'These are numbers for groups of people in studies, not a forecast for you.',
    cta: 'Walkito asks for a morning pain score before every session, so you can see your own trend month to month.',
  },
  es: {
    heading: '¿En qué punto estás?',
    question: '¿Cuánto tiempo llevas con dolor de talón?',
    stages: {
      early: 'Menos de 3 meses',
      window: 'De 3 a 6 meses',
      past: 'De 6 meses a un año',
      years: 'De 1 a 5 años',
      long: 'Más de 5 años',
    },
    chartTitle: 'Porcentaje de 174 personas que seguían con síntomas, según el tiempo desde que empezó el dolor (Hansen 2018)',
    year: (y) => (y === 1 ? '1 año' : `${y} años`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}${NBSP}%`,
    chartNote:
      'Un grupo de casos difíciles: el 93\u00A0% había recibido una inyección de cortisona. Quienes seguían con síntomas al final del seguimiento tenían de media un dolor leve, de 2 a 3 sobre 10 al caminar.',
    latt: 'Cerca del 90\u00A0% de las personas mejora con métodos sin cirugía, casi siempre en un plazo de tres a seis meses (revisión de Latt 2020).',
    text: {
      early: [
        'Estás al principio. La revisión de 2020 dice que cerca del 90\u00A0% de las personas mejora con métodos sin cirugía, casi siempre en un plazo de tres a seis meses (Latt 2020).',
        'No esperes grandes cambios en las primeras semanas. En el ensayo de Rathleff, la diferencia clara entre los grupos de ejercicio apareció a los tres meses (Rathleff 2015). El dato que hay que mirar es tu dolor de la mañana, mes contra mes.',
      ],
      window: [
        'Estás en el plazo que menciona la revisión de 2020: cerca del 90\u00A0% de las personas mejora con métodos sin cirugía, casi siempre en un plazo de tres a seis meses (Latt 2020).',
        'Si tu dolor de la mañana es más bajo que hace un mes, esa tendencia es el avance. Si sigue igual o va a peor, mira más abajo las secciones sobre qué hacer.',
      ],
      past: [
        'Ya pasaste el plazo de tres a seis meses de la revisión de 2020. La guía de 2023 sugiere considerar otras opciones cuando varios meses de estiramientos, fortalecimiento y cambios de calzado no han ayudado lo suficiente. Es un buen momento para ir con un profesional y confirmar el diagnóstico.',
        'Mejorar más despacio es frecuente. En la cohorte de Hansen, el 80,5\u00A0% seguía con síntomas al año, y quienes dejaron de tenerlos los habían tenido unos 725\u00A0días de media (Hansen 2018).',
      ],
      years: [
        'En la cohorte de Hansen, el porcentaje de personas con síntomas bajó del 80,5\u00A0% al año al 50,0\u00A0% a los cinco años (Hansen 2018). Mejorar después del primer año fue frecuente.',
        'Si todavía no has ido con un profesional, ahora es un buen momento para confirmar el diagnóstico y repasar las opciones de la tabla de abajo. En esa cohorte, las mujeres y las personas con dolor en los dos talones mejoraron más despacio.',
      ],
      long: [
        'En la cohorte de Hansen, el porcentaje de personas con síntomas pasó del 50,0\u00A0% a los cinco años al 45,6\u00A0% a los diez y al 44,0\u00A0% a los quince (Hansen 2018). Algunas personas siguieron quedándose sin síntomas, pero más despacio.',
        'Un dolor tan largo merece una visita a un profesional para confirmar el diagnóstico, sobre todo si te duelen los dos talones o tienes otras articulaciones rígidas o hinchadas.',
      ],
    },
    notForecast: 'Son datos de grupos de personas en estudios, no un pronóstico para ti.',
    cta: 'Walkito te pide una puntuación del dolor de la mañana antes de cada sesión, para que veas tu propia tendencia mes a mes.',
  },
  ru: {
    heading: 'Где вы сейчас на этой шкале?',
    question: 'Как давно у вас болит пятка?',
    stages: {
      early: 'Меньше 3 месяцев',
      window: 'От 3 до 6 месяцев',
      past: 'От полугода до года',
      years: 'От 1 года до 5 лет',
      long: 'Больше 5 лет',
    },
    chartTitle: 'Доля из 174 человек, у которых ещё были симптомы, по времени с начала боли (Hansen 2018)',
    year: (y) => (y === 1 ? '1 год' : y === 5 || y === 10 || y === 15 ? `${y} лет` : `${y} года`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}${NBSP}%`,
    chartNote:
      'Это группа сложных случаев: 93\u00A0% получали инъекцию кортикостероида. У тех, у кого симптомы сохранились к концу наблюдения, боль была в среднем слабой, от 2 до 3 из 10 при ходьбе.',
    latt: 'Примерно у 90\u00A0% людей состояние улучшается без операции, обычно в срок от трёх до шести месяцев (обзор Latt 2020).',
    text: {
      early: [
        'Вы в самом начале. Обзор 2020\u00A0года сообщает, что примерно у 90\u00A0% людей состояние улучшается без операции, обычно в срок от трёх до шести месяцев (Latt 2020).',
        'В первые недели больших перемен ждать не стоит. В исследовании Rathleff заметная разница между группами упражнений появилась через три месяца (Rathleff 2015). Главное, за чем стоит следить, это утренняя боль: сравнивайте месяц с месяцем.',
      ],
      window: [
        'Вы как раз в том промежутке, который называет обзор 2020\u00A0года: примерно у 90\u00A0% людей состояние улучшается без операции, обычно в срок от трёх до шести месяцев (Latt 2020).',
        'Если утренняя боль сейчас слабее, чем месяц назад, эта динамика и есть прогресс. Если она не меняется или усиливается, ниже есть разделы о том, что делать дальше.',
      ],
      past: [
        'Вы уже за пределами срока от трёх до шести месяцев из обзора 2020\u00A0года. Рекомендации 2023\u00A0года предлагают рассмотреть другие варианты, если несколько месяцев растяжки, укрепления и смены обуви помогли недостаточно. Сейчас разумно сходить к врачу и проверить диагноз.',
        'Медленное восстановление встречается часто. В когорте Hansen через год симптомы сохранялись у 80,5\u00A0%, а у тех, кто от них избавился, они длились в среднем около 725\u00A0дней (Hansen 2018).',
      ],
      years: [
        'В когорте Hansen доля людей с симптомами снизилась с 80,5\u00A0% через год до 50,0\u00A0% через пять лет (Hansen 2018). Улучшение после первого года было обычным делом.',
        'Если вы ещё не были у врача, сейчас хорошее время проверить диагноз и обсудить варианты из таблицы ниже. В этой когорте женщины и люди с болью в обеих пятках восстанавливались медленнее.',
      ],
      long: [
        'В когорте Hansen доля людей с симптомами снизилась с 50,0\u00A0% через пять лет до 45,6\u00A0% через десять и 44,0\u00A0% через пятнадцать лет (Hansen 2018). Часть людей всё ещё избавлялась от симптомов, но медленнее.',
        'Если боль длится так долго, стоит показаться врачу и подтвердить диагноз, особенно если болят обе пятки или другие суставы скованы или опухают.',
      ],
    },
    notForecast: 'Это данные о группах людей в исследованиях, а не прогноз для вас.',
    cta: 'Walkito спрашивает оценку утренней боли перед каждой тренировкой, чтобы вы видели свою динамику от месяца к месяцу.',
  },
  de: {
    heading: 'Wo stehst du auf dem Zeitstrahl?',
    question: 'Wie lange hast du schon Fersenschmerzen?',
    stages: {
      early: 'Unter 3\u00A0Monaten',
      window: '3 bis 6\u00A0Monate',
      past: '6\u00A0Monate bis 1\u00A0Jahr',
      years: '1 bis 5\u00A0Jahre',
      long: 'Über 5\u00A0Jahre',
    },
    chartTitle: 'Anteil von 174\u00A0Menschen, die noch Beschwerden hatten, nach Zeit seit Beginn der Schmerzen (Hansen 2018)',
    year: (y) => (y === 1 ? '1\u00A0Jahr' : `${y}\u00A0Jahre`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}${NBSP}%`,
    chartNote:
      'Eine Gruppe schwieriger Fälle: 93\u00A0% hatten eine Kortisonspritze bekommen. Wer bei der Nachuntersuchung noch Beschwerden hatte, berichtete im Schnitt von leichten Schmerzen beim Gehen, etwa 2 bis 3 von 10.',
    latt: 'Etwa 90\u00A0% der Menschen geht es mit konservativer Behandlung besser, meist innerhalb von drei bis sechs Monaten (Übersichtsarbeit von Latt 2020).',
    text: {
      early: [
        'Du bist noch am Anfang. Laut der Übersichtsarbeit von 2020 geht es etwa 90\u00A0% der Menschen mit konservativer Behandlung besser, meist innerhalb von drei bis sechs Monaten (Latt 2020).',
        'Erwarte in den ersten Wochen keine großen Veränderungen. In der Studie von Rathleff zeigte sich der deutliche Unterschied zwischen den Übungsgruppen nach drei Monaten (Rathleff 2015). Die Zahl, auf die du achten solltest, ist dein Morgenschmerz, Monat für Monat.',
      ],
      window: [
        'Du bist in dem Zeitraum, den die Übersichtsarbeit von 2020 nennt: Etwa 90\u00A0% der Menschen geht es mit konservativer Behandlung besser, meist innerhalb von drei bis sechs Monaten (Latt 2020).',
        'Wenn dein Morgenschmerz niedriger ist als vor einem Monat, ist genau dieser Verlauf dein Fortschritt. Bleibt er gleich oder wird er stärker, findest du weiter unten, was du als Nächstes tun kannst.',
      ],
      past: [
        'Die drei bis sechs Monate aus der Übersichtsarbeit von 2020 sind vorbei. Die Leitlinie von 2023 empfiehlt, andere Möglichkeiten zu prüfen, wenn mehrere Monate Dehnen, Kräftigen und andere Schuhe nicht genug geholfen haben. Jetzt ist ein guter Zeitpunkt, die Diagnose ärztlich abklären zu lassen.',
        'Eine langsamere Erholung ist häufig. In der Kohorte von Hansen hatten nach einem Jahr noch 80,5\u00A0% Beschwerden, und wer beschwerdefrei wurde, hatte die Beschwerden im Schnitt etwa 725\u00A0Tage lang (Hansen 2018).',
      ],
      years: [
        'In der Kohorte von Hansen sank der Anteil mit Beschwerden von 80,5\u00A0% nach einem Jahr auf 50,0\u00A0% nach fünf Jahren (Hansen 2018). Eine Besserung nach dem ersten Jahr war häufig.',
        'Wenn du noch nicht in ärztlicher Behandlung warst, ist jetzt ein guter Zeitpunkt, die Diagnose abklären zu lassen und die Möglichkeiten in der Tabelle unten durchzugehen. In dieser Kohorte erholten sich Frauen und Menschen mit Schmerzen in beiden Fersen langsamer.',
      ],
      long: [
        'In der Kohorte von Hansen ging der Anteil mit Beschwerden von 50,0\u00A0% nach fünf Jahren auf 45,6\u00A0% nach zehn und 44,0\u00A0% nach fünfzehn Jahren zurück (Hansen 2018). Manche wurden noch beschwerdefrei, nur langsamer.',
        'Schmerzen, die so lange anhalten, solltest du ärztlich abklären lassen, um die Diagnose zu bestätigen, vor allem wenn beide Fersen schmerzen oder andere Gelenke steif oder geschwollen sind.',
      ],
    },
    notForecast: 'Das sind Zahlen für Gruppen von Menschen in Studien, keine Vorhersage für dich.',
    cta: 'Walkito fragt vor jeder Einheit nach deinem Morgenschmerz, damit du deinen eigenen Verlauf von Monat zu Monat siehst.',
  },
  fr: {
    heading: 'Où en êtes-vous\u00A0?',
    question: 'Depuis combien de temps avez-vous mal au talon\u00A0?',
    stages: {
      early: 'Moins de 3\u00A0mois',
      window: '3 à 6\u00A0mois',
      past: '6\u00A0mois à 1\u00A0an',
      years: '1 à 5\u00A0ans',
      long: 'Plus de 5\u00A0ans',
    },
    chartTitle: 'Part des 174\u00A0personnes qui avaient encore des symptômes, selon le temps écoulé depuis le début de la douleur (Hansen 2018)',
    year: (y) => (y === 1 ? '1\u00A0an' : `${y}\u00A0ans`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}${NBSP}%`,
    chartNote:
      'Un groupe de cas difficiles\u00A0: 93\u00A0% avaient reçu une infiltration de corticoïdes. Ceux qui avaient encore des symptômes au suivi décrivaient en moyenne une douleur légère, environ 2 à 3 sur 10 à la marche.',
    latt: 'Environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux, le plus souvent en trois à six mois (revue de Latt 2020).',
    text: {
      early: [
        'Vous êtes au début. La revue de 2020 indique qu’environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux, le plus souvent en trois à six mois (Latt 2020).',
        'N’attendez pas de grand changement les premières semaines. Dans l’essai de Rathleff, la nette différence entre les groupes d’exercices est apparue à trois mois (Rathleff 2015). Le chiffre à suivre est votre douleur du matin, d’un mois sur l’autre.',
      ],
      window: [
        'Vous êtes dans la période que cite la revue de 2020\u00A0: environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux, le plus souvent en trois à six mois (Latt 2020).',
        'Si votre douleur du matin est plus basse qu’il y a un mois, cette tendance est le vrai progrès. Si elle stagne ou augmente, consultez les sections ci-dessous pour la suite.',
      ],
      past: [
        'Vous avez dépassé la période de trois à six mois de la revue de 2020. La recommandation de 2023 conseille d’envisager d’autres options quand plusieurs mois d’étirements, de renforcement et de changement de chaussures n’ont pas assez aidé. C’est un bon moment pour consulter un médecin et vérifier le diagnostic.',
        'Une récupération plus lente est fréquente. Dans la cohorte de Hansen, 80,5\u00A0% avaient encore des symptômes à un an, et ceux qui en sont sortis les avaient eus en moyenne environ 725\u00A0jours (Hansen 2018).',
      ],
      years: [
        'Dans la cohorte de Hansen, la part des personnes encore gênées est passée de 80,5\u00A0% à un an à 50,0\u00A0% à cinq ans (Hansen 2018). Beaucoup se sont améliorées après la première année.',
        'Si vous n’avez pas encore consulté, c’est un bon moment pour vérifier le diagnostic et passer en revue les options du tableau ci-dessous. Dans cette cohorte, les femmes et les personnes qui avaient mal aux deux talons récupéraient plus lentement.',
      ],
      long: [
        'Dans la cohorte de Hansen, la part des personnes encore gênées est passée de 50,0\u00A0% à cinq ans à 45,6\u00A0% à dix ans et 44,0\u00A0% à quinze ans (Hansen 2018). Certaines ont fini par ne plus avoir de symptômes, mais plus lentement.',
        'Une douleur aussi longue mérite une consultation pour confirmer le diagnostic, surtout si les deux talons font mal ou si d’autres articulations sont raides ou gonflées.',
      ],
    },
    notForecast: 'Ce sont des chiffres pour des groupes de personnes étudiées, pas une prévision pour vous.',
    cta: 'Walkito vous demande une note de douleur du matin avant chaque séance, pour que vous voyiez votre propre évolution d’un mois sur l’autre.',
  },
  it: {
    heading: 'A che punto sei?',
    question: 'Da quanto tempo hai dolore al tallone?',
    stages: {
      early: 'Meno di 3\u00A0mesi',
      window: 'Da 3 a 6\u00A0mesi',
      past: 'Da 6\u00A0mesi a 1\u00A0anno',
      years: 'Da 1 a 5\u00A0anni',
      long: 'Più di 5\u00A0anni',
    },
    chartTitle: 'Quota delle 174\u00A0persone che avevano ancora sintomi, in base al tempo dall’inizio del dolore (Hansen 2018)',
    year: (y) => (y === 1 ? '1\u00A0anno' : `${y}\u00A0anni`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}%`,
    chartNote:
      'Un gruppo di casi difficili: il 93% aveva ricevuto un’infiltrazione di cortisone. Chi aveva ancora sintomi al controllo riferiva in media un dolore lieve, circa 2 o 3 su 10 camminando.',
    latt: 'Circa il 90% delle persone migliora con cure non chirurgiche, di solito nel giro di tre-sei mesi (revisione di Latt 2020).',
    text: {
      early: [
        'Sei all’inizio. La revisione del 2020 riporta che circa il 90% delle persone migliora con cure non chirurgiche, di solito nel giro di tre-sei mesi (Latt 2020).',
        'Non aspettarti grandi cambiamenti nelle prime settimane. Nello studio di Rathleff la differenza netta tra i gruppi di esercizi si è vista a tre mesi (Rathleff 2015). Il dato da seguire è il dolore del mattino, mese dopo mese.',
      ],
      window: [
        'Sei nel periodo indicato dalla revisione del 2020: circa il 90% delle persone migliora con cure non chirurgiche, di solito nel giro di tre-sei mesi (Latt 2020).',
        'Se il dolore del mattino è più basso di un mese fa, è quella tendenza il vero progresso. Se resta uguale o peggiora, più sotto trovi cosa fare dopo.',
      ],
      past: [
        'Hai superato i tre-sei mesi della revisione del 2020. La linea guida del 2023 suggerisce di valutare altre opzioni quando diversi mesi di stretching, rinforzo e cambio di scarpe non hanno aiutato abbastanza. È un buon momento per farti vedere da un medico e verificare la diagnosi.',
        'Un recupero più lento è frequente. Nella coorte di Hansen l’80,5% aveva ancora sintomi a un anno, e chi ne è uscito li aveva avuti in media per circa 725\u00A0giorni (Hansen 2018).',
      ],
      years: [
        'Nella coorte di Hansen la quota di persone con sintomi è scesa dall’80,5% a un anno al 50,0% a cinque anni (Hansen 2018). Migliorare dopo il primo anno era frequente.',
        'Se non hai ancora fatto una visita, ora è un buon momento per verificare la diagnosi e valutare le opzioni nella tabella qui sotto. In quella coorte le donne e chi aveva dolore a entrambi i talloni miglioravano più lentamente.',
      ],
      long: [
        'Nella coorte di Hansen la quota di persone con sintomi è passata dal 50,0% a cinque anni al 45,6% a dieci e al 44,0% a quindici (Hansen 2018). Alcune persone si sono comunque liberate dei sintomi, ma più lentamente.',
        'Un dolore così lungo merita una visita medica per confermare la diagnosi, soprattutto se fanno male entrambi i talloni o se altre articolazioni sono rigide o gonfie.',
      ],
    },
    notForecast: 'Sono dati su gruppi di persone negli studi, non una previsione per te.',
    cta: 'Walkito ti chiede un punteggio del dolore del mattino prima di ogni sessione, così vedi il tuo andamento mese dopo mese.',
  },
  pt: {
    heading: 'Em que ponto você está?',
    question: 'Há quanto tempo você tem dor no calcanhar?',
    stages: {
      early: 'Menos de 3\u00A0meses',
      window: 'De 3 a 6\u00A0meses',
      past: 'De 6\u00A0meses a 1\u00A0ano',
      years: 'De 1 a 5\u00A0anos',
      long: 'Mais de 5\u00A0anos',
    },
    chartTitle: 'Parte das 174\u00A0pessoas que ainda tinham sintomas, pelo tempo desde o início da dor (Hansen 2018)',
    year: (y) => (y === 1 ? '1\u00A0ano' : `${y}\u00A0anos`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}%`,
    chartNote:
      'Um grupo de casos difíceis: 93% tinham recebido uma injeção de corticoide. Quem ainda tinha sintomas no acompanhamento relatava em média dor leve, cerca de 2 a 3 em 10 ao caminhar.',
    latt: 'Cerca de 90% das pessoas melhoram com tratamento sem cirurgia, em geral em três a seis meses (revisão de Latt 2020).',
    text: {
      early: [
        'Você está no começo. A revisão de 2020 relata que cerca de 90% das pessoas melhoram com tratamento sem cirurgia, em geral em três a seis meses (Latt 2020).',
        'Não espere grandes mudanças nas primeiras semanas. No estudo de Rathleff, a diferença clara entre os grupos de exercício apareceu aos três meses (Rathleff 2015). O número a acompanhar é a sua dor da manhã, mês a mês.',
      ],
      window: [
        'Você está no período que a revisão de 2020 aponta: cerca de 90% das pessoas melhoram com tratamento sem cirurgia, em geral em três a seis meses (Latt 2020).',
        'Se a dor da manhã estiver menor do que há um mês, essa tendência é o avanço. Se estiver igual ou piorando, veja mais abaixo o que fazer em seguida.',
      ],
      past: [
        'Você já passou dos três a seis meses da revisão de 2020. A diretriz de 2023 sugere considerar outras opções quando vários meses de alongamento, fortalecimento e troca de calçado não ajudaram o suficiente. É um bom momento para consultar um médico e confirmar o diagnóstico.',
        'Melhorar mais devagar é comum. Na coorte de Hansen, 80,5% ainda tinham sintomas com um ano, e quem ficou sem sintomas conviveu com eles por cerca de 725\u00A0dias, em média (Hansen 2018).',
      ],
      years: [
        'Na coorte de Hansen, a parte das pessoas com sintomas caiu de 80,5% com um ano para 50,0% com cinco anos (Hansen 2018). Melhorar depois do primeiro ano foi comum.',
        'Se você ainda não consultou um médico, agora é um bom momento para confirmar o diagnóstico e ver as opções da tabela abaixo. Nessa coorte, as mulheres e as pessoas com dor nos dois calcanhares melhoraram mais devagar.',
      ],
      long: [
        'Na coorte de Hansen, a parte das pessoas com sintomas passou de 50,0% com cinco anos para 45,6% com dez e 44,0% com quinze (Hansen 2018). Algumas ainda ficaram sem sintomas, mas mais devagar.',
        'Uma dor tão longa merece uma consulta para confirmar o diagnóstico, principalmente se os dois calcanhares doem ou se outras articulações estão rígidas ou inchadas.',
      ],
    },
    notForecast: 'São números de grupos de pessoas em estudos, não uma previsão para você.',
    cta: 'O Walkito pede uma nota da dor da manhã antes de cada sessão, para você ver a sua própria evolução mês a mês.',
  },
};
