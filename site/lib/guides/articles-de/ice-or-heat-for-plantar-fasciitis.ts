import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const ICE_HEAT_DE: Guide = {
  lang: 'de',
  page: 'iceHeat',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Plantarfasziitis: Kühlen oder wärmen? Was hilft',
  description:
    'Plantarfasziitis kühlen oder wärmen: was Kälte und Wärme bewirken, was die wenigen Studien zeigen, wie du sie sicher nutzt und warum Übungen mehr bringen.',
  h1: 'Kühlen oder wärmen bei Plantarfasziitis: was hilft und wann',
  lede:
    'Bei Plantarfasziitis sind Kälte und Wärme beide in Ordnung, um kurzfristig Erleichterung zu bekommen. Kälte passt meist zu einer schmerzenden Ferse nach einem langen Tag auf den Beinen. Wärme passt meist zu einem steifen Fuß, bevor du dehnst. Für keins von beiden gibt es starke Studienbelege, und die Leitlinie von 2023 zu Fersenschmerzen spricht zu keinem eine Empfehlung aus. Die eigentliche Arbeit machen Dehnen und Wadenkraft.',
  intro: [
    'Nimm also das, was sich besser anfühlt, nutz es sicher und mach es zusätzlich zu deinen Übungen, nicht stattdessen. Unten erfährst du, warum die Regel „es ist entzündet, also kühlen“ wackelig ist, was die wenigen Studien gefunden haben und wie du deine Haut schützt. Zum Krankheitsbild selbst siehe [Plantarfasziitis](/de/plantarfasziitis/).',
  ],
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen fand nur 1 kleine Studie zu Wärme und kam zu dem Schluss, dass eine Empfehlung zu oberflächlicher Wärme oder Kälte „nicht ausgesprochen werden kann“ (Koc und Kollegen, 2023).',
    'In Gewebe aus 50\u00A0Operationen an der Ferse bei lang bestehender Plantarfasziitis fanden Forschende abgenutzte, degenerierte Faszie ohne Anzeichen einer Entzündung (Lemont und Kollegen, 2003).',
    'Eine Übersichtsarbeit über 22\u00A0Studien zu Kälte bei akuten Verletzungen bewertete deren Qualität im Schnitt mit 3,4 von 10 und fand keine Belege für eine beste Methode oder beste Dauer des Kühlens (Bleakley und Kollegen, 2004).',
    'Eine Übersichtsarbeit über 36\u00A0Studien an Menschen ohne Verletzung fand, dass Wärme plus Dehnen die Beweglichkeit stärker verbesserte als Dehnen allein, allerdings hatte jede Studie ein hohes Verzerrungsrisiko (Bleakley und Costello, 2013).',
    'Dehnen bekommt die beste Bewertung der Leitlinie, **A**, und Krafttraining ein **B**. Kälte und Wärme sind Hilfsmittel fürs Wohlbefinden, die du zusätzlich nutzt.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Ist Kühlen oder Wärmen besser bei Plantarfasziitis?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen fand 1 kleine Studie zu Wärme und sagte, dass eine Empfehlung zu oberflächlichen Wärme- und Kälteanwendungen nicht ausgesprochen werden kann (Koc und Kollegen, 2023).',
      paragraphs: [
        'Weder Kühlen noch Wärmen ist bei Plantarfasziitis klar besser, weil keins von beiden gut genug untersucht ist, um einen Sieger zu küren. Die Leitlinie von 2023 zu Fersenschmerzen der American Physical Therapy Association hat die Forschung zu „thermischen Anwendungen“ gesichtet, also zu Wärme- und Kältepackungen und Ähnlichem. Sie fand eine kleine Studie von geringerer Qualität zu Wärme und kam zu dem Schluss, dass eine Empfehlung „nicht ausgesprochen werden kann“.',
        'Das heißt nicht, dass beides nutzlos ist. Es heißt, dass es Hilfsmittel fürs Wohlbefinden sind und du danach wählen kannst, wie sich dein Fuß gerade anfühlt. Die Tabelle unten ist eine praktische Orientierung, keine Regel aus einer Studie.',
      ],
      table: {
        caption: 'Kühlen oder wärmen: eine praktische Orientierung',
        head: ['Situation', 'Meist angenehmer', 'Warum'],
        rows: [
          ['Die Ferse pocht nach einem langen Spaziergang oder einer Schicht', 'Kälte', 'Kälte dämpft die Schmerzsignale für eine Weile'],
          ['Der Fuß fühlt sich steif und verspannt an, bevor du dehnst', 'Wärme', 'Warmes Gewebe lässt sich meist leichter dehnen'],
          ['Die ersten Schritte am Morgen', 'Wärme oder nichts, dann dehnen', 'Das Ziel ist, locker zu werden, bevor du den Fuß belastest'],
          ['Der Schmerz kam plötzlich nach einer Verletzung, mit Schwellung oder Bluterguss', 'Kälte, und geh zu einer medizinischen Fachperson', 'Das ist möglicherweise keine Plantarfasziitis'],
          ['Du hast Diabetes, taube Füße oder eine schlechte Durchblutung', 'Frag zuerst eine medizinische Fachperson', 'Du spürst eine Verbrennung oder Kälteschädigung vielleicht nicht'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'Ist Plantarfasziitis eine Entzündung, und muss man sie kühlen?',
      keyFact: 'In 50\u00A0operierten Fällen lang bestehender Plantarfasziitis zeigte die Faszie Degeneration ohne Entzündung (Lemont und Kollegen, 2003).',
      figure: {
        id: 'plantar-fascia',
        caption: 'Die Plantarfaszie verläuft vom Fersenbein bis zum Zehenansatz.',
        alt: 'Ein Fuß von der Innenseite, die Plantarfaszie ist als Band von der Ferse bis zu den Zehen hervorgehoben.',
      },
      paragraphs: [
        'Eine lang bestehende Plantarfasziitis ist meist kein entzündetes Gewebe, so wie es eine frische Verstauchung ist. Die Endung „-itis“ im Namen bedeutet Entzündung, und deshalb raten dir so viele Seiten zum Kühlen. Als Lemont und Kollegen 2003 aber Gewebe aus 50\u00A0Operationen bei chronischer Plantarfasziitis untersuchten, fanden sie abgenutzte, ausgefranste und degenerierte Faszie und keine Anzeichen einer Entzündung. Sie schlugen vor, von Fasziose zu sprechen, also von einem abgenutzten Band, nicht von einem entzündeten.',
        'Zu diesem Befund gehören zwei Einschränkungen. Es waren die schwersten Fälle, so schlimm, dass operiert werden musste, frühe Fersenschmerzen sehen also womöglich anders aus. Und die Studie hat nur das Gewebe beschrieben. Kühlen hat sie nicht getestet.',
        'Sie ändert aber den Grund fürs Kühlen. Wenn die Faszie vor allem abgenutzt und überlastet ist, „löscht“ Kälte kein Feuer. Sie dämpft den Schmerz für eine Weile, und das ist trotzdem nützlich. Was einem abgenutzten Gewebe hilft, sich anzupassen, ist schrittweise Belastung: Dehnen und Krafttraining.',
      ],
      cites: [CITE.lemontFasciosis],
    },
    {
      h2: 'Hilft Kühlen bei Plantarfasziitis? Was die Studien gefunden haben',
      keyFact: 'In einer Studie mit 30\u00A0Personen sank der Schmerz mit einem gefrorenen Tennisball plus Dehnen von 7,7 auf 3,5 von 10, mit Dehnen allein von 7,6 auf 6,7 (Shinde und Patil, 2026).',
      paragraphs: [
        'Kälte lindert die Schmerzen bei Plantarfasziitis wahrscheinlich für kurze Zeit, aber nur sehr wenige Studien haben das getestet, und keine hat Kälte mit gar nichts verglichen. Das gibt es.',
        'In einer Studie von 2014 mit 102\u00A0Personen, deren Plantarfasziitis länger als sechs Monate bestand, bekamen beide Gruppen 10\u00A0tägliche Sitzungen von 20\u00A0Minuten an einem Gerät in der Praxis: Kälte allein oder Kälte plus Ultraschall. Beiden ging es besser, und die kombinierte Gruppe schnitt bis zu 18\u00A0Monate lang besser ab (Costantino und Kollegen). Kälte war die Vergleichsgruppe, die Studie kann also nicht sagen, wie viel die Kälte selbst bewirkt hat. Eine Studie von 2023 mit 36\u00A0Personen hatte dieselbe Lücke: Einer „Cryostretch“-Gruppe, die den Fuß auf einem gefrorenen Tennisball rollte, ging es über 7\u00A0Tage besser, den beiden Gruppen ohne Kälte aber auch (Jadhav und Gurudut).',
        'Der direkteste Test ist klein. In einer Studie von 2026 mit 30\u00A0Personen ging die Gruppe, die zwei Monate lang zusätzlich zum Dehnen einen gefrorenen Tennisball nutzte, auf einer Schmerzskala von 0 bis 10 von 7,7 auf 3,5 zurück, die Gruppe mit Dehnen allein von 7,6 auf 6,7 (Shinde und Patil). Das sieht nach einem großen Unterschied aus, aber die Arbeit sagt nicht klar, wie die Teilnehmenden auf die Gruppen verteilt wurden, und die Gruppe mit dem gefrorenen Ball bekam auch den Druck beim Rollen ab. Kälte und Massage lassen sich also nicht trennen.',
        'Abseits des Fußes sieht es ähnlich aus. Eine Übersichtsarbeit von 2004 über 22\u00A0Studien zu Kälte bei frischen Verletzungen wie Sprunggelenksverstauchungen bewertete deren Qualität im Schnitt mit 3,4 von 10 und fand keine beste Methode oder Dauer des Kühlens. Das einzige, schwache Signal sprach für Kälte plus Übungen nach Sprunggelenksverstauchungen und Operationen (Bleakley und Kollegen).',
      ],
      sourceNote: 'Costantino 2014: einfach verblindete RCT, Kryo-Ultraschall gegenüber Kryotherapie, Schmerz auf einer visuellen Analogskala. Jadhav 2023: RCT, 12 pro Gruppe, Numerical Pain Rating Scale und Foot Function Index an Tag 7. Shinde 2026: 15 pro Gruppe, NPRS und Foot Function Index, Zuteilung beschrieben als „random sampling technique“. Bleakley 2004: mittlerer PEDro-Score 3,4/10.',
      cites: [CITE.costantinoCryo, CITE.jadhavCryostretch, CITE.shindeFrozenBall, CITE.bleakleyIce],
    },
    {
      h2: 'Ist Wärme gut bei Plantarfasziitis?',
      keyFact: 'Ein Cochrane-Review über 9\u00A0Studien mit 1.117\u00A0Personen fand mäßige Belege, aus einigen dieser Studien, für einen kleinen kurzfristigen Nutzen von Wärmeauflagen bei Kreuzschmerzen und zu wenig Belege, um Kälte zu beurteilen (French und Kollegen, 2006).',
      paragraphs: [
        'Wärme ist bei Plantarfasziitis in Ordnung, wenn sie sich gut anfühlt, und für die Vorstellung, dass sie „die Entzündung verschlimmert“, gibt es keine Studie. Die einzige Wärme-Studie, die die Leitlinie von 2023 gefunden hat, war klein: 20\u00A0Personen mit Schmerzen an der Fußsohle bekamen per Zufall ein Wärmepflaster oder ein Scheinpflaster auf Triggerpunkte (druckempfindliche Stellen im Muskel). Der Schmerz sank in der Wärmegruppe, aber nicht in der Gruppe mit dem Scheinpflaster (Petrofsky und Kollegen, 2020). Das Pflaster blieb etwa vier Stunden drauf, und der Schmerz wurde direkt danach gemessen. Die Studie sagt also nur etwas über kurzfristige Linderung.',
        'Die besten allgemeinen Belege zu Wärme stammen von Rückenschmerzen, nicht von Füßen. Ein Cochrane-Review (eine sorgfältige Zusammenfassung von Studien) über 9\u00A0Studien mit 1.117\u00A0Personen fand mäßige Belege, aus einigen dieser Studien, dass Wärmeauflagen frische Kreuzschmerzen kurzfristig etwas senken und dass zusätzliche Übungen mehr halfen. Zu Kälte fand sie nur drei Studien von schlechter Qualität und zog keine Schlüsse (French und Kollegen, 2006).',
        'Wärme bringt mehr Blut in die Region und macht Gewebe etwas nachgiebiger. Kälte verlangsamt die Durchblutung und dämpft den Schmerz. Eine Übersichtsarbeit von 2015 merkte an, dass die meisten Ratschläge zu beidem auf Erfahrung beruhen, mit begrenzten Studienbelegen (Malanga und Kollegen).',
      ],
      cites: [CITE.petrofskyHeat, CITE.guideline, CITE.frenchHeatCold, CITE.malangaHeatCold],
    },
    {
      h2: 'Solltest du vor dem Dehnen wärmen?',
      keyFact: 'In 36\u00A0Studien mit 1.301\u00A0Personen ohne Verletzung verbesserte Wärme plus Dehnen die Beweglichkeit stärker als Dehnen allein (Bleakley und Costello, 2013).',
      paragraphs: [
        'Den Fuß vor dem Dehnen zu wärmen ist eine vernünftige Wahl, und dafür gibt es mehr Rückhalt als für Kühlen vor dem Dehnen. Eine Übersichtsarbeit von 2013 über 36\u00A0Studien mit 1.301\u00A0Personen ohne Verletzung fand, dass Wärme die Beweglichkeit erhöhte und dass Wärme plus Dehnen besser wirkte als Dehnen allein. Die Daten zu Kälte waren widersprüchlich. Jede Studie hatte ein hohes Verzerrungsrisiko, und keine schloss Menschen mit Fersenschmerzen ein. Sieh das also als sinnvolle Idee, nicht als getesteten Plan für Plantarfasziitis.',
        'Aufwärmen kann einfach sein. Eine warme Dusche oder ein paar Minuten mit den Füßen in warmem Wasser, vor der Plantarfaszien-Dehnung und der Wadendehnung. Am Morgen solltest du mit dem Dehnen aber nicht auf ein Aufwärmen warten. Die Dehnung vor dem ersten Schritt ist dafür gedacht, auf der Bettkante zu passieren, bevor dein Fuß Gewicht trägt. [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) führt dich durch diese Routine.',
      ],
      cites: [CITE.bleakleyThermal],
    },
    {
      h2: 'Helfen Wechselbäder bei Plantarfasziitis?',
      paragraphs: [
        'Für Wechselbäder, bei denen der Fuß abwechselnd in warmes und kaltes Wasser kommt, haben wir keine Studie zur Plantarfasziitis gefunden. Eine systematische Übersichtsarbeit von 2009 zu Wechselbädern schloss 10\u00A0Studien ein, an Freiwilligen ohne Verletzung und an Menschen mit rheumatoider Arthritis, Diabetes oder Verletzungen an Fuß und Sprunggelenk. Sie fand, dass der Temperaturwechsel die Durchblutung der Haut steigern kann, ein Zusammenhang mit besserer Funktion wurde aber nicht gezeigt (Breger Stanton und Kollegen).',
        'Online findest du viele verschiedene Rezepte: zwei Minuten kalt und 30\u00A0Sekunden warm, eine Minute kalt und drei Minuten warm, immer mit kalt aufhören. Keine dieser Zeitangaben stammt aus einer Studie. Wenn du Wechselbäder magst, sind sie für die meisten Menschen mit normalem Gefühl in den Füßen risikoarm. Erwarte nur nicht mehr davon als von einfacher Wärme oder Kälte.',
      ],
      cites: [CITE.bregerContrast],
    },
    {
      h2: 'Wie kühlst oder wärmst du deine Ferse sicher?',
      paragraphs: [
        'Kälte und Wärme sind für die meisten Menschen risikoarm, aber beides kann die Haut schädigen, und das Risiko ist höher an einem Fuß, der nicht normal fühlt. Keine Studie hat die beste Dauer fürs Kühlen festgelegt (Bleakley und Kollegen, 2004). Die Grenzen unten sind also gängige Praxis, keine Zahlen aus der Forschung.',
      ],
      bullets: [
        'Leg ein dünnes Tuch zwischen Eis und Haut. Leg Eis nie direkt auf die nackte Haut.',
        'Die meisten Ratschläge begrenzen das Kühlen auf etwa 10 bis 20\u00A0Minuten am Stück und lassen die Haut dann vollständig wieder warm werden, bevor die nächste Runde kommt.',
        'Nimm das Eis ab, wenn die Haut weiß, hart oder taub wird oder stark kribbelt.',
        'Bei Wärme gilt: warm, nicht heiß. Eine Wärmepackung oder warmes Wasser soll sich angenehm anfühlen, nie brennen.',
        'Schlaf nie auf einem Heizkissen oder mit einer Kältepackung am Fuß ein.',
        'Lass Wärme weg, wenn die Ferse gerötet, heiß und geschwollen ist, vor allem bei Fieber. Das gehört zu einer medizinischen Fachperson, nicht unter eine Wärmepackung.',
        'Wenn du Diabetes, Taubheit in den Füßen, eine schlechte Durchblutung oder Raynaud hast (Finger oder Zehen, die in der Kälte weiß werden), frag eine medizinische Fachperson, bevor du eins von beiden nutzt.',
      ],
      after: [
        'Der letzte Punkt ist wichtig. In einer Fallserie mit fünf Menschen mit Diabetes und Nervenschäden in den Füßen führte Wärme an den Füßen zu Verbrennungen und Infektionen, bei denen die Wunden in allen Fällen operativ gesäubert werden mussten (Thng und Kollegen, 1999). Ein Fuß, der Wärme nicht richtig spürt, kann dich nicht warnen.',
        'Eine gefrorene Wasserflasche, die du unter dem Gewölbe rollst, verbindet Kälte mit Massage. Dazu gibt es eine eigene Seite: [Massageball und gefrorene Flasche bei Plantarfasziitis](/de/massageball-plantarfasziitis/), die Technik findest du unter [Fußrollen](/de/uebungen/fuss-mit-ball-rollen/).',
      ],
      cites: [CITE.bleakleyIce, CITE.thngBurns],
    },
    {
      h2: 'Was hilft bei Plantarfasziitis wirklich auf lange Sicht?',
      keyFact: 'In einer Studie mit 48\u00A0Personen linderte langsames Fersenheben mit einem Handtuch unter den Zehen die Schmerzen nach drei Monaten schneller als Dehnen allein, nach zwölf Monaten lagen beide Gruppen gleichauf (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'Der Teil der Versorgung bei Plantarfasziitis mit den stärksten Belegen sind Übungen, nicht Temperatur. Die Leitlinie von 2023 gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, **A**, und Krafttraining für Fuß und Sprunggelenk ein **B**. In einer Studie von 2003 mit 101\u00A0Personen half eine Plantarfaszien-Dehnung nach etwa zwei Monaten mehr als eine Wadendehnung allein (DiGiovanni und Kollegen). In einer Studie von 2015 mit 48\u00A0Personen linderte langsames Fersenheben mit einem Handtuch unter den Zehen die Schmerzen nach drei Monaten schneller als Dehnen allein, nach zwölf Monaten lagen beide Gruppen aber etwa gleichauf (Rathleff und Kollegen).',
        'Nutz Kälte oder Wärme rund um diese Übungen: Wärme vor dem Dehnen, Kälte nach einem langen Tag, wenn dir eins davon hilft. Walkito funktioniert genauso: Dehnungen und Wadentraining sind der Plan, und das Fußrollen ist ein Erholungsschritt von 60\u00A0Sekunden, nicht die Hauptsache. Die komplette Liste findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          dose: 'In der Studie: 10-mal 10\u00A0Sekunden halten. Walkito beginnt mit 2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'Jeden Morgen vor dem ersten Schritt und nach dem Sitzen',
          feel: 'Ein Ziehen entlang des Gewölbes, kein stechender Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          how: 'Setz dich hin und leg einen Knöchel über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Halte, dann lass los. Ein warmer Fuß lässt sich vielleicht leichter dehnen.',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft zurück, bevor du aufstehst',
          alt: 'Eine sitzende Figur zieht die Zehen zurück, um das Gewölbe zu dehnen',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie. Eine Studie von 2003 mit 101\u00A0Personen sprach für sie gegenüber einer Wadendehnung allein.' },
        },
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          dose: 'Walkito beginnt mit 2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Tagen',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          how: 'Hände an die Wand, das hintere Bein gestreckt, die Ferse unten, die Hüfte nach vorn. Halte, bis du die Dehnung in der oberen Wade spürst.',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, nach vorn lehnen',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie für Waden- und Plantarfaszien-Dehnung.' },
        },
        {
          name: 'Fersenheben beidbeinig',
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 10',
          often: 'Krafttage, nie zwei hintereinander',
          feel: 'Arbeit in beiden Waden',
          stop: 'Der Schmerz 6/10 erreicht oder der nächste Morgen deutlich schlimmer ist',
          how: 'Stell dich hin, halt dich an einer Wand fest, komm in etwa drei Sekunden auf die Zehen und senk dich in etwa drei Sekunden ab. Das ist der erste Schritt zum Fersenheben mit Handtuch aus der Studie mit 48\u00A0Personen, beschrieben unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
          media: 'heel_raise_double',
          caption: 'Fersenheben: langsam hoch, langsam runter',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße',
          evidence: { level: 'moderate', why: 'Bewertung B in der Leitlinie für Krafttraining. Diese beidbeinige Variante wurde nicht einzeln getestet.' },
        },
        {
          name: 'Fußrollen',
          dose: 'Walkito beginnt mit 1\u00A0Runde von 60\u00A0Sekunden',
          often: 'Nach einer Einheit oder einem langen Tag',
          feel: 'Fester Druck unter dem Gewölbe, nie stechender Schmerz',
          stop: 'Du zuckst zusammen, oder die Sohle ist am nächsten Morgen empfindlicher',
          how: 'Setz dich hin und roll die Sohle langsam über einen Ball. Eine gefrorene Wasserflasche bringt Kälte dazu, wenn sich das besser anfühlt.',
          media: 'foot_roll',
          caption: 'Fußrollen: langsamer, fester Druck unter dem Gewölbe',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball',
          evidence: { level: 'early', why: 'Ein Schritt fürs Wohlbefinden. Für Rollen mit oder ohne Kälte gibt es nur kleine, frühe Studien.' },
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Soll ich bei Plantarfasziitis kühlen oder wärmen?',
      cites: [CITE.guideline],
      a: 'Nimm, was sich besser anfühlt, denn für keins von beiden gibt es bei Plantarfasziitis starke Belege. Die Leitlinie von 2023 zu Fersenschmerzen fand nur eine kleine Studie zu Wärme und sprach weder zu Wärme noch zu Kälte eine Empfehlung aus. Viele mögen Kälte nach einem langen Tag auf den Beinen und Wärme vor dem Dehnen. Beides bringt kurzfristig Erleichterung. Dehnen und Wadenkrafttraining sind das, was die Leitlinie empfiehlt.',
    },
    {
      q: 'Wie lange sollte ich die Ferse bei Plantarfasziitis kühlen?',
      cites: [CITE.bleakleyIce],
      a: 'Üblich sind etwa 10 bis 20\u00A0Minuten am Stück, mit einem dünnen Tuch zwischen Eis und Haut, danach lässt du die Haut vollständig wieder warm werden, bevor du erneut kühlst. Keine Studie hat eine beste Dauer gefunden: Eine Übersichtsarbeit über 22\u00A0Studien zu Kälte fand keine Belege für eine optimale Dauer. Hör früher auf, wenn die Haut weiß, taub oder hart wird.',
    },
    {
      q: 'Verschlimmert Wärme eine Plantarfasziitis?',
      cites: [CITE.petrofskyHeat, CITE.lemontFasciosis],
      a: 'Keine Studie zeigt, dass Wärme eine Plantarfasziitis verschlimmert. Diese Warnung beruht auf der Vorstellung, dass die Faszie entzündet ist, aber Gewebe aus lang bestehenden Fällen zeigte Degeneration ohne Entzündung. In einer kleinen Studie mit 20\u00A0Personen mit Schmerzen an der Fußsohle sank der Schmerz mit einem Wärmepflaster, aber nicht mit einem Scheinpflaster. Lass Wärme weg, wenn die Ferse gerötet, heiß und geschwollen ist.',
    },
    {
      q: 'Ist es okay, die Plantarfasziitis morgens zu kühlen?',
      cites: [CITE.guideline],
      a: 'Kannst du, aber morgens ist der Fuß am steifsten, und Kälte lockert ihn nicht. Der nützlichere Schritt am Morgen ist eine Plantarfaszien-Dehnung vor dem ersten Schritt. Die Leitlinie von 2023 bewertet Dehnen mit A, ihrer besten Bewertung. Eine warme Dusche oder warme Socken vor dem Dehnen fühlen sich vielleicht besser an als Eis. Heb dir das Kühlen für später auf, nach der Zeit auf den Beinen.',
    },
    {
      q: 'Hilft es, eine gefrorene Wasserflasche unter dem Fuß zu rollen?',
      cites: [CITE.shindeFrozenBall],
      a: 'Es kann die Schmerzen lindern, aber die Belege sind dünn. In einer kleinen Studie mit 30\u00A0Personen senkte ein gefrorener Tennisball zusätzlich zum Dehnen über zwei Monate den Schmerz stärker als Dehnen allein, aber die Verteilung auf die Gruppen war unklar, und die Kälte lässt sich nicht vom Rollen trennen. Es ist ein vernünftiger Schritt fürs Wohlbefinden neben Dehnen und Wadentraining, kein Ersatz dafür.',
    },
    {
      q: 'Darf ich mit Diabetes kühlen oder wärmen?',
      cites: [CITE.thngBurns],
      a: 'Frag zuerst eine medizinische Fachperson. Diabetes kann das Gefühl in den Füßen verringern, sodass du vielleicht erst merkst, dass die Haut zu heiß oder zu kalt wird, wenn sie schon geschädigt ist. In einer Fallserie mit fünf Menschen mit diabetischen Nervenschäden, die Wärme an den Füßen nutzten, bekamen alle Verbrennungen, die operativ gesäubert werden mussten. Dieselbe Vorsicht gilt bei schlechter Durchblutung oder Taubheit.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat oder mit plötzlicher Schwellung oder einem Bluterguss kam',
      'du den Fuß nicht belasten kannst oder hinkst',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst, was auf einen Ermüdungsbruch hindeuten kann',
      'Taubheit, Kribbeln oder Brennen dazukommen',
      'die Ferse gerötet, heiß oder geschwollen ist oder du Fieber hast',
      'du Diabetes, Taubheit in den Füßen, eine schlechte Durchblutung oder Raynaud hast, bevor du kühlst oder wärmst',
      'die Haut nach Kälte oder Wärme weiß, taub, mit Blasen oder stark gerötet bleibt',
      'es nach mehreren Wochen täglichen Dehnens und weniger Belastung nicht besser geworden ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Kälte und Wärme können einem schlechten Tag die Spitze nehmen. Der Übungsplan ist der Teil, hinter dem die Leitlinie steht. Walkito baut diesen Plan Woche für Woche rund um ein Fokusziel. Bei Fersenschmerzen ist das erste Ziel ein besserer Morgen: Schmerz bei oder unter 1 von 10 an 14\u00A0Tagen am Stück. Dehnungen sind ab der ersten Woche im Plan, und das Fußrollen taucht als kurzer Erholungsschritt auf.',
    more: [
      'Jede Woche kann sich nur die Übung für dein Fokusziel ändern. Sie geht eine Stufe höher, wenn sich deine letzten zwei Einheiten damit leicht angefühlt haben und der Morgenschmerz nicht gestiegen ist, und eine Stufe zurück, wenn sich eine Einheit schwer angefühlt hat oder der Morgenschmerz um 2 oder mehr gestiegen ist.',
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Ein kurzer Test prüft anfangs alle 14\u00A0Tage Wadenausdauer, Gewölbehalten und Gleichgewicht, dann alle 28, sobald du ein Ziel erreicht hast, damit du siehst, was sich verändert. Walkito ist ein Übungsprogramm für Erwachsene. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Kühlen oder wärmen',
  campaign: 'guide-ice-heat-de',
};
