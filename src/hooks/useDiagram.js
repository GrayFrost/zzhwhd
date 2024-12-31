import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

export function useDiagram() {
  const { toast } = useToast();
  const [theme, setTheme] = useState({
    nodeStroke: "#1890ff",
    linkStroke: "rgba(24, 144, 255, 0.8)",
    textStroke: "#333",
  });

  const [nodeDataArray, setNodeDataArray] = useState([
    { key: 0, text: "控股公司" },
  ]);
  const [linkDataArray, setLinkDataArray] = useState([]);
  const [newNodeText, setNewNodeText] = useState("");
  const [newNodeTextDirection, setNewNodeTextDirection] = useState("");
  const [newLink, setNewLink] = useState({
    from: "",
    to: "",
    shareRatio: "",
  });
  const [showNodeIndex, setShowNodeIndex] = useState(false);
  const graphRef = useRef(null);

  const handleAddNode = (updateLayout) => {
    if (!newNodeText || !newNodeTextDirection) {
      toast({
        description: !newNodeText ? "请输入节点内容" : "请选择内容排列方向",
        variant: "destructive",
      });
      return;
    }

    const newKey = Math.max(...nodeDataArray.map((node) => node.key)) + 1;
    const text = newNodeTextDirection === "vertical"
      ? newNodeText.split("").join("\n")
      : newNodeText;

    const graph = graphRef.current;
    if (graph) {
      graph.addNode({
        shape: 'custom-node',
        x: 0,
        y: 0,
        label: text,
        id: String(newKey),
        attrs: {
          index: {
            text: `(${newKey})`,
            display: showNodeIndex ? 'block' : 'none',
          },
        },
      });

      setNodeDataArray(prev => [...prev, { key: newKey, text }]);
      setNewNodeText("");
      setNewNodeTextDirection("");

      if (updateLayout) {
        updateLayout(graph, String(newKey));
      }
    }
  };

  const handleAddLink = (updateLayout) => {
    const { from, to, shareRatio } = newLink;
    if (!from || !to || !shareRatio) {
      toast({
        description: "请填写完整的连接信息",
        variant: "destructive",
      });
      return;
    }

    const graph = graphRef.current;
    if (graph) {
      graph.addEdge({
        source: String(from),
        target: String(to),
        label: `${shareRatio}%`,
        attrs: {
          line: {
            stroke: theme.linkStroke,
            strokeWidth: 2,
            targetMarker: {
              name: 'classic',
              size: 8,
            },
          },
        },
      });

      setLinkDataArray(prev => [...prev, { ...newLink }]);
      setNewLink({ from: "", to: "", shareRatio: "" });

      if (updateLayout) {
        updateLayout(graph);
      }
    }
  };

  const handleToggleIndex = () => {
    setShowNodeIndex(prev => !prev);
    const graph = graphRef.current;
    if (graph) {
      graph.getNodes().forEach((node) => {
        node.setAttrByPath('index/display', !showNodeIndex ? 'block' : 'none');
      });
    }
  };

  const toggleTheme = () => {
    const newTheme = {
      nodeStroke: theme.nodeStroke === "#1890ff" ? "#f5222d" : "#1890ff",
      linkStroke: theme.linkStroke === "rgba(24, 144, 255, 0.8)"
        ? "rgba(245, 34, 45, 0.8)"
        : "rgba(24, 144, 255, 0.8)",
      textStroke: theme.textStroke,
    };
    setTheme(newTheme);

    const graph = graphRef.current;
    if (graph) {
      graph.getNodes().forEach((node) => {
        node.setAttrs({
          body: { stroke: newTheme.nodeStroke },
        });
      });

      graph.getEdges().forEach((edge) => {
        edge.setAttrs({
          line: {
            stroke: newTheme.linkStroke,
            strokeWidth: 2,
            targetMarker: { name: 'classic', size: 8 },
          },
        });
      });
    }
  };

  return {
    theme,
    nodeDataArray,
    linkDataArray,
    newNodeText,
    setNewNodeText,
    newNodeTextDirection,
    setNewNodeTextDirection,
    newLink,
    setNewLink,
    showNodeIndex,
    graphRef,
    handleAddNode,
    handleAddLink,
    handleToggleIndex,
    toggleTheme,
  };
}