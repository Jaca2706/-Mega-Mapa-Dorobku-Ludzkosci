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

// 🔥 NOWY sposób — po epoch
const getEventsForPeriod = (epokaId) => {
  return historyData.filter(
    (item) => item.type === "work" && item.epoch === epokaId
  );
};

function Group1() {
  const [wybrany, setWybrany] = useState(null);
  const [wybranyEvent, setWybranyEvent] = useState(null);

  const handleEventClick = (event) => {
    setWybranyEvent(event.id === wybranyEvent ? null : event.id);
  };

  const formatYear = (year) => {
    if (year < 0) return `${Math.abs(year)} p.n.e.`;
    return `${year} n.e.`;
  };

  return (
    <div className="timeline-container-vertical">
      <h1>📚 Oś czasu epok literackich</h1>

      <div className="timeline-horizontal">
        <div className="timeline-track"></div>

        {/* KROPKI */}
        <div className="timeline-points-container">
          {okresy.map((okres) => {
            const isActive = wybrany === okres.id;

            return (
              <div
                key={okres.id}
                className={`timeline-period-item ${isActive ? "active" : ""}`}
                onClick={() => {
                  setWybrany(isActive ? null : okres.id);
                  setWybranyEvent(null);
                }}
              >
                <div
                  className="timeline-dot"
                  style={{ backgroundColor: okres.kolor }}
                ></div>

                <div className="timeline-label">
                  <div>{okres.nazwa}</div>
                  <div className="timeline-dates">
                    {formatYear(okres.start)}<br />
                    {formatYear(okres.koniec)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PANEL */}
        {wybrany && (() => {
          const selectedPeriod = okresy.find(o => o.id === wybrany);
          const wydarzenia = getEventsForPeriod(selectedPeriod.id);

          // 🔥 pobieranie epoki z bazy
          const periodData = historyData.find(
            item => item.type === "epoch" && item.id === selectedPeriod.id
          );

          const opisEpoki = periodData?.description;
          const ciekawostki = periodData?.ciekawostki;

          return (
            <div
              className="timeline-info-panel"
              style={{ "--panel-color": selectedPeriod.kolor }}
            >
              <button
                className="close-info-panel"
                onClick={() => setWybrany(null)}
              >
                ✕
              </button>

              <h3>{selectedPeriod.nazwa}</h3>

              <div className="period-range">
                📅 {formatYear(selectedPeriod.start)} –{" "}
                {formatYear(selectedPeriod.koniec)}
              </div>

              {/* OPIS */}
              {opisEpoki && (
                <div className="epoka-description">
                  {Array.isArray(opisEpoki)
                    ? opisEpoki.map((linia, index) => (
                        <p key={index}>{linia}</p>
                      ))
                    : <p>{opisEpoki}</p>
                  }
                </div>
              )}

              {/* CIEKAWOSTKI */}
              {ciekawostki && (
                <div className="epoka-ciekawostki">
                  <h4>💡 Ciekawostki:</h4>
                  {ciekawostki.map((ciek, i) => (
                    <p key={i}>{ciek}</p>
                  ))}
                </div>
              )}

              {/* WYDARZENIA */}
              <ul className="timeline-events-list">
                {wydarzenia.length > 0 ? (
                  wydarzenia.map((item) => (
                    <li
                      key={item.id}
                      className={`timeline-event-item ${
                        wybranyEvent === item.id ? "active-event" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(item);
                      }}
                    >
                      <strong>{item.title}</strong> – {item.year}

                      {wybranyEvent === item.id && (
                        <div className="timeline-event-details">
                          <p>{item.description}</p>
                        </div>
                      )}
                    </li>
                  ))
                ) : (
                  <li>📖 Brak wydarzeń dla tej epoki</li>
                )}
              </ul>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

export default Group1;