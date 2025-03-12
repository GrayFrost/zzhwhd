import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { remark } from "remark";
import type { Node } from "unist";
import type { VFile } from "vfile";
import { createHeaderId } from "@/utils/h-id";
import { getPostDetails } from '@/api/posts';

interface HeadingNode {
  depth: number;
  children: HeadingNode[];
  value: string;
  data: {
    hProperties: {
      id: string;
    };
  };
}

export interface TransformedNode {
  value: string;
  depth: number;
  data: HeadingNode["data"];
  children: TransformedNode[];
}

interface IndexMap {
  [depth: number]: TransformedNode;
}

function transformNode(
  node: HeadingNode,
  output: TransformedNode[],
  indexMap: IndexMap
) {
  const transformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}
function addID(node: HeadingNode, nodes: Record<string, number>) {
  const id = node.children.map((c) => c.value).join("");

  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: createHeaderId(`${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`),
    },
  };
}

function getHeadings(root: Node) {
  const nodes: Record<string, number> = {};
  const output: TransformedNode[] = [];
  const indexMap: IndexMap = {};
  visit(root, "heading", (node: HeadingNode) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}
function headingTree() {
  return (node: Node, file: VFile) => {
    file.data.headings = getHeadings(node);
  };
}

export async function getTOC(filenameId: string): Promise<TransformedNode[]> {
  const { post } = await getPostDetails(filenameId);

  // Use remark to convert Markdown into HTML string
  const processedContent = await remark()
    .use(headingTree)
    .process(post.content);

  return processedContent.data.headings as TransformedNode[];
}
