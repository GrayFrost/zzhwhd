// import { format, parseISO } from 'dayjs'
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { components } from "@/components/mdx-components";
import dayjs from "dayjs";
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
    <article className="mt-5 prose lg:prose-lg mx-auto dark:prose-invert prose-img:w-full prose-img:max-w-lg prose-img:mx-auto prose-img:shadow-2xl prose-img:rounded-3xl prose-a:text-slate-500 ">
      <div className="mb-8 text-center">
        <h1>{post?.title}</h1>
        {post?.date && (
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {dayjs(post.date).format("YYYY-MM-DD")}
          </time>
        )}
      </div>
      {!!MDXContent && <MDXContent components={components} />}
    </article>
  );
};

export default PostLayout;
