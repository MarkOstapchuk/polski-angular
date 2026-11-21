import type { LessonTheory } from './lesson-theory';

export type Part3LessonTheoryId =
  | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60
  | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70;

export const PART3_THEORY_RU: Record<Part3LessonTheoryId, LessonTheory> = {
  50: {
    coursebookPages: '6–11',
    communication: 'Говорим о сертификационном экзамене по польскому языку (уровень B1): задаём вопросы, отвечаем и аргументируем свою позицию, понимаем экзаменационные формулировки.',
    vocabulary: 'Грамматическая терминология (mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik, wołacz; czasownik, rzeczownik, przymiotnik, przysłówek, aspekt, liczba pojedyncza/mnoga), формы письменных работ и идиомы с «błąd»: być w błędzie (ошибаться), przyznać się do błędu (признать ошибку), uczyć się na błędach (учиться на ошибках), wybaczyć błąd (простить ошибку), wprowadzać w błąd (вводить в заблуждение), wyprowadzać z błędu (разубеждать).',
    grammar: 'Систематизация базовой грамматики B1: именительный падеж множественного числа (лично-мужские формы на -i/-y/-owie/-e с чередованиями: Polak → Polacy, student → studenci, kolega → koledzy, profesor → profesorowie; нелично-мужские на -y/-i/-e/-a), существительные pluralia tantum (drzwi, okulary, spodnie, nożyczki, wakacje, urodziny, imieniny), вид глагола (aspekt niedokonany — процесс/повторение vs dokonany — результат/однократность) и основные чередования в основе (ó:o, ą:ę, e:Ø, k:c, t:ci, r:rz).',
    examples: [
      { polish: 'Każdy uczy się na własnych błędach, więc warto przyznać się do błędu.', translation: 'Каждый учится на собственных ошибках, поэтому стоит признать ошибку.' },
      { polish: 'Nasi studenci długo przygotowywali się do egzaminu i w końcu go zdali.', translation: 'Наши студенты долго готовились к экзамену и в итоге его сдали.' },
      { polish: 'Te nowe okulary i spodnie świetnie na tobie leżą.', translation: 'Эти новые очки и брюки отлично на тебе сидят.' },
    ],
  },
  51: {
    coursebookPages: '12–23',
    communication: 'Рассказываем об изучении иностранных языков, способах запоминания информации, выражаем образ действия, даём советы и поддерживаем естественный ход беседы.',
    vocabulary: 'Методы обучения, память, языковые проекты, экзамены; идиомы: mieć to na końcu języka (вертится на языке), mieć w głowie groch z kapustą (каша в голове), łamać sobie język (ломать язык), siedzieć jak na szpilkach (сидеть как на иголках), mieć nerwy ze stali (иметь стальные нервы).',
    grammar: 'Обстоятельства образа действия (okoliczniki sposobu): наречия на -o/-e (dobrze, płynnie, biegle), конструкции po + дат./местн. (po polsku, po cichu), предложные обороты (z łatwością, bez problemu, na pamięć). Противопоставление вопросительных слов jak? (как? — ответ наречием) и jaki? jaka? jakie? (какой? — ответ прилагательным). Повторение повелительного наклонения (tryb rozkazujący: powtórz, nie denerwuj się, spróbujmy), сослагательного наклонения (tryb przypuszczający: nauczyłbym się, warto by było) и предлогов na, w, po, za + винительный падеж (Biernik).',
    examples: [
      { polish: 'Jak mówisz po polsku? Mówię płynnie, ale czasem łamię sobie język.', translation: 'Как ты говоришь по-польски? Я говорю бегло, но иногда ломаю язык.' },
      { polish: 'Jaki jest ten kurs? Jest bardzo intensywny i praktyczny.', translation: 'Какой этот курс? Он очень интенсивный и практический.' },
      { polish: 'Gdybym miał więcej czasu, uczyłbym się nowych słówek na pamięć codziennie.', translation: 'Если бы у меня было больше времени, я бы учил новые слова наизусть каждый день.' },
    ],
  },
  52: {
    coursebookPages: '24–33',
    communication: 'Подробно описываем внешность людей, выражаем признание, делаем комплименты и делимся мнением о стиле и внешнем виде.',
    vocabulary: 'Черты лица, телосложение, причёска, одежда и аксессуары; идиомы: wyglądać jak milion dolarów (выглядеть на миллион), wyglądać kwitnąco (цвести/прекрасно выглядеть), tryskać zdrowiem (пышать здоровьем), wyglądać jak siedem nieszczęść (выглядеть несчастно/ужасно), jak cię widzą, tak cię piszą (по одёжке встречают).',
    grammar: 'Степени сравнения прилагательных (stopniowanie przymiotników) и наречий (stopniowanie przysłówków): простая форма на -szy / -ejszy + naj- (wysoki → wyższy → najwyższy, ładny → ładniejszy → najładniejszy), описательная с bardziej / najbardziej (elegancki → bardziej elegancki) и нерегулярные формы (dobry → lepszy → najlepszy; zły → gorszy → najgorszy; duży → większy → największy; mały → mniejszy → najmniejszy; dobrze → lepiej → najlepiej; dużo → więcej → najwięcej). Сравнительные конструкции: ... niż + И. п., ... od + Р. п., tak ... jak, coraz + сравн. степень, im ..., tym ...',
    examples: [
      { polish: 'Dzisiaj wyglądasz kwitnąco — jeszcze lepiej niż wczoraj!', translation: 'Сегодня ты выглядишь цветуще — ещё лучше, чем вчера!' },
      { polish: 'Jej nowy płaszcz jest znacznie elegantszy od poprzedniego.', translation: 'Её новое пальто значительно элегантнее предыдущего.' },
      { polish: 'Im częściej uprawia sport, tym lepiej się czuje i tryska zdrowiem.', translation: 'Чем чаще он занимается спортом, тем лучше себя чувствует и пышет здоровьем.' },
    ],
  },
  53: {
    coursebookPages: '34–41',
    communication: 'Обсуждаем условия труда, зарплаты, быт и уровень жизни; выражаем удовлетворение, недовольство и разочарование.',
    vocabulary: 'Условия работы, доходы, трудовой кодекс, бытовая техника и жильё; идиомы с числами: upiec dwie pieczenie na jednym ogniu (убить двух зайцев), być w siódmym niebie (быть на седьмом небе), ni w pięć, ni w dziewięć (ни к селу ни к городу), wtrącić swoje trzy grosze (вставить свои пять копеек).',
    grammar: 'Синтаксис числительных (składnia liczebników): с 2, 3, 4 (dwa/dwie, trzy, cztery) в нелично-мужском роде существительное и глагол стоят во мн. ч. И. п. (trzy nowe pralki działają), а в лично-мужском — формы dwaj/trzej/czterej + И. п. мн. ч. (trzej nauczyciele pracują) либо dwóch/trzech/czterech + Р. п. мн. ч. + глагол в 3 л. ед. ч. ср. р. (trzech nauczycieli pracowało). Начиная с 5 (pięć, dziesięć, dwadzieścia, много/kilka/wiele), существительное всегда в Р. п. мн. ч., а глагол — в 3 л. ед. ч. ср. р. (pięć osób czekało, sześciu pracowników otrzymało podwyżkę). Собирательные числительные (dwoje, troje, czworo) употребляются с детьми (troje dzieci), смешанными группами и pluralia tantum (dwoje drzwi).',
    examples: [
      { polish: 'Pięciu nowych pracowników podpisało już umowę o pracę.', translation: 'Пять новых сотрудников уже подписали трудовой договор.' },
      { polish: 'W naszym mieszkaniu są dwa pokoje i troje dzieci.', translation: 'В нашей квартире две комнаты и трое детей.' },
      { polish: 'Jestem rozczarowany zarobkami, ale przynajmniej upiekłem dwie pieczenie na jednym ogniu.', translation: 'Я разочарован зарплатой, но по крайней мере убил двух зайцев одним выстрелом.' },
    ],
  },
  54: {
    coursebookPages: '42–51',
    communication: 'Говорим о жизни за границей, миграции, мультикультурализме и адаптации; сравниваем, описываем и рассказываем о прошлом.',
    vocabulary: 'Поляки за рубежом и иностранцы в Польше, rodak (соотечественник), ojczyzna (родина), akulturacja, wielokulturowość; идиомы: upaść na głowę (сойти с ума), coś się nie mieści w głowie (в голове не укладывается), przyjąć kogoś z otwartymi ramionami (принять с распростёртыми объятиями), stanąć na własnych nogach (встать на собственные ноги).',
    grammar: 'Склонение количественных числительных (odmiana liczebników głównych) в винительном (Biernik), родительном (Dopełniacz) и творительном (Narzędnik) падежах: dwa → dwóch / dwoma (ж. dwiema), trzy → trzech / trzema, cztery → czterech / czterema, pięć → pięciu / pięcioma (или pięciu), dwadzieścia → dwudziestu / dwudziestoma, sto → stu / stoma. Временные выражения с числительными: od + Р. п. (od dwudziestu lat), przed + Т. п. (przed pięcioma laty), za + В. п. (za trzy miesiące), przez + В. п. (przez cztery lata), w ciągu + Р. п. (w ciągu dwóch tygodni).',
    examples: [
      { polish: 'Mieszkam w Polsce od dwudziestu lat i dawno stanąłem na własnych nogach.', translation: 'Я живу в Польше двадцать лет и давно встал на собственные ноги.' },
      { polish: 'Rozmawiałem z trzema rodakami, którzy przyjechali tu przed pięcioma laty.', translation: 'Я разговаривал с тремя соотечественниками, которые приехали сюда пять лет назад.' },
      { polish: 'Przyjęli nas z otwartymi ramionami, a w ciągu dwóch miesięcy poznaliśmy wielu sąsiadów.', translation: 'Нас приняли с распростёртыми объятиями, а за два месяца мы познакомились со многими соседями.' },
    ],
  },
  55: {
    coursebookPages: '52–57',
    communication: 'Повторяем и закрепляем материал уроков 0–4: экзаменационные стратегии, советы по изучению языка, описание внешности, условия труда и рассказ о жизни за границей.',
    vocabulary: 'Повторение лексики и идиом из уроков 0–4 (błąd, языковые идиомы, внешность, числа, миграция и адаптация).',
    grammar: 'Комплексное повторение: именительный падеж мн. ч. и pluralia tantum, вид глагола, обстоятельства образа действия (jak? vs jaki?), степени сравнения прилагательных и наречий, синтаксис и склонение количественных числительных (B, D, N) и выражения времени.',
    examples: [
      { polish: 'Od czterech lat uczę się polskiego i mówię coraz płynniej.', translation: 'Я учу польский уже четыре года и говорю всё беглее.' },
      { polish: 'W projekcie wzięło udział dwudziestu studentów z różnych krajów.', translation: 'В проекте приняли участие двадцать студентов из разных стран.' },
    ],
  },
  56: {
    coursebookPages: '58–67',
    communication: 'Решаем официальные дела в учреждениях: выражаем необходимость, просим разрешения, даём согласие или вежливо отказываем, пишем официальные запросы.',
    vocabulary: 'Типы учреждений (urząd miasta, urząd wojewódzki, urząd skarbowy, ZUS), документы (wniosek, zaświadczenie, karta pobytu, podpis, pieczątka); идиомы: mieć ręce pełne roboty (быть заваленным работой), papierkowa robota (бумажная волокита), załatwić coś od ręki (решить вопрос сразу/на месте).',
    grammar: 'Чередование ę : ą в склонении существительных (urząd → urzędu, błąd → błędu, mąż → męża, święto → świąt, ręka → rąk). Конструкция mieć + bezokolicznik для выражения долженствования, плана или чужого поручения (Mam złożyć wniosek do piątku; To ma być gotowe jutro). Особое склонение существительных среднего рода на -ę: тип imię (им. им. ед. imię, Р. imienia, Д. imieniu, Т. imieniem, мн. ч. imiona, imion — также ramię, plemię, znamię) и тип zwierzę (Р. zwierzęcia, Д. zwierzęciu, мн. ч. zwierzęta, zwierząt — также niemowlę, szczenię, pisklę).',
    examples: [
      { polish: 'Mam złożyć wniosek w urzędzie wojewódzkim, bo ta papierkowa robota nie może czekać.', translation: 'Мне нужно подать заявление в воеводское управление, потому что эта бумажная волокита не может ждать.' },
      { polish: 'Proszę wpisać swoje imię oraz imiona rodziców w formularzu.', translation: 'Пожалуйста, впишите своё имя и имена родителей в формуляр.' },
      { polish: 'W schronisku brakuje karmy dla zwierząt, dlatego musimy załatwić to od ręki.', translation: 'В приюте не хватает корма для животных, поэтому мы должны решить это сразу.' },
    ],
  },
  57: {
    coursebookPages: '68–77',
    communication: 'Пользуемся услугами и вызываем мастеров: обещаем и заверяем, предлагаем помощь, благодарим и обсуждаем неисправности.',
    vocabulary: 'Мастерские и сервис (hydraulik, elektryk, szewc, krawiec, mechanik, serwis), лексика: usterka (неисправность), wadliwy (бракованный), gwarancja, reklamacja; идиомы: złota rączka (мастер на все руки), mieć coś w małym palcu (знать как свои пять пальцев), nie kiwnąć palcem (пальцем не пошевелить), siedzieć z założonymi rękami (сидеть сложа руки).',
    grammar: 'Адъективное (прилагательное) склонение существительных (odmiana przymiotnikowa rzeczowników): слова типа znajomy, podróżny, bezrobotny, narzeczony, chory, służący, księgowy (Р. znajomego, Д. znajomemu, Т. znajomym; мн. ч. znajomi, znajomych); мужские имена на -y/-i (Jerzy → Jerzego, Jerzemu, z Jerzym; Antoni → Antoniego, Antoniemu, z Antonim) и польские фамилии на -ski, -cki, -dzki (м. р. Kowalski → Kowalskiego, Kowalskiemu, Kowalskim; ж. р. Kowalska → Kowalskiej, Kowalską; мн. ч. państwo Kowalscy → Kowalskich, Kowalskimi).',
    examples: [
      { polish: 'Zadzwoniłem do znajomego elektryka, pana Jerzego Kowalskiego — to prawdziwa złota rączka.', translation: 'Я позвонил знакомому электрику, пану Ежи Ковальскому — он настоящий мастер на все руки.' },
      { polish: 'Rozmawiałem z panią Anną Nowacką o wadliwym sprzęcie i obiecała szybką naprawę.', translation: 'Я разговаривал с пани Анной Новацкой о неисправном оборудовании, и она пообещала быстрый ремонт.' },
      { polish: 'Państwo Zielińscy mają ten temat w małym palcu.', translation: 'Пан и пани Зелиньские знают эту тему как свои пять пальцев.' },
    ],
  },
  58: {
    coursebookPages: '78–87',
    communication: 'Обсуждаем финансы, семейный бюджет, расходы и экономию; учимся начинать разговор и выражать уверенность или сомнение.',
    vocabulary: 'Деньги, бюджет, сбережения, konto, przelew, rata, oszczędzać, wydawać, zero waste; идиомы и пословицы: mieć węża w kieszeni (быть скупым), obiecywać złote góry (сулить золотые горы), pieniądze szczęścia nie dają (не в деньгах счастье).',
    grammar: 'Особое склонение существительных pieniądz и miesiąc: в ед. ч. чередование ą:ę (pieniądz → pieniądza, pieniądzowi, pieniądzem; miesiąc → miesiąca, miesiącowi, miesiącem), а во мн. ч. И. п. pieniądze / miesiące и особенно важное Р. п. мн. ч. pieniędzy / miesięcy (а также Т. п. pieniędzmi / miesiącami, М. п. o pieniądzach / miesiącach). Средства выражения уверенности (na pewno, bez wątpienia, jestem przekonany, że…) и неуверенности (chyba, może, prawdopodobnie, wątpię, żeby…).',
    examples: [
      { polish: 'Od trzech miesięcy nie mamy żadnych dodatkowych pieniędzy na remont.', translation: 'Уже три месяца у нас нет никаких дополнительных денег на ремонт.' },
      { polish: 'Na pewno warto oszczędzać, choć wątpię, żeby pieniądze dawały szczęście.', translation: 'Наверняка стоит экономить, хотя я сомневаюсь, что деньги приносят счастье.' },
      { polish: 'Nie warto ufać komuś, kto obiecuje złote góry, a sam ma węża w kieszeni.', translation: 'Не стоит доверять тому, кто сулит золотые горы, а сам скуп.' },
    ],
  },
  59: {
    coursebookPages: '88–97',
    communication: 'Говорим об экономике, предпринимательстве и рынке труда; формулируем условия, следствия и аргументируем собственную точку зрения.',
    vocabulary: 'Экономическая лексика (rynek, inwestycja, zysk, strata, konkurencja, firma, przedsiębiorca); идиомы и пословицы: jaka praca, taka płaca (какова работа, такова и оплата), żadna praca nie hańbi (никакой труд не позорен), bez pracy nie ma kołaczy (без труда не выловишь и рыбку из пруда), wyścig szczurów (крысиные бега), wziąć się do roboty (взяться за работу).',
    grammar: 'Условные предложения (zdania warunkowe) с союзами jeśli / jeżeli / gdyby / jakby: реальное условие — настоящее или будущее время в обеих частях (Jeżeli masz czas / będziesz mieć czas, to mi pomożesz); потенциальное и нереальное условие — сослагательное наклонение (Gdybyś miał doświadczenie, dostałbyś tę pracę). В отличие от английского, в польском нет жесткого согласования времён (brak następstwa czasów): в придаточных предложениях сохраняется время с точки зрения говорящего (Powiedział, że szuka pracy / że znajdzie pracę).',
    examples: [
      { polish: 'Jeżeli weźmiemy się do roboty już dziś, to do piątku skończymy projekt.', translation: 'Если мы возьмёмся за работу уже сегодня, то к пятнице закончим проект.' },
      { polish: 'Gdybyś miał lepszy biznesplan, inwestorzy chętniej by cię wsparli.', translation: 'Если бы у тебя был лучший бизнес-план, инвесторы охотнее поддержали бы тебя.' },
      { polish: 'Szef powiedział, że firma rozwija się dobrze i wkrótce zatrudni nowe osoby.', translation: 'Начальник сказал, что фирма развивается хорошо и скоро наймёт новых людей.' },
    ],
  },
  60: {
    coursebookPages: '98–103',
    communication: 'Повторяем материал уроков 6–9: общение в учреждениях, сфера услуг, обсуждение бюджета, уверенность/сомнение и аргументация в деловых ситуациях.',
    vocabulary: 'Систематизация лексики и фразеологизмов из уроков 6–9 (учреждения, сервис, деньги, экономика и работа).',
    grammar: 'Комплексное повторение: чередование ę:ą, mieć + bezokolicznik, существительные среднего рода на -ę (imię, zwierzę), адъективное склонение существительных, имён и фамилий, склонение pieniądz и miesiąc, условные предложения и отсутствие согласования времён.',
    examples: [
      { polish: 'Gdybym miał więcej pieniędzy, zatrudniłbym pana Kowalskiego do remontu.', translation: 'Если бы у меня было больше денег, я бы нанял пана Ковальского для ремонта.' },
      { polish: 'Mam załatwić tę sprawę w urzędzie w ciągu dwóch miesięcy.', translation: 'Мне нужно уладить это дело в учреждении в течение двух месяцев.' },
    ],
  },
  61: {
    coursebookPages: '104–111',
    communication: 'Говорим о политике, выборах и общественной жизни в Польше; выражаем важность, безразличие и дистанцию к обсуждаемым темам.',
    vocabulary: 'Политическая система (sejm, senat, rząd, prezydent, wybory, partia, lewica, prawica, głosować, budżet obywatelski); идиомы: rządy silnej ręki (правление сильной руки), poprawność polityczna (политкорректность), okrągły stół (круглый стол), wotum zaufania (вотум доверия).',
    grammar: 'Склонение существительного rząd «правительство» (сохраняет ą во всех падежах: Р. rządu, Д. rządowi, Т. rządem, М. o rządzie, мн. ч. rządy, rządów — в отличие от rząd «ряд» с чередованием ą:ę: Р. rzędu, мн. ч. rzędy!). Синтаксис предложений с подлежащим в родительном падеже (podmiot w dopełniaczu): при словах ilości (dużo, mało, wielu, pięciu, większość, brakuje, przybywa, ubywa) и при отрицании с nie ma / nie było / nie będzie сказуемое стоит в 3-м лице ед. ч. среднего рода (Brakuje pieniędzy; Wielu wyborców nie głosowało; Nie było żadnego kandydata).',
    examples: [
      { polish: 'Większość obywateli nie interesuje się nowymi decyzjami rządu.', translation: 'Большинство граждан не интересуется новыми решениями правительства.' },
      { polish: 'W parlamencie zabrakło głosów do uzyskania wotum zaufania.', translation: 'В парламенте не хватило голосов для получения вотума доверия.' },
      { polish: 'Szczerze mówiąc, jest mi to zupełnie obojętne, kto wygra te wybory.', translation: 'Честно говоря, мне совершенно безразлично, кто выиграет эти выборы.' },
    ],
  },
  62: {
    coursebookPages: '112–121',
    communication: 'Участвуем в дискуссиях о равноправии, правах человека и дискриминации; структурируем высказывание, даём определения и отстаиваем своё мнение.',
    vocabulary: 'Равноправие и гражданские права (równouprawnienie, dyskryminacja, tolerancja, obywatel, mniejszość, prawa człowieka); идиомы с «prawo»: albo w prawo, albo w lewo (либо так, либо иначе), na prawo i (na) lewo (направо и налево), prawo dżungli (закон джунглей), jakim prawem? (по какому праву?), obejść prawo (обойти закон), być ponad prawem (быть выше закона), zrobić coś na lewo (сделать что-то нелегально/налево).',
    grammar: 'Повторение названий стран в родительном падеже (Polska → Polski, Francja → Francji, Niemcy → Niemiec, Włochy → Włoch, Czechy → Czech, Węgry → Węgier, Stany Zjednoczone → Stanów Zjednoczonych). Склонение существительных мужского рода на -anin (Amerykanin, Rosjanin, chrześcijanin, mieszczanin, krakowianin): в ед. ч. суффикс -in сохраняется (Amerykanina, Amerykaninowi, Amerykaninem), а во мн. ч. выпадает! И. п. мн. ч. Amerykanie, Р. п. Amerykanów (но Rosjan, mieszczan, chrześcijan, krakowian — нулевое окончание!), Д. Amerykanom, Т. Amerykanami.',
    examples: [
      { polish: 'Wielu Amerykanów i Rosjan mieszka obecnie w Polsce i korzysta z tych samych praw.', translation: 'Многие американцы и россияне сейчас живут в Польше и пользуются теми же правами.' },
      { polish: 'Nikt nie może być ponad prawem ani próbować obejść prawa.', translation: 'Никто не может быть выше закона или пытаться обойти закон.' },
      { polish: 'Przyjechali do nas goście z Niemiec, Włoch i Stanów Zjednoczonych.', translation: 'К нам приехали гости из Германии, Италии и Соединённых Штатов.' },
    ],
  },
  63: {
    coursebookPages: '122–131',
    communication: 'Описываем происшествия и несчастные случаи, пересказываем чужие слова и побуждаем собеседника к рассказу.',
    vocabulary: 'Дорожные и бытовые происшествия (wypadek, kolizja, poszkodowany, świadek, karetka, pierwsza pomoc, wypadek przy pracy); идиомы: na wszelki wypadek (на всякий случай), wypadek przy pracy (несчастный случай на производстве), w żadnym wypadku (ни в коем случае), przez przypadek (случайно), od przypadku do przypadku (от случая к случаю).',
    grammar: 'Косвенная речь (mowa zależna): утверждения вводятся через że (Powiedział, że widział wypadek), вопросы — через czy или вопросительное слово (Zapytał, czy ktoś wezwał karetkę; Zapytał, gdzie to się stało), просьбы и приказы — через żeby + прошедшее время или безличную форму (Poprosił, żebym zadzwonił / Kazał nam poczekać). Склонение притяжательных местоимений (zaimki dzierżawcze): mój, twój, swój, nasz, wasz (Р. mojego/mego, mojej, naszych; Т. moim, moją, naszymi) и неизменяемые jego, jej, ich. Возвратное swój относится к подлежащему любого лица (Wziąłem swój telefon; Oni widzieli swoje samochody).',
    examples: [
      { polish: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego telefonu i wezwał policję.', translation: 'Свидетель сказал, что на всякий случай записал номер своего телефона и вызвал полицию.' },
      { polish: 'Policjant zapytał nas, czy widzieliśmy kierowcę tamtego auta.', translation: 'Полицейский спросил нас, видели ли мы водителя той машины.' },
      { polish: 'W żadnym wypadku nie ruszaj poszkodowanego, dopóki nie przyjedzie karetka.', translation: 'Ни в коем случае не двигай пострадавшего, пока не приедет скорая.' },
    ],
  },
  64: {
    coursebookPages: '132–141',
    communication: 'Обсуждаем природу, климат и экологию; выражаем одобрение (aprobata), неодобрение (dezaprobata) и протест, пишем официальные письма.',
    vocabulary: 'Экология и климат (środowisko, zanieczyszczenie, smog, recykling, zakaz palenia węglem, odnawialne źródła energii); идиомы: efekt cieplarniany (парниковый эффект), burza w szklance wody (буря в стакане воды), suchy jak pieprz (сухой как порох), królik doświadczalny (подопытный кролик).',
    grammar: 'Повторение дательного падежа (Celownik: komu? czemu?) в единственном и множественном числе: м. р. ед. ч. -owi (studentowi, klimatowi), но короткие/особые слова на -u (panu, bratu, ojcu, psu, kotu, światu, człowiekowi/lwu); ср. р. -u (dziecku, środowisku, morzu); ж. р. -e (с чередованиями: rzeka → rzece, droga → drodze, woda → wodzie) или -i/-y (ziemi, nocy); мн. ч. всегда -om (ludziom, zwierzętom, roślinom). Прилагательные в Д. п.: м./ср. -emu, ж. -ej, мн. -ym/-im. Глаголы с Д. п.: pomagać, szkodzić, zagrażać, przyglądać się, dziwić się, ufać, przeciwstawiać się.',
    examples: [
      { polish: 'Smog i plastik poważnie szkodzą naszemu środowisku oraz przyszłym pokoleniom.', translation: 'Смог и пластик серьёзно вредят нашей окружающей среде и будущим поколениям.' },
      { polish: 'Stanowczo protestujemy przeciwko wycince lasu i pomagamy lokalnym organizacjom.', translation: 'Мы решительно протестуем против вырубки леса и помогаем местным организациям.' },
      { polish: 'To nie jest burza w szklance wody — efekt cieplarniany zagraża całemu światu.', translation: 'Это не буря в стакане воды — парниковый эффект угрожает всему миру.' },
    ],
  },
  65: {
    coursebookPages: '142–147',
    communication: 'Повторяем материал уроков 11–14: политика и общество, дискуссия о правах, пересказ событий и происшествий, экологический протест и официальная переписка.',
    vocabulary: 'Повторение ключевой лексики и идиом из уроков 11–14 (политика, право, происшествия, экология).',
    grammar: 'Комплексное повторение: склонение rząd, предложения с подлежащим в Р. п., названия стран в Р. п., существительные на -anin, косвенная речь, притяжательные местоимения (включая swój) и дательный падеж ед. и мн. ч.',
    examples: [
      { polish: 'Dziennikarz zapytał, czy nowy zakaz pomoże mieszkańcom dużych miast.', translation: 'Журналист спросил, поможет ли новый запрет жителям больших городов.' },
      { polish: 'Wielu obywateli z Niemiec i Stanów Zjednoczonych sprzeciwia się dyskryminacji.', translation: 'Многие граждане из Германии и США выступают против дискриминации.' },
    ],
  },
  66: {
    coursebookPages: '148–157',
    communication: 'Говорим о средствах массовой информации, журналистике и фейковых новостях; учимся устанавливать контакт в беседе и письме, брать интервью и анализировать эссе.',
    vocabulary: 'СМИ (prasa, telewizja, media społecznościowe, dziennikarz, rzetelny, dezinformacja, fake news, wywiad); идиомы: czwarta władza (четвёртая власть), ciągnąć kogoś za język (тянуть кого-то за язык), wiadomość z pierwszej ręki (новость из первых рук), owijać w bawełnę (ходить вокруг да около).',
    grammar: 'Склонение отрицательных местоимений nikt, nic, żaden: nikt → nikogo, nikomu, nikogo, z nikim, o nikim; nic → niczego/nic, niczemu, nic, z niczym, o niczym; żaden / żadna / żadne склоняется как прилагательное (żadnego, żadnej, żadnych). В польском обязательно двойное отрицание (Nikt niczego nie widział; Nie przeczytałem żadnego artykułu). Повторение звательного падежа (Wołacz) и его функций в официальных и неформальных обращениях: Szanowny Panie Redaktorze!, Droga Pani Anno!, Cześć, Marku / Kasiu / Piotrze!',
    examples: [
      { polish: 'Szanowny Panie Redaktorze, nikt nie sprawdził tej informacji z pierwszej ręki!', translation: 'Уважаемый господин редактор, никто не проверил эту информацию из первых рук!' },
      { polish: 'Nie owijaj w bawełnę — nie mam przed nikim żadnych tajemnic.', translation: 'Не ходи вокруг да около — у меня ни перед кем нет никаких тайн.' },
      { polish: 'W tamtym wywiadzie nie usłyszałem niczego nowego.', translation: 'В том интервью я не услышал ничего нового.' },
    ],
  },
  67: {
    coursebookPages: '158–167',
    communication: 'Уговариваем, убеждаем и создаём рекламные аргументы; описываем предметы, графические символы и дизайн.',
    vocabulary: 'Реклама, убеждение, дизайн, описание предмета (kształt, materiał, wzór, funkcjonalny, przyciągać uwagę); идиомы: przejść do rzeczy (перейти к делу), nabić kogoś w butelkę (обмануть/одурачить), wpaść w ucho (запасть в душу/легко запомниться о мелодии или фразе).',
    grammar: 'Склонение возвратного местоимения się (ударные и безударные формы): Р. siebie / się, Д. sobie, В. siebie / się, Т. sobą, М. o sobie (например: Patrzę na siebie; Kupiłem sobie książkę; Rozmawiamy ze sobą; Mówią o sobie). Повторение склонения личных местоимений (ja/mnie/mi/mną, on/jego/go/niego/mu/nim) и повелительного наклонения (tryb rozkazujący: przejdźmy, przekonaj, nie daj się nabić w butelkę, zaufaj mi).',
    examples: [
      { polish: 'Przejdźmy do rzeczy i nie dajmy się nabić w butelkę tej reklamie!', translation: 'Перейдём к делу и не дадим этой рекламе себя обмануть!' },
      { polish: 'Kup sobie ten produkt — zobaczysz, że szybko będziesz z siebie zadowolony.', translation: 'Купи себе этот продукт — увидишь, что быстро останешься собой доволен.' },
      { polish: 'Ta melodia od razu wpadła mi w ucho, więc ciągle ją sobie nucę.', translation: 'Эта мелодия сразу запала мне в душу, поэтому я постоянно её себе напеваю.' },
    ],
  },
  68: {
    coursebookPages: '168–179',
    communication: 'Говорим о культуре, литературе, кино, театре и музыке; выражаем вкусы и предпочтения, рассказываем о культурных событиях и пишем рецензию.',
    vocabulary: 'Искусство и культура (wystawa, premiera, recenzja, reżyser, fabuła, arcydzieło, publiczność, koncert); идиомы: widać rękę artysty (видна рука мастера), świecić pustkami (пустовать), połknąć bakcyla (загореться увлечением), otworzyć drzwi do kariery (открыть дверь к карьере).',
    grammar: 'Предложный падеж (Miejscownik: o kim? o czym?) после предложных выражений, обозначающих объект речи, мысли или произведения: o + М. п. (mówić / pisać / marzyć / opowiadać / film o..., książka o...), po + М. п. (po spektaklu, po premierze), w + М. п. (w tym filmie, w powieści, w wierszu), na + М. п. (na wystawie, na koncercie, na scenie), przy + М. п. (przy muzyce). Повторение окончаний М. п. ед. ч. (-e с чередованиями: teatr → w teatrze, sztuka → o sztuce, książka → w książce; -u после мягких и k/g/ch в м./ср. р.: w filmie, o artyście, w muzeum) и мн. ч. (-ach: o autorach, w wierszach).',
    examples: [
      { polish: 'W tej nowej powieści widać rękę artysty — opowiada o trudnej miłości i pamięci.', translation: 'В этом новом романе видна рука мастера — он рассказывает о трудной любви и памяти.' },
      { polish: 'Po premierze w teatrze sala nigdy nie świeciła pustkami.', translation: 'После премьеры в театре зал никогда не пустовал.' },
      { polish: 'Na wystawie w muzeum połknąłem bakcyla fotografii artystycznej.', translation: 'На выставке в музее я загорелся увлечением художественной фотографией.' },
    ],
  },
  69: {
    coursebookPages: '180–189',
    communication: 'Обсуждаем религию, веру, традиции и мировоззрение; формулируем вопросы и гипотезы, пишем поздравления и описания регионов.',
    vocabulary: 'Религия, конфессии, символы и праздники (wiara, wyznanie, tradycja, obrzęd, tolerancja, kościół, świątynia); библейские и культурные идиомы: mieć świętą cierpliwość (иметь ангельское терпение), rzucić kamieniem jako pierwszy (бросить камень первым), wieża Babel (вавилонская башня), być alfą i omegą (быть альфой и омегой / знать всё).',
    grammar: 'Склонение вопросительных местоимений jaki, który, czyj (полная парадигма по падежам, родам и числам: м./ср. jakiego/którego/czyjego, jakiemu/któremu/czyjemu, jakim/którym/czyim; ж. jakiej/której/czyjej, jaką/którą/czyją; мн. ч. jakich/których/czyich, jakimi/którymi/czyimi; лично-мужской И. п. мн. ч. jacy, którzy, czyi). Повторение условного/сослагательного наклонения (tryb warunkowy / przypuszczający) для гипотез и вежливых вопросов (Co byś zrobił, gdyby…?; Którą tradycję chciałbyś poznać lepiej?; Czyim zdaniem to jest ważne?).',
    examples: [
      { polish: 'Której religii symbolem jest ten znak i w jakim kraju występuje najczęściej?', translation: 'Символом какой религии является этот знак и в какой стране он встречается чаще всего?' },
      { polish: 'Czyim zdaniem można być alfą i omegą w sprawach wiary i historii?', translation: 'По чьему мнению можно быть альфой и омегой в вопросах веры и истории?' },
      { polish: 'Gdyby ludzie mieli więcej świętej cierpliwości, łatwiej by się ze sobą dogadywali.', translation: 'Если бы у людей было больше ангельского терпения, они бы легче находили общий язык.' },
    ],
  },
  70: {
    coursebookPages: '190–196',
    communication: 'Итоговое повторение уроков 16–19 и комплексная подготовка к сертификационному экзамену B1: медиа, убеждение, культура, мировоззрение, а также устная и письменная экзаменационная практика.',
    vocabulary: 'Систематизация лексики и идиом из уроков 16–19 (СМИ, реклама и дизайн, культура, религия и традиции) и всего курса Hurra 3.',
    grammar: 'Комплексное повторение: отрицательные местоимения nikt, nic, żaden и двойное отрицание, звательный падеж, склонение się и личных местоимений, повелительное наклонение, предложный падеж для объекта речи/произведения, вопросительные местоимения jaki, który, czyj и условное наклонение.',
    examples: [
      { polish: 'Nikt z nas nie wiedział, o którym filmie rozmawialiście po premierze.', translation: 'Никто из нас не знал, о каком фильме вы разговаривали после премьеры.' },
      { polish: 'Szanowni Państwo, przejdźmy do rzeczy — jaką decyzję podjęlibyście w tej sytuacji?', translation: 'Уважаемые дамы и господа, перейдём к делу — какое решение вы бы приняли в этой ситуации?' },
    ],
  },
};

export const PART3_THEORY_EN: Record<Part3LessonTheoryId, LessonTheory> = {
  50: {
    coursebookPages: '6–11',
    communication: 'We talk about the Polish B1 certificate exam: asking questions, answering, justifying opinions, and understanding exam instructions.',
    vocabulary: 'Grammar terminology (mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik, wołacz; czasownik, rzeczownik, przymiotnik, przysłówek, aspekt), exam writing genres, and idioms with “błąd”: być w błędzie (to be mistaken), przyznać się do błędu (to admit a mistake), uczyć się na błędach (to learn from mistakes), wybaczyć błąd (to forgive a mistake), wprowadzać w błąd (to mislead), wyprowadzać z błędu (to set someone straight).',
    grammar: 'Core B1 grammar review: nominative plural (masculine-personal forms in -i/-y/-owie/-e with stem alternations: Polak → Polacy, student → studenci, kolega → koledzy, profesor → profesorowie; non-masculine-personal in -y/-i/-e/-a), pluralia tantum nouns (drzwi, okulary, spodnie, nożyczki, wakacje, urodziny, imieniny), verbal aspect (imperfective process/habit vs perfective result/single action), and key stem alternations (ó:o, ą:ę, e:Ø, k:c, t:ci, r:rz).',
    examples: [
      { polish: 'Każdy uczy się na własnych błędach, więc warto przyznać się do błędu.', translation: 'Everyone learns from their own mistakes, so it is worth admitting a mistake.' },
      { polish: 'Nasi studenci długo przygotowywali się do egzaminu i w końcu go zdali.', translation: 'Our students prepared for the exam for a long time and finally passed it.' },
      { polish: 'Te nowe okulary i spodnie świetnie na tobie leżą.', translation: 'These new glasses and trousers look great on you.' },
    ],
  },
  51: {
    coursebookPages: '12–23',
    communication: 'We talk about learning foreign languages and memorising information, express manner, give advice, and manage the flow of a conversation.',
    vocabulary: 'Learning methods, memory, language projects, exams; idioms: mieć to na końcu języka (to have it on the tip of one’s tongue), mieć w głowie groch z kapustą (to have a total jumble in one’s head), łamać sobie język (to twist one’s tongue), siedzieć jak na szpilkach (to be on pins and needles), mieć nerwy ze stali (to have nerves of steel).',
    grammar: 'Adverbials of manner (okoliczniki sposobu): adverbs in -o/-e (dobrze, płynnie, biegle), po + -u/-sku expressions (po polsku, po cichu), and prepositional phrases (z łatwością, bez problemu, na pamięć). Contrast between jak? (how? → adverb) and jaki? jaka? jakie? (what kind of? → adjective). Review of the imperative (powtórz, nie denerwuj się, spróbujmy), conditional mood (nauczyłbym się, warto by było), and prepositions na, w, po, za + accusative.',
    examples: [
      { polish: 'Jak mówisz po polsku? Mówię płynnie, ale czasem łamię sobie język.', translation: 'How do you speak Polish? I speak fluently, though sometimes I twist my tongue.' },
      { polish: 'Jaki jest ten kurs? Jest bardzo intensywny i praktyczny.', translation: 'What is this course like? It is very intensive and practical.' },
      { polish: 'Gdybym miał więcej czasu, uczyłbym się nowych słówek na pamięć codziennie.', translation: 'If I had more time, I would memorise new vocabulary every day.' },
    ],
  },
  52: {
    coursebookPages: '24–33',
    communication: 'We describe people’s appearance in detail, express appreciation, give compliments, and share opinions on style and looks.',
    vocabulary: 'Facial features, build, hairstyles, clothes and accessories; idioms: wyglądać jak milion dolarów (to look like a million dollars), wyglądać kwitnąco (to look radiant), tryskać zdrowiem (to be bursting with health), wyglądać jak siedem nieszczęść (to look miserable/awful), jak cię widzą, tak cię piszą (fine feathers make fine birds / first impressions count).',
    grammar: 'Comparison of adjectives (stopniowanie przymiotników) and adverbs (stopniowanie przysłówków): synthetic forms in -szy/-ejszy + naj- (wysoki → wyższy → najwyższy, ładny → ładniejszy → najładniejszy), analytic forms with bardziej / najbardziej (elegancki → bardziej elegancki), and irregular forms (dobry → lepszy → najlepszy; zły → gorszy → najgorszy; duży → większy → największy; mały → mniejszy → najmniejszy; dobrze → lepiej → najlepiej; dużo → więcej → najwięcej). Comparative structures: niż + Nom., od + Gen., tak ... jak, coraz + comp., im ..., tym ...',
    examples: [
      { polish: 'Dzisiaj wyglądasz kwitnąco — jeszcze lepiej niż wczoraj!', translation: 'You look radiant today — even better than yesterday!' },
      { polish: 'Jej nowy płaszcz jest znacznie elegantszy od poprzedniego.', translation: 'Her new coat is much more elegant than the previous one.' },
      { polish: 'Im częściej uprawia sport, tym lepiej się czuje i tryska zdrowiem.', translation: 'The more often he does sports, the better he feels and the healthier he looks.' },
    ],
  },
  53: {
    coursebookPages: '34–41',
    communication: 'We discuss working conditions, salaries, everyday life, and living standards; we express satisfaction, dissatisfaction, and disappointment.',
    vocabulary: 'Working conditions, wages, labour law, household appliances and housing; number idioms: upiec dwie pieczenie na jednym ogniu (to kill two birds with one stone), być w siódmym niebie (to be in seventh heaven), ni w pięć, ni w dziewięć (out of the blue / making no sense), wtrącić swoje trzy grosze (to put in one’s two cents).',
    grammar: 'Syntax of numerals (składnia liczebników): with 2, 3, 4 (dwa/dwie, trzy, cztery) in non-masculine-personal, noun and verb take Nominative plural (trzy nowe pralki działają); in masculine-personal, use either dwaj/trzej/czterej + Nom. pl. (trzej nauczyciele pracują) or dwóch/trzech/czterech + Gen. pl. + 3rd sg. neuter verb (trzech nauczycieli pracowało). From 5 upwards (pięć, dziesięć, dwadzieścia, wiele, kilka), the noun is in Genitive plural and the verb is 3rd person singular neuter (pięć osób czekało, sześciu pracowników otrzymało podwyżkę). Collective numerals (dwoje, troje, czworo) are used with children (troje dzieci), mixed-gender groups, and pluralia tantum (dwoje drzwi).',
    examples: [
      { polish: 'Pięciu nowych pracowników podpisało już umowę o pracę.', translation: 'Five new employees have already signed their employment contracts.' },
      { polish: 'W naszym mieszkaniu są dwa pokoje i troje dzieci.', translation: 'In our flat there are two rooms and three children.' },
      { polish: 'Jestem rozczarowany zarobkami, ale przynajmniej upiekłem dwie pieczenie na jednym ogniu.', translation: 'I am disappointed with the pay, but at least I killed two birds with one stone.' },
    ],
  },
  54: {
    coursebookPages: '42–51',
    communication: 'We talk about living abroad, migration, multiculturalism, and cultural adaptation; we compare, describe, and narrate past experiences.',
    vocabulary: 'Poles abroad and foreigners in Poland, rodak (compatriot), ojczyzna (homeland), akulturacja, wielokulturowość; idioms: upaść na głowę (to lose one’s mind), coś się nie mieści w głowie (it beggars belief), przyjąć kogoś z otwartymi ramionami (to welcome with open arms), stanąć na własnych nogach (to stand on one’s own two feet).',
    grammar: 'Declension of cardinal numerals in Accusative, Genitive, and Instrumental: dwa → dwóch / dwoma (fem. dwiema), trzy → trzech / trzema, cztery → czterech / czterema, pięć → pięciu / pięcioma (or pięciu), dwadzieścia → dwudziestu / dwudziestoma, sto → stu / stoma. Time expressions with numerals: od + Gen. (od dwudziestu lat), przed + Inst. (przed pięcioma laty), za + Acc. (za trzy miesiące), przez + Acc. (przez cztery lata), w ciągu + Gen. (w ciągu dwóch tygodni).',
    examples: [
      { polish: 'Mieszkam w Polsce od dwudziestu lat i dawno stanąłem na własnych nogach.', translation: 'I have lived in Poland for twenty years and stood on my own two feet long ago.' },
      { polish: 'Rozmawiałem z trzema rodakami, którzy przyjechali tu przed pięcioma laty.', translation: 'I spoke with three compatriots who arrived here five years ago.' },
      { polish: 'Przyjęli nas z otwartymi ramionami, a w ciągu dwóch miesięcy poznaliśmy wielu sąsiadów.', translation: 'They welcomed us with open arms, and within two months we met many neighbours.' },
    ],
  },
  55: {
    coursebookPages: '52–57',
    communication: 'Review and consolidation of Lessons 0–4: exam strategies, language-learning advice, describing appearance, working conditions, and stories of living abroad.',
    vocabulary: 'Review of key vocabulary and idioms from Lessons 0–4 (błąd, language idioms, appearance, numbers, migration and adaptation).',
    grammar: 'Comprehensive review: nominative plural and pluralia tantum, verbal aspect, adverbials of manner (jak? vs jaki?), comparison of adjectives and adverbs, numeral syntax and declension (Acc., Gen., Inst.), and time expressions.',
    examples: [
      { polish: 'Od czterech lat uczę się polskiego i mówię coraz płynniej.', translation: 'I have been learning Polish for four years and speak more and more fluently.' },
      { polish: 'W projekcie wzięło udział dwudziestu studentów z różnych krajów.', translation: 'Twenty students from different countries took part in the project.' },
    ],
  },
  56: {
    coursebookPages: '58–67',
    communication: 'We handle official matters in public offices: expressing necessity, asking for permission, granting or refusing requests, and writing formal enquiries.',
    vocabulary: 'Public offices (urząd miasta, urząd wojewódzki, urząd skarbowy, ZUS), documents (wniosek, zaświadczenie, karta pobytu, podpis, pieczątka); idioms: mieć ręce pełne roboty (to have one’s hands full), papierkowa robota (paperwork/red tape), załatwić coś od ręki (to sort something out on the spot).',
    grammar: 'The ę : ą alternation in noun declension (urząd → urzędu, błąd → błędu, mąż → męża, święto → świąt, ręka → rąk). The modal structure mieć + infinitive for obligation, plans, or reported instructions (Mam złożyć wniosek do piątku; To ma być gotowe jutro). Special declension of neuter nouns ending in -ę: the imię type (Gen. imienia, Dat. imieniu, Inst. imieniem, pl. imiona, imion — also ramię, plemię) and the zwierzę type (Gen. zwierzęcia, Dat. zwierzęciu, pl. zwierzęta, zwierząt — also niemowlę, szczenię).',
    examples: [
      { polish: 'Mam złożyć wniosek w urzędzie wojewódzkim, bo ta papierkowa robota nie może czekać.', translation: 'I have to submit an application at the voivodeship office, because this paperwork cannot wait.' },
      { polish: 'Proszę wpisać swoje imię oraz imiona rodziców w formularzu.', translation: 'Please write your first name and your parents’ first names on the form.' },
      { polish: 'W schronisku brakuje karmy dla zwierząt, dlatego musimy załatwić to od ręki.', translation: 'The shelter is short of animal food, so we have to sort this out right away.' },
    ],
  },
  57: {
    coursebookPages: '68–77',
    communication: 'We use everyday services and call tradespeople: making promises and assurances, offering help, thanking, and reporting faults.',
    vocabulary: 'Workshops and services (hydraulik, elektryk, szewc, krawiec, mechanik, serwis), vocabulary: usterka (fault), wadliwy (defective), gwarancja, reklamacja; idioms: złota rączka (handyman / Jack of all trades), mieć coś w małym palcu (to know something inside out), nie kiwnąć palcem (not to lift a finger), siedzieć z założonymi rękami (to sit on one’s hands).',
    grammar: 'Adjectival declension of nouns (odmiana przymiotnikowa rzeczowników): words like znajomy, podróżny, bezrobotny, narzeczony, chory, księgowy (Gen. znajomego, Dat. znajomemu, Inst. znajomym; pl. znajomi, znajomych); masculine first names ending in -y/-i (Jerzy → Jerzego, Jerzemu, z Jerzym; Antoni → Antoniego, Antoniemu, z Antonim); and Polish surnames ending in -ski, -cki, -dzki (masc. Kowalski → Kowalskiego, Kowalskiemu, Kowalskim; fem. Kowalska → Kowalskiej, Kowalską; pl. państwo Kowalscy → Kowalskich, Kowalskimi).',
    examples: [
      { polish: 'Zadzwoniłem do znajomego elektryka, pana Jerzego Kowalskiego — to prawdziwa złota rączka.', translation: 'I called a familiar electrician, Mr Jerzy Kowalski — he is a real handyman.' },
      { polish: 'Rozmawiałem z panią Anną Nowacką o wadliwym sprzęcie i obiecała szybką naprawę.', translation: 'I spoke with Ms Anna Nowacka about the defective equipment and she promised a quick repair.' },
      { polish: 'Państwo Zielińscy mają ten temat w małym palcu.', translation: 'Mr and Mrs Zieliński know this topic inside out.' },
    ],
  },
  58: {
    coursebookPages: '78–87',
    communication: 'We discuss money, household budgets, spending, and saving; we learn how to open a conversation and express certainty or uncertainty.',
    vocabulary: 'Money, budgeting, savings, konto, przelew, rata, oszczędzać, wydawać, zero waste; idioms and proverbs: mieć węża w kieszeni (to be tight-fisted), obiecywać złote góry (to promise the moon), pieniądze szczęścia nie dają (money can’t buy happiness).',
    grammar: 'Special declension of pieniądz and miesiąc: singular has ą:ę alternation (pieniądz → pieniądza, pieniądzowi, pieniądzem; miesiąc → miesiąca, miesiącowi, miesiącem), while plural forms are Nom. pieniądze / miesiące, Gen. pieniędzy / miesięcy, Inst. pieniędzmi / miesiącami, Loc. o pieniądzach / miesiącach. Expressing certainty (na pewno, bez wątpienia, jestem przekonany, że…) and uncertainty (chyba, może, prawdopodobnie, wątpię, żeby…).',
    examples: [
      { polish: 'Od trzech miesięcy nie mamy żadnych dodatkowych pieniędzy na remont.', translation: 'For three months we have had no extra money for renovations.' },
      { polish: 'Na pewno warto oszczędzać, choć wątpię, żeby pieniądze dawały szczęście.', translation: 'It is definitely worth saving, although I doubt that money brings happiness.' },
      { polish: 'Nie warto ufać komuś, kto obiecuje złote góry, a sam ma węża w kieszeni.', translation: 'It is not worth trusting someone who promises the moon while being stingy.' },
    ],
  },
  59: {
    coursebookPages: '88–97',
    communication: 'We talk about economics, entrepreneurship, and the job market; we express conditions and consequences and justify our views.',
    vocabulary: 'Economic vocabulary (rynek, inwestycja, zysk, strata, konkurencja, firma, przedsiębiorca); idioms and proverbs: jaka praca, taka płaca (you get paid what your work is worth), żadna praca nie hańbi (no honest work is shameful), bez pracy nie ma kołaczy (no pain, no gain), wyścig szczurów (the rat race), wziąć się do roboty (to get down to work).',
    grammar: 'Conditional sentences (zdania warunkowe) with jeśli / jeżeli / gdyby / jakby: real conditions use present or future tense (Jeżeli masz czas / będziesz mieć czas, to mi pomożesz); hypothetical/unreal conditions use the conditional mood (Gdybyś miał doświadczenie, dostałbyś tę pracę). Unlike English, Polish has no backshifting sequence of tenses (brak następstwa czasów): subordinate clauses keep the tense from the speaker’s perspective (Powiedział, że szuka pracy / że znajdzie pracę).',
    examples: [
      { polish: 'Jeżeli weźmiemy się do roboty już dziś, to do piątku skończymy projekt.', translation: 'If we get down to work today, we will finish the project by Friday.' },
      { polish: 'Gdybyś miał lepszy biznesplan, inwestorzy chętniej by cię wsparli.', translation: 'If you had a better business plan, investors would support you more willingly.' },
      { polish: 'Szef powiedział, że firma rozwija się dobrze i wkrótce zatrudni nowe osoby.', translation: 'The boss said that the company is developing well and will soon hire new people.' },
    ],
  },
  60: {
    coursebookPages: '98–103',
    communication: 'Review of Lessons 6–9: official errands, services, household finances, certainty/uncertainty, and workplace argumentation.',
    vocabulary: 'Consolidation of vocabulary and idioms from Lessons 6–9 (public offices, services, money, economics, and work).',
    grammar: 'Comprehensive review: ę:ą alternation, mieć + infinitive, neuter nouns in -ę (imię, zwierzę), adjectival declension of nouns/names/surnames, declension of pieniądz and miesiąc, conditional sentences, and lack of tense backshifting.',
    examples: [
      { polish: 'Gdybym miał więcej pieniędzy, zatrudniłbym pana Kowalskiego do remontu.', translation: 'If I had more money, I would hire Mr Kowalski for the renovation.' },
      { polish: 'Mam załatwić tę sprawę w urzędzie w ciągu dwóch miesięcy.', translation: 'I have to settle this matter at the office within two months.' },
    ],
  },
  61: {
    coursebookPages: '104–111',
    communication: 'We talk about politics, elections, and civic life in Poland; we express importance, indifference, and distance.',
    vocabulary: 'Political life (sejm, senat, rząd, prezydent, wybory, partia, lewica, prawica, głosować, budżet obywatelski); idioms: rządy silnej ręki (iron-fist rule), poprawność polityczna (political correctness), okrągły stół (round table), wotum zaufania (vote of confidence).',
    grammar: 'Declension of rząd “government” (retains ą in all cases: Gen. rządu, Dat. rządowi, Inst. rządem, Loc. o rządzie, pl. rządy, rządów — unlike rząd “row”, which alternates ą:ę: Gen. rzędu, pl. rzędy). Syntax of sentences with a Genitive subject (podmiot w dopełniaczu): with quantifiers (dużo, mało, wielu, pięciu, większość), verbs of lack/change (brakuje, przybywa, ubywa), and existential negation (nie ma / nie było / nie będzie), the verb takes 3rd person singular neuter (Brakuje pieniędzy; Wielu wyborców nie głosowało).',
    examples: [
      { polish: 'Większość obywateli nie interesuje się nowymi decyzjami rządu.', translation: 'Most citizens are not interested in the government’s new decisions.' },
      { polish: 'W parlamencie zabrakło głosów do uzyskania wotum zaufania.', translation: 'Parliament lacked enough votes for a vote of confidence.' },
      { polish: 'Szczerze mówiąc, jest mi to zupełnie obojętne, kto wygra te wybory.', translation: 'Honestly, I could not care less who wins this election.' },
    ],
  },
  62: {
    coursebookPages: '112–121',
    communication: 'We debate equality, human rights, and discrimination; we structure discussions, define concepts, and express opinions.',
    vocabulary: 'Equality and civil rights (równouprawnienie, dyskryminacja, tolerancja, obywatel, mniejszość, prawa człowieka); idioms with “prawo”: albo w prawo, albo w lewo (one way or the other), na prawo i (na) lewo (left, right, and centre), prawo dżungli (law of the jungle), jakim prawem? (by what right?), obejść prawo (to circumvent the law), być ponad prawem (to be above the law), zrobić coś na lewo (to do something under the table / illegally).',
    grammar: 'Review of country names in the Genitive (Polska → Polski, Francja → Francji, Niemcy → Niemiec, Włochy → Włoch, Czechy → Czech, Węgry → Węgier, Stany Zjednoczone → Stanów Zjednoczonych). Declension of masculine nouns in -anin (Amerykanin, Rosjanin, chrześcijanin, mieszczanin, krakowianin): singular retains -in (Amerykanina, Amerykaninowi, Amerykaninem), while plural drops -in! Nom. pl. Amerykanie, Gen. pl. Amerykanów (but Rosjan, mieszczan, chrześcijan, krakowian with zero ending!), Dat. Amerykanom, Inst. Amerykanami.',
    examples: [
      { polish: 'Wielu Amerykanów i Rosjan mieszka obecnie w Polsce i korzysta z tych samych praw.', translation: 'Many Americans and Russians currently live in Poland and enjoy the same rights.' },
      { polish: 'Nikt nie może być ponad prawem ani próbować obejść prawa.', translation: 'No one can be above the law or try to circumvent the law.' },
      { polish: 'Przyjechali do nas goście z Niemiec, Włoch i Stanów Zjednoczonych.', translation: 'Guests from Germany, Italy, and the United States visited us.' },
    ],
  },
  63: {
    coursebookPages: '122–131',
    communication: 'We describe accidents and incidents, report what others said, and prompt others to tell their story.',
    vocabulary: 'Road and workplace accidents (wypadek, kolizja, poszkodowany, świadek, karetka, pierwsza pomoc, wypadek przy pracy); idioms: na wszelki wypadek (just in case), wypadek przy pracy (workplace accident), w żadnym wypadku (under no circumstances), przez przypadek (by accident), od przypadku do przypadku (occasionally / haphazardly).',
    grammar: 'Reported speech (mowa zależna): statements use że (Powiedział, że widział wypadek), questions use czy or a question word (Zapytał, czy ktoś wezwał karetkę; Zapytał, gdzie to się stało), and requests/commands use żeby + past-tense form (Poprosił, żebym zadzwonił) or an infinitive (Kazał nam poczekać). Declension of possessive pronouns (mój, twój, swój, nasz, wasz — Gen. mojego, mojej, naszych; Inst. moim, moją, naszymi) plus invariable jego, jej, ich. Reflexive swój refers back to the subject of any person.',
    examples: [
      { polish: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego telefonu i wezwał policję.', translation: 'The witness said that just in case he wrote down his phone number and called the police.' },
      { polish: 'Policjant zapytał nas, czy widzieliśmy kierowcę tamtego auta.', translation: 'The police officer asked us whether we had seen the driver of that car.' },
      { polish: 'W żadnym wypadku nie ruszaj poszkodowanego, dopóki nie przyjedzie karetka.', translation: 'Under no circumstances move the injured person until the ambulance arrives.' },
    ],
  },
  64: {
    coursebookPages: '132–141',
    communication: 'We discuss nature, climate, and ecology; we express approval, disapproval, and protest, and write formal letters.',
    vocabulary: 'Ecology and climate (środowisko, zanieczyszczenie, smog, recykling, zakaz palenia węglem, odnawialne źródła energii); idioms: efekt cieplarniany (greenhouse effect), burza w szklance wody (a storm in a teacup), suchy jak pieprz (bone dry), królik doświadczalny (guinea pig).',
    grammar: 'Review of the Dative case (Celownik: komu? czemu?) singular and plural: masc. sg. -owi (studentowi, klimatowi) with short exceptions in -u (panu, bratu, ojcu, psu, kotu, światu); neut. sg. -u (dziecku, środowisku, morzu); fem. sg. -e (with alternations: rzeka → rzece, droga → drodze, woda → wodzie) or -i/-y (ziemi, nocy); plural always -om (ludziom, zwierzętom, roślinom). Adjectives: masc./neut. -emu, fem. -ej, pl. -ym/-im. Verbs governing Dative: pomagać, szkodzić, zagrażać, przyglądać się, dziwić się, ufać, przeciwstawiać się.',
    examples: [
      { polish: 'Smog i plastik poważnie szkodzą naszemu środowisku oraz przyszłym pokoleniom.', translation: 'Smog and plastic seriously harm our environment and future generations.' },
      { polish: 'Stanowczo protestujemy przeciwko wycince lasu i pomagamy lokalnym organizacjom.', translation: 'We strongly protest against deforestation and help local organisations.' },
      { polish: 'To nie jest burza w szklance wody — efekt cieplarniany zagraża całemu światu.', translation: 'This is not a storm in a teacup — the greenhouse effect threatens the whole world.' },
    ],
  },
  65: {
    coursebookPages: '142–147',
    communication: 'Review of Lessons 11–14: politics and society, debating rights, reporting accidents, environmental protest, and formal correspondence.',
    vocabulary: 'Review of key vocabulary and idioms from Lessons 11–14 (politics, law, accidents, ecology).',
    grammar: 'Comprehensive review: declension of rząd, Genitive-subject clauses, country names in Genitive, -anin nouns, reported speech, possessive pronouns (including swój), and Dative singular and plural.',
    examples: [
      { polish: 'Dziennikarz zapytał, czy nowy zakaz pomoże mieszkańcom dużych miast.', translation: 'The journalist asked whether the new ban would help residents of big cities.' },
      { polish: 'Wielu obywateli z Niemiec i Stanów Zjednoczonych sprzeciwia się dyskryminacji.', translation: 'Many citizens from Germany and the United States oppose discrimination.' },
    ],
  },
  66: {
    coursebookPages: '148–157',
    communication: 'We talk about mass media, journalism, and fake news; we establish contact in conversations and letters, conduct simple interviews, and analyse essays.',
    vocabulary: 'Mass media (prasa, telewizja, media społecznościowe, dziennikarz, rzetelny, dezinformacja, fake news, wywiad); idioms: czwarta władza (the fourth estate), ciągnąć kogoś za język (to pump someone for information), wiadomość z pierwszej ręki (first-hand news), owijać w bawełnę (to beat around the bush).',
    grammar: 'Declension of negative pronouns nikt, nic, żaden: nikt → nikogo, nikomu, nikogo, z nikim, o nikim; nic → niczego/nic, niczemu, nic, z niczym, o niczym; żaden / żadna / żadne declines like an adjective (żadnego, żadnej, żadnych). Polish requires double negation (Nikt niczego nie widział; Nie przeczytałem żadnego artykułu). Review of the Vocative case (Wołacz) in formal and informal address: Szanowny Panie Redaktorze!, Droga Pani Anno!, Cześć, Marku / Kasiu / Piotrze!',
    examples: [
      { polish: 'Szanowny Panie Redaktorze, nikt nie sprawdził tej informacji z pierwszej ręki!', translation: 'Dear Editor, nobody verified this information first-hand!' },
      { polish: 'Nie owijaj w bawełnę — nie mam przed nikim żadnych tajemnic.', translation: 'Don’t beat around the bush — I have no secrets from anyone.' },
      { polish: 'W tamtym wywiadzie nie usłyszałem niczego nowego.', translation: 'In that interview I did not hear anything new.' },
    ],
  },
  67: {
    coursebookPages: '158–167',
    communication: 'We persuade, convince, and craft advertising arguments; we describe objects, graphic symbols, and design.',
    vocabulary: 'Advertising, persuasion, design, object description (kształt, materiał, wzór, funkcjonalny, przyciągać uwagę); idioms: przejść do rzeczy (to get to the point), nabić kogoś w butelkę (to take someone for a ride / fool someone), wpaść w ucho (to be catchy).',
    grammar: 'Declension of the reflexive pronoun się (stressed and unstressed forms): Gen. siebie / się, Dat. sobie, Acc. siebie / się, Inst. sobą, Loc. o sobie (Patrzę na siebie; Kupiłem sobie książkę; Rozmawiamy ze sobą; Mówią o sobie). Review of personal pronoun declension (ja/mnie/mi/mną, on/jego/go/niego/mu/nim) and the imperative mood (przejdźmy, przekonaj, nie daj się nabić w butelkę, zaufaj mi).',
    examples: [
      { polish: 'Przejdźmy do rzeczy i nie dajmy się nabić w butelkę tej reklamie!', translation: 'Let’s get to the point and not let this advert fool us!' },
      { polish: 'Kup sobie ten produkt — zobaczysz, że szybko będziesz z siebie zadowolony.', translation: 'Buy yourself this product — you will see that you’ll soon be pleased with yourself.' },
      { polish: 'Ta melodia od razu wpadła mi w ucho, więc ciągle ją sobie nucę.', translation: 'This melody caught my ear immediately, so I keep humming it to myself.' },
    ],
  },
  68: {
    coursebookPages: '168–179',
    communication: 'We talk about culture, literature, film, theatre, and music; we express tastes and preferences, narrate artistic events, and write book reviews.',
    vocabulary: 'Arts and culture (wystawa, premiera, recenzja, reżyser, fabuła, arcydzieło, publiczność, koncert); idioms: widać rękę artysty (you can see the hand of an artist), świecić pustkami (to stand empty), połknąć bakcyla (to catch the bug), otworzyć drzwi do kariery (to open the door to a career).',
    grammar: 'Locative case (Miejscownik: o kim? o czym?) after prepositional expressions denoting the topic or setting of a work: o + Loc. (mówić / pisać / film o..., książka o...), po + Loc. (po spektaklu, po premierze), w + Loc. (w tym filmie, w powieści, w wierszu), na + Loc. (na wystawie, na koncercie, na scenie), przy + Loc. (przy muzyce). Review of Locative endings: sg. -e with alternations (teatr → w teatrze, sztuka → o sztuce, książka → w książce), -u after soft stems and masc./neut. k/g/ch (w filmie, o artyście, w muzeum), and pl. -ach (o autorach, w wierszach).',
    examples: [
      { polish: 'W tej nowej powieści widać rękę artysty — opowiada o trudnej miłości i pamięci.', translation: 'In this new novel you can see the hand of an artist — it tells of difficult love and memory.' },
      { polish: 'Po premierze w teatrze sala nigdy nie świeciła pustkami.', translation: 'After the premiere at the theatre, the hall was never empty.' },
      { polish: 'Na wystawie w muzeum połknąłem bakcyla fotografii artystycznej.', translation: 'At the museum exhibition I caught the bug for fine-art photography.' },
    ],
  },
  69: {
    coursebookPages: '180–189',
    communication: 'We discuss religion, faith, traditions, and worldviews; we formulate questions and hypotheses, and write greeting cards and regional descriptions.',
    vocabulary: 'Religion, denominations, symbols, and holidays (wiara, wyznanie, tradycja, obrzęd, tolerancja, kościół, świątynia); biblical and cultural idioms: mieć świętą cierpliwość (to have the patience of a saint), rzucić kamieniem jako pierwszy (to cast the first stone), wieża Babel (Tower of Babel), być alfą i omegą (to be the alpha and omega / a know-it-all).',
    grammar: 'Declension of interrogative pronouns jaki, który, czyj across all cases, genders, and numbers (masc./neut. jakiego/którego/czyjego, jakiemu/któremu/czyjemu, jakim/którym/czyim; fem. jakiej/której/czyjej, jaką/którą/czyją; pl. jakich/których/czyich, jakimi/którymi/czyimi; masc.-pers. Nom. pl. jacy, którzy, czyi). Review of the conditional mood (tryb warunkowy) for hypotheses and polite questions (Co byś zrobił, gdyby…?; Którą tradycję chciałbyś poznać lepiej?; Czyim zdaniem to jest ważne?).',
    examples: [
      { polish: 'Której religii symbolem jest ten znak i w jakim kraju występuje najczęściej?', translation: 'Which religion is this sign a symbol of, and in which country does it appear most often?' },
      { polish: 'Czyim zdaniem można być alfą i omegą w sprawach wiary i historii?', translation: 'In whose opinion can anyone be the alpha and omega in matters of faith and history?' },
      { polish: 'Gdyby ludzie mieli więcej świętej cierpliwości, łatwiej by się ze sobą dogadywali.', translation: 'If people had more saintly patience, they would get along more easily.' },
    ],
  },
  70: {
    coursebookPages: '190–196',
    communication: 'Final review of Lessons 16–19 and full B1 certificate exam preparation: media, persuasion, culture, worldviews, plus speaking and writing exam tasks.',
    vocabulary: 'Consolidation of vocabulary and idioms from Lessons 16–19 (media, advertising & design, culture, religion & traditions) and the entire Hurra 3 course.',
    grammar: 'Comprehensive review: negative pronouns nikt, nic, żaden with double negation, Vocative case, declension of się and personal pronouns, imperative mood, Locative for topics and cultural settings, interrogative pronouns jaki, który, czyj, and the conditional mood.',
    examples: [
      { polish: 'Nikt z nas nie wiedział, o którym filmie rozmawialiście po premierze.', translation: 'None of us knew which film you were talking about after the premiere.' },
      { polish: 'Szanowni Państwo, przejdźmy do rzeczy — jaką decyzję podjęlibyście w tej sytuacji?', translation: 'Ladies and Gentlemen, let’s get to the point — what decision would you make in this situation?' },
    ],
  },
};

export const PART3_THEORY_PL: Record<Part3LessonTheoryId, LessonTheory> = {
  50: {
    coursebookPages: '6–11',
    communication: 'Rozmawiamy o egzaminie certyfikatowym z języka polskiego na poziomie B1: zadajemy pytania, odpowiadamy, uzasadniamy swoje zdanie i analizujemy polecenia egzaminacyjne.',
    vocabulary: 'Terminologia gramatyczna (mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik, wołacz; czasownik, rzeczownik, przymiotnik, przysłówek, aspekt), formy wypowiedzi egzaminacyjnych oraz idiomy ze słowem „błąd”: być w błędzie, przyznać się do błędu, uczyć się na błędach, wybaczyć błąd, wprowadzać w błąd, wyprowadzać z błędu.',
    grammar: 'Powtórzenie kluczowych zagadnień gramatycznych: mianownik liczby mnogiej (rodzaj męskoosobowy na -i/-y/-owie/-e z alternacjami: Polak → Polacy, student → studenci, kolega → koledzy, profesor → profesorowie; niemęskoosobowy na -y/-i/-e/-a), rzeczowniki pluralia tantum (drzwi, okulary, spodnie, nożyczki, wakacje, urodziny, imieniny), aspekt czasownika (niedokonany — proces/powtarzalność vs dokonany — rezultat/jednorazowość) oraz najważniejsze alternacje tematyczne (ó:o, ą:ę, e:Ø, k:c, t:ci, r:rz).',
    examples: [
      { polish: 'Każdy uczy się na własnych błędach, więc warto przyznać się do błędu.', translation: 'Każdy uczy się na własnych błędach, więc warto przyznać się do błędu.' },
      { polish: 'Nasi studenci długo przygotowywali się do egzaminu i w końcu go zdali.', translation: 'Nasi studenci długo przygotowywali się do egzaminu i w końcu go zdali.' },
      { polish: 'Te nowe okulary i spodnie świetnie na tobie leżą.', translation: 'Te nowe okulary i spodnie świetnie na tobie leżą.' },
    ],
  },
  51: {
    coursebookPages: '12–23',
    communication: 'Mówimy o nauce języków obcych i sposobach zapamiętywania informacji, wyrażamy sposób wykonania czynności, udzielamy rad i prowadzimy rozmowę.',
    vocabulary: 'Metody uczenia się, pamięć, projekty językowe, egzaminy; idiomy: mieć to na końcu języka, mieć w głowie groch z kapustą, łamać sobie język, siedzieć jak na szpilkach, mieć nerwy ze stali.',
    grammar: 'Okoliczniki sposobu: przysłówki na -o/-e (dobrze, płynnie, biegle), wyrażenia z po (po polsku, po cichu) oraz wyrażenia przyimkowe (z łatwością, bez problemu, na pamięć). Opozycja zaimków pytajnych jak? (odpowiedź przysłówkiem) i jaki? jaka? jakie? (odpowiedź przymiotnikiem). Powtórzenie trybu rozkazującego (powtórz, nie denerwuj się, spróbujmy), trybu przypuszczającego (nauczyłbym się, warto by było) oraz przyimków na, w, po, za + biernik.',
    examples: [
      { polish: 'Jak mówisz po polsku? Mówię płynnie, ale czasem łamię sobie język.', translation: 'Jak mówisz po polsku? Mówię płynnie, ale czasem łamię sobie język.' },
      { polish: 'Jaki jest ten kurs? Jest bardzo intensywny i praktyczny.', translation: 'Jaki jest ten kurs? Jest bardzo intensywny i praktyczny.' },
      { polish: 'Gdybym miał więcej czasu, uczyłbym się nowych słówek na pamięć codziennie.', translation: 'Gdybym miał więcej czasu, uczyłbym się nowych słówek na pamięć codziennie.' },
    ],
  },
  52: {
    coursebookPages: '24–33',
    communication: 'Szczegółowo opisujemy wygląd osób, wyrażamy uznanie, prawimy komplementy i dzielimy się opiniami na temat stylu i wizerunku.',
    vocabulary: 'Rysy twarzy, sylwetka, fryzura, ubiór i dodatki; idiomy: wyglądać jak milion dolarów, wyglądać kwitnąco, tryskać zdrowiem, wyglądać jak siedem nieszczęść, jak cię widzą, tak cię piszą.',
    grammar: 'Stopniowanie przymiotników i przysłówków: regularne na -szy/-ejszy + naj- (wysoki → wyższy → najwyższy, ładny → ładniejszy → najładniejszy), opisowe z bardziej / najbardziej (elegancki → bardziej elegancki) oraz nieregularne (dobry → lepszy → najlepszy; zły → gorszy → najgorszy; duży → większy → największy; mały → mniejszy → najmniejszy; dobrze → lepiej → najlepiej; dużo → więcej → najwięcej). Konstrukcje porównawcze: niż + M., od + D., tak ... jak, coraz + stopień wyższy, im ..., tym ...',
    examples: [
      { polish: 'Dzisiaj wyglądasz kwitnąco — jeszcze lepiej niż wczoraj!', translation: 'Dzisiaj wyglądasz kwitnąco — jeszcze lepiej niż wczoraj!' },
      { polish: 'Jej nowy płaszcz jest znacznie elegantszy od poprzedniego.', translation: 'Jej nowy płaszcz jest znacznie elegantszy od poprzedniego.' },
      { polish: 'Im częściej uprawia sport, tym lepiej się czuje i tryska zdrowiem.', translation: 'Im częściej uprawia sport, tym lepiej się czuje i tryska zdrowiem.' },
    ],
  },
  53: {
    coursebookPages: '34–41',
    communication: 'Rozmawiamy o warunkach pracy, płacach, zarobkach i warunkach życia; wyrażamy zadowolenie, niezadowolenie oraz rozczarowanie.',
    vocabulary: 'Warunki pracy, wynagrodzenie, kodeks pracy, urządzenia domowe; idiomy z liczbami: upiec dwie pieczenie na jednym ogniu, być w siódmym niebie, ni w pięć, ni w dziewięć, wtrącić swoje trzy grosze.',
    grammar: 'Składnia liczebników: przy 2, 3, 4 (dwa/dwie, trzy, cztery) w rodzaju niemęskoosobowym rzeczownik i czasownik stoją w M. lm. (trzy nowe pralki działają), a w męskoosobowym używamy dwaj/trzej/czterej + M. lm. (trzej nauczyciele pracują) albo dwóch/trzech/czterech + D. lm. + czasownik w 3. os. lp. r. nijakiego (trzech nauczycieli pracowało). Od 5 wzwyż (pięć, dziesięć, dwadzieścia, wiele, kilka) rzeczownik stoi w D. lm., a czasownik w 3. os. lp. r. nijakiego (pięć osób czekało, sześciu pracowników otrzymało podwyżkę). Liczebniki zbiorowe (dwoje, troje, czworo) łączą się z dziećmi (troje dzieci), grupami mieszanymi i pluralia tantum (dwoje drzwi).',
    examples: [
      { polish: 'Pięciu nowych pracowników podpisało już umowę o pracę.', translation: 'Pięciu nowych pracowników podpisało już umowę o pracę.' },
      { polish: 'W naszym mieszkaniu są dwa pokoje i troje dzieci.', translation: 'W naszym mieszkaniu są dwa pokoje i troje dzieci.' },
      { polish: 'Jestem rozczarowany zarobkami, ale przynajmniej upiekłem dwie pieczenie na jednym ogniu.', translation: 'Jestem rozczarowany zarobkami, ale przynajmniej upiekłem dwie pieczenie na jednym ogniu.' },
    ],
  },
  54: {
    coursebookPages: '42–51',
    communication: 'Rozmawiamy o życiu za granicą, migracjach, wielokulturowości i adaptacji; porównujemy, opisujemy i opowiadamy o wydarzeniach z przeszłości.',
    vocabulary: 'Polacy za granicą i cudzoziemcy w Polsce, rodak, ojczyzna, akulturacja, wielokulturowość; idiomy: upaść na głowę, coś się nie mieści w głowie, przyjąć kogoś z otwartymi ramionami, stanąć na własnych nogach.',
    grammar: 'Odmiana liczebników głównych w bierniku, dopełniaczu i narzędniku: dwa → dwóch / dwoma (ż. dwiema), trzy → trzech / trzema, cztery → czterech / czterema, pięć → pięciu / pięcioma (lub pięciu), dwadzieścia → dwudziestu / dwudziestoma, sto → stu / stoma. Wyrażenia czasowe: od + D. (od dwudziestu lat), przed + N. (przed pięcioma laty), za + B. (za trzy miesiące), przez + B. (przez cztery lata), w ciągu + D. (w ciągu dwóch tygodni).',
    examples: [
      { polish: 'Mieszkam w Polsce od dwudziestu lat i dawno stanąłem na własnych nogach.', translation: 'Mieszkam w Polsce od dwudziestu lat i dawno stanąłem na własnych nogach.' },
      { polish: 'Rozmawiałem z trzema rodakami, którzy przyjechali tu przed pięcioma laty.', translation: 'Rozmawiałem z trzema rodakami, którzy przyjechali tu przed pięcioma laty.' },
      { polish: 'Przyjęli nas z otwartymi ramionami, a w ciągu dwóch miesięcy poznaliśmy wielu sąsiadów.', translation: 'Przyjęli nas z otwartymi ramionami, a w ciągu dwóch miesięcy poznaliśmy wielu sąsiadów.' },
    ],
  },
  55: {
    coursebookPages: '52–57',
    communication: 'Powtórzenie i utrwalenie materiału z lekcji 0–4: strategie egzaminacyjne, rady językowe, opis wyglądu, warunki pracy i opowiadanie o życiu za granicą.',
    vocabulary: 'Powtórzenie słownictwa i idiomów z lekcji 0–4 (błąd, nauka języków, wygląd, liczby, migracja i wielokulturowość).',
    grammar: 'Kompleksowe powtórzenie: mianownik lm. i pluralia tantum, aspekt, okoliczniki sposobu (jak? vs jaki?), stopniowanie przymiotników i przysłówków, składnia i odmiana liczebników głównych (B, D, N) oraz wyrażenia czasowe.',
    examples: [
      { polish: 'Od czterech lat uczę się polskiego i mówię coraz płynniej.', translation: 'Od czterech lat uczę się polskiego i mówię coraz płynniej.' },
      { polish: 'W projekcie wzięło udział dwudziestu studentów z różnych krajów.', translation: 'W projekcie wzięło udział dwudziestu studentów z różnych krajów.' },
    ],
  },
  56: {
    coursebookPages: '58–67',
    communication: 'Załatwiamy sprawy w urzędach: wyrażamy konieczność, prosimy o przyzwolenie, przyzwalamy lub odmawiamy oraz piszemy oficjalne zapytania.',
    vocabulary: 'Typy urzędów (urząd miasta, urząd wojewódzki, urząd skarbowy, ZUS), dokumenty (wniosek, zaświadczenie, karta pobytu, podpis, pieczątka); idiomy: mieć ręce pełne roboty, papierkowa robota, załatwić coś od ręki.',
    grammar: 'Alternacja ę : ą w deklinacji rzeczowników (urząd → urzędu, błąd → błędu, mąż → męża, święto → świąt, ręka → rąk). Konstrukcja mieć + bezokolicznik do wyrażania obowiązku, planu lub polecenia (Mam złożyć wniosek do piątku; To ma być gotowe jutro). Odmiana rzeczowników rodzaju nijakiego zakończonych na -ę: typ imię (D. imienia, C. imieniu, N. imieniem, lm. imiona, imion — też ramię, plemię) oraz typ zwierzę (D. zwierzęcia, C. zwierzęciu, lm. zwierzęta, zwierząt — też niemowlę, szczenię).',
    examples: [
      { polish: 'Mam złożyć wniosek w urzędzie wojewódzkim, bo ta papierkowa robota nie może czekać.', translation: 'Mam złożyć wniosek w urzędzie wojewódzkim, bo ta papierkowa robota nie może czekać.' },
      { polish: 'Proszę wpisać swoje imię oraz imiona rodziców w formularzu.', translation: 'Proszę wpisać swoje imię oraz imiona rodziców w formularzu.' },
      { polish: 'W schronisku brakuje karmy dla zwierząt, dlatego musimy załatwić to od ręki.', translation: 'W schronisku brakuje karmy dla zwierząt, dlatego musimy załatwić to od ręki.' },
    ],
  },
  57: {
    coursebookPages: '68–77',
    communication: 'Korzystamy z usług i wzywamy fachowców: obiecujemy i zapewniamy, oferujemy pomoc, dziękujemy oraz zgłaszamy usterki.',
    vocabulary: 'Warsztaty i usługi (hydraulik, elektryk, szewc, krawiec, mechanik, serwis), słownictwo: usterka, wadliwy, gwarancja, reklamacja; idiomy: złota rączka, mieć coś w małym palcu, nie kiwnąć palcem, siedzieć z założonymi rękami.',
    grammar: 'Przymiotnikowa odmiana rzeczowników typu znajomy, podróżny, bezrobotny, narzeczony, chory, księgowy (D. znajomego, C. znajomemu, N. znajomym; lm. znajomi, znajomych), imion męskich zakończonych na -y/-i (Jerzy → Jerzego, Jerzemu, z Jerzym; Antoni → Antoniego, Antoniemu, z Antonim) oraz nazwisk zakończonych na -ski, -cki, -dzki (m. Kowalski → Kowalskiego, Kowalskiemu, Kowalskim; ż. Kowalska → Kowalskiej, Kowalską; lm. państwo Kowalscy → Kowalskich, Kowalskimi).',
    examples: [
      { polish: 'Zadzwoniłem do znajomego elektryka, pana Jerzego Kowalskiego — to prawdziwa złota rączka.', translation: 'Zadzwoniłem do znajomego elektryka, pana Jerzego Kowalskiego — to prawdziwa złota rączka.' },
      { polish: 'Rozmawiałem z panią Anną Nowacką o wadliwym sprzęcie i obiecała szybką naprawę.', translation: 'Rozmawiałem z panią Anną Nowacką o wadliwym sprzęcie i obiecała szybką naprawę.' },
      { polish: 'Państwo Zielińscy mają ten temat w małym palcu.', translation: 'Państwo Zielińscy mają ten temat w małym palcu.' },
    ],
  },
  58: {
    coursebookPages: '78–87',
    communication: 'Rozmawiamy o finansach, budżecie domowym, wydatkach i oszczędzaniu; uczymy się rozpoczynać rozmowę oraz wyrażać pewność i niepewność.',
    vocabulary: 'Pieniądze, budżet, oszczędności, konto, przelew, rata, oszczędzać, wydawać, zero waste; idiomy i przysłowia: mieć węża w kieszeni, obiecywać złote góry, pieniądze szczęścia nie dają.',
    grammar: 'Szczególna odmiana rzeczowników pieniądz i miesiąc: w lp. alternacja ą:ę (pieniądz → pieniądza, pieniądzowi, pieniądzem; miesiąc → miesiąca, miesiącowi, miesiącem), w lm. M. pieniądze / miesiące, D. pieniędzy / miesięcy, N. pieniędzmi / miesiącami, Ms. o pieniądzach / miesiącach. Wyrażanie pewności (na pewno, bez wątpienia, jestem przekonany, że…) i niepewności (chyba, może, prawdopodobnie, wątpię, żeby…).',
    examples: [
      { polish: 'Od trzech miesięcy nie mamy żadnych dodatkowych pieniędzy na remont.', translation: 'Od trzech miesięcy nie mamy żadnych dodatkowych pieniędzy na remont.' },
      { polish: 'Na pewno warto oszczędzać, choć wątpię, żeby pieniądze dawały szczęście.', translation: 'Na pewno warto oszczędzać, choć wątpię, żeby pieniądze dawały szczęście.' },
      { polish: 'Nie warto ufać komuś, kto obiecuje złote góry, a sam ma węża w kieszeni.', translation: 'Nie warto ufać komuś, kto obiecuje złote góry, a sam ma węża w kieszeni.' },
    ],
  },
  59: {
    coursebookPages: '88–97',
    communication: 'Rozmawiamy o ekonomii, przedsiębiorczości i rynku pracy; wyrażamy warunek i konsekwencje oraz uzasadniamy własne poglądy.',
    vocabulary: 'Słownictwo ekonomiczne (rynek, inwestycja, zysk, strata, konkurencja, firma, przedsiębiorca); idiomy i przysłowia: jaka praca, taka płaca, żadna praca nie hańbi, bez pracy nie ma kołaczy, wyścig szczurów, wziąć się do roboty.',
    grammar: 'Zdania warunkowe ze spójnikami jeśli / jeżeli / gdyby / jakby: warunek realny — czas teraźniejszy lub przyszły (Jeżeli masz czas / będziesz mieć czas, to mi pomożesz); warunek potencjalny lub nierzeczywisty — tryb przypuszczający (Gdybyś miał doświadczenie, dostałbyś tę pracę). W języku polskim nie występuje następstwo czasów: w zdaniu podrzędnym zachowujemy czas z perspektywy mówiącego (Powiedział, że szuka pracy / że znajdzie pracę).',
    examples: [
      { polish: 'Jeżeli weźmiemy się do roboty już dziś, to do piątku skończymy projekt.', translation: 'Jeżeli weźmiemy się do roboty już dziś, to do piątku skończymy projekt.' },
      { polish: 'Gdybyś miał lepszy biznesplan, inwestorzy chętniej by cię wsparli.', translation: 'Gdybyś miał lepszy biznesplan, inwestorzy chętniej by cię wsparli.' },
      { polish: 'Szef powiedział, że firma rozwija się dobrze i wkrótce zatrudni nowe osoby.', translation: 'Szef powiedział, że firma rozwija się dobrze i wkrótce zatrudni nowe osoby.' },
    ],
  },
  60: {
    coursebookPages: '98–103',
    communication: 'Powtórzenie materiału z lekcji 6–9: załatwianie spraw w urzędach, usługi, budżet domowy, pewność i niepewność oraz argumentacja w sprawach zawodowych.',
    vocabulary: 'Utrwalenie słownictwa i frazeologizmów z lekcji 6–9 (urzędy, usługi, pieniądze, ekonomia i praca).',
    grammar: 'Kompleksowe powtórzenie: alternacja ę:ą, mieć + bezokolicznik, rzeczowniki nijakie na -ę (imię, zwierzę), odmiana przymiotnikowa rzeczowników, imion i nazwisk, odmiana pieniądz i miesiąc, zdania warunkowe i brak następstwa czasów.',
    examples: [
      { polish: 'Gdybym miał więcej pieniędzy, zatrudniłbym pana Kowalskiego do remontu.', translation: 'Gdybym miał więcej pieniędzy, zatrudniłbym pana Kowalskiego do remontu.' },
      { polish: 'Mam załatwić tę sprawę w urzędzie w ciągu dwóch miesięcy.', translation: 'Mam załatwić tę sprawę w urzędzie w ciągu dwóch miesięcy.' },
    ],
  },
  61: {
    coursebookPages: '104–111',
    communication: 'Rozmawiamy o polityce, wyborach i życiu społecznym w Polsce; wyrażamy ważność, obojętność i dystans wobec omawianych tematów.',
    vocabulary: 'Życie polityczne (sejm, senat, rząd, prezydent, wybory, partia, lewica, prawica, głosować, budżet obywatelski); idiomy: rządy silnej ręki, poprawność polityczna, okrągły stół, wotum zaufania.',
    grammar: 'Odmiana rzeczownika rząd „władza wykonawcza” (zachowuje ą: D. rządu, C. rządowi, N. rządem, Ms. o rządzie, lm. rządy, rządów — w odróżnieniu od rząd „szereg”, D. rzędu). Składnia zdania z podmiotem w dopełniaczu: przy określeniach ilości (dużo, mało, wielu, pięciu, większość), czasownikach braku/zmiany (brakuje, przybywa, ubywa) i przeczeniu (nie ma / nie było / nie będzie) orzeczenie stoi w 3. os. lp. r. nijakiego (Brakuje pieniędzy; Wielu wyborców nie głosowało).',
    examples: [
      { polish: 'Większość obywateli nie interesuje się nowymi decyzjami rządu.', translation: 'Większość obywateli nie interesuje się nowymi decyzjami rządu.' },
      { polish: 'W parlamencie zabrakło głosów do uzyskania wotum zaufania.', translation: 'W parlamencie zabrakło głosów do uzyskania wotum zaufania.' },
      { polish: 'Szczerze mówiąc, jest mi to zupełnie obojętne, kto wygra te wybory.', translation: 'Szczerze mówiąc, jest mi to zupełnie obojętne, kto wygra te wybory.' },
    ],
  },
  62: {
    coursebookPages: '112–121',
    communication: 'Dyskutujemy o równouprawnieniu, prawach człowieka i dyskryminacji; porządkujemy przebieg rozmowy, definiujemy pojęcia i bronimy swojego stanowiska.',
    vocabulary: 'Równouprawnienie i prawa obywatelskie (równouprawnienie, dyskryminacja, tolerancja, obywatel, mniejszość, prawa człowieka); idiomy ze słowem „prawo”: albo w prawo, albo w lewo, na prawo i (na) lewo, prawo dżungli, jakim prawem?, obejść prawo, być ponad prawem, zrobić coś na lewo.',
    grammar: 'Powtórzenie nazw państw w dopełniaczu (Polska → Polski, Francja → Francji, Niemcy → Niemiec, Włochy → Włoch, Czechy → Czech, Węgry → Węgier, Stany Zjednoczone → Stanów Zjednoczonych). Odmiana rzeczowników rodzaju męskiego zakończonych na -anin (Amerykanin, Rosjanin, chrześcijanin, mieszczanin, krakowianin): w lp. cząstka -in zostaje (Amerykanina, Amerykaninowi, Amerykaninem), a w lm. zanika! M. lm. Amerykanie, D. lm. Amerykanów (ale Rosjan, mieszczan, chrześcijan, krakowian z końcówką zerową!), C. Amerykanom, N. Amerykanami.',
    examples: [
      { polish: 'Wielu Amerykanów i Rosjan mieszka obecnie w Polsce i korzysta z tych samych praw.', translation: 'Wielu Amerykanów i Rosjan mieszka obecnie w Polsce i korzysta z tych samych praw.' },
      { polish: 'Nikt nie może być ponad prawem ani próbować obejść prawa.', translation: 'Nikt nie może być ponad prawem ani próbować obejść prawa.' },
      { polish: 'Przyjechali do nas goście z Niemiec, Włoch i Stanów Zjednoczonych.', translation: 'Przyjechali do nas goście z Niemiec, Włoch i Stanów Zjednoczonych.' },
    ],
  },
  63: {
    coursebookPages: '122–131',
    communication: 'Opisujemy wypadki i zdarzenia losowe, relacjonujemy cudze wypowiedzi oraz wzywamy rozmówcę do zabrania głosu.',
    vocabulary: 'Wypadki drogowe i w pracy (wypadek, kolizja, poszkodowany, świadek, karetka, pierwsza pomoc, wypadek przy pracy); idiomy: na wszelki wypadek, wypadek przy pracy, w żadnym wypadku, przez przypadek, od przypadku do przypadku.',
    grammar: 'Mowa zależna: zdania oznajmujące wprowadzamy przez że (Powiedział, że widział wypadek), pytania przez czy lub zaimek pytajny (Zapytał, czy ktoś wezwał karetkę; Zapytał, gdzie to się stało), a prośby i polecenia przez żeby + forma czasu przeszłego (Poprosił, żebym zadzwonił) lub bezokolicznik (Kazał nam poczekać). Odmiana zaimków dzierżawczych (mój, twój, swój, nasz, wasz — D. mojego, mojej, naszych; N. moim, moją, naszymi) oraz nieodmiennych jego, jej, ich. Zaimek zwrotny swój odnosi się do podmiotu w każdej osobie.',
    examples: [
      { polish: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego telefonu i wezwał policję.', translation: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego telefonu i wezwał policję.' },
      { polish: 'Policjant zapytał nas, czy widzieliśmy kierowcę tamtego auta.', translation: 'Policjant zapytał nas, czy widzieliśmy kierowcę tamtego auta.' },
      { polish: 'W żadnym wypadku nie ruszaj poszkodowanego, dopóki nie przyjedzie karetka.', translation: 'W żadnym wypadku nie ruszaj poszkodowanego, dopóki nie przyjedzie karetka.' },
    ],
  },
  64: {
    coursebookPages: '132–141',
    communication: 'Rozmawiamy o przyrodzie, klimacie i ekologii; wyrażamy aprobatę, dezaprobatę oraz protest, a także piszemy listy oficjalne.',
    vocabulary: 'Ekologia i klimat (środowisko, zanieczyszczenie, smog, recykling, zakaz palenia węglem, odnawialne źródła energii); idiomy: efekt cieplarniany, burza w szklance wody, suchy jak pieprz, królik doświadczalny.',
    grammar: 'Powtórzenie celownika (komu? czemu?) w liczbie pojedynczej i mnogiej: r. m. lp. -owi (studentowi, klimatowi) z krótkimi wyjątkami na -u (panu, bratu, ojcu, psu, kotu, światu); r. n. lp. -u (dziecku, środowisku, morzu); r. ż. lp. -e (z alternacjami: rzeka → rzece, droga → drodze, woda → wodzie) lub -i/-y (ziemi, nocy); lm. zawsze -om (ludziom, zwierzętom, roślinom). Przymiotniki: m./n. -emu, ż. -ej, lm. -ym/-im. Czasowniki z celownikiem: pomagać, szkodzić, zagrażać, przyglądać się, dziwić się, ufać, przeciwstawiać się.',
    examples: [
      { polish: 'Smog i plastik poważnie szkodzą naszemu środowisku oraz przyszłym pokoleniom.', translation: 'Smog i plastik poważnie szkodzą naszemu środowisku oraz przyszłym pokoleniom.' },
      { polish: 'Stanowczo protestujemy przeciwko wycince lasu i pomagamy lokalnym organizacjom.', translation: 'Stanowczo protestujemy przeciwko wycince lasu i pomagamy lokalnym organizacjom.' },
      { polish: 'To nie jest burza w szklance wody — efekt cieplarniany zagraża całemu światu.', translation: 'To nie jest burza w szklance wody — efekt cieplarniany zagraża całemu światu.' },
    ],
  },
  65: {
    coursebookPages: '142–147',
    communication: 'Powtórzenie materiału z lekcji 11–14: polityka i społeczeństwo, dyskusja o prawach, relacjonowanie wypadków, protest ekologiczny i listy oficjalne.',
    vocabulary: 'Utrwalenie słownictwa i idiomów z lekcji 11–14 (polityka, prawo, wypadki, ekologia).',
    grammar: 'Kompleksowe powtórzenie: odmiana rzeczownika rząd, zdania z podmiotem w dopełniaczu, nazwy państw w dopełniaczu, rzeczowniki na -anin, mowa zależna, zaimki dzierżawcze (w tym swój) oraz celownik lp. i lm.',
    examples: [
      { polish: 'Dziennikarz zapytał, czy nowy zakaz pomoże mieszkańcom dużych miast.', translation: 'Dziennikarz zapytał, czy nowy zakaz pomoże mieszkańcom dużych miast.' },
      { polish: 'Wielu obywateli z Niemiec i Stanów Zjednoczonych sprzeciwia się dyskryminacji.', translation: 'Wielu obywateli z Niemiec i Stanów Zjednoczonych sprzeciwia się dyskryminacji.' },
    ],
  },
  66: {
    coursebookPages: '148–157',
    communication: 'Rozmawiamy o środkach masowego przekazu, dziennikarstwie i fake newsach; nawiązujemy kontakt w rozmowie i liście, przeprowadzamy wywiad i analizujemy strukturę eseju.',
    vocabulary: 'Media (prasa, telewizja, media społecznościowe, dziennikarz, rzetelny, dezinformacja, fake news, wywiad); idiomy: czwarta władza, ciągnąć kogoś za język, wiadomość z pierwszej ręki, owijać w bawełnę.',
    grammar: 'Odmiana zaimków przeczących nikt, nic, żaden: nikt → nikogo, nikomu, nikogo, z nikim, o nikim; nic → niczego/nic, niczemu, nic, z niczym, o niczym; żaden / żadna / żadne odmienia się jak przymiotnik (żadnego, żadnej, żadnych). W języku polskim obowiązuje podwójne przeczenie (Nikt niczego nie widział; Nie przeczytałem żadnego artykułu). Powtórzenie wołacza i jego funkcji w zwrotach oficjalnych i nieoficjalnych: Szanowny Panie Redaktorze!, Droga Pani Anno!, Cześć, Marku / Kasiu / Piotrze!',
    examples: [
      { polish: 'Szanowny Panie Redaktorze, nikt nie sprawdził tej informacji z pierwszej ręki!', translation: 'Szanowny Panie Redaktorze, nikt nie sprawdził tej informacji z pierwszej ręki!' },
      { polish: 'Nie owijaj w bawełnę — nie mam przed nikim żadnych tajemnic.', translation: 'Nie owijaj w bawełnę — nie mam przed nikim żadnych tajemnic.' },
      { polish: 'W tamtym wywiadzie nie usłyszałem niczego nowego.', translation: 'W tamtym wywiadzie nie usłyszałem niczego nowego.' },
    ],
  },
  67: {
    coursebookPages: '158–167',
    communication: 'Namawiamy, przekonujemy i tworzymy argumenty reklamowe; opisujemy przedmioty, symbole graficzne i wzornictwo.',
    vocabulary: 'Reklama, perswazja, design, opis przedmiotu (kształt, materiał, wzór, funkcjonalny, przyciągać uwagę); idiomy: przejść do rzeczy, nabić kogoś w butelkę, wpaść w ucho.',
    grammar: 'Odmiana zaimka zwrotnego się (formy akcentowane i nieakcentowane): D. siebie / się, C. sobie, B. siebie / się, N. sobą, Ms. o sobie (Patrzę na siebie; Kupiłem sobie książkę; Rozmawiamy ze sobą; Mówią o sobie). Powtórzenie deklinacji zaimków osobowych (ja/mnie/mi/mną, on/jego/go/niego/mu/nim) oraz trybu rozkazującego (przejdźmy, przekonaj, nie daj się nabić w butelkę, zaufaj mi).',
    examples: [
      { polish: 'Przejdźmy do rzeczy i nie dajmy się nabić w butelkę tej reklamie!', translation: 'Przejdźmy do rzeczy i nie dajmy się nabić w butelkę tej reklamie!' },
      { polish: 'Kup sobie ten produkt — zobaczysz, że szybko będziesz z siebie zadowolony.', translation: 'Kup sobie ten produkt — zobaczysz, że szybko będziesz z siebie zadowolony.' },
      { polish: 'Ta melodia od razu wpadła mi w ucho, więc ciągle ją sobie nucę.', translation: 'Ta melodia od razu wpadła mi w ucho, więc ciągle ją sobie nucę.' },
    ],
  },
  68: {
    coursebookPages: '168–179',
    communication: 'Rozmawiamy o kulturze, literaturze, filmie, teatrze i muzyce; wyrażamy opinie i upodobania, opowiadamy o wydarzeniach artystycznych i piszemy recenzję książki.',
    vocabulary: 'Sztuka i kultura (wystawa, premiera, recenzja, reżyser, fabuła, arcydzieło, publiczność, koncert); idiomy: widać rękę artysty, świecić pustkami, połknąć bakcyla, otworzyć drzwi do kariery.',
    grammar: 'Miejscownik (o kim? o czym?) po wyrażeniach przyimkowych określających obiekt, o którym się mówi, oraz kontekst dzieła: o + Ms. (mówić / pisać / film o..., książka o...), po + Ms. (po spektaklu, po premierze), w + Ms. (w tym filmie, w powieści, w wierszu), na + Ms. (na wystawie, na koncercie, na scenie), przy + Ms. (przy muzyce). Powtórzenie końcówek Ms. lp. (-e z alternacjami: teatr → w teatrze, sztuka → o sztuce, książka → w książce; -u po miękkich i m./n. k/g/ch: w filmie, o artyście, w muzeum) oraz lm. (-ach: o autorach, w wierszach).',
    examples: [
      { polish: 'W tej nowej powieści widać rękę artysty — opowiada o trudnej miłości i pamięci.', translation: 'W tej nowej powieści widać rękę artysty — opowiada o trudnej miłości i pamięci.' },
      { polish: 'Po premierze w teatrze sala nigdy nie świeciła pustkami.', translation: 'Po premierze w teatrze sala nigdy nie świeciła pustkami.' },
      { polish: 'Na wystawie w muzeum połknąłem bakcyla fotografii artystycznej.', translation: 'Na wystawie w muzeum połknąłem bakcyla fotografii artystycznej.' },
    ],
  },
  69: {
    coursebookPages: '180–189',
    communication: 'Rozmawiamy o religii, wierze, tradycjach i światopoglądzie; formułujemy pytania i hipotezy oraz piszemy kartki świąteczne, zaproszenia i opisy regionów.',
    vocabulary: 'Religia, wyznania, symbole i święta (wiara, wyznanie, tradycja, obrzęd, tolerancja, kościół, świątynia); idiomy: mieć świętą cierpliwość, rzucić kamieniem jako pierwszy, wieża Babel, być alfą i omegą.',
    grammar: 'Odmiana zaimków pytajnych jaki, który, czyj przez wszystkie przypadki, rodzaje i liczby (m./n. jakiego/którego/czyjego, jakiemu/któremu/czyjemu, jakim/którym/czyim; ż. jakiej/której/czyjej, jaką/którą/czyją; lm. jakich/których/czyich, jakimi/którymi/czyimi; M. lm. mo. jacy, którzy, czyi). Powtórzenie trybu warunkowego do budowania hipotez i uprzejmych pytań (Co byś zrobił, gdyby…?; Którą tradycję chciałbyś poznać lepiej?; Czyim zdaniem to jest ważne?).',
    examples: [
      { polish: 'Której religii symbolem jest ten znak i w jakim kraju występuje najczęściej?', translation: 'Której religii symbolem jest ten znak i w jakim kraju występuje najczęściej?' },
      { polish: 'Czyim zdaniem można być alfą i omegą w sprawach wiary i historii?', translation: 'Czyim zdaniem można być alfą i omegą w sprawach wiary i historii?' },
      { polish: 'Gdyby ludzie mieli więcej świętej cierpliwości, łatwiej by się ze sobą dogadywali.', translation: 'Gdyby ludzie mieli więcej świętej cierpliwości, łatwiej by się ze sobą dogadywali.' },
    ],
  },
  70: {
    coursebookPages: '190–196',
    communication: 'Końcowe powtórzenie lekcji 16–19 i kompleksowe przygotowanie do egzaminu certyfikatowego B1: media, perswazja, kultura, światopogląd oraz zadania ustne i pisemne.',
    vocabulary: 'Utrwalenie słownictwa i idiomów z lekcji 16–19 (media, reklama i design, kultura, religia i tradycje) oraz całego podręcznika Hurra 3.',
    grammar: 'Kompleksowe powtórzenie: zaimki przeczące nikt, nic, żaden i podwójne przeczenie, wołacz, odmiana zaimka się i zaimków osobowych, tryb rozkazujący, miejscownik w określaniu obiektu i dzieła, zaimki pytajne jaki, który, czyj oraz tryb warunkowy.',
    examples: [
      { polish: 'Nikt z nas nie wiedział, o którym filmie rozmawialiście po premierze.', translation: 'Nikt z nas nie wiedział, o którym filmie rozmawialiście po premierze.' },
      { polish: 'Szanowni Państwo, przejdźmy do rzeczy — jaką decyzję podjęlibyście w tej sytuacji?', translation: 'Szanowni Państwo, przejdźmy do rzeczy — jaką decyzję podjęlibyście w tej sytuacji?' },
    ],
  },
};
