import { getAllPosts, Post } from "@/api/posts";
import Link from "next/link";
const Page = async ({ params }: { params: { tag: string } }) => {
  const { tag } = await params;
  const { posts: allPosts } = await getAllPosts();
  const posts = allPosts.filter((post) => post.metadata.tags?.includes(decodeURIComponent(tag)));
  return (
    <div>
      <h1>对应标签下的所有文章</h1>
      <ul>
        {posts.map((post: Post) => (
          <Link key={post.url} href={post.url}>
            {post.metadata?.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
