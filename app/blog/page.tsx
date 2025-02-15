import BlogLayout from "@/layouts/blog-layout";
import { getAllPosts } from "@/api/posts";

export default async function Page() {
  const pageNumber = 1;
  const { posts } = await getAllPosts();
  
  return <BlogLayout posts={posts} pageNumber={pageNumber} />;
}
