export const historyData = [
    // ----------------- ANTYK -----------------
    { 
      id: "antyk", 
      nazwa: "Antyk", 
      kolor: "#6B7280", 
      start: -800, 
      koniec: 500,
      description: ["W centrum zainteresowania stał człowiek, jego rozum i harmonia świata. Mitologia ukazywała bogów ingerujących w życie ludzi. Powstały podstawy filozofii i teatru.",
        
        "Dzieła i autorzy:",
        "Homer – Iliada (wojna trojańska, ideał bohatera)",
        "Homer – Odyseja (podróż Odyseusza do ojczyzny)",
        "Sofokles – Król Edyp (człowiek wobec przeznaczenia)",
        "Sofokles – Antygona (konflikt prawa boskiego i ludzkiego)",

        "Ciekawostki:",
        "🏟️ Pierwsze igrzyska olimpijskie (776 p.n.e.) |", 
        "🎭 Narodziny teatru – aktorzy w maskach |", 
        "⚔️ Wojna trojańska inspiracją dzieł |", "🧠 Filozofowie (Sokrates) o sensie życia |",
        "⚡ Grecy wierzyli, że bogowie żyją jak ludzie – tylko są nieśmiertelni"
      ]
    },
    {
      id: "iliada",
      type: "work",
      title: { full: "Iliada (Homer)", short: "Iliada" },
      time: { start: "-750", end: null, label: "ok. VIII w. p.n.e." },
      country: "Grecja",
      categories: ["literatura", "antyk"],
      tags: ["epos", "mitologia"],
      layers: { geographic: 3, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "świat bohaterów i bogów", technicalLevel: "kultura oralna", globalContext: "starożytność" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Epos o wojnie trojańskiej."
    },

    {
      id: "odyseja",
      type: "work",
      title: { full: "Odyseja (Homer)", short: "Odyseja" },
      time: { start: "-725", end: null, label: "ok. VIII w. p.n.e." },
      country: "Grecja",
      categories: ["literatura", "antyk"],
      tags: ["epos", "mitologia"],
      layers: { geographic: 3, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "świat bohaterów i bogów", technicalLevel: "kultura oralna", globalContext: "starożytność" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Epos opowiadający podróż Odyseusza po wojnie trojańskiej."
    },
  
    // ----------------- ŚREDNIOWIECZE -----------------
    {
      id: "bogurodzica",
      type: "work",
      title: { full: "Bogurodzica", short: "Bogurodzica" },
      time: { start: "1200", end: null, label: "średniowiecze" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["religia", "średniowiecze"],
      layers: { geographic: 2, social: 5, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "teocentryzm", technicalLevel: "manuskrypty", globalContext: "średniowiecze" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Najstarsza polska pieśń religijna."
    },
  
    // ----------------- RENESANS -----------------
    {
      id: "treny",
      type: "work",
      title: { full: "Treny (Jan Kochanowski)", short: "Treny" },
      time: { start: "1580", end: null, label: "1580" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["renesans"],
      layers: { geographic: 2, social: 3, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "humanizm i kryzys", technicalLevel: "druk", globalContext: "renesans" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Cykl trenów po śmierci córki."
    },
  
    // ----------------- BAROK -----------------
    {
      id: "dziennik",
      type: "work",
      title: { full: "Dziennik (Jan Chryzostom Pasek)", short: "Dziennik" },
      time: { start: "1660", end: null, label: "1660" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["barok"],
      layers: { geographic: 2, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "kontrreformacja", technicalLevel: "druk", globalContext: "barok" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Pamiętniki szlacheckie pełne szczegółów życia codziennego."
    },
  
    // ----------------- OŚWIECENIE -----------------
    {
      id: "kandyd",
      type: "work",
      title: { full: "Kandyd (Voltaire)", short: "Kandyd" },
      time: { start: "1759", end: null, label: "1759" },
      country: "Francja",
      categories: ["literatura"],
      tags: ["oświecenie"],
      layers: { geographic: 3, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "racjonalizm", technicalLevel: "druk", globalContext: "oświecenie" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Satyra filozoficzna."
    },
  
    // ----------------- ROMANTYZM -----------------
    {
      id: "dziady",
      type: "work",
      title: { full: "Dziady (Adam Mickiewicz)", short: "Dziady" },
      time: { start: "1832", end: null, label: "1832" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["romantyzm"],
      layers: { geographic: 2, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "duchowość i bunt", technicalLevel: "druk", globalContext: "romantyzm" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Dramat romantyczny."
    },
  
    // ----------------- POZYTYWIZM -----------------
    {
      id: "lalka",
      type: "work",
      title: { full: "Lalka (Bolesław Prus)", short: "Lalka" },
      time: { start: "1890", end: null, label: "1890" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["pozytywizm"],
      layers: { geographic: 2, social: 5, economic: 4, mental: 4 },
      dimensions: { psychologicalTime: "społeczeństwo i rozwój", technicalLevel: "druk XIX w.", globalContext: "pozytywizm" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Powieść realistyczna o społeczeństwie."
    },
  
    // ----------------- MŁODA POLSKA -----------------
    {
      id: "wesele",
      type: "work",
      title: { full: "Wesele (Stanisław Wyspiański)", short: "Wesele" },
      time: { start: "1901", end: null, label: "1901" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["mloda polska"],
      layers: { geographic: 2, social: 5, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "symbolizm", technicalLevel: "druk", globalContext: "modernizm" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Dramat symboliczny."
    },
  
    // ----------------- DWUDZIESTOLECIE MIĘDZYWOJENNE -----------------
    {
      id: "ferdydurke",
      type: "work",
      title: { full: "Ferdydurke (Gombrowicz)", short: "Ferdydurke" },
      time: { start: "1937", end: null, label: "1937" },
      country: "Polska",
      categories: ["literatura"],
      tags: ["dwudziestolecie"],
      layers: { geographic: 2, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "forma i absurd", technicalLevel: "druk", globalContext: "XX wiek" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Powieść groteskowa."
    },
  
    // ----------------- WOJNA I OKUPACJA -----------------
    {
      id: "lalka-wojna",
      type: "work",
      title: { full: "Kamienie na szaniec (Aleksander Kamiński)", short: "Kamienie" },
      time: { start: "1943", end: null, label: "1943" },
      country: "Polska",
      categories: ["literatura", "wojna"],
      tags: ["okupacja", "II wojna światowa"],
      layers: { geographic: 2, social: 5, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "dojrzewanie w czasie wojny", technicalLevel: "druk", globalContext: "wojna" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Opowieść o młodych harcerzach Szarych Szeregów."
    },
  
    // ----------------- WSPÓŁCZESNOŚĆ -----------------
    {
      id: "postmodern-work",
      type: "work",
      title: { full: "Czekając na Godota (Samuel Beckett)", short: "Godot" },
      time: { start: "1950", end: null, label: "1950" },
      country: "Francja",
      categories: ["literatura", "postmodernizm"],
      tags: ["absurd", "dramat"],
      layers: { geographic: 3, social: 4, economic: 1, mental: 5 },
      dimensions: { psychologicalTime: "postmodernizm", technicalLevel: "druk XX w.", globalContext: "współczesność" },
      media: { image: "", video: "" },
      relations: [],
      tree: { parentId: null },
      description: "Dramat absurdu i egzystencjalizmu."
    }
  ];