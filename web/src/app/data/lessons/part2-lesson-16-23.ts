import { Activity, ActivityKind, Lesson, typed } from '../lesson-types';

type Entry = [string, string | string[]];
const exercise = (lesson: number, number: number, title: string, instruction: string, entries: Entry[]): Activity => ({
  id: `p2-l${String(lesson).padStart(2, '0')}-e${String(number).padStart(2, '0')}`,
  sourceExerciseId: `WB2-L${String(lesson).padStart(2, '0')}-E${String(number).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja ${lesson} · ćwiczenie ${number}`,
  kind: ActivityKind.Typed,
  title,
  instruction,
  items: entries.map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
});
const lesson = (id: number, title: string, subtitle: string, topic: string, pages: string, color: Lesson['color'], activities: Activity[]): Lesson => ({
  id, title, subtitle, topic, pages, color, activities,
});

export const LESSON_42 = lesson(42, 'Przygody, przeżycia, wspomnienia', 'Opowiadamy o przygodach i niespodziewanych wydarzeniach', 'Żeglowanie · góry · czas przeszły', 'Ćwiczenia 1–16 · podręcznik 106–111', 'blue', [
  exercise(16, 1, 'Jaki to przypadek?', 'Rozpoznaj przypadek wyróżnionego rzeczownika.', [
    ['Wybraliśmy się na Mazury.', 'biernik'], ['Nasi mężowie to pasjonaci zmagań z wiatrem i wodą.', 'mianownik'],
    ['Nie muszę zachwalać mazurskich krajobrazów.', 'dopełniacz'], ['Można tu posłuchać ciszy.', 'dopełniacz'],
    ['Wiatr przewraca łodzie jak dziecięce zabawki.', 'biernik'], ['Tatry wydają się małe w porównaniu z Alpami.', 'narzędnik'],
    ['Nietrudno tu o wypadek.', 'biernik'], ['Droga prowadziła przez otwartą przestrzeń.', 'biernik'],
    ['Nie spodziewaliśmy się gwałtownej zmiany pogody.', 'dopełniacz'], ['Mami wpadła w panikę.', 'biernik'],
    ['Zmęczeni wędrówką po górach pojechaliśmy nad ocean.', 'narzędnik'], ['O świcie chcieliśmy jechać do szpitala.', 'miejscownik'],
    ['Oferowano mi transport osiołkiem.', 'narzędnik'], ['Zaufałam miejscowej znachorce.', 'celownik'],
  ]),
  exercise(16, 2, 'Czasownik i rzeczownik', 'Utwórz rzeczownik lub czasownik od podanego wyrazu.', [
    ['wynająć', 'wynajęcie'], ['otaczać', 'otoczenie'], ['żeglować', 'żegluga'], ['zmagać się', 'zmaganie'],
    ['zachwalać', 'pochwała'], ['zwiedzać', 'zwiedzanie'], ['ratować', 'ratunek'], ['ostrzegać', 'ostrzeżenie'],
  ]),
  exercise(16, 3, 'Na żaglówce', 'Wpisz nazwę elementu łodzi.', [
    ['Przód łodzi.', 'dziób'], ['Tył łodzi.', 'rufa'], ['Pionowy element trzymający żagiel.', 'maszt'],
    ['Płachta, którą napędza wiatr.', 'żagiel'], ['Element do kierowania łodzią.', 'ster'],
    ['Pomieszczenie do spania na łodzi.', 'kajuta'], ['Boczna część łodzi.', 'burta'],
    ['Flaga na łodzi.', 'bandera'], ['Sznur na łodzi.', 'lina'], ['Osoba prowadząca łódź.', 'żeglarz'],
  ]),
  exercise(16, 4, 'Wypadek w górach', 'Uzupełnij opowiadanie.', [
    ['W końcu ___ do schroniska.', 'dotarliśmy'], ['Wieczorem Ania ___ wcześniej.', 'wyruszyła'],
    ['Nagle ___ coś nieoczekiwanego.', 'zdarzyło się'], ['Wezwaliśmy ___ .', 'ratunek'],
    ['Zaskoczył nas ___ wiatr.', 'gwałtowny'], ['To było ___ przeżycie.', 'niesamowite'],
    ['Co wtedy ___ zrobić?', 'postanowiliście'],
  ]),
  exercise(16, 9, 'Po wypadku', 'Posłuchaj nagrania i wpisz brakujące słowa.', [
    ['Człowiek ___ się ze strachu.', 'trzęsie'], ['Boi się wysokości: ma ___ wysokości.', 'lęk'],
    ['Długo iść przez jakiś teren to ___ go.', 'przemierzać'], ['Zacząć podróż to ___.', 'wyruszyć'],
    ['Pęknięcie skały to ___.', 'załamanie'], ['Gęsia skórka pojawia się ze strachu lub zimna.', 'gęsia skórka'],
    ['Kiedy bardzo się boi, ___ w panikę.', 'wpada'],
  ]),
  exercise(16, 15, 'Czasowe określenia', 'Wpisz słowo lub wyrażenie pasujące do kontekstu.', [
    ['Przed chwilą, całkiem niedawno.', 'ostatnio'], ['W pierwszej kolejności.', 'najpierw'],
    ['Po jakimś czasie.', 'później'], ['W tym samym czasie.', 'równocześnie'],
    ['Na koniec, wreszcie.', 'w końcu'], ['W trakcie czegoś.', 'podczas'],
  ]),
]);

export const LESSON_43 = lesson(43, 'Trochę historii', 'Opowiadamy o stanie wojennym i wydarzeniach z przeszłości', 'Historia Polski · aspekty czasownika · tryb rozkazujący', 'Ćwiczenia 1–14 · podręcznik 112–119', 'coral', [
  exercise(17, 1, 'Stan wojenny', 'Wpisz wyraz pasujący do definicji.', [
    ['Oddział wojskowy.', 'oddział wojskowy'], ['Zatrzymać kogoś przez służby.', 'aresztować'],
    ['Funkcjonariusze formacji z czasów PRL.', 'ZOMO'], ['Kartka uprawniająca do zakupu żywności.', 'kartka na żywność'],
    ['Opancerzony pojazd wojskowy.', 'czołg'], ['Zezwolenie na wyjście lub wjazd.', 'przepustka'],
  ]),
  exercise(17, 2, 'Słownictwo historyczne', 'Dopasuj wyraz do objaśnienia.', [
    ['wyjątkowy', 'niezwykły'], ['ogłasza się', 'podaje się do wiadomości'], ['wprowadzić', 'ustanowić'],
    ['nakazać', 'rozkazać'], ['wojenny', 'związany z wojną'], ['zawieszony', 'czasowo wstrzymany'],
    ['zniesiono', 'przestało obowiązywać'], ['ograniczenia', 'zakazy i limity'],
    ['obowiązują', 'są w mocy'], ['zakaz', 'brak pozwolenia'],
  ]),
  exercise(17, 3, 'Przeciwieństwa', 'Wpisz wyraz o przeciwnym znaczeniu.', [
    ['rozpocząć', 'zakończyć'], ['nakaz', 'zakaz'], ['obrona', 'atak'], ['uzbrojony', 'bezbronny'],
    ['wkroczyć', 'wyjść'], ['zezwolenie', 'zakaz'], ['dotychczas', 'od teraz'],
    ['zawiesić działalność', 'wznowić działalność'], ['skazać', 'uniewinnić'],
  ]),
  exercise(17, 4, 'Przyimki', 'Uzupełnij zdania właściwym przyimkiem.', [
    ['___ nakazu.', 'bez'], ['___ względu na sytuację.', 'ze'], ['___ kolegę.', 'za'],
    ['___ wolność.', 'o'], ['___ ludzi.', 'do'], ['___ władzy.', 'przeciw'],
    ['___ Polsce.', 'w'], ['___ przepisom.', 'wbrew'],
  ]),
  exercise(17, 5, 'Wspomnienia z przeszłości', 'Wpisz odpowiednią formę czasownika w czasie przeszłym.', [
    ['Wczoraj ___ zadanie domowe. (odrobić, ja)', 'odrobiłem'],
    ['Ona ___ nowy projekt. (zaprojektować)', 'zaprojektowała'],
    ['Długo ___ przez telefon. (gadać, ona)', 'gadała'],
    ['On wreszcie ___ odpowiedź. (zrozumieć)', 'zrozumiał'],
    ['Ona ___ list do rodziny. (pisać)', 'pisała'], ['Wczoraj ___ do domu. (pójść, ona)', 'poszła'],
    ['Wróciła i ___ wszystkie dokumenty. (sprawdzać)', 'sprawdzała'],
  ]),
  exercise(17, 7, 'Polecenia', 'Utwórz tryb rozkazujący.', [
    ['zobaczyć (wy)', 'Zobaczcie'], ['położyć się (ty)', 'Połóż się'], ['powiedzieć (ty)', 'Powiedz'],
    ['opowiedzieć (ty)', 'Opowiedz'], ['znaleźć (ty)', 'Znajdź'], ['odpowiedzieć (wy)', 'Odpowiedzcie'],
    ['brać lekarstwo (ty)', 'Bierz'], ['wziąć (ty)', 'Weź'],
  ]),
  exercise(17, 8, 'Aspekt czasownika', 'Wybierz aspekt pasujący do znaczenia.', [
    ['Przeczytaj tekst i ___, co się stało. (opowiadać / opowiedzieć)', 'opowiedz'],
    ['Kiedy mieszkał w Polsce, często ___ muzea. (odwiedzać / odwiedzić)', 'odwiedzał'],
    ['Wczoraj ___ do domu o ósmej. (wracać / wrócić)', 'wrócił'],
    ['Cały wieczór ___ książkę. (czytać / przeczytać)', 'czytał'],
  ]),
]);

export const LESSON_44 = lesson(44, 'Królestwo zwierząt', 'Opowiadamy o zwierzętach i ich potrzebach', 'Zwierzęta · odmiana rzeczownika zwierzę · zaimki', 'Ćwiczenia 1–13 · podręcznik 120–125', 'lime', [
  exercise(18, 1, 'Zgadnij, jakie to zwierzę', 'Wpisz zwierzę pasujące do opisu.', [
    ['Kopie korytarze pod ziemią.', 'kret'], ['Pilnuje domu i szczeka.', 'pies'], ['Ma długie uszy i skacze.', 'królik'],
    ['Znosi jajka i mieszka w kurniku.', 'kura'], ['Ciągną wóz lub mieszkają w stajni.', 'konie'],
    ['Młoda owca.', 'baranek'], ['Ptak, który pływa i gęga.', 'gęś'], ['Różowa, hodowana w chlewie.', 'świnia'],
    ['Mruczy i łapie myszy.', 'kot'], ['Ruda, mieszka na drzewie.', 'wiewiórka'],
    ['Ma długi ogon i lubi ser.', 'mysz'], ['Samiec krowy.', 'byk'],
  ]),
  exercise(18, 2, 'Odmiana słowa „zwierzę”', 'Uzupełnij zdanie właściwą formą.', [
    ['Wszystkie ___ potrzebują opieki.', 'zwierzęta'], ['Ludzie opiekują się ___ .', 'zwierzętami'],
    ['Nie krzywdź ___ .', 'zwierząt'], ['Rozmawialiśmy o ___ .', 'zwierzętach'],
    ['W schronisku przybyło ___ .', 'zwierząt'], ['Lubię ___ .', 'zwierzęta'],
    ['Pomagamy ___ w potrzebie.', 'zwierzętom'], ['Nie ma tu dzikich ___ .', 'zwierząt'],
    ['Dzieci uczą się o ___ .', 'zwierzętach'], ['Wolontariusze opiekują się ___ .', 'zwierzętami'],
    ['Dajemy jedzenie ___ .', 'zwierzętom'], ['Wspieramy ochronę ___ .', 'zwierząt'],
  ]),
  exercise(18, 3, 'Prawda czy nieprawda?', 'Zaznacz P lub N na podstawie tekstu.', [
    ['Wszyscy studenci lubią piwo.', 'N'], ['Wszystkie kobiety chcą mieć dzieci.', 'N'],
    ['Wszyscy mężczyźni mają prawo jazdy.', 'N'], ['Wszyscy politycy są nieuczciwi.', 'N'],
    ['Wszystkie zwierzęta są użyteczne dla człowieka.', 'N'], ['Wszyscy komuniści byli źli.', 'N'],
    ['Wszystkie nauczycielki są cierpliwe.', 'N'], ['Wszystkie niemowlęta mają niebieskie oczy.', 'N'],
    ['Wszyscy bezdomni są alkoholikami.', 'N'], ['Wszyscy Włosi są spontaniczni.', 'N'],
  ]),
  exercise(18, 4, 'Każdy, wszyscy, wszystko', 'Uzupełnij odpowiednim zaimkiem.', [
    ['___ człowiek ma swoje przyzwyczajenia.', 'Każdy'], ['Pomogli ___ potrzebującym.', 'wszystkim'],
    ['Przeczytałem ___ książkę.', 'całą'], ['Zaprosiłam ___ z grupy.', 'każdego'],
    ['Znam ___ prawdę.', 'całą'], ['Nie kupiłem ___ nowych rzeczy.', 'żadnych'],
    ['___ z nas może pomóc.', 'Każdy'], ['Dziękuję ___ za przyjście.', 'wszystkim'],
    ['Zrobię ___, co mogę.', 'wszystko'], ['___ uczestnicy spotkania zabrali głos.', 'Wszyscy'],
  ]),
  exercise(18, 12, 'Zwierzęta w opowiadaniu', 'Posłuchaj nagrania i wpisz nazwę zwierzęcia.', [
    ['Mały ssak, który kopie nory.', 'kret'], ['Najwierniejszy przyjaciel człowieka.', 'pies'],
    ['Skacze i ma długie uszy.', 'królik'], ['Ptak domowy znoszący jajka.', 'kura'],
    ['Zwierzęta pociągowe, liczba mnoga.', 'konie'], ['Młody baran.', 'baranek'],
    ['Ptak wodny.', 'gęś'], ['Zwierzę hodowlane w chlewie.', 'świnia'],
    ['Lubi mleko i poluje na myszy.', 'kot'], ['Rude zwierzę z puszystym ogonem.', 'wiewiórka'],
    ['Małe zwierzę, które lubi ser.', 'mysz'], ['Dorosły samiec krowy.', 'byk'],
  ]),
  exercise(18, 13, 'Pomagamy zwierzętom', 'Posłuchaj nagrania i uzupełnij słowa.', [
    ['Wolontariusze opiekują się zwierzętami w ___.', 'schronisku'],
    ['Psy pomagają osobom ___.', 'niewidomym'],
    ['Nie kupuj kosmetyków testowanych na ___.', 'zwierzętach'],
    ['Wybieraj produkty bez szkodliwych ___.', 'chemikaliów'],
    ['Czytaj skład i świadomie dokonuj ___.', 'wyboru'],
    ['Można podpisać petycję w obronie ___ .', 'zwierząt'],
  ]),
]);

export const LESSON_45 = lesson(45, 'Oszczędzaj!', 'Rozmawiamy o ekologii i codziennych nawykach', 'Środowisko · warunek · tryb przypuszczający', 'Ćwiczenia 1–15 · podręcznik 126–131', 'lime', [
  exercise(19, 1, 'Ekologiczne rozwiązania', 'Dopasuj problem do działania.', [
    ['Wysokie zużycie paliwa w mieście.', 'ekojazda'], ['Duże zużycie prądu przez oświetlenie.', 'żarówki energooszczędne'],
    ['Brak wody do podlewania ogrodu.', 'zbiorniki na deszczówkę'], ['Szkodliwe środki używane w gospodarstwie.', 'nawozy i środki ochrony roślin'],
    ['Sól na chodnikach i ulicach zimą.', 'posypywanie ulic solą'],
  ]),
  exercise(19, 2, 'Dlaczego warto oszczędzać?', 'Uzupełnij zdania.', [
    ['Mniejsze ___ paliwa to mniej dwutlenku węgla.', 'zużycie'], ['Energooszczędne ___ ograniczają pobór prądu.', 'żarówki'],
    ['Deszczówka może być ___ do podlewania.', 'uzdatniana'], ['Niektóre ___ są szkodliwe dla środowiska.', 'nawozy'],
    ['Zimą sól szkodzi łapom zwierząt, można używać piasku i ___.', 'popiołu'],
  ]),
  exercise(19, 3, 'Rozmowa o gospodarstwie', 'Posłuchaj i uzupełnij dialog.', [
    ['Szukam miejsca na weekendowy wyjazd dla ___ osób.', 'pięciu'],
    ['Będziemy mieli trzy wolne ___.', 'pokoje'], ['Za puste łóżko trzeba zapłacić połowę ___.', 'ceny'],
    ['Można przygotowywać posiłki w kuchni dla ___.', 'gości'],
    ['Pensjonat jest trzy kilometry od ___.', 'wyciągu narciarskiego'],
    ['Na terenie pensjonatu działa bezprzewodowy ___.', 'internet'],
  ]),
  exercise(19, 4, 'Rady dla środowiska', 'Uzupełnij radę odpowiednim czasownikiem.', [
    ['___ śmieci.', 'Segreguj'], ['___ światło, kiedy wychodzisz.', 'Wyłączaj'],
    ['___ wodę podczas mycia zębów.', 'Zakręcaj'], ['___ żarówki na energooszczędne.', 'Wymień'],
    ['___ rowerem zamiast samochodem.', 'Jeździj'], ['___ torby wielokrotnego użytku.', 'Używaj'],
  ]),
  exercise(19, 5, 'Hasło krzyżówki', 'Wpisz słowo pasujące do definicji.', [
    ['Niepotrzebne odpady.', 'śmieci'], ['Oddzielanie różnych rodzajów odpadów.', 'segregacja'],
    ['Może być papierowe lub plastikowe.', 'opakowanie'], ['Używać mniej, żeby chronić zasoby.', 'oszczędzać'],
    ['Oddychamy nim.', 'powietrze'], ['Powtarzane zachowanie.', 'nawyk'],
    ['Pierwiastek obecny w paliwach kopalnych.', 'węgiel'], ['Droga przeznaczona do wędrówki.', 'szlak'],
    ['Zakaz wjazdu lub palenia.', 'zakaz'], ['Zanieczyszczenie powietrza w mieście.', 'smog'],
  ]),
  exercise(19, 6, 'Tryb przypuszczający', 'Utwórz formę trybu przypuszczającego.', [
    ['my (móc)', 'moglibyśmy'], ['ty (musieć)', 'musiałbyś'], ['my (chcieć)', 'chcielibyśmy'],
    ['oni (mieć)', 'mieliby'], ['ja (móc, rodzaj męski)', 'mógłbym'], ['ja (mieć, rodzaj żeński)', 'miałabym'],
    ['wy (móc)', 'moglibyście'], ['ty (chcieć, rodzaj żeński)', 'chciałabyś'],
  ]),
]);

export const LESSON_46 = lesson(46, 'Konsument na rynku', 'Porównujemy zakupy i reklamujemy wadliwy produkt', 'Zakupy · rynek · sprzęty domowe · zdania warunkowe', 'Ćwiczenia 1–15 · podręcznik 132–139', 'yellow', [
  exercise(20, 1, 'Rynek i zakupy', 'Uzupełnij wyraz pasujący do definicji.', [
    ['Miejsce, w którym kupuje się i sprzedaje towary.', 'rynek'], ['Osoba kupująca towary i usługi.', 'konsument'],
    ['Rynek, na którym kupujący mają silną pozycję.', 'rynek konsumenta'], ['Rynek bez ograniczeń państwa.', 'wolny rynek'],
    ['Kupowanie towarów i usług.', 'konsumpcja'], ['Dotyczący konsumenta.', 'konsumencki'],
    ['Nabywać towary za pieniądze.', 'kupować'],
  ]),
  exercise(20, 2, 'Gdzie kupujemy?', 'Wpisz nazwę sklepu.', [
    ['Chleb i bułki.', 'piekarnia'], ['Leki.', 'apteka'], ['Książki.', 'księgarnia'],
    ['Mięso.', 'sklep mięsny'], ['Warzywa i owoce.', 'warzywniak'], ['Kwiaty.', 'kwiaciarnia'],
    ['Buty.', 'sklep obuwniczy'], ['Zegarki.', 'u zegarmistrza'], ['Tort i ciasta.', 'cukiernia'],
    ['Złote i srebrne ozdoby.', 'u jubilera'],
  ]),
  exercise(20, 3, 'Sprzęty domowe', 'Wpisz nazwę urządzenia pasującego do czynności.', [
    ['Odkurzanie podłogi.', 'odkurzacz'], ['Przygotowywanie tostów.', 'toster'], ['Pranie ubrań.', 'pralka'],
    ['Gotowanie wody.', 'czajnik'], ['Suszenie włosów.', 'suszarka'], ['Parzenie kawy.', 'ekspres do kawy'],
    ['Mycie naczyń.', 'zmywarka'], ['Przechowywanie żywności w niskiej temperaturze.', 'lodówka'],
    ['Prasowanie ubrań.', 'żelazko'], ['Podgrzewanie jedzenia.', 'kuchenka mikrofalowa'],
  ]),
  exercise(20, 4, 'Pytania o sprzęt', 'Wybierz właściwe pytanie.', [
    ['Pytamy o konkretny przedmiot.', 'co'], ['Pytamy o miejsce.', 'gdzie'], ['Pytamy o źródło lub początek.', 'skąd'],
    ['Pytamy o liczbę.', 'ile'], ['Pytamy o cechę.', 'jaki'], ['Pytamy o powód.', 'dlaczego'],
    ['Pytamy o czas trwania.', 'jak długo'], ['Pytamy o częstotliwość.', 'jak często'],
  ]),
  exercise(20, 5, 'Co robi urządzenie?', 'Uzupełnij właściwą czynnością.', [
    ['Telewizor służy do ___.', 'oglądania'], ['Żelazko służy do ___.', 'prasowania'],
    ['Mikrofalówka służy do ___.', 'podgrzewania'], ['Suszarka służy do ___.', 'suszenia'],
    ['Pralka służy do ___.', 'prania'], ['Kuchenka służy do ___.', 'gotowania'],
    ['Odkurzacz służy do ___.', 'odkurzania'], ['Zmywarka służy do ___.', 'mycia'],
    ['Ekspres służy do ___.', 'parzenia kawy'], ['Lodówka służy do ___.', 'chłodzenia'],
  ]),
  exercise(20, 6, 'Naprawa i działanie', 'Wpisz właściwy synonim lub przeciwieństwo.', [
    ['działać (sprzęt)', 'funkcjonować'], ['działać (urządzenie)', 'chodzić'],
    ['uszkodzić', 'zepsuć'], ['uszkodzić ↔', 'naprawić'], ['popsuć się', 'zepsuć się'],
    ['naprawić', 'zreperować'], ['włączyć ↔', 'wyłączyć'], ['zepsuty ↔', 'naprawiony'],
  ]),
  exercise(20, 8, 'Reklamacja w sklepie', 'Posłuchaj rozmowy i uzupełnij brakujące słowa.', [
    ['Chciałbym złożyć ___.', 'reklamację'], ['Urządzenie przestało ___ po tygodniu.', 'działać'],
    ['Proszę pokazać dowód ___.', 'zakupu'], ['Sprzedawca może sprzęt ___ albo wymienić.', 'naprawić'],
  ]),
  exercise(20, 14, 'Byle…', 'Uzupełnij wyrażenie z „byle”.', [
    ['Nieważne co.', 'byle co'], ['Oby dotrwać do wiosny.', 'byle do wiosny'],
    ['Niedbale, bez staranności.', 'byle jak'], ['Nieważne kto.', 'byle kto'],
    ['Nieważne gdzie.', 'byle gdzie'], ['Mieć tylko dach nad głową.', 'byle mieć dach nad głową'],
    ['Nieważne kim.', 'byle kim'], ['To nie jest zwykła okazja.', 'nie byle okazja'],
  ]),
]);

export const LESSON_47 = lesson(47, 'Sztuka i piractwo', 'Rozmawiamy o prawach autorskich i pobieraniu plików', 'Prawa autorskie · strona bierna · opinie', 'Ćwiczenia 1–11 · podręcznik 140–145', 'violet', [
  exercise(21, 1, 'Prawa autorskie', 'Uzupełnij zdanie odpowiednim wyrazem.', [
    ['Nielegalne pobieranie plików to ___.', 'piractwo'], ['Autor utworu ma ___ do swojej pracy.', 'prawa autorskie'],
    ['Pobierać muzykę z internetu bez zgody to ___ muzykę.', 'ściągać'],
    ['Osoby łamiące prawo mogą ponieść ___.', 'konsekwencje'], ['Za darmo, bez opłaty.', 'darmowy'],
    ['Osoba tworząca muzykę.', 'muzyk'], ['Osoba tworząca książkę.', 'twórca'],
  ]),
  exercise(21, 2, 'Strona bierna', 'Przekształć zdanie na stronę bierną.', [
    ['Poliński wyreżyserował ten film.', 'Ten film został wyreżyserowany przez Polańskiego.'],
    ['Tata zrobił ten stół.', 'Ten stół został zrobiony przez mojego tatę.'],
    ['Piotrek kupił to biurko.', 'To biurko zostało kupione przez Piotrka.'],
    ['Policja zamknęła bandytę.', 'Bandyta został zamknięty przez policję.'],
    ['Lekarka bada pacjenta.', 'Pacjent jest badany przez lekarkę.'],
    ['Wszyscy segregują śmieci.', 'Śmieci są segregowane przez wszystkich.'],
  ]),
  exercise(21, 3, 'Opinie o piractwie', 'Uzupełnij zdania słowami z tekstu.', [
    ['Nielegalnie ___ muzykę z internetu.', 'ściągałem'], ['Trzeba ___ ten proceder.', 'powstrzymać'],
    ['Nie każdy ma dostęp do ___.', 'sieci'], ['Łamią prawo i popełniają ___.', 'przestępstwo'],
    ['Nie wszyscy korzystający z plików są ___.', 'niewinni'], ['Wszyscy powinniśmy dbać o prawa ___.', 'twórców'],
  ]),
  exercise(21, 6, 'Emocje i reakcje', 'Wpisz słowo pasujące do kontekstu.', [
    ['Sprawiać komuś dyskomfort.', 'krępować'], ['Odczuwający wstyd.', 'wstydliwy'],
    ['Sytuacja, która wywołuje napięcie.', 'stresująca'], ['Uczucie zażenowania.', 'wstyd'],
    ['Wywołujące oburzenie.', 'oburzające'], ['Niepewność lub lęk.', 'strach'],
    ['Nieprzyjemna sytuacja wywołująca gniew.', 'oburzenie'], ['Być zawstydzonym.', 'wstydzić się'],
  ]),
]);

export const LESSON_48 = lesson(48, 'Warto zobaczyć', 'Opisujemy dzieła sztuki i wyrażamy swoje wrażenia', 'Muzea · wystawy · rzeczowniki na -um', 'Ćwiczenia 1–11 · podręcznik 146–151', 'violet', [
  exercise(22, 1, 'Kolekcje i dzieła sztuki', 'Wpisz właściwą nazwę dziedziny lub przedmiotu.', [
    ['Zbieranie monet.', 'numizmatyka'], ['Wyroby z gliny.', 'ceramika'], ['Ręcznie wykonane przedmioty.', 'rękodzieło'],
    ['Trójwymiarowe dzieło z kamienia lub drewna.', 'rzeźba'], ['Wstępny rysunek.', 'szkic'],
    ['Przedmioty związane z wojskiem.', 'militaria'], ['Sztuka malowania obrazów.', 'malarstwo'],
    ['Drukowana praca graficzna.', 'plakat'], ['Przedmioty codziennego użytku o walorach estetycznych.', 'sztuka użytkowa'],
  ]),
  exercise(22, 2, 'Wrażenia z wystawy', 'Uzupełnij opinię właściwym słowem.', [
    ['Ta kolekcja ___ mnie.', 'fascynuje'], ['Wystawa ___ publiczność.', 'urzekła'],
    ['To ___ ciekawa ekspozycja.', 'niezwykle'], ['Jakość reprodukcji jest ___.', 'marna'],
    ['Artystka ma ___ wyobraźnię.', 'niezrównaną'], ['To ___ dzieło.', 'urocze'],
    ['To przeciętny obraz, nic ___.', 'nadzwyczajnego'], ['Wystawa ___ zwiedzających.', 'zadziwia'],
  ]),
  exercise(22, 3, 'Rzeczowniki zakończone na -um', 'Uzupełnij zdanie odpowiednią formą.', [
    ['W tym ___ oglądamy wystawę.', 'muzeum'], ['Nowe ___ ma wiele sal.', 'muzeum'],
    ['Spotkaliśmy się w ___.', 'muzeum'], ['Wyszliśmy z ___.', 'muzeum'],
    ['W akwarium pływają kolorowe ___.', 'ryby'], ['Zobaczyliśmy ogromne ___.', 'akwaria'],
    ['Słynne ___ znajduje się w centrum miasta.', 'liceum'], ['Pracuje w dwóch ___.', 'liceach'],
  ]),
  exercise(22, 4, 'Czyja to praca?', 'Uzupełnij odpowiedzi na pytania do tekstu.', [
    ['Jaki zawód ma Andrzej?', 'Jest lekarzem i kardiochirurgiem.'],
    ['Gdzie można oglądać jego prace?', 'W galerii „Nowa Sztuka”.'],
    ['Czy uczył się malować?', 'Nie, nigdy nie uczył się sztuki malowania.'],
    ['Dlaczego zaczął malować?', 'Malowanie stało się ucieczką od stresu zawodowego.'],
    ['Kto doradził mu malowanie na płótnie?', 'Jego pięcioletni syn.'],
    ['Dlaczego nie był na wernisażu?', 'Miał nieplanowaną operację.'],
  ]),
  exercise(22, 7, 'Opinie o wystawie', 'Posłuchaj wypowiedzi i uzupełnij brakujące słowa.', [
    ['Angela: ___ wystawę.', 'Naprawdę'], ['Angela: To ___ praca.', 'rewelacyjna'],
    ['Mami: To dość ___ .', 'kiepska'], ['Javier: To świetny ___.', 'pomysł'],
    ['Javier: Wolę ___ sztukę.', 'tradycyjną'],
  ]),
  exercise(22, 9, 'Muzea i kolekcje', 'Posłuchaj krótkich nagrań i wpisz temat kolekcji.', [
    ...['numizmatyka', 'ceramika', 'rękodzieło', 'rzeźba', 'szkic', 'militaria', 'malarstwo', 'plakat', 'sztuka użytkowa'].map((x, i) => [`Nagranie ${i + 1}`, x] as Entry),
  ]),
  exercise(22, 11, 'Rozmowa o artyście', 'Posłuchaj i uzupełnij odpowiedzi.', [
    ['Jaki zawód ma Andrzej?', 'lekarz'], ['Gdzie można oglądać jego prace?', 'w galerii Nowa Sztuka'],
    ['Co stało się jego ucieczką od stresu?', 'malowanie'], ['Kto poradził mu malować na płótnie?', 'jego syn'],
    ['Dlaczego nie był na wernisażu?', 'Miał nieplanowaną operację.'],
  ]),
]);

export const LESSON_49 = lesson(49, 'Czas na egzamin', 'Powtarzamy materiał i ćwiczymy zadania egzaminacyjne', 'Egzamin · poprawność · słownictwo i gramatyka', 'Ćwiczenia 1–11 · podręcznik 152–157', 'yellow', [
  exercise(23, 1, 'Rozumienie poleceń', 'Wpisz właściwy czasownik w instrukcji egzaminacyjnej.', [
    ['___ tekst i odpowiedz na pytania.', 'Przeczytaj'], ['___ nagrania i zaznacz odpowiedzi.', 'Posłuchaj'],
    ['___ właściwą formę gramatyczną.', 'Wybierz'], ['___ zdania we właściwej kolejności.', 'Ułóż'],
    ['___ odpowiedź pełnym zdaniem.', 'Zapisz'], ['___ swoją pracę przed oddaniem.', 'Sprawdź'],
  ]),
  exercise(23, 2, 'Językowy autotest', 'Wpisz właściwe określenie.', [
    ['Zasady i poprawność języka.', 'gramatyka'], ['Szybkość i płynność wypowiedzi.', 'biegłość'],
    ['Słowa potrzebne do rozmowy.', 'słownictwo'], ['Ocena wykonanej pracy.', 'wynik'],
    ['Wypowiedź ustna przed egzaminatorem.', 'egzamin ustny'], ['Tekst napisany samodzielnie.', 'wypowiedź pisemna'],
  ]),
  exercise(23, 3, 'Powtórka gramatyczna', 'Wpisz właściwą formę.', [
    ['Dziękuję ___ za pomoc. (ty)', 'ci'], ['Nie ma ___ w domu. (ona)', 'jej'],
    ['Wczoraj ___ do kina. (my, rodzaj żeński)', 'poszłyśmy'],
    ['Jeśli będę mieć czas, ___ do ciebie. (przyjść)', 'przyjdę'],
    ['Książka została ___ przez nauczyciela. (polecić)', 'polecona'],
    ['Gdybym wiedział, ___ wcześniej. (zadzwonić)', 'zadzwoniłbym'],
  ]),
  exercise(23, 4, 'Wyraź swoją opinię', 'Dokończ zdanie poprawnym zwrotem.', [
    ['___, ten tekst jest interesujący.', 'Moim zdaniem'], ['___ się z tobą.', 'Zgadzam'],
    ['Nie ___, że to dobry pomysł.', 'sądzę'], ['Jestem ___, że możemy to zrobić.', 'pewna'],
    ['Z ___ na moje doświadczenie, warto spróbować.', 'uwagi'],
  ]),
  exercise(23, 10, 'Egzamin ustny', 'Posłuchaj poleceń egzaminatora i uzupełnij.', [
    ['Najpierw ___ tekst.', 'przeczytaj'], ['Następnie ___ nagrania.', 'posłuchaj'],
    ['Odpowiedz na wszystkie ___.', 'pytania'], ['Na końcu ___ swoją pracę.', 'sprawdź'],
  ]),
]);
