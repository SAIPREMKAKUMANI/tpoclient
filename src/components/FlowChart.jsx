import React, { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import "./FlowChart.css";

const inodes = [
  {
    id: "1",
    data: { label: <div>Development</div> },
    position: { x: 331, y: 148 },
    type: "default",
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "2",
    data: { label: <div>Web Development</div> },
    position: { x: 140, y: 13.1313 },
    type: "input",
    style: { backgroundColor: "red", color: "white" },
  },
  {
    id: "3",
    data: { label: <div>App Development</div> },
    position: { x: 540.213, y: 266.477 },
    type: "output",
    style: { backgroundColor: "#F31559", color: "white" },
  },
  {
    id: "4",
    data: { label: <div>Machine Learning</div> },
    position: { x: 518.022, y: 6.0484 },
    type: "input",
    style: { backgroundColor: "#071952", color: "white" },
  },
  {
    id: "5",
    data: { label: <div>Data Science</div> },
    position: { x: 130, y: 274.665 },
    type: "output",
    style: { backgroundColor: "#525FE1", color: "white" },
  },
];
const iedges = [
  {
    id: "e-1",
    source: "2",
    target: "1",
    animated: true,
  },
  {
    id: "e-2",
    source: "1",
    target: "3",
    animated: true,
  },
  {
    id: "e-3",
    source: "4",
    target: "1",
    animated: true,
  },
  {
    id: "e-4",
    source: "1",
    target: "5",
    animated: true,
  },
];
const nodeColor = (node) => {
  switch (node.id) {
    case "1":
      return "blue";
    case "2":
      return "red";
    case "3":
      return "#F31559";
    case "4":
      return "#071952";
    default:
      return "#525FE1";
  }
};
function FlowChart() {
  const [nodes, setNodes] = useState(inodes);
  const [edges, setEdges] = useState(iedges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const [color, setColor] = useColor("hex", "#121212");
  const reactFlowStyle = {
    background: "white",
    width: "100%",
    height: 300,
    marginLeft: "120px",
  };
  const [flowStyle, setFlowStyle] = useState(reactFlowStyle);
  function handleChange(props) {
    const val = props;
    console.log(val);
    setColor(val);
    const c = val.hex;
    setFlowStyle((prev) => {
      return {
        ...prev,
        background: c,
      };
    });
  }

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  return (
    <div className="flow-chart-container">
      <div style={{ marginBottom: "10px" }}>
        <hr />
        <div style={{ width: "80%", height: "50vh" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            style={flowStyle}
          >
            <MiniMap
              nodeColor={nodeColor}
              nodeStrokeWidth={3}
              zoomable
              pannable
            />
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        <hr />
        <div style={{ marginLeft: "120px" }}>
          <ColorPicker
            width={1010}
            height={22}
            color={color}
            onChange={handleChange}
            hideHSV
            dark
          />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default FlowChart;
