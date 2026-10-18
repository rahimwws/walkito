import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/flat-feet-test.ts (2026-10-18), written around
 * «Plattfuß Test» and «Plattfuß erkennen». Informal «du», terminology and
 * exercise names as in `lib/guides/de.ts` and the other articles-de pages.
 * Figures, doses, grades, qualifiers and sources are identical to the English
 * page after its fact-check. Same CITE keys and media ids.
 */

export const FLAT_FEET_TEST_DE: Guide = {
  lang: 'de',
  page: 'flatFeetTest',
  mainSource: CITE.menzMunteanu,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plattfuß-Test zu Hause: 4 einfache Checks',
  description:
    'Plattfuß erkennen zu Hause: nasser Fußabdruck, Sitzen gegen Stehen, Zehenstand und Großzehen-Test, einbeiniges Fersenheben, und was jeder Test zeigt.',
  h1: 'Plattfuß-Test zu Hause: 4 einfache Checks und was sie zeigen können und was nicht',
  lede:
    'Ob du Plattfüße hast, kannst du zu Hause in etwa fünf Minuten prüfen: Schau dir einen nassen Fußabdruck an, vergleich dein Gewölbe im Sitzen und im Stehen, stell dich auf die Zehenspitzen oder heb deinen großen Zeh an, um zu sehen, ob das Gewölbe zurückkommt, und probier einbeiniges Fersenheben. Der Fußabdruck ist der ungenaueste der vier Tests: Bei 95\u00A0älteren Erwachsenen, die mit Röntgenbildern verglichen wurden, passte ein Fußabdruck-Wert nur mäßig zur tatsächlichen Gewölbehöhe (Menz und Munteanu, 2005). Am wichtigsten ist, ob das Gewölbe zurückkommt und ob sich eine Seite anders verhält.',
  intro: [
    'Keiner dieser Tests ist eine Diagnose, und ein niedriges Gewölbe allein ist meist kein Problem. Diese Seite zeigt, wie du jeden Test machst, was die Forschung dazu sagt, wie weit du ihm trauen kannst, was eine Ärztin oder ein Arzt stattdessen misst und bei welchen Ergebnissen du deinen Fuß untersuchen lassen solltest. Was Plattfüße sind und wann sie eine Rolle spielen, erfährst du unter [Plattfuß](/de/plattfuss/).',
  ],
  takeaways: [
    'Ein nasser Fußabdruck ist nur ein grober Anhaltspunkt. Bei 95\u00A0Menschen im Alter von 62 bis 94\u00A0Jahren passte der Gewölbeindex aus dem Fußabdruck nur mäßig zur Gewölbehöhe im Röntgenbild, während ein Lineal-Maß für den Gewölbeknochen gut dazu passte (Menz und Munteanu, 2005).',
    'Fettgewebe unter der Sohle kann einen Fußabdruck auffüllen: Bei 24\u00A0Erwachsenen mit Übergewicht oder Adipositas stieg der Gewölbeindex aus dem Fußabdruck mit dem Körperfettanteil (Wearing und Kollegen, 2004).',
    'Wenn das Gewölbe zurückkommt, sobald du sitzt, dich auf die Zehenspitzen stellst oder den großen Zeh anhebst, ist der Plattfuß flexibel. Das ist die häufige Form, die in den Übungsstudien untersucht wurde (Brijwasi und Borkar, 2023).',
    'Probleme, auf einem Fuß hochzukommen, Schmerzen hinter dem Innenknöchel und ein Gewölbe, das immer flacher wird, sind Zeichen einer Tibialis-posterior-Insuffizienz. Von 582\u00A0Frauen über 40 hatten 3,3\u00A0% Beschwerden im frühen Stadium (Stadium I oder II), und bei keiner war sie diagnostiziert (Kohls-Gatzoulis und Kollegen, 2009).',
    'Auch die Messungen von Fachleuten schwanken: Als zwei unerfahrene Untersucher den Navicular Drop maßen, stimmten sie schlecht überein (Picciano und Kollegen, 1993). In einer späteren Studie mit 86\u00A0jungen Erwachsenen war dieselbe Messung gut wiederholbar (Zuil-Escobar und Kollegen, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Wie erkennst du zu Hause, ob du Plattfüße hast?',
      paragraphs: [
        '**Mach vier Tests in dieser Reihenfolge, barfuß auf hartem Boden.** Die ersten beiden zeigen dir, wie tief dein Gewölbe liegt. Die letzten beiden zeigen dir, ob es flexibel ist und ob die Sehne, die es trägt, ihre Arbeit macht. Du brauchst ein Handtuch, etwas Wasser, ein Stück Packpapier oder Karton und eine Wand zum Festhalten.',
        'Teste jedes Mal beide Füße. Ein Unterschied zwischen linkem und rechtem Fuß sagt mehr als jeder Fuß für sich, denn bei den meisten Menschen sind beide Füße ungefähr gleich, und ein einzelner Plattfuß ist eines der Warnzeichen am Ende dieser Seite.',
      ],
      table: {
        caption: 'Die vier Tests für zu Hause im Überblick',
        head: ['Test', 'Worauf du schaust', 'Was er zeigen kann', 'Was er nicht zeigen kann'],
        rows: [
          ['Nasser Fußabdruck', 'Wie viel von der Sohle sich abdrückt', 'Grob ein niedriges Gewölbe', 'Die genaue Gewölbehöhe oder Schmerz'],
          ['Sitzen gegen Stehen', 'Gewölbe mit und ohne Gewicht', 'Wie stark das Gewölbe absinkt', 'Warum es absinkt'],
          ['Zehenstand und großer Zeh', 'Ob das Gewölbe zurückkommt', 'Flexibel oder steif', 'Die Ursache eines steifen Fußes'],
          ['Einbeiniges Fersenheben', 'Hochkommen auf einem Fuß', 'Schwäche auf einer Seite', 'Welche Sehne betroffen ist'],
        ],
      },
      after: [
        'Schreib auf, was du siehst, oder mach von jedem Fuß ein Foto von innen und von hinten. Wenn du dieselben Tests in ein paar Monaten wiederholst, siehst du, ob sich etwas verändert hat. Das ist wichtiger als ein einzelnes Ergebnis.',
      ],
    },
    {
      h2: 'Wie funktioniert der Fußabdruck-Test, und wie genau ist er?',
      keyFact: 'Bei 95\u00A0Menschen im Alter von 62 bis 94\u00A0Jahren passte der Gewölbeindex aus dem Fußabdruck nur mäßig zur Gewölbehöhe im Röntgenbild (r = 0,52), gegenüber r = 0,79 für ein Maß der Höhe des Gewölbeknochens (Menz und Munteanu, 2005).',
      paragraphs: [
        '**So geht es:** Mach die Sohle eines Fußes nass, stell dich mit vollem Gewicht auf Packpapier oder trockenen Karton, steh eine Sekunde normal und geh wieder herunter. Mach dasselbe mit dem anderen Fuß. Schau dir die Mitte des Abdrucks an, also den Teil zwischen Ferse und Fußballen:',
        {
          list: [
            '**Ein deutlicher Bogen an der Innenseite**, wobei der mittlere Streifen höchstens etwa halb so breit ist wie der Vorfuß: ein typisches Gewölbe.',
            '**Ein breiter mittlerer Streifen mit wenig oder gar keinem Bogen**, sodass der Abdruck wie ein Hausschuh aussieht: ein niedriges Gewölbe.',
            '**Nur Ferse und Fußballen drücken sich ab**, verbunden durch einen dünnen Streifen oder gar nicht: ein hohes Gewölbe. Mehr unter [Hohlfuß](/de/hohlfuss-uebungen/).',
          ],
        },
        '**Was er zeigen kann:** grob, wie viel von deiner Sohle den Boden berührt. Forschende machen aus demselben Abdruck eine Zahl, den Gewölbeindex (Arch Index), indem sie das mittlere Drittel des Abdrucks mit dem ganzen Abdruck vergleichen (Cavanagh und Rodgers, 1987).',
        '**Was er nicht zeigen kann:** deine tatsächliche Gewölbehöhe. Bei 95\u00A0Menschen im Alter von 62 bis 94\u00A0Jahren, die mit Röntgenbildern verglichen wurden, passte der Fußabdruck-Index nur mäßig zur Höhe des Gewölbeknochens (Menz und Munteanu, 2005). Eine Studie von 1992 mit 115\u00A0Männern fand, dass Fußabdrücke die Gewölbehöhe nicht vorhersagen konnten (Hawes und Kollegen, 1992), während eine Studie von 2009 mit 91\u00A0jungen Erwachsenen eine schwache bis mäßige Übereinstimmung mit Röntgenbildern fand (Murley und Kollegen, 2009). Bei 198\u00A0Patientinnen und Patienten einer Klinik erkannten drei Fußabdruck-Werte einen Plattfuß im Röntgenbild mit einer Genauigkeit, die die Autoren als mäßig (fair) bezeichneten (Paecharoen und Kollegen, 2023).',
        'Ein Grund ist das Weichgewebe. In einer kleinen Pilotstudie mit 24\u00A0Erwachsenen mit Übergewicht oder Adipositas stieg der Fußabdruck-Index beim Gehen mit dem Körperfettanteil. Ein vollerer Abdruck kann also mehr Polster unter dem Gewölbe bedeuten und kein niedrigeres Gewölbe (Wearing und Kollegen, 2004). Ein Abdruck sagt außerdem nichts über Schmerzen, und genau die entscheiden, ob ein Plattfuß überhaupt Aufmerksamkeit braucht.',
      ],
      cites: [CITE.menzMunteanu, CITE.cavanaghArchIndex, CITE.hawesFootprint, CITE.murleyArch, CITE.paecharoen, CITE.wearing],
    },
    {
      h2: 'Sieht dein Gewölbe im Sitzen anders aus als im Stehen?',
      paragraphs: [
        '**Setz dich auf einen Stuhl, die Füße flach und locker, und schau dir die Innenseite jedes Fußes an.** Achte auf den Abstand unter dem Gewölbe. Dann steh auf, das Gewicht auf beiden Füßen, und schau noch einmal hin, oder lass jemanden auf Höhe des Bodens ein Foto von der Seite machen.',
        'Ein gewisses Absinken ist normal: Jedes Gewölbe senkt sich unter deinem Gewicht ein wenig. In zusammengefassten Daten von 619\u00A0gesunden Erwachsenen stand der durchschnittliche Fuß leicht nach innen gekippt, was die Autoren als normale Stellung bezeichnen (Redmond und Kollegen, 2008). Worauf du achtest, ist eine große Veränderung: ein Gewölbe, das im Sitzen deutlich da ist und im Stehen verschwindet.',
        '**Dann schau von hinten.** Stell dich normal hin und lass jemanden auf Höhe des Bodens auf deine Fersen schauen. Eine Ferse, die nach außen kippt, während der Innenknöchel nach innen vorsteht, gehört zu einem niedrigen Gewölbe. Wenn eine Ferse stärker kippt als die andere, notier das.',
        'Dieser Test zeigt dir, wie stark das Gewölbe absinkt. Genau das misst eine Ärztin oder ein Arzt genauer als Navicular Drop (mehr dazu unten). Er zeigt dir nicht, warum: Ein lockerer Fuß, mit dem du geboren bist, und eine Sehne, die schwächer wird, können im Stehen gleich aussehen. Die nächsten beiden Tests helfen, das zu unterscheiden.',
      ],
      cites: [CITE.redmondFpi],
    },
    {
      h2: 'Wie testest du, ob ein Plattfuß flexibel ist?',
      keyFact: 'Eine tarsale Koalition, eine knöcherne oder bindegewebige Brücke zwischen Fußknochen, die bei jungen Erwachsenen oft mit einem steifen, schmerzhaften Plattfuß einhergeht, wird bei 1 bis 13\u00A0% der Menschen beschrieben (Mehdi und Kollegen, 2024).',
      paragraphs: [
        'Ein flexibler Plattfuß wird unter deinem Gewicht flach, bekommt sein Gewölbe aber zurück, wenn sich die Belastung ändert. Zwei kurze Tests zeigen das:',
        {
          list: [
            '**Zehenstand-Test.** Halt dich an einer Wand fest und komm auf die Fußballen beider Füße hoch. Beobachte die Innenseite jedes Fußes oder die Fersen von hinten. Bei einem flexiblen Fuß erscheint ein Gewölbe, und die Fersen kippen beim Hochkommen leicht nach innen.',
            '**Großzehen-Test (Jack-Test).** Stell dich normal hin. Heb deinen großen Zeh so weit wie möglich an, oder lass ihn von jemandem anheben, während die Ferse unten bleibt. Bei einem flexiblen Fuß hebt sich das Gewölbe, wenn der Zeh nach oben geht. Der Test ist nach Jack benannt, der ihn 1953 beschrieben hat (Jack, 1953).',
          ],
        },
        '**Wenn das Gewölbe zurückkommt, ist der Plattfuß flexibel.** Das ist die häufige Form und die, die in den Übungsstudien untersucht wurde: Bei 52\u00A0Menschen mit flexiblen Plattfüßen verbesserten sechs Wochen Kurzer-Fuß-Übungen, Übungen für Sprunggelenk und Hüfte und Dehnungen zwei Maße der Gewölbeform stärker als in einer Kontrollgruppe (Brijwasi und Borkar, 2023).',
        '**Wenn das Gewölbe flach bleibt und sich der Fuß steif anfühlt**, ist der Plattfuß vielleicht rigide. Eine Ursache ist die tarsale Koalition, eine Brücke aus Knochen, Knorpel oder Bindegewebe zwischen zwei Fußknochen, die oft bei jungen Erwachsenen mit einem steifen, schmerzhaften Plattfuß gefunden wird (Mehdi und Kollegen, 2024). Bei einem rigiden Plattfuß muss eine Ärztin oder ein Arzt die Ursache finden, bevor du mit einem Übungsprogramm anfängst.',
        'Sei ehrlich, was diese Tests sind. Wir haben keine Studie gefunden, die gemessen hat, wie zuverlässig der Zehenstand-Test oder der Jack-Test bei Erwachsenen ist, wenn man sie zu Hause macht. Sie sind einfach, und das Ergebnis ist meist klar, aber nimm ein steifes Ergebnis als Grund, es ärztlich abklären zu lassen, nicht als Diagnose.',
      ],
      cites: [CITE.jack1953, CITE.brijwasi, CITE.mehdiCoalition],
    },
    {
      h2: 'Was zeigt einbeiniges Fersenheben bei Plattfüßen?',
      keyFact: 'In einer Befragung von 582\u00A0Frauen über 40 in England hatten 3,3\u00A0% eine Tibialis-posterior-Insuffizienz im frühen Stadium, und bei keiner war sie vorher diagnostiziert worden (Kohls-Gatzoulis und Kollegen, 2009).',
      paragraphs: [
        'Der Tibialis posterior ist der Muskel, dessen Sehne hinter dem Innenknöchel verläuft und das Gewölbe trägt. Wenn die Sehne schwächer wird, kann das Gewölbe auf dieser Seite langsam absinken. Das ist die Tibialis-posterior-Insuffizienz, ein häufiger Grund, warum das Gewölbe bei Erwachsenen mit der Zeit flacher wird. Typisch sind Schmerzen an der Innenseite des Sprunggelenks, ein Fuß, der flacher wird, und eine Ferse, die nach außen kippt (Deu und Kollegen, 2022).',
        '**So prüfst du es:** Stell dich neben einer Wand auf einen Fuß, die Fingerspitzen nur zum Gleichgewicht an der Wand. Komm so hoch wie möglich auf den Fußballen und senk dich wieder ab. Mach ein paar Wiederholungen, dann wechsle den Fuß. Achte auf drei Dinge:',
        {
          list: [
            'du kommst auf dem einen Fuß so leicht hoch wie auf dem anderen',
            'die Ferse dreht sich oben nach innen, auf beiden Seiten gleich',
            'es gibt keinen Schmerz hinter oder unter dem Innenknöchel',
          ],
        },
        'Wenn du auf einer Seite kaum hochkommst, die Ferse sich nicht nach innen dreht oder der Innenknöchel schmerzt, deutet das auf die Sehne hin. Ärztinnen und Ärzte nutzen dieselbe Bewegung als Suchtest, und das ganze Bild findest du unter [Tibialis-posterior-Insuffizienz](/de/tibialis-posterior-insuffizienz/).',
        'Bei diesem Test geht es um die Form und das Gefühl einer einzelnen Wiederholung im Seitenvergleich, nicht darum, wie viele du schaffst. Wenn du eine Zahl für die Ausdauer deiner Wade willst, mit dem Tempo aus der Forschung und den Werten, die gesunde Erwachsene erreichen, nimm den [Fersenheben-Test](/de/fersenheben-test/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'Was misst eine Ärztin oder ein Arzt bei Plattfüßen?',
      keyFact: 'Bei 619\u00A0gesunden Erwachsenen, die mit dem Foot Posture Index bewertet wurden, lag der Durchschnitt bei +4 auf einer Skala von -12 bis +12, was die Autoren als leicht proniert und normal bezeichnen (Redmond und Kollegen, 2008).',
      paragraphs: [
        'Eine Ärztin oder ein Arzt schaut auf dieselben Dinge wie du, bewertet sie aber nach einem festen Schema. Die zwei häufigsten Messungen:',
        {
          list: [
            '**Foot Posture Index (FPI).** Sechs Prüfungen am stehenden Fuß, jede mit -2 bis +2 bewertet, darunter der Fersenwinkel, das Vorstehen des Innenknöchels und die Form des Gewölbes. Die Summe reicht von -12 (hohes Gewölbe) bis +12 (flach). In zusammengefassten Daten von 619\u00A0gesunden Erwachsenen lag der Durchschnitt bei +4, und die Autoren sehen Werte unter -3 oder über +10 als klar außerhalb des Normalbereichs (Redmond und Kollegen, 2008).',
            '**Navicular Drop.** Die Ärztin oder der Arzt markiert den Knochen an der Innenseite des Gewölbes, das Kahnbein, misst seine Höhe im Sitzen bei festgelegter Fußstellung, dann im Stehen, und notiert, wie weit es absinkt. Gesunde Erwachsene liegen in Studien im Durchschnitt bei etwa 3,6 bis 8,1\u00A0Millimetern, und ein Grenzwert für „zu viel“ ist nicht bestätigt (Nielsen und Kollegen, 2009).',
          ],
        },
        '**Diese Messungen sind besser als ein Fußabdruck, aber nicht perfekt.** Bei älteren Erwachsenen passte ein Lineal-Maß für die Höhe des Gewölbeknochens gut zu den Röntgenbildern (r = 0,79), der FPI weniger gut (r = 0,36 bis 0,59), weil er den ganzen Fuß bewertet und nicht nur das Gewölbe (Menz und Munteanu, 2005). Die FPI-Summe zeigte insgesamt eine mäßige Zuverlässigkeit, die Höhe des Kahnbeins war bei Erwachsenen die zuverlässigste Einzelmessung, und keine der getesteten Messungen war bei kleinen Kindern zuverlässig genug (Evans und Kollegen, 2003).',
        'Übung macht einen Unterschied. Als zwei unerfahrene Untersucher bei 15\u00A0Menschen den Navicular Drop maßen, stimmten ihre Ergebnisse schlecht überein (Picciano und Kollegen, 1993). Bei 86\u00A0jungen Erwachsenen in einer späteren Studie waren Navicular Drop und Fußabdruck-Werte gut wiederholbar (Zuil-Escobar und Kollegen, 2018). Wenn dein Gewölbe über längere Zeit beobachtet wird, hilft es, wenn immer dieselbe Person misst.',
        'Wenn eine Ärztin oder ein Arzt einen rigiden Fuß, eine Koalition oder einen Sehnenschaden vermutet, kann sie oder er ein Röntgenbild im Stehen, eine CT oder eine MRT veranlassen. Das kann kein Test zu Hause ersetzen (Mehdi und Kollegen, 2024).',
      ],
      sourceNote:
        'Menz und Munteanu 2005: Pearson-r gegenüber der röntgenologischen Kahnbeinhöhe, dem Kalkaneus-Neigungswinkel und dem Winkel zwischen Kalkaneus und erstem Mittelfußknochen; Gewölbeindex r = 0,52 bis 0,71, FPI r = 0,36 bis 0,59. Picciano 1993: Navicular Drop, ICC zwischen Untersuchern 0,57, innerhalb eines Untersuchers 0,61 und 0,79. Zuil-Escobar 2018: ICC über 0,88.',
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.menzMunteanu, CITE.evansFpiReliability, CITE.picciano, CITE.zuilEscobar, CITE.mehdiCoalition],
    },
    {
      h2: 'Was machst du mit deinem Ergebnis?',
      paragraphs: [
        'Nimm die vier Tests zusammen:',
        {
          list: [
            '**Niedriges Gewölbe, das im Zehenstand zurückkommt, keine Schmerzen, beide Füße gleich:** ein flexibler Plattfuß, eine normale Variante. Du musst nichts tun. Übungen sind freiwillig.',
            '**Niedriges Gewölbe, das zurückkommt, mit müden oder schmerzenden Gewölben nach langen Tagen:** Übungen für Fuß und Sprunggelenk sind ein sinnvoller Anfang. Das ganze Programm findest du unter [Plattfuß-Übungen](/de/plattfuss-uebungen/).',
            '**Ein Gewölbe, das flach bleibt, ein Fuß flacher als der andere oder Schmerzen am Innenknöchel:** Lass das zuerst ärztlich abklären, bevor du mit Übungen anfängst. Die Liste unten nennt die Einzelheiten.',
          ],
        },
        '**Was Übungen können und was nicht.** Bei 52\u00A0Menschen mit flexiblen Plattfüßen verbesserten sechs Wochen Kurzer-Fuß-Übungen, Übungen für Sprunggelenk und Hüfte und Dehnungen die Gewölbeform stärker als Auf-und-ab-Bewegungen im Sprunggelenk allein (Brijwasi und Borkar, 2023). Eine Übersichtsarbeit von 2024 zum Kurzer-Fuß-Training fand keine klare Veränderung der Fußhaltung insgesamt und eine Veränderung bei einem Gewölbemaß nur in Programmen, die länger als sechs Wochen dauerten (Cheng und Kollegen, 2024). Beide haben die Form gemessen, nicht den Schmerz.',
        'Die Übungen unten sind ein Einstieg aus den [Plattfuß-Übungen](/de/plattfuss-uebungen/), mit denselben Dosierungen.',
      ],
      exercises: [
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat. Allein hat das Kurzer-Fuß-Training schwächere Ergebnisse.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Das Gewölbe hebt sich',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt, und halte. Die Außenkante des Fußes bleibt am Boden, und das Gewölbe hebt sich so weit, dass darunter ein kleiner Hohlraum entsteht. Krall die Zehen nicht ein. Das Einkrallen ist der häufigste Fehler bei dieser Übung.',
          stop: 'Ein Krampf im Gewölbe, der nicht nachlässt, oder Schmerzen am Innenknöchel',
          image: 'Übung: kurzer Fuß im Sitzen',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß im Sitzen: Zieh den Fußballen zur Ferse, sodass sich das Gewölbe hebt',
          alt: 'Ein Bein im Sitzen, der Fuß flach am Boden, die Gewölbemuskeln hervorgehoben, während sich das Gewölbe hebt',
        },
        {
          name: 'Großzehenheben',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Jede Einheit, solange es dein Level ist',
          feel: 'Der große Zeh bewegt sich allein',
          how: 'Setz dich hin, die Füße stehen flach. Heb nur den großen Zeh an und halte. Die anderen vier Zehen bleiben flach am Boden. So lernt der große Zeh, sich allein zu bewegen, und das ist der erste Schalter für das Gewölbe.',
          stop: 'Schmerzen am Grundgelenk des großen Zehs',
          image: 'Übung: Großzehenheben',
          media: 'big_toe_lift',
          caption: 'Großzehenheben: Heb nur den großen Zeh, die anderen vier bleiben flach',
          alt: 'Ein Fuß auf dem Boden hebt nur den großen Zeh, das Gewölbe ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B. Diese Stufe wurde nicht einzeln getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last, und die Wade wird langsam aktiviert.',
          stop: 'Schmerzen hinter dem Innenknöchel oder eine Seite, die nicht mithalten kann',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Einwärtsdrehen mit Band',
          evidence: { level: 'early', why: 'Eine Ergänzung von Walkito. Sie war nicht Teil des getesteten Programms in den Studien auf dieser Seite.' },
          dose: '3\u00A0Sätze à 12, jeder Fuß',
          often: 'Krafttage',
          feel: 'Arbeit an der Innenseite von Fuß und Sprunggelenk',
          how: 'Setz dich hin, ein Widerstandsband liegt um den Fuß, und dreh den Fuß gegen das Band nach innen. Beweg den Fuß, nicht das Bein. Das Knie bleibt ruhig. Walkito nimmt diese Übung erst nach sechs Einheiten kurzer Fuß im Stehen dazu, damit zuerst die eigenen Muskeln des Gewölbes drankommen.',
          stop: 'Schmerzen hinter dem Innenknöchel, die nach dem Satz bleiben',
          image: 'Übung: Einwärtsdrehen mit Band',
          media: 'band_inversion',
          caption: 'Einwärtsdrehen mit Band: Dreh den Fuß gegen das Band nach innen, das Knie bleibt ruhig',
          alt: 'Ein Bein mit einem Widerstandsband um den Fuß dreht den Fuß nach innen, der Unterschenkel ist hervorgehoben',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Wie erkenne ich, ob ich Plattfüße habe?',
      cites: [CITE.menzMunteanu, CITE.brijwasi],
      a: 'Schau dir einen nassen Fußabdruck an und vergleich dann dein Gewölbe im Sitzen und im Stehen. Ein Abdruck ohne Bogen an der Innenseite und ein Gewölbe, das im Stehen verschwindet, sprechen für ein niedriges Gewölbe. Dann stell dich auf die Zehenspitzen: Wenn das Gewölbe zurückkommt, ist der Plattfuß flexibel, die häufige Form. Ein Fußabdruck allein passt nur mäßig zur tatsächlichen Gewölbehöhe.',
    },
    {
      q: 'Wie genau ist der Fußabdruck-Test?',
      cites: [CITE.menzMunteanu, CITE.hawesFootprint, CITE.wearing],
      a: 'Nur grob. Bei 95\u00A0älteren Erwachsenen, die mit Röntgenbildern verglichen wurden, passte der Fußabdruck-Wert mäßig zur Gewölbehöhe, und eine Studie von 1992 mit 115\u00A0Männern fand, dass Fußabdrücke die Gewölbehöhe nicht vorhersagen konnten. Auch Fettgewebe unter der Sohle kann den Abdruck auffüllen. Nimm ihn als ersten Eindruck, nicht als Diagnose.',
    },
    {
      q: 'Was ist der Test auf einen flexiblen Plattfuß?',
      cites: [CITE.jack1953],
      a: 'Er prüft, ob das Gewölbe zurückkommt. Stell dich auf die Zehenspitzen oder heb deinen großen Zeh an, während die Ferse unten bleibt (der Jack-Test, 1953 beschrieben). Wenn ein Gewölbe erscheint, ist der Plattfuß flexibel. Bleibt er flach und steif, sollte eine Ärztin oder ein Arzt nach der Ursache suchen. Wir haben keine Studie dazu gefunden, wie zuverlässig einer der beiden Tests zu Hause ist.',
    },
    {
      q: 'Woran erkenne ich, ob meine Plattfüße rigide sind?',
      cites: [CITE.mehdiCoalition],
      a: 'Ein rigider Plattfuß hat kein Gewölbe, wenn du sitzt, dich auf die Zehenspitzen stellst oder den großen Zeh anhebst, und er fühlt sich oft steif an. Eine Ursache ist die tarsale Koalition, eine Brücke zwischen Fußknochen, die bei 1 bis 13\u00A0% der Menschen beschrieben wird. Ein rigider Plattfuß, der schmerzt, gehört zur Ärztin oder zum Arzt und braucht meist eine Bildgebung.',
    },
    {
      q: 'Kann man nur auf einer Seite einen Plattfuß haben?',
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence],
      a: 'Ja, und es lohnt sich, das prüfen zu lassen. Ein Gewölbe, das auf einer Seite immer flacher wird, vor allem mit Schmerzen hinter dem Innenknöchel oder Problemen, auf diesem Fuß hochzukommen, ist ein typisches Zeichen einer Tibialis-posterior-Insuffizienz. Von 582\u00A0Frauen über 40 hatten 3,3\u00A0% frühe Zeichen davon, und bei keiner war sie diagnostiziert. Lass es ärztlich abklären.',
    },
    {
      q: 'Was ist ein normaler Navicular Drop?',
      cites: [CITE.nielsenNavicular, CITE.picciano],
      a: 'In Studien liegt der Navicular Drop bei gesunden Erwachsenen im Durchschnitt bei etwa 3,6 bis 8,1\u00A0Millimetern. Das ist die Strecke, um die der Gewölbeknochen absinkt, wenn du aufstehst. Grenzwerte von 10, 13 oder 15\u00A0Millimetern für „zu viel“ wurden vorgeschlagen, aber keiner ist bestätigt, und die Ergebnisse schwanken zwischen Untersuchern, vor allem unerfahrenen. An dir selbst lässt er sich kaum genau messen.',
    },
    {
      q: 'Was ist der Foot Posture Index?',
      cites: [CITE.redmondFpi, CITE.evansFpiReliability],
      a: 'Das ist eine Prüfung aus sechs Teilen, die eine Ärztin oder ein Arzt im Stehen macht. Ferse, Sprunggelenk und Gewölbe werden jeweils mit -2 bis +2 bewertet, für eine Summe von -12 (hohes Gewölbe) bis +12 (flach). Bei 619\u00A0gesunden Erwachsenen lag der Durchschnitt bei +4, was normal ist. Er zeigte insgesamt eine mäßige Zuverlässigkeit, und keine getestete Messung der Fußhaltung war bei kleinen Kindern zuverlässig genug.',
    },
    {
      q: 'Müssen Plattfüße behandelt werden, wenn sie nicht wehtun?',
      cites: [CITE.menz],
      a: 'Meist nicht. Ein flexibler Plattfuß, der keine Schmerzen macht und dich in nichts einschränkt, ist eine normale Variante. Die Framingham Foot Study mit etwa 1900\u00A0Erwachsenen fand keinen Zusammenhang zwischen Plattfußhaltung und Kreuzschmerzen. Schmerzen, Steifheit oder eine Veränderung auf einer Seite sind die Gründe, es abklären zu lassen.',
    },
    {
      q: 'Kann ich mein Kind genauso auf Plattfüße testen?',
      cites: [CITE.harrisPediatricFlatfoot, CITE.evansFpiReliability],
      a: 'Der Zehenstand-Test und der Großzehen-Test funktionieren auch bei Kindern, aber die meisten kleinen Kinder haben ein niedriges Gewölbe, das sich mit dem Alter bildet, und in einer Studie waren Messungen der Fußhaltung bei kleinen Kindern nicht zuverlässig genug. Ein steifer Fuß, Schmerzen oder Hinken sind Gründe, zur Ärztin oder zum Arzt zu gehen. Mehr unter [Plattfuß bei Kindern](/de/plattfuss-bei-kindern/).',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'das Gewölbe flach bleibt, wenn du sitzt, dich auf die Zehenspitzen stellst oder den großen Zeh anhebst, und sich der Fuß steif anfühlt',
      'ein Fuß über Monate flacher geworden ist als der andere oder dir das plötzlich auffällt',
      'du Schmerzen oder eine Schwellung hinter oder unter dem Innenknöchel hast',
      'du nicht auf einem Fuß hochkommst oder das Hochkommen auf dieser Seite wehtut',
      'ein Plattfuß nach einem Sturz, einem Umknicken oder einer Verletzung begonnen hat',
      'du Diabetes hast und der Fuß warm, gerötet oder geschwollen ist oder sich seine Form verändert',
      'du Taubheit, Brennen oder Kribbeln im Fuß spürst',
      'der Plattfuß eines Kindes steif ist, wehtut oder mit Hinken einhergeht',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App bei Fersen- und Fußschmerzen, für iPhone und Android. Sie baut aus deinen Antworten einen Plan, auch danach, wo es wehtut und auf welcher Seite, und wiederholt alle 14\u00A0Tage einen einfachen Test: Fersenheben, Halten des Gewölbes, Einbeinstand und links gegen rechts.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du, wie sich deine Füße anfühlen, und der Plan passt sich daran an. Walkito stellt keine Diagnose. Lass einen steifen, einseitigen oder schmerzhaften Plattfuß deshalb zuerst ärztlich abklären.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['hubFlatFeet', 'flatFeet', 'pttd'],
  crumb: 'Plattfuß-Test',
  campaign: 'guide-flat-feet-test-de',
};
