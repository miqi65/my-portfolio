"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, X, LayoutGrid, Focus, ShieldCheck, 
  AlertCircle, CheckCircle2, SlidersHorizontal, UsersRound, Warehouse
} from "lucide-react";
import Link from "next/link";

// ==========================================
// [COLORS_SYSTEM_TOKENS]
// ink: "#202326"         - 主文字 / 深色板
// muted: "#7C8792"       - 辅助文字
// accent: "#D95B4A"      - 强调工业信号色
// pageBg: "#F3F5F7"      - 页面主背景
// surfaceCool: "#EEF2F5" - 冷浅背景 / Icon底色(深一点)
// surfaceLight: "#F7F9FA"- 卡片浅底
// surfaceWhite: "#FFFFFF"- 白色卡片
// border: "#C8D0D6"      - 边框 / 分割线
// danger: "#c9342e"      - 危险红
// success: "#2d9f62"     - 成功绿
// ==========================================

// ==========================================
// [IMAGE_ASSETS]
// ==========================================
const CYG_IMAGES = {
  hero: "/images/cyg-wms/cyg-wms-hero-20260624.png",
  sidebar: "/images/cyg-wms/p2_02_status_sidebar.png",
  webView: "/images/cyg-wms/p2_03_web_view.png",
  rfView: "/images/cyg-wms/p2_03_rf_view.png",
  templateAll: "/images/cyg-wms/p2_03_template_all.png",
  rfMain: "/images/cyg-wms/p2_04_rf_main.png",
  rfModeLite: "/images/cyg-wms/p2_04_mode_lite.png",
  rfModeStandard: "/images/cyg-wms/p2_04_mode_standard.png",
  rfModeComplex: "/images/cyg-wms/p2_04_mode_complex.png", 
  flow1: "/images/cyg-wms/p2_05_flow_1.png",
  flow2: "/images/cyg-wms/p2_05_flow_2.png",
  flow3_1: "/images/cyg-wms/p2_05_flow_3.1.png",
  permission: "/images/cyg-wms/p2_06_feedback_2.png",
  designSpec1: "/images/cyg-wms/p2_07_spec_1.png",
  designSpec2: "/images/cyg-wms/p2_07_spec_2.png",
};

const webMatrixScreens = [
  {
    title: "模板矩阵总览",
    type: "Template Matrix",
    src: CYG_IMAGES.templateAll,
    caption: "标准列表、弹窗和表单区块被沉淀为可复用设计资产。"
  },
  {
    title: "Web 管理端视图",
    type: "Web View",
    src: CYG_IMAGES.webView,
    caption: "高密度表格、查询、弹窗和字段配置统一在 Web 管理端承载。"
  },
  {
    title: "模块导航结构",
    type: "Navigation",
    src: CYG_IMAGES.sidebar,
    caption: "通过统一侧边栏和模块分组，让系统体量可被理解和维护。"
  }
];

const feedbackMotion = {
  mediaType: "video" as const,
  src: "/images/cyg-wms/feedback-danger-motion.mp4",
  poster: "",
  fallbackImage: CYG_IMAGES.permission, // 危险操作的容错反馈静态图作为 fallback
  title: "危险操作反馈动效",
  caption: "左滑删除、二次确认和成功反馈的完整操作节奏。"
};

const rhythmFlows = [
  { 
    flow: "轻流程", riskLabel: "低", nodes: "扫码 → 核对 → 提交",
    mediaType: "video" as const, src: "/images/cyg-wms/p2_05_flow_1.mp4", poster: "", 
    desc: "高频无错场景，减少停顿，快速闭环。" 
  },
  { 
    flow: "中流程", riskLabel: "中", nodes: "扫码 → 核对 → 修改数量 → 提交",
    mediaType: "video" as const, src: "/images/cyg-wms/p2_05_flow_2.mp4", poster: "",
    desc: "信息可修正，按需展开明细，避免页面过载。" 
  },
  { 
    flow: "重流程", riskLabel: "高", nodes: "扫码 → 明细确认 → 异常处理 → 提交",
    mediaType: "video" as const, src: "/images/cyg-wms/p2_05_flow_3.1.mp4", poster: "",
    desc: "高风险场景增加确认阻力，优先保证数据准确。" 
  }
];

// ==========================================
// [ANIMATION_CONFIG]
// ==========================================
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const softHover = {
  y: -6,
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
};

const sideHover = {
  x: 6,
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
};

// ==========================================
// [COMPONENTS]
// ==========================================

function ImagePreviewModal({ isOpen, onClose, src, alt }: { isOpen: boolean; onClose: () => void; src: string; alt: string; }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#202326]/95 backdrop-blur-xl p-4 md:p-8 cursor-zoom-out"
          onClick={onClose}
        >
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-[110] backdrop-blur-md"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1200px] max-h-[90vh] overflow-y-auto rounded-lg hide-scrollbar cursor-default"
            onClick={(e) => e.stopPropagation()} 
          >
            <img src={src} alt={alt} className="w-full h-auto block rounded-lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionHeader({ title, subtitle, dark = false }: { title: string; subtitle: string; dark?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
      <div>
        <h2 className={`text-[32px] md:text-[40px] font-semibold tracking-tight ${dark ? 'text-white' : 'text-[#202326]'} mb-4`}>
          {title}
        </h2>
        <p className={`text-[15px] md:text-[17px] ${dark ? 'text-[#7C8792]' : 'text-[#515154]'} max-w-[720px] leading-relaxed`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function DeviceMockup({ src, mediaType, poster, fallbackImage, className = "" }: { src: string, mediaType: "video" | "image", poster?: string, fallbackImage?: string, className?: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoReady = () => {
    setIsLoaded(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className={`w-full max-w-[300px] mx-auto aspect-[3/5] rounded-[28px] bg-[#EEF2F5] p-[4px] shadow-sm ${className}`}>
      <div className="relative w-full h-full rounded-[24px] bg-white p-[3px] overflow-hidden">
        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-white">
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-[#E9EEF2] animate-pulse z-0 transition-opacity duration-500" />
          )}
          {hasError && fallbackImage ? (
            <Image
              src={fallbackImage} alt="Device view fallback" fill
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02] z-10"
              onLoad={() => setIsLoaded(true)}
            />
          ) : hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E9EEF2] text-[#7C8792] text-[12px] font-mono p-6 text-center z-10">
              <span className="mb-2 opacity-50"><AlertCircle size={24} /></span>
              <span className="text-[10px] mt-1 break-all opacity-80">MEDIA UNAVAILABLE</span>
              <span className="text-[8px] mt-2 opacity-60 break-all">{src}</span>
            </div>
          ) : mediaType === "video" ? (
            <video
              ref={videoRef} poster={poster}
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02] z-10"
              autoPlay loop muted playsInline preload="auto"
              onLoadedData={handleVideoReady} 
              onCanPlay={handleVideoReady} 
              onLoadedMetadata={handleVideoReady} 
              onCanPlayThrough={handleVideoReady} 
              onError={() => setHasError(true)}
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={src} alt="Device view" fill
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02] z-10"
              onLoad={() => setIsLoaded(true)} 
              onError={() => setHasError(true)}
            />
          )}
          {/* 内圈白边遮挡黑边 */}
          <div className="absolute inset-0 rounded-[20px] ring-[3px] ring-inset ring-white pointer-events-none z-20" />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// [PAGE_MAIN]
// ==========================================
export default function CYGCaseStudySpec() {
  const [previewImage, setPreviewImage] = useState<{src: string, alt: string} | null>(null);
  const [activeMatrixIndex, setActiveMatrixIndex] = useState(0);
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#F3F5F7] text-[#202326] font-sans selection:bg-[#D95B4A]/20 selection:text-[#D95B4A] antialiased">
      
      {/* 极简顶导 */}
      <nav className="fixed top-0 w-full z-50 bg-[#F3F5F7]/80 backdrop-blur-xl border-b border-[#C8D0D6]/30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-[#7C8792] hover:text-[#202326] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-[13px] font-medium tracking-wide">Back to Work</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#7C8792] uppercase font-mono">
            CYG WMS <span className="text-[#D95B4A] ml-2 font-bold">2.0</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-14 overflow-hidden">
        
        {/* ==========================================
            01. Hero Cover
            ========================================== */}
        <motion.section initial="hidden" animate="visible" variants={stagger} className="relative w-full min-h-[760px] lg:min-h-[860px] flex items-center bg-gradient-to-br from-[#F3F5F7] via-[#F7F9FA] to-[#EEF2F5] overflow-hidden py-16 lg:py-0">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_55%)] pointer-events-none z-0" />

          {/* Right Image Container (No Shadow) */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute right-0 w-[60%] xl:w-[65%] h-[90%] top-[5%] z-0 pointer-events-none"
          >
            <div className="absolute inset-0 w-full h-full">
              <Image src={CYG_IMAGES.hero} alt="CYG WMS Hero" fill priority className="object-contain object-right" sizes="60vw" />
            </div>
          </motion.div>

          {/* Smooth Cool Gradient Mask covering the boundary */}
          <div className="hidden lg:block absolute inset-0 z-[8] pointer-events-none bg-[linear-gradient(90deg,#F3F5F7_0%,rgba(243,245,247,0.98)_32%,rgba(243,245,247,0.72)_43%,rgba(243,245,247,0.28)_50%,transparent_55%,transparent_100%)]" />

          {/* Content */}
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-center max-w-[600px]">
                
                <motion.div variants={fadeUp} className="text-[11px] lg:text-[12px] font-mono text-[#7C8792] tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                  <span>WMS WAREHOUSE MANAGEMENT SYSTEM</span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.08] tracking-tight text-[#202326] mb-4">
                  CYG 智能仓储管理系统
                </motion.h1>
                <motion.h2 variants={fadeUp} className="text-[18px] md:text-[20px] font-medium text-[#515154] mb-8">
                  Web 管理端 + RF 手持终端｜双端全链路设计
                </motion.h2>

                <motion.p variants={fadeUp} className="text-[15px] lg:text-[16px] text-[#515154] leading-[1.8] mb-10">
                  将客户原型拆解为可复用的 Web 模板、RF 作业流程、权限模型与设计规范，支撑多客户场景下的快速交付与持续迭代。
                </motion.p>

                {/* Light Chips */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-12">
                  {['Web 管理端', 'RF 手持终端', '模板矩阵', '权限模型'].map((chip, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/70 border border-[#C8D0D6]/50 rounded-[8px] text-[13px] text-[#4E5963] font-medium transition-all duration-300 cursor-default backdrop-blur-sm hover:-translate-y-0.5 hover:border-[#D95B4A]/40 hover:bg-white">
                      {chip}
                    </span>
                  ))}
                </motion.div>

                {/* Project Brief Info */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 border-t border-[#C8D0D6]/50 pt-8">
                  {[
                    { label: "项目角色", val: "RF 端主导 / Web 端协作" },
                    { label: "设计范围", val: "双端交互、权限模型、规范沉淀" },
                    { label: "核心判断", val: "不是简单适配界面，而是重组任务密度" },
                    { label: "交付资产", val: "作业流、组件状态、模板矩阵" }
                  ].map((item, i) => (
                    <div key={i} className="group cursor-default transition-transform duration-300 hover:translate-x-1">
                      <div className="text-[11px] font-mono text-[#7C8792] uppercase tracking-wider mb-1 transition-colors duration-300 group-hover:text-[#D95B4A]">{item.label}</div>
                      <div className="text-[14px] font-medium text-[#202326]">{item.val}</div>
                    </div>
                  ))}
                </motion.div>

              </div>
              
              {/* Mobile Hero Image */}
              <motion.div variants={fadeUp} className="lg:hidden relative w-full h-[340px] mt-8 overflow-hidden rounded-[20px]">
                <Image src={CYG_IMAGES.hero} alt="CYG WMS Hero" fill className="object-contain" />
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            02. Situation & Tension (Split Board)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#F3F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="项目约束与设计判断" 
              subtitle="CYG WMS 面向多客户、多仓库、多作业流程交付。设计重点不是复刻原型，而是把高频场景抽象成可复用结构，同时保留非标业务的扩展空间。"
            />
            
            <div className="bg-white rounded-[28px] border border-[rgba(32,35,38,0.08)] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                
                {/* Left Dark Block */}
                <motion.div variants={fadeUp} className="lg:col-span-4 bg-[#202326] text-white p-8 md:p-10 flex flex-col relative z-10">
                  <div className="text-[11px] bg-white/10 px-2.5 py-1 rounded-md text-[#AAB3BA] font-mono tracking-widest uppercase mb-8 w-max border border-white/5">Case Brief</div>
                  <h3 className="text-[24px] font-semibold tracking-tight mb-10">
                    从页面交付到系统沉淀
                  </h3>
                  
                  {/* Key-Value */}
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-12 text-[14px]">
                    <div><span className="block text-[#AAB3BA] mb-1.5 text-[12px] font-mono uppercase">输入</span><span className="font-medium text-white/90">客户 HTML 原型</span></div>
                    <div><span className="block text-[#AAB3BA] mb-1.5 text-[12px] font-mono uppercase">终端</span><span className="font-medium text-white/90">Web + RF 手持机</span></div>
                    <div><span className="block text-[#AAB3BA] mb-1.5 text-[12px] font-mono uppercase">场景</span><span className="font-medium text-white/90">多客户 / 多流程</span></div>
                    <div><span className="block text-[#AAB3BA] mb-1.5 text-[12px] font-mono uppercase">角色</span><span className="font-medium text-white/90">UX 交互主导</span></div>
                  </div>

                  {/* Design Route */}
                  <div className="flex flex-col gap-6 pt-8 border-t border-white/10 grow relative">
                    <div className="absolute left-[5px] top-[40px] bottom-[20px] w-[2px] bg-white/5 z-0" />
                    
                    <div className="flex gap-4 relative z-10">
                      <span className="font-mono text-[#D95B4A] text-[13px] font-semibold mt-0.5 bg-[#202326] py-1">01</span>
                      <div>
                        <div className="text-[15px] font-medium text-white/90 mb-1.5">识别高频结构</div>
                        <div className="text-[13px] text-[#AAB3BA] leading-relaxed">提取列表、弹窗、表单与现场扫码任务模型。</div>
                      </div>
                    </div>
                    <div className="flex gap-4 relative z-10">
                      <span className="font-mono text-[#D95B4A] text-[13px] font-semibold mt-0.5 bg-[#202326] py-1">02</span>
                      <div>
                        <div className="text-[15px] font-medium text-white/90 mb-1.5">拆分终端密度</div>
                        <div className="text-[13px] text-[#AAB3BA] leading-relaxed">Web 承载配置与查询，RF 承载现场高频动作。</div>
                      </div>
                    </div>
                    <div className="flex gap-4 relative z-10">
                      <span className="font-mono text-[#D95B4A] text-[13px] font-semibold mt-0.5 bg-[#202326] py-1">03</span>
                      <div>
                        <div className="text-[15px] font-medium text-white/90 mb-1.5">沉淀交付资产</div>
                        <div className="text-[13px] text-[#AAB3BA] leading-relaxed">输出可复用模板矩阵、权限架构与交付规范。</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Light Cards */}
                <motion.div variants={fadeUp} className="lg:col-span-8 bg-white p-8 md:p-10 flex flex-col gap-5 justify-center relative z-0">
                  {[
                    {
                      icon: LayoutGrid, title: "01. 高度定制化 vs 交付效率",
                      reality: "客户工艺、字段和流程差异大。",
                      risk: "逐页重画会放大设计与研发成本。",
                      response: "沉淀 Web 模板矩阵，让标准场景通过组合交付，非标业务单独评估。"
                    },
                    {
                      icon: Focus, title: "02. Web 高密度 vs RF 极简",
                      reality: "Web 承载配置与查询，RF 面向现场连续作业。",
                      risk: "照搬 Web 信息会让小屏过载，增加误触与理解成本。",
                      response: "按终端重组信息密度，RF 只暴露当前动作所需字段和扫码入口。"
                    },
                    {
                      icon: ShieldCheck, title: "03. 权限安全 vs 配置成本",
                      reality: "WMS 需要隔离角色、菜单与仓库数据。",
                      risk: "按钮级权限会带来高配置、高测试成本。",
                      response: "控制在菜单、用户、仓库三层，平衡安全边界与交付效率。"
                    }
                  ].map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <motion.div 
                        key={idx} 
                        whileHover={softHover}
                        className="bg-[#F7F9FA] border border-[rgba(32,35,38,0.08)] rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start transition-colors duration-300 hover:bg-white hover:border-[#D95B4A]/45 group"
                      >
                        {/* Unified Light Section Icon */}
                        <div className="shrink-0 flex items-center justify-center w-11 h-11 bg-[#E9EEF2] rounded-full text-[#202326] transition-colors duration-300 group-hover:bg-[#D95B4A] group-hover:text-white">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="grow">
                          <h4 className="text-[17px] font-semibold text-[#202326] mb-4">{card.title}</h4>
                          <div className="space-y-3">
                            <div className="text-[14px] flex items-start gap-3">
                              <span className="text-[#7C8792] w-[56px] shrink-0 inline-block font-medium">业务现实</span>
                              <span className="text-[#515154]">{card.reality}</span>
                            </div>
                            <div className="text-[14px] flex items-start gap-3">
                              <span className="text-[#7C8792] w-[56px] shrink-0 inline-block font-medium">设计风险</span>
                              <span className="text-[#515154]">{card.risk}</span>
                            </div>
                            <div className="text-[14px] flex items-start gap-3 pt-2">
                              {/* Using a pseudo-border element to avoid layout shift */}
                              <div className="w-[2px] self-stretch bg-[#D95B4A] rounded-full mt-1 shrink-0" />
                              <span className="text-[#202326] font-medium">{card.response}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            03. Web Template Matrix
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#F3F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Text */}
              <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col justify-center sticky top-[100px]">
                <div className="inline-block bg-black/5 px-2.5 py-1 rounded-md text-[#515154] font-mono tracking-widest text-[11px] uppercase mb-5 w-max border border-black/5">Web Matrix</div>
                <h2 className="text-[32px] md:text-[36px] font-semibold text-[#202326] tracking-tight mb-4 leading-[1.15]">
                  拆解后台页面，沉淀复用资产
                </h2>
                <p className="text-[15px] text-[#515154] leading-relaxed mb-10">
                  标准化不是追求 100% 配置化，而是让高频标准场景不再重复设计开发。
                </p>

                <div className="grid grid-cols-1 gap-2.5 md:gap-3">
                  {[
                    { label: "What", title: "列表、弹窗、表单区块、侧边导航", icon: LayoutGrid },
                    { label: "Why", title: "降低重复页面设计与研发理解成本", icon: Focus },
                    { label: "How", title: "抽象高频组件骨架，非标保留扩展入口", icon: SlidersHorizontal },
                    { label: "Output", title: "模板矩阵 + 字段排列规则 + 交互状态规范", icon: CheckCircle2 }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={idx} 
                        whileHover={sideHover}
                        className="bg-white p-4 rounded-[16px] border border-[#C8D0D6]/40 flex items-start gap-4 transition-colors duration-300 hover:bg-[#F7F9FA] hover:border-[#D95B4A]/40 group relative"
                      >
                        {/* Hover Left Indicator */}
                        <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-[#D95B4A] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Unified Light Section Icon */}
                        <div className="w-9 h-9 rounded-[10px] bg-[#E9EEF2] text-[#202326] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#D95B4A] group-hover:text-white">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                        <div className="pt-0.5">
                          <div className="text-[11px] font-mono text-[#7C8792] uppercase mb-1">{item.label}</div>
                          <div className="text-[14px] font-medium text-[#202326] leading-snug">{item.title}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Showcase (Light Board) */}
              <motion.div variants={fadeUp} className="lg:col-span-8 flex flex-col gap-6">
                
                <div 
                  className="relative w-full h-[500px] lg:h-[560px] bg-[#EEF2F5] border border-[#C8D0D6]/50 rounded-[24px] p-6 md:p-8 cursor-zoom-in group flex flex-col items-center justify-center"
                  onClick={() => setPreviewImage({src: webMatrixScreens[activeMatrixIndex].src, alt: webMatrixScreens[activeMatrixIndex].title})}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMatrixIndex}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
                      className="relative w-full h-full bg-white rounded-[16px] shadow-sm border border-[#C8D0D6]/50 overflow-hidden"
                    >
                      <Image 
                        src={webMatrixScreens[activeMatrixIndex].src} 
                        alt={webMatrixScreens[activeMatrixIndex].title}
                        fill 
                        className="object-contain object-top p-1"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Segmented Thumbnails & Info */}
                <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                  {/* Info */}
                  <div className="flex flex-col max-w-[400px]">
                    <div className="text-[16px] font-semibold text-[#202326] mb-1">{webMatrixScreens[activeMatrixIndex].title}</div>
                    <div className="text-[14px] text-[#515154]">{webMatrixScreens[activeMatrixIndex].caption}</div>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex items-center gap-3 shrink-0">
                    {webMatrixScreens.map((screen, idx) => (
                      <button
                        key={idx} onClick={() => setActiveMatrixIndex(idx)}
                        className={`relative w-[120px] md:w-[140px] aspect-[16/9] rounded-[10px] overflow-hidden border transition-all duration-300 outline-none bg-white group ${
                          activeMatrixIndex === idx 
                            ? 'border-[#D95B4A] ring-1 ring-[#D95B4A] opacity-100 shadow-sm' 
                            : 'border-[#C8D0D6]/50 opacity-65 hover:opacity-100 hover:border-[#C8D0D6]'
                        }`}
                      >
                        <Image src={screen.src} alt={screen.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                      </button>
                    ))}
                  </div>
                </div>

              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            04. RF Field Operation
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#202326]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="四种收货模式 × 一套组件外壳" 
              subtitle="四种收货模式对应不同现场作业深度。设计策略是在统一扫码外壳下，按场景变化组合字段与流程。"
              dark
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: CYG_IMAGES.rfMain, title: "01 待办列表", strategy: "统一任务入口，减少现场人员多层级查找。" },
                { img: CYG_IMAGES.rfModeStandard, title: "02 标准收货", strategy: "字段核对较重，支持逐件扫描与数量确认。" },
                { img: CYG_IMAGES.rfModeComplex, title: "03 按箱收货", strategy: "以箱维度组织流程，支持明细与汇总切换。" },
                { img: CYG_IMAGES.rfModeLite, title: "04 按单收货", strategy: "保留核心数量字段，快速完成入库确认。" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} variants={fadeUp} 
                  whileHover={softHover}
                  className="flex flex-col gap-5 group cursor-pointer transition-colors"
                  onClick={() => setPreviewImage({src: item.img, alt: item.title})}
                >
                  {/* Mockup Frame */}
                  <div className="relative w-full aspect-[9/16] max-h-[480px] bg-white/5 border border-white/10 rounded-[24px] p-3 transition-colors duration-300 group-hover:border-[#D95B4A]/45">
                    <div className="relative w-full h-full bg-[#F3F5F7] rounded-[18px] overflow-hidden">
                      <Image src={item.img} alt={item.title} fill className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.015]" />
                    </div>
                  </div>
                  
                  {/* Strategy Description */}
                  <div className="flex flex-col px-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#D95B4A]" />
                      <span className="text-[15px] font-semibold text-white tracking-wide transition-colors duration-300 group-hover:text-[#D95B4A]">{item.title}</span>
                    </div>
                    <p className="text-[13px] text-[#7C8792] leading-relaxed pl-3.5">
                      {item.strategy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            05. Operation Rhythm (Redesigned)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.82fr_1.08fr_1.28fr] gap-8 xl:gap-12 items-start">
              
              {/* Left Column: Editorial Intro */}
              <motion.div variants={fadeUp} className="md:col-span-2 lg:col-span-1 flex flex-col lg:sticky lg:top-[96px]">
                <div className="text-[11px] font-mono text-[#7C8792] uppercase tracking-widest mb-4">OPERATION RHYTHM</div>
                <h2 className="text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-semibold tracking-tight text-[#202326] leading-[1.2] lg:leading-[1.12]">
                  操作节奏分层<br className="hidden lg:block"/>
                  轻流程快确认<br className="hidden lg:block"/>
                  重流程强校验
                </h2>
                
                <div className="w-10 lg:w-12 h-[3px] bg-[#D95B4A] rounded-full mt-6 mb-8" />
                
                <p className="text-[15px] text-[#515154] leading-[1.8] mb-10 lg:mb-12 max-w-[600px] lg:max-w-none">
                  组件可以复用，但操作阻力不能一刀切。现场高频动作要快，高风险动作要慢。
                </p>

                <div className="flex flex-col border-t border-[#C8D0D6]/50">
                  {[
                    { num: "01", text: "高频任务减少停顿" },
                    { num: "02", text: "可纠错任务按需展开" },
                    { num: "03", text: "高风险任务增加确认" }
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-5 py-4 border-b border-[#C8D0D6]/50">
                      <span className="font-mono text-[#D95B4A] font-semibold text-[13px] bg-[#D95B4A]/10 px-2 py-0.5 rounded">{rule.num}</span>
                      <span className="text-[15px] font-medium text-[#202326]">{rule.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Middle Column: Flow Cards + Timeline */}
              <motion.div variants={fadeUp} className="md:col-span-1 lg:col-span-1 relative">
                
                {/* Vertical Timeline Line */}
                <div className="absolute left-[23px] top-[48px] bottom-[48px] w-[1px] border-l border-dashed border-[#C8D0D6]/60 z-0" />

                <div className="flex flex-col gap-5">
                  {rhythmFlows.map((item, idx) => {
                    const Icon = idx === 0 ? Focus : idx === 1 ? SlidersHorizontal : ShieldCheck;
                    
                    return (
                      <div key={idx} className="grid grid-cols-[46px_1fr] gap-3 xl:gap-4 relative z-10 items-stretch">
                         
                         {/* Node */}
                         <div className="flex justify-center pt-6">
                           <div className={`w-[26px] h-[26px] rounded-full border bg-white flex items-center justify-center text-[10px] font-mono font-semibold transition-colors duration-300 ${activeFlowIndex === idx ? 'border-[#D95B4A] text-[#D95B4A] shadow-sm ring-2 ring-[#D95B4A]/10' : 'border-[#C8D0D6] text-[#7C8792]'}`}>
                             0{idx + 1}
                           </div>
                         </div>
                         
                         {/* Flow Card */}
                         <motion.button 
                           whileHover={{ x: activeFlowIndex === idx ? 0 : 4 }}
                           transition={{ duration: 0.2 }}
                           onClick={() => setActiveFlowIndex(idx)}
                           className={`text-left p-6 rounded-[22px] border transition-all duration-300 relative overflow-hidden group shadow-sm ${
                             activeFlowIndex === idx 
                               ? 'bg-[#F7F9FA] border-[#202326]/40' 
                               : 'bg-white border-[#C8D0D6]/50 hover:border-[#202326]/30'
                           }`}
                         >
                           {/* Active Left Indicator Line */}
                           {activeFlowIndex === idx && (
                             <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#D95B4A] rounded-r-full" />
                           )}
                           
                           <div className="flex flex-col gap-4">
                             <div className="flex items-start justify-between">
                               <div className="flex items-center gap-3">
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${activeFlowIndex === idx ? 'bg-[#202326] text-white' : 'bg-[#EEF2F5] text-[#515154]'}`}>
                                   <Icon size={16} strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[17px] xl:text-[18px] font-semibold text-[#202326] leading-none mt-0.5">{item.flow}</h3>
                               </div>
                               <span className={`text-[11px] font-semibold px-2 py-1 rounded-[6px] shrink-0 mt-0.5 ${
                                 item.riskLabel === '高' ? 'bg-[#c9342e]/10 text-[#c9342e]' :
                                 item.riskLabel === '中' ? 'bg-[#D95B4A]/10 text-[#D95B4A]' :
                                 'bg-[#2d9f62]/10 text-[#2d9f62]'
                               }`}>
                                 {item.riskLabel}风险
                               </span>
                             </div>

                             <div className="text-[12px] font-mono font-medium text-[#515154] tracking-wide opacity-90 truncate bg-[#F3F5F7] px-2.5 py-1.5 rounded-md self-start border border-[#C8D0D6]/30 max-w-full">
                               {item.nodes}
                             </div>
                             
                             <p className="text-[13px] xl:text-[14px] text-[#515154] leading-relaxed">
                               {item.desc}
                             </p>
                           </div>
                         </motion.button>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Right Column: Active Flow Preview Card (Showcase Panel) */}
              <motion.div 
                variants={fadeUp} 
                className="md:col-span-1 lg:col-span-1 bg-[#F7F9FA] border border-[#C8D0D6]/50 rounded-[28px] p-6 lg:p-7 flex items-center justify-center min-h-[auto] lg:min-h-[680px] lg:sticky lg:top-[96px] shadow-sm overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFlowIndex}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <DeviceMockup 
                      src={rhythmFlows[activeFlowIndex].src} 
                      mediaType="video" 
                      className="max-w-[300px] xl:max-w-[340px]" 
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            06. Danger Ops Feedback
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#F3F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="危险操作的容错反馈" 
              subtitle="仓库现场操作频繁，误触会影响库存数据。删除、修改等危险动作，需要通过手势阻力、二次确认和结果反馈降低风险。"
            />
            
            <div className="bg-white border border-[rgba(32,35,38,0.08)] rounded-[28px] p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Device */}
                <motion.div variants={fadeUp} className="lg:col-span-5 flex justify-center">
                   <motion.div className="w-full max-w-[300px]" whileHover={{ y: -6, rotate: -0.4 }} transition={{ duration: 0.3 }}>
                     <DeviceMockup src={feedbackMotion.src} mediaType="video" fallbackImage={feedbackMotion.fallbackImage} />
                   </motion.div>
                </motion.div>

                {/* Right Risk Control Chain */}
                <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col">
                  
                  <div className="text-[11px] font-mono text-[#7C8792] uppercase tracking-widest mb-6">Risk Control Chain</div>

                  <div className="flex flex-col gap-6 relative">
                    {/* Stepper Line */}
                    <div className="absolute left-[23px] top-[32px] bottom-[32px] w-[2px] bg-[#C8D0D6]/60 z-0" />

                    {[
                      { step: "01", title: "手势防误触", effect: "删除入口不直接暴露在主操作区。", prevent: "滑动、点击过程中的误触。", tag: "PREVENT MISTAP" },
                      { step: "02", title: "二次确认", effect: "明确操作对象、结果和不可逆风险。", prevent: "误删导致库存数据异常。", tag: "CONFIRM RISK" },
                      { step: "03", title: "结果反馈", effect: "用 Toast 告知结果，不打断连续作业。", prevent: "频繁弹窗降低现场效率。", tag: "KEEP FLOW" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={sideHover}
                        className="flex gap-5 relative z-10 p-3 -ml-3 rounded-[16px] border border-transparent transition-colors duration-300 hover:bg-[#F7F9FA] hover:border-[#D95B4A]/40 group"
                      >
                        {/* Unified Light Stepper Icon */}
                        <div className="w-9 h-9 rounded-full bg-[#E9EEF2] border-2 border-white flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#D95B4A] group-hover:border-[#D95B4A]">
                          <span className="font-mono text-[11px] font-semibold text-[#202326] transition-colors duration-300 group-hover:text-white">{item.step}</span>
                        </div>
                        <div className="pt-1 flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[18px] font-semibold text-[#202326]">{item.title}</h4>
                            <span className="font-mono text-[10px] uppercase text-[#7C8792] px-2 py-1 bg-[#EEF2F5] rounded-md">{item.tag}</span>
                          </div>
                          <div className="text-[14px] flex flex-col gap-2">
                            <div className="flex gap-3"><span className="text-[#7C8792] shrink-0 font-medium w-8">作用</span><span className="text-[#515154]">{item.effect}</span></div>
                            <div className="flex gap-3"><span className="text-[#7C8792] shrink-0 font-medium w-8">避免</span><span className="text-[#515154]">{item.prevent}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-[#F7F9FA] rounded-[14px] p-5 mt-10 border border-[#C8D0D6]/50 flex items-start gap-3">
                    <CheckCircle2 size={18} strokeWidth={2} className="text-[#D95B4A] mt-0.5 shrink-0" />
                    <p className="text-[14px] font-medium text-[#202326] leading-relaxed">
                      核心原则：高风险动作增加确认，低风险反馈减少打扰。
                    </p>
                  </div>

                </motion.div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            07. Permission
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <motion.div variants={fadeUp} className="flex flex-col order-2 lg:order-1">
                <h3 className="text-[28px] font-semibold text-[#202326] tracking-tight mb-4">权限颗粒度：安全与配置成本的平衡</h3>
                <p className="text-[15px] text-[#515154] leading-relaxed mb-8">
                  权限不是越细越好。按钮级权限会显著增加多租户的配置与测试成本。系统控制在菜单、用户和仓库三层，既保证数据安全边界，也控制交付复杂度。
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  {[
                    { title: "1. 菜单权限", desc: "控制可见业务模块，避免无关角色进入高风险功能。", icon: LayoutGrid },
                    { title: "2. 用户范围", desc: "控制角色与组织范围，减少跨岗位误操作。", icon: UsersRound },
                    { title: "3. 仓库数据", desc: "隔离物理仓库数据边界，保证多仓管理安全。", icon: Warehouse }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={i} 
                        whileHover={sideHover}
                        className="bg-white p-4 rounded-[16px] border border-[#C8D0D6]/40 flex items-start gap-4 transition-colors duration-300 hover:bg-[#F7F9FA] hover:border-[#D95B4A]/40 group"
                      >
                        {/* Unified Light Section Icon */}
                        <div className="w-10 h-10 rounded-[12px] bg-[#E9EEF2] text-[#202326] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#D95B4A] group-hover:text-white">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-1 pt-0.5">
                          <div className="font-semibold text-[15px] text-[#202326]">{item.title}</div>
                          <div className="text-[13px] text-[#515154] leading-snug">{item.desc}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="bg-[#F7F9FA] px-5 py-4 rounded-[14px] text-[13px] text-[#515154] border border-[#C8D0D6]/50 flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#D95B4A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#202326]">不采用按钮级权限：</span> 
                    收益不足以覆盖高昂的配置、测试与交付成本。
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative aspect-[16/10] w-full rounded-[28px] bg-[#F3F5F7] overflow-hidden flex flex-col cursor-zoom-in order-1 lg:order-2 border border-black/5 shadow-sm group" onClick={() => setPreviewImage({src: CYG_IMAGES.permission, alt: "Permission"})}>
                <Image src={CYG_IMAGES.permission} alt="Permission UI Pattern" fill className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-[10px] border border-black/5 text-[11px] font-mono text-[#202326] shadow-sm">
                  Permission Model / 菜单 · 用户 · 仓库边界
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            08. Design Rules (Dark Tech Board)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#EEF2F5]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            
            <div className="bg-[#202326] rounded-[28px] overflow-hidden border border-white/10 flex flex-col shadow-lg">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between p-8 md:p-10 border-b border-white/10 gap-6">
                <div>
                  <div className="text-[11px] font-mono text-[#AAB3BA] tracking-widest uppercase mb-3">DESIGN SPECIFICATION</div>
                  <h2 className="text-[28px] font-semibold tracking-tight text-white mb-2">设计规范与交付资产</h2>
                  <p className="text-[14px] text-[#AAB3BA] leading-relaxed max-w-[560px]">
                    约束双端颜色语义、字体层级与组件状态，作为多客户交付的基础规范证据。
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Color", "Typography", "State Components"].map(tag => (
                    <span key={tag} className="border border-white/10 px-3 py-1.5 text-[11px] font-mono text-[#AAB3BA] bg-white/5 rounded-full transition-colors hover:border-[#D95B4A]/60 hover:text-white cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Split */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left: Tokens (Color & Type) */}
                <div className="p-8 md:p-10 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-white/10">
                  
                  {/* Colors */}
                  <div>
                    <div className="text-[12px] font-mono text-[#AAB3BA] uppercase mb-4">Color Semantics</div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {[
                        { name: "Base", hex: "#202326", text: "#FFFFFF" },
                        { name: "Surface", hex: "#F3F5F7", text: "#202326" },
                        { name: "Accent", hex: "#D95B4A", text: "#FFFFFF" },
                        { name: "Danger", hex: "#c9342e", text: "#FFFFFF" },
                        { name: "Success", hex: "#2d9f62", text: "#FFFFFF" }
                      ].map((c, i) => (
                        <div key={i} className="flex flex-col gap-2 group cursor-default">
                          <div className="h-12 w-full rounded-[8px] border border-white/10 transition-transform group-hover:scale-105" style={{backgroundColor: c.hex}} />
                          <div>
                            <div className="text-[12px] text-white font-medium">{c.name}</div>
                            <div className="text-[10px] text-[#AAB3BA] font-mono mt-0.5">{c.hex}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <div className="text-[12px] font-mono text-[#AAB3BA] uppercase mb-4">Typography Levels</div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-[18px] font-semibold text-white">Title 强调</span>
                        <span className="text-[12px] font-mono text-[#AAB3BA]">Semibold / 18-24px</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-[14px] text-white">Body 正文</span>
                        <span className="text-[12px] font-mono text-[#AAB3BA]">Regular / 14-16px</span>
                      </div>
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-[12px] font-mono text-white">Mono Label</span>
                        <span className="text-[12px] font-mono text-[#AAB3BA]">Medium / 11-12px</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right: Evidence Images */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-[12px] font-mono text-[#AAB3BA] uppercase mb-4">Spec Evidence Board</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-[#202326] border border-white/10 cursor-zoom-in group" onClick={() => setPreviewImage({src: CYG_IMAGES.designSpec1, alt: "Spec Typography & Colors"})}>
                      <Image src={CYG_IMAGES.designSpec1} alt="Spec Typography & Colors" fill className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-[#202326] border border-white/10 cursor-zoom-in group" onClick={() => setPreviewImage({src: CYG_IMAGES.designSpec2, alt: "Component Rules"})}>
                      <Image src={CYG_IMAGES.designSpec2} alt="Component Rules" fill className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            09. Outcome & Reflection
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              
              {/* Left: Outcome & Metric Strip */}
              <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col">
                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#202326] mb-4">项目交付成果</h3>
                <p className="text-[14px] text-[#515154] leading-relaxed mb-8">
                  这次交付不仅完成了当前客户的页面设计，更核心是将高频页面、RF 作业流和规范沉淀为可复用资产，有效降低后续多客户交付的重复设计成本。
                </p>

                {/* Horizontal Metric Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#F7F9FA] border border-[#C8D0D6]/50 rounded-[24px] overflow-hidden divide-x divide-y lg:divide-y-0 divide-[#C8D0D6]/50">
                  {[
                    { label: "Web 端页面", value: "28" },
                    { label: "弹窗 / 小窗", value: "48+" },
                    { label: "收货模式落地", value: "4" },
                    { label: "系统状态", value: "Live" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -3, backgroundColor: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                      className="p-6 flex flex-col justify-between h-[130px] cursor-default"
                    >
                      <span className="text-[11px] font-mono tracking-widest text-[#7C8792] uppercase">{stat.label}</span>
                      {stat.value === 'Live' ? (
                        <span className="text-[24px] font-semibold tracking-tight text-[#202326] mt-auto">
                          <span className="bg-[#EEF2F5] px-3.5 py-1.5 rounded-[8px] text-[13px] font-mono tracking-widest uppercase border border-[#C8D0D6]/50 text-[#4E5963]">Live</span>
                        </span>
                      ) : (
                        <span className="text-[36px] font-semibold tracking-tight leading-none text-[#202326]">
                          {stat.value}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Reflection */}
              <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col">
                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#202326] mb-8">关键复盘</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="relative pl-5 border-l-2 border-[#C8D0D6] transition-colors duration-300 hover:border-[#D95B4A]">
                    <h4 className="text-[16px] font-semibold text-[#202326] mb-2.5">1. 品牌色与危险语义解耦</h4>
                    <p className="text-[14px] text-[#515154] leading-relaxed">
                      在工业 WMS 中，红色天然承担异常语义。主操作色与警告色应尽早拆分，避免削弱一线操作员对高风险状态的直觉判断。
                    </p>
                  </div>
                  
                  <div className="relative pl-5 border-l-2 border-[#C8D0D6] transition-colors duration-300 hover:border-[#D95B4A]">
                    <h4 className="text-[16px] font-semibold text-[#202326] mb-2.5">2. 组件复用不等于流程均质化</h4>
                    <p className="text-[14px] text-[#515154] leading-relaxed">
                      标准收货和极简收货不应该套用同一节奏。即便 UI 外壳复用，轻流程也应追求极速闭环，而重流程必须预埋确认阻力与异常阻断。
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            Footer
            ========================================== */}
        <footer className="bg-[#202326] py-12 relative z-10 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-[#7C8792] text-[12px] font-medium leading-relaxed max-w-[600px]">
              CONFIDENTIALITY NOTICE: 本案例已做脱敏处理，界面内容仅用于展示设计推演逻辑、架构思维与交付规范准则，不含客户敏感生产经营数据。
            </p>
            <div className="text-[#7C8792]/50 text-[12px] font-semibold tracking-widest uppercase">
              End of Spec Document
            </div>
          </div>
        </footer>

      </main>

      {/* Global Long Image Modal */}
      <ImagePreviewModal 
        isOpen={!!previewImage} 
        onClose={() => setPreviewImage(null)} 
        src={previewImage?.src || ""} 
        alt={previewImage?.alt || ""} 
      />
    </div>
  );
}
