import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/plantar-fasciitis-vs-stress-fracture.ts
 * (2026-10-18), written around «Plantarfasziitis oder Ermüdungsbruch» and
 * «Ermüdungsbruch Ferse». Informal «du», terminology and exercise names as in
 * `lib/guides/de.ts` and the other articles-de pages. Figures, doses, grades,
 * hedges and sources are identical to the English page after its fact-check.
 * Same CITE keys and media ids. Only addition: a km conversion next to the
 * 25 miles. The English link to heel-pain-runners has no German version, so
 * the link was removed and the words kept.
 */

export const PF_VS_STRESS_FRACTURE_DE: Guide = {
  lang: 'de',
  page: 'pfVsStressFracture',
  mainSource: CITE.patelStressFracture,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantarfasziitis oder Ermüdungsbruch: der Unterschied',
  description:
    'Plantarfasziitis oder Ermüdungsbruch der Ferse? Schmerzmuster, Squeeze-Test, Risiko, warum frühe Röntgenbilder Brüche übersehen und was du tun kannst.',
  h1: 'Plantarfasziitis oder Ermüdungsbruch der Ferse: so unterscheidest du beides',
  lede:
    'Eine [Plantarfasziitis](/de/plantarfasziitis/) tut bei den ersten Schritten nach einer Pause am meisten weh und lässt meist nach, wenn du ein paar Minuten gegangen bist. Bei einem Ermüdungsbruch des Fersenbeins ist es umgekehrt: Der Schmerz nimmt zu, je länger du gehst oder läufst, oft nach einer plötzlichen Steigerung der Aktivität, und Zusammendrücken der Fersenseiten tut meist weh (Tu, 2018). Ein frühes Röntgenbild kann normal aussehen: Bei 30\u00A0Rekruten mit einer Stressverletzung der Ferse im MRT war sie im normalen Röntgenbild nur bei 15\u00A0% zu sehen (Sormaala und Kollegen, 2006).',
  intro: [
    'Beide Erkrankungen sitzen in derselben Ferse und können nach demselben Auslöser beginnen: mehr Gehen, Laufen oder Stehen. Sie brauchen aber gegensätzliche Antworten. Eine Plantarfasziitis spricht gut auf Dehnungen und Krafttraining an, ein Ermüdungsbruch braucht zuerst weniger Belastung. Diese Seite vergleicht beides direkt, erklärt, was der Squeeze-Test aussagen kann und was nicht, wer ein höheres Risiko für einen Bruch hat, warum die Bildgebung oft ein MRT bedeutet und was du tun kannst, solange die Ursache noch nicht feststeht.',
  ],
  takeaways: [
    'Der Schmerz bei Plantarfasziitis ist laut Leitlinie „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ und lässt beim Gehen nach (Koc und Kollegen, 2023). Der Schmerz bei einem Ermüdungsbruch beginnt bei Aktivität und kann später auch in Ruhe da sein (Tu, 2018).',
    'Schmerz beim Zusammendrücken der Seiten des Fersenbeins spricht für einen Ermüdungsbruch (Tu, 2018). Wir haben aber keine Studie gefunden, die gemessen hat, wie zuverlässig der Squeeze-Test an der Ferse ist, und bei Kindern ist er auch bei Morbus Sever schmerzhaft.',
    'Normale Röntgenbilder übersehen frühe Ermüdungsbrüche oft: Laut einer Übersichtsarbeit liegt ihre Sensitivität beim ersten Termin bei etwa 10\u00A0% und steigt nach drei Wochen auf 30 bis 70\u00A0% (Patel und Kollegen, 2011). In einer systematischen Übersichtsarbeit von 2016 war das MRT die genaueste Untersuchung (Wright und Kollegen, 2016).',
    'Eine plötzliche Steigerung des Trainings ist der klassische Auslöser. Läuferinnen und Läufer mit mehr als 25\u00A0Meilen (rund 40\u00A0km) pro Woche, Frauen und Menschen mit geringer Energieverfügbarkeit oder schwachen Knochen haben ein höheres Risiko (Patel und Kollegen, 2011; Mountjoy und Kollegen, 2023).',
    'Dehnungen und Krafttraining haben bei Plantarfasziitis **Empfehlungsgrad A** und **B** (Koc und Kollegen, 2023). Bei Verdacht auf einen Bruch sind sie kein Plan: Dann braucht es zuerst weniger Belastung, und du solltest es ärztlich abklären lassen.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Wie unterscheidest du Plantarfasziitis von einem Ermüdungsbruch der Ferse?',
      keyFact: 'Der Schmerz bei einem Ermüdungsbruch des Fersenbeins beginnt meist nach einer Steigerung der Belastung im Stehen und Gehen oder einem Wechsel auf härteren Boden, tritt zuerst nur bei Aktivität auf und kann später auch in Ruhe auftreten (Tu, 2018).',
      paragraphs: [
        '**Der deutlichste Hinweis ist, was Gehen mit dem Schmerz macht.** Eine Plantarfasziitis ist bei den ersten Schritten nach dem Schlafen oder Sitzen am schlimmsten, lässt nach ein paar Minuten nach und kann nach einem langen Tag auf den Beinen zurückkommen (Tu, 2018). Die Leitlinie von 2023 zu Fersenschmerzen beschreibt sie als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ ist (Koc und Kollegen, 2023).',
        'Ein Ermüdungsbruch des Fersenbeins ist ein feiner Riss im Knochen durch wiederholte Belastung. Der Schmerz beginnt meist, nachdem du mehr gehst, läufst oder stehst oder auf einen härteren Boden wechselst. Anfangs tut es nur bei Aktivität weh, und der Schmerz nimmt dabei zu. Später kann es auch in Ruhe wehtun (Tu, 2018). In einer Übersichtsarbeit zu Ermüdungsbrüchen allgemein berichteten 81\u00A0% der Betroffenen von Schmerzen beim Gehen, 65,9 bis 100\u00A0% von einer druckempfindlichen Stelle am Knochen und 18 bis 44\u00A0% von einer Schwellung (Patel und Kollegen, 2011).',
        'Die Tabelle fasst die typischen Muster zusammen. Keine einzelne Zeile entscheidet, und manche Menschen passen in keine Spalte genau.',
      ],
      table: {
        caption: 'Typische Muster, keine Diagnose',
        head: ['', 'Plantarfasziitis', 'Ermüdungsbruch der Ferse'],
        rows: [
          ['Schlimmste Zeit', 'Erste Schritte nach einer Pause', 'Während und nach der Aktivität'],
          ['Nach ein paar Minuten Gehen', 'Lässt meist nach', 'Nimmt zu'],
          ['Wo es wehtut', 'Unter der Ferse, an der Innenseite', 'Quer über das Fersenbein, oft in der hinteren Hälfte'],
          ['Zusammendrücken der Fersenseiten', 'Meist nicht schmerzhaft', 'Oft schmerzhaft'],
          ['Schwellung', 'Kein übliches Zeichen', 'Manchmal'],
          ['Üblicher Auslöser', 'Langes Stehen, verkürzte Waden', 'Plötzlich mehr Training oder ein härterer Boden'],
          ['Frühes Röntgenbild', 'Nicht nötig', 'Oft normal'],
        ],
      },
      after: [
        'Schmerz, der vor allem nachts oder in Ruhe auftritt, hat eigene Ursachen, beschrieben unter [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/). Schmerz, der während eines Spaziergangs zunimmt, behandelt [Fersenschmerzen nach dem Gehen](/de/fersenschmerzen-nach-dem-gehen/).',
      ],
      sourceNote: 'Lage: In Sormaala 2006 lagen 19 von 34 Stressverletzungen des Fersenbeins im hinteren Teil des Knochens, 6 im mittleren und 9 im vorderen Teil. Die Zahlen zu Druckschmerz, Schmerz beim Gehen und Schwellung bei Patel 2011 gelten für Ermüdungsbrüche an allen Stellen, nicht nur an der Ferse.',
      cites: [CITE.tuHeelPain, CITE.guideline, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Was ist der Squeeze-Test, und wie viel sagt er aus?',
      paragraphs: [
        '**Beim Squeeze-Test werden Innen- und Außenseite des Fersenbeins zusammengedrückt, zwischen den Handflächen oder zwischen Daumen und Fingern.** Eine Ärztin oder ein Arzt macht das bei entspanntem Fuß. Schmerz beim Zusammendrücken „spricht für die Diagnose“ eines Ermüdungsbruchs des Fersenbeins, so eine Übersichtsarbeit von 2018 in American Family Physician (Tu, 2018). Eine Plantarfasziitis ist dagegen druckempfindlich, wenn du unten an der vorderen Innenseite der Ferse drückst, dort, wo die Faszie ansetzt.',
        'Der Test hat aber klare Grenzen:',
        {
          list: [
            '**Niemand hat gemessen, wie zuverlässig er an der Ferse ist.** Wir haben keine Studie gefunden, die angibt, wie oft der Squeeze-Test bei Menschen mit einem bestätigten Ermüdungsbruch des Fersenbeins positiv ist oder wie oft er ohne Bruch positiv ist. Dieselbe Übersichtsarbeit zu Ermüdungsbrüchen merkt an, dass auch der Hüpftest, ein anderer häufiger Test in der Praxis, nicht validiert ist (Patel und Kollegen, 2011).',
            '**Ein schmerzfreier Squeeze-Test schließt einen Bruch nicht aus.** Manche Stressverletzungen der Ferse liegen eher im vorderen oder mittleren Teil des Knochens: In einer MRT-Studie lagen 15 von 34 nicht im hinteren Teil (Sormaala und Kollegen, 2006).',
            '**Auch anderes tut beim Zusammendrücken weh.** Bei Kindern und jungen Jugendlichen ist ein schmerzhafter Squeeze-Test ein häufiges Zeichen für [Morbus Sever](/de/morbus-sever/), eine Reizung der Wachstumsfuge (Tu, 2018). Auch andere Probleme am Fersenbein können wehtun. Deshalb gehört das in ärztliche Hände.',
          ],
        },
        'Wenn du die Seiten deiner eigenen Ferse zusammendrückst und es wehtut, nimm das als Grund, es ärztlich abklären zu lassen, nicht als Diagnose. Hüpf nicht auf dem Fuß, um es zu testen.',
      ],
      cites: [CITE.tuHeelPain, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Wer hat ein höheres Risiko für einen Ermüdungsbruch der Ferse?',
      keyFact: 'Freizeitläuferinnen und Freizeitläufer mit durchschnittlich mehr als 25\u00A0Meilen (rund 40\u00A0km) pro Woche haben ein höheres Risiko für Ermüdungsbrüche, und Frauen haben ein höheres Risiko als Männer (Patel und Kollegen, 2011).',
      paragraphs: [
        'Ein Ermüdungsbruch entsteht, wenn der Knochen mehr wiederholte Belastung abbekommt, als er reparieren kann. Das Risiko steigt, wenn die Belastung zunimmt, wenn der Knochen sie schlechter verträgt, oder beides (Warden und Kollegen, 2014).',
        {
          list: [
            '**Eine plötzliche Steigerung des Trainings.** Deutlich mehr Gehen, Laufen, Marschieren oder Stehen oder wiederholt harte Einheiten mit wenig Pause sind die klassische Vorgeschichte (Patel und Kollegen, 2011). Ein Wechsel auf einen härteren Untergrund ist an der Ferse ein häufiger Auslöser (Tu, 2018).',
            '**Viele Laufkilometer.** Freizeitläuferinnen und Freizeitläufer mit durchschnittlich mehr als 25\u00A0Meilen (rund 40\u00A0km) pro Woche haben ein höheres Risiko, ebenso Sportlerinnen und Sportler in Leichtathletik, Basketball, Fußball und Tanz (Patel und Kollegen, 2011).',
            '**Geringe Energieverfügbarkeit.** Zu wenig zu essen für das eigene Trainingspensum kann Hormone und Knochen beeinträchtigen. Das Internationale Olympische Komitee zählt eine schlechte Knochengesundheit, einschließlich Knochenstressverletzungen, zu den Folgen dieses Musters, das relatives Energiedefizit im Sport (REDs) heißt, bei Frauen wie bei Männern (Mountjoy und Kollegen, 2023).',
            '**Knochengesundheit.** Frauen mit der Triade der Sportlerin (gestörtes Essverhalten, ausbleibende Periode und geringe Knochendichte) haben ein höheres Risiko, und eine Studie fand niedrigere Vitamin-D-Werte bei Rekruten mit Ermüdungsbrüchen (Patel und Kollegen, 2011). Ein durch Osteoporose geschwächter Knochen kann schon bei normaler Belastung brechen. Das nennt man Insuffizienzfraktur.',
            '**Weibliches Geschlecht.** Frauen haben ein höheres Risiko als Männer, vor allem in der militärischen Ausbildung, auch wenn die Daten bei Sportlerinnen uneinheitlich sind (Patel und Kollegen, 2011).',
          ],
        },
        'Die Plantarfasziitis hat ein anderes Risikoprofil. In einer Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne hatten Menschen mit 0\u00A0Grad Beweglichkeit im Sprunggelenk nach oben (Dorsalflexion) oder weniger eine 23,3-fache Chance gegenüber Menschen mit mehr als 10\u00A0Grad, und Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache (Riddle und Kollegen, 2003).',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.wardenBSI, CITE.mountjoyREDs, CITE.riddle],
    },
    {
      h2: 'Warum kann ein Röntgenbild bei einem Ermüdungsbruch normal aussehen?',
      keyFact: 'Bei 30\u00A0Rekruten, deren MRT eine Stressverletzung der Ferse zeigte, war die Verletzung im normalen Röntgenbild nur bei 15\u00A0% zu sehen (Sormaala und Kollegen, 2006).',
      paragraphs: [
        '**Ein früher Ermüdungsbruch ist oft zu klein für ein Röntgenbild.** Der Knochen reagiert zuerst mit einem Ödem, einer Schwellung in seinem Inneren, die das Röntgenbild nicht zeigt. Zeichen der Reparatur werden erst später sichtbar. Laut einer Übersichtsarbeit liegt die Sensitivität von Röntgenbildern beim ersten Termin bei etwa 10\u00A0% und steigt nach drei Wochen auf 30 bis 70\u00A0% (Patel und Kollegen, 2011).',
        'Speziell zur Ferse hat eine finnische Studie Rekruten mit belastungsbedingten Schmerzen an Ferse oder Sprunggelenk untersucht, die ein MRT bekamen. Von 30\u00A0Rekruten mit Stressverletzungen der Ferse hatten nur 15\u00A0% eine sichtbare Verletzung im normalen Röntgenbild. Bei 22 der 34 betroffenen Fersen waren auch benachbarte Fußknochen beteiligt (Sormaala und Kollegen, 2006).',
        'Eine systematische Übersichtsarbeit von 2016 zu Ermüdungsbrüchen an den Beinen fand für Röntgenbilder eine Sensitivität von 12 bis 56\u00A0%, für das MRT von 68 bis 99\u00A0%. Die Autoren nannten das MRT die sensitivste und spezifischste Untersuchung und warnten, dass Röntgenbilder früh wahrscheinlich falsch negative Ergebnisse liefern (Wright und Kollegen, 2016).',
        'Bei Verdacht auf einen Bruch kann die Ärztin oder der Arzt das Röntgenbild nach zwei bis drei Wochen wiederholen oder direkt ein MRT veranlassen, wenn eine schnelle Antwort wichtig ist (Patel und Kollegen, 2011). Zur Plantarfasziitis sagt die Leitlinie von 2023, dass Bildgebung „meist nicht angezeigt ist bei Patientinnen und Patienten, die die Kriterien der klinischen Untersuchung für eine Plantarfasziitis erfüllen, solange konservative Maßnahmen nicht gescheitert sind“ (Koc und Kollegen, 2023). Die Seite [Plantarfasziitis oder Fersensporn](/de/fersensporn-uebungen/) erklärt, warum auch ein Sporn im Röntgenbild die Frage nicht klärt.',
      ],
      sourceNote: 'Wright 2016 hat Ermüdungsbrüche an den Beinen insgesamt zusammengefasst, nicht nur an der Ferse. Die Spannen sind die niedrigste und höchste Sensitivität aus den eingeschlossenen Studien, keine gepoolten Schätzwerte.',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture, CITE.wrightImaging, CITE.guideline],
    },
    {
      h2: 'Was solltest du tun, solange die Ursache noch nicht feststeht?',
      keyFact: 'Eine Anpassung der Aktivität, bei starken Schmerzen mit wenig bis gar keiner Belastung des Fußes für bis zu sechs Wochen, führt bei Ermüdungsbrüchen des Fersenbeins meist zum Erfolg (Tu, 2018).',
      paragraphs: [
        '**Wenn dein Schmerz zur Spalte Ermüdungsbruch passt, nimm Last von der Ferse und mach einen Termin in der Praxis.** Warte nicht ab, ob sich das nach ein paar weiteren Läufen legt. Ein früher Beginn der Behandlung zählt: Eine Übersichtsarbeit merkt an, dass eine Verzögerung mit einer längeren Rückkehr zur Aktivität in Verbindung gebracht wurde (Patel und Kollegen, 2011).',
        {
          list: [
            '**Reduziere die Belastung auf das, was schmerzfrei geht.** Das heißt meist, vorerst mit Laufen, Springen und langen Spaziergängen aufzuhören. Manche brauchen eine Zeit lang Unterarmgehstützen oder einen Walker-Stiefel (Patel und Kollegen, 2011; Tu, 2018).',
            '**Bleib fit, ohne die Ferse zu belasten,** zum Beispiel mit Schwimmen oder Radfahren, wenn das nicht wehtut (Patel und Kollegen, 2011).',
            '**Frag nach Schmerzmitteln.** Dieselbe Übersichtsarbeit sagt, dass entzündungshemmende Mittel bei einem Ermüdungsbruch mit Vorsicht eingesetzt werden sollten, weil einige Tierstudien darauf hindeuten, dass sie die Reparatur des Knochens verlangsamen könnten (Patel und Kollegen, 2011).',
            '**Fang noch kein Dehn- oder Kraftprogramm für die Ferse an.** Warte, bis eine Ärztin oder ein Arzt einen Bruch ausgeschlossen oder dir grünes Licht gegeben hat.',
          ],
        },
        'Ermüdungsbrüche der Ferse erholen sich bei sonst gesunden Menschen meist gut (Tu, 2018). Bei Ermüdungsbrüchen allgemein dauert die Erholung vier Wochen bis drei Monate oder länger, gerechnet ab dem Zeitpunkt, an dem die Aktivität reduziert wird. Danach wird die Aktivität langsam wieder aufgebaut, sobald du schmerzfrei bist (Patel und Kollegen, 2011).',
        'Wenn dein Schmerz dagegen zur Spalte Plantarfasziitis passt, brauchst du meist keine Bildgebung, um mit den Übungen unten anzufangen (Koc und Kollegen, 2023). Wenn du nicht sicher bist, in welche Spalte du gehörst, lass es zuerst ärztlich abklären.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Warum sind Übungsprogramme für Plantarfasziitis gedacht und nicht für einen Bruch?',
      paragraphs: [
        '**Dehnen und Belasten helfen bei Plantarfasziitis, weil sich das Gewebe an Belastung anpasst. Ein angebrochener Knochen braucht zuerst weniger Belastung.** Knochenstressverletzungen liegen auf einer Skala: Eine Stressreaktion kann zu einem Ermüdungsbruch fortschreiten und bei weiterer Belastung zu einem vollständigen Bruch (Warden und Kollegen, 2014).',
        'Die Belege für Übungen gelten speziell für die Plantarfasziitis. Die Leitlinie von 2023 zu Fersenschmerzen gibt dort der Dehnung von Plantarfaszie und Wade **Empfehlungsgrad A** und dem Krafttraining **B** (Koc und Kollegen, 2023). Das Programm mit Fersenheben aus der bekanntesten Studie wurde an 48\u00A0Menschen mit Plantarfasziitis getestet, nicht an Menschen mit einem Bruch (Rathleff und Kollegen, 2015).',
        'Bei Ermüdungsbrüchen zeigen die Belege in die andere Richtung. Zwei cluster-randomisierte Studien fanden, dass Dehnungen der Beine beim Aufwärmen Ermüdungsbrüche nicht verhinderten (Patel und Kollegen, 2011). Was zählt, ist weniger Belastung und danach eine schrittweise Rückkehr unter ärztlicher Begleitung. Wenn sich ein Bruch erholt hat, wird die Kräftigung der Muskeln um den Knochen ein Teil davon, den nächsten zu verhindern (Warden und Kollegen, 2014).',
        'Deshalb sind die Übungen auf dieser Seite nur für Plantarfasziitis gedacht. Wenn bei dir ein Ermüdungsbruch festgestellt wurde, folge stattdessen dem Plan deiner Ärztin oder deines Arztes für die Rückkehr zur Aktivität.',
      ],
      cites: [CITE.wardenBSI, CITE.guideline, CITE.rathleff, CITE.patelStressFracture],
    },
    {
      h2: 'Nur bei Plantarfasziitis: Welche Übungen passen, wenn ein Bruch ausgeschlossen ist?',
      paragraphs: [
        '**Mach diese Übungen nur, wenn dein Schmerz zu einer Plantarfasziitis passt oder eine Ärztin oder ein Arzt einen Bruch ausgeschlossen hat.** Wenn Zusammendrücken der Ferse wehtut, der Schmerz mit jedem Spaziergang zunimmt oder die Ferse geschwollen ist, lass sie weg und lass es zuerst ärztlich abklären.',
        'Das sind die ersten Schritte aus unserem Ratgeber [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/): zuerst Dehnungen, dann Fersenheben im Sitzen, das die Ferse kaum belastet. Die ganze Steigerung bis zum Fersenheben mit Handtuch aus der Studie findest du dort.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung (nur bei Plantarfasziitis)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad. Nicht bei Verdacht auf einen Bruch.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Schmerz im Fersenbein selbst oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (nur bei Plantarfasziitis)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad. Nicht bei Verdacht auf einen Bruch.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse. Deshalb zählt diese Dehnung, auch wenn du sie weiter oben spürst.',
          stop: 'Schmerz im Fersenbein selbst oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (nur bei Plantarfasziitis)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad. Nicht bei Verdacht auf einen Bruch.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Schmerz im Fersenbein selbst oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen (nur bei Plantarfasziitis)',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining bei Plantarfasziitis mit B. Diese Stufe wurde nicht allein getestet. Nicht bei Verdacht auf einen Bruch.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: '3\u00A0Tage pro Woche, nie zwei Tage hintereinander',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, der tiefere Wadenmuskel, und die Ferse wird kaum belastet.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Woran erkenne ich, ob mein Fersenschmerz ein Ermüdungsbruch oder eine Plantarfasziitis ist?',
      cites: [CITE.tuHeelPain, CITE.guideline],
      a: 'Achte darauf, was Gehen mit dem Schmerz macht. Eine Plantarfasziitis tut bei den ersten Schritten nach einer Pause am meisten weh und lässt nach ein paar Minuten nach. Ein Ermüdungsbruch der Ferse folgt meist auf eine plötzliche Steigerung der Aktivität, nimmt zu, je länger du gehst oder läufst, und tut oft weh, wenn die Seiten der Ferse zusammengedrückt werden. Wenn dein Schmerz zum Muster eines Bruchs passt, lass es ärztlich abklären.',
    },
    {
      q: 'Kann ein Röntgenbild einen Ermüdungsbruch der Ferse übersehen?',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture],
      a: 'Ja, oft. Bei 30\u00A0Rekruten mit einer Stressverletzung der Ferse im MRT zeigte das normale Röntgenbild sie nur bei 15\u00A0%. Laut einer Übersichtsarbeit liegt die Sensitivität von Röntgenbildern beim ersten Termin bei etwa 10\u00A0% und steigt nach drei Wochen auf 30 bis 70\u00A0%. Ein normales frühes Röntgenbild schließt einen Ermüdungsbruch nicht aus.',
    },
    {
      q: 'Brauche ich bei Fersenschmerzen ein MRT?',
      cites: [CITE.guideline, CITE.wrightImaging],
      a: 'Bei einer typischen Plantarfasziitis nicht: Laut der Leitlinie von 2023 ist Bildgebung meist nicht nötig, wenn die Untersuchung passt. Wenn eine Ärztin oder ein Arzt einen Ermüdungsbruch vermutet, ist das MRT die genaueste Untersuchung. Eine systematische Übersichtsarbeit von 2016 fand für das MRT eine Sensitivität von 68 bis 99\u00A0%, für normale Röntgenbilder von 12 bis 56\u00A0%.',
    },
    {
      q: 'Was bedeutet ein positiver Squeeze-Test?',
      cites: [CITE.tuHeelPain],
      a: 'Schmerz, wenn Innen- und Außenseite des Fersenbeins zusammengedrückt werden, spricht für einen Ermüdungsbruch des Fersenbeins oder bei Kindern für Morbus Sever. Das ist ein Grund, es ärztlich abklären zu lassen, keine Diagnose. Wir haben keine Studie gefunden, die gemessen hat, wie zuverlässig der Squeeze-Test bei Ermüdungsbrüchen der Ferse ist. Ein schmerzfreier Test schließt also keinen aus.',
    },
    {
      q: 'Kann man mit einem Ermüdungsbruch der Ferse gehen?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Vielleicht kannst du es, aber du solltest den Fuß meist nicht weiter belasten. Die Behandlung heißt, die Aktivität auf das zu reduzieren, was schmerzfrei geht, und bei starken Schmerzen den Fuß bis zu sechs Wochen wenig bis gar nicht zu belasten, manchmal mit Unterarmgehstützen oder einem Walker-Stiefel. Wie viel Gehen sicher ist, sollte deine Ärztin oder dein Arzt festlegen.',
    },
    {
      q: 'Wie lange dauert es, bis ein Ermüdungsbruch der Ferse besser wird?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Bei Ermüdungsbrüchen allgemein dauert die Erholung vier Wochen bis drei Monate oder länger, gerechnet ab dem Zeitpunkt, an dem die Aktivität reduziert wird. Ermüdungsbrüche der Ferse erholen sich bei sonst gesunden Menschen meist gut. Danach wird die Aktivität schrittweise wieder aufgebaut, sobald du schmerzfrei bist. Zum Zeitverlauf bei Plantarfasziitis siehe [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
    },
    {
      q: 'Soll ich dehnen, wenn ich vielleicht einen Ermüdungsbruch habe?',
      cites: [CITE.patelStressFracture, CITE.guideline],
      a: 'Nein, nicht bevor eine Ärztin oder ein Arzt einen Bruch ausgeschlossen hat. Dehnen und Krafttraining haben bei Plantarfasziitis Empfehlungsgrad A und B, aber ein Verdacht auf einen Bruch braucht zuerst weniger Belastung. Zwei cluster-randomisierte Studien fanden, dass Dehnungen der Beine beim Aufwärmen Ermüdungsbrüche nicht verhinderten. Dehnen ist also nicht das Mittel für den Knochen.',
    },
    {
      q: 'Kann aus einer Plantarfasziitis ein Ermüdungsbruch werden?',
      cites: [CITE.wardenBSI],
      a: 'Keine Studie zeigt, dass aus einer Plantarfasziitis ein Bruch wird. Es sind verschiedene Verletzungen, eine an der Faszie und eine am Knochen. Sie können denselben Auslöser haben, etwa eine plötzliche Steigerung beim Gehen oder Laufen, und eine Stressreaktion des Knochens kann bei weiterer Belastung zu einem Bruch fortschreiten. Wenn sich das Schmerzmuster verändert, lass es abklären.',
    },
    {
      q: 'Wer bekommt Ermüdungsbrüche der Ferse?',
      cites: [CITE.patelStressFracture, CITE.mountjoyREDs],
      a: 'Vor allem Menschen, die plötzlich mehr trainieren: Läuferinnen und Läufer, Rekruten und Sportlerinnen und Sportler. Wer im Schnitt mehr als 25\u00A0Meilen (rund 40\u00A0km) pro Woche läuft, hat ein höheres Risiko, Frauen mehr als Männer. Geringe Energieverfügbarkeit, eine ausbleibende Periode und geringe Knochendichte erhöhen das Risiko, und eine Studie fand niedrigere Vitamin-D-Werte bei Rekruten mit Ermüdungsbrüchen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Fersenschmerz zunimmt, je länger du gehst oder läufst, statt nachzulassen',
      'Zusammendrücken der Seiten des Fersenbeins wehtut',
      'die Ferse geschwollen ist oder einen Bluterguss hat oder eine Stelle am Knochen sehr druckempfindlich ist',
      'der Schmerz nach einer plötzlichen Steigerung des Trainings oder einem Wechsel auf härteren Boden begann',
      'es in Ruhe wehtut oder dich nachts weckt',
      'du schon einmal einen Ermüdungsbruch hattest, deine Periode ausbleibt oder ausgeblieben ist oder du eine Essstörung oder eine geringe Knochendichte hast',
      'du den Fuß nicht voll belasten kannst oder der Schmerz nach einem Sturz oder Umknicken begann',
      'du Brennen, Kribbeln oder Taubheit in der Ferse oder Fußsohle spürst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Fersen- und Fußschmerzen. Ihr Plan ist für Fersenschmerzen vom Typ Plantarfasziitis gebaut, nicht für einen Ermüdungsbruch. Wenn dein Schmerz zum Muster eines Bruchs passt, lass es deshalb ärztlich abklären, bevor du anfängst.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deinen Fersenschmerz am Morgen, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['heelPainAtNight', 'hubPlantarFasciitis', 'heelPainAfterWalking'],
  crumb: 'Plantarfasziitis oder Ermüdungsbruch',
  campaign: 'guide-plantar-fasciitis-vs-stress-fracture-de',
};
