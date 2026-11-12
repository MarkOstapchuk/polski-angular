export type ActivityKind = 'choice' | 'typed' | 'classify';

export interface ActivityItem {
  id: string;
  prompt: string;
  accepted: string[];
  options?: string[];
  hint?: string;
  explanation?: string;
}

export interface Activity {
  id: string;
  sourceExerciseId: string;
  sourceLabel: string;
  kind: ActivityKind;
  title: string;
  instruction: string;
  audioUrl?: string;
  audioLabel?: string;
  items: ActivityItem[];
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  pages: string;
  color: 'coral' | 'blue' | 'lime' | 'violet' | 'yellow';
  activities: Activity[];
}

const choice = (
  id: string,
  prompt: string,
  accepted: string | string[],
  options: string[],
  hint?: string,
): ActivityItem => ({ id, prompt, accepted: Array.isArray(accepted) ? accepted : [accepted], options, hint });

const typed = (
  id: string,
  prompt: string,
  accepted: string | string[],
  hint?: string,
): ActivityItem => ({ id, prompt, accepted: Array.isArray(accepted) ? accepted : [accepted], hint });

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Pierwszy dzień w szkole',
    subtitle: 'Poznajemy się i zaczynamy rozmawiać',
    topic: 'Powitania · imiona · pierwsze pytania',
    pages: 'Ćwiczenia 1–16 · strony 4–6',
    color: 'coral',
    activities: [
      {
        id: 'l01-dialogue-order', sourceExerciseId: 'WB-L01-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
        kind: 'typed', title: 'Ułóż rozmowę z nagrania',
        instruction: 'Posłuchaj dialogu, a następnie zapisz cztery wypowiedzi we właściwej kolejności.',
        audioUrl: '/assets/telegram_audio/01_L01_cwiczenie2.mp3', audioLabel: 'Pierwsze spotkanie — dialog',
        items: [
          typed('q1', 'Wypowiedź 1 · Maria', 'A: Dzień dobry. Jestem Maria Benini.'),
          typed('q2', 'Wypowiedź 2 · Uwe', 'B: Dzień dobry. Nazywam się Uwe Stein.'),
          typed('q3', 'Wypowiedź 3 · Maria', 'A: Bardzo mi miło.'),
          typed('q4', 'Wypowiedź 4 · Uwe', 'B: Mnie również.'),
        ],
      },
      {
        id: 'l01-registration', sourceExerciseId: 'WB-L01-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: 'typed', title: 'Wypełnij formularz ze słuchu',
        instruction: 'Posłuchaj dialogu w sekretariacie i uzupełnij dane oraz zwroty.',
        audioUrl: '/assets/telegram_audio/02_L01_cwiczenie4.mp3', audioLabel: 'Rozmowa w sekretariacie',
        items: [
          typed('q1', 'Imię studenta', 'Thomas'), typed('q2', 'Nazwisko studenta', 'Fischer'),
          typed('q3', 'Narodowość · pełna odpowiedź', 'Jestem Niemcem'),
          typed('q4', 'Adres · ulica i numer', 'ulica Studencka 3'),
          typed('q5', 'Numer telefonu', '607 44 32 89'),
          typed('q6', 'Odpowiedź na „dziękuję”', 'Proszę'),
          typed('q7', 'Przed „widzenia”', 'Do'),
        ],
      },
      {
        id: 'l01-forms',
        sourceExerciseId: 'WB-L01-E05',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 5',
        kind: 'choice',
        title: 'Wybierz właściwą formę',
        instruction: 'Zwróć uwagę, czy zdanie mówi o imieniu, nazwisku czy tożsamości.',
        items: [
          choice('q1', 'Ewa ___ Brown.', 'nazywa się', ['jest', 'ma', 'nazywa się']),
          choice('q2', '___ Joanna.', ['Jestem', 'Nazywam się'], ['Jestem', 'Mam', 'Nazywam się']),
          choice('q3', 'One ___ Grant.', 'nazywają się', ['nazywają się', 'mają', 'są']),
          choice('q4', 'On ___ na imię Piotr.', 'ma', ['ma', 'jest', 'nazywa się']),
          choice('q5', 'Jak pani ___?', 'się nazywa', ['się nazywa', 'ma', 'jest']),
          choice('q6', 'Adam i Anna ___ Kowalscy.', 'nazywają się', ['mają', 'nazywają się', 'jesteście']),
          choice('q7', 'Czy ty ___ Mami?', 'jesteś', ['jesteś', 'masz', 'nazywasz']),
        ],
      },
      {
        id: 'l01-audio-cloze', sourceExerciseId: 'WB-L01-E06', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 6',
        kind: 'typed', title: 'Uzupełnij po wysłuchaniu',
        instruction: 'Odtwórz scenkę i wpisz brakujące słowa.',
        audioUrl: '/assets/telegram_audio/03_L01_cwiczenie6.mp3', audioLabel: 'Wolne miejsce i kichnięcie',
        items: [
          typed('q1', 'Czy to miejsce jest ___?', 'wolne'), typed('q2', 'Tak, ___ wolne.', 'jest'),
          typed('q3', 'Na zdrowie! · brakujące słowo', 'na'), typed('q4', 'Proszę otworzyć ___!', 'okno'),
          typed('q5', '___ zamknąć drzwi!', 'proszę'),
        ],
      },
      {
        id: 'l01-dialogue-cloze', sourceExerciseId: 'WB-L01-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: 'typed', title: 'Zwroty z dialogów',
        instruction: 'Posłuchaj i uzupełnij brakujące czasowniki oraz zwroty.',
        audioUrl: '/assets/telegram_audio/04_L01_cwiczenie9.mp3', audioLabel: 'Dialogi: prośby i wyjaśnienia',
        items: [
          typed('q1', 'Proszę ___ dialog.', 'napisać'), typed('q2', 'Proszę ___ „dziękuję”.', 'przeliterować'),
          typed('q3', 'Proszę ___ tekst.', 'przeczytać'), typed('q4', '___ powtórzyć „dziękuję”?', 'proszę'),
          typed('q5', 'Co to ___ „imię”?', 'znaczy'), typed('q6', 'Jak się ___ po niemiecku „dziękuję”?', 'mówi'),
          typed('q7', 'Proszę ___ „dziesięć”.', 'powtórzyć'), typed('q8', 'Nie ___ .', 'rozumiem'),
          typed('q9', 'Proszę ___ okno.', 'otworzyć'), typed('q10', 'Co ___ znaczy „otworzyć”?', 'to'),
        ],
      },
      {
        id: 'l01-phone-dictation', sourceExerciseId: 'WB-L01-E11', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 11',
        kind: 'typed', title: 'Numery telefonów',
        instruction: 'Posłuchaj i wpisz numer każdej osoby. Możesz oddzielać cyfry spacjami.',
        audioUrl: '/assets/telegram_audio/05_L01_cwiczenie11.mp3', audioLabel: 'Cztery numery telefonów',
        items: [
          typed('q1', 'Joanna', '0607234599'), typed('q2', 'Ewa', '0504987710'),
          typed('q3', 'Janek', '0601381426'), typed('q4', 'Michał', '126363718'),
        ],
      },
      {
        id: 'l01-spelling',
        sourceExerciseId: 'WB-L01-E12',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 12',
        kind: 'typed',
        title: 'Uzupełnij zwroty',
        instruction: 'Uzupełnij brakujące słowo. Zachowaj polskie znaki.',
        items: [
          typed('q1', 'Nie ___ . (I do not understand.)', 'rozumiem'),
          typed('q2', 'Proszę ___ . (to repeat)', 'powtórzyć'),
          typed('q3', 'Proszę ___ . (to spell)', 'przeliterować'),
          typed('q4', 'Nie ___ . (I do not know.)', 'wiem'),
          typed('q5', 'Nie ___ . (I do not remember.)', 'pamiętam'),
          typed('q6', 'Proszę ___ . (to read)', 'przeczytać'),
          typed('q7', 'Co to ___? (What does it mean?)', 'znaczy'),
        ],
      },
      {
        id: 'l01-word-dictation', sourceExerciseId: 'WB-L01-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: 'typed', title: 'Siedem słów z nagrania',
        instruction: 'Posłuchaj lektora i zapisz każde usłyszane słowo.',
        audioUrl: '/assets/telegram_audio/06_L01_cwiczenie14.mp3', audioLabel: 'Dyktando słownictwa',
        items: [
          typed('q1', '1', 'bank'), typed('q2', '2', 'fotograf'), typed('q3', '3', 'plan'),
          typed('q4', '4', 'teatr'), typed('q5', '5', 'interesujący'), typed('q6', '6', 'aktor'),
          typed('q7', '7', 'restauracja'),
        ],
      },
      {
        id: 'l01-listening-pairs',
        sourceExerciseId: 'WB-L01-E15',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 15',
        kind: 'choice',
        title: 'Słuchaj uważnie',
        instruction: 'Odtwórz nagranie, a potem zaznacz usłyszany wyraz w każdej parze.',
        audioUrl: '/assets/telegram_audio/07_L01_cwiczenie15.mp3',
        audioLabel: 'Nagranie do rozróżniania głosek',
        items: [
          choice('q1', '1. szyny / siny', 'szyny', ['szyny', 'siny']),
          choice('q2', '2. cenny / senny', 'cenny', ['cenny', 'senny']),
          choice('q3', '3. syna / cyna', 'cyna', ['syna', 'cyna']),
          choice('q4', '4. szyba / siwa', 'szyba', ['szyba', 'siwa']),
          choice('q5', '5. szklankach / sankach', 'szklankach', ['szklankach', 'sankach']),
          choice('q6', '6. czary / szary', 'szary', ['czary', 'szary']),
          choice('q7', '7. maczek / Maciek', 'maczek', ['maczek', 'Maciek']),
          choice('q8', '8. córka / kurka', 'kurka', ['córka', 'kurka']),
          choice('q9', '9. cała / ciała', 'cała', ['cała', 'ciała']),
          choice('q10', '10. czyta / cytat', 'czyta', ['czyta', 'cytat']),
          choice('q11', '11. czynnik / cynik', 'czynnik', ['czynnik', 'cynik']),
          choice('q12', '12. czarki / ciarki', 'ciarki', ['czarki', 'ciarki']),
          choice('q13', '13. pić / być', 'być', ['pić', 'być']),
          choice('q14', '14. wić / wyć', 'wyć', ['wić', 'wyć']),
          choice('q15', '15. bić / być', 'bić', ['bić', 'być']),
          choice('q16', '16. szelka / żelka', 'żelka', ['szelka', 'żelka']),
        ],
      },
      {
        id: 'l01-cities',
        sourceExerciseId: 'WB-L01-E16',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 16',
        kind: 'typed',
        title: 'Nazwy polskich miast',
        instruction: 'Posłuchaj i wpisz nazwy miast. Liczą się polskie znaki.',
        audioUrl: '/assets/telegram_audio/08_L01_cwiczenie16.mp3',
        audioLabel: 'Dyktando nazw miast',
        items: [
          typed('q1', '1', 'Warszawa'), typed('q2', '2', 'Łódź'),
          typed('q3', '3', 'Gdańsk'), typed('q4', '4', 'Kraków'),
          typed('q5', '5', 'Wrocław'), typed('q6', '6', 'Katowice'),
          typed('q7', '7', 'Opole'), typed('q8', '8', 'Poznań'),
          typed('q9', '9', 'Toruń'), typed('q10', '10', 'Olsztyn'),
          typed('q11', '11', 'Częstochowa'), typed('q12', '12', 'Lublin'),
          typed('q13', '13', 'Kielce'), typed('q14', '14', 'Rzeszów'),
          typed('q15', '15', 'Białystok'), typed('q16', '16', 'Szczecin'),
          typed('q17', '17', 'Bydgoszcz'), typed('q18', '18', 'Gorzów Wielkopolski'),
          typed('q19', '19', 'Zielona Góra'),
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Cześć, skąd jesteś?',
    subtitle: 'Pytamy o pochodzenie i ćwiczymy czasowniki',
    topic: 'Kraje · zaimki · czas teraźniejszy',
    pages: 'Ćwiczenia 1–18 · strony 7–10',
    color: 'blue',
    activities: [
      {
        id: 'l02-dialogue-order', sourceExerciseId: 'WB-L02-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
        kind: 'typed', title: 'Ułóż dialog „Co u ciebie?”',
        instruction: 'Posłuchaj rozmowy i wpisz kolejne wypowiedzi w poprawnej kolejności.',
        audioUrl: '/assets/telegram_audio/09_L02_cwiczenie2.mp3', audioLabel: 'Rozmowa z nauczycielką',
        items: [
          typed('q1', 'Wypowiedź 1 · nauczycielka', 'Nauczycielka: Dzień dobry. Co słychać?'),
          typed('q2', 'Wypowiedź 2 · Angela', 'Angela: Dziękuję, wszystko dobrze.'),
          typed('q3', 'Wypowiedź 3 · nauczycielka', 'Nauczycielka: Mami, a co u ciebie?'),
          typed('q4', 'Wypowiedź 4 · Mami', 'Mami: U ciebie? U ciebie? Co to znaczy u ciebie?'),
          typed('q5', 'Wypowiedź 5 · nauczycielka', 'Nauczycielka: Co u ciebie to znaczy co słychać u ciebie? Czy wszystko dobrze?'),
          typed('q6', 'Wypowiedź 6 · Mami', 'Mami: Teraz rozumiem. Tak, wszystko dobrze.'),
        ],
      },
      {
        id: 'l02-formal-dialogue', sourceExerciseId: 'WB-L02-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: 'typed', title: 'Oficjalny dialog',
        instruction: 'Uzupełnij rozmowę po odsłuchaniu. W jednym miejscu klucz podaje wariant niezgodny z formą grzecznościową; zaakceptujemy obie wersje.',
        audioUrl: '/assets/telegram_audio/10_L02_cwiczenie4.mp3', audioLabel: 'Pytanie o kraj i miejsce zamieszkania',
        items: [
          typed('q1', 'Mami i Tom, ___ dialog oficjalny.', 'proszę'),
          { ...typed('q2', 'Skąd pan ___?', 'jest'), accepted: ['jest', 'jesteś'], explanation: 'W kluczu zapisano „jesteś”, ale przy grzecznościowym „pan” poprawna forma to „jest”. Akceptujemy obie wersje ze względu na rozbieżność źródła.' },
          typed('q3', 'Ojej, ___. Skąd pan jest?', 'przepraszam'),
          typed('q4', 'Jestem ___ USA.', 'z'), typed('q5', '___ pan mieszka?', 'Gdzie'),
          typed('q6', 'Mieszkam ___ Nowym Jorku.', 'w'),
        ],
      },
      {
        id: 'l02-byc', sourceExerciseId: 'WB-L02-E07', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 7',
        kind: 'typed', title: 'Odmień czasownik „być”',
        instruction: 'Wpisz właściwą formę. Zgoda podmiotu z czasownikiem jest ważna.',
        items: [
          typed('q1', 'Kawa i herbata ___ tutaj.', 'są'), typed('q2', 'Woda ___ tam.', 'jest'),
          typed('q3', 'Gdzie oni ___?', 'są'), typed('q4', 'Czy wy ___ w hotelu?', 'jesteście'),
          typed('q5', '(my) ___ tutaj!', 'jesteśmy'), typed('q6', '(ja) ___ z USA.', 'jestem'),
          typed('q7', 'Czy ty ___ Jonatan?', 'jesteś'), typed('q8', 'Czy pani ___ z Anglii?', 'jest'),
          typed('q9', 'Czy panowie ___ z Niemiec?', 'są'), typed('q10', 'Czy to dziecko ___ tam?', 'jest'),
        ],
      },
      {
        id: 'l02-czytac', sourceExerciseId: 'WB-L02-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: 'typed', title: 'Odmień „czytać” przez osoby',
        instruction: 'Uzupełnij tabelę. Ta sama forma może pasować do kilku rodzajów gramatycznych.',
        items: [
          typed('q1', 'ja ___', 'czytam'), typed('q2', 'ty ___', 'czytasz'),
          typed('q3', 'on ___', 'czyta'), typed('q4', 'ona ___', 'czyta'),
          typed('q5', 'ono ___', 'czyta'), typed('q6', 'my ___', 'czytamy'),
          typed('q7', 'wy ___', 'czytacie'), typed('q8', 'oni ___', 'czytają'),
          typed('q9', 'one ___', 'czytają'),
        ],
      },
      {
        id: 'l02-numbers', sourceExerciseId: 'WB-L02-E13', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 13',
        kind: 'typed', title: 'Dyktando liczebników',
        instruction: 'Odtwórz nagranie i zapisz wszystkie liczebniki słownie.',
        audioUrl: '/assets/telegram_audio/11_L02_cwiczenie13.mp3', audioLabel: 'Dziesięć liczebników',
        items: [
          typed('q1', '1', 'siedem'), typed('q2', '2', 'dwadzieścia'),
          typed('q3', '3', 'dwanaście'), typed('q4', '4', 'osiem'),
          typed('q5', '5', 'dwadzieścia trzy'), typed('q6', '6', 'cztery'),
          typed('q7', '7', 'czternaście'), typed('q8', '8', 'osiemnaście'),
          typed('q9', '9', 'trzy'), typed('q10', '10', 'dwadzieścia dziewięć'),
        ],
      },
      {
        id: 'l02-addresses', sourceExerciseId: 'WB-L02-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: 'typed', title: 'Adresy z nagrania',
        instruction: 'Wpisz numer domu albo brakujące słowo. Zostaw spacje między grupami cyfr.',
        audioUrl: '/assets/telegram_audio/12_L02_cwiczenie14.mp3', audioLabel: 'Nazwy ulic i numery',
        items: [
          typed('q1', 'ul. Szpitalna', '15'), typed('q2', 'ul. Sienna', '17'),
          typed('q3', '___ Główny', 'Dworzec'), typed('q4', 'ul. Cicha', '14'),
          typed('q5', 'ul. Wrzesińska', '9'), typed('q6', 'ul. Duża', '19'),
          typed('q7', 'ul. Mała', '10'), typed('q8', 'ul. Żółkiewskiego', '13'),
          typed('q9', 'ul. Czarnieckiego', '6'),
        ],
      },
      {
        id: 'l02-rating-scale', sourceExerciseId: 'WB-L02-E17', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 17',
        kind: 'typed', title: 'Oceny z dialogu',
        instruction: 'Posłuchaj, jak nauczyciel i studenci oceniają odpowiedzi. Uzupełnij skalę od +++ do --- .',
        audioUrl: '/assets/telegram_audio/13_L02_cwiczenie17.mp3', audioLabel: 'Siedem ocen',
        items: [
          typed('q1', '+++', 'świetnie'), typed('q2', '++', 'bardzo dobrze'),
          typed('q3', '+', 'dobrze'), typed('q4', '0', 'tak sobie'),
          typed('q5', '−', 'źle'), typed('q6', '−−', 'bardzo źle'),
          typed('q7', '−−−', 'fatalnie'),
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Mami, kto to jest?',
    subtitle: 'Opisujemy osoby, rzeczy i kolory',
    topic: 'Rodzaj gramatyczny · przymiotniki · kolory',
    pages: 'Ćwiczenia 1–14 · strony 11–13',
    color: 'lime',
    activities: [
      {
        id: 'l03-dialogue-objects', sourceExerciseId: 'WB-L03-E01', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 1',
        kind: 'typed', title: 'Co to jest? — dialog',
        instruction: 'Odtwórz nagranie i uzupełnij wypowiedzi o przedmiotach.',
        audioUrl: '/assets/telegram_audio/14_L03_cwiczenie1.mp3', audioLabel: 'Rozmowa o przedmiotach',
        items: [
          typed('q1', 'Mami', 'Mami: Co to jest?'), typed('q2', 'Angela', 'Angela: Nie wiem.'),
          typed('q3', 'Javier', 'Javier: Ja wiem, to jest książka.'),
          typed('q4', 'Mami', 'Mami: A co to jest?'),
          typed('q5', 'Javier', 'Javier: To? Nie pamiętam.'),
          typed('q6', 'Angela', 'Angela: Ja pamiętam, to jest kubek.'),
        ],
      },
      {
        id: 'l03-classroom-dialogue', sourceExerciseId: 'WB-L03-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
        kind: 'typed', title: 'Przedmioty w klasie',
        instruction: 'Posłuchaj dialogu. Zapisz brakujące słowa i sprawdź polskie znaki.',
        audioUrl: '/assets/telegram_audio/15_L03_cwiczenie2.mp3', audioLabel: 'Nazwy rzeczy w sali',
        items: [
          typed('q1', 'Nauczycielka: ___ pamiętacie, co to jest?', 'Czy'),
          typed('q2', 'To jest ___ .', 'krzesło'), typed('q3', 'To jest ___ .', 'klucz'),
          typed('q4', 'To jest ___ CD.', 'płyta'),
        ],
      },
      {
        id: 'l03-gender', sourceExerciseId: 'WB-L03-E06', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 6',
        kind: 'classify', title: 'Rodzaj gramatyczny',
        instruction: 'Przyporządkuj rzeczownik do rodzaju: on, ona albo ono.',
        items: [
          { id: 'q1', prompt: 'student', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q2', prompt: 'herbata', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q3', prompt: 'miasto', accepted: ['ono'], options: ['on', 'ona', 'ono'] },
          { id: 'q4', prompt: 'komputer', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q5', prompt: 'studentka', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q6', prompt: 'centrum', accepted: ['ono'], options: ['on', 'ona', 'ono'] },
          { id: 'q7', prompt: 'cukier', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q8', prompt: 'fotografia', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q9', prompt: 'okno', accepted: ['ono'], options: ['on', 'ona', 'ono'] },
          { id: 'q10', prompt: 'nauczycielka', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q11', prompt: 'projekt', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q12', prompt: 'muzyka', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
        ],
      },
      {
        id: 'l03-correction', sourceExerciseId: 'WB-L03-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: 'typed', title: 'Popraw zgodę w zdaniu',
        instruction: 'Przepisz zdanie w poprawnej formie. Zadbaj o końcówkę przymiotnika.',
        items: [
          typed('q1', 'To dziecko jest mały.', 'To dziecko jest małe.'),
          typed('q2', 'Czy ten film jest interesująca?', 'Czy ten film jest interesujący?'),
          typed('q3', 'Ten autobus jest nowe.', 'Ten autobus jest nowy.'),
          typed('q4', 'Ta kawa są dobra.', 'Ta kawa jest dobra.'),
          typed('q5', 'Czy ta kolega jest sympatyczny?', 'Czy ten kolega jest sympatyczny?'),
          typed('q6', 'To centrum jest duży.', 'To centrum jest duże.'),
        ],
      },
      {
        id: 'l03-colors', sourceExerciseId: 'WB-L03-E12', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 12',
        kind: 'typed', title: 'Kolory i końcówki',
        instruction: 'Wpisz kolor zgodny z rodzajem rzeczownika.',
        items: [
          typed('q1', 'Ta tablica jest ___ .', 'czarna'), typed('q2', 'To krzesło jest ___ .', 'zielone'),
          typed('q3', 'Ten kubek jest ___ .', 'pomarańczowy'), typed('q4', 'Ten zeszyt jest ___ .', 'niebieski'),
          typed('q5', 'Ta książka jest ___ .', 'czerwona'), typed('q6', 'Ta komórka jest ___ .', 'szara'),
          typed('q7', 'Ta torba jest ___ .', 'fioletowa'), typed('q8', 'Ten długopis jest ___ .', 'żółty'),
        ],
      },
      {
        id: 'l03-colors-spelling', sourceExerciseId: 'WB-L03-E13', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 13',
        kind: 'typed', title: 'Zapisz kolory poprawnie',
        instruction: 'Odtwórz nagranie i popraw zapis. Polskie znaki są częścią odpowiedzi.',
        audioUrl: '/assets/telegram_audio/16_L03_cwiczenie13.mp3', audioLabel: 'Dyktando nazw kolorów',
        items: [
          typed('q1', 'cerwony', 'czerwony'), typed('q2', 'nebeski', 'niebieski'),
          typed('q3', 'zelony', 'zielony'), typed('q4', 'fioletowi', 'fioletowy'),
          typed('q5', 'carny', 'czarny'), typed('q6', 'brazowy', 'brązowy'),
          typed('q7', 'zolty', 'żółty'), typed('q8', 'rozowy', 'różowy'),
          typed('q9', 'sary', 'szary'), typed('q10', 'bialy', 'biały'),
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Jaki jesteś?',
    subtitle: 'Mówimy o językach, nauce i cechach',
    topic: 'Języki · czasowniki · przymiotniki',
    pages: 'Ćwiczenia 1–15 · strony 14–17',
    color: 'violet',
    activities: [
      {
        id: 'l04-language-forms', sourceExerciseId: 'WB-L04-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: 'choice', title: 'Jakiego języka użyć?',
        instruction: 'Wybierz formę odpowiednią po podanym czasowniku.',
        items: [
          choice('q1', 'Robert zna ___.', 'francuski', ['francuskiego', 'francuski', 'po francusku']),
          choice('q2', 'Andrea świetnie mówi po ___.', 'polsku', ['polski', 'polskie', 'polsku']),
          choice('q3', 'Pedro mówi po ___.', 'hiszpańsku', ['hiszpańsku', 'hiszpański', 'hiszpańskiego']),
          choice('q4', 'Kasia uczy się ___.', 'włoskiego', ['włoskiego', 'włoski', 'włosku']),
          choice('q5', 'Uwe nie mówi po ___.', 'rosyjsku', ['rosyjski', 'rosyjsku', 'rosyjskiego']),
          choice('q6', 'Oni znają bardzo dobrze ___.', 'niemiecki', ['niemiecki', 'niemieckim', 'niemiecku']),
          choice('q7', 'Mami nie mówi ___.', 'po chińsku', ['chiński', 'chińskiego', 'po chińsku']),
        ],
      },
      {
        id: 'l04-verbs', sourceExerciseId: 'WB-L04-E07', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 7',
        kind: 'typed', title: 'Czasowniki w rozmowie',
        instruction: 'Wpisz odmieniony czasownik. Zwróć uwagę na osobę i liczbę.',
        items: [
          typed('q1', '(Ja) ___ się, że ty ___ tutaj. (cieszyć się, być)', 'cieszę się; jesteś'),
          typed('q2', 'Joost świetnie ___ na nartach. (jeździć)', 'jeździ'),
          typed('q3', 'Aneta ___ po niemiecku. (mówić)', 'mówi'),
          typed('q4', 'Oni ___ w kawiarni. (siedzieć)', 'siedzą'),
          typed('q5', 'Dziękuję, ale ja nie ___. (palić)', 'palę'),
          typed('q6', 'Javier ___ tango. (tańczyć)', 'tańczy'),
          typed('q7', 'Czy wy ___ na kurs? (chodzić)', 'chodzicie'),
          typed('q8', 'Julia ___ francuskiego. (uczyć się)', 'uczy się'),
          typed('q9', 'Co ty ___? (robić)', 'robisz'),
          typed('q10', 'Czy oni ___ spaghetti? (lubić)', 'lubią'),
        ],
      },
      {
        id: 'l04-class-dialogue', sourceExerciseId: 'WB-L04-E08', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 8',
        kind: 'typed', title: 'Nauczyciel i student',
        instruction: 'Posłuchaj rozmowy i wpisz brakujące słowa. Zwróć uwagę na parę „uczyć / uczyć się”.',
        audioUrl: '/assets/telegram_audio/17_L04_cwiczenie8.mp3', audioLabel: 'Rozmowa o nauce języków',
        items: [
          typed('q1', '___ ty uczysz się języka angielskiego?', 'Czy'),
          typed('q2', 'Uczysz się ___ angielskiego?', 'języka'),
          typed('q3', 'Jestem ___. (nauczyciel, forma żeńska)', 'nauczycielka'),
          typed('q4', 'To ___, że ty uczysz angielskiego?', 'znaczy'),
          typed('q5', 'Jestem nauczycielem, ___ języka niemieckiego.', 'uczę'),
          typed('q6', 'Chodzę na ___ do Glossy.', 'kurs'),
        ],
      },
      {
        id: 'l04-adjectives', sourceExerciseId: 'WB-L04-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: 'typed', title: 'Dopasuj przymiotnik do osoby',
        instruction: 'Uzupełnij zdanie formą zgodną z osobą lub rzeczownikiem.',
        items: [
          typed('q1', 'Ona ma dużo energii, jest ___.', 'energiczna'),
          typed('q2', 'Ona ma duży talent, jest ___.', 'utalentowana'),
          typed('q3', 'On jest nerwowy i szybko się złości — jest ___.', 'agresywny'),
          typed('q4', 'Ona ma duże ambicje, jest ___.', 'ambitna'),
          typed('q5', 'Ona lubi romantyczne filmy — jest ___.', 'romantyczna'),
          typed('q6', 'To dziecko jest ___, cały czas coś robi.', 'aktywne'),
          typed('q7', 'Ta modelka jest ___.', 'atrakcyjna'),
          typed('q8', 'Ten student jest ___ i szybko się uczy.', 'inteligentny'),
        ],
      },
      {
        id: 'l04-connectors', sourceExerciseId: 'WB-L04-E15', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 15',
        kind: 'typed', title: 'Połącz zdania właściwym spójnikiem',
        instruction: 'Wpisz spójniki w kolejności. Jeśli są dwa, rozdziel je przecinkiem.',
        items: [
          typed('q1', 'Ona nie jest ___ szczupła, ___ wysoka, ___ jest bardzo ładna.', 'ani, ani, ale'),
          typed('q2', 'To dziecko jest utalentowane ___ kreatywne.', 'i'),
          typed('q3', 'Ola nie jest ___ energiczna, ___ wysportowana.', 'ani, ani'),
          typed('q4', 'Ta dziewczyna jest inteligentna ___ utalentowana, ___ leniwa.', 'i, ale'),
          typed('q5', 'To dziecko jest sympatyczne ___ wesołe.', 'i'),
          typed('q6', 'Elena to dobra studentka, ___ jest pracowita ___ inteligentna.', 'bo, i'),
          typed('q7', 'Ten kubek jest ładny, ___ brudny.', 'ale'),
          typed('q8', 'Ten chłopak nie jest ___ utalentowany, ___ pracowity.', 'ani, ani'),
          typed('q9', 'Ten długopis jest zły, ___ jest stary i nie pisze.', 'bo'),
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Jesteś instruktorem tanga?',
    subtitle: 'Opowiadamy o sobie, pracy i zainteresowaniach',
    topic: 'Liczebniki · zawody · przypadki',
    pages: 'Ćwiczenia 1–17 · strony 18–21',
    color: 'yellow',
    activities: [
      {
        id: 'l05-text-order', sourceExerciseId: 'WB-L05-E01', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 1',
        kind: 'typed', title: 'Historia Mami ze słuchu',
        instruction: 'Uporządkuj historię, a potem posłuchaj nagrania. Wpisz cały tekst w poprawnej kolejności.',
        audioUrl: '/assets/telegram_audio/18_L05_cwiczenie1.mp3', audioLabel: 'Mami opowiada o sobie',
        items: [
          typed('q1', 'Cały tekst', 'To jest Mami Takada. Ona jest z Japonii. Mieszka w Tokio, ale teraz jest w Krakowie. Mami uczy się języka polskiego, bo chce studiować w Polsce. Mami jest młoda, szczupła i ładna. Ma 20 lat. Mami bardzo lubi słuchać muzyki.'),
        ],
      },
      {
        id: 'l05-phone-dictation', sourceExerciseId: 'WB-L05-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: 'typed', title: 'Numery telefonów ze słuchu',
        instruction: 'Posłuchaj nagrania i zanotuj numery. Możesz oddzielać cyfry spacjami.',
        audioUrl: '/assets/telegram_audio/19_L05_cwiczenie4.mp3', audioLabel: 'Numery telefonów czterech osób',
        items: [
          typed('q1', 'Joanna', '40 25 36 72'), typed('q2', 'Ewa', '0 50 14 89 66'),
          typed('q3', 'Janek', '72 40 30 96'), typed('q4', 'Michał', '22 12 58 49'),
        ],
      },
      {
        id: 'l05-numbers', sourceExerciseId: 'WB-L05-E05', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 5',
        kind: 'typed', title: 'Liczebniki z nagrania',
        instruction: 'Zapisz liczby słownie. Nie pomyl form na -naście i -dziesiąt.',
        audioUrl: '/assets/telegram_audio/20_L05_cwiczenie5.mp3', audioLabel: 'Dziesięć liczebników',
        items: [
          typed('q1', '1', 'siedemnaście'), typed('q2', '2', 'pięćdziesiąt'),
          typed('q3', '3', 'trzydzieści dwa'), typed('q4', '4', 'czterdzieści osiem'),
          typed('q5', '5', 'dwadzieścia trzy'), typed('q6', '6', 'sześćdziesiąt'),
          typed('q7', '7', 'szesnaście'), typed('q8', '8', 'siedemdziesiąt osiem'),
          typed('q9', '9', 'osiemdziesiąt dziewięć'), typed('q10', '10', 'dziewięćdziesiąt osiem'),
        ],
      },
      {
        id: 'l05-jobs', sourceExerciseId: 'WB-L05-E08', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 8',
        kind: 'typed', title: 'Nazwy zawodów',
        instruction: 'Uzupełnij nazwy zawodów. Wpisuj całe słowo, nie same brakujące litery.',
        audioUrl: '/assets/telegram_audio/21_L05_cwiczenie8.mp3', audioLabel: 'Nazwy zawodów',
        items: [
          typed('q1', '1', 'kelner'), typed('q2', '2', 'nauczyciel'),
          typed('q3', '3', 'fotograf'), typed('q4', '4', 'informatyk'),
          typed('q5', '5', 'rolnik'), typed('q6', '6', 'muzyk'),
          typed('q7', '7', 'inżynier'), typed('q8', '8', 'policjant'),
          typed('q9', '9', 'kucharz'), typed('q10', '10', 'dentysta'),
          typed('q11', '11', 'tancerz'), typed('q12', '12', 'urzędnik'),
          typed('q13', '13', 'lekarz'), typed('q14', '14', 'biznesmen'),
          typed('q15', '15', 'dziennikarz'), typed('q16', '16', 'emeryt'),
          typed('q17', '17', 'aktor'),
        ],
      },
      {
        id: 'l05-inflection', sourceExerciseId: 'WB-L05-E11', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 11',
        kind: 'typed', title: 'Przymiotnik i rzeczownik',
        instruction: 'Uzupełnij pełne wyrażenie w poprawnym przypadku.',
        items: [
          {
            ...typed('q1', 'Julia jest bardzo ___ ___. (dobra córka)', 'dobrą córką'),
            accepted: ['dobrą córką', 'dobra córka'],
            explanation: 'W wydrukowanym kluczu widnieje „dobra córka”; standardowa forma po „jest” to „dobrą córką”. Akceptujemy obie wersje ze względu na rozbieżność ze źródłem.',
          },
          typed('q2', 'Angela jest ___ ___. (wysoka kobieta)', 'wysoką kobietą'),
          typed('q3', 'Uwe jest ___ ___. (przystojny mężczyzna)', 'przystojnym mężczyzną'),
          typed('q4', 'Michał jest ___ ___. (małe dziecko)', 'małym dzieckiem'),
          typed('q5', 'Tomek jest ___ ___. (dobry tata)', 'dobrym tatą'),
          typed('q6', 'Aneta jest ___ ___. (kreatywna nauczycielka)', 'kreatywną nauczycielką'),
          typed('q7', 'Jonatan jest ___ ___. (inteligentny student)', 'inteligentnym studentem'),
          typed('q8', 'Toyota Prius jest ___ ___. (drogie auto)', 'drogim autem'),
          typed('q9', 'Tom jest ___ ___. (wysoki chłopak)', 'wysokim chłopakiem'),
          typed('q10', 'Mami jest ___ ___. (szczupła dziewczyna)', 'szczupłą dziewczyną'),
        ],
      },
      {
        id: 'l05-dialogue-cloze', sourceExerciseId: 'WB-L05-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: 'typed', title: 'Dialog Paoli i Michaela',
        instruction: 'Posłuchaj i uzupełnij dialog właściwymi słowami.',
        audioUrl: '/assets/telegram_audio/22_L05_cwiczenie14.mp3', audioLabel: 'Rozmowa o zawodzie i zainteresowaniach',
        items: [
          typed('q1', 'Kim jesteś z ___?', 'zawodu'), typed('q2', 'Nie ___? Co to znaczy?', 'rozumiem'),
          typed('q3', 'Co to ___?', 'znaczy'), typed('q4', 'Chcę ___ lekarzem.', 'być'),
          typed('q5', '___ się interesujesz?', 'czym'), typed('q6', 'Interesuję się ___ naturalną.', 'medycyną'),
          typed('q7', 'Co lubisz ___ w weekendy?', 'robić'), typed('q8', 'Lubię ___ .', 'spacerować'),
          typed('q9', 'Lubię ___ muzyki.', 'słuchać'), typed('q10', 'Lubię ___ w tenisa.', 'grać'),
        ],
      },
      {
        id: 'l05-questions', sourceExerciseId: 'WB-L05-E15', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 15',
        kind: 'typed', title: 'Zbuduj pytanie do odpowiedzi',
        instruction: 'Dobierz zaimek pytający i zachowaj poprawny szyk zdania.',
        items: [
          typed('q1', '___ to jest? Peter.', 'Kto'), typed('q2', '___ on jest? Z Anglii.', 'Skąd'),
          typed('q3', '___ ma lat? 20.', 'Ile'), typed('q4', '___ się nazywa? Smith.', 'Jak'),
          typed('q5', '___ mieszka? W Londynie.', 'Gdzie'), typed('q6', '___ jest studentem? Zdolnym i inteligentnym.', 'Jakim'),
          typed('q7', '___ on jest? Wysoki.', 'Jaki'), typed('q8', '___ on jest? Architektem.', 'Kim'),
          typed('q9', '___ w Krakowie? Uczy się polskiego.', 'Co robi'), typed('q10', '___? Bardzo lubi słuchać muzyki.', 'Co lubi robić'),
          typed('q11', '___ się interesuje? Architekturą.', 'Czym'), typed('q12', '___ uczy się polskiego? Bo chce pracować w Warszawie.', 'Dlaczego'),
        ],
      },
    ],
  },
];

export function getLesson(id: number): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
