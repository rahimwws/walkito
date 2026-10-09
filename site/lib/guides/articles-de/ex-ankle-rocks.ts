import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-ankle-rocks.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_ANKLE_ROCKS_DE: Guide = {
  lang: 'de',
  page: 'exAnkleRocks',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Sprunggelenk mobilisieren: Sprunggelenk-Wippen',
  description:
    'Sprunggelenk mobilisieren mit Sprunggelenk-Wippen, Knie über die Zehen: Technik, Sätze und Wiederholungen, warum die Beugung zählt und wie du sie testest.',
  h1: 'Sprunggelenk-Wippen: so geht es und warum die Beweglichkeit zählt',
  lede:
    'Beim Sprunggelenk-Wippen wanderst du im Stehen mit dem Knie über die Zehen nach vorn, während die Ferse flach auf dem Boden bleibt. Die Übung baut Dorsalflexion im Sprunggelenk auf, also wie weit sich das Sprunggelenk beugt, wenn der Fuß am Boden steht. In einer Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0Kontrollpersonen war eine eingeschränkte Dorsalflexion der stärkste einzelne Risikofaktor, mit 23,3-fachen Odds.',
  takeaways: [
    'Eine eingeschränkte Dorsalflexion im Sprunggelenk war in einer Fall-Kontroll-Studie mit passenden Kontrollpersonen der stärkste unabhängige Risikofaktor für Plantarfasziitis, mit 23,3-fachen Odds (Riddle und Kollegen, 2003).',
    'Sprunggelenk-Wippen baut Dorsalflexion auf, indem es das Ende des Bewegungsumfangs unter Körpergewicht belastet, anders als eine passive Dehnung an der Wand.',
    'Der Knie-Wand-Test misst, wie weit das Knie mit der Ferse unten über die Zehen hinauskommt. Walkito enthält eine Knie-Wand-Übung (2-mal 30\u00A0Sekunden halten, jedes Bein).',
    'Walkito beginnt beim Sprunggelenk-Wippen mit 2\u00A0Sätzen à 15, jedes Bein.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Wie geht das Sprunggelenk-Wippen?',
      paragraphs: [
        'Stell dich in Schrittstellung, ein Fuß vorn, einer hinten, die Hände zum Abstützen an einer Wand oder einem Türrahmen. Die vordere Ferse bleibt flach auf dem Boden, und du wippst das vordere Knie langsam über die Zehen nach vorn. Lass das Knie so weit wandern, wie es geht, solange die Ferse unten bleibt. Dann wipp zurück zum Start. Das ist eine Wiederholung.',
        'Die Bewegung ist langsam und kontrolliert. Du federst nicht. Jedes Wippen dauert etwa zwei Sekunden nach vorn und zwei Sekunden zurück. Das hintere Bein ist nur fürs Gleichgewicht da. Die ganze Arbeit im Sprunggelenk passiert im vorderen Bein.',
        '**Lass den vorderen Fuß gerade nach vorn zeigen.** Wenn sich der Fuß nach außen dreht, nimmt das Sprunggelenk eine Abkürzung, und du verpasst den Bewegungsumfang, den du aufbauen willst.',
      ],
      exercises: [
        {
          name: 'Sprunggelenk-Wippen',
          evidence: {
            level: 'moderate',
            why: 'Zielt auf die Dorsalflexion im Sprunggelenk, in einer Fall-Kontroll-Studie von 2003 der stärkste unabhängige Risikofaktor für Plantarfasziitis. In keiner Studie zu Plantarfasziitis als einzelne Übung getestet.',
          },
          dose: 'Walkito beginnt mit 2\u00A0Sätzen à 15, jedes Bein',
          how: 'Schrittstellung, Hände an der Wand. Wipp das vordere Knie über die Zehen nach vorn, die Ferse bleibt flach. Langsam, etwa zwei Sekunden in jede Richtung. Wechsle nach jedem Satz das Bein.',
          often: 'Mobilitätseinheiten',
          feel: 'Eine Dehnung vorn am Sprunggelenk und ein Zug in der unteren Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Das Knie wandert über die Zehen nach vorn, die Ferse bleibt flach',
          alt: 'Eine Figur in Schrittstellung wippt das vordere Knie über die Zehen nach vorn, das Sprunggelenk ist hervorgehoben',
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Warum zählt die Beweglichkeit im Sprunggelenk bei Fersenschmerzen?',
      keyFact: 'In einer Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0Kontrollpersonen war eine eingeschränkte Dorsalflexion im Sprunggelenk ein stärkerer Risikofaktor als BMI oder Zeit im Stehen und erhöhte die Odds um das 23,3-Fache (Riddle und Kollegen, 2003).',
      paragraphs: [
        'Dorsalflexion ist, wie weit sich der Fuß nach oben Richtung Schienbein beugen kann, während die Ferse am Boden bleibt. Jeder Schritt braucht etwas Dorsalflexion. Wenn sich das Sprunggelenk nicht weit genug beugen kann, gleicht der Körper aus:',
        {
          list: [
            'Der Fuß kippt vielleicht nach innen.',
            'Die Wade bekommt mehr Spannung ab.',
            'Die Plantarfaszie fängt Kräfte ab, für die sie nicht gemacht ist.',
          ],
        },
        'In der Fall-Kontroll-Studie von Riddle 2003 war **eine eingeschränkte Dorsalflexion im Sprunggelenk die Variable mit dem größten unabhängigen Effekt**, mit 23,3-fachen Odds, eine Plantarfasziitis zu entwickeln. Das war stärker als BMI, Zeit im Stehen oder Laufstrecke. Eine verkürzte Wade, genauer der Gastrocnemius, fand sich in einer anderen Fallserie bei 52 bis 60\u00A0% von 254\u00A0Personen mit Plantarfasziitis.',
        'Die Wade passiv zu dehnen (wie bei der [Wadendehnung](/de/uebungen/wade-dehnen/) und der [Soleusdehnung](/de/uebungen/soleus-dehnen/)) geht eine Seite des Problems an: die Länge des Muskels. Sprunggelenk-Wippen geht die andere Seite an: aktive Kontrolle am Ende des Bewegungsumfangs. Wenn du das Knie unter Körpergewicht über die Zehen wippst, lernt das Sprunggelenk, den Umfang zu nutzen, den es hat, statt ihn nur passiv zu erreichen.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Sprunggelenk-Wippen oder Wadendehnung: Was ist der Unterschied?',
      paragraphs: [
        'Die [Wadendehnung](/de/uebungen/wade-dehnen/) ist ein passives Halten. Du lehnst dich an die Wand und wartest, bis der Muskel länger wird. Das hintere Bein ist gestreckt, das zielt auf den Gastrocnemius. Die [Soleusdehnung](/de/uebungen/soleus-dehnen/) macht dasselbe mit gebeugtem Knie.',
        'Sprunggelenk-Wippen ist eine aktive, wiederholte Bewegung. Du schiebst das Knie nach vorn, kommst zurück, schiebst wieder. Du belastest das Sprunggelenk durch seinen Bewegungsumfang, statt am Ende still zu halten. Das Wippen baut die Fähigkeit auf, Dorsalflexion unter Last zu nutzen, und genau das brauchen Gehen und Laufen.',
        'Beides ist nützlich. **Dehnen öffnet den Bewegungsumfang. Sprunggelenk-Wippen trainiert dich, ihn zu nutzen.** Die Leitlinie bewertet Wadendehnen mit A. Sprunggelenk-Wippen gehört zur Mobilitätsarbeit für das Sprunggelenk, die Walkito zusammen mit diesen Dehnungen einplant.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Der Knie-Wand-Test und wie er dazu passt',
      paragraphs: [
        'Der Knie-Wand-Test, auch Weight-Bearing-Lunge-Test genannt, ist eine einfache Art, die Dorsalflexion im Sprunggelenk zu messen.',
        'Du stehst mit dem Gesicht zur Wand, ein Fuß ein paar Zentimeter davor, und schiebst das Knie nach vorn, bis es die Wand berührt. Hebt sich die Ferse, bevor das Knie die Wand erreicht, setz den Fuß näher heran. Der Abstand vom großen Zeh zur Wand an dem Punkt, an dem das Knie die Wand gerade berührt und die Ferse noch flach ist, ist dein Ergebnis.',
        'Walkito enthält in der App eine Knie-Wand-Übung (2-mal 30\u00A0Sekunden halten, jedes Bein). Wenn du diesen Abstand über Wochen verfolgst, siehst du, ob sich die Beweglichkeit deines Sprunggelenks wirklich verbessert. Ein bis zwei Zentimeter mehr in ein paar Wochen sind bedeutsam.',
        'Sprunggelenk-Wippen und die Knie-Wand-Übung arbeiten am selben Bewegungsumfang aus verschiedenen Richtungen. Das Wippen sind Wiederholungen durch den Umfang. Das Halten an der Wand ist eine anhaltende Last am Ende des Umfangs. Beides hilft. Walkito plant beides an Mobilitätstagen ein.',
      ],
    },
    {
      h2: 'Was sind die häufigsten Fehler beim Sprunggelenk-Wippen?',
      paragraphs: [
        {
          list: [
            '**Die Ferse abheben.** Die Ferse muss bei jeder Wiederholung flach bleiben. Hebt sie sich, bist du über das Ende deines Bewegungsumfangs hinaus, und die Übung verliert ihren Sinn. Wipp nur so weit, wie es die Ferse zulässt.',
            '**Den Fuß nach außen drehen.** Der Fuß sollte gerade nach vorn zeigen. Dreht er nach außen, weicht das Sprunggelenk seiner steifen Stelle aus. Lass den zweiten Zeh auf die Wand zeigen.',
            '**Zu schnell sein.** Federn oder hastige Wiederholungen bauen keinen kontrollierten Bewegungsumfang auf. Zwei Sekunden nach vorn, zwei Sekunden zurück. Lass das Sprunggelenk bei jeder Wiederholung das Ende seines Umfangs spüren.',
            '**Das hintere Bein weglassen.** Manche versuchen, beide Beine gleichzeitig zu machen, indem sie einfach in die Hocke gehen. Das teilt die Last und verkleinert den Umfang, durch den das vordere Sprunggelenk arbeiten muss. Nimm eine Schrittstellung, damit ein Sprunggelenk die Arbeit macht.',
          ],
        },
      ],
    },
    {
      h2: 'Leichtere und schwerere Varianten',
      paragraphs: [
        'Wenn dir das Wippen im Stehen zu anstrengend ist, probier es im Sitzen. Setz dich hin, der Fuß steht flach auf dem Boden, und schieb das Knie über die Zehen nach vorn. Es ist dieselbe Bewegung mit weniger Last. Das klappt gut nach einem akuten Schub, wenn Übungen im Stehen zu viel sind.',
        'Eine schwerere Variante ist das Wippen mit Gewicht. Halte beim Wippen nach vorn eine Kettlebell oder ein schweres Buch vor der Brust. Das Zusatzgewicht schiebt das Knie weiter in die Dorsalflexion. Nimm erst Gewicht dazu, wenn sich das Wippen mit Körpergewicht zwei Einheiten hintereinander leicht anfühlt.',
        'Für weitere Arbeit an Sprunggelenk und Unterschenkel siehe [Zehenheben an der Wand](/de/uebungen/zehenheben-an-der-wand/) (Kraft am Schienbein) und [Einbeinstand](/de/uebungen/einbeinstand/) (Stabilität im Sprunggelenk). Das ganze Programm findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Wie viele Wiederholungen Sprunggelenk-Wippen sollte man machen?',
      a: 'Walkito beginnt mit 2\u00A0Sätzen à 15 pro Bein. Das sind 30\u00A0Wiederholungen pro Bein und Einheit. Ein veröffentlichtes Protokoll für Sprunggelenk-Wippen speziell bei Plantarfasziitis gibt es nicht, diese Dosis kommt also aus der App. Steigere die Sätze oder nimm Gewicht dazu, wenn sich die aktuelle Dosis zwei Einheiten lang leicht anfühlt.',
    },
    {
      q: 'Hilft Sprunggelenk-Wippen bei Plantarfasziitis?',
      cites: [CITE.riddle],
      a: 'Sprunggelenk-Wippen zielt auf die Dorsalflexion im Sprunggelenk, die in einer Fall-Kontroll-Studie der stärkste unabhängige Risikofaktor für Plantarfasziitis war (23,3-fache Odds). Keine Studie hat Sprunggelenk-Wippen als einzelne Übung bei Plantarfasziitis getestet, aber den Bewegungsumfang zu verbessern, auf den es zielt, geht den größten biomechanischen Risikofaktor an, den die Forschung gefunden hat.',
    },
    {
      q: 'Was ist der Knie-Wand-Test?',
      a: 'Eine einfache Messung der Dorsalflexion im Sprunggelenk. Stell dich mit dem Gesicht zur Wand und schieb das Knie nach vorn, bis es die Wand berührt, die Ferse bleibt flach. Der Abstand vom großen Zeh zur Wand ist dein Ergebnis. Walkito hat ihn als Übung drin (2-mal 30\u00A0Sekunden halten pro Bein), um Kontrolle am Ende des Bewegungsumfangs aufzubauen.',
    },
    {
      q: 'Ist Sprunggelenk-Wippen dasselbe wie Knie-über-Zehen-Wippen?',
      a: 'Ja. „Sprunggelenk-Wippen“, „Knie-über-Zehen-Wippen“ und „Dorsalflexions-Wippen“ sind alles Namen für dieselbe Bewegung. Das Knie wandert über die Zehen nach vorn, während die Ferse flach bleibt. Die Übung baut den Bewegungsumfang im Sprunggelenk auf, den du zum Gehen, für die Hocke und zum Laufen brauchst.',
    },
    {
      q: 'Darf das Knie über die Zehen hinausgehen?',
      a: 'Ja. Genau darum geht es bei der Übung. Die Vorstellung, das Knie dürfe nie über die Zehen hinaus, ist ein Mythos, der für normales Gehen und Mobilitätsarbeit am Sprunggelenk nicht gilt. Bei jedem Schritt schiebt sich das Knie über die Zehen. Sprunggelenk-Wippen trainiert diesen Umfang kontrolliert. Halte die Ferse flach und hör dort auf, wo der Umfang von selbst endet.',
    },
  ],
  redFlags: {
    h2: 'Hör auf und geh zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du vorn am Sprunggelenk ein scharfes Zwicken spürst, das zwischen den Wiederholungen nicht weggeht',
      'das Sprunggelenk bei der Bewegung blockiert oder hängen bleibt',
      'nach dem Wippen vorn oder seitlich am Sprunggelenk eine Schwellung auftritt',
      'Schmerz ins Schienbein hochschießt oder in den Fuß hinunterzieht',
      'das Sprunggelenk vor Kurzem weggeknickt oder verletzt worden ist',
      'es nach mehreren Wochen regelmäßiger Mobilitätsarbeit nicht besser geworden ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito plant das Sprunggelenk-Wippen an Mobilitätstagen ein, zusammen mit der Waden- und der Soleusdehnung. Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten.',
    more: [
      'Ein Zentimeter mehr beim Knie-Wand-Test in ein paar Wochen ist bedeutsam. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Sprunggelenk-Wippen',
  campaign: 'ex-ankle-rocks-de',
};
