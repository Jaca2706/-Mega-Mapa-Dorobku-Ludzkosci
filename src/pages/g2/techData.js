export const techData = [

  {
    id: "narzedzia-kamienne",
    type: "trend",
    title: {
      full: "Narzędzia kamienne (paleolit)",
      short: "Paleolit"
    },
    time: {
      start: "-3000000",
      end: "-10000",
      label: "3 mln – 10 000 p.n.e."
    },
    country: "Afryka / cały świat",
    categories: ["technologia", "prehistoria", "narzędzia"],
    tags: ["krzemień", "obsydian", "łowiectwo", "ogień", "homo habilis", "homo erectus"],
    layers: {
      geographic: 5,
      social: 3,
      economic: 2,
      mental: 3
    },
    dimensions: {
      psychologicalTime: "czas przetrwania i walki z naturą",
      technicalLevel: "obróbka kamienia, kontrola ognia",
      globalContext: "pradzieje ludzkości, migracja homo sapiens"
    },
    media: {
      image: "/img/paleolit.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-neolityczna", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Najdłuższa epoka w dziejach człowieka. Homo habilis jako pierwszy wytwarzał narzędzia z kamienia (ok. 2,6 mln lat temu). Opanowanie ognia przez homo erectus (ok. 1 mln lat temu) to przełom cywilizacyjny. Narzędzia: pięściaki, skrobacze, groty. Podstawa: zbieractwo i łowiectwo."
  },

  {
    id: "rewolucja-neolityczna",
    type: "event",
    title: {
      full: "Rewolucja neolityczna",
      short: "Neolit"
    },
    time: {
      start: "-10000",
      end: "-3000",
      label: "ok. 10 000 – 3000 p.n.e."
    },
    country: "Bliski Wschód / Europa / Azja",
    categories: ["technologia", "prehistoria", "rolnictwo"],
    tags: ["uprawa roli", "hodowla", "ceramika", "osadnictwo", "koło garncarskie", "żyzny półksiężyc"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas oswajania przyrody i budowania osad",
      technicalLevel: "rolnictwo, hodowla, ceramika, tkactwo",
      globalContext: "koniec epoki lodowcowej, pierwsze osady"
    },
    media: {
      image: "/img/neolit.jpg",
      video: ""
    },
    relations: [
      { targetId: "narzedzia-kamienne", type: "parallel" },
      { targetId: "wynalazek-pisma", type: "influenced" },
      { targetId: "metalurgia-brazu", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Największa rewolucja w dziejach ludzkości przed erą przemysłową. Przejście od koczowniczego zbieractwa do rolnictwa i osiadłego trybu życia. Wynaleziono koło garncarskie, tkactwo, pierwsze narzędzia metaliczne. Powstały pierwsze stałe osady i wsie."
  },

  {
    id: "metalurgia-brazu",
    type: "trend",
    title: {
      full: "Metalurgia – epoka brązu i żelaza",
      short: "Metalurgia"
    },
    time: {
      start: "-3300",
      end: "-500",
      label: "ok. 3300 – 500 p.n.e."
    },
    country: "Bliski Wschód / Europa / Azja",
    categories: ["technologia", "metalurgia", "starożytność"],
    tags: ["brąz", "żelazo", "miedź", "cyna", "hutnictwo", "broń", "pług"],
    layers: {
      geographic: 5,
      social: 4,
      economic: 5,
      mental: 3
    },
    dimensions: {
      psychologicalTime: "czas wojen i ekspansji cywilizacji",
      technicalLevel: "wytop metali, kuźnictwo, odlewnictwo",
      globalContext: "starożytne cywilizacje Mezopotamii, Egiptu, Grecji"
    },
    media: {
      image: "/img/metalurgia.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-neolityczna", type: "parallel" },
      { targetId: "wynalazek-pisma", type: "parallel" },
      { targetId: "starozytna-inzynieria", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Stopniowe opanowanie obróbki metali zrewolucjonizowało rolnictwo, wojskowość i handel. Brąz (stop miedzi i cyny) od ok. 3300 p.n.e., żelazo od ok. 1200 p.n.e. Nowe możliwości: twardsze narzędzia rolnicze, broń, naczynia. Handel metalami napędził powstawanie cywilizacji."
  },

  {
    id: "wynalazek-pisma",
    type: "event",
    title: {
      full: "Wynalazek pisma",
      short: "Pismo"
    },
    time: {
      start: "-3200",
      end: "-3000",
      label: "ok. 3200 p.n.e."
    },
    country: "Mezopotamia / Egipt",
    categories: ["technologia", "komunikacja", "starożytność"],
    tags: ["klinopis", "hieroglify", "alfabet", "glina", "papirus", "zapisywanie wiedzy"],
    layers: {
      geographic: 4,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas utrwalania pamięci i przekazywania wiedzy",
      technicalLevel: "tabliczki gliniane, papirus, rylec",
      globalContext: "pierwsze państwa i cywilizacje miejskie"
    },
    media: {
      image: "/img/pismo.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-neolityczna", type: "parallel" },
      { targetId: "starozytna-inzynieria", type: "influenced" },
      { targetId: "prasa-drukarska", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Sumeryjski klinopis (ok. 3200 p.n.e.) i egipskie hieroglify to pierwsze systemy pisma. Pismo powstało z potrzeb administracyjnych (rachunki, handel). Alfabet fenicki (ok. 1050 p.n.e.) uprościł zapis. Rewolucja: możliwość gromadzenia i przekazywania wiedzy między pokoleniami."
  },

  {
    id: "starozytna-inzynieria",
    type: "trend",
    title: {
      full: "Starożytna inżynieria i mechanika",
      short: "Inżynieria ant."
    },
    time: {
      start: "-3000",
      end: "500",
      label: "3000 p.n.e. – 500 n.e."
    },
    country: "Egipt / Grecja / Rzym",
    categories: ["technologia", "inżynieria", "starożytność"],
    tags: ["koło", "dźwignia", "akwedukt", "piramidy", "beton rzymski", "Archimedes", "katapulta"],
    layers: {
      geographic: 5,
      social: 4,
      economic: 5,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas budowania imperiów i monumentów",
      technicalLevel: "proste maszyny, hydraulika, architektura",
      globalContext: "starożytne imperia egipskie, greckie, rzymskie"
    },
    media: {
      image: "/img/inzynieria-ant.jpg",
      video: ""
    },
    relations: [
      { targetId: "wynalazek-pisma", type: "parallel" },
      { targetId: "metalurgia-brazu", type: "parallel" },
      { targetId: "sredniowieczna-technika", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Koło (ok. 3500 p.n.e.) jako fundament mechaniki. Egipcjanie wznosili piramidy bez maszyn parowych – wyłącznie siłą ludzką i prostymi maszynami. Grecy: Archimedes (śruba, dźwignia, prawo wyporności). Rzym: beton, akwedukty, drogi, Panteon, Koloseum. Technologia na służbie imperium."
  },

  {
    id: "sredniowieczna-technika",
    type: "trend",
    title: {
      full: "Technika średniowieczna",
      short: "Technika śred."
    },
    time: {
      start: "500",
      end: "1450",
      label: "V – XV w."
    },
    country: "Europa / świat arabski / Chiny",
    categories: ["technologia", "inżynieria", "średniowiecze"],
    tags: ["młyn wodny", "wiatrak", "kompas", "proch", "papier", "chomąto", "zegar mechaniczny"],
    layers: {
      geographic: 4,
      social: 3,
      economic: 4,
      mental: 3
    },
    dimensions: {
      psychologicalTime: "czas powolnego gromadzenia wynalazków",
      technicalLevel: "energia wodna i wiatrowa, metalurgia żelaza",
      globalContext: "Europa feudalna, Chiny, świat arabski"
    },
    media: {
      image: "/img/sredniowiecze-tech.jpg",
      video: ""
    },
    relations: [
      { targetId: "starozytna-inzynieria", type: "parallel" },
      { targetId: "prasa-drukarska", type: "influenced" },
      { targetId: "rewolucja-naukowa", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Wbrew mitom średniowiecze przyniosło wiele innowacji. Z Chin dotarły: papier, proch, kompas. Europa rozwinęła: młyny wodne i wiatraki (energia mechaniczna), chomąto końskie (rewolucja w rolnictwie), zegar mechaniczny (XIII w.), wielki piec hutniczy. Gotyckie katedry – szczyt ówczesnej inżynierii budowlanej."
  },

  {
    id: "prasa-drukarska",
    type: "event",
    title: {
      full: "Prasa drukarska Gutenberga",
      short: "Druk"
    },
    time: {
      start: "1450",
      end: null,
      label: "ok. 1450"
    },
    country: "Niemcy (Moguncja)",
    categories: ["technologia", "komunikacja", "wynalazek"],
    tags: ["Gutenberg", "ruchome czcionki", "biblia", "reformacja", "masowa komunikacja"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas demokratyzacji wiedzy",
      technicalLevel: "mechaniczny druk z ruchomymi czcionkami",
      globalContext: "renesans, reformacja, odkrycia geograficzne"
    },
    media: {
      image: "/img/gutenberg.jpg",
      video: ""
    },
    relations: [
      { targetId: "sredniowieczna-technika", type: "parallel" },
      { targetId: "wynalazek-pisma", type: "parallel" },
      { targetId: "rewolucja-naukowa", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Johannes Gutenberg wynalazł prasę z ruchomymi metalowymi czcionkami ok. 1450 r. W ciągu 50 lat wydrukowano więcej ksiąg niż przez poprzednie tysiąclecia. Rewolucja informacyjna: reforma Kościoła (Luter), upowszechnienie nauki, wzrost piśmienności. Analogia epoki: jak internet w XX w."
  },

  {
    id: "rewolucja-naukowa",
    type: "trend",
    title: {
      full: "Rewolucja naukowa",
      short: "Rewolucja nauk."
    },
    time: {
      start: "1543",
      end: "1700",
      label: "XVI – XVII w."
    },
    country: "Europa",
    categories: ["technologia", "nauka", "filozofia"],
    tags: ["Kopernik", "Galileo", "Newton", "teleskop", "metoda naukowa", "heliocentryzm", "grawitacja"],
    layers: {
      geographic: 4,
      social: 4,
      economic: 3,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas obalania dogmatów i odkrywania praw natury",
      technicalLevel: "teleskop, mikroskop, matematyka, eksperymenty",
      globalContext: "odrodzenie, reformacja, absolutyzm"
    },
    media: {
      image: "/img/rewolucja-naukowa.jpg",
      video: ""
    },
    relations: [
      { targetId: "prasa-drukarska", type: "parallel" },
      { targetId: "rewolucja-przemyslowa", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Kopernik (1543) – heliocentryzm. Galileusz – teleskop, prawa ruchu. Newton – grawitacja, mechanika klasyczna (1687). Powstała metoda naukowa: obserwacja, hipoteza, eksperyment. Wynaleziono teleskop (1608), mikroskop (1590), barometr, termometr. Podstawa pod całą nowoczesną technologię."
  },

  {
    id: "rewolucja-przemyslowa",
    type: "trend",
    title: {
      full: "Pierwsza rewolucja przemysłowa",
      short: "Rewol. przem. I"
    },
    time: {
      start: "1760",
      end: "1840",
      label: "ok. 1760 – 1840"
    },
    country: "Wielka Brytania / Europa",
    categories: ["technologia", "przemysł", "historia"],
    tags: ["maszyna parowa", "Watt", "węgiel", "stal", "kolej", "fabryka", "tkactwo mechaniczne"],
    layers: {
      geographic: 4,
      social: 5,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas fabrycznych kominów i narodzin klasy robotniczej",
      technicalLevel: "maszyna parowa, mechanizacja produkcji",
      globalContext: "Wielka Brytania jako warsztat świata"
    },
    media: {
      image: "/img/rewolucja-przemyslowa.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-naukowa", type: "parallel" },
      { targetId: "elektrycznosc-telegraf", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "James Watt udoskonalił maszynę parową (1769) – serce rewolucji. Mechaniczne krosna (Hargreaves, Arkwright), kolej parowa (Stephenson, 1825), produkcja stali. Urbanizacja, narodziny proletariatu, kapitalizm przemysłowy. Anglia stała się pierwszym państwem przemysłowym świata."
  },

  {
    id: "elektrycznosc-telegraf",
    type: "trend",
    title: {
      full: "Elektryczność i telegraf",
      short: "Elektryczność"
    },
    time: {
      start: "1820",
      end: "1880",
      label: "ok. 1820 – 1880"
    },
    country: "Europa / USA",
    categories: ["technologia", "elektryczność", "komunikacja"],
    tags: ["Faraday", "Maxwell", "Morse", "telegraf", "dynamo", "żarówka", "Edison", "Bell"],
    layers: {
      geographic: 5,
      social: 4,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas podboju odległości i ujarzmienia błyskawicy",
      technicalLevel: "prąd elektryczny, fale elektromagnetyczne",
      globalContext: "druga rewolucja przemysłowa"
    },
    media: {
      image: "/img/elektrycznosc.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-przemyslowa", type: "parallel" },
      { targetId: "druga-rewolucja-przemyslowa", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Faraday odkrył indukcję elektromagnetyczną (1831). Morse – telegraf elektryczny (1837). Edison – żarówka (1879), elektrownia (1882). Bell – telefon (1876). Maxwell – równania elektromagnetyzmu. Elektryczność przekształciła przemysł, komunikację i codzienne życie nieodwracalnie."
  },

  {
    id: "druga-rewolucja-przemyslowa",
    type: "trend",
    title: {
      full: "Druga rewolucja przemysłowa",
      short: "Rewol. przem. II"
    },
    time: {
      start: "1870",
      end: "1914",
      label: "ok. 1870 – 1914"
    },
    country: "USA / Niemcy / Europa",
    categories: ["technologia", "przemysł", "historia"],
    tags: ["stal", "ropa naftowa", "silnik spalinowy", "Ford", "samochód", "radio", "Marconi", "linia montażowa"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas maszyn, prędkości i globalnej ekspansji",
      technicalLevel: "silnik spalinowy, stal, elektryczność, chemia",
      globalContext: "imperializm, globalizacja XIX w."
    },
    media: {
      image: "/img/rewolucja-przemyslowa2.jpg",
      video: ""
    },
    relations: [
      { targetId: "elektrycznosc-telegraf", type: "parallel" },
      { targetId: "era-lotnicza", type: "influenced" },
      { targetId: "wiek-atomowy", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Silnik spalinowy (Otto, 1876), ropa naftowa jako paliwo, samochód (Benz, 1885), linia montażowa Forda (1913). Radio Marconiego (1895). Telefon, fonograf, kino (Lumière, 1895). Stal Bessemera. Chemia syntetyczna (barwniki, nawozy). Świat nabiera współczesnych kształtów."
  },

  {
    id: "era-lotnicza",
    type: "trend",
    title: {
      full: "Era lotnicza i kosmiczna",
      short: "Lotnictwo / Kosmos"
    },
    time: {
      start: "1903",
      end: "1969",
      label: "1903 – 1969"
    },
    country: "USA / ZSRR",
    categories: ["technologia", "lotnictwo", "kosmonautyka"],
    tags: ["bracia Wright", "samolot", "Sputnik", "Apollo", "rakieta", "zimna wojna", "wyścig kosmiczny"],
    layers: {
      geographic: 5,
      social: 4,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas zdobywania nieba i przestrzeni kosmicznej",
      technicalLevel: "silnik odrzutowy, rakiety, elektronika",
      globalContext: "dwie wojny światowe, zimna wojna"
    },
    media: {
      image: "/img/lotnictwo.jpg",
      video: ""
    },
    relations: [
      { targetId: "druga-rewolucja-przemyslowa", type: "parallel" },
      { targetId: "wiek-atomowy", type: "parallel" },
      { targetId: "rewolucja-cyfrowa", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Bracia Wright – pierwszy lot silnikowy (1903). I i II wojna światowa przyspieszyły lotnictwo drastycznie. Odrzutowiec (lata 40.). Sputnik – pierwszy satelita (1957). Gagarin w kosmosie (1961). Apollo 11 – człowiek na Księżycu (1969). Technologie kosmiczne dały: GPS, satelity, materiały kompozytowe."
  },

  {
    id: "wiek-atomowy",
    type: "event",
    title: {
      full: "Wiek atomowy – energia jądrowa",
      short: "Atom"
    },
    time: {
      start: "1938",
      end: "1986",
      label: "1938 – 1986"
    },
    country: "USA / Europa / ZSRR",
    categories: ["technologia", "fizyka", "energia", "broń"],
    tags: ["rozszczepienie jądra", "Manhattan", "bomba atomowa", "elektrownia jądrowa", "Czarnobyl", "Einstein", "Curie"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas strachu, potęgi i odpowiedzialności",
      technicalLevel: "fizyka jądrowa, reaktory, broń masowego rażenia",
      globalContext: "II wojna światowa, zimna wojna, wyścig zbrojeń"
    },
    media: {
      image: "/img/atom.jpg",
      video: ""
    },
    relations: [
      { targetId: "era-lotnicza", type: "parallel" },
      { targetId: "rewolucja-cyfrowa", type: "parallel" }
    ],
    tree: {
      parentId: null
    },
    description: "Odkrycie rozszczepienia jądra (Hahn, 1938). Projekt Manhattan – bomba atomowa (1945, Hiroszima). Pierwsza elektrownia jądrowa (ZSRR, 1954). Energia jądrowa jako alternatywa dla węgla. Katastrofa w Czarnobylu (1986) zmienia postrzeganie atomu. Dziedzictwo: energia, broń, medycyna nuklearna."
  },

  {
    id: "tranzystor-polprzewodniki",
    type: "event",
    title: {
      full: "Tranzystor i półprzewodniki",
      short: "Tranzystor"
    },
    time: {
      start: "1947",
      end: "1970",
      label: "1947 – lata 70."
    },
    country: "USA (Bell Labs)",
    categories: ["technologia", "elektronika", "wynalazek"],
    tags: ["tranzystor", "Shockley", "Bell Labs", "krzem", "układ scalony", "prawo Moore'a", "mikroprocesor"],
    layers: {
      geographic: 3,
      social: 3,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas miniaturyzacji i narodzin elektroniki",
      technicalLevel: "półprzewodniki, mikroelektronika",
      globalContext: "zimna wojna, wyścig technologiczny USA–ZSRR"
    },
    media: {
      image: "/img/tranzystor.jpg",
      video: ""
    },
    relations: [
      { targetId: "wiek-atomowy", type: "parallel" },
      { targetId: "rewolucja-cyfrowa", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Tranzystor wynaleziony w Bell Labs (Shockley, Bardeen, Brattain, 1947) zastąpił lampy próżniowe. Jack Kilby i Robert Noyce – układ scalony (1958). Gordon Moore sformułował swoje prawo (1965): liczba tranzystorów podwaja się co ~2 lata. Intel 4004 – pierwszy mikroprocesor (1971). Fundament ery cyfrowej."
  },

  {
    id: "rewolucja-cyfrowa",
    type: "trend",
    title: {
      full: "Rewolucja cyfrowa i komputery osobiste",
      short: "Rewol. cyfrowa"
    },
    time: {
      start: "1970",
      end: "2000",
      label: "lata 70. – 2000"
    },
    country: "USA / świat",
    categories: ["technologia", "informatyka", "kultura"],
    tags: ["PC", "Apple", "IBM", "Microsoft", "Gates", "Jobs", "Wozniak", "DOS", "Windows", "internet"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 5,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas narodzin nowego świata cyfr i ekranów",
      technicalLevel: "mikroprocesory, dyski twarde, oprogramowanie, sieci",
      globalContext: "koniec zimnej wojny, globalizacja"
    },
    media: {
      image: "/img/rewolucja-cyfrowa.jpg",
      video: ""
    },
    relations: [
      { targetId: "tranzystor-polprzewodniki", type: "parallel" },
      { targetId: "internet-www", type: "influenced" },
      { targetId: "era-mobilna", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Apple II (1977), IBM PC (1981), Macintosh (1984). Microsoft DOS i Windows. Komputer z narzędzia naukowego stał się urządzeniem domowym. Archiwum ARPANET przerodziło się w internet. Tim Berners-Lee – WWW (1991). CD-ROM, modem, e-mail. Rok 2000: miliard użytkowników komputerów."
  },

  {
    id: "internet-www",
    type: "event",
    title: {
      full: "Internet i World Wide Web",
      short: "Internet / WWW"
    },
    time: {
      start: "1969",
      end: "2000",
      label: "1969 (ARPANET) – 2000"
    },
    country: "USA / świat",
    categories: ["technologia", "komunikacja", "internet"],
    tags: ["ARPANET", "TCP/IP", "Berners-Lee", "HTML", "WWW", "przeglądarka", "Google", "e-mail"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 5,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas połączenia całego świata w sieć",
      technicalLevel: "protokoły sieciowe, serwery, HTML, przeglądarki",
      globalContext: "koniec zimnej wojny, globalizacja informacji"
    },
    media: {
      image: "/img/internet.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-cyfrowa", type: "parallel" },
      { targetId: "era-mobilna", type: "influenced" },
      { targetId: "ai-uczenie-maszynowe", type: "influenced" }
    ],
    tree: {
      parentId: "rewolucja-cyfrowa"
    },
    description: "ARPANET (1969) – pierwsza sieć komputerowa wojska USA. TCP/IP (1983) – standard komunikacji. Tim Berners-Lee wynalazł WWW w CERN (1991): HTML, HTTP, URL. Mosaic – pierwsza przeglądarka graficzna (1993). Google (1998). Bańka dot-com (2000). Internet zmienił handel, kulturę, politykę i naukę."
  },

  {
    id: "era-mobilna",
    type: "trend",
    title: {
      full: "Era mobilna i smartfony",
      short: "Smartfony"
    },
    time: {
      start: "2007",
      end: "2020",
      label: "2007 – ok. 2020"
    },
    country: "USA / Azja / świat",
    categories: ["technologia", "mobile", "komunikacja"],
    tags: ["iPhone", "Android", "Jobs", "Google", "App Store", "media społecznościowe", "GPS", "dotykowy ekran"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 5,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas permanentnego połączenia i cyfrowego życia",
      technicalLevel: "miniaturyzacja, sieci 3G/4G/5G, ekrany dotykowe",
      globalContext: "globalizacja, media społecznościowe"
    },
    media: {
      image: "/img/smartfony.jpg",
      video: ""
    },
    relations: [
      { targetId: "internet-www", type: "parallel" },
      { targetId: "rewolucja-cyfrowa", type: "parallel" },
      { targetId: "ai-uczenie-maszynowe", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Steve Jobs zaprezentował iPhone'a w 2007 r. – komputer w kieszeni. Android (Google, 2008) zdominował rynek. App Store i sklepy z aplikacjami stworzyły nową gospodarkę. Facebook, Twitter, Instagram, YouTube w kieszeni. W 2020 r. ponad 3,5 mld ludzi posiada smartfon. Rewolucja społeczna."
  },

  {
    id: "ai-uczenie-maszynowe",
    type: "trend",
    title: {
      full: "Sztuczna inteligencja i uczenie maszynowe",
      short: "AI / ML"
    },
    time: {
      start: "2010",
      end: null,
      label: "ok. 2010 – dziś"
    },
    country: "USA / Chiny / świat",
    categories: ["technologia", "AI", "informatyka", "nauka"],
    tags: ["deep learning", "sieci neuronowe", "GPT", "LLM", "OpenAI", "Google DeepMind", "autonomiczne pojazdy", "ChatGPT"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 5,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas pytań o człowieczeństwo i granice maszyn",
      technicalLevel: "GPU, big data, transformery, modele fundamentowe",
      globalContext: "czwarta rewolucja przemysłowa, geopolityka AI"
    },
    media: {
      image: "/img/ai.jpg",
      video: ""
    },
    relations: [
      { targetId: "era-mobilna", type: "parallel" },
      { targetId: "internet-www", type: "parallel" },
      { targetId: "biotechnologia", type: "parallel" }
    ],
    tree: {
      parentId: null
    },
    description: "Przełom: AlexNet (2012) – głębokie sieci neuronowe pobiły człowieka w rozpoznawaniu obrazów. AlphaGo (2016) pokonał mistrza świata w Go. GPT-3 (2020), ChatGPT (2022) – modele językowe dostępne masowo. W 2024-2025 r. AI generatywne wkracza w medycynę, prawo, naukę, twórczość. Trwa wyścig AI między USA a Chinami."
  },

  {
    id: "biotechnologia",
    type: "trend",
    title: {
      full: "Biotechnologia i inżynieria genetyczna",
      short: "Biotech"
    },
    time: {
      start: "1953",
      end: null,
      label: "1953 – dziś"
    },
    country: "USA / Europa / świat",
    categories: ["technologia", "biologia", "medycyna", "nauka"],
    tags: ["DNA", "Watson Crick", "PCR", "GMO", "CRISPR", "szczepionki mRNA", "klonowanie", "sekwencjonowanie genomu"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas przepisywania kodu życia",
      technicalLevel: "inżynieria genetyczna, bioinformatyka, synteza białek",
      globalContext: "wyścig biomedyczny, pandemia COVID-19"
    },
    media: {
      image: "/img/biotech.jpg",
      video: ""
    },
    relations: [
      { targetId: "wiek-atomowy", type: "parallel" },
      { targetId: "ai-uczenie-maszynowe", type: "parallel" }
    ],
    tree: {
      parentId: null
    },
    description: "Watson i Crick odkryli strukturę DNA (1953). PCR (Mullis, 1983) – powielanie DNA. Sekwencjonowanie genomu człowieka ukończone (2003). CRISPR-Cas9 (2012) – precyzyjne nożyczki genetyczne. Szczepionki mRNA przeciw COVID-19 (2020-2021). Biotechnologia zmienia medycynę, rolnictwo i otwiera pytania etyczne."
  },

  {
    id: "energia-odnawialna",
    type: "trend",
    title: {
      full: "Energia odnawialna i zielona transformacja",
      short: "OZE"
    },
    time: {
      start: "1970",
      end: null,
      label: "lata 70. – dziś"
    },
    country: "świat",
    categories: ["technologia", "energia", "ekologia"],
    tags: ["solar", "wiatr", "fotowoltaika", "baterie", "Tesla", "klimat", "transformacja energetyczna", "wodór"],
    layers: {
      geographic: 5,
      social: 4,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas wyścigu z kryzysem klimatycznym",
      technicalLevel: "panele fotowoltaiczne, turbiny wiatrowe, magazyny energii",
      globalContext: "kryzys klimatyczny, porozumienie paryskie"
    },
    media: {
      image: "/img/oze.jpg",
      video: ""
    },
    relations: [
      { targetId: "rewolucja-przemyslowa", type: "parallel" },
      { targetId: "ai-uczenie-maszynowe", type: "parallel" }
    ],
    tree: {
      parentId: null
    },
    description: "Kryzys naftowy 1973 r. wymusił szukanie alternatyw. Fotowoltaika znana od lat 50., taniejąca od 2000 r. dramatycznie. Elektrownie wiatrowe offshore. Tesla i rewolucja elektryków (2010+). Baterie litowo-jonowe. W 2024 r. OZE dostarczają ponad 30% światowej energii elektrycznej. Wyścig z czasem przed zmianami klimatu."
  }

];
