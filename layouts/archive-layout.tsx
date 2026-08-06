"use client";

import { Post } from "@/api/posts";
import dayjs from 'dayjs';
import Pagination from "@/components/pagination";
import { ArchiveListItem } from "@/components/archive-list-item";
import { BlogContentFrame } from "@/components/blog-content-frame";
import { useLanguage } from "@/components/language-provider";

const POSTS_PER_PAGE = 10;

interface Archive {
  year: string;
  posts: Post[];
}

function getArchiveList(allPosts: Post[], pageNumber: number): Archive[] {
  const displayPosts = allPosts
    .sort((a, b) => {
      return dayjs(b.metadata.date).valueOf() - dayjs(a.metadata.date).valueOf()
    })
    .slice((pageNumber - 1) * POSTS_PER_PAGE, pageNumber * POSTS_PER_PAGE);
  const archiveList: Archive[] = [];
  for (const post of displayPosts) {
    const year = dayjs(post.metadata.date).format('YYYY');
    const archive = archiveList.find((archive) => archive.year === year);
    if (archive) {
      archive.posts.push(post);
    } else {
      archiveList.push({ year, posts: [post] });
    }
  }
  return archiveList;
}

export default function Page({ pageNumber, posts: allPosts }: { pageNumber: number, posts: Post[] }) {
  const { t } = useLanguage();
  const displayPosts = getArchiveList(allPosts, pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "blog/archives",
  };
  // 所有文章按时间排序，同时按年份拆分

  return (
    <BlogContentFrame
      sidebarTitle={t("blog.archives")}
      sidebarStats={[
        { label: t("blog.all_posts"), value: allPosts.length },
        { label: t("common.latest"), value: pageNumber },
      ]}
    >
      <div className="space-y-8">
      {displayPosts.map((archive) => (
        <section key={archive.year} className="journal-card p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-4">
            <h2 className="text-3xl font-black tracking-tighter text-foreground">{archive.year}</h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <div className="divide-y divide-line">
            {archive.posts.map((post) => (
              <ArchiveListItem post={post} key={post.url} />
            ))}
          </div>
        </section>
      ))}
      </div>
      <Pagination {...pagination} />
    </BlogContentFrame>
  );
}
