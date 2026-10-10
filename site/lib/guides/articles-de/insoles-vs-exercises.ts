import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const INSOLES_VS_EXERCISES_DE: Guide = {
  lang: 'de',
  page: 'insolesVsExercises',
  mainSource: CITE.whittakerOrthoses,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Einlagen oder Übungen: Was brauchen deine Füße?',
  description:
    'Einlagen oder Übungen? Was Studien zu Einlagen bei Fersenschmerzen und Plattfuß zeigen, maßgefertigt oder von der Stange, und wie du beides kombinierst.',
  h1: 'Einlagen oder Übungen: Brauchst du orthopädische Einlagen bei Fußschmerzen?',
  lede:
    'Die meisten Menschen mit Fersenschmerzen oder Plattfuß brauchen keine maßgefertigten Einlagen. In Studien bringen Einlagen einen kleinen, kurzlebigen Rückgang der Schmerzen, und fertige Einlagen schneiden etwa so gut ab wie maßgefertigte. Übungen bauen die Belastbarkeit von Fuß und Wade auf, und die Leitlinie zu Fersenschmerzen bewertet sie höher. Einlagen sind eine vernünftige Ergänzung, kein Ersatz.',
  takeaways: [
    'Eine Übersichtsarbeit über 19\u00A0Studien (1.660\u00A0Personen) fand, dass Einlagen Fersenschmerzen nur mittelfristig stärker linderten als eine Schein-Einlage, und das nur wenig, ohne Unterschied zwischen maßgefertigten und fertigen Einlagen (Whittaker und Kollegen, 2018).',
    'In einer Studie mit 185\u00A0Personen mit Fersenschmerzen schnitten maßgefertigte Einlagen nach drei Monaten nicht besser ab als Schein-Einlagen, und die hausärztliche Versorgung schnitt etwas besser ab als maßgefertigte Einlagen (Rasenberg und Kollegen, 2021).',
    'Die Leitlinie von 2023 zu Fersenschmerzen empfiehlt **gegen** Einlagen allein zur kurzfristigen Linderung (Bewertung B) und lässt sie zusätzlich zu anderen Maßnahmen zu (Bewertung C). Dehnen bekommt ein **A**, Krafttraining ein **B** (Koc und Kollegen, 2023).',
    'In einer kleinen Studie mit 18\u00A0jungen Erwachsenen mit Plattfuß folgte auf drei Monate mit maßgefertigten Einlagen ein Rückgang der Größe kleiner Fußmuskeln um 9,6 bis 17,4\u00A0% (Protopapas und Perry, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist der Unterschied zwischen Einlagen, orthopädischen Einlagen und Übungen?',
      paragraphs: [
        'Eine **Einlage** ist alles, was du in einen Schuh legst. Eine **orthopädische Einlage** (Fußorthese) ist eine Einlage, die so geformt ist, dass sie das Gewölbe stützt und die Ferse entlastet. **Fertige** Einlagen kaufst du von der Stange. **Maßgefertigte** werden nach einem Scan oder Abdruck deines Fußes gemacht, meist von einer Fachperson für Füße wie einem Orthopädieschuhtechniker oder einer Podologin, und kosten deutlich mehr.',
        'Beide verändern die Belastung des Fußes, solange du sie trägst. Übungen verändern das Gewebe selbst, sodass Fuß und Wade mehr Last tragen können, mit oder ohne Einlage.',
      ],
    },
    {
      h2: 'Helfen Einlagen bei Plantarfasziitis?',
      keyFact: 'In einer Übersichtsarbeit über 19\u00A0Studien mit 1.660\u00A0Personen linderten Einlagen Fersenschmerzen nur mittelfristig stärker als Schein-Einlagen, und maßgefertigte und fertige Einlagen unterschieden sich zu keinem Zeitpunkt (Whittaker und Kollegen, 2018).',
      paragraphs: [
        'Ein wenig, für eine Weile. Plantarfasziitis ist eine Reizung der Plantarfaszie, des Gewebebands unter dem Fußgewölbe. Der faire Test vergleicht eine echte Einlage mit einer **Schein-Einlage**: einer flachen, weichen Einlage, die echt aussieht, aber nicht stützt.',
        'In einer Studie mit 135\u00A0Personen verbesserten sowohl eine fertige als auch eine maßgefertigte Einlage die Funktion nach drei Monaten um etwa 8\u00A0Punkte auf einer Skala von 0 bis 100 gegenüber einer Schein-Einlage (Landorf und Kollegen, 2006). Der Unterschied beim Schmerz war ähnlich groß, aber statistisch nicht eindeutig. Nach zwölf Monaten unterschied sich keine Gruppe.',
        'Eine systematische Übersichtsarbeit fasste 19\u00A0randomisierte Studien mit 1.660\u00A0Personen zusammen (Whittaker und Kollegen, 2018). Mittelfristig, also etwa im zweiten und dritten Monat, linderten Einlagen den Schmerz stärker als eine Schein-Einlage, mit Belegen mittlerer Qualität. Der Effekt war klein, und die Autoren nannten es „unsicher, ob das eine klinisch bedeutsame Veränderung ist“. Kurzfristig und längerfristig gab es keinen klaren Nutzen.',
        'Die Leitlinie von 2023 zu Fersenschmerzen sieht es genauso: Einlagen **nicht** allein zur kurzfristigen Linderung (Bewertung B dagegen), aber sie **können** zusätzlich zu anderen Maßnahmen genutzt werden (Bewertung C).',
      ],
      figure: {
        id: 'plantar-fascia',
        caption: 'Die Plantarfaszie verläuft von der Ferse bis zu den Zehen. Eine Einlage nimmt ihr etwas Last ab, Übungen verändern, wie viel Last sie tragen kann.',
        alt: 'Die Unterseite eines Fußes, die Plantarfaszie ist von der Ferse bis zu den Zehen hervorgehoben',
      },
      cites: [CITE.landorf2006, CITE.whittakerOrthoses, CITE.guideline],
    },
    {
      h2: 'Lohnen sich maßgefertigte Einlagen?',
      keyFact: 'In einer Studie mit 185\u00A0Personen mit Fersenschmerzen schnitten maßgefertigte Einlagen nach drei Monaten nicht besser ab als Schein-Einlagen, und Menschen in hausärztlicher Versorgung berichteten 1,48\u00A0Punkte weniger Schmerz bei den ersten Schritten als die mit maßgefertigten Einlagen (Rasenberg und Kollegen, 2021).',
      paragraphs: [
        'Bei gewöhnlichen Fersenschmerzen sagt die Forschung: meist nicht. Die Übersichtsarbeit von Whittaker fand **zu keinem Zeitpunkt einen Unterschied zwischen maßgefertigten und fertigen Einlagen**, und die Leitlinie von 2023 stellt „eine Ähnlichkeit der Ergebnisse zwischen maßgefertigten und fertigen Orthesen“ fest.',
        'Die niederländische STAP-Studie teilte 185\u00A0Erwachsene mit Fersenschmerzen (Rasenberg und Kollegen, 2021) zufällig drei Gruppen zu:',
        {
          list: [
            'Hausärztliche Versorgung.',
            'Eine von einer Podologin oder einem Podologen maßgefertigte Einlage.',
            'Eine Schein-Einlage.',
          ],
        },
        '**Jede Gruppe bekam zusätzlich ein Heft mit Übungen.** Nach drei Monaten schnitten maßgefertigte Einlagen nicht besser ab als die Schein-Einlage. Die Gruppe mit hausärztlicher Versorgung schnitt besser ab als die Gruppe mit maßgefertigten Einlagen: etwa 1\u00A0Punkt weniger Schmerz bei Aktivität und 1,5\u00A0Punkte weniger Schmerz bei den ersten Schritten, auf einer Skala von 0 bis 10. Eine Kostenanalyse derselben Studie über etwa sechs Monate fand maßgefertigte Einlagen im Vergleich zur hausärztlichen Versorgung „nicht kosteneffektiv“.',
        'Maßgefertigte Einlagen können manchen Menschen trotzdem helfen (siehe unten). Aber wenn du eine Einlage für Fersenschmerzen willst, ist eine gut sitzende fertige Gewölbestütze der vernünftige erste Versuch.',
      ],
      cites: [CITE.whittakerOrthoses, CITE.guideline, CITE.rasenbergStap, CITE.rasenbergCost],
    },
    {
      h2: 'Was bewirken Übungen, was Einlagen nicht können?',
      keyFact: 'In einer Studie mit 48\u00A0Personen, die alle Schuheinlagen trugen, schnitt die Gruppe mit zusätzlichem schwerem Fersenheben nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab als die Gruppe mit zusätzlichem Dehnen (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'Übungen verändern das Gewebe, deshalb hält die Veränderung über die Einheit hinaus an. Die Leitlinie von 2023 bewertet das Dehnen von Plantarfaszie und Wade mit **A** und Krafttraining mit **B**.',
        'In einer Studie bekamen alle 48\u00A0Personen mit Plantarfasziitis eine Schuheinlage (Rathleff und Kollegen, 2015). Die Hälfte dehnte zusätzlich täglich, die andere Hälfte machte zusätzlich jeden zweiten Tag schweres Fersenheben mit einem Handtuch unter den Zehen.',
        'Nach drei Monaten schnitt die Fersenheben-Gruppe im Foot Function Index (ein Wert von 0 bis 100 für Fußschmerz und Einschränkung) um 29\u00A0Punkte besser ab. Nach sechs und zwölf Monaten lagen die Gruppen gleichauf. Die Einlage war in beiden Gruppen dieselbe, den frühen Unterschied machte die Übung. Die komplette Routine findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie für Plantarfaszien- und Wadendehnung.' },
          dose: 'Walkito beginnt mit 2-mal 30\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg einen Knöchel über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Halte, dann lass los. Am nützlichsten vor deinen ersten Schritten am Morgen.',
          often: 'Täglich',
          feel: 'Ein Ziehen entlang des Gewölbes, kein stechender Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft zurück',
          alt: 'Eine sitzende Figur zieht die Zehen eines Fußes zurück, das Gewölbe ist hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch unter den Zehen',
          evidence: { level: 'strong', why: 'Die Übung aus der Studie von Rathleff 2015. Bewertung B in der Leitlinie für Krafttraining.' },
          dose: 'In der Studie steigerten sich die Teilnehmenden von 3\u00A0Sätzen à 12 schweren Wiederholungen auf 5\u00A0Sätze à 8. In Walkito kommt die Übung nach leichteren Varianten des Fersenhebens, mit 4\u00A0Sätzen à 10, jedes Bein, im selben 3-2-3-Tempo und mit Zusatzgewicht wie einem Rucksack, wenn du eine Stufe hast',
          how: 'Stell dich mit einem Fuß auf eine Stufe, ein zusammengerolltes Handtuch unter den Zehen. Drei Sekunden hoch, zwei Sekunden halten, drei Sekunden runter. Halt dich an einem Geländer fest. Das Handtuch biegt die Zehen nach oben und belastet so die Plantarfaszie zusammen mit der Wade.',
          often: 'Jeden zweiten Tag',
          feel: 'Harte Arbeit in der Wade und ein Zug unter dem Gewölbe',
          stop: 'Der Schmerz 6/10 erreicht oder der nächste Morgen deutlich schlimmer ist',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, zwei Sekunden halten, drei Sekunden runter',
          alt: 'Eine Figur auf einer Stufe kommt auf die Zehen eines Fußes, ein zusammengerolltes Handtuch unter den Zehen',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Helfen Einlagen bei Plattfuß?',
      paragraphs: [
        '**Die Belege sind für beides dünn.** Ein Plattfuß (ein flaches Fußgewölbe) macht oft gar keine Beschwerden, und dann gibt es nichts zu korrigieren. Siehe [Plattfuß](/de/plattfuss/).',
        'Für Erwachsene mit flexiblem Plattfuß fand eine Übersichtsarbeit 13\u00A0Studien, davon nur zwei randomisiert (Banwell und Kollegen, 2014). Sie fand „keine hochwertigen Belege“ für Einlagen und nur schwache Belege, dass sie Schmerzen lindern.',
        'Auf der Seite der Übungen verbesserten in einer Studie mit 45\u00A0Erwachsenen etwa anderthalb Monate Fußübungen die Fußhaltung stärker als maßgefertigte Gewölbe-Einlagen, und Übungen plus Einlagen schnitten ebenfalls besser ab als Einlagen allein (Kirmizi und Kollegen, 2024). In einer weiteren Studie mit 52\u00A0Personen veränderte ein Übungsprogramm die Gewölbeform stärker als in einer Kontrollgruppe (Brijwasi und Borkar, 2023). Keine der beiden hatte den Schmerz als Hauptergebnis.',
        'Für Kinder fand ein Cochrane-Review über 16\u00A0Studien (1.058\u00A0Kinder) Belege mit geringer bis sehr geringer Vertrauenswürdigkeit und kam zu dem Schluss, dass es für teure maßgefertigte Einlagen bei Kindern mit schmerzfreiem flexiblem Plattfuß keine stützenden Belege gibt (Evans und Kollegen, 2022). Siehe [Plattfuß bei Kindern](/de/plattfuss-bei-kindern/). Die Übungen hier und die Walkito-App sind für Erwachsene.',
      ],
      exercises: [
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'early', why: 'Veränderte in kleinen Studien die Gewölbeform, darunter eine, in der Fußübungen bei der Haltung besser abschnitten als maßgefertigte Einlagen. Schmerz war nicht das Hauptergebnis.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 8, mit 5\u00A0Sekunden Halten, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Ohne die Zehen einzukrallen, zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe etwas hebt. Halte, dann entspann. Wenn die Zehen greifen, arbeiten die falschen Muskeln.',
          often: 'An den meisten Tagen',
          feel: 'Das Gewölbe hebt sich, die Zehen bleiben locker',
          stop: 'Ein Krampf, der nicht nachlässt, oder der Schmerz 6/10 erreicht',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: Zieh den Fußballen Richtung Ferse',
          alt: 'Ein Bein im Sitzen, der Fuß am Boden, das Gewölbe hervorgehoben, während es sich hebt',
        },
      ],
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot, CITE.brijwasi, CITE.evansCochrane2022],
    },
    {
      h2: 'Machen Einlagen die Füße schwächer?',
      paragraphs: [
        '**Möglicherweise ein wenig.** In einer Studie mit 18\u00A0jungen Erwachsenen mit Plattfuß schrumpften drei kleine Muskeln im Fuß nach drei Monaten mit maßgefertigten Einlagen um 9,6 bis 17,4\u00A0% (Protopapas und Perry, 2020). Die Gruppen waren nicht randomisiert und die Studie war klein. Lies das also als Signal, nicht als gesicherte Tatsache.',
        'Übungen scheinen das auszugleichen. In einer randomisierten Studie mit 28\u00A0Personen mit Plattfuß trugen alle zwei Monate lang Einlagen, und die Hälfte machte zusätzlich die Kurzer-Fuß-Übung (Jung und Kollegen, 2011). Der Muskel entlang des inneren Gewölbes wuchs in beiden Gruppen, mit der Übung aber stärker, und auch die Kraft der Großzehe nahm stärker zu. Wenn du den ganzen Tag Einlagen trägst, halt den Fuß mit ein paar Minuten [Übungen zum Kräftigen der Füße](/de/fuss-kraeftigen-uebungen/) in Arbeit.',
      ],
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
    },
    {
      h2: 'Einlagen oder Übungen auf einen Blick',
      table: {
        caption: 'Einlagen und Übungen im Vergleich, nach den Studien auf dieser Seite',
        head: ['', 'Einlagen und orthopädische Einlagen', 'Übungen'],
        rows: [
          ['Wie sie wirken', 'Verändern die Belastung des Fußes, solange du sie trägst', 'Verändern das Gewebe, sodass es mehr Last verträgt'],
          ['Belege bei Fersenschmerzen', 'Kleiner mittelfristiger Nutzen gegenüber Schein, keiner nach zwölf Monaten', 'Dehnen Bewertung **A**, Kraft Bewertung **B**'],
          ['Bewertung in der Leitlinie zu Fersenschmerzen', 'Allein **B dagegen**, mit anderen Maßnahmen **C**', 'Kern der ersten Wahl'],
          ['Maßgefertigt oder fertig', 'In Studien kein Unterschied', 'Keine Ausrüstung nötig'],
          ['Belege bei Plattfuß', 'Schwache Belege für Schmerz', 'Kleine Studien zeigen Veränderungen am Gewölbe, kaum Daten zum Schmerz'],
          ['Kosten', 'Gering für fertige, deutlich höher für maßgefertigte', 'Kostenlos'],
          ['Nachteil', 'Können kleine Fußmuskeln schrumpfen lassen, wenn du sie ohne Übungen trägst', 'Können Schmerzen anfachen, wenn du zu schnell steigerst'],
        ],
      },
      cites: [CITE.whittakerOrthoses, CITE.landorf2006, CITE.guideline, CITE.banwellPlanus, CITE.protopapasOrthotic],
    },
    {
      h2: 'Wann sind Einlagen sinnvoll?',
      bullets: [
        '**Lange Schichten auf den Beinen.** Eine feste Gewölbestütze kann den Tag erleichtern, während Übungen die Belastbarkeit aufbauen. Siehe [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/).',
        '**Ein Schub.** Eine Einlage oder ein Fersenkissen kann die Spitze nehmen, solange die ersten Schritte stechen. [Tapen](/de/plantarfasziitis-tapen/) ist eine weitere kurzfristige Option, mit einer höheren Bewertung in der Leitlinie.',
        '**Schmerzhafter Hohlfuß.** In einer Studie mit 154\u00A0Erwachsenen mit schmerzhaftem Hohlfuß (Pes cavus) linderten maßgefertigte Einlagen den Schmerz nach drei Monaten stärker als eine Schein-Einlage (Burns und Kollegen, 2006). Siehe [Übungen bei Hohlfuß](/de/hohlfuss-uebungen/).',
        '**Tibialis-posterior-Insuffizienz**, bei der die Sehne schwächer wird, die das Gewölbe hält. Studien kombinieren eine Einlage mit Übungen (Houck und Kollegen, 2015). Siehe [Tibialis-posterior-Insuffizienz](/de/tibialis-posterior-insuffizienz/).',
        '**Diabetes oder weniger Gefühl in den Füßen.** Druckverteilende Einlagen sind hier oft Teil der Fußversorgung, angepasst von einer medizinischen Fachperson.',
      ],
      cites: [CITE.guideline, CITE.burnsCavus, CITE.houckPTTD],
    },
    {
      h2: 'Wie kombinierst du Einlagen und Übungen?',
      paragraphs: [
        '**Nutz die Einlage für den Komfort und die Übungen für die Veränderung.** In der Studie von Rathleff und in der STAP-Studie bekamen alle Übungsempfehlungen, egal was in ihrem Schuh lag. Trag an den Tagen, an denen es wehtut, eine fertige Gewölbestütze und fang gleichzeitig mit den Dehnungen und dem Fersenheben an. Wenn der Morgenschmerz nachlässt, probier kurze Zeiten ohne Einlage, dann längere.',
        'Walkito kann die Übungsseite als Wochenplan aufstellen: Einmal pro Woche setzt es deine Hauptübung eine Stufe höher, wenn du deine letzten zwei Einheiten damit als leicht bewertet hast und der Morgenschmerz nicht gestiegen ist.',
        'Wenn ein paar Monate tägliches Dehnen und Krafttraining nicht geholfen haben, geh zu einer medizinischen Fachperson. Dann lohnt es sich, unter anderem über eine maßgefertigte Einlage mit jemandem zu sprechen, der deinen Fuß untersucht hat.',
      ],
      cites: [CITE.rathleff, CITE.rasenbergStap],
    },
  ],
  faq: [
    {
      q: 'Brauche ich bei Plantarfasziitis orthopädische Einlagen?',
      cites: [CITE.guideline, CITE.whittakerOrthoses],
      a: 'Die meisten Menschen nicht. Die Leitlinie von 2023 zu Fersenschmerzen empfiehlt gegen Einlagen allein zur kurzfristigen Linderung (Bewertung B) und lässt sie zusätzlich zu anderen Maßnahmen zu (Bewertung C). Eine Übersichtsarbeit über 19\u00A0Studien fand nur einen kleinen mittelfristigen Nutzen gegenüber Schein-Einlagen. Dehnen (Bewertung A) und Wadenkräftigung (Bewertung B) sind der Kern, und eine Einlage kann eine Ergänzung für den Komfort sein.',
    },
    {
      q: 'Sind maßgefertigte Einlagen besser als Einlagen aus der Drogerie?',
      cites: [CITE.whittakerOrthoses, CITE.rasenbergStap],
      a: 'Bei Fersenschmerzen haben Studien keinen Unterschied gefunden. Eine Übersichtsarbeit über 19\u00A0Studien fand zu keinem Zeitpunkt einen Unterschied zwischen maßgefertigten und fertigen Einlagen (Whittaker und Kollegen, 2018). In einer Studie mit 185\u00A0Erwachsenen schnitten maßgefertigte Einlagen nach drei Monaten nicht besser ab als Schein-Einlagen (Rasenberg und Kollegen, 2021). Eine gut sitzende fertige Gewölbestütze ist ein vernünftiger erster Versuch.',
    },
    {
      q: 'Machen Einlagen die Füße schwächer?',
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
      a: 'Es gibt ein kleines Signal, dass sie das können. In einer nicht randomisierten Studie mit 18\u00A0jungen Erwachsenen mit Plattfuß folgte auf drei Monate mit maßgefertigten Einlagen ein Rückgang der Größe von drei kleinen Fußmuskeln um 9,6 bis 17,4\u00A0%. In einer Studie mit 28\u00A0Personen baute die Kurzer-Fuß-Übung zusätzlich zu Einlagen mehr Muskel und mehr Kraft in der Großzehe auf als Einlagen allein.',
    },
    {
      q: 'Helfen Einlagen bei Plattfuß?',
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot],
      a: 'Die Belege sind schwach. Eine Übersichtsarbeit über 13\u00A0Studien fand keine hochwertigen Belege, dass Einlagen Erwachsenen mit flexiblem Plattfuß helfen, und nur schwache Belege beim Schmerz (Banwell und Kollegen, 2014). In einer Studie mit 45\u00A0Erwachsenen verbesserten Fußübungen die Fußhaltung stärker als maßgefertigte Gewölbe-Einlagen (Kirmizi und Kollegen, 2024). Ein Plattfuß, der nicht wehtut, braucht nichts.',
    },
    {
      q: 'Braucht mein Kind mit Plattfuß Einlagen?',
      cites: [CITE.evansCochrane2022],
      a: 'Meist nicht, wenn die Füße nicht wehtun. Ein Cochrane-Review über 16\u00A0Studien mit 1.058\u00A0Kindern fand Belege mit geringer bis sehr geringer Vertrauenswürdigkeit für Einlagen und kam zu dem Schluss, dass es für teure maßgefertigte Einlagen bei Kindern mit schmerzfreiem flexiblem Plattfuß keine stützenden Belege gibt (Evans und Kollegen, 2022). Ein Kind mit Fußschmerzen, Steifigkeit oder Hinken sollte zu einer medizinischen Fachperson.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat oder du den Fuß nicht belasten kannst',
      'es sehr wehtut, wenn du die Seiten der Ferse zusammendrückst, was auf einen Ermüdungsbruch hindeuten kann',
      'Taubheit, Kribbeln oder Brennen im Fuß auftreten',
      'der Fuß gerötet, heiß oder geschwollen ist oder du Fieber hast',
      'ein Gewölbe in letzter Zeit abgesunken ist oder du auf diesem Fuß nicht auf die Zehen kommst',
      'du Diabetes, eine schlechte Durchblutung oder weniger Gefühl in den Füßen hast',
      'ein Kind einen Plattfuß mit Schmerzen, Steifigkeit oder Hinken hat',
      'der Schmerz nach ein paar Monaten täglichen Dehnens und Krafttrainings nicht besser geworden ist',
    ],
  },
  program: {
    h2: 'Die Übungen als Plan umsetzen',
    text: 'Eine Einlage legst du einmal in den Schuh. Übungen wirken nur, wenn du dranbleibst. Walkito baut einen Plan, Woche für Woche, bei Fersenschmerzen oder Plattfuß. Er beginnt mit Dehnungen wie der Plantarfaszien-Dehnung (2-mal 30\u00A0Sekunden halten) und Gewölbearbeit wie dem Kurzen Fuß (3\u00A0Sätze à 8 mit 5\u00A0Sekunden Halten) und setzt deine Hauptübung eine Stufe höher, wenn du sie zweimal hintereinander als leicht bewertest und der Morgenschmerz stabil bleibt.',
    more: [
      'Du wählst Einheiten von 3, 5 oder 10\u00A0Minuten. Anfangs alle 14\u00A0Tage (alle 28, sobald du ein Ziel erreicht hast) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito ist ein Übungsprogramm für Erwachsene. Es stellt keine Diagnose, ersetzt keine medizinische Fachperson und lässt sich gut mit einer Einlage kombinieren.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Einlagen oder Übungen',
  campaign: 'guide-insoles-vs-exercises-de',
};
