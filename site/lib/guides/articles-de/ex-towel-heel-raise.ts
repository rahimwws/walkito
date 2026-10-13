import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Translated from `articles/ex-towel-heel-raise.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_TOWEL_HEEL_RAISE_DE: Guide = {
  lang: 'de',
  page: 'exTowelHeelRaise',
  mainSource: CITE.rathleff,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersenheben mit Handtuch: Rathleff-Protokoll, Sätze, Tempo',
  description:
    'Fersenheben mit Handtuch nach dem Rathleff-Protokoll bei Plantarfasziitis: Sätze, Wiederholungen, Tempo, das Handtuch unter den Zehen und typische Fehler.',
  h1: 'Fersenheben mit Handtuch: das Rathleff-Protokoll mit hoher Last, Schritt für Schritt',
  lede:
    'Das Fersenheben mit Handtuch ist ein einbeiniges Fersenheben auf einer Stufe mit einem zusammengerollten Handtuch unter den Zehen. Es stammt aus einer Studie von 2015 mit 48\u00A0Personen mit Plantarfasziitis, in der diese Übung Fersenschmerzen über drei Monate schneller linderte als Dehnen allein. Das Handtuch macht den Unterschied zum normalen Wadenheben: Es bezieht die Plantarfaszie über den Windlass-Mechanismus mit ein.',
  takeaways: [
    'In einer Studie mit 48\u00A0Personen schnitt Fersenheben mit Handtuch und Zusatzgewicht nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab als Dehnen allein, nach zwölf Monaten lagen beide Gruppen aber gleichauf (Rathleff und Kollegen, 2015).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Krafttraining mit B, eine Stufe unter dem Dehnen mit A, und empfiehlt beides (Koc und Kollegen, 2023).',
    'Das Handtuch unter den Zehen beugt sie nach oben und aktiviert den Windlass-Mechanismus, sodass die Plantarfaszie die Last mit der Wade teilt.',
    'Walkito beginnt mit 3\u00A0Sätzen à 12, jedes Bein, im Tempo 3\u00A0Sekunden hoch, 2\u00A0Sekunden halten, 3\u00A0Sekunden runter.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Was trainiert das Fersenheben mit Handtuch?',
      paragraphs: [
        'Das Fersenheben mit Handtuch trainiert Gastrocnemius und Soleus (die beiden Wadenmuskeln), die Achillessehne und die Plantarfaszie. Das zusammengerollte Handtuch beugt die Zehen oben in der Bewegung nach oben, und das zieht über den Windlass-Mechanismus an der Plantarfaszie. Ohne Handtuch trainiert die Übung vor allem die Wade. Mit Handtuch übernimmt die Faszie einen Teil der Last.',
        'Deshalb hat die Rathleff-Studie bei Plantarfasziitis gezielt das Handtuch benutzt statt eines einfachen Fersenhebens. Das Ziel ist, die Kette aus Wade, Achillessehne und Faszie gemeinsam zu belasten. Wenn dein Schmerz in der Achillessehne sitzt und nicht unter dem Fuß, ist [exzentrisches Fersenabsenken](/exercises/eccentric-heel-drops/) (auf Englisch) ohne Handtuch der bessere Startpunkt.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Wie geht Fersenheben mit Handtuch?',
      paragraphs: [
        'Roll ein kleines Handtuch zu einer Rolle, etwa so dick wie deine Faust. Leg es an die Kante einer Stufe. Stell dich mit einem Fuß so hin, dass alle fünf Zehen auf dem Handtuch liegen und der Fußballen auf der Stufe. Halt dich zum Ausbalancieren an einer Wand oder einem Geländer fest.',
        'Nimm dir drei Sekunden zum Hochkommen und drück dabei über den großen Zeh. Halte oben zwei Sekunden. Nimm dir drei Sekunden zum Absenken und lass die Ferse leicht unter die Stufe sinken. Dieses langsame Tempo ist Teil des Protokolls. Schnelle Wiederholungen verringern die Last auf Sehne und Faszie.',
        'In der Rathleff-Studie nahmen die Teilnehmenden einen Rucksack als Zusatzgewicht dazu, sobald das eigene Körpergewicht nicht mehr reichte, um die letzte Wiederholung schwer zu machen. „12RM“ heißt das schwerste Gewicht, das du genau 12-mal kontrolliert heben kannst.',
      ],
      exercises: [
        {
          name: 'Fersenheben mit Handtuch',
          evidence: {
            level: 'strong',
            why: 'Die Übung aus der einzigen randomisierten Studie zu Fersenheben bei Plantarfasziitis (Rathleff 2015). Bewertung B der Leitlinie.',
          },
          dose: 'Walkito beginnt mit 3 x 12, jedes Bein. Studienprotokoll: 3 x 12RM, gesteigert auf 5 x 8RM',
          how: 'Stell dich mit einem Fuß auf eine Stufe, ein zusammengerolltes Handtuch liegt unter den Zehen. Drei Sekunden hoch, zwei Sekunden halten, drei Sekunden runter. Nimm Gewicht dazu, wenn die letzte Wiederholung nicht mehr schwer ist.',
          often: 'In der Studie jeden zweiten Tag. Walkito plant die Übung an Krafttagen ein.',
          feel: 'Harte Arbeit in der Wade und ein Zug unter dem Gewölbe',
          stop: 'Der Schmerz 6/10 oder mehr erreicht',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, halten, drei Sekunden runter',
          alt: 'Eine Figur kommt auf einer Stufe mit einem zusammengerollten Handtuch unter dem Fuß auf die Zehen, Wade und Gewölbe sind hervorgehoben',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Sätze, Wiederholungen und die Steigerung nach Rathleff',
      paragraphs: [
        'Die Studie steigerte die Last über etwa drei Monate. Das Tempo blieb die ganze Zeit gleich: drei Sekunden hoch, zwei Sekunden halten, drei Sekunden runter.',
      ],
      table: {
        caption: 'Steigerung beim Fersenheben mit Handtuch in Rathleff 2015',
        head: ['Wochen', 'Sätze x Wiederholungen', 'Tempo', 'Häufigkeit'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s hoch / 2\u00A0s halten / 3\u00A0s runter', 'Jeden zweiten Tag'],
          ['3-4', '4 x 10RM', '3\u00A0s hoch / 2\u00A0s halten / 3\u00A0s runter', 'Jeden zweiten Tag'],
          ['Ab 5', '5 x 8RM', '3\u00A0s hoch / 2\u00A0s halten / 3\u00A0s runter', 'Jeden zweiten Tag'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'Was sind die häufigsten Fehler beim Fersenheben mit Handtuch?',
      paragraphs: [
        'Zu schnell zu werden ist der häufigste Fehler. Drei Sekunden Absenken halten die Wade lange genug unter Spannung, um Kraft aufzubauen. Hoch- und Runterfedern macht daraus eine Ausdauerübung, keine Kraftübung.',
        'Wenn das Handtuch verrutscht und nur noch ein oder zwei Zehen darauf liegen, sinkt die Last auf der Faszie. Alle fünf Zehen sollten auf dem Handtuch liegen. Wenn das Handtuch immer wieder rutscht, falte es dicker oder nimm ein Handtuch statt eines Badetuchs.',
        'Auf einem Bein anzufangen, wenn beidbeiniges Fersenheben noch schwerfällt, führt zu schlechter Technik und Ausweichbewegungen. Wenn einbeiniges Fersenheben auf einer Stufe gerade noch zu viel ist, fang mit [beidbeinigem Fersenheben](/exercises/calf-raises/) (auf Englisch) auf dem Boden an und steigere dich.',
      ],
    },
    {
      h2: 'Leichtere und schwerere Varianten',
      paragraphs: [
        'Wenn das volle Fersenheben mit Handtuch auf einer Stufe zu schwer ist, geh in der Wadenkette zurück. [Fersenheben im Sitzen](/exercises/calf-raises/) (auf Englisch) hat die geringste Last. Danach kommt Fersenheben beidbeinig im Stehen. Dann Fersenheben mit Halten oben. Dann das einbeinige Fersenheben mit Handtuch auf einer Stufe. Jede Stufe sollte sich zwei Einheiten lang machbar anfühlen, bevor du weitergehst.',
        'Wenn dein Körpergewicht auf einem Bein zu leicht ist, nimm Last dazu. Die Rathleff-Studie nutzte einen Rucksack mit Büchern oder Wasserflaschen. Im Fitnessstudio gehen auch eine Wadenmaschine oder eine Gewichtsweste. Das Ziel ist, dass die letzte Wiederholung jedes Satzes wirklich die letzte ist, die du noch sauber schaffst.',
      ],
    },
    {
      h2: 'Was sagt die Forschung zum Fersenheben mit Handtuch?',
      keyFact: 'In einer Studie mit 48\u00A0Personen mit bestätigter Plantarfasziitis schnitt das Fersenheben mit Handtuch nach drei Monaten im Foot Function Index besser ab, nach zwölf Monaten waren die Ergebnisse aber ähnlich wie bei Dehnen allein (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'Die Rathleff-Studie von 2015 ist die einzige randomisierte Studie, die das Fersenheben mit Handtuch gezielt bei Plantarfasziitis getestet hat. Bei 48\u00A0Personen mit per Ultraschall bestätigter Plantarfasziitis schnitt die Fersenheben-Gruppe nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab als die Gruppe, die nur dehnte. Nach zwölf Monaten lagen beide Gruppen gleichauf.',
        'Die Leitlinie von 2023 zu Fersenschmerzen hat diese und andere Belege geprüft und Krafttraining die Bewertung **B** gegeben, Dehnen die Bewertung **A**. Beides wird empfohlen. Die Leitlinie hebt die Variante mit Handtuch nicht eigens hervor, aber sie ist die einzige Kraftübung, die in einer eigenen Studie zur Plantarfasziitis getestet wurde.',
        'Nichts in der Studienlage sagt, dass diese Übung das Dehnen ersetzen sollte. Am stärksten ist beides: eine [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/) gegen die Steifigkeit am Morgen und das Fersenheben mit Last, um Kapazität aufzubauen. Die ganze Liste der Übungen und wie sie zusammenpassen findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      sourceNote:
        'Rathleff 2015: Unterschied im FFI von 29\u00A0Punkten nach 3\u00A0Monaten (95-%-KI 6-52, p = 0,016). Nach 12\u00A0Monaten: 22 gegenüber 16, kein signifikanter Unterschied.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Für wen ist das Fersenheben mit Handtuch?',
      paragraphs: [
        'Für alle mit Plantarfasziitis, die genug Wadenkraft für ein einbeiniges Fersenheben auf einer Stufe haben. Die Studie nahm Erwachsene auf, deren Schmerz seit mindestens drei Monaten bestand und die Belastung vertrugen.',
        'Wenn dein Schmerz frisch ist und du nicht bequem auf einem Bein stehen kannst, fang weiter unten auf der Leiter an: zuerst Fersenheben im Sitzen oder beidbeinig. Wenn dein Schmerz in der Achillessehne sitzt und nicht in der Plantarfaszie, ist der Ansatz mit Belastung ähnlich, aber das Handtuch wird nicht benutzt und das Protokoll ist anders. Für diesen Weg lies [exzentrisches Fersenabsenken](/exercises/eccentric-heel-drops/) (auf Englisch) oder [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
      ],
      cites: [CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Wofür ist das Handtuch beim Fersenheben?',
      cites: [CITE.rathleff],
      a: 'Das Handtuch liegt zusammengerollt unter allen fünf Zehen, sodass sie sich oben in der Bewegung nach oben beugen. Das aktiviert den Windlass-Mechanismus, eine Verbindung zwischen großem Zeh und Plantarfaszie. Ohne Handtuch belastet die Übung vor allem die Wade. Mit Handtuch teilt sich die Faszie die Last, und deshalb hat die Rathleff-Studie es bei Plantarfasziitis benutzt.',
    },
    {
      q: 'Wie viele Wiederholungen Fersenheben mit Handtuch sollte ich machen?',
      cites: [CITE.rathleff],
      a: 'Die Rathleff-Studie begann mit 3\u00A0Sätzen à 12\u00A0Wiederholungen (mit dem schwersten Gewicht, das für 12\u00A0Wiederholungen machbar war) und steigerte bis etwa Woche 5 auf 5\u00A0Sätze à 8 schwerere Wiederholungen, jeden zweiten Tag. Walkito beginnt mit 3\u00A0Sätzen à 12 pro Bein und geht eine Stufe höher, sobald sich zwei Einheiten auf diesem Level leicht anfühlen.',
    },
    {
      q: 'Kann ich das Fersenheben mit Handtuch auf dem Boden statt auf einer Stufe machen?',
      a: 'Ja, aber dir fehlt dann der zusätzliche Bewegungsumfang unten, wo die Ferse unter die Stufe sinkt. Auch auf dem Boden werden Wade und Faszie belastet. Das ist ein vernünftiger Anfang, wenn sich eine Stufe wackelig oder zu intensiv anfühlt, und du kannst später auf eine Stufe wechseln.',
    },
    {
      q: 'Sollte das Fersenheben mit Handtuch wehtun?',
      cites: [CITE.guideline],
      a: 'Harte Arbeit in der Wade und ein Zug unter dem Gewölbe sind zu erwarten. Hör für heute auf, wenn der Schmerz 6 von 10 oder mehr erreicht oder der nächste Morgen deutlich schlimmer ist als sonst. Leichter Muskelkater, der innerhalb eines Tages abklingt, ist normal, vor allem in den ersten zwei Wochen.',
    },
    {
      q: 'Ist das Fersenheben mit Handtuch dasselbe wie exzentrisches Fersenabsenken?',
      cites: [CITE.rathleff, CITE.alfredson],
      a: 'Nein. Das Fersenheben mit Handtuch hat eine Phase nach oben und eine nach unten und nutzt ein Handtuch unter den Zehen, um die Plantarfaszie zu belasten. Das exzentrische Fersenabsenken konzentriert sich nur auf das Absenken, ohne Handtuch, und wurde für die Tendinopathie der Achillessehne entwickelt. Sie zielen mit unterschiedlichen Protokollen auf unterschiedliche Probleme.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einem plötzlichen Knall oder einer Verletzung angefangen hat, statt sich nach und nach aufzubauen',
      'du den Fuß nicht belasten kannst oder hinkst',
      'die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'der Schmerz dich nachts weckt oder auch da ist, wenn du nicht stehst',
      'es nach mehreren Wochen gleichmäßiger Belastung nicht besser geworden ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Das Fersenheben mit Handtuch ist eine Stufe in einer Wadenkette, die Walkito in einen Wochenplan einbaut. Die Kette reicht vom Fersenheben im Sitzen über das Fersenheben beidbeinig, das Halten und das Fersenheben mit Handtuch bis zum exzentrischen Fersenabsenken und schließlich zu Pogo-Sprüngen. Jede Stufe öffnet sich, sobald sich zwei Einheiten auf der aktuellen Stufe leicht angefühlt haben.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer und Gleichgewicht. Walkito ist ein Übungsprogramm, kein Werkzeug für Diagnosen.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fersenheben mit Handtuch',
  campaign: 'ex-towel-heel-raise-de',
};
