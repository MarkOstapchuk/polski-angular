import { Activity, ActivityItem, ActivityKind, choice, Lesson, typed } from '../lesson-types';

type Pair = [string, string];

const lesson = (
  id: number,
  title: string,
  subtitle: string,
  topic: string,
  pages: string,
  color: Lesson['color'],
  activities: Activity[],
): Lesson => ({
  id,
  title,
  subtitle,
  topic,
  pages,
  color,
  activities,
});

const matchActivity = (
  id: string,
  sourceExerciseId: string,
  sourceLabel: string,
  title: string,
  instruction: string,
  pairs: Pair[],
): Activity => {
  const options = pairs.map(([, answer]) => answer);
  return {
    id,
    sourceExerciseId,
    sourceLabel,
    kind: ActivityKind.Match,
    title,
    instruction,
    items: pairs.map(([prompt, answer], i) => choice(`q${i + 1}`, prompt, answer, options)),
  };
};

const classifyActivity = (
  id: string,
  sourceExerciseId: string,
  sourceLabel: string,
  title: string,
  instruction: string,
  categories: string[],
  entries: Pair[],
  extra?: Pick<Activity, 'audioUrl' | 'audioLabel' | 'readingText'>,
): Activity => ({
  id,
  sourceExerciseId,
  sourceLabel,
  kind: ActivityKind.Classify,
  title,
  instruction,
  ...extra,
  items: entries.map(([prompt, answer], i) => choice(`q${i + 1}`, prompt, answer, categories)),
});

const typedActivity = (
  id: string,
  sourceExerciseId: string,
  sourceLabel: string,
  title: string,
  instruction: string,
  entries: Array<[string, string | string[], string?]>,
  extra?: Pick<Activity, 'audioUrl' | 'audioLabel' | 'readingText'>,
): Activity => ({
  id,
  sourceExerciseId,
  sourceLabel,
  kind: ActivityKind.Typed,
  title,
  instruction,
  ...extra,
  items: entries.map(([prompt, answer, hint], i) => typed(`q${i + 1}`, prompt, answer, hint)),
});

const choiceActivity = (
  id: string,
  sourceExerciseId: string,
  sourceLabel: string,
  title: string,
  instruction: string,
  items: ActivityItem[],
  extra?: Pick<Activity, 'audioUrl' | 'audioLabel' | 'readingText'>,
): Activity => ({
  id,
  sourceExerciseId,
  sourceLabel,
  kind: ActivityKind.Choice,
  title,
  instruction,
  ...extra,
  items,
});

// ============================================================================
// LEKCJA 14 — W zgodzie z naturą (App Lesson ID 64)
// ============================================================================

const L14_READING_NATURE = `Polska leży w geograficznym środku Europy, ma zróżnicowane środowisko przyrodnicze i żadna bariera nie dzieli jej od reszty kontynentu. Przyroda naszego kraju łączy w sobie cechy przyrody całej Europy.

Występują tu przede wszystkim gatunki roślin i zwierząt typowe dla Europy Środkowej, ale są także niektóre gatunki charakterystyczne dla krain północnych. Na południu Polski, zwłaszcza na Lubelszczyźnie, spotyka się przedstawicieli przyrody Europy Południowo-Wschodniej. Są też gatunki typowe dla wybrzeży Atlantyku (nad Bałtykiem) oraz dla Alp (w Tatrach). Stosunkowo najmniej jest u nas gatunków reprezentujących przyrodę śródziemnomorską.

Nad Polską krzyżują się szlaki corocznych ptasich przelotów, więc regularnie pojawiają się u nas ptaki z północnych krajów naszego kontynentu, a także kilka gatunków z Syberii, rzadziej przylatują wędrowne ptaki z dalekiego wschodu Azji, a zupełnie wyjątkowo zabłąkani wędrowcy z Ameryki Północnej.

Zatem polska przyroda ma szczególną wartość na tle przyrody Europy, dlatego że tak wszechstronnie reprezentuje świat istot żywych całego kontynentu. Poznając polską przyrodę, można stać się znawcą przyrody bez mała całej Europy.`;

export const LESSON_64 = lesson(
  64,
  'W zgodzie z naturą',
  'Przyroda, ekologia, wyrażanie aprobaty i protestu',
  'Ekologia · celownik · aspekt czasownika',
  'Lekcja 14 · podręcznik i zeszyt ćwiczeń',
  'lime',
  [
    matchActivity(
      'p3-l14-e01-match',
      'H3-L14-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · podręcznik ćw. 1a',
      'Ekologia — słowo i definicja',
      'Połącz pojęcia związane z przyrodą i ekologią z ich definicjami.',
      [
        ['Ocieplenie klimatu', 'Obserwowany od połowy XX wieku wzrost temperatury na całym globie.'],
        ['Zanieczyszczenie środowiska', 'Stan środowiska, w którym jest za dużo substancji szkodliwych dla zdrowia człowieka, przyrody, klimatu, gleby i wody.'],
        ['Tlen', 'Najbardziej rozpowszechniony pierwiastek na Ziemi; organizmy żywe potrzebują go do życia.'],
        ['Dwutlenek węgla', 'Związek chemiczny, niepalny i bezwonny; ma bardzo dużą rolę w globalnym ociepleniu.'],
        ['Węgiel', 'Pierwiastek chemiczny o symbolu C, a także paliwo kopalne używane do ogrzewania budynków.'],
        ['Smog', 'Połączenie dymu, mgły i spalin — zjawisko bardzo szkodliwe dla zdrowia.'],
        ['Ubój zwierząt', 'Zabijanie zwierząt, które jest uregulowane prawnie.'],
      ],
    ),
    typedActivity(
      'p3-l14-e02-typed',
      'H3-L14-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · ćw. 2',
      'Celownik: protestuję przeciw / niebezpieczeństwo grozi',
      'Wstaw właściwą formę wyrażeń podanych w nawiasach w celowniku.',
      [
        ['Protestuję przeciw ___. (budowa nowej fabryki)', 'budowie nowej fabryki'],
        ['Protestuję przeciw ___. (zanieczyszczanie środowiska)', 'zanieczyszczaniu środowiska'],
        ['Protestuję przeciw ___. (cenzura)', 'cenzurze'],
        ['Protestuję przeciw ___. (brak edukacji ekologicznej)', 'brakowi edukacji ekologicznej'],
        ['Protestuję przeciw ___. (transport koni do krajów Europy Zachodniej)', 'transportowi koni do krajów Europy Zachodniej'],
        ['Protestuję przeciw ___. (konsumpcyjna postawa życiowa)', 'konsumpcyjnej postawie życiowej'],
        ['Protestuję przeciw ___. (polityka wielkich koncernów)', 'polityce wielkich koncernów'],
        ['Niebezpieczeństwo grozi ___. (te gatunki roślin)', 'tym gatunkom roślin'],
        ['Niebezpieczeństwo grozi ___. (zwierzęta w tym regionie)', 'zwierzętom w tym regionie'],
        ['Niebezpieczeństwo grozi ___. (ludzie mieszkający w tej okolicy)', 'ludziom mieszkającym w tej okolicy'],
        ['Niebezpieczeństwo grozi ___. (ptaki tropikalne)', 'ptakom tropikalnym'],
        ['Niebezpieczeństwo grozi ___. (rzadkie owady)', 'rzadkim owadom'],
        ['Niebezpieczeństwo grozi ___. (fauna i flora)', 'faunie i florze'],
      ],
    ),
    choiceActivity(
      'p3-l14-e03-choice',
      'H3-L14-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · ćw. 3',
      'Które słowo nie pasuje?',
      'Wybierz słowo, które nie pasuje do pozostałych.',
      [
        choice('q1', 'ryba – fabryka – ptak', 'fabryka', ['ryba', 'fabryka', 'ptak']),
        choice('q2', 'wróbel – tuńczyk – łosoś', 'wróbel', ['wróbel', 'tuńczyk', 'łosoś']),
        choice('q3', 'zwierzę – owad – zanieczyszczenie', 'zanieczyszczenie', ['zwierzę', 'owad', 'zanieczyszczenie']),
        choice('q4', 'niebezpieczny – groźny – gatunek', 'gatunek', ['niebezpieczny', 'groźny', 'gatunek']),
        choice('q5', 'grozić – akceptować – aprobować', 'grozić', ['grozić', 'akceptować', 'aprobować']),
        choice('q6', 'przyroda – śmieci – natura', 'śmieci', ['przyroda', 'śmieci', 'natura']),
        choice('q7', 'żyrafa – koń – pszczoła', 'pszczoła', ['żyrafa', 'koń', 'pszczoła']),
        choice('q8', 'zwiększenie – problem – zmniejszenie', 'problem', ['zwiększenie', 'problem', 'zmniejszenie']),
      ],
    ),
    classifyActivity(
      'p3-l14-e04-classify',
      'H3-L14-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · ćw. 6',
      'Aprobata czy protest?',
      'Wysłuchaj nagrania i określ, czy druga osoba w każdym minidialogu wyraża aprobatę, czy protest.',
      ['aprobata', 'protest'],
      [
        ['Dialog 1 (nagranie 31): Budowa fabryki kabli obok lasu — „Ależ to skandal! A co się stanie z lasem?”', 'protest'],
        ['Dialog 2 (nagranie 32): Szkolna zbiórka makulatury — „Bardzo dobrze, nie powinieneś wyrzucać papieru do kosza.”', 'aprobata'],
        ['Dialog 3 (nagranie 33): Kupowanie foie gras we Francji — „Jak możesz to jeść! Czy wiesz, jak fatalnie traktowane są gęsi?”', 'protest'],
      ],
      {
        audioUrl: '/assets/hurra_3_audio/wb-031.mp3',
        audioLabel: 'Nagranie 31 (Dialog 1 · ćw. 6)',
      },
    ),
    choiceActivity(
      'p3-l14-e05-choice',
      'H3-L14-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · ćw. 7a–7b',
      'Polska przyroda — rozumienie tekstu',
      'Przeczytaj tekst, wybierz właściwy tytuł, a następnie określ, czy zdania są prawdziwe (P), czy nieprawdziwe (N).',
      [
        choice(
          'q1',
          'Który tytuł najlepiej pasuje do tekstu?',
          'Polska – wielki ogród zoologiczny',
          [
            'Polska – wielki ogród zoologiczny',
            'Polska jest pośrodku',
            'Zwierzęta i rośliny w polskich lasach – czy grozi im śmierć?',
          ],
        ),
        choice('q2', 'Przyroda naszego kraju łączy w sobie cechy przyrody Europy Północnej i Środkowej.', 'N', ['P', 'N']),
        choice('q3', 'Występują tu gatunki fauny i flory typowe dla Europy Środkowej i Północnej.', 'P', ['P', 'N']),
        choice('q4', 'Nad Bałtykiem można spotkać przedstawicieli przyrody atlantyckiej.', 'P', ['P', 'N']),
        choice('q5', 'Ptaki syberyjskie występują na południu Polski.', 'N', ['P', 'N']),
      ],
      { readingText: L14_READING_NATURE },
    ),
    typedActivity(
      'p3-l14-e06-typed',
      'H3-L14-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · ćw. 7d',
      'Rzeczownik i przymiotnik',
      'Uzupełnij brakujący przymiotnik lub rzeczownik zgodnie ze wzorem (np. przyroda → przyrodniczy).',
      [
        ['północ → (przymiotnik)', 'północny'],
        ['południe → (przymiotnik)', 'południowy'],
        ['wschodni → (rzeczownik)', 'wschód'],
        ['zachodni → (rzeczownik)', 'zachód'],
        ['Europa → (przymiotnik)', 'europejski'],
        ['charakterystyka → (przymiotnik)', 'charakterystyczny'],
        ['wyjątek → (przymiotnik)', 'wyjątkowy'],
        ['wartościowy → (rzeczownik)', 'wartość'],
        ['żywy → (rzeczownik)', 'życie'],
      ],
    ),
    choiceActivity(
      'p3-l14-e07-choice',
      'H3-L14-E07',
      'Hurra!!! Po Polsku 3 · Lekcja 14 · przygotowanie do egzaminu II',
      'Aspekt czasownika: wyjazd w góry',
      'Wybierz odpowiedni aspekt czasownika w tekście o wyjeździe Anny do Zakopanego.',
      [
        choice('q1', '(Zabierała / Zabrała) ze sobą niewielki plecak i kilka książek.', 'Zabrała', ['Zabierała', 'Zabrała']),
        choice('q2', '(Jechała / Pojechała) na dworzec zaraz po pracy.', 'Pojechała', ['Jechała', 'Pojechała']),
        choice('q3', 'Do Zakopanego (przyjeżdżała / przyjechała) w południe.', 'przyjechała', ['przyjeżdżała', 'przyjechała']),
        choice('q4', 'Pogoda była piękna, słońce (świeciło / zaświeciło), niebo było bezchmurne.', 'świeciło', ['świeciło', 'zaświeciło']),
        choice('q5', 'Anna (wchodziła / weszła) do pensjonatu „Aura”…', 'weszła', ['wchodziła', 'weszła']),
        choice('q6', '…i (brała / wzięła) klucze od pokoju.', 'wzięła', ['brała', 'wzięła']),
        choice('q7', 'W tym czasie mąż Anny, Marek (wracał / wrócił) z biura.', 'wrócił', ['wracał', 'wrócił']),
        choice('q8', '(Szedł / Poszedł) ulicą Piotrkowską i myślał o swoim nowym projekcie.', 'Szedł', ['Szedł', 'Poszedł']),
        choice('q9', '(Wchodził / Wszedł) do mieszkania…', 'Wszedł', ['Wchodził', 'Wszedł']),
        choice('q10', '…i (włączał / włączył) telewizor.', 'włączył', ['włączał', 'włączył']),
      ],
    ),
  ],
);

// ============================================================================
// LEKCJA 15 — Powtórzenie (App Lesson ID 65)
// ============================================================================

export const LESSON_65 = lesson(
  65,
  'Powtórzenie (lekcje 11–14)',
  'Powtórzenie materiału i trening egzaminacyjny',
  'Aspekt · czasowniki modalne · przyimki · zaimki',
  'Lekcja 15 · podręcznik i zeszyt ćwiczeń',
  'yellow',
  [
    classifyActivity(
      'p3-l15-e01-classify',
      'H3-L15-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 15 · ćw. 1',
      'Mapy umysłu — słownictwo z lekcji 11–14',
      'Przyporządkuj każde pojęcie do odpowiedniej kategorii tematycznej.',
      ['Polityka', 'Prawo i równouprawnienie', 'Wypadki i zdarzenia losowe', 'Ochrona środowiska'],
      [
        ['wybory parlamentarne', 'Polityka'],
        ['koalicja rządząca', 'Polityka'],
        ['próg wyborczy', 'Polityka'],
        ['dyskryminacja w pracy', 'Prawo i równouprawnienie'],
        ['prawa człowieka', 'Prawo i równouprawnienie'],
        ['równość wobec prawa', 'Prawo i równouprawnienie'],
        ['pogotowie ratunkowe', 'Wypadki i zdarzenia losowe'],
        ['złamana ręka', 'Wypadki i zdarzenia losowe'],
        ['wypadek drogowy', 'Wypadki i zdarzenia losowe'],
        ['segregowanie śmieci', 'Ochrona środowiska'],
        ['uchwała antysmogowa', 'Ochrona środowiska'],
        ['efekt cieplarniany', 'Ochrona środowiska'],
      ],
    ),
    choiceActivity(
      'p3-l15-e02-choice',
      'H3-L15-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 15 · trening gramatyczny I',
      'Aspekt czasownika w czasie przyszłym',
      'Wybierz właściwy aspekt czasownika w obietnicach przedwyborczych.',
      [
        choice('q1', 'Sytuacja na rynku pracy będzie lepsza, bo (będziemy obniżać / obniżymy) podatki.', 'obniżymy', ['będziemy obniżać', 'obniżymy']),
        choice('q2', 'Przedsiębiorcy będą mogli się rozwijać, coraz częściej (będą zatrudniać / zatrudnią) nowych pracowników.', 'będą zatrudniać', ['będą zatrudniać', 'zatrudnią']),
        choice('q3', 'W ciągu kilku najbliższych miesięcy (będziemy otwierać / otworzymy) 16 biur informacyjnych.', 'otworzymy', ['będziemy otwierać', 'otworzymy']),
        choice('q4', '…gdzie będzie się (przychodzić / przyjść) z każdym pytaniem dotyczącym nierównego traktowania.', 'przychodzić', ['przychodzić', 'przyjść']),
        choice('q5', 'Nasi specjaliści (będą udzielać / udzielą) porad przez pięć dni w tygodniu.', 'będą udzielać', ['będą udzielać', 'udzielą']),
        choice('q6', 'I wreszcie każdy, kto (będzie dzwonić / zadzwoni)…', 'zadzwoni', ['będzie dzwonić', 'zadzwoni']),
        choice('q7', '…na pewno (będzie otrzymywać / otrzyma) poradę, której potrzebuje.', 'otrzyma', ['będzie otrzymywać', 'otrzyma']),
        choice('q8', 'Każdy uniwersytet (będzie dostawać / dostanie) raz w roku specjalne fundusze na badania.', 'dostanie', ['będzie dostawać', 'dostanie']),
        choice('q9', 'Każdej szkole w Polsce (będziemy kupować / kupimy) w końcu nowe komputery…', 'kupimy', ['będziemy kupować', 'kupimy']),
        choice('q10', '…które w razie potrzeby systematycznie (będziemy wymieniać / wymienimy).', 'będziemy wymieniać', ['będziemy wymieniać', 'wymienimy']),
      ],
    ),
    typedActivity(
      'p3-l15-e03-typed',
      'H3-L15-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 15 · trening gramatyczny II',
      'Czasowniki modalne — przekształcanie zdań',
      'Przekształć zdania, wykorzystując podane w nawiasie słowo (można, trzeba, warto, wolno, powinieneś).',
      [
        ['Szkoda czasu na czytanie tego artykułu. (warto)', 'Nie warto czytać tego artykułu.'],
        ['Czy mogę zaprenumerować to pismo? (można)', 'Czy można zaprenumerować to pismo?'],
        [
          'Idź już spać, jutro wcześnie wstajemy! (powinieneś)',
          ['Powinieneś iść spać, jutro wcześnie wstajemy!', 'Powinieneś iść spać, jutro trzeba wcześnie wstać!', 'Powinieneś już iść spać, jutro wcześnie wstajemy!'],
        ],
        [
          'Tutaj obowiązuje zakaz palenia! (wolno / można)',
          ['Tu nie wolno palić!', 'Tutaj nie wolno palić!', 'Tu nie można palić!', 'Tutaj nie można palić!'],
        ],
        ['Musieliśmy zaakceptować warunki wydawnictwa. (trzeba)', 'Trzeba było zaakceptować warunki wydawnictwa.'],
      ],
    ),
    choiceActivity(
      'p3-l15-e04-choice',
      'H3-L15-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 15 · trening gramatyczny III',
      'Przyimki w tekście',
      'Wybierz właściwy przyimek (w, dla, na, do, z, o).',
      [
        choice('q1', 'Praca czy rodzina, a może sytuacja ___ Twoim kraju?', 'w', ['w', 'na', 'do', 'o']),
        choice('q2', 'Czy chodzisz na przykład ___ szkoły Twojej córki…', 'do', ['do', 'na', 'w', 'z']),
        choice('q3', '…czy chodzisz ___ nią…', 'z', ['z', 'dla', 'o', 'w']),
        choice('q4', '…___ spacery…', 'na', ['na', 'do', 'w', 'o']),
        choice('q5', '…i ___ kina?', 'do', ['do', 'na', 'w', 'z']),
        choice('q6', 'Czy spotykasz się ___ przyjaciółmi?', 'z', ['z', 'do', 'o', 'dla']),
        choice('q7', 'Ile czasu spędzasz ___ pracy?', 'w', ['w', 'na', 'do', 'o']),
        choice('q8', 'Czy bierzesz udział ___ wyborach parlamentarnych i prezydenckich?', 'w', ['w', 'na', 'o', 'do']),
        choice('q9', 'Czy byłeś kiedyś ___ spotkaniu przedwyborczym?', 'na', ['na', 'w', 'do', 'z']),
        choice('q10', 'Czy rozmawiasz ___ polityce?', 'o', ['o', 'w', 'na', 'z']),
      ],
    ),
    choiceActivity(
      'p3-l15-e05-choice',
      'H3-L15-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 15 · trening gramatyczny IV',
      'Poprawna forma zaimka',
      'Zaznacz poprawną formę zaimka w tekście o relacjach z rodzicami i sąsiadami.',
      [
        choice('q1', 'Oczywiście, cały czas jestem z (nich, nią, nimi) w kontakcie…', 'nimi', ['nich', 'nią', 'nimi']),
        choice('q2', '…pomagam (ich, im, nim) w domu i w ogrodzie.', 'im', ['ich', 'im', 'nim']),
        choice('q3', 'Ojciec często jeździ na giełdę kwiatów i lubi, kiedy jadę tam z (im, nim, niego).', 'nim', ['im', 'nim', 'niego']),
        choice('q4', 'Moi rodzice są bardzo dobrzy, sąsiedzi mówią o (ich, im, nich)…', 'nich', ['ich', 'im', 'nich']),
        choice('q5', '…że zawsze można na (ich, nich, jego) liczyć.', 'nich', ['ich', 'nich', 'jego']),
        choice('q6', 'Kiedy jeden z sąsiadów stracił pracę, moi rodzice pożyczyli (jemu, mu, im) pieniądze…', 'mu', ['jemu', 'mu', 'im']),
        choice('q7', '…a kiedy sąsiadka zachorowała na serce, przychodzili do (niej, jej, nią) codziennie do szpitala.', 'niej', ['niej', 'jej', 'nią']),
        choice('q8', 'Robili (niej, jej, jemu) zakupy i wyprowadzali psa na spacer.', 'jej', ['niej', 'jej', 'jemu']),
        choice('q9', 'Pojechali nawet po (ja, nią, im) do szpitala…', 'nią', ['ja', 'nią', 'im']),
        choice('q10', '…kiedy lekarz zdecydował, że można (nią, jej, ją) zabrać do domu.', 'ją', ['nią', 'jej', 'ją']),
      ],
    ),
    typedActivity(
      'p3-l15-e06-typed',
      'H3-L15-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 15 · trening gramatyczny V',
      'Określenia ilości (część, wielu, niewiele, sporo, dużo)',
      'Przekształć zdania, używając podanego określenia ilości (zwróć uwagę na dopełniacz i formę czasownika).',
      [
        [
          'Niektórzy mieszkańcy dużych miast robią zakupy w supermarkecie 2–3 razy w tygodniu. (część)',
          'Część mieszkańców dużych miast robi zakupy w supermarkecie 2–3 razy w tygodniu.',
        ],
        [
          'Lekarze prowadzą prywatną praktykę. (wielu)',
          'Wielu lekarzy prowadzi prywatną praktykę.',
        ],
        [
          'W miastach żyją dzikie zwierzęta. (niewiele)',
          ['W miastach żyje niewiele dzikich zwierząt.', 'Niewiele dzikich zwierząt żyje w miastach.'],
        ],
        [
          'Na spotkanie przyszły inteligentne osoby. (sporo)',
          ['Na spotkanie przyszło sporo inteligentnych osób.', 'Sporo inteligentnych osób przyszło na spotkanie.'],
        ],
        [
          'Kobiety protestowały przed ratuszem. (dużo)',
          'Dużo kobiet protestowało przed ratuszem.',
        ],
      ],
    ),
  ],
);

// ============================================================================
// LEKCJA 16 — Czwarta władza (App Lesson ID 66)
// ============================================================================

const L16_READING_EWART = `Ewa Ewart jest dziennikarką (0) i wielokrotnie nagradzaną reżyserką filmów ___ (1). Urodziła się i wychowała w Polsce, ale ___ (2) swojego życia zawodowego spędziła w Wielkiej Brytanii, pracując dla telewizji BBC. Podróżowała i pracowała w wielu krajach na świecie, gdzie zrealizowała ___ (3) śledcze, polityczne i programy poruszające kwestie ___ (4). Jej filmy ujawniły nowe informacje o ___ (5) takich jak korupcja w Rosji Borysa Jelcyna, tajne więzienia w Korei Północnej, wojna domowa w Kolumbii czy tajny i nielegalny program CIA ekstradycji w trybie nadzwyczajnym osób podejrzanych o terroryzm. Dokumenty Ewy Ewart ___ (6) o najbardziej pamiętnych wydarzeniach, jak tragedia w Biesłanie – film zrealizowany na pierwszą rocznicę ataku terrorystycznego, w wyniku którego zginęło ponad 170 dzieci. W kolejnym ___ (7), pięć lat później, Ewa skupiła się na traumie, jaką wciąż odczuwały dzieci, które przeżyły nieludzki zamach. Od kilku lat Ewa Ewart jest prezenterką pasma filmów dokumentalnych o ___ (8) zagranicznej w TVN24 i TVN24Bis, komercyjnej ___ (9) telewizyjnej w Polsce, należącej do Amerykanów. Biegle włada językiem polskim, rosyjskim, hiszpańskim oraz angielskim. Dziennikarka otrzymała nagrodę specjalną Amnesty International za całokształt pracy ___ (10) na rzecz praw człowieka.

Wyrazy do wyboru: większość · dokumencie · dokumenty · stacji · opowiadają · dokumentalnych · społeczne · kwestiach · dziennikarskiej · tematyce`;

export const LESSON_66 = lesson(
  66,
  'Czwarta władza',
  'Środki masowego przekazu, wizerunek i zaimki przeczące',
  'Media · nikt, nic, żaden · wołacz',
  'Lekcja 16 · podręcznik i zeszyt ćwiczeń',
  'blue',
  [
    matchActivity(
      'p3-l16-e01-match',
      'H3-L16-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 1a',
      'Media — wyrazy i definicje',
      'Połącz wyrazy i wyrażenia medialne z ich definicjami.',
      [
        ['media', 'środki masowego przekazu'],
        ['prasa', 'gazety i czasopisma'],
        ['o tym się pisze', 'to jest publikowane w prasie, internecie'],
        ['jest o czymś głośno', 'coś jest tematem medialnym'],
        ['dziennikarstwo', 'studia dziennikarskie'],
        ['fake news', 'nieprawdziwa informacja medialna'],
      ],
    ),
    choiceActivity(
      'p3-l16-e02-choice',
      'H3-L16-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 2a',
      'Kreowanie wizerunku — rozumienie ze słuchu (cz. 1)',
      'Wysłuchaj pierwszego fragmentu audycji radiowej i wybierz prawidłową odpowiedź.',
      [
        choice(
          'q1',
          'Komunikacja ma być efektywna, a to znaczy:',
          'prosta i szybka',
          ['prosta i szybka', 'że ma swoje plusy i minusy', 'że podajemy rękę na dzień dobry'],
        ),
        choice(
          'q2',
          'Techniki autoprezentacji:',
          'są stare jak ludzkość',
          ['pojawiły się wraz z kapitalizmem', 'są stare jak ludzkość', 'są różne'],
        ),
        choice(
          'q3',
          'Obecnie kreuje się między innymi wizerunek:',
          'bogatego biznesmena',
          ['autorytetu moralnego', 'bogatego biznesmena', 'operatywnego i profesjonalnego absolwenta'],
        ),
      ],
      {
        audioUrl: '/assets/hurra_3_audio/wb-034.mp3',
        audioLabel: 'Nagranie 34 (Audycja radiowa · cz. 1)',
      },
    ),
    choiceActivity(
      'p3-l16-e03-choice',
      'H3-L16-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 2b',
      'Gwiazdy mediów — prawda czy nieprawda? (cz. 2)',
      'Wysłuchaj drugiego fragmentu nagrania i zaznacz, czy zdania są prawdziwe (P), czy nieprawdziwe (N).',
      [
        choice('q1', 'Wizerunek musi obejmować zarówno życie zawodowe, jak i prywatne.', 'P', ['P', 'N']),
        choice('q2', 'Dla gwiazdy mediów uśmiech jest najważniejszy.', 'N', ['P', 'N']),
        choice('q3', 'Gwiazdy sprzedają swoją prywatność.', 'P', ['P', 'N']),
        choice('q4', 'Kolorowy tygodnik potrzebuje rocznie tylko dwóch gwiazd.', 'N', ['P', 'N']),
        choice('q5', 'Na początku ważna jest rozpoznawalna twarz.', 'P', ['P', 'N']),
        choice('q6', 'Jest ważne, co gwiazda naprawdę ma do powiedzenia.', 'N', ['P', 'N']),
        choice('q7', 'Chodzi o to, co ludzie chcą przeczytać.', 'P', ['P', 'N']),
        choice('q8', 'Na potrzeby czytelników wymyśla się plotki.', 'P', ['P', 'N']),
        choice('q9', 'Kiedy piosenkarka wydaje nową płytę, dzwoni do menedżera.', 'N', ['P', 'N']),
        choice('q10', 'Modne są ostatnio macierzyństwo i rodzina.', 'P', ['P', 'N']),
      ],
      {
        audioUrl: '/assets/hurra_3_audio/wb-035.mp3',
        audioLabel: 'Nagranie 35 (Audycja radiowa · cz. 2)',
      },
    ),
    typedActivity(
      'p3-l16-e04-typed',
      'H3-L16-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 3a',
      'Notka biograficzna Ewy Ewart',
      'Przeczytaj tekst powyżej i wpisz właściwe słowa z ramki w ponumerowane luki (1–10).',
      [
        ['Luka (1): reżyserką filmów ___', 'dokumentalnych'],
        ['Luka (2): ale ___ swojego życia zawodowego spędziła w Wielkiej Brytanii', 'większość'],
        ['Luka (3): gdzie zrealizowała ___ śledcze, polityczne', 'dokumenty'],
        ['Luka (4): programy poruszające kwestie ___', 'społeczne'],
        ['Luka (5): ujawniły nowe informacje o ___ takich jak korupcja', 'kwestiach'],
        ['Luka (6): Dokumenty Ewy Ewart ___ o najbardziej pamiętnych wydarzeniach', 'opowiadają'],
        ['Luka (7): W kolejnym ___, pięć lat później', 'dokumencie'],
        ['Luka (8): pasma filmów dokumentalnych o ___ zagranicznej', 'tematyce'],
        ['Luka (9): komercyjnej ___ telewizyjnej w Polsce', 'stacji'],
        ['Luka (10): za całokształt pracy ___ na rzecz praw człowieka', 'dziennikarskiej'],
      ],
      { readingText: L16_READING_EWART },
    ),
    choiceActivity(
      'p3-l16-e05-choice',
      'H3-L16-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 6a',
      'Zaimek przeczący „żaden”',
      'Wybierz właściwą formę zaimka „żaden”.',
      [
        choice('q1', 'Nie spotkałem jeszcze (żadną / żadnej) dziennikarki zaangażowanej w swoją pracę jak ona.', 'żadnej', ['żadną', 'żadnej']),
        choice('q2', 'Nie mogę znaleźć o tym nigdzie (żadnych / żadne) informacji.', 'żadnych', ['żadnych', 'żadne']),
        choice('q3', '(Żaden / Żadnego) inny środek masowego przekazu nie jest dziś tak popularny jak internet.', 'Żaden', ['Żaden', 'Żadnego']),
        choice('q4', 'Nie będę się zajmować (żadnych / żadnymi) nietypowymi sprawami – stwierdził redaktor.', 'żadnymi', ['żadnych', 'żadnymi']),
        choice('q5', 'Z (żadnym / żadnymi) dziennikarzem nie rozmawiało mi się tak dobrze.', 'żadnym', ['żadnym', 'żadnymi']),
        choice('q6', 'Nie czytaj (żadnej / żadnych) dziwnych e-maili.', 'żadnych', ['żadnej', 'żadnych']),
        choice('q7', 'Premier nie udzielił w zeszłym tygodniu (żadna / żadnego) wywiadu.', 'żadnego', ['żadna', 'żadnego']),
        choice('q8', 'Informacje te nie ukazały się dotąd w (żadnej / żadnymi) gazecie.', 'żadnej', ['żadnej', 'żadnymi']),
        choice('q9', 'Nie interesuję się (żadnym / żadnymi) tragicznymi informacjami.', 'żadnymi', ['żadnym', 'żadnymi']),
        choice('q10', 'Nie chcielibyśmy rozmawiać o (żadnymi / żadnych) przykrych sprawach.', 'żadnych', ['żadnymi', 'żadnych']),
      ],
    ),
    typedActivity(
      'p3-l16-e06-typed',
      'H3-L16-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 6b',
      'Zaprzeczanie zdań z zaimkiem „żaden”',
      'Zaprzecz zdaniom, używając zaimka „żaden” w odpowiedniej formie (wzór: Kupił jakąś książkę. → Nie kupił żadnej książki.).',
      [
        ['Napisała jakiś wiersz.', 'Nie napisała żadnego wiersza.'],
        ['Mieszkał u jakiegoś znajomego.', 'Nie mieszkał u żadnego znajomego.'],
        ['Myślał o jakiejś kobiecie.', 'Nie myślał o żadnej kobiecie.'],
        ['Mam wątpliwości.', 'Nie mam żadnych wątpliwości.'],
        ['Na początku rozumieliśmy wszystkie polecenia egzaminacyjne.', 'Na początku nie rozumieliśmy żadnych poleceń egzaminacyjnych.'],
        ['Zdawałyśmy egzamin z polskiego.', 'Nie zdawałyśmy żadnego egzaminu z polskiego.'],
        ['Przeczytałem ostatnio ciekawy artykuł prasowy.', 'Nie przeczytałem ostatnio żadnego ciekawego artykułu prasowego.'],
        ['Widziałem debatę polityczną.', 'Nie widziałem żadnej debaty politycznej.'],
        ['Czytam komentarze internautów.', 'Nie czytam żadnych komentarzy internautów.'],
      ],
    ),
    classifyActivity(
      'p3-l16-e07-classify',
      'H3-L16-E07',
      'Hurra!!! Po Polsku 3 · Lekcja 16 · ćw. 7a',
      'Wołacz — rodzaj i liczba',
      'Określ rodzaj i liczbę każdego zwrotu w wołaczu.',
      ['r. męski, l. pojedyncza', 'r. żeński, l. pojedyncza', 'r. męskoosobowy, l. mnoga', 'r. niemęskoosobowy, l. mnoga'],
      [
        ['Szanowny Panie Profesorze!', 'r. męski, l. pojedyncza'],
        ['Szanowni Państwo!', 'r. męskoosobowy, l. mnoga'],
        ['Szanowna Pani!', 'r. żeński, l. pojedyncza'],
        ['Szanowny Panie!', 'r. męski, l. pojedyncza'],
        ['Szanowne Panie!', 'r. niemęskoosobowy, l. mnoga'],
        ['Szanowni Panowie!', 'r. męskoosobowy, l. mnoga'],
        ['Droga Pani Katarzyno!', 'r. żeński, l. pojedyncza'],
        ['Drogi Panie Tomaszu!', 'r. męski, l. pojedyncza'],
        ['Drodzy Studenci!', 'r. męskoosobowy, l. mnoga'],
        ['Drogie Studentki!', 'r. niemęskoosobowy, l. mnoga'],
      ],
    ),
  ],
);

// ============================================================================
// LEKCJA 17 — Przejdźmy do rzeczy! (App Lesson ID 67)
// ============================================================================

const L17_READING_TEXTS = `Tekst 1:
To wieczne pióro jest w naszej rodzinie od pokoleń: należało do mojego dziadka, następnie ojca, a legenda głosi, że przywiozła je moja prababcia ze szkoły w Szwajcarii. Nie wiem, czy to prawda, ale na pewno jest naszą rodzinną pamiątką i liczę, że dostanie je któreś z moich dzieci.

Tekst 2:
Jeden z sieciowych sklepów meblowych wprowadził nową propozycję dla klientów: mogą przywieźć swój stary mebel, kupiony w tej sieci w ciągu 10 ostatnich lat i oddać go do sklepu, a w zamian otrzymają kupon rabatowy. Te meble będą następnie odnawiane i naprawiane przez wolontariuszy i uczniów szkoły stolarskiej, po czym trafią do schronisk, domów opieki i na aukcje.

Tekst 3:
Wieżę Eiffla, zwaną „Żelazną Damą”, zbudowano specjalnie na paryską wystawę światową w 1889 roku. Miała upamiętnić setną rocznicę rewolucji francuskiej oraz zademonstrować poziom wiedzy inżynierskiej i możliwości techniczne epoki, być symbolem ówczesnej potęgi gospodarczej i naukowo-technicznej Francji.

Tekst 4:
Podobno w damskiej torebce można znaleźć wszystko. Okazuje się, że nosimy w nich bardzo praktyczne rzeczy, przydatne na co dzień i te „na wszelki wypadek” (jak tabletki przeciwbólowe, minizestaw do szycia), których może nigdy nie użyjemy. Według statystyk kobieta ma 4 torebki na różne okazje.`;

export const LESSON_67 = lesson(
  67,
  'Przejdźmy do rzeczy!',
  'Opis przedmiotu, reklama, namawianie i tryb rozkazujący',
  'Reklama · opis przedmiotu · się · tryb rozkazujący',
  'Lekcja 17 · podręcznik i zeszyt ćwiczeń',
  'coral',
  [
    choiceActivity(
      'p3-l17-e01-choice',
      'H3-L17-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · ćw. 1a',
      'Opis przedmiotu — które słowo nie pasuje?',
      'Wybierz wyraz, który nie pasuje do podanej kategorii opisu przedmiotu.',
      [
        choice('q1', 'materiał: owalny, plastikowy, drewniany, ceramiczny', 'owalny', ['owalny', 'plastikowy', 'drewniany', 'ceramiczny']),
        choice('q2', 'kolor: matowy, wielobarwny, błyszczący, z tkaniny', 'z tkaniny', ['matowy', 'wielobarwny', 'błyszczący', 'z tkaniny']),
        choice('q3', 'forma: nieregularny, kwadratowy, gumowy, prostokątny', 'gumowy', ['nieregularny', 'kwadratowy', 'gumowy', 'prostokątny']),
        choice('q4', 'części składowe: podłużny, ucho, okładka, podstawa', 'podłużny', ['podłużny', 'ucho', 'okładka', 'podstawa']),
        choice('q5', 'stosunek emocjonalny: uwielbiam, mały, ulubiony, nie przepadam', 'mały', ['uwielbiam', 'mały', 'ulubiony', 'nie przepadam']),
      ],
    ),
    matchActivity(
      'p3-l17-e02-match',
      'H3-L17-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · ćw. 1b',
      'Reklama i idiomy — synonimy',
      'Połącz wyrazy i idiomy ze słowami o podobnym znaczeniu.',
      [
        ['namawiać', 'przekonywać'],
        ['ulotka', 'broszura'],
        ['slogan', 'hasło'],
        ['plakat', 'billboard'],
        ['nabić w butelkę', 'oszukać, okłamać'],
        ['wpada w ucho', 'jest melodyjne; łatwo to zapamiętać'],
        ['przejść do rzeczy', 'mówić na temat'],
        ['ikona stylu', 'symbol, legenda'],
        ['nowy produkt', 'nowość'],
        ['za żadne skarby', 'za żadną cenę'],
      ],
    ),
    matchActivity(
      'p3-l17-e03-match',
      'H3-L17-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · ćw. 1c',
      'Slogan i produkt',
      'Połącz slogany reklamowe z odpowiednimi produktami.',
      [
        ['Nowa, ulepszona formuła', 'szampon do włosów'],
        ['Daj im drugie życie!', 'używana odzież'],
        ['Drugi sześciopak za pół ceny', 'piwo'],
        ['Najlepszy w swojej klasie', 'nowy model samochodu'],
        ['Robione ręcznie, z naturalnego drewna', 'meble'],
      ],
    ),
    typedActivity(
      'p3-l17-e04-typed',
      'H3-L17-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · ćw. 2c',
      'Tryb rozkazujący',
      'Przekształć wyrażenia z bezokolicznikiem w zdania w trybie rozkazującym (wzór: przejść do rzeczy (ty) → Przejdź do rzeczy!).',
      [
        ['opisać mi to (pan)', ['Niech mi pan to opisze!', 'Niech pan mi to opisze!']],
        ['nie czekać (wy) na nas', 'Nie czekajcie na nas!'],
        ['zastanowić się (my) nad tym', 'Zastanówmy się nad tym!'],
        ['nie zastanawiać się (my) nad tym', 'Nie zastanawiajmy się nad tym!'],
        ['powiedzieć mu o tym (pani)', ['Niech pani powie mu o tym!', 'Niech mu pani o tym powie!']],
        ['zobaczyć swój nowy dom (państwo)', 'Niech państwo zobaczą swój nowy dom!'],
        ['zadzwonić do niego (ty)', 'Zadzwoń do niego!'],
        ['poszukać swojego portfela (pan)', 'Niech pan poszuka swojego portfela!'],
        ['kupić mi sok (wy)', 'Kupcie mi sok!'],
        ['przyjść do nas (państwo)', ['Niech państwo przyjdą do nas!', 'Niech państwo do nas przyjdą!']],
      ],
    ),
    choiceActivity(
      'p3-l17-e05-choice',
      'H3-L17-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · ćw. 4',
      'Frugo — polska marka legenda (P/N)',
      'Wysłuchaj nagrania i zaznacz, czy poniższe zdania są prawdziwe (P), czy nieprawdziwe (N).',
      [
        choice('q1', 'Firma powstała na początku XXI wieku.', 'N', ['P', 'N']),
        choice('q2', 'Firma produkuje napoje owocowe.', 'P', ['P', 'N']),
        choice('q3', 'Klientami firmy są starsze osoby i nastolatki.', 'N', ['P', 'N']),
        choice('q4', 'Firma była konkurencją dla międzynarodowych koncernów.', 'P', ['P', 'N']),
      ],
      {
        audioUrl: '/assets/hurra_3_audio/wb-036.mp3',
        audioLabel: 'Nagranie 36 (Frugo · ćw. 4)',
      },
    ),
    choiceActivity(
      'p3-l17-e06-choice',
      'H3-L17-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · ćw. 6',
      'Rozumienie tekstów pisanych — krótkie teksty',
      'Przeczytaj cztery krótkie teksty i wybierz właściwą odpowiedź dla każdego z nich.',
      [
        choice(
          'q1',
          'Z tekstu 1 wynika, że autor tekstu:',
          'chce przekazać pióro jednemu ze swoich dzieci',
          [
            'chce przekazać pióro jednemu ze swoich dzieci',
            'dokładnie zna historię wiecznego pióra',
            'wieczne pióro ma co najmniej 300 lat',
          ],
        ),
        choice(
          'q2',
          'Z tekstu 2 wynika, że stare meble oddane do sklepu:',
          'dostaną nowe życie',
          ['będą zniszczone', 'dostaną nowe życie', 'będą sprzedane w innym sklepie'],
        ),
        choice(
          'q3',
          'Z tekstu 3 wynika, że wieżę Eiffla zbudowano:',
          'jako symbol nowoczesności Francji, na pamiątkę historii i na wystawę światową',
          [
            'jako atrakcję dla turystów',
            'pięćdziesiąt lat po rewolucji francuskiej',
            'jako symbol nowoczesności Francji, na pamiątkę historii i na wystawę światową',
          ],
        ),
        choice(
          'q4',
          'Z tekstu 4 wynika, że w damskiej torebce:',
          'są bardziej przydatne rzeczy i te mniej potrzebne na co dzień',
          [
            'są tylko niezbędne rzeczy',
            'jest wszystko',
            'są bardziej przydatne rzeczy i te mniej potrzebne na co dzień',
          ],
        ),
      ],
      { readingText: L17_READING_TEXTS },
    ),
    choiceActivity(
      'p3-l17-e07-choice',
      'H3-L17-E07',
      'Hurra!!! Po Polsku 3 · Lekcja 17 · przygotowanie do egzaminu I',
      'Odmiana przymiotników: ofensywa świątecznych reklam',
      'Zaznacz poprawne formy przymiotników w tekście.',
      [
        choice('q1', '(Wielki, Wielkie, Wielkich) sieci sklepowe zmieniają dekoracje…', 'Wielkie', ['Wielki', 'Wielkie', 'Wielkich']),
        choice('q2', '…dwa miesiące przed (Bożym, Bożego, Bożemu) Narodzeniem.', 'Bożym', ['Bożym', 'Bożego', 'Bożemu']),
        choice('q3', '(Piękny, Piękne, Pięknymi) choinki…', 'Piękne', ['Piękny', 'Piękne', 'Pięknymi']),
        choice('q4', '…„prezenty” po (promocyjne, promocyjnych, promocyjnymi) cenach…', 'promocyjnych', ['promocyjne', 'promocyjnych', 'promocyjnymi']),
        choice('q5', '…i dziesiątki (świętych, świętym, świętego) mikołajów.', 'świętych', ['świętych', 'świętym', 'świętego']),
        choice('q6', 'A klienci do (przedświątecznych, przedświątecznego, przedświątecznym) promocji…', 'przedświątecznych', ['przedświątecznych', 'przedświątecznego', 'przedświątecznym']),
        choice('q7', '…mają (mieszanych, mieszane, mieszaną) uczucia.', 'mieszane', ['mieszanych', 'mieszane', 'mieszaną']),
        choice('q8', 'Jedni uważają, że to (czysta, czysty, czyste) komercja…', 'czysta', ['czysta', 'czysty', 'czyste']),
        choice('q9', '…inni zaś, a szczególnie dzieci, są bardzo (zadowolony, zadowolona, zadowoleni).', 'zadowoleni', ['zadowolony', 'zadowolona', 'zadowoleni']),
        choice('q10', 'Dzieci są (najlepszym, najlepszymi, najlepszych) klientami XXI wieku.', 'najlepszymi', ['najlepszym', 'najlepszymi', 'najlepszych']),
      ],
    ),
  ],
);

// ============================================================================
// LEKCJA 18 — Kultura (App Lesson ID 68)
// ============================================================================

const L18_READING_HARTWIG = `Sąd nad Polakiem — Julia Hartwig

(1) 51 proc. Polaków nie przeczytało ani jednej książki, 90 proc. Polaków ani raz w ciągu roku nie było w teatrze. Wystawy i muzea odwiedziło zaledwie 12 proc. Polaków.

(2) Statystyka nie jest najlepszym materiałem do oceny kultury. Mimo to ciekawe byłoby usłyszeć, ilu jest mieszkańców małych miasteczek, ilu mieszkańców wielkich miast, a ilu jest mieszkańców wsi, do których nie dociera żadna gazeta ani biblioteka. Brak czytelnictwa na wsi to w dużej mierze brak zachęty i pomocy ze strony państwa i samorządów lokalnych. Statystyka nie mówi nam również, że wielu Polaków nie stać na zakup książki, która jak na średnie zarobki jest bardzo droga. (…) Społeczeństwo ubogie, a takie jest społeczeństwo polskie, zaopatruje się najpierw w sklepie spożywczym, a dopiero potem w księgarni, jeśli w ogóle tam trafi. Nie mówiąc już o zakupie biletu do teatru, filharmonii czy do kina.

(3) W powszechnym przekonaniu to telewizja wytrąciła książkę z rąk czytelnika. A przecież ta sama telewizja mogła stać się dla ludzkości błogosławieństwem, przekazując szeroko wartości edukacyjne, zamiłowanie do sztuki, godziwą rozrywkę i szerząc właśnie kult książki. (…) Jeśli więc prawdą jest, że pod wpływem telewizji Polak zobojętniał na bezpośrednie obcowanie ze sztuką, to stało się to również w wielu krajach europejskich.

(4) Można by postawić pytanie: skoro z pozoru jest tak źle, dlaczego jednak tak źle w końcu nie jest? Wystarczy spojrzeć na rozmaitość i bogactwo książek, rozłożonych na ladach księgarskich. Mimo kryzysu ktoś jednak je kupuje i czyta. Nie tylko książki naukowe i specjalistyczne, również literaturę piękną i poezję. Pozwalam sobie wyrazić przekonanie, że wiedza i samoświadomość wykształconego, młodego Polaka, jego zachowania nie różnią się bardzo od wiedzy i zachowań każdego innego wykształconego Europejczyka, z tą jednak różnicą, że ów Europejczyk ma się na ogół lepiej materialnie.

(5) Nasza literatura współczesna tłumaczona jest na obce języki, orkiestry wykonujące dzieła polskich kompozytorów cieszą się sukcesami, trwa zainteresowanie naszym kinem i teatrem. Wystawy polskiego malarstwa mają dobre echa. Być może też sztuka wysoka, obok zanikających reliktów sztuki ludowej, jest najpoważniejszym oparciem naszej narodowej tożsamości.`;

export const LESSON_68 = lesson(
  68,
  'Kultura',
  'Kultura, sztuka, wyrażanie opinii i miejscownik',
  'Kultura · miejscownik · spójniki · tryb przypuszczający',
  'Lekcja 18 · podręcznik i zeszyt ćwiczeń',
  'violet',
  [
    typedActivity(
      'p3-l18-e01-typed',
      'H3-L18-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · ćw. 1',
      'O czym opowiada film / książka? (miejscownik)',
      'Przekształć zdania zgodnie z przykładem: „Tematem książki jest historia życia dwóch sióstr.” → „Książka opowiada o życiu dwóch sióstr.”',
      [
        ['Tematem filmu jest miłość młodej dziewczyny do księdza.', 'Film opowiada o miłości młodej dziewczyny do księdza.'],
        ['Tematem sztuki jest zemsta.', 'Sztuka opowiada o zemście.'],
        ['Tematem filmu jest zdrada małżeńska.', 'Film opowiada o zdradzie małżeńskiej.'],
        ['Tematem filmu jest kariera mało utalentowanego polityka.', 'Film opowiada o karierze mało utalentowanego polityka.'],
        ['Tematem książki są losy mieszczańskiej rodziny z Lubeki.', 'Książka opowiada o losach mieszczańskiej rodziny z Lubeki.'],
        ['Tematem filmu jest napad na bank.', 'Film opowiada o napadzie na bank.'],
        ['Tematem wiersza jest wiara w sens istnienia.', ['Wiersz mówi o wierze w sens istnienia.', 'Wiersz opowiada o wierze w sens istnienia.']],
        ['Tematem filmu jest ślub i przyjęcie weselne pary młodych Polaków.', 'Film opowiada o ślubie i przyjęciu weselnym pary młodych Polaków.'],
        ['Tematem sztuki jest walka z chorobą.', 'Sztuka opowiada o walce z chorobą.'],
        ['Tematem filmu jest wojna.', 'Film opowiada o wojnie.'],
      ],
    ),
    classifyActivity(
      'p3-l18-e02-classify',
      'H3-L18-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · ćw. 2',
      'Spójniki: jak, co czy że?',
      'Wybierz właściwy spójnik (jak, co lub że) do każdego zdania.',
      ['jak', 'co', 'że'],
      [
        ['Film opowiada o tym, ___ samotny mężczyzna spotyka chłopca i zaprzyjaźnia się z nim.', 'jak'],
        ['Sztuka mówi o tym, ___ chęć zemsty robi z człowiekiem.', 'co'],
        ['Film opowiada o tym, ___ zdrady nie można zapomnieć.', 'że'],
        ['Film opowiada o tym, ___ prosty, niewykształcony człowiek zostaje premierem.', 'jak'],
        ['Książka opowiada o tym, ___ rozpada się wpływowa rodzina z Lubeki.', 'jak'],
        ['Film opowiada o tym, ___ dzieje się z człowiekiem, kiedy znajdzie się w sytuacji ekstremalnej.', 'co'],
        ['Wiersz mówi o tym, ___ życie ma sens.', 'że'],
        ['Film opowiada o tym, ___ zwykle dzieje się na polskich weselach.', 'co'],
        ['Film mówi o tym, ___ wojna jest zawsze tragedią.', 'że'],
        ['Film opowiada o tym, ___ miłość jest najważniejsza.', 'że'],
      ],
    ),
    choiceActivity(
      'p3-l18-e03-choice',
      'H3-L18-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · ćw. 3',
      '„Sąd nad Polakiem” — prawda czy nieprawda?',
      'Przeczytaj tekst Julii Hartwig i określ, czy podane stwierdzenia są prawdziwe (P), czy nieprawdziwe (N).',
      [
        choice('q1', 'Fragment (1): Ponad połowa Polaków prawie w ogóle nie czyta książek.', 'P', ['P', 'N']),
        choice('q2', 'Fragment (2): Warunki materialne nie mają wpływu na zainteresowanie kulturą.', 'N', ['P', 'N']),
        choice('q3', 'Fragment (3): Telewizja mogła rozwijać zainteresowanie sztuką, jednak powoduje, że coraz mniej osób czyta książki.', 'P', ['P', 'N']),
        choice('q4', 'Fragment (4): Wiedza wykształconego młodego Polaka nie różni się niczym od wiedzy wykształconego młodego Europejczyka.', 'P', ['P', 'N']),
        choice('q5', 'Fragment (5): Niektóre dziedziny polskiej kultury i sztuki cieszą się zainteresowaniem za granicą.', 'P', ['P', 'N']),
      ],
      { readingText: L18_READING_HARTWIG },
    ),
    choiceActivity(
      'p3-l18-e04-choice',
      'H3-L18-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · ćw. 4',
      'Spójniki w zdaniach o kulturze',
      'Wybierz właściwy spójnik w każdym zdaniu.',
      [
        choice('q1', 'Książki rozwijają wyobraźnię, (ponieważ / i dlatego) warto czytać.', 'i dlatego', ['ponieważ', 'i dlatego']),
        choice('q2', 'Ostatnio mało czytam, (bo / więc) mam więcej pracy.', 'bo', ['bo', 'więc']),
        choice('q3', 'Chodzę do kina, (żeby / po to) się zrelaksować.', 'żeby', ['żeby', 'po to']),
        choice('q4', 'Nie wszyscy lubią teatr, (więc / ale) ja uważam, że spełnia on ważną rolę w życiu kulturalnym kraju.', 'ale', ['więc', 'ale']),
        choice('q5', 'Subkultury skupiają (przecież / przede wszystkim) młodych ludzi.', 'przede wszystkim', ['przecież', 'przede wszystkim']),
        choice('q6', 'Programy rozrywkowe w telewizji są popularne, (dlatego / bo) ludzie lubią je oglądać.', 'bo', ['dlatego', 'bo']),
        choice('q7', 'Nie chodzę do muzeów (ani / ale) do teatru.', 'ani', ['ani', 'ale']),
        choice('q8', 'Lubię poezję, (albo / chociaż) nie zawsze ją rozumiem.', 'chociaż', ['albo', 'chociaż']),
        choice('q9', 'To świetna pisarka, (dlatego że / więc) na pewno kupię jej następną książkę.', 'więc', ['dlatego że', 'więc']),
        choice('q10', 'Mam więcej czasu, (odkąd / odtąd) zmieniłem pracę.', 'odkąd', ['odkąd', 'odtąd']),
      ],
    ),
    choiceActivity(
      'p3-l18-e05-choice',
      'H3-L18-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · ćw. 5',
      'Opinie, krytyka i upodobania — rozumienie ze słuchu',
      'Wysłuchaj nagrania (10 wypowiedzi) i zaznacz właściwą funkcję każdej wypowiedzi.',
      [
        choice('q1', 'Wypowiedź 1 to:', 'pytanie o opinię', ['opinia', 'pytanie o opinię', 'wyrażanie upodobania']),
        choice('q2', 'Wypowiedź 2 to:', 'krytyka', ['wyrażanie upodobania', 'wyrażanie obojętności', 'krytyka']),
        choice('q3', 'Wypowiedź 3 to:', 'opinia', ['wyrażanie obojętności', 'krytyka', 'opinia']),
        choice('q4', 'Wypowiedź 4 to:', 'krytyka', ['wyrażanie upodobania', 'pytanie o opinię', 'krytyka']),
        choice('q5', 'Wypowiedź 5 to:', 'krytyka', ['wyrażanie obojętności', 'odpowiedź na krytykę', 'krytyka']),
        choice('q6', 'Wypowiedź 6 to:', 'wyrażanie upodobania', ['wyrażanie upodobania', 'wyrażanie obojętności', 'pytanie o opinię']),
        choice('q7', 'Wypowiedź 7 to:', 'krytyka', ['odpowiedź na krytykę', 'wyrażanie obojętności', 'krytyka']),
        choice('q8', 'Wypowiedź 8 to:', 'odpowiedź na krytykę', ['opinia', 'odpowiedź na krytykę', 'wyrażanie upodobania']),
        choice('q9', 'Wypowiedź 9 to:', 'pytanie o opinię', ['pytanie o opinię', 'opinia', 'wyrażanie upodobania']),
        choice('q10', 'Wypowiedź 10 to:', 'wyrażanie obojętności', ['wyrażanie obojętności', 'krytyka', 'pytanie o opinię']),
      ],
      {
        audioUrl: '/assets/hurra_3_audio/wb-037.mp3',
        audioLabel: 'Nagranie 37 (Wypowiedzi 1–10 · ćw. 5)',
      },
    ),
    typedActivity(
      'p3-l18-e06-typed',
      'H3-L18-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · przygotowanie do egzaminu II',
      'Tryb przypuszczający (gdyby...)',
      'Przekształć zdania zgodnie ze wzorem: „Odkąd ludzie mają w domu telewizory, rzadziej chodzą do kina.” → „Ludzie chodziliby częściej do kina, gdyby nie mieli telewizorów.”',
      [
        [
          'Odkąd jest internet, ludzie rzadziej kupują gazety.',
          ['Ludzie kupowaliby częściej gazety, gdyby nie mieli internetu.', 'Ludzie kupowaliby częściej gazety, gdyby nie było internetu.'],
        ],
        [
          'Odkąd można oglądać filmy w sieci, coraz mniej ludzi chodzi do kina.',
          ['Więcej ludzi chodziłoby do kina, gdyby nie mogli oglądać filmów w sieci.', 'Więcej ludzi chodziłoby do kina, gdyby nie można było oglądać filmów w sieci.'],
        ],
        [
          'Odkąd ludzie mają samochody, rzadziej chodzą pieszo.',
          'Ludzie chodziliby częściej pieszo, gdyby nie mieli samochodów.',
        ],
        [
          'Odkąd każdy ma smartfon, ludzie rzadziej korzystają z telefonów stacjonarnych.',
          ['Ludzie korzystaliby częściej z telefonów stacjonarnych, gdyby nie mieli smartfonów.', 'Ludzie korzystaliby częściej z telefonów stacjonarnych, gdyby każdy nie miał smartfona.'],
        ],
        [
          'Odkąd Polska należy do Unii Europejskiej, Polacy mogą podróżować bez paszportu po krajach członkowskich.',
          'Polacy nie mogliby podróżować bez paszportu po krajach członkowskich, gdyby Polska nie należała do Unii Europejskiej.',
        ],
      ],
    ),
    choiceActivity(
      'p3-l18-e07-choice',
      'H3-L18-E07',
      'Hurra!!! Po Polsku 3 · Lekcja 18 · przygotowanie do egzaminu III',
      'Księgarnia Booksby.ai — poprawna forma wyrazu',
      'Wybierz poprawną formę wyrazów podanych w nawiasach.',
      [
        choice('q1', 'Booksby.ai to księgarnia, w której książki, okładki, recenzje, a nawet ceny (wygenerowała / wygenerowano) sztuczna inteligencja.', 'wygenerowała', ['wygenerowała', 'wygenerowano']),
        choice('q2', 'Jednak nie (należy / należą) się spodziewać literatury wysokich lotów.', 'należy', ['należy', 'należą']),
        choice('q3', 'Fabuła jest zawiła językowo, ale to nie (przeszkadzają / przeszkodziło), by książki znalazły się w sprzedaży.', 'przeszkodziło', ['przeszkadzają', 'przeszkodziło']),
        choice('q4', 'Twórcy projektu (nauczyli / nauczono) sztuczną inteligencję naśladować język i styl…', 'nauczyli', ['nauczyli', 'nauczono']),
        choice('q5', '…książek, które już (czyta / przeczytała).', 'przeczytała', ['czyta', 'przeczytała']),
        choice('q6', 'Dopiero w ostatnich tygodniach (pojawiło / pojawili) się większe zainteresowanie.', 'pojawiło', ['pojawiło', 'pojawili']),
        choice('q7', 'Do tej pory (sprzedano / sprzedawali) 21 sztuk.', 'sprzedano', ['sprzedano', 'sprzedawali']),
        choice('q8', 'Specjaliści chcieli zachęcić ludzi do (zastanowić / zastanowienia) się nad przyszłością.', 'zastanowienia', ['zastanowić', 'zastanowienia']),
      ],
    ),
  ],
);

// ============================================================================
// LEKCJA 19 — W co wierzymy? (App Lesson ID 69)
// ============================================================================

const L19_READING_CHURCH = `Kawa w nawie, dyskoteka w krypcie

Władze kościelne robią, co mogą, aby zwiększyć atrakcyjność anglikanizmu. Wiele parafii wprowadziło msze w ciągu tygodnia, żeby uniknąć konkurencji ze świeckimi sposobami spędzania weekendów. Spory nacisk kładzie się na rozwój internetu: diecezja oksfordzka powołała wirtualną parafię dla osób niechętnie wiążących się z tradycyjną strukturą kościelną. Niektóre pomysły są zresztą mocno kontrowersyjne. Podczas zeszłorocznych obrad Synodu Generalnego prasa poinformowała, że parafiom zaleca się organizowanie w bocznych nawach „spotkań przy kawie”, a w kryptach – dyskotek. Rozważa się także wynajmowanie części kościołów na kawiarenki czy bary, co z kolei ma złagodzić kłopoty finansowe.

Arcybiskup Canterbury, Rowan Williams wzywa księży, aby w trosce o dobry kontakt z wiernymi oglądali najpopularniejsze seriale. (…) Biskupi otwarcie przyznają, że większość nominalnych anglikanów to „poganie w drugim lub nawet trzecim pokoleniu”. Kryzys nie zaczął się przecież wczoraj, jego pierwsze oznaki sięgają początków ubiegłego stulecia. Trwa tak długo, że stał się sprawą oczywistą nawet dla samego kościoła. Wymierająca powoli grupka wiernych z parafii św. Marii Magdaleny w Lundwood stanowi jedynie kolejny symbol trudnych czasów. Podobnie jak symboliczne są nadzieje, że lepsze lata nadejdą dzięki pomocy telewizji.`;

export const LESSON_69 = lesson(
  69,
  'W co wierzymy?',
  'Religia, wiara, zaimki pytajne i tryb warunkowy',
  'Religia · zaimki pytajne · tryb przypuszczający',
  'Lekcja 19 · podręcznik i zeszyt ćwiczeń',
  'blue',
  [
    typedActivity(
      'p3-l19-e01-typed',
      'H3-L19-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · ćw. 1',
      'Polska Rada Ekumeniczna — słuchanie i deklinacja',
      'Uzupełnij tekst właściwą formą rzeczownika lub przymiotnika podanego w nawiasie, a następnie sprawdź odpowiedzi, słuchając nagrania.',
      [
        ['Polska Rada Ekumeniczna działa na rzecz rozwoju ___ (dialog) ekumenicznego…', 'dialogu'],
        ['…___ (tolerancja) religijnej…', 'tolerancji'],
        ['…oraz zbliżenia i pielęgnowania braterskich ___ (stosunki) między kościołami.', 'stosunków'],
        ['Organizuje ekumeniczne ___ (konferencje) i wymiany młodzieżowe…', 'konferencje'],
        ['…prowadzi dialog międzywyznaniowy i konsultacje z ___ (organy) państwa.', 'organami'],
        ['Prace Rady prowadzone są w ___ (komisje) i oddziałach regionalnych.', 'komisjach'],
        ['Polska Rada Ekumeniczna jest także częścią międzynarodowego ruchu ___ (ekumeniczny).', 'ekumenicznego'],
        ['Posiada status rady stowarzyszonej ze ___ (Światowa) Radą Kościołów.', 'Światową'],
        ['Współpracuje z Konferencją Kościołów ___ (Europejskie) oraz Ekumeniczną Radą Młodzieży w Europie.', 'Europejskich'],
      ],
      {
        audioUrl: '/assets/hurra_3_audio/wb-038.mp3',
        audioLabel: 'Nagranie 38 (Polska Rada Ekumeniczna · ćw. 1)',
      },
    ),
    typedActivity(
      'p3-l19-e02-typed',
      'H3-L19-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · ćw. 2',
      'Tryb przypuszczający — hipotezy',
      'Przekształć zdania na tryb przypuszczający (wzór: Jeśli ludzie nie będą wierzyć w nic, ich życie będzie trudniejsze. → Gdyby ludzie nie wierzyli w nic, ich życie byłoby trudniejsze.).',
      [
        [
          'Jeśli jest jakaś cywilizacja pozaziemska, nasze życie zmieni się całkowicie.',
          'Gdyby była jakaś cywilizacja pozaziemska, nasze życie zmieniłoby się całkowicie.',
        ],
        [
          'Będziemy musieli zaakceptować inne istoty.',
          'Musielibyśmy zaakceptować inne istoty.',
        ],
        [
          'Kościół też zdecyduje się zweryfikować swój punkt widzenia.',
          'Kościół też zdecydowałby się zweryfikować swój punkt widzenia.',
        ],
        [
          'Dla religii takich jak buddyzm, taoizm i hinduizm będzie to mniejszym problemem.',
          'Dla religii takich jak buddyzm, taoizm i hinduizm byłoby to mniejszym problemem.',
        ],
        [
          'Także ekumeniści i mormoni ucieszą się z pewnością z tego faktu.',
          'Także ekumeniści i mormoni ucieszyliby się z pewnością z tego faktu.',
        ],
      ],
    ),
    typedActivity(
      'p3-l19-e03-typed',
      'H3-L19-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · ćw. 3 i 4',
      'Religie, wyznania i zaimki pytajne',
      'Uzupełnij definicje wyznań (1–5) oraz pytania za pomocą właściwej formy zaimka „jaki” (6–9).',
      [
        ['Katolik jest przedstawicielem ___.', 'katolicyzmu'],
        ['Muzułmanin reprezentuje ___.', 'islam'],
        ['Protestant należy do kościoła ___.', 'protestanckiego'],
        ['Buddysta to przedstawiciel ___.', 'buddyzmu'],
        ['Prawosławny to przedstawiciel wyznania ___.', 'prawosławnego'],
        ['___ wyznanie reprezentuje muzułmanin?', 'Jakie'],
        ['Prawosławny to przedstawiciel ___ wyznania?', 'jakiego'],
        ['Do ___ kościoła należy protestant?', 'jakiego'],
        ['___ religię wyznaje katolik?', 'Jaką'],
      ],
    ),
    typedActivity(
      'p3-l19-e04-typed',
      'H3-L19-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · ćw. 6 i 8',
      '„Wierzyć w coś / komuś” oraz odmiana rzeczownika „ksiądz”',
      'Wpisz właściwą formę wyrazów podanych w nawiasach (ćw. 6) oraz rzeczownika „ksiądz” w liczbie pojedynczej i mnogiej (ćw. 8).',
      [
        ['Piotr jest osobą bardzo poważną, dlatego ja ___ (on) wierzę.', 'mu'],
        ['Ewa powiedziała, że była w kinie, ale mama ___ (ona) nie wierzy.', 'jej'],
        ['Jej zdaniem Bóg nie istnieje, dlatego ona nie wierzy ___ (Bóg).', 'w Boga'],
        ['Pracujemy dużo, bo wierzymy ___ (lepsza przyszłość).', 'w lepszą przyszłość'],
        ['Kiedy byłem mały, chciałem być ___ (ksiądz).', 'księdzem'],
        ['Znałem jednego ___ (ksiądz).', 'księdza'],
        ['Ludzie mówili o tym ___ (ksiądz), że ma powołanie.', 'księdzu'],
        ['Dzięki temu ___ (ksiądz) zrozumiałem, że trzeba pomagać innym.', 'księdzu'],
        ['___ (ksiądz, lm.) katoliccy muszą żyć w celibacie.', 'Księża'],
        ['Żaden z ___ (ksiądz, lm.) nie może żyć z kobietą.', 'księży'],
        ['Sądzę, że niektórym ___ (ksiądz, lm.) może się to nie podobać.', 'księżom'],
        ['Mało dyskutuje się o ___ (ksiądz, lm.)…', 'księżach'],
        ['…i z ___ (ksiądz, lm.) na temat ich sytuacji życiowej.', 'księżmi'],
      ],
    ),
    choiceActivity(
      'p3-l19-e05-choice',
      'H3-L19-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · ćw. 9b',
      '„Kawa w nawie, dyskoteka w krypcie” — rozumienie tekstu',
      'Przeczytaj tekst i wybierz poprawną odpowiedź.',
      [
        choice(
          'q1',
          'Władze kościelne:',
          'próbują zwiększyć atrakcyjność kościoła anglikańskiego',
          [
            'próbują zwiększyć atrakcyjność kościoła anglikańskiego',
            'niewiele robią, żeby zwiększyć atrakcyjność kościoła anglikańskiego',
          ],
        ),
        choice('q2', 'Dużą rolę w popularyzowaniu spotkań religijnych odgrywa:', 'internet', ['radio', 'internet']),
        choice('q3', 'Diecezja oksfordzka powołała:', 'wirtualną parafię', ['wirtualną kawiarnię w kościele', 'wirtualną parafię']),
        choice(
          'q4',
          'Zaleca się, żeby organizować:',
          'spotkania przy kawie w nawach bocznych',
          ['spotkania przy winie w nawach bocznych', 'spotkania przy kawie w nawach bocznych'],
        ),
        choice('q5', 'Dobry kontakt z wiernymi to także może być:', 'oglądanie seriali', ['słuchanie muzyki rockowej', 'oglądanie seriali']),
        choice('q6', 'Kryzys w kościele anglikańskim zaczął się:', 'ponad wiek temu', ['niedawno', 'ponad wiek temu']),
      ],
      { readingText: L19_READING_CHURCH },
    ),
    choiceActivity(
      'p3-l19-e06-choice',
      'H3-L19-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · przygotowanie do egzaminu II',
      'Zaimki osobowe i wskazujące',
      'Zaznacz poprawną formę zaimka w tekście o Marii i Edwardzie.',
      [
        choice('q1', 'Maria powiedziała rodzicom, że nie będzie już mieszkać z (nimi, nią, nim).', 'nimi', ['nimi', 'nią', 'nim']),
        choice('q2', 'Nie wiedziała, czy rodzice (mu, go, nim) zaakceptują.', 'go', ['mu', 'go', 'nim']),
        choice('q3', 'Z rodzicami Edwarda nie było problemu, (ich, oni, im) wiedzieli…', 'oni', ['ich', 'oni', 'im']),
        choice('q4', 'Postanowiła najpierw zadzwonić do matki i porozmawiać z (nim, ją, nią).', 'nią', ['nim', 'ją', 'nią']),
        choice('q5', 'Chciała przyjrzeć (go, nim, mu) się bliżej.', 'mu', ['go', 'nim', 'mu']),
        choice('q6', 'Dla (jego, niego, go) to mogłoby być trudne.', 'niego', ['jego', 'niego', 'go']),
        choice('q7', 'Ojciec był bardzo miły dla Edwarda i cały czas dyskutował z (ją, nią, nim) o nowych samochodach.', 'nim', ['ją', 'nią', 'nim']),
        choice('q8', 'Chciałby opiekować się (ich, nich, nimi).', 'nimi', ['ich', 'nich', 'nimi']),
        choice('q9', 'Postanowił powiedzieć o (to, tego, tym) Marii.', 'tym', ['to', 'tego', 'tym']),
        choice('q10', 'Ona nie miała, oczywiście, nic przeciwko (mu, temu, tej).', 'temu', ['mu', 'temu', 'tej']),
      ],
    ),
    typedActivity(
      'p3-l19-e07-typed',
      'H3-L19-E07',
      'Hurra!!! Po Polsku 3 · Lekcja 19 · przygotowanie do egzaminu III',
      'Forum ekumeniczne — czas teraźniejszy i przyszły',
      'Uzupełnij tekst poprawnymi formami czasowników podanych w nawiasach.',
      [
        ['Przedstawiciele wielkich światowych wyznań ___ (dyskutować) o porozumieniu ponad religiami.', ['będą dyskutować', 'będą dyskutowali']],
        ['Do stolicy ___ (przyjechać) ponad stu reprezentantów kościołów z całego świata.', 'przyjedzie'],
        ['Na początku ___ (spotkać się – oni) z prezydentem i premierem…', 'spotkają się'],
        ['…następnie ___ (pojechać – oni) do centrum ekumenicznego.', 'pojadą'],
        ['W pierwszym dniu forum ___ (wystąpić) dwaj przedstawiciele Światowej Organizacji Wyznaniowej.', 'wystąpią'],
        ['Porozumienie ponad religiami ___ (być) od wielu lat niezwykle ważnym zagadnieniem.', 'jest'],
        ['W dzisiejszym świecie ___ (móc – my) zauważyć zbliżenie między religiami…', 'możemy'],
        ['…ale z drugiej strony wciąż ___ (słyszeć – my) o dyskryminacji ze względu na wyznanie.', 'słyszymy'],
        ['___ (musieć – my) dbać o to, żeby każdy czuł się bezpiecznie.', 'Musimy'],
        ['Każdy ___ (mieć) prawo wyznawać taką religię, jaka jest mu najbliższa.', 'ma'],
      ],
    ),
  ],
);

// ============================================================================
// LEKCJA 20 — Powtórzenie (App Lesson ID 70)
// ============================================================================

export const LESSON_70 = lesson(
  70,
  'Powtórzenie (lekcje 16–19)',
  'Powtórzenie materiału i trening egzaminacyjny (B1)',
  'Idiomy · przymiotniki · zaimki · transformacje · czasy',
  'Lekcja 20 · podręcznik i zeszyt ćwiczeń',
  'lime',
  [
    classifyActivity(
      'p3-l20-e01-classify',
      'H3-L20-E01',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · ćw. 2',
      'Idiomy z lekcji 16–19 — do którego tematu pasują?',
      'Przyporządkuj każdy idiom do odpowiedniej lekcji tematycznej.',
      ['Media (L16)', 'Rzeczy i reklama (L17)', 'Kultura (L18)', 'Religia i wiara (L19)'],
      [
        ['ciągnąć kogoś za język', 'Media (L16)'],
        ['wiadomość z pierwszej ręki', 'Media (L16)'],
        ['owijać w bawełnę', 'Media (L16)'],
        ['przejść do rzeczy', 'Rzeczy i reklama (L17)'],
        ['nabić w butelkę', 'Rzeczy i reklama (L17)'],
        ['wpaść w ucho', 'Rzeczy i reklama (L17)'],
        ['widać rękę artysty', 'Kultura (L18)'],
        ['świecić pustkami', 'Kultura (L18)'],
        ['połknąć bakcyla', 'Kultura (L18)'],
        ['mieć świętą cierpliwość', 'Religia i wiara (L19)'],
        ['wieża Babel', 'Religia i wiara (L19)'],
        ['być alfą i omegą', 'Religia i wiara (L19)'],
      ],
    ),
    matchActivity(
      'p3-l20-e02-match',
      'H3-L20-E02',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · ćw. 2',
      'Idiomy z lekcji 16–19 — dopasuj znaczenie',
      'Połącz znane polskie idiomy z ich znaczeniem.',
      [
        ['ciągnąć kogoś za język', 'nakłaniać kogoś do wyjawienia tajemnicy'],
        ['owijać w bawełnę', 'mówić nie wprost, unikać sedna sprawy'],
        ['przejść do rzeczy', 'zacząć mówić na główny temat'],
        ['nabić kogoś w butelkę', 'oszukać, wprowadzić w błąd'],
        ['świecić pustkami', 'być zupełnie pustym, bez ludzi'],
        ['połknąć bakcyla', 'bardzo się czymś zainteresować, zafascynować'],
        ['mieć świętą cierpliwość', 'być niezwykle cierpliwym i opanowanym'],
        ['być alfą i omegą', 'być największym autorytetem, znać się na wszystkim'],
      ],
    ),
    choiceActivity(
      'p3-l20-e03-choice',
      'H3-L20-E03',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · trening gramatyczny I',
      'Poprawna forma przymiotnika: meble i mieszkanie',
      'Wybierz poprawną formę przymiotnika w tekście o urządzaniu mieszkania.',
      [
        choice('q1', 'Jeśli masz (mała, małe, mały) pokój…', 'mały', ['mała', 'małe', 'mały']),
        choice('q2', '…najlepiej kupić (jasna, jasne, jasny) komplet.', 'jasny', ['jasna', 'jasne', 'jasny']),
        choice('q3', 'Ściany w takim mieszkaniu także nie powinny być (ciemny, ciemna, ciemne).', 'ciemne', ['ciemny', 'ciemna', 'ciemne']),
        choice('q4', 'W sklepach (meblowe, meblowych, meblowymi) jest wiele…', 'meblowych', ['meblowe', 'meblowych', 'meblowymi']),
        choice('q5', '…(ciekawymi, ciekawym, ciekawych) modeli do każdego typu mieszkań.', 'ciekawych', ['ciekawymi', 'ciekawym', 'ciekawych']),
        choice('q6', 'Wybiera się rzeczy nie tylko (modny, modna, modne), ale też na wiele lat.', 'modne', ['modny', 'modna', 'modne']),
        choice('q7', 'Czasami (stary, stare, stara) stół…', 'stary', ['stary', 'stare', 'stara']),
        choice('q8', '…lub (antyczny, antyczna, antyczne) szafa po babci stoją dłużej.', 'antyczna', ['antyczny', 'antyczna', 'antyczne']),
        choice('q9', 'Nikt nie powie: „Mam dokładnie taki sam (brzydki, brzydka, brzydkie) regał jak ty!”.', 'brzydki', ['brzydki', 'brzydka', 'brzydkie']),
        choice('q10', 'Nie zawsze pasują do (nowych, nowym, nowego) mieszkań w bloku.', 'nowych', ['nowych', 'nowym', 'nowego']),
      ],
    ),
    typedActivity(
      'p3-l20-e04-typed',
      'H3-L20-E04',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · trening gramatyczny II',
      'Zaimki względne (który, która, które)',
      'Uzupełnij zdania właściwą formą zaimka względnego „który”.',
      [
        ['To jest ten człowiek, o ___ ci opowiadałem.', 'którym'],
        ['Ludzie, ___ mają zwierzęta, rzadko czują się samotni.', 'którzy'],
        ['Kupiłam książkę, ___ mi polecałaś.', 'którą'],
        ['Znalazłam w internecie informację, ___ potrzebujesz.', 'której'],
        ['Przedszkole, do ___ chodzi mój syn, jest naprawdę dobre.', 'którego'],
      ],
    ),
    typedActivity(
      'p3-l20-e05-typed',
      'H3-L20-E05',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · trening gramatyczny III',
      'Odmiana zaimków osobowych w tekście',
      'Wpisz poprawną formę zaimka osobowego podanego w nawiasie.',
      [
        ['Bolała ___ (on) głowa i miał gorączkę.', 'go'],
        ['Powiedział ___ (my), że musi pójść do lekarza.', 'nam'],
        ['Przed wyjściem poprosił ___ (ja), żebym przyszła…', 'mnie'],
        ['…do ___ (on) do biura.', 'niego'],
        ['Dał ___ (ja) teczkę z dokumentami…', 'mi'],
        ['…i poprosił, żebym ___ (one) przejrzała…', 'je'],
        ['…za ___ (on)…', 'niego'],
        ['…i zrobiła do ___ (one) notatki.', 'nich'],
        ['Zadzwoniłam do Adama i wyjaśniłam ___ (on), dlaczego nie będę mogła przyjść.', 'mu'],
        ['Adam powiedział, że rozumie, ale chyba się na ___ (ja) obraził.', 'mnie'],
      ],
    ),
    typedActivity(
      'p3-l20-e06-typed',
      'H3-L20-E06',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · trening gramatyczny IV',
      'Transformacje zdań — trening egzaminacyjny',
      'Przekształć zdania, wykorzystując słowo podane w nawiasie.',
      [
        ['Do schroniska można dojechać autobusem. (się)', 'Do schroniska dojedzie się autobusem.'],
        ['Tu nie wolno palić. (zabronione)', ['Palenie jest tu zabronione.', 'Tu palenie jest zabronione.']],
        ['Trzeba skręcić w prawo. (nakaz)', 'Nakaz skrętu w prawo.'],
        ['Nie oglądaj tego filmu! (warto)', 'Nie warto oglądać tego filmu.'],
        ['Proszę pana, proszę nie zamykać okna! (niech)', 'Proszę pana, niech pan nie zamyka okna!'],
        ['Robiliśmy to ćwiczenie pół godziny. (trzydzieści)', ['Robiliśmy to ćwiczenie trzydzieści minut.', 'Robiliśmy to ćwiczenie 30 minut.']],
        ['Mam 200 groszy. (dwa)', 'Mam dwa złote.'],
        ['Czekałem na to tydzień. (siedem)', ['Czekałem na to siedem dni.', 'Czekałem na to 7 dni.']],
        ['Proszę, zostaw otwarte drzwi! (nie)', 'Proszę, nie zamykaj drzwi!'],
        ['Proszę, zostawcie zamknięte okno! (nie)', 'Proszę, nie otwierajcie okna!'],
        ['Proszę, zostaw mnie w spokoju! (spokój)', 'Proszę, daj mi spokój!'],
      ],
    ),
    typedActivity(
      'p3-l20-e07-typed',
      'H3-L20-E07',
      'Hurra!!! Po Polsku 3 · Lekcja 20 · trening gramatyczny V',
      '„Dama z łasiczką” — czas teraźniejszy i przeszły',
      'Uzupełnij tekst poprawną formą czasowników podanych w nawiasach.',
      [
        ['Artysta ___ (namalować) go w 1489 roku.', 'namalował'],
        ['Portret ___ (przedstawiać) Cecylię Gallerani, kochankę księcia Ludwika Sforzy…', 'przedstawia'],
        ['…a ___ (znajdować się) w zbiorach Muzeum Książąt Czartoryskich w Krakowie.', 'znajduje się'],
        ['___ (być) jednym z najcenniejszych polskich muzealiów.', 'Jest'],
        ['Zwierzę namalowane na obrazie ___ (mieć) znaczenie symboliczne.', 'ma'],
        ['W momencie pozowania do portretu Cecylia ___ (spodziewać się) dziecka Ludwika…', 'spodziewała się'],
        ['…ale artysta nie ___ (móc) tego namalować realistycznie…', 'mógł'],
        ['…dlatego ___ (zastosować) metaforę w postaci łasiczki.', 'zastosował'],
        ['Nie wolno mu ___ (być) też namalować samego Ludwika Sforzy…', 'było'],
        ['…bo książę ___ (planować) ślub z księżną Beatrice d’Este…', 'planował'],
        ['…z którą ___ (ożenić się) w 1491 r.', 'ożenił się'],
      ],
    ),
  ],
);
