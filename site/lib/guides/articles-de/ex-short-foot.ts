import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-short-foot.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_SHORT_FOOT_DE: Guide = {
  lang: 'de',
  page: 'exShortFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Kurzer Fuß (Short Foot): Übung, Anleitung und Steigerung',
  description:
    'So geht die Kurzer-Fuß-Übung bei Plattfuß und Senkfuß: Technik, Sätze und Wiederholungen, vom Sitzen zum Stehen, typische Fehler und was Studien zeigen.',
  h1: 'Kurzer-Fuß-Übung: wie sie geht, Sätze und Steigerung',
  lede:
    'Die Kurzer-Fuß-Übung trainiert die kleinen Fußmuskeln darin, das Gewölbe zu halten, ohne die Zehen einzukrallen. Du ziehst den Fußballen Richtung Ferse, sodass der Fuß kürzer wird und sich das Gewölbe hebt. Eine Übersichtsarbeit von 2015 nannte sie die Grundlage des „Foot Core“-Trainings, und sie kommt in den meisten Programmen bei Plattfuß und Plantarfasziitis vor, die auf die inneren Fußmuskeln zielen.',
  takeaways: [
    'Eine MRT-Studie von 2016 mit 8\u00A0Sportlern fand, dass die Kurzer-Fuß-Übung in drei von vier getesteten inneren Fußsohlenmuskeln die höchste mittlere Aktivierung erzeugte (bis zu 34,9\u00A0%), verglichen mit Zehenspreizen, Strecken der Großzehe und Strecken der zweiten bis fünften Zehe (Gooding und Kollegen, 2016).',
    'EMG-Forschung fand, dass der Abductor hallucis, der Muskel, der das innere Gewölbe stützt, bei der Kurzer-Fuß-Übung mehr als viermal so aktiv war wie beim Handtuchgreifen (Jung und Kollegen, 2011).',
    'Eine Metaanalyse von 2024 zum Kurzer-Fuß-Training bei Plattfüßen fand, dass Programme über sechs Wochen den Navicular Drop verbesserten, kürzere Programme aber keine Signifikanz erreichten (Cheng und Kollegen, 2024).',
    'Gesunde Erwachsene, die vier Wochen Kurzer-Fuß-Übungen machten, verbesserten ihr dynamisches Gleichgewicht stärker als eine Gruppe, die im selben Zeitraum Handtuchgreifen machte (Lynn und Kollegen, 2012).',
  ],
  toc: false,
  sections: [
    {
      h2: 'Was ist die Kurzer-Fuß-Übung?',
      paragraphs: [
        'Die Kurzer-Fuß-Übung ist eine isometrische Anspannung der inneren Fußmuskeln. Du verkürzt den Abstand zwischen Fußballen und Ferse, indem du beide zueinander ziehst, und dadurch hebt sich das Gewölbe. Die Zehen bleiben die ganze Zeit flach und locker. Eine Übersichtsarbeit von McKeon und Kollegen von 2015 nannte sie die Kernübung ihres „Foot Core“-Modells und verglich die inneren Fußmuskeln mit der tiefen Rumpfmuskulatur.',
        'Andere Namen dafür sind Gewölbe-Doming, Fuß-Doming oder Fußverkürzung. Sie unterscheidet sich vom Handtuchgreifen oder Zehenkrallen, weil diese Übungen die Zehen beugen und dabei die langen Zehenbeuger einsetzen, die vom Schienbein herunterlaufen. Die Kurzer-Fuß-Übung soll die Muskeln isolieren, die ganz im Fuß liegen.',
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: 'Wie geht die Kurzer-Fuß-Übung?',
      paragraphs: [
        'Setz dich barfuß auf einen Stuhl, die Füße stehen flach auf dem Boden. Stell den Fuß so hin, dass Ferse, Fußballen und alle fünf Zehen auf dem Boden liegen. Ohne die Zehen einzukrallen oder festzukrallen, versuchst du, den Fußballen nach hinten Richtung Ferse zu ziehen. Dein Gewölbe hebt sich. Halte diese Spannung, dann lass los.',
        'Stell dir vor, du machst den Fuß kürzer und höher statt breiter und flacher. Die Zehen sollten nicht in den Boden drücken, sich nicht abheben und sich nicht einrollen. Wenn du siehst, dass die Zehen greifen, benutzt du die falschen Muskeln. Leg am Anfang einen Finger unter das Gewölbe, damit du spürst, wie es sich hebt.',
      ],
      exercises: [
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'moderate', why: 'Teil des getesteten Programms in einer randomisierten Studie von 2023 zu Plattfüßen (Brijwasi 2023). Allein betrachtet fand eine Metaanalyse von 2024 signifikante Ergebnisse erst nach sechs Wochen.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 10, 5\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin, die Füße stehen flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt. Die Zehen bleiben locker und flach. Halte fünf Sekunden, dann lass los.',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Das Gewölbe hebt sich, die Zehen bleiben locker',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß im Sitzen: Zieh den Fußballen zur Ferse, sodass sich das Gewölbe hebt',
          alt: 'Eine sitzende Figur spannt das Gewölbe eines Fußes an, die Zehen liegen flach auf dem Boden',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Welche Muskeln trainiert die Kurzer-Fuß-Übung?',
      paragraphs: [
        'Die Kurzer-Fuß-Übung zielt auf die inneren Fußsohlenmuskeln: Abductor hallucis, Flexor digitorum brevis, Quadratus plantae und Abductor digiti minimi. Diese Muskeln liegen ganz im Fuß und stützen das innere Längsgewölbe von unten.',
        'Eine MRT-Studie von Gooding und Kollegen von 2016 maß die Muskelaktivierung nach 40\u00A0Wiederholungen von vier verschiedenen Fußübungen bei 8\u00A0College-Sportlern. Die Kurzer-Fuß-Übung erzeugte die höchste mittlere Aktivierung im Abductor digiti minimi (34,9\u00A0%), im Abductor hallucis (29,7\u00A0%) und im Flexor digitorum brevis (24,8\u00A0%). Eine frühere EMG-Studie von Jung und Kollegen (2011) fand, dass der Abductor hallucis bei der Kurzer-Fuß-Übung mehr als viermal so aktiv war wie beim Handtuchgreifen.',
        'Deshalb gilt der kurze Fuß als bessere Übung als Handtuchgreifen, wenn es gezielt um die inneren Fußmuskeln geht. Handtuchgreifen setzt die langen Zehenbeuger ein, die äußeren Muskeln, die vom Schienbein zu den Zehen laufen. Bei der Kurzer-Fuß-Übung bleiben diese äußeren Muskeln ruhiger.',
      ],
      cites: [CITE.gooding, CITE.jung],
    },
    {
      h2: 'Wie steigerst du vom Sitzen zum Stehen und auf ein Bein?',
      paragraphs: [
        'Sobald sich der kurze Fuß im Sitzen zwei Einheiten hintereinander leicht angefühlt hat, kommt als Nächstes der Stand auf beiden Füßen. Dieselbe Anspannung muss jetzt dein Körpergewicht halten. Danach bringt der kurze Fuß auf einem Bein Anforderungen ans Gleichgewicht dazu und zeigt jeden Unterschied zwischen deiner linken und rechten Seite.',
        'Jede Variante ist dieselbe Bewegung. Es ändert sich nur die Last. Im Stehen verdoppelt sich die Anforderung an die Gewölbemuskeln. Auf einem Bein verdoppelt sie sich ungefähr noch einmal, und das Sprunggelenk muss zusätzlich stabilisiert werden.',
      ],
      exercises: [
        {
          name: 'Kurzer Fuß im Stehen',
          evidence: { level: 'moderate', why: 'Teil des getesteten Programms in einer randomisierten Studie von 2023 zu Plattfüßen (Brijwasi 2023). Nicht einzeln getestet.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 10, 5\u00A0Sekunden halten, beide Füße',
          how: 'Stell dich mit beiden Füßen auf den Boden. Zieh bei jedem Fuß den Fußballen Richtung Ferse, sodass sich beide Gewölbe heben. Die Zehen bleiben flach und lang. Nur das Gewölbe bewegt sich.',
          often: 'Jede Einheit, sobald sich der kurze Fuß im Sitzen leicht anfühlt',
          feel: 'Das Gewölbe arbeitet, während es dein Gewicht trägt',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'short_foot_double',
          caption: 'Kurzer Fuß im Stehen: Zehen flach und lang, nur das Gewölbe hebt sich',
          alt: 'Eine stehende Figur mit sichtbar gehobenen Gewölben an beiden Füßen und flachen Zehen',
        },
        {
          name: 'Kurzer Fuß auf einem Bein',
          evidence: { level: 'moderate', why: 'Teil des getesteten Programms in einer randomisierten Studie von 2023 zu Plattfüßen (Brijwasi 2023). Nicht einzeln getestet.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 10, 5\u00A0Sekunden halten, jeder Fuß',
          how: 'Stell dich auf einen Fuß. Heb das Gewölbe genauso wie vorher. Der große Zeh drückt sanft in den Boden. Wenn sich der große Zeh hebt, schummelt das Gewölbe, statt zu arbeiten.',
          often: 'Jede Einheit, sobald sich der kurze Fuß im Stehen leicht anfühlt',
          feel: 'Mehr Arbeit im Gewölbe, der große Zeh drückt nach unten',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'short_foot_single',
          caption: 'Kurzer Fuß auf einem Bein: Heb das Gewölbe, der große Zeh bleibt unten',
          alt: 'Eine Figur steht auf einem Fuß, das Gewölbe ist gehoben und der große Zeh liegt flach',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Welche Fehler machen die Kurzer-Fuß-Übung weniger wirksam?',
      paragraphs: [
        'Der häufigste Fehler ist, die Zehen einzukrallen. Wenn sich die Zehen beugen und in den Boden greifen, wird aus der Übung ein Zehenkrallen, und die äußeren Beuger übernehmen. Lass die Zehen lang und locker. Manchen hilft es, die Zehen kurz anzuheben, das Gewölbe anzuspannen und die Zehen dann wieder abzulegen.',
        'Der zweite Fehler ist, den Fuß nach außen zu drücken, statt ihn zu verkürzen. Die Bewegung geht gerade nach hinten, Fußballen zur Ferse, nicht zur Seite. Der dritte ist, die Luft anzuhalten. Atme bei jedem Halten normal weiter.',
        'Wenn du gar nicht spürst, dass sich das Gewölbe hebt, leg einen Finger oder einen Stift unter das Gewölbe. Das Ziel ist zu spüren, wie das Gewölbe gegen diesen Gegenstand drückt. Es kann mehrere Einheiten dauern, bis das Gehirn lernt, diese Muskeln auf Kommando anzusteuern. Diese Lernphase ist normal.',
      ],
    },
    {
      h2: 'Was sagt die Forschung zur Kurzer-Fuß-Übung?',
      keyFact: 'In einer Studie von 2023 mit 52\u00A0Personen mit flexiblen Plattfüßen veränderte ein sechswöchiges Programm aus Kurzer-Fuß-Übungen, Sprunggelenkstraining, Hüftkräftigung und Dehnen die Form des Gewölbes stärker als in einer Kontrollgruppe (Brijwasi und Kollegen, 2023).',
      paragraphs: [
        'Die stärksten Belege kommen aus Programmen, die die Kurzer-Fuß-Übung mit anderen Übungen kombinieren, nicht aus dem kurzen Fuß allein. In einer Studie von 2023 mit 52\u00A0Personen mit flexiblen Plattfüßen testeten Brijwasi und Kollegen ein sechswöchiges Programm aus Kurzer-Fuß-Übungen, Sprunggelenkstraining, Hüftkräftigung und Dehnen. Das Programm veränderte zwei Maße der Gewölbeform stärker als in der Kontrollgruppe.',
        'Eine Metaanalyse von Cheng und Kollegen von 2024 betrachtete das Kurzer-Fuß-Training allein über mehrere Studien. Zusammengefasst zeigte sich insgesamt keine signifikante Verbesserung beim Navicular Drop oder beim Foot Posture Index. Als die Autoren die Analyse aber auf Programme über sechs Wochen beschränkten, verbesserte sich der Navicular Drop signifikant. Die Dauer des Trainings zählt.',
        'Zum Gleichgewicht verglich eine randomisierte Studie von Lynn und Kollegen von 2012 bei gesunden Erwachsenen vier Wochen Kurzer-Fuß-Training mit vier Wochen Handtuchgreifen. Die Kurzer-Fuß-Gruppe verbesserte ihr dynamisches Gleichgewicht stärker als die Gruppe mit Handtuchgreifen.',
        'Keine dieser Studien ist groß. Die Belege stützen die Kurzer-Fuß-Übung als Teil eines breiteren Programms zur Kräftigung des Fußes, vor allem bei Plattfüßen und Schmerzen im Gewölbe. Sie ist keine Lösung für sich allein, und sie wurde nicht als Hauptbehandlung bei Plantarfasziitis allein getestet. Die ganze Übungsliste findest du unter [Übungen bei Plattfuß](/de/plattfuss-uebungen/) oder [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.lynn],
    },
  ],
  faq: [
    {
      q: 'Wie lange dauert es, bis Kurzer-Fuß-Übungen wirken?',
      cites: [CITE.cheng],
      a: 'Eine Metaanalyse von 2024 fand, dass Programme mit Kurzer-Fuß-Training unter sechs Wochen die Gewölbehöhe nicht signifikant veränderten, Programme über sechs Wochen den Navicular Drop aber verbesserten (Cheng 2024). Rechne mit mindestens sechs bis acht Wochen regelmäßigen Übens, bevor messbare Veränderungen auftreten.',
    },
    {
      q: 'Ist die Kurzer-Fuß-Übung dasselbe wie Gewölbe-Doming?',
      a: 'Ja. Kurzer-Fuß-Übung, Gewölbe-Doming und Fuß-Doming beschreiben alle dieselbe Bewegung: den Fußballen Richtung Ferse ziehen, um das Gewölbe zu heben, ohne die Zehen zu beugen. Der Name „kurzer Fuß“ kommt daher, dass der Fuß sichtbar kürzer wird, wenn sich das Gewölbe hebt.',
    },
    {
      q: 'Kann man die Kurzer-Fuß-Übung bei Plantarfasziitis machen?',
      cites: [CITE.guideline],
      a: 'Die Kurzer-Fuß-Übung ist nicht Teil der wichtigsten Leitlinie zur Plantarfasziitis, die sich auf Dehnen und Fersenheben mit Belastung konzentriert. Die inneren Fußmuskeln zu kräftigen kann aber als Teil eines breiteren Programms helfen. Die von der Leitlinie gestützten Übungen findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
    },
    {
      q: 'Ist die Kurzer-Fuß-Übung besser als Handtuchgreifen?',
      cites: [CITE.jung, CITE.lynn],
      a: 'Wenn es gezielt um die inneren Fußmuskeln geht, ja. EMG-Forschung zeigt, dass der Abductor hallucis bei der Kurzer-Fuß-Übung mehr als viermal so aktiv ist wie beim Handtuchgreifen (Jung 2011). Eine eigene randomisierte Studie fand, dass die Kurzer-Fuß-Gruppe nach vier Wochen ihr Gleichgewicht stärker verbesserte als die Gruppe mit Handtuchgreifen (Lynn 2012). Handtuchgreifen hat trotzdem seinen Platz als einfachere Einstiegsübung.',
    },
    {
      q: 'Wie viele Sätze und Wiederholungen Kurzer Fuß sollte ich machen?',
      cites: [CITE.brijwasi],
      a: 'Walkito beginnt mit 3\u00A0Sätzen à 10\u00A0Wiederholungen, jede 5\u00A0Sekunden gehalten, an jedem Fuß. Die Studie von 2023 zu Plattfüßen nutzte einen ähnlichen Bereich. Steigere die Schwierigkeit, indem du vom Sitzen zum Stehen und auf ein Bein gehst, statt mehr Wiederholungen zu machen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'dein Gewölbeschmerz nach einer plötzlichen Verletzung oder einem Knall angefangen hat, was auf einen Riss der Plantarfaszie hindeuten kann',
      'du Taubheit, Kribbeln oder Brennen im Fuß hast, was auf eine Beteiligung der Nerven hindeuten kann',
      'ein Fuß starr ist und sich das Gewölbe gar nicht hebt, wenn du auf die Zehenspitzen gehst, was eine Bildgebung brauchen kann',
      'der Schmerz trotz regelmäßiger Übungen von Woche zu Woche schlimmer wird',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito baut einen Plan, der die Kurzer-Fuß-Übung in drei Stufen enthält: im Sitzen, im Stehen, dann auf einem Bein. Jede Stufe öffnet sich, sobald sich zwei Einheiten auf der aktuellen Stufe leicht angefühlt haben. Du wählst Einheiten von 3, 5 oder 10\u00A0Minuten, und ein Test alle 14\u00A0Tage zeigt, ob sich deine Haltezeit für das Gewölbe verbessert.',
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Kurzer-Fuß-Übung',
  campaign: 'ex-short-foot-de',
};
