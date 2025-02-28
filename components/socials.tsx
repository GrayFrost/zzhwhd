"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { JuejinIcon, JianshuIcon, GithubIcon2, EmailIcon, ZhihuIcon } from "./icons";

export function Socials() {
  const [socials] = useState([
    {
      label: "Github",
      borderColor: "border-[#1F2328]",
      shadowColor: "hover:shadow-[#1F2328]",
      iconBgColor: "bg-[#1F2328]",
      url: "https://github.com/GrayFrost",
      icon: <GithubIcon2 />,
    },
    {
      label: "掘金",
      borderColor: "border-[#1F80FF]",
      shadowColor: "hover:shadow-[#1F80FF]",
      iconBgColor: "bg-[#1F80FF]",
      url: "https://juejin.cn/user/3350967171680920",
      icon: <JuejinIcon />,
    },
    {
      label: "邮箱",
      borderColor: "border-[#EA4335]",
      shadowColor: "hover:shadow-[#EA4335]",
      iconBgColor: "bg-[#EA4335]",
      url: "mailto:garyfrost4321@gmail.com",
      icon: <EmailIcon />,
    },
    {
      label: "知乎",
      borderColor: "border-[#1771F6]",
      shadowColor: "hover:shadow-[#1771F6]",
      iconBgColor: "bg-[#1771F6]",
      url: "https://www.zhihu.com/people/zzhui-92",
      icon: <ZhihuIcon />,
    },
    {
      label: "简书",
      borderColor: "border-[#EA6F5A]",
      shadowColor: "hover:shadow-[#EA6F5A]",
      iconBgColor: "bg-[#EA6F5A]",
      url: "https://www.jianshu.com/u/8e629fd1e3b0",
      icon: <JianshuIcon />,
    },
  ]);

  const socialClass =
    "w-full cursor-pointer rounded-md border bg-white px-2 py-1.5 transition-all hover:bg-transparent hover:shadow-[4px_4px_0px_0px] hover:shadow-gray-800 dark:bg-card dark:hover:bg-accent dark:hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-accent flex items-center";

  return (
    <>
      {socials.map((social) => (
        <Link
          className={twMerge(socialClass, social.borderColor, social.shadowColor)}
          key={social.label}
          href={social.url}
        >
          <div
            className={twMerge(
              "flex h-8 w-8 items-center justify-center rounded-[10px] p-2 text-white mr-2",
              social.iconBgColor,
            )}
          >
            {social.icon}
          </div>
          {social.label}
        </Link>
      ))}
    </>
  );
}
