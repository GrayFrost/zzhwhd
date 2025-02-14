import { allPosts } from "contentlayer/generated";
import BlogLayout from "@/layouts/blog-layout";

const POSTS_PER_PAGE = 10;

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const Page = async ({ params }: { params: { page: string } }) => {
  const { page } = await params;
  const pageNumber = parseInt(page);


  return <BlogLayout pageNumber={pageNumber} />;
};

export default Page;
