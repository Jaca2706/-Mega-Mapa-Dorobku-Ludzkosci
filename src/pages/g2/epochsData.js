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
  }

];
