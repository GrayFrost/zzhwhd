# 网站主题色卡

网站主题由两个互相独立的选择组成：

- **色卡（palette）**：决定整套语义颜色，保存在浏览器的 `palette` 键中。
- **显示模式（mode）**：`light`、`dark` 或 `system`，由 `next-themes` 保存在 `theme` 键中。

所有色值以 [`config/themes.ts`](../config/themes.ts) 为唯一数据源。页面组件只使用语义 token，不直接引用色卡中的十六进制颜色。

## Token 与使用位置

| Token | CSS 变量 | 原始主题·浅色 | 原始主题·深色 | 应用位置 |
| --- | --- | --- | --- | --- |
| `background` | `--background` | `#f4f1e8` | `#202124` | 页面底色、网格背景、页头页脚 |
| `foreground` | `--foreground` | `#202124` | `#f4f1e8` | 标题、正文、主要图标、Logo |
| `card` | `--card` | `#fbfaf5` | `#292a2c` | 卡片、导航项、浮动控件 |
| `cardForeground` | `--card-foreground` | `#202124` | `#f4f1e8` | 卡片中的主要内容 |
| `muted` | `--muted` | `#e3e0d8` | `#37383a` | 次级底色、标签底板、占位区域 |
| `mutedForeground` | `--muted-foreground` | `#68665f` | `#bbb6aa` | 描述、日期、元信息、辅助标签 |
| `accent` | `--accent` | `#d7a92f` | `#d7a92f` | 选中态、按钮、焦点、悬停、地图标记 |
| `accentForeground` | `--accent-foreground` | `#202124` | `#202124` | 强调色底板上的文字和图标 |
| `line` | `--line` | `rgba(32,33,36,.14)` | `rgba(244,241,232,.16)` | 网格、边框和分隔线 |

阴影由 `foreground` 通过透明度混合得到，不是独立色卡颜色。

## 美式复古色卡

该色卡从参考图的深海蓝 `#285A71`、青柠黄 `#CFDA5A` 和奶油杏 `#FCE4C0` 延展而来。

| Token | 浅色 | 深色 |
| --- | --- | --- |
| `background` | `#f7f3e6` | `#183b4b` |
| `foreground` | `#285a71` | `#fce4c0` |
| `card` | `#fbf8ef` | `#285a71` |
| `cardForeground` | `#285a71` | `#fce4c0` |
| `muted` | `#e8cfa9` | `#214c5e` |
| `mutedForeground` | `#425e6a` | `#d8c7ab` |
| `accent` | `#cfda5a` | `#cfda5a` |
| `accentForeground` | `#183b4b` | `#183b4b` |
| `line` | `rgba(40,90,113,.18)` | `rgba(252,228,192,.18)` |

## 威尼斯蓝色卡

该色卡从参考图中的 Merino `#F5EEDD`、Rock Blue `#84B3CE` 和 Venice Blue `#16587B` 延展而来。浅色模式保留温和的奶油纸张感，深色模式以威尼斯蓝的深阶作为底色。

| Token | 浅色 | 深色 |
| --- | --- | --- |
| `background` | `#f5eedd` | `#0f3f59` |
| `foreground` | `#16587b` | `#f5eedd` |
| `card` | `#fbf8ef` | `#16587b` |
| `cardForeground` | `#16587b` | `#f5eedd` |
| `muted` | `#d8e5eb` | `#245f7e` |
| `mutedForeground` | `#3f6377` | `#c7d8de` |
| `accent` | `#84b3ce` | `#84b3ce` |
| `accentForeground` | `#103f59` | `#0f3f59` |
| `line` | `rgba(22,88,123,.18)` | `rgba(245,238,221,.18)` |

## 组件中的使用方式

Tailwind 已将 token 映射为 `bg-background`、`text-foreground`、`bg-card`、`text-muted-foreground`、`bg-accent`、`text-accent`、`border-line` 等类名。栏目图标、文章链接和交互强调统一使用 `accent`。普通 CSS 使用对应的 `var(--token-name)`。

以下颜色不属于网站色卡，不随主题变化：

- 图片、游戏图标和内容素材中的颜色；
- GitHub、Gmail、掘金等第三方品牌 Logo 的官方色；
- Leaflet 底图瓦片自身的配色；
- 文章代码块的语法高亮色。

## 新增色卡

1. 在 `themePalettes` 中新增一个对象，使用唯一的 `id`，并填写 `labelKey`、`preview`、`light` 和 `dark`。
2. 浅色和深色必须完整提供 `ThemeTokens` 的所有字段；不要在组件中为新色卡添加条件判断。
3. 在 `messages/ui-zh.json` 与 `messages/ui-en.json` 的 `theme` 下增加 `labelKey` 对应文案。
4. 检查正文与弱化文字的对比度，并在桌面和移动端分别验证浅色、深色、跟随系统与刷新持久化。

服务端会从配置自动生成 `[data-palette]` CSS，主题面板也会自动读取配置并显示新的色卡选项。
