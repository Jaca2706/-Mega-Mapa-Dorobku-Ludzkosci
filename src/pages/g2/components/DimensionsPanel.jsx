import { DIM_LABELS } from "../constants.js";

export default function DimensionsPanel({ dimensions }) {
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
        Wymiary
      </div>
      {Object.entries(dimensions).map(([key, val]) => (
        <div key={key} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
          <span style={{ fontSize: 11, color: "#666", flexShrink: 0, minWidth: 130 }}>
            {DIM_LABELS[key] || key}
          </span>
          <span style={{ fontSize: 12, color: "#aaa", fontStyle: "italic" }}>{val}</span>
        </div>
      ))}
    </div>
  );
}
