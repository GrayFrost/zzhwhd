import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
const Page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  console.log('zzh category--------', category);
  const posts = allPosts.filter((post) => post.category === decodeURIComponent(category));
  return (
    <div>
      <h1>对应分类下的所有文章</h1>
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
