import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">
          欢迎来到我的个人网站
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          我是一名开发者，这里展示了我的一些项目作品
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/manga"
            className="p-6 border rounded-lg hover:shadow-lg transition dark:border-gray-700 dark:hover:border-gray-600"
          >
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              漫画阅读器
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              专为 macOS 设计的漫画阅读应用
            </p>
          </Link>
          <Link
            to="https://z-site-ten.vercel.app"
            className="p-6 border rounded-lg hover:shadow-lg transition dark:border-gray-700 dark:hover:border-gray-600"
          >
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              蒜头蒜
            </h2>
            <p className="text-gray-600 dark:text-gray-300">个人博客</p>
          </Link>
          <div
            className="p-6 border rounded-lg hover:shadow-lg transition dark:border-gray-700 dark:hover:border-gray-600 cursor-pointer"
            onClick={() => {
              window.location.href = "https://zzhwhd.com/tree-diagram";
            }}
          >
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              股权结构图
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              一个简易的画图工具
            </p>
          </div>
          <div
            className="p-6 border rounded-lg hover:shadow-lg transition dark:border-gray-700 dark:hover:border-gray-600 cursor-pointer"
            onClick={() => {
              window.location.href = "https://zzhwhd.com/app-icon-generator";
            }}
          >
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              App图标生成工具
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              一个生成多种尺寸图标的工具
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
