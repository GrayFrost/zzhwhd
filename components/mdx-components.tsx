import { MDXRemote } from "next-mdx-remote-client/rsc";
import Image from "./image";
import { createHeaderId, createUniqueHeaderId } from "@/utils/h-id";
import { ReactNode } from "react";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";

import langJavascript from "highlight.js/lib/languages/javascript";
import langBash from "highlight.js/lib/languages/bash";
import langXml from "highlight.js/lib/languages/xml";
import langDiff from "highlight.js/lib/languages/diff";
import langJson from "highlight.js/lib/languages/json";
import languageTypescript from "highlight.js/lib/languages/typescript";
import languageLatex from "highlight.js/lib/languages/latex";
import languageYaml from "highlight.js/lib/languages/yaml";
import languageDockerfile from "highlight.js/lib/languages/dockerfile";
import languageSwift from "highlight.js/lib/languages/swift";
import languagePowerShell from "highlight.js/lib/languages/powershell";

const components = {
  Image,
  h2(props: { children: any; id?: string }) {
    const { children, id } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children?.toString() || "";
    return <h2 {...props} id={id || createHeaderId(text || "")} />;
  },
  h3(props: { children: any; id?: string }) {
    const { children, id } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children?.toString() || "";
    return <h3 {...props} id={id || createHeaderId(text || "")} />;
  },
  h4(props: { children: any; id?: string }) {
    const { children, id } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children?.toString() || "";
    return <h4 {...props} id={id || createHeaderId(text || "")} />;
  },
  code(props: { children: ReactNode; className?: string }) {
    const { className } = props;
    const codeClassName = className ? className : "text-accent";
    return <code {...props} className={codeClassName} />;
  },
};

function remarkHeadingIds() {
  return (tree: any) => {
    const seen: Record<string, number> = {};

    visit(tree, "heading", (node: any) => {
      const text = toString(node);
      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          id: createUniqueHeaderId(text, seen),
        },
      };
    });
  };
}

export default function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote 
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath, remarkHeadingIds],
          rehypePlugins: [
            rehypeKatex,
            [
              rehypeHighlight,
              {
                languages: {
                  javascript: langJavascript,
                  js: langJavascript,
                  bash: langBash,
                  html: langXml,
                  diff: langDiff,
                  json: langJson,
                  typescript: languageTypescript,
                  latex: languageLatex,
                  yaml: languageYaml,
                  dockerfile: languageDockerfile,
                  swift: languageSwift,
                  powershell: languagePowerShell,
                },
              },
            ],
          ],
        },
      }}
    />
  );
}

