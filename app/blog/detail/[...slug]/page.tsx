// import { format, parseISO } from 'dayjs'
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { components } from "@/components/mdx-components";
import { DateFormat } from "@/components/date-format";
export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath
      .split("/")
      .map((name) => decodeURIComponent(name)),
  }));

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const { slug } = await params;
  const slugNew = slug.join("/");
  const post = allPosts.find((post) => post._raw.flattenedPath === slugNew);
  return { title: post?.title };
};

const PostLayout = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  const slugNew = decodeURIComponent(slug.join("/"));
  const post = allPosts.find((post) => post._raw.flattenedPath === slugNew);

  const MDXContent = post ? getMDXComponent(post.body.code) : null;

  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      <article className="prose dark:prose-invert mx-auto w-full prose-headings:tracking-wide prose-p:tracking-wide prose-a:tracking-wide max-w-none">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold leadi md:text-3xl text-heading tracking-wide">
            {post?.title}
          </h1>
          {post?.date && (
            <p className="text-xs text-muted">
              {"发表于 "}
              <DateFormat date={post.date} />
            </p>
          )}
        </div>
        {!!MDXContent && <MDXContent components={components} />}
      </article>
    </div>
  );
};

export default PostLayout;
