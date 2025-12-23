import { CompileOptions } from "@mdx-js/mdx";

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

export interface SerializeOptions {
  /**
   * Pass-through variables for use in the MDX content
   */
  scope?: Record<string, unknown>;
  /**
   * These options are passed to the MDX compiler.
   * See [the MDX docs.](https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js).
   */
  mdxOptions?: Omit<CompileOptions, "outputFormat" | "providerImportSource"> & {
    useDynamicImport?: boolean;
  };
  /**
   * Indicate whether or not frontmatter should be parsed out of the MDX. Defaults to false
   */
  parseFrontmatter?: boolean;
}

export const options: SerializeOptions = {
  mdxOptions: {
    development: process.env.NODE_ENV === 'development',
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
};
