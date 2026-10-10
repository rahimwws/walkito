import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/heel-pain-after-walking.ts`, written around the
 * German queries «Fersenschmerzen nach dem Gehen», «Fersenschmerzen nach
 * Spaziergang», «Ferse tut nach dem Laufen weh». Informal «du», terminology and
 * exercise names as in `lib/guides/de.ts`. Figures, doses, grades and
 * qualifiers are identical to the English page. No new citations.
 */

export const HEEL_PAIN_AFTER_WALKING_DE: Guide = {
  lang: 'de',
  page: 'heelPainAfterWalking',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersenschmerzen nach dem Gehen: Gründe und Hilfe',
  description:
    'Fersenschmerzen nach dem Gehen oder Stehen: warum die Ferse nach einem langen Spaziergang wehtut, Ursachen, Warnzeichen und die hilfreichsten Übungen.',
  h1: 'Fersenschmerzen nach dem Gehen: warum deine Ferse wehtut und was du tun kannst',
  lede:
    'Beim Gehen war mit deiner Ferse alles in Ordnung, aber jetzt, wo du stehen geblieben bist, schmerzt sie. Oder der Schmerz kam mitten auf einem langen Spaziergang und wurde mit jedem Schritt schlimmer. Beide Muster deuten auf dasselbe hin: Das Gewebe unter deiner Ferse wurde an diesem Tag stärker belastet, als es verkraften konnte. Die häufigste Ursache ist Plantarfasziitis, und am nützlichsten sind Dehnen und schrittweises Wadentraining.',
  intro: [
    'Auf dieser Seite geht es um Fersenschmerzen, die beim oder nach dem Gehen auftreten. Wenn deine Ferse bei den allerersten Schritten am Morgen am meisten wehtut, findest du dieses Muster unter [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/). Wenn deine Füße schmerzen, weil du stundenlang an einer Stelle stehst, behandelt [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) die statische Belastung. Die drei überschneiden sich, aber jede Seite hat einen anderen Blickwinkel.',
  ],
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen beschreibt den Schmerz bei Plantarfasziitis als „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“, nennt aber auch Schmerz, der bei längerer Belastung im Stehen und Gehen zunimmt, als wichtiges Merkmal (Koc und Kollegen, 2023).',
    'In einer gematchten Fall-Kontroll-Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100\u00A0Kontrollen war eingeschränkte Dorsalflexion im Sprunggelenk (wie weit sich der Fuß Richtung Schienbein anziehen lässt) der stärkste unabhängige Risikofaktor, noch vor einem Body-Mass-Index über 30 und Stehen während des größten Teils des Arbeitstags (Riddle und Kollegen, 2003).',
    'Die Leitlinie gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, **A**, und dem Krafttraining ein **B** (Koc und Kollegen, 2023).',
    'Etwa 90\u00A0% der Menschen mit Plantarfasziitis geht es mit nicht-operativer Behandlung wie Dehnen, Wadentraining und Belastungssteuerung besser (Latt und Kollegen, 2020).',
    'Fersenschmerzen nach dem Gehen, die mit jeder Einheit zunehmen und in Ruhe nicht nachlassen, können eher auf einen Ermüdungsbruch als auf eine Plantarfasziitis hindeuten. Schmerz beim Zusammendrücken der Fersenseiten ist ein klinisches Zeichen dafür.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Warum tut die Ferse nach dem Gehen weh?',
      paragraphs: [
        'Gehen belastet die Plantarfaszie, das dicke Gewebeband unter dem Fuß, bei jedem Schritt. Jedes Mal, wenn die Ferse aufsetzt und der Fuß nach vorn abrollt, wird die Faszie gedehnt und fängt Kraft ab. Bei einem gesunden Fuß ist das kein Problem. Aber wenn die Faszie gereizt ist oder die Wade zu verkürzt ist, um ihren Anteil abzufangen, konzentriert sich die Last am Ansatz an der Ferse.',
        'Das Ergebnis ist ein Schmerz, der beim oder nach dem Gehen zunimmt, vor allem nach einem längeren Weg als sonst. Die Leitlinie von 2023 zu Fersenschmerzen nennt zwei typische Muster der Plantarfasziitis: Schmerz bei den ersten Schritten nach einer Ruhephase und Schmerz, der bei längerer Belastung zunimmt. Gehen ist die häufigste längere Belastung überhaupt.',
        'Eine verkürzte Wade spielt dabei eine große Rolle. In einer gematchten Fall-Kontroll-Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100\u00A0Kontrollen hatte eingeschränkte Dorsalflexion im Sprunggelenk die höchste Odds Ratio aller gemessenen Risikofaktoren. **Wenn sich das Sprunggelenk nicht weit genug beugen kann, muss die Faszie bei jedem Schritt den Unterschied ausgleichen.**',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Sind Fersenschmerzen nach dem Gehen immer Plantarfasziitis?',
      paragraphs: [
        'Plantarfasziitis ist die häufigste Ursache, aber nicht die einzige. Wo der Schmerz sitzt und wann er auftritt, hilft, die Ursachen auseinanderzuhalten:',
        {
          list: [
            '**Dünner werdendes Fersenpolster.** Das Fettpolster unter deinem Fersenbein dämpft jeden Schritt. Wenn es dünner wird oder sich verschiebt, bekommt der Knochen mehr Stöße direkt ab. Ein Scoping Review von 2022 stellte fest, dass Schmerz durch das Fersenpolster eher ein tiefer, dumpfer Schmerz mitten in der Ferse ist, schlimmer auf hartem Boden und barfuß (Chang und Kollegen, 2022). Der Schmerz bei Plantarfasziitis sitzt meist vorn an der Innenseite der Ferse, der Schmerz durch das Fersenpolster genau in der Mitte darunter. Wenn Barfußgehen auf Fliesen oder Beton deutlich schlimmer ist als Gehen in gedämpften Schuhen, kommt ein dünner werdendes Fersenpolster infrage. Mehr dazu unter [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/).',
            '**Achillessehnenentzündung.** Schmerz hinten an der Ferse oder in der Sehne darüber, nicht unter dem Fuß. Die Achillessehne kann nach einem langen Spaziergang wehtun, vor allem bergauf. Wenn dein Schmerz hinten an der Ferse sitzt und nicht darunter, lies [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
            '**Ermüdungsbruch des Fersenbeins.** Schmerz, der allmählich kommt, nach einer plötzlichen Steigerung von Gehstrecke oder Intensität. Anders als bei der Plantarfasziitis nimmt der Schmerz bei einem Ermüdungsbruch eher bei Belastung zu und lässt in Ruhe kaum nach. Das Zusammendrücken der Fersenseiten kann den Schmerz auslösen. Wenn das zu deinem Muster passt, geh zu einer medizinischen Fachperson, bevor du den Fuß trainierst.',
            '**Ausstrahlender Schmerz aus dem unteren Rücken oder ein eingeklemmter Nerv.** Fersenschmerzen mit Taubheit, Kribbeln oder Brennen können auf ein Nervenproblem hindeuten, nicht auf ein Belastungsproblem des Gewebes. Das ist ein Grund, zuerst zu einer medizinischen Fachperson zu gehen.',
          ],
        },
      ],
      cites: [CITE.fatPadReview, CITE.achillesGuideline, CITE.patelStressFracture],
    },
    {
      h2: 'Was unterscheidet Fersenschmerzen nach dem Gehen von Fersenschmerzen am Morgen?',
      paragraphs: [
        'Fersenschmerzen am Morgen und Fersenschmerzen nach dem Gehen sind in den meisten Fällen zwei Seiten derselben Erkrankung. Der Morgenschmerz entsteht, weil die Faszie über Nacht steif wird und sich verkürzt und dann beim Aufstehen plötzlich gedehnt wird. Der Schmerz nach dem Gehen entsteht, weil die Faszie beim Gehen immer wieder belastet wurde und das Gewebe dir zeigt, dass es genug hat.',
        'Der Unterschied ist wichtig für den Zeitpunkt deiner Übungen. Morgenschmerz spricht am besten auf eine Plantarfaszien-Dehnung vor dem ersten Schritt an. Schmerz nach dem Gehen spricht auf Belastungssteuerung an:',
        {
          list: [
            'Eine Strecke gehen, die der Fuß verkraftet.',
            'Diese Strecke schrittweise steigern.',
            'Mit Dehnen und Wadentraining die Belastungsgrenze anheben.',
          ],
        },
        '[Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) erklärt die Dehnungen am Morgen und Nachtschienen genauer.',
        'Wenn du sowohl Morgenschmerz als auch Schmerz nach dem Gehen hast, ist das das typische Muster der Plantarfasziitis. Die Übungen überschneiden sich. Die Dehnung am Morgen und die Wadendehnungen helfen bei beidem. Das Wadentraining erhöht die Belastbarkeit der ganzen Kette, sodass deine tägliche Gehbelastung innerhalb dessen liegt, was das Gewebe verkraftet.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Was unterscheidet sie von Fußschmerzen vom Stehen?',
      paragraphs: [
        'Stillstehen und Gehen sind unterschiedliche Belastungen. Beim Stehen ist dasselbe Gewebe einer konstanten, statischen Belastung ausgesetzt, ohne die Wadenpumpe, die beim Gehen arbeitet. Gehen wechselt zwischen Belastung und Entlastung. Das schont die Venen und das Fersenpolster, belastet aber die Faszie an ihrem Ansatz an der Ferse stärker, weil sie beim Abdrücken immer wieder gedehnt wird.',
        'Wenn deine Füße nach stundenlangem Stehen schmerzen, sich nach einem Spaziergang aber gut anfühlen, liegt das Problem eher an der Ermüdung durch das Stehen. [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) behandelt dieses Muster, auch Kompressionsstrümpfe und Bodenmatten, die hier weniger wichtig sind. Wenn gerade deine Ferse nach dem Gehen wehtut, aber nicht nach dem Stehen, liegt das Belastungsproblem am Ansatz der Faszie, und die Wadenübungen unten sind der Ausgangspunkt.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Welche Übungen helfen bei Fersenschmerzen nach dem Gehen?',
      keyFact: 'Eine systematische Übersichtsarbeit fand, dass sowohl das Dehnen der Plantarfaszie als auch das Dehnen der Wade den Schmerz bei Plantarfasziitis stärker verringerte als gar kein Dehnen (Siriphorn und Eksakulkla, 2020).',
      paragraphs: [
        'Die Übungen sind dieselben, die die Leitlinie von 2023 bei Plantarfasziitis empfiehlt. Die Leitlinie gibt dem Dehnen ihre beste Bewertung, **A**, und dem Krafttraining ein **B**. Beides wird empfohlen. Eine systematische Übersichtsarbeit fand, dass das Dehnen der Plantarfaszie und das Dehnen der Wade den Schmerz beide stärker verringerten als kein Dehnen (Siriphorn und Eksakulkla, 2020).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Bewertung A der Leitlinie. Die am häufigsten wiederholte Empfehlung in der Leitlinie von 2023.' },
          dose: '10-mal 10\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg einen Knöchel über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Mach das vor dem Aufstehen am Morgen, nach dem Sitzen und nach einem langen Spaziergang.',
          often: 'Jeden Morgen und nach längerer Belastung',
          feel: 'Eine Dehnung entlang des Gewölbes, kein stechender Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft zurück',
          alt: 'Eine sitzende Figur zieht die Zehen zurück, um das Gewölbe zu dehnen',
        },
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'strong', why: 'Bewertung A der Leitlinie. Zielt auf die verkürzte Wade, die in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor war.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Das hintere Bein bleibt gestreckt, die Ferse am Boden, die Hüfte nach vorn. Halte, bis du die Dehnung in der oberen Wade spürst.',
          often: 'Die meisten Einheiten und vor einem langen Spaziergang',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, nach vorn lehnen',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (Knie gebeugt)',
          evidence: { level: 'strong', why: 'Bewertung A der Leitlinie. Der Soleus, der tiefere Wadenmuskel, lässt nur mit gebeugtem Knie los.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand wie bei der Wadendehnung, dann beug das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse.',
          often: 'Nach der Dehnung mit gestrecktem Knie',
          feel: 'Eine Dehnung tiefer in der Wade, nahe der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis die Dehnung tiefer wandert',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Bewertung B der Leitlinie für Krafttraining. Eine Zwischenstufe auf dem Weg zum einbeinigen Training mit Zusatzgewicht.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last. Halt dich zum Gleichgewicht an einer Wand oder einem Geländer fest.',
          often: 'Krafttage, sobald Dehnen allein nicht mehr reicht',
          feel: 'Die Waden arbeiten zusammen',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_double',
          caption: 'Fersenheben: gerade hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch (einbeinig)',
          evidence: { level: 'strong', why: 'Die Übung aus der einzigen randomisierten Studie zu Fersenheben bei Plantarfasziitis (Rathleff 2015). Bewertung B der Leitlinie.' },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 12, jedes Bein. Das Studienprotokoll steigert auf 5\u00A0Sätze mit 8RM.',
          how: 'Stell dich mit einem Fuß auf eine Stufe, ein zusammengerolltes Handtuch liegt unter den Zehen. Drei Sekunden hoch, zwei Sekunden halten, drei Sekunden runter. Das Handtuch belastet die Plantarfaszie über den Windlass-Mechanismus.',
          often: 'Krafttage, sobald sich das beidbeinige Fersenheben zwei Einheiten lang leicht angefühlt hat',
          feel: 'Harte Arbeit in der Wade und ein Zug unter dem Gewölbe',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: langsames Tempo, Handtuch unter den Zehen',
          alt: 'Eine Figur kommt auf einer Stufe mit einem zusammengerollten Handtuch unter dem Fuß auf die Zehen',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.rathleff, CITE.riddle],
    },
    {
      h2: 'Wie weit solltest du gehen, wenn deine Ferse wehtut?',
      paragraphs: [
        'Das Ziel ist nicht, mit dem Gehen aufzuhören. Es geht darum, die Strecke zu finden, die deine Ferse verkraftet, ohne dass es am nächsten Morgen schlimmer wird, und von dort aus zu steigern.',
        'Ein praktischer Ansatz:',
        {
          list: [
            'Geh eine Strecke, bei der der Morgenschmerz am nächsten Tag bei oder unter deinem aktuellen Ausgangswert bleibt. Wenn dein üblicher Morgenwert 4 von 10 ist und ein Spaziergang von 30\u00A0Minuten ihn am nächsten Morgen auf 6 treibt, war dieser Spaziergang zu viel.',
            'Verkürze ihn, bis der Morgenwert stabil bleibt.',
            'Nimm dann alle ein, zwei Wochen fünf Minuten dazu, solange der Morgenschmerz nicht in die Höhe schießt.',
          ],
        },
        '**Das ist Belastungssteuerung, keine Schonung.** Völlige Ruhe hilft bei Plantarfasziitis selten. Die Leitlinie empfiehlt, die Aktivität anzupassen, nicht inaktiv zu sein. In stützenden Schuhen auf weicherem Untergrund zu gehen, schont die Faszie mehr als barfuß auf Beton.',
        'Wenn du auch läufst, gilt dasselbe Prinzip in einem anderen Maßstab. [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) erklärt Belastungsspitzen und Änderungen beim Trainingsumfang genauer.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wie lange dauert es, bis die Ferse nach dem Gehen nicht mehr wehtut?',
      keyFact: 'In Normdaten von 566\u00A0gesunden Erwachsenen lag die durchschnittliche Zahl beim einbeinigen Fersenheben bei etwa 23 bis 24\u00A0Wiederholungen, ein Richtwert, um die Wadenausdauer über die Zeit zu verfolgen (Hebert-Losier und Kollegen, 2017).',
      paragraphs: [
        'Es gibt keinen festen Zeitrahmen. Eine Übersichtsarbeit zu den klinischen Belegen berichtet, dass es etwa 90\u00A0% der Menschen mit Plantarfasziitis mit nicht-operativer Behandlung besser geht, oft innerhalb einiger Monate (Latt und Kollegen, 2020). In einer längeren Beobachtung von 174\u00A0Menschen hatte nach 5\u00A0Jahren etwa die Hälfte noch Beschwerden, die meisten davon aber nur noch leichte (Hansen und Kollegen, 2018).',
        'Früher messen kannst du, ob die Übungen wirken. Der Morgenschmerz auf einer Skala von 0 bis 10 ist das klarste Signal von Tag zu Tag.',
        'Die Wadenausdauer, gemessen durch Zählen der einbeinigen Fersenhebungen, zeigt die Kraftentwicklung über Wochen. Ein häufig zitierter Richtwert für Erwachsene liegt im Durchschnitt bei etwa 23 bis 24\u00A0Wiederholungen, aus Normdaten von 566\u00A0gesunden Erwachsenen (Hebert-Losier und Kollegen, 2017). **Entscheidend ist, ob deine Zahl steigt, nicht ob sie den Richtwert erreicht.**',
        'Mehr zum Zeitverlauf insgesamt findest du unter [wie lange Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.hebertLosier],
    },
  ],
  faq: [
    {
      q: 'Warum tut meine Ferse nach einem langen Spaziergang weh?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Die häufigste Ursache ist Plantarfasziitis. Jeder Schritt belastet die Plantarfaszie dort, wo sie am Fersenbein ansetzt. Ein langer Spaziergang verlangt dem Gewebe mehr ab als ein kurzer. Wenn die Wade verkürzt oder die Faszie schon gereizt ist, übersteigt die Last, was das Gewebe verkraftet, und es kommt zu Schmerzen. Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste unabhängige Risikofaktor.',
    },
    {
      q: 'Soll ich aufhören zu gehen, wenn meine Ferse wehtut?',
      cites: [CITE.guideline],
      a: 'Völlige Ruhe ist meist nicht nötig. Die Leitlinie von 2023 empfiehlt, die Aktivität anzupassen, nicht inaktiv zu sein. Geh eine Strecke, die deine Ferse verkraftet, ohne dass der nächste Morgen schlimmer wird. Verkürze die Strecke, wenn nötig, und steigere sie dann schrittweise wieder. Stützende Schuhe und ein weicherer Untergrund helfen.',
    },
    {
      q: 'Sind Fersenschmerzen nach dem Gehen eine Plantarfasziitis?',
      cites: [CITE.guideline, CITE.fatPadReview],
      a: 'Plantarfasziitis ist die häufigste Ursache, aber nicht die einzige. Der Schmerz bei Plantarfasziitis sitzt vorn an der Innenseite der Ferse und ist auch bei den ersten Schritten nach einer Ruhephase schlimmer. Ein dünner werdendes Fersenpolster macht einen tiefen Schmerz in der Mitte, schlimmer auf hartem Boden. Eine Achillessehnenentzündung tut hinten an der Ferse weh. Ein Ermüdungsbruch nimmt bei Belastung zu und kann auch in Ruhe wehtun. Wenn du unsicher bist, geh zu einer medizinischen Fachperson.',
    },
    {
      q: 'Was ist die beste Übung bei Fersenschmerzen nach dem Gehen?',
      cites: [CITE.guideline, CITE.siriphorn],
      a: 'Die Plantarfaszien-Dehnung und die Wadendehnungen haben in der Leitlinie von 2023 die höchste Bewertung (A). Eine Metaanalyse fand, dass beide den Schmerz stärker verringerten als kein Dehnen. Mach die Plantarfaszien-Dehnung nach einem Spaziergang und die Wadendehnungen an den meisten Tagen. Wadentraining (Bewertung B der Leitlinie) baut die Belastbarkeit auf, die die Kette für längere Spaziergänge braucht.',
    },
    {
      q: 'Brauche ich bei Fersenschmerzen nach dem Gehen ein Röntgenbild?',
      cites: [CITE.guideline],
      a: 'Meist nicht. Laut der Leitlinie von 2023 ist Bildgebung nicht nötig, wenn die klinische Untersuchung auf eine Plantarfasziitis hindeutet. Wenn der Schmerz nach mehreren Wochen Dehnen und Belastungssteuerung nicht besser geworden ist, schlimmer wird oder sich durch Zusammendrücken der Fersenseiten auslösen lässt (ein Zeichen für einen möglichen Ermüdungsbruch), wird Bildgebung sinnvoll.',
    },
    {
      q: 'Warum tut meine Ferse nach dem Stehen weh, aber nicht nach dem Gehen?',
      cites: [CITE.waters],
      a: 'Stehen belastet den Fuß statisch, ohne die Wadenpumpe, die beim Gehen arbeitet. Blut staut sich, das Fersenpolster wird zusammengedrückt und das Gewölbe ermüdet. Gehen wechselt zwischen Belastung und Entlastung, was die Venen schont. Wenn Stehen dein Auslöser ist, behandelt [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) dieses Muster, auch Kompressionsstrümpfe und Bodenmatten.',
    },
    {
      q: 'Woran erkenne ich, ob meine Fersenschmerzen ein Ermüdungsbruch sind?',
      cites: [CITE.patelStressFracture],
      a: 'Der Schmerz bei einem Ermüdungsbruch nimmt meist bei Belastung zu, begann nach einer plötzlichen Steigerung beim Gehen oder Laufen und lässt in Ruhe kaum nach. Das Zusammendrücken der Fersenseiten kann ihn auslösen. Der Schmerz bei Plantarfasziitis lässt meist nach, sobald du warm bist, und ist bei den ersten Schritten nach einer Ruhephase am stärksten. Wenn das Muster zu einem Bruch passt, geh zu einer medizinischen Fachperson, bevor du Übungen machst.',
    },
    {
      q: 'Was hilft sofort gegen Fersenschmerzen nach dem Gehen?',
      a: 'Direkt nach einem Spaziergang: Entlaste den Fuß, kühl die schmerzende Stelle kurz und geh nicht gleich wieder barfuß auf hartem Boden. Das lindert den akuten Schmerz, ändert aber nichts an der Ursache. Die Übungen auf dieser Seite, Waden- und Faszien-Dehnung plus schrittweises Krafttraining, verändern, wie die Ferse den nächsten Spaziergang verkraftet.',
    },
    {
      q: 'Warum tut nach dem Gehen nur eine Ferse weh?',
      a: 'Fersenschmerzen nach dem Gehen zeigen sich oft nur an einem Fuß, weil sich die Last beim Gehen selten gleichmäßig auf beide Beine verteilt. Ein längerer Schritt auf einer Seite, eine alte Verletzung, an einem Fuß abgelaufene Schuhe oder eine Tasche auf einer Schulter können eine Ferse zusätzlich belasten. Mit der Zeit können trotzdem beide Seiten Beschwerden bekommen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'das Zusammendrücken der Fersenseiten den Schmerz auslöst, was auf einen Ermüdungsbruch hindeuten kann',
      'die Fersenschmerzen mit jedem Spaziergang schlimmer werden, obwohl du die Strecke verkürzt hast',
      'Taubheit, Kribbeln oder Brennen dazukommen',
      'die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'beide Fersen wehtun und die Morgensteifigkeit länger als 30\u00A0Minuten anhält, vor allem wenn andere Gelenke betroffen sind',
      'der Schmerz dich nachts wach hält oder auch in Ruhe da ist',
      'es nach mehreren Wochen Dehnen, Wadentraining und Belastungssteuerung nicht besser geworden ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst dir die Übungen, die Dosis und den Zeitpunkt für die nächste Stufe nicht selbst überlegen. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Fersenschmerzen ist das erste Ziel ein Morgenschmerz bei oder unter 1 von 10 an 14\u00A0Tagen am Stück. Wenn du gestern mehr gegangen bist als sonst und der Morgenwert in die Höhe schießt, passt sich die Einheit automatisch an.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald das Morgenziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, ob das Training deine Belastungsgrenze beim Gehen anhebt.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn die Fersenschmerzen nach dem Gehen trotz der Übungen schlimmer werden, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fersenschmerzen nach dem Gehen',
  campaign: 'guide-heel-after-walking-de',
};
