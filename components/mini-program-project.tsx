"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Combine,
  Crop,
  FileImage,
  Grid3X3,
  MessageCircle,
  Minimize2,
  Paintbrush,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Stamp,
  ThumbsUp,
  UserRound,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const tools = [
  {
    title: { zh: "格式转换", en: "Format conversion" },
    description: { zh: "导出 JPG、PNG 等常用格式", en: "Export common formats such as JPG and PNG" },
    color: "#d8b7f2",
    icon: FileImage,
  },
  {
    title: { zh: "图片压缩", en: "Image compression" },
    description: { zh: "调节质量，减小图片体积", en: "Adjust quality and reduce file size" },
    color: "#dcf56d",
    icon: Minimize2,
  },
  {
    title: { zh: "证件照制作", en: "ID photo" },
    description: { zh: "规格裁切与背景处理", en: "Crop to standard sizes and adjust backgrounds" },
    color: "#7890ee",
    icon: UserRound,
  },
  {
    title: { zh: "图片裁剪", en: "Crop" },
    description: { zh: "按比例裁出需要的画面", en: "Crop images to the ratio you need" },
    color: "#f47a5b",
    icon: Crop,
  },
  {
    title: { zh: "图片加水印", en: "Watermark" },
    description: { zh: "添加文字标识与满屏水印", en: "Add text marks and tiled watermarks" },
    color: "#efb8df",
    icon: Stamp,
  },
  {
    title: { zh: "二维码生成", en: "QR code" },
    description: { zh: "把文字或链接转成二维码", en: "Turn text or links into QR codes" },
    color: "#f4d35e",
    icon: QrCode,
  },
  {
    title: { zh: "马赛克", en: "Mosaic" },
    description: { zh: "涂抹遮挡局部敏感内容", en: "Brush over sensitive areas" },
    color: "#5bc7d6",
    icon: Paintbrush,
  },
  {
    title: { zh: "图片合并", en: "Image merge" },
    description: { zh: "把多张图片合并为一张", en: "Combine multiple images into one" },
    color: "#93d977",
    icon: Combine,
  },
  {
    title: { zh: "九宫格拼图", en: "Grid collage" },
    description: { zh: "生成四、六或九宫格图片", en: "Create four, six, or nine-tile collages" },
    color: "#ffb06f",
    icon: Grid3X3,
  },
  {
    title: { zh: "对错举手牌", en: "Verdict card" },
    description: { zh: "一键亮出体验结论", en: "Show a clear yes-or-no verdict" },
    color: "#b4d4ff",
    icon: ThumbsUp,
  },
] as const;

const copy = {
  zh: {
    back: "返回项目",
    eyebrow: "微信小程序 · 图片工具箱",
    title: "图图高手",
    lead: "把日常图片处理收进一个入口。无需安装大型软件，打开微信就能完成压缩、转换、裁剪、加水印和拼图。",
    localBadge: "本地优先",
    toolkitBadge: "10 个工具入口",
    qrLabel: "微信扫码体验",
    qrTitle: "打开「图图高手」",
    qrCopy: "使用微信扫描小程序码，直接进入图片工具箱。",
    qrAlt: "图图高手微信小程序码",
    platform: "平台",
    platformValue: "微信小程序",
    stack: "技术栈",
    stackValue: "Taro 4 + React",
    version: "仓库版本",
    versionValue: "0.1.0",
    interfaceLabel: "小程序首页",
    search: "查找功能模块",
    go: "进入",
    featuresLabel: "功能一览",
    featuresTitle: "一套顺手的图片工具",
    featuresLead: "围绕保存、分享和整理图片的常见任务设计，每项功能都保持短路径操作。",
    approachLabel: "处理方式",
    approachTitle: "图片留在设备上，操作更轻巧",
    approachLead: "多数图片处理优先在本机完成；只有部分格式兼容或安全检查等能力，才按需使用云端兜底。",
    localTitle: "本地优先",
    localCopy: "压缩、裁剪、水印等日常操作尽量在设备侧完成，减少不必要的上传。",
    fallbackTitle: "按需兜底",
    fallbackCopy: "遇到运行环境不支持的格式或能力时，再使用云函数补足兼容性。",
    privacyTitle: "清晰的权限边界",
    privacyCopy: "相册、相机与图片权限的用途在小程序内单独说明，方便用户了解数据如何被使用。",
    statusLabel: "项目状态",
    status: "持续迭代中",
  },
  en: {
    back: "Back to projects",
    eyebrow: "WeChat Mini Program · Image toolkit",
    title: "Tutu Expert",
    lead: "Everyday image editing in one compact entry point. Compress, convert, crop, watermark, and make collages directly from WeChat.",
    localBadge: "Local-first",
    toolkitBadge: "10 tool entries",
    qrLabel: "Scan with WeChat",
    qrTitle: "Open Tutu Expert",
    qrCopy: "Scan the Mini Program code in WeChat to open the image toolkit.",
    qrAlt: "Tutu Expert WeChat Mini Program code",
    platform: "Platform",
    platformValue: "WeChat Mini Program",
    stack: "Stack",
    stackValue: "Taro 4 + React",
    version: "Repository version",
    versionValue: "0.1.0",
    interfaceLabel: "Mini program home",
    search: "Find a tool",
    go: "Go",
    featuresLabel: "Toolkit",
    featuresTitle: "A practical set of image tools",
    featuresLead: "Designed around common saving, sharing, and organizing tasks, with a short path through every workflow.",
    approachLabel: "Processing model",
    approachTitle: "Keep images on the device whenever possible",
    approachLead: "Most processing starts locally. Cloud fallbacks are used only when a format or safety capability needs extra runtime support.",
    localTitle: "Local-first",
    localCopy: "Compression, cropping, and watermarking stay on the device whenever the runtime supports them.",
    fallbackTitle: "Fallback when needed",
    fallbackCopy: "Cloud functions fill compatibility gaps for formats or capabilities unavailable in the mini program runtime.",
    privacyTitle: "Clear permission boundaries",
    privacyCopy: "Album, camera, and image permissions are explained in a dedicated privacy view inside the mini program.",
    statusLabel: "Project status",
    status: "In active iteration",
  },
} as const;

export function MiniProgramProject() {
  const { locale } = useLanguage();
  const language = locale === "en" ? "en" : "zh";
  const text = copy[language];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <Link
        href="/project"
        className="surface-link mb-6 inline-flex items-center gap-2 text-sm font-black text-muted-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {text.back}
      </Link>

      <section className="journal-card overflow-hidden">
        <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)]">
          <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-12">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/tutu-expert.png"
                  alt="图图高手图标"
                  width={80}
                  height={80}
                  priority
                  className="h-20 w-20 rounded-[22px] border border-line object-cover shadow-card"
                />
                <div>
                  <div className="journal-label">{text.eyebrow}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded border border-line px-2 py-1 text-xs font-black text-muted-foreground">
                      {text.localBadge}
                    </span>
                    <span className="rounded border border-line px-2 py-1 text-xs font-black text-muted-foreground">
                      {text.toolkitBadge}
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="journal-title mt-10 text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
                {text.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {text.lead}
              </p>

              <div className="mt-8 flex max-w-lg items-center gap-4 rounded-lg border border-line bg-muted/45 p-3">
                <Image
                  src="/images/icons/图图高手二维码.png"
                  alt={text.qrAlt}
                  width={112}
                  height={112}
                  className="h-28 w-28 shrink-0 rounded-md bg-white object-cover"
                />
                <div className="min-w-0 py-1">
                  <div className="journal-label">{text.qrLabel}</div>
                  <div className="mt-2 text-lg font-black text-foreground">{text.qrTitle}</div>
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">{text.qrCopy}</p>
                </div>
              </div>
            </div>

            <dl className="mt-12 grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
              {[
                [text.platform, text.platformValue],
                [text.stack, text.stackValue],
                [text.version, text.versionValue],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="journal-label">{label}</dt>
                  <dd className="mt-2 text-sm font-black text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex min-h-[570px] items-center justify-center overflow-hidden bg-[#e7ebe3] p-8 sm:p-12">
            <div className="absolute -left-16 top-12 h-48 w-48 rounded-full bg-[#d8b7f2]/70 blur-2xl" />
            <div className="absolute -right-14 bottom-8 h-56 w-56 rounded-full bg-[#dcf56d]/70 blur-2xl" />

            <div className="relative w-full max-w-[330px] rounded-[42px] border-[8px] border-[#20242a] bg-[#f6f6f4] p-4 shadow-[0_32px_80px_rgba(32,36,42,0.28)] sm:rotate-2">
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#20242a]" />
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#60656c]">
                  {text.interfaceLabel}
                </span>
                <MessageCircle className="h-4 w-4 text-[#20242a]" />
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full bg-[#e8eaed] px-4 py-3 text-xs font-bold text-[#777d85]">
                <Search className="h-4 w-4" />
                {text.search}
              </div>
              <div className="mt-4 pb-3">
                {tools.slice(0, 5).map((tool, index) => (
                  <div
                    key={tool.title.zh}
                    className="relative flex min-h-20 items-center justify-between rounded-[22px] border border-white/30 px-4 py-3 text-[#20242a]"
                    style={{ backgroundColor: tool.color, marginTop: index === 0 ? 0 : -8 }}
                  >
                    <div className="min-w-0">
                      <div className="text-lg font-black">{tool.title[language]}</div>
                      <div className="mt-1 truncate text-[11px] font-bold opacity-60">
                        {tool.description[language]}
                      </div>
                    </div>
                    <span className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#20242a] text-[10px] font-black text-white">
                      {text.go}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="journal-label">{text.featuresLabel}</div>
          <h2 className="journal-title mt-3 text-4xl text-foreground sm:text-5xl">
            {text.featuresTitle}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            {text.featuresLead}
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <article key={tool.title.zh} className="journal-card flex min-h-52 flex-col p-5">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-[#20242a]"
                  style={{ backgroundColor: tool.color }}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.4} />
                </div>
                <h3 className="mt-7 text-xl font-black text-foreground">{tool.title[language]}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {tool.description[language]}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="journal-card overflow-hidden">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-foreground p-7 text-background sm:p-10">
            <div className="text-xs font-black uppercase tracking-[0.16em] text-background/60">
              {text.approachLabel}
            </div>
            <h2 className="journal-title mt-4 text-4xl leading-tight sm:text-5xl">
              {text.approachTitle}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-background/70">
              {text.approachLead}
            </p>
            <div className="mt-10 flex items-center gap-3 border-t border-background/20 pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-black uppercase tracking-[0.14em] text-background/60">
                  {text.statusLabel}
                </div>
                <div className="mt-1 font-black">{text.status}</div>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-line sm:grid-cols-3">
            {[
              { icon: Check, title: text.localTitle, body: text.localCopy },
              { icon: Combine, title: text.fallbackTitle, body: text.fallbackCopy },
              { icon: ShieldCheck, title: text.privacyTitle, body: text.privacyCopy },
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-card p-6 sm:p-7">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-8 text-xl font-black text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
