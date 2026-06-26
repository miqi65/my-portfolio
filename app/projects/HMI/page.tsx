"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, AlertTriangle, LayoutDashboard, Palette, MonitorSmartphone, Type,
  Activity, Factory, ZoomIn, SlidersHorizontal, BellRing
} from "lucide-react";

// ==========================================
// 1. 内容真源 (源自 index.html)
// ==========================================
const CASE_CONTENT = {
  hero: {
    eyebrow: "案例研究 · 数据可视化",
    title: "友讯达数据大屏",
    desc: "主导设计\"友讯达数据大屏\"。投入运用后生产效率显著提升，客户满意度高——满意度 1 至 10 分中，给予 6 分及以上的人数占 79%，其中给予 10 分满分的占 31%。",
    kpis: [
      { value: "43", suffix: "%", label: "生产效率提升", prefix: "+" },
      { value: "79", suffix: "%", label: "满意度 ≥6 分占比" },
      { value: "31", suffix: "%", label: "满分 10 分占比" }
    ],
    meta: [
      { label: "职能范围", value: "用户洞察与创意 / 体验策略与愿景 / 设计执行与验证" },
      { label: "担任角色", value: "主设计师" },
      { label: "客户", value: "友讯达科技" },
      { label: "项目时间", value: "2 个月" }
    ]
  },
  overview: {
    label: "01 — 项目背景",
    title: "项目概览",
    background: "庞大的生产数据基准上，友讯达期望提升生产数据的价值的同时降低数据分析成本。项目涉及到生产数据设计可视化效果，并设想通过可视化设计能够实现数据驱动的生产管理，从而达到提升效率、降低成本、优化资源利用率以及实现实时决策支持的商业目标和意义。",
    painPoint: "客户企业拥有大量底层数据，将数据能力有效透出，从而实现数据的价值。传统的方式存在查询难度大、数据分析专业要求高、成本高、时间慢等问题。"
  },
  challenge: {
    label: "02 — 难点与挑战",
    title: "难点与挑战",
    quote: "在 2 个月内，我们要选择重点展示内容与方向，结合平台优势，让这个项目成为公司 TOB 产品平台化的标杆与产品化能力。",
    boxTitle: "更高层次的目标",
    boxText: "通过智能工厂数据可视化的方式实现数据价值与展现实力。采用图表可视化与生产数据联动的方式解决数据无法及时传递的问题。用设计升华数据价值，用数据驱动产品链接。"
  },
  howto: {
    label: "03 — 设计策略",
    title: "怎么做到的？",
    subtitle: "用户访谈获得设计策略",
    table: {
      headers: ["职能", "高级管理层", "生产主管和工程师", "质量控制团队", "设备维护人员"],
      rows: [
        {
          title: "需求",
          cols: [
            "需要全面了解工厂的运营状况和生产效率，以便做出战略决策。",
            "需要监控生产线的实时状态、异常情况和生产效率，以及调整和优化生产过程。",
            "需要对产品质量进行实时监控，及时发现质量问题并采取纠正措施。",
            "需要实时监控设备的运行状态、故障和维护需求，以保证设备的可靠运行和维护计划的合理安排。"
          ]
        },
        {
          title: "痛点",
          cols: [
            "缺乏实时准确的数据和指标，导致决策基于不完整的信息或感性判断。",
            "难以快速识别生产线上的问题和瓶颈，以及缺乏可靠的数据支持来进行改进和决策。",
            "缺乏对质量问题的全面可视化，难以快速定位和解决质量异常。",
            "缺乏对设备运行状态的及时了解，难以准确判断设备维护的时机和方式。"
          ]
        },
        {
          title: "期望",
          isHighlight: true,
          cols: [
            "期望通过数据大屏获得即时的生产数据、工艺监控和资源利用情况，以便进行全面的运营分析和决策。",
            "期望数据大屏提供实时的生产数据和指标，包括设备运行状态、生产效率、质量指标等，以帮助他们实时监控、分析和改进生产线的运行。",
            "期望数据大屏提供实时的质量数据和指标，包括缺陷率、不合格品率等，以便他们迅速识别问题、分析原因并采取措施。",
            "期望数据大屏提供实时的设备运行数据、故障警报和维护计划，以便他们能够及时响应设备问题和制定维护策略。"
          ]
        }
      ]
    }
  },
  research: {
    label: "04 — 用户研究",
    leftTitle: "探索目标",
    leftLead: "开始没有准确的项目资料，通过访谈客户安排的管理、生产主管与工程师、质量控制团队、设备维护等职能的相关工作人员，获得了以下信息：",
    quotes: [
      "无实时准确的数据和指标，只能基于不完整的信息或感性判断进行决策。",
      "设备运行状态不及时上报，难以准确判断设备维护的时机和方式。",
      "无质量问题的可视化分析，难以快速定位和解决质量异常。",
      "无法快速处理生产线上的问题和瓶颈，缺乏可靠的数据来进行支持改进方案与决策。"
    ],
    rightTitle: "发现",
    rightLead: "虽然访谈对象的职责各不相同，但是共同期望通过数据大屏获得实时、准确的生产数据和指标，以便进行运营分析、决策制定和问题解决。",
    opportunityTitle: "设计机遇",
    opportunityText: "我们如何设计可视化数据大屏，才能有效的做到数据传递，实现数据价值？"
  },
  solution: {
    label: "05 — 解决方案",
    title: "解决方案"
  },
  visualPrinciples: {
    label: "06 — 视觉设计",
    title: "视觉呈现原则",
    items: [
      { title: "布局设计", desc: "采用整洁、直观的布局，将关键数据指标和图表以明确的方式展示。将不同的数据模块分组，按照相关性或层级进行排列，以便用户快速浏览和理解。使用明显的标题、副标题和标签，帮助用户更好地理解各数据模块的含义和关系。", icon: LayoutDashboard },
      { title: "色彩设计", desc: "选择符合工厂品牌主题的配色方案，确保数据大屏与整体环境和企业形象相协调。用明亮和鲜艳的色彩突出重要数据，例如红色或橙色表示警报或异常情况，绿/蓝色表示正常运行等。保持色彩的一致性和对比度，以确保数据的可读性和可视化效果。", icon: Palette },
      { title: "特点和风格", desc: "结合数据大屏的技术特性，采用科技感强的视觉风格，体现出数据驱动和高效精准的产品特性。视觉元素保持简洁与克制，避免过度装饰，让数据本身成为视觉焦点，传递真实有效的信息价值。", icon: MonitorSmartphone },
      { title: "字体设计", desc: "选用高可读性字体，确保在大屏环境下数字和文字的清晰辨识。数值和关键指标使用显著的字号和字重，标题与正文保持清晰的字体层级，在视觉上形成自然的信息阅读优先级。", icon: Type }
    ]
  },
  interactionPoints: {
    label: "07 — 交互设计",
    title: "交互设计要点",
    items: [
      { title: "动态数据可视化", desc: "利用动画效果展示实时数据的变化趋势，例如通过柱状图、线图或雷达图的动态增长和缩小，突出关键指标的变化。通过颜色渐变、闪烁或图标旋转等动画效果，吸引用户注意力，快速传递信息。", icon: Activity },
      { title: "实时生产线模拟", desc: "通过动态图表和流程图，实时呈现生产线各环节的运行状态，使管理人员可以直观了解整体生产流程，及时发现瓶颈并做出调整。", icon: Factory },
      { title: "多维度数据探索", desc: "支持用户通过筛选、钻取和对比等方式对数据进行深度分析，满足不同职能人员对数据的差异化需求，提升数据探索效率。", icon: ZoomIn },
      { title: "个性化配置和保存", desc: "允许用户根据个人偏好自定义大屏布局和关注指标，并保存配置方案，以便快速切换不同的监控视图，提升日常使用效率。", icon: SlidersHorizontal },
      { title: "智能告警和通知", desc: "设定关键指标的阈值，当数据异常时自动触发视觉告警和消息推送，帮助相关人员及时响应和处理生产异常，降低故障影响时间。", icon: BellRing }
    ]
  },
  evaluation: {
    label: "08 — 设计评估",
    title: "设计评估",
    kpis: [
      { value: "43", suffix: "%", label: "生产效率提升", prefix: "+" },
      { value: "79", suffix: "%", label: "客户满意度 ≥6 分" },
      { value: "31", suffix: "%", label: "给予满分 10 分" }
    ],
    text: "我们不断收集和分析用户的反馈和行为数据，了解用户需求，发现问题，并针对性地进行设计改进和优化。这样的循环反馈过程可以帮助我们逐步提升数据大屏的设计效果和用户满意度，确保其能够真正满足用户的需求，提供有价值的数据展示和管理工具。"
  }
};

const IMAGE_PATHS = {
  heroWide: [
    "/images/yuxunda/yuxunda-dashboard.png",
    "/images/yuxunda/yuxunda-hero-wide.png",
    "/images/yuxunda-dashboard.png",
    "/images/yuxunda/友讯达封面图.jpg",
    "/images/yuxunda/yuxunda-dashboard.jpg",
    "/友讯达封面图.jpg",
    "友讯达封面图.jpg"
  ],
  hero: [
    "/images/yuxunda/yuxunda-dashboard.png",
    "/images/yuxunda/友讯达封面图.jpg",
    "/images/yuxunda/yuxunda-dashboard.jpg",
    "/友讯达封面图.jpg",
    "友讯达封面图.jpg"
  ]
};

// ==========================================
// 2. 图表数据源配置 (待填写真实数据)
// ==========================================
// TODO: replace with original chart data from old main.js
const overviewChartsData = {
  industryStructure: {
    title: "2021 年中国大数据产业结构",
    type: "donut",
    labels: ["硬件", "软件", "服务", "其他"], // 占位数据，请替换
    values: [40, 25, 25, 10], // 占位数据，请替换
    colors: ["#5BA7C7", "#7CC8DE", "#8A9BB0", "#3E4C5A"]
  },
  marketScale: {
    title: "互联网大数据产业规模（单位：亿元）",
    type: "bar",
    labels: ["2018", "2019", "2020", "2021"], // 占位数据，请替换
    values: [210, 320, 480, 650] // 占位数据，请替换
  },
  forecastScale: {
    title: "2021–2026 年中国大数据产业市场规模预测（单位：亿元）",
    type: "bar-line",
    labels: ["2021", "2022", "2023", "2024", "2025", "2026"], // 占位数据，请替换
    values: [650, 820, 1050, 1300, 1600, 2000] // 占位数据，请替换
  }
};

// ==========================================
// 3. 动效预设
// ==========================================
const smoothEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: smoothEase } },
};

const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.98 },
  visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 1, ease: smoothEase } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ==========================================
// 4. 组件定义
// ==========================================

// -- 基础图片组件 (保留给其他模块使用)
interface SmartImageProps {
  srcList: string[];
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain";
  priority?: boolean;
}

function SmartImageWithFallback({ srcList, alt, className = "", objectFit = "contain", priority = false }: SmartImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const hasFailedAll = currentIndex >= srcList.length;
  const currentSrc = !hasFailedAll ? srcList[currentIndex] : "";
  const isNextImageCompatible = currentSrc.startsWith("/") && !currentSrc.includes("..");

  if (hasFailedAll) {
    return (
      <div className={`w-full h-full min-h-[96px] bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[8px] flex items-center justify-center px-4 py-6 transition-all ${className}`}>
        <span className="text-[#8A9BB0] text-[12px] font-medium tracking-wide flex items-center gap-2">
          <AlertTriangle size={14} aria-hidden="true" />
          视觉资源加载受限
        </span>
      </div>
    );
  }

  const baseImageClasses = `transition-opacity duration-1000 z-10 w-full h-full ${isLoaded ? "opacity-100" : "opacity-0"} ${objectFit === "cover" ? "object-cover" : "object-contain"}`;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[rgba(105,128,150,0.03)] animate-pulse z-0" />
      )}
      {isNextImageCompatible ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-w: 1280px) 100vw, 1280px"
          className={baseImageClasses}
          onLoad={() => setIsLoaded(true)}
          onError={() => setCurrentIndex(prev => prev + 1)}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={`absolute inset-0 ${baseImageClasses}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setCurrentIndex(prev => prev + 1)}
        />
      )}
    </div>
  );
}

// -- 专属 Hero 右侧贴边渲染的组件
function HeroSmartImage({ srcList, alt, priority = false }: { srcList: string[], alt: string, priority?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const hasFailedAll = currentIndex >= srcList.length;
  const currentSrc = !hasFailedAll ? srcList[currentIndex] : "";
  const isNextImageCompatible = currentSrc.startsWith("/") && !currentSrc.includes("..");

  if (hasFailedAll) {
    return <div className="w-full h-full bg-[#03070D] flex items-center justify-center text-[#8A9BB0] text-[13px]"><AlertTriangle size={16} className="mr-2"/>视觉资源加载受限</div>;
  }

  const imgClasses = `transition-opacity duration-[1500ms] ease-out z-10 w-full h-full object-contain object-right ${isLoaded ? "opacity-100" : "opacity-0"}`;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isNextImageCompatible ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 75vw"
          className={imgClasses}
          onLoad={() => setIsLoaded(true)}
          onError={() => setCurrentIndex(prev => prev + 1)}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={`absolute inset-0 ${imgClasses}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setCurrentIndex(prev => prev + 1)}
        />
      )}
    </div>
  );
}

// -- 图表：环形图
function DonutChartCard({ data }: { data: typeof overviewChartsData.industryStructure }) {
  const total = data.values.reduce((acc, val) => acc + val, 0);
  let cumulativePercent = 0;
  
  return (
    <motion.div variants={fadeInUp} className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[12px] p-6 flex flex-col h-[280px]">
      <h4 className="text-[13px] text-[#B8C4D2] font-medium mb-6 text-center">{data.title}</h4>
      <div className="flex-1 flex items-center justify-center gap-8 w-full">
        {/* SVG Donut */}
        <div className="relative w-[120px] h-[120px] shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            {data.values.map((val, idx) => {
              const percent = (val / total) * 100;
              const strokeDasharray = `${percent} 100`;
              const strokeDashoffset = -cumulativePercent;
              cumulativePercent += percent;
              return (
                <motion.circle
                  key={idx}
                  initial={{ strokeDasharray: "0 100" }}
                  whileInView={{ strokeDasharray }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: smoothEase }}
                  cx="18" cy="18" r="15.91549430918954" 
                  fill="transparent"
                  stroke={data.colors[idx]}
                  strokeWidth="4"
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300"
                />
              );
            })}
            {/* Inner fill to cover gaps if any */}
            <circle cx="18" cy="18" r="13" fill="#08101A" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] text-[#8A9BB0]">总计</span>
            <span className="text-[16px] font-medium text-[#E8EEF6] leading-none mt-1">100%</span>
          </div>
        </div>
        {/* Legend */}
        <div className="flex flex-col gap-2.5 justify-center">
          {data.labels.map((label, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[12px]">
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: data.colors[idx] }}></span>
              <span className="text-[#8A9BB0] w-[32px]">{label}</span>
              <span className="text-[#E8EEF6] font-medium">{Math.round((data.values[idx]/total)*100)}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// -- 图表：柱状图
function BarChartCard({ data }: { data: typeof overviewChartsData.marketScale }) {
  const maxVal = Math.max(...data.values);
  
  return (
    <motion.div variants={fadeInUp} className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[12px] p-6 flex flex-col h-[280px]">
      <h4 className="text-[13px] text-[#B8C4D2] font-medium mb-6 text-center">{data.title}</h4>
      <div className="flex-1 w-full flex items-end justify-between px-2 gap-2 mt-auto relative">
        {/* Y Axis Guides */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-[24px]">
          <div className="border-t border-[rgba(105,128,150,0.06)] w-full"></div>
          <div className="border-t border-[rgba(105,128,150,0.06)] w-full"></div>
          <div className="border-t border-[rgba(105,128,150,0.06)] w-full"></div>
        </div>
        
        {data.values.map((val, idx) => {
          const heightPct = (val / maxVal) * 85; // Leave room for top label
          return (
            <div key={idx} className="flex flex-col items-center flex-1 z-10 h-full justify-end group">
              <span className="text-[11px] text-[#E8EEF6] mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity font-medium">{val}</span>
              <div className="w-full max-w-[32px] bg-[#03070D] rounded-t-sm flex items-end justify-center overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${heightPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: smoothEase }}
                  className="w-full bg-[#5BA7C7] opacity-80 hover:opacity-100 transition-opacity rounded-t-sm"
                />
              </div>
              <span className="text-[11px] text-[#5D6D82] mt-3 block text-center w-full">{data.labels[idx]}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// -- 图表：趋势预测图 (柱状图+折线)
function ForecastChartCard({ data }: { data: typeof overviewChartsData.forecastScale }) {
  const maxVal = Math.max(...data.values) * 1.1; // Headroom for line
  
  return (
    <motion.div variants={fadeInUp} className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[12px] p-6 flex flex-col h-[280px]">
      <h4 className="text-[13px] text-[#B8C4D2] font-medium mb-6 text-center">{data.title}</h4>
      <div className="flex-1 w-full flex items-end justify-between gap-1 mt-auto relative px-1">
        
        {/* Trend Line (SVG overlay) */}
        <div className="absolute inset-0 pointer-events-none pb-[32px] z-20">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <motion.polyline 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: smoothEase }}
              fill="none" 
              stroke="#F26A3D" 
              strokeWidth="2"
              points={data.values.map((v, i) => {
                const x = `${(i + 0.5) * (100 / data.values.length)}%`;
                const y = `${100 - (v / maxVal) * 100}%`;
                return `${x},${y}`;
              }).join(" ")}
            />
            {data.values.map((v, i) => (
              <motion.circle 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                cx={`${(i + 0.5) * (100 / data.values.length)}%`} 
                cy={`${100 - (v / maxVal) * 100}%`} 
                r="3" 
                fill="#08101A" 
                stroke="#F26A3D" 
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        {/* Bars */}
        {data.values.map((val, idx) => {
          const heightPct = (val / maxVal) * 100;
          const isForecast = idx >= 3; // 假设后半部分是预测
          return (
            <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end z-10 group relative">
              <span className="absolute -top-6 text-[10px] text-[#E8EEF6] opacity-0 group-hover:opacity-100 transition-opacity bg-[rgba(3,7,13,0.8)] px-1.5 py-0.5 rounded">{val}</span>
              <div className="w-full max-w-[28px] bg-transparent flex items-end justify-center h-full">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${heightPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: smoothEase }}
                  className={`w-full rounded-t-sm transition-opacity ${isForecast ? 'bg-[rgba(124,200,222,0.15)] border border-[#7CC8DE]/30 border-b-0' : 'bg-[rgba(105,128,150,0.15)]'}`}
                />
              </div>
              <span className="text-[10px] text-[#5D6D82] mt-3 block text-center w-full whitespace-nowrap transform -rotate-45 md:rotate-0 origin-left mt-2 md:mt-3">{data.labels[idx]}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ==========================================
// 页面主体
// ==========================================
export default function YuxundaDataScreenCase() {
  return (
    <div className="min-h-screen bg-[#03070D] text-[#B8C4D2] font-sans selection:bg-[#5BA7C7] selection:text-[#03070D] antialiased">
      
      {/* 导航 */}
      <nav className="fixed top-0 w-full z-50 bg-[#03070D]/80 backdrop-blur-lg border-b border-[rgba(105,128,150,0.08)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link 
            href="/#cases" 
            className="flex items-center gap-2 text-[13px] font-medium text-[#8A9BB0] hover:text-[#E8EEF6] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CC8DE] focus-visible:ring-offset-4 focus-visible:ring-offset-[#03070D] rounded-sm"
          >
            <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" className="group-hover:-translate-x-1 transition-transform duration-300 motion-reduce:transition-none motion-reduce:transform-none" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[12px] text-[#5D6D82] font-medium hidden sm:block tracking-wide">
            Miki Portfolio · Yuxunda Dashboard
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden pt-14">
        
        {/* =========================================
            01 Hero (PCBA 全屏品牌海报风格重构版)
            ========================================= */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="relative w-full min-h-screen lg:min-h-[900px] bg-[#03070D] overflow-hidden flex flex-col justify-center py-20 lg:py-0"
        >
          {/* A. 桌面端背景光影层 */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            {/* 网格暗纹 */}
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ 
                backgroundImage: 'linear-gradient(rgba(105,128,150,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(105,128,150,0.5) 1px, transparent 1px)', 
                backgroundSize: '32px 32px' 
              }} 
            />
            {/* 底部地面光轨 */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[260px]" 
              style={{ background: 'linear-gradient(to top, rgba(91,167,199,0.12), transparent 70%)' }} 
            />
            {/* 右侧科技蓝光 */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(circle at 78% 62%, rgba(91,167,199,0.16), transparent 42%)' }} 
            />
          </div>

          {/* B. 桌面端右侧大面积背景图层 */}
          <div 
            className="hidden lg:block absolute inset-y-0 right-0 w-[68%] xl:w-[72%] h-full z-0 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 100%)'
            }}
          >
            <HeroSmartImage 
              srcList={IMAGE_PATHS.heroWide} 
              alt="友讯达数据大屏 Hero 背景大图" 
              priority 
            />
          </div>

          {/* C. 桌面端左侧渐变融合遮罩层 */}
          <div 
            className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #03070D 0%, rgba(3,7,13,0.96) 28%, rgba(3,7,13,0.62) 40%, rgba(3,7,13,0.20) 50%, rgba(3,7,13,0) 58%, rgba(3,7,13,0) 100%)'
            }}
          />

          {/* D. 内容安全区 */}
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 h-full items-center">
            
            {/* 左侧文案 (完全保留源文案，应用全新排版) */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 max-w-[620px] flex flex-col justify-center">
              
              <div className="text-[12px] font-medium text-[#5BA7C7] tracking-widest uppercase mb-6 flex flex-wrap items-center gap-3">
                <span>{CASE_CONTENT.hero.eyebrow}</span>
              </div>

              <h1 className="text-[44px] md:text-[52px] lg:text-[60px] font-medium text-[#E8EEF6] leading-[1.1] tracking-tight mb-8">
                {CASE_CONTENT.hero.title}
              </h1>

              <p className="text-[15px] text-[#B8C4D2] leading-[1.7] mb-10">
                {CASE_CONTENT.hero.desc}
              </p>

              {/* KPI */}
              <div className="grid grid-cols-3 gap-x-6 gap-y-6 mb-12">
                {CASE_CONTENT.hero.kpis.map((kpi, idx) => (
                  <div key={idx} className={`flex flex-col ${idx !== 0 ? "relative before:content-[''] before:absolute before:left-[-12px] before:top-1/4 before:h-1/2 before:w-[1px] before:bg-[rgba(105,128,150,0.16)]" : ""}`}>
                    <span className={`text-[28px] lg:text-[32px] font-light ${idx === 0 ? "text-[#7CC8DE]" : "text-[#E8EEF6]"} leading-tight flex items-baseline gap-1`}>
                      {kpi.prefix}{kpi.value}<span className={`text-[16px] font-medium ${idx === 0 ? "" : "text-[#8A9BB0]"}`}>{kpi.suffix}</span>
                    </span>
                    <span className="text-[12px] font-medium text-[#8A9BB0] mt-2 leading-[1.4] pr-2">{kpi.label}</span>
                  </div>
                ))}
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-y-3 text-[13px] border-t border-[rgba(105,128,150,0.10)] pt-6">
                {CASE_CONTENT.hero.meta.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-[#5D6D82] font-medium w-[60px] shrink-0">{item.label}</span>
                    <span className="text-[#E8EEF6]">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 移动端图片展示 (仅移动端可见，常规卡片式防止文字不可读) */}
            <motion.div variants={fadeInUp} className="lg:hidden w-full relative z-20">
              <div className="w-full aspect-[16/10] max-h-[400px] rounded-[16px] border border-[rgba(105,128,150,0.08)] overflow-hidden p-2 bg-[#08101A]">
                 <SmartImageWithFallback 
                   srcList={IMAGE_PATHS.hero} 
                   alt="友讯达数据大屏 (Mobile)" 
                   objectFit="cover" 
                   priority 
                 />
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* 02 项目概览 */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">{CASE_CONTENT.overview.label}</span>
            <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] leading-[1.3]">
              {CASE_CONTENT.overview.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <DonutChartCard data={overviewChartsData.industryStructure} />
            <BarChartCard data={overviewChartsData.marketScale} />
            <ForecastChartCard data={overviewChartsData.forecastScale} />
          </div>

          <div className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[16px] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <motion.div variants={fadeInUp}>
                <div className="text-[12px] font-medium text-[#8A9BB0] mb-4">项目背景</div>
                <p className="text-[16px] text-[#B8C4D2] leading-[1.8]">
                  {CASE_CONTENT.overview.background}
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="bg-[rgba(91,167,199,0.04)] border-l-2 border-[#5BA7C7] p-6 rounded-r-sm h-full">
                  <div className="text-[12px] font-medium text-[#7CC8DE] mb-4">核心痛点</div>
                  <p className="text-[15px] text-[#E8EEF6] leading-[1.7] font-medium">
                    {CASE_CONTENT.overview.painPoint}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 03 难点与挑战 */}
        <section className="w-full relative py-32 md:py-40 flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#03070D,#08101A)] border-y border-[rgba(105,128,150,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(105,128,150,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" aria-hidden="true" />
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-[860px] mx-auto px-6 relative z-10 flex flex-col items-center text-center"
          >
            <motion.span variants={fadeInUp} className="text-[12px] font-medium text-[#5BA7C7] tracking-widest uppercase mb-4">
              {CASE_CONTENT.challenge.label}
            </motion.span>
            
            <motion.h2 variants={fadeInUp} className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] mb-12">
              {CASE_CONTENT.challenge.title}
            </motion.h2>

            <motion.p variants={blurIn} className="text-[20px] md:text-[24px] font-light text-[#E8EEF6] leading-[1.6] mb-16">
              {CASE_CONTENT.challenge.quote}
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-[#03070D] border border-[rgba(105,128,150,0.12)] p-8 rounded-[12px] text-left w-full max-w-[640px] shadow-2xl">
              <div className="text-[12px] font-medium text-[#7CC8DE] mb-4">{CASE_CONTENT.challenge.boxTitle}</div>
              <p className="text-[15px] text-[#B8C4D2] leading-[1.7]">
                {CASE_CONTENT.challenge.boxText}
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 04 怎么做到的？ */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">{CASE_CONTENT.howto.label}</span>
            <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] mb-4">
              {CASE_CONTENT.howto.title}
            </h2>
            <p className="text-[16px] text-[#B8C4D2]">{CASE_CONTENT.howto.subtitle}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full bg-[#08101A] rounded-[16px] border border-[rgba(105,128,150,0.10)] p-4 lg:p-8 overflow-hidden">
            <div className="w-full overflow-x-auto rounded-[12px] border border-[rgba(105,128,150,0.2)] bg-[#F4F7FA]">
              <table className="w-full min-w-[1100px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#101B28]">
                    {CASE_CONTENT.howto.table.headers.map((header, idx) => (
                      <th key={idx} className={`px-6 py-4 text-[14px] font-medium text-[#E8EEF6] border-b border-[rgba(105,128,150,0.2)] ${idx === 0 ? 'w-[80px] bg-[#0A121C]' : 'w-1/4 border-l border-[rgba(105,128,150,0.2)]'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CASE_CONTENT.howto.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-[#E5E7EB] last:border-0">
                      <td className={`px-6 py-6 text-[14px] font-medium border-r border-[#E5E7EB] bg-[#FFFFFF] ${row.isHighlight ? 'text-[#F26A3D]' : 'text-[#5D6D82]'}`}>
                        {row.title}
                      </td>
                      {row.cols.map((col, colIdx) => (
                        <td key={colIdx} className="px-6 py-6 text-[14px] leading-[1.7] text-[#2A2F36] border-r border-[#E5E7EB] last:border-r-0 align-top">
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* 05 探索目标 & 发现 */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <motion.div variants={fadeInRight} className="flex flex-col">
              <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">{CASE_CONTENT.research.label}</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] mb-6">
                {CASE_CONTENT.research.leftTitle}
              </h2>
              <p className="text-[15px] text-[#B8C4D2] leading-[1.7] mb-10 max-w-[480px]">
                {CASE_CONTENT.research.leftLead}
              </p>

              <div className="flex flex-col gap-6">
                {CASE_CONTENT.research.quotes.map((quote, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="text-[14px] font-mono font-medium text-[#5BA7C7] bg-[rgba(91,167,199,0.1)] px-2 py-0.5 rounded">0{idx + 1}</span>
                    <p className="text-[#8A9BB0] text-[14px] leading-[1.6] italic">"{quote}"</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeInUp} className="flex flex-col lg:border-l border-[rgba(105,128,150,0.10)] lg:pl-16 lg:pt-8">
              <span className="text-[12px] font-medium text-[#5D6D82] uppercase block mb-3">发现</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] mb-6">
                {CASE_CONTENT.research.rightTitle}
              </h2>
              <p className="text-[15px] text-[#B8C4D2] leading-[1.7] mb-12 max-w-[480px]">
                {CASE_CONTENT.research.rightLead}
              </p>

              <div className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] p-8 rounded-[12px]">
                <div className="text-[12px] font-medium text-[#8A9BB0] mb-4">{CASE_CONTENT.research.opportunityTitle}</div>
                <p className="text-[16px] text-[#E8EEF6] font-medium leading-[1.6]">
                  {CASE_CONTENT.research.opportunityText}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 06 解决方案 */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full bg-[#08101A] py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
            <motion.span variants={fadeInUp} className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">
              {CASE_CONTENT.solution.label}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] mb-16">
              {CASE_CONTENT.solution.title}
            </motion.h2>

            <motion.div variants={fadeInUp} className="w-full max-w-[1024px] aspect-[16/9] bg-[#03070D] rounded-[16px] border border-[rgba(105,128,150,0.12)] shadow-2xl overflow-hidden p-2 lg:p-4">
              <div className="w-full h-full relative rounded-[8px] overflow-hidden">
                <SmartImageWithFallback 
                  srcList={IMAGE_PATHS.hero} 
                  alt="友讯达智能工厂数据大屏"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 07 视觉呈现原则 */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">{CASE_CONTENT.visualPrinciples.label}</span>
            <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] leading-[1.3]">
              {CASE_CONTENT.visualPrinciples.title}
            </h2>
          </motion.div>

          <div className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[12px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(105,128,150,0.10)] border-b border-[rgba(105,128,150,0.10)]">
              {CASE_CONTENT.visualPrinciples.items.slice(0, 2).map((item, idx) => (
                <div key={idx} className="p-8 lg:p-10">
                  <item.icon size={20} strokeWidth={1.5} className="text-[#5BA7C7] mb-5" aria-hidden="true" />
                  <h3 className="text-[#E8EEF6] font-medium mb-3 text-[16px]">{item.title}</h3>
                  <p className="text-[#8A9BB0] text-[14px] leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(105,128,150,0.10)]">
              {CASE_CONTENT.visualPrinciples.items.slice(2, 4).map((item, idx) => (
                <div key={idx} className="p-8 lg:p-10">
                  <item.icon size={20} strokeWidth={1.5} className="text-[#5BA7C7] mb-5" aria-hidden="true" />
                  <h3 className="text-[#E8EEF6] font-medium mb-3 text-[16px]">{item.title}</h3>
                  <p className="text-[#8A9BB0] text-[14px] leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 08 交互设计要点 */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full border-b border-[rgba(105,128,150,0.10)] py-20 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">{CASE_CONTENT.interactionPoints.label}</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6]">{CASE_CONTENT.interactionPoints.title}</h2>
            </motion.div>

            <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-6 mt-8">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: smoothEase }}
                className="hidden md:block absolute left-0 right-0 top-[19px] h-[1px] bg-[rgba(105,128,150,0.12)] z-0 origin-left motion-reduce:hidden" 
                aria-hidden="true" 
              />
              <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-[1px] bg-[rgba(105,128,150,0.12)] z-0" aria-hidden="true" />

              {CASE_CONTENT.interactionPoints.items.map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex md:flex-col items-start gap-4 md:gap-5 md:flex-1 group">
                  <div className="w-10 h-10 rounded-full bg-[#03070D] border border-[rgba(105,128,150,0.3)] group-hover:bg-[#08101A] transition-colors flex items-center justify-center shrink-0">
                    <step.icon size={16} strokeWidth={1.5} className="text-[#8A9BB0] group-hover:text-[#7CC8DE] transition-colors" aria-hidden="true" />
                  </div>
                  <div className="pt-2 md:pt-0">
                    <span className="text-[12px] font-mono text-[#5D6D82] mb-1 block">0{idx + 1}</span>
                    <h3 className="text-[#E8EEF6] font-medium text-[15px] mb-2">{step.title}</h3>
                    <p className="text-[#5D6D82] text-[13px] leading-[1.6]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 09 设计评估 */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 md:py-40 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">{CASE_CONTENT.evaluation.label}</span>
            <h2 className="text-[32px] md:text-[40px] font-medium text-[#E8EEF6] leading-[1.2]">
              {CASE_CONTENT.evaluation.title}
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24 w-full max-w-[960px] mb-20">
            {CASE_CONTENT.evaluation.kpis.map((kpi, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-[48px] md:text-[64px] font-light text-[#7CC8DE] leading-none tracking-tight mb-4 flex items-baseline justify-center">
                  {kpi.prefix}{kpi.value}<span className="text-[20px] font-medium">{kpi.suffix}</span>
                </div>
                <div className="text-[#8A9BB0] font-medium tracking-wide text-[15px]">{kpi.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-[720px] border-t border-[rgba(105,128,150,0.10)] pt-12">
            <p className="text-[#B8C4D2] text-[16px] leading-[1.8]">
              {CASE_CONTENT.evaluation.text}
            </p>
          </motion.div>
        </motion.section>

      </main>
    </div>
  );
}
