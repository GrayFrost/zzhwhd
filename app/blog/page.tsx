import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import dayjs from 'dayjs';
// import { getMDXComponent } from "next-contentlayer2/hooks";


function PostCard(post: Post) {
  // const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {dayjs(post.date).format('YYYY-MM-DD')}
      </time>
      {/* <div className="text-sm">
        <Content />
      </div> */}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1>博客</h1>
      <Link href="/blog/archives">归档</Link>
      <Link href="/blog/tags">标签</Link>
      <Link href="/blog/categories">分类</Link>
      {allPosts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}