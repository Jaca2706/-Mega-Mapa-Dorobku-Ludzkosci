import { TYPE_CONFIG, RELATION_LABEL } from "../constants.js";

export default function RelationChip({ rel, allData }) {
  const target = allData.find((d) => d.id === rel.targetId);
  if (!target) return null;
  const cfg = TYPE_CONFIG[target.type] || TYPE_CONFIG.event;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 20,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.color,
        fontWeight: 600,
      }}
    >
      <span style={{ opacity: 0.7 }}>{RELATION_LABEL[rel.type] || rel.type}:</span>
      {target.title.short}
    </span>
  );
}
