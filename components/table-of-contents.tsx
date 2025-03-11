"use client";

import { TransformedNode } from "@/api/toc";
import { useHighlighted } from "@/hooks/use-header-highlight";
import { createHeaderId } from "@/utils/h-id";
import { twMerge } from "tailwind-merge";

function renderNodes(nodes: TransformedNode[]) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

const TOCLink = ({ node }: { node: TransformedNode }) => {
  const fontSizes: Record<string, string> = { 2: "text-base", 3: "text-sm", 4: "text-xs" };
  const padding: Record<string, string> = {
    2: "",
    3: "indent-2",
    4: "indent-4",
  };

  const id = node.data.hProperties.id;
  const hrefId = `h${node.depth}-${createHeaderId(id)}`;

  const [highlighted, setHighlighted] = useHighlighted(hrefId);
  return (
    <a
      href={`#${hrefId}`}
      className={twMerge(
        `block hover:accent-color py-1 overflow-hidden text-ellipsis`,
        fontSizes[node.depth],
        padding[node.depth],
        highlighted && "text-rose-700"
      )}
      onClick={(e) => {
        e.preventDefault();
        setHighlighted(hrefId);
        // document
        //   .getElementById(id)
        //   ?.scrollIntoView({ behavior: "smooth", block: "start" });
        const element = document.getElementById(hrefId);
        let y = 0;
        const yOffset = -40; // 配合吸顶
        if (element) {
          y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        }
        window.scrollTo({ top: y, behavior: "smooth" });
      }}
    >
      {node.value}
    </a>
  );
};

export const TableOfContents = ({ nodes }: { nodes: TransformedNode[] }) => {
  if (!nodes?.length) {
    return null;
  }
  console.log("zzh nodes", nodes);

  return (
    <div className="w-[200px] h-auto sticky top-10">
      <h3 className={"secondary-text"}>目录</h3>
      {renderNodes(nodes)}
    </div>
  );
};
