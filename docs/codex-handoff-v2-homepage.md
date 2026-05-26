# /v2 Homepage Handoff

## 当前目标

当前工作集中在 `Next.js 14 App Router` 项目的 `/v2` 首页预览页。

本轮已经完成：

- 新建 `/v2` 路由预览页，不替换正式首页。
- 搭建完整 9 个 section 的首页结构：
  - `01 Intro`
  - `02 Problems`
  - `03 Cases`
  - `04 Demo`
  - `05 Framework`
  - `06 More Work`
  - `07 Method`
  - `08 About`
  - `09 Contact`
- 左侧 fixed rail 已接入锚点跳转和滚动 active 状态。
- `/v2` 顶部导航已降级为全站级入口，不再和 section rail 重复。
- `/v2` 页面已禁用全局大圆形自定义 Cursor，恢复系统默认鼠标。
- Hero 已升级为双栏结构：
  - 左侧为大标题、说明、CTA、能力标签
  - 右侧为高保真 `Product Validation Workflow` 信息图

## 当前实现状态

### 已完成的页面结构

- `/v2` 作为完整桌面优先作品集首页存在。
- 左侧 rail 独立于顶部导航存在。
- 所有 section 均已有真实内容，不再是空占位。
- Hero 信息图已包含：
  - `WORKFLOW / PRODUCT VALIDATION`
  - `AI BOUNDARY / ASSISTED CREATION`
  - 5 个横向流程卡
  - 连接箭头
  - AI 边界虚线框
  - 底部阶段 timeline

### 已做的兼容与构建修正

- `components/Cursor.tsx`
  - 对 `/v2` 路径返回 `null`，避免大圆形鼠标干扰。
- `tsconfig.json`
  - `exclude` 增加 `node_modules*`，避免本地备份目录影响构建。

## 已修改文件

- `app/v2/page.tsx`
- `components/home-v2/HomeV2.tsx`
- `components/home-v2/HeroV2.tsx`
- `components/home-v2/ProblemsSection.tsx`
- `components/home-v2/CoreCasesSection.tsx`
- `components/home-v2/DemoSection.tsx`
- `components/home-v2/FrameworkSection.tsx`
- `components/home-v2/MoreWorkSection.tsx`
- `components/home-v2/MethodSection.tsx`
- `components/home-v2/AboutSection.tsx`
- `components/home-v2/ContactCTA.tsx`
- `components/Cursor.tsx`
- `tsconfig.json`

## 当前验证状态

- `git` 仓库已存在。
- `npm run build` 已通过。
- `/v2` 页面本地可打开。
- 本地重新启动 dev server 后，`/v2` 的 HTML 和 Next 静态资源都已返回 `200`。

## 下一步建议

下一轮建议优先做这几件事：

1. 在真实桌面视口下继续目测 `/v2` Hero。
   - 重点看 `1440px` 和 `1920px` 下 Hero 左右比例是否还需微调。
2. 检查 `HeroV2` 右侧 workflow 信息图细节是否还要继续精修。
   - 重点看卡片内部微图形、文字密度、timeline 对齐。
3. 做一轮移动端与平板端检查。
   - 重点看 Hero diagram 的横向滚动体验和 CTA 可见性。
4. 再做一轮全页视觉统一。
   - 重点看 section 间距、标题层级、卡片描边和 hover 节奏。

## 注意事项

- 不要修改正式首页 `app/page.tsx`。
- 不要修改 `app/layout.tsx` 的整体结构。
- 不要修改 `public` 下独立项目页内容。
- 当前工作树里还有这些不建议进本次 commit 的内容：
  - `.DS_Store`
  - `node_modules 23.09.56`
- 本次存档 commit 只应包含 `/v2` 相关文件、`Cursor` 路由适配、`tsconfig` 修正和本 handoff 文档。
