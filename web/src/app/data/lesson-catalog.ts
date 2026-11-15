type LessonColor = 'coral' | 'blue' | 'lime' | 'violet' | 'yellow';

export interface LessonSummary {
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  color: LessonColor;
  activityCount: number;
}

export const LESSON_CATALOG: LessonSummary[] = [
  { id: 1, title: 'Pierwszy dzień w szkole', subtitle: 'Poznajemy się i zaczynamy rozmawiać', topic: 'Powitania · imiona · pierwsze pytania', color: 'coral', activityCount: 12 },
  { id: 2, title: 'Cześć, skąd jesteś?', subtitle: 'Pytamy o pochodzenie i ćwiczymy czasowniki', topic: 'Kraje · zaimki · czas teraźniejszy', color: 'blue', activityCount: 7 },
  { id: 3, title: 'Mami, kto to jest?', subtitle: 'Opisujemy osoby, rzeczy i kolory', topic: 'Rodzaj gramatyczny · przymiotniki · kolory', color: 'lime', activityCount: 6 },
  { id: 4, title: 'Jaki jesteś?', subtitle: 'Mówimy o językach, nauce i cechach', topic: 'Języki · czasowniki · przymiotniki', color: 'violet', activityCount: 5 },
  { id: 5, title: 'Jesteś instruktorem tanga?', subtitle: 'Opowiadamy o sobie, pracy i zainteresowaniach', topic: 'Liczebniki · zawody · przypadki', color: 'yellow', activityCount: 7 },
  { id: 6, title: 'Co robisz? Nudzę się!', subtitle: 'Mówimy o tym, co robimy w wolnym czasie', topic: 'Czasowniki · hobby · sport', color: 'coral', activityCount: 7 },
  { id: 7, title: 'Małe zakupy', subtitle: 'Kupujemy, pytamy o cenę i liczymy', topic: 'Zakupy · ceny · liczby', color: 'blue', activityCount: 10 },
  { id: 8, title: 'Mami, jesteś głodna?', subtitle: 'Jemy, pijemy i nakrywamy do stołu', topic: 'Jedzenie · napoje · naczynia', color: 'lime', activityCount: 10 },
  { id: 9, title: 'Lubisz marchewkę?', subtitle: 'Owoce, warzywa i zakupy', topic: 'Owoce i warzywa · zakupy · liczba mnoga', color: 'violet', activityCount: 9 },
  { id: 10, title: 'Uwielbiam polskie jedzenie!', subtitle: 'W restauracji i w kawiarni', topic: 'Menu · zamawianie · lubię i nie lubię', color: 'yellow', activityCount: 7 },
  { id: 11, title: 'Rodzina', subtitle: 'Krewni, stan cywilny i jak często coś robimy', topic: 'Rodzina · czyj? · przysłówki częstotliwości', color: 'coral', activityCount: 8 },
  { id: 12, title: 'Co robisz w poniedziałek o ósmej?', subtitle: 'Plany, godziny i codzienny rozkład dnia', topic: 'Zaproszenia · godziny · dzień Pawła', color: 'blue', activityCount: 9 },
  { id: 13, title: 'Gdzie byłaś, Mami? Byłam w kinie', subtitle: 'Czas przeszły · wspomnienia · wyjazd do Zakopanego', topic: 'Czas przeszły · podróże · jedzenie i czas wolny', color: 'violet', activityCount: 13 },
  { id: 14, title: 'Z przewodnikiem po Krakowie', subtitle: 'Transport · zwiedzanie · pytanie o drogę', topic: 'Chodzić i jeździć · Kraków · kierunki i zaimki', color: 'coral', activityCount: 11 },
  { id: 15, title: 'Karton czy pudełko?', subtitle: 'Opakowania, zakupy, poczta i zaimki', topic: 'Opakowania · zakupy · poczta · zaimki osobowe', color: 'yellow', activityCount: 11 },
  { id: 16, title: 'Co ma być, to będzie', subtitle: 'Pogoda, pory roku i czas przyszły', topic: 'Pogoda · przysłówki · miesiące · czas przyszły', color: 'blue', activityCount: 14 },
  { id: 17, title: 'Plotki, plotki. Kto z kim i o czym?', subtitle: 'Opinie, zaimki i rozmowy o innych', topic: 'Opinie · zaimki · przyimki · prezenty', color: 'coral', activityCount: 12 },
  { id: 18, title: 'Pokaż mi swoje mieszkanie', subtitle: 'Dom, położenie przedmiotów i przyimki', topic: 'Mieszkanie · miejsca · przyimki o i po', color: 'blue', activityCount: 13 },
  { id: 19, title: 'Wszędzie dobrze, ale w domu najlepiej', subtitle: 'Wynajem mieszkania i opisywanie wnętrz', topic: 'Mieszkanie · wyposażenie · przyimki miejsca', color: 'violet', activityCount: 12 },
  { id: 20, title: 'Podróże kształcą', subtitle: 'Miasta, podróż pociągiem i wakacje', topic: 'Podróże · kolej · kierunki i miejsca', color: 'blue', activityCount: 14 },
  { id: 21, title: 'Wszystkiego najlepszego!', subtitle: 'Daty, ważne wydarzenia i czas przeszły', topic: 'Daty · święta · aspekt czasowników', color: 'yellow', activityCount: 12 },
  { id: 22, title: 'Dokąd pojedziemy na weekend?', subtitle: 'Aspekt czasownika i plany na przyszłość', topic: 'Aspekt · czas przyszły · rozmowy telefoniczne', color: 'coral', activityCount: 15 },
  { id: 23, title: 'Za małe? Za duże? W sam raz!', subtitle: 'Ubrania, rozmiary i stopniowanie przymiotników', topic: 'Ubrania · zakupy · porównywanie', color: 'violet', activityCount: 14 },
  { id: 24, title: 'Jak cię widzą, tak cię piszą', subtitle: 'Włosy, twarz, zdrowie i porównywanie', topic: 'Wygląd · pielęgnacja · stopniowanie', color: 'lime', activityCount: 15 },
  { id: 25, title: 'Ani ręka, ani noga…', subtitle: 'Części ciała, objawy i wizyta u lekarza', topic: 'Zdrowie · lekarz · idiomy', color: 'coral', activityCount: 11 },
  { id: 26, title: 'Same problemy', subtitle: 'Usługi, reklamacje i prośby', topic: 'Usługi · zakupy · tryb przypuszczający', color: 'blue', activityCount: 10 },
  { id: 27, title: 'Przedstawmy się', subtitle: 'Opowiadamy o sobie i poznajemy innych', topic: 'Wygląd · charakter · zainteresowania · narzędnik', color: 'violet', activityCount: 12 },
  { id: 28, title: 'Nie lubię poniedziałku!', subtitle: 'Opowiadamy o wydarzeniach i klęskach żywiołowych', topic: 'Kataklizmy · biografie · dopełniacz', color: 'blue', activityCount: 9 },
  { id: 29, title: 'Teatr żywych fotografii', subtitle: 'Rozmawiamy o kinie, filmach i spektaklach', topic: 'Kino · filmy · przyimki · zdania celowe', color: 'coral', activityCount: 10 },
  { id: 30, title: 'Mianownik liczby mnogiej', subtitle: 'Opowiadamy o historii, zawodach i sporcie', topic: 'Liczba mnoga · narodowości · sport', color: 'lime', activityCount: 12 },
  { id: 31, title: 'Ktoś, kogo lubię', subtitle: 'Opisujemy ludzi i wyrażamy opinię', topic: 'Cechy charakteru · zaimki względne · rodzaj męskoosobowy', color: 'yellow', activityCount: 12 },
  { id: 32, title: 'Edukacja', subtitle: 'Uczymy się, studiujemy i korzystamy z komputera', topic: 'Edukacja · Internet · rzeczowniki odczasownikowe', color: 'blue', activityCount: 9 },
  { id: 33, title: 'Praca i zatrudnienie', subtitle: 'Rozmawiamy o pracy, doświadczeniu i wykształceniu', topic: 'Rozmowa o pracę · CV · obowiązki', color: 'violet', activityCount: 12 },
  { id: 34, title: 'Polskie korzenie', subtitle: 'Rozmawiamy o pochodzeniu, rodzinie i nauce języka', topic: 'Pochodzenie · emigracja · biernik liczby mnogiej', color: 'blue', activityCount: 11 },
  { id: 35, title: 'Nie zapomnij paszportu!', subtitle: 'Przygotowujemy się do wyjazdu i wydajemy polecenia', topic: 'Podróże · tryb rozkazujący · konstrukcje bezosobowe', color: 'yellow', activityCount: 10 },
  { id: 36, title: 'Kocham cię, Polsko!', subtitle: 'Opisujemy dom, położenie i miejsca w Polsce', topic: 'Dom · miejscownik · miejsca i regiony', color: 'coral', activityCount: 10 },
  { id: 37, title: 'Wejść czy wyjść?', subtitle: 'Opowiadamy o drodze, kierunku i powtarzających się czynnościach', topic: 'Czasowniki ruchu · przedrostki · dokonaność i niedokonaność', color: 'violet', activityCount: 15 },
  { id: 38, title: 'Wjazd czy wyjazd?', subtitle: 'Opowiadamy o podróży samochodem i pytamy o drogę', topic: 'Transport · czasowniki ruchu · kierunek', color: 'blue', activityCount: 15 },
  { id: 39, title: 'Komu bije dzwon?', subtitle: 'Mówimy o problemach i o tym, komu pomagamy', topic: 'Trudne sytuacje · celownik · zaimki osobowe', color: 'coral', activityCount: 10 },
  { id: 40, title: 'Zaduszki', subtitle: 'Mówimy o pamięci, cmentarzu i dziełach sztuki', topic: 'Pamięć o zmarłych · kultura · zaimki osobowe i zwrotne', color: 'blue', activityCount: 17 },
  { id: 41, title: 'Wesołych Świąt!', subtitle: 'Opowiadamy o polskich świętach i rodzinnych zwyczajach', topic: 'Święta · zwyczaje · Boże Narodzenie i Wielkanoc', color: 'yellow', activityCount: 11 },
  { id: 42, title: 'Przygody, przeżycia, wspomnienia', subtitle: 'Opowiadamy o przygodach i niespodziewanych wydarzeniach', topic: 'Żeglowanie · góry · czas przeszły', color: 'blue', activityCount: 16 },
  { id: 43, title: 'Trochę historii', subtitle: 'Opowiadamy o stanie wojennym i wydarzeniach z przeszłości', topic: 'Historia Polski · aspekty czasownika · tryb rozkazujący', color: 'coral', activityCount: 11 },
  { id: 44, title: 'Królestwo zwierząt', subtitle: 'Opowiadamy o zwierzętach i ich potrzebach', topic: 'Zwierzęta · odmiana rzeczownika zwierzę · zaimki', color: 'lime', activityCount: 13 },
  { id: 45, title: 'Oszczędzaj!', subtitle: 'Rozmawiamy o ekologii i codziennych nawykach', topic: 'Środowisko · warunek · tryb przypuszczający', color: 'lime', activityCount: 8 },
  { id: 46, title: 'Konsument na rynku', subtitle: 'Porównujemy zakupy i reklamujemy wadliwy produkt', topic: 'Zakupy · rynek · sprzęty domowe · zdania warunkowe', color: 'yellow', activityCount: 15 },
  { id: 47, title: 'Sztuka i piractwo', subtitle: 'Rozmawiamy o prawach autorskich i pobieraniu plików', topic: 'Prawa autorskie · strona bierna · opinie', color: 'violet', activityCount: 7 },
  { id: 48, title: 'Warto zobaczyć', subtitle: 'Opisujemy dzieła sztuki i wyrażamy swoje wrażenia', topic: 'Muzea · wystawy · rzeczowniki na -um', color: 'violet', activityCount: 11 },
  { id: 49, title: 'Czas na egzamin', subtitle: 'Powtarzamy materiał i ćwiczymy zadania egzaminacyjne', topic: 'Egzamin · poprawność · słownictwo i gramatyka', color: 'yellow', activityCount: 10 },
];
