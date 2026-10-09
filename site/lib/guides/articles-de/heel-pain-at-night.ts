import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/heel-pain-at-night.ts`, written around the German
 * queries «Fersenschmerzen nachts», «Fersenschmerzen in Ruhe», «Ferse tut im
 * Liegen weh». Informal «du», terminology and exercise names as in
 * `lib/guides/de.ts`. Figures, doses, grades and qualifiers are identical to
 * the English page. Same citation keys as the English page (including
 * CITE.tedeschiBaxter); no new citations.
 */

export const HEEL_PAIN_AT_NIGHT_DE: Guide = {
  lang: 'de',
  page: 'heelPainAtNight',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersenschmerzen nachts: Ursachen und Warnzeichen',
  description:
    'Fersenschmerzen nachts oder in Ruhe können auf einen Ermüdungsbruch, einen eingeklemmten Nerv oder Arthritis hindeuten. Warnzeichen und wann zum Arzt.',
  h1: 'Fersenschmerzen nachts: woher sie kommen und wann sie ein Warnzeichen sind',
  lede:
    'Fersenschmerzen, die nachts, im Bett oder in Ruhe auftreten, sind ein anderes Muster als das typische Ziehen der Plantarfasziitis beim ersten Schritt am Morgen. Schmerzen nachts und in Ruhe können auf einen Ermüdungsbruch des Fersenbeins, einen eingeklemmten Nerv, eine entzündliche Gelenkerkrankung oder eine andere Erkrankung hindeuten, die eine medizinische Fachperson abklären sollte. Diese Seite geht die häufigen Ursachen durch und die, die du nicht aussitzen solltest.',
  intro: [
    'Wenn deine Ferse vor allem bei den ersten Schritten am Morgen wehtut und es danach besser wird, ist [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) der wahrscheinlichere Ausgangspunkt. Diese Seite ist für Schmerzen, die in Ruhe bleiben, dich aufwecken oder kommen, nachdem du eine Weile nicht auf den Beinen warst, und die nicht zum typischen Muster der Plantarfasziitis passen.',
  ],
  takeaways: [
    'Der Schmerz bei Plantarfasziitis ist bei den ersten Schritten nach einer Ruhephase am stärksten und lässt meist nach, sobald du in Bewegung bist. Schmerz, der in Ruhe bleibt, dich aus dem Schlaf weckt oder im Lauf der Nacht schlimmer wird, ist ein Warnmuster, das abgeklärt werden sollte (Tu, 2018).',
    'Ein Ermüdungsbruch des Fersenbeins kann nachts schmerzen oder pochen und wird bei fortgesetzter Belastung meist schlimmer, statt sich einzulaufen (Patel und Kollegen, 2011).',
    'Das Tarsaltunnelsyndrom und die Einklemmung des Baxter-Nervs, also Druck auf Äste des Schienbeinnervs (Nervus tibialis), verursachen brennende oder kribbelnde Fersenschmerzen, die sich anders anfühlen als eine Fasziitis (Tu, 2018). Die Einklemmung des Baxter-Nervs könnte für bis zu 20\u00A0% der chronischen Fersenschmerzen verantwortlich sein und kann auch in Ruhe auftreten (Tedeschi, 2025).',
    'Fersenschmerzen auf beiden Seiten mit langer Morgensteifigkeit können auf eine entzündliche Gelenkerkrankung wie eine Spondyloarthritis hindeuten. In einer Kohorte von 174\u00A0Menschen mit Plantarfasziitis sagten Schmerzen auf beiden Seiten eine längere Beschwerdedauer signifikant voraus (Hansen und Kollegen, 2018).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Nachtschienen bei anhaltender Plantarfasziitis mit **A**, aber sie sollen verhindern, dass sich die Faszie über Nacht verkürzt. Gegen die Art von Nachtschmerz, um die es auf dieser Seite geht, sind sie nicht gedacht (Koc und Kollegen, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Warum tut die Ferse nachts oder in Ruhe weh?',
      paragraphs: [
        'Plantarfasziitis tut weh, weil die Faszie im Schlaf steif wird und sich beim Aufstehen dann abrupt dehnt. Dieser Schmerz ist beim ersten Schritt am stärksten und wird besser, wenn du dich bewegst. Wenn deine Ferse wehtut, während du im Bett liegst und sie gar nicht belastest, steckt meist ein anderer Mechanismus dahinter.',
        'Eine Übersichtsarbeit von 2018 in American Family Physician nennt mehrere Ursachen für Fersenschmerzen, die sich anders verhalten als eine Plantarfasziitis. Der wichtigste Unterschied: Der Schmerz bei Plantarfasziitis wird mit Aktivität besser, Schmerzen durch Ermüdungsbrüche, eingeklemmte Nerven, Tumoren und Entzündungen folgen diesem Muster nicht.',
        'Im Schlaf zeigt der Fuß außerdem nach unten (Plantarflexion). In dieser Position können sich Achillessehne und Wade verkürzen, was manchmal zu Beschwerden an der Ferse beiträgt. Nachtschienen setzen hier an, indem sie das Sprunggelenk im rechten Winkel halten. Eine Nachtschiene ist aber ein Hilfsmittel bei Plantarfasziitis und kein Ersatz dafür, Schmerzen abzuklären, die in Ruhe wirklich schlimmer werden.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Könnte es ein Ermüdungsbruch des Fersenbeins sein?',
      paragraphs: [
        'Ein Ermüdungsbruch des Fersenbeins, ein feiner Riss im Knochen durch wiederholte Belastung, kann einen tiefen Schmerz verursachen, der nachts pocht. Anders als bei der Plantarfasziitis wird der Schmerz bei Aktivität meist schlimmer und läuft sich nicht ein. Oft geht ihm eine plötzliche Steigerung beim Laufen, Gehen oder Stehen auf hartem Boden voraus.',
        'Der „Squeeze-Test“, bei dem beide Seiten des Fersenbeins zusammengedrückt werden, ist das klassische klinische Zeichen. Schmerz beim Zusammendrücken ist bei Plantarfasziitis ungewöhnlich und bei Ermüdungsbrüchen häufig. Normale Röntgenbilder übersehen frühe Ermüdungsbrüche oft. Zur Bestätigung braucht es meist ein MRT oder eine Knochenszintigrafie.',
        'Eine Übersichtsarbeit von 2011 in American Family Physician stellte fest, dass Ermüdungsbrüche des Fersenbeins nach einer Steigerung der Aktivität oder einem Wechsel auf härteren Boden zunehmend schlimmere Schmerzen verursachen. Schmerz nachts und in Ruhe wurde zu den Merkmalen gezählt, die Ermüdungsbrüche von einer Fasziitis unterscheiden.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
    },
    {
      h2: 'Und ein eingeklemmter Nerv: Tarsaltunnelsyndrom und Baxter-Nerv?',
      keyFact: 'Eine narrative Übersichtsarbeit von 2025 kam zu dem Ergebnis, dass die Einklemmung des Baxter-Nervs für bis zu 20\u00A0% der chronischen Fersenschmerzen verantwortlich sein könnte (Tedeschi, 2025).',
      paragraphs: [
        'Der Schienbeinnerv (Nervus tibialis) verläuft durch einen Raum hinter dem Innenknöchel, den Tarsaltunnel. Druck dort, das Tarsaltunnelsyndrom, verursacht Brennen, Kribbeln oder Taubheit an der Fußsohle und der Ferse. Tu (2018) beschreibt den Schmerz beim Tarsaltunnelsyndrom als typischerweise schlimmer beim Stehen, Gehen oder Laufen und besser durch Ruhe und Hochlagern. Dieses Muster unterscheidet sich von der Plantarfasziitis, ist aber nicht dasselbe wie echter Ruheschmerz. Das Tarsaltunnelsyndrom passt also nicht immer zu dem Muster, um das es auf dieser Seite geht.',
        'Der Baxter-Nerv ist der erste Ast des seitlichen Fußsohlennervs (Nervus plantaris lateralis), ein kleinerer Nerv nahe der Innenseite der Ferse. Wenn er eingeklemmt ist, verursacht er stechende oder brennende Schmerzen an der Innenseite der Ferse. Der Schmerz wird im Lauf des Tages bei Aktivität oft schlimmer, kann aber auch in Ruhe auftreten. Laut einer Übersichtsarbeit von 2025 könnte die Einklemmung des Baxter-Nervs für bis zu 20\u00A0% der chronischen Fersenschmerzen verantwortlich sein (Tedeschi, 2025).',
        'Ein eingeklemmter Nerv wird häufig fälschlich als Plantarfasziitis diagnostiziert, weil beide Schmerzen an der Innenseite der Ferse verursachen. Der Unterschied liegt in der Art des Schmerzes: Brennen, Kribbeln oder Taubheit sind Nervenzeichen. Bildgebung und Messungen der Nervenleitgeschwindigkeit können einer medizinischen Fachperson helfen, die Diagnose zu bestätigen.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
    },
    {
      h2: 'Kann eine entzündliche Gelenkerkrankung nachts Fersenschmerzen machen?',
      keyFact: 'In einer Beobachtung über 5 bis 15\u00A0Jahre von 174\u00A0Menschen mit Plantarfasziitis sagten Fersenschmerzen auf beiden Seiten eine längere Beschwerdedauer signifikant voraus (Hansen und Kollegen, 2018).',
      paragraphs: [
        'Spondyloarthritiden, eine Gruppe entzündlicher Erkrankungen, zu denen Morbus Bechterew und Psoriasis-Arthritis gehören, können eine Enthesitis verursachen, also eine Entzündung dort, wo eine Sehne oder ein Band am Knochen ansetzt. Die Ferse ist eine häufige Stelle. Der Schmerz tritt oft auf beiden Seiten auf, kann am Ansatz der Achillessehne oder unter der Ferse sitzen und geht mit einer langen Morgensteifigkeit (über 30\u00A0Minuten) einher, die mit Bewegung besser wird.',
        'In einer Beobachtung über 5 bis 15\u00A0Jahre von 174\u00A0Menschen mit Plantarfasziitis sagten Fersenschmerzen auf beiden Seiten eine längere Beschwerdedauer signifikant voraus. Die Autoren merkten an, dass unerkannte systemische Entzündungserkrankungen diesen Befund teilweise erklären könnten.',
        'Auch rheumatoide Arthritis und Gicht können Fersenschmerzen verursachen. Wenn deine Fersenschmerzen auf beiden Seiten auftreten, die Steifigkeit jeden Morgen länger als 30\u00A0Minuten anhält oder andere Gelenke betroffen sind, sollte eine medizinische Fachperson nach einer entzündlichen Ursache suchen.',
      ],
      cites: [CITE.hansen, CITE.tuHeelPain],
    },
    {
      h2: 'Ist Plantarfasziitis nachts manchmal schlimmer?',
      paragraphs: [
        'Plantarfasziitis kann abends nach einem langen Tag auf den Beinen unangenehm sein. Das ist belastungsbedingter Schmerz durch die Summe der Belastung, nicht dasselbe wie Schmerz, der dich aus dem Schlaf weckt oder kommt, wenn du ohne Gewicht auf dem Fuß liegst.',
        'Manche merken auch Beschwerden an der Ferse, wenn der Fuß im Schlaf in eine gestreckte Position fällt und an der Plantarfaszie zieht. Genau dagegen sind Nachtschienen gedacht. Die Leitlinie von 2023 gibt Nachtschienen bei anhaltender Plantarfasziitis die Bewertung **A**, ihre beste. Sie halten das Sprunggelenk im rechten Winkel, sodass sich die Faszie über Nacht nicht verkürzt.',
        'Wenn der Schmerz wirklich nachts und in Ruhe am stärksten ist, statt am nächsten Morgen mit Bewegung besser zu werden, deutet dieses Muster weg von der Plantarfasziitis und hin zu den Erkrankungen oben. Geh nicht davon aus, dass es eine Fasziitis ist, und mach nicht einfach weiter.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Helfen Nachtschienen bei Fersenschmerzen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Nachtschienen bei Plantarfasziitis mit A, ihrer besten Bewertung, meist für ein bis drei Monate getragen (Koc und Kollegen, 2023).',
      paragraphs: [
        'Eine Nachtschiene ist eine Orthese, die das Sprunggelenk im Schlaf im 90-Grad-Winkel hält. Die Idee: Wade und Plantarfaszie sollen sich über Nacht nicht verkürzen, damit der erste Schritt am Morgen weniger wehtut.',
        'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Nachtschienen bei Plantarfasziitis mit **A**. Empfohlen werden sie meist für 1 bis 3\u00A0Monate, wenn der Schmerz bei den ersten Schritten mit Dehn- und Kraftübungen allein nicht besser geworden ist. Gegen Nervenschmerzen, Ermüdungsbrüche oder Entzündungen helfen sie nicht.',
        'Für die meisten sind Nachtschienen kein Hilfsmittel auf Dauer. Es ist unbequem, damit zu schlafen, und der Nutzen betrifft nur das Muster der Morgensteifigkeit. Wenn dein Nachtschmerz nicht von dieser Art aus Verkürzen und Dehnen ist, hilft eine Schiene wahrscheinlich nicht und kann die richtige Diagnose verzögern.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Welche Dehnungen und Übungen kannst du vor dem Schlafengehen machen?',
      paragraphs: [
        'Wenn dein Schmerz zum Muster der Plantarfasziitis passt, kann sanftes Dehnen von Wade und Plantarfaszie vor dem Schlafengehen die Steifigkeit am nächsten Morgen verringern. Dieselbe gezielte Plantarfaszien-Dehnung, die die Leitlinie beim Schmerz bei den ersten Schritten mit **A** bewertet, kannst du vor dem Schlafen machen: Zieh die Zehen mit der Hand zurück, bis du das Gewölbe spürst, halte 10\u00A0Sekunden, wiederhole 10-mal.',
        'Kraftübungen wie Fersenheben passen besser früher am Tag. Die vollständige Übungsliste findest du auf der Seite [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
        'Wenn dein Schmerz keine Plantarfasziitis ist oder du unsicher bist, ist Dehnen am Abend nicht der erste Schritt. Die richtige Diagnose ist es.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung (im Sitzen)',
          evidence: { level: 'strong', why: 'Bewertung A der Leitlinie. In der randomisierten Studie von DiGiovanni 2003 mit 101\u00A0Menschen (82 schlossen die Nachbeobachtung ab) war gezieltes Faszien-Dehnen beim Schmerz bei den ersten Schritten dem Wadendehnen überlegen.' },
          dose: '10-mal 10\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich auf die Bettkante. Leg den betroffenen Fuß über das andere Knie. Zieh die Zehen Richtung Schienbein zurück, bis du eine Dehnung entlang des Gewölbes spürst. Halte 10\u00A0Sekunden. Das ist auch die Dehnung, die die Leitlinie am Morgen empfiehlt, bevor dein Fuß den Boden berührt.',
          often: 'Vor dem Schlafengehen und vor dem Aufstehen am Morgen',
          feel: 'Eine kräftige Dehnung entlang des Gewölbes, kein stechender Schmerz',
          stop: 'Stechender Schmerz an der Ferse oder jedes Brennen oder Kribbeln',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du das Gewölbe spürst',
          alt: 'Eine sitzende Figur zieht die Zehen eines Fußes Richtung Schienbein zurück, die Plantarfaszie entlang des Gewölbes ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'strong', why: 'Bewertung A der Leitlinie bei Plantarfasziitis als Teil eines Programms zum Wadendehnen.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Mach mit einem Fuß einen Schritt zurück, das hintere Bein bleibt gestreckt, die Ferse unten. Lehn dich nach vorn, bis du eine Dehnung in der oberen Wade spürst. Halte 30\u00A0Sekunden. Wechsle die Seite.',
          often: 'Vor dem Schlafengehen, wenn verkürzte Waden zum Morgenschmerz beitragen',
          feel: 'Eine Dehnung in der oberen Wade, nicht an der Ferse',
          stop: 'Schmerz an der Ferse oder Achillessehne, der nicht innerhalb weniger Sekunden nachlässt',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, nach vorn lehnen',
          alt: 'Eine Figur lehnt sich an eine Wand, ein Bein gestreckt hinten, die Wadenmuskeln sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003],
    },
    {
      h2: 'Was unterscheidet Fersenschmerzen nachts von Fersenschmerzen am Morgen?',
      paragraphs: [
        'Fersenschmerzen am Morgen und nachts klingen ähnlich, deuten aber in verschiedene Richtungen. Der Morgenschmerz, das stechende Ziehen beim ersten Schritt, das nach ein paar Minuten Gehen nachlässt, ist das Lehrbuchbild der Plantarfasziitis. Das Gewebe ist über Nacht steif geworden und wird unter Last abrupt gedehnt.',
        'Nachtschmerz, also Schmerz, der kommt oder schlimmer wird, wenn du im Bett liegst und den Fuß nicht belastest, spricht für mehr als eine einfache Steifheit der Faszie. Die Erkrankungen, die am häufigsten mit echtem Ruheschmerz zusammenhängen, sind Ermüdungsbrüche, eingeklemmte Nerven, entzündliche Gelenkerkrankungen und selten Knochentumoren oder Infektionen.',
        'Wenn du nicht sicher bist, welches Muster du hast, ein einfacher Test: Wird der Schmerz besser, nachdem du 5 bis 10\u00A0Minuten gegangen bist? Wenn ja, ist das Muster der Plantarfasziitis wahrscheinlicher, und die Seite [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) ist der bessere Ausgangspunkt. Wenn nein, lies hier weiter und denk darüber nach, zu einer medizinischen Fachperson zu gehen.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain],
    },
  ],
  faq: [
    {
      q: 'Sind Fersenschmerzen nachts ein Zeichen für etwas Ernstes?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Das können sie sein. Schmerz in Ruhe oder Schmerz, der dich aus dem Schlaf weckt, ist ein Warnmuster. Ermüdungsbrüche des Fersenbeins, eingeklemmte Nerven (Tarsaltunnel oder Baxter-Nerv) und entzündliche Gelenkerkrankungen können alle nachts Fersenschmerzen machen. Diese Erkrankungen muss eine medizinische Fachperson diagnostizieren und behandeln. Geh nicht von einer Plantarfasziitis aus, wenn der Schmerz nicht dem typischen Muster beim ersten Schritt folgt.',
    },
    {
      q: 'Warum tut meine Ferse im Liegen weh?',
      cites: [CITE.tuHeelPain],
      a: 'Schmerz an der Ferse im Liegen, ohne Gewicht auf dem Fuß, kann von einem eingeklemmten Nerv, einem Ermüdungsbruch oder einer Entzündung kommen. Plantarfasziitis macht manchmal Beschwerden, wenn der Fuß im Bett nach unten zeigt, aber das ist Steifheit durch die Position, kein echter Ruheschmerz. Brennen oder Kribbeln in Ruhe deutet auf ein Nervenproblem hin.',
    },
    {
      q: 'Helfen Nachtschienen gegen Fersenschmerzen in der Nacht?',
      cites: [CITE.guideline],
      a: 'Nachtschienen halten das Sprunggelenk im 90-Grad-Winkel, damit sich Wade und Faszie nicht verkürzen. Die Leitlinie von 2023 zu Fersenschmerzen bewertet sie bei anhaltender Plantarfasziitis mit **A**. Sie helfen beim Muster der Morgensteifigkeit. Gegen Nervenschmerzen, Ermüdungsbrüche oder Entzündungen helfen sie nicht.',
    },
    {
      q: 'Wie unterscheide ich Plantarfasziitis von einem Ermüdungsbruch?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Der Schmerz bei Plantarfasziitis ist beim ersten Schritt am stärksten und wird beim Gehen besser. Ein Ermüdungsbruch des Fersenbeins wird bei fortgesetzter Aktivität meist schlimmer und läuft sich nicht ein. Der Squeeze-Test, bei dem beide Seiten des Fersenbeins zusammengedrückt werden, spricht eher für einen Bruch als für eine Fasziitis. Oft ist ein MRT nötig, weil normale Röntgenbilder frühe Brüche übersehen können.',
    },
    {
      q: 'Kann Plantarfasziitis nachts wehtun?',
      cites: [CITE.guideline],
      a: 'Plantarfasziitis kann abends nach einem langen Tag im Stehen oder Gehen schmerzen. Das ist die Summe der Belastung, kein Ruheschmerz. Im Schlaf fällt der Fuß außerdem in eine gestreckte Position, was die Faszie verkürzt und Beschwerden machen kann. Wenn dich der Schmerz wirklich aus dem Schlaf weckt, ist das keine typische Fasziitis und sollte abgeklärt werden.',
    },
    {
      q: 'Was ist ein eingeklemmter Baxter-Nerv?',
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
      a: 'Der Baxter-Nerv ist der erste Ast des seitlichen Fußsohlennervs. Wenn er nahe der Innenseite der Ferse eingeklemmt ist, verursacht er stechende oder brennende Schmerzen, manchmal mit Taubheit. Laut einer Übersichtsarbeit von 2025 könnte er für bis zu 20\u00A0% der chronischen Fersenschmerzen verantwortlich sein (Tedeschi, 2025). Anders als bei der Plantarfasziitis wird der Schmerz oft später am Tag oder in Ruhe schlimmer und lässt mit Bewegung nicht nach.',
    },
    {
      q: 'Sollte ich mit Fersenschmerzen in der Nacht zum Arzt?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Ja. Fersenschmerzen in der Nacht, die dich wecken, mit Bewegung nicht besser werden, mit Brennen oder Kribbeln einhergehen oder in beiden Fersen mit langer Steifigkeit auftreten, sollte eine medizinische Fachperson abklären. Diese Muster können auf einen Ermüdungsbruch, einen eingeklemmten Nerv oder eine Entzündungserkrankung hindeuten, gegen die Übungen allein nichts ausrichten.',
    },
    {
      q: 'Was kann ich nachts bei Fersenschmerzen auf die Ferse legen?',
      a: 'Kälte ist der häufigste erste Schritt: Ein Kühlpack oder eine gefrorene Wasserflasche auf der schmerzenden Stelle kann oberflächlichen Schmerz lindern. Nichts davon hilft gegen einen Ermüdungsbruch, einen eingeklemmten Nerv oder eine entzündliche Gelenkerkrankung, die Erkrankungen, die am stärksten mit echtem Nachtschmerz zusammenhängen. Ein Kühlpack ersetzt also nicht die Suche nach der Ursache.',
    },
    {
      q: 'Was sollte man vermeiden, wenn die Ferse nachts wehtut?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Geh nicht von einer Plantarfasziitis aus und mach nicht einfach weiter, wenn der Schmerz nicht zum Muster „erster Schritt, dann besser“ passt. Ignorier keinen Schmerz, der dich weckt, bei fortgesetztem Gehen schlimmer wird oder mit Brennen, Kribbeln oder Schwellung einhergeht. Wer Ruheschmerz selbst mit Dehnungen oder Nachtschienen behandelt, kann die Diagnose eines Ermüdungsbruchs, eines eingeklemmten Nervs oder einer entzündlichen Gelenkerkrankung verzögern.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz dich aus dem Schlaf weckt oder in Ruhe ohne Gewicht auf dem Fuß da ist',
      'der Schmerz bei fortgesetztem Gehen schlimmer wird und sich nach ein paar Minuten nicht einläuft',
      'du Brennen, Kribbeln oder Taubheit in der Ferse oder der Fußsohle spürst',
      'der „Squeeze-Test“ (beide Seiten des Fersenbeins zusammendrücken) den Schmerz auslöst',
      'beide Fersen wehtun, vor allem mit langer Morgensteifigkeit (über 30\u00A0Minuten) oder Schmerzen in anderen Gelenken',
      'der Schmerz nach einer plötzlichen Steigerung beim Laufen, einem Wechsel auf härteren Boden oder einer Verletzung begann',
      'die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'der Schmerz seit mehr als sechs Wochen da ist und nicht besser wird',
    ],
  },
  program: {
    h2: 'Wenn Übungen der richtige Schritt sind',
    text: 'Wenn eine medizinische Fachperson eine Plantarfasziitis bestätigt und die Erkrankungen oben ausgeschlossen hat, ist Training der Ansatz mit der besten Bewertung in der Leitlinie. Walkito baut einen täglichen Plan rund um die Belastung von Wade und Faszie, beginnt mit Dehnungen und steigert sich in deinem Tempo bis zu Kraftübungen.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein Test Wadenausdauer und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose. Wenn deine Fersenschmerzen nachts oder in Ruhe schlimmer sind, geh zu einer medizinischen Fachperson, bevor du anfängst, den Fuß zu belasten.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fersenschmerzen nachts',
  campaign: 'guide-heel-night-de',
};
