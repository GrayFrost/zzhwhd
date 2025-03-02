import { getAllPosts } from "@/api/posts";
import BlogLayout from "@/layouts/blog-layout";

const POSTS_PER_PAGE = 10;

export const generateStaticParams = async () => {
  const { posts: allPosts } = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const Page = async ({ params }: { params: Promise<{ page: string }> }) => {
  const { page } = await params;
  const pageNumber = parseInt(page);
  const { posts } = await getAllPosts();

  return <BlogLayout posts={posts} pageNumber={pageNumber} />;
};

export default Page;
