import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { remark } from "remark";

function transformNode(node, output, indexMap) {
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
function addID(node, nodes) {
  const id = node.children.map((c) => c.value).join("");
  console.log('zzh addic ', node);
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`
        // .replace(/[^a-zA-Z\d\s-]/g, "")
        .split(" ")
        .join("-")
        // .toLowerCase(),
    },
  };
}

function getHeadings(root) {
  const nodes = {};
  const output = [];
  const indexMap = {};
  visit(root, "heading", (node) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}
function headingTree() {
  return (node, file) => {
    file.data.headings = getHeadings(node);
  };
}

export async function getTOC(filenameId: string) {
  const filename = `${filenameId}.mdx`;
  const postsDirectory = path.resolve(process.cwd(), "./posts");
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = await fs.promises.readFile(fullPath, "utf-8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert Markdown into HTML string
  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;
}
