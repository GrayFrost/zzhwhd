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