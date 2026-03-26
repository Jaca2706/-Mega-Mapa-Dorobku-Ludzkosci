import { useState } from "react";
import "./group1.css";
import { historyData } from "../../baza/historyData";


const okresy = [
  { id: "antyk", nazwa: "Antyk", kolor: "#6B7280", start: -800, koniec: 500 },
  { id: "sredniowiecze", nazwa: "Średniowiecze", kolor: "#8B6D5C", start: 500, koniec: 1500 },
  { id: "renesans", nazwa: "Renesans", kolor: "#F28C28", start: 1500, koniec: 1600 },
  { id: "barok", nazwa: "Barok", kolor: "#7C3AED", start: 1600, koniec: 1750 },
  { id: "oswiecenie", nazwa: "Oświecenie", kolor: "#2980B9", start: 1750, koniec: 1822 },
  { id: "romantyzm", nazwa: "Romantyzm", kolor: "#EC4899", start: 1822, koniec: 1863 },
  { id: "pozytywizm", nazwa: "Pozytywizm", kolor: "#F59E0B", start: 1864, koniec: 1890 },
  { id: "mloda-polska", nazwa: "Młoda Polska", kolor: "#E11D48", start: 1890, koniec: 1918 },
  { id: "dwudziestolecie", nazwa: "Dwudziestolecie", kolor: "#3B82F6", start: 1918, koniec: 1939 },
  { id: "wojna", nazwa: "Wojna i okupacja", kolor: "#1F2937", start: 1939, koniec: 1945 },
  { id: "wspolczesnosc", nazwa: "Współczesność", kolor: "#16A34A", start: 1945, koniec: 2026 }
];


const getEventsForPeriod = (start, end) => {
  return historyData.filter(item => {
    if (!item.time || !item.time.start) return false;

    const year = parseInt(item.time.start);

    if (isNaN(year)) return false;

    // 🔥 KLUCZOWE: < zamiast <=
    return year >= start && year < end;
  });
};

function Group1() {
  const [wybrany, setWybrany] = useState(null);

  return (
    <div className="timeline-container-vertical">
      <h1>Oś czasu epok literackich</h1>

      <div className="timeline-vertical">
        {okresy.map((okres) => {
          const wydarzenia = getEventsForPeriod(okres.start, okres.koniec);

          return (
            <div
              key={okres.id}
              className={`period-block-vertical ${
                wybrany === okres.id ? "active" : ""
              }`}
              style={{ borderLeftColor: okres.kolor }}
              onClick={() =>
                setWybrany(wybrany === okres.id ? null : okres.id)
              }
            >
              <div
                className="period-label-vertical"
                style={{ color: okres.kolor }}
              >
                {okres.nazwa}
              </div>

              {wybrany === okres.id && (
                <ul className="period-details-vertical">
                  {wydarzenia.length > 0 ? (
                    wydarzenia.map((item) => (
                      <li key={item.id}>
                        <strong>{item.title.short}</strong> –{" "}
                        {item.time.label}
                      </li>
                    ))
                  ) : (
                    <li>Brak danych</li>
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Group1;