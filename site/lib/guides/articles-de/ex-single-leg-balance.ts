import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-single-leg-balance.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_SINGLE_LEG_BALANCE_DE: Guide = {
  lang: 'de',
  page: 'exSingleLegBalance',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Einbeinstand: Übung, Normwerte und warum er zählt',
  description:
    'Einbeinstand richtig üben: Technik, wie lange auf einem Bein stehen nach Alter, Steigerung mit geschlossenen Augen, was er testet und häufige Fehler.',
  h1: 'Einbeinstand: wie er geht, normale Haltezeiten und die Steigerung mit geschlossenen Augen',
  lede:
    'Auf einem Bein zu stehen, ist einer der einfachsten Tests für die Kontrolle von Sprunggelenk und Fuß. Es ist auch eine Übung. Jede Sekunde, die du die Position hältst, arbeiten die kleinen Muskeln in Fuß und Sprunggelenk, um dich aufrecht zu halten. Eine Studie von 2007 mit 549\u00A0gesunden Erwachsenen fand, dass die Fähigkeit, mit offenen und geschlossenen Augen auf einem Bein zu stehen, mit dem Alter stetig abnimmt, und eine Metaanalyse von 2018 fand, dass Gleichgewichtstraining das Risiko für Umknicktraumata bei Sportlern um 46\u00A0% senkte.',
  takeaways: [
    'Gesunde Erwachsene zwischen 18 und 39\u00A0Jahren standen im Schnitt 43,3\u00A0Sekunden mit offenen und 9,4\u00A0Sekunden mit geschlossenen Augen auf einem Bein. Mit 60 bis 69\u00A0Jahren lag der Schnitt mit offenen Augen bei 26,9\u00A0Sekunden und mit geschlossenen Augen nur noch bei 2,8\u00A0Sekunden (Springer und Kollegen, 2007).',
    'Eine Metaanalyse mit 3.577\u00A0Sportlern fand, dass Gleichgewichtstraining das Risiko für Umknicktraumata im Vergleich zu keiner Maßnahme um 46\u00A0% senkte (Bellows und Wong, 2018).',
    'Das Gleichgewichtsziel von Walkito sind 30\u00A0Sekunden auf einem Bein. Der Test läuft alle 14\u00A0Tage, solange das Gleichgewichtsziel aktiv ist.',
    'Wenn du die Augen schließt, fällt das Sehen als Hilfe fürs Gleichgewicht weg, und Fuß und Sprunggelenk müssen mehr Arbeit übernehmen. Die App hat den Stand mit geschlossenen Augen als nächste Stufe nach dem Halten mit offenen Augen.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Wie geht der Einbeinstand?',
      paragraphs: [
        'Stell dich in die Nähe einer Wand oder Arbeitsplatte. Heb einen Fuß vom Boden, indem du das Knie leicht beugst. Schau auf einen festen Punkt geradeaus. Lass den Standfuß wackeln. Genau darum geht es: Die kleinen Muskeln in Fuß und Sprunggelenk arbeiten, um dich aufrecht zu halten.',
        'Halte so lange du kannst, bis zu 30\u00A0Sekunden, dann wechsle die Seite. Dreimal pro Seite ist eine übliche Dosis. Wenn du nicht länger als ein paar Sekunden halten kannst, lass die Fingerspitzen an der Wand und steigere dich nach und nach.',
      ],
      exercises: [
        {
          name: 'Einbeinstand',
          evidence: {
            level: 'moderate',
            why: 'Gleichgewichtstraining senkt das Risiko für Umknicktraumata (Metaanalyse von Bellows 2018). Der Einbeinstand ist eine übliche klinische Messung mit Normwerten (Springer 2007).',
          },
          dose: 'Walkito beginnt mit 3-mal 30\u00A0Sekunden halten, jede Seite',
          how: 'Stell dich nahe einer Wand auf einen Fuß. Schau auf einen festen Punkt. Lass das Sprunggelenk wackeln. Halte bis zu 30\u00A0Sekunden.',
          often: 'Die meisten Einheiten',
          feel: 'Fuß und Sprunggelenk arbeiten, um ruhig zu bleiben',
          stop: 'Scharfer Schmerz in Fuß oder Sprunggelenk, nicht nur Wackeln',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Lass den Fuß wackeln, genau das ist die Übung',
          alt: 'Eine Figur steht nahe einer Wand auf einem Bein, Fuß und Sprunggelenk sind hervorgehoben',
        },
      ],
      cites: [CITE.springer, CITE.bellows],
    },
    {
      h2: 'Wie lange sollte man auf einem Bein stehen können?',
      paragraphs: [
        'Eine Studie von 2007 testete 549\u00A0gesunde Erwachsene in verschiedenen Altersgruppen. Die Ergebnisse geben einen groben Richtwert, keine Grenze für Bestehen oder Durchfallen.',
      ],
      table: {
        caption: 'Mittlere Zeiten im Einbeinstand mit offenen und geschlossenen Augen (Springer 2007)',
        head: ['Altersgruppe', 'Augen offen (Sekunden)', 'Augen geschlossen (Sekunden)'],
        rows: [
          ['18-39', '43,3', '9,4'],
          ['40-49', '40,3', '7,3'],
          ['50-59', '37,0', '4,8'],
          ['60-69', '26,9', '2,8'],
          ['70-79', '15,0', '2,0'],
          ['80-99', '6,2', '1,3'],
        ],
      },
      after: [
        'Sobald die Augen zu sind, fallen die Zahlen stark ab, vor allem ab 50. Deshalb ist die Variante mit geschlossenen Augen ein viel empfindlicherer Test für die Kontrolle von Sprunggelenk und Fuß. Das ist auch der Grund, warum die Walkito-App nach dem Halten mit offenen Augen eine Steigerung mit geschlossenen Augen hat.',
        'Wichtiger, als eine Tabelle zu treffen, ist, ob deine Zeit über die Wochen besser wird und ob beide Seiten ungefähr gleich sind. Ein großer Unterschied zwischen den Beinen kann auf eine Lücke bei Kraft oder Stabilität auf einer Seite hindeuten.',
      ],
      cites: [CITE.springer],
    },
    {
      h2: 'Die Steigerung mit geschlossenen Augen',
      paragraphs: [
        'Wenn du die Augen schließt, fällt die visuelle Information weg, die dein Gehirn normalerweise fürs Gleichgewicht nutzt. Dadurch müssen die Propriozeptoren in Fuß und Sprunggelenk, die Sensoren, die Position und Bewegung erfassen, mehr Arbeit übernehmen. Es ist eine schwerere Variante derselben Übung, keine andere Übung.',
        'Stell dich zur Sicherheit in die Nähe einer Wand. Schließ die Augen und halte so lange du kannst. Bei den meisten fällt die Zeit auf einen Bruchteil der Zeit mit offenen Augen. Dieser Unterschied wird mit Übung kleiner.',
        'Die Walkito-App hat den Stand mit geschlossenen Augen als eigene Übung: 3-mal 20\u00A0Sekunden halten, beide Füße (im Wechsel). Sie öffnet sich als Steigerung, sobald das Gleichgewichtsziel mit offenen Augen sicher sitzt.',
      ],
    },
    {
      h2: 'Warum zählt das Gleichgewicht bei Fußschmerzen?',
      keyFact: 'Bei Umknicktraumata fand eine gepoolte Analyse von 8\u00A0Studien mit 3.577\u00A0Sportlern, dass Gleichgewichtstraining das Risiko im Vergleich zu keiner Maßnahme um 46\u00A0% senkte (Bellows und Wong, 2018).',
      paragraphs: [
        'Gleichgewicht ist nicht getrennt von der Kraft im Fuß. Wenn du auf einem Bein stehst, arbeiten die kurzen Fußmuskeln (die kleinen Muskeln im Fuß, die das Gewölbe stützen), die Wadenmuskeln, der Tibialis anterior und die Stabilisatoren der Hüfte zusammen. Eine Lücke irgendwo in dieser Kette zwingt den Fuß auszugleichen.',
        'Bei Plantarfasziitis und Plattfüßen steht Gleichgewichtstraining in Übungsprogrammen neben Dehnen und Kräftigen, weil es die ganze Kette auf einmal trainiert. Eine Studie von 2023 mit 52\u00A0Personen mit flexiblem Plattfuß fand, dass ein Programm aus Kurzer-Fuß-Übungen, Arbeit am Sprunggelenk, Hüftkräftigung, Dehnen und Gleichgewichtsarbeit die Form des Gewölbes stärker veränderte als bei einer Kontrollgruppe. Das Gleichgewicht wurde in dieser Studie nicht einzeln getestet, war aber Teil des Programms, das gewirkt hat.',
        'Speziell bei Umknicktraumata fand eine Metaanalyse von 2018 mit 8\u00A0Studien und 3.577\u00A0Sportlern, dass Gleichgewichtstraining das Risiko im Vergleich zu keiner Maßnahme um 46\u00A0% senkte. Das ist der stärkste einzelne Befund dafür, Gleichgewicht in ein Fußprogramm aufzunehmen.',
      ],
      cites: [CITE.bellows, CITE.brijwasi],
    },
    {
      h2: 'Was sind die häufigsten Fehler beim Einbeinstand?',
      paragraphs: [
        'Auf den Boden schauen. Deine Augen sollten auf einem festen Punkt auf Augenhöhe liegen. Wenn du nach unten schaust, verlagert sich dein Gewicht nach vorn, und die Übung wird leichter, was den Zweck verfehlt.',
        'Das Standknie durchdrücken. Eine leichte Beugung hält die Muskeln aktiv. Ein durchgedrücktes Knie schiebt die Last aufs Gelenk statt auf die Muskeln drumherum.',
        'Versuchen, nicht zu wackeln. Das Wackeln ist die Übung. Die kleinen Korrekturen, die dein Fuß macht, um dich aufrecht zu halten, bauen Propriozeption und Kontrolle im Sprunggelenk auf. Wenn du dich mit eingekrallten Zehen am Boden festhältst oder dich anspannst, um jede Bewegung zu unterdrücken, sinkt der Trainingseffekt.',
        'Zu weit von der Wand weg stehen. Du musst nah genug dran sein, um dich abzufangen, wenn du das Gleichgewicht verlierst, vor allem bei der Variante mit geschlossenen Augen. Sicherheit geht vor.',
      ],
    },
    {
      h2: 'Leichtere und schwerere Varianten',
      paragraphs: [
        'Wenn du ein Bein nicht länger als ein paar Sekunden halten kannst, lass die Fingerspitzen an einer Wand und arbeite dich hoch. Schon eine leichte Berührung gibt dem Gehirn zusätzliche Information fürs Gleichgewicht. Nimm einen Finger nach dem anderen weg, wenn du besser wirst.',
        'Wenn sich 30\u00A0Sekunden auf hartem Boden leicht anfühlen, stell dich auf ein gefaltetes Handtuch oder ein Kissen. Der weiche Untergrund lässt das Sprunggelenk bei jedem Wackeln härter arbeiten. Die App hat Gleichgewicht auf einem Kissen als weitere Steigerung.',
        'Die schwerste Steigerung ist der Einbeinstand mit geschlossenen Augen auf weichem Untergrund. Dann fallen die visuelle Information und ein stabiler Boden weg, und Fuß und Sprunggelenk machen fast die ganze Arbeit.',
        'Für verwandte Übungen, die die Kette aufbauen, siehe [Fersenheben](/de/uebungen/fersenheben/), [Zehenheben an der Wand](/de/uebungen/zehenheben-an-der-wand/) und [Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Wie lange sollte man auf einem Bein stehen können?',
      cites: [CITE.springer],
      a: 'Eine Normwertstudie von 2007 mit 549\u00A0gesunden Erwachsenen fand, dass 18- bis 39-Jährige im Schnitt 43,3\u00A0Sekunden mit offenen und 9,4\u00A0Sekunden mit geschlossenen Augen schafften. Mit 60 bis 69\u00A0Jahren waren es 26,9\u00A0Sekunden mit offenen und 2,8\u00A0Sekunden mit geschlossenen Augen (Springer 2007). Das Gleichgewichtsziel von Walkito sind 30\u00A0Sekunden pro Seite.',
    },
    {
      q: 'Hilft der Einbeinstand gegen Umknicken im Sprunggelenk?',
      cites: [CITE.bellows],
      a: 'Eine Metaanalyse von 2018 mit 8\u00A0Studien und 3.577\u00A0Sportlern fand, dass Gleichgewichtstraining das Risiko für Umknicktraumata im Vergleich zu keiner Maßnahme um 46\u00A0% senkte (Bellows und Wong, 2018). Die meisten untersuchten Programme enthielten Gleichgewichtsübungen wie den Einbeinstand neben anderem Training.',
    },
    {
      q: 'Warum ist der Einbeinstand mit geschlossenen Augen schwerer?',
      cites: [CITE.springer],
      a: 'Dein Gehirn nutzt fürs Gleichgewicht das Sehen, Signale aus dem Innenohr und die Propriozeption (Sensoren in Fuß und Sprunggelenk) zusammen. Wenn du die Augen schließt, fällt eine der drei Quellen weg, und die anderen beiden müssen mehr tragen. In den Daten von Springer 2007 waren die Zeiten mit geschlossenen Augen in jedem Alter ein Bruchteil der Zeiten mit offenen Augen.',
    },
    {
      q: 'Wie oft sollte man den Einbeinstand üben?',
      a: 'Tägliches Üben ist in Ordnung, weil die Last gering ist. Walkito plant ihn an den meisten Trainingstagen ein. Schon ein paar Minuten Übung am Tag können die Haltezeiten über Wochen verbessern. Entscheidend ist Regelmäßigkeit, nicht die Dauer.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du oft das Gleichgewicht verlierst oder stürzt, ohne dass Untergrund oder Schuhe das erklären',
      'ein Sprunggelenk immer wieder wegknickt, vor allem nach einem früheren Umknicktrauma',
      'Taubheit, Kribbeln oder Gefühlsverlust im Fuß oder Unterschenkel auftritt',
      'dir schwindlig wird oder sich alles dreht, wenn du die Position wechselst',
      'sich dein Gleichgewicht plötzlich verändert, ohne dass du es dir erklären kannst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito nimmt den Einbeinstand und den Stand mit geschlossenen Augen in einen Plan auf, zusammen mit Fersenheben, Dehnungen und Fußübungen. Das Gleichgewichtsziel sind 30\u00A0Sekunden auf jedem Bein. Alle 14\u00A0Tage prüft ein kurzer Test, wie lange du halten kannst, und auch der Unterschied zwischen beiden Seiten wird verfolgt.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Sobald das Gleichgewichtsziel erreicht ist, läuft der Test nur noch alle 28\u00A0Tage, und ein neues Ziel tritt an seine Stelle. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Einbeinstand',
  campaign: 'ex-single-leg-balance-de',
};
