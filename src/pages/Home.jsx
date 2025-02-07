import { Link } from "react-router-dom";
import { Responsive } from "react-grid-layout";
import { useWindowWidth } from "../hooks/use-window-width";
import { layouts } from "../config/layout";
export default function Home() {
  const width = useWindowWidth();

  if (!width) return null;

  return (
    <div>
      <Responsive
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="layout w-full h-full"
        cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
        layouts={layouts}
        isDraggable={false}
        isResizable={false}
        width={width}
        margin={[16, 16]}
      >
        <Link
          key="manga"
          to="/manga"
          className="group bg-white dark:bg-darkBg border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg hover:scale-[1.02] mx-auto w-full max-w-[400px]"
        >
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">
            漫画阅读器
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            专为 macOS 设计的漫画阅读应用
          </p>
        </Link>
        <Link
          key="blog"
          to="https://z-site-ten.vercel.app"
          className="group bg-white dark:bg-darkBg border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg hover:scale-[1.02] mx-auto w-full max-w-[400px]"
        >
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">
            蒜头蒜
          </h2>
          <p className="text-gray-600 dark:text-gray-300">个人博客</p>
        </Link>
        <Link
          key="tree-diagram"
          className="group bg-white dark:bg-darkBg border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg hover:scale-[1.02] mx-auto w-full max-w-[400px]"
          to="https://zzhwhd.com/tree-diagram"
        >
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">
            股权结构图
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            一个简易的画图工具
          </p>
        </Link>
        <Link
          key="app-icon-generator"
          className="group bg-white dark:bg-darkBg border dark:border-knight transition-all duration-300 rounded-[32px] flex flex-col justify-between p-5 overflow-hidden z-[1] hover:shadow-lg hover:scale-[1.02] mx-auto w-full max-w-[400px]"
          to="https://zzhwhd.com/app-icon-generator"
        >
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">
            App图标生成工具
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            一个生成多种尺寸图标的工具
          </p>
        </Link>
      </Responsive>
    </div>
  );
}
