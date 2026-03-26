import { useState } from "react";
import { TYPE_CONFIG } from "../constants.js";
import TimelineDot from "./TimelineDot.jsx";
import LayersPanel from "./LayersPanel.jsx";
import DimensionsPanel from "./DimensionsPanel.jsx";
import RelationChip from "./RelationChip.jsx";

export default function TimelineCard({ item, isOpen, onToggle, allData }) {
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.event;
  const [hovered, setHovered] = useState(false);

  const buttonBg = isOpen
    ? cfg.bg
    : hovered
    ? "rgba(255,255,255,0.07)"
    : "rgba(255,255,255,0.03)";

  const buttonBorder = isOpen
    ? cfg.border
    : hovered
    ? "rgba(255,255,255,0.18)"
    : "rgba(255,255,255,0.08)";

  return (
    <div style={{ display: "flex", gap: 0, position: "relative", alignItems: "flex-start" }}>
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
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
      <div style={{ flex: 1, marginLeft: 16, marginBottom: 24 }}>
        <button
          onClick={onToggle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            background: buttonBg,
            border: `1px solid ${buttonBorder}`,
            borderRadius: 12,
            padding: "14px 18px",
            cursor: "pointer",
            textAlign: "left",
            transition: "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
            boxShadow:
              hovered && !isOpen
                ? "0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)"
                : "none",
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
                color: hovered && !isOpen ? "#fff" : "#e8e0d0",
                lineHeight: 1.3,
                marginBottom: 4,
                transition: "color 0.2s ease",
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

            <LayersPanel layers={item.layers} />
            <DimensionsPanel dimensions={item.dimensions} />

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
