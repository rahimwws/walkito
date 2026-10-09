import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Plantarfasziitis oder Fersensporn (DE) ────────────────────────────
 *
 * Translated from `articles/pf-vs-heel-spur.ts`, written around the German
 * queries «Fersensporn oder Plantarfasziitis», «Fersensporn Ursache»,
 * «Fersensporn Röntgen». Informal «du», terminology and exercise names as
 * in `lib/guides/de.ts`. Figures and qualifiers are identical to the
 * English page. Quotes from the guideline and the AAOS are translated.
 * No new citations.
 */

export const PF_VS_HEEL_SPUR_DE: Guide = {
  lang: 'de',
  page: 'pfVsHeelSpur',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Plantarfasziitis oder Fersensporn: Ist das dasselbe?',
  description:
    'Plantarfasziitis oder Fersensporn: der Unterschied, ob ein Fersensporn Schmerzen macht, wie häufig Sporne sind und wann ein Röntgenbild sinnvoll ist.',
  h1: 'Plantarfasziitis oder Fersensporn: Ist das dasselbe?',
  lede:
    'Ein Fersensporn ist ein knöcherner Auswuchs an der Unterseite des Fersenbeins. Plantarfasziitis ist eine Reizung der Plantarfaszie, des dicken Gewebebands, das von diesem Knochen bis zu deinen Zehen läuft. Beides zeigt sich oft zusammen, ist aber nicht dieselbe Erkrankung, und der Sporn ist meist nicht das, was wehtut. Viele Menschen mit einem Sporn auf dem Röntgenbild haben überhaupt keine Schmerzen.',
  intro: [
    'Wenn man dir gesagt hat, dass du einen Fersensporn hast, und du wissen willst, was du dagegen tun kannst: Es sind dieselben Übungen, die bei Plantarfasziitis helfen. [Übungen bei Fersensporn](/de/fersensporn-uebungen/) zeigt die ganze Routine. Diese Seite erklärt den Unterschied zwischen beidem, was die Forschung zu Spornen und Schmerzen sagt und wann Bildgebung sinnvoll ist.',
  ],
  takeaways: [
    'In einer Studie mit 216\u00A0älteren Erwachsenen zwischen 62 und 94\u00A0Jahren hatten 55\u00A0% mindestens einen plantaren Fersensporn auf dem Röntgenbild, und ein Sporn hing mit Übergewicht und Arthrose zusammen, aber nicht mit der Fußhaltung (Menz und Kollegen, 2008). Das ist eine Stichprobe älterer Menschen, kein Wert für die Gesamtbevölkerung.',
    'In einer Studie mit 530\u00A0Menschen ab 50 mit Fußschmerzen zeigten sich Fersensporn und verdickte Plantarfaszie meist zusammen, und ein Sporn allein war selten (6\u00A0% der Füße). Fersenschmerzen hingen damit zusammen, beide Befunde gleichzeitig zu haben (Menz und Kollegen, 2019).',
    'Die Leitlinie von 2023 zu Fersenschmerzen stellt die Plantarfasziitis als häufigste Ursache für Fersenschmerzen unter dem Fuß in den Mittelpunkt und hält fest, dass Bildgebung meist nicht nötig ist, wenn die klinische Untersuchung schon auf eine Plantarfasziitis hindeutet (Koc und Kollegen, 2023).',
    'Die Studie von Menz 2008 selbst erwähnt, dass frühere Forschung in der Gesamtbevölkerung die Häufigkeit von Fersenspornen auf 11 bis 16\u00A0% geschätzt hatte, deutlich unter den 55\u00A0% in ihrer eigenen Stichprobe älterer Menschen (Menz und Kollegen, 2008).',
    'Die Übungen, die bei Plantarfasziitis-Schmerzen helfen, setzen auch am Weichgewebe rund um einen Fersensporn an. Übungen lösen keinen Sporn auf, aber der Sporn ist selten das, was Beachtung braucht.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Ist ein Fersensporn dasselbe wie Plantarfasziitis?',
      figure: { id: 'heel-side', caption: 'Ein Fersensporn bildet sich, wenn es einen gibt, an der Unterseite des Fersenbeins, nahe dem Ansatz der Plantarfaszie.', alt: 'Fuß von der Innenseite mit durchsichtiger Haut: Fersenbein, Plantarfaszie unter dem Gewölbe und eine rote Stelle unter der Ferse, wo der Schmerz meist beginnt.' },
      paragraphs: [
        '**Ein Fersensporn und eine Plantarfasziitis sind nicht dasselbe.** Plantarfasziitis ist ein Problem des Weichgewebes: Die Plantarfaszie, das dicke Band vom Fersenbein bis zu den Zehen, wird gereizt, meist dort, wo sie am Knochen ansetzt. Ein Fersensporn ist ein knöcherner Auswuchs an der Unterseite des Fersenbeins (Calcaneus). Beides kommt oft zusammen vor, aber jedes kann auch ohne das andere auftreten.',
        'Die Plantarfasziitis verursacht den scharfen, stechenden Schmerz unten an der Ferse, den viele beschreiben, vor allem bei den ersten Schritten am Morgen oder nach dem Sitzen. Die Leitlinie von 2023 zu Fersenschmerzen beschreibt ihn als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ auffällt. Ein Fersensporn dagegen ist ein struktureller Befund auf dem Röntgenbild. Er kann eigene Beschwerden machen oder auch nicht.',
        'Die Verwechslung ist verständlich. Jahrzehntelang galt der Fersensporn als Ursache für Fersenschmerzen unter dem Fuß. Diese Sicht wurde weitgehend von Belegen abgelöst, die zeigen, dass Sporne bei Menschen ohne Schmerzen häufig sind und dass viele Menschen mit Plantarfasziitis gar keinen Sporn haben.',
      ],
      cites: [CITE.ehrmannSpur, CITE.guideline],
    },
    {
      h2: 'Macht ein Fersensporn wirklich Schmerzen?',
      keyFact: 'In einer Studie mit 530\u00A0Menschen mit Fußschmerzen kam ein Fersensporn auf dem Röntgenbild nur an 6\u00A0% der Füße allein vor, meist zusammen mit einer verdickten Plantarfaszie (Menz und Kollegen, 2019).',
      paragraphs: [
        '**Die meisten Fersensporne machen keine Schmerzen.** Die Forschung zeigt immer wieder, dass Sporne bei Menschen ohne Fersenbeschwerden vorkommen und dass das Entfernen des Sporns den Schmerz nicht zuverlässig beendet.',
        'In einer Studie mit 530\u00A0Menschen ab 50, die über Fußschmerzen berichteten:',
        {
          list: [
            'Röntgenbilder fanden einen Fersensporn an 26,5\u00A0% der Füße.',
            'Ultraschall fand eine verdickte Plantarfaszie an 47,3\u00A0% der Füße.',
            'Beides kam meist zusammen vor, und ein Sporn allein war selten (6\u00A0% der Füße).',
            'Menschen mit Fersenschmerzen hatten etwa doppelt so häufig beide Befunde zusammen (Menz und Kollegen, 2019).',
          ],
        },
        'Anders gesagt: Der Sporn zeigt sich selten ohne die Veränderung im Weichgewebe, die dazugehört.',
        'In einer anderen Studie mit 216\u00A0älteren Erwachsenen zwischen 62 und 94\u00A0Jahren hatten 55\u00A0% mindestens einen plantaren Fersensporn auf dem Röntgenbild. Sporne hingen mit Übergewicht, Arthrose und früheren Fersenschmerzen zusammen, aber nicht mit der Fußhaltung. Die Autoren vermuteten, dass Sporne eine Anpassung an senkrechten Druck auf die Ferse sein könnten und nicht dadurch entstehen, dass die Plantarfaszie am Knochen zieht (Menz und Kollegen, 2008).',
        'Die Studie von Menz 2008 erwähnt, dass frühere Forschung in der Gesamtbevölkerung eine Häufigkeit von Fersenspornen von 11 bis 16\u00A0% berichtet hatte, deutlich unter den 55\u00A0%, die die Autoren in ihrer eigenen Stichprobe älterer Menschen fanden. In derselben Stichprobe hatten etwa 6 von 10\u00A0Menschen mit Sporn nie Fersenschmerzen gehabt, auch wenn Fersenschmerzen bei Menschen mit Sporn trotzdem häufiger waren (40\u00A0%) als ohne (12\u00A0%) (Menz und Kollegen, 2008). Ein Sporn erhöht die Odds, aber er entscheidet nicht, wer am Ende Schmerzen hat.',
      ],
      sourceNote:
        'Menz 2019: 530\u00A0Teilnehmende ab 50 mit Fußschmerzen, Querschnittsstudie. Sporne an 26,5\u00A0% der Füße, verdickte Plantarfaszie an 47,3\u00A0%, Sporn allein an 6,0\u00A0%. Fersenschmerzen hingen mit beiden Merkmalen zusammen (OR 2,16, 95-%-KI 1,24 bis 3,77). Menz 2008: 216\u00A0Teilnehmende zwischen 62 und 94\u00A0Jahren, Querschnittsstudie, Häufigkeit von Spornen 55\u00A0%, aktuelle oder frühere Fersenschmerzen OR 4,6 (95-%-KI 2,3 bis 9,4).',
      cites: [CITE.menzCoexistence, CITE.menzSpur],
    },
    {
      h2: 'Wie häufig sind Fersensporne bei Menschen ohne Schmerzen?',
      keyFact: 'In einer MRT-Studie mit 77\u00A0Menschen ohne Beschwerden hatten 19\u00A0% einen Fersensporn, Sporne sind also auch ohne Fersenschmerzen häufig (Ehrmann und Kollegen, 2014).',
      paragraphs: [
        'Fersensporne sind häufig. Wie häufig, hängt von der Altersgruppe ab und davon, mit welcher Methode man nach ihnen sucht.',
        'Die Studie von Menz 2008 mit älteren Erwachsenen zitiert frühere Forschung, die in der Gesamtbevölkerung eine Häufigkeit von Fersenspornen von 11 bis 16\u00A0% berichtete, deutlich unter den 55\u00A0%, die die Autoren in ihrer eigenen Stichprobe von 216\u00A0Menschen zwischen 62 und 94\u00A0Jahren fanden. Eine andere MRT-Studie mit 77\u00A0beschwerdefreien Freiwilligen (Durchschnittsalter 48, Spanne 23 bis 83) fand bei 15 von ihnen einen Fersensporn, 19\u00A0% (Ehrmann und Kollegen, 2014).',
        'Das Muster ist einheitlich: Ein großer Teil der Menschen mit Sporn hat keine Beschwerden, und **ein Sporn allein sagt nicht voraus, ob jemand Fersenschmerzen bekommt.** Deshalb nennt die Leitlinie von 2023 zu Fersenschmerzen einen Fersensporn nicht als Grund, die Übungen zu ändern.',
      ],
      cites: [CITE.ehrmannSpur, CITE.menzSpur],
    },
    {
      h2: 'Was sagt die Leitlinie von 2023 zum Fersensporn?',
      paragraphs: [
        'Die klinische Leitlinie von 2023 zu Fersenschmerzen, veröffentlicht im Journal of Orthopaedic and Sports Physical Therapy, stellt die Plantarfasziitis als häufigste Ursache für Fersenschmerzen unter dem Fuß in den Mittelpunkt. Das „Fersenspornsyndrom“ nennt sie als eine von mehreren Differenzialdiagnosen, neben:',
        {
          list: [
            'Dem Fersenpolster-Syndrom.',
            'Nervenreizungen.',
            'Dem Ermüdungsbruch des Fersenbeins.',
          ],
        },
        'Die Leitlinie empfiehlt Bildgebung nicht als ersten Schritt, wenn die klinische Untersuchung schon auf eine Plantarfasziitis hindeutet. Sie hält fest, dass Bildgebung „bei Patienten, die die klinischen Untersuchungskriterien für eine Plantarfasziitis erfüllen, meist nicht angezeigt ist, solange konservative Maßnahmen nicht gescheitert sind“. Wenn Bildgebung in Frage kommt, ist ein Röntgenbild im Stehen die erste Wahl, danach bei Bedarf Ultraschall oder MRT.',
        'In der Praxis heißt das: Eine medizinische Fachperson, die das typische Muster sieht, Schmerz bei den ersten Schritten am Morgen, Druckschmerz an der Innenseite der Ferse und eingeschränkte Beweglichkeit im Sprunggelenk, kann mit Dehnen und Krafttraining anfangen, ohne auf ein Röntgenbild zu warten. **Ob ein späteres Röntgenbild einen Sporn zeigt oder nicht, ändert den Übungsplan nicht.**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Brauchst du ein Röntgenbild, um Plantarfasziitis und Fersensporn zu unterscheiden?',
      paragraphs: [
        '**Für eine Plantarfasziitis brauchst du meist kein Röntgenbild.** Die Diagnose ist klinisch: Sie beruht darauf, wo der Schmerz sitzt, wann er auftritt und was ihn schlimmer macht. Ein Röntgenbild kann einen Fersensporn zeigen, aber einen zu finden ändert nichts daran, was du gegen den Schmerz tust, und keinen zu finden schließt eine Plantarfasziitis nicht aus.',
        'Bildgebung wird sinnvoll:',
        {
          list: [
            'Wenn der Schmerz nicht dem typischen Muster der Plantarfasziitis folgt.',
            'Wenn er nach mehreren Wochen konservativer Behandlung nicht besser geworden ist.',
            'Wenn eine medizinische Fachperson etwas anderes vermutet, etwa einen Ermüdungsbruch, ein Nervenproblem oder einen Riss der Plantarfaszie.',
          ],
        },
        'Ultraschall kann die Dicke der Plantarfaszie messen (über 4\u00A0mm gilt allgemein als verdickt), und ein MRT zeigt Details im Weichgewebe, die ein Röntgenbild nicht zeigt.',
        'Wenn man dir schon gesagt hat, dass auf deinem Röntgenbild ein Fersensporn zu sehen ist, braucht der Sporn selbst fast nie eine eigene Behandlung. Die Übungen und Dehnungen, die bei Plantarfasziitis helfen, setzen auch am Weichgewebe rund um den Sporn an. Die ganze Routine findest du unter [Übungen bei Fersensporn](/de/fersensporn-uebungen/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wenn der Sporn nicht das Problem ist, was dann?',
      paragraphs: [
        'Der Schmerz kommt meist von der Plantarfaszie und dem Gewebe drumherum, nicht vom Knochen. Die Plantarfaszie setzt unten am Fersenbein an. Wenn sie überlastet wird, vor allem bei einer verkürzten Wade, einem hohen BMI oder vielen Stunden auf den Beinen, wird dieser Ansatzpunkt gereizt. Diese Reizung ist die Plantarfasziitis.',
        'Eine verkürzte Wade gehört zu den stärksten Risikofaktoren. In einer gematchten Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0Kontrollen:',
        {
          list: [
            'Eine eingeschränkte Dorsalflexion im Sprunggelenk, also wie weit sich der Fuß Richtung Schienbein anziehen lässt, hatte die höchste Odds Ratio aller gemessenen Faktoren.',
            'Auch Stehen während des größten Teils des Arbeitstags war signifikant, mit 3,6-fachen Odds (Riddle und Kollegen, 2003).',
          ],
        },
        'Der Sporn, wenn er da ist, sitzt in der Nähe. Er kann sich über Monate oder Jahre als Antwort auf dieselbe mechanische Belastung gebildet haben, die die Faszie gereizt hat. Aber **es sind Faszie und Wade, die auf Dehnen und Kräftigen ansprechen, nicht der Knochen.** Deshalb empfiehlt die Leitlinie Übungen und nicht das Entfernen des Sporns.',
        'Einen vollständigen Überblick über die Plantarfasziitis mit Ursachen, Risikofaktoren und den Empfehlungen der Leitlinie gibt [Plantarfasziitis](/de/plantarfasziitis/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Muss ein Fersensporn jemals entfernt werden?',
      paragraphs: [
        'Ein Fersensporn wird selten operativ entfernt, und das ist keine Option für den Anfang. **Die Leitlinie von 2023 empfiehlt bei Plantarfasziitis nicht, den Sporn zu entfernen.** Mehrere Studien haben gezeigt, dass Plantarfasziitis-Schmerzen mit konservativer Behandlung abklingen können, auch wenn der Sporn auf dem Röntgenbild bleibt. Die American Academy of Orthopaedic Surgeons schreibt klar, dass „Fersensporne keine Plantarfasziitis-Schmerzen verursachen“ und dass sich „Plantarfasziitis-Schmerzen behandeln lassen, ohne den Sporn zu entfernen“.',
        'Eine Operation wird manchmal erwogen, wenn der Schmerz über Monate nicht auf konservative Behandlung angesprochen hat, aber der Eingriff ist dann meist eine teilweise Durchtrennung der Plantarfaszie, keine Entfernung des Sporns. Wenn dabei auch ein Sporn entfernt wird, deuten die Belege darauf hin, dass der Nutzen von der Entlastung der Faszie kam und nicht vom Entfernen des Knochens.',
        'Den allermeisten Menschen mit Fersenschmerzen und Sporn geht es mit demselben Dehnen, demselben Wadentraining und derselben Belastungssteuerung besser, die auch Menschen ohne Sporn nutzen. Die praktische Routine findest du unter [Übungen bei Fersensporn](/de/fersensporn-uebungen/).',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Welche Übungen helfen, wenn du einen Fersensporn hast?',
      paragraphs: [
        'Die Übungen bei Fersensporn-Schmerzen sind dieselben, die die Leitlinie bei Plantarfasziitis empfiehlt: Plantarfaszien-Dehnung, Wadendehnung und schrittweises Wadenkrafttraining. Übungen lösen keinen Sporn auf. Sie setzen am Weichgewebe an, das den Schmerz tatsächlich verursacht.',
        'Die Leitlinie gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, **A**, und Krafttraining ein **B**. Diese Bewertungen gelten unabhängig davon, ob ein Sporn da ist. [Übungen bei Fersensporn](/de/fersensporn-uebungen/) zeigt die ganze Routine mit Sätzen, Haltezeiten und Steigerung. Unten stehen drei Übungen für den Anfang.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 bewertet die Plantarfaszien-Dehnung mit A, ihrer besten Bewertung.' },
          dose: '10-mal 10\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg einen Knöchel über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Mach das morgens vor dem Aufstehen und nach langem Sitzen.',
          often: 'Jeden Morgen und nach dem Sitzen',
          feel: 'Eine Dehnung entlang des Gewölbes, kein Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen vor dem ersten Schritt zurück',
          alt: 'Eine sitzende Figur zieht die Zehen zurück, um die Plantarfaszie zu dehnen',
        },
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'strong', why: 'Dieselbe Bewertung A in der Leitlinie. Zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Das hintere Bein bleibt gestreckt, die Ferse unten, die Hüfte nach vorn. Eine verkürzte Wade zieht über die Achillessehne an der Ferse und belastet so zusätzlich die Faszie.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, nach vorn lehnen',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining bei Plantarfasziitis mit B. Eine Zwischenstufe auf dem Weg zum belasteten Fersenheben mit Handtuch.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. So baust du Wadenkraft auf, ohne die Ferse stark zu belasten.',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade hochkommen, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Ist ein Fersensporn dasselbe wie eine Plantarfasziitis?',
      cites: [CITE.guideline],
      a: 'Nein. Ein Fersensporn ist ein knöcherner Auswuchs an der Unterseite des Fersenbeins. Plantarfasziitis ist eine Reizung der Plantarfaszie, des dicken Gewebebands von der Ferse bis zu den Zehen. Beides zeigt sich oft zusammen, aber ein Sporn kann ohne Schmerzen bestehen, und eine Plantarfasziitis kann ohne Sporn auftreten. Die Leitlinie von 2023 zu Fersenschmerzen behandelt beides als getrennte Befunde.',
    },
    {
      q: 'Macht ein Fersensporn Schmerzen?',
      cites: [CITE.menzCoexistence],
      a: 'Die meisten Fersensporne machen keine Schmerzen. In einer Studie mit 530\u00A0Menschen ab 50 mit Fußschmerzen war ein Sporn allein selten, und Fersenschmerzen hingen mit einem Sporn zusammen mit einer verdickten Plantarfaszie zusammen (Menz und Kollegen, 2019). In einer anderen Studie mit 216\u00A0älteren Erwachsenen hatten etwa 6 von 10 der Menschen mit Sporn weder aktuell noch früher Fersenschmerzen (Menz und Kollegen, 2008).',
    },
    {
      q: 'Kann man Plantarfasziitis ohne Fersensporn haben?',
      a: 'Ja. Viele Menschen mit Plantarfasziitis haben keinen Sporn auf dem Röntgenbild. Der Schmerz kommt von der gereizten Plantarfaszie, nicht vom Knochen. Die Leitlinie von 2023 verlangt keine Bildgebung für die Diagnose einer Plantarfasziitis, wenn das klinische Muster klar ist: Schmerz bei den ersten Schritten am Morgen, Druckschmerz an der Ferse und eine verkürzte Wade.',
    },
    {
      q: 'Lösen Übungen bei Fersensporn den Sporn auf?',
      cites: [CITE.guideline],
      a: 'Nein. Dehn- und Kräftigungsübungen lösen keinen Fersensporn auf. Sie setzen am Weichgewebe drumherum an, vor allem an der Plantarfaszie und den Wadenmuskeln, die meist den Schmerz verursachen. Der Sporn selbst braucht selten Beachtung, und die Leitlinie empfiehlt dieselben Übungen, ob ein Sporn da ist oder nicht.',
    },
    {
      q: 'Sollte ich ein Röntgenbild machen lassen, wenn ich einen Fersensporn vermute?',
      cites: [CITE.guideline],
      a: 'Laut der Leitlinie von 2023 ist Bildgebung meist nicht nötig, wenn die klinische Untersuchung auf eine Plantarfasziitis hindeutet. Ein Röntgenbild kann einen Sporn zeigen, aber einen zu finden ändert den Übungsplan nicht, und keinen zu finden schließt eine Plantarfasziitis nicht aus. Bildgebung wird sinnvoll, wenn der Schmerz nach mehreren Wochen nicht besser wird oder eine medizinische Fachperson einen Ermüdungsbruch oder ein Nervenproblem vermutet.',
    },
    {
      q: 'Wie häufig ist ein Fersensporn?',
      cites: [CITE.menzSpur],
      a: 'Das hängt vom Alter ab. Frühere Forschung, die die Studie von Menz 2008 zitiert, fand bei 11 bis 16\u00A0% der Gesamtbevölkerung einen plantaren Fersensporn auf dem Röntgenbild. In einer Studie mit 216\u00A0Menschen zwischen 62 und 94\u00A0Jahren hatten 55\u00A0% mindestens einen plantaren Sporn (Menz und Kollegen, 2008). Sporne werden mit dem Alter, einem höheren BMI und Arthrose häufiger.',
    },
    {
      q: 'Wann muss ein Fersensporn operiert werden?',
      cites: [CITE.latt],
      a: 'Fast nie. Die Leitlinie empfiehlt bei Plantarfasziitis nicht, den Sporn zu entfernen. Etwa 90\u00A0% der Menschen mit Plantarfasziitis geht es mit nicht-operativer Behandlung wie Dehnen, Wadenkrafttraining und Belastungssteuerung besser (Latt und Kollegen, 2020). Wenn nach Monaten erfolgloser konservativer Behandlung eine Operation erwogen wird, wird meist die Plantarfaszie teilweise durchtrennt, nicht der Sporn entfernt.',
    },
    {
      q: 'Was passiert, wenn man mit Fersensporn weiterläuft?',
      cites: [CITE.menzSpur, CITE.guideline],
      a: 'Durch Gehen bohrt sich der Sporn nicht in das umliegende Gewebe. Schmerz, der beim Gehen aufflammt, kommt meist von der gereizten Plantarfaszie neben dem Sporn, nicht vom Knochen selbst. Die Leitlinie von 2023 empfiehlt, die Belastung anzupassen, etwa Strecke oder Tempo, statt aufzuhören, wenn Gehen die Ferse am nächsten Morgen schlimmer macht.',
    },
    {
      q: 'Ist Massage bei Fersensporn gut?',
      cites: [CITE.guideline],
      a: 'Sanfte Massage rund um einen Fersensporn kann Verspannungen im Weichgewebe lösen, verändert aber nicht den Knochen selbst. Die Fußsohle mit festem, nicht stechendem Druck zu rollen kann Faszie und Wade lockern, also das Gewebe, das meist den Schmerz verursacht. Die Leitlinie bewertet manuelle Therapie durch eine Fachperson mit A; Selbstmassage dient dem Wohlgefühl und ersetzt das Dehnen nicht.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat, was eher auf einen Riss der Plantarfaszie als auf eine Fasziitis hindeuten kann',
      'du den Fuß nicht belasten kannst oder hinkst',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst, was eher auf einen Ermüdungsbruch als auf einen Sporn oder eine Fasziitis hindeuten kann',
      'Taubheit, Kribbeln oder Brennen dazukommen, was auf einen eingeklemmten Nerv hindeuten kann',
      'die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'beide Fersen wehtun und die Morgensteifigkeit länger als 30\u00A0Minuten anhält, vor allem wenn andere Gelenke steif oder geschwollen sind',
      'der Schmerz dich nachts wach hält oder auch in Ruhe da ist, nicht nur bei Belastung',
      'es nach mehreren Wochen Dehnen, Wadentraining und weniger Belastung nicht besser geworden ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Ob dein Röntgenbild einen Sporn zeigt oder nicht, die Übungen sind dieselben. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Fersenschmerzen ist das erste Ziel ein Morgenschmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück. Das Dehnen beginnt am ersten Tag. Wadenkrafttraining kommt dazu, sobald es beim ersten Ziel nicht mehr nur darum geht, den Schmerz zu beruhigen, sondern Belastbarkeit aufzubauen.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald das Ziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du deinen Fortschritt verfolgen kannst, statt zu raten.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn du nicht sicher bist, ob deine Fersenschmerzen von einer Plantarfasziitis, einem Fersensporn oder etwas anderem kommen, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Plantarfasziitis oder Fersensporn',
  campaign: 'guide-pf-vs-heel-spur-de',
};
