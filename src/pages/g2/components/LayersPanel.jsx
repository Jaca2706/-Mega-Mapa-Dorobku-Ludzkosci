import { LAYER_LABELS, LAYER_COLORS } from "../constants.js";

function LayerBar({ value, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: color,
          width: `${(value / 5) * 100}%`,
          maxWidth: `${(value / 5) * 80}px`,
          minWidth: 8,
          transition: "width 1.5s cubic-bezier(.4,0,.2,1)",
          opacity: 0.85,
        }}
      />
      <span style={{ fontSize: 11, color: "#888", fontFamily: "monospace" }}>{value}/5</span>
    </div>
  );
}

export default function LayersPanel({ layers }) {
  return (
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
        {Object.entries(layers).map(([key, val]) => (
          <div key={key}>
            <div style={{ fontSize: 11, color: "#777", marginBottom: 3 }}>
              {LAYER_LABELS[key] || key}
            </div>
            <LayerBar value={val} color={LAYER_COLORS[key]} />
          </div>
        ))}
      </div>
    </div>
  );
}
