import { Project } from '@/components/project';

export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* 顶部标题区域 */}
      <header className="mb-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-brand-black dark:text-brand-cream tracking-tight italic">
          PROJECTS.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-medium">
          我的创意实验与技术实践，探索更多可能性。
        </p>
      </header>

      {/* 项目展示区域 */}
      <Project />

      {/* 底部装饰 */}
      <div className="mt-24 pt-12 border-t border-brand-black/5 dark:border-brand-cream/5 text-center">
        <div className="inline-flex items-center space-x-3 text-brand-yellow">
          <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20"></div>
        </div>
      </div>
    </div>
  )
}