import { DIM_LABELS } from "../constants.js";

const DIM_ICONS = {
  psychologicalTime: "🕰️",
  technicalLevel: "⚙️",
  globalContext: "🌐",
};

export default function DimensionsPanel({ dimensions }) {
  return (
    <div className="g2-panel">
      <div className="g2-panel-title">Wymiary</div>
      {Object.entries(dimensions).map(([key, val]) => (
        <div key={key} className="g2-dim-row">
          <span className="g2-dim-icon">{DIM_ICONS[key] || "•"}</span>
          <span className="g2-dim-label">{DIM_LABELS[key] || key}</span>
          <span className="g2-dim-value">{val}</span>
        </div>
      ))}
    </div>
  );
}
