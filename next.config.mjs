import createMDX from '@next/mdx';
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import langJavascript from "highlight.js/lib/languages/javascript";
import langBash from "highlight.js/lib/languages/bash";
import langXml from "highlight.js/lib/languages/xml";
import langDiff from "highlight.js/lib/languages/diff";
import langJson from "highlight.js/lib/languages/json";
import languageTypescript from "highlight.js/lib/languages/typescript";


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  options: {
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
})

export default withMDX(nextConfig);
