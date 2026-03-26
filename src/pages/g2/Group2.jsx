import { useState } from "react";
import { historyData } from "./../../baza/baza.js";
import Legend from "./components/Legend.jsx";
import TimelineCard from "./components/TimelineCard.jsx";

export default function Group2() {
  const [openId, setOpenId] = useState(null);

  const sorted = [...historyData].sort(
    (a, b) => parseInt(a.time.start) - parseInt(b.time.start)
  );

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e0e11",
        color: "#e8e0d0",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
        padding: "40px 24px 60px",
      }}
    >
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#666",
              marginBottom: 10,
            }}
          >
            Model infografiki · Grupa 2
          </div>
          <h1
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#f0e8d8",
              margin: "0 0 8px 0",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Oś Przejść
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#666",
              margin: 0,
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            Zmiany postrzegania świata — chronologiczna oś wydarzeń, dzieł i nurtów
          </p>
          <div
            style={{
              marginTop: 16,
              height: 1,
              background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)",
            }}
          />
        </div>

        <Legend />

        <div style={{ position: "relative" }}>
          {sorted.map((item, i) => (
            <TimelineCard
              key={item.id}
              item={item}
              index={i}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
              allData={historyData}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 11,
            color: "#444",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          {historyData.length} elementów w bazie · dane z baza.js
        </div>
      </div>
    </div>
  );
}
