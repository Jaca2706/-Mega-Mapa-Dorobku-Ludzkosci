import { TYPE_CONFIG } from "../constants.js";

export default function Legend() {
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
