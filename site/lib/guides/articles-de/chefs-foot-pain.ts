import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/chefs-foot-pain.ts (2026-10-18), written around
 * «Fußschmerzen Küche», «Fußschmerzen Koch» and «Schuhe für Köche». Informal
 * «du», terminology and exercise names as in `lib/guides/de.ts` and the other
 * articles-de pages. Figures, doses, grades, qualifiers and sources are
 * identical to the English page after its fact-check. Same CITE keys and media
 * ids. All internal links have German pages.
 */

export const CHEFS_DE: Guide = {
  lang: 'de',
  page: 'chefs',
  mainSource: CITE.bellSlipFootwear,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fußschmerzen in der Küche: Schuhe, Matten und Übungen',
  description:
    'Warum Füße auf harten, nassen Küchenböden wehtun: was Studien zu rutschfesten Schuhen zeigen, Clogs oder Sneaker, Matten und kurze Übungen für die Schicht.',
  h1: 'Fußschmerzen als Koch oder Köchin: was bei langen Schichten in der Küche hilft',
  lede:
    'Fußschmerzen in der Küche kommen oft von langen Stunden im Stehen und Gehen auf harten Küchenböden. Bei Fersenschmerzen haben Dehnungen für Wade und Plantarfaszie die besten Belege, die die Leitlinie von 2023 zu Fersenschmerzen mit Empfehlungsgrad **A** bewertet, und Krafttraining für die Wade mit **B** (Koc und Kollegen, 2023). Rutschfeste Schuhe dienen der Sicherheit, nicht dem Schmerz: In einer randomisierten Studie in 226\u00A0Schulbezirken senkten kostenlose rutschfeste Schuhe für Beschäftigte der Schulverpflegung die gemeldeten Verletzungen durch Ausrutschen von 3,54 auf 1,18 pro 10.000\u00A0Beschäftigtenmonate (Bell und Kollegen, 2019). Keine Studie hat getestet, ob Clogs oder irgendein Küchenschuh die Fußschmerzen selbst verringern.',
  intro: [
    'Diese Seite handelt von der Küchenseite des Problems: harte, nasse und fettige Böden, Hektik im Service und Schuhe, die nach Rutschfestigkeit ausgesucht werden. Für Fußschmerzen vom Stehen in jedem Beruf lies [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/). Für Schichten im Krankenhaus gibt es [Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/). Wenn deine Ferse bei den ersten Schritten nach einer Pause am stärksten wehtut, deutet dieses Muster auf eine [Plantarfasziitis](/de/plantarfasziitis/) hin.',
  ],
  toc: true,
  takeaways: [
    'In einer Umfrage unter 128\u00A0Küchenbeschäftigten in Kairo berichteten 46,1\u00A0% über Fußschmerzen in den letzten 12\u00A0Monaten, nur unterer Rücken und Knie lagen davor (Abdelsalam und Kollegen, 2023).',
    'Bei 475\u00A0Beschäftigten aus 36\u00A0US-Schnellrestaurants hing das Tragen rutschfester Schuhe mit einer um 54\u00A0% niedrigeren Rate an Ausrutschern zusammen (Verma und Kollegen, 2011).',
    'In einer randomisierten Studie in der Schulverpflegung sanken die gemeldeten Verletzungen durch Ausrutschen von 3,54 auf 1,18 pro 10.000\u00A0Beschäftigtenmonate, wo die Beschäftigten kostenlose rutschfeste Schuhe bekamen, während sie in der Vergleichsgruppe von 2,01 auf 2,30 stiegen (Bell und Kollegen, 2019).',
    'Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf eine Plantarfasziitis um das 3,6-Fache, in einer Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen, und eine verkürzte Wade um das 23,3-Fache (Riddle und Kollegen, 2003).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Wade und Plantarfaszie mit Empfehlungsgrad **A** und Krafttraining mit **B**. Einlagen allein bekommen **Empfehlungsgrad B gegen die Anwendung** (Koc und Kollegen, 2023).',
  ],
  sections: [
    {
      h2: 'Warum tun die Füße nach einer Schicht in der Küche so weh?',
      keyFact: 'Bei 128\u00A0Küchenbeschäftigten berichteten 46,1\u00A0% über Fußschmerzen in den letzten 12\u00A0Monaten, hinter dem unteren Rücken (64,8\u00A0%) und dem Knie (46,9\u00A0%) (Abdelsalam und Kollegen, 2023).',
      paragraphs: [
        '**Küchenarbeit häuft genau das an, womit Füße am schlechtesten zurechtkommen: stundenlanges Stehen, kurze schnelle Wege, harte Böden und wenig Pausen.** In einer Umfrage unter 128\u00A0Küchenbeschäftigten in zwei großen Studentenwohnheimen in Kairo berichteten 90,6\u00A0% über Beschwerden des Bewegungsapparats in den letzten 12\u00A0Monaten. Der Fuß war mit 46,1\u00A0% die am dritthäufigsten betroffene Region, knapp hinter dem Knie mit 46,9\u00A0%.',
        'Die Zahlen schwanken stark zwischen den Studien. Bei 307\u00A0Köchen und Köchinnen in Restaurants in Pakistan, die meisten mit 9 bis 12\u00A0Stunden am Tag, berichteten 26 über Schmerzen in Sprunggelenk oder Fuß, deutlich weniger als die 101, die Schmerzen im unteren Rücken und im Knie angaben (Iqbal und Kollegen, 2023). Die Umfragen haben unterschiedliche Gruppen mit unterschiedlichen Fragen befragt. Lies sie also als grobes Bild, nicht als genaue Rate.',
        'Ein Zusammenhang zeigt sich deutlich. Bei 415\u00A0Küchenbeschäftigten in Hotels und Restaurants in Äthiopien ging langes Stehen mit einer 3,81-fachen Chance auf arbeitsbedingte Beschwerden des Bewegungsapparats einher (Abebaw und Kollegen, 2024). Diese Studie zählte Schmerzen im ganzen Körper, nicht nur in den Füßen.',
      ],
      sourceNote:
        'Abdelsalam 2023 und Abebaw 2024 nutzten den Nordic Musculoskeletal Questionnaire für die 12-Monats-Prävalenz. Abebaw 2024: adjustierte Odds Ratio 3,81 (95-%-KI 1,58 bis 9,17) für langes Stehen. Iqbal 2023 nutzte eine Gelegenheitsstichprobe von 307\u00A0Köchen und Köchinnen (285 Männer).',
      cites: [CITE.abdelsalamKitchen, CITE.iqbalChefs, CITE.abebawKitchen],
    },
    {
      h2: 'Sind Fußschmerzen in der Küche eine Plantarfasziitis?',
      keyFact: 'Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf eine Plantarfasziitis um das 3,6-Fache und eine eingeschränkte Beweglichkeit im Sprunggelenk um das 23,3-Fache (Riddle und Kollegen, 2003).',
      paragraphs: [
        'Oft ist es allgemeine Müdigkeit und ein dumpfer Schmerz, der nach einer Nacht Ruhe nachlässt. Aber Küchenarbeit bringt die zwei stärksten Risikofaktoren mit, die eine Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne gefunden hat: Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache, und eine [verkürzte Wade](/de/verspannte-waden/), die die Beugung im Sprunggelenk einschränkt, um das 23,3-Fache.',
        'Die Plantarfasziitis hat ein typisches Muster: stechender Schmerz unter der Ferse bei den ersten Schritten am Morgen oder nach dem Sitzen, der beim Gehen nachlässt und nach einem langen Tag zurückkommt. Dieses Muster beschreibt [Fersenschmerzen morgens](/de/fersenschmerzen-morgens/), und den vollständigen Übungsratgeber findest du unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
        'Andere Muster deuten auf etwas anderes hin:',
        {
          list: [
            'Brennen unter dem Fußballen mitten im Service: siehe [Vorfußschmerzen](/de/metatarsalgie-vorfussschmerzen/)',
            'ein tiefer, prellungsartiger Schmerz in der Mitte der Ferse, der schlimmer wird, je länger du auf einem harten Boden stehst: siehe [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/)',
            'ein Fußgewölbe, das am Ende der Schicht schmerzt oder sich flach anfühlt: siehe [Schmerzen im Fußgewölbe](/de/schmerzen-im-fussgewoelbe/)',
          ],
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Clogs oder rutschfeste Schuhe: was sagen die Belege?',
      keyFact: 'Kostenlose rutschfeste Schuhe senkten die gemeldeten Verletzungen durch Ausrutschen von 3,54 auf 1,18 pro 10.000\u00A0Beschäftigtenmonate, in einer randomisierten Studie in 226\u00A0Schulbezirken (Bell und Kollegen, 2019).',
      paragraphs: [
        '**Die stärksten Belege zu Küchenschuhen betreffen das Ausrutschen, nicht schmerzende Füße.** Eine US-Studie begleitete 475\u00A0Beschäftigte aus 36\u00A0Schnellrestaurants über drei Monate. Wer Schuhe mit einer Kennzeichnung für Rutschfestigkeit auf der Sohle trug, berichtete über eine um 54\u00A0% niedrigere Rate an Ausrutschern als Beschäftigte ohne solche Schuhe, nach Berücksichtigung von Alter, Geschlecht, Körpergewicht und weiteren Faktoren (Verma und Kollegen, 2011).',
        'Eine randomisierte Studie testete das danach als Programm. Schulbezirke wurden per Zufall ausgewählt, um ihren Beschäftigten in der Schulverpflegung kostenlos rutschfeste Schuhe zu geben. Die gemeldeten Verletzungen durch Ausrutschen sanken in diesen Bezirken von 3,54 auf 1,18 pro 10.000\u00A0Beschäftigtenmonate und stiegen in den anderen von 2,01 auf 2,30 (Bell und Kollegen, 2019).',
        'Schuhe nutzen sich ab. Bei denselben Restaurantbeschäftigten hatten diejenigen, die schon rutschfeste Schuhe trugen und auf ein neues Paar wechselten, danach eine um 55\u00A0% niedrigere Rate an Ausrutschern, und Schuhe, die weniger als sechs Monate getragen wurden, schnitten etwas besser ab als ältere (Verma und Kollegen, 2014). Wann genau man sie ersetzen sollte, konnte die Studie nicht sagen.',
        '**Keine Studie, die wir gefunden haben, vergleicht Clogs mit Sneakern oder irgendeinen Küchenschuh mit einem anderen, was Fußschmerzen angeht.** Bei Fersenschmerzen im Allgemeinen bewertet die Leitlinie von 2023 [Einlagen](/de/einlagen-oder-uebungen/) allein mit **Empfehlungsgrad B gegen die Anwendung**: Die Belege sprechen dagegen, sich nur auf sie zu verlassen. Eine sinnvolle Reihenfolge: Such dir einen Schuh mit rutschfester Sohle, der zu deinem Fuß passt, so wie er jetzt ist, und nicht auf die Zehen drückt, ersetze ihn, wenn das Profil abgelaufen ist, und mach gegen den Schmerz selbst die Dehnungen und das Krafttraining unten.',
      ],
      table: {
        caption: 'Wofür die einzelnen Möglichkeiten gut sind',
        head: ['Möglichkeit', 'Hilft bei', 'Belege'],
        rows: [
          ['Rutschfeste Schuhe', 'Ausrutschen und Verletzungen durch Ausrutschen', 'Kohortenstudie und randomisierte Studie'],
          ['Clogs oder Sneaker', 'Für Schmerzen nicht getestet', 'Keine gefunden'],
          ['Einlagen allein', 'Fersenschmerzen', 'Empfehlungsgrad B gegen die Anwendung'],
          ['Anti-Ermüdungsmatten', 'Beschwerden beim Stehen', 'Einige, nicht in Küchen'],
          ['Kompressionsstrümpfe', 'Beschwerden und Schwellung in den Beinen', 'Kleine Studien, nicht in Küchen'],
          ['Dehnungen für Wade und Plantarfaszie', 'Fersenschmerzen', 'Empfehlungsgrad A'],
        ],
      },
      sourceNote:
        'Verma 2011: Tragen rutschfester Schuhe anhand einer Kennzeichnung auf der Sohle beurteilt; um 54\u00A0% niedrigere angegebene Rate an Ausrutschern (95-%-KI 37\u00A0% bis 64\u00A0%). Bell 2019: zweiarmige clusterrandomisierte Studie, Schulverpflegung vom Kindergarten bis zur 12.\u00A0Klasse; adjustierte Odds Ratio 0,33 (95-%-KI 0,17 bis 0,63). Verma 2014: Rate Ratio 0,45 (95-%-KI 0,23 bis 0,89) nach dem Wechsel auf ein neues Paar.',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear, CITE.vermaShoeAge, CITE.guideline],
    },
    {
      h2: 'Wo in der Küche rutscht man am häufigsten aus?',
      keyFact: 'Restaurantbeschäftigte rutschten beim Gehen auf einem verschmutzten Boden 14,6-mal so oft aus und in Eile 2,9-mal so oft (Verma und Kollegen, 2011).',
      paragraphs: [
        'In der US-Studie in Restaurants passierten die meisten Ausrutscher an der **Spüle und an der Fritteuse**, also an den Stellen, die die Beschäftigten auch als am rutschigsten einstuften, und bei über 70\u00A0% der Ausrutscher war Flüssigkeit oder Fett auf dem Boden (Verma und Kollegen, 2010).',
        'Eine zweite Auswertung derselben Beschäftigten betrachtete den Moment jedes Ausrutschers. Die Rate an Ausrutschern war beim Gehen auf einem verschmutzten Boden 14,6-mal höher, in Eile 2,9-mal höher und bei Ablenkung 1,7-mal höher. Rutschfeste Schuhe schwächten die Wirkung von Eile und verschmutztem Boden ab (Verma und Kollegen, 2011).',
        'Auch ob der Arbeitgeber die Schuhe stellt, spielt eine Rolle. Wo der Arbeitgeber rutschfeste Schuhe stellte, trugen 91\u00A0% der Beschäftigten sie. Wo sie weder gestellt noch empfohlen wurden, waren es 53,5\u00A0% (Verma und Kollegen, 2010). Wenn deine Küche ein Schuhprogramm hat, lohnt es sich, es zu nutzen.',
      ],
      cites: [CITE.vermaSlipExperience, CITE.vermaRushing],
    },
    {
      h2: 'Helfen Anti-Ermüdungsmatten und Kompressionsstrümpfe in der Küche?',
      paragraphs: [
        'Eine Übersichtsarbeit von 2015 zur Arbeit im Stehen zählt Bodenmatten, Kompressionsstrümpfe und stützende Schuhe zu den Maßnahmen mit gewissen Belegen für weniger Beschwerden und weniger Ermüdung (Waters und Dick, 2015). Keine dieser Studien fand in Küchen statt. Eine Matte an einem Platz, an dem du lange stehst, etwa am Pass oder an einem Vorbereitungstisch, ist einen Versuch wert. Nimm eine, die flach liegt und auf einem nassen Boden nicht verrutscht, damit sie nicht selbst zur Stolperfalle wird.',
        'Kompressionsstrümpfe wurden in Küchen nicht getestet. In einer kleinen randomisierten Studie mit 40\u00A0Sicherheitskräften in Schichten von etwa 12\u00A0Stunden im Stehen verhinderten Strümpfe mit 15 bis 20\u00A0mmHg und mit 20 bis 30\u00A0mmHg beide den Anstieg von Beschwerden und Schwellung in den Beinen, der mit normalen Socken auftrat (Garcia und Kollegen, 2023). Die Sicherheitskräfte waren alle Männer und keiner arbeitete in einer Küche. Lies das also als wahrscheinlich passend, nicht als Beweis für die Küche.',
        '**Matten und Strümpfe machen eine Schicht angenehmer. Sie ersetzen nicht die Dehnungen und das Krafttraining**, die die Leitlinie zu Fersenschmerzen am höchsten bewertet.',
      ],
      cites: [CITE.waters, CITE.garcia, CITE.guideline],
    },
    {
      h2: 'Welche Übungen helfen Köchen und Köchinnen bei Fußschmerzen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Wade und Plantarfaszie mit A, ihrem höchsten Empfehlungsgrad, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Die Übungen stammen aus dem [Ratgeber zu Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/), mit denselben Anfangsdosen. Für die Dehnungen brauchst du nur eine Wand oder einen Stuhl. Sie passen also in eine Pause, vor den Service oder in den Moment, in dem du deine Arbeitsschuhe ausziehst. Heb dir das Krafttraining für freie Tage oder die Zeit nach der Schicht auf.',
        'Die Empfehlungsgrade der Leitlinie gelten für Plantarfasziitis und wurden nicht bei Küchenbeschäftigten getestet, aber es sind dieselben Gewebe, die eine Küchenschicht den ganzen Tag belastet. Wenn eine Übung deinen Schmerz auf 6 von 10 oder höher bringt, hör für diesen Tag auf.',
      ],
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Schichttagen',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand oder eine Arbeitsfläche aus Edelstahl. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Mach es auf einer trockenen Stelle des Bodens, nicht an der Spüle.',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Schichttagen',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'An den meisten Tagen, gleich nach dem Aufwachen',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage, 3 pro Woche, nie zwei hintereinander',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, und die Ferse wird kaum belastet. Das passt in eine Pause auf einer umgedrehten Kiste oder einem Stuhl im Personalraum.',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage, sobald das Fersenheben im Sitzen leicht fällt',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, geh gerade über die großen Zehen nach oben und senk dich dann langsam ab. Halt dich an einer Wand oder einem Geländer fest. Mach das zu Hause oder nach der Schicht, nicht auf einem nassen Küchenboden.',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur geht auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Die Übung ist für das Wohlgefühl nach einer Schicht dabei.' },
          dose: '1\u00A0Minute',
          often: 'Nach einer langen Schicht oder an freien Tagen',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam mit festem Druck über einen Massageball. Wenn du das Gesicht verziehst, nimm Druck weg.',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Fußrollen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam und mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Sohle ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Wie passen die Übungen in eine Küchenschicht?',
      paragraphs: [
        'Bei geteilten Diensten oder Doppelschichten bleibt wenig Raum für eine Routine. Knüpf die Übungen deshalb an etwas, das du sowieso tust:',
        {
          list: [
            '**Wenn du 3\u00A0Minuten hast:** Wadendehnung und Soleusdehnung, je 30\u00A0Sekunden pro Seite, vor dem Service oder beim Schuhwechsel. Damit erreichst du die verkürzte Wade, den stärksten Risikofaktor in der Fall-Kontroll-Studie.',
            '**Wenn du 5\u00A0Minuten hast:** Nimm die Plantarfaszien-Dehnung dazu. Dehnen ist der Teil, den die Leitlinie von 2023 mit **A** bewertet.',
            '**Wenn du 10\u00A0Minuten hast:** An einem freien Tag oder nach der Schicht kommen das Fersenheben und eine Minute Fußrollen dazu. Krafttraining bekommt ein **B**.',
          ],
        },
        'Pausen selbst scheinen zu zählen. Bei 1.909\u00A0Küchenbeschäftigten in Südkorea hatten Frauen, die über zu wenige Ruhepausen berichteten, eine 1,68-fache Chance auf Beschwerden des Bewegungsapparats (Park und Kollegen, 2021). Der Zusammenhang wurde für Frauen berichtet, und eine Umfrage wie diese kann Ursache und Wirkung nicht zeigen. Trotzdem lohnt es sich, die paar Minuten im Sitzen zwischen zwei Stoßzeiten zu verteidigen.',
        'Bei Plantarfasziitis im Allgemeinen wird es bei etwa 90\u00A0% der Menschen mit Behandlung ohne Operation besser, auch wenn das Monate dauern kann. Mehr unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/). Die Leitlinie von 2023 schlägt außerdem vor, die Belastung der Füße bei der Arbeit anzupassen, ein Rat mit Empfehlungsgrad **E**, weil er auf Theorie beruht, nicht auf Studien.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.parkRestBreaks, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Warum tun meine Füße nach der Arbeit in der Küche so weh?',
      cites: [CITE.abdelsalamKitchen, CITE.riddle],
      a: 'Küchenschichten verbinden stundenlanges Stehen, kurze schnelle Wege und harte Böden. In einer Umfrage unter 128\u00A0Küchenbeschäftigten berichteten 46,1\u00A0% über Fußschmerzen im letzten Jahr. Stehen über den größten Teil des Arbeitstags erhöhte in einer Fall-Kontroll-Studie außerdem die Chance auf eine Plantarfasziitis um das 3,6-Fache. Tägliche Dehnungen für Wade und Plantarfaszie setzen an den Geweben an, die am stärksten belastet werden.',
    },
    {
      q: 'Sind Clogs gut für Köche und Köchinnen mit Fußschmerzen?',
      cites: [CITE.guideline],
      a: 'Das weiß niemand genau: Keine Studie, die wir gefunden haben, vergleicht Clogs mit Sneakern oder anderen Küchenschuhen, was Fußschmerzen angeht. Für die Sicherheit zählt vor allem eine rutschfeste Sohle. Bei Fersenschmerzen bewertet die Leitlinie von 2023 Einlagen allein mit Empfehlungsgrad B gegen die Anwendung. Kombiniere also den Schuh, der dir am besten passt, mit Dehnungen für Wade und Plantarfaszie, die sie mit A bewertet.',
    },
    {
      q: 'Wirken rutschfeste Schuhe in Restaurants wirklich?',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear],
      a: 'Gegen Ausrutschen ja. Bei 475\u00A0Beschäftigten aus 36\u00A0US-Schnellrestaurants hingen rutschfeste Schuhe mit einer um 54\u00A0% niedrigeren Rate an Ausrutschern zusammen. In einer randomisierten Studie in der Schulverpflegung senkten kostenlose rutschfeste Schuhe die gemeldeten Verletzungen durch Ausrutschen von 3,54 auf 1,18 pro 10.000\u00A0Beschäftigtenmonate. Diese Studien haben Ausrutscher gemessen, nicht Fußschmerzen.',
    },
    {
      q: 'Wie oft sollte man Küchenschuhe ersetzen?',
      cites: [CITE.vermaShoeAge],
      a: 'Es gibt keine getestete Regel. In einer Studie mit 475\u00A0Restaurantbeschäftigten schützten rutschfeste Schuhe, die weniger als sechs Monate getragen wurden, etwas besser vor Ausrutschern als ältere, und wer schon rutschfeste Schuhe trug und auf ein neues Paar wechselte, rutschte 55\u00A0% seltener aus. Prüf das Profil und ersetze die Schuhe, sobald das Muster auf der Sohle glatt abgelaufen ist.',
    },
    {
      q: 'Helfen Anti-Ermüdungsmatten in der Küche?',
      cites: [CITE.waters],
      a: 'Wahrscheinlich, für das Wohlgefühl. Eine Übersichtsarbeit von 2015 zur Arbeit im Stehen zählt Bodenmatten zu den Maßnahmen mit gewissen Belegen für weniger Beschwerden und weniger Ermüdung, aber keine dieser Studien fand in Küchen statt. Leg eine Matte dorthin, wo du lange an einer Stelle stehst, und nimm eine, die flach liegt und auf einem nassen Boden nicht rutscht.',
    },
    {
      q: 'Helfen Kompressionsstrümpfe bei langen Schichten in der Küche?',
      cites: [CITE.garcia],
      a: 'Vielleicht. In einer Studie mit 40\u00A0Sicherheitskräften in Schichten von etwa 12\u00A0Stunden im Stehen verhinderten Strümpfe mit 15 bis 20\u00A0mmHg und mit 20 bis 30\u00A0mmHg beide den Anstieg von Beschwerden und Schwellung in den Beinen, der mit normalen Socken auftrat. Die Studie war klein und fand nicht in Küchen statt, und Strümpfe ersetzen weder Dehnungen noch Krafttraining.',
    },
    {
      q: 'Kann man als Koch oder Köchin eine Plantarfasziitis bekommen?',
      cites: [CITE.riddle],
      a: 'Küchenarbeit bringt bekannte Risikofaktoren mit. In einer Fall-Kontroll-Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne erhöhte Stehen über den größten Teil des Arbeitstags die Chance um das 3,6-Fache und eine verkürzte Wade um das 23,3-Fache. Keine Studie hat Plantarfasziitis speziell bei Köchen und Köchinnen gemessen.',
    },
    {
      q: 'Was kann ich mitten im Service gegen schmerzende Füße tun?',
      cites: [CITE.guideline, CITE.parkRestBreaks],
      a: 'Verlagere dein Gewicht, setz dich in Pausen hin, wenn es geht, und mach auf einer trockenen Stelle des Bodens eine Wadendehnung von 30\u00A0Sekunden an der Wand. Bei Küchenbeschäftigten in Südkorea hatten Frauen mit zu wenigen Ruhepausen eine 1,68-fache Chance auf Beschwerden des Bewegungsapparats. Heb dir das Fersenheben und längere Einheiten für nach der Schicht oder freie Tage auf.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Schmerz nach einem Ausrutschen, einem Sturz, einem Umknicken oder nach etwas Schwerem, das auf deinen Fuß gefallen ist, begann',
      'du den Fuß nicht belasten kannst oder humpelst',
      'der Fuß taub ist, kribbelt oder brennt oder geschwollen, gerötet oder warm ist',
      'du am Fuß eine Verbrennung, einen Schnitt oder eine Blase hast, die nicht besser wird, vor allem bei Diabetes oder vermindertem Gefühl in den Füßen',
      'eine Wade oder ein Bein plötzlich schmerzt und geschwollen ist',
      'der Schmerz dich nachts weckt oder in Ruhe da ist',
      'der Schmerz an einer punktgenauen Stelle sitzt und bei Belastung schlimmer wird, was auf einen Ermüdungsbruch hindeuten kann',
      'der Schmerz nach mehreren Wochen mit besseren Schuhen, mehr Pausen und den Übungen auf dieser Seite nicht nachgelassen hat',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß auf iPhone und Android. Sie kennt deinen Dienstplan nicht. Du entscheidest also selbst, wann die Einheiten stattfinden: vor dem Service, zwischen zwei Schichten oder an freien Tagen.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du, wie sich deine Füße anfühlen, und der Plan passt sich daran an. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Halten des Gewölbes und Gleichgewicht. Walkito stellt keine Diagnose. Wenn der Schmerz stechend ist, schlimmer wird oder dich nachts wach hält, lass es zuerst ärztlich abklären.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['standing', 'nurses', 'heelPain'],
  crumb: 'Fußschmerzen in der Küche',
  campaign: 'guide-chefs-foot-pain-de',
};
