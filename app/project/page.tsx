import { Project } from '@/components/project';

export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* 顶部标题区域 */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">项目</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          我的开源项目和应用
        </p>
      </div>

      {/* 项目展示区域 */}
      <Project />

      {/* 底部装饰 */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 text-gray-400 dark:text-gray-500">
          <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-current opacity-40"></div>
          <div className="w-2 h-2 rounded-full bg-current opacity-20"></div>
        </div>
      </div>
    </div>
  )
}