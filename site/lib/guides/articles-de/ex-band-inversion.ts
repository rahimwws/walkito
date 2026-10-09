import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-band-inversion.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_BAND_INVERSION_DE: Guide = {
  lang: 'de',
  page: 'exBandInversion',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Einwärtsdrehen mit Band: Tibialis-posterior-Übung',
  description:
    'Fuß mit Theraband nach innen drehen, um den Tibialis posterior zu kräftigen: Technik, Sätze und Wiederholungen, häufige Fehler und was die Forschung zeigt.',
  h1: 'Einwärtsdrehen mit Band: wie du den Tibialis posterior kräftigst',
  lede:
    'Das Einwärtsdrehen mit Widerstandsband kräftigt den Tibialis posterior, den tiefen Wadenmuskel, dessen Sehne unter dem Innenknöchel entlangläuft und das Gewölbe von unten stützt. Du drehst die Fußsohle gegen den Widerstand eines Bands nach innen. Eine MRT-Studie von 2004 fand, dass eine ähnliche Bewegung, die Adduktion des Fußes im geschlossenen System, von drei getesteten Übungen die stärkste isolierte Aktivierung des Tibialis posterior erzeugte.',
  takeaways: [
    'Eine MRT-Studie mit 5\u00A0gesunden Erwachsenen von 2004 fand, dass die Adduktion des Fußes (den Fuß nach innen drehen) die Signalintensität im Tibialis posterior um 50\u00A0% erhöhte, bei weniger als 5\u00A0% Anstieg in den umliegenden Muskeln. Damit war sie die gezielteste Übung für diesen Muskel (Kulig und Kollegen, 2004).',
    'Eine systematische Übersichtsarbeit von 2018 fand, dass Übungsprogramme mit Kräftigung des Tibialis posterior Schmerz und Funktion bei Menschen mit Tibialis-posterior-Dysfunktion verbesserten, wobei die Übersichtsarbeit festhielt, dass die meisten Studien klein waren (Ross und Kollegen, 2018).',
    'Der Tibialis posterior ist der wichtigste dynamische Stabilisator des inneren Längsgewölbes beim Stehen und Gehen. Wenn er schwächer wird, kann das Gewölbe mit der Zeit absinken.',
    'Walkito nimmt diese Übung erst nach sechs Einheiten der Kurzer-Fuß-Übung im Stehen dazu, damit die kurzen Fußmuskeln des Gewölbes arbeiten, bevor das Band dazukommt.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Was ist das Einwärtsdrehen mit Band?',
      paragraphs: [
        'Das Einwärtsdrehen mit Band ist eine Übung im Sitzen: Ein Widerstandsband liegt um den Vorfuß und ist am anderen Fuß oder an einem festen Punkt befestigt. Du drehst die Fußsohle gegen den Zug des Bands nach innen (Inversion). Das Knie bleibt ruhig. Nur Fuß und Sprunggelenk bewegen sich.',
        'Die Übung zielt auf den Tibialis posterior, einen tiefen Muskel hinten im Unterschenkel, dessen Sehne hinter dem Innenknöchel herumläuft und sich an der Unterseite des Fußes auffächert. Er ist der wichtigste extrinsische Muskel für die Stütze des Gewölbes beim Gehen. Wenn er schwächer wird oder seine Sehne degeneriert, flacht das Gewölbe ab, und der Fuß kippt nach innen. Dieses Beschwerdebild heißt Tibialis-posterior-Dysfunktion oder erworbener Plattfuß im Erwachsenenalter.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'Wie geht das Einwärtsdrehen mit Band?',
      paragraphs: [
        'Setz dich mit ausgestreckten Beinen hin oder auf die Kante eines Stuhls. Leg ein Widerstandsband um die Innenseite des Vorfußes am Arbeitsbein. Befestige das andere Ende unter dem anderen Fuß oder an einem Tischbein, sodass das Band den Fuß nach außen zieht.',
        'Beginn mit dem Fuß leicht nach außen gedreht (Eversion). Dreh die Fußsohle gegen das Band nach innen und schieb den Vorfuß Richtung Körpermitte. Beweg den Fuß, nicht das ganze Bein. Das Knie zeigt die ganze Zeit gerade nach vorn. Geh langsam zurück und wiederhole.',
        'Nimm am Anfang ein leichtes Band. Die Bewegung ist klein. Wenn sich das Knie verdreht oder die Hüfte rotiert, ist das Band zu schwer, oder das Bein gleicht aus.',
      ],
      exercises: [
        {
          name: 'Einwärtsdrehen mit Band',
          evidence: { level: 'moderate', why: 'Laut MRT aktiviert die Adduktion des Fußes gezielt den Tibialis posterior (Kulig 2004). Übungsprogramme mit Arbeit am Tibialis posterior verbesserten in einer systematischen Übersichtsarbeit von 2018 die Ergebnisse bei Sehnendysfunktion.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 15, jeder Fuß',
          how: 'Setz dich hin, ein Widerstandsband liegt um den Vorfuß und ist so befestigt, dass es den Fuß nach außen zieht. Dreh die Fußsohle gegen das Band nach innen. Beweg den Fuß, nicht das Bein. Das Knie bleibt ruhig.',
          often: 'Krafttage, nach sechs Einheiten der Kurzer-Fuß-Übung im Stehen',
          feel: 'Arbeit an der Innenseite von Fuß und Sprunggelenk',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'band_inversion',
          caption: 'Einwärtsdrehen mit Band: Dreh die Fußsohle gegen das Band nach innen',
          alt: 'Eine sitzende Figur dreht die Fußsohle gegen ein Widerstandsband nach innen, das um den Vorfuß liegt',
        },
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
    {
      h2: 'Auf welchen Muskel zielt diese Übung?',
      keyFact: 'Eine MRT-Studie mit 5\u00A0gesunden Erwachsenen von 2004 fand, dass das Nach-innen-Drehen des Fußes das Signal im Tibialis posterior um 50\u00A0% erhöhte, bei weniger als 5\u00A0% Veränderung in den Muskeln daneben (Kulig und Kollegen, 2004).',
      paragraphs: [
        'Das Hauptziel ist der Tibialis posterior. Er ist der tiefste Muskel hinten im Unterschenkel und liegt hinter Schienbein und Wadenbein. Seine Sehne läuft hinter dem Malleolus medialis (dem Innenknöchel) entlang und fächert sich dann in mehrere Zügel auf, die an fast jedem Knochen des Mittelfußes ansetzen.',
        'Eine MRT-Studie von Kulig und Kollegen von 2004 testete drei Übungen bei 5\u00A0gesunden Erwachsenen: die Adduktion des Fußes (den Fuß am Boden entlang nach innen drehen), einbeiniges Fersenheben und die Supination des Fußes im offenen System. Die Adduktion des Fußes erzeugte die stärkste Aktivierung des Tibialis posterior (50\u00A0% mehr Signal) bei der geringsten Aktivierung der umliegenden Muskeln (unter 5\u00A0%). Das einbeinige Fersenheben aktivierte den Tibialis posterior auch, aber ebenso stark den Gastrocnemius (99\u00A0%) und den Soleus (39\u00A0%), und war damit eine viel weniger gezielte Übung für den Tibialis posterior.',
      ],
      cites: [CITE.kulig],
    },
    {
      h2: 'Warum zählt der Tibialis posterior für das Gewölbe?',
      paragraphs: [
        'Der Tibialis posterior ist der wichtigste dynamische Stabilisator des inneren Längsgewölbes. Bei jedem Schritt spannt er sich an, um das Gewölbe in der mittleren Standphase oben zu halten, wenn dein ganzes Gewicht auf einem Fuß liegt. Die kurzen Fußmuskeln (trainiert mit der [Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/) und dem [Zehenspreizen](/de/uebungen/zehen-spreizen/)) geben dem Gewölbe Halt vor Ort, aber der Tibialis posterior liefert die größere, extrinsische Kraft von oben.',
        'Wenn die Sehne des Tibialis posterior schwächer wird oder degeneriert, sinkt das Gewölbe nach und nach ab, und der Fuß proniert. Eine Übersichtsarbeit von Ling und Lui von 2017 beschrieb das als häufigste Ursache des erworbenen Plattfußes im Erwachsenenalter. Eine systematische Übersichtsarbeit von Ross und Kollegen von 2018 fand, dass Übungsprogramme mit Kräftigung des Tibialis posterior Schmerz und Funktion bei Tibialis-posterior-Dysfunktion im frühen Stadium verbesserten.',
        'Deshalb enthalten [Übungsprogramme bei Plattfüßen](/de/plattfuss-uebungen/) beides: Übungen für die kurzen Fußmuskeln und Arbeit am Tibialis posterior. Die kurzen Muskeln sind die Stabilisatoren vor Ort. Der Tibialis posterior ist der wichtigste extrinsische Stabilisator. Beides zählt.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Was sind die häufigsten Fehler beim Einwärtsdrehen mit Band?',
      paragraphs: [
        'Der häufigste Fehler ist, das ganze Bein statt nur den Fuß zu drehen. Wenn die Hüfte nach innen rotiert, um den Fuß zu drehen, macht der Tibialis posterior fast nichts. Lass das Knie gerade nach vorn zeigen. Nur der Fuß bewegt sich im Sprunggelenk.',
        'Ein weiterer Fehler ist ein zu starkes Band. Der Tibialis posterior ist ein kleiner, tiefer Muskel. Ein schweres Band zwingt die größeren Muskeln, zu übernehmen. Fang mit einem leichten Band an und konzentrier dich darauf, die Arbeit am Innenknöchel und im Gewölbe zu spüren.',
        'Ein drittes Problem ist, den Fuß zwischen den Wiederholungen zurückschnellen zu lassen. Kontrollier den Rückweg. Die exzentrische Phase, das langsame Zurückgehen, belastet die Sehne auf eine Weise, die ihr hilft, sich anzupassen. Ein langsamer Rückweg bringt mehr als ein schneller Zug.',
        'Und manche legen das Band zu weit oben am Fuß an, nahe am Sprunggelenk selbst. Das Band sollte um den Vorfuß liegen, nahe am Fußballen, damit die Hebelwirkung im richtigen Winkel wirkt.',
      ],
    },
    {
      h2: 'Was sagt die Forschung zur Kräftigung des Tibialis posterior?',
      paragraphs: [
        'Die direktesten Belege für die Bewegung kommen aus der MRT-Studie von Kulig und Kollegen von 2004. Sie bestätigte, dass die Adduktion des Fußes gezielt den Tibialis posterior aktiviert, bei minimaler Aktivierung der umliegenden Muskeln. Damit ist das Einwärtsdrehen gegen ein Band die Übung der Wahl, wenn du genau diesen Muskel kräftigen willst.',
        'Für klinische Ergebnisse hat eine systematische Übersichtsarbeit von Ross und Kollegen von 2018 Übungsprogramme bei Tibialis-posterior-Dysfunktion untersucht. Die meisten Studien waren klein, aber die Übersichtsarbeit kam zu dem Schluss, dass Programme mit exzentrischen und konzentrischen Übungen für den Tibialis posterior, oft kombiniert mit Wadenkräftigung und Einlagen, Schmerz und Funktion verbesserten.',
        'Die Übung wurde nicht allein in einer großen Studie zu Plantarfasziitis getestet. Ihre Rolle im Walkito-Programm ist, das Gewölbe zu stützen, indem sie den extrinsischen Stabilisator kräftigt, der neben den kurzen Fußmuskeln arbeitet. Verwandte Seiten: [Übungen bei Plattfüßen](/de/plattfuss-uebungen/), [Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/), [Hüftabduktion](/de/uebungen/hueftabduktion/).',
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
  ],
  faq: [
    {
      q: 'Welche Bandstärke sollte man für das Einwärtsdrehen nehmen?',
      a: 'Fang mit einem leichten Widerstandsband an. Der Tibialis posterior ist ein kleiner, tiefer Muskel und braucht keine schwere Last, um zu ermüden. Du solltest Arbeit am Innenknöchel und im Gewölbe spüren. Wenn sich das Knie verdreht oder die Hüfte rotiert, um die Bewegung zu schaffen, ist das Band zu stark.',
    },
    {
      q: 'Hilft Einwärtsdrehen mit Band bei Plattfüßen?',
      cites: [CITE.posteriorTibialReview, CITE.ling],
      a: 'Der Tibialis posterior ist der wichtigste dynamische Stabilisator des Gewölbes. Eine systematische Übersichtsarbeit von 2018 fand, dass Übungsprogramme mit Kräftigung des Tibialis posterior Schmerz und Funktion bei Menschen mit Tibialis-posterior-Dysfunktion verbesserten, der häufigsten Ursache des erworbenen Plattfußes im Erwachsenenalter (Ross 2018). Ihn zu kräftigen, gehört zum üblichen Vorgehen bei Plattfüßen.',
    },
    {
      q: 'Was ist der Unterschied zwischen Inversion und Eversion im Sprunggelenk?',
      a: 'Bei der Inversion drehst du die Fußsohle nach innen und trainierst den Tibialis posterior an der Innenseite des Sprunggelenks. Bei der Eversion drehst du die Sohle nach außen und trainierst die Peronealmuskeln an der Außenseite. Beides wird in der Reha des Sprunggelenks eingesetzt, aber für die Stütze des Gewölbes ist die Inversion die passende Richtung.',
    },
    {
      q: 'Kann man die Übung ohne Band machen?',
      a: 'Ohne Band kannst du die Innenseite des Fußes gegen eine Wand drücken oder mit der Hand gegen die Bewegung halten. Ein Band ist besser, weil es über den ganzen Bewegungsumfang gleichmäßigen Widerstand gibt. Jedes leichte Widerstandsband geht.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du Schmerzen oder eine Schwellung am Innenknöchel hast, die bei Aktivität schlimmer werden',
      'du nicht auf einem Fuß auf die Zehen hochkommst, was auf eine Schwäche der Tibialis-posterior-Sehne hindeuten kann',
      'das Gewölbe vor Kurzem abgesunken ist und der Fuß deutlich flacher geworden ist',
      'du eine Verletzung am Sprunggelenk hattest und der Innenknöchel immer noch druckempfindlich ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito nimmt das Einwärtsdrehen mit Band nach sechs Einheiten der Kurzer-Fuß-Übung im Stehen dazu. Diese Abfolge sorgt dafür, dass die kurzen Fußmuskeln aktiv sind, bevor der extrinsische Stabilisator belastet wird. Die Einheiten dauern 3, 5 oder 10\u00A0Minuten, und ein Test alle 14\u00A0Tage verfolgt die Haltezeit des Gewölbes und die Wadenausdauer.',
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Einwärtsdrehen mit Band (Tibialis posterior)',
  campaign: 'ex-band-inversion-de',
};
