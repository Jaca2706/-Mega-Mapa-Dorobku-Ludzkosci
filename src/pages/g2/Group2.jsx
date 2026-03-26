import { useState, useEffect } from "react";

const historyData = [
  {
    id: "powstanie-warszawskie-1944",
    type: "event",
    title: { full: "Powstanie Warszawskie", short: "PW 1944" },
    time: { start: "1944-08-01", end: "1944-10-02", label: "1 VIII – 2 X 1944" },
    country: "Polska",
    categories: ["historia", "wojna"],
    tags: ["II wojna światowa", "Armia Krajowa", "opór", "okupacja"],
    layers: { geographic: 5, social: 5, economic: 4, mental: 5 },
    dimensions: {
      psychologicalTime: "czas traumy i heroizmu",
      technicalLevel: "wojna przemysłowa XX wieku",
      globalContext: "II wojna światowa",
    },
    relations: [{ targetId: "kamienie-na-szaniec", type: "parallel" }],
    description: "Zbrojne wystąpienie Armii Krajowej przeciw okupacji niemieckiej w Warszawie.",
  },
  {
    id: "kamienie-na-szaniec",
    type: "work",
    title: { full: "Kamienie na szaniec", short: "Kamienie" },
    time: { start: "1943", end: null, label: "1943" },
    country: "Polska",
    categories: ["literatura", "reportaż", "wojna"],
    tags: ["Szare Szeregi", "harcerstwo", "patriotyzm", "II wojna światowa"],
    layers: { geographic: 2, social: 5, economic: 1, mental: 5 },
    dimensions: {
      psychologicalTime: "dojrzewanie w czasie wojny",
      technicalLevel: "druk konspiracyjny",
      globalContext: "II wojna światowa",
    },
    relations: [{ targetId: "powstanie-warszawskie-1944", type: "parallel" }],
    description: "Opowieść o młodych harcerzach Szarych Szeregów walczących w okupowanej Polsce.",
  },
  {
    id: "wielka-emigracja",
    type: "trend",
    title: { full: "Wielka Emigracja", short: "Emigracja" },
    time: { start: "1831", end: "1870", label: "po 1831" },
    country: "Polska / Francja",
    categories: ["historia", "kultura", "romantyzm"],
    tags: ["emigracja polityczna", "powstanie listopadowe", "elity"],
    layers: { geographic: 4, social: 5, economic: 3, mental: 5 },
    dimensions: {
      psychologicalTime: "czas wygnania i mesjanizmu",
      technicalLevel: "Europa przedindustrialna",
      globalContext: "Europa XIX wieku",
    },
    relations: [{ targetId: "kordian", type: "influenced" }],
    description: "Emigracja polskich elit politycznych i intelektualnych po upadku powstania listopadowego.",
  },
  {
    id: "kordian",
    type: "work",
    title: { full: "Kordian", short: "Kordian" },
    time: { start: "1834", end: null, label: "1834" },
    country: "Polska",
    categories: ["literatura", "dramat", "romantyzm"],
    tags: ["mesjanizm", "spisek", "indywidualizm"],
    layers: { geographic: 2, social: 4, economic: 1, mental: 5 },
    dimensions: {
      psychologicalTime: "romantyczny bunt jednostki",
      technicalLevel: "druk XIX wieku",
      globalContext: "Europa po kongresie wiedeńskim",
    },
    relations: [
      { targetId: "wielka-emigracja", type: "part_of" },
      { targetId: "wiosna-ludow-1848", type: "parallel" },
    ],
    description: "Dramat romantyczny ukazujący konflikt jednostki z historią i odpowiedzialność moralną za naród.",
  },
  {
    id: "wiosna-ludow-1848",
    type: "event",
    title: { full: "Wiosna Ludów (1848)", short: "1848" },
    time: { start: "1848", end: "1849", label: "1848–1849" },
    country: "Europa",
    categories: ["historia", "rewolucja"],
    tags: ["liberalizm", "narodowość", "rewolucje europejskie"],
    layers: { geographic: 5, social: 5, economic: 4, mental: 4 },
    dimensions: {
      psychologicalTime: "czas nadziei i rewolucyjnego entuzjazmu",
      technicalLevel: "Europa industrialna",
      globalContext: "rewolucje XIX wieku",
    },
    relations: [{ targetId: "kordian", type: "parallel" }],
    description: "Seria rewolucji w Europie w latach 1848–1849, związanych z walką o prawa narodowe i liberalne reformy.",
  },
];

const TYPE_CONFIG = {
  event: {
    label: "wydarzenie",
    color: "#C0392B",
    bg: "rgba(192,57,43,0.12)",
    border: "rgba(192,57,43,0.5)",
    dot: "#E74C3C",
    icon: "⚡",
  },
  work: {
    label: "dzieło",
    color: "#1A7A4A",
    bg: "rgba(26,122,74,0.12)",
    border: "rgba(26,122,74,0.5)",
    dot: "#27AE60",
    icon: "📜",
  },
  trend: {
    label: "nurt / proces",
    color: "#8E44AD",
    bg: "rgba(142,68,173,0.12)",
    border: "rgba(142,68,173,0.5)",
    dot: "#9B59B6",
    icon: "〰",
  },
};

const RELATION_LABEL = {
  parallel: "równolegle",
  influenced: "wpłynęło na",
  part_of: "część",
};

const LAYER_LABELS = {
  geographic: "Geograficzny",
  social: "Społeczny",
  economic: "Ekonomiczny",
  mental: "Mentalny",
};

const LAYER_COLORS = {
  geographic: "#3498DB",
  social: "#E67E22",
  economic: "#16A085",
  mental: "#8E44AD",
};

function LayerBar({ value, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: color,
          width: `${(value / 5) * 100}%`,
          maxWidth: 80,
          minWidth: 8,
          transition: "width 0.6s cubic-bezier(.4,0,.2,1)",
          opacity: 0.85,
        }}
      />
      <span style={{ fontSize: 11, color: "#888", fontFamily: "monospace" }}>{value}/5</span>
    </div>
  );
}

function TimelineDot({ type, isOpen }) {
  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.event;
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: cfg.dot,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        boxShadow: isOpen ? `0 0 0 6px ${cfg.bg}, 0 0 0 8px ${cfg.border}` : `0 0 0 3px ${cfg.bg}`,
        transition: "box-shadow 0.3s ease",
        position: "relative",
        zIndex: 2,
        flexShrink: 0,
      }}
    >
      <span style={{ lineHeight: 1 }}>{cfg.icon}</span>
    </div>
  );
}

function RelationChip({ rel, allData }) {
  const target = allData.find((d) => d.id === rel.targetId);
  if (!target) return null;
  const cfg = TYPE_CONFIG[target.type] || TYPE_CONFIG.event;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 20,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.color,
        fontWeight: 600,
      }}
    >
      <span style={{ opacity: 0.7 }}>{RELATION_LABEL[rel.type] || rel.type}:</span>
      {target.title.short}
    </span>
  );
}

function TimelineCard({ item, index, isOpen, onToggle, allData }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.event;

  return (
    <div
      style={{
        display: "flex",
        gap: 0,
        position: "relative",
        alignItems: "flex-start",
      }}
    >
      {/* Left: year column */}
      <div
        style={{
          width: 80,
          flexShrink: 0,
          paddingTop: 8,
          textAlign: "right",
          paddingRight: 16,
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13,
            fontWeight: 700,
            color: cfg.dot,
            letterSpacing: "0.03em",
            lineHeight: 1.3,
          }}
        >
          {item.time.start.slice(0, 4)}
        </div>
        {item.time.end && (
          <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>
            –{item.time.end.slice(0, 4)}
          </div>
        )}
      </div>

      {/* Center: dot + line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <TimelineDot type={item.type} isOpen={isOpen} />
        <div
          style={{
            width: 2,
            flexGrow: 1,
            minHeight: 32,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            marginTop: 4,
          }}
        />
      </div>

      {/* Right: card */}
      <div
        style={{
          flex: 1,
          marginLeft: 16,
          marginBottom: 24,
        }}
      >
        <button
          onClick={onToggle}
          style={{
            width: "100%",
            background: isOpen ? cfg.bg : "rgba(255,255,255,0.03)",
            border: `1px solid ${isOpen ? cfg.border : "rgba(255,255,255,0.08)"}`,
            borderRadius: 12,
            padding: "14px 18px",
            cursor: "pointer",
            textAlign: "left",
            transition: "all 0.25s ease",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: cfg.color,
                  background: cfg.bg,
                  padding: "2px 7px",
                  borderRadius: 4,
                  border: `1px solid ${cfg.border}`,
                }}
              >
                {cfg.label}
              </span>
              <span style={{ fontSize: 11, color: "#777" }}>{item.country}</span>
            </div>
            <div
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 17,
                fontWeight: 700,
                color: "#e8e0d0",
                lineHeight: 1.3,
                marginBottom: 4,
              }}
            >
              {item.title.full}
            </div>
            <div style={{ fontSize: 12, color: "#888", fontStyle: "italic" }}>
              {item.time.label}
            </div>
          </div>
          <span
            style={{
              color: cfg.dot,
              fontSize: 18,
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            ›
          </span>
        </button>

        {/* Expanded content */}
        {isOpen && (
          <div
            style={{
              marginTop: 4,
              padding: "16px 18px",
              background: "rgba(0,0,0,0.25)",
              border: `1px solid ${cfg.border}`,
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              animation: "fadeSlide 0.3s ease",
            }}
          >
            {/* Description */}
            <p
              style={{
                fontSize: 14,
                color: "#c8bfaf",
                lineHeight: 1.7,
                margin: "0 0 16px 0",
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
              }}
            >
              {item.description}
            </p>

            {/* Layers */}
            <div
              style={{
                marginBottom: 16,
                padding: 12,
                background: "rgba(255,255,255,0.03)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#666",
                  marginBottom: 10,
                }}
              >
                Warstwy oddziaływania
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                {Object.entries(item.layers).map(([key, val]) => (
                  <div key={key}>
                    <div style={{ fontSize: 11, color: "#777", marginBottom: 3 }}>
                      {LAYER_LABELS[key] || key}
                    </div>
                    <LayerBar value={val} color={LAYER_COLORS[key]} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div
              style={{
                marginBottom: 16,
                padding: 12,
                background: "rgba(255,255,255,0.03)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#666",
                  marginBottom: 10,
                }}
              >
                Wymiary
              </div>
              {Object.entries(item.dimensions).map(([key, val]) => {
                const dimLabel = {
                  psychologicalTime: "Czas psychologiczny",
                  technicalLevel: "Poziom techniczny",
                  globalContext: "Kontekst globalny",
                }[key] || key;
                return (
                  <div key={key} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 11, color: "#666", flexShrink: 0, minWidth: 130 }}>
                      {dimLabel}
                    </span>
                    <span style={{ fontSize: 12, color: "#aaa", fontStyle: "italic" }}>{val}</span>
                  </div>
                );
              })}
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 20,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#888",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Relations */}
            {item.relations && item.relations.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#666",
                    marginBottom: 8,
                  }}
                >
                  Powiązania
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.relations.map((rel, i) => (
                    <RelationChip key={i} rel={rel} allData={allData} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        marginBottom: 32,
        padding: "10px 16px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {Object.entries(TYPE_CONFIG).map(([type, cfg]) => (
        <div key={type} style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: cfg.dot,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 12, color: "#888" }}>{cfg.label}</span>
        </div>
      ))}
    </div>
  );
}

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

        {/* Filter / legend */}
        <Legend />

        {/* Timeline */}
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
