// import { format, parseISO } from 'dayjs'
import { getAllPosts, getPostDetails } from "@/api/posts";
import Mdx from "@/components/mdx-components";
import { DateFormat } from "@/components/date-format";
import "@/styles/atom-one-dark-reasonable.css";
import "katex/dist/katex.css";

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
}) => {
  const { slug } = await params;
  const { post } = await getPostDetails(slug);
  const {
    metadata: { title },
  } = post;
  return { title };
};

const PostLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const slugNew = decodeURIComponent(slug);

  const { post } = await getPostDetails(slugNew);
  const {
    metadata: { title, date },
    content,
    readTime,
  } = post;

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
        <Mdx source={content} />
      </article>
    </div>
  );
};

export default PostLayout;
