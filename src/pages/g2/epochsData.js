export const historyData = [

  {
    id: "antyk",
    type: "trend",
    title: {
      full: "Antyk (starożytność)",
      short: "Antyk"
    },
    time: {
      start: "-800",
      end: "476",
      label: "VIII w. p.n.e. – 476 n.e."
    },
    country: "Grecja / Rzym",
    categories: ["literatura", "filozofia", "kultura", "epoka literacka"],
    tags: ["Homer", "Sokrates", "Platon", "Arystoteles", "mitologia", "tragedia", "epopeja"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas bogów i heroicznych czynów",
      technicalLevel: "kultura oralna i początki pisma",
      globalContext: "cywilizacje śródziemnomorskie"
    },
    media: {
      image: "/img/antyk.jpg",
      video: ""
    },
    relations: [
      { targetId: "sredniowiecze", type: "influenced" },
      { targetId: "renesans", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Epoka obejmująca literaturę i kulturę starożytnej Grecji i Rzymu. Narodziły się tu podstawowe gatunki literackie: epos, tragedia, komedia, liryka. Kluczowe idee: piękno, dobro, prawda (kalokagathia), harmonia, umiar (złoty środek)."
  },

  {
    id: "sredniowiecze",
    type: "trend",
    title: {
      full: "Średniowiecze",
      short: "Średniowiecze"
    },
    time: {
      start: "476",
      end: "1450",
      label: "V – XV w."
    },
    country: "Europa",
    categories: ["literatura", "filozofia", "religia", "epoka literacka"],
    tags: ["teocentryzm", "scholastyka", "hagiografia", "asceza", "anonimowość", "Dante", "Bogurodzica"],
    layers: {
      geographic: 4,
      social: 4,
      economic: 2,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas wieczności i zbawienia duszy",
      technicalLevel: "kultura skryptoriów i pergaminu",
      globalContext: "Europa feudalna pod wpływem Kościoła"
    },
    media: {
      image: "/img/sredniowiecze.jpg",
      video: ""
    },
    relations: [
      { targetId: "antyk", type: "part_of" },
      { targetId: "renesans", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Epoka zdominowana przez teocentryzm i autorytet Kościoła. Literatura służyła celom religijnym i dydaktycznym. Charakterystyczne gatunki: hagiografia, kronika, chanson de geste, misteria. W Polsce: 'Bogurodzica', 'Kazania Świętokrzyskie', twórczość Jana z Czarnolasu."
  },

  {
    id: "renesans",
    type: "trend",
    title: {
      full: "Renesans (Odrodzenie)",
      short: "Renesans"
    },
    time: {
      start: "1450",
      end: "1620",
      label: "XV – pocz. XVII w."
    },
    country: "Europa / Polska",
    categories: ["literatura", "filozofia", "kultura", "humanizm", "epoka literacka"],
    tags: ["humanizm", "antropocentryzm", "Kochanowski", "Erazm", "Petrarka", "reformacja", "druk"],
    layers: {
      geographic: 5,
      social: 4,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas radości życia i odkrycia człowieka",
      technicalLevel: "wynalazek druku, ekspansja kolonialna",
      globalContext: "wielkie odkrycia geograficzne, reformacja"
    },
    media: {
      image: "/img/renesans.jpg",
      video: ""
    },
    relations: [
      { targetId: "antyk", type: "influenced" },
      { targetId: "sredniowiecze", type: "parallel" },
      { targetId: "barok", type: "influenced" },
      { targetId: "treny-kochanowskiego", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Powrót do ideałów antycznych, odkrycie człowieka jako centrum świata (antropocentryzm). Hasło 'człowiekiem jestem i nic, co ludzkie, nie jest mi obce'. W Polsce złoty wiek literatury – Jan Kochanowski, Mikołaj Rej. Ideały: harmonia, umiar, stoicyzm, epikureizm."
  },

  {
    id: "treny-kochanowskiego",
    type: "work",
    title: {
      full: "Treny (Jan Kochanowski)",
      short: "Treny"
    },
    time: {
      start: "1580",
      end: null,
      label: "1580"
    },
    country: "Polska",
    categories: ["literatura", "liryka", "renesans"],
    tags: ["żałoba", "stoicyzm", "kryzys wiary", "ojcostwo", "humanizm"],
    layers: {
      geographic: 1,
      social: 3,
      economic: 1,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas żałoby i kryzysu filozoficznego",
      technicalLevel: "druk renesansowy",
      globalContext: "humanizm renesansowy"
    },
    media: {
      image: "/img/treny.jpg",
      video: ""
    },
    relations: [
      { targetId: "renesans", type: "part_of" }
    ],
    tree: {
      parentId: "renesans"
    },
    description: "Cykl 19 trenów Jana Kochanowskiego – lament po śmierci córeczki Urszulki. Przełom renesansowego stoicyzmu: poeta przeżywa kryzys wiary i filozofii. Arcydzieło polskiej liryki i jeden z największych cyklów żałobnych w literaturze europejskiej."
  },

  {
    id: "barok",
    type: "trend",
    title: {
      full: "Barok",
      short: "Barok"
    },
    time: {
      start: "1620",
      end: "1750",
      label: "XVII – pocz. XVIII w."
    },
    country: "Europa / Polska",
    categories: ["literatura", "sztuka", "kultura", "epoka literacka"],
    tags: ["kontrreformacja", "vanitas", "marność", "przepych", "kontrast", "Morsztyn", "Potocki", "Pasek"],
    layers: {
      geographic: 4,
      social: 4,
      economic: 3,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas lęku, śmierci i przepychu",
      technicalLevel: "Europa po wojnach religijnych",
      globalContext: "kontrreformacja, absolutyzm"
    },
    media: {
      image: "/img/barok.jpg",
      video: ""
    },
    relations: [
      { targetId: "renesans", type: "parallel" },
      { targetId: "oswiecenie", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Epoka kontrastów: przepych i marność, życie i śmierć (vanitas vanitatum). Dominuje kontrreformacja, ornamentyka, dramatyzm. W Polsce: sarmatyzm, pamiętnikarstwo (Pasek), liryka metafizyczna (Morsztyn), epika (Potocki). Hasło: 'memento mori' i 'carpe diem'."
  },

  {
    id: "oswiecenie",
    type: "trend",
    title: {
      full: "Oświecenie",
      short: "Oświecenie"
    },
    time: {
      start: "1750",
      end: "1822",
      label: "poł. XVIII – pocz. XIX w."
    },
    country: "Europa / Polska",
    categories: ["literatura", "filozofia", "polityka", "epoka literacka"],
    tags: ["rozum", "encyklopedyści", "Wolter", "Rousseau", "Krasicki", "klasycyzm", "sentymentalizm", "Konstytucja 3 Maja"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas rozumu, reform i rewolucji",
      technicalLevel: "prasa, encyklopedie, rewolucja przemysłowa",
      globalContext: "rewolucja francuska, rozbiory Polski"
    },
    media: {
      image: "/img/oswiecenie.jpg",
      video: ""
    },
    relations: [
      { targetId: "barok", type: "parallel" },
      { targetId: "romantyzm", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Epoka rozumu i krytyki. Hasła: wolność, równość, tolerancja. W Polsce: czasy Stanisławowskie, Komisja Edukacji Narodowej, Konstytucja 3 Maja. Kluczowi twórcy: Krasicki (satyry, bajki), Niemcewicz. Nurty: klasycyzm, sentymentalizm, rokoko."
  },

  {
    id: "romantyzm",
    type: "trend",
    title: {
      full: "Romantyzm",
      short: "Romantyzm"
    },
    time: {
      start: "1822",
      end: "1863",
      label: "1822 – 1863"
    },
    country: "Polska / Europa",
    categories: ["literatura", "filozofia", "historia", "epoka literacka"],
    tags: ["mesjanizm", "indywidualizm", "irracjonalizm", "Mickiewicz", "Słowacki", "Krasiński", "powstania", "Wielka Emigracja"],
    layers: {
      geographic: 4,
      social: 5,
      economic: 2,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas buntu, wygnania i mesjanistycznej nadziei",
      technicalLevel: "Europa po rewolucji francuskiej i napoleońskiej",
      globalContext: "wiek XIX – nacjonalizm, romantyzm europejski"
    },
    media: {
      image: "/img/romantyzm.jpg",
      video: ""
    },
    relations: [
      { targetId: "oswiecenie", type: "parallel" },
      { targetId: "wielka-emigracja", type: "parallel" },
      { targetId: "kordian", type: "influenced" },
      { targetId: "pozytywizm", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Epoka uczucia, wyobraźni i buntu przeciw rozumowi. W Polsce splata się z walką o niepodległość. Wielka Trójca: Mickiewicz, Słowacki, Krasiński. Kluczowe dzieła: 'Dziady', 'Pan Tadeusz', 'Kordian'. Idee: mesjanizm, winkelriedyzm, prometeizm, spisek."
  },

  {
    id: "dziady-mickiewicz",
    type: "work",
    title: {
      full: "Dziady (Adam Mickiewicz)",
      short: "Dziady"
    },
    time: {
      start: "1823",
      end: "1832",
      label: "1823 / 1832"
    },
    country: "Polska",
    categories: ["literatura", "dramat", "romantyzm"],
    tags: ["duchy", "patriotyzm", "mesjanizm", "miłość", "martyrologia", "obrzęd"],
    layers: {
      geographic: 3,
      social: 5,
      economic: 1,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas granicy między żywymi a umarłymi",
      technicalLevel: "druk emigracyjny XIX wieku",
      globalContext: "rozbiory Polski, powstanie listopadowe"
    },
    media: {
      image: "/img/dziady.jpg",
      video: ""
    },
    relations: [
      { targetId: "romantyzm", type: "part_of" },
      { targetId: "wielka-emigracja", type: "parallel" }
    ],
    tree: {
      parentId: "romantyzm"
    },
    description: "Cykl dramatyczny Adama Mickiewicza (cz. II, III, IV). Arcydzieło polskiego romantyzmu łączące obrzęd ludowy, miłość, martyrologię narodu polskiego i mesjanizm. III część to dramat narodowy o prześladowaniach Polaków przez Rosjan."
  },

  {
    id: "pozytywizm",
    type: "trend",
    title: {
      full: "Pozytywizm",
      short: "Pozytywizm"
    },
    time: {
      start: "1863",
      end: "1890",
      label: "1863 – ok. 1890"
    },
    country: "Polska / Europa",
    categories: ["literatura", "filozofia", "społeczeństwo", "epoka literacka"],
    tags: ["praca organiczna", "praca u podstaw", "realizm", "Prus", "Orzeszkowa", "Sienkiewicz", "emancypacja", "nauka"],
    layers: {
      geographic: 3,
      social: 5,
      economic: 5,
      mental: 4
    },
    dimensions: {
      psychologicalTime: "czas pracy, reformy i trzeźwego realizmu",
      technicalLevel: "industrializacja, kolej, telegraf",
      globalContext: "Europa po Wiośnie Ludów, darwinizm, scjentyzm"
    },
    media: {
      image: "/img/pozytywizm.jpg",
      video: ""
    },
    relations: [
      { targetId: "romantyzm", type: "parallel" },
      { targetId: "lalka-prus", type: "influenced" },
      { targetId: "mloda-polska", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Odpowiedź na klęskę powstania styczniowego. Odrzucenie romantycznego zrywu na rzecz pracy organicznej i pracy u podstaw. Hasła: nauka, postęp, emancypacja kobiet, asymilacja Żydów. Wielcy prozaicy: Bolesław Prus, Eliza Orzeszkowa, Henryk Sienkiewicz."
  },

  {
    id: "lalka-prus",
    type: "work",
    title: {
      full: "Lalka (Bolesław Prus)",
      short: "Lalka"
    },
    time: {
      start: "1890",
      end: null,
      label: "1890"
    },
    country: "Polska",
    categories: ["literatura", "powieść", "pozytywizm"],
    tags: ["klasa społeczna", "miłość", "idealizm", "kapitalizm", "Warszawa", "kupiec"],
    layers: {
      geographic: 3,
      social: 5,
      economic: 5,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas rozdarcia między marzeniem a rzeczywistością",
      technicalLevel: "Warszawa industrialna XIX wieku",
      globalContext: "Europa kapitalistyczna po 1870"
    },
    media: {
      image: "/img/lalka.jpg",
      video: ""
    },
    relations: [
      { targetId: "pozytywizm", type: "part_of" }
    ],
    tree: {
      parentId: "pozytywizm"
    },
    description: "Powieść Bolesława Prusa uważana za arcydzieło polskiego realizmu. Historia Stanisława Wokulskiego – kupca, powstańca, naukowca i romantycznego kochanka. Panorama warszawskiego społeczeństwa końca XIX w.: arystokracja, mieszczaństwo, biedota."
  },

  {
    id: "mloda-polska",
    type: "trend",
    title: {
      full: "Młoda Polska (modernizm)",
      short: "Młoda Polska"
    },
    time: {
      start: "1890",
      end: "1918",
      label: "ok. 1890 – 1918"
    },
    country: "Polska",
    categories: ["literatura", "sztuka", "kultura", "epoka literacka"],
    tags: ["dekadentyzm", "symbolizm", "impresjonizm", "Wyspiański", "Tetmajer", "Reymont", "Staff", "secesja"],
    layers: {
      geographic: 3,
      social: 4,
      economic: 2,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas dekadencji, buntu i artystycznego szaleństwa",
      technicalLevel: "fin de siècle, secesja, modernizm europejski",
      globalContext: "Europa przed I wojną światową"
    },
    media: {
      image: "/img/mloda-polska.jpg",
      video: ""
    },
    relations: [
      { targetId: "pozytywizm", type: "parallel" },
      { targetId: "wesele-wyspianski", type: "influenced" },
      { targetId: "dwudziestolecie-miedzywojenne", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "Polska odmiana europejskiego modernizmu. Bunt przeciw pozytywistycznemu utylitaryzmowi. Hasło: 'sztuka dla sztuki'. Prądy: symbolizm, impresjonizm, dekadentyzm, ekspresjonizm. Kluczowi twórcy: Wyspiański, Tetmajer, Kasprowicz, Reymont (Nobel), Staff."
  },

  {
    id: "wesele-wyspianski",
    type: "work",
    title: {
      full: "Wesele (Stanisław Wyspiański)",
      short: "Wesele"
    },
    time: {
      start: "1901",
      end: null,
      label: "1901"
    },
    country: "Polska",
    categories: ["literatura", "dramat", "Młoda Polska"],
    tags: ["chłopomania", "narodowa niemoc", "symbole", "słomiana chocholia", "Kraków", "wizja"],
    layers: {
      geographic: 2,
      social: 5,
      economic: 2,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "noc między mitem a bezsilnością",
      technicalLevel: "teatr symboliczny przełomu XIX/XX w.",
      globalContext: "Galicja pod zaborem austriackim"
    },
    media: {
      image: "/img/wesele.jpg",
      video: ""
    },
    relations: [
      { targetId: "mloda-polska", type: "part_of" }
    ],
    tree: {
      parentId: "mloda-polska"
    },
    description: "Dramat Stanisława Wyspiańskiego inspirowany autentycznym weselem poety Lucjana Rydla z chłopką. Rozrachunek z romantycznymi złudzeniami, obraz polskiej niemoci narodowej. Kluczowe symbole: złoty róg, chochoł, Wernyhora."
  },

  {
    id: "dwudziestolecie-miedzywojenne",
    type: "trend",
    title: {
      full: "Dwudziestolecie Międzywojenne",
      short: "Dwudziestolecie"
    },
    time: {
      start: "1918",
      end: "1939",
      label: "1918 – 1939"
    },
    country: "Polska / Europa",
    categories: ["literatura", "awangarda", "kultura", "epoka literacka"],
    tags: ["awangarda", "Skamandryt", "futuryzm", "ekspresjonizm", "Tuwim", "Leśmian", "Witkacy", "Staff", "niepodległość"],
    layers: {
      geographic: 4,
      social: 5,
      economic: 4,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas entuzjazmu, eksperymentu i narastającego lęku",
      technicalLevel: "radio, kino, prasa masowa, samochód",
      globalContext: "Europa między wojnami, kryzys 1929, faszyzm"
    },
    media: {
      image: "/img/dwudziestolecie.jpg",
      video: ""
    },
    relations: [
      { targetId: "mloda-polska", type: "parallel" },
      { targetId: "literatura-wspolczesna", type: "influenced" }
    ],
    tree: {
      parentId: null
    },
    description: "20 lat niepodległej Polski. Eksplozja awangardy i nowoczesności. Grupy literackie: Skamander (Tuwim, Lechoń, Słonimski), Awangarda Krakowska (Przyboś). Proza: Schulz, Gombrowicz, Nałkowska, Dąbrowska. Dramat: Witkacy. Poezja: Leśmian."
  },

  {
    id: "literatura-wspolczesna",
    type: "trend",
    title: {
      full: "Literatura Współczesna (po 1945)",
      short: "Współczesność"
    },
    time: {
      start: "1945",
      end: null,
      label: "1945 – dziś"
    },
    country: "Polska / świat",
    categories: ["literatura", "kultura", "epoka literacka"],
    tags: ["realizm socjalistyczny", "emigracja", "Miłosz", "Herbert", "Szymborska", "Mrożek", "rozliczenie z wojną", "postmodernizm"],
    layers: {
      geographic: 5,
      social: 5,
      economic: 3,
      mental: 5
    },
    dimensions: {
      psychologicalTime: "czas rozliczenia, trwogi i poszukiwania sensu",
      technicalLevel: "telewizja, internet, globalizacja",
      globalContext: "zimna wojna, PRL, transformacja ustrojowa, globalizacja"
    },
    media: {
      image: "/img/wspolczesna.jpg",
      video: ""
    },
    relations: [
      { targetId: "dwudziestolecie-miedzywojenne", type: "parallel" },
      { targetId: "powstanie-warszawskie-1944", type: "parallel" },
      { targetId: "kamienie-na-szaniec", type: "parallel" }
    ],
    tree: {
      parentId: null
    },
    description: "Literatura po II wojnie światowej – rozliczenie z Holokaustem, wojną, stalinizmem. Pokolenie Kolumbów (Baczyński, Gajcy). Na emigracji: Miłosz, Gombrowicz. W kraju: Herbert, Szymborska (Nobel), Mrożek, Różewicz. Tematy: ocalenie, tożsamość, wolność słowa."
  },
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
