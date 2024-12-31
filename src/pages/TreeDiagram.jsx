import { useEffect, useRef, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { NodeForm } from "@/components/diagram/NodeForm"
import { LinkForm } from "@/components/diagram/LinkForm"
import { initDiagram, registerCustomNode } from "@/components/diagram/DiagramConfig"
import { useDiagram } from "@/hooks/useDiagram"
import dagre from 'dagre'

function TreeDiagram() {
  const {
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
  } = useDiagram()

  // 创建更新布局函数
  const updateLayout = useCallback((graph, newNodeId) => {
    const nodes = graph.getNodes()
    const edges = graph.getEdges()
    
    if (newNodeId) {
      const newNode = graph.getCellById(newNodeId)
      if (!newNode) return

      const connectedEdges = edges.filter(edge => 
        edge.getSourceCellId() === newNodeId || 
        edge.getTargetCellId() === newNodeId
      )

      if (connectedEdges.length > 0) {
        const edge = connectedEdges[0]
        const sourceId = edge.getSourceCellId()
        const targetId = edge.getTargetCellId()
        const connectedNode = graph.getCellById(
          sourceId === newNodeId ? targetId : sourceId
        )

        if (connectedNode) {
          const connectedPos = connectedNode.getPosition()
          newNode.position(
            connectedPos.x,
            connectedPos.y + 100
          )
        }
      } else {
        const lastNode = nodes[nodes.length - 2]
        if (lastNode) {
          const lastPos = lastNode.getPosition()
          newNode.position(
            lastPos.x + 150,
            lastPos.y
          )
        } else {
          newNode.position(100, 100)
        }
      }
    } else {
      // 使用 dagre 进行布局
      const g = new dagre.graphlib.Graph()
      g.setGraph({
        rankdir: 'TB',
        nodesep: 50,
        ranksep: 80,
        marginx: 20,
        marginy: 20,
      })
      g.setDefaultEdgeLabel(() => ({}))

      // 添加节点
      nodes.forEach(node => {
        g.setNode(node.id, {
          width: node.size().width,
          height: node.size().height,
        })
      })

      // 添加边
      edges.forEach(edge => {
        g.setEdge(edge.getSourceCellId(), edge.getTargetCellId())
      })

      // 计算布局
      dagre.layout(g)

      // 应用布局
      g.nodes().forEach(id => {
        const node = g.node(id)
        const cell = graph.getCellById(id)
        if (cell && node) {
          cell.position(node.x - node.width / 2, node.y - node.height / 2)
        }
      })
    }

    graph.centerContent()
  }, [])

  // 初始化图表
  useEffect(() => {
    registerCustomNode(theme, showNodeIndex)
    const graph = initDiagram(showNodeIndex, theme)
    graphRef.current = graph

    // 渲染初始节点
    nodeDataArray.forEach((node) => {
      graph.addNode({
        shape: 'custom-node',
        x: 100,
        y: 100,
        label: node.text,
        id: String(node.key),
        attrs: {
          index: {
            text: `(${node.key})`,
            display: showNodeIndex ? 'block' : 'none',
          },
        },
      })
    })

    // 渲染初始连接
    linkDataArray.forEach((link) => {
      graph.addEdge({
        source: String(link.from),
        target: String(link.to),
        label: `${link.shareRatio}%`,
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
      })
    })

    if (nodeDataArray.length > 0) {
      updateLayout(graph)
    }

    return () => {
      graph.dispose()
    }
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">股权结构图</h1>
      <div className="mb-4 space-y-4">
        <NodeForm
          newNodeText={newNodeText}
          setNewNodeText={setNewNodeText}
          newNodeTextDirection={newNodeTextDirection}
          setNewNodeTextDirection={setNewNodeTextDirection}
          handleAddNode={() => handleAddNode(updateLayout)}
        />
        <Button variant="outline" onClick={handleToggleIndex}>
          {showNodeIndex ? "隐藏节点序号" : "显示节点序号"}
        </Button>
        <Button variant="outline" onClick={toggleTheme}>
          切换主题颜色
        </Button>
        <LinkForm
          newLink={newLink}
          setNewLink={setNewLink}
          handleAddLink={() => handleAddLink(updateLayout)}
        />
      </div>
      <div 
        id="diagram-container" 
        className="w-full h-[600px] border rounded-lg"
      />
      <Toaster />
    </main>
  )
}

export default TreeDiagram 