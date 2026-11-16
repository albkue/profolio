/**
 * Architecture/data-flow diagram for the Auto-Parts Image Search service.
 * Two layouts share one node list:
 *  - default export: horizontal pipeline (≥640px)
 *  - PipelineDiagramVertical: stacked flow for mobile screens
 * Rendered as inline SVG so it stays crisp, accessible, and cheap —
 * no fake screenshots, per CLAUDE.md.
 */
const nodes = [
  { x: 0, tag: "INPUT", label: "Part photo" },
  { x: 122, tag: "DETECT", label: "YOLOv8" },
  { x: 244, tag: "READ", label: "PaddleOCR" },
  { x: 366, tag: "EMBED", label: "CLIP · BGE-M3" },
  { x: 488, tag: "INDEX", label: "FAISS", accent: true },
  { x: 610, tag: "OUTPUT", label: "Ranked parts" },
];

const NODE_W = 100;
const NODE_H = 52;
const NODE_Y = 30;

const ariaLabel =
  "Pipeline diagram: part photo flows through YOLOv8 detection, PaddleOCR text extraction, CLIP and BGE-M3 embeddings, and a FAISS index, producing ranked matching parts.";

export default function PipelineDiagram() {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 710 112"
      className="h-auto w-full font-mono"
    >
      <defs>
        <marker
          id="pipe-arrow"
          viewBox="0 0 8 8"
          refX="6"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--gold)" />
        </marker>
      </defs>

      {nodes.map((node, i) => {
        return (
          <g key={node.label}>
            {i > 0 && (
              <line
                x1={node.x - 18}
                y1={NODE_Y + NODE_H / 2}
                x2={node.x - 6}
                y2={NODE_Y + NODE_H / 2}
                stroke="var(--gold)"
                strokeWidth="1"
                markerEnd="url(#pipe-arrow)"
              />
            )}
            <rect
              x={node.x}
              y={NODE_Y}
              width={NODE_W}
              height={NODE_H}
              rx="8"
              fill="var(--elevated)"
              stroke={node.accent ? "var(--gold)" : "var(--hairline)"}
              strokeWidth="1"
            />
            <text
              x={node.x + NODE_W / 2}
              y={NODE_Y + 18}
              textAnchor="middle"
              fontSize="8"
              letterSpacing="2"
              fill="var(--muted)"
            >
              {node.tag}
            </text>
            <text
              x={node.x + NODE_W / 2}
              y={NODE_Y + 37}
              textAnchor="middle"
              fontSize="11"
              fill={node.accent ? "var(--gold-hover)" : "var(--foreground)"}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Mobile variant: same nodes, stacked vertically with downward arrows. */
export function PipelineDiagramVertical() {
  const W = 240;
  const NODE_W_V = 200;
  const NODE_H_V = 44;
  const GAP = 24;
  const TOP = 8;
  const H = TOP + nodes.length * NODE_H_V + (nodes.length - 1) * GAP + TOP;

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox={`0 0 ${W} ${H}`}
      className="mx-auto block h-auto w-full max-w-[280px] font-mono"
    >
      <defs>
        <marker
          id="pipe-arrow-v"
          viewBox="0 0 8 8"
          refX="6"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--gold)" />
        </marker>
      </defs>

      {nodes.map((node, i) => {
        const y = TOP + i * (NODE_H_V + GAP);
        return (
          <g key={node.label}>
            {i > 0 && (
              <line
                x1={W / 2}
                y1={y - GAP + 4}
                x2={W / 2}
                y2={y - 6}
                stroke="var(--gold)"
                strokeWidth="1"
                markerEnd="url(#pipe-arrow-v)"
              />
            )}
            <rect
              x={(W - NODE_W_V) / 2}
              y={y}
              width={NODE_W_V}
              height={NODE_H_V}
              rx="8"
              fill="var(--elevated)"
              stroke={node.accent ? "var(--gold)" : "var(--hairline)"}
              strokeWidth="1"
            />
            <text
              x={W / 2}
              y={y + 16}
              textAnchor="middle"
              fontSize="8"
              letterSpacing="2"
              fill="var(--muted)"
            >
              {node.tag}
            </text>
            <text
              x={W / 2}
              y={y + 33}
              textAnchor="middle"
              fontSize="11"
              fill={node.accent ? "var(--gold-hover)" : "var(--foreground)"}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
