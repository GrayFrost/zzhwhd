## 功能特性

- 🌍 **多语言支持**: 支持中英文切换（博客页面除外）
- 🎨 **深色模式**: 自动适应系统主题
- 📱 **响应式设计**: 完美适配各种设备
- ⚡ **现代化技术栈**: Next.js 16 + TypeScript + Tailwind CSS

## 国际化 (i18n)

项目使用自定义的客户端国际化解决方案，支持中英文切换：

### 支持的语言
- **中文 (zh)**: 默认语言
- **英文 (en)**: 通过语言切换按钮切换

### 支持的页面
- ✅ 首页 (`/`)
- ✅ 关于页面 (`/about`)
- ❌ 博客页面 (`/blog/*`) - 保持中文
- ❌ 生活页面 (`/life`) - 地图展示
- ❌ 项目页面 (`/project`) - 项目展示
- ❌ 相册页面 (`/photo-gallery`) - 照片画廊

### 语言切换
在首页底部可以看到语言切换按钮，可以在中文和英文之间切换。语言偏好会保存到 localStorage 中。

### 注意事项
- 博客页面、地图页面、项目展示页、相册页面保持原有功能和中文内容
- 语言切换是客户端行为，不会改变 URL 路径
- 只有首页和关于页面的文本内容支持国际化

## TODO

- [ ] 各个页面的metadata
- [ ] 归档分页

pm2 delete 进程名

pm2 start npm --name "进程名" -- run start

这里的run start就是npm run start，前提是我先用npm run build生成了打包后的目录

nginx配置，一些关于nextjs的配置

next-view-transitions

docker

```
=> ERROR [internal] load metadata for docker.io/library/node:20-alpin  30.2s
------
 > [internal] load metadata for docker.io/library/node:20-alpine:
------
Dockerfile:3
--------------------
   1 |     # syntax=docker.io/docker/dockerfile:1
   2 |     
   3 | >>> FROM node:20-alpine AS base
   4 |     
   5 |     # Install dependencies only when needed
--------------------
ERROR: failed to solve: DeadlineExceeded: DeadlineExceeded: DeadlineExceeded: DeadlineExceeded: failed to resolve source metadata for docker.io/library/node:20-alpine: failed to do request: Head "https://registry-1.docker.io/v2/library/node/manifests/20-alpine": dial tcp 108.160.166.148:443: i/o timeout
```

docker build -t nextjs .
docker run -p 3000:3000 nextjs

第一个端口是主机端口（实际访问的页面端口），第二个是容器端口（docker 跑起来的服务的端口）

docker compose up -d
docker compose down

nginx.conf 和default.conf区别导致的问题

Docker无法拉取镜像问题 阿里云的docker镜像地址不是最新的问题 /etc/docker/daemon.json

~/.ssh/authorized_keys 公私钥问题

- [ ] layout的media query宽度和tailwind保持统一