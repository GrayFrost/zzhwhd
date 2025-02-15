"use server";

import fs from "fs";
import matter from "gray-matter";
import readingTime, { ReadTimeResults } from "reading-time";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export interface Post {
  id: string;
  url: string;
  filename: string;
  metadata: {
    [key: string]: any;
  };
  content: string;
  readTime?: ReadTimeResults;
}

export async function getAllPosts(): Promise<{ posts: Post[] }> {
  const postsDirectory = path.resolve(process.cwd(), "./posts");
  let filenames = await fs.promises.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = await fs.promises.readFile(fullPath, "utf-8");

      // 解析内容
      const { data, content } = matter(fileContents);
      const readTime = readingTime(content);

      return {
        id: filename.split(".")[0], // 确保每个文件名唯一
        url: `/blog/detail/${filename.split(".")[0]}`,
        filename,
        metadata: data,
        content,
        readTime,
      };
    })
  );

  return {
    posts,
  };
}

export async function getPostDetails(
  filenameId: string
): Promise<{ post: Post }> {
  const filename = `${filenameId}.mdx`;
  const postsDirectory = path.resolve(process.cwd(), "./posts");
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = await fs.promises.readFile(fullPath, "utf-8");

  // 解析内容
  const { data, content } = matter(fileContents);
  const readTime = readingTime(content);
  const post = {
    id: filenameId, // 确保每个文件名唯一
    url: `/blog/detail/${filenameId}`,
    filename,
    metadata: data,
    raw: content,
    content,
    readTime,
  };

  return {
    post,
  };
}
