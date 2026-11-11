// import { format, parseISO } from 'dayjs'
import { getAllPosts, getPostDetails } from "@/api/posts";
import Mdx from "@/components/mdx-components";
import "@/styles/atom-one-dark-reasonable.css";
import "katex/dist/katex.css";
import { getTOC } from "@/api/toc";
import type { Metadata } from "next";
import { PostArticleChrome } from "@/components/post-article-chrome";
export const generateStaticParams = async () => {
  const { posts: allPosts } = await getAllPosts();
  return allPosts.map((post) => ({
    slug: post.id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const slugDecoded = decodeURIComponent(slug);

  const { post } = await getPostDetails(slugDecoded);
  const {
    metadata: { title, description, tags },
  } = post;
  return {
    title,
    description,
    keywords: tags,
    generator: 'Next.js',
    authors: [
      { name: "放肆的阿树", url: "https://zzhwhd.com" },
      { name: "Gary Frost" },
      { name: "GaryFrost", url: "https://github.com/GrayFrost" },
    ],
  };
};

const PostLayout = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const slugNew = decodeURIComponent(slug); // 处理中文

  const { post } = await getPostDetails(slugNew);

  const {
    metadata: { title, date },
    content,
    readTime,
  } = post;
  const articleTitle = String(title || slugNew);
  
  let data: any[] = [];
  try {
    data = await getTOC(slugNew);
  } catch (error) {
    console.error('Error generating TOC:', error);
  }

  return (
    <PostArticleChrome
      title={articleTitle}
      date={date}
      minutes={Math.ceil(readTime?.minutes || 0)}
      toc={data}
    >
      <Mdx source={content} />
    </PostArticleChrome>
  );
};

export default PostLayout;
