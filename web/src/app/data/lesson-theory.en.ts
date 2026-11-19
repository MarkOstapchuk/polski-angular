import type { LessonTheory, LessonTheoryId } from './lesson-theory';

// English translation of the lesson theory (source of truth: lesson-theory.ts, Russian).
export const LESSON_THEORY_EN: Record<LessonTheoryId, LessonTheory> = {
  1: {
    coursebookPages: '6–11',
    communication: 'We learn to greet people, say goodbye, introduce ourselves and ask someone\'s name. In formal situations we use polite forms; with friends, informal ones.',
    vocabulary: 'Dzień dobry — good afternoon/hello; cześć — hi/bye; proszę — please; dziękuję — thank you; przepraszam — excuse me/sorry; miło mi — nice to meet you. We review the Polish alphabet and numbers 0–10.',
    grammar: 'For introductions we memorise two fixed constructions: “Nazywam się…” and “Mam na imię…”. At this stage it is also important to tell apart Polish letter combinations, for example sz, cz, rz and ch.',
    examples: [
      { polish: 'Dzień dobry. Nazywam się Mami Takada.', translation: 'Good afternoon. My name is Mami Takada.' },
      { polish: 'Cześć! Mam na imię Tom.', translation: 'Hi! My name is Tom.' },
    ],
  },
  2: {
    coursebookPages: '12–19',
    communication: 'We introduce ourselves in more detail: we ask where a person is from, where they live and how they are doing.',
    vocabulary: 'Countries and cities, personal details, occupations and hobbies; numbers 11–29. pracować — to work, uczyć się — to study, hobby — hobby, chcieć — to want.',
    grammar: 'Personal pronouns: ja, ty, on/ona/ono, my, wy, oni/one. Forms of być: jestem, jesteś, jest, jesteśmy, jesteście, są. In many present-tense verbs the forms for ja and ty end in -m and -sz.',
    examples: [
      { polish: 'Jestem z Japonii. Mieszkam w Tokio.', translation: 'I am from Japan. I live in Tokyo.' },
      { polish: 'Pracuję. A ty? Pracujesz?', translation: 'I work. And you? Do you work?' },
    ],
  },
  3: {
    coursebookPages: '20–27',
    communication: 'We learn to name people and things, ask “who is this?” and “what is this?”, and describe things with simple adjectives.',
    vocabulary: 'Classroom objects, colours and adjectives: nowy — new, stary — old, dobry — good, zły — bad, duży — big, mały — small.',
    grammar: 'Nouns have gender. Before them we use ten with masculine, ta with feminine and to with neuter. The adjective agrees with the noun in gender: nowy student, nowa książka, nowe mieszkanie.',
    examples: [
      { polish: 'Kto to jest? To jest student.', translation: 'Who is this? This is a student.' },
      { polish: 'Co to jest? To jest nowa książka.', translation: 'What is this? This is a new book.' },
    ],
  },
  4: {
    coursebookPages: '28–33',
    communication: 'We introduce ourselves and others, describe appearance and character, and say what we think.',
    vocabulary: 'Adjectives for describing people and expressions of opinii: wysoki — tall, ciekawy — interesting, tylko — only, trochę — a little, mieć rację — to be right.',
    grammar: 'Some verbs have the ending -ę in the ja form and -isz or -ysz in the ty form: myślę — myślisz, mówię — mówisz. Adjectives change by gender: wysoki student, wysoka studentka.',
    examples: [
      { polish: 'Myślę, że to jest nowy student.', translation: 'I think this is a new student.' },
      { polish: 'Jaki jesteś? Jestem wysoki.', translation: 'What are you like? I am tall.' },
    ],
  },
  5: {
    coursebookPages: '34–39',
    communication: 'We talk about profession, age, family and interests.',
    vocabulary: 'Names of professions and family members, hobbies and numbers 20–100. For age, the forms rok, lata and lat are important.',
    grammar: 'After być meaning a profession and after interesować się the instrumental case is used: studentem, nauczycielką, muzyką. Age is expressed with the construction “mieć + number + lata/lat”.',
    examples: [
      { polish: 'Jestem nauczycielką. Interesuję się muzyką.', translation: 'I am a teacher. I am interested in music.' },
      { polish: 'Mam 24 lata.', translation: 'I am 24 years old.' },
    ],
  },
  6: {
    coursebookPages: '40–45',
    communication: 'We talk about free time, sport and what our loved ones do.',
    vocabulary: 'Basic verbs of activities and sport, names of family members; the expressions nudzić się — to be bored and szukać — to look for.',
    grammar: 'In the present tense the following patterns occur: ja -m / ty -sz (mam — masz), ja -ę / ty -esz (piszę — piszesz), ja -ę / ty -isz or -ysz (lubię — lubisz). The possessives mój and twój agree with the noun: mój brat, moja siostra, moje hobby.',
    examples: [
      { polish: 'Co lubisz robić? Lubię czytać.', translation: 'What do you like doing? I like reading.' },
      { polish: 'To jest moja siostra i mój brat.', translation: 'This is my sister and my brother.' },
    ],
  },
  7: {
    coursebookPages: '46–51',
    communication: 'We buy goods, ask about prices, and talk about a shopping list and amounts of money.',
    vocabulary: 'Shops, goods, money, prices and numbers 100–1000; krótki — short, długi — long, drogi — expensive, tani — cheap.',
    grammar: 'The direct object is often put in the accusative case. In feminine words -a changes to -ę, and the adjective takes -ą: długa lista → mam długą listę. For animate masculine words the form usually matches the genitive: dobry brat → widzę dobrego brata.',
    examples: [
      { polish: 'Mam długą listę zakupów.', translation: 'I have a long shopping list.' },
      { polish: 'Kupuję tani chleb i widzę młodszego brata.', translation: 'I buy cheap bread and I see my younger brother.' },
    ],
  },
  8: {
    coursebookPages: '52–57',
    communication: 'We talk about food, preferences and the ingredients of dishes; we ask what something is eaten or drunk with.',
    vocabulary: 'Meals, food, drinks and tableware. Useful expressions: mieć ochotę na — to feel like (having) something, chętnie — gladly.',
    grammar: 'After z meaning “with what?” we use the instrumental case: z serem, z pomidorami. The adjective agrees with the noun: z żółtym serem, z dobrymi pomidorami. Adjectives are formed from names of foods, often with the ending -owy: pomidor → pomidorowy.',
    examples: [
      { polish: 'Wolę herbatę niż kawę.', translation: 'I prefer tea to coffee.' },
      { polish: 'Jem kanapkę z żółtym serem i pomidorami.', translation: 'I am eating a sandwich with cheese and tomatoes.' },
    ],
  },
  9: {
    coursebookPages: '58–63',
    communication: 'We buy groceries in a supermarket and name fruit, vegetables and other foods.',
    vocabulary: 'Fruit, vegetables, fish and descriptions of food: świeży — fresh, suszony — dried, miękki — soft, twardy — hard.',
    grammar: 'For most non-masculine-personal words the nominative and accusative plural forms are the same. That is why we say the same thing in “these are tomatoes” and “I am buying tomatoes”.',
    examples: [
      { polish: 'To są świeże pomidory.', translation: 'These are fresh tomatoes.' },
      { polish: 'Lubię świeże pomidory i słodkie jabłka.', translation: 'I like fresh tomatoes and sweet apples.' },
    ],
  },
  10: {
    coursebookPages: '64–69',
    communication: 'We book a table, order dishes and drinks, and say what we like or dislike.',
    vocabulary: 'Café and restaurant, dishes and desserts; zamówienie — order, zamawiać — to order, uwielbiać — to adore.',
    grammar: 'After negation the direct object usually changes to the genitive case: jem zupę → nie jem zupy. After z meaning “together with whom?” the personal pronoun is put in the instrumental: ze mną, z tobą, z nim.',
    examples: [
      { polish: 'Zamawiam kawę, ale nie zamawiam deseru.', translation: 'I am ordering coffee, but I am not ordering dessert.' },
      { polish: 'Idę do restauracji z nimi.', translation: 'I am going to the restaurant with them.' },
    ],
  },
  11: {
    coursebookPages: '70–77',
    communication: 'We talk about family, ask whose something is, and describe daily habits.',
    vocabulary: 'Relatives, marital status and frequency of actions: zawsze — always, zwykle — usually, często — often, rzadko — rarely, nigdy — never.',
    grammar: 'Possessive pronouns agree with the object: mój brat, moja siostra, moje dziecko. His/her/their — jego, jej, ich — do not change with the gender of the object. Adverbs of frequency usually stand next to the verb.',
    examples: [
      { polish: 'To jest moja rodzina. Mój brat często do mnie dzwoni.', translation: 'This is my family. My brother often calls me.' },
      { polish: 'Ona nigdy nie pracuje w niedzielę.', translation: 'She never works on Sundays.' },
    ],
  },
  12: {
    coursebookPages: '78–83',
    communication: 'We invite someone somewhere, arrange to meet, and talk about schedules.',
    vocabulary: 'Days of the week and time; ordinal numerals from 1 to 24. godzina — hour, kwadrans — quarter of an hour, umówić się — to arrange to meet.',
    grammar: 'For exact time we use ordinal numerals in the required form: o pierwszej, o drugiej. In expressions with “on” the days of the week take the form w poniedziałek, we wtorek. An invitation can begin with “Masz ochotę…?” or “Może pójdziemy…?”',
    examples: [
      { polish: 'Masz ochotę pójść do kina?', translation: 'Do you feel like going to the cinema?' },
      { polish: 'Spotkajmy się w poniedziałek o ósmej.', translation: 'Let\'s meet on Monday at eight.' },
    ],
  },
  13: {
    coursebookPages: '84–91',
    communication: 'We tell what we did earlier, how we spent the weekend and what happened.',
    vocabulary: 'Free time, trips, phone calls and impressions: mieć zasięg — to have a signal, odpisywać — to reply to a message, pomagać — to help.',
    grammar: 'In the past tense the form depends on gender and number: męski -ł, żeński -ła, nijaki -ło, plural -li/-ły. The verbs jeść and iść have special stems: jadłem/jadłam, poszedłem/poszłam.',
    examples: [
      { polish: 'Wczoraj byłam w kinie i jadłam kolację.', translation: 'Yesterday I was at the cinema and had dinner.' },
      { polish: 'Tom poszedł na spacer, a Mami pomagała Karolinie.', translation: 'Tom went for a walk, and Mami helped Karolina.' },
    ],
  },
  14: {
    coursebookPages: '92–97',
    communication: 'Asking for directions, naming means of transport and explaining how to get somewhere on foot or by vehicle.',
    vocabulary: 'City places and landmarks: skrzyżowanie — crossroads, schody — stairs, światła — traffic lights, blisko — near, daleko — far.',
    grammar: 'The pairs iść/chodzić and jechać/jeździć differ in that one expresses a single movement in one direction and the other habitual or repeated movement: idę teraz, chodzę codziennie; jadę dziś, jeżdżę do pracy. Accusative pronouns: widzę go, widzę ją.',
    examples: [
      { polish: 'Idę do kina, ale zwykle chodzę do teatru.', translation: 'I\'m going to the cinema, but I usually go to the theatre.' },
      { polish: 'Dziś jadę tramwajem, a do pracy jeżdżę autobusem.', translation: 'Today I\'m going by tram, and I go to work by bus.' },
    ],
  },
  15: {
    coursebookPages: '98–105',
    communication: 'Buying food by weight and in packages, making requests and sending letters or postcards.',
    vocabulary: 'Measures and packaging: plasterek — slice, kawałek — piece, paczka — pack, puszka — can, karton — carton. The verbs bać się and szukać require the genitive case.',
    grammar: 'Quantity affects the form of the noun: dwa kartony, pięć kartonów, dużo jabłek; the adjective also goes into the genitive plural: pięć dużych kartonów. The genitive is also used after negation and after the verbs bać się, szukać. Pronoun forms: nie ma mnie, szukam go, boję się jej.',
    examples: [
      { polish: 'Poproszę dwa kartony soku i pięć jabłek.', translation: 'Could I have two cartons of juice and five apples, please?' },
      { polish: 'Szukam znaczków i nie mam koperty.', translation: 'I\'m looking for stamps and I don\'t have an envelope.' },
    ],
  },
  16: {
    coursebookPages: '106–111',
    communication: 'Talking about the weather, the seasons, future plans and the forecast.',
    vocabulary: 'Weather and seasons: słonecznie — sunny, pochmurno — cloudy, wiatr — wind, prognoza — forecast, pora roku — season.',
    grammar: 'Many adverbs are formed from adjectives: szybki → szybko, ładny → ładnie. For an unfinished action in the future we use będę + infinitive: będę pracować. A perfective verb often forms the simple future with a single form: zrobię.',
    examples: [
      { polish: 'Jutro będzie zimno, ale będę pracować.', translation: 'Tomorrow it will be cold, but I will be working.' },
      { polish: 'W weekend napiszę list.', translation: 'At the weekend I\'ll write a letter.' },
    ],
  },
  17: {
    coursebookPages: '112–117',
    communication: 'Expressing liking, opinions and emotions, and talking about gifts and other people.',
    vocabulary: 'Appearance, clothes, mood and conversation: podobać się — to be pleasing / to like, plotkować — to gossip, marudny — grumpy.',
    grammar: 'Lubić requires the accusative case: lubię ten sweter. In the podobać się construction, the thing that is liked is the subject, and the person is put in the dative case: podoba mi się sweter; in the plural — podobają mi się buty. Pronouns change by case: ja → mnie/mi, on → go/jemu/mu.',
    examples: [
      { polish: 'Lubię tę bluzkę. Podoba mi się jej kolor.', translation: 'I like this blouse. I like its colour.' },
      { polish: 'Podobają mi się te spodnie.', translation: 'I like these trousers.' },
    ],
  },
  18: {
    coursebookPages: '118–123',
    communication: 'Describing a flat, rooms, furniture and where things are located.',
    vocabulary: 'Rooms and housing: kuchnia — kitchen, sypialnia — bedroom, piętro — floor, parter — ground floor, strych — attic, piwnica — basement.',
    grammar: 'After w, na, przy, o and po, the locative case is used for place or topic: w domu, na stole, przy oknie, o mieszkaniu. In the singular the endings depend on gender; in the plural -ach is common, for example o studentach.',
    examples: [
      { polish: 'Laptop leży na biurku, a książki są w szafie.', translation: 'The laptop is on the desk, and the books are in the wardrobe.' },
      { polish: 'Rozmawiamy o nowym mieszkaniu.', translation: 'We are talking about the new flat.' },
    ],
  },
  19: {
    coursebookPages: '124–129',
    communication: 'Looking for a flat, agreeing on a rental and describing where things are.',
    vocabulary: 'Moving and housing: przeprowadzać się — to move (house), mieszkanie — flat, zaspać — to oversleep, zdarzać się — to happen.',
    grammar: 'Prepositions of place govern different cases. For position inside or on a surface, w/na + locative is often used: w pokoju, na stole. For “next to” — obok + genitive: obok domu. We describe the position of an object with the verbs stać, leżeć, wisieć.',
    examples: [
      { polish: 'Stół stoi przy oknie, a książka leży na stole.', translation: 'The table stands by the window, and the book lies on the table.' },
      { polish: 'Szukam mieszkania obok centrum.', translation: 'I\'m looking for a flat near the centre.' },
    ],
  },
  20: {
    coursebookPages: '130–135',
    communication: 'Planning trips around Poland, describing directions and asking how to get somewhere.',
    vocabulary: 'Geographical directions and sights: północ — north, południe — south, granica — border, zabytek — historic monument, wycieczka — trip/excursion.',
    grammar: 'The case after a preposition depends on the meaning: place without movement usually requires the locative (w Krakowie), direction requires movement forms (do Krakowa, na Mazury). We compare “where?” and “where to?” together with the appropriate preposition.',
    examples: [
      { polish: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.', translation: 'We are in Kraków, and tomorrow we\'re going to Warsaw.' },
      { polish: 'Hotel leży na północy Polski.', translation: 'The hotel is in the north of Poland.' },
    ],
  },
  21: {
    coursebookPages: '136–143',
    communication: 'Talking about dates, birthdays and biographical events.',
    vocabulary: 'Dates and life events: urodziny — birthday, imieniny — name day, obchodzić — to celebrate, rok — year.',
    grammar: 'Aspect pairs combine an imperfective and a perfective verb. The imperfective aspect shows a process, habit or repetition; the perfective shows a completed event or result. In the past tense, aspect helps clarify whether the action was completed.',
    examples: [
      { polish: 'Wczoraj pisałam list.', translation: 'Yesterday I was writing a letter (the process matters).' },
      { polish: 'Wczoraj napisałam list.', translation: 'Yesterday I wrote a letter (there is a result).' },
    ],
  },
  22: {
    coursebookPages: '144–149',
    communication: 'Telling about weekend plans and making arrangements by phone.',
    vocabulary: 'Plans and actions: zostawać — to stay, zająć — to occupy/take, zejść — to go down; we learn to discuss what to do and what to occupy ourselves with.',
    grammar: 'In the future, the aspect of the verb shows how we view the action. For a process or repetition: będę + infinitive (będę czytać). For an expected completed result: the perfective form (przeczytam).',
    examples: [
      { polish: 'W sobotę będę czytać książkę.', translation: 'On Saturday I\'ll be reading a book.' },
      { polish: 'W niedzielę przeczytam ten artykuł.', translation: 'On Sunday I\'ll read this article.' },
    ],
  },
  23: {
    coursebookPages: '150–157',
    communication: 'Buying clothes, describing things, giving compliments and comparing options.',
    vocabulary: 'Clothes, fabrics, colours and patterns; nosić — to wear, mieć na sobie — to have on.',
    grammar: 'We compare adjectives using the comparative and superlative: ładny → ładniejszy → najładniejszy. After the comparative we often use niż — “than”. For clothes we use the accusative case: noszę sukienkę, mam na sobie spodnie.',
    examples: [
      { polish: 'Ta sukienka jest ładniejsza niż tamta.', translation: 'This dress is prettier than that one.' },
      { polish: 'Mam na sobie czerwoną bluzkę.', translation: 'I\'m wearing a red blouse.' },
    ],
  },
  24: {
    coursebookPages: '158–165',
    communication: 'Communicating at the hairdresser\'s and at a fitness studio, approving or criticising the result.',
    vocabulary: 'Appearance, body parts, haircut and care; pozwolić sobie na — to afford, strzyżenie — haircut.',
    grammar: 'Adverbs are compared in the same way as adjectives: szybko → szybciej → najszybciej, ładnie → ładniej → najładniej. A common irregular form: dobrze → lepiej → najlepiej.',
    examples: [
      { polish: 'Tutaj jest drożej niż w Londynie.', translation: 'It\'s more expensive here than in London.' },
      { polish: 'Po tej fryzurze wyglądasz najlepiej.', translation: 'You look best with this hairstyle.' },
    ],
  },
  25: {
    coursebookPages: '166–171',
    communication: 'Talking to a doctor or dentist and giving advice.',
    vocabulary: 'Body parts, symptoms and treatment: boleć — to hurt, zażywać — to take (medicine), lekarz — doctor, dentysta — dentist.',
    grammar: 'To give advice we use powinien + infinitive. The form agrees with the person being advised: powinien for a man, powinna for a woman, powinno for neuter, powinni/powinny in the plural.',
    examples: [
      { polish: 'Powinieneś odpocząć. Powinnaś iść do lekarza.', translation: 'You should rest. You should go to the doctor.' },
      { polish: 'Boli mnie głowa.', translation: 'I have a headache.' },
    ],
  },
  26: {
    coursebookPages: '172–177',
    communication: 'We ask for a service, report a problem and make a complaint.',
    vocabulary: 'Services and unexpected situations: wypadek — accident, kradzież — theft, pożar — fire, naprawić — to repair, reklamacja — complaint (claim).',
    grammar: 'The conditional softens requests and wishes. The ending -by is added to the past tense form: mógłbym/mogłabym — I could, chciałbym/chciałabym — I would like.',
    examples: [
      { polish: 'Czy mógłby pan mi pomóc?', translation: 'Could you help me?' },
      { polish: 'Chciałabym złożyć reklamację.', translation: 'I would like to make a complaint.' },
    ],
  },
  27: {
    coursebookPages: '6–13',
    communication: 'We introduce ourselves in more detail and talk about appearance, personality, interests, family and dreams.',
    vocabulary: 'Appearance, personality traits, marital status, hobbies and free time.',
    grammar: 'The instrumental case answers the questions kim? czym? and is used after interesować się, zajmować się, kierować, opiekować się, and also to express an instrument and joint action.',
    examples: [
      { polish: 'Interesuję się polskim kinem.', translation: 'I am interested in Polish cinema.' },
      { polish: 'Jadę do pracy autobusem.', translation: 'I go to work by bus.' },
    ],
  },
  28: {
    coursebookPages: '14–19',
    communication: 'We describe unusual events and natural disasters and talk about family and biographies.',
    vocabulary: 'Disasters, natural calamities, family events and biographical facts.',
    grammar: 'We review the genitive case after negation, quantity expressions and a number of verbs; we practise the questions kogo? czego?',
    examples: [
      { polish: 'Nie mam czasu ani ochoty.', translation: 'I have neither time nor desire.' },
      { polish: 'Boję się burzy.', translation: 'I am afraid of the storm.' },
    ],
  },
  29: {
    coursebookPages: '20–25',
    communication: 'We buy cinema tickets, check the schedule and compare films.',
    vocabulary: 'Cinema, screenings, tickets, genres, reviews and describing a film.',
    grammar: 'We review static and dynamic prepositions of place and direction; we talk about start and end times.',
    examples: [
      { polish: 'O której zaczyna się seans?', translation: 'What time does the screening start?' },
      { polish: 'Spotkajmy się przed kinem.', translation: 'Let\'s meet in front of the cinema.' },
    ],
  },
  30: {
    coursebookPages: '26–31',
    communication: 'We give definitions, describe people and name nationalities and professions.',
    vocabulary: 'Nationalities, professions, names of people and objects.',
    grammar: 'We form the nominative plural of nouns: studenci, nauczyciele, dzieci.',
    examples: [
      { polish: 'Polacy mieszkają w Polsce.', translation: 'Poles live in Poland.' },
      { polish: 'Lekarze pracują w szpitalu.', translation: 'Doctors work in the hospital.' },
    ],
  },
  31: {
    coursebookPages: '32–39',
    communication: 'We describe character and appearance, and formulate and justify an opinion.',
    vocabulary: 'Personality traits, relationships, evaluations and expressions of one\'s own opinion.',
    grammar: 'We make masculine personal plural adjectives agree with nouns: dobrzy studenci, mili nauczyciele.',
    examples: [
      { polish: 'To są bardzo zdolni studenci.', translation: 'These are very gifted students.' },
      { polish: 'Moi przyjaciele są cierpliwi.', translation: 'My friends are patient.' },
    ],
  },
  32: {
    coursebookPages: '40–45',
    communication: 'We talk about education, study, experience and plans.',
    vocabulary: 'School, university, computer, internet, subjects and academic degrees.',
    grammar: 'We form nouns from verbs: czytać → czytanie, studiować → studiowanie. A noun can denote a process or an activity.',
    examples: [
      { polish: 'Lubię czytanie reportaży.', translation: 'I like reading reportages.' },
      { polish: 'Studiowanie za granicą dużo kosztuje.', translation: 'Studying abroad costs a lot.' },
    ],
  },
  33: {
    coursebookPages: '46–51',
    communication: 'We go through a job interview, talk about work and professional difficulties, and write letters.',
    vocabulary: 'Employment, positions, types of companies and business correspondence.',
    grammar: 'We review previously learned cases and tenses in the context of a CV and interview questions and answers.',
    examples: [
      { polish: 'Mam doświadczenie w pracy z klientami.', translation: 'I have experience working with customers.' },
      { polish: 'Czy mogę wysłać CV mailem?', translation: 'May I send my CV by email?' },
    ],
  },
  34: {
    coursebookPages: '52–57',
    communication: 'We conduct interviews and talk about events and memories.',
    vocabulary: 'Origin, family, travel and important events.',
    grammar: 'We review the accusative case after verbs and prepositions: kogo? co?; we watch the forms of pronouns.',
    examples: [
      { polish: 'Przeprowadziłam wywiad z aktorką.', translation: 'I interviewed an actress.' },
      { polish: 'Pamiętam tę historię.', translation: 'I remember this story.' },
    ],
  },
  35: {
    coursebookPages: '58–65',
    communication: 'We give instructions, formulate prohibitions and prepare for a trip.',
    vocabulary: 'Trips, packing luggage, camping, the airport and road signs.',
    grammar: 'We form the imperative and use impersonal verbs and constructions for rules and instructions.',
    examples: [
      { polish: 'Spakuj paszport i bilet.', translation: 'Pack your passport and ticket.' },
      { polish: 'Nie wolno tu palić.', translation: 'Smoking is not allowed here.' },
    ],
  },
  36: {
    coursebookPages: '66–71',
    communication: 'We ask for information, learn about Polish sights and write messages.',
    vocabulary: 'Cities and tourist places, letters, emails and text messages.',
    grammar: 'We review the locative case; we address one person and a group in the vocative case.',
    examples: [
      { polish: 'Co warto zobaczyć w Gdańsku?', translation: 'What is worth seeing in Gdańsk?' },
      { polish: 'Droga Anno, dziękuję za wiadomość.', translation: 'Dear Anna, thank you for your message.' },
    ],
  },
  37: {
    coursebookPages: '72–77',
    communication: 'We say where and by what means we travel, and use set expressions.',
    vocabulary: 'Tourism, travel, directions and idioms with verbs of motion.',
    grammar: 'We distinguish unidirectional and multidirectional (repeated) verbs of motion: iść/chodzić, jechać/jeździć.',
    examples: [
      { polish: 'Codziennie jeżdżę do pracy tramwajem.', translation: 'Every day I go to work by tram.' },
      { polish: 'Teraz idę do sklepu.', translation: 'Now I am going to the shop.' },
    ],
  },
  38: {
    coursebookPages: '78–83',
    communication: 'Asking for directions, discussing traffic rules and expressing dissatisfaction.',
    vocabulary: 'Road traffic, transport, petrol stations and landmarks.',
    grammar: 'We review verbs of motion in questions about a route and in instructions; we choose the form according to direction and repetition.',
    examples: [
      { polish: 'Jak dojadę na dworzec?', translation: 'How do I get to the station?' },
      { polish: 'Proszę jechać prosto i skręcić w lewo.', translation: 'Drive straight ahead and turn left.' },
    ],
  },
  39: {
    coursebookPages: '84–91',
    communication: 'Talking about difficult life situations, relationships and who needs what.',
    vocabulary: 'Life events, difficulties, relationships and people\'s reactions.',
    grammar: 'We use the dative singular for the recipient and for the person experiencing a state: komu? czemu?',
    examples: [
      { polish: 'Przyjaciel pomógł mi w trudnej sytuacji.', translation: 'A friend helped me in a difficult situation.' },
      { polish: 'Dziecku jest zimno.', translation: 'The child is cold.' },
    ],
  },
  40: {
    coursebookPages: '92–99',
    communication: 'Talking about All Souls\' Day traditions and events in Poland\'s post-war history.',
    vocabulary: 'Polish traditions, remembrance, historical events and family memories.',
    grammar: 'We review the reflexive pronouns się and siebie, and the forms of personal pronouns.',
    examples: [
      { polish: 'Wspominamy tych, którzy odeszli.', translation: 'We remember those who have passed away.' },
      { polish: 'Zadbaj o siebie.', translation: 'Take care of yourself.' },
    ],
  },
  41: {
    coursebookPages: '100–105',
    communication: 'Talking about holiday traditions and history, describing how holidays are celebrated.',
    vocabulary: 'Polish holidays, customs, dates and seasonal expressions.',
    grammar: 'We review dates and the imperative; we use impersonal forms to describe general customs.',
    examples: [
      { polish: 'W Wigilię dzielimy się opłatkiem.', translation: 'On Christmas Eve we share the opłatek wafer.' },
      { polish: 'W Polsce święta obchodzi się rodzinnie.', translation: 'In Poland, holidays are celebrated with the family.' },
    ],
  },
  42: {
    coursebookPages: '106–111',
    communication: 'Describing adventures and the sequence of events in time.',
    vocabulary: 'Adventures, memories and expressions of time.',
    grammar: 'We link events with the conjunctions when, before, after and while; we keep track of the sequence of tenses.',
    examples: [
      { polish: 'Zanim wyszliśmy, sprawdziliśmy mapę.', translation: 'Before we left, we checked the map.' },
      { polish: 'Kiedy wróciłam, wszyscy już spali.', translation: 'When I came back, everyone was already asleep.' },
    ],
  },
  43: {
    coursebookPages: '112–119',
    communication: 'Talking about Polish history, politics and society.',
    vocabulary: 'History, the state, society and events of the past.',
    grammar: 'We review verb aspect and choose the perfective or imperfective aspect in the imperative.',
    examples: [
      { polish: 'Przeczytaj artykuł i opowiedz, co się wydarzyło.', translation: 'Read the article and tell me what happened.' },
      { polish: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.', translation: 'When he lived in Poland, he often visited museums.' },
    ],
  },
  44: {
    coursebookPages: '120–125',
    communication: 'Talking about future plans, animals and nature.',
    vocabulary: 'Animals, pets, nature and set expressions.',
    grammar: 'We review the formation of the future tense, the declension of nouns like zwierzę and the forms of numerals with dates.',
    examples: [
      { polish: 'Zaopiekuję się zwierzęciem sąsiadów.', translation: 'I will look after the neighbours\' pet.' },
      { polish: 'W przyszłym roku pojedziemy nad morze.', translation: 'Next year we will go to the seaside.' },
    ],
  },
  45: {
    coursebookPages: '126–131',
    communication: 'Discussing ecology, habits and the possible consequences of our decisions.',
    vocabulary: 'Agritourism, nature protection, farming and eco-friendly habits.',
    grammar: 'We build conditional sentences with jeżeli…, to… and use the conditional mood for hypotheses and assumptions.',
    examples: [
      { polish: 'Jeżeli będziemy segregować śmieci, ograniczymy ich ilość.', translation: 'If we sort our rubbish, we will reduce its amount.' },
      { polish: 'Chętnie mieszkałabym na wsi.', translation: 'I would gladly live in the countryside.' },
    ],
  },
  46: {
    coursebookPages: '132–139',
    communication: 'Comparing products, discussing purchases and making a complaint.',
    vocabulary: 'Household appliances, shops, purchases, warranty and returning goods.',
    grammar: 'We build complex sentences and use the particle byle to express a minimum condition or requirement.',
    examples: [
      { polish: 'Chcę oddać blender, który zepsuł się po tygodniu.', translation: 'I want to return a blender that broke after a week.' },
      { polish: 'Byleby rachunek był czytelny.', translation: 'As long as the receipt is legible.' },
    ],
  },
  47: {
    coursebookPages: '140–145',
    communication: 'Discussing cinema and theatre, expressing emotions and taking part in a discussion.',
    vocabulary: 'Films, plays, actors, impressions and emotions.',
    grammar: 'We form passive participles and use the passive voice to focus on the action or its result.',
    examples: [
      { polish: 'Ten film został wyreżyserowany przez znanego reżysera.', translation: 'This film was directed by a well-known director.' },
      { polish: 'Spektakl jest grany w każdy piątek.', translation: 'The play is performed every Friday.' },
    ],
  },
  48: {
    coursebookPages: '146–151',
    communication: 'Talking about art and exhibitions, expressing admiration and critical opinion.',
    vocabulary: 'Painting, photography, museums, exhibitions and vernissages.',
    grammar: 'We decline neuter nouns in -um: muzeum, muzeum, w muzeum, z muzeum.',
    examples: [
      { polish: 'W muzeum oglądaliśmy niezwykłe akwarium.', translation: 'In the museum we looked at an unusual aquarium.' },
      { polish: 'Ta wystawa zrobiła na mnie ogromne wrażenie.', translation: 'This exhibition made a huge impression on me.' },
    ],
  },
  49: {
    coursebookPages: '152–157',
    communication: 'Reviewing the course and getting to know the format of Polish language certificate exams.',
    vocabulary: 'Exam instructions, assessment, accuracy, fluency and expressing opinions.',
    grammar: 'We review cases, tenses, verb aspects, conditional constructions and agreement; we apply them in speaking and writing.',
    examples: [
      { polish: 'Proszę przeczytać tekst i odpowiedzieć na pytania.', translation: 'Please read the text and answer the questions.' },
      { polish: 'Moim zdaniem odpowiedź jest poprawna.', translation: 'In my opinion, the answer is correct.' },
    ],
  },
};
