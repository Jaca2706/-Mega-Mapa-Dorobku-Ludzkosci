import { useState } from "react";

let idCounter = 1;

export default function MindMap() {
  const [nodes, setNodes] = useState([
    { id: 0, text: "Główny temat", x: 400, y: 250, parent: null },
  ]);

  const addNode = (parentId) => {
    const parent = nodes.find((n) => n.id === parentId);

    const newNode = {
      id: idCounter++,
      text: "Nowy temat",
      x: parent.x + (Math.random() * 200 - 100),
      y: parent.y + (Math.random() * 200 - 100),
      parent: parentId,
    };

    setNodes([...nodes, newNode]);
  };

  return (
    <div>
      <h2>Mapa myśli</h2>

      <svg width="800" height="500" style={{ border: "1px solid #ccc" }}>
        {/* Linie */}
        {nodes.map((node) => {
          if (node.parent === null) return null;
          const parent = nodes.find((n) => n.id === node.parent);

          return (
            <line
              key={`line-${node.id}`}
              x1={parent.x}
              y1={parent.y}
              x2={node.x}
              y2={node.y}
              stroke="black"
            />
          );
        })}

        {/* Node’y */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="30" fill="#4CAF50" />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dy=".3em"
              fill="white"
              fontSize="10"
            >
              {node.text}
            </text>

            {/* Przycisk dodawania */}
            <foreignObject
              x={node.x - 20}
              y={node.y + 30}
              width="40"
              height="30"
            >
              <button onClick={() => addNode(node.id)}>+</button>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
}