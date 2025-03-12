// import { format, parseISO } from 'dayjs'
import { getAllPosts, getPostDetails } from "@/api/posts";
import Mdx from "@/components/mdx-components";
import { DateFormat } from "@/components/date-format";
import "@/styles/atom-one-dark-reasonable.css";
import "katex/dist/katex.css";
import { getTOC } from "@/api/toc";
import { TableOfContents } from "@/components/table-of-contents";
import type { Metadata } from "next";
export const generateStaticParams = async () => {
  const { posts: allPosts } = await getAllPosts();
  return allPosts.map((post) => ({
    slug: `${decodeURIComponent(post.id)}`,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const { post } = await getPostDetails(slug);
  const {
    metadata: { title, description, tags },
  } = post;
  return {
    title,
    description,
    keywords: tags,
    generator: 'Next.js',
    authors: [
      { name: "蒜头蒜", url: "https://zzhwhd.com" },
      { name: "Garlic Garlic" },
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
  const data = await getTOC(slug);

  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      <article className="prose dark:prose-invert mx-auto w-full prose-headings:tracking-wide prose-p:tracking-wide prose-a:tracking-wide max-w-none">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold leadi md:text-3xl text-heading tracking-wide">
            {title}
          </h1>
          {date && (
            <p className="text-xs text-muted">
              {"发表于 "}
              <DateFormat date={date} />
              <span className="mr-2">
                阅读时长{Math.ceil(readTime?.minutes || 0)}分钟
              </span>
            </p>
          )}
        </div>
        <div className="relative">
          <div className="sticky top-20 ml-[-210px] h-0 text-nowrap overflow-visible lg:block md:hidden sm:hidden">
            <TableOfContents nodes={data || {}} />
          </div>
          <Mdx source={content} />
        </div>
      </article>
    </div>
  );
};

export default PostLayout;
