import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/plantar-fasciitis-flare-up.ts (2026-10-19),
 * written around «Plantarfasziitis Schub», «Plantarfasziitis wieder schlimmer»
 * and «Fersenschmerzen plötzlich schlimmer». "Flare-up" is rendered as «Schub»
 * (akute Verschlimmerung). Informal «du», terminology and exercise names as in
 * `lib/guides/de.ts` and the other articles-de pages. Figures, grades, hedges
 * and sources are identical to the English page after its fact-check. Same
 * CITE keys and media ids. Links to /heel-pain-runners/ and
 * /foot-pain-identifier/ removed (no German version), the words kept as plain
 * text.
 */

export const PF_FLARE_UP_DE: Guide = {
  lang: 'de',
  page: 'pfFlareUp',
  mainSource: CITE.guideline,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Plantarfasziitis-Schub: Auslöser und die ersten 48 Stunden',
  description:
    'Plantarfasziitis plötzlich schlimmer? Typische Auslöser, was in den ersten 48 Stunden hilft, wie du die Übungen neu aufbaust und wann es kein Schub ist.',
  h1: 'Plantarfasziitis-Schub: was ihn auslöst und was du in den ersten 48 Stunden tun kannst',
  lede:
    'Ein Schub der [Plantarfasziitis](/de/plantarfasziitis/) folgt meist auf einen plötzlichen Anstieg dessen, was deine Ferse tragen muss: ein langer Spaziergang, ein Tag im Stehen auf harten Böden oder eine neue Routine. Die Leitlinie von 2023 zu Fersenschmerzen nennt Schmerz nach einer kürzlichen Steigerung der Belastung im Stehen und Gehen als typisches Merkmal. Sie empfiehlt eine Beratung zur Anpassung der Belastung und rät nicht zum Aufhören, eine Empfehlung, die sie mit **E** bewertet, weil sie auf Theorie beruht, nicht auf Studien (Koc und Kollegen, 2023). In den ersten 48\u00A0Stunden: Fahr die Belastung zurück, die den Schub ausgelöst hat, behalt deine sanften Dehnungen bei und lass dir vom nächsten Morgen sagen, wie es läuft.',
  intro: [
    'Keine Studie hat einen Schub der Plantarfasziitis definiert oder getestet, was in den ersten zwei Tagen zu tun ist. Diese Seite nutzt deshalb die am nächsten liegenden getesteten Regeln und sagt, woher sie stammen. Es geht um die häufigen Auslöser, einen kurzen Plan für die ersten 48\u00A0Stunden, wie du deine Übungen eine Stufe zurücknimmst und wieder aufbaust, und um die Zeichen, dass der Schmerz etwas anderes ist als ein Schub. Wenn deine Ferse bei den ersten Schritten des Tages am meisten wehtut, erklärt [Fersenschmerzen morgens](/de/fersenschmerzen-morgens/) dieses Muster für sich.',
  ],
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen nennt Fersenschmerz nach einer kürzlichen Steigerung der Belastung im Stehen und Gehen als typisches Merkmal der Plantarfasziitis und empfiehlt mit Empfehlungsgrad **E** eine Beratung zur Anpassung der Belastung, ohne zu völliger Ruhe zu raten (Koc und Kollegen, 2023).',
    'In einer Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne waren ein steifes Sprunggelenk (23,3-fache Chance), ein BMI über 30 (5,6-fach) und Stehen während des größten Teils des Arbeitstags (3,6-fach) Risikofaktoren. Diese Studie hat untersucht, wer eine Plantarfasziitis bekommt, nicht Schübe (Riddle und Kollegen, 2003).',
    'Eine Regel zum Schmerz-Monitoring erlaubt bei Belastung Schmerz bis etwa 5 von 10, solange er bis zum nächsten Morgen abklingt. Getestet wurde sie bei 38\u00A0Personen mit Achillessehnenschmerzen, nicht bei Plantarfasziitis (Silbernagel und Kollegen, 2007).',
    'Die Leitlinie gibt keine Empfehlung zu Kälte oder Wärme. Eis ist also höchstens ein Mittel fürs Wohlgefühl, und keine Studie zeigt, dass es einen Schub beruhigt (Koc und Kollegen, 2023).',
    'In einer Studie mit 180\u00A0Erwachsenen ging der Rat, Aktivitäten zurückzufahren, die Schübe auslösen, und dann langsam zurückzukehren, zusammen mit einer Fersenschale mit einer klinisch bedeutsamen Besserung nach etwa drei Monaten einher (Riel und Kollegen, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist ein Schub der Plantarfasziitis?',
      paragraphs: [
        '**Ein Schub ist eine Phase von Tagen, in denen deine gewohnten Fersenschmerzen deutlich schlimmer sind als sonst.** Die ersten Schritte am Morgen tun mehr weh, die Ferse schmerzt früher, wenn du auf den Beinen bist, oder ein Schmerz, der schon abgeklungen war, kommt zurück. Es gibt keine anerkannte medizinische Definition, und wir haben keine Studie gefunden, die zählt, wie oft Schübe vorkommen oder wie lange sie dauern.',
        'Das Gewebe unter der Ferse mag keine plötzlichen Änderungen der Belastung. Die Leitlinie von 2023 beschreibt den Schmerz der Plantarfasziitis als am deutlichsten bei den ersten Schritten nach einer Pause und nennt eine kürzliche Steigerung der Belastung im Stehen und Gehen als typischen Teil der Vorgeschichte (Koc und Kollegen, 2023). Ein Schub ist wahrscheinlich dasselbe im Kleinen: Die Ferse musste mehr leisten, als sie schon verkraften konnte.',
        'Deshalb muss ein Schub nicht heißen, dass du wieder ganz von vorn anfängst. Bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wird es mit Versorgung ohne Operation besser, auch wenn es oft Monate dauert (Latt und Kollegen, 2020). Was die langen Nachbeobachtungen zeigen, steht unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Was löst einen Schub der Plantarfasziitis aus?',
      keyFact: 'Stehen während des größten Teils des Arbeitstags ging mit einer 3,6-fachen Chance auf eine Plantarfasziitis einher und ein steifes Sprunggelenk mit einer 23,3-fachen, in einer Studie mit 50\u00A0Fällen und 100\u00A0Kontrollpersonen (Riddle und Kollegen, 2003).',
      paragraphs: [
        '**Der gemeinsame Nenner ist eine plötzliche Änderung der Belastung.** Keine Studie hat verfolgt, was bei Menschen, die schon eine Plantarfasziitis haben, Schübe auslöst. Es gibt Forschung dazu, warum Menschen sie überhaupt bekommen, und die zeigt in dieselbe Richtung:',
        {
          list: [
            '**Ein plötzlicher Anstieg der Aktivität.** Ein Urlaub mit langen Tagen zu Fuß, ein neuer Laufplan, eine Wanderung oder eine volle Woche bei der Arbeit. Die Leitlinie nennt eine kürzliche Steigerung der Belastung im Stehen und Gehen als typisch (Koc und Kollegen, 2023). Wenn du läufst, achte besonders auf Änderungen deines Laufumfangs.',
            '**Lange Stunden im Stehen.** In einer Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne ging Stehen während des größten Teils des Arbeitstags mit einer 3,6-fachen Chance einher (Riddle und Kollegen, 2003). In einer anderen waren Menschen mit Fersenschmerzen genauso aktiv wie Menschen ohne, standen aber 3,4\u00A0Stunden pro Tag länger (Landorf und Kollegen, 2023). Siehe [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/).',
            '**Barfuß auf harten Böden.** Die Leitlinie nennt Arbeit im Stehen auf schlecht dämpfenden Böden als Risikofaktor (Koc und Kollegen, 2023), allerdings fand eine Studie, dass Menschen mit Fersenschmerzen nicht häufiger auf harten Böden standen als Menschen ohne (Landorf und Kollegen, 2023). Ein Best-Practice-Leitfaden von 2021 rät, Barfußgehen und flache Schuhe ohne Halt zu meiden, bis die Beschwerden weg sind (Morrissey und Kollegen, 2021).',
            '**Neue oder andere Schuhe.** Wir haben keine Studie gefunden, die neue Schuhe als Auslöser getestet hat. Bekannt ist: Menschen mit Fersenschmerzen trugen Schuhe mit härteren Absätzen als Menschen ohne (Landorf und Kollegen, 2023), und der Best-Practice-Leitfaden bevorzugt stützende Schuhe, bei denen die Ferse etwas höher liegt als die Zehen (Morrissey und Kollegen, 2021). Ein Wechsel zu flachen, dünnen oder sehr weichen Schuhen oder zu [Barfußschuhen](/de/barfussschuhe/) ist eine Änderung, die deine Ferse bemerkt.',
            '**Eine verkürzte Wade.** In derselben Studie von 2003 hatten Menschen, deren Sprunggelenk sich um 0\u00A0Grad oder weniger nach oben beugen ließ, eine 23,3-fach höhere Chance als Menschen mit mehr als 10\u00A0Grad (Riddle und Kollegen, 2003). Wenn du deine Dehnungen eine Weile auslässt, kann diese Steifigkeit zurückkommen. Siehe [verspannte Waden](/de/verspannte-waden/).',
          ],
        },
        'Auch das Körpergewicht ist ein Risikofaktor: Ein BMI über 30 ging in der Studie von 2003 mit einer 5,6-fachen Chance einher. Gewicht ändert sich langsam, es ist also eher ein Hintergrundfaktor als der Auslöser für einen Schub in dieser Woche. Mehr unter [Gewicht und Plantarfasziitis](/de/gewicht-und-plantarfasziitis/).',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.landorfFootwear, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Was solltest du in den ersten 48 Stunden eines Schubs tun?',
      keyFact: 'In einer Studie mit 180\u00A0Erwachsenen besserte sich die Gruppe, die nur den Rat, Aktivitäten zurückzufahren, die Schübe auslösen, und langsam zurückzukehren, sowie eine Fersenschale bekam, nach etwa drei Monaten um ein klinisch bedeutsames Maß (Riel und Kollegen, 2023).',
      paragraphs: [
        '**Fahr die Belastung zurück, bleib sanft in Bewegung und beurteile es am nächsten Morgen.** Keine Studie hat einen 48-Stunden-Plan bei Plantarfasziitis getestet. Die Schritte unten setzen die Leitlinie und den am nächsten liegenden getesteten Rat in die Praxis um:',
        {
          list: [
            '**Finde den Auslöser und reduziere ihn.** Kürzere Spaziergänge, mehr Pausen im Sitzen, eine Pause vom Laufen oder von Steigungen. Der in einer dänischen Studie getestete Rat lautete, Aktivitäten zurückzufahren, die Schübe auslösen, und dann langsam, nach den Beschwerden gesteuert, zum früheren Aktivitätsniveau zurückzukehren (Riel und Kollegen, 2020).',
            '**Hör nicht ganz auf, dich zu bewegen.** Die Leitlinie empfiehlt, die Belastung anzupassen, und rät nicht zu völliger Ruhe (Koc und Kollegen, 2023). Das Gehen, das du im Alltag brauchst, ist im Rahmen der Schmerzregel unten in Ordnung.',
            '**Behalt die sanften Dehnungen bei.** Dehnungen von Plantarfaszie und Wade haben **Empfehlungsgrad A** (Koc und Kollegen, 2023). Mach die erste am Morgen, bevor dein Fuß den Boden berührt.',
            '**Trag auch drinnen Schuhe.** Stützende Schuhe oder feste Hausschuhe ab dem ersten Schritt des Tages, statt barfuß auf Fliesen oder Holz (Morrissey und Kollegen, 2021).',
            '**Unterbrich das Stehen.** Der Best-Practice-Leitfaden rät, lange Phasen im Stehen ohne Bewegung zu unterbrechen (Morrissey und Kollegen, 2021).',
          ],
        },
        'In dieser Studie bekamen alle 180\u00A0Erwachsenen diese Art von Rat plus eine Fersenschale, und zwei der drei Gruppen bekamen zusätzlich Training mit Fersenheben oder Fersenheben plus eine Kortisonspritze. Alle drei Gruppen besserten sich nach etwa drei Monaten um ein klinisch bedeutsames Maß, auch die Gruppe, die nur den Rat und die Fersenschale bekam (Riel und Kollegen, 2023). Der Rat war das Fundament, keine Nebensache.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.rielHeelRaiseAdd, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Wie viel Schmerz ist während eines Schubs in Ordnung?',
      keyFact: 'In einer Studie mit 38\u00A0Personen mit Achillessehnenschmerzen schnitten diejenigen, die mit Schmerz bis etwa 5 von 10 aktiv blieben, abklingend bis zum nächsten Morgen, nach zwölf Monaten genauso gut ab wie diejenigen, die aufs Laufen und Springen verzichteten (Silbernagel und Kollegen, 2007).',
      paragraphs: [
        '**Nimm dieselbe Schmerzregel wie beim Gehen: bei Belastung höchstens mäßig und bis zum nächsten Morgen wieder bei deinem Normalwert.** Die Regel stammt aus einer Studie von 2007 mit 38\u00A0Personen mit Schmerzen an der Achillessehne. Bei Belastung war Schmerz bis etwa 5 von 10 erlaubt, solange er bis zum nächsten Morgen abklang und nicht von Woche zu Woche zunahm. So aktiv zu bleiben führte nach zwölf Monaten nicht zu schlechteren Ergebnissen, als sechs Wochen aufs Laufen und Springen zu verzichten (Silbernagel und Kollegen, 2007). Bei Plantarfasziitis wurde sie nicht getestet, nutze sie also als geliehene Orientierung.',
        'Bei Fersenschmerzen empfiehlt der Best-Practice-Leitfaden von 2021 ausdrücklich Schmerz-Monitoring und dass Menschen lernen, ihre Schmerzreaktion auf Aktivität zu lesen, ohne eine Zahl zu nennen (Morrissey und Kollegen, 2021). Bei den Übungen beendet Walkito eine Einheit, wenn der Schmerz 6 von 10 erreicht.',
      ],
      table: {
        caption: 'Deine Ferse während eines Schubs lesen (Schmerzskala 0 bis 10)',
        head: ['Was du bemerkst', 'Was du tust'],
        rows: [
          ['0 bis 5 bei Belastung, am nächsten Morgen normal', 'Belastung beibehalten'],
          ['Über 5 bei Belastung', 'Heute abbrechen oder verkürzen'],
          ['Nächster Morgen schlimmer als sonst', 'Ein bis zwei Tage weiter zurückfahren'],
          ['Jeden Morgen besser', 'Mit dem Aufbau beginnen'],
          ['Trotz Zurückfahren jeden Tag schlimmer', 'Ärztlich abklären lassen'],
        ],
      },
      after: [
        'Die vollständige Fassung dieser Regel, mit einer Spalte für den nächsten Spaziergang, steht unter [Gehen bei Plantarfasziitis](/de/gehen-bei-plantarfasziitis/). Der Blick auf den Morgen ist am wichtigsten, weil der Schmerz bei den ersten Schritten zeigt, wie dein Fuß den Vortag verkraftet hat.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0Personen pro Gruppe, Achillessehnen-Tendinopathie, keine Plantarfasziitis.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Solltest du einen Schub der Plantarfasziitis kühlen?',
      paragraphs: [
        '**Eis ist in Ordnung, wenn sich die Ferse damit besser anfühlt, aber keine Studie zeigt, dass es einen Schub beruhigt.** Die Leitlinie von 2023 fand zu wenige Belege, um oberflächliche Wärme oder Kälte bei Plantarfasziitis zu empfehlen (Koc und Kollegen, 2023).',
        'Selbst bei frischen Sportverletzungen, wo Eis am meisten genutzt wird, fand eine Übersichtsarbeit über 22\u00A0Studien keine Belege für eine beste Methode oder beste Dauer des Kühlens (Bleakley und Kollegen, 2004). Eine getestete Regel wie „X\u00A0Minuten kühlen“ gibt es für eine schmerzende Ferse also nicht. Wenn du kühlst, leg ein Tuch zwischen Eis und Haut, hör auf, wenn die Haut taub wird, und lass es weg, wenn du Diabetes oder ein vermindertes Gefühl in den Füßen hast.',
        'Nutze es zusätzlich zu deinen Dehnungen, nicht statt ihrer. [Kälte oder Wärme bei Plantarfasziitis](/de/kaelte-oder-waerme-plantarfasziitis/) erklärt, was die wenigen Studien gefunden haben und wie du deine Haut schützt.',
      ],
      cites: [CITE.guideline, CITE.bleakleyIce],
    },
    {
      h2: 'Wie baust du nach einem Schub wieder auf?',
      keyFact: 'In einer Studie mit 48\u00A0Personen linderte schweres Fersenheben Schmerzen und verbesserte die Alltagsfunktion schneller als Dehnen, nach zwölf Monaten lagen beide Gruppen etwa gleichauf (Rathleff und Kollegen, 2015).',
      paragraphs: [
        '**Nimm dein Krafttraining eine Stufe zurück und steig wieder auf, sobald sich die Morgen beruhigt haben.** Keine Studie hat getestet, wie man nach einem Schub wieder aufbaut. Die Leitlinie von 2023 bewertet Krafttraining für die Wade mit **B** (Koc und Kollegen, 2023), und in einer Studie mit 48\u00A0Personen half schweres Fersenheben mit einem Handtuch unter den Zehen schneller als Dehnen (Rathleff und Kollegen, 2015). Krafttraining lohnt sich also weiterhin, nur auf einer Stufe, die deine Ferse in dieser Woche verkraftet.',
        'Das Wadentraining von Walkito steigt in Stufen: Fersenheben im Sitzen, dann Fersenheben beidbeinig, dann Fersenheben mit Halten und erst später das Fersenheben mit Handtuch, das die Plantarfaszie am stärksten belastet. Während eines Schubs:',
        {
          list: [
            'Geh eine Stufe zurück. Wenn du beim Fersenheben mit Handtuch warst, geh zurück zum Fersenheben mit Halten oder zum Fersenheben beidbeinig. Wenn du beim Fersenheben beidbeinig warst, geh zurück zum Fersenheben im Sitzen.',
            'Mach mit den Dehnungen wie gewohnt weiter.',
            'Geh wieder eine Stufe hoch, wenn sich die letzten beiden Einheiten auf der niedrigeren Stufe leicht angefühlt haben und deine Morgen wieder normal sind.',
            'Bring die Aktivität, die den Schub ausgelöst hat, in kleinen Portionen zurück und ändere immer nur eine Sache: Strecke, Tempo, Steigungen oder Untergrund.',
          ],
        },
        'Das sind die Startdosierungen von Walkito, keine Verordnung. Alle Übungen und die Tabelle findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/), die Kraftstufen erklärt [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'In den meisten Einheiten und vor den ersten Schritten des Tages',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Stechender Fersenschmerz',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse, deshalb ist diese Dehnung wichtig, auch wenn du sie weiter oben spürst.',
          stop: 'Schmerz in der Wade, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Schmerz in der Wade, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An Krafttagen, die Stufe, auf die du während eines Schubs zurückgehst',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, der tiefere Wadenmuskel, und die Ferse wird kaum belastet.',
          stop: 'Fersenschmerz, der 6 von 10 erreicht, oder ein schlimmerer nächster Morgen',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An Krafttagen, sobald sich das Fersenheben im Sitzen wieder leicht anfühlt',
          feel: 'Beide Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, drück dich gerade über die großen Zehen nach oben und senk dich langsam ab. Beide Füße teilen sich die Last. Halt dich für das Gleichgewicht an einer Wand fest.',
          stop: 'Fersenschmerz, der 6 von 10 erreicht, oder ein schlimmerer nächster Morgen',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Was ist das Schlimmste, was du während eines Schubs tun kannst?',
      paragraphs: [
        '**Keine Studie stellt eine Rangliste auf, aber zwei gegensätzliche Fehler sind am häufigsten: einfach durchziehen und alles stoppen.** Das sagen die Belege zu jedem Punkt:',
        {
          list: [
            '**Trotz steigender Schmerzen durchziehen.** Wer dieselben langen Spaziergänge oder Läufe beibehält, während die Ferse jeden Morgen schlimmer wird, ignoriert genau das Signal, auf dem die getestete Schmerzregel beruht (Silbernagel und Kollegen, 2007). Die Fachleute hinter dem Best-Practice-Leitfaden von 2021 nannten eine Änderung der Gesamtbelastung als Risikofaktor für Schübe, mehr Belastung ist also die falsche Richtung (Morrissey und Kollegen, 2021).',
            '**Mit aller Aktivität und allen Übungen aufhören.** Die Leitlinie empfiehlt, die Belastung anzupassen, und rät nicht zu völliger Ruhe (Koc und Kollegen, 2023), und in der Studie zur Achillessehne war aktiv bleiben innerhalb einer Schmerzgrenze genauso gut, wie sechs Wochen aufs Laufen und Springen zu verzichten (Silbernagel und Kollegen, 2007). Wer Dehnungen und Wadentraining weglässt, verzichtet außerdem auf die Optionen mit **Empfehlungsgrad A** und **B**.',
            '**Barfuß auf harten Böden gehen,** vor allem bei den ersten Schritten des Tages (Morrissey und Kollegen, 2021).',
            '**Sich allein auf eine Einlage verlassen.** Einlagen allein zur kurzfristigen Linderung bewertet die Leitlinie mit **Empfehlungsgrad B gegen die Anwendung**, zusammen mit Übungen können sie aber helfen (Koc und Kollegen, 2023). Siehe [Einlagen oder Übungen](/de/einlagen-oder-uebungen/).',
          ],
        },
        'Ein Schub ist kein Beweis, dass dein Plan gescheitert ist. Wenn Schübe immer wiederkommen oder jeder schlimmer ist als der letzte, ist es Zeit, es ärztlich abklären zu lassen, nicht, dich mehr anzustrengen.',
      ],
      cites: [CITE.silbernagel, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Wann ist es kein Schub?',
      keyFact: 'Normale Röntgenbilder übersehen frühe Ermüdungsbrüche oft: Eine Übersichtsarbeit gibt ihre Sensitivität beim ersten Termin mit etwa 10\u00A0% an, nach drei Wochen steigt sie auf 30 bis 70\u00A0% (Patel und Kollegen, 2011).',
      paragraphs: [
        '**Wenn sich der Schmerz anders verhält als deine gewohnte Plantarfasziitis, geh nicht einfach von einem Schub aus.** Der Schmerz der Plantarfasziitis ist bei den ersten Schritten nach einer Pause am schlimmsten, lässt oft nach, sobald du in Gang kommst, und kann nach langen Phasen auf den Beinen zurückkommen (Koc und Kollegen, 2023). Andere Muster deuten woandershin:',
        {
          list: [
            '**Schmerz, der zunimmt, je mehr du gehst,** oft nach einer plötzlichen Steigerung der Aktivität, oder Schmerz, wenn du die Ferse seitlich zusammendrückst, kann ein Ermüdungsbruch sein (Tu, 2018). Siehe [Plantarfasziitis oder Ermüdungsbruch](/de/plantarfasziitis-oder-ermuedungsbruch/).',
            '**Schmerz nachts oder in Ruhe** oder Brennen, Kribbeln und Taubheit sprechen für etwas anderes als die Plantarfaszie. Siehe [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/).',
            '**Ein plötzlicher Knall oder stechender Schmerz** unter dem Fuß bei Belastung oder ein neuer Bluterguss oder eine Schwellung gehören ärztlich abgeklärt, nicht in einen Plan für einen Schub.',
            '**Ein tiefer Schmerz in der Mitte der Ferse,** der auf hartem Boden schlimmer ist, kann vom Fersenfettpolster kommen. Siehe [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/).',
          ],
        },
        'Nicht sicher, wo dein Schmerz hingehört? Dann geh die Warnzeichen unten durch und lass es abklären, wenn eines davon passt.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Was löst einen Schub der Plantarfasziitis aus?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Meist ein plötzlicher Anstieg der Belastung der Ferse: mehr Gehen oder Laufen als sonst, lange Stunden im Stehen oder barfuß auf harten Böden. Die Leitlinie von 2023 nennt eine kürzliche Steigerung der Belastung im Stehen und Gehen als typisch. In einer Studie ging Stehen während des größten Teils des Arbeitstags mit einer 3,6-fachen Chance einher, eine Plantarfasziitis zu bekommen.',
    },
    {
      q: 'Wie lange dauert ein Schub der Plantarfasziitis?',
      cites: [CITE.latt],
      a: 'Keine Studie hat gemessen, wie lange ein Schub dauert, jede feste Zahl an Tagen ist also geraten. Nimm deine Morgen als Maßstab: Wenn der Schmerz bei den ersten Schritten in ein paar Tagen nachlässt, nachdem du zurückgefahren hast, bist du auf dem richtigen Weg. Die Plantarfasziitis selbst dauert oft Monate, und bei etwa 90\u00A0% der Menschen wird es mit Versorgung ohne Operation besser.',
    },
    {
      q: 'Was soll ich tun, wenn die Plantarfasziitis plötzlich schlimmer wird?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Fahr die Aktivität zurück, die den Schub ausgelöst hat, behalt sanfte Dehnungen von Plantarfaszie und Wade bei, trag drinnen stützende Schuhe und beurteile es am Schmerz am nächsten Morgen. Die Leitlinie von 2023 empfiehlt, die Belastung anzupassen, und rät nicht zu völliger Ruhe. In einer Studie mit 180\u00A0Erwachsenen ging diese Art von Rat plus eine Fersenschale mit einer bedeutsamen Besserung nach etwa drei Monaten einher.',
    },
    {
      q: 'Sollte ich mich bei einem Schub der Plantarfasziitis komplett schonen?',
      cites: [CITE.guideline, CITE.silbernagel],
      a: 'Keine Studie zeigt, dass völlige Ruhe nötig ist. Die Leitlinie von 2023 empfiehlt, die Belastung anzupassen, und rät nicht zum Aufhören. In einer Studie zu Achillessehnenschmerzen schnitten Menschen, die mit Schmerz bis etwa 5 von 10 aktiv blieben, abklingend bis zum Morgen, nach zwölf Monaten genauso gut ab wie die, die sechs Wochen aufs Laufen und Springen verzichteten. Wenn selbst kurze Wege stechend wehtun oder du hinkst, lass es abklären.',
    },
    {
      q: 'Was ist das Schlimmste, was man bei Plantarfasziitis machen kann?',
      cites: [CITE.guideline, CITE.morrisseyBestPractice],
      a: 'Keine Studie stellt eine Rangliste auf, aber durch Schmerzen durchzuziehen, die jeden Morgen schlimmer werden, ist der klarste Fehler, denn Fachleute nannten in einem Best-Practice-Leitfaden von 2021 Änderungen der Belastung als Risikofaktor für Schübe. Mit aller Aktivität und den Übungen aufzuhören, ist der gegenteilige Fehler. Barfuß auf harten Böden solltest du ebenfalls meiden, bis sich die Beschwerden beruhigt haben.',
    },
    {
      q: 'Soll ich meine Übungen während eines Schubs weitermachen?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Ja, auf einer leichteren Stufe. Behalt die Dehnungen von Plantarfaszie und Wade bei, die die Leitlinie von 2023 mit A bewertet, und nimm dein Wadentraining eine Stufe zurück, zum Beispiel vom Fersenheben im Stehen zum Fersenheben im Sitzen. Krafttraining hat Empfehlungsgrad B, und schweres Fersenheben half in einer Studie mit 48\u00A0Personen schneller als Dehnen. Hör auf, wenn der Schmerz 6 von 10 erreicht.',
    },
    {
      q: 'Hilft Eis bei einem Schub der Plantarfasziitis?',
      cites: [CITE.guideline, CITE.bleakleyIce],
      a: 'Eis ist fürs Wohlgefühl in Ordnung, aber es gibt keine Belege, dass es einen Schub beruhigt. Die Leitlinie von 2023 zu Fersenschmerzen gibt keine Empfehlung zu Kälte oder Wärme, und eine Übersichtsarbeit über 22\u00A0Studien zu frischen Verletzungen fand keine beste Methode oder Dauer des Kühlens. Schütz deine Haut und lass es weg, wenn deine Füße vermindertes Gefühl haben.',
    },
    {
      q: 'Können neue Schuhe einen Schub der Plantarfasziitis auslösen?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Das kann sein, auch wenn keine Studie neue Schuhe als Auslöser getestet hat. Menschen mit Fersenschmerzen trugen Schuhe mit härteren Absätzen als Menschen ohne, und ein Best-Practice-Leitfaden rät zu stützenden Schuhen, bei denen die Ferse etwas höher liegt als die Zehen. Ein Wechsel zu flachen, dünnen oder sehr weichen Schuhen ist eine Änderung, die deine Ferse bemerken kann.',
    },
  ],
  redFlags: {
    h2: 'Lass es zuerst ärztlich abklären, wenn',
    bullets: [
      'der Schmerz nach einem Sturz, einem Sprung oder einem Umknicken begann oder du den Fuß nicht belasten kannst',
      'du einen Knall oder plötzlichen stechenden Schmerz unter dem Fuß gespürt hast oder ein neuer Bluterguss oder eine Schwellung da ist',
      'der Schmerz zunimmt, je mehr du gehst, oder es wehtut, wenn du die Ferse seitlich zusammendrückst (möglicher Ermüdungsbruch)',
      'die Ferse nachts oder in Ruhe wehtut, nicht nur bei den ersten Schritten',
      'du Taubheit, Kribbeln oder Brennen im Fuß hast',
      'die Ferse gerötet, heiß oder geschwollen ist oder du dich krank fühlst oder Fieber hast',
      'du Diabetes oder eine schlechte Durchblutung hast und dein Fuß wehtut oder anders aussieht',
      'der Schmerz trotz Zurückfahren länger als ein paar Tage immer schlimmer wird oder Schübe immer wiederkommen',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß. Sie liest einen Schub so wie diese Seite: daran, wie sich deine Ferse am Morgen anfühlt.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deine Fersenschmerzen am Morgen, und der Plan passt sich daran an: Nach einem schlechten Morgen wird die Einheit leichter, und das Wadentraining steigt wieder, wenn die Morgen besser werden. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['walkingPf', 'heelPain', 'pfDuration'],
  crumb: 'Plantarfasziitis-Schub',
  campaign: 'guide-plantar-fasciitis-flare-up-de',
};
