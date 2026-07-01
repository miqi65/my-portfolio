"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// ==========================================
// 常量与文案
// ==========================================
const GPS_IMAGES = {
  hero: "/国家能源/project/assets/gps-hero-command-map.png",
  overview: "/国家能源/project/assets/solution-overview.png",
  zone: "/国家能源/project/assets/zone-management.png",
  trajectory: "/国家能源/project/assets/trajectory.png",
  alert: "/国家能源/project/assets/alert-list.png",
  stats: "/国家能源/project/assets/stats-screen.png",
  context: "/国家能源/project/assets/info-display.jpg",
};

const backgroundProblems = [
  "多运输对象难兼顾",
  "电话沟通确认慢",
  "事后追溯定责难",
];

const coreProblems = [
  {
    title: "位置状态不够可信",
    text: "移动端呈现的位置常有延迟，紧急情况下仍需反复电话确认，影响现场异常判断速度。",
  },
  {
    title: "路径过程难以回看",
    text: "移动场景下往往只能看到当前孤立点位，缺少完整轨迹记录，异常发生后复盘困难。",
  },
  {
    title: "区域边界不够清晰",
    text: "运输载体按区域调度，但在地图上缺乏明确的空间边界，跨区管理极易产生遗漏。",
  },
  {
    title: "告警信息缺少优先级",
    text: "所有状态提醒在移动端一次性堆叠，屏幕空间有限，用户难以快速锁定高风险重点。",
  },
];

const capabilities = [
  {
    title: "运行状态优先",
    text: "移动端首屏只提供最核心判断依据，聚焦当前正在运行和处于风险中的对象。",
  },
  {
    title: "地图信息分层",
    text: "通过电子围栏建立明确的空间管理边界，将复杂的地理信息进行视觉层级降噪。",
  },
  {
    title: "异常先分级再处理",
    text: "告警系统优先呈现高危异常，将处理动作从“事后被动发现”转为“运行中主动干预”。",
  },
  {
    title: "过程可回溯",
    text: "动态运输过程沉淀为静态历史记录，补齐从现场发现到事后定责的管理闭环。",
  }
];

const flow = [
  "查看运输对象实时位置",
  "判断是否进入 / 偏离指定区域",
  "系统触发异常状态或告警",
  "用户查看告警详情与轨迹信息",
  "用户确认并处理异常",
  "历史轨迹和处理记录沉淀为追溯依据",
];

const results = [
  { value: "-23%", label: "异常预警等待时长减少 23%" },
  { value: "+17%", label: "目的地定位匹配准确性提升 17%" },
  { value: "-10%", label: "任务执行中的人工求助率降低 10%" },
];

// ==========================================
// 动效预设
// ==========================================
const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ==========================================
// Lightbox 全屏看图系统
// ==========================================
function ImageLightbox({ src, alt, onClose }: { src: string, alt: string, onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[#05070D]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
        onClick={onClose}
      >
        <button className="absolute top-6 right-6 text-[#8A96A8] hover:text-[#F4F7FB] transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md">
          <X size={24} />
        </button>
        <div className="relative w-full max-w-[90vw] h-[85vh] cursor-default" onClick={(e) => e.stopPropagation()}>
          <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" priority />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ==========================================
// ProductShotFrame 统一截图系统
// ==========================================
interface ProductShotFrameProps {
  src: string;
  alt: string;
  caption?: string;
  size?: "large" | "medium" | "wide";
  theme?: "dark" | "light";
  onZoom: (src: string) => void;
}

function ProductShotFrame({ src, alt, caption, size = "medium", theme = "dark", onZoom }: ProductShotFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    large: "h-[340px] md:h-[520px]",
    medium: "h-[300px] md:h-[440px]",
    wide: "h-[360px] md:h-[620px]"
  };

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#0D111A]" : "bg-[#FFFFFF]";
  const borderClass = isDark ? "border-white/10" : "border-[#E2E5E9]";
  const textClass = isDark ? "text-[#8A96A8]" : "text-[#64748B]";
  const pulseClass = isDark ? "bg-[#121722]" : "bg-[#F6F7F8]";

  return (
    <div className="w-full flex flex-col gap-3 group">
      <div 
        className={`relative w-full overflow-hidden border transition-all duration-400 ease-out rounded-[8px] md:rounded-[12px] hover:-translate-y-[3px] cursor-zoom-in hover:border-[#58E6A9]/40 ${sizeClasses[size]} ${bgClass} ${borderClass}`}
        onClick={() => onZoom(src)}
      >
        {!isLoaded && !hasError && <div className={`absolute inset-0 animate-pulse z-0 ${pulseClass}`} />}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono tracking-widest text-current opacity-50">
            IMAGE OFFLINE
          </div>
        ) : (
          <>
            <Image
              src={src} alt={alt} fill sizes="(max-w: 1280px) 100vw, 1280px"
              className={`object-contain p-2 md:p-6 transition-all duration-700 ease-out z-10 group-hover:scale-[1.015] ${isLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsLoaded(true)} onError={() => setHasError(true)}
            />
            <div className="absolute inset-0 bg-[#58E6A9]/0 group-hover:bg-[#58E6A9]/5 transition-colors duration-300 z-20 pointer-events-none" />
            <div className="absolute top-4 right-4 bg-[#05070D]/60 backdrop-blur border border-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
              <ZoomIn size={16} />
            </div>
          </>
        )}
      </div>
      {caption && (
        <p className={`text-[12px] font-mono tracking-wide text-center uppercase ${textClass}`}>
          {caption}
        </p>
      )}
    </div>
  );
}

// ==========================================
// Hero Background Component
// ==========================================
function HeroBgImage({ src, className, imgClassName }: { src: string, className?: string, imgClassName?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={className}>
      <Image 
        src={src} alt="Hero Cover" fill priority sizes="(max-w: 1024px) 100vw, 75vw"
        className={`transition-opacity duration-700 z-10 ${imgClassName} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

// ==========================================
// SectionHeader
// ==========================================
function SectionHeader({ num, en, cn, subtitle, dark = false, divider = true }: { num: string, en: string, cn: string, subtitle?: string, dark?: boolean, divider?: boolean }) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealUp}
      className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 opacity-90 pb-4 ${divider ? "border-b border-current" : ""}`}
      style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "#E2E5E9" }}
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#58E6A9] text-[12px] font-mono font-medium">{num}</span>
          <span className="w-4 h-[1px] bg-[#58E6A9]/40"></span>
          <span className="text-[#8A96A8] text-[11px] font-mono tracking-widest uppercase">{en}</span>
        </div>
        <h2 className={`text-[24px] md:text-[32px] font-medium tracking-tight ${dark ? "text-[#F4F7FB]" : "text-[#111827]"}`}>{cn}</h2>
        {subtitle && (
          <p className={`mt-3 text-[16px] md:text-[18px] font-medium leading-[1.6] ${dark ? "text-[#B8C3D6]" : "text-[#64748B]"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ==========================================
// Main Page Layout
// ==========================================
export default function PremiumEnergyPortfolio() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#05070D] font-sans selection:bg-[#58E6A9]/30 selection:text-white antialiased">
      
      {zoomImage && <ImageLightbox src={zoomImage} alt="Expanded View" onClose={() => setZoomImage(null)} />}

      {/* Global Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.015] [background-image:linear-gradient(#F4F7FB_1px,transparent_1px),linear-gradient(90deg,#F4F7FB_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <nav className="fixed top-0 w-full z-50 bg-[#05070D]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between relative z-10">
          <Link href="/#cases" className="flex items-center gap-2 text-sm font-medium text-[#8A96A8] hover:text-[#F4F7FB] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#8A96A8] uppercase font-mono hidden sm:block">
            NATIONAL ENERGY · GPS TRACKING SYSTEM
          </div>
        </div>
      </nav>

      <main className="relative z-[1] overflow-x-hidden">
        
        {/* ==========================================
            01. HERO
            ========================================== */}
        <motion.section initial="hidden" animate="visible" variants={staggerFast} className="relative w-full min-h-screen lg:min-h-[900px] flex items-center bg-[#05070D] overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0">
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.03 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute inset-0 z-0 pointer-events-none"
          >
            <HeroBgImage src={GPS_IMAGES.hero} className="absolute inset-0 w-full h-full" imgClassName="object-cover object-center opacity-90" />
          </motion.div>

          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none w-full" style={{ background: "linear-gradient(to right, #05070D 0%, rgba(5,7,13,0.96) 30%, rgba(5,7,13,0.72) 46%, rgba(5,7,13,0.2) 64%, rgba(5,7,13,0.08) 100%)" }} />
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_72%_52%,rgba(88,230,169,0.14),transparent_28%),linear-gradient(to_bottom,rgba(5,7,13,0.78)_0%,transparent_24%,rgba(5,7,13,0.84)_100%)]" />

          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-[620px]">
                
                <motion.div variants={revealUp} className="text-[11px] lg:text-[12px] font-mono text-[#8A96A8] tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                  <span>GPS TRACKING & FLEET MANAGEMENT</span>
                </motion.div>

                <motion.h1 variants={revealUp} className="text-[40px] md:text-[48px] lg:text-[62px] font-medium text-[#F4F7FB] leading-[1.12] tracking-tight mb-4">
                  国家能源｜轨迹定位跟踪 App
                </motion.h1>

                <motion.p variants={revealUp} className="text-[18px] font-medium text-[#B8C3D6] mb-6">
                  面向能源运输场景的移动端定位、告警与轨迹追溯工具
                </motion.p>

                <motion.div variants={revealUp} className="text-[16px] lg:text-[17px] text-[#8A96A8] leading-[1.75] mb-8 max-w-[600px] space-y-4">
                  <p>将原本依赖人工确认的运输状态管理，转化为可实时查看、异常判断、快速处理和路径回溯的移动端操作流程。</p>
                </motion.div>

                <motion.div variants={revealUp} className="flex flex-wrap gap-2 mb-10">
                  {['实时定位', '电子围栏', '告警处理', '轨迹回溯', '信息统计'].map((chip, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0D111A] border border-white/[0.14] rounded-[4px] text-[12px] text-[#A8B3C5] hover:border-[#58E6A9]/50 transition-colors duration-200 cursor-default">
                      {chip}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={revealUp} className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 text-[13px] text-[#A8B3C5] border-l border-[#58E6A9]/30 pl-4 mb-8">
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Role</span>主设计师</div>
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Scope</span>体验策略｜核心流程｜UI 设计</div>
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Deliverables</span>移动端 App</div>
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Timeline</span>1 个月</div>
                </motion.div>
                
                <motion.p variants={revealUp} className="text-[12px] text-[#6F7B8D] border-t border-white/5 pt-4 inline-block">
                  注：本项目中的“载体”指能源运输场景中的移动运载对象。
                </motion.p>
              </div>
              
              <motion.div variants={revealUp} className="lg:hidden relative w-full h-[300px] mt-4">
                <HeroBgImage src={GPS_IMAGES.hero} className="absolute inset-0 w-full h-full rounded-[16px] border border-white/10 overflow-hidden" imgClassName="object-cover object-center bg-[#0D111A]" />
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            02. 业务背景
            ========================================== */}
        <section className="bg-[#FFFFFF] text-[#111827] py-24 border-b border-[#E2E5E9]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            
            <SectionHeader num="02" en="Business Context" cn="业务背景" subtitle="多区域、多载体调度，亟需打破人工低效确认的僵局" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-5 flex flex-col gap-4 text-[15px] leading-[1.75] text-[#374151]">
                <p>
                  随着业务规模扩大，管理者需要在移动场景下同时关注多区域、多运输对象的运行状态。
                  由于传统方式下位置信息滞后，异常发生后极度依赖线下人工查找和反复电话沟通，导致响应慢，且追溯困难。
                </p>
                <div className="mt-4 pt-4 border-t border-[#E2E5E9] font-medium text-[#111827]">
                  现场作业环境带来的核心阻力：
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {backgroundProblems.map((problem, index) => (
                    <div key={index} className="bg-[#F6F7F8] border border-[#E2E5E9] rounded-[6px] p-6 relative overflow-hidden flex flex-col justify-center min-h-[120px]">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#58E6A9]" />
                      <span className="text-[#8A96A8] text-[11px] font-mono mb-2">{`[0${index + 1}]`}</span>
                      <h4 className="text-[16px] font-medium text-[#111827]">{problem}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}>
              <ProductShotFrame src={GPS_IMAGES.context} alt="能源运输场景背景图" size="large" theme="light" onZoom={setZoomImage} caption="Transportation Context｜能源运输现场场景" />
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            03. 核心问题
            ========================================== */}
        <section className="bg-[#F6F7F8] text-[#111827] py-24 border-b border-[#E2E5E9]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader num="03" en="Core Problems" cn="核心问题" subtitle="不仅仅是位置滞后，更是移动端异常处理链路的断裂" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {coreProblems.map((problem, index) => (
                <motion.div 
                  key={index} 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp}
                  className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[8px] p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="text-[#8A96A8] text-[11px] font-mono mb-4 block">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-[18px] font-medium text-[#111827] mb-3">{problem.title}</h3>
                  <p className="text-[14px] leading-[1.65] text-[#64748B]">{problem.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[8px] overflow-x-auto shadow-sm">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[#F6F7F8] border-b border-[#E2E5E9] text-[12px] text-[#64748B] uppercase font-mono">
                    <th className="p-5 w-[45%]">Observation｜现场问题</th>
                    <th className="p-5 w-[10%] text-center"></th>
                    <th className="p-5 w-[45%]">Design Direction｜设计方向</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["位置状态不够可信", "优先呈现运行中载体的位置、方向与状态"],
                    ["运行路径难以回看", "增加历史轨迹与路径回溯功能"],
                    ["区域管理边界模糊", "用电子围栏建立直观的空间约束"],
                    ["告警信息缺少优先级", "告警按紧急程度和时间顺序分层处理"]
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E2E5E9] last:border-0 hover:bg-[#F6F7F8]/50 transition-colors">
                      <td className="p-5 text-[14px] text-[#374151] font-medium leading-[1.6]">{row[0]}</td>
                      <td className="p-5 text-center text-[#8A96A8]"><ArrowRight size={16} className="mx-auto" /></td>
                      <td className="p-5 text-[14px] text-[#111827] font-medium leading-[1.6]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==========================================
            04. 设计策略与原则
            ========================================== */}
        <section className="bg-[#FFFFFF] text-[#111827] py-24 border-b border-[#E2E5E9]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader num="04" en="Strategy Memo" cn="设计策略" subtitle="围绕一次运输任务，重组移动端信息优先级" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-12">
                <p className="text-[16px] text-[#374151] leading-[1.75] max-w-[800px]">
                  移动端屏幕空间极小，无法承载传统后台平铺式的信息罗列。我从用户完成一次运输任务所需的判断链路出发，倒推移动端需要优先呈现的核心信息：当前位置、运行状态、区域边界、异常等级、处理记录。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {capabilities.map((item, index) => (
                <div key={index} className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[8px] p-6 hover:border-[#58E6A9]/60 transition-colors flex flex-col">
                  <div className="text-[#58E6A9] font-mono text-[16px] font-bold mb-3">Rule 0{index + 1}.</div>
                  <h3 className="text-[17px] font-medium text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#64748B] leading-[1.65] mt-auto">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            05. 设计方案
            ========================================== */}
        <section className="bg-[#05070D] py-24 text-[#F4F7FB] border-b border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader num="05" en="Core Solutions" cn="设计方案" subtitle="四个关键决策，构建高效移动端任务流" dark />

            {/* Solution 01 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <ProductShotFrame src={GPS_IMAGES.overview} alt="首页运行状态概览" size="medium" theme="dark" onZoom={setZoomImage} caption="Status Priority｜优先展示运行对象" />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="text-[#58E6A9] text-[11px] font-mono tracking-widest uppercase block mb-2">Decision 01</span>
                  <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">运行对象优先展示</h3>
                </div>
                <div className="bg-[#121722] border-l-2 border-[#58E6A9] p-5 rounded-r-[6px] text-[13px] border-y border-r border-y-white/5 border-r-white/5">
                  <div className="mb-3"><span className="text-[#8A96A8] font-mono block text-[11px] uppercase mb-1">Problem</span>移动端屏幕有限，将所有静止与运行载体平铺会导致严重的信息过载。</div>
                  <div className="mb-3"><span className="text-[#58E6A9] font-mono block text-[11px] uppercase mb-1">Design Move</span>默认过滤非活跃信息，优先呈现当前正在运行或处于风险状态的对象。</div>
                  <div><span className="text-[#F4F7FB] font-mono block text-[11px] uppercase mb-1">Value</span>缩短核心目标的查找路径，让用户在小屏上也能第一时间关注到高危载体。</div>
                </div>
              </div>
            </motion.div>

            {/* Solution 02 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 lg:order-2">
                <ProductShotFrame src={GPS_IMAGES.zone} alt="围栏分区界面" size="medium" theme="dark" onZoom={setZoomImage} caption="Geo-fence Boundary｜管理边界可视" />
              </div>
              <div className="lg:col-span-5 lg:order-1 flex flex-col gap-6">
                <div>
                  <span className="text-[#58E6A9] text-[11px] font-mono tracking-widest uppercase block mb-2">Decision 02</span>
                  <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">用电子围栏定义区域边界</h3>
                </div>
                <div className="bg-[#121722] border-l-2 border-[#58E6A9] p-5 rounded-r-[6px] text-[13px] border-y border-r border-y-white/5 border-r-white/5">
                  <div className="mb-3"><span className="text-[#8A96A8] font-mono block text-[11px] uppercase mb-1">Problem</span>过去载体归属只是一行文字，缺乏直观的空间边界约束，跨区管理极易越界。</div>
                  <div className="mb-3"><span className="text-[#58E6A9] font-mono block text-[11px] uppercase mb-1">Design Move</span>引入电子围栏，将复杂的管理层级转化为地图上可视化的多维空间边界。</div>
                  <div><span className="text-[#F4F7FB] font-mono block text-[11px] uppercase mb-1">Value</span>让越界异常一目了然，用系统约束取代人工记忆。</div>
                </div>
              </div>
            </motion.div>

            {/* Solution 03 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <ProductShotFrame src={GPS_IMAGES.alert} alt="告警列表界面" size="medium" theme="dark" onZoom={setZoomImage} caption="Alert Priority｜告警按紧急程度分级" />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="text-[#58E6A9] text-[11px] font-mono tracking-widest uppercase block mb-2">Decision 03</span>
                  <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">按优先级组织告警</h3>
                </div>
                <div className="bg-[#121722] border-l-2 border-[#58E6A9] p-5 rounded-r-[6px] text-[13px] border-y border-r border-y-white/5 border-r-white/5">
                  <div className="mb-3"><span className="text-[#8A96A8] font-mono block text-[11px] uppercase mb-1">Problem</span>常规消息与紧急警告全部堆叠在列表内，管理员在手机端极易漏看关键风险。</div>
                  <div className="mb-3"><span className="text-[#58E6A9] font-mono block text-[11px] uppercase mb-1">Design Move</span>将杂乱的信息流先按异常等级硬性分层，再按时间倒序推送。</div>
                  <div><span className="text-[#F4F7FB] font-mono block text-[11px] uppercase mb-1">Value</span>剔除视觉噪音，确保核心人力永远优先扑向最高风险的异常。</div>
                </div>
              </div>
            </motion.div>

            {/* Solution 04 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 lg:order-2">
                <ProductShotFrame src={GPS_IMAGES.trajectory} alt="轨迹回放界面" size="medium" theme="dark" onZoom={setZoomImage} caption="Trajectory Review｜路径回溯闭环" />
              </div>
              <div className="lg:col-span-5 lg:order-1 flex flex-col gap-6">
                <div>
                  <span className="text-[#58E6A9] text-[11px] font-mono tracking-widest uppercase block mb-2">Decision 04</span>
                  <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">用路径回溯补齐追溯闭环</h3>
                </div>
                <div className="bg-[#121722] border-l-2 border-[#58E6A9] p-5 rounded-r-[6px] text-[13px] border-y border-r border-y-white/5 border-r-white/5">
                  <div className="mb-3"><span className="text-[#8A96A8] font-mono block text-[11px] uppercase mb-1">Problem</span>仅有当前孤立的定位点无法还原事故全貌，事后追溯和定责往往陷入扯皮。</div>
                  <div className="mb-3"><span className="text-[#58E6A9] font-mono block text-[11px] uppercase mb-1">Design Move</span>增加历史轨迹回看功能，结构化标记出异常点的时间与位置，支持回放验证。</div>
                  <div><span className="text-[#F4F7FB] font-mono block text-[11px] uppercase mb-1">Value</span>将流动的运输过程凝固为不可篡改的系统证据，彻底补齐管理闭环。</div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            06. 系统流程
            ========================================== */}
        <section className="bg-[#05070D] py-24 text-[#F4F7FB] border-b border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader num="06" en="User Workflow" cn="异常处理链路" subtitle="从实时定位到路径回溯" dark />

            <p className="text-[15px] text-[#8A96A8] mb-12 max-w-[800px]">
              整套设计的核心，在于打通了在移动端完成业务操作的连续链路，不再让产品停留在单纯的数据展示层。
            </p>

            <div className="mb-20 overflow-x-auto pb-4">
              <div className="flex flex-col md:flex-row gap-4 md:items-center min-w-max">
                {flow.map((node, index) => {
                  const isHighlight = index === 2 || index === 4;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`px-4 py-3 rounded-[6px] border text-[13px] md:text-[14px] whitespace-nowrap ${isHighlight ? 'bg-[#58E6A9]/10 border-[#58E6A9] text-[#58E6A9]' : 'bg-[#0D111A] border-white/10 text-[#F4F7FB]'}`}>
                        <span className="font-mono text-[11px] opacity-60 mr-2">0{index + 1}</span>
                        {node}
                      </div>
                      {index < flow.length - 1 && (
                        <ArrowRight size={16} className="text-[#8A96A8] rotate-90 md:rotate-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProductShotFrame src={GPS_IMAGES.stats} alt="统计分析移动界面" size="medium" theme="dark" onZoom={setZoomImage} caption="Mobile Analytics｜移动端数据统计处理" />
              <ProductShotFrame src={GPS_IMAGES.trajectory} alt="轨迹回放明细" size="medium" theme="dark" onZoom={setZoomImage} caption="Abnormal Record｜异常事件详情与记录" />
            </div>
          </div>
        </section>

        {/* ==========================================
            07. 项目结果
            ========================================== */}
        <section className="bg-[#05070D] py-24 text-[#F4F7FB] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#58E6A9]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="07" en="Business Impact" cn="项目价值" subtitle="缩短异常发现、判断与追溯的响应周期" dark divider={false} />

            <div className="mb-12">
              <p className="text-[15px] text-[#B8C3D6] max-w-[800px]">
                该 App 上线后，显著降低了依赖线下人工协调造成的延迟成本，系统价值直接体现在了响应效率的数据改善上。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
              {results.map((result, index) => {
                const valueMatch = result.value.match(/([+-]?)(\d+)(%?)/);
                const sign = valueMatch?.[1] || "";
                const num = valueMatch?.[2] || result.value;
                const unit = valueMatch?.[3] || "";

                return (
                  <motion.div 
                    key={index}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}
                    className="bg-[#0D111A] border border-white/10 rounded-[12px] p-8 text-center flex flex-col items-center justify-center hover:border-[#58E6A9]/40 transition-colors"
                  >
                    <div className="text-[64px] font-mono font-medium text-white leading-none mb-4">
                      {sign && <span className="text-[32px] text-[#58E6A9] mr-1 align-top leading-tight">{sign}</span>}
                      {num}
                      {unit && <span className="text-[28px] text-[#58E6A9] ml-1 align-top leading-tight">{unit}</span>}
                    </div>
                    <p className="text-[14px] text-[#8A96A8]">{result.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* 项目复盘 */}
            <div className="pt-16 border-t border-white/10">
              <div className="max-w-[800px]">
                <h3 className="text-[18px] font-medium text-[#F4F7FB] mb-6">项目反思</h3>
                <div className="space-y-4 text-[15px] text-[#8A96A8] leading-[1.8]">
                  <p>复杂业务落到移动端，最忌讳把 PC 逻辑直接搬运。设计必须克制，将“找信息”的成本降到最低，把屏幕留给最致命的“异常”和最重要的“行动”。</p>
                  <p>但人员长期养成的电话沟通习惯不会因为系统上线立即消亡，系统工具通过重塑信息透明度提供基建支撑，而真正的现场规则与习惯，仍需伴随使用逐步演进。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            页脚
            ========================================== */}
        <footer className="bg-[#05070D] border-t border-white/10 pt-10 pb-12">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-mono text-[#8A96A8]">
            <p>© 2026 Miki Portfolio. B-End Deep Complex Experience Architecture.</p>
            <p className="hover:text-[#58E6A9] transition-colors cursor-default">国家能源轨迹定位跟踪 App</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
