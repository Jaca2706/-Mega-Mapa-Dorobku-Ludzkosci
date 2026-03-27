import { useState } from "react";
import "./group1.css";
import { historyData } from "../../baza/historyData";

const okresy = [
  { id: "antyk", nazwa: "Antyk", kolor: "#6B7280", start: -800, koniec: 500, image: "https://www.rodzice.pl/wp-content/uploads/2024/02/antyk-najwazniejsze-informacje-1536x1024.jpg" },
  { id: "sredniowiecze", nazwa: "Średniowiecze", kolor: "#8B6D5C", start: 500, koniec: 1500, image: "https://cerebriti.b-cdn.net/uploads/FB_3628a9cc739e132cb21060a6bc951618.jpg" },
  { id: "renesans", nazwa: "Renesans", kolor: "#F28C28", start: 1500, koniec: 1600, image: "https://tse3.mm.bing.net/th/id/OIP.9bp-5dSrle0td3w0RCURVwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "barok", nazwa: "Barok", kolor: "#7C3AED", start: 1600, koniec: 1750, image: "https://th.bing.com/th/id/R.56aa5123167b706e71af2b62caea386d?rik=DYaWfVR5Ic7kow&riu=http%3a%2f%2feszkola.pl%2fimg%2fgalleries%2fthumb%2fhome%2f640px_Klosterfuerstenfeldinnen.jpg&ehk=T3tH0OvWrMkyiTsYnWISUwkEz13bVcwFfIjsvtWoVSc%3d&risl=&pid=ImgRaw&r=0" },
  { id: "oswiecenie", nazwa: "Oświecenie", kolor: "#2980B9", start: 1750, koniec: 1822, image: "https://tse2.mm.bing.net/th/id/OIP.t-XYfffaOvoCu603FpSLlAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "romantyzm", nazwa: "Romantyzm", kolor: "#EC4899", start: 1822, koniec: 1863, image: "https://historiasztuki.info/wp-content/uploads/2022/07/romantyzm-w-malarstwie.png" },
  { id: "pozytywizm", nazwa: "Pozytywizm", kolor: "#F59E0B", start: 1864, koniec: 1890, image: "https://3.bp.blogspot.com/-WEfTalthDXQ/Uv1QloWTVTI/AAAAAAAAAF4/9rR0VyWpGj0/s1600/malarstwo%2520polskie.jpg" },
  { id: "mloda-polska", nazwa: "Młoda Polska", kolor: "#E11D48", start: 1890, koniec: 1918, image: "https://image.slidesharecdn.com/modapolska-170425212629/75/Mloda-polska-Epoka-5-2048.jpg" },
  { id: "dwudziestolecie", nazwa: "Dwudziestolecie", kolor: "#3B82F6", start: 1918, koniec: 1939, image: "https://th.bing.com/th/id/R.9e842d263ea928be77bae72af0696831?rik=gfttBP%2bUbO9Pyw&riu=http%3a%2f%2flicealista.pl%2fwp-content%2fuploads%2f2016%2f02%2fdwudziestolecie-miedzywojenne.jpg&ehk=AoWgjjxisLcOFiGj%2bSVaLi6DEnE3fqFx1SMzokSGUf0%3d&risl=&pid=ImgRaw&r=0" },
  { id: "wojna", nazwa: "Wojna i okupacja", kolor: "#1F2937", start: 1939, koniec: 1945, image: "https://aniakubica.com/wp-content/uploads/2021/03/wojna-i-okupacja-prezentacja.jpeg" },
  { id: "wspolczesnosc", nazwa: "Współczesność", kolor: "#16A34A", start: 1945, koniec: 2026, image: "https://joniak-galeria.pl/wp-content/uploads/2025/08/sztuka-wspolczesna-1024x683.png" }
];

const getEventsForPeriod = (start, end) => {
  return historyData.filter(item => {
    if (!item.time || !item.time.start) return false;
    const year = parseInt(item.time.start);
    if (isNaN(year)) return false;
    return year >= start && year < end;
  });
};

function Group1() {
  const [wybrany, setWybrany] = useState(null);
  const [wybranyEvent, setWybranyEvent] = useState(null); // śledzi kliknięte wydarzenie

const handleEventClick = (event) => {
  setWybranyEvent(event.id === wybranyEvent ? null : event.id);
};

const getEventDetails = (id) => {
  return historyData.find(item => item.id === id);
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
        
        <div className="timeline-points-container">
          {okresy.map((okres) => {
            const isActive = wybrany === okres.id;
            
            return (
              <div
                key={okres.id}
                className={`timeline-period-item ${isActive ? "active" : ""}`}
                onClick={() => setWybrany(isActive ? null : okres.id)}
              >
                <div 
                  className="timeline-dot"
                  style={{ 
                    backgroundColor: okres.kolor,
                    "--dot-color": okres.kolor 
                  }}
                ></div>
                <div className="timeline-label">
                  <div>{okres.nazwa}</div>
                  <div className="timeline-dates">
                    {formatYear(okres.start)}<br />{formatYear(okres.koniec)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel informacyjny */}
{wybrany && (() => {
  const selectedPeriod = okresy.find(o => o.id === wybrany);
  const wydarzenia = getEventsForPeriod(selectedPeriod.start, selectedPeriod.koniec);

  // Pobieramy description z historyData, jeśli istnieje
  const periodData = historyData.find(item => item.id === selectedPeriod.id);
  const opisEpoki = periodData?.description;

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
      
      <div className="panel-content">
        <div className="panel-header">
          <div className="panel-text">
            <h3>{selectedPeriod.nazwa}</h3>
            <div className="period-range">
              📅 {formatYear(selectedPeriod.start)} – {formatYear(selectedPeriod.koniec)}
            </div>
          </div>
          <div className="panel-image-container">
            <img 
              src={selectedPeriod.image} 
              alt={selectedPeriod.nazwa}
              className="epoch-image"
            />
          </div>
        </div>

        {/* Wyświetlenie długiego opisu epoki */}
        {opisEpoki && (
          <div className="epoka-description-container">
            {Array.isArray(opisEpoki) ? (
              opisEpoki.map((paragraph, idx) => <p key={idx} className="epoka-description">{paragraph}</p>)
            ) : (
              <p className="epoka-description">{opisEpoki}</p>
            )}
          </div>
        )}

        <ul className="timeline-events-list">
          {wydarzenia.length > 0 ? (
            wydarzenia.map((item) => (
              <li key={item.id} className={`timeline-event-item ${wybranyEvent === item.id ? "active-event" : ""}`} onClick={(e) => { e.stopPropagation(); handleEventClick(item); }}>
                <strong>{item.title.short}</strong> – {item.time.label}

                {wybranyEvent === item.id && (
                  <div className="timeline-event-details">
                    <p>{item.description}</p>
                    {item.media.image && <img src={item.media.image} alt={item.title.short} />}
                    {item.media.video && <video src={item.media.video} controls />}
                    <div className="event-meta">
                      <div>🌍 {item.country}</div>
                      <div>📂 Kategorie: {item.categories.join(", ")}</div>
                      <div>🏷️ Tag: {item.tags.join(", ")}</div>
                    </div>
                  </div>
                )}
              </li>
            ))
          ) : (
            <li>📖 Brak wydarzeń dla tej epoki</li>
          )}
        </ul>
      </div>
    </div>
  );
})()}
      </div>
    </div>
  );
}

export default Group1;