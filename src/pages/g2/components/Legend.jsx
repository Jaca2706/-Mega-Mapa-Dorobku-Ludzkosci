import { TYPE_CONFIG } from "../constants.js";

export default function Legend({ activeTypes, onToggleType }) {
  return (
    <div className="g2-legend">
      {Object.entries(TYPE_CONFIG).map(([type, cfg]) => (
        <button
          key={type}
          className={`g2-legend-btn${!activeTypes.has(type) ? " dimmed" : ""}`}
          onClick={() => onToggleType(type)}
          style={{
            borderColor: activeTypes.has(type) ? cfg.border : undefined,
            color: activeTypes.has(type) ? cfg.color : "#666",
          }}
        >
          <div
            className="g2-legend-dot"
            style={{
              background: cfg.dot,
              boxShadow: activeTypes.has(type) ? `0 0 8px ${cfg.dot}` : "none",
            }}
          />
          <span>{cfg.label}</span>
          <span style={{ fontSize: 14 }}>{cfg.icon}</span>
        </button>
      ))}
    </div>
  );
}
