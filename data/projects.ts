export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export interface ProjectMetaItem {
  label: LocalizedText;
  value: LocalizedText;
}

export interface ProjectChallenge {
  number: string;
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProjectPrinciple {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProjectRule {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProjectSolution {
  label: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  value: LocalizedText;
  image: string;
  layout: "full" | "image-left" | "image-right";
}

export interface ProjectSectionItem {
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  image?: string;
  layout?: "full" | "image-left" | "image-right" | "text-only";
}

export interface Project {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  cover: string;
  heroImage: string;
  meta: ProjectMetaItem[];
  overview?: {
    label: LocalizedText;
    headline: LocalizedText;
    body: LocalizedText;
  };
  challenges?: {
    label: LocalizedText;
    headline: LocalizedText;
    items: ProjectChallenge[];
  };
  productGoal?: {
    label: LocalizedText;
    headline: LocalizedText;
    body?: LocalizedText;
    image: string;
  };
  principles?: {
    label: LocalizedText;
    items: ProjectPrinciple[];
  };
  rules?: {
    label: LocalizedText;
    image: string;
    items: ProjectRule[];
  };
  solutions?: {
    label: LocalizedText;
    items: ProjectSolution[];
  };
  projectValue?: {
    label: LocalizedText;
    headline: LocalizedText;
    items: string[];
  };
  reflection?: {
    label: LocalizedText;
    body: LocalizedText;
  };
  confidentiality?: {
    label: LocalizedText;
    body: LocalizedText;
  };
}

const PLACEHOLDER_IMG = "/images/p1-cover.png";
const PCBA_HERO_IMG = "/images/pcba-home/pcba-hero.png";
const WMS_HERO_IMG = "/Project_P2/source/src/imports/Wms/a1925cfcd1b376841168c4a647d62506c5e54411.png";

const PROJECT_PLACEHOLDER_OVERRIDES: Partial<Record<string, Partial<Project>>> = {
  wms: {
    title: {
      zh: "WMS 智能仓储管理系统",
      en: "WMS Warehouse Management System"
    },
    category: {
      zh: "仓储管理系统 / Web 与 RF 终端",
      en: "Warehouse Management System / Web & RF Terminal"
    },
    summary: {
      zh: "将 Web 管理端与 RF 终端的高频结构、流程与权限边界，收敛为一套标准化、可扩展的仓储系统交付框架。",
      en: "A standardized, scalable delivery framework for WMS web management and RF terminal workflows."
    },
    cover: WMS_HERO_IMG,
    heroImage: WMS_HERO_IMG,
    meta: [
      { label: { en: "DELIVERABLES", zh: "交付成果" }, value: { en: "WMS Web & RF terminal", zh: "WMS Web 管理端与 RF 终端" } },
      { label: { en: "CLIENT", zh: "客户" }, value: { en: "CYG", zh: "CYG" } },
      { label: { en: "ROLE", zh: "我的角色" }, value: { en: "Product Designer", zh: "产品设计" } },
      { label: { en: "SERVICES", zh: "服务范围" }, value: { en: "UI&UX Design", zh: "UI&UX 设计" } }
    ],
    overview: {
      label: { en: "OVERVIEW", zh: "概览" },
      headline: {
        en: "Standardizing multi-warehouse workflows across web management and RF operations.",
        zh: "把多客户、多仓库、多作业流程收敛为可复用的仓储系统框架。"
      },
      body: {
        en: "The new WMS case is served as the dedicated static project page.",
        zh: "新的 WMS 案例已接入为独立静态项目页。"
      }
    }
  }
};

export const projects: Project[] = [
    {
      slug: "ai-hmi",
      title: {
        zh: "工业 AI 视觉质检系统",
        en: "Industrial AI Vision Inspection System"
      },
      category: {
        zh: "工业 AI 表面质检 HMI / 工业软件系统",
        en: "Industrial AI Surface Inspection HMI / Industrial Software System"
      },
      summary: {
        zh: "把偏工程师工具的检测系统，重构为能支撑工厂多角色协作的工业 AI 质检 HMI 标准产品。",
        en: "Transforming an engineering-oriented inspection system into an industrial AI inspection HMI product for multi-role factory collaboration."
      },
      cover: "/images/p1-cover.png",
      heroImage: "/images/p1/p1-hero-industrial-ai-hmi.png",
      // 严格精简为 4 项 Meta
      meta: [
        {
          label: { zh: "交付成果", en: "DELIVERABLES" },
          value: { zh: "铝材挤压 AI 检测系统", en: "AI Inspection System for Aluminum Extrusion" }
        },
        {
          label: { zh: "客户", en: "CLIENT" },
          value: { zh: "某硬件公司", en: "Confidential Industrial Client" }
        },
        {
          label: { zh: "我的角色", en: "ROLE" },
          value: { zh: "产品设计", en: "Product Designer" }
        },
        {
          label: { zh: "服务范围", en: "SERVICES" },
          value: { zh: "UI&UX 设计", en: "UI&UX Design" }
        }
      ],
      // ... 保留后续的 overview, challenges, productGoal, principles, rules, solutions, projectValue, reflection, confidentiality 数据 ...
  // ---------------------------------------------------------------------------
  // 为了防止你找不到，这里我把后续必填项简要补全，确保复制不报错：
      overview: {
        label: { zh: "项目概述", en: "OVERVIEW" },
        headline: { zh: "从人工目视检测，到可监控、可分析、可追溯的数字化质检流程", en: "From manual visual inspection to a monitorable, analyzable, and traceable digital quality workflow" },
        body: {
          zh: "本项目面向铝型材挤压产线的表面质检场景，将 2D + 3D 双模态检测、16 路工业相机画面、11 类缺陷识别、统计分析、日志追溯与权限管理整合为一套工业 AI 视觉质检 HMI，帮助工厂从人工目视检测转向可监控、可分析、可追溯的数字化质检流程。系统底层由多相机协同与深度学习算法识别铝型材表面缺陷，前端 HMI 需要将算法结果转译为现场用户可理解、可判断、可接管的操作界面。",
          en: "This project focuses on surface inspection for aluminum extrusion production lines, integrating 2D + 3D dual-mode inspection, 16 industrial camera feeds, 11 defect types, analytics, log tracing, and permission management into an industrial AI visual inspection HMI. The interface translates algorithmic outputs into information that on-site users can understand, judge, and take over when needed."
        }
      },
      challenges: {
        label: { zh: "核心挑战", en: "THE CHALLENGES" },
        headline: { zh: "这个系统为什么难设计", en: "What made this system hard to design" },
        items: [
          { number: "#1", title: { zh: "高并发信息判断", en: "High-density real-time decision-making" }, body: { zh: "双模态检测与 16 路相机高频输出画面、结果与状态，直接堆叠会显著推高操作员的判断成本。", en: "Dual-mode inspection and 16 high-frequency camera outputs create dense visual, result, and status information. Directly stacking them would increase operators’ decision-making cost." } },
          { number: "#2", title: { zh: "一套系统，四种角色", en: "One system, four roles" }, body: { zh: "工程师调参、操作员盯预警、维护工程师处理急停、质检人员查数据，优先级和风险各不相同，界面不能按功能简单堆砌。", en: "Engineers, operators, maintenance staff, and quality inspectors each require different priorities and risk controls. The interface could not simply stack functions by module." } },
          { number: "#3", title: { zh: "算法与人工的边界", en: "The boundary between AI and human takeover" }, body: { zh: "AI 能输出异常与预警，却替代不了现场确认与接管，界面必须划清算法、系统、人工三者的责任范围。", en: "AI can output exceptions and warnings, but it cannot replace on-site confirmation and takeover. The interface needed to clarify the responsibilities of the algorithm, system, and human operator." } },
          { number: "#4", title: { zh: "高风险操作的防误触", en: "Preventing accidental high-risk actions" }, body: { zh: "清除工位信息、系统重置等能力源于工厂既有操作习惯，需要在保留入口的同时降低误触风险。", en: "Actions such as clearing workstation data and system reset came from existing factory habits. The design needed to preserve access while reducing accidental operation risk." } }
        ]
      },
      productGoal: {
        label: { zh: "产品目标", en: "PRODUCT GOAL" },
        headline: { zh: "不是单纯优化界面，而是把检测系统重构为支撑多角色协作的 HMI 标准产品。", en: "More than interface optimization, the goal was to turn the inspection tool into an HMI product for multi-role factory collaboration." },
        body: { zh: "让现场人员快速识别异常、理解结果、判断优先级，并在必要时安全接管。", en: "The system needed to help on-site users identify exceptions, understand results, judge priority, and safely take over when needed." },
        image: "/images/p1/p1-system-complexity-map.webp"
      },
      principles: {
        label: { zh: "设计原则", en: "DESIGN PRINCIPLES" },
        items: [
          { title: { zh: "关键状态优先", en: "Prioritize critical states" }, body: { zh: "主屏优先呈现实时画面、缺陷结果、设备状态与日志，保证高压场景下的快速定位。", en: "The main screen prioritizes live feeds, defect results, device status, and logs to support fast positioning under pressure." } },
          { title: { zh: "遵循现场物理直觉", en: "Follow physical production-line intuition" }, body: { zh: "监控信息按产线上下左右方位分组，降低相机画面与实际点位之间的认知转换成本。", en: "Monitoring information is grouped by physical production-line orientation, reducing the cognitive cost of mapping camera views to real positions." } },
          { title: { zh: "高风险操作分层管理", en: "Layer high-risk operations" }, body: { zh: "数据擦除、系统重置类操作不作为普通按钮直接暴露，以置灰与多层验证做风险隔离。", en: "Data erasure and system reset are not exposed as ordinary buttons; disabled states and layered verification isolate risk." } },
          { title: { zh: "角色边界清晰", en: "Clarify role boundaries" }, body: { zh: "以权限矩阵定义各角色的操作范围，杜绝跨工序、跨角色的越权干扰。", en: "A permission matrix defines each role’s operation range to prevent cross-role and cross-process interference." } },
          { title: { zh: "在工程可实现范围内做最优解", en: "Optimize within real engineering constraints" }, body: { zh: "设计服从客户决策、开发成本与渲染性能等真实约束，优先选择可解释、可持续维护的方案。", en: "The design respects client decisions, development cost, and rendering performance, prioritizing explainable and maintainable solutions." } }
        ]
      },
      rules: {
        label: { zh: "设计系统与约束", en: "DESIGN RULES & CONSTRAINTS" },
        image: "/images/p1/p1-ui-states-permission.webp",
        items: [
          { title: { zh: "状态规则", en: "Status rules" }, body: { zh: "相机卡片在空闲、检测中、离线、预警等状态下的视觉层级。", en: "Visual hierarchy for camera cards across idle, detecting, offline, and warning states." } },
          { title: { zh: "检测结果规则", en: "Detection result rules" }, body: { zh: "缺陷边框 BBox 在高光、叠层、复杂画面下的显示权重。", en: "Display weight for BBox overlays under highlights, layered content, and complex visuals." } },
          { title: { zh: "危险操作规则", en: "High-risk operation rules" }, body: { zh: "数据擦除、重置类操作的置灰、多层验证与反馈机制。", en: "Disabled states, layered verification, and feedback mechanisms for data erasure and reset operations." } },
          { title: { zh: "角色权限规则", en: "Role permission rules" }, body: { zh: "4 类工种的操作流与可见范围边界。", en: "Operation flows and visibility boundaries for four role types." } }
        ]
      },
      solutions: {
        label: { zh: "核心设计方案", en: "KEY SOLUTIONS" },
        items: [
          { label: { zh: "方案 01", en: "SOLUTION 01" }, title: { zh: "监控信息重组", en: "Monitoring information restructuring" }, body: { zh: "16 路相机画面、统计数据、缺陷分布与设备日志统一组织进监控首页，按产线物理方位分组。曾对比两版方案：独立平铺 16 路画面结合 3D 截面图的版本更具沉浸感，但渲染成本高，也不符合操作员对产线方位的直觉；最终采用更贴合现场认知、且渲染压力可控的分组方案。", en: "The 16 camera feeds, statistics, defect distribution, and device logs were reorganized into one monitoring homepage, grouped by physical production-line orientation. A more immersive version using 16 independent feeds with a 3D cross-section was explored, but it increased rendering cost and conflicted with operators’ spatial intuition. The final solution prioritized on-site cognition and rendering feasibility." }, value: { zh: "操作员在同一界面完成实时观察、异常定位与状态判断，减少页面切换成本。", en: "Operators can observe live status, locate exceptions, and judge system state from one interface, reducing page switching cost." }, image: "/images/p1/project-snapshot.png", layout: "full" },
          { label: { zh: "方案 02", en: "SOLUTION 02" }, title: { zh: "人机协作转译", en: "Translating AI output into operator actions" }, body: { zh: "把算法输出的缺陷特征、异常参数与预警状态，转译为 HMI 中可读的缺陷框、优先级排序与安全接管入口。", en: "Defect features, abnormal parameters, and warning states from the algorithm were translated into readable defect boxes, priority ordering, and safe takeover entry points in the HMI." }, value: { zh: "AI 判断不再是后台黑箱结果，而成为现场人员能理解、能处理的操作信息。", en: "AI decisions are no longer hidden backend outputs, but operational information that on-site users can understand and handle." }, image: "/images/p1/p1-human-ai-boundary.webp", layout: "image-right" },
          { label: { zh: "方案 03", en: "SOLUTION 03" }, title: { zh: "分级容错机制", en: "Layered fault-tolerance mechanism" }, body: { zh: "规划轻度在线调参、中度缺陷开关手动接管、极端物理急停联动伺服电机回收的三级人工接管路径，为算法不稳定期保留干预空间；受工期限制，中度接管未能落地。", en: "A three-level manual takeover path was planned: light online parameter tuning, medium-level manual takeover for defect switches, and extreme physical emergency stop linked to servo motor recovery. This preserved intervention space during algorithm instability. Due to schedule constraints, the medium-level takeover was not implemented." }, value: { zh: "避免系统过度依赖算法自动判断，为黑盒模型的震荡期预留安全冗余。", en: "The mechanism avoids over-reliance on automatic algorithmic decisions and preserves safety redundancy during model instability." }, image: "/images/p1/p1-exception-takeover-ladder.webp", layout: "image-left" },
          { label: { zh: "方案 04", en: "SOLUTION 04" }, title: { zh: "权限矩阵替代按钮级管控", en: "Permission matrix instead of button-level control" }, body: { zh: "面向通用化产品定位，放弃维护成本高、ROI 有限的按钮级管控，改用菜单级权限隔离四类角色的操作范围。", en: "For a more scalable product direction, button-level control with high maintenance cost and limited ROI was replaced by menu-level permission isolation for four role types." }, value: { zh: "控制越权风险的同时降低长期维护复杂度，权限体系更适合规模化产品化。", en: "This controlled unauthorized operation risk while reducing long-term maintenance complexity, making the permission system more suitable for product scaling." }, image: "/images/p1/p1-ui-states-permission.webp", layout: "full" }
        ]
      },
      projectValue: {
        label: { zh: "项目价值", en: "PROJECT VALUE" },
        headline: { zh: "将高密度检测信息、多角色任务与 AI 判断边界，整合为一套可落地的工业 HMI。", en: "Integrating dense inspection information, multi-role tasks, and AI decision boundaries into an implementable industrial HMI." },
        items: [
          "将 16 路工业相机、11 类缺陷结果与多角色任务整合进统一 HMI，完成 11 个核心模块从 0 到 1 的交付。",
          "以物理分组与状态层级，降低高密度检测信息的判断成本。",
          "建立算法、系统、人工三层职责边界，让 AI 判断转化为现场可理解、可操作、可追溯的信息。",
          "以状态规则与权限矩阵，降低误操作与越权风险。",
          "全部界面、交互与权限资产已通过开发团队与项目负责人审核确认并落地。"
        ]
      },
      reflection: {
        label: { zh: "设计复盘", en: "REFLECTION" },
        body: {
          zh: "若重新推进这个项目，我会争取赴产线观摩。项目过程中，工人操作习惯主要来自工程师的口头转述，存在认知差异；只有到现场，才能分辨哪些操作是真实高频需求，哪些只是既有系统的路径依赖。同时会更坚定推动中度人工容错机制落地。早期算法模型存在不稳定期，若系统过度依赖急停这一极端路径，会让整条异常处理链路显得过于脆弱，也会削弱用户对系统的信任。",
          en: "If I were to move this project forward again, I would push for on-site production-line observation. During the project, workers’ operating habits were mainly relayed verbally by engineers, which created potential cognitive gaps. Only by observing the site directly can we distinguish real high-frequency needs from path dependency in the existing system. I would also push more firmly for the medium-level manual tolerance mechanism. During early model instability, relying too heavily on emergency stop as the extreme path makes the exception-handling chain fragile and may weaken user trust in the system."
        }
      },
      confidentiality: {
        label: { zh: "保密说明", en: "CONFIDENTIALITY" },
        body: {
          zh: "受保密协议约束，公开作品集仅展示脱敏后的界面节选；项目客户以匿名代称呈现，不展示未经授权的真实检测效率数据。",
          en: "Due to confidentiality constraints, the public portfolio only shows desensitized interface excerpts. The client is presented anonymously, and unauthorized real inspection efficiency data is not disclosed."
        }
      }
    },
    // ================== MOCK DATA FOR OTHER PROJECTS ==================
    ...["pcba", "ds-ai", "wms", "gps", "factory", "5g"].map((slug) => ({
      slug,
      title: { en: `${slug.toUpperCase()} Project`, zh: `${slug.toUpperCase()} 项目` },
      category: { en: "Category Placeholder", zh: "分类占位" },
      summary: { en: "Summary placeholder", zh: "摘要占位" },
      cover: slug === "pcba" ? PCBA_HERO_IMG : PLACEHOLDER_IMG,
      heroImage: PLACEHOLDER_IMG,
      meta: [
        { label: { en: "DELIVERABLES", zh: "交付成果" }, value: { en: "Placeholder", zh: "占位" } },
        { label: { en: "CLIENT", zh: "客户" }, value: { en: "Placeholder", zh: "占位" } },
        { label: { en: "ROLE", zh: "我的角色" }, value: { en: "Placeholder", zh: "占位" } },
        { label: { en: "SERVICES", zh: "服务范围" }, value: { en: "Placeholder", zh: "占位" } }
      ],
      overview: {
        label: { en: "OVERVIEW", zh: "概览" },
        headline: { en: "Headline Placeholder", zh: "大标题占位" },
        body: { en: "Body Placeholder", zh: "正文占位" }
      },
      ...(PROJECT_PLACEHOLDER_OVERRIDES[slug] ?? {})
    }))
  ];
