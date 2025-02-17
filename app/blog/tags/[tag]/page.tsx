import { getAllPosts, Post } from "@/api/posts";
import Link from "next/link";
import { BlogTag } from "@/components/blog-tag";

const Page = async ({ params }: { params: { tag: string } }) => {
  const { tag } = await params;
  const { posts: allPosts } = await getAllPosts();
  const tagStr = decodeURIComponent(tag);
  const posts = allPosts.filter((post) => post.metadata.tags?.includes(tagStr));
  return (
    <div className="container max-w-3xl mx-auto p-4 md:p-6">
      <div className="text-xl font-bold my-4">
        <span className="text-rose-700">{tagStr}</span>标签下所有文章
      </div>
      {posts.map((post: Post) => (
        <Link
          key={post.url}
          href={post.url}
          className="flex max-w-4xl px-2 py-6 mx-auto rounded-lg cursor-pointer hover:bg-[#f9fafb] group dark:hover:bg-[#1f2937]"
        >
          <div>{post.metadata?.title}</div>
          <div>
            {post.metadata?.tags.map((tag: string) => {
              return <BlogTag key={tag} tag={tag} />;
            })}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
