import { getAllPosts, Post } from "@/api/posts";
import Link from "next/link";
const Page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  const { posts: allPosts } = await getAllPosts();
  const posts = allPosts.filter(
    (post) => post.metadata?.category === decodeURIComponent(category)
  );
  return (
    <div>
      <h1>对应分类下的所有文章</h1>
      <ul>
        {posts.map((post: Post) => (
          <Link key={post.url} href={post.url}>
            {post.metadata.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
