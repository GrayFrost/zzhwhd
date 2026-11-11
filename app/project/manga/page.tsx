import Image from "next/image";
import Link from "next/link";
export default function MangaReader() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <Image
            width={80}
            height={80}
            src="/manga-icon.png"
            alt="漫画阅读器图标"
            className="w-20 h-20 object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              macOS 漫画阅读器
            </h1>
            <p className="text-muted-foreground mt-2">
              简洁、优雅的原生漫画阅读体验
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="journal-card p-6 sm:p-8">
            <h2 className="text-2xl font-black mb-5 text-foreground">
              主要特点
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                简洁优雅的阅读界面
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                支持 CBZ、ZIP、RAR 等格式
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                自动记忆阅读进度
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                原生 macOS 应用体验
              </li>
            </ul>
          </div>

          <div className="journal-card p-6 sm:p-8">
            <h2 className="text-2xl font-black mb-5 text-foreground">
              系统要求
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                macOS 12.0 或更高版本
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Apple Silicon 或 Intel 处理器
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                2GB 以上可用存储空间
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              下载
            </h2>
            <Link href="https://apps.apple.com/cn/app/mangaview/id6740051481?mt=12">
              <button className="surface-link inline-flex h-12 items-center gap-2 rounded-md border border-accent bg-accent px-6 text-sm font-black text-accent-foreground hover:border-foreground hover:text-accent-foreground">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                下载最新版本
              </button>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              版本 1.0 | 更新日期: 2025-01-24
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              反馈建议
            </h2>
            <p className="text-muted-foreground mb-4">
              如有任何问题或建议，欢迎通过以下方式联系我：
            </p>
            <Link
              href="mailto:garyfrost4321@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:text-foreground"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              发送邮件
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
