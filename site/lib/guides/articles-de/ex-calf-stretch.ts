import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-calf-stretch.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_CALF_STRETCH_DE: Guide = {
  lang: 'de',
  page: 'exCalfStretch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Wade dehnen bei Plantarfasziitis: Technik und Dosis',
  description:
    'Wade dehnen mit gestrecktem Knie bei Plantarfasziitis, Fersenschmerzen und verkürzter Wade: Technik, Sätze, wie lange halten und was die Studien sagen.',
  h1: 'Wadendehnung bei Plantarfasziitis: Technik, Sätze und Haltedauer',
  lede:
    'Die Wadendehnung mit gestrecktem Knie zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel. Ein verkürzter Gastrocnemius begrenzt, wie weit sich das Sprunggelenk beugt, und in einer Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0Kontrollpersonen war eine eingeschränkte Dorsalflexion im Sprunggelenk der stärkste unabhängige Risikofaktor. Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Wadendehnen ihre beste Bewertung, A.',
  takeaways: [
    'Eine eingeschränkte Dorsalflexion im Sprunggelenk war in einer Fall-Kontroll-Studie mit passenden Kontrollpersonen der stärkste unabhängige Risikofaktor für Plantarfasziitis, mit 23,3-fachen Odds (Riddle und Kollegen, 2003).',
    'In einer Fallserie mit 254\u00A0Personen mit Plantarfasziitis hatten 52 bis 60\u00A0% eine Kontraktur nur des Gastrocnemius (Patel und DiGiovanni, 2011).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade mit A, ihrer besten Bewertung (Koc und Kollegen, 2023).',
    'Eine Metaanalyse von 2020 fand einen großen Behandlungseffekt für Waden- und Plantarfaszien-Dehnung, die Qualität der Belege reichte aber von mittel bis sehr niedrig (Siriphorn und Eksakulkla, 2020).',
    'Walkito beginnt mit 3-mal 30\u00A0Sekunden halten, jedes Bein.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Wie dehnst du die Wade mit gestrecktem Knie?',
      paragraphs: [
        'Stell dich mit dem Gesicht zu einer Wand und leg die Hände etwa auf Schulterhöhe flach dagegen. Geh mit einem Fuß etwa 60\u00A0cm nach hinten. Das hintere Bein bleibt gestreckt, die Ferse drückt in den Boden und die Zehen zeigen nach vorn. Schieb die Hüfte Richtung Wand, bis du eine Dehnung im oberen Teil der hinteren Wade spürst. Halte 30\u00A0Sekunden, dann wechsle das Bein.',
        '**Entscheidend ist, dass das hintere Knie gestreckt bleibt.** So isolierst du den Gastrocnemius, der über Knie und Sprunggelenk zieht. Wenn du das Knie beugst, wandert die Dehnung zum Soleus, dem tieferen Wadenmuskel, und das ist eine andere Übung. Diese Variante findest du unter [Soleusdehnung](/de/uebungen/soleus-dehnen/).',
      ],
      exercises: [
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          evidence: {
            level: 'strong',
            why: 'Die Leitlinie von 2023 bewertet Wadendehnen mit A. Eine eingeschränkte Dorsalflexion im Sprunggelenk war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor für Plantarfasziitis.',
          },
          dose: 'Walkito beginnt mit 3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Geh mit einem Fuß nach hinten, das Knie bleibt gestreckt und die Ferse unten. Schieb die Hüfte nach vorn, bis du eine Dehnung in der oberen Wade spürst. 30\u00A0Sekunden halten.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der oberen Wade des hinteren Beins',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Warum verursacht eine verkürzte Wade Fersenschmerzen?',
      keyFact: 'In einer Fallserie mit 254\u00A0Personen mit Plantarfasziitis hatte etwas mehr als die Hälfte eine Kontraktur nur des Gastrocnemius, und 23 bis 30\u00A0% hatten beide Wadenmuskeln verkürzt (Patel und DiGiovanni, 2011).',
      paragraphs: [
        'Der Gastrocnemius zieht von hinter dem Knie über die Achillessehne bis zur Ferse. Die Plantarfaszie setzt unten am Fersenbein an, demselben Knochen, an dem hinten die Achillessehne ansetzt, und läuft nach vorn bis zu den Zehen. Wenn der Gastrocnemius verkürzt ist, begrenzt er, wie weit sich das Sprunggelenk nach oben beugen kann. Dadurch muss die Plantarfaszie bei jedem Schritt mehr Spannung abfangen.',
        'In einer Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0passenden Kontrollpersonen erhöhte eine eingeschränkte Dorsalflexion im Sprunggelenk die Odds für eine Plantarfasziitis um das 23,3-Fache. Das war stärker als BMI, Zeit im Stehen oder jede andere Variable in der Studie.',
        'Unabhängig davon fand eine Fallserie mit 254\u00A0Personen mit Plantarfasziitis, dass 52 bis 60\u00A0% eine Kontraktur nur des Gastrocnemius hatten und weitere 23 bis 30\u00A0% eine kombinierte Kontraktur von Gastrocnemius und Soleus. **Eine verkürzte Wade ist also keine Nebensache.** Sie kommt bei den meisten Menschen mit dieser Erkrankung vor.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Hilft die Wadendehnung bei Plantarfasziitis?',
      paragraphs: [
        'Die Leitlinie von 2023 zu Fersenschmerzen hat die verfügbaren Studien zum Dehnen geprüft und dem Dehnen von Plantarfaszie und Wade die Bewertung **A** gegeben, ihre höchste. Diese Bewertung gilt für Plantarfaszien-Dehnung und Wadendehnung zusammen, weil die meisten Protokolle beides enthalten.',
        'Eine systematische Übersichtsarbeit mit Metaanalyse von 2020 fasste die Studien zum Dehnen zusammen und fand einen großen Behandlungseffekt für Wadendehnung und Plantarfaszien-Dehnung. Die Autoren bewerteten die Qualität der Belege als mittel bis sehr niedrig und forderten bessere Studien. Trotzdem war die Effektstärke groß und mit anderen Maßnahmen vergleichbar.',
        'Keine einzelne Studie testet die Wadendehnung mit gestrecktem Knie allein bei Plantarfasziitis. Sie wird immer als Teil eines Programms getestet. Die Leitlinie empfiehlt sie zusammen mit der [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/) und Krafttraining wie [Fersenheben](/de/uebungen/fersenheben/).',
      ],
      cites: [CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Was sind die häufigsten Fehler bei der Wadendehnung?',
      paragraphs: [
        {
          list: [
            '**Das hintere Knie beugen.** Sobald sich das Knie beugt, wird der Gastrocnemius locker und die Dehnung wandert zum Soleus. Halte das hintere Knie während der ganzen Dehnung gestreckt.',
            '**Die hintere Ferse abheben.** Wenn die Ferse vom Boden kommt, wird die Wade nicht gedehnt. Drück zuerst die Ferse nach unten und lehn dich dann nach vorn, bis die Dehnung kommt.',
            '**Den hinteren Fuß nach außen drehen.** Wenn der Fuß nach außen rotiert, trifft die Dehnung die Außenseite der Wade statt den ganzen Muskel. Lass die Zehen gerade zur Wand zeigen.',
            '**Zu kurz halten.** 10\u00A0Sekunden reichen nicht, damit eine anhaltende Dehnung die Länge des Gewebes beeinflusst. Halte mindestens 30\u00A0Sekunden pro Wiederholung.',
          ],
        },
      ],
    },
    {
      h2: 'Wer sollte diese Dehnung machen und wer sie lassen?',
      paragraphs: [
        'Diese Dehnung ist für alle relevant mit Fersenschmerzen, Plantarfasziitis oder verkürzten Waden vom ganztägigen Stehen oder von einem Sport, der die Wade belastet, wie Laufen. Sie steht in den Übungslisten zu [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/), zu [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) und zu [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch).',
        'Lass sie weg oder pass sie an, wenn du ein Problem mit der Achillessehne hast, das beim Dehnen akut wehtut. Dann kommt der Schmerz von einer anderen Struktur, und die Achillessehne über eine Dehnung an der Wand zu belasten, ist vielleicht nicht der richtige Anfang. Den Ansatz speziell für die Achillessehne findest du unter [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
        'Wenn du die Wand nicht erreichst oder nicht bequem stehen kannst, gibt eine Dehnung im Sitzen mit Handtuch einen ähnlichen Zug an der Wade. Leg ein Handtuch um den Fußballen, halte das Knie gestreckt und zieh die Zehen zu dir.',
      ],
    },
    {
      h2: 'Wie die Wadendehnung und die Soleusdehnung zusammenpassen',
      paragraphs: [
        'Gastrocnemius und Soleus bilden zusammen die Wade. Die Variante mit gestrecktem Knie dehnt den Gastrocnemius. Die Variante mit gebeugtem Knie dehnt den Soleus. Es sind zwei Übungen, nicht zwei Versionen derselben.',
        'Die meisten Programme bei Plantarfasziitis enthalten beide, weil eine verkürzte Wade in einem der beiden Muskeln oder in beiden verkürzt sein kann. Die Leitlinie trennt sie nicht. Walkito plant beide in dieselbe Einheit ein, wenn Dehnen auf dem Plan steht.',
        'Die Seite zur [Soleusdehnung](/de/uebungen/soleus-dehnen/) erklärt die Variante mit gebeugtem Knie. Das ganze Programm aus Dehnen und Kraft findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Wie lange sollte man die Wade bei Plantarfasziitis dehnen?',
      cites: [CITE.guideline],
      a: 'Die meisten Protokolle halten 30\u00A0Sekunden, und damit beginnt auch Walkito. Die Leitlinie von 2023 empfiehlt Wadendehnen, ohne eine bestimmte Haltedauer festzulegen, aber die meisten Studien, auf die sie sich stützt, hielten 30\u00A0Sekunden pro Dehnung, 2- bis 3-mal pro Bein wiederholt.',
    },
    {
      q: 'Sollte man bei Plantarfasziitis jeden Tag die Waden dehnen?',
      cites: [CITE.guideline],
      a: 'Die Leitlinie von 2023 empfiehlt Waden- und Plantarfaszien-Dehnung als Teil der täglichen Selbstversorgung bei Plantarfasziitis. Walkito plant Wadendehnungen in die meisten Einheiten ein. Die Dehnung belastet wenig und birgt wenig Risiko, täglich ist also vernünftig, solange der Schmerz unter 6/10 bleibt.',
    },
    {
      q: 'Was ist der Unterschied zwischen Wadendehnung und Soleusdehnung?',
      cites: [CITE.patelGastrocnemius],
      a: 'Die Wadendehnung mit gestrecktem Knie zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel. Bei der Soleusdehnung beugst du das hintere Knie, dadurch wird der Gastrocnemius locker und der tiefere Soleus isoliert. Bei über der Hälfte der Menschen mit Plantarfasziitis war nur der Gastrocnemius verkürzt, bei 23 bis 30\u00A0% beide Wadenmuskeln (Patel und DiGiovanni, 2011).',
    },
    {
      q: 'Können verkürzte Waden Plantarfasziitis verursachen?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Eine verkürzte Wade begrenzt die Dorsalflexion im Sprunggelenk, und das war in einer Fall-Kontroll-Studie der stärkste unabhängige Risikofaktor für Plantarfasziitis (23,3-fache Odds). Unabhängig davon hatten 52 bis 60\u00A0% von 254\u00A0Personen mit Plantarfasziitis eine Kontraktur nur des Gastrocnemius. Eine verkürzte Wade bedeutet nicht sicher eine Plantarfasziitis, erhöht die Odds aber deutlich.',
    },
  ],
  redFlags: {
    h2: 'Hör auf und geh zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz in der Achillessehne selbst sitzt, nicht im Wadenmuskel',
      'du beim Dehnen ein plötzliches Knallen oder ein reißendes Gefühl spürst',
      'die Wade nur auf einer Seite geschwollen, gerötet oder warm ist',
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'Taubheit, Kribbeln oder Brennen zur verkürzten Wade dazukommen',
      'es nach mehreren Wochen täglichen Dehnens nicht besser geworden ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito plant die Wadendehnung zusammen mit der Soleusdehnung und der Plantarfaszien-Dehnung in die meisten Einheiten ein. Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Die App geht in deinem Tempo vom Dehnen zum Krafttraining über.',
    more: [
      'Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Wadendehnung (Gastrocnemius, gestrecktes Knie)',
  campaign: 'ex-calf-stretch-de',
};
