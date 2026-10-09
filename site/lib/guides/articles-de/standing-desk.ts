import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/standing-desk.ts`, written around the German
 * queries «Stehschreibtisch Fußschmerzen», «wie lange am Stehtisch stehen»,
 * «Anti-Ermüdungsmatte». Informal «du». Numbers, doses and evidence levels
 * identical to the English page.
 */

export const STANDING_DESK_DE: Guide = {
  lang: 'de',
  page: 'standingDesk',
  mainSource: CITE.buckley,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fußschmerzen am Stehschreibtisch: Ursachen und was hilft',
  description:
    'Warum die Füße am Stehschreibtisch wehtun, wie lange du stehen solltest, bevor du dich setzt, Anti-Ermüdungsmatten und Übungen direkt am Schreibtisch.',
  h1: 'Fußschmerzen am Stehschreibtisch: woher sie kommen und was hilft',
  lede:
    'Ein Stehschreibtisch soll eigentlich besser für dich sein, aber deine Füße und Beine sehen das in den ersten Wochen vielleicht anders. Fußschmerzen am Stehschreibtisch kommen meist davon, zu lange in einer Position zu stehen, nicht vom Schreibtisch selbst. Die Forschung spricht für kürzere Stehphasen, eine Matte, die richtigen Schuhe und ein paar Übungen, für die du den Schreibtisch nicht verlassen musst.',
  intro: [
    'Eine systematische Übersichtsarbeit von 2017 zu Laborstudien fand, dass sich klinisch relevante Beschwerden im unteren Rücken und in den Beinen nach etwa 40\u00A0Minuten ununterbrochenem Stehen entwickeln. Eine Expertenempfehlung von 2015 rät, sich auf 2\u00A0Stunden Stehen und leichte Aktivität pro Arbeitstag hochzuarbeiten und später auf 4\u00A0Stunden zu steigern, aufgeteilt in kürzere Phasen statt am Stück. Diese Seite behandelt beides, die Forschung und die praktischen Schritte.',
  ],
  toc: true,
  takeaways: [
    'Eine systematische Übersichtsarbeit von 2017 zu 25\u00A0Laborstudien fand, dass sich klinisch relevante Beschwerden am Bewegungsapparat nach etwa 40\u00A0Minuten ununterbrochenem Stehen entwickelten, bei Menschen mit Neigung zu Rückenschmerzen schon nach 42\u00A0Minuten. Die Autoren empfahlen, nicht länger als 40\u00A0Minuten am Stück zu stehen (Coenen und Kollegen, 2017).',
    'Eine Expertenempfehlung von 2015 im Auftrag von Public Health England rät, bei der Arbeit zunächst 2\u00A0Stunden pro Tag Stehen und leichte Aktivität zu sammeln und später auf 4\u00A0Stunden pro Tag zu steigern, aufgeteilt in kürzere Phasen (Buckley und Kollegen, 2015).',
    'Eine systematische Übersichtsarbeit von 2014 zu 14\u00A0Studien fand ausreichende Belege, dass Sitz-Steh-Arbeitsplätze Beschwerden im unteren Rücken verringern, ohne Einbußen bei der Produktivität, fand aber kein optimales Verhältnis von Sitzen zu Stehen (Karakolis und Callaghan, 2014).',
    'Eine Übersichtsarbeit von 2015 zur arbeitsmedizinischen Forschung fand langes Stehen verbunden mit Beschwerden am Bewegungsapparat, Ermüdung und Beinschmerzen und nannte Bodenmatten, Kompressionsstrümpfe und stützende Schuhe unter den Maßnahmen mit Belegen (Waters und Dick, 2015).',
    'Eine eingeschränkte Beweglichkeit im Sprunggelenk, also eine verkürzte Wade, war in einer Fall-Kontroll-Studie von 2003 der stärkste Vorhersagefaktor für Plantarfasziitis, mit dem 23,3-Fachen der Wahrscheinlichkeit. Stehen über den größten Teil des Arbeitstags erhöhte sie um das 3,6-Fache (Riddle und Kollegen, 2003).',
  ],
  sections: [
    {
      h2: 'Warum tun die Füße am Stehschreibtisch weh?',
      keyFact: 'Eine systematische Übersichtsarbeit von 2017 zu 25\u00A0Studien fand, dass Beschwerden im unteren Rücken im Allgemeinen nach etwa 71\u00A0Minuten Stehen klinisch relevant wurden, bei Menschen mit Neigung zu Schmerzen im Stehen aber schon nach 42\u00A0Minuten (Coenen und Kollegen, 2017).',
      paragraphs: [
        'Fußschmerzen am Stehschreibtisch entstehen aus demselben Grund wie bei jedem langen Stehen: Füße, Waden und Unterschenkel tragen eine statische Last ohne die Entlastung, die Gehen oder Sitzen bringt. Wenn du ruhig stehst, sammelt die Schwerkraft das Blut in den Unterschenkeln, die Wadenmuskeln halten dieselbe Position, ohne sich anzuspannen und zu entspannen, und die Plantarfaszie unter dem Gewölbe fängt eine gleichmäßige Last ab.',
        'Eine systematische Übersichtsarbeit von 2017 zu 25\u00A0Laborstudien fasste Daten von 591\u00A0Teilnehmenden zusammen und fand, dass sich klinisch relevante Beschwerden im unteren Rücken in der Allgemeinbevölkerung nach etwa 71\u00A0Minuten ununterbrochenem Stehen entwickelten, bei Menschen, die beim Stehen leicht Schmerzen bekommen, aber schon nach 42\u00A0Minuten. Für Beschwerden in den Beinen sah das Bild ähnlich aus. Die Autoren empfahlen 40\u00A0Minuten als praktische Grenze, bevor du das Stehen unterbrichst.',
        'Eine Übersichtsarbeit von 2015 zur arbeitsmedizinischen Forschung bestätigte den Zusammenhang zwischen langem Stehen und Beschwerden am Bewegungsapparat, Ermüdung und Beinschmerzen in vielen Arten von Arbeit im Stehen. Die Übersicht fand auch, dass Belastung für Herz und Kreislauf und geschwollene Beine mit der Stehdauer zunehmen.',
      ],
      cites: [CITE.coenen, CITE.waters],
    },
    {
      h2: 'Wie lange solltest du am Stehschreibtisch stehen, bevor du dich setzt?',
      keyFact: 'Eine Expertenempfehlung von 2015 rät, sich auf 2\u00A0Stunden pro Tag Stehen und leichte Aktivität hochzuarbeiten und später auf 4\u00A0Stunden zu steigern, aufgeteilt in kürzere Phasen (Buckley und Kollegen, 2015).',
      paragraphs: [
        'Eine Antwort, die für alle passt, gibt es nicht, aber die Forschung grenzt es ein. Eine Expertenempfehlung von 2015 im Auftrag von Public Health England und der Active Working Community Interest Company riet Menschen mit Schreibtischarbeit, sich zunächst darauf hinzuarbeiten, während der Arbeitszeit 2\u00A0Stunden pro Tag Stehen und leichte Aktivität zu sammeln, und später auf 4\u00A0Stunden pro Tag zu steigern. Die Empfehlung legte fest, dass das Stehen in kürzere Phasen aufgeteilt werden sollte, nicht am Stück.',
        'Die Übersichtsarbeit von 2017 zu Laborstudien deutet darauf hin, dass ab 40\u00A0Minuten ununterbrochenem Stehen die Beschwerden klinisch relevant werden. Beides zusammen ergibt einen praktischen Anfang: 20 bis 30\u00A0Minuten stehen, 20 bis 30\u00A0Minuten sitzen und das über den Tag wiederholen, angepasst daran, wie sich dein Körper umstellt.',
        'Eine systematische Übersichtsarbeit von 2014 zu 14\u00A0Studien über Sitz-Steh-Arbeitsplätze fand ausreichende Belege, dass sie Beschwerden im unteren Rücken verringern, ohne Einbußen bei der Produktivität. Die Übersicht fand kein optimales Verhältnis von Sitzen zu Stehen, und die Autoren hielten fest, dass das beste Verhältnis wahrscheinlich von Mensch zu Mensch und von Job zu Job verschieden ist. Was die Belege stützen, ist der Wechsel, keine feste Regel.',
      ],
      sourceNote:
        'Buckley und Kollegen (2015): Expertenkonsens eines internationalen Gremiums im Auftrag von Public Health England. Coenen und Kollegen (2017): systematische Übersichtsarbeit zu 25\u00A0Laborstudien, 591\u00A0Teilnehmende, gepoolte Dosis-Wirkungs-Analyse. Karakolis und Callaghan (2014): systematische Übersichtsarbeit zu 14\u00A0Studien über Sitz-Steh-Arbeitsplätze.',
      cites: [CITE.buckley, CITE.coenen, CITE.karakolis],
    },
    {
      h2: 'Helfen Anti-Ermüdungsmatten bei Fußschmerzen am Stehschreibtisch?',
      paragraphs: [
        'Für Anti-Ermüdungsmatten gibt es gewisse Belege. Die arbeitsmedizinische Übersichtsarbeit von 2015 nennt Bodenmatten unter den Maßnahmen mit Belegen dafür, Beschwerden bei langem Stehen zu verringern. Eine Crossover-Studie mit 38\u00A0Mitgliedern eines OP-Teams fand, dass Stehen auf einer 15\u00A0mm dicken Anti-Ermüdungsmatte aus Gummi während der Eingriffe zu deutlich niedrigeren Werten für Schmerz und Ermüdung führte als Stehen auf normalem Boden.',
        'Der Mechanismus ist einfach: Eine weichere Fläche lässt die Füße kleine Anpassungen machen und nimmt einen Teil der Last weg, die ein harter Boden auf Ferse und Fußballen bündelt. Eine systematische Übersichtsarbeit von 2018 zu dämpfenden Materialien bei langem Stehen fand übereinstimmend weniger Beschwerden, auch wenn die Studien klein waren und der Nutzen den Komfort betraf, nicht die Vorbeugung einer bestimmten Erkrankung.',
        'Eine Matte allein löst Fußschmerzen nicht, aber sie ist eines der einfacheren Dinge, die du ausprobieren kannst. Wenn du schon einen Stehschreibtisch hast und dir die Füße wehtun, deckt eine Matte zusammen mit kürzeren Stehphasen und den Übungen auf dieser Seite das Wichtigste ab.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Welche Schuhe solltest du am Stehschreibtisch tragen?',
      paragraphs: [
        'Wenn du von zu Hause arbeitest, stehst du vielleicht in Socken oder Hausschuhen am Schreibtisch. Das sind viele Stunden ohne Dämpfung oder Gewölbestütze. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Einlagen allein bei Plantarfasziitis mit B dagegen, die Belege sprechen also eher dagegen, sie als alleinige Maßnahme zu nutzen. Das betrifft aber Einlagen für sich genommen, nicht die Frage, ob irgendein Schuh besser ist als gar keiner.',
        'Ein vernünftiger Weg: Trag beim Stehen einen Schuh mit etwas Dämpfung und einer stützenden Innensohle, auch zu Hause. Du brauchst keinen speziellen Schuh für den Stehschreibtisch. Wenn du zwischen Stehen und Sitzen wechselst, kannst du die Schuhe in den Sitzphasen ausziehen. Die Übungen auf dieser Seite setzen direkt an den Geweben an. Schuhe und Matten verbessern den Komfort beim Stehen, aber sie ersetzen weder Dehnen noch Krafttraining.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Welche Übungen kannst du am Schreibtisch gegen Fußschmerzen vom Stehen machen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Wade und Plantarfaszie mit A, ihrer besten Bewertung, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Diese Übungen zielen auf die Wade, die Plantarfaszie und die kleinen Fußmuskeln. Manche davon kannst du in einer Sitzpause am Schreibtisch machen. Andere machst du besser zu einer anderen Zeit, weg vom Schreibtisch. Wenn eine Übung deinen Schmerz auf 6 von 10 oder mehr bringt, hör für heute auf.',
        'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Wade und Plantarfaszie ihre beste Bewertung, A, und Krafttraining ein B. Beides gilt speziell für Plantarfasziitis, aber dieselben Gewebe tragen die Last bei der Arbeit am Stehschreibtisch. Die ganze Übungsliste bei Plantarfasziitis findest du unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      exercises: [
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Wadendehnung mit A. Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor für Plantarfasziitis.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Tritt einen Schritt vom Schreibtisch zurück, stütz die Hände an der Tischkante oder an einer Wand ab und lass das hintere Bein gestreckt, die Ferse unten. Das zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel. Das geht gut beim Wechsel vom Stehen zum Sitzen.',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hände am Tisch oder an der Wand',
          alt: 'Eine Figur lehnt sich an einen Schreibtisch, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (gebeugtes Knie)',
          evidence: {
            level: 'moderate',
            why: 'Dieselbe Unterstützung durch die Leitlinie. Zielt auf den Soleus, den tieferen Wadenmuskel, der nur mit gebeugtem Knie loslässt.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position, aber beug das hintere Knie, bis du die Dehnung tiefer spürst, näher an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt nur los, wenn das Knie gebeugt ist.',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis du es nahe der Ferse spürst',
          alt: 'Eine Figur in der Dehnung am Schreibtisch mit gebeugtem hinteren Knie, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: {
            level: 'early',
            why: 'Fersenheben im Sitzen belastet den Soleus mit insgesamt weniger Anforderung als die Varianten im Stehen. Nicht speziell bei Schmerzen am Stehschreibtisch getestet.',
          },
          dose: '3\u00A0Sätze à 15, beide Füße',
          how: 'Setz dich an den Schreibtisch, die Füße stehen flach auf dem Boden. Heb beide Fersen so hoch du kannst, halte eine Sekunde und senk sie dann langsam ab. Das trainiert den Soleus, den tieferen Wadenmuskel, und geht in jeder Sitzpause, ohne dass du aufstehen musst.',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: beide Fersen heben, halten, langsam absenken',
          alt: 'Eine sitzende Figur hebt beide Fersen vom Boden, die Waden sind hervorgehoben',
        },
        {
          name: 'Zehenspreizen',
          evidence: {
            level: 'early',
            why: 'Zielt auf die kurzen Fußmuskeln. Nicht Teil der getesteten Programme auf dieser Seite.',
          },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten',
          how: 'Setz dich an den Schreibtisch, spreiz alle fünf Zehen so weit auseinander, wie du kannst, und halte. Das aktiviert die kleinen Muskeln zwischen den Zehen, die beim Stehen in den Schuhen zusammengedrückt werden. Das geht in einer Sitzpause ohne Schuhe.',
          media: 'toe_spread',
          caption: 'Zehenspreizen: alle fünf Zehen auseinanderspreizen und halten',
          alt: 'Ein Fuß von oben mit weit auseinandergespreizten Zehen',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: {
            level: 'early',
            why: 'Eine Übersichtsarbeit von 2024 fand, dass Kurzer-Fuß-Training die Gewölbeform veränderte, aber nicht den Schmerz. Walkito nutzt die Übung als Teil eines breiteren Programms.',
          },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt, ohne die Zehen einzurollen. Das trainiert die kleinen Muskeln im Gewölbe, die es beim Stehen stützen.',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt',
          alt: 'Ein Bein im Sitzen, der Fuß auf dem Boden, das Gewölbe ist beim Anheben hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig (im Stehen)',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Krafttraining bei Plantarfasziitis mit B. Baut die Kraft in der Wade auf, die die Last beim Stehen abfängt.',
          },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich an den Schreibtisch, komm in etwa drei Sekunden gerade über die großen Zehen hoch und senk dich dann langsam ab. Halt dich zum Ausbalancieren an der Tischkante fest. Die genaue Steigerung, auch die Variante mit Handtuch, findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
          media: 'heel_raise_double',
          caption: 'Fersenheben im Stehen: über die großen Zehen hoch, langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
      ],
      table: {
        caption: 'Startdosen bei Fußschmerzen am Stehschreibtisch',
        head: ['Übung', 'Dosis', 'Wo', 'Was du spüren solltest'],
        rows: [
          ['Wadendehnung (gestrecktes Knie)', '2 x 30\u00A0Sekunden, jedes Bein', 'Am Schreibtisch oder an der Wand', 'Eine Dehnung in der oberen Wade'],
          ['Wadendehnung (gebeugtes Knie)', '2 x 30\u00A0Sekunden, jedes Bein', 'Am Schreibtisch oder an der Wand', 'Eine Dehnung tief in der Wade, nahe der Ferse'],
          ['Fersenheben im Sitzen', '3 x 15, beide Füße', 'Am Schreibtisch, im Sitzen', 'Die Waden arbeiten sanft'],
          ['Zehenspreizen', '3 x 10 (5\u00A0Sekunden halten)', 'Am Schreibtisch, im Sitzen, ohne Schuhe', 'Die Zehen spreizen sich, kein Schmerz'],
          ['Kurzer Fuß', '3 x 10 (5\u00A0Sekunden halten), jeder Fuß', 'Am Schreibtisch, im Sitzen', 'Das Gewölbe hebt sich, die Zehen bleiben locker'],
          ['Fersenheben im Stehen', '3 x 10, beide Füße', 'Am Schreibtisch, im Stehen', 'Die Waden arbeiten, kein stechender Schmerz'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Gewicht verlagern, Fußstütze nutzen oder einfach mehr bewegen?',
      paragraphs: [
        'Alle drei helfen, und alle drei sind Varianten derselben Idee: die statische Haltung im Stehen unterbrechen. Die Expertenempfehlung von 2015 betont, dass Arbeit im Sitzen regelmäßig durch Stehen unterbrochen werden sollte und dass auch das Stehen leichte Aktivität enthalten sollte. Schon das Gewicht von einem Fuß auf den anderen zu verlagern, verändert, welche Muskeln belastet werden, und fördert die Durchblutung in den Unterschenkeln.',
        'Eine kleine Fußstütze oder eine niedrige Stange unter dem Schreibtisch lässt dich einen Fuß hochstellen und die Last zwischen den Seiten wechseln. Das ist eine alte Strategie aus der Fabrikhalle und eine der Maßnahmen, die die arbeitsmedizinische Übersicht nennt. Dafür brauchst du kein spezielles Produkt. Eine stabile Kiste oder ein niedriges Regalbrett tut es auch.',
        'Kurze Bewegungspausen beim Sitzen sind genauso wichtig. Steh auf, geh in die Küche und zurück oder mach einen Satz Fersenheben im Sitzen oder Zehenspreizen aus der Tabelle oben. Das Ziel ist kein Training. Es geht darum, die statische Haltung zu vermeiden, die das Problem überhaupt erst verursacht.',
      ],
      cites: [CITE.buckley, CITE.waters],
    },
    {
      h2: 'Wie gewöhnst du dich ohne Fußschmerzen an einen Stehschreibtisch?',
      paragraphs: [
        'Fang mit weniger Stehen an, als du glaubst zu brauchen. Die Expertenempfehlung von 2015 rät, sich auf 2\u00A0Stunden Stehen und leichte Aktivität pro Tag hochzuarbeiten, nicht damit anzufangen. Wenn Stehen neu für dich ist, beginn mit 15 bis 20\u00A0Minuten Stehen pro Stunde und steigere das über ein paar Wochen nach und nach.',
        'Eine praktische erste Woche: 15\u00A0Minuten stehen, 45\u00A0Minuten sitzen, über den Tag wiederholen. In der zweiten Woche 20\u00A0Minuten stehen, 40 sitzen. In der dritten oder vierten Woche versuch 30 und 30. Hör auf deine Füße und deinen unteren Rücken. Wenn sich Beschwerden aufbauen, setz dich früher hin, statt durchzuhalten.',
        'Leg von Anfang an eine Matte hin, wenn du eine hast. Trag Schuhe mit etwas Dämpfung, auch zu Hause. Mach die Wadendehnungen aus der Tabelle oben mindestens einmal am Tag. Wenn du schon Fußschmerzen vom Stehen hast und den breiteren Ratgeber willst, zeigt [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/), wo sich Schmerzen am Stehschreibtisch und Erkrankungen wie Plantarfasziitis überschneiden. Für die Version speziell für die Pflege lies [Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/).',
      ],
      cites: [CITE.buckley],
    },
    {
      h2: 'Könnten Fußschmerzen am Stehschreibtisch eine Plantarfasziitis oder etwas anderes sein?',
      paragraphs: [
        'Fußschmerzen am Stehschreibtisch sind meist allgemeine Beschwerden von langem, statischem Stehen. Wenn der Schmerz aber stechend ist, sich nahe der Ferse bündelt und bei den ersten Schritten nach längerem Sitzen am schlimmsten ist, deutet dieses Muster auf eine Plantarfasziitis hin. Stehen über den größten Teil des Arbeitstags erhöhte die Wahrscheinlichkeit einer Plantarfasziitis in einer Fall-Kontroll-Studie um das 3,6-Fache, der Stehschreibtisch kann also plausibel dazu beitragen.',
        'Die Übungen, die bei beidem helfen, überschneiden sich stark. Wenn dein Schmerz dem Muster der Plantarfasziitis folgt, sind [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) der ausführlichere Ratgeber. Wenn sich deine Gewölbe flach anfühlen, lies [Übungen bei Plattfuß und abgesunkenem Gewölbe](/de/plattfuss-uebungen/). Wenn du nicht sicher bist, geh zu einer medizinischen Fachperson, bevor du den Fuß mit Übungen belastest.',
      ],
      cites: [CITE.riddle],
    },
  ],
  faq: [
    {
      q: 'Wie lange sollte man am Stehschreibtisch stehen?',
      a: 'Eine Expertenempfehlung von 2015 rät, sich auf 2\u00A0Stunden Stehen und leichte Aktivität pro Arbeitstag hochzuarbeiten und später auf 4\u00A0Stunden zu steigern, aufgeteilt in kürzere Phasen. Eine systematische Übersichtsarbeit von 2017 fand, dass Beschwerden am Bewegungsapparat nach etwa 40\u00A0Minuten ununterbrochenem Stehen klinisch relevant wurden. Ein praktischer Anfang sind 20 bis 30\u00A0Minuten Stehen, gefolgt von 20 bis 30\u00A0Minuten Sitzen.',
      cites: [CITE.buckley, CITE.coenen],
    },
    {
      q: 'Bringen Anti-Ermüdungsmatten am Stehschreibtisch wirklich etwas?',
      a: 'Eine arbeitsmedizinische Übersichtsarbeit von 2015 nennt Bodenmatten unter den Maßnahmen mit Belegen dafür, Beschwerden bei langem Stehen zu verringern. Eine Crossover-Studie mit Mitgliedern eines OP-Teams fand mit einer 15\u00A0mm dicken Gummimatte niedrigere Werte für Schmerz und Ermüdung als auf normalem Boden. Der Nutzen betrifft Komfort und Ermüdung, nicht die Vorbeugung einer bestimmten Erkrankung. Eine Matte zusammen mit kürzeren Stehphasen und Wadendehnungen deckt mehr ab als eine Matte allein.',
      cites: [CITE.waters],
    },
    {
      q: 'Kann ein Stehschreibtisch eine Plantarfasziitis auslösen?',
      a: 'Stehen über den größten Teil des Arbeitstags erhöhte die Wahrscheinlichkeit einer Plantarfasziitis in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen um das 3,6-Fache. Ein Stehschreibtisch erhöht deine täglichen Stunden im Stehen, er kann also plausibel dazu beitragen, wenn deine Wade schon verkürzt ist, was mit dem 23,3-Fachen der Wahrscheinlichkeit der stärkste unabhängige Risikofaktor war. Wadendehnungen sind der direkteste Weg, beide Risikofaktoren anzugehen.',
      cites: [CITE.riddle],
    },
    {
      q: 'Ist es besser, den ganzen Tag zu sitzen oder zu stehen?',
      a: 'Weder noch. Die Übersichtsarbeit von Karakolis und Callaghan von 2014 fand ausreichende Belege, dass Sitz-Steh-Arbeitsplätze Beschwerden im unteren Rücken verringern, ohne Einbußen bei der Produktivität, fand aber kein optimales Verhältnis von Sitzen zu Stehen. Die Übersicht von Coenen von 2017 fand, dass ununterbrochenes Stehen nach etwa 40\u00A0Minuten Beschwerden verursacht. Was die Belege stützen, ist der Wechsel zwischen Sitzen und Stehen, nicht das eine oder das andere.',
      cites: [CITE.karakolis, CITE.coenen],
    },
    {
      q: 'Welche Übungen kann man am Stehschreibtisch machen?',
      a: 'Im Stehen: Wadendehnungen an der Tischkante (2-mal 30\u00A0Sekunden halten pro Seite) und Fersenheben im Stehen (3\u00A0Sätze à 10). In Sitzpausen: Fersenheben im Sitzen (3\u00A0Sätze à 15), Zehenspreizen und die Übung kurzer Fuß. Sie zielen auf Wade, Plantarfaszie und kurze Fußmuskeln, die die Last beim Stehen tragen. Wenn eine Übung deinen Schmerz auf 6 von 10 oder mehr bringt, hör für heute auf.',
      cites: [CITE.guideline],
    },
    {
      q: 'Warum tun die Füße beim Stehen mehr weh als beim Gehen?',
      a: 'Gehen aktiviert die Wadenpumpe, die bei jedem Schritt Blut aus den Unterschenkeln nach oben drückt. Ruhiges Stehen nimmt diese Pumpe weg, das Blut sammelt sich in Füßen und Unterschenkeln, und die Muskeln halten dieselbe statische Position, statt sich anzuspannen und zu entspannen. Eine systematische Übersichtsarbeit von 2017 bestätigte diesen Mechanismus und fand, dass sich Beschwerden in den Beinen beim statischen Stehen im Labor zuverlässig entwickeln.',
      cites: [CITE.coenen],
    },
    {
      q: 'Was ist die 20-8-2-Regel beim Stehschreibtisch?',
      a: 'Die 20-8-2-Regel ist eine ergonomische Faustregel: Teil jeden 30-Minuten-Block in 20\u00A0Minuten Sitzen, 8\u00A0Minuten Stehen und 2\u00A0Minuten Bewegung. Sie ist eine allgemeine Konvention, keine getestete Formel, passt aber zur Hauptaussage dieser Seite: Keine einzelne Position über Stunden ist ideal, und kurze, häufige Haltungswechsel verringern die statische Last, die die Füße ermüdet.',
    },
    {
      q: 'Verschlimmert Stehen eine Plantarfasziitis?',
      a: 'Das kann es. Stehen hält Plantarfaszie und Wade unter anhaltender Last, ohne die Gehpausen, die das Blut pumpen und die Spannung lösen. Stehen über den größten Teil des Arbeitstags ist in der Forschung zu langem Stehen ein unabhängiger Risikofaktor für Plantarfasziitis. Wenn du schon eine Plantarfasziitis hast, kann ein Stehschreibtisch auf hartem Boden ohne Pausen oder Dehnen die Beschwerden verschlimmern.',
      cites: [CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'der Fuß taub ist, kribbelt, brennt, geschwollen oder warm ist',
      'die Ferse oder der Fuß gerötet ist oder du Fieber hast oder dich krank fühlst',
      'der Schmerz dich nachts weckt',
      'der Schmerz stechend ist oder schlimmer wird, obwohl du mehr sitzt',
      'der Schmerz an einem genauen Punkt sitzt und bei Aktivität zunimmt, was eher zum Muster eines Ermüdungsbruchs passen kann als zu Beschwerden vom Stehen',
      'ein Bein oder ein Fuß plötzlich angeschwollen ist und wehtut, gerötet oder warm ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
      'der Schmerz nach mehreren Wochen mit kürzeren Stehphasen, einer Matte und den Übungen auf dieser Seite nicht nachgelassen hat',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text:
      'Du musst dir Reihenfolge, Dosis und den Zeitpunkt zum Steigern nicht selbst überlegen. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Wenn deine Schmerzen am Stehschreibtisch dem Muster der Plantarfasziitis mit Schmerzen am Morgen folgen, ist das erste Ziel Morgenschmerz bei oder unter 1 von 10 an 14\u00A0Tagen am Stück.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald dein erstes Ziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, ob die Arbeit etwas bringt.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn der Schmerz stechend ist, schlimmer wird oder dich nachts wach hält, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fußschmerzen am Stehschreibtisch',
  campaign: 'guide-standing-desk-de',
};
