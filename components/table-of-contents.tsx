"use client";

function renderNodes(nodes) {
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

const TOCLink = ({ node }) => {
  const fontSizes = { 2: "base", 3: "sm", 4: "xs" };
  const padding = {
    2: "",
    3: "indent-2",
    4: "indent-4",
  };

  const id = node.data.hProperties.id;
  return (
    <a
      href={`#${id}`}
      className={`block text-${fontSizes[node.depth]} ${
        padding[node.depth]
      } hover:accent-color py-1`}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};

export const TableOfContents = ({ nodes }) => {
  if (!nodes?.length) {
    return null;
  }
  console.log("zzh nodes", nodes);

  return (
    <div className={"toc fixed left-0"}>
      <h3 className={"secondary-text"}>目录</h3>
      {renderNodes(nodes)}
    </div>
  );
};
