"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  JuejinIcon,
  JianshuIcon,
  GithubIcon,
  GmailIcon,
  ZhihuIcon,
  DevIcon,
  MediumIcon,
} from "./icons";

export function Socials() {
  const [socials] = useState([
    {
      label: "Github",
      borderColor: "border-[#1F2328]",
      shadowColor: "hover:shadow-[#1F2328] dark:hover:shadow-[#1F2328]",
      iconBgColor: "bg-[#1F2328]",
      url: "https://github.com/GrayFrost",
      icon: <GithubIcon fill="#fff" />,
    },
    {
      label: "掘金",
      borderColor: "border-[#1F80FF]",
      shadowColor: "hover:shadow-[#1F80FF] dark:hover:shadow-[#1F80FF]",
      iconBgColor: "bg-[#1F80FF]",
      url: "https://juejin.cn/user/3350967171680920",
      icon: <JuejinIcon />,
    },
    {
      label: "邮箱",
      borderColor: "border-[#EA4335]",
      shadowColor: "hover:shadow-[#EA4335] dark:hover:shadow-[#EA4335]",
      iconBgColor: "bg-[#EA4335]",
      url: "mailto:garyfrost4321@gmail.com",
      icon: <GmailIcon fill="#fff" />,
    },
    {
      label: "Medium",
      borderColor: "border-[#000000]",
      shadowColor: "hover:shadow-[#000000] dark:hover:shadow-[#000000]",
      iconBgColor: "bg-[#ffffff]",
      url: "https://medium.com/@garyfrost4321",
      icon: <MediumIcon />,
    },
    {
      label: "知乎",
      borderColor: "border-[#1771F6]",
      shadowColor: "hover:shadow-[#1771F6] dark:hover:shadow-[#1771F6]",
      iconBgColor: "bg-[#1771F6]",
      url: "https://www.zhihu.com/people/zzhui-92",
      icon: <ZhihuIcon />,
    },
    {
      label: "简书",
      borderColor: "border-[#EA6F5A]",
      shadowColor: "hover:shadow-[#EA6F5A] dark:hover:shadow-[#EA6F5A]",
      iconBgColor: "bg-[#EA6F5A]",
      url: "https://www.jianshu.com/u/8e629fd1e3b0",
      icon: <JianshuIcon />,
    },
    {
      label: "Dev.to",
      borderColor: "border-[#0A0A0A]",
      shadowColor: "hover:shadow-[#0A0A0A] dark:hover:shadow-[#0A0A0A]",
      iconBgColor: "bg-[#fff]",
      url: "https://dev.to/frost_gary_90f3cf1699bd02",
      icon: <DevIcon />,
    },
  ]);

  // const socialClass =
  //   "w-full cursor-pointer rounded-md border bg-white dark:bg-[#1e1f26] px-2 py-1.5 transition-all hover:bg-transparent hover:shadow-[4px_4px_0px_0px]  dark:hover:shadow-[4px_4px_0px_0px] flex items-center";

  const socialClass = "";
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 sm:grid-cols-4 sm:grid-rows-4">
      {socials.map((social) => (
        <Link
          className={twMerge(
            socialClass,
            social.borderColor,
            social.shadowColor
          )}
          key={social.label}
          href={social.url}
        >
          <div
            className={twMerge(
              "flex max-w-16 aspect-square items-center justify-center rounded-[10px] text-white p-2 border",
              social.borderColor,
              social.iconBgColor
            )}
          >
            {social.icon}
          </div>
          {/* {social.label} */}
        </Link>
      ))}
    </div>
  );
}
