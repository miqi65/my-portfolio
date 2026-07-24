export type AudienceKey =
  | "anyone"
  | "recruiters"
  | "design-directors"
  | "product-designers"
  | "product-managers"
  | "engineers";

export const audiences: Array<{ key: AudienceKey; label: string; copy: string }> = [
  {
    key: "anyone",
    label: "For anyone",
    copy: "你好，我是 Miki。是一名在意产品是否清晰、好用，并且真正能够落地的设计师。",
  },
  {
    key: "recruiters",
    label: "Recruiters",
    copy: "我是一名产品设计师，长期专注复杂 B 端系统、工业 HMI、AI 工作流与设计系统。",
  },
  {
    key: "design-directors",
    label: "Design Directors",
    copy: "我重视设计质量，也重视团队如何做出稳定判断。愿意把经验沉淀为规则，并帮助协作更顺畅。",
  },
  {
    key: "product-designers",
    label: "Product Designers",
    copy: "我喜欢从复杂约束中建立秩序，把模糊问题转化为清晰流程、可演示原型和可复用的设计规则。",
  },
  {
    key: "product-managers",
    label: "Product Managers",
    copy: "我会从目标、角色、流程和风险开始，与产品和研发共同缩小不确定性，再推进到可验证方案。",
  },
  {
    key: "engineers",
    label: "Engineers",
    copy: "我理解前端实现和工程约束，愿意把交互边界、状态和交付规则说明白，减少开发阶段的来回返工。",
  },
];

export const projects = [
  {
    client: "珠海市万门科技有限公司",
    title: "工业 AI 视觉质检系统",
    category: "工业 AI 表面质检 HMI / 工业软件系统",
    role: "产品设计",
    summary: "把偏工程师工具的检测系统，重构为能支撑工厂多角色协作的工业 AI 质检 HMI 标准产品。",
    image: "/images/work/industrial-ai-detection/00-card.webp",
    tone: "graphite",
  },
  {
    client: "珠海达明科技，长园集团",
    title: "PCBA 插件机控制系统",
    category: "B2B 控制系统 / 智能制造",
    role: "产品设计",
    summary: "重构关键控制流程和系统体验，让设备状态、生产任务与风险操作更容易理解和管理。",
    image: "/images/work/pcba/00-card.webp",
    tone: "slate",
  },
  {
    client: "CYG",
    title: "WMS 智能仓储管理系统",
    category: "仓储管理系统 / Web 与 RF 终端",
    role: "产品设计",
    summary: "将 Web 管理端与 RF 终端的高频结构、流程与权限边界，收敛为标准化、可扩展的交付框架。",
    image: "/images/work/wms/00-card.webp",
    tone: "blue",
  },
  {
    client: "国家能源集团",
    title: "国家能源集团：载体轨迹定位系统",
    category: "GIS 定位追踪 / 移动端 UX 设计",
    role: "主设计师",
    summary: "重塑移动端载体跟踪与预警机制，覆盖现场巡检、后台调度和管理层三类核心用户角色。",
    image: "/images/work/gps-2/00-card.webp",
    tone: "graphite",
  },
  {
    client: "珠海小源科技",
    title: "5G 消息 Chatbot 交互规范体系",
    category: "5G 通信 / 交互规范体系",
    role: "交互设计负责人",
    summary: "针对受限入口和碎片化设备渲染，建立可跨项目复用的最小公约数适配规范。",
    image: "/images/work/5g-chatbot/00-card.webp",
    tone: "slate",
  },
  {
    client: "友讯达",
    title: "友讯达数据大屏",
    category: "智能工厂数据可视化 / 决策大屏",
    role: "主设计师",
    summary: "将产能、设备、质量与异常状态转化为集中化的大屏监控体验，为管理决策提供清晰依据。",
    image: "/images/work/factory-dashboard/00-card.webp",
    tone: "blue",
  },
];

export const explorations = [
  {
    title: "生成式形态实验",
    description: "项目说明、使用工具与实验过程待补充。",
    image: "/images/explorations/generative-form.webp",
    className: "exploration-featured",
  },
  {
    title: "AI 原型流程实验",
    description: "项目说明、使用工具与实验过程待补充。",
    image: "/images/explorations/prototype-collage.webp",
    className: "exploration-wide",
  },
  {
    title: "材质与视觉研究",
    description: "项目说明、使用工具与实验过程待补充。",
    image: "/images/explorations/material-study.webp",
    className: "exploration-small",
  },
  {
    title: "AI 工具探索",
    description: "项目说明、使用工具与实验过程待补充。",
    image: "/images/explorations/tool-study.webp",
    className: "exploration-small",
  },
];

export const experience = [
  {
    company: "珠海市万门科技有限公司",
    role: "产品设计",
    year: "2022.07 - 至今",
    area: "工业 AI / HMI / AI 工作流",
    description: "负责功能梳理、信息架构、UI/UX、状态与权限规则，并与研发协作落地工业 AI 视觉质检等产品。",
  },
  {
    company: "珠海小源科技",
    role: "用户体验经理 / 产品设计师",
    year: "2021.06 - 2022.06",
    area: "5G 消息 / 体验规范 / 团队协作",
    description: "主导核心产品体验、规范、评审与团队能力建设；管理 2 名设计师，并面向产品部门组织用户体验培训。",
  },
  {
    company: "珠海达明科技，长园集团",
    role: "UI/UX 设计师",
    year: "2019.03 - 2020.10",
    area: "PCBA / WMS / GPS / 工业系统",
    description: "参与多类工业系统，覆盖现场访谈、流程重构、UI/UX、Design System、可用性测试与研发落地。",
  },
  {
    company: "罗西尼",
    role: "产品 / 视觉设计师",
    year: "2017.09 - 2018.05",
    area: "电商 / 品牌视觉",
    description: "负责电商活动页面、Banner、详情页与品牌视觉等视觉运营工作。",
  },
  {
    company: "银泰贸易",
    role: "UI / 视觉设计师",
    year: "2015.03 - 2017.06",
    area: "冷库监控 / 智能硬件",
    description: "负责冷库监控 Web 与移动端，以及智能硬件配套界面的 UI/UX 设计。",
  },
  {
    company: "广东点控科技",
    role: "UI 设计师",
    year: "2014.04 - 2015.02",
    area: "OA / 门店管理",
    description: "负责 OA 办公系统与儿童乐园门店管理系统的 UI 设计。",
  },
];

export const capabilities = [
  { title: "工业 AI HMI", description: "AI 辅助检测、异常状态、角色接管与高风险操作设计。" },
  { title: "复杂 B 端系统", description: "信息架构、跨角色任务流、权限模型与仪表盘体验。" },
  { title: "Design System", description: "组件、设计令牌、可复用模式、交付规范与设计验收。" },
  { title: "AI 辅助工作流", description: "从问题整理、原型变体到规则检查的人机协作流程。" },
  { title: "产品原型", description: "将模糊需求转化为可演示、可验证的关键路径。" },
  { title: "研究与结构", description: "现场访谈、功能盘点、信息架构与流程重构。" },
  { title: "状态与风险", description: "异常反馈、权限边界、操作阻力与人工接管规则。" },
  { title: "前端协作", description: "实现约束、状态说明、交付检查与开发前风险识别。" },
];

export const methods = [
  { title: "先对齐目标", description: "先确认业务目标、真实使用者、场景和实现约束。" },
  { title: "再建立结构", description: "把角色、任务、信息和风险整理成可讨论的系统。" },
  { title: "用原型缩小不确定性", description: "先验证关键路径，再投入完整视觉与开发。" },
  { title: "把判断变成规则", description: "沉淀状态、权限、组件与交付规则，支持团队复用。" },
  { title: "保留人的控制权", description: "AI 与自动化场景中明确置信度、复核和接管边界。" },
  { title: "在落地前验收", description: "结合实现约束检查视觉、交互、响应式和风险状态。" },
];

export const themes = [
  { bg: "#f7f7f4", ink: "#11110f", muted: "#67675f", card: "#20211f", cardInk: "#f6f6f2", accent: "#11110f" },
  { bg: "#f4efe6", ink: "#1f1b16", muted: "#736b61", card: "#28231e", cardInk: "#f7f0e6", accent: "#aa503e" },
  { bg: "#e8f0ea", ink: "#122018", muted: "#5d6d62", card: "#183126", cardInk: "#edf5ef", accent: "#26724b" },
  { bg: "#e9eef6", ink: "#111927", muted: "#5f6b7e", card: "#18263c", cardInk: "#eef4ff", accent: "#365fb7" },
  { bg: "#f3ebf2", ink: "#241522", muted: "#766575", card: "#372134", cardInk: "#fff2fc", accent: "#9a467d" },
  { bg: "#f4ebe8", ink: "#251714", muted: "#796760", card: "#452a24", cardInk: "#fff5f1", accent: "#c34e32" },
  { bg: "#f3f0da", ink: "#211f11", muted: "#6e694d", card: "#36321a", cardInk: "#fffce5", accent: "#8b7c16" },
  { bg: "#e4f2f1", ink: "#102322", muted: "#587170", card: "#173837", cardInk: "#eefffd", accent: "#1d7d78" },
  { bg: "#f0e9db", ink: "#251e13", muted: "#6e6554", card: "#3c3222", cardInk: "#fff7e8", accent: "#9b6b28" },
  { bg: "#f4e7ec", ink: "#28151d", muted: "#7b606a", card: "#452432", cardInk: "#fff3f7", accent: "#ba3f6a" },
  { bg: "#e8ecdf", ink: "#182010", muted: "#606a57", card: "#2c361f", cardInk: "#f5faee", accent: "#657f2e" },
  { bg: "#e5edf0", ink: "#102028", muted: "#5b6c74", card: "#1c333d", cardInk: "#effbff", accent: "#39788e" },
  { bg: "#f0e7df", ink: "#241a14", muted: "#75665d", card: "#392821", cardInk: "#fff5ef", accent: "#a75b38" },
  { bg: "#efeee8", ink: "#191918", muted: "#6b6a65", card: "#2a2a28", cardInk: "#f8f8f4", accent: "#6e6e69" },
  { bg: "#161715", ink: "#f1f2ec", muted: "#a5a79f", card: "#272925", cardInk: "#f5f6f0", accent: "#c7e769" },
  { bg: "#1d2130", ink: "#f0f2fa", muted: "#abb1c5", card: "#30374c", cardInk: "#f6f7ff", accent: "#8aabff" },
  { bg: "#281d1d", ink: "#faefea", muted: "#c2aba5", card: "#402c2b", cardInk: "#fff4ef", accent: "#ff8066" },
];
