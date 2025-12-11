import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "export", // 启用静态导出，用于GitHub Pages部署
  // 如果你的GitHub Pages使用子路径（如 username.github.io/repo-name），取消下面的注释并设置正确的路径
  basePath: "/zzhwhd", // 使用username.github.io/repo-nanme形式时，需要设置正确的路径
  // trailingSlash: true, // 可选：确保URL以斜杠结尾
  images: {
    unoptimized: true, // GitHub Pages不支持Next.js图片优化，需要禁用
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
