import type { LessonTheory, LessonTheoryId } from './lesson-theory';
import { PART3_THEORY_PL } from './lesson-theory-part3';

// Polish translation of the lesson theory (source of truth: lesson-theory.ts, Russian).
export const LESSON_THEORY_PL: Record<LessonTheoryId, LessonTheory> = {
  1: {
    coursebookPages: '6–11',
    communication: 'Uczymy się witać, żegnać, przedstawiać i pytać rozmówcę o imię. W sytuacjach oficjalnych używamy form grzecznościowych, z przyjaciółmi — nieformalnych.',
    vocabulary: 'Dzień dobry — powitanie w ciągu dnia; cześć — powitanie i pożegnanie wśród znajomych; proszę — wyrażenie grzeczności; dziękuję — wyrażenie wdzięczności; przepraszam — wyrażenie skruchy; miło mi — formuła grzecznościowa przy poznawaniu kogoś. Powtarzamy polski alfabet i liczby 0–10.',
    grammar: 'Do przedstawiania się rozróżniamy konstrukcje: „Mam na imię…” (imię), „Nazywam się…” (imię i nazwisko) oraz „Jestem…” (imię lub rola). W sytuacjach oficjalnych używamy form Pan/Pani („Jak się pan/pani nazywa?”), a wśród znajomych — ty („Jak się nazywasz?”). Ważne jest też rozróżnianie polskich dwuznaków (sz, cz, rz, ch) oraz liter ze znakami diakrytycznymi (ą, ę, ć, ł, ń, ó, ś, ź, ż).',
    examples: [
      { polish: 'Dzień dobry. Nazywam się Mami Takada.', translation: 'Dzień dobry. Nazywam się Mami Takada.' },
      { polish: 'Cześć! Mam na imię Tom.', translation: 'Cześć! Mam na imię Tom.' },
    ],
  },
  2: {
    coursebookPages: '12–19',
    communication: 'Przedstawiamy się dokładniej: pytamy, skąd ktoś pochodzi, gdzie mieszka i co u niego słychać.',
    vocabulary: 'Kraje i miasta, dane osobowe, zajęcia i zainteresowania; liczby 11–29. pracować — wykonywać pracę, uczyć się — zdobywać wiedzę, hobby — ulubione zajęcie, chcieć — mieć ochotę lub zamiar.',
    grammar: 'Zaimki osobowe: ja, ty, on/ona/ono, my, wy, oni (mężczyźni/grupa mieszana) / one (kobiety/rzeczy) oraz grzecznościowe panowie, panie, państwo. Odmiana być: jestem, jesteś, jest, jesteśmy, jesteście, są; czasowniki koniugacji -m, -sz (czytać, mieszkać) mają końcówki -m, -sz, -Ø, -my, -cie, -ją. Cel wyrażamy przez „żeby + bezokolicznik” („Uczę się, żeby studiować”), a przyczynę przez „bo”; wiele nazw osób tworzy pary rodzajowe: student/studentka, Polak/Polka.',
    examples: [
      { polish: 'Jestem z Japonii. Mieszkam w Tokio.', translation: 'Jestem z Japonii. Mieszkam w Tokio.' },
      { polish: 'Pracuję. A ty? Pracujesz?', translation: 'Pracuję. A ty? Pracujesz?' },
      { polish: 'Uczę się polskiego, żeby studiować w Polsce, bo bardzo lubię ten kraj.', translation: 'Uczę się polskiego, żeby studiować w Polsce, bo bardzo lubię ten kraj.' },
    ],
  },
  3: {
    coursebookPages: '20–27',
    communication: 'Uczymy się nazywać osoby i przedmioty, pytać „kto to jest?” i „co to jest?” oraz opisywać rzeczy prostymi przymiotnikami.',
    vocabulary: 'Przedmioty w klasie, kolory i przymiotniki: nowy — niestary, stary — nie nowy, dobry — taki, jak trzeba, zły — niedobry, duży — nie mały, mały — nie duży.',
    grammar: 'Rzeczowniki w mianowniku (kto? co?) mają trzy rodzaje: męski (ten, jaki? — rzeczownik zakończony na spółgłoskę, przymiotnik -y/-i), żeński (ta, jaka? — rzeczownik na -a/-i, przymiotnik -a) i nijaki (to, jakie? — rzeczownik na -o/-e/-ę/-um, przymiotnik -e/-ie). Konstrukcja „To jest…” łączy się z każdym rodzajem: To jest nowy student, nowa książka, nowe mieszkanie.',
    examples: [
      { polish: 'Kto to jest? To jest student.', translation: 'Kto to jest? To jest student.' },
      { polish: 'Co to jest? To jest nowa książka.', translation: 'Co to jest? To jest nowa książka.' },
    ],
  },
  4: {
    coursebookPages: '28–33',
    communication: 'Przedstawiamy siebie i innych, opisujemy wygląd i charakter, mówimy, co myślimy.',
    vocabulary: 'Przymiotniki do opisywania ludzi i wyrażenia opinii: wysoki — o dużym wzroście, ciekawy — budzący zainteresowanie, tylko — wyłącznie, trochę — niewiele, mieć rację — mówić prawdę, mylić się nie.',
    grammar: 'Czasowniki koniugacji -ę, -isz/-ysz: myślę — myślisz — myśli — myślimy — myślą; mówię — mówisz. Nazwy języków łączą się różnie: „mówić po polsku” (przysłówek po + -u), „znać język polski” (biernik), „uczyć się języka polskiego” (dopełniacz); odróżniamy też „uczyć” (kogoś) od „uczyć się” (samemu). Zdania łączymy spójnikami i, ale, bo, a przymiotniki uzgadniamy z rodzajem (wysoki student, wysoka studentka).',
    examples: [
      { polish: 'Myślę, że to jest nowy student.', translation: 'Myślę, że to jest nowy student.' },
      { polish: 'Jaki jesteś? Jestem wysoki.', translation: 'Jaki jesteś? Jestem wysoki.' },
      { polish: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.', translation: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.' },
    ],
  },
  5: {
    coursebookPages: '34–39',
    communication: 'Rozmawiamy o zawodzie, wieku, rodzinie i zainteresowaniach.',
    vocabulary: 'Nazwy zawodów i członków rodziny, zainteresowania i liczby 20–100. Przy wieku ważne są formy rok, lata i lat.',
    grammar: 'Po czasownikach być (zawód, narodowość) oraz interesować się używamy narzędnika (kim? czym?): w rodzaju męskim i nijakim przymiotnik ma końcówkę -ym/-im, rzeczownik -em/-iem (dobrym studentem, Polakiem), a w żeńskim -ą/-ą (dobrą studentką, Polką, muzyką). Po „To jest…” zostaje mianownik. Wiek wyrażamy konstrukcją „mieć + liczba + rok/lata/lat”: 1 rok, liczby zakończone na 2–4 (oprócz 12–14) — lata, pozostałe — lat.',
    examples: [
      { polish: 'Jestem nauczycielką. Interesuję się muzyką.', translation: 'Jestem nauczycielką. Interesuję się muzyką.' },
      { polish: 'Mam 24 lata.', translation: 'Mam 24 lata.' },
    ],
  },
  6: {
    coursebookPages: '40–45',
    communication: 'Opowiadamy o czasie wolnym, sporcie i o tym, czym zajmują się bliscy.',
    vocabulary: 'Podstawowe czasowniki określające zajęcia i sport, nazwy członków rodziny; wyrażenia nudzić się — odczuwać nudę i szukać — próbować znaleźć.',
    grammar: 'Trzy główne wzory koniugacji w czasie teraźniejszym: -m/-sz (mam — masz), -ę/-esz (piszę — piszesz; czasowniki na -ować mają -uję/-ujesz: pracuję — pracujesz) oraz -ę/-isz/-ysz (lubię — lubisz). Zaimki mój/moja/moje i twój/twoja/twoje zgadzają się z rodzajem rzeczownika. Zwróć uwagę na przyimki: „grać w + biernik” (sport i gry: w tenisa), ale „grać na + miejscownik” (instrumenty i komputer: na gitarze).',
    examples: [
      { polish: 'Co lubisz robić? Lubię czytać.', translation: 'Co lubisz robić? Lubię czytać.' },
      { polish: 'To jest moja siostra i mój brat.', translation: 'To jest moja siostra i mój brat.' },
    ],
  },
  7: {
    coursebookPages: '46–51',
    communication: 'Kupujemy towary, pytamy o cenę, rozmawiamy o liście zakupów i ilości pieniędzy.',
    vocabulary: 'Sklepy, towary, pieniądze, ceny i liczby 100–1000; krótki — niedługi, długi — niekrótki, drogi — kosztujący dużo, tani — kosztujący mało.',
    grammar: 'Dopełnienie bliższe oraz rzeczowniki po „Proszę…” występują w bierniku (kogo? co?). W rodzaju żeńskim -a zmienia się na -ę, a przymiotnik ma -ą (długa lista → długą listę); męski żywotny równa się dopełniaczowi (dobry brat → dobrego brata); męski nieżywotny i nijaki są równe mianownikowi (nowy telefon, dobre pióro). Ceny: kosztuje (l. poj.) / kosztują (l. mn.) + 1 złoty, 2–4 złote, 5+ złotych.',
    examples: [
      { polish: 'Mam długą listę zakupów.', translation: 'Mam długą listę zakupów.' },
      { polish: 'Kupuję tani chleb i widzę młodszego brata.', translation: 'Kupuję tani chleb i widzę młodszego brata.' },
    ],
  },
  8: {
    coursebookPages: '52–57',
    communication: 'Rozmawiamy o jedzeniu, preferencjach i składzie potraw; pytamy, z czym się coś je lub pije.',
    vocabulary: 'Posiłki, produkty spożywcze, napoje i naczynia. Przydatne wyrażenia: mieć ochotę na — chcieć czegoś, chętnie — z przyjemnością.',
    grammar: 'Po „z” (z czym?) używamy narzędnika: w liczbie pojedynczej -ym/-im + -em/-iem (m./n.) i -ą + -ą (ż.), a w liczbie mnogiej przymiotnik ma -ymi/-imi, rzeczownik -ami (z dobrymi pomidorami). Ważne czasowniki: jeść (jem, jesz, …, jedzą), pić (piję, pijesz, …, piją) oraz „woleć + biernik niż + biernik” (wolę kawę niż herbatę). Od nazw produktów często tworzymy przymiotniki na -owy (pomidor → pomidorowy).',
    examples: [
      { polish: 'Wolę herbatę niż kawę.', translation: 'Wolę herbatę niż kawę.' },
      { polish: 'Jem kanapkę z żółtym serem i pomidorami.', translation: 'Jem kanapkę z żółtym serem i pomidorami.' },
    ],
  },
  9: {
    coursebookPages: '58–63',
    communication: 'Robimy zakupy spożywcze w supermarkecie i nazywamy owoce, warzywa i inne produkty.',
    vocabulary: 'Owoce, warzywa, ryby i opisy produktów: świeży — niedawno zebrany lub zrobiony, suszony — pozbawiony wody, miękki — niesztywny, twardy — niemiękki.',
    grammar: 'W rodzaju niemęskoosobowym (one: męskie nieżywotne, żeńskie, nijakie) mianownik i biernik liczby mnogiej są takie same (to są pomidory / kupuję pomidory). Przymiotniki mają końcówkę -e (-ie po k, g: świeże, słodkie), rzeczowniki męskie i żeńskie — -y (banany, ryby), -i po k, g (ziemniaki, marchewki) lub -e po miękkich oraz c, cz, sz, rz, ż (owoce, pomarańcze), a nijakie — -a (jabłka, jajka).',
    examples: [
      { polish: 'To są świeże pomidory.', translation: 'To są świeże pomidory.' },
      { polish: 'Lubię świeże pomidory i słodkie jabłka.', translation: 'Lubię świeże pomidory i słodkie jabłka.' },
    ],
  },
  10: {
    coursebookPages: '64–69',
    communication: 'Rezerwujemy stolik, zamawiamy dania i napoje, mówimy, co lubimy, a czego nie.',
    vocabulary: 'Kawiarnia i restauracja, dania i desery; zamówienie — prośba o dostarczenie dania, zamawiać — prosić o dostarczenie dania, uwielbiać — bardzo lubić.',
    grammar: 'Po przeczeniu (nie jem, nie lubię) dopełnienie przechodzi w dopełniacz: w r. męskim i nijakim przymiotnik ma -ego, rzeczownik -a/-u (dobrego sera, czerwonego wina); w r. żeńskim przymiotnik -ej, rzeczownik -y/-i (zimnej wody, czarnej kawy). Przy zamawianiu: „proszę + biernik”, ale „dla mnie + mianownik”. Po z (z kim?) zaimki przyjmują formę narzędnika: ze mną, z tobą, z nim, z nią, z nami, z wami, z nimi.',
    examples: [
      { polish: 'Zamawiam kawę, ale nie zamawiam deseru.', translation: 'Zamawiam kawę, ale nie zamawiam deseru.' },
      { polish: 'Idę do restauracji z nimi.', translation: 'Idę do restauracji z nimi.' },
    ],
  },
  11: {
    coursebookPages: '70–77',
    communication: 'Opowiadamy o rodzinie, pytamy, czyja to rzecz, i opisujemy codzienne zwyczaje.',
    vocabulary: 'Krewni, stan cywilny i częstotliwość czynności: zawsze — każdego razu, zwykle — w większości przypadków, często — wiele razy, rzadko — niewiele razy, nigdy — ani razu.',
    grammar: 'Zaimki dzierżawcze (czyj? czyja? czyje?) zgadzają się z rodzajem rzeczownika: mój/moja/moje, twój/twoja/twoje, nasz/nasza/nasze, wasz/wasza/wasze, natomiast jego, jej, ich są nieodmienne. Przysłówki częstotliwości (zawsze, zwykle, często, rzadko, nigdy) stoją zwykle przed czasownikiem. Z „nigdy” obowiązuje podwójne przeczenie: „nigdy nie + czasownik”.',
    examples: [
      { polish: 'To jest moja rodzina. Mój brat często do mnie dzwoni.', translation: 'To jest moja rodzina. Mój brat często do mnie dzwoni.' },
      { polish: 'Ona nigdy nie pracuje w niedzielę.', translation: 'Ona nigdy nie pracuje w niedzielę.' },
    ],
  },
  12: {
    coursebookPages: '78–83',
    communication: 'Zapraszamy gdzieś, umawiamy się na spotkanie i rozmawiamy o planie dnia.',
    vocabulary: 'Dni tygodnia i czas; liczebniki porządkowe od 1 do 24. godzina — jednostka czasu, kwadrans — piętnaście minut, umówić się — ustalić spotkanie.',
    grammar: 'Do podawania godziny używamy „o + miejscownik” liczebników porządkowych (o pierwszej, o drugiej), a nieoficjalnie także kwadrans po…, za piętnaście… oraz „o wpół do + dopełniacz” (o wpół do ósmej — 7:30). Dni tygodnia: w poniedziałek, we wtorek. Rozróżniamy kierunek: „iść do + dopełniacz” (miejsca/budynki: do kina) oraz „iść na + biernik” (wydarzenia: na koncert); zaproszenia: „Masz ochotę…?”, „Może pójdziemy…?”',
    examples: [
      { polish: 'Masz ochotę pójść do kina?', translation: 'Masz ochotę pójść do kina?' },
      { polish: 'Spotkajmy się w poniedziałek o ósmej.', translation: 'Spotkajmy się w poniedziałek o ósmej.' },
      { polish: 'W piątek o wpół do ósmej idę do kina, a w sobotę na koncert.', translation: 'W piątek o wpół do ósmej idę do kina, a w sobotę na koncert.' },
    ],
  },
  13: {
    coursebookPages: '84–91',
    communication: 'Opowiadamy, co robiliśmy wcześniej, jak spędziliśmy weekend i co się wydarzyło.',
    vocabulary: 'Czas wolny, podróże, rozmowy telefoniczne i wrażenia: mieć zasięg — mieć połączenie z siecią, odpisywać — odpowiadać na wiadomość, pomagać — wspierać kogoś w działaniu.',
    grammar: 'W czasie przeszłym do tematu z -ł/-ła/-ło (l. poj.) oraz -li (r. męskoosobowy) / -ły (r. niemęskoosobowy) dodajemy końcówki osobowe: -em/-am, -eś/-aś, -Ø, -śmy, -ście, -Ø (robiłem/robiłam, robiliśmy/robiłyśmy). Czasowniki na -eć (mieć, rozumieć) zmieniają e na a wszędzie poza formą z -li: miałem/miała, ale mieli; rozumiałem, ale rozumieli. Nieregularne tematy: jeść (jadłem/jadłam/jedli) i iść/pójść (szedłem/szłam, poszedłem/poszłam).',
    examples: [
      { polish: 'Wczoraj byłam w kinie i jadłam kolację.', translation: 'Wczoraj byłam w kinie i jadłam kolację.' },
      { polish: 'Tom poszedł na spacer, a Mami pomagała Karolinie.', translation: 'Tom poszedł na spacer, a Mami pomagała Karolinie.' },
    ],
  },
  14: {
    coursebookPages: '92–97',
    communication: 'Pytamy o drogę, nazywamy środki transportu i wyjaśniamy, jak dojść lub dojechać do miejsca.',
    vocabulary: 'Miejsca w mieście i punkty orientacyjne: skrzyżowanie — miejsce, gdzie przecinają się drogi, schody — stopnie do chodzenia w górę i w dół, światła — sygnalizacja świetlna, blisko — niedaleko, daleko — w dużej odległości.',
    grammar: 'Pary iść/chodzić i jechać/jeździć różnią się ruchem jednokierunkowym i powtarzalnym: idę teraz, chodzę codziennie; jadę dziś, jeżdżę do pracy. Środki transportu łączą się z narzędnikiem: jechać samochodem, autobusem, taksówką. Zaimki w bierniku i dopełniaczu: widzę go, widzę ją, a po przyimku mają n- (czekam na niego, na nią, na nich; z naciskiem: jego).',
    examples: [
      { polish: 'Idę do kina, ale zwykle chodzę do teatru.', translation: 'Idę do kina, ale zwykle chodzę do teatru.' },
      { polish: 'Dziś jadę tramwajem, a do pracy jeżdżę autobusem.', translation: 'Dziś jadę tramwajem, a do pracy jeżdżę autobusem.' },
    ],
  },
  15: {
    coursebookPages: '98–105',
    communication: 'Kupujemy produkty na wagę i w opakowaniach, zwracamy się z prośbą i wysyłamy listy lub kartki pocztowe.',
    vocabulary: 'Miary i opakowania: plasterek — cienki kawałek, kawałek — część czegoś, paczka — małe opakowanie, puszka — metalowe opakowanie, karton — opakowanie z tektury. Czasowniki bać się i szukać wymagają dopełniacza.',
    grammar: 'Liczebniki 2, 3, 4 łączą się z mianownikiem liczby mnogiej (dwa kartony), a 5 i więcej oraz dużo, mało z dopełniaczem liczby mnogiej rzeczownika i przymiotnika (pięć dużych kartonów, dużo jabłek). Dopełniacz występuje też po przeczeniu i czasownikach bać się, szukać. Formy zaimków: nie ma mnie, szukam go, boję się jej, a po przyimkach: do ciebie, do niego, do niej, do nich.',
    examples: [
      { polish: 'Poproszę dwa kartony soku i pięć jabłek.', translation: 'Poproszę dwa kartony soku i pięć jabłek.' },
      { polish: 'Szukam znaczków i nie mam koperty.', translation: 'Szukam znaczków i nie mam koperty.' },
    ],
  },
  16: {
    coursebookPages: '106–111',
    communication: 'Mówimy o pogodzie, porach roku, planach na przyszłość i prognozie.',
    vocabulary: 'Pogoda i pory roku: słonecznie — kiedy świeci słońce, pochmurno — kiedy niebo jest zasłonięte chmurami, wiatr — poruszające się powietrze, prognoza — zapowiedź pogody, pora roku — wiosna, lato, jesień lub zima.',
    grammar: 'Przysłówki tworzymy od przymiotników za pomocą -o lub -e/-ie: szybki → szybko, ładny → ładnie, dobry → dobrze. Pory roku mają formę narzędnika (wiosną, latem, jesienią, zimą), a miesiące wymagają w + miejscownika (w styczniu, w maju). Czas przyszły złożony tworzymy przez będę, będziesz... + bezokolicznik lub formę na -ł/-ła (szczególnie będę mógł/mogła, będę chciał/chciała, będę musiał/musiała).',
    examples: [
      { polish: 'Jutro będzie zimno, ale będę pracować.', translation: 'Jutro będzie zimno, ale będę pracować.' },
      { polish: 'W weekend napiszę list.', translation: 'W weekend napiszę list.' },
    ],
  },
  17: {
    coursebookPages: '112–117',
    communication: 'Wyrażamy sympatię, opinię i emocje, rozmawiamy o prezentach i o innych ludziach.',
    vocabulary: 'Wygląd, ubrania, nastrój i rozmowy: podobać się — wywoływać dobre wrażenie, plotkować — rozmawiać o innych ludziach za ich plecami, marudny — ciągle narzekający.',
    grammar: 'Czasownik lubić wymaga biernika: lubię ten sweter. W konstrukcji podobać się to, co się podoba, jest w mianowniku, a osoba w celowniku: podoba mi się sweter; w liczbie mnogiej: podobają mi się buty. Zaimki osobowe odmieniają się przez przypadki (ja → mnie/mi, on → go/jemu/mu), a po przyimkach w 3. osobie przyjmują n-: z nim, o niej, dla niego.',
    examples: [
      { polish: 'Lubię tę bluzkę. Podoba mi się jej kolor.', translation: 'Lubię tę bluzkę. Podoba mi się jej kolor.' },
      { polish: 'Podobają mi się te spodnie.', translation: 'Podobają mi się te spodnie.' },
    ],
  },
  18: {
    coursebookPages: '118–123',
    communication: 'Opisujemy mieszkanie, pokoje, meble i położenie przedmiotów.',
    vocabulary: 'Pokoje i mieszkanie: kuchnia — pomieszczenie do gotowania, sypialnia — pokój do spania, piętro — poziom budynku, parter — poziom na wysokości ulicy, strych — pomieszczenie pod dachem, piwnica — pomieszczenie pod domem.',
    grammar: 'Miejscownik występuje po przyimkach w, na, przy, o, po (w domu, na stole, przy oknie, o mieszkaniu) oraz po czasownikach myśleć o, marzyć o, podróżować po. W liczbie pojedynczej ma końcówki: -e (z wymianami t:ci, d:dzi, r:rz, ł:l — w szafie, na stole), -u po k, g, ch i tematach miękkich (w pokoju, w parku) oraz -i/-y w rodzaju żeńskim (w kuchni); w liczbie mnogiej zwykle -ach (o studentach).',
    examples: [
      { polish: 'Laptop leży na biurku, a książki są w szafie.', translation: 'Laptop leży na biurku, a książki są w szafie.' },
      { polish: 'Rozmawiamy o nowym mieszkaniu.', translation: 'Rozmawiamy o nowym mieszkaniu.' },
    ],
  },
  19: {
    coursebookPages: '124–129',
    communication: 'Szukamy mieszkania, umawiamy się w sprawie wynajmu i opisujemy, gdzie są rzeczy.',
    vocabulary: 'Przeprowadzka i mieszkanie: przeprowadzać się — zmieniać miejsce zamieszkania, mieszkanie — lokal, w którym się mieszka, zaspać — obudzić się za późno, zdarzać się — wydarzać się, przytrafiać się.',
    grammar: 'Statyczne przyimki miejsca łączą się z trzema przypadkami: na, w, przy + miejscownik (w pokoju, na stole); obok, koło, blisko, na wprost + dopełniacz (obok domu); nad, pod, przed, za, między + narzędnik (pod stołem, za szafą). Położenie przedmiotów opisujemy czasownikami stać, leżeć, wisieć.',
    examples: [
      { polish: 'Stół stoi przy oknie, a książka leży na stole.', translation: 'Stół stoi przy oknie, a książka leży na stole.' },
      { polish: 'Szukam mieszkania obok centrum.', translation: 'Szukam mieszkania obok centrum.' },
    ],
  },
  20: {
    coursebookPages: '130–135',
    communication: 'Planujemy podróże po Polsce, opisujemy kierunki i pytamy, jak dojechać.',
    vocabulary: 'Kierunki geograficzne i atrakcje: północ — kierunek geograficzny, przeciwny do południa, południe — kierunek geograficzny, przeciwny do północy, granica — linia między państwami, zabytek — stary, cenny obiekt, wycieczka — krótka podróż w celu zwiedzania.',
    grammar: 'Przyimek i przypadek zależą od pytania gdzie? (miejsce) lub dokąd? (kierunek). Dla miast, krajów i budynków: w + miejscownik → do + dopełniacz (w Krakowie → do Krakowa); dla wysp i regionów: na + miejscownik → na + biernik (na Mazurach → na Mazury); dla morza i jezior: nad + narzędnik → nad + biernik (nad morzem → nad morze).',
    examples: [
      { polish: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.', translation: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.' },
      { polish: 'Hotel leży na północy Polski.', translation: 'Hotel leży na północy Polski.' },
    ],
  },
  21: {
    coursebookPages: '136–143',
    communication: 'Mówimy o datach, urodzinach i wydarzeniach z życia.',
    vocabulary: 'Daty i wydarzenia z życia: urodziny — rocznica dnia narodzin, imieniny — dzień imienia w kalendarzu, obchodzić — świętować, rok — dwanaście miesięcy.',
    grammar: 'Pary aspektowe łączą czasownik niedokonany (proces, nawyk: robiłem) i dokonany (rezultat: zrobiłem) w czasie przeszłym. Daty w odpowiedzi na kiedy? stoją w dopełniaczu (piątego lipca), a lata używają w + miejscownika ostatniego liczebnika porządkowego i słowa roku (w tysiąc dziewięćset osiemdziesiątym dziewiątym roku).',
    examples: [
      { polish: 'Wczoraj pisałam list.', translation: 'Wczoraj pisałam list.' },
      { polish: 'Wczoraj napisałam list.', translation: 'Wczoraj napisałam list.' },
    ],
  },
  22: {
    coursebookPages: '144–149',
    communication: 'Opowiadamy o planach na weekend i umawiamy się przez telefon.',
    vocabulary: 'Plany i czynności: zostawać — pozostawać w miejscu, zająć — wziąć miejsce lub czas, zejść — pójść w dół; uczymy się rozmawiać o tym, co zrobić i czym się zająć.',
    grammar: 'W czasie przyszłym aspekt niedokonany (będę + bezokolicznik lub -ł/-ła: będę czytać) wyraża proces lub powtarzalność, a dokonany pojedynczą formą oznacza rezultat (przeczytam, zrobię, zadzwonię; często z przedrostkiem). Czasowniki ruchu mają w przyszłości dokonanej osobne tematy: iść → pójdę, jechać → pojadę, wyjść → wyjdę, wejść → wejdę.',
    examples: [
      { polish: 'W sobotę będę czytać książkę.', translation: 'W sobotę będę czytać książkę.' },
      { polish: 'W niedzielę przeczytam ten artykuł.', translation: 'W niedzielę przeczytam ten artykuł.' },
    ],
  },
  23: {
    coursebookPages: '150–157',
    communication: 'Kupujemy ubrania, opisujemy rzeczy, mówimy komplementy i porównujemy opcje.',
    vocabulary: 'Ubrania, tkaniny, kolory i wzory; nosić — mieć coś na sobie, mieć na sobie — być ubranym w coś.',
    grammar: 'Przymiotniki stopniujemy przez -szy/-ejszy i naj- (ładny → ładniejszy → najładniejszy), dłuższe przez bardziej/najbardziej, a nieregularne to: dobry → lepszy, zły → gorszy, duży → większy, mały → mniejszy. Porównania tworzymy z niż + mianownik, od + dopełniacz i ze + dopełniacz (najgrubszy ze wszystkich). Ubrania po nosić i mieć na sobie stoją w bierniku; rozróżniamy też znać (+ biernik) i wiedzieć (fakt).',
    examples: [
      { polish: 'Ta sukienka jest ładniejsza niż tamta.', translation: 'Ta sukienka jest ładniejsza niż tamta.' },
      { polish: 'Mam na sobie czerwoną bluzkę.', translation: 'Mam na sobie czerwoną bluzkę.' },
    ],
  },
  24: {
    coursebookPages: '158–165',
    communication: 'Rozmawiamy u fryzjera i w klubie fitness, aprobujemy lub krytykujemy efekt.',
    vocabulary: 'Wygląd, części ciała, fryzura i pielęgnacja; pozwolić sobie na — mieć możliwość, by coś zrobić lub kupić, strzyżenie — skracanie włosów.',
    grammar: 'Przysłówki (odpowiadają na jak?, w odróżnieniu od przymiotników jaki?) stopniujemy przez -ej/-iej i naj-: szybko → szybciej → najszybciej. Ważne wyjątki: dobrze → lepiej → najlepiej, źle → gorzej, dużo → więcej, mało → mniej. Niektóre części ciała mają nieregularną liczbę mnogą: oko → oczy, ucho → uszy, ręka → ręce.',
    examples: [
      { polish: 'Tutaj jest drożej niż w Londynie.', translation: 'Tutaj jest drożej niż w Londynie.' },
      { polish: 'Po tej fryzurze wyglądasz najlepiej.', translation: 'Po tej fryzurze wyglądasz najlepiej.' },
    ],
  },
  25: {
    coursebookPages: '166–171',
    communication: 'Zwracamy się do lekarza lub dentysty i dajemy rady.',
    vocabulary: 'Części ciała, objawy i leczenie: boleć — sprawiać ból, zażywać — brać lek, lekarz — osoba, która leczy chorych, dentysta — lekarz zębów.',
    grammar: 'Do udzielania rad używamy powinien + bezokolicznik, uzgadniając formę z osobą, rodzajem i liczbą: powinienem/powinnam, powinieneś/powinnaś, powinien/powinna/powinno, powinniśmy/powinnyśmy, powinni/powinny. Czasownik boleć zgadza się liczbą z częścią ciała, a osoba jest w bierniku: boli mnie głowa, bolą mnie zęby.',
    examples: [
      { polish: 'Powinieneś odpocząć. Powinnaś iść do lekarza.', translation: 'Powinieneś odpocząć. Powinnaś iść do lekarza.' },
      { polish: 'Boli mnie głowa.', translation: 'Boli mnie głowa.' },
    ],
  },
  26: {
    coursebookPages: '172–177',
    communication: 'Prosimy o przysługę, zgłaszamy problem i składamy skargę lub reklamację.',
    vocabulary: 'Służby i sytuacje nieprzewidziane: wypadek — nagłe zdarzenie z ofiarami lub szkodami, kradzież — zabranie cudzej rzeczy, pożar — ogień niszczący coś, naprawić — sprawić, że coś znów działa, reklamacja — zgłoszenie wady towaru lub usługi.',
    grammar: 'Tryb przypuszczający łagodzi prośby i życzenia. Do formy czasu przeszłego dodajemy cząstkę -by z końcówką osobową (-m, -ś, —, -śmy, -ście): mógłbym/mogłabym, mógłbyś/mogłabyś, mógłby pan/mogłaby pani, chcielibyśmy/chciałybyśmy. Do udzielania rad używamy też formy powinien/powinna + bezokolicznik.',
    examples: [
      { polish: 'Czy mógłby pan mi pomóc?', translation: 'Czy mógłby pan mi pomóc?' },
      { polish: 'Chciałabym złożyć reklamację.', translation: 'Chciałabym złożyć reklamację.' },
    ],
  },
  27: {
    coursebookPages: '6–13',
    communication: 'Przedstawiamy się dokładniej, opowiadamy o wyglądzie, charakterze, zainteresowaniach, rodzinie i marzeniach.',
    vocabulary: 'Wygląd, cechy charakteru, stan cywilny, hobby i czas wolny.',
    grammar: 'Narzędnik (kim? czym?) ma końcówki -em (r. m./n.), -ą (r. ż.), -ami/-mi (l. mn., np. dziećmi), a w przymiotnikach -ym/-im, -ą, -ymi/-imi. Występuje po czasownikach interesować się, zajmować się, kierować, opiekować się (w odróżnieniu od prowadzić + biernik), po przyimkach z/ze, przed, nad, pod, za, między, poza oraz przy określaniu środka transportu lub narzędzia. Zaimki osobowe: mną, tobą, nim, nią, nami, wami, nimi.',
    examples: [
      { polish: 'Interesuję się polskim kinem.', translation: 'Interesuję się polskim kinem.' },
      { polish: 'Jadę do pracy autobusem.', translation: 'Jadę do pracy autobusem.' },
    ],
  },
  28: {
    coursebookPages: '14–19',
    communication: 'Opisujemy niezwykłe wydarzenia i klęski żywiołowe, opowiadamy o rodzinie i biografiach.',
    vocabulary: 'Kataklizmy, klęski żywiołowe, wydarzenia rodzinne i fakty biograficzne.',
    grammar: 'Dopełniacz (kogo? czego?) przyjmuje w l. poj. -a/-u (r. m./n.), -y/-i (r. ż.), w l. mn. -ów/-y/-i/końcówkę zerową, a w przymiotnikach -ego/-ej/-ych (-ich). Wymagają go przeczenia, przyimki do, od, z, bez, dla, obok, podczas oraz czasowniki szukać, potrzebować, bać się, używać, słuchać. Po określeniach ilości (dużo, mało, kilka, wiele; dla r. męskoosobowego: kilku, wielu, dwóch, trzech) rzeczownik stoi w dopełniaczu l. mn., a czasownik w 3. os. l. poj. r. nijakiego (jest, było, zginęło).',
    examples: [
      { polish: 'Nie mam czasu ani ochoty.', translation: 'Nie mam czasu ani ochoty.' },
      { polish: 'Boję się burzy.', translation: 'Boję się burzy.' },
    ],
  },
  29: {
    coursebookPages: '20–25',
    communication: 'Kupujemy bilety do kina, sprawdzamy repertuar i porównujemy filmy.',
    vocabulary: 'Kino, seanse, bilety, gatunki, recenzje i opis filmu.',
    grammar: 'Rozróżniamy przyimki statyczne (gdzie?: w/na + miejscownik; przed/pod/nad/za/między + narzędnik) i dynamiczne (dokąd?: do/na + dopełniacz/biernik; skąd?: z/od + dopełniacz). Godziny podajemy z o/po + miejscownik (o ósmej), przed + narzędnik (przed ósmą), na + biernik (na ósmą). Prośby i polecenia przekazujemy przez żeby + bezokolicznik lub żeby + czas przeszły (żebym, żebyś, żeby, żebyśmy + -ł/-ła/-li) w odróżnieniu od że; utrwalamy też zaimki w celowniku (mi, ci, mu, jej, nam, wam, im).',
    examples: [
      { polish: 'O której zaczyna się seans?', translation: 'O której zaczyna się seans?' },
      { polish: 'Mami poprosiła Angelę, żeby poszła z nią do kina.', translation: 'Mami poprosiła Angelę, żeby poszła z nią do kina.' },
    ],
  },
  30: {
    coursebookPages: '26–31',
    communication: 'Podajemy definicje, opisujemy ludzi oraz nazywamy narodowości, zawody i dyscypliny sportowe.',
    vocabulary: 'Narodowości, zawody, sport, nazwy osób i przedmiotów.',
    grammar: 'Mianownik liczby mnogiej rzeczowników: rodzaj niemęskoosobowy (one) ma końcówki -y, -i (po k, g), -e (tematy miękkie) lub -a (r. nijaki). Rodzaj męskoosobowy (oni) tworzy formy z -i/-y i wymianą spółgłosek (t→ci, k→cy, g→dzy, r→rzy: student → studenci, Polak → Polacy), -owie (panowie, profesorowie) lub -e (nauczyciele, lekarze); wyjątki: ludzie, bracia, księża, dzieci. Z liczebnikami 2–4 łączymy dwaj, trzej, czterej + mianownik l. mn. (dwaj studenci są) albo dwóch, trzech, czterech + dopełniacz l. mn. (dwóch studentów jest).',
    examples: [
      { polish: 'Polacy mieszkają w Polsce.', translation: 'Polacy mieszkają w Polsce.' },
      { polish: 'Dwaj lekarze pracują w szpitalu.', translation: 'Dwaj lekarze pracują w szpitalu.' },
    ],
  },
  31: {
    coursebookPages: '32–39',
    communication: 'Opisujemy charakter i wygląd, podajemy definicje, formułujemy i uzasadniamy opinię.',
    vocabulary: 'Cechy charakteru, relacje, oceny i wyrażanie własnej opinii.',
    grammar: 'Przymiotniki i zaimki w rodzaju męskoosobowym l. mn. otrzymują końcówkę -i/-y z wymianą spółgłoski tematycznej (dobry → dobrzy, miły → mili, młody → młodzi, wysoki → wysocy, drogi → drodzy; ci, moi, nasi, wszyscy), podczas gdy niemęskoosobowe mają -e (dobre, te, moje). Przymiotniki urzeczownikowione (znajomy, bezdomny) odmieniają się jak przymiotniki. W definicjach stosujemy konstrukcje ktoś, kto / coś, co oraz człowiek, który (-a, -e, -zy), odmieniając który i kto przez przypadki (kogo, komu, z kim, o którym).',
    examples: [
      { polish: 'To są bardzo zdolni studenci, którzy lubią się uczyć.', translation: 'To są bardzo zdolni studenci, którzy lubią się uczyć.' },
      { polish: 'Moi przyjaciele są cierpliwi.', translation: 'Moi przyjaciele są cierpliwi.' },
    ],
  },
  32: {
    coursebookPages: '40–45',
    communication: 'Rozmawiamy o edukacji, nauce, komputerze, doświadczeniu i planach.',
    vocabulary: 'Szkoła, uniwersytet, komputer, internet, przedmioty i stopnie naukowe.',
    grammar: 'Rzeczowniki odczasownikowe tworzymy za pomocą przyrostków -nie (-anie, -enie: czytać → czytanie, mówić → mówienie) lub -cie (pić → picie, myć → mycie); są one zawsze rodzaju nijakiego. Po przyimkach odmieniają się jak rzeczowniki na -e (do czytania, podczas pisania, przed jedzeniem, po przeczytaniu), a dopełnienie po nich stoi w dopełniaczu (czytanie książek). Przeczenie nie z tymi rzeczownikami piszemy łącznie (niepalenie).',
    examples: [
      { polish: 'Lubię czytanie reportaży.', translation: 'Lubię czytanie reportaży.' },
      { polish: 'Przed wysłaniem pliku sprawdź tekst.', translation: 'Przed wysłaniem pliku sprawdź tekst.' },
    ],
  },
  33: {
    coursebookPages: '46–51',
    communication: 'Przechodzimy rozmowę kwalifikacyjną, mówimy o pracy i trudnościach zawodowych, piszemy CV i listy.',
    vocabulary: 'Zatrudnienie, stanowiska, rodzaje firm i korespondencja biznesowa.',
    grammar: 'Utrwalamy przypadki i czasy w kontekście CV oraz rozmowy o pracę: szukać/potrzebować + dopełniacz (szukam pracy), pracować jako + mianownik lub w + miejscownik (w firmie), interesować się/zajmować się + narzędnik, wysłać CV + narzędnik (mailem). Do opisu doświadczenia i planów używamy czasu przeszłego i przyszłego, a przymiotniki tworzymy od rzeczowników przyrostkami -owy, -ny, -ący (stres → stresujący, odpowiedzialność → odpowiedzialny).',
    examples: [
      { polish: 'Mam doświadczenie w pracy z klientami.', translation: 'Mam doświadczenie w pracy z klientami.' },
      { polish: 'Czy mogę wysłać CV mailem?', translation: 'Czy mogę wysłać CV mailem?' },
    ],
  },
  34: {
    coursebookPages: '52–57',
    communication: 'Przeprowadzamy wywiad, opowiadamy o wydarzeniach, pochodzeniu i wspomnieniach.',
    vocabulary: 'Pochodzenie, rodzina, podróże i ważne wydarzenia.',
    grammar: 'W bierniku l. mn. rodzaj męskoosobowy jest równy dopełniaczowi (znam dobrych aktorów), a niemęskoosobowy mianownikowi (znam ciekawe historie); po przyimkach odróżniamy biernik (kierunek: dokąd?) od miejscownika (miejsce: gdzie?). Zaimek zwrotny swój/swoja/swoje/swoi wskazuje na podmiot zdania (Alicja kocha swojego męża — własnego, a nie jej — cudzego) i odmienia się jak mój. Używamy też imiesłowów przymiotnikowych biernych na -ny/-ony/-ty (napisany, zrobiony, zamknięty).',
    examples: [
      { polish: 'Pamiętam swoich przyjaciół z dzieciństwa.', translation: 'Pamiętam swoich przyjaciół z dzieciństwa.' },
      { polish: 'Pamiętam tę historię.', translation: 'Pamiętam tę historię.' },
    ],
  },
  35: {
    coursebookPages: '58–65',
    communication: 'Udzielamy instrukcji, formułujemy zakazy i przygotowujemy się do podróży.',
    vocabulary: 'Wyjazdy, pakowanie bagażu, kemping, lotnisko i znaki drogowe.',
    grammar: 'Tryb rozkazujący w 2. os. l. poj. tworzymy od tematu czasu teraźniejszego (koniugacja I–II: pisz!, chodź!, mów!, po grupie spółgłosek -ij/-yj: zamknij!, weź!; koniugacja III -am/-em: -j: czytaj!, kupuj!), w l. mn. dodajemy -my/-cie, a dla 3. osoby używamy niech + 3. os. (niech pan/pani sprawdzi!). W zasadach, radach i zakazach stosujemy konstrukcje bezosobowe z bezokolicznikiem: trzeba, należy, powinno się, można, wolno, nie wolno, warto. Prośby relacjonujemy za pomocą żeby + czas przeszły.',
    examples: [
      { polish: 'Spakuj paszport i bilet.', translation: 'Spakuj paszport i bilet.' },
      { polish: 'Nie wolno tu palić.', translation: 'Nie wolno tu palić.' },
    ],
  },
  36: {
    coursebookPages: '66–71',
    communication: 'Pytamy o informacje, poznajemy atrakcje turystyczne Polski i piszemy wiadomości.',
    vocabulary: 'Miasta i miejsca turystyczne, listy, e-maile i SMS-y.',
    grammar: 'Miejscownik (o kim? o czym?, po w, na, o, po, przy) w l. poj. ma końcówki -e ze zmiękczeniem (k→c, g→dz, r→rz, t→ci, d→dzi, ł→l, ch→sz: w Polsce, w szafie), -u (r. m./n. po k, g, ch i tematach miękkich: w Gdańsku, w domu) oraz -i/-y (r. ż. miękkotematowy: w kuchni), a w l. mn. -ach. Wołacz l. poj. u rzeczowników męskich zwykle pokrywa się z miejscownikiem (panie profesorze, Piotrze; rzeczowniki na -a: kolego!), u żeńskich przyjmuje -o (Anno, Ewo), -u w zdrobnieniach (Ewciu, Kasiu) lub -i (pani!), a w l. mn. równy jest mianownikowi (Drodzy panowie!).',
    examples: [
      { polish: 'Co warto zobaczyć w Gdańsku?', translation: 'Co warto zobaczyć w Gdańsku?' },
      { polish: 'Droga Anno, dziękuję za wiadomość.', translation: 'Droga Anno, dziękuję za wiadomość.' },
    ],
  },
  37: {
    coursebookPages: '72–77',
    communication: 'Opowiadamy, dokąd i czym się poruszamy, używamy utartych wyrażeń.',
    vocabulary: 'Turystyka, poruszanie się, kierunki i idiomy z czasownikami ruchu (np. z wyjść).',
    grammar: 'Rozróżniamy czasowniki ruchu jednokierunkowe (iść, jechać, lecieć, płynąć) i wielokrotne (chodzić, jeździć, latać, pływać). Dodanie przedrostka (przy-, wy-, w-/we-, prze-, od-, do-, pod-, roz-) tworzy od czasowników typu iść/jechać czasowniki dokonane (przyjść, wyjść, wejść, wyjechać), a od chodzić/jeździć — niedokonane (przychodzić, wychodzić, wchodzić, wyjeżdżać). Zwracamy uwagę na nieregularne formy czasu przeszłego czasownika iść i jego złożeń: szedł/szła/szli, poszedł/poszła, wszedł/weszła, wyszedł/wyszła.',
    examples: [
      { polish: 'Codziennie jeżdżę do pracy tramwajem.', translation: 'Codziennie jeżdżę do pracy tramwajem.' },
      { polish: 'Wczoraj wyszliśmy z domu wcześnie.', translation: 'Wczoraj wyszliśmy z domu wcześnie.' },
    ],
  },
  38: {
    coursebookPages: '78–83',
    communication: 'Pytamy o drogę, rozmawiamy o przepisach ruchu drogowego i wyrażamy niezadowolenie.',
    vocabulary: 'Ruch drogowy, transport, stacja benzynowa i punkty orientacyjne.',
    grammar: 'Rozróżniamy czasowniki ruchu wielokierunkowe (zwykłe), jednokierunkowe (w trakcie) i dokonane: chodzić / iść / pójść, jeździć / jechać / pojechać, pływać / płynąć / popłynąć, latać / lecieć / polecieć (w czasie przyszłym: pojadę, popłynę, polecę lub będę jeździć/pływać/latać). W komunikacji używamy czasowników z przedrostkami i przyimkami: wsiąść do (+ D.), wysiąść z (+ D.), przesiąść się na (+ B.), dojechać do (+ D.). Odróżniamy też siadać (proces), siedzieć (stan) i usiąść / siąść (aspekt dokonany).',
    examples: [
      { polish: 'Jak dojadę na dworzec?', translation: 'Jak dojadę na dworzec?' },
      { polish: 'Proszę jechać prosto i skręcić w lewo.', translation: 'Proszę jechać prosto i skręcić w lewo.' },
    ],
  },
  39: {
    coursebookPages: '84–91',
    communication: 'Mówimy o trudnych sytuacjach życiowych, relacjach i o tym, komu czego potrzeba.',
    vocabulary: 'Wydarzenia życiowe, trudności, relacje, wolontariat i reakcje ludzi.',
    grammar: 'W celowniku liczby pojedynczej (komu? czemu?) rzeczowniki męskie mają końcówkę -owi (przyjacielowi, ale krótkie wyjątki: bratu, panu, ojcu, psu), nijakie — -u (dziecku, życiu), a żeńskie — -e z wymianami (matce, kobiecie, Annie) lub -i/-y (pani, Zofii, pracy). Przymiotniki przyjmują końcówki -emu (r. m./n.) i -ej (r. ż.). Celownik występuje po czasownikach (pomagać, ufać, dziękować, szkodzić, kibicować, zazdrościć, wierzyć), w wyrażeniach bezosobowych (jest mi zimno) oraz z przyimkami dzięki, wbrew, przeciw(ko).',
    examples: [
      { polish: 'Przyjaciel pomógł mi w trudnej sytuacji.', translation: 'Przyjaciel pomógł mi w trudnej sytuacji.' },
      { polish: 'Dziecku jest zimno.', translation: 'Dziecku jest zimno.' },
    ],
  },
  40: {
    coursebookPages: '92–99',
    communication: 'Opowiadamy o tradycjach Dnia Zadusznego i wydarzeniach z powojennej historii Polski.',
    vocabulary: 'Polskie tradycje, cmentarz, pamięć, wydarzenia historyczne, protesty społeczne i wspomnienia rodzinne.',
    grammar: 'Zaimek zwrotny się / siebie (bez mianownika: D./B. siebie/się, C./Msc. sobie, N. sobą) odnosi się do podmiotu zdania niezależnie od osoby i liczby (Adam myśli o sobie ≠ o nim). Po przyimkach zaimki osobowe przybierają formy dłuższe i z literą n- (o mnie, dla ciebie, do niego, z nią, o nich). Powtarzamy też wyrażenia przyimkowe (wobec, wbrew, ze względu na, podczas) oraz tryb rozkazujący.',
    examples: [
      { polish: 'Wspominamy tych, którzy odeszli.', translation: 'Wspominamy tych, którzy odeszli.' },
      { polish: 'Zadbaj o siebie.', translation: 'Zadbaj o siebie.' },
    ],
  },
  41: {
    coursebookPages: '100–105',
    communication: 'Opowiadamy o tradycjach świątecznych i historii, opisujemy, jak obchodzi się święta.',
    vocabulary: 'Polskie święta, zwyczaje, potrawy świąteczne, daty i wyrażenia sezonowe.',
    grammar: 'Do opisu ogólnych zwyczajów i wydarzeń z przeszłości używamy form bezosobowych: 3. osoby l. poj. + się w czasie teraźniejszym, przeszłym i przyszłym (obchodzi się, obchodziło się, będzie się obchodzić) oraz form przeszłych zakończonych na -no / -to (zorganizowano, podpisano, zjedzono, wypito). Powtarzamy też daty w dopełniaczu (1 stycznia, w 2011 roku) oraz tryb rozkazujący w przepisach (pokrój, dodaj, gotuj).',
    examples: [
      { polish: 'W Wigilię dzielimy się opłatkiem.', translation: 'W Wigilię dzielimy się opłatkiem.' },
      { polish: 'W Polsce święta obchodzi się rodzinnie.', translation: 'W Polsce święta obchodzi się rodzinnie.' },
    ],
  },
  42: {
    coursebookPages: '106–111',
    communication: 'Opisujemy przygody i kolejność wydarzeń w czasie.',
    vocabulary: 'Przygody, żeglarstwo, góry, wspomnienia i wyrażenia czasu.',
    grammar: 'Łączymy wydarzenia w czasie spójnikami i określeniami uprzedniości (zanim, przedtem, wcześniej, przed + N.), równoczesności (kiedy, gdy, podczas + D., w czasie + D., w międzyczasie, równocześnie) oraz następstwa (po tym jak, potem, następnie, w końcu, dopóki, po + Msc.). Ćwiczymy też formy czasu przeszłego czasowników na -ść/-źć z wymianami (usiąść → usiadłem/usiedliśmy, upaść → upadłem, trząść się → trząsłem się/trzęsłam się/trzęśliśmy się) oraz tryb rozkazujący.',
    examples: [
      { polish: 'Zanim wyszliśmy, sprawdziliśmy mapę.', translation: 'Zanim wyszliśmy, sprawdziliśmy mapę.' },
      { polish: 'Kiedy wróciłam, wszyscy już spali.', translation: 'Kiedy wróciłam, wszyscy już spali.' },
    ],
  },
  43: {
    coursebookPages: '112–119',
    communication: 'Opowiadamy o polskiej historii, polityce i społeczeństwie.',
    vocabulary: 'Historia, państwo, społeczeństwo i wydarzenia z przeszłości.',
    grammar: 'W czasie przeszłym aspekt niedokonany wyraża proces lub czynność powtarzaną (często, zazwyczaj, dawniej, cały dzień), a dokonany — pojedyncze zdarzenie lub rezultat (nagle, wreszcie, raz); pamiętamy o parach supletywnych (mówić / powiedzieć, brać / wziąć, widzieć / zobaczyć). W trybie rozkazującym w poleceniach twierdzących zwykle używamy aspektu dokonanego (Przeczytaj!, Powiedz!), a po przeczeniu nie (w zakazach) — niedokonanego (Nie mów!, Nie czytaj!).',
    examples: [
      { polish: 'Przeczytaj artykuł i opowiedz, co się wydarzyło.', translation: 'Przeczytaj artykuł i opowiedz, co się wydarzyło.' },
      { polish: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.', translation: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.' },
    ],
  },
  44: {
    coursebookPages: '120–125',
    communication: 'Mówimy o planach na przyszłość, zwierzętach i przyrodzie.',
    vocabulary: 'Zwierzęta, zwierzęta domowe, przyroda i stałe wyrażenia.',
    grammar: 'Rzeczowniki rodzaju nijakiego na -ę typu zwierzę (kurczę, szczenię, imię) rozszerzają temat w odmianie: w l. poj. o -ci-/-ni- (zwierzęcia, zwierzęciu, zwierzęciem; imienia), a w l. mn. o -t-/-n- (zwierzęta, D. zwierząt, zwierzętom, zwierzętami; imiona, imion). Rozróżniamy zaimki wszyscy / wszystkie, każdy / każda / każde, cały / cała / całe oraz żaden / żadna / żadne (także nie wszyscy, nie każdy). Powtarzamy też czas przyszły, daty i rekcję liczebników (2–4 + M. l. mn., 5+ + D. l. mn.).',
    examples: [
      { polish: 'Zaopiekuję się zwierzęciem sąsiadów.', translation: 'Zaopiekuję się zwierzęciem sąsiadów.' },
      { polish: 'W przyszłym roku pojedziemy nad morze.', translation: 'W przyszłym roku pojedziemy nad morze.' },
    ],
  },
  45: {
    coursebookPages: '126–131',
    communication: 'Rozmawiamy o ekologii, nawykach i możliwych skutkach naszych decyzji.',
    vocabulary: 'Agroturystyka, ochrona przyrody, gospodarstwo rolne i ekologiczne nawyki.',
    grammar: 'Warunki realne budujemy ze spójnikami jeżeli / jeśli …, to … (czas teraźniejszy lub przyszły). Do hipotez, życzeń, grzecznych próśb i warunków nierealnych używamy trybu przypuszczającego: 3. osoba czasu przeszłego + cząstka -bym, -byś, -by, -byśmy, -byście, -by (chciałabym, mógłbyś, mielibyśmy). W zdaniach warunkowych cząstka by łączy się z gdy-: gdyby…, to… (Gdybym wygrał, kupiłbym dom).',
    examples: [
      { polish: 'Jeżeli będziemy segregować śmieci, ograniczymy ich ilość.', translation: 'Jeżeli będziemy segregować śmieci, ograniczymy ich ilość.' },
      { polish: 'Chętnie mieszkałabym na wsi.', translation: 'Chętnie mieszkałabym na wsi.' },
    ],
  },
  46: {
    coursebookPages: '132–139',
    communication: 'Porównujemy towary, rozmawiamy o zakupach i składamy reklamację.',
    vocabulary: 'Sprzęt AGD, sklepy, zakupy, gwarancja i zwrot towaru.',
    grammar: 'Budujemy zdania podrzędnie złożone ze słowami pytającymi i względnymi (który, co, gdzie, skąd, dlaczego, jak długo, ile, czy, że, żeby) oraz pilnujemy rekcji czasowników (obejść się bez + D., unikać + D., troszczyć się o + B.). Partykuła byle / byleby wyraża: 1) minimalny warunek lub życzenie (Byleby rachunek był czytelny, byle do wiosny), 2) dowolność lub niską jakość (byle co, byle jaki, byle jak, byle gdzie, byle kto), a z przeczeniem — coś wyjątkowego (nie byle co, nie byle kto).',
    examples: [
      { polish: 'Chcę oddać blender, który zepsuł się po tygodniu.', translation: 'Chcę oddać blender, który zepsuł się po tygodniu.' },
      { polish: 'Byleby rachunek był czytelny.', translation: 'Byleby rachunek był czytelny.' },
    ],
  },
  47: {
    coursebookPages: '140–145',
    communication: 'Rozmawiamy o kinie i teatrze, wyrażamy emocje i bierzemy udział w dyskusji.',
    vocabulary: 'Filmy, spektakle, aktorzy, piractwo internetowe, wrażenia i emocje.',
    grammar: 'Imiesłowy przymiotnikowe bierne tworzymy za pomocą przyrostków -ny (napisany, zagrany), -ony (zrobiony, wyreżyserowany, nagrodzony) i -ty (zajęty, przyjęty, pobity, otwarty); zgadzają się z rzeczownikiem w rodzaju, liczbie i przypadku (r. mos.: zaproszeni, nagrodzeni). W stronie biernej czasownik być łączy się z imiesłowem niedokonanym lub dokonanym (jest grany, był nagradzany), a zostać — tylko z dokonanym dla jednorazowego rezultatu (został wyreżyserowany); wykonawcę wprowadza przez + B.',
    examples: [
      { polish: 'Ten film został wyreżyserowany przez znanego reżysera.', translation: 'Ten film został wyreżyserowany przez znanego reżysera.' },
      { polish: 'Spektakl jest grany w każdy piątek.', translation: 'Spektakl jest grany w każdy piątek.' },
    ],
  },
  48: {
    coursebookPages: '146–151',
    communication: 'Mówimy o sztuce i wystawach, wyrażamy zachwyt i krytyczną opinię.',
    vocabulary: 'Malarstwo, fotografia, muzea, wystawy i wernisaże.',
    grammar: 'Rzeczowniki rodzaju nijakiego zakończone na -um (muzeum, akwarium, archiwum, centrum, liceum, stypendium) nie odmieniają się w liczbie pojedynczej — w każdym przypadku mają formę -um (do muzeum, w muzeum, z muzeum), choć przymiotniki i zaimki przy nich się odmieniają (w nowym muzeum, do tego muzeum). W liczbie mnogiej odrzucają -um i odmieniają się regularnie: muzea, D. muzeów, C. muzeom, N. muzeami, Msc. w muzeach.',
    examples: [
      { polish: 'W muzeum oglądaliśmy niezwykłe akwarium.', translation: 'W muzeum oglądaliśmy niezwykłe akwarium.' },
      { polish: 'Ta wystawa zrobiła na mnie ogromne wrażenie.', translation: 'Ta wystawa zrobiła na mnie ogromne wrażenie.' },
    ],
  },
  49: {
    coursebookPages: '152–157',
    communication: 'Powtarzamy cały kurs i poznajemy format egzaminów certyfikatowych z języka polskiego.',
    vocabulary: 'Polecenia egzaminacyjne, ocenianie, poprawność, płynność wypowiedzi, idiomy i wyrażanie opinii.',
    grammar: 'Systematyzujemy wszystkie 7 przypadków (w tym rzeczowniki odczasownikowe na -anie/-enie/-cie z poleceń egzaminacyjnych: rozumienie, czytanie, pisanie, mówienie) oraz formy zaimków osobowych (mnie/mi, go/niego, jej/niej, ich/nich). Powtarzamy też system czasownika (czasy, aspekt, tryb rozkazujący, tryb przypuszczający, stronę bierną) i stosujemy go w zadaniach ustnych oraz pisemnych.',
    examples: [
      { polish: 'Proszę przeczytać tekst i odpowiedzieć na pytania.', translation: 'Proszę przeczytać tekst i odpowiedzieć na pytania.' },
      { polish: 'Moim zdaniem odpowiedź jest poprawna.', translation: 'Moim zdaniem odpowiedź jest poprawna.' },
    ],
  },
  ...PART3_THEORY_PL,
};
