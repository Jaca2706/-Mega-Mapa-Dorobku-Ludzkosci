import { TYPE_CONFIG } from "../constants.js";
import TimelineDot from "./TimelineDot.jsx";
import LayersPanel from "./LayersPanel.jsx";
import DimensionsPanel from "./DimensionsPanel.jsx";
import RelationChip from "./RelationChip.jsx";

export default function TimelineCard({ item, isOpen, onToggle, allData, onRelationClick, onTagClick }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.event;

  return (
    <>
      {/* Left: year column */}
      <div className="g2-year-col">
        <div className="g2-year-start" style={{ color: cfg.dot }}>
          {item.time.start.length > 4 && item.time.start.startsWith("-")
            ? item.time.start
            : item.time.start.slice(0, 4)}
        </div>
        {item.time.end && (
          <div className="g2-year-end">
            –{item.time.end.slice(0, 4)}
          </div>
        )}
      </div>

      {/* Center: dot + line */}
      <div className="g2-dot-col">
        <TimelineDot type={item.type} isOpen={isOpen} />
        <div className="g2-dot-line" />
      </div>

      {/* Right: card */}
      <div className="g2-card-content">
        <button
          className={`g2-card-btn${isOpen ? " open" : ""}`}
          onClick={onToggle}
          style={{
            borderColor: isOpen ? cfg.border : undefined,
            boxShadow: isOpen ? `0 0 20px ${cfg.bg}, inset 0 1px 0 rgba(255,255,255,0.04)` : undefined,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
              <span
                className="g2-type-badge"
                style={{
                  color: cfg.color,
                  background: cfg.bg,
                  borderColor: cfg.border,
                }}
              >
                {cfg.icon} {cfg.label}
              </span>
              <span style={{ fontSize: 11, color: "#777", fontWeight: 400 }}>{item.country}</span>
            </div>
            <div className="g2-card-title">{item.title.full}</div>
            <div className="g2-card-time-label">{item.time.label}</div>
          </div>
          <span className={`g2-card-arrow${isOpen ? " open" : ""}`} style={{ color: cfg.dot }}>
            ›
          </span>
        </button>

        {/* Expanded content */}
        {isOpen && (
          <div
            className="g2-expanded"
            style={{ borderColor: cfg.border }}
          >
            <p className="g2-description">{item.description}</p>

            <LayersPanel layers={item.layers} />
            <DimensionsPanel dimensions={item.dimensions} />

            {item.tags && item.tags.length > 0 && (
              <div className="g2-tags">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="g2-tag"
                    onClick={() => onTagClick && onTagClick(tag)}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {item.relations && item.relations.length > 0 && (
              <div className="g2-relations">
                <div className="g2-relations-title">Powiązania</div>
                <div className="g2-relations-list">
                  {item.relations.map((rel, i) => (
                    <RelationChip
                      key={i}
                      rel={rel}
                      allData={allData}
                      onClick={() => onRelationClick && onRelationClick(rel.targetId)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
