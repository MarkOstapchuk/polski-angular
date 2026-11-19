// Static opaque-box curriculum fixtures for E2E tests (Tiers 1-4).
// Extracted from authoritative curriculum data; zero runtime imports from web/src/**.

export const I18N_EXPECTATIONS = {
  pl: {
    homeTitle: "Ucz się polskiego krok po kroku",
    homeLogin: "Zaloguj się",
    authWelcome: "Witaj ponownie",
    navHome: "Moja ścieżka",
    navFeedback: "Opinie",
    lessonCheck: "Sprawdź odpowiedzi",
    lessonCompleted: "UKOŃCZONA",
    feedbackTitle: "Prześlij opinię",
    feedbackSent: "Dziękujemy! Opinia została wysłana.",
  },
  ru: {
    homeTitle: "Изучайте польский шаг за шагом",
    homeLogin: "Войти",
    authWelcome: "С возвращением",
    navHome: "Мой путь",
    navFeedback: "Отзывы",
    lessonCheck: "Проверить ответы",
    lessonCompleted: "ЗАВЕРШЁН",
    feedbackTitle: "Оставить отзыв",
    feedbackSent: "Спасибо! Ваш отзыв отправлен.",
  },
  en: {
    homeTitle: "Learn Polish step by step",
    homeLogin: "Sign in",
    authWelcome: "Welcome back",
    navHome: "My learning path",
    navFeedback: "Feedback",
    lessonCheck: "Check answers",
    lessonCompleted: "COMPLETED",
    feedbackTitle: "Send feedback",
    feedbackSent: "Thank you! Your feedback was sent.",
  },
};

export const LESSON_FIXTURES = {
  "1": {
    "id": 1,
    "title": "Pierwszy dzień w szkole",
    "activities": [
      {
        "index": 0,
        "id": "l01-letters",
        "sourceExerciseId": "WB-L01-E01",
        "kind": "letter-cloze",
        "instruction": "Wpisz brakujące litery. Po wpisaniu przejdziesz do następnego pola.",
        "items": [
          {
            "id": "q1",
            "prompt": "a) Sekretarka",
            "accepted": [
              "a) Sekretarka: Dzień dobry. Jestem Ewa Potocka."
            ],
            "letterCloze": {
              "parts": [
                "a) Sekretarka: D",
                "ie",
                " dobr",
                ". Je",
                "tem Ewa Potocka."
              ],
              "gaps": [
                "z",
                "ń",
                "y",
                "s"
              ]
            }
          },
          {
            "id": "q2",
            "prompt": "a) Studentka",
            "accepted": [
              "a) Studentka: Dzień dobry. Nazywam się Elena Sanchez."
            ],
            "letterCloze": {
              "parts": [
                "a) Studentka: D",
                "ień dobr",
                ". Na",
                "",
                "",
                "am s",
                "",
                " Elena Sanchez."
              ],
              "gaps": [
                "z",
                "y",
                "z",
                "y",
                "w",
                "i",
                "ę"
              ]
            }
          },
          {
            "id": "q3",
            "prompt": "a) Sekretarka",
            "accepted": [
              "a) Sekretarka: Bardzo mi miło."
            ],
            "letterCloze": {
              "parts": [
                "a) Sekretarka: Bar",
                "",
                "o m",
                " m",
                "",
                "o."
              ],
              "gaps": [
                "d",
                "z",
                "i",
                "i",
                "ł"
              ]
            }
          },
          {
            "id": "q4",
            "prompt": "a) Studentka",
            "accepted": [
              "a) Studentka: Miło mi."
            ],
            "letterCloze": {
              "parts": [
                "a) Studentka: M",
                "",
                "o mi."
              ],
              "gaps": [
                "i",
                "ł"
              ]
            }
          },
          {
            "id": "q5",
            "prompt": "b) Student",
            "accepted": [
              "b) Student: Cześć, jestem Jan, a ty?"
            ],
            "letterCloze": {
              "parts": [
                "b) Student: C",
                "",
                "ść, jest",
                "m Jan, a t",
                "?"
              ],
              "gaps": [
                "z",
                "e",
                "e",
                "y"
              ]
            }
          },
          {
            "id": "q6",
            "prompt": "b) Studentka",
            "accepted": [
              "b) Studentka: Cześć, jestem Elena."
            ],
            "letterCloze": {
              "parts": [
                "b) Studentka: C",
                "",
                "ść, jes",
                "em Elena."
              ],
              "gaps": [
                "z",
                "e",
                "t"
              ]
            }
          },
          {
            "id": "q7",
            "prompt": "b) Student",
            "accepted": [
              "b) Student: Miło mi."
            ],
            "letterCloze": {
              "parts": [
                "b) Student: M",
                "",
                "o mi."
              ],
              "gaps": [
                "i",
                "ł"
              ]
            }
          },
          {
            "id": "q8",
            "prompt": "b) Studentka",
            "accepted": [
              "b) Studentka: Mnie również."
            ],
            "letterCloze": {
              "parts": [
                "b) Studentka: M",
                "ie r",
                "wn",
                "e",
                "."
              ],
              "gaps": [
                "n",
                "ó",
                "i",
                "ż"
              ]
            }
          }
        ]
      },
      {
        "index": 1,
        "id": "l01-dialogue-order",
        "sourceExerciseId": "WB-L01-E02",
        "kind": "typed",
        "instruction": "Posłuchaj dialogu, a następnie zapisz cztery wypowiedzi we właściwej kolejności.",
        "items": [
          {
            "id": "q1",
            "prompt": "Wypowiedź 1 · Maria",
            "accepted": [
              "Dzień dobry. Jestem Maria Benini."
            ]
          },
          {
            "id": "q2",
            "prompt": "Wypowiedź 2 · Uwe",
            "accepted": [
              "Dzień dobry. Nazywam się Uwe Stein."
            ]
          },
          {
            "id": "q3",
            "prompt": "Wypowiedź 3 · Maria",
            "accepted": [
              "Bardzo mi miło."
            ]
          },
          {
            "id": "q4",
            "prompt": "Wypowiedź 4 · Uwe",
            "accepted": [
              "Mnie również."
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l01-registration",
        "sourceExerciseId": "WB-L01-E04",
        "kind": "typed",
        "instruction": "Posłuchaj dialogu w sekretariacie i uzupełnij dane oraz zwroty.",
        "items": [
          {
            "id": "q1",
            "prompt": "Imię studenta",
            "accepted": [
              "Thomas"
            ]
          },
          {
            "id": "q2",
            "prompt": "Nazwisko studenta",
            "accepted": [
              "Fischer"
            ]
          },
          {
            "id": "q3",
            "prompt": "Narodowość · pełna odpowiedź",
            "accepted": [
              "Jestem Niemcem"
            ]
          },
          {
            "id": "q4",
            "prompt": "Adres · ulica i numer",
            "accepted": [
              "ulica Studencka 3"
            ]
          },
          {
            "id": "q5",
            "prompt": "Numer telefonu",
            "accepted": [
              "607 44 32 89"
            ]
          },
          {
            "id": "q6",
            "prompt": "Odpowiedź na „dziękuję”",
            "accepted": [
              "Proszę"
            ]
          },
          {
            "id": "q7",
            "prompt": "Przed „widzenia”",
            "accepted": [
              "Do"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l01-forms",
        "sourceExerciseId": "WB-L01-E05",
        "kind": "choice",
        "instruction": "Zwróć uwagę, czy zdanie mówi o imieniu, nazwisku czy tożsamości.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ewa ___ Brown.",
            "accepted": [
              "nazywa się"
            ],
            "options": [
              "jest",
              "ma",
              "nazywa się"
            ]
          },
          {
            "id": "q2",
            "prompt": "___ Joanna.",
            "accepted": [
              "Jestem",
              "Nazywam się"
            ],
            "options": [
              "Jestem",
              "Mam",
              "Nazywam się"
            ]
          },
          {
            "id": "q3",
            "prompt": "One ___ Grant.",
            "accepted": [
              "nazywają się"
            ],
            "options": [
              "nazywają się",
              "mają",
              "są"
            ]
          },
          {
            "id": "q4",
            "prompt": "On ___ na imię Piotr.",
            "accepted": [
              "ma"
            ],
            "options": [
              "ma",
              "jest",
              "nazywa się"
            ]
          },
          {
            "id": "q5",
            "prompt": "Jak pani ___?",
            "accepted": [
              "się nazywa"
            ],
            "options": [
              "się nazywa",
              "ma",
              "jest"
            ]
          },
          {
            "id": "q6",
            "prompt": "Adam i Anna ___ Kowalscy.",
            "accepted": [
              "nazywają się"
            ],
            "options": [
              "mają",
              "nazywają się",
              "jesteście"
            ]
          },
          {
            "id": "q7",
            "prompt": "Czy ty ___ Mami?",
            "accepted": [
              "jesteś"
            ],
            "options": [
              "jesteś",
              "masz",
              "nazywasz"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l01-audio-cloze",
        "sourceExerciseId": "WB-L01-E06",
        "kind": "typed",
        "instruction": "Odtwórz scenkę i wpisz brakujące słowa.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czy to miejsce jest ___?",
            "accepted": [
              "wolne"
            ]
          },
          {
            "id": "q2",
            "prompt": "Tak, ___ wolne.",
            "accepted": [
              "jest"
            ]
          },
          {
            "id": "q3",
            "prompt": "Na zdrowie! · brakujące słowo",
            "accepted": [
              "na"
            ]
          },
          {
            "id": "q4",
            "prompt": "Proszę otworzyć ___!",
            "accepted": [
              "okno"
            ]
          },
          {
            "id": "q5",
            "prompt": "___ zamknąć drzwi!",
            "accepted": [
              "proszę"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l01-dialogue-cloze",
        "sourceExerciseId": "WB-L01-E09",
        "kind": "typed",
        "instruction": "Posłuchaj i uzupełnij brakujące czasowniki oraz zwroty.",
        "items": [
          {
            "id": "q1",
            "prompt": "Proszę ___ dialog.",
            "accepted": [
              "napisać"
            ]
          },
          {
            "id": "q2",
            "prompt": "Proszę ___ „dziękuję”.",
            "accepted": [
              "przeliterować"
            ]
          },
          {
            "id": "q3",
            "prompt": "Proszę ___ tekst.",
            "accepted": [
              "przeczytać"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ powtórzyć „dziękuję”?",
            "accepted": [
              "proszę"
            ]
          },
          {
            "id": "q5",
            "prompt": "Co to ___ „imię”?",
            "accepted": [
              "znaczy"
            ]
          },
          {
            "id": "q6",
            "prompt": "Jak się ___ po niemiecku „dziękuję”?",
            "accepted": [
              "mówi"
            ]
          },
          {
            "id": "q7",
            "prompt": "Proszę ___ „dziesięć”.",
            "accepted": [
              "powtórzyć"
            ]
          },
          {
            "id": "q8",
            "prompt": "Nie ___ .",
            "accepted": [
              "rozumiem"
            ]
          },
          {
            "id": "q9",
            "prompt": "Proszę ___ okno.",
            "accepted": [
              "otworzyć"
            ]
          },
          {
            "id": "q10",
            "prompt": "Co ___ znaczy „otworzyć”?",
            "accepted": [
              "to"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l01-phone-dictation",
        "sourceExerciseId": "WB-L01-E11",
        "kind": "typed",
        "instruction": "Posłuchaj i wpisz numer każdej osoby. Możesz oddzielać cyfry spacjami.",
        "items": [
          {
            "id": "q1",
            "prompt": "Joanna",
            "accepted": [
              "0607234599"
            ]
          },
          {
            "id": "q2",
            "prompt": "Ewa",
            "accepted": [
              "0504987710"
            ]
          },
          {
            "id": "q3",
            "prompt": "Janek",
            "accepted": [
              "0601381426"
            ]
          },
          {
            "id": "q4",
            "prompt": "Michał",
            "accepted": [
              "126363718"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l01-spelling",
        "sourceExerciseId": "WB-L01-E12",
        "kind": "typed",
        "instruction": "Uzupełnij brakujące słowo. Zachowaj polskie znaki.",
        "items": [
          {
            "id": "q1",
            "prompt": "Nie ___ . (I do not understand.)",
            "accepted": [
              "rozumiem"
            ]
          },
          {
            "id": "q2",
            "prompt": "Proszę ___ . (to repeat)",
            "accepted": [
              "powtórzyć"
            ]
          },
          {
            "id": "q3",
            "prompt": "Proszę ___ . (to spell)",
            "accepted": [
              "przeliterować"
            ]
          },
          {
            "id": "q4",
            "prompt": "Nie ___ . (I do not know.)",
            "accepted": [
              "wiem"
            ]
          },
          {
            "id": "q5",
            "prompt": "Nie ___ . (I do not remember.)",
            "accepted": [
              "pamiętam"
            ]
          },
          {
            "id": "q6",
            "prompt": "Proszę ___ . (to read)",
            "accepted": [
              "przeczytać"
            ]
          },
          {
            "id": "q7",
            "prompt": "Co to ___? (What does it mean?)",
            "accepted": [
              "znaczy"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l01-word-dictation",
        "sourceExerciseId": "WB-L01-E14",
        "kind": "typed",
        "instruction": "Posłuchaj lektora i zapisz każde usłyszane słowo.",
        "items": [
          {
            "id": "q1",
            "prompt": "1",
            "accepted": [
              "bank"
            ]
          },
          {
            "id": "q2",
            "prompt": "2",
            "accepted": [
              "fotograf"
            ]
          },
          {
            "id": "q3",
            "prompt": "3",
            "accepted": [
              "plan"
            ]
          },
          {
            "id": "q4",
            "prompt": "4",
            "accepted": [
              "teatr"
            ]
          },
          {
            "id": "q5",
            "prompt": "5",
            "accepted": [
              "interesujący"
            ]
          },
          {
            "id": "q6",
            "prompt": "6",
            "accepted": [
              "aktor"
            ]
          },
          {
            "id": "q7",
            "prompt": "7",
            "accepted": [
              "restauracja"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l01-listening-pairs",
        "sourceExerciseId": "WB-L01-E15",
        "kind": "choice",
        "instruction": "Odtwórz nagranie, a potem zaznacz usłyszany wyraz w każdej parze.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. szyny / siny",
            "accepted": [
              "szyny"
            ],
            "options": [
              "szyny",
              "siny"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. cenny / senny",
            "accepted": [
              "cenny"
            ],
            "options": [
              "cenny",
              "senny"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. syna / cyna",
            "accepted": [
              "cyna"
            ],
            "options": [
              "syna",
              "cyna"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. szyba / siwa",
            "accepted": [
              "szyba"
            ],
            "options": [
              "szyba",
              "siwa"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. szklankach / sankach",
            "accepted": [
              "szklankach"
            ],
            "options": [
              "szklankach",
              "sankach"
            ]
          },
          {
            "id": "q6",
            "prompt": "6. czary / szary",
            "accepted": [
              "szary"
            ],
            "options": [
              "czary",
              "szary"
            ]
          },
          {
            "id": "q7",
            "prompt": "7. maczek / Maciek",
            "accepted": [
              "maczek"
            ],
            "options": [
              "maczek",
              "Maciek"
            ]
          },
          {
            "id": "q8",
            "prompt": "8. córka / kurka",
            "accepted": [
              "kurka"
            ],
            "options": [
              "córka",
              "kurka"
            ]
          },
          {
            "id": "q9",
            "prompt": "9. cała / ciała",
            "accepted": [
              "cała"
            ],
            "options": [
              "cała",
              "ciała"
            ]
          },
          {
            "id": "q10",
            "prompt": "10. czyta / cytat",
            "accepted": [
              "czyta"
            ],
            "options": [
              "czyta",
              "cytat"
            ]
          },
          {
            "id": "q11",
            "prompt": "11. czynnik / cynik",
            "accepted": [
              "czynnik"
            ],
            "options": [
              "czynnik",
              "cynik"
            ]
          },
          {
            "id": "q12",
            "prompt": "12. czarki / ciarki",
            "accepted": [
              "ciarki"
            ],
            "options": [
              "czarki",
              "ciarki"
            ]
          },
          {
            "id": "q13",
            "prompt": "13. pić / być",
            "accepted": [
              "pić"
            ],
            "options": [
              "pić",
              "być"
            ]
          },
          {
            "id": "q14",
            "prompt": "14. wić / wyć",
            "accepted": [
              "wyć"
            ],
            "options": [
              "wić",
              "wyć"
            ]
          },
          {
            "id": "q15",
            "prompt": "15. bić / być",
            "accepted": [
              "bić"
            ],
            "options": [
              "bić",
              "być"
            ]
          },
          {
            "id": "q16",
            "prompt": "16. szelka / żelka",
            "accepted": [
              "żelka"
            ],
            "options": [
              "szelka",
              "żelka"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l01-cities",
        "sourceExerciseId": "WB-L01-E16",
        "kind": "typed",
        "instruction": "Posłuchaj i wpisz nazwy miast. Liczą się polskie znaki.",
        "items": [
          {
            "id": "q1",
            "prompt": "1",
            "accepted": [
              "Warszawa"
            ]
          },
          {
            "id": "q2",
            "prompt": "2",
            "accepted": [
              "Łódź"
            ]
          },
          {
            "id": "q3",
            "prompt": "3",
            "accepted": [
              "Gdańsk"
            ]
          },
          {
            "id": "q4",
            "prompt": "4",
            "accepted": [
              "Kraków"
            ]
          },
          {
            "id": "q5",
            "prompt": "5",
            "accepted": [
              "Wrocław"
            ]
          },
          {
            "id": "q6",
            "prompt": "6",
            "accepted": [
              "Katowice"
            ]
          },
          {
            "id": "q7",
            "prompt": "7",
            "accepted": [
              "Opole"
            ]
          },
          {
            "id": "q8",
            "prompt": "8",
            "accepted": [
              "Poznań"
            ]
          },
          {
            "id": "q9",
            "prompt": "9",
            "accepted": [
              "Toruń"
            ]
          },
          {
            "id": "q10",
            "prompt": "10",
            "accepted": [
              "Olsztyn"
            ]
          },
          {
            "id": "q11",
            "prompt": "11",
            "accepted": [
              "Częstochowa"
            ]
          },
          {
            "id": "q12",
            "prompt": "12",
            "accepted": [
              "Lublin"
            ]
          },
          {
            "id": "q13",
            "prompt": "13",
            "accepted": [
              "Kielce"
            ]
          },
          {
            "id": "q14",
            "prompt": "14",
            "accepted": [
              "Rzeszów"
            ]
          },
          {
            "id": "q15",
            "prompt": "15",
            "accepted": [
              "Białystok"
            ]
          },
          {
            "id": "q16",
            "prompt": "16",
            "accepted": [
              "Szczecin"
            ]
          },
          {
            "id": "q17",
            "prompt": "17",
            "accepted": [
              "Bydgoszcz"
            ]
          },
          {
            "id": "q18",
            "prompt": "18",
            "accepted": [
              "Gorzów Wielkopolski"
            ]
          },
          {
            "id": "q19",
            "prompt": "19",
            "accepted": [
              "Zielona Góra"
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "l01-exercise-3",
        "sourceExerciseId": "WB-L01-E03",
        "kind": "typed",
        "instruction": "Wybierz właściwe wyrażenie.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. dobry dzień / wieczór / noc",
            "accepted": [
              "dobry wieczór"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. do widzenia / razie / widzenia",
            "accepted": [
              "do widzenia"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. na widzenia / noc / razie",
            "accepted": [
              "na razie"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. dziękuję miło / bardzo / mi",
            "accepted": [
              "dziękuję bardzo"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. miło mi / bardzo / również",
            "accepted": [
              "miło mi"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "l01-exercise-7",
        "sourceExerciseId": "WB-L01-E07",
        "kind": "typed",
        "instruction": "Ułóż zdania z podanych wyrazów.",
        "items": [
          {
            "id": "q1",
            "prompt": "gdzie / toaleta / jest / przepraszam",
            "accepted": [
              "Przepraszam, gdzie jest toaleta?"
            ]
          },
          {
            "id": "q2",
            "prompt": "tam / i / kawa / cukier / są",
            "accepted": [
              "Kawa i cukier są tam.",
              "Cukier i kawa są tam."
            ]
          },
          {
            "id": "q3",
            "prompt": "na / toaleta / jest / lewo / tam",
            "accepted": [
              "Toaleta jest tam na lewo."
            ]
          },
          {
            "id": "q4",
            "prompt": "pani / dziękuję / bardzo",
            "accepted": [
              "Dziękuję pani bardzo.",
              "Bardzo pani dziękuję."
            ]
          }
        ]
      },
      {
        "index": 13,
        "id": "l01-exercise-8",
        "sourceExerciseId": "WB-L01-E08",
        "kind": "letter-cloze",
        "instruction": "Wpisz brakujące litery zgodnie z ilustracją.",
        "items": [
          {
            "id": "q1",
            "prompt": "1 · na lewo",
            "accepted": ["1 · na lewo"],
            "letterCloze": { "parts": ["1 · n", " ", "e", "o"], "gaps": ["a", "l", "w"] }
          },
          {
            "id": "q2",
            "prompt": "2 · tutaj",
            "accepted": ["2 · tutaj"],
            "letterCloze": { "parts": ["2 · ", "u", "aj"], "gaps": ["t", "t"] }
          },
          {
            "id": "q3",
            "prompt": "3 · tam",
            "accepted": ["3 · tam"],
            "letterCloze": { "parts": ["3 · t", "", ""], "gaps": ["a", "m"] }
          },
          {
            "id": "q4",
            "prompt": "4 · na prawo",
            "accepted": ["4 · na prawo"],
            "letterCloze": { "parts": ["4 · ", "a ", "r", "", "o"], "gaps": ["n", "p", "a", "w"] }
          }
        ]
      },
      {
        "index": 14,
        "id": "l01-exercise-10-match",
        "sourceExerciseId": "WB-L01-E10",
        "kind": "match",
        "instruction": "Kliknij początek frazy, a potem pasujące zakończenie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Jak się…",
            "accepted": [
              "mówi po polsku…?"
            ],
            "options": [
              "znaczy?",
              "pytanie.",
              "mówi po polsku…?",
              "rozumiem.",
              "powtórzyć?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Co to…",
            "accepted": [
              "znaczy?"
            ],
            "options": [
              "znaczy?",
              "pytanie.",
              "mówi po polsku…?",
              "rozumiem.",
              "powtórzyć?"
            ]
          },
          {
            "id": "q3",
            "prompt": "Proszę…",
            "accepted": [
              "powtórzyć?"
            ],
            "options": [
              "znaczy?",
              "pytanie.",
              "mówi po polsku…?",
              "rozumiem.",
              "powtórzyć?"
            ]
          },
          {
            "id": "q4",
            "prompt": "Nie…",
            "accepted": [
              "rozumiem."
            ],
            "options": [
              "znaczy?",
              "pytanie.",
              "mówi po polsku…?",
              "rozumiem.",
              "powtórzyć?"
            ]
          },
          {
            "id": "q5",
            "prompt": "Mam…",
            "accepted": [
              "pytanie."
            ],
            "options": [
              "znaczy?",
              "pytanie.",
              "mówi po polsku…?",
              "rozumiem.",
              "powtórzyć?"
            ]
          }
        ]
      },
      {
        "index": 15,
        "id": "l01-exercise-13",
        "sourceExerciseId": "WB-L01-E13",
        "kind": "typed",
        "instruction": "Zapisz poprawnie każde słowo.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. sedem",
            "accepted": [
              "siedem"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. tszy",
            "accepted": [
              "trzy"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. szesc",
            "accepted": [
              "sześć"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. osem",
            "accepted": [
              "osiem"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. piec",
            "accepted": [
              "pięć"
            ]
          },
          {
            "id": "q6",
            "prompt": "6. dziewiec",
            "accepted": [
              "dziewięć"
            ]
          },
          {
            "id": "q7",
            "prompt": "7. ctery",
            "accepted": [
              "cztery"
            ]
          },
          {
            "id": "q8",
            "prompt": "8. dziesiec",
            "accepted": [
              "dziesięć"
            ]
          }
        ]
      }
    ]
  },
  "3": {
    "id": 3,
    "title": "Mami, kto to jest?",
    "activities": [
      {
        "index": 0,
        "id": "l03-dialogue-objects",
        "sourceExerciseId": "WB-L03-E01",
        "kind": "typed",
        "instruction": "Odtwórz nagranie i uzupełnij wypowiedzi o przedmiotach.",
        "items": [
          {
            "id": "q1",
            "prompt": "Mami",
            "accepted": [
              "Mami: Co to jest?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Angela",
            "accepted": [
              "Angela: Nie wiem."
            ]
          },
          {
            "id": "q3",
            "prompt": "Javier",
            "accepted": [
              "Javier: Ja wiem, to jest książka."
            ]
          },
          {
            "id": "q4",
            "prompt": "Mami",
            "accepted": [
              "Mami: A co to jest?"
            ]
          },
          {
            "id": "q5",
            "prompt": "Javier",
            "accepted": [
              "Javier: To? Nie pamiętam."
            ]
          },
          {
            "id": "q6",
            "prompt": "Angela",
            "accepted": [
              "Angela: Ja pamiętam, to jest kubek."
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l03-classroom-dialogue",
        "sourceExerciseId": "WB-L03-E02",
        "kind": "typed",
        "instruction": "Posłuchaj dialogu. Zapisz brakujące słowa i sprawdź polskie znaki.",
        "items": [
          {
            "id": "q1",
            "prompt": "Nauczycielka: ___ pamiętacie, co to jest?",
            "accepted": [
              "Czy"
            ]
          },
          {
            "id": "q2",
            "prompt": "To jest ___ .",
            "accepted": [
              "krzesło"
            ]
          },
          {
            "id": "q3",
            "prompt": "To jest ___ .",
            "accepted": [
              "klucz"
            ]
          },
          {
            "id": "q4",
            "prompt": "To jest ___ CD.",
            "accepted": [
              "płyta"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l03-gender",
        "sourceExerciseId": "WB-L03-E06",
        "kind": "classify",
        "instruction": "Przyporządkuj rzeczownik do rodzaju: on, ona albo ono.",
        "items": [
          {
            "id": "q1",
            "prompt": "student",
            "accepted": [
              "on"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q2",
            "prompt": "herbata",
            "accepted": [
              "ona"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q3",
            "prompt": "miasto",
            "accepted": [
              "ono"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q4",
            "prompt": "komputer",
            "accepted": [
              "on"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q5",
            "prompt": "studentka",
            "accepted": [
              "ona"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q6",
            "prompt": "centrum",
            "accepted": [
              "ono"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q7",
            "prompt": "cukier",
            "accepted": [
              "on"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q8",
            "prompt": "fotografia",
            "accepted": [
              "ona"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q9",
            "prompt": "okno",
            "accepted": [
              "ono"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q10",
            "prompt": "nauczycielka",
            "accepted": [
              "ona"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q11",
            "prompt": "projekt",
            "accepted": [
              "on"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          },
          {
            "id": "q12",
            "prompt": "muzyka",
            "accepted": [
              "ona"
            ],
            "options": [
              "on",
              "ona",
              "ono"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l03-correction",
        "sourceExerciseId": "WB-L03-E09",
        "kind": "typed",
        "instruction": "Przepisz zdanie w poprawnej formie. Zadbaj o końcówkę przymiotnika.",
        "items": [
          {
            "id": "q1",
            "prompt": "To dziecko jest mały.",
            "accepted": [
              "To dziecko jest małe."
            ]
          },
          {
            "id": "q2",
            "prompt": "Czy ten film jest interesująca?",
            "accepted": [
              "Czy ten film jest interesujący?"
            ]
          },
          {
            "id": "q3",
            "prompt": "Ten autobus jest nowe.",
            "accepted": [
              "Ten autobus jest nowy."
            ]
          },
          {
            "id": "q4",
            "prompt": "Ta kawa są dobra.",
            "accepted": [
              "Ta kawa jest dobra."
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy ta kolega jest sympatyczny?",
            "accepted": [
              "Czy ten kolega jest sympatyczny?"
            ]
          },
          {
            "id": "q6",
            "prompt": "To centrum jest duży.",
            "accepted": [
              "To centrum jest duże."
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l03-colors",
        "sourceExerciseId": "WB-L03-E12",
        "kind": "typed",
        "instruction": "Wpisz kolor zgodny z rodzajem rzeczownika.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ta tablica jest ___ .",
            "accepted": [
              "czarna"
            ]
          },
          {
            "id": "q2",
            "prompt": "To krzesło jest ___ .",
            "accepted": [
              "zielone"
            ]
          },
          {
            "id": "q3",
            "prompt": "Ten kubek jest ___ .",
            "accepted": [
              "pomarańczowy"
            ]
          },
          {
            "id": "q4",
            "prompt": "Ten zeszyt jest ___ .",
            "accepted": [
              "niebieski"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ta książka jest ___ .",
            "accepted": [
              "czerwona"
            ]
          },
          {
            "id": "q6",
            "prompt": "Ta komórka jest ___ .",
            "accepted": [
              "szara"
            ]
          },
          {
            "id": "q7",
            "prompt": "Ta torba jest ___ .",
            "accepted": [
              "fioletowa"
            ]
          },
          {
            "id": "q8",
            "prompt": "Ten długopis jest ___ .",
            "accepted": [
              "żółty"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l03-colors-spelling",
        "sourceExerciseId": "WB-L03-E13",
        "kind": "typed",
        "instruction": "Odtwórz nagranie i popraw zapis. Polskie znaki są częścią odpowiedzi.",
        "items": [
          {
            "id": "q1",
            "prompt": "cerwony",
            "accepted": [
              "czerwony"
            ]
          },
          {
            "id": "q2",
            "prompt": "nebeski",
            "accepted": [
              "niebieski"
            ]
          },
          {
            "id": "q3",
            "prompt": "zelony",
            "accepted": [
              "zielony"
            ]
          },
          {
            "id": "q4",
            "prompt": "fioletowi",
            "accepted": [
              "fioletowy"
            ]
          },
          {
            "id": "q5",
            "prompt": "carny",
            "accepted": [
              "czarny"
            ]
          },
          {
            "id": "q6",
            "prompt": "brazowy",
            "accepted": [
              "brązowy"
            ]
          },
          {
            "id": "q7",
            "prompt": "zolty",
            "accepted": [
              "żółty"
            ]
          },
          {
            "id": "q8",
            "prompt": "rozowy",
            "accepted": [
              "różowy"
            ]
          },
          {
            "id": "q9",
            "prompt": "sary",
            "accepted": [
              "szary"
            ]
          },
          {
            "id": "q10",
            "prompt": "bialy",
            "accepted": [
              "biały"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l03-exercise-3",
        "sourceExerciseId": "WB-L03-E03",
        "kind": "typed",
        "instruction": "Połącz początki i końcówki wyrazów.",
        "items": [
          {
            "id": "q1",
            "prompt": "ze- + -szyt",
            "accepted": [
              "zeszyt"
            ]
          },
          {
            "id": "q2",
            "prompt": "st- + -ół",
            "accepted": [
              "stół"
            ]
          },
          {
            "id": "q3",
            "prompt": "segrega- + -tor",
            "accepted": [
              "segregator"
            ]
          },
          {
            "id": "q4",
            "prompt": "klu- + -cz",
            "accepted": [
              "klucz"
            ]
          },
          {
            "id": "q5",
            "prompt": "ołó- + -wek",
            "accepted": [
              "ołówek"
            ]
          },
          {
            "id": "q6",
            "prompt": "komór- + -ka",
            "accepted": [
              "komórka"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l03-exercise-4",
        "sourceExerciseId": "WB-L03-E04",
        "kind": "typed",
        "instruction": "Odpowiedz na pytania o przedmioty z ilustracji.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Czy to jest okno?",
            "accepted": [
              "Nie, to nie jest okno. To jest klucz."
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Czy to jest sekretarka?",
            "accepted": [
              "Nie, to nie jest sekretarka. To jest nauczycielka."
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Czy to jest ołówek?",
            "accepted": [
              "Nie, to nie jest ołówek. To jest gumka."
            ]
          },
          {
            "id": "q4",
            "prompt": "4. Czy to jest długopis?",
            "accepted": [
              "Tak, to jest długopis."
            ]
          },
          {
            "id": "q5",
            "prompt": "5. Czy to jest zeszyt?",
            "accepted": [
              "Nie, to nie jest zeszyt. To jest kubek."
            ]
          },
          {
            "id": "q6",
            "prompt": "6. Czy to jest studentka?",
            "accepted": [
              "Nie, to nie jest studentka. To jest student."
            ]
          },
          {
            "id": "q7",
            "prompt": "7. Czy to jest dziecko?",
            "accepted": [
              "Tak, to jest dziecko."
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l03-exercise-5",
        "sourceExerciseId": "WB-L03-E05",
        "kind": "typed",
        "instruction": "Ułóż zdania z podanych wyrazów.",
        "items": [
          {
            "id": "q1",
            "prompt": "a) jest / co / to",
            "accepted": [
              "Co to jest?"
            ]
          },
          {
            "id": "q2",
            "prompt": "b) jest / to / tak / Krakowa / mapa",
            "accepted": [
              "Tak, to jest mapa Krakowa."
            ]
          },
          {
            "id": "q3",
            "prompt": "c) pamiętam / nie / co / jest / to",
            "accepted": [
              "Nie pamiętam, co to jest."
            ]
          },
          {
            "id": "q4",
            "prompt": "d) wiem / nie / to / jest / kto",
            "accepted": [
              "Nie wiem, kto to jest."
            ]
          },
          {
            "id": "q5",
            "prompt": "e) nie / co / wiem / to / znaczy",
            "accepted": [
              "Nie wiem, co to znaczy."
            ]
          },
          {
            "id": "q6",
            "prompt": "f) to / czy / jest / torba",
            "accepted": [
              "Czy to jest torba?"
            ]
          },
          {
            "id": "q7",
            "prompt": "g) tak / książka / jest / to",
            "accepted": [
              "Tak, to jest książka."
            ]
          },
          {
            "id": "q8",
            "prompt": "h) jest / student / to / nowy",
            "accepted": [
              "To jest nowy student."
            ]
          },
          {
            "id": "q9",
            "prompt": "i) nie / nie / klucz / jest / to",
            "accepted": [
              "Nie, to nie jest klucz."
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l03-exercise-7",
        "sourceExerciseId": "WB-L03-E07",
        "kind": "typed",
        "instruction": "Wpisz kategorię każdego przymiotnika.",
        "items": [
          {
            "id": "q1",
            "prompt": "atrakcyjny",
            "accepted": [
              "JAKI"
            ]
          },
          {
            "id": "q2",
            "prompt": "sympatyczny",
            "accepted": [
              "JAKI"
            ]
          },
          {
            "id": "q3",
            "prompt": "inteligentny",
            "accepted": [
              "JAKI"
            ]
          },
          {
            "id": "q4",
            "prompt": "zestresowany",
            "accepted": [
              "JAKI"
            ]
          },
          {
            "id": "q5",
            "prompt": "aktywna",
            "accepted": [
              "JAKA"
            ]
          },
          {
            "id": "q6",
            "prompt": "skomplikowana",
            "accepted": [
              "JAKA"
            ]
          },
          {
            "id": "q7",
            "prompt": "energiczna",
            "accepted": [
              "JAKA"
            ]
          },
          {
            "id": "q8",
            "prompt": "romantyczna",
            "accepted": [
              "JAKA"
            ]
          },
          {
            "id": "q9",
            "prompt": "spontaniczne",
            "accepted": [
              "JAKIE"
            ]
          },
          {
            "id": "q10",
            "prompt": "kreatywne",
            "accepted": [
              "JAKIE"
            ]
          },
          {
            "id": "q11",
            "prompt": "ambitne",
            "accepted": [
              "JAKIE"
            ]
          },
          {
            "id": "q12",
            "prompt": "fajne",
            "accepted": [
              "JAKIE"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l03-exercise-8",
        "sourceExerciseId": "WB-L03-E08",
        "kind": "typed",
        "instruction": "Wpisz wyraz o przeciwnym znaczeniu.",
        "items": [
          {
            "id": "q1",
            "prompt": "nowy ≠ ___",
            "accepted": [
              "stary"
            ]
          },
          {
            "id": "q2",
            "prompt": "mały ≠ ___",
            "accepted": [
              "duży"
            ]
          },
          {
            "id": "q3",
            "prompt": "dobry ≠ ___",
            "accepted": [
              "zły"
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "l03-exercise-10",
        "sourceExerciseId": "WB-L03-E10",
        "kind": "typed",
        "instruction": "Uzupełnij wyrażenia właściwą formą przymiotnika.",
        "items": [
          {
            "id": "q1",
            "prompt": "___ student (inteligentny)",
            "accepted": [
              "inteligentny student"
            ]
          },
          {
            "id": "q2",
            "prompt": "___ aktorka (atrakcyjny)",
            "accepted": [
              "atrakcyjna aktorka"
            ]
          },
          {
            "id": "q3",
            "prompt": "___ dziecko (mały)",
            "accepted": [
              "małe dziecko"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ kolega (sympatyczny)",
            "accepted": [
              "sympatyczny kolega"
            ]
          },
          {
            "id": "q5",
            "prompt": "___ auto (stary)",
            "accepted": [
              "stare auto"
            ]
          },
          {
            "id": "q6",
            "prompt": "___ torba (modny)",
            "accepted": [
              "modna torba"
            ]
          },
          {
            "id": "q7",
            "prompt": "___ stół (duży)",
            "accepted": [
              "duży stół"
            ]
          },
          {
            "id": "q8",
            "prompt": "___ słowo (skomplikowany)",
            "accepted": [
              "skomplikowane słowo"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "l03-noun-adjective-match",
        "sourceExerciseId": "WB-L03-E11",
        "kind": "match",
        "instruction": "Połącz każdy rzeczownik z pasującym przymiotnikiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. kawa",
            "accepted": [
              "e. czarna"
            ],
            "options": [
              "a. biały",
              "b. białe",
              "c. żółta",
              "d. zielona",
              "e. czarna",
              "f. czerwone"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. herbata",
            "accepted": [
              "d. zielona"
            ],
            "options": [
              "a. biały",
              "b. białe",
              "c. żółta",
              "d. zielona",
              "e. czarna",
              "f. czerwone"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. mleko",
            "accepted": [
              "b. białe"
            ],
            "options": [
              "a. biały",
              "b. białe",
              "c. żółta",
              "d. zielona",
              "e. czarna",
              "f. czerwone"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. cukier",
            "accepted": [
              "a. biały"
            ],
            "options": [
              "a. biały",
              "b. białe",
              "c. żółta",
              "d. zielona",
              "e. czarna",
              "f. czerwone"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. wino",
            "accepted": [
              "f. czerwone"
            ],
            "options": [
              "a. biały",
              "b. białe",
              "c. żółta",
              "d. zielona",
              "e. czarna",
              "f. czerwone"
            ]
          },
          {
            "id": "q6",
            "prompt": "6. papryka",
            "accepted": [
              "c. żółta"
            ],
            "options": [
              "a. biały",
              "b. białe",
              "c. żółta",
              "d. zielona",
              "e. czarna",
              "f. czerwone"
            ]
          }
        ]
      },
      {
        "index": 13,
        "id": "l03-question-answer-match",
        "sourceExerciseId": "WB-L03-E14",
        "kind": "match",
        "instruction": "Połącz każde pytanie z pasującą odpowiedzią.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Kto to jest?",
            "accepted": [
              "e. To jest dziecko."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Czy to jest nauczycielka?",
            "accepted": [
              "a. Nie, to jest sekretarka."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Jaka jest ta kawa?",
            "accepted": [
              "h. Ta kawa jest czarna."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q4",
            "prompt": "4. Jakie jest to dziecko?",
            "accepted": [
              "c. To dziecko jest małe."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q5",
            "prompt": "5. Czy to jest kawa?",
            "accepted": [
              "f. Tak, to jest kawa."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q6",
            "prompt": "6. Jaki jest ten nauczyciel?",
            "accepted": [
              "g. Ten nauczyciel jest miły."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q7",
            "prompt": "7. Czy to jest nauczyciel?",
            "accepted": [
              "d. Tak, to jest nauczyciel."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          },
          {
            "id": "q8",
            "prompt": "8. Co to jest?",
            "accepted": [
              "b. To jest kubek."
            ],
            "options": [
              "a. Nie, to jest sekretarka.",
              "b. To jest kubek.",
              "c. To dziecko jest małe.",
              "d. Tak, to jest nauczyciel.",
              "e. To jest dziecko.",
              "f. Tak, to jest kawa.",
              "g. Ten nauczyciel jest miły.",
              "h. Ta kawa jest czarna."
            ]
          }
        ]
      }
    ]
  },
  "4": {
    "id": 4,
    "title": "Jaki jesteś?",
    "activities": [
      {
        "index": 0,
        "id": "l04-language-forms",
        "sourceExerciseId": "WB-L04-E04",
        "kind": "choice",
        "instruction": "Wybierz formę odpowiednią po podanym czasowniku.",
        "items": [
          {
            "id": "q1",
            "prompt": "Robert zna ___.",
            "accepted": [
              "francuski"
            ],
            "options": [
              "francuskiego",
              "francuski",
              "po francusku"
            ]
          },
          {
            "id": "q2",
            "prompt": "Andrea świetnie mówi po ___.",
            "accepted": [
              "polsku"
            ],
            "options": [
              "polski",
              "polskie",
              "polsku"
            ]
          },
          {
            "id": "q3",
            "prompt": "Pedro mówi po ___.",
            "accepted": [
              "hiszpańsku"
            ],
            "options": [
              "hiszpańsku",
              "hiszpański",
              "hiszpańskiego"
            ]
          },
          {
            "id": "q4",
            "prompt": "Kasia uczy się ___.",
            "accepted": [
              "włoskiego"
            ],
            "options": [
              "włoskiego",
              "włoski",
              "włosku"
            ]
          },
          {
            "id": "q5",
            "prompt": "Uwe nie mówi po ___.",
            "accepted": [
              "rosyjsku"
            ],
            "options": [
              "rosyjski",
              "rosyjsku",
              "rosyjskiego"
            ]
          },
          {
            "id": "q6",
            "prompt": "Oni znają bardzo dobrze ___.",
            "accepted": [
              "niemiecki"
            ],
            "options": [
              "niemiecki",
              "niemieckim",
              "niemiecku"
            ]
          },
          {
            "id": "q7",
            "prompt": "Mami nie mówi ___.",
            "accepted": [
              "po chińsku"
            ],
            "options": [
              "chiński",
              "chińskiego",
              "po chińsku"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l04-verbs",
        "sourceExerciseId": "WB-L04-E07",
        "kind": "typed",
        "instruction": "Wpisz odmieniony czasownik. Zwróć uwagę na osobę i liczbę.",
        "items": [
          {
            "id": "q1",
            "prompt": "(Ja) ___ się, że ty ___ tutaj. (cieszyć się, być)",
            "accepted": [
              "cieszę się; jesteś"
            ]
          },
          {
            "id": "q2",
            "prompt": "Joost świetnie ___ na nartach. (jeździć)",
            "accepted": [
              "jeździ"
            ]
          },
          {
            "id": "q3",
            "prompt": "Aneta ___ po niemiecku. (mówić)",
            "accepted": [
              "mówi"
            ]
          },
          {
            "id": "q4",
            "prompt": "Oni ___ w kawiarni. (siedzieć)",
            "accepted": [
              "siedzą"
            ]
          },
          {
            "id": "q5",
            "prompt": "Dziękuję, ale ja nie ___. (palić)",
            "accepted": [
              "palę"
            ]
          },
          {
            "id": "q6",
            "prompt": "Javier ___ tango. (tańczyć)",
            "accepted": [
              "tańczy"
            ]
          },
          {
            "id": "q7",
            "prompt": "Czy wy ___ na kurs? (chodzić)",
            "accepted": [
              "chodzicie"
            ]
          },
          {
            "id": "q8",
            "prompt": "Julia ___ francuskiego. (uczyć się)",
            "accepted": [
              "uczy się"
            ]
          },
          {
            "id": "q9",
            "prompt": "Co ty ___? (robić)",
            "accepted": [
              "robisz"
            ]
          },
          {
            "id": "q10",
            "prompt": "Czy oni ___ spaghetti? (lubić)",
            "accepted": [
              "lubią"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l04-class-dialogue",
        "sourceExerciseId": "WB-L04-E08",
        "kind": "typed",
        "instruction": "Posłuchaj rozmowy i wpisz brakujące słowa. Zwróć uwagę na parę „uczyć / uczyć się”.",
        "items": [
          {
            "id": "q1",
            "prompt": "___ ty uczysz się języka angielskiego?",
            "accepted": [
              "Czy"
            ]
          },
          {
            "id": "q2",
            "prompt": "Uczysz się ___ angielskiego?",
            "accepted": [
              "języka"
            ]
          },
          {
            "id": "q3",
            "prompt": "Jestem ___. (nauczyciel, forma żeńska)",
            "accepted": [
              "nauczycielka"
            ]
          },
          {
            "id": "q4",
            "prompt": "To ___, że ty uczysz angielskiego?",
            "accepted": [
              "znaczy"
            ]
          },
          {
            "id": "q5",
            "prompt": "Jestem nauczycielem, ___ języka niemieckiego.",
            "accepted": [
              "uczę"
            ]
          },
          {
            "id": "q6",
            "prompt": "Chodzę na ___ do Glossy.",
            "accepted": [
              "kurs"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l04-adjectives",
        "sourceExerciseId": "WB-L04-E14",
        "kind": "typed",
        "instruction": "Uzupełnij zdanie formą zgodną z osobą lub rzeczownikiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ona ma dużo energii, jest ___.",
            "accepted": [
              "energiczna"
            ]
          },
          {
            "id": "q2",
            "prompt": "Ona ma duży talent, jest ___.",
            "accepted": [
              "utalentowana"
            ]
          },
          {
            "id": "q3",
            "prompt": "On jest nerwowy i szybko się złości — jest ___.",
            "accepted": [
              "agresywny"
            ]
          },
          {
            "id": "q4",
            "prompt": "Ona ma duże ambicje, jest ___.",
            "accepted": [
              "ambitna"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ona lubi romantyczne filmy — jest ___.",
            "accepted": [
              "romantyczna"
            ]
          },
          {
            "id": "q6",
            "prompt": "To dziecko jest ___, cały czas coś robi.",
            "accepted": [
              "aktywne"
            ]
          },
          {
            "id": "q7",
            "prompt": "Ta modelka jest ___.",
            "accepted": [
              "atrakcyjna"
            ]
          },
          {
            "id": "q8",
            "prompt": "Ten student jest ___ i szybko się uczy.",
            "accepted": [
              "inteligentny"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l04-connectors",
        "sourceExerciseId": "WB-L04-E15",
        "kind": "typed",
        "instruction": "Wpisz spójniki w kolejności. Jeśli są dwa, rozdziel je przecinkiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ona nie jest ___ szczupła, ___ wysoka, ___ jest bardzo ładna.",
            "accepted": [
              "ani; ani; ale"
            ]
          },
          {
            "id": "q2",
            "prompt": "To dziecko jest utalentowane ___ kreatywne.",
            "accepted": [
              "i"
            ]
          },
          {
            "id": "q3",
            "prompt": "Ola nie jest ___ energiczna, ___ wysportowana.",
            "accepted": [
              "ani; ani"
            ]
          },
          {
            "id": "q4",
            "prompt": "Ta dziewczyna jest inteligentna ___ utalentowana, ___ leniwa.",
            "accepted": [
              "i; ale"
            ]
          },
          {
            "id": "q5",
            "prompt": "To dziecko jest sympatyczne ___ wesołe.",
            "accepted": [
              "i"
            ]
          },
          {
            "id": "q6",
            "prompt": "Elena to dobra studentka, ___ jest pracowita ___ inteligentna.",
            "accepted": [
              "bo; i"
            ]
          },
          {
            "id": "q7",
            "prompt": "Ten kubek jest ładny, ___ brudny.",
            "accepted": [
              "ale"
            ]
          },
          {
            "id": "q8",
            "prompt": "Ten chłopak nie jest ___ utalentowany, ___ pracowity.",
            "accepted": [
              "ani; ani"
            ]
          },
          {
            "id": "q9",
            "prompt": "Ten długopis jest zły, ___ jest stary i nie pisze.",
            "accepted": [
              "bo"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l04-exercise-1",
        "sourceExerciseId": "WB-L04-E01",
        "kind": "typed",
        "instruction": "Uzupełnij dialog właściwymi formami.",
        "items": [
          {
            "id": "q1",
            "prompt": "Javier: ___, Mami!",
            "accepted": [
              "Cześć"
            ]
          },
          {
            "id": "q2",
            "prompt": "Mami: Co ___ u ciebie?",
            "accepted": [
              "słychać"
            ]
          },
          {
            "id": "q3",
            "prompt": "Wszystko w ___. A u ___?",
            "accepted": [
              "porządku; ciebie"
            ]
          },
          {
            "id": "q4",
            "prompt": "U ___ też dobrze.",
            "accepted": [
              "mnie"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy ___, kto to jest?",
            "accepted": [
              "wiesz"
            ]
          },
          {
            "id": "q6",
            "prompt": "To jest nowy ___ .",
            "accepted": [
              "student"
            ]
          },
          {
            "id": "q7",
            "prompt": "Ciekawe, czy ___ w naszej grupie?",
            "accepted": [
              "jesteś"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l04-exercise-2",
        "sourceExerciseId": "WB-L04-E02",
        "kind": "typed",
        "instruction": "Wpisz właściwe formy czasowników.",
        "items": [
          {
            "id": "q1",
            "prompt": "Pierre: Nie ___! (rozumieć)",
            "accepted": [
              "rozumiem"
            ]
          },
          {
            "id": "q2",
            "prompt": "Javier: Nie ___, jak mówimy „hola”. (pamiętać)",
            "accepted": [
              "pamiętam"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mami: No dobrze, ___ rację. (mieć)",
            "accepted": [
              "masz"
            ]
          },
          {
            "id": "q4",
            "prompt": "Pierre: ___ Pierre i nie ___ po hiszpańsku.",
            "accepted": [
              "jestem; mówię"
            ]
          },
          {
            "id": "q5",
            "prompt": "Javier: Ja ___ Javier i ___ z Argentyny, a to ___ Mami; ona ___ po japońsku.",
            "accepted": [
              "mam; jestem; jest; mówi"
            ]
          },
          {
            "id": "q6",
            "prompt": "Javier: A ty ___ z Francji? (być)",
            "accepted": [
              "jesteś"
            ]
          },
          {
            "id": "q7",
            "prompt": "Pierre: ___ w Paryżu. A wy, gdzie ___? (mieszkać)",
            "accepted": [
              "mieszkam; mieszkacie"
            ]
          },
          {
            "id": "q8",
            "prompt": "Javier: Ja ___ w Buenos Aires. (mieszkać)",
            "accepted": [
              "mieszkam"
            ]
          },
          {
            "id": "q9",
            "prompt": "Mami: Czy ty ___ w grupie A1? (być)",
            "accepted": [
              "jesteś"
            ]
          },
          {
            "id": "q10",
            "prompt": "Pierre: To ___ moja nowa grupa. (być)",
            "accepted": [
              "jest"
            ]
          },
          {
            "id": "q11",
            "prompt": "Mami: To ___ też nasza grupa! (być)",
            "accepted": [
              "jest"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l04-exercise-3",
        "sourceExerciseId": "WB-L04-E03",
        "kind": "typed",
        "instruction": "Wpisz przysłówek utworzony od nazwy języka.",
        "items": [
          {
            "id": "q1",
            "prompt": "Jesús mówi po ___ (hiszpański).",
            "accepted": [
              "hiszpańsku"
            ]
          },
          {
            "id": "q2",
            "prompt": "Joanna mówi po ___ (polski).",
            "accepted": [
              "polsku"
            ]
          },
          {
            "id": "q3",
            "prompt": "Florence mówi po ___ (francuski).",
            "accepted": [
              "francusku"
            ]
          },
          {
            "id": "q4",
            "prompt": "Chiara mówi po ___ (włoski).",
            "accepted": [
              "włosku"
            ]
          },
          {
            "id": "q5",
            "prompt": "Shige mówi po ___ (japoński).",
            "accepted": [
              "japońsku"
            ]
          },
          {
            "id": "q6",
            "prompt": "Emily mówi po ___ (angielski).",
            "accepted": [
              "angielsku"
            ]
          },
          {
            "id": "q7",
            "prompt": "Jürgen mówi po ___ (niemiecki).",
            "accepted": [
              "niemiecku"
            ]
          },
          {
            "id": "q8",
            "prompt": "Lisa mówi po ___ (szwedzki).",
            "accepted": [
              "szwedzku"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l04-exercise-5",
        "sourceExerciseId": "WB-L04-E05",
        "kind": "typed",
        "instruction": "Wpisz brakujące formy nazw języków.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Joost: po ___; zna ___; dziewczyna jest z ___.",
            "accepted": [
              "holendersku; polski; Polski"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Hajnalka: po ___; mówi też po ___; uczy się ___; Laura zna ___.",
            "accepted": [
              "węgiersku; polsku; węgierskiego; węgierski"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Agnieszka: mówi po ___; Dorota zna ___.",
            "accepted": [
              "rosyjsku; rosyjski"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l04-exercise-6",
        "sourceExerciseId": "WB-L04-E06",
        "kind": "typed",
        "instruction": "Wpisz formę nazwy języka odpowiednią po podanym czasowniku.",
        "items": [
          {
            "id": "q1",
            "prompt": "angielski · znać",
            "accepted": [
              "angielski"
            ]
          },
          {
            "id": "q2",
            "prompt": "angielski · uczyć się",
            "accepted": [
              "angielskiego"
            ]
          },
          {
            "id": "q3",
            "prompt": "angielski · mówić po",
            "accepted": [
              "angielsku"
            ]
          },
          {
            "id": "q4",
            "prompt": "niemiecki · znać",
            "accepted": [
              "niemiecki"
            ]
          },
          {
            "id": "q5",
            "prompt": "niemiecki · uczyć się",
            "accepted": [
              "niemieckiego"
            ]
          },
          {
            "id": "q6",
            "prompt": "niemiecki · mówić po",
            "accepted": [
              "niemiecku"
            ]
          },
          {
            "id": "q7",
            "prompt": "portugalski · znać",
            "accepted": [
              "portugalski"
            ]
          },
          {
            "id": "q8",
            "prompt": "portugalski · uczyć się",
            "accepted": [
              "portugalskiego"
            ]
          },
          {
            "id": "q9",
            "prompt": "portugalski · mówić po",
            "accepted": [
              "portugalsku"
            ]
          },
          {
            "id": "q10",
            "prompt": "japoński · znać",
            "accepted": [
              "japoński"
            ]
          },
          {
            "id": "q11",
            "prompt": "japoński · uczyć się",
            "accepted": [
              "japońskiego"
            ]
          },
          {
            "id": "q12",
            "prompt": "japoński · mówić po",
            "accepted": [
              "japońsku"
            ]
          },
          {
            "id": "q13",
            "prompt": "polski · znać",
            "accepted": [
              "polski"
            ]
          },
          {
            "id": "q14",
            "prompt": "polski · uczyć się",
            "accepted": [
              "polskiego"
            ]
          },
          {
            "id": "q15",
            "prompt": "polski · mówić po",
            "accepted": [
              "polsku"
            ]
          },
          {
            "id": "q16",
            "prompt": "hiszpański · znać",
            "accepted": [
              "hiszpański"
            ]
          },
          {
            "id": "q17",
            "prompt": "hiszpański · uczyć się",
            "accepted": [
              "hiszpańskiego"
            ]
          },
          {
            "id": "q18",
            "prompt": "hiszpański · mówić po",
            "accepted": [
              "hiszpańsku"
            ]
          },
          {
            "id": "q19",
            "prompt": "włoski · znać",
            "accepted": [
              "włoski"
            ]
          },
          {
            "id": "q20",
            "prompt": "włoski · uczyć się",
            "accepted": [
              "włoskiego"
            ]
          },
          {
            "id": "q21",
            "prompt": "włoski · mówić po",
            "accepted": [
              "włosku"
            ]
          },
          {
            "id": "q22",
            "prompt": "francuski · znać",
            "accepted": [
              "francuski"
            ]
          },
          {
            "id": "q23",
            "prompt": "francuski · uczyć się",
            "accepted": [
              "francuskiego"
            ]
          },
          {
            "id": "q24",
            "prompt": "francuski · mówić po",
            "accepted": [
              "francusku"
            ]
          },
          {
            "id": "q25",
            "prompt": "rosyjski · znać",
            "accepted": [
              "rosyjski"
            ]
          },
          {
            "id": "q26",
            "prompt": "rosyjski · uczyć się",
            "accepted": [
              "rosyjskiego"
            ]
          },
          {
            "id": "q27",
            "prompt": "rosyjski · mówić po",
            "accepted": [
              "rosyjsku"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l04-question-answer-match",
        "sourceExerciseId": "WB-L04-E09",
        "kind": "match",
        "instruction": "Połącz każde pytanie z pasującą odpowiedzią.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Co u ciebie?",
            "accepted": [
              "d. Nic nowego."
            ],
            "options": [
              "a. Tak, bardzo.",
              "b. Tak, bardzo dobrze, jestem z Hiszpanii.",
              "c. Bo chcę studiować w Krakowie.",
              "d. Nic nowego.",
              "e. Z Madrytu.",
              "f. Nie wiem, ale myślę, że tak."
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Czy lubisz pizzę?",
            "accepted": [
              "a. Tak, bardzo."
            ],
            "options": [
              "a. Tak, bardzo.",
              "b. Tak, bardzo dobrze, jestem z Hiszpanii.",
              "c. Bo chcę studiować w Krakowie.",
              "d. Nic nowego.",
              "e. Z Madrytu.",
              "f. Nie wiem, ale myślę, że tak."
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Czy to jest nowy student?",
            "accepted": [
              "f. Nie wiem, ale myślę, że tak."
            ],
            "options": [
              "a. Tak, bardzo.",
              "b. Tak, bardzo dobrze, jestem z Hiszpanii.",
              "c. Bo chcę studiować w Krakowie.",
              "d. Nic nowego.",
              "e. Z Madrytu.",
              "f. Nie wiem, ale myślę, że tak."
            ]
          },
          {
            "id": "q4",
            "prompt": "4. Czy mówisz po hiszpańsku?",
            "accepted": [
              "b. Tak, bardzo dobrze, jestem z Hiszpanii."
            ],
            "options": [
              "a. Tak, bardzo.",
              "b. Tak, bardzo dobrze, jestem z Hiszpanii.",
              "c. Bo chcę studiować w Krakowie.",
              "d. Nic nowego.",
              "e. Z Madrytu.",
              "f. Nie wiem, ale myślę, że tak."
            ]
          },
          {
            "id": "q5",
            "prompt": "5. Skąd jesteś?",
            "accepted": [
              "e. Z Madrytu."
            ],
            "options": [
              "a. Tak, bardzo.",
              "b. Tak, bardzo dobrze, jestem z Hiszpanii.",
              "c. Bo chcę studiować w Krakowie.",
              "d. Nic nowego.",
              "e. Z Madrytu.",
              "f. Nie wiem, ale myślę, że tak."
            ]
          },
          {
            "id": "q6",
            "prompt": "6. Dlaczego uczysz się polskiego?",
            "accepted": [
              "c. Bo chcę studiować w Krakowie."
            ],
            "options": [
              "a. Tak, bardzo.",
              "b. Tak, bardzo dobrze, jestem z Hiszpanii.",
              "c. Bo chcę studiować w Krakowie.",
              "d. Nic nowego.",
              "e. Z Madrytu.",
              "f. Nie wiem, ale myślę, że tak."
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "l04-exercise-10",
        "sourceExerciseId": "WB-L04-E10",
        "kind": "typed",
        "instruction": "Uzupełnij zdania właściwym przymiotnikiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ona ma wysoką temperaturę, jest bardzo ___.",
            "accepted": [
              "chora"
            ]
          },
          {
            "id": "q2",
            "prompt": "On lubi pracować, jest ___.",
            "accepted": [
              "pracowity"
            ]
          },
          {
            "id": "q3",
            "prompt": "Nie jest ani niski, ani średniego wzrostu — jest ___.",
            "accepted": [
              "wysoki"
            ]
          },
          {
            "id": "q4",
            "prompt": "To dziecko jest czyste, a tamto jest ___.",
            "accepted": [
              "brudne"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ten mężczyzna jest atrakcyjny, wysoki i ___.",
            "accepted": [
              "przystojny"
            ]
          },
          {
            "id": "q6",
            "prompt": "To dziecko jest smutne, a tamto ___.",
            "accepted": [
              "wesołe"
            ]
          },
          {
            "id": "q7",
            "prompt": "On jest gruby, a ona ___.",
            "accepted": [
              "szczupła"
            ]
          },
          {
            "id": "q8",
            "prompt": "Nie jest wysoki ani niski — jest ___.",
            "accepted": [
              "średniego wzrostu"
            ]
          },
          {
            "id": "q9",
            "prompt": "On lubi sport, jest ___.",
            "accepted": [
              "wysportowany"
            ]
          },
          {
            "id": "q10",
            "prompt": "Ona nie lubi pracować, jest ___.",
            "accepted": [
              "leniwy"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "l04-exercise-11",
        "sourceExerciseId": "WB-L04-E11",
        "kind": "typed",
        "instruction": "Wpisz brakujący wyraz lub wyrażenie.",
        "items": [
          {
            "id": "q1",
            "prompt": "stary ≠ ___",
            "accepted": [
              "młody"
            ]
          },
          {
            "id": "q2",
            "prompt": "szczupły ≠ ___",
            "accepted": [
              "gruby"
            ]
          },
          {
            "id": "q3",
            "prompt": "wysoki ≠ ___",
            "accepted": [
              "niski"
            ]
          },
          {
            "id": "q4",
            "prompt": "ani wysoki, ani niski = ___",
            "accepted": [
              "średniego wzrostu"
            ]
          },
          {
            "id": "q5",
            "prompt": "zdrowy ≠ ___",
            "accepted": [
              "chory"
            ]
          },
          {
            "id": "q6",
            "prompt": "ładny ≠ ___",
            "accepted": [
              "brzydki"
            ]
          },
          {
            "id": "q7",
            "prompt": "przystojny ≠ ___",
            "accepted": [
              "brzydki"
            ]
          },
          {
            "id": "q8",
            "prompt": "pracowity ≠ ___",
            "accepted": [
              "leniwy"
            ]
          },
          {
            "id": "q9",
            "prompt": "smutny ≠ ___",
            "accepted": [
              "wesoły"
            ]
          },
          {
            "id": "q10",
            "prompt": "czysty ≠ ___",
            "accepted": [
              "brudny"
            ]
          },
          {
            "id": "q11",
            "prompt": "wypoczęty ≠ ___",
            "accepted": [
              "zmęczony"
            ]
          },
          {
            "id": "q12",
            "prompt": "aktywny fizycznie = ___",
            "accepted": [
              "wysportowany"
            ]
          }
        ]
      },
      {
        "index": 13,
        "id": "l04-exercise-12",
        "sourceExerciseId": "WB-L04-E12",
        "kind": "typed",
        "instruction": "Połącz fragmenty wyrazów i wpisz pełne słowo.",
        "items": [
          {
            "id": "q1",
            "prompt": "romant-",
            "accepted": [
              "romantyczny"
            ]
          },
          {
            "id": "q2",
            "prompt": "ambi-",
            "accepted": [
              "ambitny"
            ]
          },
          {
            "id": "q3",
            "prompt": "agresyw-",
            "accepted": [
              "agresywny"
            ]
          },
          {
            "id": "q4",
            "prompt": "energ-",
            "accepted": [
              "energiczny"
            ]
          },
          {
            "id": "q5",
            "prompt": "atrakcyj-",
            "accepted": [
              "atrakcyjny"
            ]
          },
          {
            "id": "q6",
            "prompt": "zestresow-",
            "accepted": [
              "zestresowany"
            ]
          },
          {
            "id": "q7",
            "prompt": "kreaty-",
            "accepted": [
              "kreatywny"
            ]
          }
        ]
      },
      {
        "index": 14,
        "id": "l04-exercise-13",
        "sourceExerciseId": "WB-L04-E13",
        "kind": "typed",
        "instruction": "Ułóż poprawne zdania z podanych wyrazów.",
        "items": [
          {
            "id": "q1",
            "prompt": "a) że / ty / myślę / pracowity / jesteś",
            "accepted": [
              "Myślę, że ty jesteś pracowity."
            ]
          },
          {
            "id": "q2",
            "prompt": "b) czy / wiem / on / nie / sympatyczny / jest",
            "accepted": [
              "Nie wiem, czy on jest sympatyczny."
            ]
          },
          {
            "id": "q3",
            "prompt": "c) wiem / czy / miła / jest / ona / nie",
            "accepted": [
              "Nie wiem, czy ona jest miła."
            ]
          },
          {
            "id": "q4",
            "prompt": "d) pewny / on / jest / że / energiczny / jestem",
            "accepted": [
              "Jestem pewny, że on jest energiczny."
            ]
          },
          {
            "id": "q5",
            "prompt": "e) ona / jestem / że / pewna / ambitna / jest",
            "accepted": [
              "Jestem pewna, że ona jest ambitna."
            ]
          }
        ]
      }
    ]
  },
  "5": {
    "id": 5,
    "title": "Jesteś instruktorem tanga?",
    "activities": [
      {
        "index": 0,
        "id": "l05-text-order",
        "sourceExerciseId": "WB-L05-E01",
        "kind": "typed",
        "instruction": "Uporządkuj historię, a potem posłuchaj nagrania. Wpisz cały tekst w poprawnej kolejności.",
        "items": [
          {
            "id": "q1",
            "prompt": "Cały tekst",
            "accepted": [
              "To jest Mami Takada. Ona jest z Japonii. Mieszka w Tokio, ale teraz jest w Krakowie. Mami uczy się języka polskiego, bo chce studiować w Polsce. Mami jest młoda, szczupła i ładna. Ma 20 lat. Mami bardzo lubi słuchać muzyki."
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l05-phone-dictation",
        "sourceExerciseId": "WB-L05-E04",
        "kind": "typed",
        "instruction": "Posłuchaj nagrania i zanotuj numery. Możesz oddzielać cyfry spacjami.",
        "items": [
          {
            "id": "q1",
            "prompt": "Joanna",
            "accepted": [
              "40 25 36 72"
            ]
          },
          {
            "id": "q2",
            "prompt": "Ewa",
            "accepted": [
              "0 50 14 89 66"
            ]
          },
          {
            "id": "q3",
            "prompt": "Janek",
            "accepted": [
              "72 40 30 96"
            ]
          },
          {
            "id": "q4",
            "prompt": "Michał",
            "accepted": [
              "22 12 58 49"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l05-numbers",
        "sourceExerciseId": "WB-L05-E05",
        "kind": "typed",
        "instruction": "Zapisz liczby słownie. Nie pomyl form na -naście i -dziesiąt.",
        "items": [
          {
            "id": "q1",
            "prompt": "1",
            "accepted": [
              "siedemnaście"
            ]
          },
          {
            "id": "q2",
            "prompt": "2",
            "accepted": [
              "pięćdziesiąt"
            ]
          },
          {
            "id": "q3",
            "prompt": "3",
            "accepted": [
              "trzydzieści dwa"
            ]
          },
          {
            "id": "q4",
            "prompt": "4",
            "accepted": [
              "czterdzieści osiem"
            ]
          },
          {
            "id": "q5",
            "prompt": "5",
            "accepted": [
              "dwadzieścia trzy"
            ]
          },
          {
            "id": "q6",
            "prompt": "6",
            "accepted": [
              "sześćdziesiąt"
            ]
          },
          {
            "id": "q7",
            "prompt": "7",
            "accepted": [
              "szesnaście"
            ]
          },
          {
            "id": "q8",
            "prompt": "8",
            "accepted": [
              "siedemdziesiąt osiem"
            ]
          },
          {
            "id": "q9",
            "prompt": "9",
            "accepted": [
              "osiemdziesiąt dziewięć"
            ]
          },
          {
            "id": "q10",
            "prompt": "10",
            "accepted": [
              "dziewięćdziesiąt osiem"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l05-jobs",
        "sourceExerciseId": "WB-L05-E08",
        "kind": "typed",
        "instruction": "Uzupełnij nazwy zawodów. Wpisuj całe słowo, nie same brakujące litery.",
        "items": [
          {
            "id": "q1",
            "prompt": "1",
            "accepted": [
              "kelner"
            ]
          },
          {
            "id": "q2",
            "prompt": "2",
            "accepted": [
              "nauczyciel"
            ]
          },
          {
            "id": "q3",
            "prompt": "3",
            "accepted": [
              "fotograf"
            ]
          },
          {
            "id": "q4",
            "prompt": "4",
            "accepted": [
              "informatyk"
            ]
          },
          {
            "id": "q5",
            "prompt": "5",
            "accepted": [
              "rolnik"
            ]
          },
          {
            "id": "q6",
            "prompt": "6",
            "accepted": [
              "muzyk"
            ]
          },
          {
            "id": "q7",
            "prompt": "7",
            "accepted": [
              "inżynier"
            ]
          },
          {
            "id": "q8",
            "prompt": "8",
            "accepted": [
              "policjant"
            ]
          },
          {
            "id": "q9",
            "prompt": "9",
            "accepted": [
              "kucharz"
            ]
          },
          {
            "id": "q10",
            "prompt": "10",
            "accepted": [
              "dentysta"
            ]
          },
          {
            "id": "q11",
            "prompt": "11",
            "accepted": [
              "tancerz"
            ]
          },
          {
            "id": "q12",
            "prompt": "12",
            "accepted": [
              "urzędnik"
            ]
          },
          {
            "id": "q13",
            "prompt": "13",
            "accepted": [
              "lekarz"
            ]
          },
          {
            "id": "q14",
            "prompt": "14",
            "accepted": [
              "biznesmen"
            ]
          },
          {
            "id": "q15",
            "prompt": "15",
            "accepted": [
              "dziennikarz"
            ]
          },
          {
            "id": "q16",
            "prompt": "16",
            "accepted": [
              "emeryt"
            ]
          },
          {
            "id": "q17",
            "prompt": "17",
            "accepted": [
              "aktor"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l05-inflection",
        "sourceExerciseId": "WB-L05-E11",
        "kind": "typed",
        "instruction": "Uzupełnij pełne wyrażenie w poprawnym przypadku.",
        "items": [
          {
            "id": "q1",
            "prompt": "Julia jest bardzo ___ ___. (dobra córka)",
            "accepted": [
              "dobrą córką"
            ]
          },
          {
            "id": "q2",
            "prompt": "Angela jest ___ ___. (wysoka kobieta)",
            "accepted": [
              "wysoką kobietą"
            ]
          },
          {
            "id": "q3",
            "prompt": "Uwe jest ___ ___. (przystojny mężczyzna)",
            "accepted": [
              "przystojnym mężczyzną"
            ]
          },
          {
            "id": "q4",
            "prompt": "Michał jest ___ ___. (małe dziecko)",
            "accepted": [
              "małym dzieckiem"
            ]
          },
          {
            "id": "q5",
            "prompt": "Tomek jest ___ ___. (dobry tata)",
            "accepted": [
              "dobrym tatą"
            ]
          },
          {
            "id": "q6",
            "prompt": "Aneta jest ___ ___. (kreatywna nauczycielka)",
            "accepted": [
              "kreatywną nauczycielką"
            ]
          },
          {
            "id": "q7",
            "prompt": "Jonatan jest ___ ___. (inteligentny student)",
            "accepted": [
              "inteligentnym studentem"
            ]
          },
          {
            "id": "q8",
            "prompt": "Toyota Prius jest ___ ___. (drogie auto)",
            "accepted": [
              "drogim autem"
            ]
          },
          {
            "id": "q9",
            "prompt": "Tom jest ___ ___. (wysoki chłopak)",
            "accepted": [
              "wysokim chłopakiem"
            ]
          },
          {
            "id": "q10",
            "prompt": "Mami jest ___ ___. (szczupła dziewczyna)",
            "accepted": [
              "szczupłą dziewczyną"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l05-dialogue-cloze",
        "sourceExerciseId": "WB-L05-E14",
        "kind": "typed",
        "instruction": "Posłuchaj i uzupełnij dialog właściwymi słowami.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kim jesteś z ___?",
            "accepted": [
              "zawodu"
            ]
          },
          {
            "id": "q2",
            "prompt": "Nie ___? Co to znaczy?",
            "accepted": [
              "rozumiem"
            ]
          },
          {
            "id": "q3",
            "prompt": "Co to ___?",
            "accepted": [
              "znaczy"
            ]
          },
          {
            "id": "q4",
            "prompt": "Chcę ___ lekarzem.",
            "accepted": [
              "być"
            ]
          },
          {
            "id": "q5",
            "prompt": "___ się interesujesz?",
            "accepted": [
              "czym"
            ]
          },
          {
            "id": "q6",
            "prompt": "Interesuję się ___ naturalną.",
            "accepted": [
              "medycyną"
            ]
          },
          {
            "id": "q7",
            "prompt": "Co lubisz ___ w weekendy?",
            "accepted": [
              "robić"
            ]
          },
          {
            "id": "q8",
            "prompt": "Lubię ___ .",
            "accepted": [
              "spacerować"
            ]
          },
          {
            "id": "q9",
            "prompt": "Lubię ___ muzyki.",
            "accepted": [
              "słuchać"
            ]
          },
          {
            "id": "q10",
            "prompt": "Lubię ___ w tenisa.",
            "accepted": [
              "grać"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l05-questions",
        "sourceExerciseId": "WB-L05-E15",
        "kind": "typed",
        "instruction": "Dobierz zaimek pytający i zachowaj poprawny szyk zdania.",
        "items": [
          {
            "id": "q1",
            "prompt": "___ to jest? Peter.",
            "accepted": [
              "Kto"
            ]
          },
          {
            "id": "q2",
            "prompt": "___ on jest? Z Anglii.",
            "accepted": [
              "Skąd"
            ]
          },
          {
            "id": "q3",
            "prompt": "___ ma lat? 20.",
            "accepted": [
              "Ile"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ się nazywa? Smith.",
            "accepted": [
              "Jak"
            ]
          },
          {
            "id": "q5",
            "prompt": "___ mieszka? W Londynie.",
            "accepted": [
              "Gdzie"
            ]
          },
          {
            "id": "q6",
            "prompt": "___ jest studentem? Zdolnym i inteligentnym.",
            "accepted": [
              "Jakim"
            ]
          },
          {
            "id": "q7",
            "prompt": "___ on jest? Wysoki.",
            "accepted": [
              "Jaki"
            ]
          },
          {
            "id": "q8",
            "prompt": "___ on jest? Architektem.",
            "accepted": [
              "Kim"
            ]
          },
          {
            "id": "q9",
            "prompt": "___ w Krakowie? Uczy się polskiego.",
            "accepted": [
              "Co robi"
            ]
          },
          {
            "id": "q10",
            "prompt": "___? Bardzo lubi słuchać muzyki.",
            "accepted": [
              "Co lubi robić"
            ]
          },
          {
            "id": "q11",
            "prompt": "___ się interesuje? Architekturą.",
            "accepted": [
              "Czym"
            ]
          },
          {
            "id": "q12",
            "prompt": "___ uczy się polskiego? Bo chce pracować w Warszawie.",
            "accepted": [
              "Dlaczego"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l05-exercise-2",
        "sourceExerciseId": "WB-L05-E02",
        "kind": "typed",
        "instruction": "Ułóż pytania do tekstu o Mami.",
        "items": [
          {
            "id": "q1",
            "prompt": "Odpowiedź: Mami Takada.",
            "accepted": [
              "Kto to jest?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Odpowiedź: Z Japonii.",
            "accepted": [
              "Skąd ona jest?"
            ]
          },
          {
            "id": "q3",
            "prompt": "Odpowiedź: W Tokio.",
            "accepted": [
              "Gdzie ona mieszka?"
            ]
          },
          {
            "id": "q4",
            "prompt": "Odpowiedź: Młoda, szczupła i ładna.",
            "accepted": [
              "Jaka ona jest?"
            ]
          },
          {
            "id": "q5",
            "prompt": "Odpowiedź: 20 lat.",
            "accepted": [
              "Ile ona ma lat?"
            ]
          },
          {
            "id": "q6",
            "prompt": "Odpowiedź: Tak, jest szczupła.",
            "accepted": [
              "Czy ona jest szczupła?"
            ]
          },
          {
            "id": "q7",
            "prompt": "Odpowiedź: Słuchać muzyki.",
            "accepted": [
              "Co ona lubi robić?"
            ]
          },
          {
            "id": "q8",
            "prompt": "Odpowiedź: Bo chce studiować w Polsce.",
            "accepted": [
              "Dlaczego ona uczy się polskiego?"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l05-exercise-3",
        "sourceExerciseId": "WB-L05-E03",
        "kind": "typed",
        "instruction": "Wpisz formy w pierwszej osobie liczby pojedynczej.",
        "items": [
          {
            "id": "q1",
            "prompt": "(nazywać się)",
            "accepted": [
              "Nazywam się"
            ]
          },
          {
            "id": "q2",
            "prompt": "(być)",
            "accepted": [
              "jestem"
            ]
          },
          {
            "id": "q3",
            "prompt": "(mieszkać)",
            "accepted": [
              "mieszkam"
            ]
          },
          {
            "id": "q4",
            "prompt": "Teraz (być)",
            "accepted": [
              "jestem"
            ]
          },
          {
            "id": "q5",
            "prompt": "(uczyć się)",
            "accepted": [
              "uczę się"
            ]
          },
          {
            "id": "q6",
            "prompt": "żeby (studiować)",
            "accepted": [
              "studiować"
            ]
          },
          {
            "id": "q7",
            "prompt": "(mieć)",
            "accepted": [
              "mam"
            ]
          },
          {
            "id": "q8",
            "prompt": "(być)",
            "accepted": [
              "jestem"
            ]
          },
          {
            "id": "q9",
            "prompt": "(lubić)",
            "accepted": [
              "lubię"
            ]
          },
          {
            "id": "q10",
            "prompt": "(grać)",
            "accepted": [
              "gram"
            ]
          },
          {
            "id": "q11",
            "prompt": "(biegać)",
            "accepted": [
              "biegam"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l05-numeral-endings",
        "sourceExerciseId": "WB-L05-E06",
        "kind": "choice",
        "instruction": "Wybierz pasującą końcówkę liczebnika.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. pięć-",
            "accepted": [
              "c. -dziesiąt"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. pięt-",
            "accepted": [
              "a. -naście"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. sześć-",
            "accepted": [
              "c. -dziesiąt"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. szes-",
            "accepted": [
              "a. -naście"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. czter-",
            "accepted": [
              "a. -naście",
              "b. -dzieści"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          },
          {
            "id": "q6",
            "prompt": "6. dziewięt-",
            "accepted": [
              "a. -naście"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          },
          {
            "id": "q7",
            "prompt": "7. dziewięć-",
            "accepted": [
              "c. -dziesiąt"
            ],
            "options": [
              "a. -naście",
              "b. -dzieści",
              "c. -dziesiąt"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l05-exercise-7",
        "sourceExerciseId": "WB-L05-E07",
        "kind": "typed",
        "instruction": "Wpisz, czy liczba łączy się z „rok”, „lata” czy „lat”.",
        "items": [
          {
            "id": "q1",
            "prompt": "1",
            "accepted": [
              "rok"
            ]
          },
          {
            "id": "q2",
            "prompt": "7",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q3",
            "prompt": "8",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q4",
            "prompt": "13",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q5",
            "prompt": "42",
            "accepted": [
              "lata"
            ]
          },
          {
            "id": "q6",
            "prompt": "51",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q7",
            "prompt": "64",
            "accepted": [
              "lata"
            ]
          },
          {
            "id": "q8",
            "prompt": "22",
            "accepted": [
              "lata"
            ]
          },
          {
            "id": "q9",
            "prompt": "40",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q10",
            "prompt": "14",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q11",
            "prompt": "104",
            "accepted": [
              "lata"
            ]
          },
          {
            "id": "q12",
            "prompt": "101",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q13",
            "prompt": "17",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q14",
            "prompt": "12",
            "accepted": [
              "lat"
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "l05-exercise-9",
        "sourceExerciseId": "WB-L05-E09",
        "kind": "typed",
        "instruction": "Uzupełnij zdania nazwą zawodu.",
        "items": [
          {
            "id": "q1",
            "prompt": "Angela Merkel to znany niemiecki ___.",
            "accepted": [
              "polityk"
            ]
          },
          {
            "id": "q2",
            "prompt": "Cézanne to świetny francuski ___.",
            "accepted": [
              "malarz"
            ]
          },
          {
            "id": "q3",
            "prompt": "Oprah Winfrey to popularna ___ telewizyjna.",
            "accepted": [
              "dziennikarka"
            ]
          },
          {
            "id": "q4",
            "prompt": "Thomas Mann to doskonały niemiecki ___.",
            "accepted": [
              "pisarz"
            ]
          },
          {
            "id": "q5",
            "prompt": "Sylwia uczy polskiego — jest dobrą ___.",
            "accepted": [
              "nauczycielką"
            ]
          },
          {
            "id": "q6",
            "prompt": "Claudia Schiffer to atrakcyjna ___.",
            "accepted": [
              "modelka"
            ]
          },
          {
            "id": "q7",
            "prompt": "Nigel Kennedy świetnie gra na skrzypcach — jest ___.",
            "accepted": [
              "muzykiem"
            ]
          },
          {
            "id": "q8",
            "prompt": "Meryl Streep to doskonała ___ filmowa.",
            "accepted": [
              "aktorka"
            ]
          },
          {
            "id": "q9",
            "prompt": "David Doubilet publikuje fotografie — jest ___.",
            "accepted": [
              "fotografem"
            ]
          },
          {
            "id": "q10",
            "prompt": "Shelley to angielski ___ romantyczny.",
            "accepted": [
              "poeta"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "l05-exercise-10",
        "sourceExerciseId": "WB-L05-E10",
        "kind": "typed",
        "instruction": "Wybierz właściwą formę narzędnika.",
        "items": [
          {
            "id": "q1",
            "prompt": "Paweł jest ___ tatą. (dobry)",
            "accepted": [
              "dobrym"
            ]
          },
          {
            "id": "q2",
            "prompt": "Magda jest ___ architektem. (zdolny)",
            "accepted": [
              "zdolnym"
            ]
          },
          {
            "id": "q3",
            "prompt": "Łucja jest ___ dzieckiem. (zdrowa)",
            "accepted": [
              "zdrowym"
            ]
          },
          {
            "id": "q4",
            "prompt": "Schumacher jest ___ kierowcą. (świetny)",
            "accepted": [
              "świetnym"
            ]
          },
          {
            "id": "q5",
            "prompt": "Miłosz jest ___ poetą. (polski)",
            "accepted": [
              "polskim"
            ]
          },
          {
            "id": "q6",
            "prompt": "Maria jest ___ fotografem. (utalentowana)",
            "accepted": [
              "utalentowanym"
            ]
          },
          {
            "id": "q7",
            "prompt": "Javier jest ___ artystą. (spontaniczny)",
            "accepted": [
              "spontanicznym"
            ]
          },
          {
            "id": "q8",
            "prompt": "Ewa jest ___ inżynierem. (dobry)",
            "accepted": [
              "dobrym"
            ]
          }
        ]
      },
      {
        "index": 13,
        "id": "l05-exercise-12",
        "sourceExerciseId": "WB-L05-E12",
        "kind": "typed",
        "instruction": "Ułóż wypowiedź każdej osoby.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. sport, historia, współczesny teatr",
            "accepted": [
              "Interesuję się sportem, historią, współczesnym teatrem."
            ]
          },
          {
            "id": "q2",
            "prompt": "2. fotografia, moda, hiszpański film",
            "accepted": [
              "Interesuję się fotografią, modą, hiszpańskim filmem."
            ]
          },
          {
            "id": "q3",
            "prompt": "3. polityka, polskie kino",
            "accepted": [
              "Interesuję się polityką, polskim kinem."
            ]
          },
          {
            "id": "q4",
            "prompt": "4. ekonomia, polski folklor",
            "accepted": [
              "Interesuję się ekonomią, polskim folklorem."
            ]
          },
          {
            "id": "q5",
            "prompt": "5. psychologia, muzyka klasyczna",
            "accepted": [
              "Interesuję się psychologią, muzyką klasyczną."
            ]
          }
        ]
      },
      {
        "index": 14,
        "id": "l05-exercise-13",
        "sourceExerciseId": "WB-L05-E13",
        "kind": "typed",
        "instruction": "Wpisz odpowiednią formę wyrazu.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ona ma 11 ___ (lat).",
            "accepted": [
              "lat"
            ]
          },
          {
            "id": "q2",
            "prompt": "Jest ___ (Polka).",
            "accepted": [
              "Polką"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mieszka ___ (Kraków).",
            "accepted": [
              "w Krakowie"
            ]
          },
          {
            "id": "q4",
            "prompt": "Jest ___ (≠ gruby).",
            "accepted": [
              "szczupła"
            ]
          },
          {
            "id": "q5",
            "prompt": "Jest ___ (wysportowana).",
            "accepted": [
              "wysportowana"
            ]
          },
          {
            "id": "q6",
            "prompt": "Jest ___ (wesoła).",
            "accepted": [
              "wesoła"
            ]
          },
          {
            "id": "q7",
            "prompt": "Jest ___ (sympatyczna dziewczyna).",
            "accepted": [
              "sympatyczną dziewczyną"
            ]
          },
          {
            "id": "q8",
            "prompt": "Dobrze ___ po angielsku.",
            "accepted": [
              "mówi"
            ]
          },
          {
            "id": "q9",
            "prompt": "Trochę po ___.",
            "accepted": [
              "hiszpańsku"
            ]
          },
          {
            "id": "q10",
            "prompt": "Julia ___ śpiewać.",
            "accepted": [
              "lubi"
            ]
          },
          {
            "id": "q11",
            "prompt": "Lubi ___ książki.",
            "accepted": [
              "czytać"
            ]
          },
          {
            "id": "q12",
            "prompt": "Interesuje się ___ (muzyka).",
            "accepted": [
              "muzyką"
            ]
          },
          {
            "id": "q13",
            "prompt": "Interesuje się ___ (sport).",
            "accepted": [
              "sportem"
            ]
          }
        ]
      },
      {
        "index": 15,
        "id": "l05-question-answer-match",
        "sourceExerciseId": "WB-L05-E16",
        "kind": "match",
        "instruction": "Połącz każde pytanie z pasującą odpowiedzią.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Co lubisz robić?",
            "accepted": [
              "e. Grać w tenisa."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Gdzie mieszkasz?",
            "accepted": [
              "f. W Gdańsku."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Ile masz lat?",
            "accepted": [
              "a. Prawie 18."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q4",
            "prompt": "4. Kim on jest?",
            "accepted": [
              "g. Policjantem."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q5",
            "prompt": "5. Dlaczego jesteś zdenerwowany?",
            "accepted": [
              "b. Bo mam egzamin."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q6",
            "prompt": "6. Jaką sekretarką jest Agnieszka?",
            "accepted": [
              "h. Bardzo profesjonalną."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q7",
            "prompt": "7. Skąd jest Ewa?",
            "accepted": [
              "i. Z Gdańska."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q8",
            "prompt": "8. Co robisz?",
            "accepted": [
              "d. Gram w tenisa."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q9",
            "prompt": "9. Jakim studentem jest Jonatan?",
            "accepted": [
              "j. Pracowitym."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          },
          {
            "id": "q10",
            "prompt": "10. Jaka jest Dorota?",
            "accepted": [
              "c. Bardzo sympatyczna."
            ],
            "options": [
              "a. Prawie 18.",
              "b. Bo mam egzamin.",
              "c. Bardzo sympatyczna.",
              "d. Gram w tenisa.",
              "e. Grać w tenisa.",
              "f. W Gdańsku.",
              "g. Policjantem.",
              "h. Bardzo profesjonalną.",
              "i. Z Gdańska.",
              "j. Pracowitym."
            ]
          }
        ]
      },
      {
        "index": 16,
        "id": "l05-exercise-17",
        "sourceExerciseId": "WB-L05-E17",
        "kind": "typed",
        "instruction": "Dla każdej osoby wpisz formy: ona jest, ona jest (narzędnik), on jest, on jest (narzędnik), mówią po, znają.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Anglia · Angela i Jonatan",
            "accepted": [
              "Angielka; Angielką; Anglik; Anglikiem; po angielsku; angielski"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Niemcy · Petra i Uwe",
            "accepted": [
              "Niemka; Niemką; Niemiec; Niemcem; po niemiecku; niemiecki"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Francja · Adèle i Pierre",
            "accepted": [
              "Francuzka; Francuzką; Francuz; Francuzem; po francusku; francuski"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. Hiszpania · Manuela i Pedro",
            "accepted": [
              "Hiszpanka; Hiszpanką; Hiszpan; Hiszpanem; po hiszpańsku; hiszpański"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. Włochy · Maria i Paolo",
            "accepted": [
              "Włoszka; Włoszką; Włoch; Włochem; po włosku; włoski"
            ]
          },
          {
            "id": "q6",
            "prompt": "6. Portugalia · Inês i Luis",
            "accepted": [
              "Portugalka; Portugalką; Portugalczyk; Portugalczykiem; po portugalsku; portugalski"
            ]
          },
          {
            "id": "q7",
            "prompt": "7. USA · Wendy i Tom",
            "accepted": [
              "Amerykanka; Amerykanką; Amerykanin; Amerykaninem; po angielsku; angielski"
            ]
          },
          {
            "id": "q8",
            "prompt": "8. Japonia · Ajako i Satoshi",
            "accepted": [
              "Japonka; Japonką; Japończyk; Japończykiem; po japońsku; japoński"
            ]
          }
        ]
      }
    ]
  },
  "6": {
    "id": 6,
    "title": "Co robisz? Nudzę się!",
    "activities": [
      {
        "index": 0,
        "id": "l06-group",
        "sourceExerciseId": "WB-L06-E04",
        "kind": "choice",
        "instruction": "Proszę pogrupować rzeczowniki.",
        "items": [
          {
            "id": "q1",
            "prompt": "segregator",
            "accepted": [
              "mój, twój"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q2",
            "prompt": "liceum",
            "accepted": [
              "moje, twoje"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q3",
            "prompt": "nauczycielka",
            "accepted": [
              "moja, twoja"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q4",
            "prompt": "herbata",
            "accepted": [
              "moja, twoja"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q5",
            "prompt": "student",
            "accepted": [
              "mój, twój"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q6",
            "prompt": "miasto",
            "accepted": [
              "moje, twoje"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q7",
            "prompt": "program",
            "accepted": [
              "mój, twój"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q8",
            "prompt": "woda",
            "accepted": [
              "moja, twoja"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q9",
            "prompt": "komputer",
            "accepted": [
              "mój, twój"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q10",
            "prompt": "kino",
            "accepted": [
              "moje, twoje"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q11",
            "prompt": "film",
            "accepted": [
              "mój, twój"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q12",
            "prompt": "studentka",
            "accepted": [
              "moja, twoja"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q13",
            "prompt": "ołówek",
            "accepted": [
              "mój, twój"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          },
          {
            "id": "q14",
            "prompt": "książka",
            "accepted": [
              "moja, twoja"
            ],
            "options": [
              "mój, twój",
              "moja, twoja",
              "moje, twoje"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l06-odd-one",
        "sourceExerciseId": "WB-L06-E05",
        "kind": "choice",
        "instruction": "Wybierz formę, która nie pasuje do pozostałych (inna osoba).",
        "items": [
          {
            "id": "q1",
            "prompt": "chodzę, czytam, piszesz",
            "accepted": [
              "piszesz"
            ],
            "options": [
              "chodzę",
              "czytam",
              "piszesz"
            ]
          },
          {
            "id": "q2",
            "prompt": "robimy, lubisz, czytamy",
            "accepted": [
              "lubisz"
            ],
            "options": [
              "robimy",
              "lubisz",
              "czytamy"
            ]
          },
          {
            "id": "q3",
            "prompt": "pracujecie, macie, chcemy",
            "accepted": [
              "chcemy"
            ],
            "options": [
              "pracujecie",
              "macie",
              "chcemy"
            ]
          },
          {
            "id": "q4",
            "prompt": "grają, umieją, jeździ",
            "accepted": [
              "jeździ"
            ],
            "options": [
              "grają",
              "umieją",
              "jeździ"
            ]
          },
          {
            "id": "q5",
            "prompt": "powtarzasz, szukają, śpiewasz",
            "accepted": [
              "szukają"
            ],
            "options": [
              "powtarzasz",
              "szukają",
              "śpiewasz"
            ]
          },
          {
            "id": "q6",
            "prompt": "jesteście, kupujemy, nudzicie się",
            "accepted": [
              "kupujemy"
            ],
            "options": [
              "jesteście",
              "kupujemy",
              "nudzicie się"
            ]
          },
          {
            "id": "q7",
            "prompt": "piszą, kochają, kochacie",
            "accepted": [
              "kochacie"
            ],
            "options": [
              "piszą",
              "kochają",
              "kochacie"
            ]
          },
          {
            "id": "q8",
            "prompt": "grasz, mieszka, jest",
            "accepted": [
              "grasz"
            ],
            "options": [
              "grasz",
              "mieszka",
              "jest"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l06-correct",
        "sourceExerciseId": "WB-L06-E06",
        "kind": "typed",
        "instruction": "Zdania zawierają błąd. Napisz je poprawnie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Lubić czytasz książki?",
            "accepted": [
              "Lubisz czytać książki?"
            ]
          },
          {
            "id": "q2",
            "prompt": "On gra w saksofonie.",
            "accepted": [
              "On gra na saksofonie."
            ]
          },
          {
            "id": "q3",
            "prompt": "My gracie w tenisa.",
            "accepted": [
              "My gramy w tenisa."
            ]
          },
          {
            "id": "q4",
            "prompt": "Czy ty umieć gotować?",
            "accepted": [
              "Czy ty umiesz gotować?"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ona gotuję pierogi.",
            "accepted": [
              "Ona gotuje pierogi."
            ]
          },
          {
            "id": "q6",
            "prompt": "Tom gra na koszykówkę.",
            "accepted": [
              "Tom gra w koszykówkę."
            ]
          },
          {
            "id": "q7",
            "prompt": "Oni lubią jeżdżą konno.",
            "accepted": [
              "Oni lubią jeździć konno."
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l06-verbs",
        "sourceExerciseId": "WB-L06-E07",
        "kind": "typed",
        "instruction": "Wpisz czasownik w odpowiedniej formie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Co robicie? (my) ___ (słuchać) muzyki.",
            "accepted": [
              "Słuchamy"
            ]
          },
          {
            "id": "q2",
            "prompt": "Na wakacjach (ja) ___ (czytać) książki i gazety.",
            "accepted": [
              "czytam"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mami i Angela nie ___ (grać) na saksofonie.",
            "accepted": [
              "grają"
            ]
          },
          {
            "id": "q4",
            "prompt": "Javier bardzo dobrze ___ (tańczyć).",
            "accepted": [
              "tańczy"
            ]
          },
          {
            "id": "q5",
            "prompt": "Gdzie (ty) ___ (chodzić) na spacery w Krakowie?",
            "accepted": [
              "chodzisz"
            ]
          },
          {
            "id": "q6",
            "prompt": "Co robi Julia? ___ (pisać) pracę domową.",
            "accepted": [
              "Pisze"
            ]
          },
          {
            "id": "q7",
            "prompt": "Dzisiaj na obiad (ja) ___ (gotować) zupę pomidorową.",
            "accepted": [
              "gotuję"
            ]
          },
          {
            "id": "q8",
            "prompt": "Oni ___ (studiować) w Krakowie.",
            "accepted": [
              "studiują"
            ]
          },
          {
            "id": "q9",
            "prompt": "Czy dużo (wy) ___ (podróżować) po Polsce?",
            "accepted": [
              "podróżujecie"
            ]
          },
          {
            "id": "q10",
            "prompt": "(my) ___ (kontaktować się) przez Internet.",
            "accepted": [
              "Kontaktujemy się"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l06-rollerblades",
        "sourceExerciseId": "WB-L06-E08",
        "kind": "typed",
        "instruction": "Uzupełnij dialog Uwe i Angeli czasownikami we właściwej formie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Angela: ___ (czekać) na Mami.",
            "accepted": [
              "czekam"
            ]
          },
          {
            "id": "q2",
            "prompt": "Angela: ___ (my / planować) dziś razem jeździć na rolkach.",
            "accepted": [
              "planujemy"
            ]
          },
          {
            "id": "q3",
            "prompt": "Uwe: ___ (ty / umieć) jeździć na rolkach?",
            "accepted": [
              "umiesz"
            ]
          },
          {
            "id": "q4",
            "prompt": "Uwe: Ja, niestety, nie ___ (umieć).",
            "accepted": [
              "umiem"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l06-javier",
        "sourceExerciseId": "WB-L06-E09",
        "kind": "typed",
        "instruction": "Uzupełnij dialog czasownikami we właściwej formie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Tom: To Javier. On ___ (umieć) świetnie ... (tańczyć).",
            "accepted": [
              "umie"
            ]
          },
          {
            "id": "q2",
            "prompt": "Tom: On ... (umieć) świetnie ___ (tańczyć).",
            "accepted": [
              "tańczyć"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mami: ___ (myśleć), że Javier jest bardzo utalentowany.",
            "accepted": [
              "Myślę"
            ]
          },
          {
            "id": "q4",
            "prompt": "Mami: ..., że Javier ___ (być) bardzo utalentowany.",
            "accepted": [
              "jest"
            ]
          },
          {
            "id": "q5",
            "prompt": "Mami: Tak. Javier ___ (tańczyć), ładnie ...",
            "accepted": [
              "tańczy"
            ]
          },
          {
            "id": "q6",
            "prompt": "Mami: ... ładnie ___ (śpiewać), ...",
            "accepted": [
              "śpiewa"
            ]
          },
          {
            "id": "q7",
            "prompt": "Mami: ... ___ (grać) też na gitarze i na pianinie.",
            "accepted": [
              "gra"
            ]
          },
          {
            "id": "q8",
            "prompt": "Tom: Ja też dobrze ___ (tańczyć), ...",
            "accepted": [
              "tańczę"
            ]
          },
          {
            "id": "q9",
            "prompt": "Tom: ... ___ (grać) na pianinie i na skrzypcach.",
            "accepted": [
              "gram"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l06-activities",
        "sourceExerciseId": "WB-L06-E10",
        "kind": "typed",
        "instruction": "Podpisz rysunki 2–19 czasownikiem lub zwrotem (np. robić zdjęcia).",
        "items": [
          {
            "id": "q1",
            "prompt": "Rysunek 2)",
            "accepted": [
              "jeździć konno"
            ]
          },
          {
            "id": "q2",
            "prompt": "Rysunek 3)",
            "accepted": [
              "robić zakupy"
            ]
          },
          {
            "id": "q3",
            "prompt": "Rysunek 4)",
            "accepted": [
              "śpiewać"
            ]
          },
          {
            "id": "q4",
            "prompt": "Rysunek 5)",
            "accepted": [
              "chodzić na spacery"
            ]
          },
          {
            "id": "q5",
            "prompt": "Rysunek 6)",
            "accepted": [
              "grać w piłkę"
            ]
          },
          {
            "id": "q6",
            "prompt": "Rysunek 7)",
            "accepted": [
              "podróżować"
            ]
          },
          {
            "id": "q7",
            "prompt": "Rysunek 8)",
            "accepted": [
              "gotować"
            ]
          },
          {
            "id": "q8",
            "prompt": "Rysunek 9)",
            "accepted": [
              "pływać"
            ]
          },
          {
            "id": "q9",
            "prompt": "Rysunek 10)",
            "accepted": [
              "uczyć się języków obcych"
            ]
          },
          {
            "id": "q10",
            "prompt": "Rysunek 11)",
            "accepted": [
              "czytać książki"
            ]
          },
          {
            "id": "q11",
            "prompt": "Rysunek 12)",
            "accepted": [
              "słuchać muzyki"
            ]
          },
          {
            "id": "q12",
            "prompt": "Rysunek 13)",
            "accepted": [
              "tańczyć"
            ]
          },
          {
            "id": "q13",
            "prompt": "Rysunek 14)",
            "accepted": [
              "biegać"
            ]
          },
          {
            "id": "q14",
            "prompt": "Rysunek 15)",
            "accepted": [
              "grać na gitarze"
            ]
          },
          {
            "id": "q15",
            "prompt": "Rysunek 16)",
            "accepted": [
              "grać w tenisa"
            ]
          },
          {
            "id": "q16",
            "prompt": "Rysunek 17)",
            "accepted": [
              "jeździć na nartach"
            ]
          },
          {
            "id": "q17",
            "prompt": "Rysunek 18)",
            "accepted": [
              "oglądać telewizję"
            ]
          },
          {
            "id": "q18",
            "prompt": "Rysunek 19)",
            "accepted": [
              "malować"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l06-exercise-1",
        "sourceExerciseId": "WB-L06-E01",
        "kind": "typed",
        "instruction": "Wpisz numer ilustracji pasującej do każdego dialogu.",
        "items": [
          {
            "id": "q1",
            "prompt": "Dialog a",
            "accepted": [
              "2"
            ]
          },
          {
            "id": "q2",
            "prompt": "Dialog b",
            "accepted": [
              "3"
            ]
          },
          {
            "id": "q3",
            "prompt": "Dialog c",
            "accepted": [
              "1"
            ]
          },
          {
            "id": "q4",
            "prompt": "Dialog d",
            "accepted": [
              "4"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l06-exercise-2",
        "sourceExerciseId": "WB-L06-E02",
        "kind": "typed",
        "instruction": "Uzupełnij cztery krótkie rozmowy słowami z nagrania.",
        "items": [
          {
            "id": "q1",
            "prompt": "Dialog A · telefon do ambasady; paszport",
            "accepted": [
              "do; mój; nieaktualny; problem"
            ]
          },
          {
            "id": "q2",
            "prompt": "Dialog B · zakupy w galerii; spacer w parku",
            "accepted": [
              "gdzie; zakupy; po; małe; brudne"
            ]
          },
          {
            "id": "q3",
            "prompt": "Dialog C · jestem w parku; nie biegam; gram w koszykówkę",
            "accepted": [
              "w; nie; gram; chcę; oczywiście"
            ]
          },
          {
            "id": "q4",
            "prompt": "Dialog D · film i malowanie pejzażu",
            "accepted": [
              "fajny; jaki; komedia; wesoła; malujesz; zmęczona"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l06-exercise-3",
        "sourceExerciseId": "WB-L06-E03",
        "kind": "typed",
        "instruction": "Wpisz czynności wykonywane przez każdą osobę.",
        "items": [
          {
            "id": "q1",
            "prompt": "Pan Maj",
            "accepted": [
              "słucha muzyki; czyta"
            ]
          },
          {
            "id": "q2",
            "prompt": "Karol",
            "accepted": [
              "gra w szachy"
            ]
          },
          {
            "id": "q3",
            "prompt": "Tom",
            "accepted": [
              "robi spaghetti; gotuje makaron"
            ]
          },
          {
            "id": "q4",
            "prompt": "Jonatan",
            "accepted": [
              "biega; pływa; jeździ na rowerze"
            ]
          },
          {
            "id": "q5",
            "prompt": "Marisa",
            "accepted": [
              "jeździ konno"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l06-exercise-11",
        "sourceExerciseId": "WB-L06-E11",
        "kind": "typed",
        "instruction": "Uzupełnij każdą rozmowę krótką odpowiedzią.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Angela pyta, co robisz.",
            "accepted": [
              "Cześć, czekam teraz na Mami, a potem chcemy jeździć na rolkach."
            ]
          },
          {
            "id": "q2",
            "prompt": "2. Tom pyta o koszykówkę.",
            "accepted": [
              "Super! Idziemy, spotykamy się w parku?"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. Ktoś pyta, gdzie jesteś.",
            "accepted": [
              "W parku, siedzę i czytam."
            ]
          },
          {
            "id": "q4",
            "prompt": "4. Ktoś pyta, co dziś robimy.",
            "accepted": [
              "Tak, mamy czas. Co proponujesz?"
            ]
          }
        ]
      }
    ]
  },
  "10": {
    "id": 10,
    "title": "Uwielbiam polskie jedzenie!",
    "activities": [
      {
        "index": 0,
        "id": "l10-menu-groups",
        "sourceExerciseId": "WB-L10-E02",
        "kind": "typed",
        "instruction": "Uzupełnij nazwę grupy dań lub produktów.",
        "items": [
          {
            "id": "q1",
            "prompt": "pierogi ruskie, risotto, kapusta z grzybami to dania ___",
            "accepted": [
              "wegetariańskie"
            ]
          },
          {
            "id": "q2",
            "prompt": "kawa mrożona, grzane wino, sok porzeczkowy to ___",
            "accepted": [
              "napoje"
            ]
          },
          {
            "id": "q3",
            "prompt": "gołąbki, bigos, żeberka to dania ___",
            "accepted": [
              "mięsne"
            ]
          },
          {
            "id": "q4",
            "prompt": "kasza, surówka z pora, ziemniaki z wody to ___",
            "accepted": [
              "dodatki"
            ]
          },
          {
            "id": "q5",
            "prompt": "mięso z krowy to ___",
            "accepted": [
              "wołowina"
            ]
          },
          {
            "id": "q6",
            "prompt": "barszcz biały, krem brokułowy, fasolowa to ___",
            "accepted": [
              "zupy"
            ]
          },
          {
            "id": "q7",
            "prompt": "śledź w majonezie, filet z pstrąga, pieczony dorsz to dania ___",
            "accepted": [
              "rybne"
            ]
          },
          {
            "id": "q8",
            "prompt": "kura, kaczka, indyk to ___",
            "accepted": [
              "drób"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l10-drinks-desserts",
        "sourceExerciseId": "WB-L10-E10",
        "kind": "choice",
        "instruction": "Przypisz każdą pozycję z karty do właściwej grupy.",
        "items": [
          {
            "id": "q1",
            "prompt": "cappuccino",
            "accepted": [
              "napoje gorące"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q2",
            "prompt": "lody truskawkowe",
            "accepted": [
              "desery"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q3",
            "prompt": "tort orzechowy",
            "accepted": [
              "ciasta i ciastka"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q4",
            "prompt": "szarlotka",
            "accepted": [
              "ciasta i ciastka"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q5",
            "prompt": "kawa mrożona",
            "accepted": [
              "napoje zimne"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q6",
            "prompt": "galaretka z bitą śmietaną",
            "accepted": [
              "desery"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q7",
            "prompt": "herbata z rumem",
            "accepted": [
              "napoje gorące"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q8",
            "prompt": "… jagodowy",
            "accepted": [
              "koktajle owocowe"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q9",
            "prompt": "sernik",
            "accepted": [
              "ciasta i ciastka"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q10",
            "prompt": "gorąca czekolada",
            "accepted": [
              "napoje gorące"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          },
          {
            "id": "q11",
            "prompt": "sok ze świeżych pomarańczy",
            "accepted": [
              "napoje zimne"
            ],
            "options": [
              "napoje gorące",
              "napoje zimne",
              "desery",
              "ciasta i ciastka",
              "koktajle owocowe"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l10-negation",
        "sourceExerciseId": "WB-L10-E06",
        "kind": "typed",
        "instruction": "Zapisz zdanie przeczące. Pamiętaj o dopełniaczu.",
        "items": [
          {
            "id": "q2",
            "prompt": "Chcę duże piwo. → Nie chcę ___ .",
            "accepted": [
              "dużego piwa"
            ]
          },
          {
            "id": "q3",
            "prompt": "Lubię gorzką czekoladę. → Nie lubię ___ .",
            "accepted": [
              "gorzkiej czekolady"
            ]
          },
          {
            "id": "q4",
            "prompt": "Lubię chłodny kompot. → Nie lubię ___ .",
            "accepted": [
              "chłodnego kompotu"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zamawiam ciasto owocowe. → Nie zamawiam ___ .",
            "accepted": [
              "ciasta owocowego"
            ]
          },
          {
            "id": "q6",
            "prompt": "Mam dobrą kanapkę. → Nie mam ___ .",
            "accepted": [
              "dobrej kanapki"
            ]
          },
          {
            "id": "q7",
            "prompt": "Uwe pije zimny sok. → Uwe nie pije ___ .",
            "accepted": [
              "zimnego soku"
            ]
          },
          {
            "id": "q8",
            "prompt": "Ewa robi włoską pizzę. → Ewa nie robi ___ .",
            "accepted": [
              "włoskiej pizzy"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l10-good-form",
        "sourceExerciseId": "WB-L10-E07",
        "kind": "choice",
        "instruction": "Wybierz właściwą formę.",
        "items": [
          {
            "id": "q1",
            "prompt": "Uwe pije ___.",
            "accepted": [
              "sok pomarańczowy"
            ],
            "options": [
              "soku pomarańczowego",
              "sokiem pomarańczowym",
              "sok pomarańczowy"
            ]
          },
          {
            "id": "q2",
            "prompt": "Ewa lubi ___.",
            "accepted": [
              "zupę pomidorową"
            ],
            "options": [
              "zupą pomidorową",
              "zupę pomidorową",
              "zupy pomidorowej"
            ]
          },
          {
            "id": "q3",
            "prompt": "Masz ochotę na ___?",
            "accepted": [
              "zimne piwo"
            ],
            "options": [
              "zimnego piwa",
              "zimne piwo",
              "zimnym piwem"
            ]
          },
          {
            "id": "q4",
            "prompt": "Nie lubię ___.",
            "accepted": [
              "zimnej herbaty"
            ],
            "options": [
              "zimnej herbaty",
              "zimną herbatą",
              "zimną herbatę"
            ]
          },
          {
            "id": "q5",
            "prompt": "Sylwia nigdy nie je ___.",
            "accepted": [
              "mięsa"
            ],
            "options": [
              "mięso",
              "mięsa",
              "mięsem"
            ]
          },
          {
            "id": "q6",
            "prompt": "Dla mnie ___.",
            "accepted": [
              "kurczak"
            ],
            "options": [
              "kurczak",
              "kurczaka",
              "kurczakiem"
            ]
          },
          {
            "id": "q7",
            "prompt": "Nie piję ___.",
            "accepted": [
              "alkoholu"
            ],
            "options": [
              "alkohol",
              "alkoholu",
              "alkoholem"
            ]
          },
          {
            "id": "q8",
            "prompt": "Poproszę herbatę z ___.",
            "accepted": [
              "rumem"
            ],
            "options": [
              "rum",
              "rumu",
              "rumem"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l10-restaurant-cloze",
        "sourceExerciseId": "WB-L10-E11",
        "kind": "typed",
        "instruction": "Uzupełnij dialog słowami z ramki: raz, razy, wszystko, polecam, czy jest, podać, dla mnie, jeszcze.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kelner: Dzień dobry, co ___?",
            "accepted": [
              "podać"
            ]
          },
          {
            "id": "q2",
            "prompt": "Klientka: ___ biała kawa, a dla koleżanki herbata zielona.",
            "accepted": [
              "Dla mnie"
            ]
          },
          {
            "id": "q3",
            "prompt": "Kelner: Czy coś ___?",
            "accepted": [
              "jeszcze"
            ]
          },
          {
            "id": "q4",
            "prompt": "Klientka: Tak, ___ szarlotka z lodami?",
            "accepted": [
              "Czy jest"
            ]
          },
          {
            "id": "q5",
            "prompt": "Kelner: Niestety, nie mamy lodów. ___ pyszną szarlotkę z bitą śmietaną.",
            "accepted": [
              "Polecam"
            ]
          },
          {
            "id": "q6",
            "prompt": "Klientka: Dobrze. Poproszę więc ___ szarlotkę i dwa ___ koktajl truskawkowy. (pierwsza luka)",
            "accepted": [
              "raz"
            ]
          },
          {
            "id": "q7",
            "prompt": "Klientka: Dobrze. Poproszę więc raz szarlotkę i dwa ___ koktajl truskawkowy. (druga luka)",
            "accepted": [
              "razy"
            ]
          },
          {
            "id": "q8",
            "prompt": "Kelner: Czy to już ___?",
            "accepted": [
              "wszystko"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l10-pronouns-match",
        "sourceExerciseId": "WB-L10-E12",
        "kind": "choice",
        "instruction": "Dopasuj zaimek do formy z narzędnikiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "ja",
            "accepted": [
              "ze mną"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q2",
            "prompt": "ty",
            "accepted": [
              "z tobą"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q3",
            "prompt": "on",
            "accepted": [
              "z nim"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q4",
            "prompt": "ona",
            "accepted": [
              "z nią"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q5",
            "prompt": "ono",
            "accepted": [
              "z nim"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q6",
            "prompt": "my",
            "accepted": [
              "z nami"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q7",
            "prompt": "wy",
            "accepted": [
              "z wami"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q8",
            "prompt": "oni",
            "accepted": [
              "z nimi"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          },
          {
            "id": "q9",
            "prompt": "one",
            "accepted": [
              "z nimi"
            ],
            "options": [
              "z nami",
              "z nim",
              "z wami",
              "ze mną",
              "z nimi",
              "z tobą",
              "z nią"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l10-with-whom",
        "sourceExerciseId": "WB-L10-E13",
        "kind": "typed",
        "instruction": "Wpisz właściwą formę zaimka po „z”.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kasia lubi rozmawiać ze ___ (ja).",
            "accepted": [
              "mną"
            ]
          },
          {
            "id": "q2",
            "prompt": "Nie lubię się spotykać z ___ (one).",
            "accepted": [
              "nimi"
            ]
          },
          {
            "id": "q3",
            "prompt": "Czy chcesz jechać z ___ (on) do Wrocławia?",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q4",
            "prompt": "Pani Basia chce z ___ (ty) porozmawiać.",
            "accepted": [
              "tobą"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy Arek pracuje z ___ (wy) trzy lata?",
            "accepted": [
              "wami"
            ]
          },
          {
            "id": "q6",
            "prompt": "Kamil idzie z ___ (ona) do teatru.",
            "accepted": [
              "nią"
            ]
          },
          {
            "id": "q7",
            "prompt": "Marta chce się z ___ (oni) pożegnać.",
            "accepted": [
              "nimi"
            ]
          },
          {
            "id": "q8",
            "prompt": "Oni idą z ___ (my) do kawiarni.",
            "accepted": [
              "nami"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l10-exercise-1",
        "sourceExerciseId": "WB-L10-E01",
        "kind": "typed",
        "instruction": "Ułóż dialog z podanych informacji: sobota, godz. 19.00, dwie osoby, Tomasz Ostrowski.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kelnerka · powitanie i pytanie",
            "accepted": [
              "Dzień dobry, restauracja „Polskie jadło”, słucham?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Tomasz · prośba o rezerwację",
            "accepted": [
              "Chciałbym zarezerwować stolik dla dwóch osób."
            ]
          },
          {
            "id": "q3",
            "prompt": "Kelnerka · dzień i godzina",
            "accepted": [
              "Na kiedy?"
            ]
          },
          {
            "id": "q4",
            "prompt": "Tomasz · termin",
            "accepted": [
              "Na sobotę, na godzinę 19.00."
            ]
          },
          {
            "id": "q5",
            "prompt": "Kelnerka · nazwisko",
            "accepted": [
              "Na jakie nazwisko ma być rezerwacja?"
            ]
          },
          {
            "id": "q6",
            "prompt": "Tomasz · nazwisko",
            "accepted": [
              "Tomasz Ostrowski."
            ]
          },
          {
            "id": "q7",
            "prompt": "Kelnerka · potwierdzenie",
            "accepted": [
              "Rezerwacja jest gotowa. Zapraszamy w sobotę."
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l10-exercise-3",
        "sourceExerciseId": "WB-L10-E03",
        "kind": "typed",
        "instruction": "Wpisz wypowiedzi w poprawnej kolejności.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kelner · karta i napoje",
            "accepted": [
              "Proszę, tu jest karta. Czy podać coś do picia?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Marek · napój",
            "accepted": [
              "Dziękujemy. Ja poproszę piwo „Żywiec”."
            ]
          },
          {
            "id": "q3",
            "prompt": "Paweł · napój",
            "accepted": [
              "A dla mnie woda mineralna z lodem i cytryną."
            ]
          },
          {
            "id": "q4",
            "prompt": "Kelner · pytanie o wodę",
            "accepted": [
              "Gazowana czy niegazowana?"
            ]
          },
          {
            "id": "q5",
            "prompt": "Paweł",
            "accepted": [
              "Niegazowana."
            ]
          },
          {
            "id": "q6",
            "prompt": "Kelner · zamówienie",
            "accepted": [
              "Co panowie zamawiają?"
            ]
          },
          {
            "id": "q7",
            "prompt": "Marek · danie",
            "accepted": [
              "Proszę żeberka wieprzowe z pieczonymi ziemniakami i zestaw surówek."
            ]
          },
          {
            "id": "q8",
            "prompt": "Paweł · danie",
            "accepted": [
              "Dla mnie to samo, tylko z frytkami."
            ]
          },
          {
            "id": "q9",
            "prompt": "Kelner · po posiłku",
            "accepted": [
              "Czy smakował panom obiad?"
            ]
          },
          {
            "id": "q10",
            "prompt": "Kelner · dodatkowe zamówienie",
            "accepted": [
              "Czy podać panom coś jeszcze?"
            ]
          },
          {
            "id": "q11",
            "prompt": "Marek · rachunek",
            "accepted": [
              "Nie, dziękujemy. Możemy prosić rachunek?"
            ]
          },
          {
            "id": "q12",
            "prompt": "Kelner · rachunek i reszta",
            "accepted": [
              "Proszę bardzo. 92 złote."
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l10-exercise-4",
        "sourceExerciseId": "WB-L10-E04",
        "kind": "typed",
        "instruction": "Przyporządkuj zwroty do osoby, która ich używa.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czy płacą państwo razem czy osobno?",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q2",
            "prompt": "Co podać?",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q3",
            "prompt": "Polecam łososia z grilla.",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q4",
            "prompt": "Smacznego!",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy smakował pani/panu obiad?",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q6",
            "prompt": "Proszę, karta dla państwa.",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q7",
            "prompt": "Co dla pana/pani?",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q8",
            "prompt": "Czy podać coś do picia?",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q9",
            "prompt": "Mamy bardzo dobre lody z bakaliami.",
            "accepted": [
              "KELNER"
            ]
          },
          {
            "id": "q10",
            "prompt": "Dwa razy kawa ze śmietanką.",
            "accepted": [
              "KLIENT"
            ]
          },
          {
            "id": "q11",
            "prompt": "Chciałabym zarezerwować stolik.",
            "accepted": [
              "KLIENT"
            ]
          },
          {
            "id": "q12",
            "prompt": "Czy mogę prosić rachunek?",
            "accepted": [
              "KLIENT"
            ]
          },
          {
            "id": "q13",
            "prompt": "Dla mnie to samo.",
            "accepted": [
              "KLIENT"
            ]
          },
          {
            "id": "q14",
            "prompt": "Ile płacę?",
            "accepted": [
              "KLIENT"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l10-exercise-5",
        "sourceExerciseId": "WB-L10-E05",
        "kind": "typed",
        "instruction": "Uzupełnij krótkie dialogi o jedzeniu.",
        "items": [
          {
            "id": "q1",
            "prompt": "Piwo jest nie ___, lecz ciepłe.",
            "accepted": [
              "dobre"
            ]
          },
          {
            "id": "q2",
            "prompt": "Naleśniki ze szpinakiem są ___ .",
            "accepted": [
              "przepyszne"
            ]
          },
          {
            "id": "q3",
            "prompt": "Placki ziemniaczane smakują ___ .",
            "accepted": [
              "bardzo dobrze"
            ]
          },
          {
            "id": "q4",
            "prompt": "Pstrąg jest ___ .",
            "accepted": [
              "wyśmienity"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zupa grzybowa jest ___, bo nie lubię grzybów.",
            "accepted": [
              "niedobra"
            ]
          },
          {
            "id": "q6",
            "prompt": "Pączek jest taki sobie, niezbyt ___ .",
            "accepted": [
              "smaczny"
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "l10-exercise-8",
        "sourceExerciseId": "WB-L10-E08",
        "kind": "typed",
        "instruction": "Wpisz nazwę potrawy lub produktu z listy.",
        "items": [
          {
            "id": "q1",
            "prompt": "1",
            "accepted": [
              "barszcz"
            ]
          },
          {
            "id": "q2",
            "prompt": "2",
            "accepted": [
              "naleśniki"
            ]
          },
          {
            "id": "q3",
            "prompt": "3",
            "accepted": [
              "gołąbki"
            ]
          },
          {
            "id": "q4",
            "prompt": "4",
            "accepted": [
              "żeberka"
            ]
          },
          {
            "id": "q5",
            "prompt": "5",
            "accepted": [
              "makrela"
            ]
          },
          {
            "id": "q6",
            "prompt": "6",
            "accepted": [
              "filet"
            ]
          },
          {
            "id": "q7",
            "prompt": "7",
            "accepted": [
              "surówki"
            ]
          },
          {
            "id": "q8",
            "prompt": "8",
            "accepted": [
              "bigos"
            ]
          },
          {
            "id": "q9",
            "prompt": "9",
            "accepted": [
              "pierogi"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "l10-exercise-9",
        "sourceExerciseId": "WB-L10-E09",
        "kind": "typed",
        "instruction": "Zapisz, co każda osoba lubi lub czego nie lubi.",
        "items": [
          {
            "id": "q1",
            "prompt": "Mateusz · zupa ogórkowa",
            "accepted": [
              "uwielbia zupę ogórkową"
            ]
          },
          {
            "id": "q2",
            "prompt": "Mateusz · makaron",
            "accepted": [
              "lubi makaron"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mateusz · gotowany dorsz",
            "accepted": [
              "nie lubi gotowanego dorsza"
            ]
          },
          {
            "id": "q4",
            "prompt": "Mateusz · smażona wątróbka",
            "accepted": [
              "uwielbia smażoną wątróbkę"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ela i Piotr · zupa ogórkowa",
            "accepted": [
              "nie lubią zupy ogórkowej"
            ]
          },
          {
            "id": "q6",
            "prompt": "Ela i Piotr · makaron",
            "accepted": [
              "nie lubią makaronu"
            ]
          },
          {
            "id": "q7",
            "prompt": "Ela i Piotr · gotowany dorsz",
            "accepted": [
              "uwielbiają gotowanego dorsza"
            ]
          },
          {
            "id": "q8",
            "prompt": "Ela i Piotr · smażona wątróbka",
            "accepted": [
              "nie cierpią smażonej wątróbki"
            ]
          }
        ]
      }
    ]
  },
  "11": {
    "id": 11,
    "title": "Rodzina",
    "activities": [
      {
        "index": 0,
        "id": "l11-family-words",
        "sourceExerciseId": "WB-L11-E01",
        "kind": "typed",
        "instruction": "Proszę uzupełnić. Wpisz całe słowo.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kasia i Wojtek to brat i ___ (s…).",
            "accepted": [
              "siostra"
            ]
          },
          {
            "id": "q2",
            "prompt": "Kasia i Wojtek to ___ (d…s…o).",
            "accepted": [
              "rodzeństwo"
            ]
          },
          {
            "id": "q3",
            "prompt": "Dominik i Alina to ___ (_ą_) i żona.",
            "accepted": [
              "mąż"
            ]
          },
          {
            "id": "q4",
            "prompt": "Dominik i Alina to mąż i ___ (_o__).",
            "accepted": [
              "żona"
            ]
          },
          {
            "id": "q5",
            "prompt": "Dominik i Alina to ___ (m…o).",
            "accepted": [
              "małżeństwo"
            ]
          },
          {
            "id": "q6",
            "prompt": "Dominik i Alina to ___ (t…) i mama.",
            "accepted": [
              "tata"
            ]
          },
          {
            "id": "q7",
            "prompt": "Dominik i Alina to r___ (r…i…): tata i mama.",
            "accepted": [
              "rodzice"
            ]
          },
          {
            "id": "q8",
            "prompt": "Sabina i Wacław to babcia i ___ (d…).",
            "accepted": [
              "dziadek"
            ]
          },
          {
            "id": "q9",
            "prompt": "Sabina i Wacław to ___owie (d…owie).",
            "accepted": [
              "dziadkowie"
            ]
          },
          {
            "id": "q10",
            "prompt": "Sabina i Wacław, Dominik i Alina, Kasia i Wojtek to ___ (r…a).",
            "accepted": [
              "rodzina"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l11-lukasz-text",
        "sourceExerciseId": "WB-L11-E02",
        "kind": "choice",
        "instruction": "Uzupełnij tekst słowami z ramki.",
        "items": [
          {
            "id": "q1",
            "prompt": "Łukasz nie jest jeszcze ___, ma dziewczynę.",
            "accepted": [
              "żonaty"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q2",
            "prompt": "Jego mama mówi, że on woli być ___.",
            "accepted": [
              "kawalerem"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q3",
            "prompt": "Brat Łukasza, Andrzej, ma sympatyczną ___ Joannę.",
            "accepted": [
              "żonę"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q4",
            "prompt": "Łukasz lubi spędzać czas z ___ Andrzeja.",
            "accepted": [
              "rodziną"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czasami chodzi do kina z ___ na filmy dla dzieci.",
            "accepted": [
              "bratankiem"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q6",
            "prompt": "Zuzia lubi, kiedy ___ Łukasz ogląda z nią książki.",
            "accepted": [
              "wujek"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q7",
            "prompt": "Łukasz mówi, że jego mała ___ jest bardzo inteligentna.",
            "accepted": [
              "bratanica"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q8",
            "prompt": "Zuzia i Mateusz nie mają ___.",
            "accepted": [
              "cioci"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q9",
            "prompt": "Ich tata nie ma siostry, a mama jest ___.",
            "accepted": [
              "jedynaczką"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q10",
            "prompt": "Zawsze są jego rodzice, ___ i teściowa – ojciec i matka Joanny.",
            "accepted": [
              "teść"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q11",
            "prompt": "Od czasu do czasu jest też ___ Ignacy z babcią Zosią.",
            "accepted": [
              "dziadek"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          },
          {
            "id": "q12",
            "prompt": "Babcia pyta, kiedy pozna jego narzeczoną, a on mówi, że jeszcze nie ma prawdziwej ___.",
            "accepted": [
              "narzeczonej"
            ],
            "options": [
              "bratanica",
              "rodziną",
              "teść",
              "bratankiem",
              "żonaty",
              "narzeczonej",
              "dziadek",
              "jedynaczką",
              "żonę",
              "wujek",
              "kawalerem",
              "cioci"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l11-opposites",
        "sourceExerciseId": "WB-L11-E04",
        "kind": "typed",
        "instruction": "Proszę podać przeciwieństwo.",
        "items": [
          {
            "id": "q1",
            "prompt": "matka – ___",
            "accepted": [
              "ojciec"
            ]
          },
          {
            "id": "q2",
            "prompt": "dziadek – ___",
            "accepted": [
              "babcia"
            ]
          },
          {
            "id": "q3",
            "prompt": "kawaler – ___",
            "accepted": [
              "panna"
            ]
          },
          {
            "id": "q4",
            "prompt": "siostra – ___",
            "accepted": [
              "brat"
            ]
          },
          {
            "id": "q5",
            "prompt": "żonaty – ___",
            "accepted": [
              "mężatka"
            ]
          },
          {
            "id": "q6",
            "prompt": "ciocia – ___",
            "accepted": [
              "wujek"
            ]
          },
          {
            "id": "q7",
            "prompt": "chłopak – ___",
            "accepted": [
              "dziewczyna"
            ]
          },
          {
            "id": "q8",
            "prompt": "syn – ___",
            "accepted": [
              "córka"
            ]
          },
          {
            "id": "q9",
            "prompt": "teściowa – ___",
            "accepted": [
              "teść"
            ]
          },
          {
            "id": "q10",
            "prompt": "rozwiedziony – ___",
            "accepted": [
              "rozwiedziona"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l11-gender-groups",
        "sourceExerciseId": "WB-L11-E06",
        "kind": "choice",
        "instruction": "Proszę pogrupować: wybierz właściwy rodzaj.",
        "items": [
          {
            "id": "q1",
            "prompt": "bratanek",
            "accepted": [
              "Twój"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q2",
            "prompt": "prababcia",
            "accepted": [
              "Twoja"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q3",
            "prompt": "tata",
            "accepted": [
              "Twój"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q4",
            "prompt": "dziecko",
            "accepted": [
              "Twoje"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q5",
            "prompt": "żona",
            "accepted": [
              "Twoja"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q6",
            "prompt": "imię",
            "accepted": [
              "Twoje"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q7",
            "prompt": "szwagier",
            "accepted": [
              "Twój"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q8",
            "prompt": "dentysta",
            "accepted": [
              "Twój"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q9",
            "prompt": "kierowca",
            "accepted": [
              "Twój"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q10",
            "prompt": "bratanica",
            "accepted": [
              "Twoja"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          },
          {
            "id": "q11",
            "prompt": "zdanie",
            "accepted": [
              "Twoje"
            ],
            "options": [
              "Twój",
              "Twoja",
              "Twoje"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l11-czyj",
        "sourceExerciseId": "WB-L11-E07",
        "kind": "choice",
        "instruction": "Wybierz właściwą formę.",
        "items": [
          {
            "id": "q1",
            "prompt": "___ to jest ryba?",
            "accepted": [
              "Czyja"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q2",
            "prompt": "___ to jest sok?",
            "accepted": [
              "Czyj"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q3",
            "prompt": "___ to jest jabłko?",
            "accepted": [
              "Czyje"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ to jest owoc?",
            "accepted": [
              "Czyj"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q5",
            "prompt": "___ to jest sałatka?",
            "accepted": [
              "Czyja"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q6",
            "prompt": "___ to jest kiwi?",
            "accepted": [
              "Czyje"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q7",
            "prompt": "___ to jest pomarańcza?",
            "accepted": [
              "Czyja"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q8",
            "prompt": "___ to jest piwo?",
            "accepted": [
              "Czyje"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q9",
            "prompt": "___ to jest arbuz?",
            "accepted": [
              "Czyj"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          },
          {
            "id": "q10",
            "prompt": "___ to jest banan?",
            "accepted": [
              "Czyj"
            ],
            "options": [
              "Czyj",
              "Czyja",
              "Czyje"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l11-possessives",
        "sourceExerciseId": "WB-L11-E08",
        "kind": "typed",
        "instruction": "Wpisz właściwy zaimek: mój, twój, jego, jej, nasz, wasz, ich.",
        "items": [
          {
            "id": "q1",
            "prompt": "(ja) ___ ciocia lubi jeździć na nartach.",
            "accepted": [
              "Moja"
            ]
          },
          {
            "id": "q2",
            "prompt": "(ty) ___ kuzyn dobrze gra w tenisa.",
            "accepted": [
              "Twój"
            ]
          },
          {
            "id": "q3",
            "prompt": "(oni) ___ syn mieszka w Paryżu.",
            "accepted": [
              "Ich"
            ]
          },
          {
            "id": "q4",
            "prompt": "(my) ___ teść codziennie robi zakupy.",
            "accepted": [
              "Nasz"
            ]
          },
          {
            "id": "q5",
            "prompt": "(on) ___ brat zwykle jeździ konno w niedzielę.",
            "accepted": [
              "Jego"
            ]
          },
          {
            "id": "q6",
            "prompt": "(ja) ___ dziecko dobrze mówi po hiszpańsku.",
            "accepted": [
              "Moje"
            ]
          },
          {
            "id": "q7",
            "prompt": "(wy) ___ matka jest pracowita.",
            "accepted": [
              "Wasza"
            ]
          },
          {
            "id": "q8",
            "prompt": "(on) ___ pies lubi chodzić na spacery.",
            "accepted": [
              "Jego"
            ]
          },
          {
            "id": "q9",
            "prompt": "(ty) ___ ojciec jest stary, ale energiczny.",
            "accepted": [
              "Twój"
            ]
          },
          {
            "id": "q10",
            "prompt": "(ona) ___ siostra ma 26 lat.",
            "accepted": [
              "Jej"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l11-frequency-words",
        "sourceExerciseId": "WB-L11-E09",
        "kind": "typed",
        "instruction": "Połącz początek z końcówką i wpisz całe słowo.",
        "items": [
          {
            "id": "q1",
            "prompt": "pół- + (-rem, -dniu, -dnie, -noc, -gdy, -wsze, -dko, -sto)",
            "accepted": [
              "północ"
            ]
          },
          {
            "id": "q2",
            "prompt": "rza- + …",
            "accepted": [
              "rzadko"
            ]
          },
          {
            "id": "q3",
            "prompt": "ni- + …",
            "accepted": [
              "nigdy"
            ]
          },
          {
            "id": "q4",
            "prompt": "wieczo- + …",
            "accepted": [
              "wieczorem"
            ]
          },
          {
            "id": "q5",
            "prompt": "czę- + …",
            "accepted": [
              "często"
            ]
          },
          {
            "id": "q6",
            "prompt": "połu- + …",
            "accepted": [
              "południe"
            ]
          },
          {
            "id": "q7",
            "prompt": "za- + …",
            "accepted": [
              "zawsze"
            ]
          },
          {
            "id": "q8",
            "prompt": "po połu- + …",
            "accepted": [
              "po południu"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l11-quiz",
        "sourceExerciseId": "WB-L11-E11",
        "kind": "choice",
        "instruction": "Quiz. Czy to prawda, że…",
        "items": [
          {
            "id": "q1",
            "prompt": "w Krakowie pada śnieg tylko raz w roku?",
            "accepted": [
              "Nieprawda"
            ],
            "options": [
              "Prawda",
              "Nieprawda"
            ]
          },
          {
            "id": "q2",
            "prompt": "Polacy codziennie jedzą pierogi?",
            "accepted": [
              "Nieprawda"
            ],
            "options": [
              "Prawda",
              "Nieprawda"
            ]
          },
          {
            "id": "q3",
            "prompt": "dzieci zwykle nie lubią szpinaku?",
            "accepted": [
              "Prawda"
            ],
            "options": [
              "Prawda",
              "Nieprawda"
            ]
          },
          {
            "id": "q4",
            "prompt": "eleganckie kobiety chodzą do fryzjera minimum raz w miesiącu?",
            "accepted": [
              "Prawda"
            ],
            "options": [
              "Prawda",
              "Nieprawda"
            ]
          },
          {
            "id": "q5",
            "prompt": "Polacy nigdy nie piją herbaty z mlekiem?",
            "accepted": [
              "Nieprawda"
            ],
            "options": [
              "Prawda",
              "Nieprawda"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l11-exercise-3",
        "sourceExerciseId": "WB-L11-E03",
        "kind": "typed",
        "instruction": "Odpowiedz na pytania o Łukasza i jego rodzinę.",
        "items": [
          {
            "id": "q1",
            "prompt": "Kim Łukasz jest z zawodu?",
            "accepted": [
              "inżynierem elektronikiem"
            ]
          },
          {
            "id": "q2",
            "prompt": "Czy on ma dziewczynę?",
            "accepted": [
              "tak"
            ]
          },
          {
            "id": "q3",
            "prompt": "Co mówi jego mama?",
            "accepted": [
              "że on woli być kawalerem"
            ]
          },
          {
            "id": "q4",
            "prompt": "Czy brat Łukasza jest kawalerem?",
            "accepted": [
              "nie, jest żonaty"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ile dzieci ma Andrzej?",
            "accepted": [
              "dwoje"
            ]
          },
          {
            "id": "q6",
            "prompt": "Z kim Łukasz gra w tenisa?",
            "accepted": [
              "z bratową Joanną"
            ]
          },
          {
            "id": "q7",
            "prompt": "Jakie filmy ogląda z bratankiem?",
            "accepted": [
              "filmy dla dzieci"
            ]
          },
          {
            "id": "q8",
            "prompt": "Co lubi Zuzia?",
            "accepted": [
              "kiedy Łukasz ogląda z nią książki"
            ]
          },
          {
            "id": "q9",
            "prompt": "Dlaczego Zuzia i Mateusz nie mają cioci?",
            "accepted": [
              "bo ich tata nie ma siostry, a mama jest jedynaczką"
            ]
          },
          {
            "id": "q10",
            "prompt": "Kogo Andrzej zaprasza w niedzielę na obiad?",
            "accepted": [
              "całą rodzinę"
            ]
          },
          {
            "id": "q11",
            "prompt": "O co pyta babcia Łukasza?",
            "accepted": [
              "kiedy pozna jego narzeczoną"
            ]
          },
          {
            "id": "q12",
            "prompt": "Na kogo czekają rodzice Łukasza?",
            "accepted": [
              "na synową"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l11-exercise-5",
        "sourceExerciseId": "WB-L11-E05",
        "kind": "typed",
        "instruction": "Ułóż dwie krótkie prezentacje na podstawie notatek.",
        "items": [
          {
            "id": "q1",
            "prompt": "Iza · 31 lat · pielęgniarka · Poznań · mąż Grzegorz · córka Ewa 7 lat · dwie siostry",
            "accepted": [
              "Iza ma 31 lat, jest pielęgniarką i mieszka w Poznaniu. Jest mężatką, jej mąż ma na imię Grzegorz. Mają córkę Ewę, która ma siedem lat. Iza ma dwie siostry: starsza jest panną, a młodsza mężatką. Grzegorz jest lekarzem i ma jednego brata, który jest kawalerem."
            ]
          },
          {
            "id": "q2",
            "prompt": "Julia · 12 lat · uczennica · Kraków · siostra Łucja 9 lat · brat Michał 1 rok · mama nauczycielka",
            "accepted": [
              "Julia ma 12 lat, jest uczennicą i mieszka w Krakowie. Ma siostrę Łucję, która ma 9 lat, i brata Michała, który ma rok. Jej mama jest nauczycielką i pracuje w szkole. Babcia i dziadek są emerytami. Julia ma dwie ciocie i jednego wujka, kocha całą rodzinę."
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "l11-exercise-10",
        "sourceExerciseId": "WB-L11-E10",
        "kind": "typed",
        "instruction": "Ułóż tekst z podanych zdań.",
        "items": [
          {
            "id": "q1",
            "prompt": "Codzienny plan dnia",
            "accepted": [
              "Justyna wstaje codziennie o siódmej rano. Je śniadanie i idzie do szkoły. Przed południem ma dwie lekcje – gramatykę i słownictwo. Przerwę na obiad ma zawsze w południe. Po południu ma lekcję muzyki i uczy się grać na pianinie. Ona zwykle spotyka się z chłopakiem. Bardzo rzadko uczy się wieczorem. Zwykle już śpi o północy."
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "l11-exercise-12",
        "sourceExerciseId": "WB-L11-E12",
        "kind": "typed",
        "instruction": "Uzupełnij tekst określeniami czasu, a potem wpisz P lub N.",
        "items": [
          {
            "id": "q1",
            "prompt": "1. Magda wstaje ___ o 7.30.",
            "accepted": [
              "codziennie"
            ]
          },
          {
            "id": "q2",
            "prompt": "2. ___ ubiera się i idzie z dziećmi do szkoły.",
            "accepted": [
              "później"
            ]
          },
          {
            "id": "q3",
            "prompt": "3. ___ robi zakupy na targu.",
            "accepted": [
              "przed południem"
            ]
          },
          {
            "id": "q4",
            "prompt": "4. ___ robi zakupy w hipermarkecie.",
            "accepted": [
              "od czasu do czasu"
            ]
          },
          {
            "id": "q5",
            "prompt": "5. ___ spotyka się z koleżanką na kawie.",
            "accepted": [
              "zwykle"
            ]
          },
          {
            "id": "q6",
            "prompt": "6. O 14.00 odbiera dzieci.",
            "accepted": [
              "w południe"
            ]
          },
          {
            "id": "q7",
            "prompt": "7. ___ wraca do domu mąż Magdy.",
            "accepted": [
              "wieczorem"
            ]
          },
          {
            "id": "q8",
            "prompt": "8. Oni ___ wychodzą z domu.",
            "accepted": [
              "rzadko"
            ]
          },
          {
            "id": "q9",
            "prompt": "Zdanie 1: Magda bardzo rzadko wstaje rano.",
            "accepted": [
              "N"
            ]
          },
          {
            "id": "q10",
            "prompt": "Zdanie 2: Mateusz jest bratem Ani.",
            "accepted": [
              "P"
            ]
          },
          {
            "id": "q11",
            "prompt": "Zdanie 3: Dzieci chodzą same do szkoły.",
            "accepted": [
              "N"
            ]
          },
          {
            "id": "q12",
            "prompt": "Zdanie 4: Magda często robi zakupy w hipermarkecie.",
            "accepted": [
              "N"
            ]
          },
          {
            "id": "q13",
            "prompt": "Zdanie 5: Magda często spotyka się z koleżanką po południu.",
            "accepted": [
              "N"
            ]
          },
          {
            "id": "q14",
            "prompt": "Zdanie 6: Magda jest rozwiedziona.",
            "accepted": [
              "N"
            ]
          },
          {
            "id": "q15",
            "prompt": "Zdanie 7: Piotrek ma córkę i syna.",
            "accepted": [
              "P"
            ]
          },
          {
            "id": "q16",
            "prompt": "Zdanie 8: Rodzina Magdy nigdy nie wychodzi z domu.",
            "accepted": [
              "N"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "l11-exercise-13",
        "sourceExerciseId": "WB-L11-E13",
        "kind": "typed",
        "instruction": "Wybierz poprawny szyk i formę.",
        "items": [
          {
            "id": "q1",
            "prompt": "Dziadek nigdy … (chodzić) do dentysty.",
            "accepted": [
              "Mój dziadek nigdy nie chodzi do dentysty."
            ]
          },
          {
            "id": "q2",
            "prompt": "Mama zwykle … zakupy … (przed południem).",
            "accepted": [
              "Moja mama zwykle robi zakupy przed południem."
            ]
          },
          {
            "id": "q3",
            "prompt": "Jana teściowa … obiad.",
            "accepted": [
              "Teściowa Jana zawsze gotuje obiad."
            ]
          },
          {
            "id": "q4",
            "prompt": "Mój teść rzadko …",
            "accepted": [
              "Mój teść rzadko chodzi na mecze."
            ]
          },
          {
            "id": "q5",
            "prompt": "Zwykle na śniadanie …, tylko w niedzielę …",
            "accepted": [
              "Zwykle na śniadanie piję kawę, tylko w niedzielę piję herbatę."
            ]
          }
        ]
      },
      {
        "index": 13,
        "id": "l11-exercise-14",
        "sourceExerciseId": "WB-L11-E14",
        "kind": "typed",
        "instruction": "Ułóż zdania z podanych informacji.",
        "items": [
          {
            "id": "q1",
            "prompt": "Moi rodzice · nigdy · restauracja",
            "accepted": [
              "Moi rodzice nigdy nie chodzą do restauracji."
            ]
          },
          {
            "id": "q2",
            "prompt": "Mój brat · często · dyskoteka",
            "accepted": [
              "Mój brat często chodzi na dyskotekę."
            ]
          },
          {
            "id": "q3",
            "prompt": "Teściowa Jana · zawsze · gotować obiad",
            "accepted": [
              "Teściowa Jana zawsze gotuje obiad."
            ]
          },
          {
            "id": "q4",
            "prompt": "Mój teść · rzadko · mecze",
            "accepted": [
              "Mój teść rzadko chodzi na mecze."
            ]
          },
          {
            "id": "q5",
            "prompt": "Zwykle · śniadanie · kawa · niedziela · herbata",
            "accepted": [
              "Zwykle na śniadanie piję kawę, tylko w niedzielę piję herbatę."
            ]
          }
        ]
      }
    ]
  },
  "26": {
    "id": 26,
    "title": "Same problemy",
    "activities": [
      {
        "index": 0,
        "id": "l26-services",
        "sourceExerciseId": "WB-L26-E01",
        "kind": "choice",
        "instruction": "Wybierz miejsce, w którym załatwisz sprawę.",
        "items": [
          {
            "id": "q1",
            "prompt": "Naprawić telewizor",
            "accepted": [
              "serwis RTV"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q2",
            "prompt": "Zepsuł się samochód",
            "accepted": [
              "warsztat samochodowy"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q3",
            "prompt": "Skopiować dokumenty",
            "accepted": [
              "punkt ksero"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q4",
            "prompt": "Nie mam pieniędzy w portfelu",
            "accepted": [
              "bankomat"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zepsuła się pralka",
            "accepted": [
              "serwis sprzętu AGD"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q6",
            "prompt": "Kupić gazetę",
            "accepted": [
              "kiosk"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q7",
            "prompt": "Jestem chory",
            "accepted": [
              "przychodnia"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          },
          {
            "id": "q8",
            "prompt": "Wysłać list",
            "accepted": [
              "poczta"
            ],
            "options": [
              "punkt ksero",
              "przychodnia",
              "poczta",
              "serwis RTV",
              "warsztat samochodowy",
              "serwis sprzętu AGD",
              "bankomat",
              "kiosk"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "l26-errands-vocabulary",
        "sourceExerciseId": "WB-L26-E02",
        "kind": "typed",
        "instruction": "Uzupełnij zdania wyrazami związanymi z usługami.",
        "items": [
          {
            "id": "q1",
            "prompt": "Jutro muszę iść do ___ po nowe okulary.",
            "accepted": [
              "optyka"
            ]
          },
          {
            "id": "q2",
            "prompt": "On był u ___, żeby ___ skrócone spodnie.",
            "accepted": [
              "krawca; odebrać"
            ]
          },
          {
            "id": "q3",
            "prompt": "Możesz mi kupić ___ telefoniczną? Muszę ___ komórkę.",
            "accepted": [
              "kartę; doładować"
            ]
          },
          {
            "id": "q4",
            "prompt": "Czy tato mógłby ___ ten zepsuty prysznic?",
            "accepted": [
              "naprawić"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy mógłby pan ___ sobie te dokumenty?",
            "accepted": [
              "skopiować"
            ]
          },
          {
            "id": "q6",
            "prompt": "Masz za długi płaszcz. Musisz go ___.",
            "accepted": [
              "skrócić"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "l26-complaints",
        "sourceExerciseId": "WB-L26-E03",
        "kind": "choice",
        "instruction": "Dopasuj zakończenie do zdania.",
        "items": [
          {
            "id": "q1",
            "prompt": "Gdy towar jest uszkodzony albo przeterminowany, możemy go…",
            "accepted": [
              "reklamować."
            ],
            "options": [
              "ważności.",
              "przeterminowany.",
              "promować.",
              "reklamować.",
              "wymienić.",
              "paragonu."
            ]
          },
          {
            "id": "q2",
            "prompt": "Data na opakowaniu produktu to data…",
            "accepted": [
              "ważności."
            ],
            "options": [
              "ważności.",
              "przeterminowany.",
              "promować.",
              "reklamować.",
              "wymienić.",
              "paragonu."
            ]
          },
          {
            "id": "q3",
            "prompt": "Sprzedawca może nie przyjąć reklamacji, kiedy nie mamy…",
            "accepted": [
              "paragonu."
            ],
            "options": [
              "ważności.",
              "przeterminowany.",
              "promować.",
              "reklamować.",
              "wymienić.",
              "paragonu."
            ]
          },
          {
            "id": "q4",
            "prompt": "Sprzedawca może oddać pieniądze albo produkt…",
            "accepted": [
              "wymienić."
            ],
            "options": [
              "ważności.",
              "przeterminowany.",
              "promować.",
              "reklamować.",
              "wymienić.",
              "paragonu."
            ]
          },
          {
            "id": "q5",
            "prompt": "Jeżeli minęła data ważności, produkt jest…",
            "accepted": [
              "przeterminowany."
            ],
            "options": [
              "ważności.",
              "przeterminowany.",
              "promować.",
              "reklamować.",
              "wymienić.",
              "paragonu."
            ]
          },
          {
            "id": "q6",
            "prompt": "Reklamować to znaczy również…",
            "accepted": [
              "promować."
            ],
            "options": [
              "ważności.",
              "przeterminowany.",
              "promować.",
              "reklamować.",
              "wymienić.",
              "paragonu."
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "l26-camera-complaint",
        "sourceExerciseId": "WB-L26-E04",
        "kind": "typed",
        "instruction": "Uzupełnij rozmowę w sklepie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Dzień dobry, chciałam ___ ten aparat fotograficzny.",
            "accepted": [
              "reklamować"
            ]
          },
          {
            "id": "q2",
            "prompt": "Zdjęcia są ___.",
            "accepted": [
              "nieostre"
            ]
          },
          {
            "id": "q3",
            "prompt": "Czy aparat jest na gwarancji? — ___ .",
            "accepted": [
              "Tak"
            ]
          },
          {
            "id": "q4",
            "prompt": "Tutaj mam ___.",
            "accepted": [
              "paragon"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy aparat nie został mechanicznie ___?",
            "accepted": [
              "uszkodzony"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "l26-synonyms",
        "sourceExerciseId": "WB-L26-E05",
        "kind": "choice",
        "instruction": "Wybierz wyraz o podobnym znaczeniu.",
        "items": [
          {
            "id": "q1",
            "prompt": "wypadek",
            "accepted": [
              "kraksa"
            ],
            "options": [
              "kraksa",
              "natychmiast",
              "zahamować",
              "uszkodzony",
              "zestresowana",
              "zdążyć"
            ]
          },
          {
            "id": "q2",
            "prompt": "od razu",
            "accepted": [
              "natychmiast"
            ],
            "options": [
              "kraksa",
              "natychmiast",
              "zahamować",
              "uszkodzony",
              "zestresowana",
              "zdążyć"
            ]
          },
          {
            "id": "q3",
            "prompt": "zatrzymać samochód",
            "accepted": [
              "zahamować"
            ],
            "options": [
              "kraksa",
              "natychmiast",
              "zahamować",
              "uszkodzony",
              "zestresowana",
              "zdążyć"
            ]
          },
          {
            "id": "q4",
            "prompt": "zepsuty",
            "accepted": [
              "uszkodzony"
            ],
            "options": [
              "kraksa",
              "natychmiast",
              "zahamować",
              "uszkodzony",
              "zestresowana",
              "zdążyć"
            ]
          },
          {
            "id": "q5",
            "prompt": "zdenerwowana",
            "accepted": [
              "zestresowana"
            ],
            "options": [
              "kraksa",
              "natychmiast",
              "zahamować",
              "uszkodzony",
              "zestresowana",
              "zdążyć"
            ]
          },
          {
            "id": "q6",
            "prompt": "dojechać na czas",
            "accepted": [
              "zdążyć"
            ],
            "options": [
              "kraksa",
              "natychmiast",
              "zahamować",
              "uszkodzony",
              "zestresowana",
              "zdążyć"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "l26-road-safety",
        "sourceExerciseId": "WB-L26-E06",
        "kind": "choice",
        "instruction": "Wybierz odpowiedź zgodną z tekstem z nagrania i klucza.",
        "items": [
          {
            "id": "q1",
            "prompt": "Co roku na polskich drogach ginie…",
            "accepted": [
              "ponad 5 tysięcy osób"
            ],
            "options": [
              "mniej niż 5 tysięcy osób",
              "ponad 5 tysięcy osób",
              "prawie 5 tysięcy osób"
            ]
          },
          {
            "id": "q2",
            "prompt": "Główna przyczyna wypadków to…",
            "accepted": [
              "nierepektowanie przepisów"
            ],
            "options": [
              "nierepektowanie przepisów",
              "złe przepisy",
              "przestrzeganie przepisów"
            ]
          },
          {
            "id": "q3",
            "prompt": "Inną przyczyną jest prowadzenie pojazdu…",
            "accepted": [
              "pod wpływem alkoholu"
            ],
            "options": [
              "z alkoholem",
              "pod wpływem alkoholu",
              "przez alkohol"
            ]
          },
          {
            "id": "q4",
            "prompt": "Drogi w Polsce…",
            "accepted": [
              "nie są wystarczająco szerokie"
            ],
            "options": [
              "są zbyt szerokie",
              "nie są wąskie",
              "nie są wystarczająco szerokie"
            ]
          },
          {
            "id": "q5",
            "prompt": "W wielu miejscowościach…",
            "accepted": [
              "nie ma chodników"
            ],
            "options": [
              "brak dróg",
              "nie ma chodników",
              "nie ma pieszych"
            ]
          },
          {
            "id": "q6",
            "prompt": "Kolejna przyczyna wypadków to…",
            "accepted": [
              "mgła i opady"
            ],
            "options": [
              "mgła i opady",
              "brak deszczu i śniegu",
              "niewystarczające ostrzeżenie radiowe"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "l26-polite-requests",
        "sourceExerciseId": "WB-L26-E07",
        "kind": "typed",
        "instruction": "Uzupełnij prośby i pytania w trybie przypuszczającym.",
        "items": [
          {
            "id": "q1",
            "prompt": "___ zapytać, o której jest pociąg do Zakopanego. (ja, mężczyzna)",
            "accepted": [
              "Chciałbym"
            ]
          },
          {
            "id": "q2",
            "prompt": "Czy ___ wziąć psa na spacer? (ty, kobieta)",
            "accepted": [
              "mogłabyś"
            ]
          },
          {
            "id": "q3",
            "prompt": "___ zapytać, czy musimy pisać dziś test. (on)",
            "accepted": [
              "chciałby"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ zapytać, czy musimy pisać dziś test. (my, kobiety)",
            "accepted": [
              "chciałybyśmy"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czy ___ pan zamknąć okno?",
            "accepted": [
              "mógłby"
            ]
          },
          {
            "id": "q6",
            "prompt": "___ prosić o pomoc. (ja, kobieta)",
            "accepted": [
              "chciałabym"
            ]
          },
          {
            "id": "q7",
            "prompt": "Czy ___ prosić o pomoc? (ty, kobieta)",
            "accepted": [
              "mogłabyś"
            ]
          },
          {
            "id": "q8",
            "prompt": "Mami ___ wiedzieć, czy idziesz z nią na spektakl.",
            "accepted": [
              "chciałaby"
            ]
          },
          {
            "id": "q9",
            "prompt": "Kasiu, ___ mi pomóc wybrać sukienkę?",
            "accepted": [
              "mogłabyś"
            ]
          },
          {
            "id": "q10",
            "prompt": "Tomku, ___ się czegoś napić? Może wody?",
            "accepted": [
              "chciałbyś"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "l26-lost-wallet",
        "sourceExerciseId": "WB-L26-E08",
        "kind": "typed",
        "instruction": "Uzupełnij rzeczowniki właściwą formą.",
        "items": [
          {
            "id": "q1",
            "prompt": "Tom zobaczył, że nie ma ___. (portfel)",
            "accepted": [
              "portfela"
            ]
          },
          {
            "id": "q2",
            "prompt": "Miał go w ___. (kieszeń)",
            "accepted": [
              "kieszeni"
            ]
          },
          {
            "id": "q3",
            "prompt": "… w ___. (kurtka)",
            "accepted": [
              "kurtce"
            ]
          },
          {
            "id": "q4",
            "prompt": "Wszyscy zaczęli szukać ___. (portfel)",
            "accepted": [
              "portfela"
            ]
          },
          {
            "id": "q5",
            "prompt": "Tom szuka w ___. (spodnie)",
            "accepted": [
              "spodniach"
            ]
          },
          {
            "id": "q6",
            "prompt": "… i w ___. (plecak)",
            "accepted": [
              "plecaku"
            ]
          },
          {
            "id": "q7",
            "prompt": "Mami szuka na ___. (podłoga)",
            "accepted": [
              "podłodze"
            ]
          },
          {
            "id": "q8",
            "prompt": "… pod ___. (krzesło)",
            "accepted": [
              "krzesłem"
            ]
          },
          {
            "id": "q9",
            "prompt": "Angela szuka na ___. (stół)",
            "accepted": [
              "stole"
            ]
          },
          {
            "id": "q10",
            "prompt": "… pod ___. (karta)",
            "accepted": [
              "kartą"
            ]
          },
          {
            "id": "q11",
            "prompt": "Javier sprawdza przy ___. (bar)",
            "accepted": [
              "barze"
            ]
          },
          {
            "id": "q12",
            "prompt": "Uwe pyta ochroniarza przy ___. (drzwi)",
            "accepted": [
              "drzwiach"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "l26-police-report",
        "sourceExerciseId": "WB-L26-E09",
        "kind": "typed",
        "instruction": "Uzupełnij dialog na policji.",
        "items": [
          {
            "id": "q1",
            "prompt": "Chciałem zgłosić ___ paszportu.",
            "accepted": [
              "kradzież"
            ]
          },
          {
            "id": "q2",
            "prompt": "Kiedy i gdzie to się ___?",
            "accepted": [
              "stało"
            ]
          },
          {
            "id": "q3",
            "prompt": "Kiedy rano wychodziłem z hotelu, a pewnie jeszcze ___ miałem.",
            "accepted": [
              "go"
            ]
          },
          {
            "id": "q4",
            "prompt": "Potem zwiedzałem Kraków. Byłem w różnych ___.",
            "accepted": [
              "miejscach"
            ]
          },
          {
            "id": "q5",
            "prompt": "Policjant · okazuje zrozumienie i pyta, czy zginęło coś jeszcze",
            "accepted": [
              "Rozumiem. Czy zginęło panu coś jeszcze?"
            ]
          },
          {
            "id": "q6",
            "prompt": "Nie, ___ paszport.",
            "accepted": [
              "tylko"
            ]
          },
          {
            "id": "q7",
            "prompt": "Proszę ___ ten formularz.",
            "accepted": [
              "wypełnić"
            ]
          },
          {
            "id": "q8",
            "prompt": "Na ___ proszę wypełnić resztę.",
            "accepted": [
              "razie"
            ]
          },
          {
            "id": "q9",
            "prompt": "Numer może pan potem dostać ___.",
            "accepted": [
              "mailem"
            ]
          },
          {
            "id": "q10",
            "prompt": "Proszę ___ pięć minut.",
            "accepted": [
              "zaczekać"
            ]
          },
          {
            "id": "q11",
            "prompt": "Pana paszport ___ się w muzeum.",
            "accepted": [
              "znalazł"
            ]
          },
          {
            "id": "q12",
            "prompt": "Jest do odebrania na posterunku policji ___ muzeum.",
            "accepted": [
              "naprzeciwko"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "l26-errands-plans",
        "sourceExerciseId": "WB-L26-E10",
        "kind": "typed",
        "instruction": "Opisz kolejność spraw Karola i Karoliny.",
        "items": [
          {
            "id": "q1",
            "prompt": "Karol · najpierw i potem",
            "accepted": [
              "Karol najpierw musi posprzątać pokój, potem musi iść na pocztę, żeby wysłać priorytetem list do cioci Hani."
            ]
          },
          {
            "id": "q2",
            "prompt": "Karol · po drodze",
            "accepted": [
              "Po drodze do domu musi odebrać mikser z serwisu RTV."
            ]
          },
          {
            "id": "q3",
            "prompt": "Karol · po południu",
            "accepted": [
              "Po południu musi zadzwonić do hydraulika, bo zlew w kuchni jest zepsuty."
            ]
          },
          {
            "id": "q4",
            "prompt": "Karol · hydraulik i trening",
            "accepted": [
              "Musi zaczekać w domu na hydraulika i dopiero kiedy hydraulik naprawi zlew, może iść na trening."
            ]
          },
          {
            "id": "q5",
            "prompt": "Karolina · najpierw",
            "accepted": [
              "Karolina najpierw musi umyć naczynia w kuchni."
            ]
          },
          {
            "id": "q6",
            "prompt": "Karolina · potem",
            "accepted": [
              "Potem musi iść do sklepu po ziemniaki, pomidory, cebulę i marchewkę."
            ]
          },
          {
            "id": "q7",
            "prompt": "Karolina · po drodze",
            "accepted": [
              "Po drodze musi iść do szewca po naprawione buty i do krawca po skrócone spodnie Mami."
            ]
          },
          {
            "id": "q8",
            "prompt": "Karolina · na koniec",
            "accepted": [
              "Następnie musi iść do optyka po nowe soczewki kontaktowe dla taty. Potem ma już czas dla siebie."
            ]
          }
        ]
      }
    ]
  },
  "27": {
    "id": 27,
    "title": "Przedstawmy się",
    "activities": [
      {
        "index": 0,
        "id": "p2-l01-e01",
        "sourceExerciseId": "WB2-L01-E01",
        "kind": "classify",
        "instruction": "Wybierz kategorię dla każdego określenia.",
        "items": [
          {
            "id": "q1",
            "prompt": "otyły",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q2",
            "prompt": "siwe",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q3",
            "prompt": "chuda",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q4",
            "prompt": "odstające",
            "accepted": [
              "uszy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q5",
            "prompt": "pełne",
            "accepted": [
              "usta"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q6",
            "prompt": "zadarty",
            "accepted": [
              "nos"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q7",
            "prompt": "szare",
            "accepted": [
              "oczy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q8",
            "prompt": "krótkie i proste",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q9",
            "prompt": "rude",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q10",
            "prompt": "wysokie",
            "accepted": [
              "czoło"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q11",
            "prompt": "wysoki",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q12",
            "prompt": "gruby",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q13",
            "prompt": "prosty",
            "accepted": [
              "nos"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q14",
            "prompt": "zgrabny",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q15",
            "prompt": "długie i kręcone",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q16",
            "prompt": "piwne",
            "accepted": [
              "oczy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q17",
            "prompt": "niski",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q18",
            "prompt": "blond",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q19",
            "prompt": "farbowane",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q20",
            "prompt": "średniego wzrostu",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q21",
            "prompt": "owalna",
            "accepted": [
              "twarz"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q22",
            "prompt": "duży",
            "accepted": [
              "nos"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q23",
            "prompt": "gęste",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q24",
            "prompt": "duże",
            "accepted": [
              "oczy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q25",
            "prompt": "szczupły",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q26",
            "prompt": "podłużna",
            "accepted": [
              "twarz"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q27",
            "prompt": "krzywy",
            "accepted": [
              "nos"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q28",
            "prompt": "zielone",
            "accepted": [
              "oczy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q29",
            "prompt": "z grzywką",
            "accepted": [
              "włosy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q30",
            "prompt": "okrągła",
            "accepted": [
              "twarz"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q31",
            "prompt": "skośne",
            "accepted": [
              "oczy"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q32",
            "prompt": "mocnej budowy",
            "accepted": [
              "sylwetka"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q33",
            "prompt": "piegowata",
            "accepted": [
              "twarz"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q34",
            "prompt": "kształtne",
            "accepted": [
              "usta"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          },
          {
            "id": "q35",
            "prompt": "niskie",
            "accepted": [
              "czoło"
            ],
            "options": [
              "twarz",
              "włosy",
              "oczy",
              "uszy",
              "nos",
              "usta",
              "czoło",
              "sylwetka"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "p2-l01-e02",
        "sourceExerciseId": "WB2-L01-E02",
        "kind": "typed",
        "instruction": "Wpisz przymiotnik pasujący do definicji.",
        "items": [
          {
            "id": "q1",
            "prompt": "ktoś, kto o wszystkim zapomina",
            "accepted": [
              "zapominalski"
            ]
          },
          {
            "id": "q2",
            "prompt": "ktoś, kto zawsze się spóźnia",
            "accepted": [
              "niepunktualny"
            ]
          },
          {
            "id": "q3",
            "prompt": "ktoś, kto robi wszystko regularnie",
            "accepted": [
              "systematyczny"
            ]
          },
          {
            "id": "q4",
            "prompt": "ktoś, kto reaguje szybko i żywiołowo",
            "accepted": [
              "spontaniczny"
            ]
          },
          {
            "id": "q5",
            "prompt": "ktoś, kto szybko się denerwuje",
            "accepted": [
              "nerwowy"
            ]
          },
          {
            "id": "q6",
            "prompt": "ktoś, kto ma talent",
            "accepted": [
              "zdolny"
            ]
          },
          {
            "id": "q7",
            "prompt": "ktoś szybki i dynamiczny",
            "accepted": [
              "energiczny"
            ]
          },
          {
            "id": "q8",
            "prompt": "ktoś, kto nie jest pewny siebie",
            "accepted": [
              "nieśmiały"
            ]
          },
          {
            "id": "q9",
            "prompt": "ktoś, kto nie lubi pracować",
            "accepted": [
              "leniwy"
            ]
          },
          {
            "id": "q10",
            "prompt": "ktoś, kto lubi się śmiać",
            "accepted": [
              "wesoły"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "p2-l01-e03",
        "sourceExerciseId": "WB2-L01-E03",
        "kind": "choice",
        "instruction": "Posłuchaj nagrania i zaznacz P (prawda) lub N (nieprawda).",
        "items": [
          {
            "id": "q1",
            "prompt": "Paweł nie zgadza się na wywiad.",
            "accepted": [
              "N"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q2",
            "prompt": "Paweł jest stomatologiem.",
            "accepted": [
              "P"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q3",
            "prompt": "Paweł pracuje w szpitalu.",
            "accepted": [
              "N"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q4",
            "prompt": "Paweł jest zadowolony ze swojej pracy.",
            "accepted": [
              "P"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zbytnia nieśmiałość to wada Pawła.",
            "accepted": [
              "P"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q6",
            "prompt": "Paweł ma syna i córkę.",
            "accepted": [
              "N"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q7",
            "prompt": "W wolnym czasie Paweł jeździ na ryby.",
            "accepted": [
              "N"
            ],
            "options": [
              "P",
              "N"
            ]
          },
          {
            "id": "q8",
            "prompt": "Paweł marzy o domu z ogrodem.",
            "accepted": [
              "P"
            ],
            "options": [
              "P",
              "N"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "p2-l01-e04",
        "sourceExerciseId": "WB2-L01-E04",
        "kind": "typed",
        "instruction": "Wpisz brakujące słowa, a następnie sprawdź je z nagraniem.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czy mogę ___ panu kilka pytań?",
            "accepted": [
              "zadać"
            ]
          },
          {
            "id": "q2",
            "prompt": "Kim pan jest z ___?",
            "accepted": [
              "zawodu"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mam też prywatny ___.",
            "accepted": [
              "gabinet"
            ]
          },
          {
            "id": "q4",
            "prompt": "Pacjenci mają dobrze wyleczone i ładne ___.",
            "accepted": [
              "zęby"
            ]
          },
          {
            "id": "q5",
            "prompt": "Jakie ___ swojego charakteru pan akceptuje?",
            "accepted": [
              "cechy"
            ]
          },
          {
            "id": "q6",
            "prompt": "To moje ___ i wady.",
            "accepted": [
              "zalety"
            ]
          },
          {
            "id": "q7",
            "prompt": "Opowie pan coś o swojej ___?",
            "accepted": [
              "rodzinie"
            ]
          },
          {
            "id": "q8",
            "prompt": "Mam jednego ___.",
            "accepted": [
              "syna"
            ]
          },
          {
            "id": "q9",
            "prompt": "Nie wiemy jeszcze, czy to chłopiec, czy ___.",
            "accepted": [
              "dziewczynka"
            ]
          },
          {
            "id": "q10",
            "prompt": "Jak pan ___ wolny czas?",
            "accepted": [
              "spędza"
            ]
          },
          {
            "id": "q11",
            "prompt": "___ żonie w domu.",
            "accepted": [
              "Pomagam"
            ]
          },
          {
            "id": "q12",
            "prompt": "Wieczorami staram się ___ z synem.",
            "accepted": [
              "bawić"
            ]
          },
          {
            "id": "q13",
            "prompt": "Surfuję ___ internecie.",
            "accepted": [
              "w"
            ]
          },
          {
            "id": "q14",
            "prompt": "Kiedyś ___ się łowieniem ryb.",
            "accepted": [
              "pasjonowałem"
            ]
          },
          {
            "id": "q15",
            "prompt": "Jeździć ___ ryby.",
            "accepted": [
              "na"
            ]
          },
          {
            "id": "q16",
            "prompt": "Chłopiec woli grać ___ piłkę.",
            "accepted": [
              "w"
            ]
          },
          {
            "id": "q17",
            "prompt": "Czy mogę zapytać o pana ___?",
            "accepted": [
              "marzenia"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "p2-l01-e05",
        "sourceExerciseId": "WB2-L01-E05",
        "kind": "typed",
        "instruction": "Zapisz poprawną definicję.",
        "items": [
          {
            "id": "q1",
            "prompt": "Wdowiec",
            "accepted": [
              "Wdowiec to mężczyzna, którego żona już nie żyje."
            ]
          },
          {
            "id": "q2",
            "prompt": "Rodzeństwo",
            "accepted": [
              "Rodzeństwo to brat i siostra."
            ]
          },
          {
            "id": "q3",
            "prompt": "Kawaler",
            "accepted": [
              "Kawaler to mężczyzna, który nie ma żony."
            ]
          },
          {
            "id": "q4",
            "prompt": "Bliźniak",
            "accepted": [
              "Bliźniak to osoba, która ma brata lub siostrę urodzonych w tym samym dniu."
            ]
          },
          {
            "id": "q5",
            "prompt": "Jedynak",
            "accepted": [
              "Jedynak to osoba, która nie ma brata ani siostry."
            ]
          },
          {
            "id": "q6",
            "prompt": "Panna",
            "accepted": [
              "Panna to osoba, która nie ma męża."
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "p2-l01-e06",
        "sourceExerciseId": "WB2-L01-E06",
        "kind": "typed",
        "instruction": "Ułóż zdania, używając podanego czasownika i rzeczownika.",
        "items": [
          {
            "id": "q1",
            "prompt": "uwielbiać · gorąca czekolada",
            "accepted": [
              "Uwielbiam gorącą czekoladę."
            ]
          },
          {
            "id": "q2",
            "prompt": "nie znosić · gotowany szpinak",
            "accepted": [
              "Nie znoszę gotowanego szpinaku."
            ]
          },
          {
            "id": "q3",
            "prompt": "pasjonować się · żeglarstwo",
            "accepted": [
              "Mój syn pasjonuje się żeglarstwem."
            ]
          },
          {
            "id": "q4",
            "prompt": "kierować · duża firma budowlana",
            "accepted": [
              "Andrzej kieruje dużą firmą budowlaną."
            ]
          },
          {
            "id": "q5",
            "prompt": "przepadać za · lody waniliowe",
            "accepted": [
              "Przepadam za lodami waniliowymi."
            ]
          },
          {
            "id": "q6",
            "prompt": "zarazić się · grypa",
            "accepted": [
              "Agnieszka zaraziła się grypą od swojej sąsiadki."
            ]
          },
          {
            "id": "q7",
            "prompt": "zajmować się · marketing",
            "accepted": [
              "Kto w państwa firmie zajmuje się marketingiem?"
            ]
          },
          {
            "id": "q8",
            "prompt": "radzić sobie z · problemy rodzinne",
            "accepted": [
              "Niestety, nie radzę sobie z problemami rodzinnymi."
            ]
          },
          {
            "id": "q9",
            "prompt": "opiekować się · pies sąsiada",
            "accepted": [
              "Będę się opiekować psem sąsiada."
            ]
          },
          {
            "id": "q10",
            "prompt": "prowadzić · samochód",
            "accepted": [
              "Prowadzisz samochód jak zawodowy kierowca."
            ]
          },
          {
            "id": "q11",
            "prompt": "stresować się · egzamin",
            "accepted": [
              "Bardzo stresuję się egzaminem."
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "p2-l01-e07",
        "sourceExerciseId": "WB2-L01-E07",
        "kind": "typed",
        "instruction": "Odpowiedz przykładem w narzędniku.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czym można pisać?",
            "accepted": [
              "długopisem",
              "piórem",
              "ołówkiem"
            ]
          },
          {
            "id": "q2",
            "prompt": "Czym można jeść?",
            "accepted": [
              "łyżką",
              "łyżeczką",
              "widelcem",
              "nożem"
            ]
          },
          {
            "id": "q3",
            "prompt": "Czym można się czesać?",
            "accepted": [
              "szczotką",
              "grzebieniem"
            ]
          },
          {
            "id": "q4",
            "prompt": "Czym można jeździć do pracy?",
            "accepted": [
              "samochodem",
              "taksówką",
              "autobusem",
              "rowerem",
              "tramwajem",
              "pociągiem",
              "metrem"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czym można smarować chleb?",
            "accepted": [
              "masłem",
              "margaryną",
              "nutellą"
            ]
          },
          {
            "id": "q6",
            "prompt": "Czym można się zajmować?",
            "accepted": [
              "domem",
              "dziećmi",
              "finansami",
              "marketingiem"
            ]
          },
          {
            "id": "q7",
            "prompt": "Czym można się stresować?",
            "accepted": [
              "pracą",
              "szkołą",
              "egzaminem",
              "problemami"
            ]
          },
          {
            "id": "q8",
            "prompt": "Czym można się cieszyć?",
            "accepted": [
              "życiem",
              "wakacjami",
              "pogodą",
              "spotkaniem"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "p2-l01-e08",
        "sourceExerciseId": "WB2-L01-E08",
        "kind": "typed",
        "instruction": "Ułóż pytanie do wyróżnionej informacji.",
        "items": [
          {
            "id": "q1",
            "prompt": "Olga jest ładną dziewczyną.",
            "accepted": [
              "Jaką dziewczyną jest Olga?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Szymon jest wysokim chłopcem.",
            "accepted": [
              "Jakim chłopcem jest Szymon?"
            ]
          },
          {
            "id": "q3",
            "prompt": "Ojciec zwykle jeździ taksówką.",
            "accepted": [
              "Czym zwykle jeździ ojciec?"
            ]
          },
          {
            "id": "q4",
            "prompt": "Mama pije kawę z mlekiem.",
            "accepted": [
              "Z czym mama pije kawę?"
            ]
          },
          {
            "id": "q5",
            "prompt": "Mamy lekcje z sympatycznym nauczycielem.",
            "accepted": [
              "Z kim mamy lekcje?"
            ]
          },
          {
            "id": "q6",
            "prompt": "Przed domem stoi auto.",
            "accepted": [
              "Gdzie stoi auto?",
              "Przed czym stoi auto?"
            ]
          },
          {
            "id": "q7",
            "prompt": "Rafał interesuje się tą nową studentką.",
            "accepted": [
              "Kim interesuje się Rafał?"
            ]
          },
          {
            "id": "q8",
            "prompt": "Turysta idzie nowym szlakiem.",
            "accepted": [
              "Którędy idzie turysta?"
            ]
          },
          {
            "id": "q9",
            "prompt": "Pies śpi pod fotelem.",
            "accepted": [
              "Gdzie śpi pies?",
              "Pod czym śpi pies?"
            ]
          },
          {
            "id": "q10",
            "prompt": "Przyjadę na kurs wczesną wiosną.",
            "accepted": [
              "Kiedy przyjadę na kurs?"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "p2-l01-e09",
        "sourceExerciseId": "WB2-L01-E09",
        "kind": "typed",
        "instruction": "Wpisz przybór, którego używamy do danej czynności.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czym jemy spaghetti?",
            "accepted": [
              "łyżką i widelcem"
            ]
          },
          {
            "id": "q2",
            "prompt": "Czym myjemy zęby?",
            "accepted": [
              "pastą i szczoteczką do zębów"
            ]
          },
          {
            "id": "q3",
            "prompt": "Czym myjemy ręce?",
            "accepted": [
              "wodą i mydłem"
            ]
          },
          {
            "id": "q4",
            "prompt": "Czym wycieramy się po kąpieli?",
            "accepted": [
              "ręcznikiem"
            ]
          },
          {
            "id": "q5",
            "prompt": "Czym smarujemy się po kąpieli?",
            "accepted": [
              "balsamem do ciała"
            ]
          },
          {
            "id": "q6",
            "prompt": "Czym smarujemy ręce?",
            "accepted": [
              "kremem do rąk"
            ]
          },
          {
            "id": "q7",
            "prompt": "Czym kobiety malują usta?",
            "accepted": [
              "szminką do ust"
            ]
          },
          {
            "id": "q8",
            "prompt": "Czym mężczyźni się golą?",
            "accepted": [
              "maszynką do golenia"
            ]
          },
          {
            "id": "q9",
            "prompt": "Czym myjemy podłogę?",
            "accepted": [
              "mopem"
            ]
          },
          {
            "id": "q10",
            "prompt": "Czym obcinamy paznokcie?",
            "accepted": [
              "nożyczkami do paznokci"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "p2-l01-e10",
        "sourceExerciseId": "WB2-L01-E10",
        "kind": "choice",
        "instruction": "Wybierz właściwą konstrukcję.",
        "items": [
          {
            "id": "q1",
            "prompt": "spotykają się ___ nauczycielami",
            "accepted": [
              "z"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q2",
            "prompt": "pojedziesz do domu ___ pociągiem",
            "accepted": [
              "—"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q3",
            "prompt": "pojadę ___ autobusem",
            "accepted": [
              "—"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q4",
            "prompt": "bawi się ___ klockami Lego",
            "accepted": [
              "—"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q5",
            "prompt": "bawi się ___ psem",
            "accepted": [
              "z"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q6",
            "prompt": "mamy kłopoty ___ pieniędzmi",
            "accepted": [
              "z"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q7",
            "prompt": "pisze ___ czarnym pisakiem",
            "accepted": [
              "—"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q8",
            "prompt": "interesuje się ___ tą dziewczyną",
            "accepted": [
              "—"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q9",
            "prompt": "został ___ kierownikiem przychodni",
            "accepted": [
              "—"
            ],
            "options": [
              "z",
              "—"
            ]
          },
          {
            "id": "q10",
            "prompt": "została ___ chorą babcią",
            "accepted": [
              "z"
            ],
            "options": [
              "z",
              "—"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "p2-l01-e11",
        "sourceExerciseId": "WB2-L01-E11",
        "kind": "typed",
        "instruction": "Wpisz formę zaimka w narzędniku.",
        "items": [
          {
            "id": "q1",
            "prompt": "ja",
            "accepted": [
              "mną"
            ]
          },
          {
            "id": "q2",
            "prompt": "ty",
            "accepted": [
              "tobą"
            ]
          },
          {
            "id": "q3",
            "prompt": "on",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q4",
            "prompt": "ona",
            "accepted": [
              "nią"
            ]
          },
          {
            "id": "q5",
            "prompt": "ono",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q6",
            "prompt": "my",
            "accepted": [
              "nami"
            ]
          },
          {
            "id": "q7",
            "prompt": "wy",
            "accepted": [
              "wami"
            ]
          },
          {
            "id": "q8",
            "prompt": "oni",
            "accepted": [
              "nimi"
            ]
          },
          {
            "id": "q9",
            "prompt": "one",
            "accepted": [
              "nimi"
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "p2-l01-e12",
        "sourceExerciseId": "WB2-L01-E12",
        "kind": "typed",
        "instruction": "Wpisz przyimek pasujący do zdania.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czy ktoś rozmawiał ___ profesorem?",
            "accepted": [
              "z"
            ]
          },
          {
            "id": "q2",
            "prompt": "Pilot leży ___ fotelem.",
            "accepted": [
              "pod"
            ]
          },
          {
            "id": "q3",
            "prompt": "Obraz stoi ___ szafą.",
            "accepted": [
              "za"
            ]
          },
          {
            "id": "q4",
            "prompt": "Ktoś zaparkował ___ naszym domem.",
            "accepted": [
              "przed"
            ]
          },
          {
            "id": "q5",
            "prompt": "Torba leży ___ waszymi butami.",
            "accepted": [
              "między"
            ]
          },
          {
            "id": "q6",
            "prompt": "Czy musisz spędzać weekend ___ domem?",
            "accepted": [
              "poza"
            ]
          },
          {
            "id": "q7",
            "prompt": "Idziesz ___ mną do teatru?",
            "accepted": [
              "ze",
              "z"
            ]
          },
          {
            "id": "q8",
            "prompt": "___ moim domem regularnie latają samoloty.",
            "accepted": [
              "nad"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "p2-l01-e13",
        "sourceExerciseId": "WB2-L01-E13",
        "kind": "typed",
        "instruction": "Uzupełnij zdania zaimkiem w narzędniku.",
        "items": [
          {
            "id": "q1",
            "prompt": "Chciałabym jechać z ___ (wy) na wakacje.",
            "accepted": [
              "wami"
            ]
          },
          {
            "id": "q2",
            "prompt": "Czy wiesz, że Piotr interesuje się ___ (ty)?",
            "accepted": [
              "tobą"
            ]
          },
          {
            "id": "q3",
            "prompt": "Czy zjesz z ___ (my) obiad?",
            "accepted": [
              "nami"
            ]
          },
          {
            "id": "q4",
            "prompt": "Rozmawiałam z ___ (one), ale bez rezultatu.",
            "accepted": [
              "nimi"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zgadzam się z ___ (on).",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q6",
            "prompt": "Chcesz pojechać ze ___ (ja) taksówką?",
            "accepted": [
              "mną"
            ]
          },
          {
            "id": "q7",
            "prompt": "Rodzice mają z ___ (ono) sporo problemów.",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q8",
            "prompt": "Chciał jechać z ___ (oni) na narty.",
            "accepted": [
              "nimi"
            ]
          },
          {
            "id": "q9",
            "prompt": "Pokłóciłam się z ___ (ona).",
            "accepted": [
              "nią"
            ]
          }
        ]
      }
    ]
  },
  "29": {
    "id": 29,
    "title": "Teatr żywych fotografii",
    "activities": [
      {
        "index": 0,
        "id": "p2-l03-e01",
        "sourceExerciseId": "WB2-L03-E01",
        "kind": "typed",
        "instruction": "Uzupełnij przyimki w opowiadaniu.",
        "items": [
          {
            "id": "q1",
            "prompt": "Polecieć ___ tydzień ___ Berlina.",
            "accepted": [
              "na; do"
            ]
          },
          {
            "id": "q2",
            "prompt": "Na przykład ___ styczniu, bo ___ zimie jest mało turystów.",
            "accepted": [
              "w; w"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mogłabym mieszkać ___ mojej przyjaciółki Agaty.",
            "accepted": [
              "u"
            ]
          },
          {
            "id": "q4",
            "prompt": "Ona jest ___ Warszawy, ale ___ kilku lat mieszka ___ Berlinie.",
            "accepted": [
              "z; od; w"
            ]
          },
          {
            "id": "q5",
            "prompt": "Pracowała ___ uniwersytecie, a teraz ___ prywatnej szkole.",
            "accepted": [
              "na; w"
            ]
          },
          {
            "id": "q6",
            "prompt": "Mogę nocować ___ hostelu albo ___ Antje.",
            "accepted": [
              "w; u"
            ]
          },
          {
            "id": "q7",
            "prompt": "Kiedy Agata będzie ___ pracy, pójdę ___ muzeum albo ___ spacer.",
            "accepted": [
              "w; do; na"
            ]
          },
          {
            "id": "q8",
            "prompt": "Pójdziemy razem ___ piwo albo ___ restauracji ___ kolację.",
            "accepted": [
              "na; do; na"
            ]
          },
          {
            "id": "q9",
            "prompt": "Pójdziemy ___ zakupy ___ galerii handlowej.",
            "accepted": [
              "na; do"
            ]
          },
          {
            "id": "q10",
            "prompt": "Czekam ___ e-mail ___ Agaty.",
            "accepted": [
              "na; od"
            ]
          },
          {
            "id": "q11",
            "prompt": "Rezerwuję bilet ___ samolot. Latają bezpośrednio ___ Krakowa.",
            "accepted": [
              "na; z"
            ]
          },
          {
            "id": "q12",
            "prompt": "Nigdy nie byłam ___ Niemczech. Byłam kilka godzin ___ lotnisku ___ Frankfurcie.",
            "accepted": [
              "w; na; we"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "p2-l03-e02",
        "sourceExerciseId": "WB2-L03-E02",
        "kind": "typed",
        "instruction": "Wpisz poprawną formę liczebnika porządkowego.",
        "items": [
          {
            "id": "q1",
            "prompt": "Na ___ idziemy do kina? (która)",
            "accepted": [
              "którą"
            ]
          },
          {
            "id": "q2",
            "prompt": "Umówiliśmy się na ___ . (ósma)",
            "accepted": [
              "ósmą"
            ]
          },
          {
            "id": "q3",
            "prompt": "Na pewno? Nie na ___? (szósta)",
            "accepted": [
              "szóstą"
            ]
          },
          {
            "id": "q4",
            "prompt": "Pamiętam, że po ___ . (siódma)",
            "accepted": [
              "siódmej"
            ]
          },
          {
            "id": "q5",
            "prompt": "O ___ zaczyna się seans. (ósma)",
            "accepted": [
              "ósmej"
            ]
          },
          {
            "id": "q6",
            "prompt": "Spotkanie jest przed ___ . (ósma)",
            "accepted": [
              "ósmą"
            ]
          },
          {
            "id": "q7",
            "prompt": "Może między ___ a ___? (siódma, ósma)",
            "accepted": [
              "siódmą; ósmą"
            ]
          },
          {
            "id": "q8",
            "prompt": "Jutro mam pociąg o ___ rano. (siódma)",
            "accepted": [
              "siódmej"
            ]
          },
          {
            "id": "q9",
            "prompt": "Seans przed ___? (osiemnasta)",
            "accepted": [
              "osiemnastą"
            ]
          },
          {
            "id": "q10",
            "prompt": "Spotykamy się po ___ . (siedemnasta)",
            "accepted": [
              "siedemnastej"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "p2-l03-e03",
        "sourceExerciseId": "WB2-L03-E03",
        "kind": "typed",
        "instruction": "Wpisz nazwę opisanego miejsca lub pojęcia.",
        "items": [
          {
            "id": "q1",
            "prompt": "Miejsce, gdzie kupuje się bilety",
            "accepted": [
              "kasa"
            ]
          },
          {
            "id": "q2",
            "prompt": "Film z lokalną wersją językową",
            "accepted": [
              "dubbingowany"
            ]
          },
          {
            "id": "q3",
            "prompt": "Film z oryginalną ścieżką i tekstem na ekranie",
            "accepted": [
              "z napisami"
            ]
          },
          {
            "id": "q4",
            "prompt": "Urządzenie regulujące temperaturę w sali",
            "accepted": [
              "klimatyzacja"
            ]
          },
          {
            "id": "q5",
            "prompt": "Prostokąt, na którym wyświetla się film",
            "accepted": [
              "ekran"
            ]
          },
          {
            "id": "q6",
            "prompt": "Miejsce w rzędzie kina",
            "accepted": [
              "miejsce"
            ]
          },
          {
            "id": "q7",
            "prompt": "Opinia krytyka, np. w gazecie",
            "accepted": [
              "recenzja"
            ]
          },
          {
            "id": "q8",
            "prompt": "Duży pokój w kinie",
            "accepted": [
              "sala"
            ]
          },
          {
            "id": "q9",
            "prompt": "Projekcja filmu",
            "accepted": [
              "seans"
            ]
          },
          {
            "id": "q10",
            "prompt": "Bilet ze zniżką",
            "accepted": [
              "ulgowy"
            ]
          },
          {
            "id": "q11",
            "prompt": "Linia foteli w sali",
            "accepted": [
              "rząd"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "p2-l03-e04",
        "sourceExerciseId": "WB2-L03-E04",
        "kind": "typed",
        "instruction": "Ułóż zdania z podanych słów.",
        "items": [
          {
            "id": "q1",
            "prompt": "Bilety · kasa",
            "accepted": [
              "Bilety kupujemy w kasie."
            ]
          },
          {
            "id": "q2",
            "prompt": "Zaczynać się · seans",
            "accepted": [
              "O której zaczyna się seans?"
            ]
          },
          {
            "id": "q3",
            "prompt": "Film · recenzje",
            "accepted": [
              "Czytałam, że ten film ma świetne recenzje."
            ]
          },
          {
            "id": "q4",
            "prompt": "Emeryt · bilet ulgowy",
            "accepted": [
              "Jestem emerytem, proszę bilet ulgowy."
            ]
          },
          {
            "id": "q5",
            "prompt": "Rząd piąty · miejsca drugie i trzecie",
            "accepted": [
              "Rząd piąty, miejsca drugie i trzecie."
            ]
          },
          {
            "id": "q6",
            "prompt": "Film · dubbingowany · napisy",
            "accepted": [
              "Czy ten film jest dubbingowany, czy z napisami?"
            ]
          },
          {
            "id": "q7",
            "prompt": "Sala · klimatyzacja",
            "accepted": [
              "Czy w sali jest klimatyzacja?"
            ]
          },
          {
            "id": "q8",
            "prompt": "Kino · największy ekran",
            "accepted": [
              "To kino ma największy ekran w Polsce."
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "p2-l03-e05",
        "sourceExerciseId": "WB2-L03-E05",
        "kind": "typed",
        "instruction": "Ułóż dialog z nagrania w odpowiedniej kolejności.",
        "items": [
          {
            "id": "q1",
            "prompt": "Pracownik · powitanie",
            "accepted": [
              "Kino „Relax”, słucham?"
            ]
          },
          {
            "id": "q2",
            "prompt": "Klient · prośba o informację",
            "accepted": [
              "Dzień dobry. Mam pytanie. Czy osoba niepełnosprawna może bez problemu dostać się do sali kinowej?"
            ]
          },
          {
            "id": "q3",
            "prompt": "Pracownik · dostępność",
            "accepted": [
              "Oczywiście, w budynku znajduje się winda."
            ]
          },
          {
            "id": "q4",
            "prompt": "Klient · zakup biletów",
            "accepted": [
              "W takim razie proszę dwa bilety, w tym jeden ulgowy."
            ]
          },
          {
            "id": "q5",
            "prompt": "Klient · pytanie o zniżkę",
            "accepted": [
              "Czy jest zniżka dla opiekuna?"
            ]
          },
          {
            "id": "q6",
            "prompt": "Pracownik · odpowiedź",
            "accepted": [
              "Niestety, nie ma. Musi pan kupić bilet normalny."
            ]
          },
          {
            "id": "q7",
            "prompt": "Klient · pytanie o odbiór",
            "accepted": [
              "Do której godziny muszę odebrać bilety?"
            ]
          },
          {
            "id": "q8",
            "prompt": "Pracownik · rezerwacja",
            "accepted": [
              "Rezerwacja automatycznie wygasa 30 minut przed seansem."
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "p2-l03-e06",
        "sourceExerciseId": "WB2-L03-E06",
        "kind": "match",
        "instruction": "Połącz wyrażenie z jego znaczeniem.",
        "items": [
          {
            "id": "q1",
            "prompt": "z brzegu",
            "accepted": [
              "końcowe miejsce w rzędzie"
            ],
            "options": [
              "zniżka w cenie",
              "końcowe miejsce w rzędzie",
              "opiekun",
              "winda",
              "dojechać"
            ]
          },
          {
            "id": "q2",
            "prompt": "dostać się",
            "accepted": [
              "dojechać, dojść"
            ],
            "options": [
              "zniżka w cenie",
              "końcowe miejsce w rzędzie",
              "opiekun",
              "winda",
              "dojechać, dojść"
            ]
          },
          {
            "id": "q3",
            "prompt": "winda",
            "accepted": [
              "pomaga wejść bez schodów"
            ],
            "options": [
              "zniżka w cenie",
              "pomaga wejść bez schodów",
              "opiekun",
              "końcowe miejsce w rzędzie",
              "dojechać"
            ]
          },
          {
            "id": "q4",
            "prompt": "zniżka",
            "accepted": [
              "ulga, redukcja ceny"
            ],
            "options": [
              "ulga, redukcja ceny",
              "końcowe miejsce w rzędzie",
              "opiekun",
              "winda",
              "dojechać"
            ]
          },
          {
            "id": "q5",
            "prompt": "opiekun",
            "accepted": [
              "osoba, która pomaga innym"
            ],
            "options": [
              "zniżka w cenie",
              "końcowe miejsce w rzędzie",
              "osoba, która pomaga innym",
              "winda",
              "dojechać"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "p2-l03-e07",
        "sourceExerciseId": "WB2-L03-E07",
        "kind": "typed",
        "instruction": "Posłuchaj nagrania i uzupełnij dialog.",
        "items": [
          {
            "id": "q1",
            "prompt": "Dzień ___ .",
            "accepted": [
              "dobry"
            ]
          },
          {
            "id": "q2",
            "prompt": "Chciałbym ___ pięć biletów.",
            "accepted": [
              "zarezerwować"
            ]
          },
          {
            "id": "q3",
            "prompt": "Na ___?",
            "accepted": [
              "kiedy"
            ]
          },
          {
            "id": "q4",
            "prompt": "Na ___ po południu.",
            "accepted": [
              "sobotę"
            ]
          },
          {
            "id": "q5",
            "prompt": "Który ___?",
            "accepted": [
              "rząd"
            ]
          },
          {
            "id": "q6",
            "prompt": "Czy są miejsca ___?",
            "accepted": [
              "w środku"
            ]
          },
          {
            "id": "q7",
            "prompt": "Są tylko miejsca ___ brzegu.",
            "accepted": [
              "z"
            ]
          },
          {
            "id": "q8",
            "prompt": "Do kiedy muszę ___ bilety?",
            "accepted": [
              "odebrać"
            ]
          },
          {
            "id": "q9",
            "prompt": "Rezerwacja ___ 15 minut przed seansem.",
            "accepted": [
              "wygasa"
            ]
          },
          {
            "id": "q10",
            "prompt": "15 minut przed ___.",
            "accepted": [
              "seansem"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "p2-l03-e08",
        "sourceExerciseId": "WB2-L03-E08",
        "kind": "typed",
        "instruction": "Uzupełnij słowa z nagrań w kolejności.",
        "items": [
          {
            "id": "q1",
            "prompt": "Recenzja A · 6 słów",
            "accepted": [
              "premiera; na podstawie; powieści; adaptację; reżysera; fanów"
            ]
          },
          {
            "id": "q2",
            "prompt": "Recenzja B · 6 słów",
            "accepted": [
              "tytułem; aktorów; bohaterów; spojrzenie; nagród; festiwalach"
            ]
          },
          {
            "id": "q3",
            "prompt": "Recenzja C · 5 słów",
            "accepted": [
              "kultowy; kamery; obsada; arcydzieło; komedia"
            ]
          },
          {
            "id": "q4",
            "prompt": "Recenzja D · 5 wyrażeń",
            "accepted": [
              "rolę; wcielił się; rozgrywa się; przebój; widzów"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "p2-l03-e09",
        "sourceExerciseId": "WB2-L03-E09",
        "kind": "typed",
        "instruction": "Wybierz lub wpisz formę zaimka w celowniku.",
        "items": [
          {
            "id": "q1",
            "prompt": "ja",
            "accepted": [
              "mi",
              "mnie"
            ]
          },
          {
            "id": "q2",
            "prompt": "ty",
            "accepted": [
              "ci",
              "tobie"
            ]
          },
          {
            "id": "q3",
            "prompt": "on",
            "accepted": [
              "mu",
              "niemu",
              "jemu"
            ]
          },
          {
            "id": "q4",
            "prompt": "ona",
            "accepted": [
              "jej",
              "niej"
            ]
          },
          {
            "id": "q5",
            "prompt": "my",
            "accepted": [
              "nam"
            ]
          },
          {
            "id": "q6",
            "prompt": "wy",
            "accepted": [
              "wam"
            ]
          },
          {
            "id": "q7",
            "prompt": "oni",
            "accepted": [
              "im",
              "nim"
            ]
          },
          {
            "id": "q8",
            "prompt": "one",
            "accepted": [
              "im",
              "nim"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "p2-l03-e10",
        "sourceExerciseId": "WB2-L03-E10",
        "kind": "typed",
        "instruction": "Ułóż życzenia według wskazówek.",
        "items": [
          {
            "id": "q1",
            "prompt": "My → młoda para · być szczęśliwym",
            "accepted": [
              "Życzymy im, żeby byli szczęśliwi."
            ]
          },
          {
            "id": "q2",
            "prompt": "Mama → ja · być zdrowym",
            "accepted": [
              "Mama zawsze życzy mi, żebym była zdrowa."
            ]
          },
          {
            "id": "q3",
            "prompt": "Ja → ty · być wesołym i uśmiechniętym",
            "accepted": [
              "Życzę ci, żebyś był wesoły i uśmiechnięty."
            ]
          },
          {
            "id": "q4",
            "prompt": "Stefan → kolega · mieć dużo przyjaciół",
            "accepted": [
              "Stefan życzy mu, żeby miał dużo przyjaciół."
            ]
          },
          {
            "id": "q5",
            "prompt": "Babcia → wnuczka · lubić szkołę",
            "accepted": [
              "Babcia życzy jej, żeby lubiła szkołę."
            ]
          },
          {
            "id": "q6",
            "prompt": "Oni → my · móc pojechać do USA",
            "accepted": [
              "Oni życzą nam, żebyśmy mogli pojechać do USA."
            ]
          },
          {
            "id": "q7",
            "prompt": "Szef → wy · szybko wejść na rynek",
            "accepted": [
              "Szef życzy wam, żebyście szybko weszli na rynek."
            ]
          },
          {
            "id": "q8",
            "prompt": "Koleżanka → koleżanki · nie jeść za dużo",
            "accepted": [
              "Koleżanka życzy im, żeby nie jadły za dużo."
            ]
          },
          {
            "id": "q9",
            "prompt": "Tata → dziecko · myśleć nie tylko o sobie",
            "accepted": [
              "Tata życzy mu, żeby myślało nie tylko o sobie."
            ]
          },
          {
            "id": "q10",
            "prompt": "Ja → oni · pójść na studia",
            "accepted": [
              "Życzę im, żeby poszli na studia."
            ]
          }
        ]
      }
    ]
  },
  "32": {
    "id": 32,
    "title": "Edukacja",
    "activities": [
      {
        "index": 0,
        "id": "p2-l06-e01",
        "sourceExerciseId": "WB2-L06-E01",
        "kind": "match",
        "instruction": "Dopasuj wyrazy i polecenia do objaśnień.",
        "items": [
          {
            "id": "q1",
            "prompt": "A · bezprzewodowy Internet",
            "accepted": [
              "Wi-Fi"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q2",
            "prompt": "A · hasło",
            "accepted": [
              "słowo lub kod pozwalający wejść na konto"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q3",
            "prompt": "A · użytkownik",
            "accepted": [
              "osoba korzystająca z konta"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q4",
            "prompt": "A · ikonka",
            "accepted": [
              "obrazek reprezentujący plik lub program"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q5",
            "prompt": "A · przeglądarka",
            "accepted": [
              "program do otwierania stron internetowych"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q6",
            "prompt": "A · zalogować się",
            "accepted": [
              "wejść na swoje konto"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q7",
            "prompt": "A · edytor tekstu",
            "accepted": [
              "program do pisania i edytowania tekstu"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q8",
            "prompt": "A · pulpit",
            "accepted": [
              "ekran z ikonami"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q9",
            "prompt": "A · link",
            "accepted": [
              "adres prowadzący do pliku lub strony"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q10",
            "prompt": "A · dysk",
            "accepted": [
              "nośnik do przechowywania informacji"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q11",
            "prompt": "B · wyślij",
            "accepted": [
              "maile"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q12",
            "prompt": "B · usuń",
            "accepted": [
              "niepotrzebny fragment tekstu"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q13",
            "prompt": "B · zapisz",
            "accepted": [
              "zmiany w tekście"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q14",
            "prompt": "B · wklej",
            "accepted": [
              "obrazek"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q15",
            "prompt": "B · wyłącz",
            "accepted": [
              "monitor, kiedy robisz przerwę"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q16",
            "prompt": "B · zaloguj się",
            "accepted": [
              "na portalu do nauki języka"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q17",
            "prompt": "B · odbierz",
            "accepted": [
              "pocztę"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q18",
            "prompt": "B · włącz",
            "accepted": [
              "komputer"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          },
          {
            "id": "q19",
            "prompt": "B · kliknij",
            "accepted": [
              "na link"
            ],
            "options": [
              "Wi-Fi",
              "słowo lub kod pozwalający wejść na konto",
              "osoba korzystająca z konta",
              "obrazek reprezentujący plik lub program",
              "program do otwierania stron internetowych",
              "wejść na swoje konto",
              "program do pisania i edytowania tekstu",
              "ekran z ikonami",
              "adres prowadzący do pliku lub strony",
              "nośnik do przechowywania informacji",
              "maile",
              "niepotrzebny fragment tekstu",
              "zmiany w tekście",
              "obrazek",
              "monitor, kiedy robisz przerwę",
              "na portalu do nauki języka",
              "pocztę",
              "komputer",
              "na link"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "p2-l06-e02",
        "sourceExerciseId": "WB2-L06-E02",
        "kind": "typed",
        "instruction": "Wpisz brakujące słowo z listy.",
        "items": [
          {
            "id": "q1",
            "prompt": "Aby skorzystać ze szkolnego komputera, wpisz nazwę ___.",
            "accepted": [
              "użytkownika"
            ]
          },
          {
            "id": "q2",
            "prompt": "Zepsuła mi się ___ i nie mogę wydrukować dokumentów.",
            "accepted": [
              "drukarka"
            ]
          },
          {
            "id": "q3",
            "prompt": "Masz bardzo ładne zdjęcie na ___.",
            "accepted": [
              "pulpicie"
            ]
          },
          {
            "id": "q4",
            "prompt": "Mam komputer ___.",
            "accepted": [
              "przenośny"
            ]
          },
          {
            "id": "q5",
            "prompt": "Wysyłam panu kilka interesujących ___ do stron.",
            "accepted": [
              "linków"
            ]
          },
          {
            "id": "q6",
            "prompt": "Nie mogę się zalogować, bo nie pamiętam ___.",
            "accepted": [
              "hasła"
            ]
          },
          {
            "id": "q7",
            "prompt": "Proszę zapisać to na twardym ___.",
            "accepted": [
              "dysku"
            ]
          },
          {
            "id": "q8",
            "prompt": "Laptop się rozładował, a ___ zostawiłem w domu.",
            "accepted": [
              "zasilacz"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "p2-l06-e03",
        "sourceExerciseId": "WB2-L06-E03",
        "kind": "typed",
        "instruction": "Posłuchaj dziewięciu krótkich wypowiedzi i uzupełnij zdania.",
        "items": [
          {
            "id": "q1",
            "prompt": "Czego zwykle ___ w czasie pracy?",
            "accepted": [
              "używasz"
            ]
          },
          {
            "id": "q2",
            "prompt": "Jak wszyscy ___ wszystkim komputera.",
            "accepted": [
              "przede"
            ]
          },
          {
            "id": "q3",
            "prompt": "Do pracy potrzebuję też ___ .",
            "accepted": [
              "internetu"
            ]
          },
          {
            "id": "q4",
            "prompt": "Moim głównym zadaniem jest ___ kontakt z klientami.",
            "accepted": [
              "mailowy"
            ]
          },
          {
            "id": "q5",
            "prompt": "Z jakich ___ komputerowych najczęściej korzystasz?",
            "accepted": [
              "programów"
            ]
          },
          {
            "id": "q6",
            "prompt": "Jestem ___, więc najczęściej korzystam z edytora tekstu.",
            "accepted": [
              "uczennicą"
            ]
          },
          {
            "id": "q7",
            "prompt": "Korzystam z edytora ___ i programów do robienia prezentacji multimedialnych.",
            "accepted": [
              "tekstu"
            ]
          },
          {
            "id": "q8",
            "prompt": "Programów do robienia ___ multimedialnych.",
            "accepted": [
              "prezentacji"
            ]
          },
          {
            "id": "q9",
            "prompt": "Czego ___ student do nauki języka polskiego?",
            "accepted": [
              "potrzebuje"
            ]
          },
          {
            "id": "q10",
            "prompt": "Przede wszystkim ___ i dobrego nauczyciela!",
            "accepted": [
              "motywacji"
            ]
          },
          {
            "id": "q11",
            "prompt": "Reszta to ___.",
            "accepted": [
              "dodatek"
            ]
          },
          {
            "id": "q12",
            "prompt": "Czego zwykle ___ w Internecie?",
            "accepted": [
              "szukasz"
            ]
          },
          {
            "id": "q13",
            "prompt": "___ każdy — informacji.",
            "accepted": [
              "Jak"
            ]
          },
          {
            "id": "q14",
            "prompt": "Szukam też dobrych ___.",
            "accepted": [
              "ofert"
            ]
          },
          {
            "id": "q15",
            "prompt": "To bardzo ___ życie.",
            "accepted": [
              "ułatwia"
            ]
          },
          {
            "id": "q16",
            "prompt": "___ zagrożenia niesie ze sobą Internet?",
            "accepted": [
              "Jakie"
            ]
          },
          {
            "id": "q17",
            "prompt": "Ludzie najczęściej ___ o dzieci.",
            "accepted": [
              "boją się"
            ]
          },
          {
            "id": "q18",
            "prompt": "Mówią o łatwym ___ do niepożądanych treści.",
            "accepted": [
              "dostępie"
            ]
          },
          {
            "id": "q19",
            "prompt": "___ zagrożeniem jest to, że Internet wciąga.",
            "accepted": [
              "największym"
            ]
          },
          {
            "id": "q20",
            "prompt": "Internet zabiera ___, wreszcie uzależnia.",
            "accepted": [
              "czas"
            ]
          },
          {
            "id": "q21",
            "prompt": "Czy dzieci powinny ___ z Internetu samodzielnie?",
            "accepted": [
              "korzystać"
            ]
          },
          {
            "id": "q22",
            "prompt": "To zawsze jest ___.",
            "accepted": [
              "problem"
            ]
          },
          {
            "id": "q23",
            "prompt": "W Internecie przez ___ można wejść na nieodpowiednie strony.",
            "accepted": [
              "przypadek"
            ]
          },
          {
            "id": "q24",
            "prompt": "Można wejść na nieodpowiednie ___.",
            "accepted": [
              "strony"
            ]
          },
          {
            "id": "q25",
            "prompt": "Samodzielność może się ___ skończyć.",
            "accepted": [
              "źle"
            ]
          },
          {
            "id": "q26",
            "prompt": "Co ___ o blokowaniu stron przez rodziców i pracodawców?",
            "accepted": [
              "sądzisz"
            ]
          },
          {
            "id": "q27",
            "prompt": "___ rodzice są okropni.",
            "accepted": [
              "Moi"
            ]
          },
          {
            "id": "q28",
            "prompt": "Zablokowali mi ___ do części stron w Internecie.",
            "accepted": [
              "dostęp"
            ]
          },
          {
            "id": "q29",
            "prompt": "To bez sensu, ___ będę chciał, to pójdę do kolegi.",
            "accepted": [
              "jak"
            ]
          },
          {
            "id": "q30",
            "prompt": "I ___ na te strony.",
            "accepted": [
              "wejdę"
            ]
          },
          {
            "id": "q31",
            "prompt": "Czy zakupy w ___ są bezpieczne?",
            "accepted": [
              "sieci"
            ]
          },
          {
            "id": "q32",
            "prompt": "Myślę, że tak, ___ nigdy nie korzystam z tej możliwości.",
            "accepted": [
              "chociaż"
            ]
          },
          {
            "id": "q33",
            "prompt": "Produkty spożywcze wolę ___, ubrania przymierzyć.",
            "accepted": [
              "obejrzeć"
            ]
          },
          {
            "id": "q34",
            "prompt": "Jednym słowem jestem ___, który chce wszystkiego dotknąć.",
            "accepted": [
              "klientem"
            ]
          },
          {
            "id": "q35",
            "prompt": "Co sądzisz na ___ portali społecznościowych?",
            "accepted": [
              "temat"
            ]
          },
          {
            "id": "q36",
            "prompt": "Według ___ te portale zmieniły naszą codzienność.",
            "accepted": [
              "mnie"
            ]
          },
          {
            "id": "q37",
            "prompt": "Jedni ___, że na minus.",
            "accepted": [
              "mówią"
            ]
          },
          {
            "id": "q38",
            "prompt": "Inni, że na ___.",
            "accepted": [
              "plus"
            ]
          },
          {
            "id": "q39",
            "prompt": "Wszyscy się zgadzają, że to ___.",
            "accepted": [
              "rewolucja"
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "p2-l06-e04",
        "sourceExerciseId": "WB2-L06-E04",
        "kind": "typed",
        "instruction": "Uzupełnij przyimki i właściwe formy wyrazów.",
        "items": [
          {
            "id": "q1",
            "prompt": "To moja fotografia ___ liceum.",
            "accepted": [
              "z"
            ]
          },
          {
            "id": "q2",
            "prompt": "Siedzę ___ pierwszej ławce.",
            "accepted": [
              "w"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mam ___ sobie biały golf.",
            "accepted": [
              "na"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ ławce ___ mnie siedzi Marta.",
            "accepted": [
              "w; obok",
              "w, obok",
              "w; koło",
              "w, koło"
            ]
          },
          {
            "id": "q5",
            "prompt": "Marta jest ubrana ___ koszulę ___ kratę.",
            "accepted": [
              "w; w"
            ]
          },
          {
            "id": "q6",
            "prompt": "Marta pisze coś ___ zeszycie.",
            "accepted": [
              "w"
            ]
          },
          {
            "id": "q7",
            "prompt": "___ nią siedzi Tomek.",
            "accepted": [
              "za"
            ]
          },
          {
            "id": "q8",
            "prompt": "Tomek jest ___ swetrze ___ paski.",
            "accepted": [
              "w; w"
            ]
          },
          {
            "id": "q9",
            "prompt": "Za mną Ilona — ta ___ długimi włosami.",
            "accepted": [
              "z"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "p2-l06-e05",
        "sourceExerciseId": "WB2-L06-E05",
        "kind": "typed",
        "instruction": "Wpisz odpowiednią formę rzeczownika.",
        "items": [
          {
            "id": "q1",
            "prompt": "Studniówka to bal w ___ średniej. (szkoła)",
            "accepted": [
              "szkole"
            ]
          },
          {
            "id": "q2",
            "prompt": "Odbywa się sto dni przed ___. (matura)",
            "accepted": [
              "maturą"
            ]
          },
          {
            "id": "q3",
            "prompt": "Na ___ bawią się razem nauczyciele i uczniowie. (studniówka)",
            "accepted": [
              "studniówce"
            ]
          },
          {
            "id": "q4",
            "prompt": "Na balu bawią się ___ i uczniowie. (nauczyciel, l.mn.)",
            "accepted": [
              "nauczyciele"
            ]
          },
          {
            "id": "q5",
            "prompt": "Na balu bawią się nauczyciele i ___. (uczeń, l.mn.)",
            "accepted": [
              "uczniowie"
            ]
          },
          {
            "id": "q6",
            "prompt": "Pierwszym ___ jest zawsze polonez. (taniec)",
            "accepted": [
              "tańcem"
            ]
          },
          {
            "id": "q7",
            "prompt": "Polonez współczesny Wojciecha Kilara pochodzi z ___ „Pan Tadeusz”. (film)",
            "accepted": [
              "filmu"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "p2-l06-e06",
        "sourceExerciseId": "WB2-L06-E06",
        "kind": "typed",
        "instruction": "Utwórz rzeczownik od podanego czasownika.",
        "items": [
          {
            "id": "q1",
            "prompt": "utrzymać",
            "accepted": [
              "utrzymanie"
            ]
          },
          {
            "id": "q2",
            "prompt": "spotkać",
            "accepted": [
              "spotkanie"
            ]
          },
          {
            "id": "q3",
            "prompt": "pisać",
            "accepted": [
              "pisanie"
            ]
          },
          {
            "id": "q4",
            "prompt": "oglądać",
            "accepted": [
              "oglądanie"
            ]
          },
          {
            "id": "q5",
            "prompt": "malować",
            "accepted": [
              "malowanie"
            ]
          },
          {
            "id": "q6",
            "prompt": "surfować",
            "accepted": [
              "surfowanie"
            ]
          },
          {
            "id": "q7",
            "prompt": "czatować",
            "accepted": [
              "czatowanie"
            ]
          },
          {
            "id": "q8",
            "prompt": "siedzieć",
            "accepted": [
              "siedzenie"
            ]
          },
          {
            "id": "q9",
            "prompt": "uczyć się",
            "accepted": [
              "uczenie się"
            ]
          },
          {
            "id": "q10",
            "prompt": "spóźnić się",
            "accepted": [
              "spóźnienie się"
            ]
          },
          {
            "id": "q11",
            "prompt": "jeść",
            "accepted": [
              "jedzenie"
            ]
          },
          {
            "id": "q12",
            "prompt": "pić",
            "accepted": [
              "picie"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "p2-l06-e07",
        "sourceExerciseId": "WB2-L06-E07",
        "kind": "typed",
        "instruction": "Wpisz rzeczownik odczasownikowy w odpowiedniej formie.",
        "items": [
          {
            "id": "q1",
            "prompt": "Mam dużo rzeczy do ___ . (zrobić)",
            "accepted": [
              "zrobienia"
            ]
          },
          {
            "id": "q2",
            "prompt": "Proszę o ___ tego fragmentu. (usunąć)",
            "accepted": [
              "usunięcie"
            ]
          },
          {
            "id": "q3",
            "prompt": "Po ___ się proszę uzupełnić ankietę. (zalogować)",
            "accepted": [
              "zalogowaniu"
            ]
          },
          {
            "id": "q4",
            "prompt": "Czy to auto jest do ___? (sprzedać)",
            "accepted": [
              "sprzedania"
            ]
          },
          {
            "id": "q5",
            "prompt": "Proszę o ___ tego maila na podany adres. (wysłać)",
            "accepted": [
              "wysłanie"
            ]
          },
          {
            "id": "q6",
            "prompt": "Przed ___ projektu nie będę mieć czasu. (skończyć)",
            "accepted": [
              "skończeniem"
            ]
          },
          {
            "id": "q7",
            "prompt": "Chciałbym prosić o ___ urlopu. (przedłużyć)",
            "accepted": [
              "przedłużenie"
            ]
          },
          {
            "id": "q8",
            "prompt": "Zachęcam was do ___ z portalu. (korzystać)",
            "accepted": [
              "korzystania"
            ]
          },
          {
            "id": "q9",
            "prompt": "Proszę o ___ okien. (zamknąć)",
            "accepted": [
              "zamknięcie"
            ]
          },
          {
            "id": "q10",
            "prompt": "Po ___ egzaminu nie ma mowy o ___ okien. (zdać, czekać)",
            "accepted": [
              "zdaniu; czekaniu",
              "zdaniu, czekaniu"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "p2-l06-e08",
        "sourceExerciseId": "WB2-L06-E08",
        "kind": "choice",
        "instruction": "Wybierz odpowiednie słowo.",
        "items": [
          {
            "id": "q1",
            "prompt": "Gdzie mam zapisać ten ___? Na dysku.",
            "accepted": [
              "dokument"
            ],
            "options": [
              "dokument",
              "hasło",
              "drukarka"
            ]
          },
          {
            "id": "q2",
            "prompt": "Jakiej ___ internetowej najczęściej używasz?",
            "accepted": [
              "przeglądarki"
            ],
            "options": [
              "przeglądarki",
              "drukarki",
              "matury"
            ]
          },
          {
            "id": "q3",
            "prompt": "Mam zepsutą ___, czy mogłabyś mi wydrukować te dwie strony?",
            "accepted": [
              "drukarkę"
            ],
            "options": [
              "drukarkę",
              "przeglądarkę",
              "klawiaturę"
            ]
          },
          {
            "id": "q4",
            "prompt": "Egzamin dojrzałości po liceum to ___.",
            "accepted": [
              "matura"
            ],
            "options": [
              "matura",
              "licencjat",
              "indeks"
            ]
          },
          {
            "id": "q5",
            "prompt": "Uważaj, skasowałeś ten schemat, daj szybko ___.",
            "accepted": [
              "cofnij"
            ],
            "options": [
              "cofnij",
              "zapisz",
              "drukuj"
            ]
          },
          {
            "id": "q6",
            "prompt": "Dlaczego moja ___ jest taka brudna?",
            "accepted": [
              "klawiatura"
            ],
            "options": [
              "klawiatura",
              "drukarka",
              "przeglądarka"
            ]
          },
          {
            "id": "q7",
            "prompt": "Nie będę kontynuować studiów, nie muszę być magistrem, ___ mi wystarczy.",
            "accepted": [
              "licencjat"
            ],
            "options": [
              "licencjat",
              "indeks",
              "lektorat"
            ]
          },
          {
            "id": "q8",
            "prompt": "Chcę studiować na ___ Sztuk Pięknych.",
            "accepted": [
              "Akademii"
            ],
            "options": [
              "Akademii",
              "drukarce",
              "pulpicie"
            ]
          },
          {
            "id": "q9",
            "prompt": "Wykształcenie to inaczej ___.",
            "accepted": [
              "edukacja"
            ],
            "options": [
              "edukacja",
              "hasło",
              "link"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "p2-l06-e09",
        "sourceExerciseId": "WB2-L06-E09",
        "kind": "choice",
        "instruction": "Wybierz wyraz, który nie pasuje do pozostałych.",
        "items": [
          {
            "id": "q1",
            "prompt": "egzamin na koniec liceum",
            "accepted": [
              "test kompetencji"
            ],
            "options": [
              "matura",
              "egzamin dojrzałości",
              "test kompetencji"
            ]
          },
          {
            "id": "q2",
            "prompt": "wykształcenie wyższe",
            "accepted": [
              "matura"
            ],
            "options": [
              "licencjat",
              "matura",
              "magisterium"
            ]
          },
          {
            "id": "q3",
            "prompt": "uczelnia wyższa",
            "accepted": [
              "studium"
            ],
            "options": [
              "studium",
              "akademia",
              "politechnika"
            ]
          },
          {
            "id": "q4",
            "prompt": "dokument studenta",
            "accepted": [
              "spis przedmiotów"
            ],
            "options": [
              "indeks",
              "książeczka z ocenami",
              "spis przedmiotów"
            ]
          },
          {
            "id": "q5",
            "prompt": "lektorat",
            "accepted": [
              "czytanie tekstów"
            ],
            "options": [
              "czytanie tekstów",
              "lekcja języka",
              "zajęcia językowe"
            ]
          },
          {
            "id": "q6",
            "prompt": "„skasuj” to inaczej",
            "accepted": [
              "cofnij"
            ],
            "options": [
              "usuń",
              "wytnij",
              "cofnij"
            ]
          },
          {
            "id": "q7",
            "prompt": "dodaj nowy element",
            "accepted": [
              "kopiuj"
            ],
            "options": [
              "kopiuj",
              "wstaw",
              "wklej"
            ]
          }
        ]
      }
    ]
  },
  "40": {
    "id": 40,
    "title": "Zaduszki",
    "activities": [
      {
        "index": 0,
        "id": "p2-l14-e01",
        "sourceExerciseId": "WB2-L14-E01",
        "kind": "typed",
        "instruction": "Wpisz nazwę miejsca, przedmiotu lub elementu pomnika.",
        "items": [
          {
            "id": "q1",
            "prompt": "Hasło 1",
            "accepted": [
              "cmentarz"
            ]
          },
          {
            "id": "q2",
            "prompt": "Hasło 2",
            "accepted": [
              "znicz"
            ]
          },
          {
            "id": "q3",
            "prompt": "Hasło 3",
            "accepted": [
              "wieniec"
            ]
          },
          {
            "id": "q4",
            "prompt": "Hasło 4",
            "accepted": [
              "grób"
            ]
          },
          {
            "id": "q5",
            "prompt": "Hasło 5",
            "accepted": [
              "krzyż"
            ]
          },
          {
            "id": "q6",
            "prompt": "Hasło 6",
            "accepted": [
              "chryzantemy"
            ]
          },
          {
            "id": "q7",
            "prompt": "Hasło 7",
            "accepted": [
              "pomnik"
            ]
          },
          {
            "id": "q8",
            "prompt": "Hasło 8",
            "accepted": [
              "kaplica"
            ]
          },
          {
            "id": "q9",
            "prompt": "Hasło 9",
            "accepted": [
              "anioł"
            ]
          },
          {
            "id": "q10",
            "prompt": "Hasło 10",
            "accepted": [
              "rzeźba"
            ]
          }
        ]
      },
      {
        "index": 1,
        "id": "p2-l14-e02-choice",
        "sourceExerciseId": "WB2-L14-E02",
        "kind": "choice",
        "instruction": "Wybierz wyrażenie pasujące do czasownika lub rzeczownika.",
        "items": [
          {
            "id": "q1",
            "prompt": "obchodzić",
            "accepted": [
              "święto"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q2",
            "prompt": "zapalać",
            "accepted": [
              "znicze"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q3",
            "prompt": "wstawiać kwiaty",
            "accepted": [
              "do wazonu"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q4",
            "prompt": "zamiatać",
            "accepted": [
              "groby"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q5",
            "prompt": "modlić się",
            "accepted": [
              "za zmarłych"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q6",
            "prompt": "pamiętać",
            "accepted": [
              "o zmarłych"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q7",
            "prompt": "wspominać",
            "accepted": [
              "zmarłych"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q8",
            "prompt": "dekorować",
            "accepted": [
              "groby"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q9",
            "prompt": "kultywować",
            "accepted": [
              "tradycje"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q10",
            "prompt": "uroczystość",
            "accepted": [
              "religijna"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q11",
            "prompt": "święto",
            "accepted": [
              "Wszystkich Świętych"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q12",
            "prompt": "miejsce",
            "accepted": [
              "pamięci narodowej"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q13",
            "prompt": "grób",
            "accepted": [
              "rodzinny"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          },
          {
            "id": "q14",
            "prompt": "składać kwiaty",
            "accepted": [
              "pod pomnikiem"
            ],
            "options": [
              "święto",
              "znicze",
              "do wazonu",
              "groby",
              "za zmarłych",
              "o zmarłych",
              "zmarłych",
              "tradycje",
              "religijna",
              "Wszystkich Świętych",
              "pamięci narodowej",
              "rodzinny",
              "pod pomnikiem"
            ]
          }
        ]
      },
      {
        "index": 2,
        "id": "p2-l14-e03",
        "sourceExerciseId": "WB2-L14-E03",
        "kind": "typed",
        "instruction": "Ułóż fragmenty w kolejności i zapisz tekst.",
        "items": [
          {
            "id": "q1",
            "prompt": "Początek opisu",
            "accepted": [
              "Cmentarz Salwatorski to niewielka, ale ważna nekropolia Krakowa."
            ]
          },
          {
            "id": "q2",
            "prompt": "Położenie",
            "accepted": [
              "Położona jest w malowniczym zakątku, niemal u stóp Kopca Kościuszki."
            ]
          },
          {
            "id": "q3",
            "prompt": "Aleja i widok",
            "accepted": [
              "Leży przy popularnej wśród Krakowian alei spacerowej, a z niej roztacza się panorama na miasto i okolice."
            ]
          },
          {
            "id": "q4",
            "prompt": "Znani pochowani",
            "accepted": [
              "Cmentarz jest miejscem spoczynku wielu krakowskich artystów, pisarzy i naukowców."
            ]
          },
          {
            "id": "q5",
            "prompt": "Stanisław Lem",
            "accepted": [
              "Wśród znanych nazwisk wyróżnia się Stanisław Lem, jeden z najbardziej znanych polskich pisarzy."
            ]
          }
        ]
      },
      {
        "index": 3,
        "id": "p2-l14-e04",
        "sourceExerciseId": "WB2-L14-E04",
        "kind": "typed",
        "instruction": "Posłuchaj dialogu i uzupełnij słowa.",
        "items": [
          {
            "id": "q1",
            "prompt": "To ___ rzeźba.",
            "accepted": [
              "jaka"
            ]
          },
          {
            "id": "q2",
            "prompt": "To ___ chłopiec z „Umarłej klasy”.",
            "accepted": [
              "bosy"
            ]
          },
          {
            "id": "q3",
            "prompt": "Na pomniku widać ___ i postać chłopca.",
            "accepted": [
              "krzyż"
            ]
          },
          {
            "id": "q4",
            "prompt": "To ___ Tadeusza Kantora.",
            "accepted": [
              "dzieło"
            ]
          },
          {
            "id": "q5",
            "prompt": "Ta ___ nawiązuje do jego spektaklu.",
            "accepted": [
              "kompozycja"
            ]
          },
          {
            "id": "q6",
            "prompt": "Był twórcą ___ Cricot 2.",
            "accepted": [
              "Teatru"
            ]
          },
          {
            "id": "q7",
            "prompt": "Artysta ustawił rzeźbę na matki ___.",
            "accepted": [
              "grobie"
            ]
          }
        ]
      },
      {
        "index": 4,
        "id": "p2-l14-e05",
        "sourceExerciseId": "WB2-L14-E05",
        "kind": "choice",
        "instruction": "Wybierz słowo o innym znaczeniu.",
        "items": [
          {
            "id": "q1",
            "prompt": "wolno",
            "accepted": [
              "warto"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q2",
            "prompt": "zakazany",
            "accepted": [
              "nakazany"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q3",
            "prompt": "pozwolić",
            "accepted": [
              "zwolnić"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q4",
            "prompt": "pasjonat",
            "accepted": [
              "protektor"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q5",
            "prompt": "zjazd",
            "accepted": [
              "przejazd"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q6",
            "prompt": "niezwykły",
            "accepted": [
              "nienadzwyczajny"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q7",
            "prompt": "zatłoczony",
            "accepted": [
              "zajęty"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          },
          {
            "id": "q8",
            "prompt": "ponury",
            "accepted": [
              "poważny"
            ],
            "options": [
              "warto",
              "nakazany",
              "zwolnić",
              "protektor",
              "przejazd",
              "nienadzwyczajny",
              "zajęty",
              "poważny"
            ]
          }
        ]
      },
      {
        "index": 5,
        "id": "p2-l14-e06",
        "sourceExerciseId": "WB2-L14-E06",
        "kind": "typed",
        "instruction": "Uzupełnij zdania wyrazami z listy.",
        "items": [
          {
            "id": "q1",
            "prompt": "Literaci walczyli z ___ cenzurą.",
            "accepted": [
              "wszechobecną"
            ]
          },
          {
            "id": "q2",
            "prompt": "Myślą ___ tegorocznego seminarium jest walka z rakiem.",
            "accepted": [
              "przewodnią"
            ]
          },
          {
            "id": "q3",
            "prompt": "Uczniowie przygotowali ___ sztuki Mrożka.",
            "accepted": [
              "inscenizację"
            ]
          },
          {
            "id": "q4",
            "prompt": "Strajkom w kopalniach towarzyszyły ___ na ulicach.",
            "accepted": [
              "demonstracje"
            ]
          },
          {
            "id": "q5",
            "prompt": "W czasach komunizmu ludzi męczyło ___ władz.",
            "accepted": [
              "zakłamanie"
            ]
          },
          {
            "id": "q6",
            "prompt": "Pijany kierowca wjechał na kobietę — to był ___ widok.",
            "accepted": [
              "straszny"
            ]
          },
          {
            "id": "q7",
            "prompt": "Manifestacja to ___ na życie w takich warunkach.",
            "accepted": [
              "niezgoda"
            ]
          },
          {
            "id": "q8",
            "prompt": "Po ostatnich podwyżkach cen ludzie znów ___.",
            "accepted": [
              "wyszli na ulicę"
            ]
          },
          {
            "id": "q9",
            "prompt": "Hasła wolnościowe miały ___ cały naród.",
            "accepted": [
              "zagrzewać do walki"
            ]
          },
          {
            "id": "q10",
            "prompt": "„___, ale nie pamiętam co.”",
            "accepted": [
              "Coś mi to mówi"
            ]
          },
          {
            "id": "q11",
            "prompt": "Uczymy się do egzaminu, teraz ___ gramatykę historyczną.",
            "accepted": [
              "mamy na tapecie"
            ]
          },
          {
            "id": "q12",
            "prompt": "W wielu krajach ludzie wciąż muszą walczyć o ___.",
            "accepted": [
              "wolność słowa"
            ]
          }
        ]
      },
      {
        "index": 6,
        "id": "p2-l14-e07",
        "sourceExerciseId": "WB2-L14-E07",
        "kind": "typed",
        "instruction": "Uzupełnij zdanie właściwym przyimkiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "Niezgoda ___ rząd.",
            "accepted": [
              "na"
            ]
          },
          {
            "id": "q2",
            "prompt": "Protest ___ podwyżkom.",
            "accepted": [
              "wobec"
            ]
          },
          {
            "id": "q3",
            "prompt": "Wyreżyserowany ___ znanego artystę.",
            "accepted": [
              "przez"
            ]
          },
          {
            "id": "q4",
            "prompt": "Brać udział ___ demonstracji.",
            "accepted": [
              "w"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zagrzewać ___ walki.",
            "accepted": [
              "do"
            ]
          }
        ]
      },
      {
        "index": 7,
        "id": "p2-l14-e08",
        "sourceExerciseId": "WB2-L14-E08",
        "kind": "typed",
        "instruction": "Podaj brakującą formę wyrazu.",
        "items": [
          {
            "id": "q1",
            "prompt": "czasownik: protestować",
            "accepted": [
              "protest"
            ]
          },
          {
            "id": "q2",
            "prompt": "czasownik: rządzić",
            "accepted": [
              "rząd"
            ]
          },
          {
            "id": "q3",
            "prompt": "czasownik: inscenizować",
            "accepted": [
              "inscenizacja"
            ]
          },
          {
            "id": "q4",
            "prompt": "rzeczownik: demonstracja",
            "accepted": [
              "demonstrować"
            ]
          },
          {
            "id": "q5",
            "prompt": "rzeczownik: manifestacja",
            "accepted": [
              "manifestować"
            ]
          },
          {
            "id": "q6",
            "prompt": "rzeczownik: zakłamanie",
            "accepted": [
              "kłamać"
            ]
          },
          {
            "id": "q7",
            "prompt": "rzeczownik: niezgoda",
            "accepted": [
              "nie zgadzać się"
            ]
          },
          {
            "id": "q8",
            "prompt": "rzeczownik: niepokój",
            "accepted": [
              "niepokoić się"
            ]
          },
          {
            "id": "q9",
            "prompt": "rzeczownik: dominacja",
            "accepted": [
              "dominować"
            ]
          }
        ]
      },
      {
        "index": 8,
        "id": "p2-l14-e09",
        "sourceExerciseId": "WB2-L14-E09",
        "kind": "typed",
        "instruction": "Uzupełnij wypowiedź słowami z nagrania.",
        "items": [
          {
            "id": "q1",
            "prompt": "Prawdę ___, niewiele wiedziałem o polskiej historii.",
            "accepted": [
              "mówiąc"
            ]
          },
          {
            "id": "q2",
            "prompt": "Nie interesowałem się ___ kraju.",
            "accepted": [
              "przeszłością"
            ]
          },
          {
            "id": "q3",
            "prompt": "Uczyłem się języka ___ względu na rodzinę żony.",
            "accepted": [
              "ze"
            ]
          },
          {
            "id": "q4",
            "prompt": "___ dwa filmy o historii Polski.",
            "accepted": [
              "Obejrzałem"
            ]
          },
          {
            "id": "q5",
            "prompt": "Zobaczyłem fragment peerelowskiej ___.",
            "accepted": [
              "rzeczywistości"
            ]
          },
          {
            "id": "q6",
            "prompt": "Czarne momenty ___ grudnia 1970 roku.",
            "accepted": [
              "z"
            ]
          },
          {
            "id": "q7",
            "prompt": "Bezwzględność władzy, która każe strzelać do ___.",
            "accepted": [
              "robotników"
            ]
          },
          {
            "id": "q8",
            "prompt": "Zrozumiałem siłę, która tkwi w ___ ludzkiej.",
            "accepted": [
              "solidarności"
            ]
          }
        ]
      },
      {
        "index": 9,
        "id": "p2-l14-e10",
        "sourceExerciseId": "WB2-L14-E10",
        "kind": "typed",
        "instruction": "Wpisz rzeczownik w odpowiedniej formie.",
        "items": [
          {
            "id": "q1",
            "prompt": "brak + wolność",
            "accepted": [
              "brak wolności"
            ]
          },
          {
            "id": "q2",
            "prompt": "hipokryzja + władza",
            "accepted": [
              "hipokryzja władzy"
            ]
          },
          {
            "id": "q3",
            "prompt": "ograniczanie + swobody",
            "accepted": [
              "ograniczanie swobód"
            ]
          },
          {
            "id": "q4",
            "prompt": "cenzura",
            "accepted": [
              "cenzura"
            ]
          },
          {
            "id": "q5",
            "prompt": "nieprzestrzeganie + prawo",
            "accepted": [
              "nieprzestrzeganie prawa"
            ]
          },
          {
            "id": "q6",
            "prompt": "podwyżka + ceny",
            "accepted": [
              "podwyżki cen"
            ]
          },
          {
            "id": "q7",
            "prompt": "puste półki",
            "accepted": [
              "puste półki"
            ]
          }
        ]
      },
      {
        "index": 10,
        "id": "p2-l14-e11",
        "sourceExerciseId": "WB2-L14-E11",
        "kind": "typed",
        "instruction": "Wpisz właściwą formę zaimka.",
        "items": [
          {
            "id": "q1",
            "prompt": "Byli przeciwko tym decyzjom. → Byli przeciwko ___.",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q2",
            "prompt": "Stoję przy dziecku. → Stoję przy ___.",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q3",
            "prompt": "Według ojca powinna to zrobić. → Według ___ powinna to zrobić.",
            "accepted": [
              "niego"
            ]
          },
          {
            "id": "q4",
            "prompt": "Zrobił to wbrew matce. → Zrobił to wbrew ___.",
            "accepted": [
              "niej"
            ]
          },
          {
            "id": "q5",
            "prompt": "Będę tam przed tobą i Ewą. → Będę tam przed ___.",
            "accepted": [
              "wami"
            ]
          },
          {
            "id": "q6",
            "prompt": "Zakochała się w Marcinie. → Zakochała się w ___.",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q7",
            "prompt": "To jest ode mnie i babci. → To jest od ___.",
            "accepted": [
              "nas"
            ]
          },
          {
            "id": "q8",
            "prompt": "Zepsuło się przez Elę i Basię. → Zepsuło się przez ___.",
            "accepted": [
              "nie"
            ]
          },
          {
            "id": "q9",
            "prompt": "Nie pójdę bez brata i siostry. → Nie pójdę bez ___.",
            "accepted": [
              "nich"
            ]
          },
          {
            "id": "q10",
            "prompt": "Pójdziesz z Zosią i ze mną. → Pójdziesz z ___.",
            "accepted": [
              "nami"
            ]
          }
        ]
      },
      {
        "index": 11,
        "id": "p2-l14-e12",
        "sourceExerciseId": "WB2-L14-E12",
        "kind": "typed",
        "instruction": "Zamień błędną formę na poprawną.",
        "items": [
          {
            "id": "q1",
            "prompt": "Bądź uprzejmy wobec ja.",
            "accepted": [
              "Bądź uprzejmy wobec mnie."
            ]
          },
          {
            "id": "q2",
            "prompt": "Poszliśmy bez jego.",
            "accepted": [
              "Poszliśmy bez niego."
            ]
          },
          {
            "id": "q3",
            "prompt": "To jest od tobie.",
            "accepted": [
              "To jest od ciebie."
            ]
          },
          {
            "id": "q4",
            "prompt": "Rozmawialiśmy o jej.",
            "accepted": [
              "Rozmawialiśmy o niej."
            ]
          },
          {
            "id": "q5",
            "prompt": "Według wami to prawda?",
            "accepted": [
              "Według was to prawda?"
            ]
          },
          {
            "id": "q6",
            "prompt": "Zimno ciebie?",
            "accepted": [
              "Zimno ci?"
            ]
          },
          {
            "id": "q7",
            "prompt": "Czy to dla im?",
            "accepted": [
              "Czy to dla nich?"
            ]
          },
          {
            "id": "q8",
            "prompt": "Czekacie na nami?",
            "accepted": [
              "Czekacie na nas?"
            ]
          }
        ]
      },
      {
        "index": 12,
        "id": "p2-l14-e13",
        "sourceExerciseId": "WB2-L14-E13",
        "kind": "typed",
        "instruction": "Uzupełnij zaimek zwrotny lub osobowy.",
        "items": [
          {
            "id": "q1",
            "prompt": "Ewa myślała ___ . (o Krysi)",
            "accepted": [
              "o niej"
            ]
          },
          {
            "id": "q2",
            "prompt": "Krysia myślała o ___ . (o Krysi)",
            "accepted": [
              "sobie"
            ]
          },
          {
            "id": "q3",
            "prompt": "Jurek i Dorota rozmawiali o ___ . (o Przemku)",
            "accepted": [
              "nim"
            ]
          },
          {
            "id": "q4",
            "prompt": "Przemek i Beata rozmawiali o ___ . (o nich)",
            "accepted": [
              "sobie"
            ]
          },
          {
            "id": "q5",
            "prompt": "Karol robił to dla ___ . (dla rodziców)",
            "accepted": [
              "nich"
            ]
          },
          {
            "id": "q6",
            "prompt": "Karolina robiła to dla ___ . (dla Karoliny)",
            "accepted": [
              "siebie"
            ]
          },
          {
            "id": "q7",
            "prompt": "Ania i Rysiek nie chcieli rozmawiać z ___ . (z Krysią)",
            "accepted": [
              "nią"
            ]
          },
          {
            "id": "q8",
            "prompt": "Krystyna i Ania nie chciały rozmawiać ze ___ . (z sobą)",
            "accepted": [
              "sobą"
            ]
          }
        ]
      },
      {
        "index": 13,
        "id": "p2-l14-e14",
        "sourceExerciseId": "WB2-L14-E14",
        "kind": "typed",
        "instruction": "Uzupełnij zdanie właściwym zaimkiem.",
        "items": [
          {
            "id": "q1",
            "prompt": "Nie mogę ___ z tym poradzić.",
            "accepted": [
              "sobie"
            ]
          },
          {
            "id": "q2",
            "prompt": "Nie rozmawiali ze ___.",
            "accepted": [
              "sobą"
            ]
          },
          {
            "id": "q3",
            "prompt": "Oni byli szczerzy wobec ___.",
            "accepted": [
              "siebie"
            ]
          },
          {
            "id": "q4",
            "prompt": "Dziadek zajmował się ___.",
            "accepted": [
              "sobą"
            ]
          },
          {
            "id": "q5",
            "prompt": "Nie rób niczego wbrew ___.",
            "accepted": [
              "sobie"
            ]
          },
          {
            "id": "q6",
            "prompt": "Robisz to dla mnie czy dla ___?",
            "accepted": [
              "siebie"
            ]
          },
          {
            "id": "q7",
            "prompt": "Byli zakochani w ___.",
            "accepted": [
              "sobie"
            ]
          },
          {
            "id": "q8",
            "prompt": "Jest skoncentrowany na ___.",
            "accepted": [
              "sobie"
            ]
          }
        ]
      },
      {
        "index": 14,
        "id": "p2-l14-e15-match",
        "sourceExerciseId": "WB2-L14-E15",
        "kind": "match",
        "instruction": "Dopasuj wyrażenie do znaczenia.",
        "items": [
          {
            "id": "q1",
            "prompt": "brać coś na siebie",
            "accepted": [
              "być za coś odpowiedzialnym"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q2",
            "prompt": "wychodzić z siebie",
            "accepted": [
              "bardzo się denerwować"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q3",
            "prompt": "być targanym emocjami",
            "accepted": [
              "silnie przeżywać uczucia"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q4",
            "prompt": "czas pokaże",
            "accepted": [
              "wszystko wyjaśni się z czasem"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q5",
            "prompt": "inwigilować",
            "accepted": [
              "szpiegować, śledzić"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q6",
            "prompt": "mam wrażenie",
            "accepted": [
              "wydaje mi się"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q7",
            "prompt": "wyłącznie",
            "accepted": [
              "jedynie, tylko"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q8",
            "prompt": "dochodzi coś do mnie",
            "accepted": [
              "zaczynam to rozumieć"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          },
          {
            "id": "q9",
            "prompt": "być skoncentrowanym na sobie",
            "accepted": [
              "myśleć głównie o sobie"
            ],
            "options": [
              "być za coś odpowiedzialnym",
              "bardzo się denerwować",
              "silnie przeżywać uczucia",
              "wszystko wyjaśni się z czasem",
              "szpiegować, śledzić",
              "wydaje mi się",
              "jedynie, tylko",
              "zaczynam to rozumieć",
              "myśleć głównie o sobie"
            ]
          }
        ]
      },
      {
        "index": 15,
        "id": "p2-l14-e16",
        "sourceExerciseId": "WB2-L14-E16",
        "kind": "typed",
        "instruction": "Posłuchaj nagrania i uzupełnij brakujące zaimki.",
        "items": [
          {
            "id": "q1",
            "prompt": "Fragment nagrania 1",
            "accepted": [
              "im"
            ]
          },
          {
            "id": "q2",
            "prompt": "Fragment nagrania 2",
            "accepted": [
              "nimi"
            ]
          },
          {
            "id": "q3",
            "prompt": "Fragment nagrania 3",
            "accepted": [
              "tobą"
            ]
          },
          {
            "id": "q4",
            "prompt": "Fragment nagrania 4",
            "accepted": [
              "sobie"
            ]
          },
          {
            "id": "q5",
            "prompt": "Fragment nagrania 5",
            "accepted": [
              "nami"
            ]
          },
          {
            "id": "q6",
            "prompt": "Fragment nagrania 6",
            "accepted": [
              "siebie"
            ]
          },
          {
            "id": "q7",
            "prompt": "Fragment nagrania 7",
            "accepted": [
              "ciebie"
            ]
          },
          {
            "id": "q8",
            "prompt": "Fragment nagrania 8",
            "accepted": [
              "nas"
            ]
          },
          {
            "id": "q9",
            "prompt": "Fragment nagrania 9",
            "accepted": [
              "mi"
            ]
          },
          {
            "id": "q10",
            "prompt": "Fragment nagrania 10",
            "accepted": [
              "mnie"
            ]
          },
          {
            "id": "q11",
            "prompt": "Fragment nagrania 11",
            "accepted": [
              "ciebie"
            ]
          },
          {
            "id": "q12",
            "prompt": "Fragment nagrania 12",
            "accepted": [
              "mnie"
            ]
          },
          {
            "id": "q13",
            "prompt": "Fragment nagrania 13",
            "accepted": [
              "ja"
            ]
          },
          {
            "id": "q14",
            "prompt": "Fragment nagrania 14",
            "accepted": [
              "ciebie"
            ]
          },
          {
            "id": "q15",
            "prompt": "Fragment nagrania 15",
            "accepted": [
              "mnie"
            ]
          }
        ]
      },
      {
        "index": 16,
        "id": "p2-l14-e17",
        "sourceExerciseId": "WB2-L14-E17",
        "kind": "typed",
        "instruction": "Wydaj polecenie w odpowiedniej osobie.",
        "items": [
          {
            "id": "q1",
            "prompt": "kupić (ty)",
            "accepted": [
              "Kup"
            ]
          },
          {
            "id": "q2",
            "prompt": "iść (my)",
            "accepted": [
              "Chodźmy"
            ]
          },
          {
            "id": "q3",
            "prompt": "przynieść (wy)",
            "accepted": [
              "Przynieście"
            ]
          },
          {
            "id": "q4",
            "prompt": "pozamiatać (ty)",
            "accepted": [
              "Pozamiataj"
            ]
          },
          {
            "id": "q5",
            "prompt": "umyć (wy)",
            "accepted": [
              "Umyjcie"
            ]
          },
          {
            "id": "q6",
            "prompt": "zapalić (on)",
            "accepted": [
              "Niech on zapali"
            ]
          },
          {
            "id": "q7",
            "prompt": "położyć (ty)",
            "accepted": [
              "Połóż"
            ]
          },
          {
            "id": "q8",
            "prompt": "pomodlić się (my)",
            "accepted": [
              "Pomódlmy się"
            ]
          }
        ]
      }
    ]
  }
};

export function getLessonFixture(lessonId) {
  return LESSON_FIXTURES[String(lessonId)];
}

export function getActivityFixture(lessonId, index) {
  const lesson = getLessonFixture(lessonId);
  if (!lesson) throw new Error(`No fixture for lesson ${lessonId}`);
  const act = lesson.activities[index];
  if (!act) throw new Error(`No activity [${index}] in lesson ${lessonId}`);
  return act;
}
