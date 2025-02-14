import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import langJavascript from "highlight.js/lib/languages/javascript";
import langBash from "highlight.js/lib/languages/bash";
import langXml from "highlight.js/lib/languages/xml";
import langDiff from "highlight.js/lib/languages/diff";
import langJson from "highlight.js/lib/languages/json";
import languageTypescript from "highlight.js/lib/languages/typescript";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    tags: { type: "list", of: { type: "string" }, default: [] },
    category: {
      type: "string",
    },
    layout: { type: "string" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/detail/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    cwd: process.cwd(),
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
});
