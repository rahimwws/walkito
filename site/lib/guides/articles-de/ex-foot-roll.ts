import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-foot-roll.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 * No RCT has tested foot rolling on its own; evidence level stays 'early'.
 */

export const EX_FOOT_ROLL_DE: Guide = {
  lang: 'de',
  page: 'exFootRoll',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fuß mit Ball rollen bei Plantarfasziitis: Technik',
  description:
    'Fuß mit Ball rollen bei Plantarfasziitis: Technik mit Ball oder gefrorener Flasche, wie lange rollen und was es bringt und was nicht.',
  h1: 'Fußrollen bei Plantarfasziitis: Ball, Flasche und Technik',
  lede:
    'Die Fußsohle über einen Ball oder eine Flasche zu rollen, ist einer der häufigsten Schritte zur Selbsthilfe bei Plantarfasziitis. Es tut gut, und Fachleute empfehlen es, um das Gewebe zwischen den Einheiten zu beruhigen. Aber keine randomisierte Studie hat das Rollen allein bei Plantarfasziitis getestet. Diese Seite erklärt, was das Rollen bewirkt, was nicht, und wo eine gefrorene Flasche ehrlich gesagt hingehört.',
  takeaways: [
    'Keine randomisierte Studie hat Fußrollen als einzelne Maßnahme bei Plantarfasziitis getestet. Es wird viel empfohlen, als Maßnahme für Wohlgefühl und Erholung, nicht als Hauptmaßnahme.',
    'Die Leitlinie von 2023 zu Fersenschmerzen empfiehlt Dehnen (Bewertung A) und Krafttraining (Bewertung B) als die Säulen der Übungen. Rollen wird nicht eigens bewertet.',
    'Eine gefrorene Wasserflasche bringt Kälte zum Rollen dazu. Kälte kann Beschwerden nach einem Schub lindern, aber keine Studie zeigt, dass sie die Erholung bei Plantarfasziitis stärker beschleunigt als Rollen allein.',
    'Walkito setzt das Fußrollen als Erholungsübung ans Ende einer Einheit, für 2\u00A0Minuten.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Wie geht das Fußrollen?',
      paragraphs: [
        'Setz dich auf einen Stuhl, ein Fuß steht auf einem Ball. Ein Tennisball, ein Lacrosseball oder ein Massageball, alles geht. Leg den Ball unter das Gewölbe und roll ihn langsam vom Fußballen nach hinten zur Ferse und wieder nach vorn. Mit festem Druck, nicht leicht. Der Ball sollte so ins Gewebe drücken, dass du einen tiefen, anhaltenden Druck spürst.',
        'Roll etwa 2\u00A0Minuten pro Fuß. Halte den Druck gleichmäßig und meide Stellen, die sich scharf anfühlen. Wenn du an einer Stelle zusammenzuckst, nimm Druck raus oder lass sie aus. Das Ziel ist eine feste Massage, kein Schmerz.',
      ],
      exercises: [
        {
          name: 'Fußrollen',
          evidence: {
            level: 'early',
            why: 'Viel empfohlen, aber in keiner Studie zu Plantarfasziitis als einzelne Maßnahme getestet.',
          },
          dose: 'Walkito beginnt mit 2\u00A0Minuten',
          how: 'Setz dich hin, ein Ball liegt unter dem Gewölbe. Roll ihn langsam mit festem Druck vom Fußballen zur Ferse. Wenn du zusammenzuckst, nimm Druck raus.',
          often: 'Erholungstage oder nach jeder Einheit als Cool-down',
          feel: 'Fester, anhaltender Druck unter dem Fuß',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Fußsohle ist hervorgehoben',
        },
      ],
    },
    {
      h2: 'Hilft es bei Plantarfasziitis, einen Ball unter dem Fuß zu rollen?',
      paragraphs: [
        'Physiotherapeuten und Podologen empfehlen das Rollen häufig als Teil der Versorgung bei Plantarfasziitis. Die Idee: Es wirkt wie eine Selbstmassage, übt Druck entlang der Faszie aus, kann die Durchblutung vor Ort steigern und das Gefühl von Verspannung verringern. Viele berichten nach dem Rollen von kurzfristiger Erleichterung.',
        'Trotzdem hat keine randomisierte Studie das Rollen als alleinige Maßnahme bei Plantarfasziitis getestet. Es steht in Protokollen neben Dehnen und Kräftigen, ist aber nie die Variable, die gemessen wird. Die Leitlinie von 2023 bewertet es nicht eigens. Die Belege liegen beim Dehnen und beim Krafttraining.',
        'Rollen gehört in die Kategorie Erholung. Es ist nützlich nach einem langen Tag auf den Beinen, nach einer Einheit Fersenheben oder immer dann, wenn sich die Sohle verspannt und schmerzhaft anfühlt. Es ersetzt nicht die [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/), die [Wadendehnung](/de/uebungen/wade-dehnen/) oder das [Fersenheben](/de/uebungen/fersenheben/), die die Bewertungen der Leitlinie tragen.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Solltest du eine gefrorene Wasserflasche nehmen?',
      paragraphs: [
        'Eine gefrorene Wasserflasche ist eines der beliebtesten Hausmittel bei Plantarfasziitis. Durch ihre Form kannst du die ganze Länge der Sohle rollen, und die Kälte betäubt die Stelle gleichzeitig. Fachleute empfehlen sie oft, und sie fühlt sich gut an.',
        'Das sagen die Belege tatsächlich. Kältetherapie (Eis, gefrorene Flaschen) ist ein allgemeines Mittel gegen Schmerzen. Sie lindert Beschwerden, indem sie Nervenenden betäubt, und kann Schwellungen vorübergehend verringern. Aber keine randomisierte Studie hat bei Plantarfasziitis eine gefrorene Flasche mit einer Flasche bei Raumtemperatur verglichen. Die Erleichterung, die du spürst, ist wahrscheinlich eine Mischung aus dem Rollen (Druck auf die Faszie) und dem Betäuben (Kälte auf die Nervenenden). Ob die Kälte die Erholung stärker beschleunigt als Rollen allein, ist eine offene Frage.',
        'Wenn dir eine gefrorene Flasche Erleichterung bringt, nimm sie. Verlass dich nur nicht darauf, dass die Kälte Dehnen und Krafttraining ersetzt. Und kühl nicht länger als 15 bis 20\u00A0Minuten am Stück. Lange Kälte kann die Haut reizen.',
      ],
    },
    {
      h2: 'Welchen Ball solltest du nehmen?',
      paragraphs: [
        'Ein Tennisball ist der häufigste Einstieg. Er ist weich genug, um ins Gewölbe zu drücken, ohne scharf zu sein. Ein Lacrosseball ist fester und gibt mehr Druck. Ein Golfball ist klein und sehr hart und kann für eine schmerzende Ferse zu viel sein.',
        'Fang mit dem an, was du hast. Wenn sich ein Tennisball nach ein paar Einheiten zu weich anfühlt, probier einen Lacrosseball. Wenn du bei jedem Ball zusammenzuckst, ist er zu fest oder du drückst zu stark. Die Übung sollte sich wie eine tiefe Massage anfühlen, nie so, als würdest du in eine Verletzung hineinreiben.',
        'Eine gefrorene Wasserflasche geht statt eines Balls und bringt Kälte dazu. Eine Faszienrolle unter dem Fuß ist noch sanfter. Eine spezielle Fußrolle aus dem Sportgeschäft macht dasselbe. Für keine davon ist belegt, dass sie besser wirkt als die anderen.',
      ],
    },
    {
      h2: 'Was sind die häufigsten Fehler beim Fußrollen?',
      paragraphs: [
        'Zu fest drücken. Fester ist nicht besser. Wenn du drückst, bis der Schmerz 6/10 erreicht oder du das Gesicht verziehst, reizt du die Faszie vielleicht, statt sie zu beruhigen. Geh zurück auf festen, gleichmäßigen Druck.',
        'Zu schnell rollen. Schnelles Hin und Her springt über das Gewebe hinweg. Roll langsam, etwa eine ganze Bahn pro Sekunde, damit jede Stelle anhaltenden Druck bekommt.',
        'Es als einzige Übung machen. Rollen fühlt sich produktiv an und geht leicht am Schreibtisch. Aber es kräftigt die Wade nicht und dehnt die Faszie nicht so, wie es die von der Leitlinie bewerteten Übungen tun. Kombinier es mit der [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/) und [Wadenheben](/de/wadenheben-plantarfasziitis/) für das ganze Bild.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wann solltest du den Fuß rollen und wann nicht?',
      paragraphs: [
        'Roll nach einem langen Tag auf den Beinen, nach einer Einheit Fersenheben oder immer dann, wenn sich die Sohle verspannt anfühlt. In Walkito taucht das Fußrollen an Erholungstagen und am Ende der Einheiten als Cool-down auf.',
        'Lass das Rollen weg, wenn die Ferse akut geschwollen, gerötet oder warm ist. Diese Zeichen können auf etwas anderes als eine Plantarfasziitis hindeuten, und Druck auf eine entzündete Stelle kann es schlimmer machen. Geh zuerst zu einer medizinischen Fachperson. Alle Übungen, die die Leitlinie empfiehlt, findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) oder [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Hilft eine gefrorene Wasserflasche unter dem Fuß bei Plantarfasziitis?',
      a: 'Eine gefrorene Wasserflasche verbindet Rollen (Druck auf die Faszie) und Kälte (betäubt die Nervenenden). Beides kann Beschwerden kurzfristig lindern. Keine Studie hat bei Plantarfasziitis eine gefrorene Flasche mit einer bei Raumtemperatur verglichen, also ist unbekannt, ob die Kälte über das Rollen hinaus etwas für die Erholung bringt. Ausprobieren ist sicher, und viele finden es wohltuend.',
    },
    {
      q: 'Wie lange sollte man den Fuß auf einem Ball rollen?',
      a: 'Etwa 2\u00A0Minuten pro Fuß sind eine vernünftige Anfangsdosis. Das nimmt auch Walkito. Du kannst es ein paarmal am Tag wiederholen, wenn es dir Erleichterung bringt. Eine Dosis aus der Forschung gibt es nicht, weil Rollen nicht als alleinige Maßnahme getestet wurde.',
    },
    {
      q: 'Ist ein Tennisball oder ein Lacrosseball besser bei Plantarfasziitis?',
      a: 'Fang mit einem Tennisball an. Er ist weicher und verursacht an einer schmerzenden Ferse seltener scharfe Schmerzen. Ein Lacrosseball gibt festeren Druck und fühlt sich vielleicht besser an, wenn der akute Schmerz abgeklungen ist. Für keinen ist belegt, dass er überlegen ist. Nimm den, der festen Druck gibt, ohne dass du zusammenzuckst.',
    },
    {
      q: 'Kann Fußrollen eine Plantarfasziitis verschlimmern?',
      a: 'Ja, wenn du zu fest drückst. Aggressiv in eine schmerzende Faszie hineinzureiben, kann die Entzündung verstärken, statt sie zu beruhigen. Der Druck sollte sich wie eine tiefe Massage anfühlen, fest, aber nicht scharf. Wenn der Schmerz 6/10 erreicht oder die Sohle am nächsten Morgen stärker schmerzt, mach sanfter.',
    },
    {
      q: 'Ersetzt Fußrollen das Dehnen?',
      cites: [CITE.guideline],
      a: 'Nein. Die Leitlinie von 2023 bewertet Dehnen mit A und Krafttraining mit B. Rollen wird gar nicht bewertet. Es ist ein Erholungsschritt neben den Übungen, hinter denen die Belege stehen, wie der Plantarfaszien-Dehnung und dem Fersenheben. Rollen allein bringt dir nicht denselben Nutzen.',
    },
  ],
  redFlags: {
    h2: 'Hör auf und geh zu einer medizinischen Fachperson, wenn',
    bullets: [
      'die Sohle akut geschwollen, gerötet oder warm ist',
      'das Rollen den Schmerz am nächsten Morgen immer wieder schlimmer macht',
      'der Schmerz scharf ist und an einem einzigen Punkt sitzt, der bei Druck schlimmer wird',
      'du Taubheit, Kribbeln oder Brennen unter dem Fuß spürst',
      'der Schmerz nach einer Verletzung, einem Sturz oder einem plötzlichen Knallen im Gewölbe angefangen hat',
      'es trotz des ganzen Übungsprogramms nach mehreren Wochen nicht besser geworden ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito setzt das Fußrollen ans Ende der Einheiten und auf Erholungstage. Die App kümmert sich um Zeitpunkt und Reihenfolge, damit du dir nicht merken musst, an welchen Tagen du rollst und an welchen du dehnst oder kräftigst.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fußrollen',
  campaign: 'ex-foot-roll-de',
};
