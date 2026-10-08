import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/best-app.ts`, written around the German queries
 * «App Plantarfasziitis», «beste App Fersenschmerzen», «Exakt Health
 * Erfahrungen». Informal «du». Prices stay in US dollars as listed on the
 * US App Store, with German decimal commas. Ratings, review counts and the
 * October 2026 check date are identical to the English page.
 */

export const BEST_APP_DE: Guide = {
  lang: 'de',
  page: 'bestApp',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Beste App bei Plantarfasziitis 2026: ehrlicher Vergleich',
  description:
    'Die beste App bei Plantarfasziitis 2026: Exakt Health, Hinge Health, Prehab, PlantarCare, Arch und Walkito im Vergleich nach Preis, Plattform und Eignung.',
  h1: 'Die beste App bei Plantarfasziitis: ein Ratgeber zum Kauf für 2026',
  lede:
    'Diese Seite vergleicht sieben Apps mit Übungen bei Plantarfasziitis, Plattfüßen oder allgemeinen Fußschmerzen. Walkito ist eine davon, und Walkito hat diese Seite gemacht, das solltest du von Anfang an wissen. Das Ziel ist, fair zu sein, zu sagen, wo andere stärker sind, und dir genug Details zu geben, um die App zu wählen, die zu deiner Situation passt.',
  intro: [
    'Die eine beste App für alle gibt es nicht. Die richtige Wahl hängt davon ab, was du brauchst: Wer nach einer Plantarfasziitis wieder mit dem Laufen anfangen will, braucht etwas anderes als jemand mit Plattfüßen, der den ganzen Tag bei der Arbeit steht, und beide brauchen etwas anderes als jemand, dessen Arbeitgeber Hinge Health bezahlt. Die Kriterien unten erklären, worauf du achten solltest, und die Tabelle danach zeigt, wo jede App steht.',
  ],
  takeaways: [
    'Die klinische Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade die Bewertung A und Krafttraining die Bewertung B. Eine gute App sollte beides enthalten.',
    'Anpassung an den Schmerz zählt: Eine feste tägliche Routine kann einen guten Morgen nicht von einem schlechten unterscheiden, und eine gereizte Faszie jeden Tag gleich zu belasten, kann dich zurückwerfen.',
    'Exakt Health ist die stärkste Option für Läuferinnen und Läufer, die sich von einer Plantarfasziitis erholen und auch einen Plan für den Wiedereinstieg ins Laufen wollen, und es ist in der EU als Medizinprodukt zertifiziert.',
    'Hinge Health ist über Arbeitgeber und Krankenversicherungen kostenlos und bietet ein vollständiges klinisches Betreuungsteam, aber du kannst es nicht selbst kaufen.',
    'Keine App kann deine Fußschmerzen diagnostizieren. Wenn der Schmerz nach einer Verletzung begann, mit Schwellung oder Taubheit einhergeht oder dich nachts weckt, geh zu einer medizinischen Fachperson, bevor du ein Programm anfängst.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was sollte eine App bei Plantarfasziitis wirklich können?',
      keyFact: 'Die klinische Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade mit A, der besten Bewertung, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Eine nützliche App bei Plantarfasziitis sollte Übungen enthalten, die zur Forschung passen. Die klinische Leitlinie von 2023 zu Fersenschmerzen bewertet die Belege für jeden Ansatz. Dehnen von Plantarfaszie und Wade bekommt ein A, die beste Bewertung. Krafttraining bekommt ein B. Beides sollte also in der App sein, nicht nur eins davon.',
        'Über die Übungsliste hinaus lohnt es sich, diese Punkte zu prüfen, bevor du ein Abo abschließt:',
      ],
      bullets: [
        '**Steigerung.** Die Übungen sollten mit der Zeit schwerer werden und nicht ewig auf demselben Level bleiben. Die Forschung zu Krafttraining bei Plantarfasziitis hat ein Protokoll mit schrittweise steigender Belastung genutzt.',
        '**Anpassung an den Schmerz.** Die App sollte reagieren, wenn der Schmerz schlimmer ist. Eine schmerzende Ferse an einem schlechten Morgen genauso zu belasten, ist der schnellste Weg, das Vertrauen in das Programm zu verlieren.',
        '**Zeit pro Tag.** Die meisten machen keine 30\u00A0Minuten Fußübungen. Fünf bis zehn Minuten mit den richtigen Übungen, regelmäßig gemacht, sind realistischer.',
        '**Preis und Testphase.** Prüf, was du bezahlst und ob es eine kostenlose Testphase gibt, in der du sehen kannst, ob es für dich funktioniert.',
        '**Plattformen.** Manche Apps gibt es nur für iOS. Wenn du Android nutzt, ist deine Auswahl kleiner.',
        '**Datenschutz.** Schmerz- und Gesundheitsdaten sind sensibel. Prüf, ob die App sie weitergibt oder verkauft.',
        '**Beteiligung von Fachleuten.** Eine App, die von zugelassenen Physiotherapeutinnen und Physiotherapeuten entwickelt oder geprüft wurde, ist ein vernünftiges Zeichen. Eine App, die dich mit einer medizinischen Fachperson verbinden kann, ist ein stärkeres.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wie schneiden die Apps im Vergleich ab?',
      paragraphs: [
        'Die Tabelle unten umfasst sieben Apps, die im Oktober 2026 verfügbar sind. Jede Angabe wurde mit dem eigenen Eintrag der App im App Store oder bei Google Play und mit ihrer offiziellen Website abgeglichen. Bewertungen und Anzahl der Rezensionen sind so angegeben, wie sie zum Zeitpunkt des Schreibens im iOS App Store standen.',
      ],
      table: {
        caption: 'Apps bei Plantarfasziitis und Fußschmerzen im Vergleich (Oktober 2026)',
        head: ['App', 'Plattformen und Preis', 'Schwerpunkt', 'Passt sich an den Schmerz an?', 'Bewertung (iOS)'],
        rows: [
          [
            '[Exakt Health](https://www.exakthealth.com/)',
            'iOS, Android. 19,99\u00A0$/Monat oder 59,99\u00A0$/6\u00A0Monate; 7\u00A0Tage kostenlos testen',
            'Laufverletzungen (15+ Reha-Pläne) + Lauftraining',
            'Ja, der Plan passt sich deinem Fortschritt an',
            '4,8 (125\u00A0Bewertungen)',
          ],
          [
            '[Hinge Health](https://www.hingehealth.com/)',
            'iOS, Android. 0\u00A0$ über Arbeitgeber oder Krankenversicherung',
            'Breite Schmerzen am Bewegungsapparat (Rücken, Knie, Hüfte, Nacken, Beckenboden)',
            'Ja, vom Betreuungsteam personalisiert',
            '4,9 (168.000\u00A0Bewertungen)',
          ],
          [
            '[Prehab](https://theprehabguys.com/)',
            'iOS. 49\u00A0$/Monat oder ca. 16\u00A0$/Monat bei jährlicher Abrechnung; 7\u00A0Tage kostenlos testen beim Jahresabo',
            '55+ Programme für viele Körperbereiche',
            'Einschätzung per Body Scan, dann festes Programm',
            '4,8 (ca. 1.700\u00A0Bewertungen)',
          ],
          [
            '[PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136)',
            'iOS. Kostenlos, keine In-App-Käufe',
            'Fersenschmerzen / Plantarfasziitis festhalten',
            'Erholungsphasen passen die Routine an den Schmerzverlauf an',
            'Noch keine Bewertungen',
          ],
          [
            '[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858)',
            'iOS. 9,99\u00A0$/Monat oder 39,99\u00A0$/Jahr; 7\u00A0Tage kostenlos testen',
            'Plattfüße und Kräftigung des Fußgewölbes',
            'Nein',
            '4,3 (6\u00A0Bewertungen)',
          ],
          [
            'Plantar Fasciitis Exercises',
            'iOS, Android. Kostenloser Download; In-App-Kauf nötig, um sie zu nutzen',
            'Nur Dehnungen bei Plantarfasziitis',
            'Nein',
            '1,0 (1\u00A0Bewertung)',
          ],
          [
            '[Walkito](https://walkito.site/)',
            'iOS. 44,99\u00A0$/Jahr oder 7,99\u00A0$/Woche',
            'Fersenschmerzen, Plattfüße, langes Stehen, Laufen',
            'Der Morgen-Check passt jede Einheit an',
            'Noch keine Bewertungen (neu, Okt. 2026)',
          ],
        ],
      },
      sourceNote:
        'Alle Angaben aus dem App Store, von Google Play und von den offiziellen Websites. Geprüft im Oktober 2026.',
    },
    {
      h2: 'Exakt Health: die Reha-App für Läuferinnen und Läufer',
      paragraphs: [
        'Exakt Health ist für Läuferinnen und Läufer gebaut, und das merkt man. Die App hat über 15\u00A0Reha-Pläne für Verletzungen, von Plantarfasziitis über Achillessehnen-Tendinopathie bis zu Meniskusrissen, dazu Laufpläne vom Sofa bis zum Marathon. Jeder Reha-Plan endet mit einer strukturierten Phase für den Wiedereinstieg ins Laufen, was die meisten Apps bei Fußschmerzen nicht bieten.',
        'Sie ist in der EU als Medizinprodukt zertifiziert, hat also eine behördliche Prüfung zu Sicherheit und Zweckbestimmung durchlaufen. Entwickelt wurde sie von zugelassenen Sportphysiotherapeutinnen und -physiotherapeuten und Lauftrainern. Die App hat über 600\u00A0Übungsvideos und passt ihren Plan an, während du die Level durchläufst.',
        'Mit 19,99\u00A0$ im Monat oder 59,99\u00A0$ für sechs Monate ist Exakt nicht billig, aber die Bandbreite an Beschwerden und die Qualität der Reha-Pläne sind auf dem Markt der Selbsthilfe-Apps schwer zu schlagen. Mit der 7-tägigen kostenlosen Testphase siehst du die ganze App, bevor du zahlst. Sie ist auf Englisch, Französisch, Deutsch und Spanisch verfügbar, für iOS und Android.',
        'Wo Exakt stärker ist als Walkito: mehr abgedeckte Verletzungen (15+ gegenüber Fersenschmerzen, Plattfüßen und Schienbein), ein vollständiges Programm für den Wiedereinstieg ins Laufen, Android, die Zertifizierung als Medizinprodukt in der EU und eine etablierte Nutzerschaft mit einer Bewertung von 4,8 bei 125\u00A0iOS-Rezensionen.',
        'Wo Walkito anders ist: Walkito passt die Einheit jedes Tages anhand eines Morgen-Checks zum Schmerz an statt anhand von Feedback am Ende der Einheit, testet alle 14\u00A0Tage Unterschiede zwischen links und rechts und konzentriert sich gezielt auf Fersen- und Fußschmerzen statt auf die ganze Bandbreite der Laufverletzungen.',
      ],
    },
    {
      h2: 'Hinge Health: die Option über den Arbeitgeber',
      paragraphs: [
        'Hinge Health ist die größte digitale Plattform für den Bewegungsapparat in den USA, mit über 2\u00A0Millionen Mitgliedern. Wenn dein Arbeitgeber oder deine Krankenversicherung sie bezahlt, ist sie für dich kostenlos und bringt etwas mit, das keine Selbsthilfe-App bieten kann: ein eigenes Betreuungsteam mit Physiotherapeutinnen und Physiotherapeuten, Orthopädinnen und Orthopäden und anderen Fachleuten.',
        'Die App deckt viele Beschwerden an Gelenken und Muskeln ab, nicht nur die Füße. Dazu gehört auch das tragbare Gerät Enso zur Linderung akuter Schmerzen. Die Bewertung von 4,9 bei 168.000\u00A0iOS-Rezensionen spiegelt die Mischung aus angeleiteten Übungen, menschlicher Betreuung und null Kosten.',
        'Der Haken ist der Zugang. Du kannst Hinge Health nicht im App Store kaufen. Du brauchst eine Kostenübernahme über einen der über 2.800\u00A0Arbeitgeber oder Krankenversicherer, die es anbieten. Wenn du Zugang hast, ist es wahrscheinlich die umfassendste Option auf dieser Liste. Wenn nicht, ist es gar keine Option.',
        'Hinge Health ist nicht auf Füße spezialisiert. Die Hauptanwendungen sind Rücken-, Knie-, Hüft- und Nackenschmerzen. Speziell bei Plantarfasziitis ist eine fokussiertere App vielleicht der bessere Startpunkt.',
      ],
    },
    {
      h2: 'Prehab: die größte Übungsbibliothek',
      paragraphs: [
        'Die App von The Prehab Guys wurde von promovierten Physiotherapeutinnen und Physiotherapeuten entwickelt und hat die größte Übungsbibliothek in diesem Vergleich: über 55\u00A0Programme, über 170\u00A0Workouts und über 4.000\u00A0Übungsvideos. Sie hat ein eigenes Reha-Programm bei Plantarfasziitis. Die Funktion Body Scan fragt nach deinem Schmerz, deinen Zielen und deinen Bewegungsbedürfnissen und empfiehlt dann ein Programm.',
        'Mit 49\u00A0$ im Monat oder etwa 200\u00A0$ im Jahr ist sie hier die teuerste Selbsthilfe-Option. Die 7-tägige kostenlose Testphase gibt es nur beim Jahresabo. Die Einheiten dauern etwa 20\u00A0Minuten, länger als die 3 bis 10\u00A0Minuten der Apps, die sich auf Füße konzentrieren. Die Qualität der Videoanleitungen wird in Rezensionen durchweg gelobt.',
        'Prehab passt gut, wenn du an mehreren Stellen Schmerzen hast und eine einzige App willst, die alles von den Schultern bis zu den Füßen abdeckt. Sie ist weniger fokussiert als Apps, die speziell für Plantarfasziitis gebaut sind, und passt die täglichen Einheiten nicht an deinen Morgenschmerz an.',
        'Sie gibt es nur für iOS und nur auf Englisch.',
      ],
    },
    {
      h2: 'PlantarCare: der kostenlose Tracker',
      paragraphs: [
        'PlantarCare ist kostenlos, hat keine In-App-Käufe und braucht kein Konto. Die App konzentriert sich ganz auf Fersenschmerzen und Plantarfasziitis. Du trägst deinen Schmerz bei den ersten Schritten am Morgen und deinen stärksten Schmerz am Tag ein, und die App führt dich durch Erholungsphasen mit angeleiteten Dehnungen, Wadentraining, Fersenheben und Erinnerungen zum Kühlen, passend zu deiner Phase.',
        'Für eine kostenlose App macht sie überraschend viel richtig: Schmerzverlauf über die Zeit, Eintragen von Schuhen und Belastung und Erinnerungen an Warnzeichen, die dir sagen, wann du zu einer medizinischen Fachperson solltest. Der Haken: Sie ist neu, hat noch keine Bewertungen und beschreibt nicht, welche Forschung hinter der Auswahl der Übungen steht.',
        'PlantarCare ist ein vernünftiger Startpunkt, wenn du deinen Schmerz kostenlos festhalten und einfache Dehnungen machen willst, ohne ein Abo abzuschließen. Sie gibt es nur für iOS.',
      ],
    },
    {
      h2: 'Arch: Flat Feet Trainer',
      paragraphs: [
        'Arch ist die einzige App in diesem Vergleich, die sich ganz auf Plattfüße und die Kräftigung des Fußgewölbes konzentriert. Sie hat über 40\u00A0Fußübungen, Fortschrittsanzeige und ein klares Design. Mit 39,99\u00A0$ im Jahr oder 9,99\u00A0$ im Monat und einer 7-tägigen kostenlosen Testphase ist der Preis moderat.',
        'Eine Rezension merkte an, dass der App Übungsvideos fehlen und sie stattdessen Illustrationen nutzt. Die App behauptet, ihre Routinen seien „wissenschaftlich gestützt“ und folgten „bewährten physiotherapeutischen Prinzipien“, nennt aber keine bestimmten Studien. Mit nur 6\u00A0Bewertungen im App Store steht sie noch am Anfang.',
        'Wenn es dir vor allem um Plattfüße ohne nennenswerte Schmerzen geht, ist Arch einen Versuch wert. Bei Plantarfasziitis passt sie nicht, weil sie keine Reha-Übungen speziell für die Ferse und kein Festhalten des Schmerzes enthält.',
      ],
    },
    {
      h2: 'Plantar Fasciitis Exercises: eine einfache App mit Bezahlschranke',
      paragraphs: [
        'Diese App von Verdhit Agarwal bietet 15\u00A0Übungen auf drei Stufen: sanfte Dehnungen, Kraftaufbau und fortgeschrittene Übungen. Sie ist für iOS und Android als kostenlos gelistet, aber beide Store-Einträge zeigen In-App-Käufe, und eine Rezension berichtete, dass vor der Nutzung eine monatliche Mitgliedschaft verlangt wurde.',
        'Die Übungen sind einfach, mit Textanleitungen statt Videos. Es gibt keine Steigerungslogik, kein Festhalten des Schmerzes und keine Anpassung. Die einzige iOS-Bewertung ist 1 von 5, und diese Rezension handelt genau davon, unerwartet zur Kasse gebeten worden zu sein. Es ist die Art App, die existiert, weil „plantar fasciitis exercises“ ein häufig gesuchter Begriff ist, und nicht, weil jemand ein durchdachtes Programm gebaut hat.',
        'Wenn du eine kostenlose Übersicht willst, welche Dehnungen du ausprobieren kannst, schau dir vorher den Store-Eintrag an, weil manche Übungen hinter einer Bezahlschranke liegen können. Für ein echtes angeleitetes Programm mit Steigerung reicht sie nicht.',
      ],
    },
    {
      h2: 'Walkito: was es kann und was nicht',
      paragraphs: [
        'Walkito ist ein Übungsprogramm bei Fersenschmerzen, Plattfüßen und Schmerzen im Unterschenkel. Es ist am 2. Oktober 2026 im App Store erschienen. Es ist neu, hat noch keine Bewertungen und ist nur für iOS verfügbar.',
        'Was es kann: Es baut aus deinen Antworten zu Schmerz, Zielen und Zeitplan einen Wochenplan. Jeden Morgen passt ein Check die Einheit des Tages daran an, wie sich dein Fuß anfühlt. Tests alle 14\u00A0Tage messen Fersenheben, Gewölbehalten und Einbeinstand und vergleichen links mit rechts. Die Einheiten dauern 3, 5 oder 10\u00A0Minuten. Die Übungen folgen der Leitlinie von 2023 zu Fersenschmerzen und der Studie von Rathleff 2015. Es verbindet sich mit Apple Health für Schritte, Schlaf und Gehdaten, die auf deinem Handy bleiben.',
        'Was es nicht kann: Es stellt keine Diagnose, es ist kein Medizinprodukt, auf der anderen Seite sitzt keine medizinische Fachperson, und es gibt es nicht für Android. Es deckt Fersenschmerzen, Plattfüße und Schienbeinschmerzen ab, nicht die über 15\u00A0Verletzungsarten von Exakt oder den Ganzkörper-Umfang von Hinge Health oder Prehab.',
        'Mit 44,99\u00A0$ im Jahr oder 7,99\u00A0$ pro Woche ist der Jahrespreis niedriger als bei den meisten Mitbewerbern. Der Wochenpreis ist im Verhältnis zum Jahrespreis höher, was bei Abos üblich ist.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Wie wählst du die richtige App bei Plantarfasziitis?',
      paragraphs: [
        'Geh von deiner Situation aus, nicht von Funktionslisten.',
      ],
      bullets: [
        '**Du läufst und hast Plantarfasziitis** und willst einen strukturierten Wiedereinstieg ins Laufen: [Exakt Health](https://www.exakthealth.com/) passt am besten.',
        '**Dein Arbeitgeber bezahlt Hinge Health**: Prüf, ob du berechtigt bist. Ein Betreuungsteam mit Physiotherapie und Ärztinnen und Ärzten ist ohne Kosten schwer zu schlagen.',
        '**Du hast an mehreren Körperstellen Schmerzen**, nicht nur an den Füßen: [Prehab](https://theprehabguys.com/) gibt dir über 55\u00A0Programme in einem Abo.',
        '**Du willst einen kostenlosen Einstieg**, um Fersenschmerzen festzuhalten und einfache Dehnungen auszuprobieren: [PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136) macht das gut und kostenlos.',
        '**Dein Hauptthema sind Plattfüße** ohne nennenswerte Schmerzen: [Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858) konzentriert sich genau darauf.',
        '**Du willst einen täglichen Plan bei Fersenschmerzen oder Plattfüßen, der sich deinem Morgen anpasst** und deinen Fortschritt testet: Dafür wurde [Walkito](https://walkito.site/) gebaut.',
      ],
    },
  ],
  faq: [
    {
      q: 'Gibt es eine kostenlose App bei Plantarfasziitis?',
      a: 'PlantarCare ist kostenlos und hat keine In-App-Käufe. Die App hält den Morgenschmerz fest, schlägt Dehnungen passend zu deiner Erholungsphase vor und zeigt den Verlauf über die Zeit. Die App „Plantar Fasciitis Exercises“ ist als kostenlos gelistet, zeigt im Store aber In-App-Käufe, und eine Rezension berichtete, dass für die Nutzung Geld verlangt wurde. PlantarCare ist von beiden die verlässlich kostenlose Option.',
    },
    {
      q: 'Welche Übungen sollte eine App bei Plantarfasziitis enthalten?',
      cites: [CITE.guideline],
      a: 'Die klinische Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade die Bewertung A und Krafttraining die Bewertung B. Eine gute App sollte beides enthalten: Dehnen für Faszie und Wade und schrittweise steigendes Wadenkrafttraining wie Fersenheben. Übungen, die schwerer werden und sich an deinen Schmerz anpassen, sind nützlicher als eine starre Liste.',
    },
    {
      q: 'Ist Exakt Health bei Plantarfasziitis besser als Walkito?',
      a: 'Exakt Health deckt mehr Beschwerden ab, darunter über 15\u00A0Laufverletzungen und vollständige Laufpläne. Es gibt die App für iOS und Android, und sie ist in der EU als Medizinprodukt zertifiziert. Walkito konzentriert sich gezielt auf Fersen- und Fußschmerzen, mit täglicher Anpassung an den Schmerz und Fortschrittstests alle 14\u00A0Tage. Exakt ist die stärkere Wahl für Läuferinnen und Läufer, die Reha plus Laufplan brauchen. Walkito ist enger, passt aber jede Einheit an deinen Morgen an.',
    },
    {
      q: 'Kann eine App bei Plantarfasziitis die Physiotherapie ersetzen?',
      a: 'Keine App ersetzt eine medizinische Fachperson, die deinen Fuß untersuchen, andere Ursachen ausschließen und einen Plan direkt anpassen kann. Eine App ist nützlich für angeleitete tägliche Übungen zwischen den Terminen oder als Startpunkt, wenn der Schmerz leicht ist und zum typischen Muster der Plantarfasziitis passt. Wenn der Schmerz von einer Verletzung kommt, mit Schwellung oder Taubheit einhergeht oder schlimmer wird, geh zuerst zu einer medizinischen Fachperson.',
    },
    {
      q: 'Ist Hinge Health kostenlos?',
      a: 'Hinge Health ist für Mitglieder kostenlos, deren Arbeitgeber oder Krankenversicherung es bezahlt. Du kannst es nicht direkt im App Store kaufen. Ob du berechtigt bist, prüfst du unter hinge.health/covered. Wenn du abgedeckt bist, bekommst du ohne Kosten ein Betreuungsteam mit Physiotherapeutinnen und Physiotherapeuten und Ärztinnen und Ärzten.',
    },
    {
      q: 'Warum nennt sich Walkito nicht die beste App bei Plantarfasziitis?',
      a: 'Weil das nicht ehrlich wäre. Walkito ist neu, hat noch keine Bewertungen, deckt weniger Beschwerden ab als Exakt Health und hat keine medizinische Fachperson auf der anderen Seite wie Hinge Health. Was es gut kann: jeden Tag an deinen Schmerz anpassen und deinen Fortschritt alle 14\u00A0Tage testen. Ob es damit die richtige App für dich ist, hängt davon ab, was du brauchst.',
    },
    {
      q: 'Funktionieren diese Apps auch auf Android?',
      a: 'Exakt Health und Hinge Health gibt es für iOS und Android. „Plantar Fasciitis Exercises“ gibt es ebenfalls für beide, zeigt aber in beiden Stores In-App-Käufe. Walkito, Prehab, PlantarCare und Arch gibt es derzeit nur für iOS. Wenn du Android nutzt, ist Exakt Health die Option mit den meisten Funktionen bei Fußschmerzen.',
    },
    {
      q: 'Braucht man eine App für Übungen bei Plantarfasziitis?',
      cites: [CITE.guideline],
      a: 'Nein. Eine App ist nicht nötig. Die Übungen mit soliden Studienbelegen, etwa Faszien-Dehnung und die Stufen des Fersenhebens, kannst du auch nach einem ausgedruckten Blatt oder einem Merkblatt aus der Praxis machen. Was eine App meist dazugibt, sind Erinnerungen, Fortschrittsanzeige und Regeln für das Tempo nach Schmerz, die manchen helfen, länger dranzubleiben, keine andere Übung.',
    },
    {
      q: 'Wie oft sollte man eine App bei Plantarfasziitis nutzen?',
      cites: [CITE.guideline],
      a: 'Die meisten Übungsprogramme bei Plantarfasziitis, auch die am besten bewerteten in der Leitlinie von 2023 zu Fersenschmerzen, sind auf tägliche oder fast tägliche Einheiten über etwa drei Monate ausgelegt, nicht auf gelegentliche Nutzung. Eine App ist am nützlichsten, wenn du sie an den meisten Tagen öffnest, weil die Regelmäßigkeit die Belastungswirkung trägt, nicht eine einzelne Funktion darin.',
    },
  ],
  redFlags: {
    h2: 'Eine App reicht nicht. Geh zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'Taubheit, Kribbeln, Brennen, eine Schwellung oder Wärme dazukommen',
      'die Ferse gerötet ist oder du Fieber hast',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist',
      'beide Füße wehtun und andere Gelenke geschwollen oder steif sind',
      'der Schmerz trotz Übungen von Woche zu Woche schlimmer wird',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Wenn du bis hierher gelesen hast und Walkito passend klingt, so funktioniert es. Du beantwortest ein paar Fragen dazu, wo es wehtut, auf welcher Seite, wie aktiv du bist und was dein Ziel ist. Walkito baut aus diesen Antworten einen Wochenplan. Jeden Morgen passt ein Check den Tag an. Alle 14\u00A0Tage misst ein kurzer Test Wadenausdauer, Gewölbehalten und Einbeinstand.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Die Übungen folgen der klinischen Leitlinie von 2023 zu Fersenschmerzen. Der Plan hat kein festes Enddatum: Wenn du ein Ziel erreichst, geht es in die Erhaltung über, und das nächste Ziel rückt nach. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Probier Walkito im App Store aus.',
  },
  crumb: 'Beste App bei Plantarfasziitis',
  campaign: 'compare-best-app-de',
};
