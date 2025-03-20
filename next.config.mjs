import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAPTILER_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPTILER_TOKEN,
    // 添加其他需要暴露的环境变量
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "standalone",
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
