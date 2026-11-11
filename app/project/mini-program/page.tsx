import type { Metadata } from "next";
import { MiniProgramProject } from "@/components/mini-program-project";

export const metadata: Metadata = {
  title: "图图高手 | Gary Frost",
  description:
    "图图高手是一款本地优先的微信图片处理小程序，提供压缩、格式转换、裁剪、水印、证件照与拼图等常用工具。",
};

export default function Page() {
  return <MiniProgramProject />;
}
