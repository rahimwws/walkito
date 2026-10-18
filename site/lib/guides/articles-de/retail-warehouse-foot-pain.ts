import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/retail-warehouse-foot-pain.ts (2026-10-18),
 * written around «Fußschmerzen Lager», «Fußschmerzen Einzelhandel» and
 * «Fußschmerzen Betonboden». Informal «du», terminology and exercise names as
 * in `lib/guides/de.ts` and the other articles-de pages. Figures, doses,
 * grades, qualifiers and sources identical to the English page after its
 * fact-check. Same CITE keys and media ids. The English link to the insole
 * guide has no German version and was removed; /program/ has no German path,
 * so the Walkito mention is unlinked.
 */

export const RETAIL_WAREHOUSE_DE: Guide = {
  lang: 'de',
  page: 'retailWarehouse',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fußschmerzen im Lager: Betonboden, Arbeitsschuhe, Übungen',
  description:
    'Fußschmerzen in Lager und Einzelhandel: was Studien zu Betonboden, Sicherheitsschuhen, Matten und Einlagen sagen, plus Übungen für 3\u00A0Minuten Pause.',
  h1: 'Fußschmerzen in Einzelhandel und Lager: was auf harten Böden hilft',
  lede:
    'Im Lager und im Einzelhandel tun die Füße weh, weil stundenlanges Stehen und Gehen auf harten Böden Ferse, Gewölbe und Wade belastet, ohne dass der Untergrund nachgibt. Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf eine [Plantarfasziitis](/de/plantarfasziitis/) in einer Studie um das 3,6-Fache (Riddle und Kollegen, 2003). Wadendehnung und Plantarfaszien-Dehnung bekommen in der Leitlinie von 2023 zu Fersenschmerzen den höchsten Empfehlungsgrad, **A**, und eine kurze Version passt in etwa 3\u00A0Minuten Pause. Matten und gedämpfte Einlagen verbessern den Komfort, aber die Belege dafür sind dünner (Speed und Kollegen, 2018).',
  intro: [
    'In diesem Ratgeber geht es um die Arbeit selbst: Beton- und Fliesenböden, Sicherheitsschuhe, lange Schichten und kurze Pausen. Für Schmerzen vom Stehen im Allgemeinen lies [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/). Wenn du im Krankenhaus arbeitest, behandelt [Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/) 12-Stunden-Schichten und wechselnde Dienste.',
  ],
  toc: true,
  takeaways: [
    'Wer den größten Teil des Arbeitstags auf den Beinen war, hatte in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen eine 3,6-fache Chance auf Plantarfasziitis. Eine stark eingeschränkte Beweglichkeit im Sprunggelenk, meist durch eine verkürzte Wade, erhöhte sie um das 23,3-Fache (Riddle und Kollegen, 2003).',
    'Die Leitlinie von 2023 zu Fersenschmerzen behält eine Empfehlung mit Empfehlungsgrad **B**: Ärztinnen, Ärzte und Therapeuten sollen Tätigkeiten im Stehen und Gehen bei der Arbeit, besonders auf Böden mit schlechter Stoßdämpfung, als Risikofaktor für Fersenschmerzen prüfen (Koc und Kollegen, 2023).',
    'Eine Übersichtsarbeit mit 10\u00A0Studien fand mäßige Belege, dass Matten und gedämpfte Einlagen Beschwerden und Ermüdung bei Arbeit im Stehen verringern, und nur begrenzte Belege, dass Einlagen besser sind als Matten (Speed und Kollegen, 2018).',
    'In einer Übersichtsarbeit mit 7\u00A0Studien zu Beschäftigten in Sicherheitsschuhen fanden die 4, die Schmerzen gemessen haben, Fußschmerzen bei 42,3 bis 60,8\u00A0% der Beschäftigten. Die Hauptbeschwerden waren Hitze, Schwitzen, Gewicht und Steifigkeit (Arceri und Kollegen, 2024).',
    'Wadendehnung und Plantarfaszien-Dehnung bekommen den höchsten Empfehlungsgrad der Leitlinie, **A**, Krafttraining ein **B**. Einlagen allein bekommen bei Fersenschmerzen **Empfehlungsgrad B gegen die Anwendung** (Koc und Kollegen, 2023).',
  ],
  sections: [
    {
      h2: 'Warum tun die Füße nach einer Schicht im Lager oder im Laden weh?',
      keyFact: 'Wer den größten Teil des Arbeitstags auf den Beinen verbrachte, hatte in einer Fall-Kontroll-Studie mit passenden Kontrollen eine 3,6-fache Chance auf Plantarfasziitis (Riddle und Kollegen, 2003).',
      paragraphs: [
        'Arbeit im Einzelhandel und im Lager verbindet zwei Belastungen. An der Kasse oder am Packtisch stehst du lange still. Im Verkaufsraum oder beim Kommissionieren gehst du, trägst, schiebst Wagen und drehst dich. Beides hält das Gewicht über den größten Teil der Schicht auf Ferse und Gewölbe, und wann Pause ist, bestimmt der Dienstplan, nicht deine Füße.',
        'Eine Fall-Kontroll-Studie von 2003 mit 50\u00A0Menschen mit Plantarfasziitis und 100\u00A0passenden Kontrollen fand: Wer den größten Teil des Arbeitstags auf den Beinen verbrachte, hatte eine 3,6-fache Chance auf Plantarfasziitis. Eine eingeschränkte Beweglichkeit im Sprunggelenk, also eine [verkürzte Wade](/de/verspannte-waden/), war der stärkste Faktor, mit einer 23,3-fachen Chance. **An einer verkürzten Wade kannst du arbeiten. An der Arbeit meist nicht.**',
        'Eine systematische Übersichtsarbeit mit 16\u00A0Studien zu chronischen Fersenschmerzen fand gewisse Belege für einen Zusammenhang mit langem Stehen, neben höherem Körpergewicht, Alter und eingeschränkter Beweglichkeit im Sprunggelenk. Die Autoren forderten Studien, die Menschen über die Zeit begleiten. Das zeigt also einen Zusammenhang, keinen Beweis, dass Stehen Fersenschmerzen verursacht (Irving und Kollegen, 2006).',
        'Wie weit gehst du? Wir haben keine veröffentlichte Studie gefunden, die Schritte pro Schicht bei Beschäftigten in Lager oder Einzelhandel zählt. Zahlen wie „12\u00A0Meilen pro Schicht“ (rund 19\u00A0Kilometer) stehen auf Branchenblogs, ohne Studie dahinter. Am ehesten vergleichbar ist eine gemessene Zahl aus der Pflege: im Schnitt 9.360\u00A0Schritte pro Schicht in einer Studie mit Schrittzählern (Chang und Cho, 2022).',
      ],
      cites: [CITE.riddle, CITE.irvingHeelPain, CITE.changCho],
    },
    {
      h2: 'Ist Betonboden wirklich schlechter für die Füße?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen nennt Tätigkeiten im Stehen und Gehen bei der Arbeit, besonders unter Bedingungen mit schlechter Stoßdämpfung, als Risikofaktor (Empfehlungsgrad B, Koc und Kollegen, 2023).',
      paragraphs: [
        'Wahrscheinlich, aber niemand hat Beton für sich allein gemessen. Die Leitlinie von 2023 zu Fersenschmerzen behält eine Empfehlung von 2014 mit Empfehlungsgrad **B**: Ärztinnen, Ärzte und Therapeuten sollen Tätigkeiten im Stehen und Gehen bei der Arbeit, besonders unter Bedingungen mit schlechter Stoßdämpfung, als Risikofaktor für Fersenschmerzen und Plantarfasziitis prüfen. Ein blanker Betonboden dämpft so wenig wie kaum ein anderer Arbeitsboden.',
        'Getestet wurde das Gegenteil: etwas Weiches dazuzunehmen. In Labor- und Arbeitsplatzstudien verringerten eine Matte oder gedämpfte Einlagen die Beschwerden im Vergleich zu einem harten Boden (Speed und Kollegen, 2018). Das passt zu der Vorstellung, dass der harte Untergrund die Belastung erhöht, ohne zu beweisen, dass Beton eine bestimmte Erkrankung verursacht.',
        'Manche Fersenschmerzen sind auf harten Böden aus einem anderen Grund schlimmer. Wenn der Schmerz tief in der Mitte der Ferse sitzt und barfuß auf Fliesen oder Beton deutlich schlimmer ist, lohnt sich ein Blick auf das [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning],
    },
    {
      h2: 'Helfen Anti-Ermüdungsmatten oder Einlagen mehr?',
      keyFact: 'Eine Übersichtsarbeit mit 10\u00A0Studien fand mäßige Belege, dass Dämpfung Beschwerden bei Arbeit im Stehen verringert, und begrenzte Belege, dass Einlagen besser sind als Matten (Speed und Kollegen, 2018).',
      paragraphs: [
        '**Beides verbessert den Komfort, ohne klaren Sieger, und für keins gibt es starke Belege.** Eine systematische Übersichtsarbeit von 2018 fand 10\u00A0Studien zu Matten und gedämpften Einlagen bei Menschen, die im Stehen arbeiten. Sie bewertete die Belege als mäßig, dass Dämpfung Beschwerden und Ermüdung verringert, und als begrenzt, dass Einlagen besser abschneiden als Matten. Die Studien unterschieden sich stark im Aufbau, und die Autoren forderten größere Studien an echten Arbeitsplätzen.',
        'In einer Arbeitsplatzstudie verbrachten Beschäftigte in der Montage je eine Woche mit 8-Stunden-Tagen unter vier Bedingungen: harter Boden, Matte, Einlagen sowie Einlagen auf einer Matte. Matte, Einlagen und die Kombination waren alle bequemer als der harte Boden, und es gab keinen klaren Unterschied zwischen ihnen (King, 2002).',
        'In einem Labortest über 4\u00A0Stunden verringerten drei von vier handelsüblichen Anti-Ermüdungsmatten die Beschwerden im Vergleich zu einem harten Boden, aber keine Matte war besser als die anderen (Wiggermann und Keyserling, 2013). Für keine einzelne Matte ist also gezeigt, dass sie besser ist als die anderen.',
        'Die praktische Aufteilung: **Eine Matte hilft nur dort, wo du stillstehst**, etwa an der Kasse, am Packtisch oder an einem festen Arbeitsplatz. Wenn du durch den Laden gehst oder kommissionierst, muss die Dämpfung mitgehen, also im Schuh stecken. Speziell bei Fersenschmerzen bewertet die Leitlinie von 2023 Einlagen allein mit **Empfehlungsgrad B gegen die Anwendung**. Verlass dich also nicht nur auf sie. [Einlagen oder Übungen](/de/einlagen-oder-uebungen/) vergleicht beides.',
      ],
      cites: [CITE.speedCushioning, CITE.kingMats, CITE.wiggermannMats, CITE.guideline],
    },
    {
      h2: 'Machen Sicherheitsschuhe Fußschmerzen?',
      keyFact: 'In einer Übersichtsarbeit mit 7\u00A0Studien zu Beschäftigten in Sicherheitsschuhen fanden die 4, die Schmerzen gemessen haben, Fußschmerzen bei 42,3 bis 60,8\u00A0% der Beschäftigten (Arceri und Kollegen, 2024).',
      paragraphs: [
        'Sicherheitsschuhe schützen deine Füße, und sie bringen auch Beschwerden mit. Eine systematische Übersichtsarbeit von 2024 fand 7\u00A0Studien zu Beschäftigten in Sicherheitsschuhen. Jede Studie berichtete über Unbehagen und Schmerzen, und die 4\u00A0Studien, die Schmerzen gemessen haben, fanden Fußschmerzen bei 42,3 bis 60,8\u00A0% der Beschäftigten. Die Hauptbeschwerden waren Hitze, Schwitzen, Gewicht und eine steife Sohle, meist im Bereich der Zehen und der Schutzkappe.',
        'In einer Studie mit 509\u00A0Beschäftigten in 12\u00A0Metallbetrieben, die alle jeden Tag Sicherheitsschuhe trugen, hatten 81\u00A0% mindestens ein Fußproblem. Die häufigsten Klagen über die Schuhe waren Hitze und Nässe im Schuh (42\u00A0%), das Gewicht (27,5\u00A0%) und die Passform (22,9\u00A0%) (Mancuso und Kollegen, 2017).',
        'Das sind Befragungen. Sie können also nicht zeigen, dass die Schuhe den Schmerz verursachen: Lange Stunden auf harten Böden würden in jedem Schuh wehtun. Die Vorschläge der Übersichtsarbeit sind praktisch:',
        {
          list: [
            'Achte auf die richtige Größe und Weite und frag nach, ob die Modelle, die dein Arbeitgeber zulässt, auch in weiter Passform zu haben sind.',
            'Wähl den leichtesten Schuh, der die Schutzklasse für deinen Arbeitsplatz erfüllt.',
            'Achte auf atmungsaktive Materialien, wenn deine Füße heiß und nass werden.',
            'Die meisten Sicherheitsschuhe haben eine herausnehmbare Innensohle. Eine gedämpfte Einlage passt also hinein, solange der Schuh dadurch nicht zu eng wird.',
          ],
        },
        'Tausch einen vorgeschriebenen Sicherheitsschuh nie gegen einen Sneaker, weil dir die Füße wehtun. Sprich mit deiner Vorgesetzten, deinem Vorgesetzten oder der Fachkraft für Arbeitssicherheit über andere zugelassene Modelle.',
      ],
      cites: [CITE.arceriSafety, CITE.mancusoSafety],
    },
    {
      h2: 'Welche Übungen kannst du in der Pause machen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Wadendehnung und Plantarfaszien-Dehnung mit A, ihrem höchsten Empfehlungsgrad, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Für die Übungen unten brauchst du keine Ausrüstung und nicht mehr Platz als eine Wand, ein Regal oder eine Tischkante. Die ersten drei gehen im Stehen, im Pausenraum oder im Regalgang. Die übrigen sind für nach der Schicht, im Sitzen.',
        'Die Leitlinie bewertet Wadendehnung und Plantarfaszien-Dehnung mit **A** und Krafttraining mit **B**. Diese Empfehlungsgrade gelten für Plantarfasziitis, aber es sind dieselben Gewebe, die eine Schicht auf harten Böden belastet. Wenn eine Übung deinen Schmerz auf 6 von 10 oder mehr bringt, hör für heute auf.',
      ],
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In der Pause oder nach der Schicht',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand, einen Regalpfosten oder eine Theke. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Geht auch in Sicherheitsschuhen.',
          stop: 'Stechender Schmerz in Ferse oder Wade',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In der Pause oder nach der Schicht',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Stechender Schmerz in Ferse oder Wade',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Sprunggelenk-Wippen',
          evidence: { level: 'early', why: 'Zielt auf die Beweglichkeit im Sprunggelenk, den stärksten Risikofaktor in einer Fall-Kontroll-Studie von 2003. Nicht für sich allein in einer Studie zu Fersenschmerzen getestet.' },
          dose: '2\u00A0Sätze à 15, jedes Bein',
          often: 'In der Pause',
          feel: 'Eine Dehnung vorn am Sprunggelenk und ein Ziehen in der unteren Wade',
          how: 'Schrittstellung, Hände an der Wand. Schieb das vordere Knie über die Zehen nach vorn, während die Ferse flach bleibt. Langsam, etwa zwei Sekunden in jede Richtung. Mehr unter [Sprunggelenk-Wippen](/de/uebungen/sprunggelenk-mobilisation/).',
          stop: 'Der Schmerz 6 von 10 erreicht',
          image: 'Übung: Sprunggelenk-Wippen',
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Das Knie wandert über die Zehen nach vorn, die Ferse bleibt flach',
          alt: 'Eine Figur in Schrittstellung schiebt das vordere Knie über die Zehen nach vorn, das Sprunggelenk ist hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'Nach der Schicht und vor deinen ersten Schritten am Morgen',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin, zieh die Schuhe aus und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Wenn dir die ersten Schritte nach dem Aufstehen wehtun, mach eine Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Stechender Fersenschmerz',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht für sich allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An freien Tagen oder nach einer leichteren Schicht',
          feel: 'Beide Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, halt dich an einer Wand fest, drück dich gerade über die großen Zehen nach oben und senk dich langsam ab. Krafttraining passt am besten an freien Tagen, damit die Wade sich vor der nächsten Schicht erholen kann. Mehr unter [Fersenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen hoch, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Es steht hier für mehr Wohlbefinden nach der Schicht.' },
          dose: '1\u00A0Minute',
          often: 'Nach der Schicht',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam mit festem Druck über einen Massageball. Wenn du das Gesicht verziehst, nimm den Druck zurück.',
          stop: 'Schmerz, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Fußrollen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam und mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Fußsohle ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Wie passt das in eine Schicht: 3, 5 oder 10\u00A0Minuten?',
      paragraphs: [
        'Die meisten Pausen in Einzelhandel und Lager sind kurz und durch den Dienstplan festgelegt. Eine Übersichtsarbeit zu Laborstudien fand, dass Beschwerden durch ununterbrochenes Stehen bei Menschen, die zu Schmerzen beim Stehen neigen, nach etwa 42\u00A0Minuten klinisch relevant wurden, und die Autoren schlugen vor, nicht länger als etwa 40\u00A0Minuten am Stück stillzustehen (Coenen und Kollegen, 2017). Wann du dich setzen kannst, kannst du oft nicht wählen, aber die Haltung kannst du wechseln: bis zum Ende des Gangs gehen, das Gewicht verlagern oder eine Wadendehnung am Regal machen.',
        {
          list: [
            '**3\u00A0Minuten, in der Pause:** die Wadendehnung, 2-mal 30\u00A0Sekunden pro Bein, plus einmal 30\u00A0Sekunden Soleusdehnung pro Bein. Das zielt auf die verkürzte Wade, den stärksten Risikofaktor in der Studie von 2003.',
            '**5\u00A0Minuten, in einer längeren Pause oder am Schichtende:** Nimm das Sprunggelenk-Wippen dazu oder die Plantarfaszien-Dehnung, sobald die Schuhe aus sind.',
            '**10\u00A0Minuten, an einem freien Tag:** Nimm das Fersenheben (3\u00A0Sätze à 10) und das Fußrollen dazu. Damit ist auch das Krafttraining abgedeckt, das mit Empfehlungsgrad **B** bewertet ist.',
          ],
        },
        '**Eine kurze Routine an den meisten Schichttagen bringt mehr als eine lange, die du ausfallen lässt.** Häng sie an etwas, das du ohnehin tust, etwa die erste Pause oder das Ausziehen der Arbeitsschuhe.',
      ],
      cites: [CITE.coenen, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Was die Belege zu den einzelnen Möglichkeiten sagen',
      paragraphs: [
        'Die meisten Ratschläge für den Arbeitsplatz mischen starke und schwache Belege. Diese Tabelle stellt die wichtigsten Möglichkeiten nebeneinander, jeweils mit der besten Studie, die wir gefunden haben.',
      ],
      table: {
        caption: 'Möglichkeiten bei Fußschmerzen in Berufen mit viel Stehen und Gehen',
        head: ['Möglichkeit', 'Beste Belege', 'Ergebnis', 'Stärke'],
        rows: [
          ['Wadendehnung und Plantarfaszien-Dehnung', 'Leitlinie von 2023', 'Empfehlungsgrad A bei Fersenschmerzen', 'Stark'],
          ['Krafttraining für die Wade', 'Leitlinie von 2023', 'Empfehlungsgrad B bei Fersenschmerzen', 'Mäßig'],
          ['Anti-Ermüdungsmatte', 'Übersicht über 10\u00A0Studien', 'Weniger Beschwerden', 'Mäßig, nur Komfort'],
          ['Gedämpfte Einlagen', 'Dieselbe Übersicht', 'Weniger Beschwerden, ähnlich wie eine Matte', 'Mäßig, nur Komfort'],
          ['Einlagen allein bei Fersenschmerzen', 'Leitlinie von 2023', 'B gegen die Anwendung', 'Spricht eher dagegen'],
          ['Kompressionsstrümpfe', 'Studie mit 40\u00A0Sicherheitskräften', 'Kein Anstieg der Beschwerden', 'Eine kleine Studie'],
          ['Besser passende Sicherheitsschuhe', 'Übersicht über 7\u00A0Studien', 'Passform, Gewicht, Hitze zählen', 'Nur Befragungen'],
        ],
      },
      after: [
        'Kompressionsstrümpfe werden ausführlich unter [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/) behandelt. Die Studie lief mit männlichen Sicherheitskräften in langen Schichten im Stehen, nicht mit Beschäftigten im Lager (Garcia und Kollegen, 2023).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning, CITE.garcia, CITE.arceriSafety],
    },
    {
      h2: 'Könnte es eine Plantarfasziitis oder etwas anderes sein?',
      paragraphs: [
        'Allgemeine Schmerzen und müde Füße nach einer langen Schicht vergehen meist mit einer Nacht Ruhe. Plantarfasziitis hat ein klareres Muster: ein stechender Schmerz nahe der Innenseite der Ferse, am schlimmsten bei den ersten Schritten am Morgen oder nach dem Sitzen. Wenn du dich darin wiedererkennst, lies [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) und [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/). Bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wird es mit Behandlung ohne Operation besser, auch wenn das drei bis sechs Monate dauern kann (Latt und Kollegen, 2020).',
        'Andere Muster deuten auf etwas anderes hin. Ein brennender Schmerz unter dem Fußballen spricht für [Vorfußschmerzen](/de/metatarsalgie-vorfussschmerzen/). Ein Schmerz entlang des Gewölbes, der im Lauf der Schicht schlimmer wird, ist unter [Schmerzen im Fußgewölbe](/de/schmerzen-im-fussgewoelbe/) beschrieben. Schmerzen oben auf dem Fuß können von zu fest geschnürten oder drückenden Schuhen kommen, siehe [Schmerzen am Fußrücken](/de/schmerzen-am-fussruecken/).',
        'Schmerz an einer kleinen Stelle auf einem Knochen, der schlimmer wird, je mehr du gehst, kann ein Ermüdungsbruch sein, besonders nach einer plötzlichen Erhöhung der Arbeitsstunden oder einem neuen Job mit mehr Gehen. **Lass das ärztlich abklären, statt mehr zu üben.**',
      ],
      cites: [CITE.latt, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Warum tun mir die Füße bei der Arbeit im Lager so weh?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'Lange Stunden Stehen und Gehen auf harten Böden halten die Last über den größten Teil der Schicht auf Ferse, Gewölbe und Wade. Wer den größten Teil des Arbeitstags auf den Beinen war, hatte in einer Studie eine 3,6-fache Chance auf Plantarfasziitis, und die Leitlinie von 2023 zu Fersenschmerzen nennt Stehen und Gehen bei der Arbeit auf schlecht gedämpften Böden als Risikofaktor.',
    },
    {
      q: 'Wie viele Schritte geht man in einer Schicht im Lager?',
      cites: [CITE.changCho],
      a: 'Wir haben keine veröffentlichte Studie gefunden, die Schritte in Schichten im Lager oder im Einzelhandel zählt. Zahlen wie 12\u00A0Meilen (rund 19\u00A0Kilometer) pro Schicht kommen von Branchenblogs, ohne Studie dahinter. Am ehesten vergleichbar ist eine gemessene Zahl von Pflegekräften im Krankenhaus, die in einer Studie mit Schrittzählern im Schnitt 9.360\u00A0Schritte pro Schicht gingen. Dein eigenes Handy oder deine Uhr sagt dir am besten, wie viel es in deinem Job ist.',
    },
    {
      q: 'Bringen Anti-Ermüdungsmatten wirklich etwas?',
      cites: [CITE.speedCushioning, CITE.wiggermannMats],
      a: 'Sie verringern die Beschwerden bei Menschen, die an einer Stelle stehen, aber die Belege sind mäßig, nicht stark. Eine Übersichtsarbeit mit 10\u00A0Studien fand, dass Dämpfung bei Arbeit im Stehen hilft. In einem Labortest über 4\u00A0Stunden schnitten drei von vier Matten besser ab als ein harter Boden, und keine Matte war besser als die anderen. Eine Matte hilft nur dort, wo du stillstehst.',
    },
    {
      q: 'Sind Einlagen oder eine Matte besser zum Stehen auf Beton?',
      cites: [CITE.kingMats, CITE.speedCushioning],
      a: 'Für den Komfort etwa gleich. In einer Arbeitsplatzstudie fanden Beschäftigte in der Montage eine Matte, Einlagen und beides zusammen bequemer als einen harten Boden, ohne klaren Unterschied zwischen ihnen. Eine Übersichtsarbeit bewertete die Belege, dass Einlagen besser sind als Matten, als begrenzt. Wenn du viel gehst, gehen Einlagen mit, eine Matte nicht.',
    },
    {
      q: 'Können Sicherheitsschuhe eine Plantarfasziitis auslösen?',
      cites: [CITE.arceriSafety, CITE.guideline],
      a: 'Keine Studie zeigt, dass Sicherheitsschuhe eine Plantarfasziitis verursachen. Eine Übersichtsarbeit mit 7\u00A0Studien zu Beschäftigten in Sicherheitsschuhen fand in den 4, die es gemessen haben, Fußschmerzen bei 42,3 bis 60,8\u00A0% der Beschäftigten. Die Hauptbeschwerden waren Hitze, Gewicht und Steifigkeit. Die Stunden auf harten Böden zählen auch, egal welcher Schuh. Eine gute Passform und der leichteste zugelassene Schuh sind vernünftige erste Schritte.',
    },
    {
      q: 'Welche Dehnungen kann ich in der Pause bei der Arbeit machen?',
      cites: [CITE.guideline],
      a: 'Die Wadendehnung und die Soleusdehnung gehen im Stehen an einer Wand oder einem Regal, auch in Arbeitsschuhen: je 2-mal 30\u00A0Sekunden halten, jedes Bein, etwa 4\u00A0Minuten für beide Dehnungen. Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Wadendehnung mit A. Heb dir die Plantarfaszien-Dehnung und das Fersenheben für nach der Schicht oder für freie Tage auf.',
    },
    {
      q: 'Ist es normal, dass mir nach einer Schicht im Laden die Füße wehtun?',
      cites: [CITE.waters],
      a: 'Müde, schmerzende Füße nach einer langen Schicht im Stehen sind häufig, und eine Übersichtsarbeit von 2015 brachte langes Stehen bei der Arbeit in vielen Berufen mit Beschwerden, Ermüdung und Beinschmerzen in Verbindung. Häufig heißt aber nicht, dass du es ignorieren solltest. Schmerz, der stechend ist, bis in die freien Tage anhält oder bei den ersten Schritten am Morgen am schlimmsten ist, ist ein Grund, etwas zu tun.',
    },
    {
      q: 'Kann ich mit Plantarfasziitis in einem Job im Stehen weiterarbeiten?',
      cites: [CITE.latt, CITE.guideline],
      a: 'Viele tun das, mit Anpassungen. Kurze Dehnungen in den Pausen, besser passende Schuhe und Dämpfung dort, wo du stehst, verringern die Belastung, und bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wird es mit Behandlung ohne Operation besser, auch wenn das drei bis sechs Monate dauern kann. Wenn der Schmerz trotzdem schlimmer wird, lass ihn ärztlich abklären.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Schmerz mit einem Sturz, einer heruntergefallenen Last oder einem Umknicken bei der Arbeit angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'der Schmerz an einer kleinen Stelle auf einem Knochen sitzt und beim Gehen schlimmer wird, was ein Ermüdungsbruch sein kann',
      'der Fuß taub ist, kribbelt, brennt oder sich kalt anfühlt',
      'der Fuß oder die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'eine Wade oder ein Bein plötzlich schmerzt und geschwollen ist',
      'du Diabetes oder weniger Gefühl in den Füßen hast und ein Schuh eine wunde Stelle oder eine Blase gescheuert hat',
      'der Schmerz dich nachts weckt oder nach mehreren Wochen mit den Anpassungen auf dieser Seite immer schlimmer wird',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst dir Reihenfolge, Dosis und den Zeitpunkt für die schwerere Variante nicht selbst überlegen. Walkito baut den Plan aus deinen Antworten und passt ihn jeden Tag daran an, wie sich deine Füße anfühlen. Ein schlechter Morgen nach einer langen Schicht bedeutet also eine leichtere Einheit.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten, sodass es um Schichten und freie Tage herum passt. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keinen Arztbesuch.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['standing', 'nurses', 'heelPainAfterWalking'],
  crumb: 'Fußschmerzen in Einzelhandel und Lager',
  campaign: 'guide-retail-warehouse-foot-pain-de',
};
