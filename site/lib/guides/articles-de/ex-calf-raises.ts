import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-calf-raises.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const EX_CALF_RAISES_DE: Guide = {
  lang: 'de',
  page: 'exCalfRaises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersenheben (Wadenheben): so machst du es richtig',
  description:
    'Fersenheben richtig ausführen: im Stehen, im Sitzen und mit Halten, welche Muskeln arbeiten, Sätze und Wiederholungen, häufige Fehler und wem es hilft.',
  h1: 'Fersenheben: richtig ausführen, mit Sätzen, Wiederholungen und Varianten',
  lede:
    'Beim Fersenheben drückst du dich im Stehen oder im Sitzen auf die Fußballen hoch. Es kräftigt den Gastrocnemius (den größeren, oberflächlicheren Wadenmuskel) und den Soleus (den tieferen), und es belastet mit jeder Wiederholung die Achillessehne und die Plantarfaszie. Diese Seite erklärt das beidbeinige Fersenheben im Stehen, die Variante im Sitzen und das isometrische Halten oben.',
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Wadenkräftigung mit B und empfiehlt sie zusammen mit Dehnen, das sie mit A bewertet (Koc und Kollegen, 2023).',
    'Eine Normwertstudie mit 566\u00A0gesunden Erwachsenen (20 bis 81\u00A0Jahre) fand beim einbeinigen Fersenheben einen Median von 24\u00A0Wiederholungen bei Männern und 21 bei Frauen, abhängig von Alter, Geschlecht und Aktivität (Hebert-Losier und Kollegen, 2017).',
    'Eine eingeschränkte Dorsalflexion im Sprunggelenk, oft durch einen verkürzten Gastrocnemius, war in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0passenden Kontrollpersonen der stärkste unabhängige Risikofaktor für Plantarfasziitis (Riddle und Kollegen, 2003).',
    'Fersenheben im Stehen belastet vor allem den Gastrocnemius. Fersenheben im Sitzen verlagert die Last auf den Soleus, weil das gebeugte Knie den Gastrocnemius verkürzt.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Welche Muskeln trainiert das Fersenheben?',
      paragraphs: [
        'Fersenheben im Stehen mit gestrecktem Knie trainiert vor allem den Gastrocnemius, den zweiköpfigen Muskel, der der Wade ihre sichtbare Form gibt. Der Gastrocnemius zieht über Knie und Sprunggelenk, deshalb arbeitet er am stärksten, wenn das Knie gestreckt ist.',
        'Fersenheben im Sitzen verlagert die Last auf den Soleus, den tieferen Wadenmuskel, der darunter liegt. Der Soleus zieht nur über das Sprunggelenk. Wenn du das Knie etwa 90\u00A0Grad beugst, nimmst du den Gastrocnemius größtenteils aus der Bewegung, und der Soleus macht die Arbeit.',
        'Beide Muskeln setzen über die Achillessehne an der Ferse an. Jedes Fersenheben belastet auch die Plantarfaszie ein Stück weit, weil die Ferse der gemeinsame Ankerpunkt ist. Beim [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/) steigt die Last auf die Faszie weiter, weil die Zehen gebeugt werden.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Wie geht Fersenheben im Stehen?',
      paragraphs: [
        'Stell dich mit beiden Füßen flach auf den Boden, etwa hüftbreit. Halte dich zum Gleichgewicht an einer Wand oder einem Stuhl fest. Drück dich über die großen Zehen auf die Fußballen hoch. Halte oben kurz, dann senk dich langsam ab, über etwa drei Sekunden. Beide Füße teilen sich die Last.',
        'Wenn du eine Stufe hast, stell dich mit den Fußballen auf die Kante und lass die Fersen beim Absenken etwas tiefer sinken. Dieser zusätzliche Umfang unten dehnt die Wade bei jeder Wiederholung etwas mehr. Auf dem Boden ist der Umfang kleiner, aber die Übung wirkt trotzdem.',
      ],
      exercises: [
        {
          name: 'Fersenheben beidbeinig',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Beidbeiniges Fersenheben ist in getesteten Programmen eine Zwischenstufe und wurde nicht einzeln getestet.',
          },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Halte dich zum Gleichgewicht an einer Wand fest.',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade hoch, langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wie geht Fersenheben im Sitzen?',
      paragraphs: [
        'Setz dich auf einen Stuhl, die Füße stehen flach auf dem Boden, die Knie etwa 90\u00A0Grad gebeugt. Drück dich über die Ballen beider Füße hoch, sodass sich beide Fersen vom Boden heben. Senk langsam ab. Wenn du die Hände auf die Knie legst und nach unten drückst, kommt Widerstand dazu.',
        'Fersenheben im Sitzen ist der Einstieg mit der wenigsten Last in der Wadenkette. Im Vergleich zur Arbeit im Stehen belastet es die Ferse fast gar nicht, deshalb ist es ein guter Anfang, wenn Fersenheben im Stehen zu sehr wehtut.',
      ],
      exercises: [
        {
          name: 'Fersenheben im Sitzen',
          evidence: {
            level: 'moderate',
            why: 'Teil veröffentlichter Reha-Steigerungen (Silbernagel Phase 1). Nicht einzeln in einer randomisierten Studie getestet.',
          },
          dose: 'Walkito beginnt mit 3\u00A0Sätzen à 10, beide Füße',
          how: 'Setz dich hin, die Füße stehen flach. Drück dich über die Ballen beider Füße hoch. Hände auf den Knien geben zusätzlichen Widerstand.',
          often: 'Krafttage, solange es dein Level ist',
          feel: 'Arbeit in den Waden, sehr wenig Last auf der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: Drück dich über die Fußballen nach oben',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.silbernagel, CITE.guideline],
    },
    {
      h2: 'Wie geht Fersenheben mit Halten (isometrisch)?',
      paragraphs: [
        'Komm auf beiden Füßen auf die Zehen und bleib oben ruhig. Lass die Fersen nicht wieder absinken. Isometrisch heißt, der Muskel arbeitet, ohne sich durch einen Bewegungsumfang zu bewegen. So wird die Achillessehne belastet, ohne das Auf und Ab, das manche Sehnen- oder Fersenschmerzen im frühen Stadium reizen kann.',
        'Die Leitlinie von 2024 zur Achillessehne nennt isometrische Belastung als eine der wirksamen Arten der Sehnenbelastung, auch wenn keine Studie veröffentlicht ist, die nur isometrische Übungen an der Achillessehne getestet hat.',
      ],
      exercises: [
        {
          name: 'Fersenheben mit Halten',
          evidence: {
            level: 'moderate',
            why: 'In der Leitlinie von 2024 zur Achillessehne als wirksame Art der Belastung genannt. Keine randomisierte Studie nur mit isometrischen Übungen.',
          },
          dose: 'Walkito beginnt mit 3-mal 20\u00A0Sekunden halten, beide Füße',
          how: 'Komm auf beiden Füßen auf die Zehen und halte oben, ohne abzusinken. Halte dich zum Gleichgewicht an einer Wand fest.',
          often: 'Krafttage, die Stufe zwischen beidbeinigem Fersenheben und der Arbeit auf einem Bein',
          feel: 'Die Waden arbeiten, um ruhig zu bleiben',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hochkommen, dann oben ruhig bleiben',
          alt: 'Eine Figur hält sich auf beiden Füßen in der oberen Position, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.guideline],
    },
    {
      h2: 'Wie viele Wiederholungen Fersenheben solltest du machen?',
      keyFact: 'Eine Normwertstudie mit 566\u00A0gesunden Erwachsenen zwischen 20 und 81\u00A0Jahren fand, dass die Zahl beim einbeinigen Fersenheben je nach Alter, Geschlecht und Aktivität schwankte, wobei Frauen auf einen Median von 21\u00A0Wiederholungen kamen (Hebert-Losier und Kollegen, 2017).',
      paragraphs: [
        'Das hängt davon ab, wo du auf der Leiter stehst und woran du arbeitest. Für allgemeine Wadenkraft sind 3\u00A0Sätze à 10 bis 15\u00A0Wiederholungen in langsamem Tempo eine übliche Anfangsdosis. Beim in der Forschung getesteten Protokoll bei Plantarfasziitis beginnt das Fersenheben mit Handtuch mit 3\u00A0Sätzen à 12RM und steigert sich über etwa fünf Wochen auf 5\u00A0Sätze à 8RM.',
        'Ein nützlicher Richtwert ist der einbeinige Ausdauertest mit Fersenheben. Eine Normwertstudie mit 566\u00A0gesunden Erwachsenen fand einen Median von 24\u00A0Wiederholungen bei Männern und 21 bei Frauen, abhängig von Alter, Geschlecht und Aktivität. Das Wadenziel in der Walkito-App sind 25\u00A0einbeinige Fersenheben. Wenn du es erreichst, ist die Arbeit nicht vorbei. Dann geht es darum, das Niveau zu halten.',
        'Mehr zum speziellen Protokoll bei Plantarfasziitis findest du unter [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/). Die Variante für die Achillessehne findest du unter [exzentrisches Fersenabsenken](/de/uebungen/exzentrisches-fersenabsenken/).',
      ],
      cites: [CITE.hebertLosier, CITE.rathleff],
    },
    {
      h2: 'Was sind die häufigsten Fehler beim Fersenheben?',
      paragraphs: [
        'Zu schnell sein. Das langsame Absenken (etwa drei Sekunden) baut die Kraft auf. Wer unten federt, verschenkt die exzentrische Phase, also den Teil, der den Großteil der Arbeit für die Anpassung der Sehne leistet.',
        'Auf die Außenkante des Fußes rollen. Der Druck sollte über den großen Zeh und den Fußballen gehen. Wenn das Sprunggelenk nach außen kippt, kann sich die Wade nicht voll zusammenziehen, und die kleinen Muskeln an der Außenseite des Sprunggelenks bekommen eine Spannung ab, für die sie nicht gebaut sind.',
        'Die Variante im Sitzen überspringen. Wenn Fersenheben im Stehen wehtut, macht ein Sprung zur einbeinigen Arbeit auf einer Stufe es schlimmer. Die Leiter gibt es aus gutem Grund: im Sitzen, dann beidbeinig im Stehen, dann mit Halten, dann einbeinig. Jede Stufe sollte sich zwei Einheiten lang machbar anfühlen, bevor du weitergehst.',
      ],
    },
    {
      h2: 'Fersenheben bei Plantarfasziitis oder bei Achillessehnenentzündung',
      paragraphs: [
        'Bei Plantarfasziitis sprechen die Belege für das [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/), bei dem das Handtuch unter den Zehen neben der Wade auch die Faszie belastet. Die Schmerzgrenze liegt bei 6/10. Die ganze Seite zum Beschwerdebild findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
        'Bei einer Achillessehnenentzündung verschiebt sich der Fokus auf das [exzentrische Fersenabsenken](/de/uebungen/exzentrisches-fersenabsenken/), bei dem das Absenken der eigentliche Zweck ist und kein Handtuch verwendet wird. Das Schmerzmodell aus einer Studie erlaubt Belastung bis etwa 5/10, solange der Schmerz bis zum Morgen abklingt. Die ganze Seite findest du unter [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
        'Das beidbeinige Fersenheben, die Variante im Sitzen und das isometrische Halten tauchen auf beiden Wegen als frühe Stufen auf. Sie bauen die Grundkraft auf, die die spezielle Übung mit Last erst möglich macht.',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
  ],
  faq: [
    {
      q: 'Trainiert Fersenheben den Po?',
      a: 'Nein. Fersenheben zielt auf Gastrocnemius und Soleus im Unterschenkel. Die Gesäßmuskeln stabilisieren bei den einbeinigen Varianten die Hüfte, sind aber nicht die Hauptarbeiter. Für Kraft in Hüfte und Gesäß siehe [Hüftabduktion](/de/uebungen/hueftabduktion/).',
    },
    {
      q: 'Ist Fersenheben im Sitzen oder im Stehen besser?',
      cites: [CITE.patelGastrocnemius],
      a: 'Sie zielen auf verschiedene Muskeln. Fersenheben im Stehen trainiert vor allem den Gastrocnemius, den größeren Wadenmuskel. Im Sitzen verlagert sich die Last auf den Soleus, den tieferen, weil das gebeugte Knie den Gastrocnemius größtenteils aus der Bewegung nimmt. Beide haben ihren Platz, und zusammen decken sie die ganze Wade ab.',
    },
    {
      q: 'Wie viele einbeinige Fersenheben sind normal?',
      cites: [CITE.hebertLosier],
      a: 'Eine Normwertstudie mit 566\u00A0gesunden Erwachsenen fand einen Median von 24\u00A0Wiederholungen bei Männern und 21 bei Frauen, angepasst an Alter, Geschlecht und Aktivität (Hebert-Losier 2017). Die Zahl ist nützlich, um Veränderungen über Wochen zu verfolgen und ein Bein mit dem anderen zu vergleichen, nicht als Grenze für Bestehen oder Durchfallen.',
    },
    {
      q: 'Sollte man jeden Tag Fersenheben machen?',
      cites: [CITE.rathleff],
      a: 'Die Rathleff-Studie zu Plantarfasziitis trainierte jeden zweiten Tag. Muskeln und Sehnen brauchen zwischen belastenden Einheiten Erholung. Walkito plant Fersenheben an Krafttagen ein, mit Ruhetagen dazwischen. Tägliche Belastung ohne Pause kann den Fortschritt bremsen oder die Schmerzen verstärken.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du beim Fersenheben ein plötzliches Knallen oder Schnappen in der Wade oder Achillessehne gespürt hast',
      'die Wade geschwollen, gerötet, warm oder hart ist',
      'du auf einer Seite überhaupt nicht auf die Zehen hochkommst',
      'der Schmerz über Nacht nicht abklingt und von Woche zu Woche schlimmer wird',
      'Taubheit, Kribbeln oder Brennen im Fuß auftreten',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito baut einen Plan, der auf deinem Level beginnt und eine Stufe höher geht, wenn du so weit bist. Die Wadenkette reicht vom Fersenheben im Sitzen über das Fersenheben beidbeinig im Stehen, das Halten und das Fersenheben mit Handtuch bis zum exzentrischen Fersenabsenken und zu Pogo-Sprüngen. Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten.',
    more: [
      'Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer und Gleichgewicht. Das Wadenziel sind 25\u00A0einbeinige Fersenheben. Wenn du es erreichst, ist die Arbeit nicht vorbei, ein neues Ziel tritt an seine Stelle. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fersenheben',
  campaign: 'ex-calf-raises-de',
};
