import { Graph, Edge } from '@antv/x6'

// 注册自定义节点
export function registerCustomNode(theme, showIndex) {
  try {
    Graph.registerNode('custom-node', {
      inherit: 'rect',
      width: 120,
      height: 60,
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
        {
          tagName: 'text',
          selector: 'index',
        },
      ],
      attrs: {
        body: {
          fill: '#fff',
          stroke: theme.nodeStroke,
          strokeWidth: 2,
          rx: 6,
          ry: 6,
        },
        label: {
          fontSize: 14,
          fill: '#333',
          fontFamily: '微软雅黑',
          fontWeight: 'bold',
          textVerticalAnchor: 'middle',
          textAnchor: 'middle',
          refX: '50%',
          refY: '50%',
        },
        index: {
          text: '',
          fontSize: 12,
          fill: '#666',
          fontFamily: '微软雅黑',
          textAnchor: 'middle',
          refX: '50%',
          refY: '100%',
          refY2: 16,
          display: showIndex ? 'block' : 'none',
        },
      },
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: theme.nodeStroke,
                fill: '#fff',
                strokeWidth: 2,
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: theme.nodeStroke,
                fill: '#fff',
                strokeWidth: 2,
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: theme.nodeStroke,
                fill: '#fff',
                strokeWidth: 2,
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: theme.nodeStroke,
                fill: '#fff',
                strokeWidth: 2,
              },
            },
          },
        },
        items: [
          { group: 'top' },
          { group: 'right' },
          { group: 'bottom' },
          { group: 'left' },
        ],
      },
    })
  } catch (error) {
    if (error.message.includes('already registered')) {
      Graph.unregisterNode('custom-node')
      registerCustomNode(theme, showIndex)
    }
  }
}

export function initDiagram(showIndex, theme) {
  const graph = new Graph({
    container: document.getElementById('diagram-container'),
    grid: {
      visible: true,
      type: 'dot',
      size: 10,
      color: '#E2E2E2',
    },
    connecting: {
      router: {
        name: 'er',
        args: {
          direction: 'V',
        },
      },
      connector: {
        name: 'rounded',
        args: { radius: 8 },
      },
      anchor: 'center',
      connectionPoint: 'anchor',
      allowBlank: false,
      snap: {
        radius: 20,
      },
      createEdge() {
        return new Edge({
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
          label: {
            text: '0%',
            fill: '#666',
            fontSize: 12,
            fontFamily: '微软雅黑',
          },
        })
      },
      validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
        if (!sourceMagnet || !targetMagnet) {
          return false
        }
        if (sourceView === targetView) {
          return false
        }
        return true
      },
    },
    highlighting: {
      magnetAvailable: {
        name: 'stroke',
        args: {
          padding: 4,
          attrs: {
            strokeWidth: 4,
            stroke: theme.nodeStroke,
          },
        },
      },
    },
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
    },
    interacting: {
      magnetConnectable: true,
    },
  })

  return graph
} 