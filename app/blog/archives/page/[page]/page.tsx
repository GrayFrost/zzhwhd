import { getAllPosts } from "@/api/posts";
import ArchiveLayout from '@/layouts/archive-layout';

const POSTS_PER_PAGE = 10;
export const generateStaticParams = async () => {
  const { posts: allPosts } = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const Page = async ({ params }: { params: { page: string } }) => {
  const { page } = await params;
  const pageNumber = parseInt(page);
  const { posts } = await getAllPosts();

  return (
    <ArchiveLayout posts={posts} pageNumber={pageNumber} />
  );
};

export default Page;
