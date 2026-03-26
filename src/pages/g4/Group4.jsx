import React, { useState } from "react";

const nodesData = [
  { id: 1, title: "Krytyka narzuconych ograniczeń", description: "", x: 100, y: 150 },
  { id: 2, title: "Indywidualizm", description: "", x: 50, y: 200 },
  { id: 3, title: "Egzystencjalizm", description: "", x: 100, y: 250 },
  { id: 4, title: "Karl Marx", description: "Wymyślił komunizm i cos tam", image: "https://cdn.britannica.com/23/129223-050-9EFF49C3/Karl-Marx.jpg", x: 300, y: 100 },
  { id: 5, title: "Marksizm", description: "", x: 350, y: 50 },
  { id: 6, title: "Jean-Paul Sartre", description: "(ur. 21 czerwca 1905 w Paryżu – zm. 15 kwietnia 1980) – powieściopisarz, dramaturg, eseista i filozof francuski.", x: 50, y: 100 },
  { id: 7, title: "Nihilizm", description: "", x: 150, y: 300 },
  { id: 8, title: "Empiryzm", description: "", x: 250, y: 350 },
  { id: 9, title: "Modernizm", description: "", x: 550, y: 150 },
  { id: 10, title: "Surrealizm", description: "", x: 600, y: 100 },
  { id: 11, title: "Kubizm", description: "", x: 650, y: 150 },
  { id: 12, title: "Rozwój społeczeństwa", description: "", x: 450, y: 400 },
  { id: 13, title: "Prawa człowieka", description: "", x: 400, y: 500 },
  { id: 14, title: "Ascetyzm", description: "", x: 50, y: 400 },
  { id: 15, title: "Poświęcenie dla dobra ogółu", description: "", x: 100, y: 450 },
  { id: 16, title: "Racjonalizm", description: "", x: 200, y: 500 },
  { id: 17, title: "Przekraczanie granic", description: "", x: 300, y: 550 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
];

export default function Group4() {
  const [activeNode, setActiveNode] = useState(null);

  const getNodeById = (id) => nodesData.find((n) => n.id === id);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ================= HEADER ================= */}
      <header
        style={{
          background: "#1e293b",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Mapa dorobku ludzkości</h1>
        <h3>Interaktywna sieć powiązań</h3>
      </header>

      {/* ================= INTRO ================= */}
      <section
        style={{
          display: "flex",
          padding: "30px",
          gap: "40px",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 1 }}>
          <h2>Witaj!</h2>
          <p>
            To interaktywna mapa przedstawiająca najważniejsze osiągnięcia
            ludzkości oraz powiązania między nimi.
          </p>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1 }}>
          <h2>Jak działa mapa?</h2>
          <ul>
            <li>Kliknij blok, aby zobaczyć szczegóły</li>
            <li>Linie pokazują powiązania</li>
            <li>Możesz analizować zależności</li>
          </ul>
        </div>
      </section>

      {/* ================= NETWORK ================= */}
      <section
        style={{
          position: "relative",
          height: "600px",
          borderTop: "2px solid #ccc",
        }}
      >
        {/* SVG CONNECTIONS */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          {connections.map((conn, index) => {
            const from = getNodeById(conn.from);
            const to = getNodeById(conn.to);

            return (
              <line
                key={index}
                x1={from.x + 75}
                y1={from.y + 50}
                x2={to.x + 75}
                y2={to.y + 50}
                stroke="black"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* CENTRAL NODE */}
        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "45%",
            width: "200px",
            padding: "15px",
            background: "#0ea5e9",
            color: "white",
            textAlign: "center",
            borderRadius: "10px",
            zIndex: 2,
          }}
        >
          <strong>Dorobek ludzkości</strong>
        </div>

        {/* NODES */}
        {nodesData.map((node) => (
  <div
    key={node.id}
    onClick={() => setActiveNode(node)}
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
      textAlign: "center",
    }}
  >
    <strong>{node.title}</strong>

    {node.image && (
      <img
        src={node.image}
        alt={node.title}
        style={{
          width: "100%",
          marginTop: "5px",
          borderRadius: "6px",
        }}
      />
    )}
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
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
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