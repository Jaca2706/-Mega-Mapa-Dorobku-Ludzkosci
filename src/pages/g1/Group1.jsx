import { useState, useRef, useEffect } from "react";
import "./group1.css";

const okresy = [
  {
    id: "sredniowiecze",
    nazwa: "Średniowiecze 500-1500",
    kolor: "#8B6D5C",
    start: 500,
    koniec: 1500,
    szczegoly: [
      "Beowulf (około 1000)",
      "Pieśń o Rolandzie (około 1100)",
      "Nibelungenlied (około 1200)",
      "Opowieść o Volsunach (około 1300)",
      "Geoffrey Chaucer, Opowieści kanterberyjskie (około 1390)"
    ]
  },
  {
    id: "renesans",
    nazwa: "Renesans (angielski) 1500-1670",
    kolor: "#F28C28",
    start: 1500,
    koniec: 1670,
    szczegoly: [
      "William Shakespeare (ur. 1564)",
      "Edmund Spenser, The Faerie Queene (1590)",
      "William Shakespeare, Romeo i Julia (1597)",
      "William Shakespeare, Makbet (1603)",
      "John Milton, Raj utracony (1667)"
    ]
  },
  {
    id: "oswiecenie",
    nazwa: "Oświecenie 1700-1800",
    kolor: "#2980B9",
    start: 1700,
    koniec: 1800,
    szczegoly: [
      "Benjamin Franklin",
      "Poor Richard’s Almanack (1733)",
      "Denis Diderot, Encyklopedia (1750)",
      "Voltaire, Kandyd (1759)",
      "Jean-Jacques Rousseau, Emil (1762)"
    ]
  },
  {
    id: "romantyzm",
    nazwa: "Romantyzm 1798-1870",
    kolor: "#EC4899",
    start: 1798,
    koniec: 1870,
    szczegoly: [
      "William Wordsworth, Liryczne ballady (1798)",
      "Mary Shelley, Frankenstein (1818)",
      "Lord Byron, Don Juan (1819-1824)"
    ]
  },
  {
    id: "realizm",
    nazwa: "Realizm 1820-1920",
    kolor: "#E11D48",
    start: 1820,
    koniec: 1920,
    szczegoly: [
      "Charles Dickens (ur. 1812)",
      "Fiodor Dostojewski (ur. 1821)",
      "Henry James (ur. 1843)",
      "Mark Twain (ur. 1835)",
      "Charlotte Brontë, Dziwne losy Jane Eyre (1847)"
    ]
  },
  {
    id: "modernizm",
    nazwa: "Modernizm 1910-1965",
    kolor: "#3B82F6",
    start: 1910,
    koniec: 1965,
    szczegoly: [
      "Franz Kafka, Przemiana (1915)",
      "T. S. Eliot, Ziemia jałowa (1922)",
      "F. Scott Fitzgerald, Wielki Gatsby (1925)",
      "William Faulkner, Dźwięk i furia (1929)",
      "Albert Camus, Dżuma (1942)"
    ]
  },
  {
    id: "postmodernizm",
    nazwa: "Postmodernizm 1965-obecnie",
    kolor: "#16A34A",
    start: 1965,
    koniec: 2026,
    szczegoly: [
      "Samuel Beckett, Czekając na Godota (1949)",
      "Allen Ginsberg, Ryk (1956)",
      "Jack Kerouac, W drodze (1957)"
    ]
  }
];

function Group1() {
  const [wybrany, setWybrany] = useState(null);

  useEffect(() => {
    // Ustawiamy kolory kropek po załadowaniu komponentu
    const blocks = document.querySelectorAll('.period-block-vertical');
    blocks.forEach(block => {
      const borderColor = block.style.borderLeftColor;
      if (borderColor) {
        const pseudo = window.getComputedStyle(block, '::before');
        // Dodajemy styl do head dla każdej kropki
        const styleId = `style-${borderColor.replace(/[^a-zA-Z0-9]/g, '')}`;
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = `
            .period-block-vertical[style*="border-left-color: ${borderColor}"]::before {
              background-color: ${borderColor};
            }
          `;
          document.head.appendChild(style);
        }
      }
    });
  }, []);

  return (
    <div className="timeline-container-vertical">
      <h1>Oś czasu epok literackich</h1>
      <div className="timeline-vertical">
        {okresy.map((okres, index) => (
          <div
            key={okres.id}
            className={`period-block-vertical ${wybrany === okres.id ? "active" : ""}`}
            style={{ borderLeftColor: okres.kolor }}
            onClick={() => setWybrany(wybrany === okres.id ? null : okres.id)}
            title={okres.nazwa}
          >
            <div 
              className="period-label-vertical"
              style={{ color: okres.kolor }}
            >
              {okres.nazwa}
            </div>
            {wybrany === okres.id && (
              <ul className="period-details-vertical">
                {okres.szczegoly.map((pkt, i) => (
                  <li key={i}>{pkt}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Group1;