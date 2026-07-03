"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ZoomIn, X, LayoutDashboard, Activity, MonitorSmartphone, AlertTriangle, CheckCircle2, TrendingUp, BellRing } from "lucide-react";
import Link from "next/link";

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

const finalSolutionShots = [
  {
    id: "01",
    label: "产线运行效果",
    src: "/images/yuxunda/yuxunda-final-solution-01.png",
    alt: "智能工厂数据大屏产线运行效果"
  },
  {
    id: "02",
    label: "数据分析表",
    src: "/images/yuxunda/yuxunda-final-solution-02.png",
    alt: "智能工厂数据大屏数据分析表"
  }
];

// ==========================================
// 解构主义：工程网格背景组件 (Blueprint Grid)
// ==========================================
function BlueprintGrid({ dark = false }: { dark?: boolean }) {
  // 浅色模式用极微弱的主题蓝，深色模式用极微弱的白，确保不干扰阅读
  const gridColor = dark ? "rgba(255, 255, 255, 0.04)" : "rgba(37, 99, 235, 0.03)";
  
  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        // 使用 mask-image 让网格上下边缘平滑渐隐，融入背景，避免切割感
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
      }}
    />
  );
}

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

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#0D111A]" : "bg-[#FFFFFF]";
  const borderClass = isDark ? "border-white/10" : "border-[#E2E5E9]";
  const textClass = isDark ? "text-[#8A96A8]" : "text-[#64748B]";
  const pulseClass = isDark ? "bg-[#121722]" : "bg-[#F6F7F8]";

  return (
    <div className="w-full flex flex-col gap-3 group h-full">
      <div 
        className={`relative w-full h-full overflow-hidden border transition-all duration-400 ease-out rounded-[8px] md:rounded-[12px] hover:-translate-y-[3px] hover:shadow-xl hover:shadow-[#2563EB]/5 cursor-zoom-in hover:border-[#4DA3FF]/40 min-h-[300px] ${bgClass} ${borderClass}`}
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
            <div className="absolute inset-0 bg-[#4DA3FF]/0 group-hover:bg-[#4DA3FF]/5 transition-colors duration-300 z-20 pointer-events-none" />
            <div className="absolute top-4 right-4 bg-[#05070D]/60 backdrop-blur border border-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
              <ZoomIn size={16} />
            </div>
          </>
        )}
      </div>
      {caption && (
        <p className={`text-[12px] font-mono tracking-wide text-center uppercase mt-3 ${textClass}`}>
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
  const [hasError, setHasError] = useState(false);
  
  const fallbackSrc = "/images/yuxunda/yuxunda-dashboard.png";
  const currentSrc = hasError ? fallbackSrc : src;

  return (
    <div className={className}>
      <Image 
        src={currentSrc} alt="Hero Cover" fill priority sizes="(max-w: 1024px) 100vw, 75vw"
        className={`transition-opacity duration-700 z-10 ${imgClassName} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => !hasError && setHasError(true)}
      />
    </div>
  );
}

// ==========================================
// SectionHeader
// ==========================================
function SectionHeader({ num, en, cn, dark = false, divider = true }: { num: string, en: string, cn: string, dark?: boolean, divider?: boolean }) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealUp}
      className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 opacity-90 pb-4 ${divider ? "border-b border-current" : ""}`}
      style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "#E2E5E9" }}
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#4DA3FF] text-[12px] font-mono font-medium">{num}</span>
          <span className="w-4 h-[1px] bg-[#4DA3FF]/40"></span>
          <span className="text-[#8A96A8] text-[11px] font-mono tracking-widest uppercase">{en}</span>
        </div>
        <h2 className={`text-[24px] md:text-[32px] font-medium tracking-tight ${dark ? "text-[#F4F7FB]" : "text-[#111827]"}`}>{cn}</h2>
      </div>
    </motion.div>
  );
}

// ==========================================
// Main Page Layout
// ==========================================
export default function YuxundaDashboardCase() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [activeFinalShot, setActiveFinalShot] = useState(0);
  const currentFinalShot = finalSolutionShots[activeFinalShot];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      
      {zoomImage && <ImageLightbox src={zoomImage} alt="Expanded View" onClose={() => setZoomImage(null)} />}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#05070D]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-sm font-medium text-[#8A96A8] hover:text-[#F4F7FB] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#8A96A8] uppercase font-mono hidden sm:block">
            YUXUNDA · SMART FACTORY DASHBOARD
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        
        {/* ==========================================
            00. HERO (Dark)
            ========================================== */}
        <motion.section initial="hidden" animate="visible" variants={staggerFast} className="relative w-full min-h-screen lg:min-h-[900px] flex items-center bg-[#05070D] overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0">
          
          <motion.div 
            initial={{ opacity: 0, x: 24, scale: 1.02 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute inset-y-0 right-0 w-[68%] xl:w-[72%] h-full z-0 pointer-events-none"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)" }}>
            <HeroBgImage src="/images/yuxunda/yuxunda-dashboard.png" className="absolute inset-0 w-full h-full" imgClassName="object-contain object-right" />
          </motion.div>

          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none w-full" style={{ background: "linear-gradient(to right, rgba(5,7,13,0.85) 0%, rgba(5,7,13,0.85) 45%, rgba(5,7,13,0.2) 55%, transparent 65%)" }} />

          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-[620px]">
                <motion.div variants={revealUp} className="text-[11px] lg:text-[12px] font-mono text-[#4DA3FF] tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                  <span>案例研究 · 数据可视化</span>
                </motion.div>
                <motion.h1 variants={revealUp} className="text-[40px] md:text-[48px] lg:text-[62px] font-medium text-[#F4F7FB] leading-[1.12] tracking-tight mb-6">
                  友讯达数据大屏
                </motion.h1>
                <motion.p variants={revealUp} className="text-[16px] lg:text-[17px] text-[#B8C3D6] leading-[1.75] mb-8 max-w-[600px]">
                  主导数据大屏设计，在 2 个月内完成用户洞察、信息梳理、数据可视化与视觉方案输出。项目将分散的生产、质量、设备与环境数据整合到统一大屏，帮助管理者更快判断生产状态、识别异常并支持现场决策。
                </motion.p>
                <motion.div variants={revealUp} className="grid grid-cols-3 gap-y-6 gap-x-4 mb-10 pb-8 border-b border-white/10 max-w-[620px]">
                  <div className="flex flex-col group cursor-default"><span className="text-[32px] md:text-[40px] font-medium text-white group-hover:text-[#4DA3FF] transition-colors duration-300">+43<span className="text-[20px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[12px] text-[#8A96A8] mt-1">生产效率提升</span></div>
                  <div className="flex flex-col group cursor-default"><span className="text-[32px] md:text-[40px] font-medium text-white group-hover:text-[#4DA3FF] transition-colors duration-300">79<span className="text-[20px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[12px] text-[#8A96A8] mt-1">满意度 6 分及以上占比</span></div>
                  <div className="flex flex-col group cursor-default"><span className="text-[32px] md:text-[40px] font-medium text-white group-hover:text-[#4DA3FF] transition-colors duration-300">31<span className="text-[20px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[12px] text-[#8A96A8] mt-1">满分 10 分占比</span></div>
                </motion.div>
                <motion.div variants={revealUp} className="grid grid-cols-2 gap-y-4 gap-x-8 text-[13px] text-[#A8B3C5] max-w-[560px] border-l border-[#4DA3FF]/30 pl-4">
                  <div className="hover:translate-x-1 transition-transform duration-300"><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Scope</span>用户洞察 / 信息架构 / 数据可视化 / 视觉设计</div>
                  <div className="hover:translate-x-1 transition-transform duration-300"><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Role</span>主设计师</div>
                  <div className="hover:translate-x-1 transition-transform duration-300"><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Client</span>友讯达科技</div>
                  <div className="hover:translate-x-1 transition-transform duration-300"><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Timeline</span>2 个月</div>
                </motion.div>
              </div>
              <motion.div variants={revealUp} className="lg:hidden relative w-full h-[300px] mt-4">
                <HeroBgImage src="/images/yuxunda/yuxunda-dashboard.png" className="absolute inset-0 w-full h-full rounded-[16px] border border-white/10 overflow-hidden" imgClassName="object-cover object-center p-4 bg-[#0D111A]" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            01. 项目背景 (White) - 无网格
            ========================================== */}
        <section className="bg-[#FFFFFF] text-[#111827] py-24 border-b border-[#E2E5E9] relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="01" en="Project Background" cn="项目背景" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col gap-6">
                <h3 className="text-[24px] font-medium text-[#111827]">让生产数据产生价值</h3>
                <p className="text-[15px] text-[#374151] leading-[1.8] max-w-[680px]">
                  友讯达在生产、质量、设备与环境等环节沉淀了大量数据，但这些数据分散在不同系统和报表中，查询成本高、理解门槛高，难以快速支持管理判断。
                  <br /><br />
                  本项目通过数据梳理、指标分层与可视化设计，将分散数据整合为面向管理展示与生产态势感知的智能工厂数据大屏，帮助用户更快看见状态、发现异常并做出判断。
                </p>
              </motion.div>
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 w-full">
                <div className="bg-[#F6F7F8] border-l-[3px] border-[#2563EB] p-8 md:p-10 rounded-r-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 ease-out cursor-default">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle size={18} className="text-[#2563EB]" />
                    <span className="text-[#2563EB] text-[13px] font-mono font-medium uppercase tracking-wider">核心痛点</span>
                  </div>
                  <p className="text-[15px] text-[#374151] leading-[1.7]">
                    企业已有大量底层数据，但数据分散、查询链路长、分析门槛高，导致管理层难以及时获得清晰、可判断的生产信息。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            02. 核心问题 (F8FAFC - Ice Slate) - 无网格
            ========================================== */}
        <section className="bg-[#F8FAFC] text-[#111827] py-24 border-b border-[#E2E5E9] relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="02" en="Core Challenges" cn="核心问题" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-10">
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col h-full">
                <div className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[12px] p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-400">
                  <h3 className="text-[16px] font-medium text-[#111827] mb-6 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-[#64748B]" />
                    原有业务痛点清单
                  </h3>
                  <ul className="flex flex-col gap-5 flex-1">
                    {[
                      "关键数据缺乏实时汇总，管理判断依赖经验和人工汇报",
                      "设备状态缺乏集中呈现，维护人员难以及时发现异常信号",
                      "质量数据缺乏全局视图，异常原因定位成本高",
                      "生产瓶颈缺少可视化线索，改进判断缺乏数据依据",
                      "传统查询依赖报表和人工分析，理解门槛高、响应慢"
                    ].map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.6] group cursor-default">
                        <span className="text-[#2563EB] text-[13px] font-mono font-medium mt-0.5 group-hover:scale-110 transition-transform duration-300">0{idx + 1}.</span>
                        <span className="group-hover:text-[#111827] transition-colors duration-300">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col h-full">
                <ProductShotFrame src="/images/yuxunda/yuxunda-core-problem-analysis.png" alt="智能工厂数据大屏核心问题分析配图" theme="light" onZoom={setZoomImage} />
              </motion.div>
            </div>
            <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bg-[#FFFFFF] border-2 border-[#2563EB] rounded-[12px] p-10 md:p-14 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-500 ease-out cursor-default group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-2xl group-hover:bg-[#2563EB]/10 transition-colors duration-500"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-2xl group-hover:bg-[#2563EB]/10 transition-colors duration-500"></div>
                <span className="text-[#2563EB] font-mono text-[12px] uppercase tracking-wider block mb-4 group-hover:tracking-[0.2em] transition-all duration-500">Core Design Problem｜核心设计问题</span>
                <h3 className="text-[22px] md:text-[28px] font-medium text-[#111827] leading-[1.5] max-w-[800px]">
                  “如何通过统一的数据可视化，让生产状态、质量趋势、设备运行与环境指标在同一画面中被快速理解、比较和判断？”
                </h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            03. 用户与信息需求 (White) - 【有网格：浅色科技】
            ========================================== */}
        <section className="bg-[#FFFFFF] text-[#111827] py-24 border-b border-[#E2E5E9] relative overflow-hidden">
          <BlueprintGrid />
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="03" en="User & Info Needs" cn="用户与信息需求" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 items-stretch">
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col">
                <ProductShotFrame src="/images/yuxunda/yuxunda-User-Info%20Needs.png" alt="智能工厂数据大屏用户与信息需求配图" theme="light" onZoom={setZoomImage} />
              </motion.div>
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 grid grid-cols-1 gap-4">
                {[
                  { role: "管理层", needs: "关注整体经营与生产效率，需要优先看到产能、质量、设备与环境的关键指标，用于快速判断工厂运行是否正常。" },
                  { role: "生产主管和工程师", needs: "关注生产线状态与异常处理，需要实时查看产线运行、产量变化和效率波动，及时发现瓶颈并调整现场节奏。" },
                  { role: "质量控制团队", needs: "关注缺陷率、不良率与质量波动，需要快速识别异常趋势，定位可能影响质量的关键环节。" },
                  { role: "设备维护人员", needs: "关注设备运行状态与故障信号，需要及时看到设备异常、告警和维护优先级，减少被动响应。" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#F6F7F8] border border-[#E2E5E9] rounded-[8px] p-6 flex flex-col h-full hover:border-[#4DA3FF]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-400 ease-out group cursor-default">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded bg-[#FFFFFF] border border-[#E2E5E9] flex items-center justify-center text-[#2563EB] font-mono text-[13px] font-medium group-hover:scale-105 group-hover:border-[#4DA3FF]/40 transition-all duration-300">0{idx + 1}</span>
                      <h4 className="text-[15px] font-medium text-[#111827]">{item.role}</h4>
                    </div>
                    <p className="text-[13px] text-[#64748B] leading-[1.6] text-justify flex-1">{item.needs}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#EBF5FF] border border-[#2563EB]/20 rounded-[8px] p-6 text-center w-full hover:shadow-md hover:shadow-[#2563EB]/10 transition-shadow duration-400 cursor-default">
              <h4 className="text-[18px] md:text-[20px] font-medium text-[#2563EB] flex items-center justify-center gap-3">
                <CheckCircle2 size={24} className="text-[#2563EB]" /> 快速感知，提前预警，精准洞察
              </h4>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            04. 设计策略 (F0F4F8 - Deep Ice Blue) - 无网格
            ========================================== */}
        <section className="bg-[#F0F4F8] text-[#111827] py-24 border-b border-[#E2E5E9] relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="04" en="Design Strategy" cn="设计策略" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col">
                <ProductShotFrame src="/images/yuxunda/yuxunda-core-design-%20strategy.png" alt="智能工厂数据大屏核心设计策略配图" theme="light" onZoom={setZoomImage} />
              </motion.div>
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col gap-5">
                {[
                  {
                    layer: "第一层：总览判断",
                    desc: "用核心 KPI 和状态点建立总览，让用户先判断当前生产是否正常。",
                    visual: (
                      <div className="flex items-center gap-6 justify-start mt-4 w-full border-t border-[#E2E5E9] pt-4">
                        <div className="flex flex-col">
                          <span className="text-[20px] font-medium text-[#111827]">98.5%</span>
                          <span className="text-[10px] text-[#64748B] uppercase font-mono">Yield Rate</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[20px] font-medium text-[#111827]">2,400</span>
                          <span className="text-[10px] text-[#64748B] uppercase font-mono">Output</span>
                        </div>
                        <div className="w-10 h-10 ml-auto rounded-full border-4 border-[#2563EB] border-r-[#E2E5E9]"></div>
                      </div>
                    )
                  },
                  {
                    layer: "第二层：趋势识别",
                    desc: "用折线、柱状和对比图承载变化趋势，帮助用户判断问题是偶发还是持续。",
                    visual: (
                      <div className="flex items-end gap-2 h-10 w-full justify-start mt-4 border-t border-[#E2E5E9] pt-4">
                        {[40, 60, 45, 80, 55, 90, 75, 60, 85].map((h, i) => (
                          <div key={i} className="w-3 bg-[#E2E5E9] hover:bg-[#2563EB] transition-colors duration-300 rounded-t-sm cursor-pointer" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    )
                  },
                  {
                    layer: "第三层：异常定位",
                    desc: "用颜色、告警和高亮标记突出异常信息，让用户快速找到需要优先处理的风险点。",
                    visual: (
                      <div className="flex flex-wrap items-center gap-3 justify-start mt-4 w-full border-t border-[#E2E5E9] pt-4">
                        <div className="flex items-center gap-2 bg-[#FEF2F2] border border-[#FCA5A5] px-3 py-1.5 rounded-full text-[#DC2626] text-[12px] font-medium hover:bg-[#FEE2E2] transition-colors cursor-pointer">
                          <BellRing size={14} /> Line B Warning
                        </div>
                        <div className="flex items-center gap-2 bg-[#FEF2F2] border border-[#FCA5A5] px-3 py-1.5 rounded-full text-[#DC2626] text-[12px] font-medium hover:bg-[#FEE2E2] transition-colors cursor-pointer">
                          Temp Alert
                        </div>
                      </div>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[8px] p-6 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563EB]/5 hover:border-[#4DA3FF]/30 transition-all duration-400 ease-out h-full justify-between shadow-sm cursor-default">
                    <div>
                      <span className="text-[#2563EB] font-mono text-[11px] font-medium block mb-2 uppercase group-hover:tracking-wider transition-all duration-300">Layer 0{idx + 1}</span>
                      <h3 className="text-[18px] font-medium text-[#111827] mb-1">{item.layer}</h3>
                      <p className="text-[14px] text-[#64748B]">{item.desc}</p>
                    </div>
                    <div>{item.visual}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            05. 视觉设计 (White) - 无网格
            ========================================== */}
        <section className="bg-[#FFFFFF] py-24 text-[#111827] border-b border-[#E2E5E9] relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="05" en="Visual Design" cn="视觉呈现原则" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
                <div>
                  <h3 className="text-[24px] font-medium text-[#111827] mb-4">工业化 HUD 视觉设计</h3>
                  <p className="text-[15px] text-[#374151] leading-[1.75]">
                    数据大屏需要在远距离、长时间和高信息密度场景下保持可读性。因此视觉上减少装饰性元素，使用高对比数字、清晰层级和克制的蓝色强调，让用户优先看见关键状态、趋势变化与异常信息。
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  {[
                    { title: "关键数字", desc: "优先突出核心指标，降低读取成本", icon: LayoutDashboard },
                    { title: "趋势图表", desc: "用克制色彩呈现变化，避免图表噪音", icon: TrendingUp },
                    { title: "异常信息", desc: "用蓝色强调和告警状态提示处理优先级", icon: Activity }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-[#F6F7F8] border border-[#E2E5E9] rounded-[8px] p-5 flex items-center gap-5 hover:-translate-x-1 hover:bg-[#F0F4F8] hover:border-[#4DA3FF]/30 transition-all duration-300 ease-out group cursor-default">
                      <div className="bg-[#FFFFFF] border border-[#E2E5E9] p-3 rounded-[6px] shadow-sm group-hover:scale-105 group-hover:border-[#4DA3FF]/30 transition-all duration-300">
                        <card.icon size={20} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-medium text-[#111827] mb-1">{card.title}</h4>
                        <p className="text-[13px] text-[#64748B]">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col h-full">
                <ProductShotFrame src="/images/yuxunda/yuxunda-design-guide.png" alt="数据大屏视觉设计" theme="light" onZoom={setZoomImage} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            06. 最终方案 (Dark Cinematic Reveal) - 【有网格：深色HUD蓝图】
            ========================================== */}
        <section className="bg-[#05070D] text-[#F4F7FB] py-24 border-b border-white/10 relative overflow-hidden">
          <BlueprintGrid dark />
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="06" en="Final Solution" cn="最终方案" dark />

            <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[800px] mb-16">
              <h3 className="text-[24px] font-medium text-[#F4F7FB] mb-4">从分散数据到一屏生产态势</h3>
              <p className="text-[15px] text-[#B8C3D6] leading-[1.75]">
                最终方案将生产、质量、设备与环境指标整合到同一大屏，通过总览指标、趋势图表、设备状态和异常告警形成一屏式生产态势视图，帮助管理者和一线人员快速判断当前状态与处理优先级。
              </p>
            </motion.div>
          </div>

          <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 mb-12 relative z-10">
            <div 
              className="relative w-full aspect-[4/3] rounded-[12px] md:rounded-[20px] overflow-hidden border border-white/10 bg-[#0D111A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] hover:border-white/20 transition-all duration-700 cursor-zoom-in group" 
              onClick={() => setZoomImage(currentFinalShot.src)}
            >
                <Image 
                  key={currentFinalShot.src}
                  src={currentFinalShot.src} 
                  alt={currentFinalShot.alt} 
                  fill 
                  className="object-contain p-2 md:p-6 hover:scale-[1.015] transition-transform duration-700 ease-out" 
                  sizes="100vw"
                  quality={100}
                />
                <div className="absolute inset-0 bg-[#4DA3FF]/0 group-hover:bg-[#4DA3FF]/5 transition-colors duration-300 z-20 pointer-events-none" />
                <div className="absolute top-6 right-6 bg-[#05070D]/60 backdrop-blur border border-white/10 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                  <ZoomIn size={20} />
                </div>
             </div>
             <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
               {finalSolutionShots.map((shot, idx) => (
                 <button
                   key={shot.id}
                   type="button"
                   onClick={() => setActiveFinalShot(idx)}
                   className={`h-10 rounded-full border px-4 text-[12px] font-mono tracking-wide transition-all duration-300 ${
                     activeFinalShot === idx
                       ? "border-[#4DA3FF] bg-[#4DA3FF]/15 text-[#F4F7FB]"
                       : "border-white/10 bg-white/5 text-[#8A96A8] hover:border-[#4DA3FF]/40 hover:text-[#F4F7FB]"
                   }`}
                   aria-pressed={activeFinalShot === idx}
                 >
                   {shot.id} / {shot.label}
                 </button>
               ))}
             </div>
             <p className="text-[12px] font-mono tracking-wide text-center uppercase mt-6 text-[#8A96A8]">
                Smart Factory Dashboard Final Output {currentFinalShot.id}｜智能工厂数据大屏{currentFinalShot.label}
             </p>
          </motion.div>
        </section>

        {/* ==========================================
            07. 设计结果与复盘 (F6F7F8 - Soft Gray) - 无网格
            ========================================== */}
        <section className="bg-[#F6F7F8] text-[#111827] py-24 relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <SectionHeader num="07" en="Outcomes & Review" cn="设计结果与复盘" divider={false} />

            <div className="border-t border-[#E2E5E9] pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                
                <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 h-full">
                  <div className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[12px] p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 ease-out h-full flex flex-col justify-center cursor-default">
                    <h3 className="text-[20px] font-medium text-[#111827] mb-6">项目后言</h3>
                    <p className="text-[15px] text-[#374151] leading-[1.8] text-justify">
                      项目上线后，收集产线人员在大屏使用过程中的反馈与行为数据，识别信息读取、异常判断和现场响应中的体验瓶颈，可以推动后续优化，围绕真实使用场景持续校准信息层级和判断路径。
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col gap-4">
                  {[
                    { value: "+43", label: "生产效率提升", desc: "项目上线后的整体生产效率变化" },
                    { value: "79", label: "满意度 6 分及以上占比", desc: "多数用户对大屏使用体验给出正向反馈" },
                    { value: "31", label: "满分 10 分占比", desc: "部分用户对信息呈现与使用效率给出最高评分" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[12px] p-6 flex items-center gap-6 shadow-sm hover:shadow-md hover:-translate-x-1 hover:border-[#4DA3FF]/30 transition-all duration-400 ease-out group cursor-default">
                      <div className="text-[40px] md:text-[48px] font-light text-[#2563EB] leading-none flex items-baseline w-[120px] group-hover:scale-105 transition-transform duration-300 origin-left">
                        {stat.value}<span className="text-[18px] font-medium text-[#64748B] ml-1">%</span>
                      </div>
                      <div className="flex-1 border-l border-[#E2E5E9] pl-6 group-hover:border-[#4DA3FF]/30 transition-colors duration-300">
                        <span className="text-[15px] text-[#111827] font-medium block mb-1">{stat.label}</span>
                        <span className="text-[13px] text-[#64748B]">{stat.desc}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            页脚
            ========================================== */}
        <footer className="bg-[#05070D] border-t border-white/10 pt-10 pb-12 mt-auto">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-mono text-[#6F7B8D]">
            <p>© 2026 Miki Portfolio. B-End Deep Complex Experience Architecture.</p>
            <p>React Next.js Node Rendered & Tailwind Micro-styled.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
