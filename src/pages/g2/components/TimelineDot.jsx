import { TYPE_CONFIG } from "../constants.js";

export default function TimelineDot({ type, isOpen }) {
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
        boxShadow: isOpen
          ? `0 0 0 6px ${cfg.bg}, 0 0 0 8px ${cfg.border}`
          : `0 0 0 3px ${cfg.bg}`,
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
