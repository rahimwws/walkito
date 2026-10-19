import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/weight-and-plantar-fasciitis.ts (2026-10-18),
 * written around «Plantarfasziitis Übergewicht», «Fersensporn Übergewicht» and
 * «abnehmen bei Plantarfasziitis». Informal «du», terminology and exercise
 * names as in `lib/guides/de.ts` and the other articles-de pages. Respectful,
 * non-blaming wording: «höheres Körpergewicht» in the body text. Figures,
 * doses, grades, hedges and sources are identical to the English page after
 * its fact-check. Same CITE keys and media ids. Link to /heel-pain-runners/
 * removed (no German version), words kept.
 */

export const WEIGHT_PF_DE: Guide = {
  lang: 'de',
  page: 'weightPf',
  mainSource: CITE.vanLeeuwenBmi,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Übergewicht und Plantarfasziitis: was die Studien zeigen',
  description:
    'Kann Übergewicht eine Plantarfasziitis auslösen, und hilft Abnehmen? Was Studien zeigen, warum Belastung wichtig ist, und Sitzübungen für jedes Gewicht.',
  h1: 'Gewicht und Plantarfasziitis: was die Forschung zeigt und was jetzt hilft',
  lede:
    'Ein höheres Körpergewicht gehört bei Menschen, die nicht sportlich aktiv sind, zu den klarsten Risikofaktoren für eine [Plantarfasziitis](/de/plantarfasziitis/). In einer Übersichtsarbeit über 51\u00A0Studien ging ein Body-Mass-Index (BMI) über 27 mit einer 3,7-fach höheren Chance auf eine Plantarfasziitis einher (van Leeuwen und Kollegen, 2016). Ob Abnehmen die Fersenschmerzen lindert, ist weniger klar: Keine randomisierte Studie hat das bei Menschen mit Fersenschmerzen getestet. Fang deshalb mit den Dehnungen und dem Krafttraining an, die in der Leitlinie von 2023 den höchsten Empfehlungsgrad haben, egal, was du wiegst.',
  intro: [
    'Das Gewicht ist ein Faktor unter mehreren, kein Urteil. In derselben Fall-Kontroll-Studie, die einen BMI über 30 mit Plantarfasziitis in Verbindung brachte, war ein steifes Sprunggelenk ein viel stärkerer Faktor (Riddle und Kollegen, 2003). Menschen jeder Statur bekommen Fersenschmerzen, und bei Menschen jeder Statur werden sie wieder besser. Diese Seite fasst zusammen, was die Studien gefunden haben, was über das Abnehmen bekannt ist, warum die Belastung eine Rolle spielt und welche Übungen du im Sitzen oder mit Halt machen kannst.',
  ],
  takeaways: [
    'In einer Fall-Kontroll-Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne ging ein BMI über 30 mit einer 5,6-fach höheren Chance auf eine Plantarfasziitis einher, verglichen mit einem BMI von 25 oder weniger. Ein steifes Sprunggelenk war der stärkste Faktor, mit einer 23,3-fach höheren Chance (Riddle und Kollegen, 2003).',
    'Eine Übersichtsarbeit über 51\u00A0Studien fand, dass ein BMI über 27 unter den klinischen Faktoren, die sich zusammenfassen ließen, der einzige war, der klar mit Plantarfasziitis zusammenhing, mit einer 3,7-fach höheren Chance. Am stärksten war der Zusammenhang bei Menschen, die nicht sportlich aktiv sind (van Leeuwen und Kollegen, 2016).',
    'Keine randomisierte Studie hat das Abnehmen bei Fersenschmerzen getestet. Eine Übersichtsarbeit von 2012 fand nur zwei Studien zu Gewichtsabnahme und Fußschmerzen, beide nach einer Operation zur Gewichtsabnahme, und nannte die Belege begrenzt (Butterworth und Kollegen, 2012).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Plantarfaszie und Wade mit Empfehlungsgrad **A** und Krafttraining mit **B**. Die Beratung dazu, eine gesunde fettfreie Körpermasse zu erhalten, bekommt **Empfehlungsgrad E**: Sie stützt sich auf Theorie, nicht auf Studien (Koc und Kollegen, 2023).',
    'In einer Nachbeobachtung von 174\u00A0Menschen sagte der BMI nicht voraus, wer Jahre später noch Fersenschmerzen hatte. Vorhersagekraft hatten dagegen weibliches Geschlecht und Schmerzen in beiden Fersen (Hansen und Kollegen, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Beeinflusst das Gewicht eine Plantarfasziitis?',
      keyFact: 'In einer Übersichtsarbeit über 51\u00A0Studien ging ein BMI über 27 mit einer 3,7-fach höheren Chance auf eine Plantarfasziitis einher, und am stärksten war der Zusammenhang bei Menschen, die nicht sportlich aktiv sind (van Leeuwen und Kollegen, 2016).',
      paragraphs: [
        '**Ja, bei Menschen, die nicht sportlich aktiv sind, hängt ein höherer BMI in Studie um Studie mit Plantarfasziitis zusammen.** Der BMI ist das Gewicht geteilt durch die Körpergröße zum Quadrat. Er ist ein grobes Maß, aber es ist das Maß, das diese Studien verwendet haben.',
        'Die bekannteste Studie verglich 50\u00A0Menschen mit Plantarfasziitis an einer Ferse mit 100\u00A0Menschen gleichen Alters und Geschlechts ohne Plantarfasziitis. Ein BMI über 30 ging mit einer 5,6-fach höheren Chance auf eine Plantarfasziitis einher, verglichen mit einem BMI von 25 oder weniger (Riddle und Kollegen, 2003).',
        'Eine Übersichtsarbeit von 2016 fasste 51\u00A0Studien zusammen. Von allen klinischen Faktoren, die die Autoren zusammenfassen konnten, war ein BMI über 27 der einzige, der klar mit Plantarfasziitis zusammenhing, mit einer 3,7-fach höheren Chance, und am stärksten war der Zusammenhang bei Menschen, die nicht sportlich aktiv sind (van Leeuwen und Kollegen, 2016). Zwei frühere Übersichtsarbeiten kamen zum selben Schluss, und beide fanden bei Sportlerinnen und Sportlern keinen Zusammenhang zwischen BMI und Fersenschmerzen (Irving und Kollegen, 2006; Butterworth und Kollegen, 2012).',
        'Die Leitlinie von 2023 zu Fersenschmerzen nennt einen hohen BMI bei Menschen, die nicht sportlich aktiv sind, als Risikofaktor, neben einem steifen Sprunggelenk, Laufen und vielen Stunden auf den Beinen, besonders auf harten Böden (Koc und Kollegen, 2023).',
      ],
      sourceNote:
        'Riddle 2003: BMI über 30 gegenüber 25 oder weniger, Odds Ratio 5,6 (95-%-KI 1,9 bis 16,6). van Leeuwen 2016: BMI über 27, Odds Ratio 3,7 (95-%-KI 2,93 bis 5,62). 46 der 51\u00A0Studien waren Fall-Kontroll-Studien.',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi, CITE.irvingHeelPain, CITE.butterworthBmi, CITE.guideline],
    },
    {
      h2: 'Ist das Gewicht die Ursache oder nur ein Faktor?',
      keyFact: 'In derselben Studie ging ein steifes Sprunggelenk mit einer 23,3-fach höheren Chance auf eine Plantarfasziitis einher und den größten Teil des Arbeitstags auf den Beinen zu verbringen mit einer 3,6-fach höheren, ein BMI über 30 dagegen mit einer 5,6-fach höheren (Riddle und Kollegen, 2003).',
      paragraphs: [
        '**Ein Faktor unter mehreren, und nicht der stärkste.** In der Fall-Kontroll-Studie von 2003 hingen drei Faktoren jeweils unabhängig voneinander mit Plantarfasziitis zusammen:',
        {
          list: [
            'Ein steifes Sprunggelenk (der Fuß lässt sich kaum zum Schienbein hin beugen): 23,3-fach höhere Chance.',
            'Ein BMI über 30: 5,6-fach höhere Chance.',
            'Der größte Teil des Arbeitstags auf den Beinen: 3,6-fach höhere Chance.',
          ],
        },
        'Die Autoren nannten das steife Sprunggelenk den wichtigsten der drei Faktoren (Riddle und Kollegen, 2003). Das ist relevant, denn ein steifes Sprunggelenk kommt oft von [verspannten Waden](/de/verspannte-waden/), und die Wadendehnung kannst du noch heute beginnen.',
        'Die meisten dieser Studien sind Fall-Kontroll- oder Querschnittsstudien: Sie vergleichen Menschen, die schon Fersenschmerzen haben, mit Menschen ohne. Sie zeigen einen Zusammenhang, keinen Beweis, dass das Gewicht die Plantarfasziitis verursacht (van Leeuwen und Kollegen, 2016). Wenn du auch bei der Arbeit stehst, findest du unter [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/) mehr zu dieser Seite der Belastung.',
      ],
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
    },
    {
      h2: 'Warum spielt die Belastung für die Ferse eine Rolle?',
      paragraphs: [
        '**Die Plantarfaszie ist das Band unter dem Fuß, das das Gewölbe trägt, und sie nimmt bei jedem Schritt Last auf.** Mehr Körpergewicht bedeutet mehr Last pro Schritt, also verlangt derselbe Spaziergang oder dieselbe Schicht dem Gewebe mehr ab. Die Empfehlung der Leitlinie bei Fersenschmerzen baut auf diesem Gedanken auf: die Last auf den Füßen bei der Arbeit, in der Freizeit und im Alltag anpassen. Sie gibt dieser Empfehlung **Empfehlungsgrad E**, weil sie sich auf Theorie stützt, nicht auf Studien (Koc und Kollegen, 2023).',
        'Abnehmen senkt den Druck unter dem Fuß. In einer Studie mit 41\u00A0Erwachsenen mit einem durchschnittlichen BMI von fast 36 nahm die Gruppe mit Ernährungsplan in drei Monaten 5,9\u00A0kg ab, gegenüber 1,9\u00A0kg in der Vergleichsgruppe, und hatte unter Teilen des Fußes einen niedrigeren Spitzendruck. Fußform und Gangbild änderten sich nicht (Song und Kollegen, 2015). Fersenschmerzen hat diese Studie nicht gemessen.',
        'Der Druck ist aber nicht alles. In einer Studie mit Menschen mit Fußschmerzen, die auf eine Operation zur Gewichtsabnahme warteten, ließen die Schmerzen nach der Operation nach, aber der Rückgang des Drucks unter dem Fuß hing nicht mit dem Rückgang der Schmerzen zusammen. Die Stimmung schon: Wer mehr depressive Beschwerden hatte, berichtete vorher und nachher über mehr Fußschmerzen (Walsh und Kollegen, 2018). Schmerz wird von mehr als nur Mechanik bestimmt, und das ist ein Grund mehr, dir selbst keine Schuld daran zu geben.',
      ],
      cites: [CITE.guideline, CITE.songWeightLoss, CITE.walshBariatric],
    },
    {
      h2: 'Hilft Abnehmen bei Plantarfasziitis?',
      keyFact: 'Eine Übersichtsarbeit von 2012 fand nur zwei prospektive Studien zu Gewichtsabnahme und Fußbeschwerden, beide nach einer Operation, und kam zu dem Schluss, dass die Belege dafür, dass Abnehmen Fußschmerzen lindert, begrenzt sind (Butterworth und Kollegen, 2012).',
      paragraphs: [
        '**Vielleicht, aber keine randomisierte Studie hat das bei Menschen mit Fersenschmerzen getestet.** Das ist die ehrliche Antwort. Alles, was es gibt, stammt aus Studien ohne fairen Vergleich, meist nach einer Operation zur Gewichtsabnahme. Das sind die Studien:',
      ],
      table: {
        caption: 'Studien zu Gewichtsabnahme und Fuß- oder Fersenschmerzen',
        head: ['Studie', 'Wer', 'Was sie gefunden hat'],
        rows: [
          ['Boules, 2018', '163\u00A0Menschen mit Plantarfasziitis, nach einer Operation zur Gewichtsabnahme', 'Bei 90\u00A0% klangen die Fersenbeschwerden laut Krankenakten ab'],
          ['Walsh, 2018', '45\u00A0Menschen mit Fußschmerzen: 29 wurden operiert, 16 warteten', 'Die Fußschmerzen gingen nach der Operation zurück'],
          ['Song, 2015', '41\u00A0Erwachsene, Ernährungsplan oder Wartezeit', 'Niedrigerer Druck unter dem Fuß, Schmerz nicht gemessen'],
          ['Yang, 2025', '92\u00A0Menschen, die Semaglutid nahmen, unter 2902 mit Fersenschmerzen', 'Stärkere Schmerzbesserung als ohne das Mittel, nicht randomisiert'],
        ],
      },
      after: [
        'Die größte Studie wertete rückblickend die Krankenakten von 163\u00A0Menschen mit Plantarfasziitis aus, die eine Operation zur Gewichtsabnahme hatten. Ihr durchschnittlicher BMI sank von 45 auf etwa 35, und bei 146 von ihnen (90\u00A0%) klangen die Fersenbeschwerden ab (Boules und Kollegen, 2018). Es gab keine Vergleichsgruppe, und bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wird es mit Behandlung ohne Operation ohnehin besser (Latt und Kollegen, 2020). Diese Studie kann also nicht zeigen, wie viel das Abnehmen selbst beigetragen hat.',
        'Die Semaglutid-Studie begleitete Menschen mit lang bestehenden Fersenschmerzen. Die 92, die das Mittel wegen Diabetes oder zur Gewichtsabnahme nahmen, berichteten über eine stärkere Besserung als die anderen, aber sie wurden nicht zufällig ausgewählt, und die Autoren fordern eine randomisierte Studie (Yang und Kollegen, 2025). Medikamente oder eine Operation zur Gewichtsabnahme sind Entscheidungen für dich und deine Ärztin oder deinen Arzt, nichts, womit du allein wegen Fersenschmerzen anfängst.',
        'Die Leitlinie empfiehlt Fachleuten nicht, bei Fersenschmerzen eine Gewichtsabnahme zu verordnen. Sie sagt, dass sie Beratung zu Bewegung anbieten können, um eine gesunde fettfreie Körpermasse aufzubauen oder zu erhalten, und an eine Ernährungsberatung überweisen können, mit **Empfehlungsgrad E** (Koc und Kollegen, 2023).',
      ],
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.walshBariatric, CITE.songWeightLoss, CITE.yangSemaglutide, CITE.latt, CITE.guideline],
    },
    {
      h2: 'Welche Übungen passen bei einem höheren Körpergewicht?',
      paragraphs: [
        'Die Übungen mit den besten Empfehlungsgraden in der Leitlinie von 2023, Dehnen (**A**) und Krafttraining für die Wade (**B**), hängen nicht von deinem Gewicht ab (Koc und Kollegen, 2023). Was sich ändert, ist der Einstieg. Varianten im Sitzen und mit Halt bringen weniger Last auf die Ferse und schonen Knie und Gleichgewicht, deshalb stehen sie hier am Anfang.',
        'Das sind dieselben Anfangsdosen wie in der Anleitung [Plantarfasziitis-Übungen](/de/plantarfasziitis-uebungen/). Mach die erste Plantarfaszien-Dehnung auf der Bettkante sitzend, bevor du aufstehst: In einer Studie mit 82\u00A0Menschen linderte eine Plantarfaszien-Dehnung vor dem Aufstehen den Schmerz bei den ersten Schritten am Morgen stärker als die Wadendehnung allein (DiGiovanni und Kollegen, 2003). Wenn eine Übung deinen Fersenschmerz auf 6 von 10 bringt, hör für heute auf.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Wenn das Übereinanderschlagen schwerfällt, lass den Fuß auf dem Boden, leg ein Handtuch um den Fußballen und zieh stattdessen sanft daran.',
          stop: 'Stechender Fersenschmerz oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand oder auf eine Küchenarbeitsplatte. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Die Wand trägt einen Teil deines Gewichts, du lehnst dich also nur so weit vor, wie es sich stabil anfühlt.',
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
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position an der Wand, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
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
          often: '3\u00A0Tage pro Woche, nie zwei Tage hintereinander',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, der tiefere Wadenmuskel, fast ohne Last auf der Ferse. Das ist die erste Stufe des Wadentrainings, egal, was du wiegst.',
          stop: 'Fersenschmerz, der 6 von 10 erreicht oder am nächsten Morgen schlimmer ist',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig, mit Halt an der Arbeitsplatte',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An Krafttagen, sobald sich das Fersenheben im Sitzen leicht anfühlt',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich vor eine Arbeitsplatte oder die Lehne eines stabilen Stuhls und leg die Hände darauf. Heb dich gerade über die großen Zehen nach oben und senk dich langsam wieder ab. An einem schmerzhaften Tag können deine Hände etwas Gewicht übernehmen, und weniger, je kräftiger du wirst. Beide Füße teilen sich die Last.',
          stop: 'Fersenschmerz, der 6 von 10 erreicht oder am nächsten Morgen schlimmer ist',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'moderate', why: 'Teil des Programms, das in einer Studie von 2023 die Form des Gewölbes verbessert hat. Allein hat das Kurzer-Fuß-Training schwächere Ergebnisse. Bei Fersenschmerzen nicht getestet.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Das Gewölbe hebt sich',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt, und halte. Die Außenkante des Fußes bleibt am Boden. Krall die Zehen nicht ein. Das Einkrallen ist der häufigste Fehler bei dieser Übung.',
          stop: 'Ein Krampf im Fuß, der nicht nachlässt, wenn du aufhörst',
          image: 'Übung: kurzer Fuß im Sitzen',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß im Sitzen: Heb das Gewölbe, ohne die Zehen einzukrallen',
          alt: 'Eine sitzende Figur hebt das Gewölbe eines Fußes an, das Gewölbe ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Welche Aktivitäten schonen die Ferse?',
      paragraphs: [
        '**Aktivitäten, bei denen deine Füße nicht bei jedem Schritt dein volles Gewicht tragen.** Die Leitlinie rät, die Last auf den Füßen zu verändern, statt mit der Aktivität aufzuhören (Koc und Kollegen, 2023). Keine Studie hat Aktivitäten für Menschen mit Fersenschmerzen und höherem Gewicht verglichen. Das hier sind also praktische Möglichkeiten, keine getesteten:',
        {
          list: [
            '**Ein Heimtrainer oder Liegeergometer.** Du bleibst in Bewegung, während ein Sitz dein Gewicht trägt.',
            '**Schwimmen oder Gehen im Wasser.** Das Wasser nimmt deinen Füßen einen großen Teil des Gewichts ab.',
            '**Training im Sitzen oder für den Oberkörper.** Armkurbeln, Widerstandsbänder oder Übungen auf dem Stuhl halten dich an Tagen aktiv, an denen die Ferse schmerzt.',
            '**Kürzere Spaziergänge, dafür öfter.** Mehrere kurze Spaziergänge können für eine schmerzende Ferse leichter sein als ein langer.',
          ],
        },
        'Ein einfacher Test funktioniert bei jeder Aktivität: Wenn deine ersten Schritte am nächsten Morgen deutlich schlimmer sind, war der Tag mehr, als die Ferse verkraften konnte. Mach beim nächsten Mal etwas weniger. [Gehen bei Plantarfasziitis](/de/gehen-bei-plantarfasziitis/) erklärt, wie du das Gehen Schritt für Schritt wieder aufbaust.',
        'Wenn du mit Bewegung anfängst, um dich besser zu fühlen oder abzunehmen, kannst du mit gelenkschonenden Aktivitäten dranbleiben, während sich die Ferse beruhigt. Die Leitlinie nennt Laufen und viele Stunden auf den Beinen, besonders auf harten Böden, als Risikofaktoren für Fersenschmerzen (Koc und Kollegen, 2023).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Sind Schuhe und Einlagen bei höherem Gewicht wichtiger?',
      paragraphs: [
        'Keine Studie hat Schuhe oder Einlagen bei Fersenschmerzen speziell bei Menschen mit höherem Gewicht getestet. Bei Fersenschmerzen im Allgemeinen bewertet die Leitlinie von 2023 Einlagen allein mit **Empfehlungsgrad B gegen die Anwendung**: Die Belege sprechen dagegen, sich nur auf sie zu verlassen. Kombiniert mit Dehnen und Krafttraining bekommen sie ein **C** (Koc und Kollegen, 2023). [Einlagen oder Übungen](/de/einlagen-oder-uebungen/) vergleicht beides.',
        'Die Leitlinie empfiehlt eine Beratung zu Schuhen als Teil der Laststeuerung, und sie nennt Arbeit im Stehen auf harten Böden mit schlechter Dämpfung als Risikofaktor (Koc und Kollegen, 2023). Eine praktische Möglichkeit, die in Studien nicht getestet wurde, sind stützende, gedämpfte Schuhe auf harten Böden, auch zu Hause.',
        'Nach einer großen Gewichtsabnahme können sich die Füße verändern. In der Studie zur Operation vermuteten die Autoren, dass der Verlust von Fettgewebe unter dem Mittelfuß verändern kann, wie Schuhe und Einlagen passen, und dass es sich lohnt, das nach einer großen Gewichtsabnahme zu prüfen (Walsh und Kollegen, 2018).',
      ],
      cites: [CITE.guideline, CITE.walshBariatric],
    },
    {
      h2: 'Geht eine Plantarfasziitis weg, wenn ich nicht abnehme?',
      paragraphs: [
        '**Bei den meisten Menschen ja, sie lässt mit der Zeit und mit Behandlung ohne Operation nach.** Bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wird es mit Behandlung ohne Operation besser, etwa mit Dehnungen und Einlagen, oft innerhalb von 3 bis 6\u00A0Monaten (Latt und Kollegen, 2020).',
        'In einer langen Nachbeobachtung von 174\u00A0Menschen prüften die Forschenden, ob BMI, Alter, Rauchen, körperliche Arbeit und andere Faktoren vorhersagten, wer Jahre später noch Fersenschmerzen hatte. Das galt nur für weibliches Geschlecht und Schmerzen in beiden Fersen, nicht für den BMI (Hansen und Kollegen, 2018). Warum Frauen um 50 häufiger betroffen sind, erklärt [Plantarfasziitis und Wechseljahre](/de/plantarfasziitis-wechseljahre/).',
        'Ein höheres Gewicht macht es also vielleicht wahrscheinlicher, dass eine Plantarfasziitis beginnt, aber es heißt nicht, dass du sie behalten musst. Die Dehnungen und das Wadentraining oben sind dieselben, die Menschen jeder Statur helfen. [Wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/) zeigt den ganzen Verlauf.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
  ],
  faq: [
    {
      q: 'Kann Übergewicht eine Plantarfasziitis auslösen?',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
      a: 'Ein höheres Gewicht hängt mit Plantarfasziitis zusammen, aber keine Studie beweist, dass es sie verursacht. Ein BMI über 30 ging in einer Studie mit einer 5,6-fach höheren Chance einher, und eine Übersichtsarbeit über 51\u00A0Studien fand eine 3,7-fach höhere Chance bei einem BMI über 27, am stärksten bei Menschen, die nicht sportlich aktiv sind. Ein steifes Sprunggelenk war ein noch stärkerer Faktor.',
    },
    {
      q: 'Hilft Abnehmen bei Plantarfasziitis?',
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.latt],
      a: 'Vielleicht, aber keine randomisierte Studie hat das bei Menschen mit Fersenschmerzen getestet. In einer Auswertung von Krankenakten von 163\u00A0Menschen mit Plantarfasziitis nach einer Operation zur Gewichtsabnahme klangen die Fersenbeschwerden bei 90\u00A0% ab, aber es gab keine Vergleichsgruppe, und bei den meisten Menschen mit Plantarfasziitis wird es mit Behandlung ohne Operation ohnehin besser (Latt und Kollegen, 2020). Eine Übersichtsarbeit von 2012 nannte die Belege begrenzt.',
    },
    {
      q: 'Wie viel muss ich abnehmen, damit die Plantarfasziitis besser wird?',
      cites: [CITE.butterworthBmi],
      a: 'Keine Studie hat eine Menge ermittelt. Es gibt keine Studie zum Abnehmen bei Fersenschmerzen, jede Zahl, die du liest, ist also geraten. Wenn du für deine Gesundheit abnehmen möchtest, sprich mit deiner Ärztin oder deinem Arzt. Für die Ferse selbst haben Dehnen und Krafttraining für die Wade die stärksten Belege, egal, was du wiegst.',
    },
    {
      q: 'Ist der BMI bei Läuferinnen und Läufern ein Risikofaktor für Plantarfasziitis?',
      cites: [CITE.irvingHeelPain, CITE.butterworthBmi],
      a: 'Meist nicht. Zwei systematische Übersichtsarbeiten fanden, dass der BMI bei Menschen, die nicht sportlich aktiv sind, mit chronischen Fersenschmerzen zusammenhing, bei Sportlerinnen und Sportlern aber nicht. Beim Laufen spielen andere Faktoren eine größere Rolle.',
    },
    {
      q: 'Welche Übungen kann ich bei Plantarfasziitis und Übergewicht machen?',
      cites: [CITE.guideline],
      a: 'Übungen im Sitzen und mit Halt sind ein guter Anfang: eine Plantarfaszien-Dehnung im Sitzen, Wadendehnungen an der Wand und Fersenheben im Sitzen. Für die Ausdauer halten dich ein Heimtrainer, Schwimmen oder Gehen im Wasser in Bewegung, mit weniger Last auf der Ferse. Die Leitlinie von 2023 rät, die Last auf den Füßen zu verändern, statt mit der Aktivität aufzuhören.',
    },
    {
      q: 'Helfen Medikamente zum Abnehmen bei Plantarfasziitis?',
      cites: [CITE.yangSemaglutide],
      a: 'Es gibt eine Beobachtungsstudie. Menschen mit lang bestehenden Fersenschmerzen, die Semaglutid nahmen, berichteten über eine stärkere Besserung als die anderen, aber sie wurden nicht zufällig zugeteilt, und die Autoren fordern eine randomisierte Studie. Das ist eine Entscheidung für dich und deine Ärztin oder deinen Arzt, nichts, womit du allein wegen Fersenschmerzen anfängst.',
    },
    {
      q: 'Warum tun meine Fersen mehr weh, seit ich zugenommen habe?',
      cites: [CITE.guideline, CITE.songWeightLoss],
      a: 'Mehr Körpergewicht bedeutet bei jedem Schritt mehr Last auf der Plantarfaszie, und Fersenschmerzen beginnen oft, nachdem die Last auf den Füßen gestiegen ist. In einer Studie mit 41\u00A0Erwachsenen senkte das Abnehmen den Druck unter Teilen des Fußes. Fersenschmerzen wurden in dieser Studie nicht gemessen, der Zusammenhang mit dem Schmerz ist also wahrscheinlich, aber nicht belegt.',
    },
    {
      q: 'Geht eine Plantarfasziitis auch ohne Abnehmen weg?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Bei den meisten Menschen ja. Bei etwa 90\u00A0% wird es mit Behandlung ohne Operation besser, etwa mit Dehnungen und Einlagen, oft innerhalb von 3 bis 6\u00A0Monaten. In einer langen Nachbeobachtung von 174\u00A0Menschen sagte der BMI nicht voraus, wer Jahre später noch Fersenschmerzen hatte. Vorhersagekraft hatten dagegen weibliches Geschlecht und Schmerzen in beiden Fersen.',
    },
    {
      q: 'Sind Einlagen wichtiger, wenn ich schwerer bin?',
      cites: [CITE.guideline],
      a: 'Das hat keine Studie getestet. Bei Fersenschmerzen im Allgemeinen rät die Leitlinie von 2023 davon ab, sich nur auf Einlagen zu verlassen (Empfehlungsgrad B gegen die Anwendung), und gibt ihnen ein C in Kombination mit Dehnen und Krafttraining. Gedämpfte Schuhe auf harten Böden sind eine praktische Möglichkeit, auch wenn Studien sie nicht getestet haben. Mehr unter [Einlagen oder Übungen](/de/einlagen-oder-uebungen/).',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'du Diabetes hast und Taubheit, Kribbeln, eine Wunde oder Veränderungen an der Haut oder der Form deines Fußes bemerkst',
      'der Schmerz nach einem Sturz, einem Sprung oder einem Umknicken begann oder du den Fuß nicht belasten kannst',
      'die Ferse geschwollen, gerötet oder warm ist oder du Fieber hast',
      'der Schmerz nachts oder in Ruhe schlimmer ist oder mit Brennen oder Taubheit einhergeht',
      'es wehtut, wenn du die Ferse seitlich zusammendrückst, oder der Schmerz bei Belastung immer weiter zunimmt (möglicher Ermüdungsbruch)',
      'eine Wade schmerzt und geschwollen ist (mögliches Blutgerinnsel): Lass es noch am selben Tag ärztlich abklären',
      'beide Fersen wehtun und du zusätzlich Gelenkschmerzen oder Steifigkeit an anderen Stellen hast',
      'du über Medikamente oder eine Operation zur Gewichtsabnahme nachdenkst: Das besprichst du am besten mit deiner Ärztin oder deinem Arzt',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß. Sie erfasst dein Gewicht nicht und gibt keine Ernährungstipps. Sie stellt einen Plan aus den Dehnungen und dem Wadentraining auf dieser Seite zusammen und beginnt mit den Varianten im Sitzen und mit Halt.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deinen Fersenschmerz am Morgen, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['heelPain', 'walkingPf', 'standing'],
  crumb: 'Gewicht und Plantarfasziitis',
  campaign: 'guide-weight-and-plantar-fasciitis-de',
};
