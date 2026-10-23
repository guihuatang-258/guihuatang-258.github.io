# 个人介绍网站 · GitHub Pages Starter

这是一个尚未填写个人内容的作品集网站骨架，使用纯 HTML、CSS 和 JavaScript，无需 npm、Node.js、数据库或后端服务器。

## 结构

```text
.
├── index.html          # 页面模块与占位文本
├── assets/
│   ├── style.css       # 全站样式、响应式布局、明暗主题
│   ├── script.js       # 导航、主题切换、年份
│   └── favicon.svg     # 图标
├── .nojekyll           # 允许 GitHub Pages 原样发布静态文件
└── README.md
```

## 发布到 GitHub Pages

1. 在 GitHub 新建一个 **Public** 仓库，名称必须是 `guihuatang-258.github.io`，建议勾选 Initialize with README。
2. 在仓库根目录上传 `index.html`、`assets` 目录、`.nojekyll` 和这个 `README.md`（如已存在 README，请直接覆盖或略过）。**不要只上传 ZIP 文件。**
3. 打开仓库 `Settings → Pages`，在 `Build and deployment` 中把 `Source` 设为 `Deploy from a branch`，`Branch` 选 `main`，目录选 `/(root)`，保存。
4. 等待 GitHub Pages 完成发布（通常几分钟），访问 `https://guihuatang-258.github.io/`。

## 后续如何填内容

- **名字 / 定位 / 关于我**：编辑 `index.html` 的 `hero` 与 `about` 部分。
- **项目**：复制或修改 `project-card` 区块，可以更换封面样式或插入自己的图片。
- **技术栈**：编辑 `skills` 章节中的各组标签。
- **经历**：修改 `timeline-row`，可以继续增加行。
- **联系**：修改 `contact` 区块中的真实链接。
- **配色 / 字体**：修改 `assets/style.css` 顶部的 CSS 变量。

## 设计与技术说明

- 响应式布局、固定导航、移动端导航、平滑锚点滚动。
- 一键切换浅色 / 深色，支持系统偏好和本地保存。
- 无构建环节；直接打开 `index.html` 即可本地预览。
- 页面没有表单或用户数据收集功能。
- 字体在在线状态下从 Google Fonts 加载，离线时自动回退系统字体；如更重视国内访问速度，可移除 CSS 第一行 `@import`。

> 温馨提示：GitHub Pages 为公开可访问的网站，不要在静态文件内保存 API Key、口令或任何私密信息。