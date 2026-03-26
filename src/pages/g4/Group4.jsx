import React, { useState } from "react";

const nodesData = [
  {
    id: 1,
    title: "Rewolucja przemysłowa",
    content: "Masowy rozwój fabryk, maszyn parowych i transportu.",
    description: "Okres gwałtownego rozwoju technologii i przemysłu.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Steam_engine_Boulton_Watt.jpg",
    x: 100,
    y: 200,
  },
  {
    id: 2,
    title: "Internet",
    content: "Globalna sieć komunikacyjna zmieniająca świat.",
    description: "Internet połączył ludzi i umożliwił wymianę wiedzy na masową skalę.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Internet_map_1024.jpg",
    x: 500,
    y: 100,
  },
  {
    id: 3,
    title: "Sztuczna inteligencja",
    content: "Systemy uczące się i podejmujące decyzje.",
    description: "AI wpływa na medycynę, przemysł i codzienne życie.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Artificial_intelligence_logo.png",
    x: 800,
    y: 300,
  },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
];

export default function Group4() {
  const [activeNode, setActiveNode] = useState(null);
  const [clickedNodeId, setClickedNodeId] = useState(null);

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
            <li>Kliknij blok, aby zobaczyć efekt wizualny</li>
            <li>Najedź na blok, aby zobaczyć przycisk "Czytaj więcej"</li>
            <li>Przycisk otwiera szczegółowy opis zagadnienia</li>
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

        {/* ================= NODES ================= */}
        {nodesData.map((node) => (
          <div key={node.id} style={{ position: "absolute", top: node.y, left: node.x }}>
            {/* BLOK */}
            <div
              onClick={() => {
                setClickedNodeId(node.id);
                setTimeout(() => setClickedNodeId(null), 200);
              }}
              style={{
                width: "150px",
                padding: "10px",
                background: "#f1f5f9",
                border: "1px solid #ccc",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.2s",
                transform: clickedNodeId === node.id ? "scale(0.95)" : "scale(1)",
                filter: clickedNodeId === node.id ? "brightness(0.8)" : "brightness(1)",
                textAlign: "center",
              }}
            >
              {node.image && (
                <img
                  src={node.image}
                  alt={node.title}
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "5px",
                  }}
                />
              )}
              <strong>{node.title}</strong>
              {node.content && (
                <p style={{ fontSize: "0.85rem", marginTop: "5px" }}>{node.content}</p>
              )}
            </div>

            {/* PRZYCISK "CZYTAJ WIĘCEJ" */}
            <div style={{ textAlign: "center", marginTop: "5px" }}>
              <button
                onClick={() => setActiveNode(node)}
                style={{
                  display: "none",
                  padding: "5px 10px",
                  fontSize: "0.8rem",
                  border: "none",
                  backgroundColor: "#0ea5e9",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                className="readMoreButton"
              >
                Czytaj więcej
              </button>
            </div>
          </div>
        ))}

        {/* ================= POPUP ================= */}
        {activeNode && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              background: "white",
              padding: "20px",
              border: "2px solid #0ea5e9",
              borderRadius: "10px",
              width: "300px",
              zIndex: 10,
            }}
          >
            <h3>{activeNode.title}</h3>
            {activeNode.image && (
              <img
                src={activeNode.image}
                alt={activeNode.title}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}
            <p>{activeNode.description}</p>
            <button
              onClick={() => setActiveNode(null)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                background: "#0ea5e9",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Zamknij
            </button>
          </div>
        )}

        {/* ================= INLINE CSS HOVER BUTTON ================= */}
        <style>
          {`
          div:hover .readMoreButton {
            display: inline-block;
          }

          div:hover .readMoreButton:hover {
            background-color: #0284c7;
          }
          `}
        </style>
      </section>
    </div>
  );
}