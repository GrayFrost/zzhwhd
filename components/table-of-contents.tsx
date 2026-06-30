"use client";

import { TransformedNode } from "@/api/toc";
import { useHighlighted } from "@/hooks/use-header-highlight";
import { createHeaderId } from "@/utils/h-id";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/language-provider";

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
  const fontSizes: Record<string, string> = { 2: "text-sm", 3: "text-xs", 4: "text-[11px]" };
  const padding: Record<string, string> = {
    2: "",
    3: "indent-2",
    4: "indent-4",
  };

  const id = node.data.hProperties.id;
  const hrefId = createHeaderId(id);

  const [highlighted, setHighlighted] = useHighlighted(hrefId);
  return (
    <a
      href={`#${hrefId}`}
      className={twMerge(
        `block py-1.5 px-2 rounded-lg transition-colors overflow-hidden text-ellipsis`,
        fontSizes[node.depth],
        padding[node.depth],
        highlighted
          ? "text-accent bg-accent/10"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
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
  const { t } = useLanguage();
  // 当 blog 顶部视觉区可见时，隐藏 TOC，避免覆盖导航
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("blog-hero");
    if (!hero || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHide(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -60% 0px", // 提前隐藏，避免顶栏重叠
      }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // 添加类型和空值检查
  if (!Array.isArray(nodes) || nodes.length === 0) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "journal-card sticky top-24 w-[220px] p-3 transition-all duration-300",
        hide ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"
      )}
    >
      <h3 className="journal-label mb-2">{t("blog.table_of_contents")}</h3>
      <div className="max-h-[calc(100vh-220px)] overflow-y-auto">
        <div className="space-y-1 text-sm">
          {renderNodes(nodes)}
        </div>
      </div>
    </div>
  );
};
