import { allPosts } from "contentlayer/generated";
import BlogLayout from "@/layouts/blog-layout";

const POSTS_PER_PAGE = 10;

export default function Page() {
  const pageNumber = 1;
  const displayPosts = allPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "blog",
  };

  return <BlogLayout displayPosts={displayPosts} pagination={pagination} />;
}
