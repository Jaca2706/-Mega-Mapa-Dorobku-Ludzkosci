import { useState } from "react";
import { historyData } from "./epochsData.js";
import Legend from "./components/Legend.jsx";
import TimelineCard from "./components/TimelineCard.jsx";

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matchesQuery(item, query) {
  if (!query.trim()) return true;
  const q = normalize(query.trim());

  const searchableText = [
    item.title.full,
    item.title.short,
    item.time.label,
    item.time.start,
    item.time.end ?? "",
    item.country,
    item.description,
    ...(item.tags ?? []),
    ...(item.categories ?? []),
  ]
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return searchableText.includes(q);
}

export default function Group2() {
  const [openId, setOpenId] = useState(null);
  const [query, setQuery] = useState("");

  const sorted = [...historyData].sort(
    (a, b) => parseInt(a.time.start) - parseInt(b.time.start)
  );

  const filtered = sorted.filter((item) => matchesQuery(item, query));

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
        .search-input::placeholder { color: #555; }
        .search-input:focus { outline: none; border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.07); }
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

        {/* Search */}
        <div style={{ marginBottom: 24, position: "relative" }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="6.5" cy="6.5" r="5" stroke="#555" strokeWidth="1.4" />
            <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#555" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Szukaj po nazwie, roku, kraju, tagu…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenId(null);
            }}
            style={{
              width: "100%",
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "11px 40px 11px 40px",
              fontSize: 14,
              color: "#e8e0d0",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
          />
          {query && (
            <button
              onClick={() => { setQuery(""); setOpenId(null); }}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#555",
                fontSize: 18,
                lineHeight: 1,
                padding: "0 2px",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#aaa")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              ×
            </button>
          )}
        </div>

        <Legend />

        {/* Results count when filtering */}
        {query.trim() && (
          <div
            style={{
              fontSize: 12,
              color: "#555",
              marginBottom: 16,
              marginTop: -16,
            }}
          >
            {filtered.length === 0
              ? "Brak wyników"
              : `${filtered.length} z ${historyData.length} elementów`}
          </div>
        )}

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={i}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                allData={historyData}
              />
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
                color: "#444",
                fontSize: 14,
                fontStyle: "italic",
              }}
            >
              Nie znaleziono żadnych elementów dla „{query}"
            </div>
          )}
        </div>

        {/* Footer */}
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
