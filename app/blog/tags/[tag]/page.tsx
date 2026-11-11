import { getAllPosts, Post } from "@/api/posts";
import { TermPostList } from "@/components/taxonomy-views";

const Page = async ({ params }: { params: Promise<{ tag: string }> }) => {
  const { tag } = await params;
  const { posts: allPosts } = await getAllPosts();
  const tagStr = decodeURIComponent(tag);
  const posts = allPosts.filter((post) => post.metadata.tags?.includes(tagStr));
  return (
    <TermPostList
      type="tag"
      term={tagStr}
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
