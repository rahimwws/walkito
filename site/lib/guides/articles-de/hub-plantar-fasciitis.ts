import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Plantarfasziitis (DE) ────────────────────────────────────────
 *
 * Translated from `articles/hub-plantar-fasciitis.ts`, written around the
 * German queries «Plantarfasziitis», «Plantarfasziitis Symptome»,
 * «Plantarfasziitis Ursachen», «Fersenschmerzen». Informal «du», terminology
 * and exercise names as in `lib/guides/de.ts`. Figures, grades and
 * qualifiers are identical to the English page. No new citations.
 */

export const HUB_PLANTAR_FASCIITIS_DE: Guide = {
  lang: 'de',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Plantarfasziitis: Symptome, Ursachen und was hilft',
  description:
    'Was Plantarfasziitis ist, Symptome und Ursachen, was die Leitlinie von 2023 empfiehlt, wie lange Fersenschmerzen dauern und welche Übungen helfen.',
  h1: 'Plantarfasziitis: Symptome, Ursachen und was laut Studienlage hilft',
  lede:
    'Plantarfasziitis ist Schmerz unter der Ferse durch Überlastung der Plantarfaszie, des dicken Gewebebands, das vom Fersenbein bis zu den Zehen läuft. Sie ist die häufigste Ursache für Fersenschmerzen unter dem Fuß. Die klinische Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen ihre beste Bewertung und Krafttraining die zweitbeste, und etwa 90\u00A0% der Menschen geht es mit nicht-operativer Behandlung besser.',
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, A, und Krafttraining ein B (Koc und Kollegen, 2023).',
    'Etwa 90\u00A0% der Menschen mit Plantarfasziitis geht es mit nicht-operativer Behandlung wie Dehnen, Krafttraining und stützenden Schuhen besser, oft innerhalb einiger Monate (Latt und Kollegen, 2020).',
    'Eine eingeschränkte Dorsalflexion im Sprunggelenk, also wie weit sich der Fuß Richtung Schienbein anziehen lässt, war in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen der stärkste unabhängige Risikofaktor, mit einer Odds Ratio von 23,3 (Riddle und Kollegen, 2003).',
    'Fersenschmerzen bei den ersten Schritten am Morgen, die nach ein paar Minuten Gehen nachlassen, sind das typischste Beschwerdemuster (Koc und Kollegen, 2023).',
    'In einer Langzeitbeobachtung von 174\u00A0Patientinnen und Patienten war nach fünf Jahren etwa die Hälfte beschwerdefrei. Von denen, die noch Beschwerden hatten, berichteten die meisten nur von leichten Schmerzen (Hansen und Kollegen, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist Plantarfasziitis?',
      figure: { id: 'plantar-fascia', caption: 'Die Plantarfaszie verläuft vom Fersenbein bis zu den Zehen. Der Schmerz bei Plantarfasziitis beginnt meist dort, wo sie an der Ferse ansetzt.', alt: 'Fußsohle mit der Plantarfaszie als weiße Bänder, die sich vom Fersenbein fächerförmig bis zu den Zehen ausbreiten, und einem roten Fleck an der Ferse, wo der Schmerz meist beginnt.' },
      paragraphs: [
        'Plantarfasziitis ist eine Überlastung der Plantarfaszie. Die Plantarfaszie ist ein festes Band aus Bindegewebe, das an der Fußsohle vom Fersenbein (Calcaneus) bis zu den Zehengrundgelenken läuft. Sie stützt das Fußgewölbe und federt jeden Schritt ab.',
        'Wenn die Faszie stärker belastet wird, als sie sich erholen kann, wird das Gewebe nahe seinem Ansatz an der Ferse gereizt. Die Endung „-itis“ klingt nach Entzündung, aber nach heutigem Verständnis geht es eher um einen degenerativen Prozess im Gewebe als um eine anhaltende Entzündung. Manche Fachleute sagen deshalb „Plantarfasziopathie“. Der Name ändert nichts an den Beschwerden oder am empfohlenen Vorgehen.',
        'Die klinische Leitlinie von 2023 aus dem Journal of Orthopaedic & Sports Physical Therapy nennt sie die am häufigsten erkannte Ursache für Fersenschmerzen unter dem Fuß.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Wie fühlt sich Plantarfasziitis an?',
      paragraphs: [
        'Das typische Symptom ist Schmerz unter der Ferse bei den ersten Schritten am Morgen. Die Leitlinie beschreibt ihn als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ auffällt. Meist lässt er nach, wenn du ein paar Minuten gehst, und kommt zurück, wenn du eine Weile gesessen hast und wieder aufstehst.',
        'Der Schmerz sitzt meist vorn an der Innenseite der Ferse, dort, wo die Faszie am Knochen ansetzt. Er kann ins Fußgewölbe ausstrahlen. Am schlimmsten ist er meist nach dem Ausruhen, nicht während der Belastung, also genau umgekehrt, als die meisten erwarten.',
        'Am deutlichsten zeigt sich der Schmerz am nächsten Morgen. Ist der nächste Morgen schlimmer, hat der Vortag dem Fuß zu viel abverlangt. Deshalb ist der Morgenschmerz der nützlichste Maßstab für deinen Fortschritt. [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) erklärt dieses Muster im Detail.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Was verursacht Plantarfasziitis, und wen trifft sie?',
      keyFact: 'In einer Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100 ohne erhöhte eine eingeschränkte Dorsalflexion im Sprunggelenk die Odds für Plantarfasziitis um das 23,3-Fache, der stärkste gemessene Risikofaktor (Riddle und Kollegen, 2003).',
      paragraphs: [
        'Plantarfasziitis entsteht, wenn die Faszie stärker belastet wird, als sie verkraften und sich davon erholen kann. Die Last kann auf einmal zu groß sein (ein plötzlicher Sprung bei den Laufkilometern) oder über lange Zeit gleichmäßig wirken (den ganzen Tag auf hartem Boden stehen).',
        'Eine gematchte Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0Kontrollen fand, dass eine eingeschränkte Dorsalflexion im Sprunggelenk der stärkste unabhängige Risikofaktor war, mit einer Odds Ratio von 23,3. In einer anderen Serie von 254\u00A0Personen mit Plantarfasziitis hatten 52 bis 60\u00A0% eine Verkürzung, die nur den Gastrocnemius betraf, den größeren, oberflächlicheren Wadenmuskel. Langes Stehen bei der Arbeit erhöhte die Odds um das 3,6-Fache. Ein höherer Body-Mass-Index erhöhte sie ebenfalls.',
        'Die Leitlinie nennt weitere Risikofaktoren: ein Alter zwischen 40 und 60, Laufen oder Springen und Berufe mit langem Stehen. Plattfüße oder ein Hohlfuß können verändern, wie die Last durch die Faszie läuft, aber keins von beiden führt zwangsläufig dazu.',
        'Meist kommt Plantarfasziitis aus einer Kombination: eine verkürzte Wade, eine Belastung, auf die der Fuß nicht vorbereitet war, und zu wenig Erholungszeit.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'Wie wird Plantarfasziitis diagnostiziert?',
      paragraphs: [
        'Plantarfasziitis wird meist von einer medizinischen Fachperson anhand deiner Vorgeschichte und einer körperlichen Untersuchung diagnostiziert. Die wichtigsten Befunde sind Druckschmerz vorn an der Innenseite der Ferse, Schmerz bei den ersten Schritten am Morgen und Schmerz, der bei Bewegung nachlässt und nach dem Ausruhen zurückkommt.',
        'Bildgebung ist im typischen Fall nicht nötig. Die Leitlinie empfiehlt, Bildgebung in Betracht zu ziehen, wenn das Muster nicht passt, wenn die Beschwerden nach mehreren Wochen konservativer Behandlung nicht besser werden oder wenn eine andere Diagnose ausgeschlossen werden muss (zum Beispiel ein Ermüdungsbruch oder ein eingeklemmter Nerv). Ultraschall und MRT können eine verdickte Faszie zeigen, aber eine verdickte Faszie auf dem Bild ohne das passende Beschwerdemuster ist keine Plantarfasziitis.',
        'Walkito stellt keine Diagnose. Wenn du nicht sicher bist, ob deine Fersenschmerzen von einer Plantarfasziitis kommen, ist eine medizinische Fachperson der richtige Startpunkt.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Was hilft bei Plantarfasziitis?',
      keyFact: 'In einer Studie mit 48\u00A0Personen linderte belastetes Fersenheben mit Handtuch die Schmerzen nach drei Monaten schneller als Dehnen allein, nach zwölf Monaten lagen beide Gruppen aber gleichauf (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'Die klinische Leitlinie von 2023 bewertet jede Option danach, wie stark die Belege dafür sind. Die stärksten Empfehlungen sind Dehnen, Tapen, manuelle Therapie durch eine Fachperson und Nachtschienen bei anhaltendem Morgenschmerz. Danach kommt Krafttraining. Die Tabelle unten zeigt die wichtigsten Optionen mit ihren Bewertungen.',
        'Keine einzelne Option hilft allen. Die meisten fangen mit Dehnen und stützenden Schuhen an, nehmen Krafttraining dazu, sobald der erste Schmerz abklingt, und sprechen mit einer medizinischen Fachperson über die übrigen Optionen, wenn der Fortschritt stockt. In einer Studie mit 48\u00A0Personen linderte belastetes Fersenheben mit einem Handtuch unter den Zehen die Schmerzen nach drei Monaten schneller als Dehnen allein, nach zwölf Monaten lagen beide Gruppen aber gleichauf. Die Leitlinie rät davon ab, Einlagen allein als kurzfristige Lösung einzusetzen, und davon, therapeutischen Ultraschall zusätzlich zum Dehnen zu nutzen.',
      ],
      table: {
        caption: 'Bewertungen der Leitlinie von 2023 bei Fersenschmerzen unter dem Fuß',
        head: ['Option', 'Bewertung', 'Hinweise'],
        rows: [
          ['Dehnen von Plantarfaszie und Wade', '**A**', 'Beste Bewertung. Der Kern der konservativen Behandlung.'],
          ['Manuelle Therapie (Arbeit an Gelenken und Weichteilen)', '**A**', 'Beste Bewertung. Durch eine Fachperson, bei eingeschränkter Beweglichkeit von Gelenken und Gewebe.'],
          ['Tapen des Fußes (starr oder elastisch)', '**A**', 'Beste Bewertung für kurzfristig weniger Schmerz und bessere Funktion, zusammen mit anderer Behandlung.'],
          ['Nachtschienen für 1 bis 3\u00A0Monate', '**A**', 'Beste Bewertung bei anhaltendem Morgenschmerz. Siehe [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/).'],
          ['Krafttraining (belastetes Fersenheben)', '**B**', 'Hat die Besserung in einer Studie mit 48\u00A0Personen beschleunigt. Siehe [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).'],
          ['Low-Level-Lasertherapie', '**B**', 'Behandlung in der Praxis.'],
          ['Dry Needling', '**B**', 'Behandlung in der Praxis.'],
          ['Einlagen in Kombination mit anderer Behandlung', '**C**', 'Schwache Belege. Kann als Teil eines breiteren Programms helfen.'],
          ['Einlagen allein, kurzfristig', '**B dagegen**', 'Die Leitlinie rät **davon ab**, sich allein darauf zu verlassen.'],
          ['Therapeutischer Ultraschall zusätzlich zum Dehnen', '**A dagegen**', 'Die Belege sprechen nicht dafür, ihn hinzuzunehmen.'],
        ],
      },
      sourceNote:
        'Bewertungen aus Koc und Kollegen, 2023, klinische Leitlinie zu Fersenschmerzen im Journal of Orthopaedic & Sports Physical Therapy.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Wie lange dauert eine Plantarfasziitis?',
      keyFact: 'In einer Kohorte von 174\u00A0Personen war nach fünf Jahren etwa die Hälfte beschwerdefrei, und 46\u00A0% hatten nach zehn Jahren noch etwas Schmerz, die meisten nur leicht (Hansen und Kollegen, 2018).',
      paragraphs: [
        'Eine Übersichtsarbeit von 2020 berichtet, dass es etwa 90\u00A0% der Menschen mit nicht-operativer Behandlung besser geht, oft innerhalb einiger Monate. Eine längere Beobachtung von 174\u00A0Patientinnen und Patienten zeichnet ein genaueres Bild: Nach fünf Jahren war etwa die Hälfte beschwerdefrei, und 46\u00A0% hatten nach durchschnittlich zehn Jahren noch etwas Schmerz, wobei die meisten davon nur leichte Beschwerden angaben.',
        'Die Erholung hängt davon ab, wie lange du die Beschwerden schon hast, was du dagegen tust, und von einigen Faktoren, die du nicht beeinflussen kannst. In der Kohorte von Hansen 2018 sagten weibliches Geschlecht und Fersenschmerzen auf beiden Seiten eine langsamere Erholung signifikant voraus. BMI, Alter, Dicke der Faszie und ein Fersensporn taten es nicht.',
        'Die nützliche Frage ist nicht „wie viele Wochen noch“, sondern „ist mein Morgenschmerz diesen Monat niedriger als letzten Monat?“ Dieser Trend ist der eigentliche Meilenstein. [Wie lange dauert Plantarfasziitis?](/de/wie-lange-dauert-plantarfasziitis/) fasst die Studien zum Zeitverlauf vollständig zusammen.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Welche Übungen und Dehnungen helfen bei Plantarfasziitis?',
      paragraphs: [
        'Die Übungen, die die Leitlinie stützt, fallen in zwei Gruppen: Dehnen (Bewertung A) und Krafttraining (Bewertung B). Das Dehnen zielt auf die Plantarfaszie und die Wade. Krafttraining baut die Belastbarkeit der Wade auf, damit sie die Last des Alltags trägt, ohne die Faszie zu überlasten.',
        '[Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) hat die vollständige Liste mit Startdosis, was du spüren solltest und wann du aufhörst. [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/) geht tiefer auf die eine Übung hinter der wichtigsten Krafttraining-Studie ein. Eigene Seiten erklären jede Übung:',
      ],
      bullets: [
        'Die [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/) zieht die Zehen zurück und belastet die Faszie sanft, bevor du aufstehst.',
        'Die [Wadendehnung](/de/uebungen/wade-dehnen/) und die [Soleusdehnung](/exercises/soleus-stretch/) (auf Englisch) setzen an der verkürzten Wade an, die an der Ferse zieht.',
        'Das [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/) ist das belastete Wadenheben aus der Studie von Rathleff.',
        'Das [Fußrollen](/exercises/foot-roll/) (auf Englisch) beruhigt das Gewebe zwischen den Einheiten.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Warum sind die Morgen am schlimmsten?',
      paragraphs: [
        'Die Plantarfaszie wird im Schlaf steif und verkürzt sich. In Ruhe zeigt dein Fuß meist nach unten. Wenn du aufstehst und der Fuß sich unter deinem vollen Gewicht abflacht, wird das verkürzte Gewebe plötzlich gedehnt. Das ist das stechende Ziehen bei den ersten Schritten.',
        'Das Wirksamste, was du tun kannst, passiert, bevor dein Fuß den Boden berührt. Setz dich auf die Bettkante, leg einen Knöchel über das andere Knie und zieh die Zehen sanft etwa 10\u00A0Sekunden zurück, 10-mal pro Fuß. Die Leitlinie gibt dieser Dehnung ihre beste Bewertung.',
        'Nachtschienen halten den Fuß über Nacht im rechten Winkel, sodass die Faszie sanft gedehnt bleibt. Auch ihnen gibt die Leitlinie ein A, für Menschen, deren Schmerz bei den ersten Schritten trotz Dehnen bleibt. [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) erklärt die Morgenroutine, Nachtschienen und andere Ursachen mit demselben Muster bei den ersten Schritten.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Plantarfasziitis bei der Arbeit und beim Laufen',
      paragraphs: [
        'Langes Stehen auf harten Böden ist einer der Risikofaktoren aus der Studie von Riddle 2003: Es erhöhte die Odds für Plantarfasziitis um das 3,6-Fache. Eine Übersichtsarbeit von 2015 zur arbeitsmedizinischen Literatur verband langes Stehen bei der Arbeit mit Beschwerden des Bewegungsapparats, Erschöpfung und Beinschmerzen. Wenn dir die Füße am Ende einer Schicht wehtun, gelten dieselben Wadendehnungen und dasselbe Krafttraining.',
        'Läuferinnen und Läufern rät die Leitlinie von 2023, die Belastung zu verändern, statt ganz aufzuhören. Das heißt, Umfang oder Intensität zu reduzieren, nicht auf null zu gehen. Die Empfehlung beruht auf theoretischen Grundlagen (Bewertung E), weil keine Studie sie getestet hat, aber sie passt dazu, wie auch die Leitlinien zur Achillessehne und zum Schienbeinkantensyndrom mit Überlastungsverletzungen umgehen.',
      ],
      bullets: [
        '[Fußschmerzen vom langen Stehen](/feet-hurt-standing-all-day/) (auf Englisch) behandelt Übungen und Schuhe für alle, die bei der Arbeit viel stehen.',
        '[Fußschmerzen in der Pflege](/nurses-foot-pain/) (auf Englisch) geht auf lange Schichten auf harten Böden ein.',
        '[Fußschmerzen am Stehschreibtisch](/standing-desk-foot-pain/) (auf Englisch) behandelt den Wechsel zwischen Sitzen und Stehen.',
        '[Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) zeigt, wie du das Training anpasst, wenn die Ferse wehtut.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: 'Kann der Schmerz etwas anderes als Plantarfasziitis sein?',
      paragraphs: [
        'Mehrere Erkrankungen teilen dieselbe Stelle oder dasselbe Morgenmuster. Wo der Schmerz sitzt und wie er sich verhält, hilft, sie auseinanderzuhalten.',
        '**Achillessehnenentzündung.** Schmerz hinten an der Ferse oder in der Sehne darüber, nicht unter dem Fuß. Steifheit bei den ersten Schritten ist häufig, aber der Schmerz sitzt höher. Siehe [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
        '**Fersenpolster-Syndrom.** Ein tiefer, dumpfer Schmerz mitten in der Ferse, schlimmer auf hartem Boden und barfuß. Ein Scoping Review von 2022 stellte fest, dass es sich ohne Bildgebung schwer von einer Plantarfasziitis unterscheiden lässt. Schmerz durch das Fettpolster sitzt genau in der Mitte unter der Ferse, Schmerz durch die Faszie vorn an der Innenseite.',
        '**Fersensporn.** Ein knöcherner Auswuchs an der Unterseite des Fersenbeins. Viele Menschen haben einen, ganz ohne Schmerzen. In der Kohorte von Hansen 2018 mit 174\u00A0Patientinnen und Patienten hatte ein Fersensporn zu Beginn keinen signifikanten Einfluss darauf, wie lange die Beschwerden anhielten. Der Sporn ist oft da, aber er treibt den Schmerz nicht an.',
        '**Ermüdungsbruch des Fersenbeins.** Schmerz, der bei Belastung zunimmt, statt nach dem Aufwärmen nachzulassen. Er kann in Ruhe oder nachts wehtun. Wenn du die Seiten der Ferse zusammendrückst, löst das oft den Schmerz aus. Geh zu einer medizinischen Fachperson, bevor du den Fuß trainierst.',
        '**Entzündliche Gelenkerkrankung.** Wenn beide Fersen wehtun, die Morgensteifigkeit länger als 30\u00A0Minuten anhält und andere Gelenke steif oder geschwollen sind, deutet das Muster eher auf etwas Systemisches. Eine medizinische Fachperson sollte das abklären.',
        'Wenn du unsicher bist, kann eine medizinische Fachperson diese Ursachen anhand von Ort, Verhalten und bei Bedarf Bildgebung unterscheiden.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'Apps bei Plantarfasziitis',
      paragraphs: [
        'Mehrere Apps enthalten Übungen bei Plantarfasziitis. Sie unterscheiden sich darin, ob sie sich an den Schmerz anpassen, die Belastung schrittweise steigern und sowohl Dehnen als auch Krafttraining abdecken. [Die beste App bei Plantarfasziitis](/de/beste-app-plantarfasziitis/) vergleicht sieben davon nebeneinander, Walkito eingeschlossen.',
      ],
    },
    {
      h2: 'Alle Ratgeber zur Plantarfasziitis auf dieser Seite',
      bullets: [
        '[Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) hat die vollständige Übungsliste mit Dosis und Bewertungen der Leitlinie.',
        '[Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/) erklärt das Fersenheben-Protokoll aus der Studie von Rathleff.',
        '[Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) erklärt Morgenschmerz, Nachtschienen und andere Ursachen mit Schmerz bei den ersten Schritten.',
        '[Wie lange dauert Plantarfasziitis?](/de/wie-lange-dauert-plantarfasziitis/) behandelt den Zeitverlauf, Prognosefaktoren und was du tun kannst, wenn der Fortschritt stockt.',
        '[Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) behandelt Belastungssteuerung und Trainingsanpassungen.',
        '[Fußschmerzen vom langen Stehen](/feet-hurt-standing-all-day/) (auf Englisch) behandelt Übungen und Schuhe bei langem Stehen.',
        '[Fußschmerzen in der Pflege](/nurses-foot-pain/) (auf Englisch) geht auf lange Schichten auf harten Böden ein.',
        '[Fußschmerzen am Stehschreibtisch](/standing-desk-foot-pain/) (auf Englisch) behandelt den Wechsel zwischen Sitzen und Stehen.',
        '[Die beste App bei Plantarfasziitis](/de/beste-app-plantarfasziitis/) vergleicht sieben Apps bei Plantarfasziitis.',
        'Übungsseiten: [Plantarfaszien-Dehnung](/de/uebungen/plantarfaszie-dehnen/), [Wadendehnung](/de/uebungen/wade-dehnen/), [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/), [Fußrollen](/exercises/foot-roll/) (auf Englisch).',
      ],
    },
  ],
  faq: [
    {
      q: 'Wie wird man Plantarfasziitis am schnellsten los?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Eine Abkürzung gibt es nicht, aber die Belege sprechen dafür, früh mit Dehnen anzufangen (Bewertung A in der Leitlinie) und Wadenkrafttraining dazuzunehmen (Bewertung B). In einer Studie mit 48\u00A0Personen hat schweres Fersenheben die Besserung in den ersten drei Monaten beschleunigt (Rathleff und Kollegen, 2015). Tägliches Dehnen, stützende Schuhe und den Fuß nicht zu überlasten sind die Grundlagen.',
    },
    {
      q: 'Geht Plantarfasziitis von allein weg?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Das kann sie, aber meist dauert es lange. Eine Übersichtsarbeit von 2020 berichtet, dass es etwa 90\u00A0% der Menschen mit konservativer Behandlung besser geht (Latt und Kollegen, 2020). In einer Kohorte von 174\u00A0Patientinnen und Patienten war nach fünf Jahren etwa die Hälfte beschwerdefrei (Hansen und Kollegen, 2018). Aktiv etwas zu tun, kann diesen Zeitraum verkürzen.',
    },
    {
      q: 'Ist Gehen bei Plantarfasziitis gut oder schlecht?',
      cites: [CITE.guideline],
      a: 'Gehen in stützenden Schuhen in einem angenehmen Tempo ist meist in Ordnung. Die Leitlinie sagt nicht, dass du aufhören sollst, dich zu bewegen. Der Test ist, wie sich deine Ferse am nächsten Morgen anfühlt. Ist der Schmerz bei den ersten Schritten am Morgen nach einem Spaziergang deutlich stärker als sonst, war dieser Spaziergang zu viel. Verkürze die Strecke, bevor du ganz aufhörst.',
    },
    {
      q: 'Verursacht ein Fersensporn Plantarfasziitis?',
      cites: [CITE.hansen],
      a: 'Nicht so, wie die meisten denken. Ein Fersensporn ist ein knöcherner Auswuchs an der Unterseite des Fersenbeins, und viele Menschen haben einen ohne Schmerzen. In einer Beobachtung von 174\u00A0Patientinnen und Patienten hatte ein Fersensporn zu Beginn keinen signifikanten Einfluss auf die Dauer der Beschwerden (Hansen und Kollegen, 2018). Das Problem ist die Überlastung der Faszie, nicht der Sporn.',
    },
    {
      q: 'Kann ich mit Plantarfasziitis Sport machen?',
      cites: [CITE.guideline],
      a: 'Ja, aber Art und Dosis zählen. Die Leitlinie empfiehlt, aktiv zu bleiben und die Belastung anzupassen, statt dich komplett zu schonen. Übungen, die Wade und Faszie belasten (Dehnen, Fersenheben), gehören zum Vorgehen und sind kein Widerspruch. Aktivitäten mit harten Stößen musst du vielleicht reduzieren. Der Test ist immer der nächste Morgen: Ist er schlimmer, war der Vortag zu viel.',
    },
    {
      q: 'Welche Schuhe helfen bei Plantarfasziitis?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Die Leitlinie empfiehlt Beratung zu Schuhen als Teil des Vorgehens, nennt aber keine Marken. Ein Schuh mit etwas Dämpfung, Gewölbestütze und einer kleinen Sprengung (Höhenunterschied zwischen Ferse und Zehen) gleicht eine verkürzte Wade teilweise aus. Eingeschränkte Beweglichkeit im Sprunggelenk ist der stärkste Risikofaktor für Plantarfasziitis (Riddle und Kollegen, 2003). Geh nicht barfuß auf harten Böden, vor allem nicht morgens.',
    },
    {
      q: 'Wann sollte ich mit Fersenschmerzen zum Arzt?',
      a: 'Geh zu einer medizinischen Fachperson, wenn der Schmerz nach einer Verletzung begann, du den Fuß nicht belasten kannst, beide Fersen wehtun und andere Gelenke steif sind, Taubheit oder Kribbeln dazukommen, die Ferse gerötet oder warm ist, der Schmerz dich nachts weckt oder er nach mehreren Monaten Dehnen und Wadentraining nicht besser wird. Diese Muster können auf eine andere Ursache hindeuten.',
    },
    {
      q: 'Warum habe ich Plantarfasziitis nur an einem Fuß?',
      a: 'Plantarfasziitis zeigt sich oft zuerst an einem Fuß, weil sich die Last selten gleichmäßig auf beide Beine verteilt. Ein dominantes Bein, ein altes Hinken, eine Arbeit, die eine Seite bevorzugt, oder ein plötzlicher Belastungssprung auf einem Bein, etwa wenn du mit dem Laufen anfängst, können eine Faszie stärker überlasten als die andere. Mit der Zeit können trotzdem beide Füße betroffen sein.',
    },
    {
      q: 'Warum habe ich plötzlich Plantarfasziitis?',
      cites: [CITE.guideline],
      a: 'Eine plötzliche Plantarfasziitis folgt meist auf eine plötzliche Änderung der Belastung, nicht auf eine plötzliche Verletzung. Ein schneller Sprung bei den Laufkilometern, neue Schuhe, ein neuer Job, bei dem du viel stehst, oder eine Gewichtszunahme können die Faszie schneller überlasten, als sie sich anpassen kann. Langes Stehen bei der Arbeit ist einer der anerkannten Risikofaktoren in der Leitlinie von 2023 zu Fersenschmerzen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'Taubheit, Kribbeln, Brennen, eine Schwellung oder Wärme dazukommen',
      'die Ferse gerötet ist oder du Fieber hast oder dich krank fühlst',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst',
      'beide Fersen wehtun und andere Gelenke geschwollen oder steif sind',
      'es nach mehreren Wochen Übungen und weniger Belastung nicht besser geworden ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst dir nicht selbst überlegen, welche Übungen du machst, in welcher Reihenfolge und wann du steigerst. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Plantarfasziitis ist das erste Ziel ein besserer Morgen: Schmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Sobald das Morgenziel erreicht ist, geht es in die Erhaltung über, und das nächste Ziel rückt nach.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Plantarfasziitis',
  campaign: 'hub-plantar-fasciitis-de',
};
