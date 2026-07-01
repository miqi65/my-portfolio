"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  X, 
  ArrowDownRight,
  LocateFixed,
  Bell,
  ClipboardList,
  CheckCircle2,
  History,
  SquareDashedMousePointer
} from "lucide-react";
import Link from "next/link";

// ==========================================
// 常量与文案区域 (Data Structures)
// ==========================================
const GPS_IMAGES = {
  hero: "/images/gps/gps-hero.png",
  solutionOne: "/images/gps/gps-06-1.png",
  overview: "/国家能源/project/assets/solution-overview.png",
  zone: "/国家能源/project/assets/zone-management.png",
  trajectory: "/国家能源/project/assets/trajectory.png",
  alert: "/国家能源/project/assets/alert-list.png",
  stats: "/国家能源/project/assets/stats-screen.png",
  mapBg: "/images/gps/gps-hero.png", 
};

const projectMeta = {
  title: "国家能源｜轨迹定位跟踪 App",
  subtitle: "面向能源运输场景的移动端定位、告警与轨迹追溯系统。",
  description: "我将原本依赖人工确认、电话沟通和事后追溯的运输管理流程，重构为可实时查看、异常分级、快速处理和路径回溯的移动端任务链路。",
  tags: ["实时定位", "电子围栏", "告警处理", "轨迹回溯", "信息统计"],
  roles: [
    { label: "角色", value: "主设计师" },
    { label: "工作范围", value: "业务流程梳理 / 移动端信息架构 / 核心任务流 / UI 设计" },
    { label: "交付产物", value: "移动端 App" },
    { label: "项目周期", value: "1 个月" }
  ]
};

const backgroundProblems = [
  {
    title: "多运输对象难兼顾",
    detail: "移动场景下需要同时判断多区域、多载体状态，信息切换成本高。",
  },
  {
    title: "电话沟通确认慢",
    detail: "异常发生后仍依赖人工问询，现场反馈和系统记录之间存在时间差。",
  },
  {
    title: "事后追溯成本高",
    detail: "缺少稳定的轨迹与处理记录，复盘路径、责任和风险节点耗时。",
  },
];

const coreProblems = [
  {
    title: "定位延迟导致异常判断慢",
    text: "移动端定位存在延迟，紧急情况下仍需电话确认，影响现场异常判断和响应速度。",
    direction: "优先呈现运行中载体的位置、方向与状态。"
  },
  {
    title: "缺少轨迹记录，事后复盘难",
    text: "用户往往只能看到当前点位，缺少完整轨迹记录。异常发生后，难以复盘路径和确认责任。",
    direction: "增加历史轨迹与路径回溯功能。"
  },
  {
    title: "跨区运输缺少可视边界",
    text: "运输对象按区域调度，但地图上缺少明确边界，跨区、越界和遗漏风险难以及时识别。",
    direction: "通过电子围栏建立直观的空间管理边界。"
  },
  {
    title: "告警堆叠导致高危信息易漏看",
    text: "常规提醒与紧急告警混在同一列表中，用户在手机端难以优先处理高风险事件。",
    direction: "按紧急程度和时间顺序组织告警信息。"
  },
];

const strategyPrinciples = [
  {
    title: "首屏只保留当前运行与风险对象",
    text: "移动端首屏优先呈现正在运行或存在风险的运输对象，减少无关信息干扰。",
  },
  {
    title: "用电子围栏降低空间判断成本",
    text: "通过电子围栏建立明确的区域边界，让用户在地图上直接判断运输对象是否进入、偏离或跨越指定范围。",
  },
  {
    title: "高危告警优先进入处理链路",
    text: "告警信息先按风险等级分层，再按时间顺序展示，帮助用户优先处理高风险异常。",
  },
  {
    title: "将运输过程沉淀为可复盘记录",
    text: "通过历史轨迹和处理记录，将动态运输过程转化为可查看、可追溯的系统记录。",
  }
];

const solutions = [
  {
    title: "运行对象优先展示",
    image: GPS_IMAGES.solutionOne,
    problem: "移动端屏幕有限，如果将静止对象、运行对象和异常对象全部平铺展示，会造成明显的信息过载。",
    designMove: "默认降低非活跃信息的展示优先级，优先呈现当前正在运行或存在风险的运输对象。",
    value: "减少无关对象干扰，让用户在手机端优先定位正在运行或存在风险的运输对象。"
  },
  {
    title: "用电子围栏定义区域边界",
    image: GPS_IMAGES.zone,
    problem: "过去区域归属主要依赖文字字段，用户难以在地图上判断运输对象是否进入或偏离指定范围。",
    designMove: "通过电子围栏将区域规则可视化，在地图层直接呈现运输对象与管理边界的关系。",
    value: "降低人工记忆和电话确认成本，让越界、偏离等异常更容易被及时发现。"
  },
  {
    title: "按优先级组织告警",
    image: GPS_IMAGES.alert,
    problem: "常规消息与紧急告警混在同一列表中，管理员在手机端容易漏看关键风险。",
    designMove: "将告警信息先按异常等级分层，再按时间顺序展示。",
    value: "降低低优先级信息干扰，让管理员优先处理最高风险异常。"
  },
  {
    title: "用路径回溯补齐复盘链路",
    image: GPS_IMAGES.trajectory,
    problem: "仅有当前定位点无法还原运输过程。异常发生后，复盘路径和界定责任成本较高。",
    designMove: "增加历史轨迹回看能力，按时间和位置记录关键节点，支持异常过程复盘。",
    value: "将动态运输过程沉淀为可查看、可追溯的系统记录，补齐事后复盘链路。"
  }
];

const workflowSteps = [
  "查看运输对象实时位置",
  "判断是否进入或偏离指定区域",
  "系统触发异常状态或告警",
  "用户查看告警详情与轨迹信息",
  "用户确认并处理异常",
  "历史轨迹和处理记录沉淀为追溯依据",
];

const workflowIcons = [
  LocateFixed, 
  SquareDashedMousePointer, 
  Bell, 
  ClipboardList, 
  CheckCircle2, 
  History
];

const results = [
  { value: "-23%", label: "异常预警等待时长减少 23%" },
  { value: "+17%", label: "目的地定位匹配准确性提升 17%" },
  { value: "-10%", label: "任务执行中的人工求助率降低 10%" },
];

const valuePoints = [
  "降低位置查找成本",
  "降低异常判断成本",
  "减少电话确认依赖",
  "提升高风险状态可见性",
  "补齐轨迹复盘和追溯依据"
];

// ==========================================
// 动效预设 (Framer Motion)
// ==========================================
const revealUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const staggerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const cardHover = {
  y: -4,
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
};

const bgGlowAnim = {
  animate: { opacity: [0.35, 0.55, 0.35], scale: [1, 1.04, 1] },
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
};

// ==========================================
// 基础组件
// ==========================================

function ImageLightbox({ src, alt, onClose }: { src: string, alt: string, onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[#080808]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
        onClick={onClose}
      >
        <button className="absolute top-6 right-6 text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md">
          <X size={24} />
        </button>
        <div className="relative w-full max-w-[90vw] h-[85vh] cursor-default" onClick={(e) => e.stopPropagation()}>
          <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" priority />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function SectionHeader({ num, enTitle, title, subtitle, desc, dark = false, align = "left" }: { num: string, enTitle?: string, title: string, subtitle: string, desc?: string, dark?: boolean, align?: "left" | "center" }) {
  return (
    <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={`mb-12 md:mb-16 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#58E6A9] text-[13px] font-mono font-medium">{num}</span>
        <span className={`w-8 h-[1px] ${dark ? "bg-white/20" : "bg-[#18181B]/10"}`}></span>
        {enTitle && (
          <span className={`text-[12px] font-mono uppercase tracking-[0.18em] ${dark ? "text-[#71717A]" : "text-[#A1A1AA]"}`}>
            {enTitle}
          </span>
        )}
      </div>
      <h2 className={`text-[28px] md:text-[36px] font-semibold tracking-tight mb-3 ${dark ? "text-[#F5F5F5]" : "text-[#18181B]"}`}>{title}</h2>
      <p className={`text-[16px] md:text-[18px] font-medium leading-[1.6] ${dark ? "text-[#D4D4D8]" : "text-[#3F3F46]"}`}>{subtitle}</p>
      {desc && <p className={`mt-4 md:mt-6 text-[14px] md:text-[15px] leading-[1.7] max-w-[620px] ${dark ? "text-[#A1A1AA]" : "text-[#71717A]"}`}>{desc}</p>}
    </motion.div>
  );
}

// ==========================================
// 业务组件
// ==========================================

function ProblemCard({ problem, index }: { problem: typeof coreProblems[0], index: number }) {
  return (
    <motion.div 
      variants={revealUp} 
      whileHover={cardHover} 
      className="bg-white border border-[#E5E5E5] rounded-[12px] p-6 shadow-sm flex flex-col h-full cursor-default"
    >
      <div className="text-[#A1A1AA] text-[12px] font-mono mb-4">Problem 0{index + 1}</div>
      <h3 className="text-[17px] font-medium text-[#18181B] mb-2">{problem.title}</h3>
      <p className="text-[14px] leading-[1.65] text-[#71717A] mb-6 flex-grow">{problem.text}</p>
      <div className="pt-4 border-t border-[#E5E5E5]">
        <span className="block text-[12px] text-[#58E6A9] font-mono uppercase mb-1">Design Direction</span>
        <p className="text-[14px] text-[#3F3F46] font-medium">{problem.direction}</p>
      </div>
    </motion.div>
  );
}

function MasonrySolutionCard({ solution, index, heightClass }: { solution: typeof solutions[0], index: number, heightClass: string }) {
  return (
    <motion.div 
      variants={revealUp} 
      whileHover={cardHover}
      tabIndex={0}
      className={`group relative w-full ${heightClass} rounded-[16px] overflow-hidden bg-[#121212] border border-white/10 hover:border-[#58E6A9]/40 focus:border-[#58E6A9]/40 transition-colors duration-300 cursor-default focus:outline-none focus-within:ring-2 focus-within:ring-[#58E6A9]`}
    >
      <Image 
        src={solution.image} 
        alt={solution.title} 
        fill 
        sizes="(max-w: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus:scale-[1.03]" 
      />
      
      <div className="absolute top-0 left-0 right-0 p-6 z-20 flex items-start justify-between bg-gradient-to-b from-[#080808]/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-[#58E6A9] text-[12px] font-mono border border-[#58E6A9]/40 bg-[#080808]/40 backdrop-blur-sm px-2 py-0.5 rounded-[4px]">
            0{index + 1}
          </span>
          <h3 className="text-[18px] md:text-[20px] font-medium text-[#F5F5F5] drop-shadow-md">
            {solution.title}
          </h3>
        </div>
        <ArrowDownRight className="text-white/50 group-hover:text-[#58E6A9] transition-colors duration-300 hidden md:block" size={20} />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none">
        <div className="relative w-full h-full md:opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-4 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
            <div>
              <span className="text-[#71717A] font-mono text-[11px] uppercase block mb-1">Problem</span>
              <p className="text-[#A1A1AA] text-[14px] leading-[1.6]">{solution.problem}</p>
            </div>
            <div>
              <span className="text-[#58E6A9] font-mono text-[11px] uppercase block mb-1">Design Move</span>
              <p className="text-[#F5F5F5] text-[14px] leading-[1.6] font-medium">{solution.designMove}</p>
            </div>
            <div>
              <span className="text-[#71717A] font-mono text-[11px] uppercase block mb-1">Value</span>
              <p className="text-[#A1A1AA] text-[14px] leading-[1.6]">{solution.value}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 主页面
// ==========================================

export default function PremiumEnergyPortfolio() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] font-sans selection:bg-[#58E6A9]/30 selection:text-white antialiased">
      {zoomImage && <ImageLightbox src={zoomImage} alt="Expanded View" onClose={() => setZoomImage(null)} />}

      <nav className="fixed top-0 w-full z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-[13px] font-medium text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
        </div>
      </nav>

      <main className="relative pt-16">
        
        {/* ==========================================
            01. 项目概览｜Hero 非对称首屏
            ========================================== */}
        <section className="relative w-full min-h-screen lg:min-h-[900px] flex items-center bg-[#080808] overflow-hidden py-16 lg:py-0 border-b border-white/10">
          
          <div 
            className="hidden lg:block absolute inset-y-0 right-0 w-[68%] xl:w-[72%] h-full z-0 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 100%)'
            }}
          >
            <Image src={GPS_IMAGES.hero} alt="Hero Cover" fill className="object-cover object-right opacity-80" priority />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, #080808 0%, rgba(8,8,8,0.72) 24%, rgba(8,8,8,0.28) 40%, rgba(8,8,8,0) 55%, rgba(8,8,8,0) 100%)",
              }}
            ></div>
          </div>

          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-20">
            <motion.div initial="hidden" animate="visible" variants={staggerFast} className="flex flex-col justify-center max-w-[620px]">
              <motion.h1 variants={revealUp} className="text-[40px] md:text-[48px] lg:text-[56px] font-medium text-[#F5F5F5] leading-[1.15] tracking-tight mb-4 drop-shadow-lg">
                {projectMeta.title}
              </motion.h1>
              <motion.p variants={revealUp} className="text-[16px] md:text-[18px] font-medium text-[#D4D4D8] mb-5 leading-[1.6]">
                {projectMeta.subtitle}
              </motion.p>
              <motion.p variants={revealUp} className="text-[14px] md:text-[15px] text-[#A1A1AA] leading-[1.7] mb-8 lg:max-w-[85%]">
                {projectMeta.description}
              </motion.p>
              <motion.div variants={revealUp} className="flex flex-wrap gap-2 mb-10">
                {projectMeta.tags.map((chip, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#121212]/80 backdrop-blur border border-white/10 rounded-[6px] text-[12px] text-[#A1A1AA]">
                    {chip}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={revealUp} className="grid grid-cols-2 gap-y-4 gap-x-4 text-[13px] border-t border-white/10 pt-6">
                {projectMeta.roles.map((meta, idx) => (
                  <div key={idx}>
                    <span className="text-[#58E6A9] block text-[11px] font-mono mb-1">{meta.label}</span>
                    <span className="text-[#E4E4E7] leading-snug">{meta.value}</span>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={revealUp} className="text-[12px] text-[#71717A] mt-6 bg-[#080808]/50 inline-block px-3 py-1.5 rounded-[4px] backdrop-blur self-start">
                注：本项目中的“载体”指能源运输场景中的移动运载对象。
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:hidden w-full h-[320px] sm:h-[400px] mt-12 relative rounded-[16px] overflow-hidden border border-white/10"
            >
              <Image src={GPS_IMAGES.hero} alt="Hero Cover" fill className="object-cover object-right" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            02. 项目背景｜左4/右8 信息布局
            ========================================== */}
        <section className="relative bg-gradient-to-b from-[#FFFFFF] to-[#FAFAFA] py-20 lg:py-24 border-b border-[#E5E5E5] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#18181B 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#58E6A9] text-[13px] font-mono font-medium">02</span>
                  <span className="w-8 h-[1px] bg-[#18181B]/10"></span>
                  <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#A1A1AA]">PROJECT BACKGROUND</span>
                </div>
                <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-3 text-[#18181B]">项目背景</h2>
                <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#3F3F46]">
                  多区域、多运输对象并行调度，传统人工确认方式难以及时响应异常
                </p>
              </motion.div>

              <div className="lg:col-span-8 flex flex-col gap-8">
                <motion.p variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-[14px] md:text-[15px] leading-[1.7] text-[#71717A]">
                  随着运输规模扩大，管理者需要在移动场景下同时掌握多区域、多运输对象的运行状态。传统方式依赖人工查找、电话确认和事后记录，导致异常发现慢、处理链路断裂，后续复盘和责任界定成本较高。
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {backgroundProblems.map((prob, idx) => (
                    <motion.div 
                      key={idx} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }}
                      whileHover={cardHover}
                      className="bg-white/80 border border-[#E5E5E5] rounded-[14px] px-6 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.04)] h-[104px] flex flex-col justify-between cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-mono text-[#71717A]">0{idx + 1}</span>
                        <span className="w-2 h-2 rounded-full bg-[#58E6A9]"></span>
                      </div>
                      <h4 className="text-[15px] font-medium text-[#18181B]">{prob.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            03. 核心问题｜左标题 + 右 2×2 问题卡矩阵
            ========================================== */}
        <section className="bg-[#F4F4F5] py-20 lg:py-28 border-b border-[#E5E5E5]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24 max-w-[420px]">
                <SectionHeader 
                  num="03" 
                  enTitle="CORE PROBLEMS"
                  title="核心问题" 
                  subtitle="我将现场问题拆成四类判断成本：位置是否可信、路径能否回看、区域边界是否清晰、告警是否能被优先处理。" 
                />
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  {coreProblems.map((prob, idx) => (
                    <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }}>
                      <ProblemCard problem={prob} index={idx} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            04. 设计目标与约束｜清透玻璃面板
            ========================================== */}
        <section className="bg-[#080808] py-20 lg:py-24 border-b border-white/10 relative overflow-hidden">
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#58E6A9]/[0.035] blur-[120px] rounded-full pointer-events-none"
            {...bgGlowAnim}
          />

          <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#121212]/80 px-8 md:px-12 py-10 md:py-12 shadow-[0_32px_120px_rgba(0,0,0,0.45)]">
              
              <Image src={GPS_IMAGES.mapBg} fill className="object-cover object-center opacity-30 pointer-events-none" alt="Map Background" />
              <div className="absolute inset-0 bg-[#080808]/62 backdrop-blur-[2px] pointer-events-none"></div>

              <div className="relative z-10">
                <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-col items-center text-center mb-8 md:mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#58E6A9] text-[13px] font-mono font-medium">04</span>
                    <span className="w-8 h-[1px] bg-white/20"></span>
                    <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#71717A]">GOALS & CONSTRAINTS</span>
                  </div>
                  <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-3 text-[#F5F5F5]">设计目标与约束</h2>
                  <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#D4D4D8] max-w-[600px]">
                    将人工确认流程转化为可查看、可判断、可追溯的移动端操作链路
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={cardHover}
                    className="bg-white/[0.028] backdrop-blur-2xl border border-white/[0.06] rounded-[24px] p-7 md:p-8 min-h-[220px] flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_24px_80px_rgba(0,0,0,0.18)] cursor-default"
                  >
                    <span className="block w-6 h-[1.5px] bg-[#58E6A9] mb-5 opacity-80"></span>
                    <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-3">设计目标</h3>
                    <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#A1A1AA]">
                      本项目的设计目标，是将原本依赖电话沟通和人工判断的运输管理流程，转化为更清晰的移动端任务链路。通过实时定位、区域边界、告警分级和轨迹回溯，帮助用户在移动场景下更快完成异常发现、风险判断、处理确认和事后复盘。
                    </p>
                  </motion.div>

                  <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={cardHover}
                    className="bg-white/[0.028] backdrop-blur-2xl border border-white/[0.06] rounded-[24px] p-7 md:p-8 min-h-[220px] flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_24px_80px_rgba(0,0,0,0.18)] cursor-default"
                  >
                    <span className="block w-6 h-[1.5px] bg-[#58E6A9] mb-5 opacity-80"></span>
                    <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-3">设计约束</h3>
                    <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#A1A1AA]">
                      这个项目的主要约束来自移动端使用场景：屏幕空间有限、地图信息复杂、定位存在延迟、异常处理需要及时响应，同时现场用户仍保留电话确认习惯。因此，设计不能直接复刻后台式信息平铺，而需要围绕“发现异常—判断风险—处理确认—事后追溯”重组信息层级。
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            05. 设计策略｜左文右表单列表
            ========================================== */}
        <section className="bg-white py-20 lg:py-24 border-b border-[#E5E5E5] relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#58E6A9]/[0.03] blur-[120px] rounded-full"></div>
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#58E6A9] text-[13px] font-mono font-medium">05</span>
                  <span className="w-8 h-[1px] bg-[#18181B]/10"></span>
                  <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#A1A1AA]">DESIGN STRATEGY</span>
                </div>
                <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-3 text-[#18181B]">设计策略</h2>
                <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#3F3F46] mb-6">
                  以异常处理链路重组移动端信息优先级
                </p>
                <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#71717A]">
                  移动端不能承载完整后台的信息密度。我的设计策略是从一次运输任务的判断链路出发，倒推用户在手机端最需要优先看到的信息。
                </p>
              </motion.div>

              <div className="lg:col-span-8 flex flex-col">
                {strategyPrinciples.map((prin, idx) => (
                  <motion.div 
                    key={idx} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    className={`flex flex-col md:grid md:grid-cols-[96px_1fr_1.25fr] gap-4 md:gap-8 items-start md:items-center min-h-[112px] py-7 px-4 -mx-4 rounded-[12px] hover:bg-[#FAFAFA] transition-colors duration-300 border-t border-[#E4E4E7] ${idx === strategyPrinciples.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className="text-[#58E6A9] text-[28px] md:text-[32px] font-mono">0{idx + 1}</div>
                    <h4 className="text-[#18181B] text-[18px] font-semibold">{prin.title}</h4>
                    <p className="text-[#71717A] text-[14px] md:text-[15px] leading-[1.75] md:border-l md:border-dashed md:border-[#D4D4D8] md:pl-8">
                      {prin.text}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            06. 核心方案｜黑灰背景大图瀑布流
            ========================================== */}
        <section className="bg-[#0C0C0C] py-20 lg:py-32 border-b border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader 
              num="06" 
              enTitle="CORE SOLUTIONS"
              title="核心方案" 
              subtitle="四个关键设计动作，补齐移动端异常处理链路" 
              dark 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start mt-8">
              <div className="flex flex-col gap-6 lg:gap-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0 }}>
                  <MasonrySolutionCard solution={solutions[0]} index={0} heightClass="h-[460px] md:h-[620px]" />
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1 }}>
                  <MasonrySolutionCard solution={solutions[2]} index={2} heightClass="h-[460px] md:h-[620px]" />
                </motion.div>
              </div>
              <div className="flex flex-col gap-6 lg:gap-8 pt-0 md:pt-20">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0 }}>
                  <MasonrySolutionCard solution={solutions[1]} index={1} heightClass="h-[460px] md:h-[620px]" />
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1 }}>
                  <MasonrySolutionCard solution={solutions[3]} index={3} heightClass="h-[460px] md:h-[620px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            07. 异常处理链路｜岩黑玻璃面板
            ========================================== */}
        <section className="bg-[#0A0A0A] py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
          
          <motion.div
            className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#58E6A9]/[0.018] blur-[120px] rounded-full pointer-events-none"
            {...bgGlowAnim}
          />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className="lg:col-span-5">
                <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#58E6A9] text-[13px] font-mono font-medium">07</span>
                    <span className="w-8 h-[1px] bg-white/20"></span>
                    <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#71717A]">WORKFLOW RESTRUCTURE</span>
                  </div>
                  <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-3 text-[#F5F5F5]">异常处理链路</h2>
                  <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#D4D4D8] mb-6">
                    从实时定位到路径回溯，形成完整的移动端处理闭环
                  </p>
                  <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#A1A1AA]">
                    这套设计的核心，不是单纯展示定位数据，而是让用户能够在移动端完成异常发现、风险判断、处理确认和事后追溯。
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                  <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={cardHover} 
                    className="bg-white/[0.035] backdrop-blur-xl border border-white/[0.08] rounded-[12px] p-5 cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#71717A]"></div>
                      <span className="text-[#71717A] text-[12px] font-mono uppercase tracking-wider">Before</span>
                    </div>
                    <p className="text-[13px] text-[#A1A1AA] leading-[1.6]">用户需要人工查位置、电话确认、事后补记录。</p>
                  </motion.div>
                  <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={cardHover} 
                    className="bg-white/[0.035] backdrop-blur-xl border border-white/[0.08] rounded-[12px] p-5 relative overflow-hidden cursor-default"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#58E6A9]/70"></div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#58E6A9]"></div>
                      <span className="text-[#58E6A9] text-[12px] font-mono uppercase tracking-wider">After</span>
                    </div>
                    <p className="text-[13px] text-[#F5F5F5] leading-[1.6]">系统在运行中呈现位置、判断边界、触发告警，并沉淀轨迹与处理记录。</p>
                  </motion.div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} 
                  className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[#71717A] text-[12px] font-mono uppercase tracking-widest">WORKFLOW STEPS</span>
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                    {workflowSteps.map((step, idx) => {
                      const Icon = workflowIcons[idx];
                      return (
                        <motion.div 
                          key={idx} 
                          variants={revealUp}
                          whileHover={cardHover}
                          className="group relative flex gap-4 min-h-[118px] p-5 bg-white/[0.035] backdrop-blur-xl border border-white/[0.08] rounded-[16px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cursor-default transition-all duration-300 hover:border-[#58E6A9]/35 hover:shadow-[0_0_36px_rgba(88,230,169,0.14)]"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 border-white/[0.10] text-[#A1A1AA] bg-white/[0.04] group-hover:border-[#58E6A9]/35 group-hover:text-[#58E6A9] group-hover:bg-[#58E6A9]/10">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="text-[12px] font-mono mb-1 text-[#71717A]">0{idx + 1}</div>
                            <p className="text-[14px] leading-[1.5] text-[#D4D4D8]">{step}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            08. 项目价值｜岩石灰偏黑信息图
            ========================================== */}
        <section className="bg-[#111111] py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2A2A2A]/20 blur-[160px] rounded-full pointer-events-none"
            {...bgGlowAnim}
          />
          <motion.div 
            className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none"
            {...bgGlowAnim}
          />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#58E6A9] text-[13px] font-mono font-medium">08</span>
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#71717A]">PROJECT VALUE</span>
                </div>
                <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-3 text-[#F5F5F5]">项目价值</h2>
                <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#D4D4D8] mb-6">
                  缩短异常发现、判断与追溯的响应周期
                </p>
                <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#A1A1AA]">
                  项目上线后，团队基于业务反馈与任务记录对异常处理效率进行复盘。结果显示，异常等待、定位匹配和人工求助频率均有改善。
                </p>
              </motion.div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[150px_150px_150px_minmax(320px,1fr)] gap-4">
                  {results.map((res, idx) => {
                    return (
                      <motion.div 
                        key={idx} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }}
                        whileHover={cardHover}
                        className="min-h-[220px] bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-[16px] p-5 flex flex-col items-center justify-center text-center cursor-default"
                      >
                        <div className="text-[42px] lg:text-[48px] font-mono text-[#58E6A9] mb-3 leading-none">{res.value}</div>
                        <div className="text-[#A1A1AA] text-[14px] leading-[1.6]">{res.label}</div>
                      </motion.div>
                    );
                  })}

                  <motion.div 
                    variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4 }}
                    whileHover={cardHover}
                    className="min-h-[220px] bg-white/[0.035] backdrop-blur-xl border border-[#58E6A9]/20 rounded-[16px] p-6 flex flex-col justify-center cursor-default transition-all duration-300 hover:border-[#58E6A9]/40"
                  >
                    <h4 className="text-[15px] text-[#58E6A9] font-medium mb-5">核心业务增益</h4>
                    <ul className="flex flex-col gap-3.5">
                      {valuePoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[13px] md:text-[14px] text-[#F5F5F5]">
                          <CheckCircle2 size={16} className="text-[#58E6A9] flex-shrink-0 mt-0.5" />
                          <span className="xl:whitespace-nowrap">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            09. 项目复盘｜深灰强化观点收尾
            ========================================== */}
        <section className="bg-[#0D0D0D] py-20 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div 
              variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={cardHover}
              className="bg-white/[0.035] backdrop-blur-xl border border-white/[0.08] rounded-[20px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-default"
            >
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#58E6A9] text-[13px] font-mono font-medium">09</span>
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  <span className="text-[#71717A] text-[12px] font-mono uppercase tracking-[0.18em]">PROJECT REVIEW</span>
                </div>
                <h2 className="text-[24px] md:text-[28px] font-medium text-[#F5F5F5] leading-[1.5]">
                  移动端复杂业务设计，重点不是压缩信息，而是重组判断路径
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#D4D4D8]">
                  复杂业务进入移动端，不能直接搬运 PC 后台逻辑。设计重点不是展示更多信息，而是降低查找、判断和处理成本，把有限屏幕留给最高风险状态和关键操作。
                </p>
                <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#A1A1AA]">
                  同时，现场长期形成的电话沟通习惯不会因系统上线立即消失。系统能先提升信息透明度和追溯能力，后续仍需要通过规则、培训和使用反馈逐步改变协作习惯。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/10 py-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center text-[12px] font-mono text-[#71717A]">
          © 2026 Miki Portfolio. B-End Deep Complex Experience Architecture.
        </div>
      </footer>
    </div>
  );
}