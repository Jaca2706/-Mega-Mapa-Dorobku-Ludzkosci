import React, { useState } from "react";

const nodesData = [
  { id: 1, title: "Krytyka narzuconych ograniczeń", description: "", x: 150, y: 200 },
  { id: 2, title: "Indywidualizm", description: "", x: 50, y: 300 },
  { id: 3, title: "Egzystencjalizm", description: "", x: 250, y: 350 },
  { id: 4, title: "Karl Marx", description: "Wymyślił komunizm i cos tam", image: "https://cdn.britannica.com/23/129223-050-9EFF49C3/Karl-Marx.jpg", x: 400, y: 100 },
  { id: 5, title: "Marksizm", description: "", x: 550, y: 50 },
  { id: 6, title: "Jean-Paul Sartre", description: "(ur. 1905 – zm. 1980)", image: "https://www.the-tls.com/wp-content/uploads/2019/11/Sartre.jpg", x: 100, y: 50 },
  { id: 7, title: "Nihilizm", description: "", x: 300, y: 450 },
  { id: 8, title: "Empiryzm", description: "", x: 500, y: 500 },
  { id: 9, title: "Modernizm", description: "", x: 750, y: 200 },
  { id: 10, title: "Surrealizm", description: "", x: 850, y: 100 },
  { id: 11, title: "Kubizm", description: "", x: 900, y: 300 },
  { id: 12, title: "Rozwój społeczeństwa", description: "", x: 600, y: 400 },
  { id: 13, title: "Prawa człowieka", description: "", x: 400, y: 300 },
  { id: 14, title: "Ascetyzm", description: "", x: 1100, y: 200 },
  { id: 15, title: "Poświęcenie dla dobra ogółu", description: "", x: 1000, y: 420 },
  { id: 16, title: "Racjonalizm", description: "", x: 800, y: 400 },
  { id: 17, title: "Przekraczanie granic", description: "", x: 1300, y: 150 }, 
  { id: 18, title: "Autentyczność i rozwój", description: "", x: , y: },
  { id: 19, title: "Podważanie prawd i dogmatów", description: "", x: , y: },
  { id: 20, title: "Krytyka religii i wartości", description: "", x: , y: },
  { id: 21, title: "Krytyka kapitalizmu", description: "", x: , y: },
  { id: 22, title: "Zagubienie jednostki", description: "", x: , y: },
  { id: 23, title: "Postmodernizm", description: "", x: , y: },
  { id: 24, title: "Manipulacja społeczeństwa", description: "", x: , y: },
  { id: 25, title: "Alienacja jednostki", description: "", x: , y: },
  { id: 26, title: "Dystopizm", description: "", x: , y: },
  { id: 27, title: "Ograniczenie wolności", description: "", x: , y: },
  { id: 28, title: "Cierpienie jako motyw", description: "", x: , y: },
  { id: 29, title: "Alegoryzm", description: "", x: , y: },
  { id: 30, title: "Społeczeństwo komsumpcyjne", description: "", x: , y: },
  { id: 31, title: "Początek Kapitalizmu", description: "", x: , y: },
  { id: 32, title: "Zmiana porządku", description: "", x: , y: },
  { id: 33, title: "Wolność jednostki", description: "", x: , y: },
  { id: 34, title: "Egalitaryzm", description: "", x: , y: },
  { id: 35, title: "Zagłada społeczeństwa", description: "", x: , y: }
];
const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 6 },
  { from: 4, to: 5 },
  { from: 4, to: 1 },
  { from: 12, to: 13 },
];

export default function Group4() {
  const [activeNode, setActiveNode] = useState(null);
  const [clickedNodeId, setClickedNodeId] = useState(null);

  const getNodeById = (id) => nodesData.find((n) => n.id === id);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ================= HEADER ================= */}
      <header style={{ background: "#1e293b", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Mapa dorobku ludzkości</h1>
        <h3>Interaktywna sieć powiązań</h3>
      </header>

      {/* ================= INTRO ================= */}
      <section style={{ display: "flex", padding: "30px", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <h2>Witaj!</h2>
          <p>To interaktywna mapa przedstawiająca najważniejsze osiągnięcia ludzkości oraz powiązania między nimi.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Jak działa mapa?</h2>
          <ul>
            <li>Kliknij blok, aby zobaczyć efekt wizualny</li>
            <li>Najedź na blok, aby zobaczyć przycisk "Czytaj więcej"</li>
            <li>Przycisk otwiera szczegółowy opis zagadnienia</li>
          </ul>
        </div>
      </section>

      {/* ================= NETWORK ================= */}
      <section style={{ position: "relative", height: "600px", borderTop: "2px solid #ccc" }}>
        {/* SVG CONNECTIONS */}
        <svg style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}>
          {connections.map((conn, index) => {
            const from = getNodeById(conn.from);
            const to = getNodeById(conn.to);
            return <line key={index} x1={from.x + 75} y1={from.y + 25} x2={to.x + 75} y2={to.y + 25} stroke="black" strokeWidth="2" />;
          })}
        </svg>

        {/* CENTRAL NODE */}
        <div style={{ position: "absolute", top: "250px", left: "45%", width: "200px", padding: "15px", background: "#0ea5e9", color: "white", textAlign: "center", borderRadius: "10px", zIndex: 2 }}>
          <strong>Dorobek ludzkości</strong>
        </div>

        {/* NODES */}
        {nodesData.map((node) => (
          <div
            key={node.id}
            onClick={() => {
              setClickedNodeId(node.id);
              setActiveNode(node);
              setTimeout(() => setClickedNodeId(null), 200);
            }}
            style={{
              position: "absolute",
              top: node.y,
              left: node.x,
              width: "150px",
              padding: "10px",
              background: "#f1f5f9",
              border: "1px solid #ccc",
              borderRadius: "10px",
              cursor: "pointer",
              zIndex: 2,
              transition: "0.2s",
              transform: clickedNodeId === node.id ? "scale(0.95)" : "scale(1)",
              filter: clickedNodeId === node.id ? "brightness(0.8)" : "brightness(1)",
              textAlign: "center",
            }}
          >
            {node.image && (
              <img src={node.image} alt={node.title} style={{ width: "100%", height: "80px", objectFit: "cover", borderRadius: "8px", marginBottom: "5px" }} />
            )}
            <strong>{node.title}</strong>
          </div>
        ))}

        {/* POPUP */}
        
        {activeNode && (
  <div
    style={{
      position: "absolute",
      bottom: "20px",
      left: "20px",
      background: "white",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      width: "300px",
      zIndex: 3,
    }}
  >
    <h3>{activeNode.title}</h3>

    {activeNode.image && (
      <img
        src={activeNode.image}
        alt={activeNode.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
    )}

    <p>{activeNode.description}</p>
    <button onClick={() => setActiveNode(null)}>Zamknij</button>
  </div>
)}
        
      </section>
    </div>
  );
}