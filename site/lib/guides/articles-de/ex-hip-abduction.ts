import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-hip-abduction.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_HIP_ABDUCTION_DE: Guide = {
  lang: 'de',
  page: 'exHipAbduction',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Hüftabduktion mit Band: Übung für Fuß und Fußgewölbe',
  description:
    'Hüftabduktion mit Band für mehr Kontrolle über Fuß und Gewölbe: Technik, Sätze, der Zusammenhang zwischen Hüfte und Fuß und was die Forschung zeigt.',
  h1: 'Hüftabduktion: wie sie deinen Füßen hilft und wie sie geht',
  lede:
    'Bei der Hüftabduktion hebst du ein Bein zur Seite, weg von der Körpermitte. Wenn die Abduktoren der Hüfte schwach sind, fällt das Knie beim Gehen nach innen, und der Fuß proniert zu stark, sodass das Gewölbe abflacht. Den Gluteus medius mit einer Hüftabduktion mit Band zu kräftigen, kann dieses Einknicken nach innen verringern und Gewölbe, Plantarfaszie und Innenseite des Sprunggelenks entlasten.',
  takeaways: [
    'Eine Studie von 2023 mit 52\u00A0Personen mit flexiblem Plattfuß fand, dass ein sechswöchiges kombiniertes Programm mit Hüftkräftigung, Kurzer-Fuß-Übungen, Arbeit am Sprunggelenk und Dehnen zwei Messwerte der Gewölbeform im Vergleich zu einer Kontrollgruppe verbesserte (Brijwasi und Kollegen, 2023).',
    'Der Gluteus medius steuert Becken und Oberschenkel im Einbeinstand. Wenn er schwach ist, wandert das Knie nach innen, und der Fuß proniert stärker, was das innere Gewölbe belastet.',
    'Eine Querschnittsstudie von 2013 mit etwa 1.900\u00A0Erwachsenen aus der Framingham Foot Study fand keinen Zusammenhang zwischen Plattfußhaltung und Kreuzschmerzen, aber einen kleinen Zusammenhang zwischen einem Fuß, der beim Gehen nach innen kippt, und Kreuzschmerzen bei Frauen (Menz und Kollegen, 2013).',
    'Walkito setzt diese Übung als Hüftabduktion im Stehen mit Band um. Im Stehen muss das Standbein stabilisieren, während das Arbeitsbein sich hebt.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Was ist Hüftabduktion?',
      paragraphs: [
        'Hüftabduktion heißt, das Bein seitlich von der Körpermitte wegzubewegen. Der wichtigste Muskel dafür ist der Gluteus medius an der Außenseite der Hüfte. Er hält das Becken waagerecht, wenn du auf einem Bein stehst, und verhindert, dass die andere Hüfte absackt.',
        'Die Übung steht in Fußprogrammen, weil Hüfte, Knie und Fuß zusammenhängen. Wenn der Gluteus medius schwach ist, dreht sich der Oberschenkel beim Gehen und Stehen nach innen, das Knie folgt, und der Fuß proniert stärker, als er sollte. Das Gewölbe flacht unter dieser Kraft nach innen ab. Eine kräftigere Hüfte bremst diese Kettenreaktion.',
      ],
    },
    {
      h2: 'Wie geht Hüftabduktion im Stehen mit Band?',
      paragraphs: [
        'Stell dich hin, ein Widerstandsband liegt um beide Knöchel oder knapp über den Knien. Halte dich zum Gleichgewicht an einer Wand oder einem Stuhl fest. Verlager dein Gewicht aufs Standbein.',
        'Heb das andere Bein gerade zur Seite, die Zehen zeigen nach vorn, der Oberkörper bleibt aufrecht. Lehn dich nicht zur anderen Seite. Senk langsam ab und wiederhole.',
        'Drück über die Ferse des Arbeitsbeins, nicht über die Zehen. **Die Bewegung kommt aus der Hüfte, nicht aus der Taille.** Du musst das Bein nicht hoch heben. Etwa 30 bis 45\u00A0Grad vom Boden reichen, wenn die Ausführung sauber bleibt. Ein höheres Anheben mit seitlich gekipptem Oberkörper bringt dem Gluteus medius weniger.',
      ],
      exercises: [
        {
          name: 'Hüftabduktion im Stehen mit Band',
          evidence: { level: 'moderate', why: 'Teil des kombinierten Programms, das in einer randomisierten Studie von 2023 die Form des Gewölbes verbessert hat (Brijwasi 2023). Hüftkräftigung für die Ausrichtung des Fußes ist biomechanisch begründet, wurde aber nicht in einer eigenen Studie mit Ergebnissen am Fuß einzeln getestet.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 15, jedes Bein',
          how: 'Stell dich hin, ein Band liegt um beide Knöchel. Halte dich zum Gleichgewicht an einer Wand fest. Heb ein Bein gerade zur Seite, die Zehen zeigen nach vorn. Drück über die Ferse. Senk langsam ab.',
          often: 'Krafttage, wenn das Links-rechts-Ziel in deinem Plan steht',
          feel: 'Arbeit an der Außenseite der Hüfte',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'hip_abduction',
          caption: 'Hüftabduktion: Heb ein Bein gegen das Band zur Seite',
          alt: 'Eine stehende Figur mit einem Widerstandsband um die Knöchel hebt ein Bein zur Seite',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Wie beeinflusst die Hüfte Fuß und Gewölbe?',
      keyFact: 'Eine Studie von 2013 mit etwa 1.900\u00A0Erwachsenen aus der Framingham Foot Study fand keinen Zusammenhang zwischen Plattfüßen und Kreuzschmerzen, aber einen kleinen Zusammenhang zwischen einem nach innen kippenden Fuß und Rückenschmerzen bei Frauen (Menz und Kollegen, 2013).',
      paragraphs: [
        'Der Zusammenhang läuft über eine biomechanische Kette: Hüfte, Knie, Sprunggelenk, Fuß. Wenn der Gluteus medius das Becken im Einbeinstand nicht waagerecht halten kann:',
        {
          list: [
            'Der Oberschenkel dreht sich nach innen.',
            'Das Knie folgt und knickt Richtung Körpermitte ein.',
            'Diese Drehung zwingt den Fuß in die Pronation, das Sprunggelenk kippt nach innen, und das Gewölbe flacht ab.',
          ],
        },
        'Deshalb haben viele Menschen mit Plattfüßen oder Schmerzen im Gewölbe auch schwache Hüften. Das Gewölbe versagt nicht von allein. **Es wird von oben überlastet.** Eine kräftigere Hüfte verringert diese Last von oben.',
        'Eine Querschnittsstudie von 2013 aus der Framingham Foot Study untersuchte etwa 1.900\u00A0Erwachsene aus der Allgemeinbevölkerung. Die Plattfußhaltung selbst hing nicht mit Kreuzschmerzen zusammen, aber ein Fuß, der beim Gehen nach innen kippte, zeigte bei Frauen einen kleinen Zusammenhang mit Kreuzschmerzen. Das deutet an, dass die Kette Fuß, Hüfte, Rücken in beide Richtungen laufen kann.',
        'Die Plattfuß-Studie von Brijwasi und Kollegen (2023) nahm Hüftkräftigung neben Kurzer-Fuß-Übungen, Arbeit am Sprunggelenk und Dehnen auf. Das kombinierte Programm verbesserte die Form des Gewölbes über sechs Wochen. Die Studie trennte nicht, wie viel die Hüftkräftigung allein beitrug, aber dass sie dabei war, spiegelt die biomechanische Begründung wider.',
      ],
      cites: [CITE.menz, CITE.brijwasi],
    },
    {
      h2: 'Wem hilft Hüftabduktion bei Fußschmerzen?',
      paragraphs: [
        'Menschen mit Plattfüßen oder starker Pronation profitieren, weil die Übung eine häufige Ursache für das Absinken des Gewölbes weiter oben angeht. Wenn deine Knie bei der Kniebeuge oder beim Gehen nach innen einknicken, sind schwache Hüftabduktoren wahrscheinlich mit dabei.',
        'Läufer profitieren, weil der Einbeinstand die Grundhaltung beim Laufen ist. Jeder Schritt landet auf einem Fuß. Ein schwacher Gluteus medius auf dieser Seite lässt Knie und Fuß nach innen kippen, was zu Schienbeinkantensyndrom, Plantarfasziitis und Läuferknie beitragen kann. Mehr dazu unter [Fersenschmerzen bei Läufern](/heel-pain-runners/) (auf Englisch) und [Übungen beim Schienbeinkantensyndrom](/de/schienbeinkantensyndrom-uebungen/).',
        'Menschen, die viele Stunden stehen, vor allem in der Pflege und im Einzelhandel, können ebenfalls profitieren. Langes Stehen ermüdet den Gluteus medius, und am Ende einer Schicht lässt die Kontrolle über die Hüfte nach. Übungen, die gut zur Hüftabduktion passen, findest du unter [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/).',
      ],
    },
    {
      h2: 'Was sind die häufigsten Fehler bei der Hüftabduktion im Stehen?',
      paragraphs: [
        {
          list: [
            'Der häufigste Fehler ist, **den Oberkörper zur anderen Seite zu lehnen**. Wenn du dich wegneigst, nutzt der Körper Schwung und Seitneigung statt des Gluteus medius. Bleib aufrecht. Ein kleineres Anheben mit geradem Oberkörper ist besser als ein hohes mit Schieflage.',
            'Ein weiterer Fehler ist, **den Fuß nach außen zu drehen**, sodass die Zehen zur Decke zeigen. Dann wandert die Arbeit zu den Hüftbeugern und zum Tensor fasciae latae statt zum Gluteus medius. Lass die Zehen nach vorn oder leicht nach unten zeigen.',
            'Ein drittes Problem ist, **das Bein zu schwingen**. Die Übung sollte langsam und kontrolliert sein, vor allem auf dem Weg nach unten. In der Absenkphase (exzentrisch) passiert ein großer Teil der Kräftigung. Wenn das Bein schnell fällt, macht der Muskel die Arbeit nicht.',
            '**Und wenn die Hüfte auf der Standseite absackt**, ist das ein Zeichen, dass das Band zu stark ist oder der Gluteus medius auf der Standseite ermüdet. Das Becken sollte die ganze Zeit waagerecht bleiben. Nimm ein leichteres Band oder mach zwischen den Sätzen eine Pause.',
          ],
        },
      ],
    },
    {
      h2: 'Was sagt die Forschung?',
      paragraphs: [
        'Die biomechanische Begründung für Hüftabduktion in Fußprogrammen ist gut belegt: Schwache Hüftabduktoren lassen das Knie nach innen einknicken, was die Pronation des Fußes und die Last auf dem Gewölbe erhöht. Mehrere Beobachtungsstudien bestätigen den Zusammenhang zwischen schwacher Hüfte und Problemen bei der Ausrichtung der Beine.',
        'Für klinische Ergebnisse kommen die stärksten Belege aus kombinierten Programmen. Die Studie von Brijwasi und Kollegen von 2023 nahm Hüftkräftigung als Teil eines sechswöchigen Übungsprogramms für 52\u00A0Personen mit flexiblem Plattfuß auf. Das Programm verbesserte die Form des Gewölbes. Hüftkräftigung wurde nicht in einer eigenen Studie zu Plattfüßen oder Plantarfasziitis einzeln getestet.',
        'Eine randomisierte Studie von 2024 mit 45\u00A0Frauen mit flexiblem Plattfuß verglich über sechs Wochen:',
        {
          list: [
            'Kurzer-Fuß-Übungen.',
            'Ein kombiniertes Übungsprogramm.',
            'Kurzer-Fuß-Übungen plus isometrische Hüftabduktion.',
          ],
        },
        'Alle drei Gruppen verbesserten den Navikular-Drop (wie stark das Gewölbe unter dem Körpergewicht absinkt). Die Gruppe mit isometrischer Hüftabduktion verbesserte sich am stärksten, war beim Navikular-Drop aber nicht signifikant besser als das kombinierte Programm; beim seitlichen Schwanken schon (Zarali und Kollegen, 2024). Das deutet darauf hin, dass Arbeit an der Hüfte den Fußübungen etwas hinzufügen könnte, gestützt auf eine einzige kleine Studie.',
        '**Die Belege stützen Hüftabduktion als Teil eines umfassenderen Fußprogramms.** Sie ist keine alleinige Übung gegen Schmerzen im Gewölbe, schließt aber eine Lücke, die reine Fußübungen offenlassen. Verwandte Seiten: [Übungen bei Plattfüßen](/de/plattfuss-uebungen/), [Einwärtsdrehen mit Band](/de/uebungen/einwaertsdrehen-mit-band/), [Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/).',
      ],
      cites: [CITE.zarali, CITE.brijwasi, CITE.cheng],
    },
  ],
  faq: [
    {
      q: 'Hilft Hüftabduktion bei Plattfüßen?',
      cites: [CITE.brijwasi],
      a: 'Hüftabduktion kräftigt den Gluteus medius, der die Ausrichtung von Knie und Fuß von oben steuert. Eine Studie von 2023 mit 52\u00A0Personen mit flexiblem Plattfuß nutzte Hüftkräftigung als Teil eines kombinierten Programms und fand über sechs Wochen eine verbesserte Form des Gewölbes (Brijwasi 2023). Am wirksamsten ist sie als Teil eines umfassenderen Programms, nicht allein.',
    },
    {
      q: 'Wie viele Wiederholungen Hüftabduktion sollte man machen?',
      a: 'Walkito beginnt mit 3\u00A0Sätzen à 15\u00A0Wiederholungen pro Bein, im Stehen mit einem Widerstandsband um die Knöchel. Es ist eine Übung mit mehr Wiederholungen und weniger Last, weil der Gluteus medius fürs Gehen Ausdauer braucht, keine Maximalkraft.',
    },
    {
      q: 'Kann ich die Hüftabduktion auch in Seitenlage machen?',
      a: 'Die Hüftabduktion in Seitenlage trainiert denselben Muskel. Im Stehen kommt das Gleichgewicht auf dem Standbein dazu, was auch die Hüfte auf dieser Seite trainiert. Walkito nutzt die Variante im Stehen, weil sie dem Gehen und dem Einbeinstand näherkommt. Wenn dir das Stehen zu wackelig ist, ist die Seitenlage ein vernünftiger Einstieg.',
    },
    {
      q: 'Welches Band sollte man für die Hüftabduktion nehmen?',
      a: 'Ein leichtes bis mittleres Mini-Band (Loop-Band) passt am besten. Leg es um beide Knöchel oder knapp über die Knie. Das Band sollte so viel Widerstand geben, dass sich die letzten Wiederholungen jedes Satzes schwer anfühlen, dich aber nicht zwingen, dich zur Seite zu lehnen oder das Bein zu schwingen.',
    },
    {
      q: 'Warum steht Hüftabduktion in einem Fußprogramm?',
      cites: [CITE.menz],
      a: 'Die Hüfte steuert, was an Knie und Fuß passiert. Ein schwacher Gluteus medius lässt das Knie nach innen einknicken, was den Fuß in die Pronation zwingt und das Gewölbe abflacht. Eine Studie von 2013 mit etwa 1.900\u00A0Erwachsenen fand einen kleinen Zusammenhang zwischen einem Fuß, der beim Gehen nach innen kippt, und Kreuzschmerzen bei Frauen, die Plattfußhaltung allein hing aber nicht mit Rückenschmerzen zusammen (Menz 2013). Eine kräftigere Hüfte verringert die Überlastung des Gewölbes von oben.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du scharfe Hüftschmerzen hast, die das Belasten einschränken',
      'das Knie nach innen einknickt und du es trotz Übung nicht kontrollieren kannst',
      'du Leistenschmerzen oder ein Klicken in der Hüfte hast, das bei Übungen schlimmer wird',
      'die Schmerzen in Fuß oder Gewölbe trotz regelmäßiger Übungen über mehrere Wochen schlimmer werden',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito nimmt die Hüftabduktion an Krafttagen dazu, sobald ein Ziel zum Ausgleich zwischen links und rechts in deinen Plan kommt. Sie steht neben Übungen für die kurzen Fußmuskeln und Wadenarbeit, damit das Gewölbe Halt von oben und von unten bekommt. Die Einheiten dauern 3, 5 oder 10\u00A0Minuten, und ein Test alle 14\u00A0Tage verfolgt den Fortschritt.',
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Hüftabduktion',
  campaign: 'ex-hip-abduction-de',
};
