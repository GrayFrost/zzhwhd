import { getAllPosts, Post } from "@/api/posts";
import { TermPostList } from "@/components/taxonomy-views";

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const { posts: allPosts } = await getAllPosts();
  const categoryStr = decodeURIComponent(category);
  const posts = allPosts.filter(
    (post) => post.metadata?.category === categoryStr
  );
  return (
    <TermPostList
      type="category"
      term={categoryStr}
      posts={posts.map((post: Post) => ({
        title: String(post.metadata?.title ?? post.id),
        date: String(post.metadata?.date ?? ""),
        href: post.url,
        tags: post.metadata?.tags ?? [],
      }))}
    />
  );
};

export default Page;
