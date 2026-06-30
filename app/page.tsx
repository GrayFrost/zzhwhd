import { HomeJournal } from "@/components/home-journal";
import { getAllPosts } from "@/api/posts";

export default async function HomePage() {
  const { posts } = await getAllPosts();
  const recentPosts = posts.slice(0, 4).map((post) => ({
    title: String(post.metadata.title ?? post.id),
    description: String(post.metadata.description ?? ""),
    date: String(post.metadata.date ?? ""),
    href: post.url,
  }));

  return <HomeJournal recentPosts={recentPosts} />;
}
