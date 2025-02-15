import { getAllPosts } from "@/api/posts";
import ArchiveLayout from "@/layouts/archive-layout";

export default async function Page() {
  const pageNumber = 1;
  const { posts } = await getAllPosts();
  return <ArchiveLayout posts={posts} pageNumber={pageNumber} />;
}
