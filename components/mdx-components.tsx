import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "./image";
import { createHeaderId } from "@/utils/h-id";
import { ReactNode } from "react";
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

const components = {
  Image,
  h2(props: { children: any }) {
    const { children } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children?.toString() || "";
    return <h2 {...props} id={createHeaderId(text ? `h2-${text}` : "")} />;
  },
  h3(props: { children: any }) {
    const { children } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children?.toString() || "";
    return <h3 {...props} id={createHeaderId(text ? `h3-${text}` : "")} />;
  },
  h4(props: { children: any }) {
    const { children } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children?.toString() || "";
    return <h4 {...props} id={createHeaderId(text ? `h4-${text}` : "")} />;
  },
  code(props: { children: ReactNode; className?: string }) {
    const { className } = props;
    const codeClassName = className ? className : "text-brand-yellow";
    return <code {...props} className={codeClassName} />;
  },
};

export default function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote 
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
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
                },
              },
            ],
          ],
        },
      }}
    />
  );
}
