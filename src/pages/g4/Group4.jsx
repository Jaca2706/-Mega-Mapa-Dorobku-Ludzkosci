import { useState } from "react";

let idCounter = 1;

function Group4() {
  const [nodes, setNodes] = useState([]);

  const addNode = (parentId = null, x = 400, y = 250) => {
    const newNode = {
      id: idCounter++,
      text: "Nowy",
      x,
      y,
      parent: parentId,
    };

    setNodes([...nodes, newNode]);
  };

  return (
    <div>
      <h1>Mapa myśli - Grupa 4</h1>

      {/* Przycisk startowy */}
      {nodes.length === 0 && (
        <button onClick={() => addNode(null)}>
          Dodaj pierwszy element
        </button>
      )}

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
            <circle cx={node.x} cy={node.y} r="30" fill="#FF5722" />
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

            {/* Dodawanie dzieci */}
            <foreignObject
              x={node.x - 15}
              y={node.y + 30}
              width="30"
              height="30"
            >
              <button onClick={() => addNode(node.id, node.x + 80, node.y)}>
                +
              </button>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default Group4;