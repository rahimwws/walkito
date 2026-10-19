import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/plantar-fasciitis-not-getting-better.ts
 * (2026-10-19), written around «Plantarfasziitis wird nicht besser»,
 * «Plantarfasziitis chronisch» and «Fersenschmerzen gehen nicht weg».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts` and
 * the other articles-de pages. Figures, grades, hedges and sources are
 * identical to the English page after its fact-check. Same CITE keys and media
 * ids. Link to /app-vs-physical-therapy-plantar-fasciitis/ removed (no German
 * version), the sentence kept as plain text.
 */

export const PF_NOT_BETTER_DE: Guide = {
  lang: 'de',
  page: 'pfNotBetter',
  mainSource: CITE.hansen,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Plantarfasziitis wird nicht besser? Was du ändern kannst',
  description:
    'Fersenschmerzen gehen nicht weg? Sechs häufige Gründe, warum eine Plantarfasziitis stagniert, woran du sie erkennst und was du ändern kannst.',
  h1: 'Plantarfasziitis wird nicht besser? Gründe und was du ändern kannst',
  lede:
    'Wenn eine Plantarfasziitis nicht besser wird, sind die üblichen Gründe ein Plan, der nur aus Dehnen besteht, eine Belastung, die nie steigt, Aufhören, sobald es nachlässt, oder etwas, das sie immer wieder auslöst. Manchmal ist es gar keine Plantarfasziitis. Selten heißt es, dass sich nichts ändern kann: In einer Studie, die 174\u00A0Menschen etwa zehn Jahre lang begleitete, waren 54\u00A0% beschwerdefrei, und die meisten anderen hatten nur leichte Schmerzen (Hansen und Kollegen, 2018).',
  intro: [
    'Diese Seite ist für die Phase, in der du feststeckst: Du hast die Dehnungen probiert, vielleicht Einlagen, vielleicht eine Spritze, und deine ersten Schritte tun trotzdem weh. Wie lange die Erholung normalerweise dauert, steht unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/). Hier gehen wir die häufigen Gründe durch, warum es stagniert, woran du jeden erkennst, was du ändern kannst und wann du dich erneut untersuchen lassen solltest.',
  ],
  takeaways: [
    'Von 174\u00A0Menschen, die ab Beginn der Beschwerden im Mittel 9,7\u00A0Jahre begleitet wurden, waren 54\u00A0% beschwerdefrei und 46\u00A0% hatten noch Beschwerden, meist leichte. Fast alle (93\u00A0%) hatten irgendwann eine Kortisonspritze bekommen, es waren also schwierigere Fälle (Hansen und Kollegen, 2018).',
    'Auf und Ab ist normal: 31,9\u00A0% der Menschen, denen es besser ging, hatten vorher mindestens einen Rückfall, und 77,5\u00A0% derer, die noch Schmerzen hatten, waren zwischendurch einmal schmerzfrei gewesen (Hansen und Kollegen, 2018).',
    'In einer Studie mit 48\u00A0Personen brachte Fersenheben mit Zusatzlast die Besserung nach drei Monaten früher als Dehnen. Nach einem Jahr lagen beide Gruppen etwa gleichauf (Rathleff und Kollegen, 2015).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen, manuelle Therapie, Tapen und Nachtschienen mit **A** und Krafttraining, Dry Needling und Low-Level-Laser mit **B**. Von Einlagen allein zur kurzfristigen Linderung rät sie ab (Koc und Kollegen, 2023).',
    'Dieselbe Leitlinie sagt, dass nach anderen Diagnosen gesucht werden sollte, wenn die Beschwerden nicht abklingen, etwa einer entzündlichen Arthritis, einem Schwund des Fettpolsters oder einem Knoten in der Faszie (Koc und Kollegen, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Bleibt eine Plantarfasziitis für immer, wenn sie nicht besser wird?',
      keyFact: 'In einer Gruppe von 174\u00A0Menschen, die im Mittel 9,7\u00A0Jahre begleitet wurden, waren 54\u00A0% beschwerdefrei und 46\u00A0% hatten noch Beschwerden, die meisten davon leicht (Hansen und Kollegen, 2018).',
      paragraphs: [
        '**Bei den meisten Menschen nicht.** Eine Übersichtsarbeit von 2020 berichtet, dass es bei mehr als 90\u00A0% der Menschen mit Versorgung ohne Operation besser wird, auch wenn es drei bis sechs Monate dauern kann (Latt und Kollegen, 2020). Die schwierigere Frage ist, was mit denen passiert, die danach noch feststecken.',
        'Die besten Langzeitdaten stammen aus einer dänischen Studie, die 174\u00A0Menschen mit einer im Ultraschall bestätigten Plantarfasziitis begleitete. Im Mittel 9,7\u00A0Jahre nach Beginn der Beschwerden hatten 54\u00A0% gar keine Beschwerden mehr. Die anderen 46\u00A0% hatten noch welche, die meisten beschrieben sie aber als leicht. Im Durchschnitt hatten die Teilnehmenden 3,8 verschiedene Behandlungen ausprobiert (Hansen und Kollegen, 2018).',
        'Zwei Dinge machen diese Studie hoffnungsvoller, als sie auf den ersten Blick wirkt. Es war eine Gruppe aus einer Spezialklinik mit hartnäckigen Schmerzen: 93\u00A0% hatten irgendwann eine Kortisonspritze bekommen, und die ist kein erster Schritt. Und „noch Beschwerden“ bedeutete jeden Wert über 0 von 10, schließt also Menschen mit gelegentlichen leichten Schmerzen ein.',
        'Die Studie fand auch, dass die Faszie mit der Zeit dünner wurde, ob die Menschen noch Schmerzen hatten oder nicht, und nur bei 24\u00A0% der schmerzfreien Gruppe sah die Faszie im Ultraschall ganz normal aus. Ein Befund, der noch auffällig aussieht, heißt also nicht, dass es dir nicht besser gehen kann. Den vollständigen Zeitverlauf findest du unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
      ],
      sourceNote:
        'Hansen 2018: 269 diagnostiziert von 2001 bis 2011, 174 nahmen teil (91\u00A0Frauen, 83\u00A0Männer), 137 hatten einen Kontroll-Ultraschall. Beschwerdefrei = 0 auf jeder Schmerzskala (Ruhe, Gehen, Laufen, Druck). Die Dicke der Faszie sank in beiden Gruppen von 6,9\u00A0mm und 6,7\u00A0mm auf 4,3\u00A0mm. Frauen und Menschen mit Schmerzen in beiden Fersen schnitten schlechter ab (beide P < .01). Die Autoren halten fest, dass die Studie nicht beurteilen kann, welche Behandlungen gewirkt haben.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Welcher Grund passt zu dir?',
      paragraphs: [
        'Die meisten festgefahrenen Fälle passen zu einem oder zwei dieser Muster. Lies die mittlere Spalte durch, schau, was nach dir klingt, und geh dann zu diesem Abschnitt.',
      ],
      table: {
        caption: 'Häufige Gründe, warum eine Plantarfasziitis stagniert',
        head: ['Grund', 'Woran du es erkennst', 'Was du änderst'],
        rows: [
          ['Nur Dehnen', 'Wochenlang gedehnt, erste Schritte noch stechend', 'Wadenkraft dazunehmen'],
          ['Belastung steigt nie', 'Monatelang dasselbe leichte Fersenheben', 'Langsam steigern, schwer bleiben'],
          ['Zu früh aufgehört', 'Besser, aufgehört, wieder da', 'Leichtere Dosis beibehalten'],
          ['Schub, dann Pause', 'Ein schlechter Tag, eine Woche Pause', 'Zurückschalten, nicht aussteigen'],
          ['Anhaltende Auslöser', 'Lange Schichten, Läufe oder steifes Sprunggelenk', 'Belastung ändern, wo es geht'],
          ['Keine Plantarfasziitis', 'Nachtschmerz, Kribbeln, beide Fersen', 'Erneut untersuchen lassen'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Dehnst du nur?',
      keyFact: 'In einer Studie mit 48\u00A0Personen schnitt die Gruppe mit Fersenheben nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab als die Gruppe mit Dehnen (Rathleff und Kollegen, 2015).',
      paragraphs: [
        '**Dehnen lohnt sich weiterhin, reicht allein aber vielleicht nicht.** Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade mit **A**, ihrem höchsten Empfehlungsgrad. Krafttraining für Fuß und Sprunggelenk bewertet sie mit **B** (Koc und Kollegen, 2023). Viele Pläne für zu Hause enthalten nur das Erste.',
        'In einer Studie mit 48\u00A0Personen machte eine Gruppe langsames, schweres Fersenheben mit einem Handtuch unter den Zehen und die andere dehnte die Plantarfaszie. Nach drei Monaten schnitt die Gruppe mit Fersenheben im Foot Function Index um 29\u00A0Punkte besser ab. Nach einem Jahr lagen beide Gruppen etwa gleichauf (Rathleff und Kollegen, 2015). Fersenheben statt Dehnen hat also nicht verändert, wo die Menschen nach einem Jahr standen, aber sie kamen schneller dorthin.',
        'Woran du es erkennst: Du dehnst seit einem Monat oder länger treu, die Dehnung fühlt sich leichter an, aber die ersten Schritte des Tages sind immer noch stechend. Was du änderst: Behalt die Dehnungen bei und nimm das Wadentraining aus dem nächsten Abschnitt dazu. [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/) erklärt die Routine aus der Studie im Detail.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Ist die Belastung je gestiegen?',
      keyFact: 'In einer Studie mit 70\u00A0Personen, die drei Monate lang Fersenheben machten, erreichten nur 4 einen Punkt, an dem sie keine weitere Behandlung mehr für nötig hielten (Riel und Kollegen, 2019).',
      paragraphs: [
        '**Krafttraining hilft nur, wenn es mit der Zeit schwerer wird.** Zehn leichte Wiederholungen Fersenheben auf beiden Füßen, monatelang gemacht, sind ein Aufwärmen, keine Belastung. Die Stufen unten führen von beiden Füßen auf einen Fuß und nehmen dann Gewicht dazu. Die Routine aus der Studie selbst war einbeiniges Fersenheben mit einem Handtuch unter den Zehen, langsamem Tempo und einem Rucksack als Zusatzgewicht (Rathleff und Kollegen, 2015).',
        'Wie du die Belastung festlegst, ist weniger wichtig, als viele denken. Eine Studie von 2019 gab 70\u00A0Personen entweder einen festen, stufenweisen Plan fürs Fersenheben oder ließ sie Sätze und Gewicht selbst wählen, so schwer, wie sie schafften. Beide Gruppen besserten sich ähnlich stark. Die selbst gewählte Dosis führte nicht dazu, dass die Menschen mehr machten (Riel und Kollegen, 2019).',
        'Dieselbe Studie ist ein nützlicher Abgleich mit der Realität: Nach drei Monaten Fersenheben gaben 44 der 65\u00A0Personen, die antworteten, an, dass es ihnen besser ging, aber nur 4 von 70 hielten keine weitere Behandlung mehr für nötig. Wenn es dir nach drei Monaten besser geht, du aber noch nicht fertig bist, gehörst du zur üblichen Gruppe, nicht zur gescheiterten.',
        'Was du änderst: Geh eine Stufe höher, wenn sich die aktuelle in zwei Einheiten hintereinander leicht anfühlt und dein nächster Morgen nicht schlimmer ist. Die Karten unten sind die Stufen, der Reihe nach.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Stechender Fersenschmerz, der bleibt, nachdem du losgelassen hast',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An Krafttagen',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, der tiefere Wadenmuskel, und die Ferse wird kaum belastet. Fang hier an, wenn Fersenheben im Stehen wehtut.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An Krafttagen',
          feel: 'Beide Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, drück dich gerade über die großen Zehen nach oben und senk dich langsam ab. Beide Füße teilen sich die Last, während sich die Wade an die Arbeit gewöhnt.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben mit Halten',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3-mal 20\u00A0Sekunden halten, beide Füße',
          often: 'An Krafttagen',
          feel: 'Die Waden arbeiten, um ruhig zu bleiben',
          how: 'Geh auf beiden Füßen auf die Zehen und bleib oben ruhig stehen. Sink nicht wieder ab. Eine nützliche Stufe an Tagen, an denen Wiederholungen in Bewegung zu viel sind.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben mit Halten',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hoch und oben ruhig bleiben',
          alt: 'Eine Figur hält sich auf den Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch',
          evidence: { level: 'moderate', why: 'Das ist die Routine aus einer Studie mit 48\u00A0Personen, und die Leitlinie von 2023 bewertet Krafttraining mit B.' },
          dose: '4\u00A0Sätze à 10, jedes Bein, mit Zusatzgewicht',
          often: 'An Krafttagen',
          feel: 'Harte Arbeit in der Wade',
          how: 'Stell dich mit einem Fuß auf eine Stufe, ein eingerolltes Handtuch unter den Zehen. Nimm dir drei Sekunden für den Weg nach oben, halte oben zwei und nimm dir drei für das Absenken. Auf dieser Stufe kommt Gewicht dazu, etwa ein Rucksack. Das Handtuch sorgt dafür, dass die Übung die Plantarfaszie trainiert und nicht nur die Wade.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben mit Handtuch',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, zwei oben, drei runter',
          alt: 'Eine Figur hebt sich auf einer Stufe mit eingerolltem Handtuch auf die Zehen, die Waden sind hervorgehoben',
        },
      ],
      sourceNote:
        'Riel 2019: 70\u00A0Personen mit Plantarfasziopathie im Ultraschall, Fersenheben im Stehen über drei Monate. Schmerz im Foot Health Status Questionnaire: adjustierte mittlere Differenz 6,9\u00A0Punkte, 95\u00A0%-KI von minus 15,5 bis plus 1,7, nicht signifikant. Gebessert im Global Rating of Change: 24 von 33 (selbst dosiert) und 20 von 32 (fester Plan). Patient Acceptable Symptom State: 3 von 35 und 1 von 35.',
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.guideline],
    },
    {
      h2: 'Hast du aufgehört, als es besser wurde, oder nach einem Schub?',
      keyFact: 'In einer Langzeitstudie hatten 31,9\u00A0% der Menschen, die beschwerdefrei wurden, vorher mindestens einen Rückfall (Hansen und Kollegen, 2018).',
      paragraphs: [
        '**Rückfälle gehören zum normalen Verlauf und sind kein Beweis, dass nichts wirkt.** In der dänischen Langzeitstudie hatten 31,9\u00A0% der Menschen, die am Ende beschwerdefrei waren, mindestens einen Rückfall, bevor der Schmerz endgültig verschwand. Von denen, die noch Beschwerden hatten, waren 77,5\u00A0% zwischendurch einmal schmerzfrei gewesen (Hansen und Kollegen, 2018).',
        'Daraus ergeben sich zwei Muster:',
        {
          list: [
            '**Zu früh aufgehört.** Der Schmerz lässt nach, die Übungen fallen weg, und ein paar Wochen später ist die Ferse wieder da, wo sie angefangen hat. Was du änderst: Wenn die Morgen gut sind, geh auf eine leichtere Erhaltungsdosis herunter, zum Beispiel weniger Krafttage, statt aufzuhören.',
            '**Schub, dann Pause.** Ein langer Tag auf den Beinen oder ein neues Paar Schuhe sorgt für einen schlechten Morgen, und du hörst eine Woche lang mit allem auf. Was du änderst: Geh bei den Karten oben eine Stufe zurück und mach weiter. Wer ganz aufhört, verliert die aufgebaute Kraft.',
          ],
        },
        'Eine einfache Regel hilft, einen Schub von einem Rückschritt zu unterscheiden: Schmerz während der Übung bis etwa 6 von 10 ist in Ordnung, wenn er abklingt und dein nächster Morgen nicht schlimmer ist. Diese Regel nutzt Walkito. Sie wurde nicht als eigene Regel getestet. Wenn deine Morgen also Woche für Woche schlimmer werden, lass es ärztlich oder physiotherapeutisch abklären.',
        'Keine Studie hat getestet, wie lange du eine Erhaltungsdosis beibehalten solltest, nachdem sich eine Plantarfasziitis beruhigt hat. Die Leitlinie von 2023 setzt für Krafttraining kein Enddatum (Koc und Kollegen, 2023).',
      ],
      cites: [CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Löst noch etwas die Schmerzen aus?',
      keyFact: 'Ein Sprunggelenk, das sich um 0\u00A0Grad oder weniger beugen ließ, erhöhte die Chance auf eine Plantarfasziitis etwa 23-fach im Vergleich zu einem, das sich um mehr als 10\u00A0Grad beugen ließ, in einer Studie mit 50\u00A0Fällen und 100\u00A0Kontrollpersonen (Riddle und Kollegen, 2003).',
      paragraphs: [
        '**Die Belastung, die dein Fuß den Rest des Tages abbekommt, kann die Übungen überholen.** In einer gematchten Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne war ein steifes Sprunggelenk der stärkste Risikofaktor: Ein Sprunggelenk, das sich um 0\u00A0Grad oder weniger beugen ließ, erhöhte die Chance 23,3-fach. Ein Body-Mass-Index über 30 erhöhte sie etwa 5,6-fach und den größten Teil des Arbeitstags auf den Beinen zu verbringen etwa 3,6-fach (Riddle und Kollegen, 2003).',
        'Die Leitlinie von 2023 nennt dieselben Faktoren, dazu das Laufen, und ergänzt, dass harte Böden mit schlechter Dämpfung Stehen und Gehen bei der Arbeit zu einem größeren Risiko machen (Koc und Kollegen, 2023). Manches davon kannst du ändern, manches nicht:',
        {
          list: [
            '**Ein steifes Sprunggelenk oder eine verkürzte Wade.** Mach mit den Dehnungen für Wade und Soleus weiter. [Verspannte Waden](/de/verspannte-waden/) hat alle Übungen.',
            '**Lange Schichten auf harten Böden.** Gedämpfte Schuhe, eine Matte dort, wo du stehst, und Pausen im Sitzen, wo es geht. Siehe [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/).',
            '**Umfang beim Gehen oder Laufen.** Verkürz die Strecke oder das Tempo, statt aufzuhören. Wenn deine ersten Schritte am nächsten Morgen deutlich schlimmer sind, war es zu viel. Siehe [Gehen bei Plantarfasziitis](/de/gehen-bei-plantarfasziitis/).',
            '**Körpergewicht.** In der Langzeitstudie hing das Gewicht nicht damit zusammen, wie lange die Beschwerden anhielten (Hansen und Kollegen, 2018), es geht hier also nicht um Schuld. [Gewicht und Plantarfasziitis](/de/gewicht-und-plantarfasziitis/) fasst zusammen, was bekannt ist.',
          ],
        },
        'Einlagen können etwas Druck von der Ferse nehmen, während du Kraft aufbaust, aber die Leitlinie rät davon ab, sich zur kurzfristigen Linderung allein auf sie zu verlassen (Empfehlungsgrad **B**), und lässt sie zusätzlich zu anderen Maßnahmen zu (Empfehlungsgrad **C**). [Einlagen oder Übungen](/de/einlagen-oder-uebungen/) vergleicht beides.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Könnte es etwas anderes als eine Plantarfasziitis sein?',
      paragraphs: [
        '**Ja, und die Leitlinie fordert Ärztinnen und Ärzte auf, das zu prüfen, wenn die Beschwerden nicht abklingen.** Die Leitlinie von 2023 zu Fersenschmerzen sagt, dass nach anderen Diagnosen gesucht werden sollte, darunter eine entzündliche Arthritis von Wirbelsäule und Gelenken (Spondyloarthritis), ein Schwund des Fersenfettpolsters und ein gutartiger Knoten in der Faszie (plantares Fibrom), wenn das Bild nicht passt oder die Beschwerden trotz Versorgung nicht verschwinden (Koc und Kollegen, 2023).',
        'Eine Übersichtsarbeit von 2020 nennt weitere Ursachen für Schmerzen unter der Ferse, darunter einen eingeklemmten Nerv (Tarsaltunnelsyndrom oder Baxter-Nerv), einen Ermüdungsbruch des Fersenbeins, einen Riss der Faszie und eine entzündliche Arthritis (Latt und Kollegen, 2020). Hinweise, die von einer Plantarfasziitis wegführen:',
        {
          list: [
            '**Brennen, Kribbeln oder Taubheit** oder Schmerz, der ins Gewölbe oder in die Zehen ausstrahlt: mögliches Nervenproblem.',
            '**Schmerz, der zunimmt, je länger du gehst,** statt nach den ersten Schritten nachzulassen, und wehtut, wenn du die Ferse seitlich zusammendrückst: siehe [Plantarfasziitis oder Ermüdungsbruch](/de/plantarfasziitis-oder-ermuedungsbruch/).',
            '**Schmerz hinten an der Ferse** statt darunter: siehe [Plantarfasziitis oder Achillessehne](/de/plantarfasziitis-oder-achillessehne/).',
            '**Ein tiefer Schmerz wie bei einem Bluterguss in der Mitte des Fersenpolsters,** schlimmer auf harten Böden und barfuß: siehe [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/).',
            '**Schmerz nachts oder in Ruhe:** siehe [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/).',
            '**Beide Fersen, mit langer Morgensteifigkeit oder anderen schmerzenden Gelenken.** In der Langzeitstudie gingen Schmerzen in beiden Fersen mit einer langsameren Erholung einher, und die Autoren hielten es für möglich, dass dahinter eine entzündliche Erkrankung steckte, auf die nicht getestet wurde (Hansen und Kollegen, 2018).',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.hansen],
    },
    {
      h2: 'Was nennt die Leitlinie, wenn Übungen allein nicht geholfen haben?',
      keyFact: 'In einer Studie mit 180\u00A0Personen brachte eine Kortisonspritze zusätzlich zu Fersenheben, Beratung und Fersenschale zu keinem Zeitpunkt bis zu einem Jahr einen Unterschied, den Betroffene bemerken würden (Riel und Kollegen, 2023).',
      paragraphs: [
        'Das sind Optionen, die du mit einer Ärztin, einem Arzt oder in der Physiotherapie besprichst, nichts zum Ausprobieren zu Hause. Alle Empfehlungsgrade stammen aus der Leitlinie von 2023 zu Fersenschmerzen, in der **A** die stärkste Empfehlung ist (Koc und Kollegen, 2023):',
        {
          list: [
            '**Manuelle Therapie** (Arbeit mit den Händen an Gelenken und Weichteilen): **A**.',
            '**Tapen**, starr oder elastisch, zusätzlich zu anderen Maßnahmen, zur kurzfristigen Linderung: **A**. Siehe [Plantarfasziitis tapen](/de/plantarfasziitis-tapen/).',
            '**Nachtschienen für ein bis drei Monate**, wenn die ersten Schritte weiter wehtun: **A**. Siehe [Nachtschiene](/de/nachtschiene-plantarfasziitis/).',
            '**Dry Needling** der Waden- und Fußmuskulatur: **B**.',
            '**Low-Level-Laser** als Teil eines Reha-Programms, bei kurzfristigen Schmerzen: **B**.',
            '**Einlagen zusammen mit anderen Maßnahmen**: **C**.',
          ],
        },
        'Die Leitlinie rät **ab** von Einlagen als einziger Maßnahme zur kurzfristigen Linderung (**B**) und davon, therapeutischen Ultraschall zum Dehnen dazuzunehmen (**A**). Die Fassung von 2023 gibt keine Empfehlung zur Stoßwellentherapie.',
        '**Kortisonspritzen** lindern bei manchen Menschen kurzfristig die Schmerzen, aber die Belege für ihren Zusatznutzen sind schwach. In einer Studie mit 180\u00A0Personen bekamen alle eine Beratung und eine Fersenschale. Eine Gruppe bekam zusätzlich Fersenheben, eine weitere Fersenheben plus eine Spritze. Die Unterschiede zwischen den Gruppen erreichten zu keinem Zeitpunkt bis zu einem Jahr eine Größe, die Betroffene bemerken würden (Riel und Kollegen, 2023). Dieselbe Studie fand auch keinen klaren Zusatznutzen durch das Fersenheben, eine Erinnerung daran, dass keine einzelne Ergänzung eine sichere Sache ist.',
        'Eine Übersichtsarbeit von 2020 sagt, dass Menschen, die nach mindestens sechs Monaten Versorgung ohne Operation noch Schmerzen haben, minimalinvasive Optionen wie Spritzen oder Stoßwellen angeboten werden können oder in manchen Fällen eine Operation (Latt und Kollegen, 2020). Diese Entscheidungen triffst du mit einer Fachärztin oder einem Facharzt. Eine Physiotherapeutin oder ein Physiotherapeut kann auch persönlich deine Ausführung und Belastung prüfen.',
      ],
      sourceNote:
        'Riel 2023: Beratung + Fersenschale (n = 62), plus selbst dosiertes schweres, langsames Fersenheben (n = 59), plus eine ultraschallgesteuerte Triamcinolon-Spritze (n = 59). Schmerz im Foot Health Status Questionnaire, kleinster relevanter Unterschied 14,1\u00A0Punkte. Gruppe mit Spritze gegenüber nur Beratung: adjustierte Differenz 9,1\u00A0Punkte nach drei Monaten (p = 0,023) und 5,2\u00A0Punkte über 52\u00A0Wochen (p = 0,045), unter dem kleinsten relevanten Unterschied. Zu keinem Zeitpunkt ein signifikanter Unterschied zwischen Übungen und Übungen plus Spritze oder zwischen Beratung und Übungen.',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.latt],
    },
    {
      h2: 'Wann solltest du dich erneut untersuchen lassen?',
      paragraphs: [
        '**Lass dich erneut untersuchen, wenn ein paar Monate regelmäßiger, gesteigerter Übungen deinen Morgenschmerz nicht bewegt haben, oder früher, wenn sich das Muster ändert.** Eine Übersichtsarbeit von 2020 sagt, dass Bildgebung ungewöhnlichen Fällen und Menschen vorbehalten ist, die auf die erste Stufe der Versorgung nicht ansprechen (Latt und Kollegen, 2020), und die Leitlinie sagt, dass nach anderen Diagnosen gesucht werden sollte, wenn die Beschwerden nicht verschwinden (Koc und Kollegen, 2023).',
        'Damit du das meiste aus dem Termin holst, bring mit:',
        {
          list: [
            'Deine Werte für den Morgenschmerz (erste Schritte, 0 bis 10) der letzten Wochen, damit der Verlauf klar ist.',
            'Was du gemacht hast, wie oft und wie schwer: „Fersenheben“ sagt weniger als „einbeinig, 4\u00A0Sätze à 10, mit Rucksack“.',
            'Was es schlimmer macht: eine Schicht, ein Lauf, neue Schuhe, barfuß auf harten Böden.',
            'Alles, was nicht zu einer Plantarfasziitis passt: Nachtschmerz, Kribbeln, beide Fersen, andere schmerzende Gelenke.',
          ],
        },
        'Frag, ob die Diagnose noch passt, ob eine Bildgebung etwas ändern würde und welche der Optionen aus der Leitlinie oben zu dir passen.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Warum wird meine Plantarfasziitis nicht besser?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Die häufigen Gründe sind ein Plan nur mit Dehnen und ohne Wadenkraft, eine Belastung, die nie schwerer wird, Aufhören, sobald der Schmerz nachlässt oder nach einem Schub, und die tägliche Belastung wie lange Schichten oder Läufe. Manchmal ist es keine Plantarfasziitis. Die Leitlinie von 2023 bewertet Dehnen mit A und Krafttraining mit B, die meisten Pläne brauchen also beides.',
    },
    {
      q: 'Bleibt eine Plantarfasziitis für immer?',
      cites: [CITE.hansen, CITE.latt],
      a: 'Meist nicht. Bei etwa 90\u00A0% der Menschen wird es mit Versorgung ohne Operation besser. In einer schwierigen Gruppe von 174\u00A0Menschen, die im Mittel 9,7\u00A0Jahre begleitet wurden, waren 54\u00A0% beschwerdefrei, und die meisten anderen hatten nur leichte Beschwerden. Manche behalten jahrelang leichte Beschwerden, deshalb lohnt sich eine erneute Untersuchung, wenn du feststeckst.',
    },
    {
      q: 'Kann eine chronische Plantarfasziitis noch besser werden?',
      cites: [CITE.hansen],
      a: 'Ja. In einer Langzeitstudie wurden Menschen auch lange nach dem ersten Jahr noch beschwerdefrei, und 77,5\u00A0% derer, die noch Schmerzen hatten, waren zwischendurch einmal schmerzfrei gewesen. Die Faszie wurde mit der Zeit dünner, ob die Menschen noch Schmerzen hatten oder nicht. Langsam heißt nicht für immer festgefahren.',
    },
    {
      q: 'Soll ich mit den Übungen aufhören, wenn meine Fersenschmerzen wieder schlimmer werden?',
      cites: [CITE.hansen],
      a: 'Meist nicht ganz. Geh eine Stufe zurück, zum Beispiel vom einbeinigen zum beidbeinigen Fersenheben, und mach weiter. Rückfälle sind häufig: 31,9\u00A0% der Menschen, die in einer Langzeitstudie beschwerdefrei wurden, hatten vorher mindestens einen. Lass es abklären, wenn die Morgen Woche für Woche schlimmer werden.',
    },
    {
      q: 'Reicht Dehnen bei Plantarfasziitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Bei manchen Menschen ja, aber Wadenkraft dazuzunehmen kann schneller helfen. Die Leitlinie von 2023 bewertet Dehnen mit A und Krafttraining mit B. In einer Studie mit 48\u00A0Personen brachte schweres Fersenheben nach drei Monaten ein besseres Ergebnis als Dehnen, nach einem Jahr lagen die Gruppen aber etwa gleichauf.',
    },
    {
      q: 'Helfen Kortisonspritzen bei einer Plantarfasziitis, die nicht weggeht?',
      cites: [CITE.rielHeelRaiseAdd],
      a: 'Sie können die Schmerzen eine Weile lindern, aber der Zusatznutzen scheint klein. In einer Studie mit 180\u00A0Personen brachte eine Spritze zusätzlich zu Fersenheben, Beratung und Fersenschale zu keinem Zeitpunkt bis zu einem Jahr einen Unterschied, den Betroffene bemerken würden. Ob eine Spritze zu dir passt, entscheidest du mit deiner Ärztin oder deinem Arzt.',
    },
    {
      q: 'Wann kommt bei Plantarfasziitis eine Operation infrage?',
      cites: [CITE.latt],
      a: 'Erst nach einem langen Versuch ohne Operation. Eine Übersichtsarbeit von 2020 sagt, dass eine Operation infrage kommt, wenn Schmerzen und Einschränkungen trotz mindestens sechs Monaten Versorgung ohne Operation bestehen bleiben, und dass dann auch minimalinvasive Optionen wie Spritzen oder Stoßwellen erwogen werden können. Diese Entscheidung triffst du mit einer Fachärztin oder einem Facharzt für Fuß und Sprunggelenk.',
    },
    {
      q: 'Könnten meine Fersenschmerzen etwas anderes als eine Plantarfasziitis sein?',
      cites: [CITE.guideline, CITE.latt],
      a: 'Ja. Die Leitlinie von 2023 fordert dazu auf, nach anderen Ursachen zu suchen, wenn die Beschwerden nicht abklingen, etwa einer entzündlichen Arthritis oder einem Schwund des Fersenfettpolsters. Weitere Ursachen sind ein eingeklemmter Nerv und ein Ermüdungsbruch des Fersenbeins. Brennen, Kribbeln, Nachtschmerz oder Schmerz, der beim Gehen zunimmt, sind Gründe, es abklären zu lassen.',
    },
    {
      q: 'Helfen Einlagen, wenn die Plantarfasziitis nicht besser wird?',
      cites: [CITE.guideline],
      a: 'Als Teil eines größeren Plans vielleicht. Die Leitlinie von 2023 rät davon ab, Einlagen als einzige Maßnahme zur kurzfristigen Linderung zu nutzen (Empfehlungsgrad B), und sagt, dass sie zusammen mit anderen Maßnahmen eingesetzt werden können (Empfehlungsgrad C). Kombinier sie mit Dehnen und Wadenkraft, statt dich allein auf sie zu verlassen.',
    },
  ],
  redFlags: {
    h2: 'Lass es zuerst ärztlich abklären, wenn',
    bullets: [
      'der Schmerz Woche für Woche schlimmer wird, nicht nur gleich bleibt',
      'er nach einem Sturz, einem Sprung oder einem plötzlichen Knall begann oder du den Fuß nicht belasten kannst',
      'es wehtut, wenn du die Ferse seitlich zusammendrückst, oder der Schmerz zunimmt, je länger du gehst',
      'du Brennen, Kribbeln oder Taubheit in Ferse, Gewölbe oder Zehen spürst',
      'er dich nachts aufweckt oder in Ruhe wehtut',
      'beide Fersen mit langer Morgensteifigkeit wehtun oder andere Gelenke schmerzen oder geschwollen sind',
      'die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'du Diabetes, ein vermindertes Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß. Sie kann dir nicht sagen, warum deine Ferse feststeckt, und sie ersetzt keine ärztliche Untersuchung, aber sie deckt die Teile ab, die oft fehlen: Wadentraining, das mit der Zeit schwerer wird, und eine leichtere Einheit an schlechten Morgen statt einer Woche Pause.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deine Fersenschmerzen am Morgen, und der Plan passt sich daran an. Alle 14\u00A0Tage prüft ein kurzer Test Wadenkraft, Halt des Gewölbes und Gleichgewicht, damit du siehst, ob sich etwas bewegt. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['pfDuration', 'calfRaises', 'heelPain'],
  crumb: 'Plantarfasziitis wird nicht besser',
  campaign: 'guide-plantar-fasciitis-not-getting-better-de',
};
