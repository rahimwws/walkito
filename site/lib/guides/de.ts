import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Translated from `en.ts` (2026-10-08), written around the German queries:
 * «Plattfuß-Übungen», «Senkfuß», «Fußgewölbe», «Plantarfasziitis Übungen»,
 * «Fersenschmerzen», «Fersensporn». Informal «du», like the German chrome in
 * `lib/i18n.ts`. Figures, doses, grades and qualifiers are identical to
 * `en.ts`. Numbers and units are joined with a non-breaking space, decimals
 * use a comma. The app has no German interface yet, so no app label is
 * quoted in German.
 *
 * Pages that exist only in English keep their English path and say
 * «(auf Englisch)».
 *
 * The plan has no fixed length, so nothing here describes it in weeks. Every
 * number about the plan is read from `PROGRAM`.
 */

/** `3, 5 oder 7`: the plan's options as a German list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} oder ${options[options.length - 1]}`;
}

const DAYS = either(PROGRAM.daysPerWeek);
const MINUTES = either(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, as `en.ts` and the About pages. Calcaneal
 * stress fracture is one of the causes of heel pain the 2023 guideline names
 * alongside plantar fasciitis, which is why the site spells out its signs.
 */
const RED_FLAGS = {
  h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
  bullets: [
    'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
    'du den Fuß nicht belasten kannst oder hinkst',
    'Taubheit, Kribbeln, Brennen, eine Schwellung oder Wärme dazukommen',
    'die Ferse gerötet ist oder du Fieber hast oder dich krank fühlst',
    'der Schmerz dich nachts weckt',
    'er stechend ist oder schlimmer wird, obwohl du die Belastung reduziert hast',
    'es wehtut, wenn du die Seiten der Ferse zusammendrückst, oder der Schmerz beim Laufen zunimmt, nachdem du deine Kilometer gesteigert hast; beides kann auf einen Ermüdungsbruch hindeuten',
    'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    'beide Fersen wehtun und andere Gelenke geschwollen oder steif sind',
    'es nach mehreren Wochen Übungen und weniger Belastung nicht besser geworden ist',
    'sich ein Fußgewölbe im Erwachsenenalter plötzlich abgeflacht hat',
  ],
} as const;

export const FLAT_FEET_DE: Guide = {
  lang: 'de',
  page: 'flatFeet',
  mainSource: CITE.brijwasi,
  published: '2026-10-08',
  updated: '2026-10-17',
  title: 'Plattfuß-Übungen: Senkfuß und Schmerzen im Fußgewölbe',
  description:
    'Übungen bei flexiblem Plattfuß und Senkfuß: Dosierung, wie oft, was du spüren solltest, was Studien zeigen und was bei Schmerzen im Fußgewölbe gilt.',
  h1: 'Plattfuß-Übungen bei Senkfuß und Schmerzen im Fußgewölbe',
  lede: 'Im Stehen scheinen deine Füße nach innen zu kippen, und das Fußgewölbe sinkt Richtung Boden. Abends fühlen sich deine Füße müde an, und das Gewölbe schmerzt. Vielleicht hat man dir gesagt, Plattfüße seien eben so gebaut und nicht der Rede wert. Trotzdem etwas tun zu wollen, ist verständlich, und es gibt echte Forschung zum Training des Fußgewölbes. Für flexible [Plattfüße](/de/plattfuss/) gibt es Studiendaten zu einem Programm aus Übungen zum Aufbau des Fußgewölbes (Kurzer-Fuß-Übungen), Sprunggelenkstraining, Hüftkräftigung und Dehnen: In einer Studie mit 52\u00A0Personen veränderten sechs Wochen dieser Übungen die Form des Fußgewölbes stärker als in einer Kontrollgruppe.',
  intro: [
    'Fang mit einem Check an, ob dein Plattfuß flexibel ist: Dann ist dein Fußgewölbe zu sehen, solange du nicht stehst, und sinkt erst ab, wenn du dich hinstellst. Diese Studie und die Übungen unten beziehen sich auf flexible Plattfüße.',
    'Für Übungen zum Aufbau des Fußgewölbes allein ist die Studienlage dünner. Eine Übersichtsarbeit von 2024 fand insgesamt keine klare Veränderung, und eine Veränderung bei einem Gewölbemaß nur in Programmen, die länger als sechs Wochen liefen. Beide haben die Form des Gewölbes gemessen, nicht Schmerzen. Wenn dein Schmerz nahe der Ferse sitzt, ist die Forschung zu Fersenschmerzen der bessere Wegweiser.',
  ],
  takeaways: [
    'Die randomisierte Studie auf dieser Seite wurde mit flexiblen Plattfüßen gemacht, bei denen das Gewölbe zurückkommt, wenn der Fuß nicht auf dem Boden steht (Brijwasi und Borkar, 2023).',
    'In dieser Studie mit 52\u00A0Personen veränderten sechs Wochen Gewölbe-, Sprunggelenk-, Hüft- und Dehnübungen die Form des Gewölbes stärker als in der Kontrollgruppe (Brijwasi und Borkar, 2023).',
    'Eine Übersichtsarbeit von 2024 zum Kurzer-Fuß-Training fand insgesamt keine klare Veränderung, und eine Verbesserung bei einem Gewölbemaß nur in Programmen über sechs Wochen (Cheng und Kollegen, 2024).',
    'Ein starrer Plattfuß, der auch ohne Bodenkontakt flach bleibt, ist strukturell, und Übungen werden seine Form nicht verändern.',
    'Diese Studien haben die Form des Gewölbes gemessen, nicht Schmerzen. Bei Fersenschmerzen vergibt die Leitlinie von 2023 für das Dehnen von Plantarfaszie und Wade den höchsten Empfehlungsgrad A und für Krafttraining Grad B.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Woran erkennst du, ob ein Plattfuß flexibel oder starr ist?',
      figure: { id: 'arches', caption: 'Dieselben Fußknochen bei Plattfuß, normalem und hohem Gewölbe, von der Innenseite gesehen.', alt: 'Drei Füße von der Innenseite auf ebenem Boden: ein Plattfuß, dessen Gewölbe auf dem Boden aufliegt, ein normales Gewölbe mit kleinem Spalt darunter und ein hohes Gewölbe mit großem Spalt unter der Fußmitte.' },
      paragraphs: [
        'Ob dein Plattfuß flexibel oder starr ist, zeigt ein Check, der nur ein paar Sekunden dauert. Das ist wichtig, weil die Studie auf dieser Seite mit flexiblen Plattfüßen gemacht wurde, und Übungen die Form eines starren Plattfußes nicht verändern. Die Übersichtsarbeit von 2024 hat Studien zu Plattfüßen allgemein zusammengefasst. Walkito prüft deinen Fußtyp nicht, diesen Check machst also du:',
      ],
      bullets: [
        'Stell dich barfuß hin und schau dir die Innenseite deines Fußes an. Bei einem Plattfuß liegt das Gewölbe tief oder berührt den Boden.',
        'Heb den Fuß vom Boden ab oder stell dich auf die Zehenspitzen und schau noch einmal hin.',
        'Kommt das Gewölbe zurück, ist der Plattfuß **flexibel**. Die Übungen unten sind für diese Art.',
        'Bleibt das Gewölbe auch ohne Bodenkontakt flach, ist der Fuß **starr**. Das ist ein strukturelles Problem, das Übungen nicht ändern. Lass das Ziel „Gewölbe halten“ weg und lass den Fuß ärztlich abklären, bevor du ein Programm anfängst.',
        '„Senkfuß“ ist die mildere Form des Plattfußes: Das Gewölbe ist abgesenkt, aber nicht ganz flach. Kippt dazu die Ferse nach innen, spricht man vom Knick-Senkfuß. Wenn sich ein Gewölbe aber **plötzlich**, auf einer Seite, im Erwachsenenalter abgeflacht hat, lass das ärztlich abklären, bevor du es trainierst, egal was der Check zeigt.',
      ],
    },
    {
      h2: 'Welche Übungen helfen bei Plattfuß, und wie viel solltest du machen?',
      paragraphs: [
        'Die Übungen bei Plattfuß in Walkito beginnen mit [Handtuchgreifen](/de/uebungen/handtuchgreifen/) und Großzehenheben und steigern sich dann über drei Varianten des kurzen Fußes. Zehenspreizen, Einwärtsdrehen mit Band, Einbeinstand, Hüftabduktion und Wadendehnungen kommen dazu. Das sind die Startdosen von Walkito, keine Verordnung. Mach die Übungen barfuß. [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
        'Der kurze Fuß ist der Kern der Gewölbearbeit. Du verkürzt den Fuß, indem du den Fußballen Richtung Ferse ziehst, sodass sich das Gewölbe hebt, ohne die Zehen einzukrallen. Kurzer-Fuß-Training, Hüftkräftigung und Dehnen sind das, was die Studie getestet hat. Handtuchgreifen, Großzehenheben, Zehenspreizen, Einwärtsdrehen mit Band und Einbeinstand hat Walkito selbst ergänzt.',
        'Du machst immer nur eine Gewölbeübung, die auf deinem Level. Walkito stuft dich hoch, sobald sich die letzten zwei Einheiten damit leicht angefühlt haben. Solange das Gewölbe dein Ziel ist, steckt in jeder Einheit eine Gewölbeübung, und die anderen wechseln sich ab.',
        'Für manche Übungen brauchst du ein Handtuch oder ein Widerstandsband. Walkito fragt, was du hast, und lässt alles weg, wofür dir etwas fehlt. Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf. An diesem Punkt beendet Walkito eine Einheit.',
      ],
      table: {
        head: ['Übung', 'Dosis', 'Wie oft', 'Was du spüren solltest', 'Aufhören, wenn'],
        rows: [
          ['Handtuchgreifen', '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß', 'Jede Einheit, solange es dein Level ist', 'Die kleinen Muskeln unter dem Gewölbe arbeiten', 'Der Schmerz 6/10 erreicht'],
          ['Großzehenheben', '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß', 'Jede Einheit, solange es dein Level ist', 'Der große Zeh bewegt sich allein', 'Der Schmerz 6/10 erreicht'],
          ['Kurzer Fuß im Sitzen', '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß', 'Jede Einheit, solange es dein Level ist', 'Das Gewölbe hebt sich, die Zehen bleiben locker', 'Der Schmerz 6/10 erreicht'],
          ['Kurzer Fuß im Stehen', '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, beide Füße', 'Jede Einheit, solange es dein Level ist', 'Das Gewölbe arbeitet, während es dein Gewicht trägt', 'Der Schmerz 6/10 erreicht'],
          ['Kurzer Fuß auf einem Bein', '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß', 'Jede Einheit, solange es dein Level ist', 'Mehr Arbeit im Gewölbe, der große Zeh drückt nach unten', 'Der Schmerz 6/10 erreicht'],
          ['Zehenspreizen', '3\u00A0Sätze à 10, jeder Fuß', 'Krafttage, im Wechsel mit dem Einwärtsdrehen mit Band', 'Anstrengung in den kleinen Fußmuskeln', 'Der Schmerz 6/10 erreicht'],
          ['Einwärtsdrehen mit Band', '3\u00A0Sätze à 12, jeder Fuß', 'Krafttage, nach sechs Einheiten kurzer Fuß im Stehen', 'Arbeit an der Innenseite von Fuß und Sprunggelenk', 'Der Schmerz 6/10 erreicht'],
          ['Einbeinstand', '3-mal 20\u00A0Sekunden halten, jedes Bein', 'Gleichgewichtstage', 'Fuß und Sprunggelenk machen kleine Korrekturen', 'Der Schmerz 6/10 erreicht'],
          ['Hüftabduktion', '3\u00A0Sätze à 10, jedes Bein, im Stehen, mit Band', 'Krafttage, wenn das Ziel links und rechts in deinem Plan ist', 'Arbeit an der Außenseite der Hüfte', 'Der Schmerz 6/10 erreicht'],
          ['Waden- und Soleusdehnung', '2-mal 30\u00A0Sekunden pro Dehnung, jedes Bein', 'Die meisten Einheiten, im Wechsel mit den anderen Dehnungen', 'Eine Dehnung in der Wade, dann tiefer, nahe der Ferse', 'Der Schmerz 6/10 erreicht'],
        ],
      },
      exercises: [
        {
          name: 'Handtuchgreifen',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Die kleinen Muskeln unter dem Gewölbe arbeiten',
          how: 'Setz dich hin, ein Handtuch liegt flach unter deinem Fuß. Zieh das Handtuch mit den Zehen zu dir, die Ferse bleibt unten. Das Handtuchgreifen weckt die kleinen Muskeln unter dem Gewölbe.',
          image: 'Übung: Handtuchgreifen',
          media: 'towel_scrunch',
          caption: 'Handtuchgreifen: Zieh das Handtuch mit den Zehen heran, die Ferse bleibt unten',
          alt: 'Eine sitzende Figur zieht mit den Zehen eines Fußes ein Handtuch heran',
        },
        {
          name: 'Großzehenheben',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Der große Zeh bewegt sich allein',
          how: 'Setz dich hin, die Füße stehen flach. Heb nur den großen Zeh an und halte. Die anderen vier Zehen bleiben flach am Boden. So lernt der große Zeh, sich allein zu bewegen, und das ist der erste Schalter für das Gewölbe.',
          image: 'Übung: Großzehenheben',
          media: 'big_toe_lift',
          caption: 'Großzehenheben: Heb nur den großen Zeh, die anderen vier bleiben flach',
          alt: 'Ein Fuß auf dem Boden hebt nur den großen Zeh, das Gewölbe ist hervorgehoben',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat. Allein hat das Kurzer-Fuß-Training schwächere Ergebnisse.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Das Gewölbe hebt sich',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt, und halte. Die Außenkante des Fußes bleibt am Boden, und das Gewölbe hebt sich so weit, dass darunter ein kleiner Hohlraum entsteht. Krall die Zehen nicht ein. Das Einkrallen ist der häufigste Fehler bei dieser Übung.',
          image: 'Übung: kurzer Fuß im Sitzen',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß im Sitzen: Zieh den Fußballen zur Ferse, sodass sich das Gewölbe hebt',
          alt: 'Ein Bein im Sitzen, der Fuß flach am Boden, die Gewölbemuskeln hervorgehoben, während sich das Gewölbe hebt',
        },
        {
          name: 'Kurzer Fuß im Stehen',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat. Allein hat das Kurzer-Fuß-Training schwächere Ergebnisse.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, beide Füße',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Das Gewölbe arbeitet unter deinem Gewicht',
          how: 'Stell dich mit dem Gewicht auf beide Füße und mach dieselbe Bewegung. Die Zehen bleiben flach und lang. Nur das Gewölbe hebt sich. Es ist derselbe Muskel wie im Sitzen, nur trägt er jetzt dein Gewicht.',
          image: 'Übung: kurzer Fuß im Stehen',
          media: 'short_foot_double',
          caption: 'Kurzer Fuß im Stehen: Zehen flach und lang, nur das Gewölbe hebt sich',
          alt: 'Zwei stehende Beine, Gewölbe und Wade eines Beins hervorgehoben, während sich das Gewölbe hebt',
        },
        {
          name: 'Kurzer Fuß auf einem Bein',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat. Allein hat das Kurzer-Fuß-Training schwächere Ergebnisse.' },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Mehr Arbeit im Gewölbe',
          how: 'Stell dich auf einen Fuß und heb das Gewölbe. Lass den großen Zeh unten. Hebt er sich, schummelt das Gewölbe. Wenn du einen Fuß nach dem anderen trainierst, zeigt sich die schwächere Seite.',
          image: 'Übung: kurzer Fuß auf einem Bein',
          media: 'short_foot_single',
          caption: 'Kurzer Fuß auf einem Bein: Heb das Gewölbe, der große Zeh bleibt unten',
          alt: 'Ein Fuß steht auf dem Boden, das Gewölbe ist hervorgehoben, während es sich hebt',
        },
        {
          name: 'Zehenspreizen',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3\u00A0Sätze à 10, jeder Fuß',
          often: 'Krafttage',
          feel: 'Anstrengung in den kleinen Fußmuskeln',
          how: 'Spreiz deine Zehen, so weit es geht, und halte. Zehen, die sich spreizen können, teilen sich die Last mit dem Gewölbe. Sie anzuheben ist nicht das Ziel.',
          image: 'Übung: Zehenspreizen',
          media: 'toe_spread',
          caption: 'Zehenspreizen: Spreiz die Zehen, so weit es geht, und halte',
          alt: 'Ein Fuß von vorn, die kleinen Muskeln zwischen den Zehen hervorgehoben, während sie sich spreizen',
        },
        {
          name: 'Einwärtsdrehen mit Band',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3\u00A0Sätze à 12, jeder Fuß',
          often: 'Krafttage',
          feel: 'Arbeit an der Innenseite von Fuß und Sprunggelenk',
          how: 'Setz dich hin, ein Widerstandsband liegt um den Fuß, und dreh den Fuß gegen das Band nach innen. Beweg den Fuß, nicht das Bein. Das Knie bleibt ruhig. Walkito nimmt diese Übung erst nach sechs Einheiten kurzer Fuß im Stehen dazu, damit zuerst die eigenen Muskeln des Gewölbes drankommen.',
          image: 'Übung: Einwärtsdrehen mit Band',
          media: 'band_inversion',
          caption: 'Einwärtsdrehen mit Band: Dreh den Fuß gegen das Band nach innen, das Knie bleibt ruhig',
          alt: 'Ein Bein mit einem Widerstandsband um den Fuß dreht den Fuß nach innen, der Unterschenkel ist hervorgehoben',
        },
        {
          name: 'Einbeinstand',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3-mal 20\u00A0Sekunden halten, jedes Bein',
          often: 'Gleichgewichtstage',
          feel: 'Kleine Korrekturen in Fuß und Sprunggelenk',
          how: 'Stell dich auf einen Fuß und schau auf einen festen Punkt. Lass den Fuß wackeln. Das soll so sein, denn dieses Wackeln ist der Fuß, der das Gleichgewicht hält. Wenn nötig, berühr eine Arbeitsplatte oder Wand leicht mit den Fingerspitzen, damit du weiter Ausdauer im Sprunggelenk aufbaust, statt aufzugeben.',
          image: 'Übung: Einbeinstand',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Steh auf einem Fuß und lass ihn kleine Korrekturen machen',
          alt: 'Eine Figur balanciert auf einem Bein, die Unterschenkelmuskeln sind hervorgehoben',
        },
        {
          name: 'Hüftabduktion',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat.' },
          dose: '3\u00A0Sätze à 10, jedes Bein',
          often: 'Krafttage',
          feel: 'Arbeit an der Außenseite der Hüfte',
          how: 'Stell dich mit einem Widerstandsband hin und heb ein Bein gegen das Band zur Seite. Drück über die Ferse, nicht über die Zehen. Gibt die Hüfte nach, landet die Last auf dem Gewölbe.',
          image: 'Übung: Hüftabduktion',
          media: 'hip_abduction',
          caption: 'Hüftabduktion: Heb ein Bein gegen das Band zur Seite',
          alt: 'Eine stehende Figur mit einem Band um beide Beine hebt ein Bein zur Seite, die äußere Hüfte ist hervorgehoben',
        },
        {
          name: 'Waden- und Soleusdehnung',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat. Diese Studie hat die Form des Gewölbes gemessen, nicht Schmerzen.' },
          dose: '2-mal 30\u00A0Sekunden pro Dehnung, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der Wade, dann nahe der Ferse',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden und die Hüfte nach vorn, und du spürst die Dehnung in der Wade. Dann lass die Ferse flach am Boden und beug das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Das ist der Schollenmuskel (Musculus soleus), der tiefere Wadenmuskel.',
          image: 'Übung: Waden- und Soleusdehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: Hände an die Wand, hinteres Bein gestreckt, Ferse unten',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
      ],
    },
    {
      h2: 'Wie lange dauert es, bis Plattfuß-Übungen das Gewölbe verändern?',
      keyFact: 'In einer Studie mit 52\u00A0Personen mit flexiblen Plattfüßen verbesserten sechs Wochen Übungen zum Aufbau des Fußgewölbes (Kurzer-Fuß-Übungen), Sprunggelenk-, Hüft- und Dehnübungen den Navicular Drop um 0,4\u00A0cm und den Gewölbewinkel um 16\u00A0Grad stärker als in einer Kontrollgruppe (Brijwasi und Borkar, 2023).',
      paragraphs: [
        'In der bisherigen Forschung haben Plattfuß-Übungen das Gewölbe nach sechs Wochen oder mehr verändert, und nur bei flexiblen Plattfüßen. In einer Studie mit 52\u00A0Personen mit **flexiblen** Plattfüßen veränderte ein sechswöchiges Programm aus Kurzer-Fuß-Übungen, Sprunggelenkstraining, Hüftkräftigung und Dehnen zwei Maße der Gewölbeform stärker als in der Kontrollgruppe.',
        'Für Übungen zum Aufbau des Fußgewölbes allein ist die Studienlage dünner. Eine Übersichtsarbeit von 2024 hat Studien zum Kurzer-Fuß-Training bei Plattfüßen allgemein zusammengefasst. Insgesamt fand sie keinen klaren Unterschied zu Kontrollgruppen bei der Gewölbeform oder der Fußhaltung. Nur Programme über sechs Wochen verbesserten, wie weit das Gewölbe unter deinem Gewicht absinkt, und die Autoren sagen, dass größere Studien nötig sind. Plane also mindestens sechs Wochen ein, und länger, wenn du das Kurzer-Fuß-Training allein machst.',
        `Das ist ein Grund, warum der Plan von Walkito kein Enddatum hat. Das Gewölbeziel, das Gewölbe ${PROGRAM.goals.archHoldSeconds}\u00A0Sekunden zu halten, bleibt im Plan, bis du es erreichst, egal wie viele Wochen das dauert. Das Gewölbehalten wird alle ${PROGRAM.testEveryDays}\u00A0Tage getestet, bis du dein erstes Ziel erreichst, danach alle ${PROGRAM.testEveryDaysAfterGoal}, sodass du siehst, ob sich etwas tut. Die Studien sind auf [der Seite zur Studienlage](/science/) (auf Englisch) zusammengefasst.`,
      ],
      sourceNote:
        'Brijwasi und Borkar: Der Navicular Drop (wie weit das Kahnbein an der Innenseite des Gewölbes beim Stehen absinkt) verbesserte sich um 0,4\u00A0cm und der Gewölbewinkel um 16\u00A0Grad stärker als in der Kontrollgruppe. Cheng und Kollegen: insgesamt kein signifikanter Unterschied beim Navicular Drop oder beim Foot Posture Index; der Navicular Drop verbesserte sich signifikant nur in der Untergruppe der Programme über sechs Wochen.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Helfen Plattfuß-Übungen bei Schmerzen im Fußgewölbe?',
      paragraphs: [
        'Keine Studie auf dieser Seite zeigt, dass Plattfuß-Übungen [Schmerzen im Fußgewölbe](/de/schmerzen-im-fussgewoelbe/) lindern, weil keine davon Schmerzen gemessen hat. Die Studie und die Übersichtsarbeit haben die Form des Gewölbes gemessen. Sie zeigen, dass sich das Gewölbe trainieren lässt. Sie sind kein Beleg dafür, dass dieselben Übungen ein schmerzendes Gewölbe lindern.',
        'Schmerzen an der Ferse, und manchmal entlang des Gewölbes, können von der Plantarfaszie kommen, der kräftigen Sehnenplatte an der Fußsohle. Sitzt dein Schmerz nahe der Ferse, ist die Leitlinie von 2023 zu Fersenschmerzen der bessere Wegweiser. Bei Fersenschmerzen unter dem Fuß vergibt sie für das Dehnen von Plantarfaszie und Wade den höchsten Empfehlungsgrad, **A**, und für Krafttraining Grad **B**. Diese Übungen findest du unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
        'Walkito kann an beidem gleichzeitig arbeiten, als getrennte Ziele: schmerzfreie Morgen für den Schmerz und Gewölbehalten für das Gewölbe. Wie sich die beiden eine Woche teilen, steht auf [der Seite zum Plan](/program/) (auf Englisch).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Was passiert, wenn du das Gewölbeziel erreichst?',
      paragraphs: [
        `Wenn du das Gewölbeziel erreichst, also das Gewölbe ${PROGRAM.goals.archHoldSeconds}\u00A0Sekunden hältst, **lässt Walkito die Gewölbearbeit in geringerer Dosis im Plan.** Das Ziel geht in die Erhaltung über, und das nächste Ziel rückt nach. Das Ziel zu erreichen heißt nicht, dass die Gewölbearbeit aufhört.`,
        `Auch die Tests gehen weiter, alle ${PROGRAM.testEveryDaysAfterGoal}\u00A0Tage, sobald du dein erstes Ziel erreicht hast. Wenn das Gewölbehalten nachlässt, siehst du es an den Zahlen, statt zu raten.`,
        'Wenn dir auch die Ferse wehtut, hat die Ferse eigene Übungen und ein eigenes Ziel: siehe [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/). Fragen zur App selbst beantworten [die FAQ](/faq/) (auf Englisch).',
      ],
    },
  ],
  faq: [
    {
      q: 'Kann man mit Übungen bei Plattfüßen ein Fußgewölbe aufbauen?',
      a: 'Übungen können die Gewölbeform flexibler Plattfüße verändern, aber nicht die starrer. In einer Studie mit 52\u00A0Personen, deren Gewölbe ohne Bodenkontakt zurückkam, veränderten sechs Wochen Kurzer-Fuß-, Sprunggelenk-, Hüft- und Dehnübungen die Gewölbemaße stärker als in einer Kontrollgruppe. Ein Fuß, der auch angehoben flach bleibt, ist strukturell, und Übungen werden seine Form nicht verändern.',
    },
    {
      q: 'Wie lange dauert es, bis Plattfuß-Übungen wirken?',
      a: `Rechne mit sechs Wochen oder mehr. In einer Studie zu flexiblen Plattfüßen veränderte ein sechswöchiges Programm aus Kurzer-Fuß-, Hüft- und Dehnübungen die Gewölbemaße. Für das Kurzer-Fuß-Training allein fand eine Übersichtsarbeit von 2024 insgesamt keine klare Veränderung, und eine Verbesserung nur in Programmen über sechs Wochen. Walkito behält das Ziel, das Gewölbe ${PROGRAM.goals.archHoldSeconds}\u00A0Sekunden zu halten, bis du es erreichst.`,
    },
    {
      q: 'Was hilft bei Schmerzen unter dem Fußgewölbe?',
      a: 'Direkte Belege gibt es hier nicht, weil keine der zitierten Studien auf dieser Seite Schmerzen im Gewölbe gemessen hat. Sitzt der Schmerz nahe der Ferse und hängt mit der Plantarfaszie zusammen, vergibt die Leitlinie von 2023 zu Fersenschmerzen für das Dehnen von Plantarfaszie und Wade Empfehlungsgrad A und für Krafttraining Grad B. Die Gewölbeübungen auf dieser Seite trainieren die Gewölbeform, nicht den Schmerz. Siehe [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
    },
    {
      q: 'Können Plattfüße Rückenschmerzen verursachen?',
      a: 'Die Belege sind schwach und uneinheitlich, kein klares Ja. Die größte Studie dazu, die [Framingham Foot Study](https://doi.org/10.1093/rheumatology/ket298) mit rund 1.900 Erwachsenen, fand keinen Zusammenhang zwischen flacher Fußhaltung und [Schmerzen im unteren Rücken](/de/plattfuss-rueckenschmerzen/). Sie fand bei Frauen einen kleinen Zusammenhang zwischen einem Fuß, der beim Gehen nach innen rollt, und Schmerzen im unteren Rücken, bei Männern keinen. Plattfüße allein sind also eine schwache Erklärung für Rückenschmerzen. Wenn du beides hast, betrachte es als zwei getrennte Probleme und lass den Rücken ärztlich abklären.',
      cites: [CITE.menz],
    },
    {
      q: 'Was ist der Unterschied zwischen Senkfuß und Plattfuß?',
      a: 'Vor allem der Grad: Beim Senkfuß ist das Längsgewölbe abgesenkt, beim Plattfuß ist es weitgehend abgeflacht. Der Senkfuß ist also die mildere Form. Kippt dazu die Ferse nach innen, spricht man vom Knick-Senkfuß. Im Alltag werden die Begriffe aber oft gemischt. Die meisten Plattfüße bestehen ein Leben lang und sind flexibel, das Gewölbe kommt also zurück, wenn der Fuß nicht auf dem Boden steht. Manchmal ist aber etwas anderes gemeint: ein [erworbener Plattfuß im Erwachsenenalter](https://doi.org/10.2174/1874325001711010714), oft durch eine schwächer werdende [Tibialis-posterior-Sehne](/de/tibialis-posterior-insuffizienz/), die Sehne, die das Gewölbe hält. Er entsteht meist im Erwachsenenalter und kann Schmerzen oder eine Schwellung an der Innenseite des Sprunggelenks bringen. Wenn ein Gewölbe im Erwachsenenalter abgesunken ist, lass das ärztlich abklären, bevor du es trainierst.',
      cites: [CITE.ling],
    },
    {
      q: 'Welche Übungen helfen bei einem eingesunkenen Fußgewölbe?',
      a: 'Ein „eingesunkenes Fußgewölbe“ meint meist dasselbe wie Plattfuß oder Senkfuß. Bei einem flexiblen Gewölbe, das zurückkommt, sobald der Fuß nicht auf dem Boden steht, hat die Kurzer-Fuß-Übung die Studiendaten auf ihrer Seite: erst im Sitzen, dann im Stehen, dann auf einem Bein, zusammen mit Übungen für Hüfte und Wade. Ein starres Gewölbe, das auch angehoben flach bleibt, solltest du ärztlich abklären lassen, statt mehr zu üben.',
    },
    {
      q: 'Welche Übungen stärken das Fußgewölbe?',
      a: 'Die wichtigste ist die Kurzer-Fuß-Übung: Du hebst das Gewölbe, indem du den Fußballen Richtung Ferse ziehst, ohne die Zehen einzukrallen. Walkito beginnt sie im Sitzen, mit 3\u00A0Sätzen à 8 und 5\u00A0Sekunden Halten, dann im Stehen, dann auf einem Bein. Handtuchgreifen, Großzehenheben, Zehenspreizen und Einwärtsdrehen mit Band trainieren [die kleinen Muskeln rund um das Gewölbe](/de/fuss-kraeftigen-uebungen/). Das alles ist für flexible Plattfüße. Schritt für Schritt: [Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/).',
    },
    {
      q: 'Wie oft sollte ich Plattfuß-Übungen machen?',
      a: `Mach das Kurzer-Fuß-Training an jedem Trainingstag, solange das Gewölbe dein Ziel ist. In Walkito wählst du ${DAYS} Trainingstage pro Woche, und solange das Gewölbe der Schwerpunkt der Woche ist, enthält jede Einheit eine Gewölbeübung, Stufe für Stufe schwerer. Das Gewölbehalten wird alle ${PROGRAM.testEveryDays}\u00A0Tage neu getestet, nach deinem ersten Ziel alle ${PROGRAM.testEveryDaysAfterGoal}.`,
    },
    {
      q: 'Wann sollte ich mit Plattfüßen zum Arzt?',
      a: 'Lass es ärztlich abklären, bevor du anfängst, wenn das Gewölbe flach bleibt, auch wenn der Fuß nicht auf dem Boden steht, oder wenn sich ein Gewölbe im Erwachsenenalter plötzlich abgeflacht hat. Dasselbe gilt für Schmerzen nach einer Verletzung, Schmerzen, die dich nachts wecken, oder Schmerzen mit Taubheit, Kribbeln, Schwellung oder Wärme. Stechende oder zunehmende Schmerzen gehören in ärztliche Abklärung, nicht in mehr Übungen.',
    },
    {
      q: 'Ist Barfußgehen gut bei Plattfüßen?',
      a: 'Keine Studie hat bei Plattfüßen Barfußgehen mit Gehen in Schuhen verglichen, die Frage ist also offen. Barfuß zu gehen fordert aber die kleinen Muskeln, die das Fußgewölbe stützen. Deshalb macht man Gewölbeübungen wie die Kurzer-Fuß-Übung und das Handtuchgreifen ohne Schuhe. Wenn Barfußgehen neue Schmerzen auslöst, mach weniger und probier es zuerst auf weichem Untergrund.',
    },
    {
      q: 'Was verschlimmert Plattfüße?',
      a: 'Langes Stehen oder Gehen, abgenutzte Schuhe oder Schuhe ohne Halt, zusätzliches Körpergewicht und das Auslassen der Gewölbe- und Wadenübungen, die die stützenden Muskeln kräftig halten. Nichts davon verändert die Form des Fußgewölbes, aber ein flexibler Plattfuß kann sich dadurch abends müder oder schmerzhafter anfühlen. Ein starrer Plattfuß, der weiter schmerzt, gehört ärztlich abgeklärt, Ruhe allein reicht nicht.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'das Gewölbe flach bleibt, wenn der Fuß nicht auf dem Boden steht'],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: `Du musst dir Reihenfolge, Dosis und den Zeitpunkt für die schwerere Variante nicht selbst überlegen. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei einem flexiblen Plattfuß ist dieses Ziel das Gewölbehalten: dein Gewölbe ${PROGRAM.goals.archHoldSeconds}\u00A0Sekunden oben halten. Wenn du auch Schmerzen hast, kommen schmerzfreie Morgen zuerst.`,
    more: [
      `Du wählst ${DAYS} Tage pro Woche und Einheiten von ${MINUTES}\u00A0Minuten. Alle ${PROGRAM.testEveryDays}\u00A0Tage (alle ${PROGRAM.testEveryDaysAfterGoal}, sobald dein erstes Ziel erreicht ist) prüft ein kurzer Test Gewölbehalten, Wadenausdauer und Gleichgewicht, sodass du siehst, ob die Gewölbearbeit etwas bringt.`,
    ],
    cta: `Fang mit einer Einheit von ${PROGRAM.sessionMinutes[0]}\u00A0Minuten an.`,
  },
  crumb: 'Plattfuß-Übungen',
  campaign: 'guide-flat-feet-de',
  related: ['hubFlatFeet'],
};

export const HEEL_PAIN_DE: Guide = {
  lang: 'de',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-17',
  title: 'Plantarfasziitis: 8 Übungen & Dehnungen bei Fersenschmerzen',
  description:
    'Acht Übungen und Dehnungen bei Plantarfasziitis mit Dosierung, was du meiden solltest, wann Dehnen am besten ist und Empfehlungsgrade der Leitlinie von 2023.',
  h1: 'Übungen und Dehnungen bei Plantarfasziitis und Fersenschmerzen',
  lede: 'Die Übungen bei Plantarfasziitis mit der besten Studienlage sind Dehnungen für Plantarfaszie und Wade, für die die Leitlinie von 2023 zu Fersenschmerzen den höchsten Empfehlungsgrad A vergibt, und Krafttraining für die Wade mit Grad B. Unten findest du acht Übungen mit Dosierung. Die ersten Schritte nach dem Aufstehen sind das Schlimmste am Tag. Ein stechender Schmerz direkt in der Ferse, noch vor dem ersten Kaffee. Es wird besser, sobald du in Bewegung bist, und kommt zurück, wenn du eine Weile gesessen hast. Dieses Muster hat einen Namen, [Plantarfasziitis](/de/plantarfasziitis/), und die klinische Leitlinie von 2023 zu Fersenschmerzen nennt sie die am häufigsten erkannte Ursache für Fersenschmerzen unter dem Fuß.',
  intro: [
    'Wer im Netz nach Hilfe sucht, findet widersprüchliche Ratschläge. Die Studienlage spricht aber immer wieder für dieselben zwei Dinge: Dehnen von Plantarfaszie und Wade und Krafttraining für die Wade.',
    'In einer Studie mit 48\u00A0Personen, die alle [Schuheinlagen](/de/einlagen-oder-uebungen/) trugen, half langsames Fersenheben mit einem Handtuch unter den Zehen schneller als Dehnen allein. Nach zwölf Monaten lagen beide Gruppen gleichauf. Genau diese Kombination stützt die Leitlinie.',
  ],
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen aus dem Journal of Orthopaedic & Sports Physical Therapy vergibt für das Dehnen von Plantarfaszie und Wade den höchsten Empfehlungsgrad A und für Krafttraining Grad B.',
    'In einer Studie mit 48\u00A0Personen linderte schweres Fersenheben Schmerzen und verbesserte die Alltagsfunktion schneller als Dehnen, und nach zwölf Monaten lagen beide Gruppen gleichauf (Rathleff und Kollegen, 2015).',
    'Bei Fersenschmerzen beim Laufen rät dieselbe Leitlinie, die Belastung anzupassen, statt alles zu stoppen. Diese Empfehlung hat den Empfehlungsgrad E, weil sie auf Theorie beruht, nicht auf Studien.',
    'Lass es zuerst ärztlich abklären, wenn der Schmerz nach einer Verletzung begann, mit Taubheit oder Schwellung einhergeht, dich nachts weckt oder wehtut, wenn du die Ferse zusammendrückst.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Welche Übungen helfen bei Plantarfasziitis, und wie viel solltest du machen?',
      figure: { id: 'plantar-fascia', caption: 'Die Plantarfaszie verläuft vom Fersenbein bis zu den Zehen. Der Schmerz bei Plantarfasziitis beginnt meist dort, wo sie an der Ferse ansetzt.', alt: 'Fußsohle mit der Plantarfaszie als weiße Bänder, die sich vom Fersenbein fächerförmig bis zu den Zehen ausbreiten, und einem roten Fleck an der Ferse, wo der Schmerz meist beginnt.' },
      paragraphs: [
        'Die Übungen bei Plantarfasziitis in Walkito sind Dehnungen für Plantarfaszie und Wade, Krafttraining für die Wade, das sich in kleinen Schritten steigert, und Fußrollen. Das sind die Startdosen von Walkito, keine Verordnung. Eine einseitige Zusammenfassung gibt es unter [Übungsblätter zum Ausdrucken](/printable-exercise-sheets/) (auf Englisch). [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
        'Die Reihenfolge ist wichtig. Solange Schmerzlinderung dein Ziel ist, hält Walkito das Wadentraining sanft, eine Stufe nach der anderen:',
        {
          list: [
            'Zuerst Fersenheben im Sitzen.',
            'Dann Fersenheben beidbeinig.',
            'Dann Fersenheben mit Halten.',
          ],
        },
        'Du gehst eine Stufe höher, sobald sich die letzten zwei Einheiten damit leicht angefühlt haben. Das [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/) belastet die Plantarfaszie am stärksten, deshalb kommt es erst dazu, wenn der Morgenschmerz zurückgegangen ist und dein Ziel zum Aufbau von Wadenkraft wechselt. Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf. An diesem Punkt beendet Walkito eine Einheit.',
      ],
      table: {
        head: ['Übung', 'Dosis', 'Wie oft', 'Was du spüren solltest', 'Aufhören, wenn'],
        rows: [
          ['Plantarfaszien-Dehnung', '2-mal 30\u00A0Sekunden halten, jeder Fuß', 'Die meisten Einheiten, im Wechsel mit den Wadendehnungen', 'Eine Dehnung entlang des Gewölbes, nicht in der Wade', 'Der Schmerz 6/10 erreicht'],
          ['Wadendehnung', '2-mal 30\u00A0Sekunden halten, jedes Bein', 'Die meisten Einheiten, im Wechsel mit den anderen Dehnungen', 'Eine Dehnung in der Wade des gestreckten hinteren Beins', 'Der Schmerz 6/10 erreicht'],
          ['Soleusdehnung', '2-mal 30\u00A0Sekunden halten, jedes Bein', 'Die meisten Einheiten, im Wechsel mit den anderen Dehnungen', 'Eine Dehnung tief in der Wade, nahe der Ferse', 'Der Schmerz 6/10 erreicht'],
          ['Fersenheben im Sitzen', '3\u00A0Sätze à 10, beide Füße', 'Krafttage, 3 pro Woche, nie zwei hintereinander', 'Arbeit im unteren Teil der Wade (Schollenmuskel), fast ohne Last auf der Ferse', 'Der Schmerz 6/10 erreicht'],
          ['Fersenheben beidbeinig', '3\u00A0Sätze à 10, beide Füße', 'Krafttage, sobald sich das Fersenheben im Sitzen leicht anfühlt', 'Die Waden arbeiten, beide Füße teilen sich die Last', 'Der Schmerz 6/10 erreicht'],
          ['Fersenheben mit Halten', '3-mal 20\u00A0Sekunden halten, beide Füße', 'Krafttage, die nächste Stufe', 'Die Waden arbeiten, um oben ruhig zu bleiben', 'Der Schmerz 6/10 erreicht'],
          ['Fersenheben mit Handtuch', '4\u00A0Sätze à 10, jedes Bein, mit Zusatzgewicht', 'Krafttage, sobald das Ziel zur Wadenkraft wechselt', 'Harte Arbeit in der Wade und ein Zug unter dem Gewölbe', 'Der Schmerz 6/10 erreicht'],
          ['Fußrollen', '1\u00A0Minute', 'Erholungstage', 'Fester Druck unter dem Fuß, nie so, dass du zusammenzuckst', 'Der Schmerz 6/10 erreicht'],
        ],
      },
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen den höchsten Empfehlungsgrad A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen den höchsten Empfehlungsgrad A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden und die Hüfte nach vorn. Eine verspannte Wade zieht den ganzen Tag an der Ferse, deshalb zählt diese Dehnung, auch wenn du sie weiter oben spürst.',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen den höchsten Empfehlungsgrad A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung nahe der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Den Schollenmuskel (Musculus soleus), den tiefer liegenden Wadenmuskel, erreichst du nur mit gebeugtem Knie.',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nahe der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B. Diese Stufe wurde nicht einzeln getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Arbeit im unteren Teil der Wade',
          how: 'Setz dich hin, die Füße stehen flach, und drück dich über die Fußballen nach oben. Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Schollenmuskel, der tiefere Wadenmuskel, und nicht der Zwillingswadenmuskel (Musculus gastrocnemius), den du beim Fersenheben im Stehen trainierst. Es ist also nicht einfach eine leichtere Version des Fersenhebens im Stehen. Es trainiert einen anderen Muskel, fast ohne Last auf der Ferse.',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: Drück dich über die Fußballen nach oben',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B. Diese Stufe wurde nicht einzeln getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last, und die Wade wird langsam aktiviert.',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben mit Halten',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B. Diese Stufe wurde nicht einzeln getestet.' },
          dose: '3-mal 20\u00A0Sekunden halten, beide Füße',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten, um ruhig zu bleiben',
          how: 'Komm auf beiden Füßen auf die Zehen und bleib oben ruhig. Sink nicht wieder ab. Durch das Halten wird die Sehne belastet, ohne dass du nachfederst.',
          image: 'Übung: Fersenheben mit Halten',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hochkommen, dann oben ruhig bleiben',
          alt: 'Eine Figur hält sich auf den Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch',
          evidence: { level: 'moderate', why: 'Das ist die Routine aus einer Studie mit 48\u00A0Personen, und die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B.' },
          dose: '4\u00A0Sätze à 10, jedes Bein, mit Zusatzgewicht',
          often: 'Krafttage',
          feel: 'Harte Arbeit in der Wade',
          how: 'Stell dich mit einem Fuß auf eine Stufe, ein zusammengerolltes Handtuch liegt unter deinen Zehen. Nimm dir drei Sekunden zum Hochkommen, halte oben zwei und nimm dir drei zum Absenken. Auf dieser Stufe nimmt Walkito Gewicht dazu, zum Beispiel einen Rucksack. Durch das Handtuch trainiert diese Übung die Plantarfaszie und nicht nur die Wade.',
          image: 'Übung: Fersenheben mit Handtuch',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, zwei oben, drei runter',
          alt: 'Eine Figur kommt auf einer Stufe mit einem zusammengerollten Handtuch auf die Zehen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Die Übung ist für das Wohlgefühl zwischen den Einheiten da.' },
          dose: '1\u00A0Minute',
          often: 'Erholungstage',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam mit festem Druck über einen Massageball. Wenn du zusammenzuckst, nimm Druck raus. Das Rollen beruhigt das Gewebe, nachdem es gearbeitet hat. Kein Ball? Bei der Fußsohlenmassage streichst du stattdessen mit festem Daumendruck von der Ferse zu den Zehen.',
          image: 'Übung: Fußrollen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Fußsohle ist hervorgehoben',
        },
      ],
    },
    {
      h2: 'Welche Übungen solltest du bei Plantarfasziitis meiden?',
      paragraphs: [
        'Meide Aktivitäten mit harten Stößen, die die Last auf deiner Ferse in die Höhe treiben, solange der Schmerz akut ist, und geh morgens als Erstes nicht barfuß auf harten Böden.',
        'Springen, Sprinten und Sprungtraining bringen eine plötzliche Spitzenkraft auf die Plantarfaszie. Wenn das Gewebe gereizt ist, kann diese Spitze dich zurückwerfen. Die Leitlinie von 2023 empfiehlt, die Belastung deiner Füße bei der Arbeit, im Sport und im Alltag anzupassen, eine Empfehlung mit Empfehlungsgrad E. Sie verbietet keine bestimmten Übungen. **Die Frage ist, ob die Last größer ist, als sich das Gewebe über Nacht erholen kann.**',
        'Barfuß auf harten Böden zu gehen ist ein häufiger Auslöser, weil die Faszie nach dem Ausruhen am steifsten ist und ein harter Boden nicht dämpft. Bis die Beschwerden abklingen, trag den ganzen Tag gut gedämpfte Schuhe, auch zu Hause.',
        'Zwei weitere Dinge solltest du beachten:',
        {
          list: [
            '**Einen Ball unter dem Fuß zu rollen** sollte sich fest anfühlen, nicht stechend. Wenn es wehtut, nimm Druck raus oder lass es weg.',
            'Wenn du zusätzlich **Schmerzen an der Achillessehne** hinten an der Ferse hast, meide tiefes Absenken der Ferse über eine Stufenkante, weil das den Ansatz der Achillessehne belasten kann. Mach das [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/) auf flachem Boden, bis die Achillessehne ärztlich oder physiotherapeutisch abgeklärt ist.',
          ],
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wann ist die beste Zeit für Dehnungen bei Plantarfasziitis?',
      keyFact: 'In einer Studie mit 82\u00A0Personen mit chronischer Plantarfasziitis linderte eine Dehnung der Plantarfaszie vor dem Aufstehen den Schmerz bei den ersten Schritten am Morgen nach acht Wochen stärker als Wadendehnen allein (DiGiovanni und Kollegen, 2003).',
      paragraphs: [
        '**Vor deinen ersten Schritten am Morgen und bevor du nach langem Sitzen aufstehst.** Das sind die zwei Momente, in denen die Plantarfaszie am steifsten ist und am ehesten wehtut.',
        'Eine Studie von 2003 mit 82\u00A0Personen mit chronischer Plantarfasziitis testete eine gezielte Plantarfaszien-Dehnung vor der Belastung. Die Teilnehmenden hielten die Dehnung 10\u00A0Sekunden, wiederholten sie 10-mal, dreimal am Tag, mit der ersten Runde vor dem ersten Schritt am Morgen.',
        'Nach acht Wochen hatte die Gruppe mit dieser Dehnung deutlich weniger Schmerzen bei den ersten Schritten am Morgen als die Gruppe, die nur die Wade dehnte. Nach zwei Jahren, als alle Teilnehmenden dieselbe Dehnung bekommen hatten, hatten sich beide Gruppen verbessert.',
        'Auf dieser Seite beginnt die [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/) auf der Bettkante, bevor dein Fuß den Boden berührt. Danach kommt die [Wadendehnung](/de/uebungen/wade-dehnen/). Walkito legt die erste Dehnung aus demselben Grund vor das Aufstehen wie die Studie: Dehnen, bevor das Gewebe Last aufnimmt, ist schonender als danach.',
      ],
      cites: [CITE.digiovanni2003],
    },
    {
      h2: 'Was hilft bei Fersenschmerzen am Morgen?',
      paragraphs: [
        'Fersenschmerzen bei den ersten Schritten am Morgen sind das Muster, das am häufigsten mit Plantarfasziitis in Verbindung gebracht wird. Oft lassen sie nach, sobald du in Bewegung bist, und kommen zurück, wenn du eine Weile gesessen hast.',
        'Dabei helfen zwei Dinge:',
        {
          list: [
            'Die Plantarfaszien-Dehnung machst du, **bevor du aufstehst**, auf der Bettkante mit zurückgezogenen Zehen, damit deine ersten Schritte nicht deine erste Dehnung sind.',
            'Die Leitlinie von 2023 gibt Nachtschienen, 1 bis 3\u00A0Monate getragen, Grad **A** für Menschen, die bei den ersten Schritten am Morgen immer wieder Schmerzen haben. Über [Nachtschienen](/de/nachtschiene-plantarfasziitis/) sprichst du am besten in deiner Arztpraxis oder Physiotherapie. Walkito stellt keine bereit.',
          ],
        },
        'Walkito fragt aus demselben Grund jeden Tag nach deinem Morgenschmerz. Der Morgenschmerz ist das klarste Zeichen dafür, wie dein Fuß den Vortag verkraftet hat, und er entscheidet, wie viel die heutige Einheit von dir verlangt. Mehr dazu, was ihn auslöst, steht unter [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Pausieren oder weiterlaufen bei Fersenschmerzen?',
      paragraphs: [
        'Wenn Fersenschmerzen durch Plantarfasziitis beim Laufen aufflammen, **passe die Belastung an, statt alles zu stoppen.** Die Leitlinie von 2023 empfiehlt, zu lernen, wie du die Belastung deiner Füße bei der Arbeit, im Sport und im Alltag anpasst. Diese Empfehlung hat den Empfehlungsgrad E, das heißt, sie beruht auf Theorie statt auf Studien. Bleib also jeden Tag bei den Dehnungen und reduziere, was die Ferse schlimmer macht. Damit du fit bleibst, ohne die Ferse zu reizen, kannst du einige Läufe durch Ausdauertraining mit wenig Stoßbelastung ersetzen, etwa Schwimmen oder Radfahren auf dem Ergometer.',
        'An einem schlechten Morgen behältst du die Dehnungen und lässt das Fersenheben für den Tag weg. Der nächste Morgen zeigt dir, wie es gelaufen ist. Wenn deine ersten Schritte nach einem Lauf deutlich schlimmer sind, war dieser Lauf mehr, als die Ferse verkraften konnte.',
        'Walkito liest es genauso. Ein langer Tag auf den Beinen macht aus der nächsten Krafteinheit eine leichtere Erholungseinheit, und ein schmerzhafter Morgen macht die Einheit kürzer, ohne sie abzusagen.',
        'Hör auf und lass es ärztlich abklären, wenn Laufen stechend wehtut oder der Schmerz von Woche zu Woche schlimmer wird. Dasselbe gilt für Schmerzen, die beim Laufen zunehmen, nachdem du Kilometer draufgepackt hast, oder Schmerzen, wenn du die Seiten der Ferse zusammendrückst. Beides kann auf einen Ermüdungsbruch hindeuten, eine der anderen Ursachen für Fersenschmerzen, die die Leitlinie nennt.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Ist Krafttraining oder Dehnen besser bei Plantarfasziitis?',
      keyFact: 'In einer Studie mit 48\u00A0Personen lag die Fersenheben-Gruppe nach drei Monaten im Foot Function Index 29\u00A0Punkte niedriger (auf dieser Skala bedeutet ein niedrigerer Wert weniger Schmerz und bessere Funktion), nach zwölf Monaten lagen beide Gruppen aber etwa gleichauf (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'Krafttraining und Dehnen helfen beide bei Plantarfasziitis, und **Krafttraining hilft früher.**',
        'In einer Studie mit 48\u00A0Personen mit per Ultraschall bestätigter Plantarfasziitis trugen alle Schuheinlagen. Eine Gruppe machte zusätzlich jeden zweiten Tag schweres Fersenheben. Die andere dehnte jeden Tag die Plantarfaszie.',
        'Nach drei Monaten lag die Fersenheben-Gruppe bei Schmerz und Alltagsfunktion klar vorn. Nach zwölf Monaten lagen beide Gruppen gleichauf. Krafttraining hat die Besserung beschleunigt, aber nicht verstärkt.',
        'Die Leitlinie unterstützt beides. Die Begründung Studie für Studie steht auf [der Seite zur Studienlage](/science/) (auf Englisch).',
      ],
      sourceNote:
        'Gemessen mit dem Foot Function Index, bei dem ein niedrigerer Wert weniger Schmerz und bessere Funktion bedeutet: 29\u00A0Punkte niedriger in der Fersenheben-Gruppe nach drei Monaten (95-%-KI 6-52, p = 0,016), und 22 gegenüber 16 nach zwölf Monaten, kein signifikanter Unterschied.',
      cites: [CITE.rathleff],
    },
    {
      h2: 'Was empfiehlt die Leitlinie von 2023 bei Plantarfasziitis?',
      paragraphs: [
        'Die Leitlinie von 2023 zur Plantarfasziitis vergibt für jede Option einen Empfehlungsgrad, je nachdem, wie stark die Studienlage ist. A ist der höchste Grad. „Empfehlung dagegen“ heißt, dass die Leitlinie von dieser Option abrät.',
      ],
      table: {
        head: ['Option', 'Empfehlungsgrad'],
        rows: [
          ['Dehnen von Plantarfaszie und Wade', '**A**'],
          ['Manuelle Therapie (Behandlung mit den Händen an Gelenken und Weichteilen von Bein und Fuß), in der Physiotherapie', '**A**'],
          ['[Tapen](/de/plantarfasziitis-tapen/) zusammen mit anderer Physiotherapie, für weniger Schmerz und bessere Funktion über bis zu 6\u00A0Wochen', '**A**'],
          ['Nachtschienen für 1 bis 3\u00A0Monate, wenn deine ersten Schritte jeden Morgen weiter wehtun', '**A**'],
          ['Widerstands- und Krafttraining', '**B**'],
          ['Low-Level-Lasertherapie und Dry Needling, in ärztlicher oder physiotherapeutischer Behandlung', '**B**'],
          ['Einlagen allein, zur kurzfristigen Schmerzlinderung', '**Empfehlung dagegen (Grad B)**'],
          ['Einlagen in Kombination mit anderer Behandlung', '**C**'],
          ['Therapeutischer Ultraschall zusätzlich zum Dehnen', '**Empfehlung dagegen (Grad A)**'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'Helfen Schuhe und Einlagen bei Plantarfasziitis?',
      paragraphs: [
        'Stützende Schuhe helfen, aber Einlagen allein reichen für die meisten Menschen nicht. Die Leitlinie von 2023 spricht sich mit Empfehlungsgrad **B** gegen Orthesen (Einlagen und Gewölbestützen) als alleinige Maßnahme aus, das heißt, die Studienlage spricht dagegen, sich allein auf sie zu verlassen. In Kombination mit Dehnen und Krafttraining bekommen Orthesen Grad **C**.',
        'Nachtschienen, 1 bis 3\u00A0Monate im Schlaf getragen, bekommen den höchsten Empfehlungsgrad der Leitlinie, **A**, für Menschen, die bei den ersten Schritten jeden Morgen immer wieder Schmerzen haben. Sie halten das Sprunggelenk so, dass sich die Plantarfaszie über Nacht nicht verkürzt. Frag in deiner Arztpraxis oder Physiotherapie, ob Nachtschienen für dich geeignet sind.',
        'Die Leitlinie bewertet keine bestimmten Schuhtypen, aber Schuhe ohne Halt gelten allgemein als Risikofaktor. Schuhe mit Gewölbestütze und fester Fersenkappe übernehmen einen Teil der Last, die die Plantarfaszie sonst allein tragen würde. Wenn deine Füße nach einem langen Tag auf den Beinen wehtun, lies [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/). Wer im Schichtdienst arbeitet, kann mit [Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/) anfangen.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Was passiert, wenn die Ferse nicht mehr wehtut?',
      paragraphs: [
        `Wenn die Fersenschmerzen aufhören, macht Walkito in geringerer Dosis weiter, weil Fersenschmerzen wiederkommen können. Sobald du das Ziel schmerzfreie Morgen erreichst (Morgenschmerz bei oder unter 1/10 an ${PROGRAM.painFreeDays}\u00A0Tagen am Stück), geht dieses Ziel in die Erhaltung über, und das nächste Ziel rückt nach.`,
        'Wenn deine Fußgewölbe auch flach sind, hat das Gewölbe eigene Übungen und einen eigenen Zeitrahmen: siehe [Übungen bei Plattfuß](/de/plattfuss-uebungen/). Fragen zur App selbst beantworten [die FAQ](/faq/) (auf Englisch).',
      ],
    },
  ],
  faq: [
    {
      q: 'Kann ich mit Plantarfasziitis weiterlaufen?',
      a: 'Du musst nicht alles stoppen. Passe stattdessen die Belastung an. Die klinische Leitlinie von 2023 empfiehlt, zu lernen, die Belastung deiner Füße anzupassen, mit Empfehlungsgrad E, das heißt, die Empfehlung beruht auf Theorie, nicht auf Studien. Reduziere, was die Ferse schlimmer macht, und dehne weiter jeden Tag. Wenn deine ersten Schritte am nächsten Morgen deutlich schlimmer sind, war der Lauf zu viel. Stechende oder zunehmende Schmerzen solltest du ärztlich abklären lassen.',
    },
    {
      q: 'Warum sind Fersenschmerzen morgens schlimmer?',
      a: 'Fersenschmerzen bei den ersten Schritten nach dem Schlafen oder Sitzen sind das Muster, das am häufigsten mit Plantarfasziitis in Verbindung gebracht wird. Die Leitlinie von 2023 zu Fersenschmerzen beschreibt sie als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ auffällt. Die übliche Erklärung: Das Gewebe unter dem Fuß wird in Ruhe steif und dann von den ersten Schritten plötzlich belastet. Deshalb machst du die Plantarfaszien-Dehnung, bevor du aufstehst, und deshalb vergibt die Leitlinie von 2023 für Nachtschienen dabei Empfehlungsgrad A.',
    },
    {
      q: 'Wie lange dauert eine Plantarfasziitis?',
      a: 'Bei den meisten Menschen bessert sie sich innerhalb von Monaten, nicht Wochen. Den ganzen Zeitverlauf findest du unter [wie lange dauert Plantarfasziitis](/de/wie-lange-dauert-plantarfasziitis/). Eine [Übersichtsarbeit von 2020](https://doi.org/10.1177/2473011419896763) berichtet, dass es etwa 90\u00A0% der Menschen mit konservativer (nicht operativer) Behandlung wie Dehnen und Schuheinlagen besser geht, oft innerhalb von 3 bis 6\u00A0Monaten. Bei manchen dauert es länger, und eine kleinere Gruppe hat nach einem Jahr noch Schmerzen. Kein Übungsprogramm kann einen Zeitrahmen versprechen. Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen Empfehlungsgrad A und für Krafttraining Grad B, deshalb stehen beide auf dieser Seite an erster Stelle.',
      cites: [CITE.latt],
    },
    {
      q: 'Ist Dehnen oder Kräftigen besser bei Plantarfasziitis?',
      a: 'Beides hilft, und Kräftigen wirkt schneller. In einer Studie mit 48\u00A0Personen lag schweres Fersenheben nach drei Monaten klar vor dem Dehnen, aber nach zwölf Monaten lagen beide Gruppen gleichauf. Die Leitlinie von 2023 vergibt für Dehnen Empfehlungsgrad A und für Krafttraining Grad B. [Die Seite zur Studienlage](/science/) (auf Englisch) hat die Details.',
    },
    {
      q: 'Ist ein Fersensporn dasselbe wie Plantarfasziitis?',
      a: 'Nicht ganz. Viele sagen „[Fersensporn](/de/plantarfasziitis-oder-fersensporn/)“, wenn sie Plantarfasziitis meinen, aber genau genommen ist ein Fersensporn ein knöcherner Auswuchs, der auf dem Röntgenbild zu sehen ist. Plantarfasziitis ist ein Schmerz in der Plantarfaszie, der Sehnenplatte an der Fußsohle. Die Übungen auf dieser Seite sind die, die die Leitlinie von 2023 für Fersenschmerzen unter dem Fuß bewertet. Wenn ein Röntgenbild einen Sporn zeigt, findest du dieselbe Routine unter [Übungen bei Fersensporn](/de/fersensporn-uebungen/). Was hinter deinen Fersenschmerzen steckt, kann nur eine Ärztin oder ein Arzt klären.',
    },
    {
      q: 'Wie oft sollte ich Übungen bei Plantarfasziitis machen?',
      a: `Dehne an den meisten Tagen und mach das Wadenkrafttraining an Krafttagen. In Walkito wählst du ${DAYS} Trainingstage pro Woche, und jede Woche hat drei Krafttage, nie zwei hintereinander. Die Dehnungen kommen in den meisten Einheiten vor, die erste Plantarfaszien-Dehnung, bevor dein Fuß den Boden berührt. In der Studie, der Walkito folgt, wurde das Fersenheben jeden zweiten Tag gemacht.`,
    },
    {
      q: 'Was sind die besten Dehnungen bei Fersenschmerzen?',
      a: 'Die Plantarfaszien-Dehnung und die Waden- und Soleusdehnungen sind die, die die Leitlinie von 2023 zu Fersenschmerzen mit dem höchsten Empfehlungsgrad A bewertet. Leg den Fuß über dein Knie und zieh die Zehen 30\u00A0Sekunden zurück, das erste Mal, bevor du morgens aufstehst. Dann dehn die Wade an einer Wand, das hintere Knie erst gestreckt, dann gebeugt. Walkito beginnt mit 2-mal 30\u00A0Sekunden pro Dehnung. Technik: [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/).',
      cites: [CITE.guideline],
    },
    {
      q: 'Wann sollte ich mit Fersenschmerzen zum Arzt?',
      a: 'Lass es zuerst ärztlich abklären, wenn der Schmerz nach einer Verletzung oder einem Sturz begann, du den Fuß nicht belasten kannst oder Taubheit, Kribbeln, Schwellung, Wärme oder Fieber dazukommen. Dasselbe gilt, wenn er dich nachts weckt, stechend ist oder schlimmer wird oder wehtut, wenn du die Ferse zusammendrückst, was auf einen Ermüdungsbruch hindeuten kann. Walkito stellt keine Diagnose.',
    },
    {
      q: 'Hilft Gehen bei Plantarfasziitis?',
      a: 'Gehen ist meist in Ordnung, aber für sich allein keine Übung bei Plantarfasziitis. Die Leitlinie von 2023 empfiehlt, die Belastung anzupassen, statt mit Aktivität aufzuhören. Wenn deine ersten Schritte am Morgen nach einem Spaziergang deutlich schlimmer sind, war die Strecke oder das Tempo zu viel. Dehnen vor dem Gehen, vor allem die [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/) vor den ersten Schritten, macht die ersten Minuten leichter.',
    },
    {
      q: 'Was ist das Schlimmste, was du bei Plantarfasziitis tun kannst?',
      a: 'Die deutlichsten Fehler sind, direkt nach dem Aufwachen barfuß auf harten Böden zu gehen und sofort wieder mit Laufen oder Springen anzufangen, solange die Ferse noch gereizt ist. Beides belastet die Plantarfaszie mit plötzlicher Kraft, wenn sie am steifsten und am wenigsten erholt ist. Die Leitlinie von 2023 zu Fersenschmerzen empfiehlt, die Belastung anzupassen, statt gegen den Schmerz anzutrainieren.',
      cites: [CITE.guideline],
    },
    {
      q: 'Kann man Plantarfasziitis wegmassieren?',
      a: 'Eine einzelne Massage beseitigt keine Plantarfasziitis, aber sanfte Selbstmassage kann die Steifigkeit zwischen den Einheiten lindern. Manuelle Therapie in ärztlicher oder physiotherapeutischer Behandlung, also Behandlung mit den Händen an Gelenken und Weichteilen, bewertet die Leitlinie von 2023 in Kombination mit Dehnen mit dem höchsten Empfehlungsgrad A. [Die eigene Fußsohle über einen Ball zu rollen](/de/massageball-plantarfasziitis/) tut gut, ersetzt aber weder Dehnen noch Wadenkrafttraining.',
      cites: [CITE.guideline],
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Als Plan umsetzen',
    text: `Du musst dir Reihenfolge, Dosis und die Dauer jeder Übung nicht selbst überlegen. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Fersenschmerzen ist das erste Ziel ein besserer Morgen: Schmerz bei oder unter 1/10 an ${PROGRAM.painFreeDays}\u00A0Tagen am Stück.`,
    more: [
      `Du wählst ${DAYS} Tage pro Woche und Einheiten von ${MINUTES}\u00A0Minuten. Alle ${PROGRAM.testEveryDays}\u00A0Tage (alle ${PROGRAM.testEveryDaysAfterGoal}, sobald dieses Ziel erreicht ist) prüft ein kurzer Test [Wadenausdauer](/de/fersenheben-test/), Gewölbehalten und Gleichgewicht, sodass du siehst, was sich verändert.`,
    ],
    cta: `Fang mit einer Einheit von ${PROGRAM.sessionMinutes[0]}\u00A0Minuten an.`,
  },
  crumb: 'Übungen bei Plantarfasziitis',
  campaign: 'guide-plantar-fasciitis-de',
  related: ['hubPlantarFasciitis'],
};
