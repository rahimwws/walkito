import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/hairdressers-foot-pain.ts (2026-10-18),
 * written around «Fußschmerzen Friseur», «Friseur Schuhe Fußschmerzen» and
 * «Anti-Ermüdungsmatte Friseur». Informal «du», terminology and exercise names
 * as in `lib/guides/de.ts` and the other articles-de pages. Figures, doses,
 * grades, qualifiers and sources identical to the English page after its
 * fact-check. Same CITE keys and media ids. The foot pain identifier and
 * /program/ have no German path, so those links are removed and the wording kept.
 */

export const HAIRDRESSERS_DE: Guide = {
  lang: 'de',
  page: 'hairdressers',
  mainSource: CITE.kozakHairdressing,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fußschmerzen im Friseurberuf: Schuhe, Matten, Übungen',
  description:
    'Warum Friseurinnen und Friseuren vom Stehen am Platz die Füße wehtun, was Studien zeigen, welche Schuhe, Matten und Hocker helfen, plus kurze Übungen.',
  h1: 'Fußschmerzen im Friseurberuf: was hilft, wenn du den ganzen Tag an einer Stelle stehst',
  lede:
    'Fußschmerzen im Friseurberuf kommen vor allem vom stundenlangen Stillstehen am Stuhl, nicht vom Gehen. Die Möglichkeiten mit etwas Belegen zielen deshalb auf das Stehen an einer Stelle: ein gedämpfter Boden oder Schuh, leichte Kompressionsstrümpfe und eine Minute Wadenübungen zwischen zwei Kundinnen oder Kunden. In einer Studie mit 384\u00A0Friseurinnen und Friseuren und 384\u00A0Menschen in anderen Berufen berichteten 49,5\u00A0% der Friseure über Knie- oder Fußschmerzen, gegenüber 38,3\u00A0% der Vergleichsgruppe (Mishra und Sarkar, 2021).',
  intro: [
    'Die Forschung zum Friseurberuf schaut vor allem auf Schultern, Nacken, Handgelenke und Rücken. Die Füße bekommen viel weniger Aufmerksamkeit, und diese Seite sagt, wo die Daten dünn sind. Sie behandelt, was über Füße und Beine im Friseurberuf bekannt ist, die Belege zum Stehen, die auf die Arbeit im Salon passen, und wie du Übungen in die Lücken zwischen den Terminen einbaust. Für Schmerzen vom Stehen im Allgemeinen lies [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/). Für Schichtarbeit mit viel Gehen lies [Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/).',
  ],
  toc: true,
  takeaways: [
    'Von 384\u00A0Friseurinnen und Friseuren in Indien berichteten 49,5\u00A0% über Knie- oder Fußschmerzen in den letzten 12\u00A0Monaten, gegenüber 38,3\u00A0% von 384\u00A0Menschen in anderen Berufen. Die Studie zählte Knie und Fuß zusammen (Mishra und Sarkar, 2021).',
    'Ein Scoping-Review von 2019 mit 44\u00A0Studien fand nur 5, die Fußschmerzen im Friseurberuf erfassten, mit Werten von 10 bis 44\u00A0%. Die meisten Studien betrachteten Rücken, Nacken, Schultern und Hände, und Stehen war einer der häufigen Risikofaktoren (Kozak und Kollegen, 2019).',
    'In einer randomisierten Crossover-Studie mit 108\u00A0Friseurinnen und Friseuren senkten Kompressionsstrümpfe mit 15 bis 20\u00A0mmHg den Wert für Beinschmerzen und Schwellungsgefühl um 12\u00A0% und das Volumen des Unterschenkels im Schnitt um 19\u00A0ml (Blazek und Kollegen, 2013).',
    'Eine Übersichtsarbeit von 2018 mit 10\u00A0Studien fand mäßige Belege, dass weichere Böden und gedämpfte Einlagen Beschwerden und Ermüdung bei Menschen verringern, die im Stehen arbeiten (Speed und Kollegen, 2018).',
    'Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor für Plantarfasziitis, mit einer 23,3-fachen Chance, und Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache (Riddle und Kollegen, 2003).',
  ],
  sections: [
    {
      h2: 'Wie häufig sind Fußschmerzen im Friseurberuf?',
      keyFact: 'Fünf Studien in einem Scoping-Review von 2019 erfassten Fußschmerzen im Friseurberuf, mit Werten von 10 bis 44\u00A0% (Kozak und Kollegen, 2019).',
      paragraphs: [
        '**Fuß- und Beinschmerzen sind im Friseurberuf häufig, aber viel weniger erforscht als Schulter- oder Rückenschmerzen.** Ein Scoping-Review von 2019 sammelte 44\u00A0Studien zu Muskel- und Skelettbeschwerden im Friseurhandwerk. Nur 5 davon erfassten Fußschmerzen, und die Werte reichten von 10 bis 44\u00A0%. Die Spanne ist so groß, weil die Studien unterschiedliche Fragen, Länder und Zeiträume verwendet haben.',
        'Die größte Studie mit Vergleichsgruppe befragte 384\u00A0Friseurinnen und Friseure und 384\u00A0Menschen in anderen Berufen in zwei indischen Städten. Knie- oder Fußschmerzen waren in beiden Gruppen die häufigste Beschwerde: 49,5\u00A0% bei den Friseuren gegenüber 38,3\u00A0% bei den anderen. Die Studie zählte Knie und Fuß als eine Kategorie und kann deshalb nicht sagen, wie viel davon allein auf die Füße entfiel.',
        'Eine britische Studie mit 147\u00A0Friseurinnen und Friseuren und 67\u00A0Menschen in anderen Berufen fand arbeitsbedingte Bein- oder Fußschmerzen bei den Friseuren deutlich häufiger. Die Chance war 31-mal höher, aber der statistische Bereich war sehr breit, von etwa dem 4- bis zum 267-Fachen. Wie groß der Unterschied wirklich ist, bleibt also unsicher. In einer türkischen Studie von 2023 waren nach dem unteren Rücken die Unterschenkel die schmerzhaftesten Bereiche: 36,9\u00A0% rechts und 32,5\u00A0% links.',
      ],
      sourceNote:
        'Mishra und Sarkar (2021): Querschnittstudie, 384\u00A0Friseurinnen und Friseure und 384\u00A0Kontrollen, 12-Monats-Prävalenz, Knie und Fuß in einer Kategorie. Bradshaw und Kollegen (2011): Fragebogen im Interview, adjustiertes Odds Ratio 31,0 (95-%-KI 3,8 bis 267,4). Ince Parpucu und Kollegen (2023): Cornell Musculoskeletal Discomfort Questionnaire, letzte Woche.',
      cites: [CITE.kozakHairdressing, CITE.mishraHairdressers, CITE.bradshawHairdressers, CITE.inceParpucuHairdressers],
    },
    {
      h2: 'Warum tut Stehen an einer Stelle mehr weh als Gehen?',
      paragraphs: [
        'Ein Tag im Salon ist anders als ein Tag in der Pflege. Du legst keine langen Strecken zurück. Du stehst am Stuhl, verlagerst dich ein wenig, beugst dich vor und stehst wieder. Wenn du stillstehst:',
        {
          list: [
            'Die Wadenmuskeln halten eine Position und pumpen deshalb kein Blut mehr das Bein hinauf.',
            'Blut und Flüssigkeit sammeln sich in Unterschenkeln und Füßen. Deshalb fühlen sich die Schuhe abends enger an.',
            'Das Fersenpolster und die Plantarfaszie, das Band unter dem Gewölbe, tragen eine gleichbleibende Last ohne Pause.',
          ],
        },
        'Laborstudien zeigen, wie schnell sich das aufbaut. Eine Übersichtsarbeit von 2017 mit 25\u00A0Laborstudien fand, dass Beschwerden im unteren Rücken im Schnitt nach etwa 71\u00A0Minuten Stehen klinisch relevant wurden, bei Menschen, die zu Schmerzen beim Stehen neigen, nach 42\u00A0Minuten. Eine einzige Farbe oder ein Schnitt kann länger dauern. Eine Übersichtsarbeit von 2015 zum Stehen bei der Arbeit brachte langes Stehen in vielen Berufen mit Schmerzen im unteren Rücken und in den Beinen, Beschwerden und Ermüdung in Verbindung.',
        'In einer Studie von 2023 mit türkischen Friseurinnen und Friseuren hatten diejenigen, die über Ermüdung in den Unterschenkeln berichteten, auch mehr Schmerzen in Knien und Unterschenkeln und schlechtere Werte für Energie und Beweglichkeit. **Auch die Schwellung lässt sich messen:** Bei 38\u00A0Friseurinnen und Friseuren nahm der Knöchelumfang an einem Tag ohne Kompression von 21,1\u00A0cm am Morgen auf 22,1\u00A0cm am Abend zu.',
      ],
      cites: [CITE.coenen, CITE.waters, CITE.inceParpucuHairdressers, CITE.agleHosiery],
    },
    {
      h2: 'Wirkt sich die Haltung am Stuhl auf deine Füße aus?',
      paragraphs: [
        'Studien zur Haltung im Friseurberuf konzentrieren sich auf Rücken und Arme, nicht auf die Füße. Ein Scoping-Review berichtete, dass Friseurinnen und Friseure sich beim Schneiden und Waschen oft vorbeugen oder verdrehen, und dass die Wirbelsäule beim Schneiden in einer Messstudie 66\u00A0% der Zeit nach vorn gebeugt war. Wer sich lange vorbeugt, verlagert das Gewicht meist zum Vorfuß.',
        'Keine Studie hat gemessen, wie die Haltung im Salon die Last auf den Füßen verändert. Was du steuern kannst, ist einfach: Stell den Stuhl der Kundin oder des Kunden höher oder tiefer, damit du dich nicht vorbeugen musst, verteil dein Gewicht auf beide Füße und wechsel alle paar Minuten deinen Stand. In einer Laborstudie über vier Stunden Stehen berichteten Menschen, die ihr Gewicht häufiger verlagerten, auch über mehr Beschwerden. Häufiges Verlagern kann also ein Zeichen sein, dass sich Beschwerden aufbauen, und ein guter Anlass für eine kurze Pause (Wiggermann und Keyserling, 2013).',
        'Wenn dir mit den Füßen auch der Rücken wehtut, wirkt der Zusammenhang in beide Richtungen. [Plattfuß und Rückenschmerzen](/de/plattfuss-rueckenschmerzen/) zeigt, was die Forschung dazu sagt.',
      ],
      cites: [CITE.kozakHairdressing, CITE.wiggermannMats],
    },
    {
      h2: 'Welche Schuhe sind die besten für Friseurinnen und Friseure?',
      paragraphs: [
        '**Keine Studie hat Schuharten im Friseurberuf verglichen.** Die Schuhtipps im Netz stammen von Schuhmarken oder Praxen, nicht aus Studien in Salons. Was die breitere Forschung zum Stehen stützt, ist Dämpfung: Eine Übersichtsarbeit von 2018 mit 10\u00A0Studien fand mäßige Belege, dass gedämpfte Einlagen und weichere Böden Beschwerden und Ermüdung bei Menschen verringern, die im Stehen arbeiten, und begrenzte Belege, dass Einlagen mehr bringen als Matten.',
        'In der Praxis achte auf:',
        {
          list: [
            'Eine gedämpfte Sohle und etwas Unterstützung fürs Gewölbe, damit Ferse und Gewölbe nicht die volle Last eines harten Bodens tragen.',
            'Eine geschlossene Spitze, die die Zehen nicht einengt. Schmerzen zwischen den Zehen können ein [Morton-Neurom](/de/morton-neurom/) sein.',
            'Einen niedrigen, stabilen Absatz. Hohe Absätze legen mehr Gewicht auf den Vorfuß.',
            'Eine rutschfeste Sohle. Böden im Salon werden nass und glatt.',
          ],
        },
        'Manche wechseln an einem langen Tag zur Hälfte die Schuhe. Getestet hat das keine Studie, aber ein anderer Schuh verteilt die Last anders. Wenn du schon Schmerzen in Ferse oder Gewölbe hast, können Einlagen den Tag angenehmer machen. Sie wirken aber auf den Komfort, nicht auf Wade und Gewölbe selbst. [Einlagen oder Übungen](/de/einlagen-oder-uebungen/) vergleicht beides.',
      ],
      cites: [CITE.speedCushioning],
    },
    {
      h2: 'Helfen Anti-Ermüdungsmatten im Friseursalon?',
      keyFact: 'Eine Übersichtsarbeit von 2018 mit 10\u00A0Studien fand mäßige Belege, dass weichere Böden und gedämpfte Einlagen Beschwerden und Ermüdung bei Arbeit im Stehen verringern (Speed und Kollegen, 2018).',
      paragraphs: [
        'Eine Matte an deinem Platz ist eine der einfachsten Änderungen mit Belegen dahinter. In einer Laborstudie standen Menschen vier Stunden lang auf vier verschiedenen Anti-Ermüdungsmatten und auf einem harten Boden. Drei der vier Matten verringerten die Beschwerden im Vergleich zum harten Boden, aber die Matten unterschieden sich untereinander kaum.',
        'Die Belege sind nicht alle positiv. In einer kleinen Studie von 1994 mit 5\u00A0Personen verringerten Matten die Muskelermüdung nur im unteren Rücken, und nur mit der weicheren von zwei Matten. Die Beinmuskeln zeigten keine Veränderung. **Eine Matte hilft also beim Komfort, ersetzt aber nicht Bewegung und Dehnen.**',
        'Leg die Matte im Salon dorthin, wo du wirklich stehst, also hinter den Stuhl, und halt sie flach, damit du nicht über die Kanten stolperst. Haare und Wasser können eine Matte rutschig machen, also feg sie oft.',
      ],
      cites: [CITE.speedCushioning, CITE.wiggermannMats, CITE.kimMats],
    },
    {
      h2: 'Solltest du einen Hocker oder eine Stehhilfe nutzen?',
      paragraphs: [
        '**Keine Studie hat getestet, ob ein Hocker Fußschmerzen im Friseurberuf verringert.** Sitzen nimmt Last von den Füßen, und in Studien im Büro verringerte der Wechsel zwischen Sitzen und Stehen Beschwerden im unteren Rücken, ohne dass die Arbeitsleistung sank (Karakolis und Callaghan, 2014). Das ist der beste indirekte Beleg dafür, etwas Sitzen einzubauen.',
        'Ein Hocker hat einen Haken. Eine deutsche Haltungsstudie, zusammengefasst im Scoping-Review von 2019, fand, dass Friseurinnen und Friseure auf einem Rollhocker den unteren Rücken stärker beugten und die Hände häufiger über Schulterhöhe hoben. Ein zu niedriger Hocker kann Fußschmerzen gegen Rücken- und Schulterbeschwerden tauschen.',
        'Ein praktischer Weg: Nutz den Hocker für Arbeiten, bei denen du dich nicht strecken musst, etwa Detailarbeit am Hinterkopf oder Strähnen in den unteren Partien, und steh für den Rest. Stell den Hocker so hoch, dass deine Arme unter Schulterhöhe bleiben. Wenn du am Waschbecken arbeitest, setz dich, wenn der Platz es erlaubt.',
      ],
      cites: [CITE.karakolis, CITE.kozakHairdressing],
    },
    {
      h2: 'Welche Übungen kannst du zwischen zwei Kunden machen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Wadendehnung und Plantarfaszien-Dehnung mit A, ihrem höchsten Empfehlungsgrad, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Es sind dieselben Übungen wie bei [Plantarfasziitis](/de/plantarfasziitis/) und Schmerzen vom Stehen im Allgemeinen: Wadendehnungen, Fersenheben und eine Plantarfaszien-Dehnung. Anders ist im Friseurberuf das Timing. **Zwischen den Kundinnen und Kunden hast du kurze Lücken, also nimm eine oder zwei Übungen pro Lücke statt einer ganzen Routine.** Keine Studie hat Übungspausen für die Füße im Friseurberuf getestet. Die Dosierungen hier stammen deshalb aus dem Hauptratgeber zu Fersenschmerzen.',
        'Die Wade zählt am meisten. In einer Fall-Kontroll-Studie erhöhte eine verkürzte Wade die Chance auf Plantarfasziitis um das 23,3-Fache, mehr als jeder andere Faktor. Wenn eine Übung deinen Schmerz auf 6 von 10 oder mehr bringt, hör für heute auf.',
      ],
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Leg die Hände an eine Wand oder an die Rückseite deines Arbeitsplatzes. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Zweimal halten pro Bein dauert etwa zwei Minuten und passt damit in eine Lücke zwischen zwei Terminen.',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position, hintere Ferse flach, dann beug das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, hält dich aufrecht, wenn du stillstehst, und er lässt nur mit gebeugtem Knie los.',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht für sich allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, drück dich gerade über die großen Zehen nach oben und senk dich langsam ab. Halt dich zum Gleichgewicht am Arbeitsplatz fest. Neben dem Kraftaufbau bringt das die Wadenpumpe in Gang, die Blut das Bein hinaufdrückt. Beim Stillstehen passiert das nicht.',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen hoch, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht für sich allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Setz dich auf deinen Hocker, die Füße flach, und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, fast ohne Last auf der Ferse. Eine gute Wahl, wenn deine Fersen schon wund sind.',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
        {
          name: 'Sprunggelenk-Wippen',
          evidence: { level: 'early', why: 'Zielt auf die Beweglichkeit im Sprunggelenk, den stärksten Risikofaktor für Plantarfasziitis in einer Fall-Kontroll-Studie von 2003. Nicht für sich allein in einer Studie getestet.' },
          dose: '2\u00A0Sätze à 15, jedes Bein',
          how: 'Schrittstellung, Hände an der Wand. Schieb das vordere Knie über die Zehen nach vorn, während die Ferse flach bleibt. Langsam, etwa zwei Sekunden in jede Richtung. Das bewegt das Sprunggelenk nach einer langen Phase im Stillstand.',
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Das Knie wandert über die Zehen nach vorn, die Ferse bleibt flach',
          alt: 'Eine Figur in Schrittstellung schiebt das vordere Knie über die Zehen nach vorn, das Sprunggelenk ist hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Plantarfaszien-Dehnung mit A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg einen Fuß über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Mach sie in einer Pause, in der du sitzen kannst, und vor deinen ersten Schritten am Morgen, wenn die Ferse dann am meisten wehtut.',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft zurück, bis du es im Gewölbe spürst',
          alt: 'Eine sitzende Figur zieht die Zehen eines Fußes zurück, das Gewölbe ist hervorgehoben',
        },
      ],
      table: {
        caption: 'Welche Übung in welche Lücke passt',
        head: ['Lücke', 'Übung', 'Dosis'],
        rows: [
          ['Während die Farbe einwirkt', 'Wadendehnung', '2-mal 30\u00A0s, jedes Bein'],
          ['Nächste Lücke', 'Soleusdehnung', '2-mal 30\u00A0s, jedes Bein'],
          ['Kundin oder Kunde am Waschbecken', 'Fersenheben', '3-mal 10, beide Füße'],
          ['Im Sitzen auf dem Hocker', 'Fersenheben im Sitzen', '3-mal 10, beide Füße'],
          ['Vor einem langen Schnitt', 'Sprunggelenk-Wippen', '2-mal 15, jedes Bein'],
          ['Mittagspause', 'Plantarfaszien-Dehnung', '2-mal 30\u00A0s, jeder Fuß'],
        ],
      },
      after: [
        'Fersenheben beidbeinig und Fersenheben im Sitzen sind dasselbe Krafttraining, also nimm eins davon pro Tag. Krafttraining jeden zweiten Tag lässt der Wade Zeit, sich zu erholen.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Helfen Kompressionsstrümpfe im Friseurberuf?',
      keyFact: 'In einer randomisierten Crossover-Studie mit 108\u00A0Friseurinnen und Friseuren senkten Strümpfe mit 15 bis 20\u00A0mmHg den Wert für Beinschmerzen und Schwellungsgefühl um 12\u00A0% und das Volumen des Unterschenkels um 19\u00A0ml (Blazek und Kollegen, 2013).',
      paragraphs: [
        '**Kompressionsstrümpfe gehören zu den wenigen Dingen, die direkt im Friseurberuf getestet wurden.** In einer randomisierten Crossover-Studie aus der Schweiz trugen 108\u00A0Friseurinnen und Friseure in einem Zeitraum leichte Kompressionsstrümpfe (15 bis 20\u00A0mmHg) und in einem anderen keine. Mit Strümpfen sank der Wert für Beinschmerzen und Schwellungsgefühl im Schnitt um 12\u00A0%, und das Volumen des Unterschenkels nahm um 19\u00A0ml ab. Auch die Werte für Schlaf und Stimmung wurden besser.',
        'Eine kleinere brasilianische Studie mit 38\u00A0Friseurinnen und Friseuren maß den Knöchel. Ohne Strümpfe nahm der Umfang von 21,1\u00A0cm am Morgen auf 22,1\u00A0cm am Abend zu. Mit Strümpfen lag er am Abend bei 21,2\u00A0cm, also etwa so wie am Morgen.',
        'Die Effekte waren mäßig, und die Studien maßen Schwellung und Beschwerden in den Beinen, nicht Fußerkrankungen wie die Plantarfasziitis. Eine Studie von 2023 mit Sicherheitskräften fand ähnliche Ergebnisse bei langen Schichten im Stehen. **Strümpfe helfen gegen Schwellung und schwere Beine, Wade und Gewölbe brauchen trotzdem ihre eigenen Übungen.** Wenn du Diabetes, eine schlechte Durchblutung oder taube Füße hast, lass vor dem Tragen von Kompressionsstrümpfen ärztlich abklären, ob sie für dich passen.',
      ],
      sourceNote:
        'Blazek und Kollegen (2013): randomisierte Crossover-Studie, 108\u00A0Friseurinnen und Friseure, medizinische Kompressionsstrümpfe mit 15 bis 20\u00A0mmHg gegen keine, Symptomwert auf einer Skala von 0 bis 4 (mittlere Abnahme 0,22). Agle und Kollegen (2020): 38\u00A0Friseurinnen und Friseure ohne Venenerkrankung, Knöchelumfang an Messpunkt B, morgens und abends, mit und ohne Strümpfe.',
      cites: [CITE.blazekHosiery, CITE.agleHosiery, CITE.garcia],
    },
    {
      h2: 'Könnte es eine Plantarfasziitis, Krampfadern oder etwas anderes sein?',
      paragraphs: [
        'Allgemeine Schmerzen und schwere Beine nach einem Tag im Salon sind häufig und lassen meist über Nacht nach. Manche Muster deuten auf etwas Bestimmteres hin:',
        {
          list: [
            'Ein stechender Fersenschmerz bei den ersten Schritten am Morgen oder nach dem Sitzen spricht für eine [Plantarfasziitis](/de/plantarfasziitis/). Die vollständige Routine steht unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
            'Brennen oder Schmerzen unter dem Fußballen passen zu [Vorfußschmerzen](/de/metatarsalgie-vorfussschmerzen/), häufig bei dünnen Sohlen oder Absätzen.',
            'Ein Gewölbe, das abends schmerzt oder flacher aussieht, passt zu [Schmerzen im Fußgewölbe](/de/schmerzen-im-fussgewoelbe/).',
            'Geschwollene, geschlängelte oder hervortretende Venen an den Beinen können Krampfadern sein. In einer Befragung von 182\u00A0Friseurinnen und Friseuren in Taiwan hatten 24,2\u00A0% welche, und bei den über 45-Jährigen waren viele Stunden Stehen pro Monat ein Risikofaktor (Chen und Guo, 2014).',
          ],
        },
        'Wenn du nicht sicher bist, woher der Schmerz kommt, kann eine Ärztin oder ein Arzt es dir sicher sagen. **Wenn sich der Schmerz verändert, ausbreitet oder in Ruhe nicht mehr nachlässt, lass ihn ärztlich abklären, bevor du ihn mit Übungen belastest.**',
      ],
      cites: [CITE.chenVaricose],
    },
  ],
  faq: [
    {
      q: 'Warum tun Friseurinnen und Friseuren die Füße so weh?',
      a: 'Im Friseurberuf stehst du lange an einer Stelle. Das belastet Ferse und Gewölbe, ohne die Wadenpumpe, die beim Gehen arbeitet. In einer Studie mit 384\u00A0Friseurinnen und Friseuren berichteten 49,5\u00A0% über Knie- oder Fußschmerzen in 12\u00A0Monaten, gegenüber 38,3\u00A0% der Menschen in anderen Berufen. Vorbeugen, harte Böden und Schuhe ohne Halt erhöhen die Last zusätzlich.',
      cites: [CITE.mishraHairdressers, CITE.waters],
    },
    {
      q: 'Welche Schuhe sind die besten bei Fußschmerzen im Friseurberuf?',
      a: 'Keine Studie hat Schuharten im Friseurberuf verglichen, einen erwiesen besten Schuh gibt es also nicht. Achte auf eine gedämpfte Sohle, etwas Unterstützung fürs Gewölbe, einen niedrigen Absatz, Platz für die Zehen und eine rutschfeste Sohle. Eine Übersichtsarbeit von 2018 mit 10\u00A0Studien fand mäßige Belege, dass gedämpfte Einlagen und weichere Böden Beschwerden bei Arbeit im Stehen verringern.',
      cites: [CITE.speedCushioning],
    },
    {
      q: 'Bringen Anti-Ermüdungsmatten im Friseursalon etwas?',
      a: 'Sie helfen beim Komfort. In einer Laborstudie über vier Stunden Stehen verringerten drei von vier Anti-Ermüdungsmatten die Beschwerden im Vergleich zu einem harten Boden. Eine kleine ältere Studie fand, dass Matten die Ermüdung der Rückenmuskeln verringerten, aber nicht die der Beinmuskeln. Eine Matte an deinem Platz lohnt sich, ersetzt aber nicht Dehnen und Bewegung zwischen den Terminen.',
      cites: [CITE.wiggermannMats, CITE.kimMats],
    },
    {
      q: 'Sollten Friseurinnen und Friseure Kompressionsstrümpfe tragen?',
      a: 'Leichte Kompression gehört zu den wenigen Möglichkeiten, die im Friseurberuf getestet wurden. In einer Crossover-Studie mit 108\u00A0Friseurinnen und Friseuren senkten Strümpfe mit 15 bis 20\u00A0mmHg den Wert für Beinschmerzen und Schwellungsgefühl um 12\u00A0% und das Volumen des Unterschenkels um 19\u00A0ml. Der Effekt war mäßig. Wenn du Diabetes oder eine schlechte Durchblutung hast, lass es vorher ärztlich abklären.',
      cites: [CITE.blazekHosiery],
    },
    {
      q: 'Ist es im Friseurberuf besser, auf einem Hocker zu sitzen?',
      a: 'Sitzen für einen Teil des Tages nimmt Last von den Füßen, aber keine Studie hat Hocker gegen Fußschmerzen im Friseurberuf getestet. Eine Haltungsstudie fand, dass Menschen auf einem Hocker den unteren Rücken stärker beugten und die Hände häufiger über die Schulter hoben. Stell den Hocker so hoch, dass deine Arme unten bleiben, und steh für den Rest.',
      cites: [CITE.kozakHairdressing, CITE.karakolis],
    },
    {
      q: 'Welche Dehnungen gehen zwischen zwei Kunden?',
      a: 'Die Wadendehnung und die Soleusdehnung, je 2-mal 30\u00A0Sekunden pro Bein, passen in eine Lücke zwischen zwei Terminen. Fersenheben, 3\u00A0Sätze à 10, bringt die Wadenpumpe nach dem Stillstehen wieder in Gang. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Wadendehnung und Plantarfaszien-Dehnung bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad.',
      cites: [CITE.guideline],
    },
    {
      q: 'Kann die Arbeit als Friseur eine Plantarfasziitis auslösen?',
      a: 'Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf Plantarfasziitis in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen um das 3,6-Fache, und eine verkürzte Wade erhöhte sie um das 23,3-Fache. Keine Studie hat Plantarfasziitis gezielt im Friseurberuf gemessen, aber die Arbeit im Salon bedeutet genau diese Art von langem Stehen.',
      cites: [CITE.riddle],
    },
    {
      q: 'Wie lange kann man im Friseurberuf stehen, bevor man eine Pause braucht?',
      a: 'Für den Friseurberuf gibt es keine getestete Grenze. In einer Übersichtsarbeit zu Laborstudien wurden Beschwerden im unteren Rücken im Schnitt nach etwa 71\u00A0Minuten Stehen klinisch relevant, bei Menschen, die zu Schmerzen beim Stehen neigen, nach 42\u00A0Minuten. Lange Termine mit einer kurzen Dehnung, ein paar Fersenheben oder einer Minute auf dem Hocker zu unterbrechen, ist ein vernünftiger Weg.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Schmerz nach einem Sturz, einem Umknicken oder etwas, das dir auf den Fuß gefallen ist, angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'der Fuß taub ist, kribbelt oder brennt',
      'ein Bein plötzlich angeschwollen ist und schmerzt, gerötet oder warm ist',
      'der Fuß gerötet oder heiß ist oder du Fieber hast oder dich krank fühlst',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist',
      'du Diabetes, eine schlechte Durchblutung oder weniger Gefühl in den Füßen hast',
      'der Schmerz nach mehreren Wochen mit besseren Schuhen, einer Matte, Pausen und den Übungen auf dieser Seite nicht nachgelassen hat',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text:
      'Du musst dir Reihenfolge, Dosis und den Zeitpunkt für die schwerere Variante nicht selbst überlegen. Walkito ist eine Übungs-App für Ferse und Fuß, die deinen Plan Woche für Woche aufbaut, und die Einheiten sind kurz genug für vor der Arbeit oder eine Pause.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deinen Fersenschmerz, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['standing', 'nurses', 'standingDesk'],
  crumb: 'Fußschmerzen im Friseurberuf',
  campaign: 'guide-hairdressers-foot-pain-de',
};
