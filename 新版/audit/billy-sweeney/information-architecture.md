# 站点结构

## 总体判断

- 类型：单页作品集，没有子路由或 Section ID。
- 技术：静态 HTML + CSS + jQuery 3.7.1 + jquery-easing；无 React、Next.js、Webflow 或 Squarespace 运行时证据。
- 稳定可见主 Section：7 个。DOM 另有 1 个只用于加载动画、随后隐藏的 Cover。
- 稳定顺序：Intro → Work → Values → Background → References → About → Contact。
- 全局元素：fixed Header、desktop fixed Nav、theme/grid Aside，以及可开启的调试网格。

## 00 Cover（加载态）

- 目标：加载阶段显示姓名与职业标识。
- 内容：“Billy Sweeney / —Designer”。
- 交互：1.75s 后自动移除，3.25s 后解除 loading 锁。
- 响应式：100vh；稳定状态 `display:none`。
- 后续组件：可做 `LoadingCover`，也可为了首屏可用性取消。

## 01 Header / Global navigation

- 目标：持续标识站点主人，并提供页内定位。
- 内容：左上角 Billy Sweeney 字标；desktop 左侧 7 项导航；移动端右上角菜单。
- 交互：字标 hover 逐字展开；导航使用 750ms `easeOutCubic` 滚动；当前 Section 随滚动高亮。
- 响应式：宽度 <=1020px 时桌面导航隐藏，切换为全屏菜单。
- 数据：导航标签与 Section 映射。固定布局：fixed 定位与响应式显隐。
- 后续组件：`SiteHeader`、`DesktopSectionNav`、`MobileSectionNav`。

## 02 Intro

- 目标：按不同职能视角重写 Billy 的价值主张。
- 信息层级：6 个 Audience 选项 → 当前大号文案 → 少量外链。
- 组件：横向选项、6 份互斥文案、边缘渐变提示。
- 交互：jQuery class 切换；没有 `button`、`role=tab` 或 `tabindex`，默认不支持键盘 Tab 操作。
- 响应式：选项不换行，在窄屏内横向滚动。
- 后续组件：`AudienceSwitcher`；文案适合数据化。

## 03 Work

- 目标：用视觉证据快速建立工作广度与品质感。
- 组件：一个 205.556% 长宽比的复合 JPEG，通过 SVG mask 形成不对称轮廓。
- 布局判断：不是 CSS Grid、Masonry、Flex 卡片集或 absolute tile layout。内部作品已压平成一张图。
- 数据：DOM 中 0 个可识别作品项、0 个链接、0 个 alt。
- 响应式：>=1000px 加载 2880x5920；<1000px 加载 1440x2960；容器始终 100vw。
- 后续组件：若保留现状用 `WorkCollage`；若要可维护项目内容，需要 Miki 的真实项目数据，不能从 JPEG 反推。

## 04 Values

- 目标：把作品证据转化为明确设计标准。
- 信息层级：4 行超大价值词 → 右侧小字解释。
- 布局：内部 2 列 Grid，标题跨满，描述占第 2 列。
- 后续组件：`ValuesSection`。

## 05 Background

- 目标：用经历广度、公司可信度和职责说明专业深度。
- 信息层级：背景序言 → 7 段经历；每段为 Logo、公司、职位、时间/地点、描述。
- 布局：2 列内部 Grid；每个经历项跨满，描述只占左列。
- 数据：7 条 experience objects；公司 Logo 是内联 SVG。
- 后续组件：`ExperienceList`、`ExperienceItem`。

## 06 References

- 目标：用跨职能同事证言提供第三方信任。
- 内容：6 条推荐语，姓名链接到 LinkedIn，附职位。
- 布局：desktop 两列；第 3 条起增加 40px 顶间距；窄屏后单列。
- 后续组件：`ReferencesGrid`、`ReferenceQuote`。

## 07 About

- 目标：补足人物叙事，并用奖项、媒体和制作信息完成可信度闭环。
- 组成：Biography 1 段、Accolades 16 条、Press 5 条、Colophon。
- 布局：desktop 2 列，Biography / Colophon 在第 2 列，奖项与 Press 并排；窄屏改为单列。
- 后续组件：`Biography`、`AccoladesList`、`PressList`、`Colophon`。

## 08 Contact / Footer

- 目标：说明当前状态，给出邮箱和 LinkedIn，以肖像完成人物记忆点。
- 布局：desktop 两列文字 + 1:1 肖像；<=760px 改为单列。
- 后续组件：`ContactSection`。

## 说服逻辑

1. Audience Intro 建立“与访问者相关”。
2. Work 用高密度视觉证据替代冗长自我介绍。
3. Values 解释工作标准。
4. Background 建立履历与复杂度信任。
5. References 转向第三方证言。
6. About / Awards / Press 补足长期成就。
7. Contact 完成转化。

让人继续下滑的主要手段是强烈空白与密集图像交替、持续 Section 导航、当前区块高亮，以及从作品证据逐步转入职业证据的叙事节奏。
