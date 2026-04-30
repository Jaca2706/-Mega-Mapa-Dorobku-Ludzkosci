import { LAYER_LABELS, LAYER_COLORS } from "../constants.js";

export default function LayersPanel({ layers }) {
  return (
    <div className="g2-panel">
      <div className="g2-panel-title">Warstwy oddziaływania</div>
      <div className="g2-layers-grid">
        {Object.entries(layers).map(([key, val]) => (
          <div key={key}>
            <div className="g2-layer-label">{LAYER_LABELS[key] || key}</div>
            <div className="g2-layer-bar-track">
              <div
                className="g2-layer-bar-fill"
                style={{
                  width: `${(val / 5) * 100}%`,
                  background: `linear-gradient(90deg, ${LAYER_COLORS[key]}88, ${LAYER_COLORS[key]})`,
                  boxShadow: `0 0 8px ${LAYER_COLORS[key]}44`,
                }}
              />
            </div>
            <div className="g2-layer-value">{val}/5</div>
          </div>
        ))}
      </div>
    </div>
  );
}
