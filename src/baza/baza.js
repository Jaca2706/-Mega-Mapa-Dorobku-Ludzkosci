/*export const historyData = [
    {
      id: "unique-id",
      type: "event", // "event" | "work" | "trend" | "epoch"
  
      title: {
        full: "",
        short: ""
      },
  
      time: {
        start: "",     // "1944-08-01" lub "1834"
        end: null,     // null jeśli wydarzenie punktowe
        label: ""      // np. "1832-1864"
      },
  
      country: "",
  
      categories: [],  // np. ["historia", "literatura"]
      tags: [],        // np. ["romantyzm", "rewolucja"]
  
      layers: {
        geographic: 0, // 0-5
        social: 0,
        economic: 0,
        mental: 0
      },
  
      dimensions: {
        psychologicalTime: "",
        technicalLevel: "",
        globalContext: ""
      },
  
      media: {
        image: "",   // ścieżka do pliku lub URL
        video: ""    // ścieżka do pliku lub URL
      },
  
      relations: [
        {
          targetId: "", 
          type: "influenced_by" 
          // "influenced_by" | "influenced" | "part_of" | "inspired" | "parallel"
        }
      ],
  
      tree: {
        parentId: null // id elementu nadrzędnego (dla drzewa rozwoju)
      },
  
      description: ""
    }
  ];*/
  export const historyData = [

    {
      id: "powstanie-warszawskie-1944",
      type: "event",
      title: {
        full: "Powstanie Warszawskie",
        short: "PW 1944"
      },
      time: {
        start: "1944-08-01",
        end: "1944-10-02",
        label: "1 VIII - 2 X 1944"
      },
      country: "Polska",
      categories: ["historia", "wojna"],
      tags: ["II wojna światowa", "Armia Krajowa", "opór", "okupacja"],
      layers: {
        geographic: 5,
        social: 5,
        economic: 4,
        mental: 5
      },
      dimensions: {
        psychologicalTime: "czas traumy i heroizmu",
        technicalLevel: "wojna przemysłowa XX wieku",
        globalContext: "II wojna światowa"
      },
      media: {
        image: "/img/powstanie.jpg",
        video: "/video/powstanie.mp4"
      },
      relations: [
        { targetId: "kamienie-na-szaniec", type: "parallel" }
      ],
      tree: {
        parentId: null
      },
      description: "Zbrojne wystąpienie Armii Krajowej przeciw okupacji niemieckiej w Warszawie."
    },
  
    {
      id: "kamienie-na-szaniec",
      type: "work",
      title: {
        full: "Kamienie na szaniec (Aleksander Kamiński)",
        short: "Kamienie"
      },
      time: {
        start: "1943",
        end: null,
        label: "1943"
      },
      country: "Polska",
      categories: ["literatura", "reportaż", "wojna"],
      tags: ["Szare Szeregi", "harcerstwo", "patriotyzm", "II wojna światowa"],
      layers: {
        geographic: 2,
        social: 5,
        economic: 1,
        mental: 5
      },
      dimensions: {
        psychologicalTime: "dojrzewanie w czasie wojny",
        technicalLevel: "druk konspiracyjny",
        globalContext: "II wojna światowa"
      },
      media: {
        image: "/img/kamienie.jpg",
        video: ""
      },
      relations: [
        { targetId: "powstanie-warszawskie-1944", type: "parallel" }
      ],
      tree: {
        parentId: null
      },
      description: "Opowieść o młodych harcerzach Szarych Szeregów walczących w okupowanej Polsce."
    },
  
    {
      id: "wielka-emigracja",
      type: "trend",
      title: {
        full: "Wielka Emigracja",
        short: "Emigracja"
      },
      time: {
        start: "1831",
        end: "1870",
        label: "po 1831"
      },
      country: "Polska / Francja",
      categories: ["historia", "kultura", "romantyzm"],
      tags: ["emigracja polityczna", "powstanie listopadowe", "elity"],
      layers: {
        geographic: 4,
        social: 5,
        economic: 3,
        mental: 5
      },
      dimensions: {
        psychologicalTime: "czas wygnania i mesjanizmu",
        technicalLevel: "Europa przedindustrialna",
        globalContext: "Europa XIX wieku"
      },
      media: {
        image: "/img/emigracja.jpg",
        video: ""
      },
      relations: [
        { targetId: "kordian", type: "influenced" }
      ],
      tree: {
        parentId: null
      },
      description: "Emigracja polskich elit politycznych i intelektualnych po upadku powstania listopadowego."
    },
  
    {
      id: "kordian",
      type: "work",
      title: {
        full: "Kordian (Juliusz Słowacki)",
        short: "Kordian"
      },
      time: {
        start: "1834",
        end: null,
        label: "1834"
      },
      country: "Polska",
      categories: ["literatura", "dramat", "romantyzm"],
      tags: ["mesjanizm", "spisek", "indywidualizm"],
      layers: {
        geographic: 2,
        social: 4,
        economic: 1,
        mental: 5
      },
      dimensions: {
        psychologicalTime: "romantyczny bunt jednostki",
        technicalLevel: "druk XIX wieku",
        globalContext: "Europa po kongresie wiedeńskim"
      },
      media: {
        image: "/img/kordian.jpg",
        video: ""
      },
      relations: [
        { targetId: "wielka-emigracja", type: "part_of" },
        { targetId: "wiosna-ludow-1848", type: "parallel" }
      ],
      tree: {
        parentId: null
      },
      description: "Dramat romantyczny ukazujący konflikt jednostki z historią i odpowiedzialność moralną za naród."
    },
  
    {
      id: "wiosna-ludow-1848",
      type: "event",
      title: {
        full: "Wiosna Ludów (1848)",
        short: "1848"
      },
      time: {
        start: "1848",
        end: "1849",
        label: "1848-1849"
      },
      country: "Europa",
      categories: ["historia", "rewolucja"],
      tags: ["liberalizm", "narodowość", "rewolucje europejskie"],
      layers: {
        geographic: 5,
        social: 5,
        economic: 4,
        mental: 4
      },
      dimensions: {
        psychologicalTime: "czas nadziei i rewolucyjnego entuzjazmu",
        technicalLevel: "Europa industrialna",
        globalContext: "rewolucje XIX wieku"
      },
      media: {
        image: "/img/wiosna.jpg",
        video: ""
      },
      relations: [
        { targetId: "kordian", type: "parallel" }
      ],
      tree: {
        parentId: null
      },
      description: "Seria rewolucji w Europie w latach 1848-1849, związanych z walką o prawa narodowe i liberalne reformy."
    }
  
  ];