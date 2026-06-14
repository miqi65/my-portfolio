"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Search, Layers, Database, FileCode, ZoomIn, X, ShieldAlert, Activity, RefreshCw, Sliders, Users } from "lucide-react";
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
        className={`relative w-full overflow-hidden border transition-all duration-400 ease-out rounded-[8px] md:rounded-[12px] hover:-translate-y-[3px] hover:border-[#4DA3FF]/40 cursor-zoom-in ${sizeClasses[size]} ${bgClass} ${borderClass}`}
        onClick={() => onZoom(src)}
      >
        {!isLoaded && !hasError && <div className={`absolute inset-0 animate-pulse z-0 ${pulseClass}`} />}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono tracking-widest text-current opacity-50">IMAGE OFFLINE</div>
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
function SectionHeader({ num, en, cn, dark = false }: { num: string, en: string, cn: string, dark?: boolean }) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealUp}
      className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-current opacity-90 pb-4"
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
export default function PCBProjectTemplate() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#05070D] font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      
      {zoomImage && <ImageLightbox src={zoomImage} alt="Expanded View" onClose={() => setZoomImage(null)} />}

      <nav className="fixed top-0 w-full z-50 bg-[#05070D]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-sm font-medium text-[#8A96A8] hover:text-[#F4F7FB] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#8A96A8] uppercase font-mono hidden sm:block">
            CHANGYUAN DAMING · PCBA INSERTION CONTROL
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        
        {/* ==========================================
            01. HERO
            ========================================== */}
        <motion.section initial="hidden" animate="visible" variants={staggerFast} className="relative w-full min-h-screen lg:min-h-[900px] flex items-center bg-[#05070D] overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0">
          
          <motion.div variants={revealUp} className="hidden lg:block absolute inset-y-0 right-0 w-[68%] xl:w-[72%] h-full z-0 pointer-events-none"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)" }}>
            <HeroBgImage src="/images/pcb2026/P20_img1.png" className="absolute inset-0 w-full h-full" imgClassName="object-contain object-right py-16 pr-16" />
          </motion.div>

          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none w-full" style={{ background: "linear-gradient(to right, #05070D 0%, rgba(5,7,13,0.96) 28%, rgba(5,7,13,0.6) 42%, transparent 58%)" }} />

          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-[620px]">
                
                <motion.div variants={revealUp} className="text-[11px] lg:text-[12px] font-mono text-[#8A96A8] tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                  <span>PCBA INSERTION MACHINE CONTROL SYSTEM</span>
                </motion.div>

                <motion.h1 variants={revealUp} className="text-[40px] md:text-[48px] lg:text-[62px] font-medium text-[#F4F7FB] leading-[1.12] tracking-tight mb-6">
                  PCBA 插件机控制系统重设计
                </motion.h1>

                <motion.p variants={revealUp} className="text-[16px] lg:text-[17px] text-[#B8C3D6] leading-[1.75] mb-8 max-w-[600px]">
                  面向 PCBA 数字化产线的插件机控制系统重构项目。我负责将旧进口系统的复杂操作流程，重新拆解为可监控、可配置、可追踪的生产管理体验，帮助团队降低学习成本、减少人工介入，并支持系统按期上线。
                </motion.p>

                <motion.div variants={revealUp} className="flex flex-wrap gap-2 mb-10">
                  {['PCBA 插件机控制', '工业软件 UX', '生产流程重构', '数据可视化', '设计规范交付'].map((chip, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0D111A] border border-white/[0.14] rounded-[4px] text-[12px] text-[#A8B3C5] hover:border-[#4DA3FF] transition-colors duration-200 cursor-default">
                      {chip}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={revealUp} className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 mb-10 pb-8 border-b border-white/10 max-w-[620px]">
                  <div className="flex flex-col"><span className="text-[26px] font-medium text-white">+28<span className="text-[15px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[11px] text-[#8A96A8] uppercase tracking-wider mt-1">Management Efficiency｜管理效率</span></div>
                  <div className="flex flex-col"><span className="text-[26px] font-medium text-white">+17<span className="text-[15px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[11px] text-[#8A96A8] uppercase tracking-wider mt-1">Insertion Efficiency｜插件效率</span></div>
                  <div className="flex flex-col"><span className="text-[26px] font-medium text-white">-10<span className="text-[15px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[11px] text-[#8A96A8] uppercase tracking-wider mt-1">Manual Intervention｜人工介入率</span></div>
                  <div className="flex flex-col"><span className="text-[26px] font-medium text-white">-17<span className="text-[15px] font-normal text-[#4DA3FF] ml-0.5">%</span></span><span className="text-[11px] text-[#8A96A8] uppercase tracking-wider mt-1">Engineering Import Time｜工程导入耗时</span></div>
                </motion.div>

                <motion.div variants={revealUp} className="grid grid-cols-2 gap-y-4 gap-x-8 text-[13px] text-[#A8B3C5] max-w-[520px] border-l border-[#4DA3FF]/30 pl-4">
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Client</span>长园达明</div>
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Role</span>UI&UX设计 / 用户研究</div>
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Timeline</span>2020, Jan–Sep</div>
                  <div><span className="text-[#8A96A8] block text-[11px] uppercase font-mono mb-1">Scope</span>核心设计负责人</div>
                </motion.div>

              </div>
              
              <motion.div variants={revealUp} className="lg:hidden relative w-full h-[300px] mt-4">
                <HeroBgImage src="/images/pcb2026/p1_bg.png" className="absolute inset-0 w-full h-full rounded-[8px] overflow-hidden" imgClassName="object-cover object-center" />
                <div className="absolute inset-0 bg-black/40 z-10"></div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            02. LIGHT ENTERPRISE SECTIONS: Context
            ========================================== */}
        <section className="bg-[#FFFFFF] text-[#111827] py-24 border-b border-[#E2E5E9]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            
            <SectionHeader num="01" en="Executive Summary" cn="30秒看懂本项目" />
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
            >
              {[
                { title: "Business Problem｜业务问题", text: "旧进口插件机控制系统长期无人接管，造成较高维护与机会成本；PCBA 数字化产线需要重构核心控制系统。" },
                { title: "My Role｜我的角色", text: "作为核心设计负责人，我主导现场走查、业务流程梳理、交互方案设计、规范交付与上线前验证。" },
                { title: "Key Design Moves｜关键设计动作", text: "重构集中监控入口、物料选择与孔位确认路径、项目资料复用机制和系统级数字预警。" },
                { title: "Business Impact｜业务影响", text: "管理效率提升 +28%，插件效率提升 +17%，并支持系统按期上线和真实产线验证。" }
              ].map((item, i) => (
                <motion.div 
                  key={i} variants={revealUp}
                  whileHover={{ y: -2 }}
                  className="bg-[#F6F7F8] border border-[#E2E5E9] rounded-[6px] p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#2563EB]" />
                  <div className="text-[#2563EB] text-[11px] font-mono mb-3 font-semibold">{`[0${i+1}]`}</div>
                  <h4 className="text-[14px] font-medium text-[#111827] mb-2">{item.title}</h4>
                  <p className="text-[13px] text-[#64748B] leading-[1.62] text-justify">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mb-24">
              <h3 className="text-[16px] font-mono text-[#64748B] uppercase tracking-wider mb-6">Execution & Validation Flow｜验证与交付流程</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                {[
                  { icon: Search, stage: "Discovery｜现场走查", desc: "观察车间作业，梳理旧系统流程与软硬件约束。" },
                  { icon: Layers, stage: "Structure｜结构重构", desc: "明确功能优先级，重构监控、工单与权限结构。" },
                  { icon: Database, stage: "Interaction｜交互设计", desc: "设计监控大盘、物料路径、预警与资料复用流程。" },
                  { icon: CheckCircle2, stage: "Validation｜验证", desc: "推进 A/B 测试与上线前高风险流程排查。" },
                  { icon: FileCode, stage: "Handoff｜规范交付", desc: "输出统一设计规范，支撑研发还原与测试验证。" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FFFFFF] border border-[#E2E5E9] p-5 rounded-[6px] transition-all hover:border-[#4DA3FF]/60 relative">
                    <item.icon size={18} className="text-[#4DA3FF] mb-3" />
                    <h4 className="text-[14px] font-medium text-[#111827] mb-2">{item.stage}</h4>
                    <p className="text-[12px] text-[#64748B] leading-[1.6] text-justify">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <SectionHeader num="02" en="Business Context" cn="业务背景与外部环境" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
              <div className="lg:col-span-4 flex flex-col gap-4">
                <h3 className="text-[18px] font-medium text-[#111827]">项目背景</h3>
                <p className="text-[14px] text-[#374151] leading-[1.65] text-justify">
                  长园达明需要重启一套闲置多年的进口插件机控制系统。随着 PCBA 产线自动化与柔性制造需求提升，旧系统已无法支撑新的生产管理要求。本项目的目标是在保留底层操作惯性的基础上，重构关键控制流程和系统体验。
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E2E5E9] p-5 rounded-[8px] flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex justify-between items-center mb-4 border-b border-[#E2E5E9] pb-2">
                    <span className="text-[11px] font-mono text-[#64748B] uppercase">External Drivers｜外部驱动</span>
                    <span className="text-[11px] font-mono text-[#2563EB] font-bold">增速 +22.14%</span>
                  </div>
                  <div className="flex items-end justify-between h-[100px] px-4 pt-4 border-b border-[#CBD5E1] relative">
                    <div className="w-8 bg-[#CBD5E1] h-[40%] rounded-t-sm relative group">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono">2.4T</span>
                    </div>
                    <div className="w-8 bg-[#CBD5E1] h-[60%] rounded-t-sm relative">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono">2.8T</span>
                    </div>
                    <div className="w-8 bg-[#2563EB] h-[90%] rounded-t-sm relative">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#2563EB] font-bold">3.41T</span>
                    </div>
                    <div className="absolute left-0 right-0 top-1/4 border-t border-dashed border-[#E2E5E9] pointer-events-none" />
                    <div className="absolute left-0 right-0 top-2/4 border-t border-dashed border-[#E2E5E9] pointer-events-none" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-2 px-2">
                    <div>2017</div><div>2018</div><div className="text-[#2563EB] font-bold">2019 (万亿)</div>
                  </div>
                </div>
                <p className="text-[12px] text-[#64748B] leading-[1.5] mt-4 pt-2 border-t border-[#F6F7F8]">
                  政策与双千兆建设支撑着 PCBA 产线与插件设备需求持续增长。
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E2E5E9] p-5 rounded-[8px] flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex justify-between items-center mb-4 border-b border-[#E2E5E9] pb-2">
                    <span className="text-[11px] font-mono text-[#64748B] uppercase">Internal System Base｜内部系统基础</span>
                    <span className="text-[10px] bg-[#E2E5E9] px-1.5 py-0.5 rounded font-mono">已上线</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                    <div className="p-2 border border-[#2563EB] bg-[#2563EB]/5 font-semibold text-[#2563EB] rounded">PCBA Control</div>
                    <div className="p-2 border border-[#E2E5E9] text-[#64748B] rounded bg-[#F6F7F8]">ALC</div>
                    <div className="p-2 border border-[#E2E5E9] text-[#64748B] rounded bg-[#F6F7F8]">WMS</div>
                    <div className="p-2 border border-[#E2E5E9] text-[#64748B] rounded bg-[#F6F7F8]">BTCS</div>
                    <div className="p-2 border border-[#E2E5E9] text-[#64748B] rounded bg-[#F6F7F8]">ISPC</div>
                    <div className="p-2 border border-[#E2E5E9] text-[#64748B] rounded bg-[#F6F7F8]">Fast</div>
                  </div>
                  <div className="relative h-12 mt-4 flex items-center justify-center">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
                    <span className="relative z-10 text-[10px] bg-[#FFFFFF] px-2 font-mono text-[#64748B]">互联打通</span>
                  </div>
                </div>
                <p className="text-[12px] text-[#64748B] leading-[1.5] text-justify">
                  前期落地的外围业务系统，为重构核心 PCBA 控制系统提供了架构可行性验证。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#E2E5E9] pt-16 mb-24">
              <div className="lg:col-span-4">
                <h3 className="text-[18px] font-medium mb-3">项目约束</h3>
                <p className="text-[14px] text-[#64748B] leading-[1.6]">面对研发排期限制、市场竞争环境与严格的上线周期，设计必须确保实施可行性。</p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F6F7F8] p-5 rounded border border-[#E2E5E9]"><span className="text-[11px] font-mono text-[#64748B] block mb-1">01 / R&D LIMIT</span><p className="text-[13px] text-[#374151] leading-[1.5]">软硬协同双线推进：一边重构交互，一边兼顾车间的工业改造要求。</p></div>
                <div className="bg-[#F6F7F8] p-5 rounded border border-[#E2E5E9]"><span className="text-[11px] font-mono text-[#64748B] block mb-1">02 / MARKET</span><p className="text-[13px] text-[#374151] leading-[1.5]">快速扩张：系统需尽快支撑业务部门的市场履约展示。</p></div>
                <div className="bg-[#F6F7F8] p-5 rounded border border-[#E2E5E9] border-l-2 border-l-[#2563EB]"><span className="text-[11px] font-mono text-[#2563EB] font-bold block mb-1">03 / TIMELINE</span><p className="text-[13px] text-[#374151] leading-[1.5]">严格的上线周期：设计与研发排期强耦合，依赖高效的规范流转。</p></div>
              </div>
            </div>

            <SectionHeader num="03" en="Strategy Memo" cn="低风险重构策略" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-24 bg-[#F6F7F8] border border-[#E2E5E9] rounded-[12px] p-8 md:p-12">
              <div className="max-w-[800px] mb-10">
                <h3 className="text-[24px] font-medium text-[#111827] mb-4">保留底层逻辑，重构关键流程</h3>
                <p className="text-[15px] text-[#374151] leading-[1.75]">
                  为确保上线可行性，设计策略定为：顺应一线人员的既有操作习惯，在保留旧系统底层逻辑的基础上，重构关键流程、信息层级与交互路径，在降低迁移成本的同时支持按期上线。
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 bg-[#FFFFFF] border border-[#E2E5E9] p-6 rounded-[8px]">
                <div className="flex-1 w-full">
                  <span className="block text-[12px] font-mono text-[#64748B] mb-3 text-center uppercase tracking-wider">Old Imported System｜旧进口系统</span>
                  <ProductShotFrame src="/images/pcb2026/P4_img.png" alt="旧系统" size="medium" theme="light" onZoom={setZoomImage} />
                </div>
                <div className="flex flex-col items-center shrink-0 w-[120px]">
                  <div className="w-[1px] h-8 bg-[#4DA3FF] hidden md:block"></div>
                  <div className="text-[11px] text-[#2563EB] bg-[#4DA3FF]/10 px-3 py-1.5 rounded font-mono font-medium border border-[#4DA3FF]/20 my-2 text-center">REFACTOR</div>
                  <ArrowRight size={20} className="text-[#4DA3FF] hidden md:block" />
                </div>
                <div className="flex-1 w-full">
                  <span className="block text-[12px] font-mono text-[#2563EB] font-medium mb-3 text-center uppercase tracking-wider">New PCBA Insertion Control System｜新 PCBA 插件控制系统</span>
                  <ProductShotFrame src="/images/pcb2026/P20_img1.png" alt="新系统" size="medium" theme="light" onZoom={setZoomImage} />
                </div>
              </div>
            </motion.div>

            <SectionHeader num="04" en="Problem & Goal" cn="从现场问题到设计目标" />
            <div className="border-t border-[#E2E5E9] pt-8 mb-12">
              <div className="bg-[#FFFFFF] border border-[#E2E5E9] rounded-[8px] overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                  <thead>
                    <tr className="bg-[#F6F7F8] border-b border-[#E2E5E9] text-[12px] text-[#64748B] uppercase font-mono">
                      <th className="p-4 w-[45%]">Observation｜现场问题</th>
                      <th className="p-4 w-[10%] text-center"></th>
                      <th className="p-4 w-[45%]">Design Direction｜设计方向</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["决策缺乏数据支撑，仅依赖零散文本日志", "整合首页大盘数据，直观辅助宏观决策。"],
                      ["操作员必须在机台端与后台系统两头确认孔位", "合并可视化面板，在同一路径准确识别物料状态。"],
                      ["机台红黄灯故障预警容易滞后，依赖现场巡检", "提供系统级数字预警推送，降低停机时间。"],
                      ["项目资料人工导入繁琐，依赖外部存储", "建立系统内可复用的资料库与配置模板。"],
                      ["人员权限分配散落于外部 OA，管理断层", "将用户角色与底层数据接口直接绑定。"]
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#E2E5E9] last:border-0 hover:bg-[#F6F7F8]/50 transition-colors">
                        <td className="p-4 text-[14px] text-[#374151] leading-[1.6]">{row[0]}</td>
                        <td className="p-4 text-center text-[#4DA3FF]/40"><ArrowRight size={16} className="mx-auto" /></td>
                        <td className="p-4 text-[14px] text-[#111827] font-medium leading-[1.6]">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            DARK SECTION: Core Solutions
            ========================================== */}
        <section className="bg-[#05070D] py-24 text-[#F4F7FB] border-b border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            
            <SectionHeader num="05" en="Core Solutions" cn="核心链路重构" dark />

            {/* Solution 01 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <ProductShotFrame src="/images/pcb2026/P8_mockup.png" alt="集中监控入口" size="medium" theme="dark" onZoom={setZoomImage} caption="集中式实时调度监控界面" />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="text-[#4DA3FF] text-[11px] font-mono tracking-widest uppercase block mb-2">Solution 01｜Monitoring Hub</span>
                  <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">集中监控入口</h3>
                  <p className="text-[14px] text-[#B8C3D6] leading-[1.75] text-justify">
                    将分散的机台反馈转化为集中监控入口，让管理者更快判断产线状态和异常情况。
                  </p>
                </div>
                <div className="bg-[#121722] border-l-2 border-[#4DA3FF] p-4 rounded-r-[6px] text-[13px] border-y border-r border-y-white/5 border-r-white/5">
                  <div className="mb-2"><span className="text-[#8A96A8] font-mono block text-[11px] uppercase mb-0.5">Problem</span>管理者难以及时判断产线状态。</div>
                  <div className="mb-2"><span className="text-[#4DA3FF] font-mono block text-[11px] uppercase mb-0.5">Design Move</span>整合进度、机台状态与警报信息，形成集中监控看板。</div>
                  <div><span className="text-[#F4F7FB] font-mono block text-[11px] uppercase mb-0.5">Value</span>管理效率提升 <strong className="text-[#4DA3FF] font-medium">+28%</strong>。</div>
                </div>
              </div>
            </motion.div>

            {/* Solution 02 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 lg:order-2">
                <ProductShotFrame src="/images/pcb2026/P9_组图.png" alt="可视化映射面板" size="medium" theme="dark" onZoom={setZoomImage} caption="物料选择与孔位确认合并路径" />
              </div>
              <div className="lg:col-span-5 lg:order-1 flex flex-col gap-6">
                <div>
                  <span className="text-[#4DA3FF] text-[11px] font-mono tracking-widest uppercase block mb-2">Solution 02｜Component Visualization</span>
                  <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">物料与孔位可视化面板</h3>
                  <p className="text-[14px] text-[#B8C3D6] leading-[1.75] text-justify">
                    把物料选择、孔位确认与在制品状态放到同一操作路径中，减少操作员在机台和系统之间反复确认的成本。
                  </p>
                </div>
                <div className="bg-[#121722] border-l-2 border-[#4DA3FF] p-4 rounded-r-[6px] text-[13px] border-y border-r border-y-white/5 border-r-white/5">
                  <div className="mb-2"><span className="text-[#8A96A8] font-mono block text-[11px] uppercase mb-0.5">Problem</span>孔位确认与物料选择被拆成多个操作步骤。</div>
                  <div className="mb-2"><span className="text-[#4DA3FF] font-mono block text-[11px] uppercase mb-0.5">Design Move</span>将物料选择、孔位确认和 WIP 状态整合到同一可视化面板。</div>
                  <div><span className="text-[#F4F7FB] font-mono block text-[11px] uppercase mb-0.5">Value</span>插件效率提升 <strong className="text-[#4DA3FF] font-medium">+17%</strong>。</div>
                </div>
              </div>
            </motion.div>

            {/* Solution 03 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32 bg-[#0D111A] border border-[#2563EB]/30 rounded-[12px] p-8 md:p-12 relative overflow-hidden group hover:border-[#4DA3FF]/60 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <span className="text-[#4DA3FF] text-[11px] font-mono tracking-widest uppercase block mb-2">Solution 03｜Digital Alert</span>
                    <h3 className="text-[26px] font-medium text-[#F4F7FB] mb-4">从机械灯到数字预警</h3>
                    <p className="text-[14px] text-[#B8C3D6] leading-[1.75] text-justify mb-6">
                      降低对车间物理信号灯的依赖，将机台异常转为系统级数字预警，缩短异常发现和处理链路。
                    </p>
                    <div className="inline-flex items-center gap-2 border border-[#4DA3FF]/30 bg-[#05070D] px-4 py-2 rounded-[6px] text-[13px] text-[#F4F7FB]">
                      <Activity size={16} className="text-[#4DA3FF]"/> Value: 人工介入率降低 <strong className="text-[#4DA3FF] font-medium">-10%</strong>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <ProductShotFrame src="/images/pcb2026/P10_img.png" alt="系统级数字预警事件分发" size="medium" theme="dark" onZoom={setZoomImage} caption="系统级数字预警事件分发" />
                </div>
              </div>
            </motion.div>

            {/* Solution 04 & 05 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="bg-[#0D111A] border border-white/10 p-8 rounded-[12px] flex flex-col">
                <div className="mb-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                    <span className="text-[#4DA3FF] text-[12px] font-mono uppercase">Solution 04｜Engineering File Reuse</span>
                    <span className="text-[11px] font-mono text-[#F4F7FB]">Value: 工程导入耗时 <strong className="text-[#4DA3FF]">-17%</strong></span>
                  </div>
                  <h3 className="text-[22px] font-medium text-white mb-3">工程资料复用</h3>
                  <p className="text-[13px] text-[#B8C3D6] leading-[1.65] text-justify">
                    减少对外部存储导入的依赖，将标准化工程资料沉淀为可复用模板，支持新工单快速配置。
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono mb-8 bg-[#05070D] p-3 rounded-[6px] border border-white/5">
                  <div className="flex items-center gap-2 text-[#8A96A8]"><Database size={14}/> External Import｜外部导入</div>
                  <ArrowRight size={14} className="text-[#4DA3FF] hidden sm:block"/>
                  <div className="flex items-center gap-2 text-[#F4F7FB] border border-[#2563EB] bg-[#2563EB]/20 px-2 py-1 rounded"><Layers size={14} className="text-[#4DA3FF]"/> Project Library｜项目资料库</div>
                  <ArrowRight size={14} className="text-[#4DA3FF] hidden sm:block"/>
                  <div className="flex items-center gap-2 text-[#F4F7FB] border border-[#2563EB] bg-[#2563EB]/20 px-2 py-1 rounded"><RefreshCw size={14} className="text-[#4DA3FF]"/> Template Reuse｜模板复用</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <ProductShotFrame src="/images/pcb2026/P11_img.png" alt="复用1" size="medium" theme="dark" onZoom={setZoomImage} caption="External Import" />
                  <ProductShotFrame src="/images/pcb2026/P11_img1.png" alt="复用2" size="medium" theme="dark" onZoom={setZoomImage} caption="Template Reuse" />
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="bg-[#0D111A] border border-white/10 p-8 rounded-[12px] flex flex-col">
                <div className="mb-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                    <span className="text-[#4DA3FF] text-[12px] font-mono uppercase">Solution 05｜Permission Management</span>
                  </div>
                  <h3 className="text-[22px] font-medium text-white mb-3">系统内权限管理</h3>
                  <p className="text-[13px] text-[#B8C3D6] leading-[1.65] text-justify">
                    将人员、角色、工单与设备操作权限绑定到系统内，减少外部审批断层，并降低越权操作风险。
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#05070D] border border-white/5 rounded-[6px] font-mono text-[12px] mb-8 relative">
                  <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-[#2563EB]/50 z-0"></div>
                  <div className="flex items-center gap-3 relative z-10"><Users size={16} className="text-[#4DA3FF] bg-[#05070D]"/> <span className="text-[#F4F7FB]">Operator｜操作员</span></div>
                  <div className="flex items-center gap-3 relative z-10 my-1"><ShieldAlert size={16} className="text-[#4DA3FF] bg-[#05070D]"/> <span className="text-[#B8C3D6]">Role Policy｜角色权限</span></div>
                  <div className="flex items-center gap-3 relative z-10 mb-1"><Layers size={16} className="text-[#4DA3FF] bg-[#05070D]"/> <span className="text-[#B8C3D6]">Work Order Scope｜工单范围</span></div>
                  <div className="flex items-center gap-3 relative z-10"><Sliders size={16} className="text-[#4DA3FF] bg-[#05070D]"/> <span className="text-[#F4F7FB]">Machine Interface｜机台操作接口</span></div>
                </div>
                <div className="mt-auto">
                  <ProductShotFrame src="/images/pcb2026/P12_img.png" alt="权责看板" size="medium" theme="dark" onZoom={setZoomImage} caption="Permission Management Interface｜权限管理界面" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
            LIGHT SECTION: Decision & Validation
            ========================================== */}
        <section className="bg-[#FFFFFF] text-[#111827] py-24 border-b border-[#E2E5E9]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader num="06" en="Decision & Validation" cn="设计决策与验证" />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-24">
              <h3 className="text-[22px] font-medium mb-6">基于竞品与现场反馈确定功能优先级</h3>
              
              <div className="bg-[#F6F7F8] border border-[#E2E5E9] rounded-[8px] overflow-x-auto mb-8 shadow-sm">
                <table className="w-full text-left min-w-[640px]">
                  <thead>
                    <tr className="border-b border-[#E2E5E9] text-[12px] text-[#64748B] uppercase bg-[#FFFFFF]">
                      <th className="p-4 font-medium">Core Capability｜核心能力</th>
                      <th className="p-4 font-medium text-center border-l border-[#E2E5E9]/50">YAMAHA</th>
                      <th className="p-4 font-medium text-center border-l border-[#E2E5E9]/50">Universal</th>
                      <th className="p-4 font-medium text-center border-l border-[#E2E5E9]/50">Samsung</th>
                      <th className="p-4 font-medium text-center border-l border-[#E2E5E9]/50">Datron</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] text-[#111827]">
                    {[['设备状态显示', '-', 'Yes', 'Yes', 'Yes'], ['项目运行进度', 'Yes', 'Yes', 'Yes', 'Yes'], ['工程设置', 'Yes', 'Yes', 'Yes', 'Yes'], ['示教', 'Yes', 'Yes', 'Yes', 'Yes'], ['日志追溯', 'Yes', '-', '-', 'Yes']].map((row, i) => (
                      <tr key={i} className="border-b border-[#E2E5E9] last:border-0 hover:bg-[#FFFFFF] transition-colors">
                        <td className="p-4 font-medium">{row[0]}</td>
                        <td className={`p-4 text-center font-mono ${row[1]==='Yes'?'text-[#2563EB] font-bold':'text-[#8A96A8]'}`}>{row[1]==='Yes'?'[ ✓ ]':'-'}</td>
                        <td className={`p-4 text-center font-mono border-l border-[#E2E5E9]/50 ${row[2]==='Yes'?'text-[#2563EB] font-bold':'text-[#8A96A8]'}`}>{row[2]==='Yes'?'[ ✓ ]':'-'}</td>
                        <td className={`p-4 text-center font-mono border-l border-[#E2E5E9]/50 ${row[3]==='Yes'?'text-[#2563EB] font-bold':'text-[#8A96A8]'}`}>{row[3]==='Yes'?'[ ✓ ]':'-'}</td>
                        <td className={`p-4 text-center font-mono border-l border-[#E2E5E9]/50 ${row[4]==='Yes'?'text-[#2563EB] font-bold':'text-[#8A96A8]'}`}>{row[4]==='Yes'?'[ ✓ ]':'-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 border-t border-[#E2E5E9] pt-16">
              <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
                <span className="text-[#2563EB] font-mono text-[11px] uppercase tracking-wider block mb-2">Workflow Architecture｜流程重构</span>
                <h3 className="text-[22px] font-medium text-[#111827] mb-4">物料选择与孔位确认合并路径</h3>
                <p className="text-[14px] text-[#374151] leading-[1.65] text-justify mb-6">
                  现场观察显示，操作员在执行插件任务时，物料选择和孔位确认是连续动作。旧系统把它们拆成多个界面，增加了短时记忆负担。新的设计将这两个动作合并到同一任务路径中，减少来回确认。
                </p>
              </div>
              <div className="lg:col-span-7">
                <ProductShotFrame src="/images/pcb2026/P15_img.png" alt="合并操作面板的强证" size="large" theme="light" onZoom={setZoomImage} caption="物料选择与孔位确认合并路径" />
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-t border-[#E2E5E9] pt-16">
              <div className="lg:col-span-7">
                <ProductShotFrame src="/images/pcb2026/P17_img.png" alt="A/B 测试横版竖版原型" size="medium" theme="light" onZoom={setZoomImage} caption="横版与竖版布局设计原型" />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-5">
                <span className="text-[#2563EB] font-mono text-[11px] block uppercase">A/B Usability Test｜可用性测试</span>
                <h3 className="text-[22px] font-medium text-[#111827]">用测试结果确定布局方案</h3>
                <table className="w-full text-left text-[13px] border border-[#E2E5E9] bg-[#FFFFFF] rounded-[6px] overflow-hidden">
                  <tbody>
                    <tr className="border-b border-[#E2E5E9]">
                      <td className="p-3 text-[#64748B] font-medium bg-[#F6F7F8] w-[35%]">测试对象</td>
                      <td className="p-3 text-[#111827]">12 位操作员与组长</td>
                    </tr>
                    <tr className="border-b border-[#E2E5E9]">
                      <td className="p-3 text-[#64748B] font-medium bg-[#F6F7F8]">测试任务</td>
                      <td className="p-3 text-[#111827]">异常查看、工程导入、料池配单</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-[#64748B] font-medium bg-[#F6F7F8] text-[#2563EB]">结论</td>
                      <td className="p-3 text-[#111827] font-medium">横版布局更符合工业屏幕视距和操作习惯。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="mb-24 border-t border-[#E2E5E9] pt-16">
              <span className="text-[#2563EB] font-mono text-[11px] block uppercase mb-2">Design Handoff｜设计交付</span>
              <h3 className="text-[22px] font-medium text-[#111827] mb-4">用规范交付降低沟通偏差</h3>
              <p className="text-[14px] text-[#374151] leading-[1.65] text-justify mb-8 max-w-[800px]">
                通过统一的设计规范和交互说明，减少产品、研发与测试之间的理解偏差，保证关键页面、组件、状态和异常场景能够被稳定还原。
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 md:items-center text-[12px] font-mono text-[#111827] mb-10 overflow-x-auto pb-4">
                <div className="min-w-fit flex items-center">
                  <div className="bg-[#F6F7F8] px-3 py-2 border border-[#E2E5E9] rounded flex items-center gap-2">01 Concept｜概念方案</div>
                  <ArrowRight size={14} className="text-[#64748B] mx-2" />
                  <div className="bg-[#F6F7F8] px-3 py-2 border border-[#E2E5E9] rounded flex items-center gap-2">02 Hi-Fi Prototype｜高保真原型</div>
                  <ArrowRight size={14} className="text-[#64748B] mx-2" />
                  <div className="bg-[#F6F7F8] px-3 py-2 border border-[#E2E5E9] rounded flex items-center gap-2">03 Design Spec｜设计规范</div>
                  <ArrowRight size={14} className="text-[#64748B] mx-2" />
                  <div className="bg-[#EBF5FF] px-3 py-2 border border-[#4DA3FF] text-[#2563EB] font-bold rounded flex items-center gap-2">04 QA Cases｜测试用例</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductShotFrame src="/images/pcb2026/P18_img1.png" alt="动态原型" size="medium" theme="light" onZoom={setZoomImage} caption="高保真交互说明" />
                <ProductShotFrame src="/images/pcb2026/P19_img2.png" alt="规范全景" size="medium" theme="light" onZoom={setZoomImage} caption="统一交付标准" />
              </div>
            </div>
            
          </div>
        </section>

        {/* ==========================================
            DARK SECTION: Full Validation & Outcomes
            ========================================== */}
        <section className="bg-[#05070D] py-24 text-[#F4F7FB]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeader num="07" en="System Overview & Impact" cn="系统概览与业务影响" dark />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="mb-32">
              <div className="text-center mb-8">
                <h3 className="text-[22px] font-medium text-white mb-2">PCBA 插件机控制系统界面全景</h3>
              </div>
              <ProductShotFrame src="/images/pcb2026/P20_img1.png" alt="系统全景" size="wide" theme="dark" onZoom={setZoomImage} caption="PCBA Insertion Machine Control System Interface Overview｜PCBA 插件机控制系统界面全景" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealUp} className="bg-[#0D111A] border border-white/10 rounded-[12px] p-6 md:p-10 mb-32 hover:border-[#4DA3FF]/40 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-[20px] font-medium text-[#F4F7FB] flex items-center gap-3">
                    <ShieldAlert size={20} className="text-[#4DA3FF]" /> 上线前高风险流程排查
                  </h3>
                  <p className="text-[13px] text-[#8A96A8] mt-2">这部分验证说明设计工作不止于界面表现，需要切入上线前验证，排查并封堵生产事故隐患。</p>
                </div>
                <div className="bg-[#2563EB]/20 border border-[#2563EB] px-3 py-1.5 rounded text-[12px] text-[#4DA3FF] font-mono">Pre-launch Validation｜上线前验证</div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px] text-[13px] font-mono border-collapse">
                  <thead>
                    <tr className="text-[#8A96A8] border-b border-white/10">
                      <th className="pb-3 font-medium w-[25%] font-sans">Risk Workflow｜风险流程</th>
                      <th className="pb-3 font-medium w-[30%] font-sans">Test Scenario｜测试场景</th>
                      <th className="pb-3 font-medium w-[25%] font-sans">Fallback Mechanism｜兜底机制</th>
                      <th className="pb-3 font-medium w-[20%] font-sans">Result｜结果</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#B8C3D6]">
                    <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-4 text-[#F4F7FB] flex items-center gap-2 mt-1"><Database size={14} className="text-[#4DA3FF]"/> 工程导入压测</td>
                      <td className="py-4 font-sans">突发大规模源文件数据。</td>
                      <td className="py-4 text-[#8A96A8] font-sans">缓冲分层，异常静默抛弃。</td>
                      <td className="py-4 text-white font-sans">通过</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-4 text-[#F4F7FB] flex items-center gap-2 mt-1"><Activity size={14} className="text-[#4DA3FF]"/> 预警并发</td>
                      <td className="py-4 font-sans">模拟多节点并发警报。</td>
                      <td className="py-4 text-[#8A96A8] font-sans">按层级进行无延迟弹窗推送。</td>
                      <td className="py-4 text-white font-sans">通过</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 text-[#F4F7FB] flex items-center gap-2 mt-1"><ShieldAlert size={14} className="text-[#4DA3FF]"/> 越权拦截</td>
                      <td className="py-4 font-sans">基础操作员执行越权写入操作。</td>
                      <td className="py-4 text-[#8A96A8] font-sans">底层侦测拦截并抛至审计日志。</td>
                      <td className="py-4 text-white font-sans">通过</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 border-t border-white/10 pt-16">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="text-[#4DA3FF] font-mono text-[11px] uppercase tracking-wider block">Post-launch Review｜上线后复盘</span>
                <h3 className="text-[22px] font-medium text-white">上线后的反馈与旅程复盘</h3>
                <p className="text-[14px] text-[#B8C3D6] leading-[1.7] text-justify mb-4">
                  系统上线后，我持续追踪一线操作数据和反馈，整理用户旅程地图，验证早期设计假设，并为后续版本迭代提供依据。
                </p>
              </div>
              <div className="lg:col-span-7">
                <ProductShotFrame src="/images/pcb2026/journey%20map.png" alt="PCBA 插件机控制系统用户旅程地图" size="large" theme="dark" onZoom={setZoomImage} caption="User Journey Map｜用户旅程地图" />
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp} className="border-t border-[#2563EB]/30 pt-24 pb-12 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[#4DA3FF]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
              
              <div className="relative z-10">
                <div className="max-w-[700px] mx-auto mb-16 text-center">
                  <span className="text-[#4DA3FF] text-[12px] font-mono tracking-widest uppercase block mb-3">Outcomes & Business Impact｜结果与业务影响</span>
                  <h3 className="text-[32px] md:text-[42px] font-medium text-white tracking-tight">上线结果与业务影响</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-16">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-[64px] font-medium font-mono text-white leading-none mb-4">90<span className="text-[28px] text-[#4DA3FF] ml-1">+</span></div>
                    <p className="text-[13px] text-[#B8C3D6] leading-[1.65] max-w-[240px]">条产线订单验证，证明系统具备真实生产场景下的可用性。</p>
                  </div>
                  <div className="flex flex-col items-center text-center md:border-x border-white/10">
                    <div className="text-[64px] font-medium font-mono text-white leading-none mb-4">80<span className="text-[28px] text-[#4DA3FF] ml-1">+</span></div>
                    <p className="text-[13px] text-[#B8C3D6] leading-[1.65] max-w-[240px]">位操作相关用户数据，为后续体验优化提供依据。</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-[64px] font-medium font-mono text-white leading-none mb-4">1.5<span className="text-[24px] text-[#4DA3FF] tracking-widest ml-1">X</span></div>
                    <p className="text-[13px] text-[#B8C3D6] leading-[1.65] max-w-[240px]">试行产线特定时段内，产能提升 1.5 倍。</p>
                  </div>
                </div>
                
                <p className="text-[11px] font-mono text-[#6F7B8D] text-center">* 相关数据已做脱敏处理。</p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            页脚
            ========================================== */}
        <footer className="bg-[#05070D] border-t border-white/10 pt-10 pb-12">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-mono text-[#6F7B8D]">
            <p>© 2026 Miki Portfolio. B-End Deep Complex Experience Architecture.</p>
            <p>React Next.js Node Rendered & Tailwind Micro-styled.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
