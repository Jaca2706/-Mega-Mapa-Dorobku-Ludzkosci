export const historyData = [

  // ================= EPOKI =================
  {
    id: "antyk",
    type: "epoch",
    title: "Antyk",
    description: [ "W centrum zainteresowania stał człowiek, jego rozum i harmonia świata. Mitologia ukazywała bogów ingerujących w życie ludzi. Powstały podstawy filozofii i teatru."
    ]
  },

  {
    id: "sredniowiecze",
    type: "epoch",
    title: "Średniowiecze",
    description: [
      "Teocentryzm – Bóg w centrum życia. Literatura religijna i dydaktyczna. Życie ziemskie przygotowaniem do wieczności. Hasło: memento mori."
    ]
  },

  {
    id: "renesans",
    type: "epoch",
    title: "Renesans",
    description: [
      "„Odrodzenie” antyku. Człowiek w centrum uwagi, wiara w możliwość kształtowania własnego losu. Rozwój nauki, sztuki i literatury."
    ]
  },

  {
    id: "barok",
    type: "epoch",
    title: "Barok",
    description: [
      "Epoka kontrastów – życie i śmierć, ciało i dusza. Motyw vanitas (marność). Poczucie przemijania i kruchości życia."
    ]
  },

  {
    id: "oswiecenie",
    type: "epoch",
    title: "Oświecenie",
    description: [
      "Rozum i nauka w centrum. Literatura miała uczyć, poprawiać społeczeństwo i krytykować wady. Motto: „myśl samodzielnie”."
    ]
  },

  {
    id: "romantyzm",
    type: "epoch",
    title: "Romantyzm",
    description: [
      "Uczucia, wyobraźnia, wolność. Polska pod zaborami – literatura patriotyczna. Poeta jako przywódca narodu. Motywy nadprzyrodzone i nieszczęśliwa miłość."
    ]
  },

  {
    id: "pozytywizm",
    type: "epoch",
    title: "Pozytywizm",
    description: [
      "Praca, nauka, rozwój społeczeństwa. Literatura realistyczna. Hasła: praca u podstaw, praca organiczna. Zamiast walki – rozwój."
    ]
  },

  {
    id: "mloda-polska",
    type: "epoch",
    title: "Młoda Polska",
    description: [
      "Emocje, sztuka, pesymizm. Dekadentyzm – poczucie kryzysu i bezsensu życia. Hasło: sztuka dla sztuki."
    ]
  },

  {
    id: "dwudziestolecie-miedzywojenne",
    type: "epoch",
    title: "Dwudziestolecie międzywojenne",
    description: [
      " Odzyskana niepodległość, wolność twórcza, eksperymenty literackie. Różnorodność stylów i form."
    ]
  },

  {
    id: "wojna-i-okupacja",
    type: "epoch",
    title: "Wojna i okupacja",
    description: [
      "Literatura jako świadectwo tragedii wojny, cierpienia i walki o przetrwanie. Pamięć i prawda o okupacji."
    ]
  },

  {
    id: "wspolczesnosc",
    type: "epoch",
    title: "Współczesność",
    description: [
      "Brak jednego stylu – ogromna różnorodność. Autorzy poruszają tematy historyczne, egzystencjalne i współczesne. Pełna wolność twórcza."
    ]
  },

  // ================= DZIEŁA =================

  // --- Antyk ---
  {
    id: "iliada",
    type: "work",
    title: "Iliada",
    author: "Homer",
    epoch: "antyk",
    year: -750,
    description: "Epos heroiczny opowiadający o ostatnim roku wojny trojańskiej. Główny bohater: Achilles – gniewny i dumny wojownik.",
    time: { start: -750, label: "ok. 750 p.n.e." },
    country: "Grecja",
    categories: ["epos", "epika"]
  },
  {
    id: "odyseja",
    type: "work",
    title: "Odyseja",
    author: "Homer",
    epoch: "antyk",
    year: -725,
    description: "Opowieść o tułaczce Odyseusza po wojnie trojańskiej i jego powrocie do Itaki.",
    time: { start: -725, label: "ok. 725 p.n.e." },
    country: "Grecja",
    categories: ["epos", "epika"]
  },
  {
    id: "antygona",
    type: "work",
    title: "Antygona",
    author: "Sofokles",
    epoch: "antyk",
    year: -442,
    description: "Tragedia o konflikcie prawa państwowego i prawa boskiego. Tytułowa bohaterka przeciwstawia się władcy.",
    time: { start: -442, label: "442 p.n.e." },
    country: "Grecja",
    categories: ["dramat", "tragedia"]
  },
  {
    id: "metamorfozy",
    type: "work",
    title: "Metamorfozy",
    author: "Owidiusz",
    epoch: "antyk",
    year: 8,
    description: "Zbiór mitów o przemianach bohaterów w rośliny, zwierzęta lub gwiazdy.",
    time: { start: 8, label: "8 n.e." },
    country: "Rzym",
    categories: ["epos", "mitologia"]
  },

  // --- Średniowiecze ---
  {
    id: "bogurodzica",
    type: "work",
    title: "Bogurodzica",
    author: "nieznany",
    epoch: "sredniowiecze",
    year: 1200,
    description: "Najstarsza polska pieśń religijna, śpiewana podczas bitew i uroczystości.",
    time: { start: 1200, label: "XIII wiek" },
    country: "Polska",
    categories: ["pieśń", "liryka"]
  },
  {
    id: "rozkaz",
    type: "work",
    title: "Rozmowa mistrza Polikarpa ze Śmiercią",
    author: "nieznany",
    epoch: "sredniowiecze",
    year: 1400,
    description: "Dialog moralizatorski, w którym Śmierć ukazuje człowiekowi marność doczesności.",
    time: { start: 1400, label: "ok. 1400" },
    country: "Polska",
    categories: ["dialog", "liryka"]
  },
  {
    id: "tristan",
    type: "work",
    title: "Tristan i Izolda",
    author: "nieznany",
    epoch: "sredniowiecze",
    year: 1170,
    description: "Romans rycerski o zakazanej miłości, która prowadzi do tragicznego końca.",
    time: { start: 1170, label: "XII wiek" },
    country: "Francja",
    categories: ["romans", "epika"]
  },

  // --- Renesans ---
  {
    id: "treny",
    type: "work",
    title: "Treny",
    author: "Jan Kochanowski",
    epoch: "renesans",
    year: 1580,
    description: "Cykl 19 trenów poświęconych zmarłej córce Urszuli. Ewolucja od rozpaczy do pocieszenia.",
    time: { start: 1580, label: "1580" },
    country: "Polska",
    categories: ["tren", "liryka"]
  },
  {
    id: "pieśni",
    type: "work",
    title: "Pieśni",
    author: "Jan Kochanowski",
    epoch: "renesans",
    year: 1580,
    description: "Zbiór utworów lirycznych o tematyce miłosnej, refleksyjnej i patriotycznej.",
    time: { start: 1580, label: "1580" },
    country: "Polska",
    categories: ["pieśń", "liryka"]
  },
  {
    id: "makbet",
    type: "work",
    title: "Makbet",
    author: "William Szekspir",
    epoch: "renesans",
    year: 1606,
    description: "Tragedia o żądzy władzy, która prowadzi do zbrodni i obłędu.",
    time: { start: 1606, label: "1606" },
    country: "Anglia",
    categories: ["dramat", "tragedia"]
  },

  // --- Barok ---
  {
    id: "dziennik",
    type: "work",
    title: "Pamiętniki",
    author: "Jan Chryzostom Pasek",
    epoch: "barok",
    year: 1660,
    description: "Gawęda szlachecka, barwne opisy życia i zwyczajów sarmackich.",
    time: { start: 1660, label: "ok. 1660" },
    country: "Polska",
    categories: ["pamiętnik", "epika", "gawęda"]
  },
  {
    id: "donkiszot",
    type: "work",
    title: "Don Kichot",
    author: "Miguel de Cervantes",
    epoch: "barok",
    year: 1605,
    description: "Powieść o szlachcicu, który pod wpływem lektur rycerskich wyrusza w świat, by walczyć z niesprawiedliwością.",
    time: { start: 1605, label: "1605" },
    country: "Hiszpania",
    categories: ["powieść", "epika", "parodia"]
  },

  // --- Oświecenie ---
  {
    id: "kandyd",
    type: "work",
    title: "Kandyd",
    author: "Wolter",
    epoch: "oswiecenie",
    year: 1759,
    description: "Satyra filozoficzna krytykująca optymizm. Tytułowy bohater przekonuje się, że „wszystko jest dobrze” to kłamstwo.",
    time: { start: 1759, label: "1759" },
    country: "Francja",
    categories: ["powieść", "satyra", "filozofia"]
  },
  {
    id: "monachomachia",
    type: "work",
    title: "Monachomachia",
    author: "Ignacy Krasicki",
    epoch: "oswiecenie",
    year: 1778,
    description: "Poemat heroikomiczny ośmieszający zakonników i ich spory.",
    time: { start: 1778, label: "1778" },
    country: "Polska",
    categories: ["poemat", "satyra"]
  },

  // --- Romantyzm ---
  {
    id: "dziady",
    type: "work",
    title: "Dziady",
    author: "Adam Mickiewicz",
    epoch: "romantyzm",
    year: 1832,
    description: "Dramat romantyczny łączący realizm z fantastyką. Motyw dziadów – pogańskiego obrzędu przywołania duchów.",
    time: { start: 1832, label: "1832" },
    country: "Polska",
    categories: ["dramat", "romantyzm"]
  },
  {
    id: "pan-tadeusz",
    type: "work",
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    epoch: "romantyzm",
    year: 1834,
    description: "Epopeja narodowa. Obraz życia szlachty na Litwie w 1811 roku.",
    time: { start: 1834, label: "1834" },
    country: "Polska",
    categories: ["epos", "epika", "epopeja"]
  },
  {
    id: "kordian",
    type: "work",
    title: "Kordian",
    author: "Juliusz Słowacki",
    epoch: "romantyzm",
    year: 1834,
    description: "Dramat o rozczarowanym powstaniu listopadowym. Główny bohater to typowy bohater bajroniczny.",
    time: { start: 1834, label: "1834" },
    country: "Polska",
    categories: ["dramat", "romantyzm"]
  },

  // --- Pozytywizm ---
  {
    id: "lalka",
    type: "work",
    title: "Lalka",
    author: "Bolesław Prus",
    epoch: "pozytywizm",
    year: 1890,
    description: "Powieść realistyczna o niespełnionej miłości kupca warszawskiego.",
    time: { start: 1890, label: "1890" },
    country: "Polska",
    categories: ["powieść", "realizm"]
  },
  {
    id: "faraon",
    type: "work",
    title: "Faraon",
    author: "Bolesław Prus",
    epoch: "pozytywizm",
    year: 1895,
    description: "Powieść historyczna o starożytnym Egipcie i mechanizmach władzy.",
    time: { start: 1895, label: "1895" },
    country: "Polska",
    categories: ["powieść", "historyczna"]
  },
  {
    id: "nad-niemnem",
    type: "work",
    title: "Nad Niemnem",
    author: "Eliza Orzeszkowa",
    epoch: "pozytywizm",
    year: 1888,
    description: "Powieść o życiu szlachty zaściankowej i pracy u podstaw.",
    time: { start: 1888, label: "1888" },
    country: "Polska",
    categories: ["powieść", "realizm"]
  },

  // --- Młoda Polska ---
  {
    id: "wesele",
    type: "work",
    title: "Wesele",
    author: "Stanisław Wyspiański",
    epoch: "mloda-polska",
    year: 1901,
    description: "Dramat symboliczny, w którym chłopi i inteligencja łączą się w symbolicznym weselu.",
    time: { start: 1901, label: "1901" },
    country: "Polska",
    categories: ["dramat", "symbolizm"]
  },
  {
    id: "ludzie-bezdomni",
    type: "work",
    title: "Ludzie bezdomni",
    author: "Stefan Żeromski",
    epoch: "mloda-polska",
    year: 1900,
    description: "Powieść o lekarzu walczącym z biedą i poświęcającym dla innych swoje szczęście.",
    time: { start: 1900, label: "1900" },
    country: "Polska",
    categories: ["powieść", "realizm"]
  },
  {
    id: "przedwiosnie",
    type: "work",
    title: "Przedwiośnie",
    author: "Stefan Żeromski",
    epoch: "mloda-polska",
    year: 1924,
    description: "Powieść o poszukiwaniu ładu w odrodzonej Polsce.",
    time: { start: 1924, label: "1924" },
    country: "Polska",
    categories: ["powieść", "realizm"]
  },

  // ================= NOWE DZIEŁA =================

  // --- Dwudziestolecie międzywojenne ---
  {
    id: "ferdydurke",
    type: "work",
    title: "Ferdydurke",
    author: "Witold Gombrowicz",
    epoch: "dwudziestolecie-miedzywojenne",
    year: 1937,
    description: "Powieść eksperymentalna. Krytyka formy, gęby i dojrzałości. Wprowadzenie pojęcia „gęby” i „pupy”. Wciągająca i absurdalna.",
    time: { start: 1937, label: "1937" },
    country: "Polska",
    categories: ["powieść", "absurd", "awangarda"]
  },
  {
    id: "proces",
    type: "work",
    title: "Proces",
    author: "Franz Kafka",
    epoch: "dwudziestolecie-miedzywojenne",
    year: 1925,
    description: "Powieść o Józefie K., który zostaje aresztowany bez podania winy. Metafora biurokracji i bezsilności.",
    time: { start: 1925, label: "1925" },
    country: "Czechy / Austria",
    categories: ["powieść", "egzystencjalizm", "parabola"]
  },
  {
    id: "sklepy-cynamonowe",
    type: "work",
    title: "Sklepy cynamonowe",
    author: "Bruno Schulz",
    epoch: "dwudziestolecie-miedzywojenne",
    year: 1934,
    description: "Zbiór opowiadań, w którym rzeczywistość miesza się z mitem. Niezwykła wyobraźnia i język.",
    time: { start: 1934, label: "1934" },
    country: "Polska",
    categories: ["proza", "surrealizm", "modernizm"]
  },
  {
    id: "poematy",
    type: "work",
    title: "Poematy (Koniec wieku, Hymn)",
    author: "Maria Pawlikowska-Jasnorzewska",
    epoch: "dwudziestolecie-miedzywojenne",
    year: 1925,
    description: "Liryka kobieca, delikatna i pełna czułości, poruszająca tematy miłości i przemijania.",
    time: { start: 1925, label: "1925" },
    country: "Polska",
    categories: ["poezja", "liryka"]
  },

  // --- Wojna i okupacja ---
  {
    id: "medaliony",
    type: "work",
    title: "Medaliony",
    author: "Zofia Nałkowska",
    epoch: "wojna-i-okupacja",
    year: 1946,
    description: "Zbiór reportaży dokumentujących zbrodnie hitlerowskie. Wstrząsające świadectwo Holokaustu.",
    time: { start: 1946, label: "1946" },
    country: "Polska",
    categories: ["reportaż", "dokument", "proza"]
  },
  {
    id: "zdazyc-przed-panem-bogiem",
    type: "work",
    title: "Zdążyć przed Panem Bogiem",
    author: "Hanna Krall",
    epoch: "wojna-i-okupacja",
    year: 1977,
    description: "Reportaż o powstaniu w getcie warszawskim i postaci Marka Edelmana.",
    time: { start: 1977, label: "1977" },
    country: "Polska",
    categories: ["reportaż", "dokument"]
  },
  {
    id: "pamietnik-z-getta",
    type: "work",
    title: "Pamiętnik z getta warszawskiego",
    author: "Marek Edelman",
    epoch: "wojna-i-okupacja",
    year: 1943,
    description: "Relacja jednego z przywódców powstania. Autentyczny głos z getta.",
    time: { start: 1943, label: "1943" },
    country: "Polska",
    categories: ["pamiętnik", "dokument"]
  },
  {
    id: "wspomnienia-z-wojny",
    type: "work",
    title: "Wspomnienia z wojny",
    author: "Czesław Miłosz",
    epoch: "wojna-i-okupacja",
    year: 1945,
    description: "Wstrząsające wiersze pisane w okupowanej Warszawie. Świadectwo apokalipsy.",
    time: { start: 1945, label: "1945" },
    country: "Polska",
    categories: ["poezja", "liryka", "wojenna"]
  },
  {
    id: "opowiadania-borowskiego",
    type: "work",
    title: "Opowiadania (Proszę państwa do gazu)",
    author: "Tadeusz Borowski",
    epoch: "wojna-i-okupacja",
    year: 1948,
    description: "Bezlitosny obraz obozu Auschwitz. Autor nie pozostawia złudzeń co do natury ludzkiej.",
    time: { start: 1948, label: "1948" },
    country: "Polska",
    categories: ["proza", "dokument", "wojenna"]
  },

  // --- Współczesność (po 1945) ---
  {
    id: "tango",
    type: "work",
    title: "Tango",
    author: "Sławomir Mrożek",
    epoch: "wspolczesnosc",
    year: 1964,
    description: "Dramat absurdalny. Symbol rozkładu tradycyjnych wartości.",
    time: { start: 1964, label: "1964" },
    country: "Polska",
    categories: ["dramat", "absurd"]
  },
  {
    id: "inny-swiat",
    type: "work",
    title: "Inny świat",
    author: "Gustaw Herling-Grudziński",
    epoch: "wspolczesnosc",
    year: 1951,
    description: "Wstrząsający reportaż z łagru. Świadectwo sowieckiego piekła.",
    time: { start: 1951, label: "1951" },
    country: "Polska",
    categories: ["reportaż", "dokument", "proza"]
  },
  {
    id: "dzien-aresztowania",
    type: "work",
    title: "Dzień aresztowania",
    author: "Tadeusz Konwicki",
    epoch: "wspolczesnosc",
    year: 1984,
    description: "Powieść o opresyjności systemu i wewnętrznej emigracji.",
    time: { start: 1984, label: "1984" },
    country: "Polska",
    categories: ["powieść", "psychologiczna"]
  },
  {
    id: "dolina-issy",
    type: "work",
    title: "Dolina Issy",
    author: "Czesław Miłosz",
    epoch: "wspolczesnosc",
    year: 1955,
    description: "Proza nostalgiczna o dzieciństwie na Litwie.",
    time: { start: 1955, label: "1955" },
    country: "Polska / Litwa",
    categories: ["powieść", "proza poetycka"]
  },
  {
    id: "sonety-do-laury",
    type: "work",
    title: "Sto wierszy (wybór)",
    author: "Wisława Szymborska",
    epoch: "wspolczesnosc",
    year: 1957,
    description: "Poezja refleksyjna, ironiczna, pełna zadumy nad światem.",
    time: { start: 1957, label: "1957" },
    country: "Polska",
    categories: ["poezja", "liryka"]
  },
  {
    id: "tren-xxi",
    type: "work",
    title: "Tren XXI",
    author: "Jan Twardowski",
    epoch: "wspolczesnosc",
    year: 1973,
    description: "Poezja religijna, prosta i pełna nadziei.",
    time: { start: 1973, label: "1973" },
    country: "Polska",
    categories: ["poezja", "religijna"]
  }
];