import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
const Page = async ({ params }: { params: { tag: string } }) => {
  const { tag } = await params;
  const posts = allPosts.filter((post) => post.tags?.includes(decodeURIComponent(tag)));
  return (
    <div>
      <h1>对应标签下的所有文章</h1>
      <ul>
        {posts.map((post: Post) => (
          <Link key={post._id} href={post.url}>
            {post.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
