import { TYPE_CONFIG, RELATION_LABEL } from "../constants.js";

export default function RelationChip({ rel, allData, onClick }) {
  const target = allData.find((d) => d.id === rel.targetId);
  if (!target) return null;
  const cfg = TYPE_CONFIG[target.type] || TYPE_CONFIG.event;
  return (
    <span
      className="g2-rel-chip"
      onClick={onClick}
      style={{
        background: cfg.bg,
        borderColor: cfg.border,
        color: cfg.color,
      }}
    >
      <span className="g2-rel-type">{RELATION_LABEL[rel.type] || rel.type}:</span>
      {target.title.short}
    </span>
  );
}
