import type { LessonTheory, LessonTheoryId } from './lesson-theory';
import { PART3_THEORY_EN } from './lesson-theory-part3';

// English translation of the lesson theory (source of truth: lesson-theory.ts, Russian).
export const LESSON_THEORY_EN: Record<LessonTheoryId, LessonTheory> = {
  1: {
    coursebookPages: '6–11',
    communication: 'We learn to greet people, say goodbye, introduce ourselves and ask someone\'s name. In formal situations we use polite forms; with friends, informal ones.',
    vocabulary: 'Dzień dobry — good afternoon/hello; cześć — hi/bye; proszę — please; dziękuję — thank you; przepraszam — excuse me/sorry; miło mi — nice to meet you. We review the Polish alphabet and numbers 0–10.',
    grammar: 'For introductions we distinguish: “Mam na imię…” (first name), “Nazywam się…” (full name/surname), and “Jestem…” (name or identity). Use polite Pan/Pani (“Jak się pan/pani nazywa?”) in formal situations and ty (“Jak się nazywasz?”) with friends. It is also important to tell apart Polish digraphs (sz, cz, rz, ch) and diacritic letters (ą, ę, ć, ł, ń, ó, ś, ź, ż).',
    examples: [
      { polish: 'Dzień dobry. Nazywam się Mami Takada.', translation: 'Good afternoon. My name is Mami Takada.' },
      { polish: 'Cześć! Mam na imię Tom.', translation: 'Hi! My name is Tom.' },
    ],
  },
  2: {
    coursebookPages: '12–19',
    communication: 'We introduce ourselves in more detail: we ask where a person is from, where they live and how they are doing.',
    vocabulary: 'Countries and cities, personal details, occupations and hobbies; numbers 11–29. pracować — to work, uczyć się — to study, hobby — hobby, chcieć — to want.',
    grammar: 'Personal pronouns: ja, ty, on/ona/ono, my, wy, oni (men/mixed group) / one (women/things), plus polite panowie, panie, państwo. Forms of być: jestem, jesteś, jest, jesteśmy, jesteście, są; -m, -sz verbs (czytać, mieszkać) take -m, -sz, -Ø, -my, -cie, -ją. Use “żeby + infinitive” for purpose (“Uczę się, żeby studiować”) and “bo” for reason; many nouns for people form gender pairs: student/studentka, Polak/Polka.',
    examples: [
      { polish: 'Jestem z Japonii. Mieszkam w Tokio.', translation: 'I am from Japan. I live in Tokyo.' },
      { polish: 'Pracuję. A ty? Pracujesz?', translation: 'I work. And you? Do you work?' },
      { polish: 'Uczę się polskiego, żeby studiować w Polsce, bo bardzo lubię ten kraj.', translation: 'I am learning Polish to study in Poland, because I really like this country.' },
    ],
  },
  3: {
    coursebookPages: '20–27',
    communication: 'We learn to name people and things, ask “who is this?” and “what is this?”, and describe things with simple adjectives.',
    vocabulary: 'Classroom objects, colours and adjectives: nowy — new, stary — old, dobry — good, zły — bad, duży — big, mały — small.',
    grammar: 'Nouns in the nominative singular (kto? co?) have three genders: masculine (ten, jaki? — noun ending in a consonant, adj. -y/-i), feminine (ta, jaka? — noun in -a/-i, adj. -a), and neuter (to, jakie? — noun in -o/-e/-ę/-um, adj. -e/-ie). The phrase “To jest…” works with all genders: To jest nowy student, nowa książka, nowe mieszkanie.',
    examples: [
      { polish: 'Kto to jest? To jest student.', translation: 'Who is this? This is a student.' },
      { polish: 'Co to jest? To jest nowa książka.', translation: 'What is this? This is a new book.' },
    ],
  },
  4: {
    coursebookPages: '28–33',
    communication: 'We introduce ourselves and others, describe appearance and character, and say what we think.',
    vocabulary: 'Adjectives for describing people and expressions of opinii: wysoki — tall, ciekawy — interesting, tylko — only, trochę — a little, mieć rację — to be right.',
    grammar: 'Verbs of the -ę, -isz/-ysz conjugation: myślę — myślisz — myśli — myślimy — myślą; mówię — mówisz. With languages we use: “mówić po polsku” (adverb po + -u), “znać język polski” (accusative), and “uczyć się języka polskiego” (genitive); distinguish “uczyć” (to teach someone) from “uczyć się” (to learn). Connect clauses with i (and), ale (but), bo (because), and match adjectives to gender (wysoki student, wysoka studentka).',
    examples: [
      { polish: 'Myślę, że to jest nowy student.', translation: 'I think this is a new student.' },
      { polish: 'Jaki jesteś? Jestem wysoki.', translation: 'What are you like? I am tall.' },
      { polish: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.', translation: 'I speak a little Polish and I am learning the Polish language, but it is difficult.' },
    ],
  },
  5: {
    coursebookPages: '34–39',
    communication: 'We talk about profession, age, family and interests.',
    vocabulary: 'Names of professions and family members, hobbies and numbers 20–100. For age, the forms rok, lata and lat are important.',
    grammar: 'After być (for professions and nationalities) and interesować się we use the instrumental case (kim? czym?): masculine/neuter adj. -ym/-im, noun -em/-iem (dobrym studentem, Polakiem), feminine -ą/-ą (dobrą studentką, Polką, muzyką). After “To jest…” we keep the nominative. Age uses “mieć + number + rok/lata/lat”: 1 rok, numbers ending in 2–4 (except 12–14) take lata, and all others take lat.',
    examples: [
      { polish: 'Jestem nauczycielką. Interesuję się muzyką.', translation: 'I am a teacher. I am interested in music.' },
      { polish: 'Mam 24 lata.', translation: 'I am 24 years old.' },
    ],
  },
  6: {
    coursebookPages: '40–45',
    communication: 'We talk about free time, sport and what our loved ones do.',
    vocabulary: 'Basic verbs of activities and sport, names of family members; the expressions nudzić się — to be bored and szukać — to look for.',
    grammar: 'Three present-tense conjugation patterns: -m/-sz (mam — masz), -ę/-esz (piszę — piszesz; -ować verbs take -uję/-ujesz: pracuję — pracujesz), and -ę/-isz/-ysz (lubię — lubisz). Possessives mój/moja/moje and twój/twoja/twoje agree with the noun’s gender. Note the prepositions: “grać w + accusative” for sports/games (w tenisa), but “grać na + locative” for instruments and computers (na gitarze).',
    examples: [
      { polish: 'Co lubisz robić? Lubię czytać.', translation: 'What do you like doing? I like reading.' },
      { polish: 'To jest moja siostra i mój brat.', translation: 'This is my sister and my brother.' },
    ],
  },
  7: {
    coursebookPages: '46–51',
    communication: 'We buy goods, ask about prices, and talk about a shopping list and amounts of money.',
    vocabulary: 'Shops, goods, money, prices and numbers 100–1000; krótki — short, długi — long, drogi — expensive, tani — cheap.',
    grammar: 'Direct objects and nouns after “Proszę…” take the accusative case (kogo? co?). Feminine nouns change -a to -ę and adjectives take -ą (długa lista → długą listę); animate masculine nouns match the genitive (dobry brat → dobrego brata); inanimate masculine and neuter nouns equal the nominative (nowy telefon, dobre pióro). Prices use kosztuje (sg.) / kosztują (pl.) + 1 złoty, 2–4 złote, 5+ złotych.',
    examples: [
      { polish: 'Mam długą listę zakupów.', translation: 'I have a long shopping list.' },
      { polish: 'Kupuję tani chleb i widzę młodszego brata.', translation: 'I buy cheap bread and I see my younger brother.' },
    ],
  },
  8: {
    coursebookPages: '52–57',
    communication: 'We talk about food, preferences and the ingredients of dishes; we ask what something is eaten or drunk with.',
    vocabulary: 'Meals, food, drinks and tableware. Useful expressions: mieć ochotę na — to feel like (having) something, chętnie — gladly.',
    grammar: 'After “z” (with what?) we use the instrumental: singular -ym/-im + -em/-iem (m./n.) and -ą + -ą (f.), and plural adj. -ymi/-imi, noun -ami (z dobrymi pomidorami). Key verbs: jeść (jem, jesz, …, jedzą), pić (piję, pijesz, …, piją), and “woleć + accusative niż + accusative” (wolę kawę niż herbatę). Food names often form adjectives with -owy (pomidor → pomidorowy).',
    examples: [
      { polish: 'Wolę herbatę niż kawę.', translation: 'I prefer tea to coffee.' },
      { polish: 'Jem kanapkę z żółtym serem i pomidorami.', translation: 'I am eating a sandwich with cheese and tomatoes.' },
    ],
  },
  9: {
    coursebookPages: '58–63',
    communication: 'We buy groceries in a supermarket and name fruit, vegetables and other foods.',
    vocabulary: 'Fruit, vegetables, fish and descriptions of food: świeży — fresh, suszony — dried, miękki — soft, twardy — hard.',
    grammar: 'For non-masculine-personal nouns (one: inanimate masculine, feminine, neuter), nominative and accusative plural are identical (to są pomidory / kupuję pomidory). Adjectives take -e (-ie after k, g: świeże, słodkie); masculine and feminine nouns take -y (banany, ryby), -i after k, g (ziemniaki, marchewki), or -e after soft stems and c, cz, sz, rz, ż (owoce, pomarańcze); neuter nouns take -a (jabłka, jajka).',
    examples: [
      { polish: 'To są świeże pomidory.', translation: 'These are fresh tomatoes.' },
      { polish: 'Lubię świeże pomidory i słodkie jabłka.', translation: 'I like fresh tomatoes and sweet apples.' },
    ],
  },
  10: {
    coursebookPages: '64–69',
    communication: 'We book a table, order dishes and drinks, and say what we like or dislike.',
    vocabulary: 'Café and restaurant, dishes and desserts; zamówienie — order, zamawiać — to order, uwielbiać — to adore.',
    grammar: 'After negation (nie jem, nie lubię), the direct object shifts to the genitive case (Dopełniacz): m./n. adj. -ego, noun -a/-u (dobrego sera, czerwonego wina); f. adj. -ej, noun -y/-i (zimnej wody, czarnej kawy). When ordering: “proszę + accusative”, but “dla mnie + nominative”. After z (“with whom?”) personal pronouns take the instrumental: ze mną, z tobą, z nim, z nią, z nami, z wami, z nimi.',
    examples: [
      { polish: 'Zamawiam kawę, ale nie zamawiam deseru.', translation: 'I am ordering coffee, but I am not ordering dessert.' },
      { polish: 'Idę do restauracji z nimi.', translation: 'I am going to the restaurant with them.' },
    ],
  },
  11: {
    coursebookPages: '70–77',
    communication: 'We talk about family, ask whose something is, and describe daily habits.',
    vocabulary: 'Relatives, marital status and frequency of actions: zawsze — always, zwykle — usually, często — often, rzadko — rarely, nigdy — never.',
    grammar: 'Possessive pronouns (czyj? czyja? czyje?) agree with the possessed noun: mój/moja/moje, twój/twoja/twoje, nasz/nasza/nasze, wasz/wasza/wasze, while jego, jej, and ich never change. Adverbs of frequency (zawsze, zwykle, często, rzadko, nigdy) usually precede the verb. Note that “nigdy” always requires double negation in Polish: “nigdy nie + verb”.',
    examples: [
      { polish: 'To jest moja rodzina. Mój brat często do mnie dzwoni.', translation: 'This is my family. My brother often calls me.' },
      { polish: 'Ona nigdy nie pracuje w niedzielę.', translation: 'She never works on Sundays.' },
    ],
  },
  12: {
    coursebookPages: '78–83',
    communication: 'We invite someone somewhere, arrange to meet, and talk about schedules.',
    vocabulary: 'Days of the week and time; ordinal numerals from 1 to 24. godzina — hour, kwadrans — quarter of an hour, umówić się — to arrange to meet.',
    grammar: 'For exact time we use “o + locative” of ordinal numbers (o pierwszej, o drugiej), and informally kwadrans po…, za piętnaście…, and “o wpół do + genitive” (o wpół do ósmej — 7:30). Days of the week take w poniedziałek, we wtorek. Distinguish destination prepositions: “iść do + genitive” (buildings/places: do kina) vs “iść na + accusative” (events: na koncert); invitations: “Masz ochotę…?”, “Może pójdziemy…?”',
    examples: [
      { polish: 'Masz ochotę pójść do kina?', translation: 'Do you feel like going to the cinema?' },
      { polish: 'Spotkajmy się w poniedziałek o ósmej.', translation: 'Let\'s meet on Monday at eight.' },
      { polish: 'W piątek o wpół do ósmej idę do kina, a w sobotę na koncert.', translation: 'On Friday at half past seven I am going to the cinema, and on Saturday to a concert.' },
    ],
  },
  13: {
    coursebookPages: '84–91',
    communication: 'We tell what we did earlier, how we spent the weekend and what happened.',
    vocabulary: 'Free time, trips, phone calls and impressions: mieć zasięg — to have a signal, odpisywać — to reply to a message, pomagać — to help.',
    grammar: 'In the past tense, personal endings (-em/-am, -eś/-aś, -Ø, -śmy, -ście, -Ø) attach to the -ł/-ła/-ło (sg.) and -li (masc. pers.) / -ły (other pl.) stem: robiłem/robiłam, robiliśmy/robiłyśmy. Verbs in -eć (mieć, rozumieć) change e to a everywhere except the -li form: miałem/miała, but mieli; rozumiałem, but rozumieli. Irregular stems: jeść (jadłem/jadłam/jedli) and iść/pójść (szedłem/szłam, poszedłem/poszłam).',
    examples: [
      { polish: 'Wczoraj byłam w kinie i jadłam kolację.', translation: 'Yesterday I was at the cinema and had dinner.' },
      { polish: 'Tom poszedł na spacer, a Mami pomagała Karolinie.', translation: 'Tom went for a walk, and Mami helped Karolina.' },
    ],
  },
  14: {
    coursebookPages: '92–97',
    communication: 'Asking for directions, naming means of transport and explaining how to get somewhere on foot or by vehicle.',
    vocabulary: 'City places and landmarks: skrzyżowanie — crossroads, schody — stairs, światła — traffic lights, blisko — near, daleko — far.',
    grammar: 'The pairs iść/chodzić and jechać/jeździć contrast a single directed movement with habitual or repeated movement: idę teraz, chodzę codziennie; jadę dziś, jeżdżę do pracy. Means of transport take the instrumental case: jechać samochodem, autobusem, taksówką. Accusative/genitive pronouns: widzę go, widzę ją, and after prepositions they take n- (czekam na niego, na nią, na nich; emphatic jego).',
    examples: [
      { polish: 'Idę do kina, ale zwykle chodzę do teatru.', translation: 'I\'m going to the cinema, but I usually go to the theatre.' },
      { polish: 'Dziś jadę tramwajem, a do pracy jeżdżę autobusem.', translation: 'Today I\'m going by tram, and I go to work by bus.' },
    ],
  },
  15: {
    coursebookPages: '98–105',
    communication: 'Buying food by weight and in packages, making requests and sending letters or postcards.',
    vocabulary: 'Measures and packaging: plasterek — slice, kawałek — piece, paczka — pack, puszka — can, karton — carton. The verbs bać się and szukać require the genitive case.',
    grammar: 'Numerals 2, 3, 4 take the nominative plural (dwa kartony), while 5+ and dużo/mało take the genitive plural for both nouns and adjectives (pięć dużych kartonów, dużo jabłek). The genitive is also used after negation and the verbs bać się and szukać. Pronoun forms: nie ma mnie, szukam go, boję się jej, and after prepositions: do ciebie, do niego, do niej, do nich.',
    examples: [
      { polish: 'Poproszę dwa kartony soku i pięć jabłek.', translation: 'Could I have two cartons of juice and five apples, please?' },
      { polish: 'Szukam znaczków i nie mam koperty.', translation: 'I\'m looking for stamps and I don\'t have an envelope.' },
    ],
  },
  16: {
    coursebookPages: '106–111',
    communication: 'Talking about the weather, the seasons, future plans and the forecast.',
    vocabulary: 'Weather and seasons: słonecznie — sunny, pochmurno — cloudy, wiatr — wind, prognoza — forecast, pora roku — season.',
    grammar: 'Adverbs are often formed from adjectives with -o or -e/-ie: szybki → szybko, ładny → ładnie, dobry → dobrze. Seasons take the instrumental (wiosną, latem, jesienią, zimą), while months use w + locative (w styczniu, w maju). The compound future uses będę, będziesz... + infinitive or the -ł/-ła form (especially będę mógł/mogła, będę chciał/chciała, będę musiał/musiała).',
    examples: [
      { polish: 'Jutro będzie zimno, ale będę pracować.', translation: 'Tomorrow it will be cold, but I will be working.' },
      { polish: 'W weekend napiszę list.', translation: 'At the weekend I\'ll write a letter.' },
    ],
  },
  17: {
    coursebookPages: '112–117',
    communication: 'Expressing liking, opinions and emotions, and talking about gifts and other people.',
    vocabulary: 'Appearance, clothes, mood and conversation: podobać się — to be pleasing / to like, plotkować — to gossip, marudny — grumpy.',
    grammar: 'Lubić takes the accusative case: lubię ten sweter. In podobać się, the thing liked is the nominative subject and the person is in the dative: podoba mi się sweter; in the plural: podobają mi się buty. Personal pronouns decline across cases (ja → mnie/mi, on → go/jemu/mu) and take an initial n- after prepositions in the 3rd person: z nim, o niej, dla niego.',
    examples: [
      { polish: 'Lubię tę bluzkę. Podoba mi się jej kolor.', translation: 'I like this blouse. I like its colour.' },
      { polish: 'Podobają mi się te spodnie.', translation: 'I like these trousers.' },
    ],
  },
  18: {
    coursebookPages: '118–123',
    communication: 'Describing a flat, rooms, furniture and where things are located.',
    vocabulary: 'Rooms and housing: kuchnia — kitchen, sypialnia — bedroom, piętro — floor, parter — ground floor, strych — attic, piwnica — basement.',
    grammar: 'The locative case follows w, na, przy, o, and po (w domu, na stole, przy oknie, o mieszkaniu) as well as verbs like myśleć o, marzyć o, podróżować po. Singular endings are -e (with consonant alternations t:ci, d:dzi, r:rz, ł:l — w szafie, na stole), -u after k, g, ch and soft stems (w pokoju, w parku), and -i/-y for soft/hardened feminine stems (w kuchni); plural usually ends in -ach (o studentach).',
    examples: [
      { polish: 'Laptop leży na biurku, a książki są w szafie.', translation: 'The laptop is on the desk, and the books are in the wardrobe.' },
      { polish: 'Rozmawiamy o nowym mieszkaniu.', translation: 'We are talking about the new flat.' },
    ],
  },
  19: {
    coursebookPages: '124–129',
    communication: 'Looking for a flat, agreeing on a rental and describing where things are.',
    vocabulary: 'Moving and housing: przeprowadzać się — to move (house), mieszkanie — flat, zaspać — to oversleep, zdarzać się — to happen.',
    grammar: 'Static prepositions of place govern three cases: na, w, przy + locative (w pokoju, na stole); obok, koło, blisko, na wprost + genitive (obok domu); nad, pod, przed, za, między + instrumental (pod stołem, za szafą). Object position is described with stać, leżeć, and wisieć.',
    examples: [
      { polish: 'Stół stoi przy oknie, a książka leży na stole.', translation: 'The table stands by the window, and the book lies on the table.' },
      { polish: 'Szukam mieszkania obok centrum.', translation: 'I\'m looking for a flat near the centre.' },
    ],
  },
  20: {
    coursebookPages: '130–135',
    communication: 'Planning trips around Poland, describing directions and asking how to get somewhere.',
    vocabulary: 'Geographical directions and sights: północ — north, południe — south, granica — border, zabytek — historic monument, wycieczka — trip/excursion.',
    grammar: 'Prepositions and cases depend on whether you express location (gdzie?) or direction (dokąd?). For cities, countries, and buildings: w + locative → do + genitive (w Krakowie → do Krakowa); for islands and regions: na + locative → na + accusative (na Mazurach → na Mazury); for seas and lakes: nad + instrumental → nad + accusative (nad morzem → nad morze).',
    examples: [
      { polish: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.', translation: 'We are in Kraków, and tomorrow we\'re going to Warsaw.' },
      { polish: 'Hotel leży na północy Polski.', translation: 'The hotel is in the north of Poland.' },
    ],
  },
  21: {
    coursebookPages: '136–143',
    communication: 'Talking about dates, birthdays and biographical events.',
    vocabulary: 'Dates and life events: urodziny — birthday, imieniny — name day, obchodzić — to celebrate, rok — year.',
    grammar: 'Aspect pairs contrast imperfective verbs (process, habit: robiłem) with perfective verbs (completed result: zrobiłem) in the past tense. Dates answering kiedy? use the genitive (piątego lipca), while years use w + locative of the final ordinal and roku (w tysiąc dziewięćset osiemdziesiątym dziewiątym roku).',
    examples: [
      { polish: 'Wczoraj pisałam list.', translation: 'Yesterday I was writing a letter (the process matters).' },
      { polish: 'Wczoraj napisałam list.', translation: 'Yesterday I wrote a letter (there is a result).' },
    ],
  },
  22: {
    coursebookPages: '144–149',
    communication: 'Telling about weekend plans and making arrangements by phone.',
    vocabulary: 'Plans and actions: zostawać — to stay, zająć — to occupy/take, zejść — to go down; we learn to discuss what to do and what to occupy ourselves with.',
    grammar: 'In the future tense, imperfective aspect (będę + infinitive or -ł/-ła: będę czytać) expresses a process or habit, while perfective aspect uses a single conjugated form for a completed result (przeczytam, zrobię, zadzwonię; often formed with a prefix). Motion verbs have specific perfective future stems: iść → pójdę, jechać → pojadę, wyjść → wyjdę, wejść → wejdę.',
    examples: [
      { polish: 'W sobotę będę czytać książkę.', translation: 'On Saturday I\'ll be reading a book.' },
      { polish: 'W niedzielę przeczytam ten artykuł.', translation: 'On Sunday I\'ll read this article.' },
    ],
  },
  23: {
    coursebookPages: '150–157',
    communication: 'Buying clothes, describing things, giving compliments and comparing options.',
    vocabulary: 'Clothes, fabrics, colours and patterns; nosić — to wear, mieć na sobie — to have on.',
    grammar: 'Adjectives form comparatives and superlatives with -szy/-ejszy and naj- (ładny → ładniejszy → najładniejszy), long ones with bardziej/najbardziej, plus key irregulars: dobry → lepszy, zły → gorszy, duży → większy, mały → mniejszy. Comparisons use niż + nominative, od + genitive, and ze + genitive (najgrubszy ze wszystkich). Clothing after nosić and mieć na sobie takes the accusative; also distinguish znać (+ accusative) from wiedzieć (a fact).',
    examples: [
      { polish: 'Ta sukienka jest ładniejsza niż tamta.', translation: 'This dress is prettier than that one.' },
      { polish: 'Mam na sobie czerwoną bluzkę.', translation: 'I\'m wearing a red blouse.' },
    ],
  },
  24: {
    coursebookPages: '158–165',
    communication: 'Communicating at the hairdresser\'s and at a fitness studio, approving or criticising the result.',
    vocabulary: 'Appearance, body parts, haircut and care; pozwolić sobie na — to afford, strzyżenie — haircut.',
    grammar: 'Adverbs (answering jak?, unlike adjectives jaki?) form comparatives and superlatives with -ej/-iej and naj-: szybko → szybciej → najszybciej. Key irregulars: dobrze → lepiej → najlepiej, źle → gorzej, dużo → więcej, mało → mniej. Several body parts have irregular plurals: oko → oczy, ucho → uszy, ręka → ręce.',
    examples: [
      { polish: 'Tutaj jest drożej niż w Londynie.', translation: 'It\'s more expensive here than in London.' },
      { polish: 'Po tej fryzurze wyglądasz najlepiej.', translation: 'You look best with this hairstyle.' },
    ],
  },
  25: {
    coursebookPages: '166–171',
    communication: 'Talking to a doctor or dentist and giving advice.',
    vocabulary: 'Body parts, symptoms and treatment: boleć — to hurt, zażywać — to take (medicine), lekarz — doctor, dentysta — dentist.',
    grammar: 'For advice we use powinien + infinitive, agreeing with the subject in person, gender, and number: powinienem/powinnam, powinieneś/powinnaś, powinien/powinna/powinno, powinniśmy/powinnyśmy, powinni/powinny. The verb boleć agrees in number with the body part, while the person is in the accusative: boli mnie głowa, bolą mnie zęby.',
    examples: [
      { polish: 'Powinieneś odpocząć. Powinnaś iść do lekarza.', translation: 'You should rest. You should go to the doctor.' },
      { polish: 'Boli mnie głowa.', translation: 'I have a headache.' },
    ],
  },
  26: {
    coursebookPages: '172–177',
    communication: 'We ask for a service, report a problem and make a complaint.',
    vocabulary: 'Services and unexpected situations: wypadek — accident, kradzież — theft, pożar — fire, naprawić — to repair, reklamacja — complaint (claim).',
    grammar: 'The conditional (tryb przypuszczający) softens requests and wishes. The particle -by with personal endings (-m, -ś, —, -śmy, -ście) is added to the past tense form: mógłbym/mogłabym, mógłbyś/mogłabyś, mógłby pan/mogłaby pani, chcielibyśmy/chciałybyśmy. For advice, powinien/powinna + infinitive is also used.',
    examples: [
      { polish: 'Czy mógłby pan mi pomóc?', translation: 'Could you help me?' },
      { polish: 'Chciałabym złożyć reklamację.', translation: 'I would like to make a complaint.' },
    ],
  },
  27: {
    coursebookPages: '6–13',
    communication: 'We introduce ourselves in more detail and talk about appearance, personality, interests, family and dreams.',
    vocabulary: 'Appearance, personality traits, marital status, hobbies and free time.',
    grammar: 'The instrumental case (narzędnik: kim? czym?) takes the endings -em (m./n.), -ą (f.), -ami/-mi (pl., e.g. dziećmi), and -ym/-im, -ą, -ymi/-imi for adjectives. It is used after interesować się, zajmować się, kierować, opiekować się (unlike prowadzić + accusative), after prepositions z/ze, przed, nad, pod, za, między, poza, and to express transport or an instrument. Personal pronouns: mną, tobą, nim, nią, nami, wami, nimi.',
    examples: [
      { polish: 'Interesuję się polskim kinem.', translation: 'I am interested in Polish cinema.' },
      { polish: 'Jadę do pracy autobusem.', translation: 'I go to work by bus.' },
    ],
  },
  28: {
    coursebookPages: '14–19',
    communication: 'We describe unusual events and natural disasters and talk about family and biographies.',
    vocabulary: 'Disasters, natural calamities, family events and biographical facts.',
    grammar: 'The genitive case (dopełniacz: kogo? czego?) takes -a/-u (m./n.), -y/-i (f.) in the singular, -ów/-y/-i/zero ending in the plural, and -ego/-ej/-ych (-ich) for adjectives. It is required after negation, prepositions do, od, z, bez, dla, obok, podczas, and verbs szukać, potrzebować, bać się, używać, słuchać. After quantity words (dużo, mało, kilka, wiele; for masc. personal: kilku, wielu, dwóch, trzech), the noun is genitive plural and the verb is 3rd person singular neuter (jest, było, zginęło).',
    examples: [
      { polish: 'Nie mam czasu ani ochoty.', translation: 'I have neither time nor desire.' },
      { polish: 'Boję się burzy.', translation: 'I am afraid of the storm.' },
    ],
  },
  29: {
    coursebookPages: '20–25',
    communication: 'We buy cinema tickets, check the schedule and compare films.',
    vocabulary: 'Cinema, screenings, tickets, genres, reviews and describing a film.',
    grammar: 'We distinguish static prepositions of place (gdzie?: w/na + locative; przed/pod/nad/za/między + instrumental) from dynamic prepositions of direction (dokąd?: do/na + genitive/accusative; skąd?: z/od + genitive). For start and end times we use o/po + locative (o ósmej), przed + instrumental (przed ósmą), na + accusative (na ósmą). Requests and commands are reported with żeby + infinitive or żeby + past tense (żebym, żebyś, żeby, żebyśmy + -ł/-ła/-li), contrasting with że for statements; we also review dative pronouns (mi, ci, mu, jej, nam, wam, im).',
    examples: [
      { polish: 'O której zaczyna się seans?', translation: 'What time does the screening start?' },
      { polish: 'Mami poprosiła Angelę, żeby poszła z nią do kina.', translation: 'Mami asked Angela to go to the cinema with her.' },
    ],
  },
  30: {
    coursebookPages: '26–31',
    communication: 'We give definitions, describe people and name nationalities, professions and sports.',
    vocabulary: 'Nationalities, professions, sports, names of people and objects.',
    grammar: 'Nominative plural of nouns: non-masculine-personal (one) takes -y, -i (after k, g), -e (soft stems), or -a (neuter). Masculine personal (oni) takes -i/-y with stem consonant alternations (t→ci, k→cy, g→dzy, r→rzy: student → studenci, Polak → Polacy), -owie (panowie, profesorowie), or -e (nauczyciele, lekarze); irregulars include ludzie, bracia, księża, dzieci. With numerals 2–4, use dwaj, trzej, czterej + nominative plural and plural verb (dwaj studenci są) or dwóch, trzech, czterech + genitive plural and singular verb (dwóch studentów jest).',
    examples: [
      { polish: 'Polacy mieszkają w Polsce.', translation: 'Poles live in Poland.' },
      { polish: 'Dwaj lekarze pracują w szpitalu.', translation: 'Two doctors work in the hospital.' },
    ],
  },
  31: {
    coursebookPages: '32–39',
    communication: 'We describe character and appearance, give definitions, and formulate and justify an opinion.',
    vocabulary: 'Personality traits, relationships, evaluations and expressions of one\'s own opinion.',
    grammar: 'Masculine personal plural adjectives and pronouns take -i/-y with stem consonant alternations (dobry → dobrzy, miły → mili, młody → młodzi, wysoki → wysocy, drogi → drodzy; ci, moi, nasi, wszyscy), while non-masculine-personal takes -e (dobre, te, moje). Substantivized adjectives (znajomy, bezdomny) decline like adjectives. In definitions we use relative clauses ktoś, kto / coś, co and człowiek, który (-a, -e, -zy), declining który and kto across cases (kogo, komu, z kim, o którym).',
    examples: [
      { polish: 'To są bardzo zdolni studenci, którzy lubią się uczyć.', translation: 'These are very gifted students who like to study.' },
      { polish: 'Moi przyjaciele są cierpliwi.', translation: 'My friends are patient.' },
    ],
  },
  32: {
    coursebookPages: '40–45',
    communication: 'We talk about education, study, computers, experience and plans.',
    vocabulary: 'School, university, computer, internet, subjects and academic degrees.',
    grammar: 'Verbal nouns (rzeczowniki odczasownikowe) are formed with -nie (-anie, -enie: czytać → czytanie, mówić → mówienie) or -cie (pić → picie, myć → mycie) and are always neuter. After prepositions they decline like neuter -e nouns (do czytania, podczas pisania, przed jedzeniem, po przeczytaniu), and their object takes the genitive case (czytanie książek). Negation nie is written together with verbal nouns (niepalenie).',
    examples: [
      { polish: 'Lubię czytanie reportaży.', translation: 'I like reading reportages.' },
      { polish: 'Przed wysłaniem pliku sprawdź tekst.', translation: 'Check the text before sending the file.' },
    ],
  },
  33: {
    coursebookPages: '46–51',
    communication: 'We go through a job interview, talk about work and professional difficulties, and write CVs and letters.',
    vocabulary: 'Employment, positions, types of companies and business correspondence.',
    grammar: 'We consolidate cases and tenses in CV and interview contexts: szukać/potrzebować + genitive (szukam pracy), pracować jako + nominative or w + locative (w firmie), interesować się/zajmować się + instrumental, wysłać CV + instrumental (mailem). We use past and future tenses to describe experience and plans, and form adjectives from nouns with suffixes -owy, -ny, -ący (stres → stresujący, odpowiedzialność → odpowiedzialny).',
    examples: [
      { polish: 'Mam doświadczenie w pracy z klientami.', translation: 'I have experience working with customers.' },
      { polish: 'Czy mogę wysłać CV mailem?', translation: 'May I send my CV by email?' },
    ],
  },
  34: {
    coursebookPages: '52–57',
    communication: 'We conduct interviews and talk about events, origins and memories.',
    vocabulary: 'Origin, family, travel and important events.',
    grammar: 'In the accusative plural, masculine personal equals the genitive (znam dobrych aktorów) while non-masculine-personal equals the nominative (znam ciekawe historie); after prepositions we distinguish accusative (motion: dokąd?) and locative (place: gdzie?). The reflexive possessive pronoun swój/swoja/swoje/swoi refers back to the subject (Alicja kocha swojego męża — her own, vs jej — someone else\'s) and declines like mój. We also use passive adjectival participles in -ny/-ony/-ty (napisany, zrobiony, zamknięty) agreeing with the noun.',
    examples: [
      { polish: 'Pamiętam swoich przyjaciół z dzieciństwa.', translation: 'I remember my childhood friends.' },
      { polish: 'Pamiętam tę historię.', translation: 'I remember this story.' },
    ],
  },
  35: {
    coursebookPages: '58–65',
    communication: 'We give instructions, formulate prohibitions and prepare for a trip.',
    vocabulary: 'Trips, packing luggage, camping, the airport and road signs.',
    grammar: 'The 2nd-person singular imperative (tryb rozkazujący) is formed from the present stem (conj. I–II: pisz!, chodź!, mów!, or -ij/-yj after consonant clusters: zamknij!, weź!; conj. III -am/-em: add -j: czytaj!, kupuj!), with -my/-cie for plural and niech + 3rd person for polite/indirect commands (niech pan/pani sprawdzi!). Rules, advice and prohibitions use impersonal constructions + infinitive: trzeba, należy, powinno się, można, wolno, nie wolno, warto. Requests are reported with żeby + past tense.',
    examples: [
      { polish: 'Spakuj paszport i bilet.', translation: 'Pack your passport and ticket.' },
      { polish: 'Nie wolno tu palić.', translation: 'Smoking is not allowed here.' },
    ],
  },
  36: {
    coursebookPages: '66–71',
    communication: 'We ask for information, learn about Polish sights and write messages.',
    vocabulary: 'Cities and tourist places, letters, emails and text messages.',
    grammar: 'The locative case (miejscownik: o kim? o czym?, after w, na, o, po, przy) takes -e with consonant alternations (k→c, g→dz, r→rz, t→ci, d→dzi, ł→l, ch→sz: w Polsce, w szafie), -u (m./n. after k, g, ch and soft stems: w Gdańsku, w domu), and -i/-y (f. soft stems: w kuchni) in the singular, and -ach in the plural. The vocative (wołacz) singular matches the locative for masculine (panie profesorze, Piotrze; -o for m. nouns in -a: kolego!), takes -o (Anno, Ewo), -u for diminutives (Ewciu, Kasiu), or -i (pani!) for feminine, and equals the nominative in the plural (Drodzy panowie!).',
    examples: [
      { polish: 'Co warto zobaczyć w Gdańsku?', translation: 'What is worth seeing in Gdańsk?' },
      { polish: 'Droga Anno, dziękuję za wiadomość.', translation: 'Dear Anna, thank you for your message.' },
    ],
  },
  37: {
    coursebookPages: '72–77',
    communication: 'We say where and by what means we travel, and use set expressions.',
    vocabulary: 'Tourism, travel, directions and idioms with verbs of motion (e.g. with wyjść).',
    grammar: 'We distinguish unidirectional (iść, jechać, lecieć, płynąć) and multidirectional (chodzić, jeździć, latać, pływać) verbs of motion. Adding a prefix (przy-, wy-, w-/we-, prze-, od-, do-, pod-, roz-) makes iść/jechać-type verbs perfective (przyjść, wyjść, wejść, wyjechać) and chodzić/jeździć-type verbs imperfective (przychodzić, wychodzić, wchodzić, wyjeżdżać). Watch the irregular past tense of iść and its compounds: szedł/szła/szli, poszedł/poszła, wszedł/weszła, wyszedł/wyszła.',
    examples: [
      { polish: 'Codziennie jeżdżę do pracy tramwajem.', translation: 'Every day I go to work by tram.' },
      { polish: 'Wczoraj wyszliśmy z domu wcześnie.', translation: 'Yesterday we left home early.' },
    ],
  },
  38: {
    coursebookPages: '78–83',
    communication: 'Asking for directions, discussing traffic rules and expressing dissatisfaction.',
    vocabulary: 'Road traffic, transport, petrol stations and landmarks.',
    grammar: 'We distinguish multi-directional (habitual), uni-directional (in progress) and perfective verbs of motion: chodzić / iść / pójść, jeździć / jechać / pojechać, pływać / płynąć / popłynąć, latać / lecieć / polecieć (future: pojadę, popłynę, polecę or będę jeździć/pływać/latać). For transport we use prefixed verbs with prepositions: wsiąść do (+ Gen.), wysiąść z (+ Gen.), przesiąść się na (+ Acc.), dojechać do (+ Gen.). We also contrast siadać (taking a seat), siedzieć (being seated) and usiąść / siąść (perfective).',
    examples: [
      { polish: 'Jak dojadę na dworzec?', translation: 'How do I get to the station?' },
      { polish: 'Proszę jechać prosto i skręcić w lewo.', translation: 'Drive straight ahead and turn left.' },
    ],
  },
  39: {
    coursebookPages: '84–91',
    communication: 'Talking about difficult life situations, relationships and who needs what.',
    vocabulary: 'Life events, difficulties, relationships, volunteering and people\'s reactions.',
    grammar: 'In the dative singular (komu? czemu?), masculine nouns take -owi (przyjacielowi, with short exceptions like bratu, panu, ojcu, psu), neuter nouns take -u (dziecku, życiu), and feminine nouns take -e with stem alternations (matce, kobiecie, Annie) or -i/-y (pani, Zofii, pracy). Adjectives take -emu (masc./neut.) and -ej (fem.). The dative is used after verbs (pomagać, ufać, dziękować, szkodzić, kibicować, zazdrościć, wierzyć), in impersonal state expressions (jest mi zimno) and with the prepositions dzięki, wbrew, przeciw(ko).',
    examples: [
      { polish: 'Przyjaciel pomógł mi w trudnej sytuacji.', translation: 'A friend helped me in a difficult situation.' },
      { polish: 'Dziecku jest zimno.', translation: 'The child is cold.' },
    ],
  },
  40: {
    coursebookPages: '92–99',
    communication: 'Talking about All Souls\' Day traditions and events in Poland\'s post-war history.',
    vocabulary: 'Polish traditions, cemeteries, remembrance, historical events, public protests and family memories.',
    grammar: 'The reflexive pronoun się / siebie (no nominative; Gen./Acc. siebie/się, Dat./Loc. sobie, Inst. sobą) refers back to the clause subject in any person or number (Adam myśli o sobie = about himself vs. o nim = about someone else). With personal pronouns after prepositions, we use full forms and n- forms (o mnie, dla ciebie, do niego, z nią, o nich). We also review prepositional expressions (wobec, wbrew, ze względu na, podczas) and the imperative mood.',
    examples: [
      { polish: 'Wspominamy tych, którzy odeszli.', translation: 'We remember those who have passed away.' },
      { polish: 'Zadbaj o siebie.', translation: 'Take care of yourself.' },
    ],
  },
  41: {
    coursebookPages: '100–105',
    communication: 'Talking about holiday traditions and history, describing how holidays are celebrated.',
    vocabulary: 'Polish holidays, customs, holiday dishes, dates and seasonal expressions.',
    grammar: 'To describe general customs and past events we use impersonal forms: 3rd person singular + się in the present, past and future (obchodzi się, obchodziło się, będzie się obchodzić), as well as past impersonal forms in -no / -to (zorganizowano, podpisano, zjedzono, wypito). We also review dates in the genitive (1 stycznia, w 2011 roku) and the imperative mood in recipes (pokrój, dodaj, gotuj).',
    examples: [
      { polish: 'W Wigilię dzielimy się opłatkiem.', translation: 'On Christmas Eve we share the opłatek wafer.' },
      { polish: 'W Polsce święta obchodzi się rodzinnie.', translation: 'In Poland, holidays are celebrated with the family.' },
    ],
  },
  42: {
    coursebookPages: '106–111',
    communication: 'Describing adventures and the sequence of events in time.',
    vocabulary: 'Adventures, sailing, mountains, memories and expressions of time.',
    grammar: 'We link events in time using conjunctions and time expressions for anteriority (zanim, przedtem, wcześniej, przed + Inst.), simultaneity (kiedy, gdy, podczas + Gen., w czasie + Gen., w międzyczasie, równocześnie) and sequence (po tym jak, potem, następnie, w końcu, dopóki, po + Loc.). We also practise past-tense stem alternations in -ść/-źć verbs (usiąść → usiadłem/usiedliśmy, upaść → upadłem, trząść się → trząsłem się/trzęsłam się/trzęśliśmy się) and the imperative.',
    examples: [
      { polish: 'Zanim wyszliśmy, sprawdziliśmy mapę.', translation: 'Before we left, we checked the map.' },
      { polish: 'Kiedy wróciłam, wszyscy już spali.', translation: 'When I came back, everyone was already asleep.' },
    ],
  },
  43: {
    coursebookPages: '112–119',
    communication: 'Talking about Polish history, politics and society.',
    vocabulary: 'History, the state, society and events of the past.',
    grammar: 'In the past tense, the imperfective aspect expresses an ongoing process or habit (często, zazwyczaj, dawniej, cały dzień), while the perfective expresses a single completed action or result (nagle, wreszcie, raz); note suppletive pairs (mówić / powiedzieć, brać / wziąć, widzieć / zobaczyć). In the imperative, affirmative commands typically take the perfective aspect (Przeczytaj!, Powiedz!), whereas negated prohibitions with nie normally take the imperfective aspect (Nie mów!, Nie czytaj!).',
    examples: [
      { polish: 'Przeczytaj artykuł i opowiedz, co się wydarzyło.', translation: 'Read the article and tell me what happened.' },
      { polish: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.', translation: 'When he lived in Poland, he often visited museums.' },
    ],
  },
  44: {
    coursebookPages: '120–125',
    communication: 'Talking about future plans, animals and nature.',
    vocabulary: 'Animals, pets, nature and set expressions.',
    grammar: 'Neuter nouns in -ę like zwierzę (kurczę, szczenię, imię) expand their stem when declined: -ci-/-ni- in the singular (zwierzęcia, zwierzęciu, zwierzęciem; imienia) and -t-/-n- in the plural (zwierzęta, Gen. zwierząt, zwierzętom, zwierzętami; imiona, imion). We contrast the pronouns wszyscy / wszystkie, każdy / każda / każde, cały / cała / całe and żaden / żadna / żadne (including nie wszyscy, nie każdy). We also review the future tense, dates and numeral government (2–4 + Nom. pl., 5+ + Gen. pl.).',
    examples: [
      { polish: 'Zaopiekuję się zwierzęciem sąsiadów.', translation: 'I will look after the neighbours\' pet.' },
      { polish: 'W przyszłym roku pojedziemy nad morze.', translation: 'Next year we will go to the seaside.' },
    ],
  },
  45: {
    coursebookPages: '126–131',
    communication: 'Discussing ecology, habits and the possible consequences of our decisions.',
    vocabulary: 'Agritourism, nature protection, farming and eco-friendly habits.',
    grammar: 'Real conditions are built with jeżeli / jeśli …, to … (present or future tense). For unreal conditions, hypotheses, wishes and polite requests we use the conditional mood (tryb warunkowy): 3rd-person past form + particle -bym, -byś, -by, -byśmy, -byście, -by (chciałabym, mógłbyś, mielibyśmy). In conditional clauses the particle attaches to gdy-: gdyby…, to… (Gdybym wygrał, kupiłbym dom).',
    examples: [
      { polish: 'Jeżeli będziemy segregować śmieci, ograniczymy ich ilość.', translation: 'If we sort our rubbish, we will reduce its amount.' },
      { polish: 'Chętnie mieszkałabym na wsi.', translation: 'I would gladly live in the countryside.' },
    ],
  },
  46: {
    coursebookPages: '132–139',
    communication: 'Comparing products, discussing purchases and making a complaint.',
    vocabulary: 'Household appliances, shops, purchases, warranty and returning goods.',
    grammar: 'We build complex sentences with relative and interrogative connectors (który, co, gdzie, skąd, dlaczego, jak długo, ile, czy, że, żeby) and check verb case government (obejść się bez + Gen., unikać + Gen., troszczyć się o + Acc.). The particle byle / byleby expresses: 1) a minimum condition or wish (Byleby rachunek był czytelny, byle do wiosny), 2) indifference or poor quality (byle co, byle jaki, byle jak, byle gdzie, byle kto), while negated nie byle co / nie byle kto means something/someone special.',
    examples: [
      { polish: 'Chcę oddać blender, który zepsuł się po tygodniu.', translation: 'I want to return a blender that broke after a week.' },
      { polish: 'Byleby rachunek był czytelny.', translation: 'As long as the receipt is legible.' },
    ],
  },
  47: {
    coursebookPages: '140–145',
    communication: 'Discussing cinema and theatre, expressing emotions and taking part in a discussion.',
    vocabulary: 'Films, plays, actors, online piracy, impressions and emotions.',
    grammar: 'Passive adjectival participles are formed with the suffixes -ny (napisany, zagrany), -ony (zrobiony, wyreżyserowany, nagrodzony) and -ty (zajęty, przyjęty, pobity, otwarty) and agree in gender, number and case (masc. pers. pl.: zaproszeni, nagrodzeni). In the passive voice, być combines with both imperfective and perfective participles (jest grany, był nagradzany), whereas zostać takes only perfective participles for a single completed event (został wyreżyserowany); the agent is introduced by przez + Acc.',
    examples: [
      { polish: 'Ten film został wyreżyserowany przez znanego reżysera.', translation: 'This film was directed by a well-known director.' },
      { polish: 'Spektakl jest grany w każdy piątek.', translation: 'The play is performed every Friday.' },
    ],
  },
  48: {
    coursebookPages: '146–151',
    communication: 'Talking about art and exhibitions, expressing admiration and critical opinion.',
    vocabulary: 'Painting, photography, museums, exhibitions and vernissages.',
    grammar: 'Neuter nouns ending in -um (muzeum, akwarium, archiwum, centrum, liceum, stypendium) are indeclinable in the singular — they keep -um in every case (do muzeum, w muzeum, z muzeum), while accompanying adjectives and pronouns still decline (w nowym muzeum, do tego muzeum). In the plural, they drop -um and decline like regular neuter nouns: muzea, Gen. muzeów, Dat. muzeom, Inst. muzeami, Loc. w muzeach.',
    examples: [
      { polish: 'W muzeum oglądaliśmy niezwykłe akwarium.', translation: 'In the museum we looked at an unusual aquarium.' },
      { polish: 'Ta wystawa zrobiła na mnie ogromne wrażenie.', translation: 'This exhibition made a huge impression on me.' },
    ],
  },
  49: {
    coursebookPages: '152–157',
    communication: 'Reviewing the course and getting to know the format of Polish language certificate exams.',
    vocabulary: 'Exam instructions, assessment, accuracy, fluency, idioms and expressing opinions.',
    grammar: 'We consolidate all 7 cases (including verbal nouns in -anie/-enie/-cie used in exam tasks: rozumienie, czytanie, pisanie, mówienie) and personal pronoun forms (mnie/mi, go/niego, jej/niej, ich/nich). We also review the verb system (tenses, aspect, imperative, conditional and passive voice) and apply it in spoken and written exam tasks.',
    examples: [
      { polish: 'Proszę przeczytać tekst i odpowiedzieć na pytania.', translation: 'Please read the text and answer the questions.' },
      { polish: 'Moim zdaniem odpowiedź jest poprawna.', translation: 'In my opinion, the answer is correct.' },
    ],
  },
  ...PART3_THEORY_EN,
};
