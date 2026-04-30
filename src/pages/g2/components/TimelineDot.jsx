import { TYPE_CONFIG } from "../constants.js";

export default function TimelineDot({ type, isOpen }) {
  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.event;
  return (
    <div
      className={`g2-dot${isOpen ? " open" : ""}`}
      style={{
        background: `radial-gradient(circle at 35% 35%, ${cfg.dot}, ${cfg.color})`,
        boxShadow: isOpen
          ? `0 0 0 5px ${cfg.bg}, 0 0 0 7px ${cfg.border}, 0 0 20px ${cfg.dot}44`
          : `0 0 0 3px ${cfg.bg}, 0 0 12px ${cfg.dot}22`,
      }}
    >
      <span style={{ lineHeight: 1, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))" }}>{cfg.icon}</span>
    </div>
  );
}
