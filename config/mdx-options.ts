
import { CompileOptions } from '@mdx-js/mdx';

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import langJavascript from "highlight.js/lib/languages/javascript";
import langBash from "highlight.js/lib/languages/bash";
import langXml from "highlight.js/lib/languages/xml";
import langDiff from "highlight.js/lib/languages/diff";
import langJson from "highlight.js/lib/languages/json";
import languageTypescript from "highlight.js/lib/languages/typescript";


export interface SerializeOptions {
    /**
     * Pass-through variables for use in the MDX content
     */
    scope?: Record<string, unknown>;
    /**
     * These options are passed to the MDX compiler.
     * See [the MDX docs.](https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js).
     */
    mdxOptions?: Omit<CompileOptions, 'outputFormat' | 'providerImportSource'> & {
        useDynamicImport?: boolean;
    };
    /**
     * Indicate whether or not frontmatter should be parsed out of the MDX. Defaults to false
     */
    parseFrontmatter?: boolean;
}

export const options: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          languages: {
            javascript: langJavascript,
            bash: langBash,
            html: langXml,
            diff: langDiff,
            json: langJson,
            typescript: languageTypescript,
          },
        },
      ],
    ],
  },
};
