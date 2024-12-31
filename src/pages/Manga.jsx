export default function MangaReader() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <img
            src="/manga-icon.png"
            alt="漫画阅读器图标"
            className="w-20 h-20 rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold dark:text-white">macOS 漫画阅读器</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              简洁、优雅的原生漫画阅读体验
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">主要特点</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> 
                简洁优雅的阅读界面
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                支持 CBZ、ZIP、RAR 等格式
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                自动记忆阅读进度
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                原生 macOS 应用体验
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">系统要求</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                macOS 12.0 或更高版本
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                Apple Silicon 或 Intel 处理器
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                2GB 以上可用存储空间
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">下载</h2>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              下载最新版本
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              版本 1.0.0 | 更新日期: 2024-03-20
            </p>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">反馈建议</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              如有任何问题或建议，欢迎通过以下方式联系我：
            </p>
            <a href="mailto:feedback@example.com" 
               className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              发送邮件
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
