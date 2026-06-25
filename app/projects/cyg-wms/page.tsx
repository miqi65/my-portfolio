"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, X, CheckCircle2, ShieldCheck, 
  LayoutGrid, Maximize2, Focus,
  AlertCircle, CheckCircle, Trash2, Smartphone, Monitor
} from "lucide-react";
import Link from "next/link";

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
  poster: "/images/cyg-wms/feedback-danger-poster.png",
  title: "危险操作反馈动效",
  caption: "左滑删除、二次确认和成功反馈的完整操作节奏。"
};

const rhythmFlows = [
  { 
    flow: "轻流程", weightLabel: "LIGHT", nodes: "扫码 → 核对 → 提交",
    mediaType: "image" as const, src: CYG_IMAGES.flow1, poster: "", 
    desc: "高频无错流，追求快速闭环。" 
  },
  { 
    flow: "中流程", weightLabel: "MEDIUM", nodes: "扫码 → 卡片核对 → 数量编辑 → 提交",
    mediaType: "image" as const, src: CYG_IMAGES.flow2, poster: "",
    desc: "按需展开明细，控制现场纠错范围。" 
  },
  { 
    flow: "重流程", weightLabel: "HEAVY", nodes: "扫码 → 明细切换 → 异常确认 → 提交",
    mediaType: "image" as const, src: CYG_IMAGES.flow3_1, poster: "",
    desc: "高风险动作增加确认阻力，优先保证数据准确。" 
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111113]/95 backdrop-blur-xl p-4 md:p-8 cursor-zoom-out"
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
        <h2 className={`text-[32px] md:text-[40px] font-semibold tracking-tight ${dark ? 'text-[#F5F5F7]' : 'text-[#1D1D1F]'} mb-4`}>
          {title}
        </h2>
        <p className={`text-[15px] md:text-[17px] ${dark ? 'text-[#A1A1AA]' : 'text-[#6E6E73]'} max-w-[720px] leading-relaxed`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

interface ProcessMediaCardProps {
  title?: string;
  desc?: string;
  mediaType: "image" | "video";
  src: string;
  poster?: string;
  onClickZoom?: () => void;
  aspectRatioClassName?: string;
}

function ProcessMediaCard({ title, mediaType, src, poster, onClickZoom, aspectRatioClassName = "aspect-[9/16] h-[520px] md:h-[640px]" }: ProcessMediaCardProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoReady = () => {
    setIsLoaded(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div 
      className={`relative w-full overflow-hidden bg-[#F5F5F7] ${aspectRatioClassName} group ${onClickZoom && mediaType === 'image' ? 'cursor-zoom-in' : ''}`}
      onClick={mediaType === 'image' && onClickZoom ? onClickZoom : undefined}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E5E5E5] animate-pulse z-0" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F5F5F7] border border-black/5 text-[#A1A1AA] text-[12px] font-mono p-6 text-center">
          <span className="mb-2 opacity-50"><AlertCircle size={24} /></span>
          <span className="text-[10px] mt-1 break-all opacity-60">MEDIA UNAVAILABLE</span>
        </div>
      ) : mediaType === "video" ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 z-10 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          autoPlay loop muted playsInline preload="auto"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={src} alt={title || "Process Media"} fill
          className={`object-cover object-top transition-all duration-700 z-10 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {mediaType === 'image' && onClickZoom && !hasError && (
        <div className="absolute inset-0 bg-[#111113]/0 group-hover:bg-[#111113]/10 transition-colors flex items-center justify-center backdrop-blur-0 opacity-0 group-hover:opacity-100 duration-300 z-20">
          <div className="bg-white text-[#1D1D1F] px-4 py-2 rounded-full font-medium text-[13px] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all border border-black/5">
            <Maximize2 size={16} /> 点击放大
          </div>
        </div>
      )}
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
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#F5521B]/20 selection:text-[#F5521B] antialiased">
      
      {/* 极简顶导 */}
      <nav className="fixed top-0 w-full z-50 bg-[#111113]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-[13px] font-medium tracking-wide">Back to Work</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#A1A1AA] uppercase font-mono">
            CYG WMS <span className="text-[#F5521B] ml-2 font-bold">2.0</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-14 overflow-hidden">
        
        {/* ==========================================
            01. Hero Cover
            ========================================== */}
        <motion.section initial="hidden" animate="visible" variants={stagger} className="relative w-full min-h-[90vh] lg:min-h-[900px] flex items-center bg-[#050505] overflow-hidden py-16 lg:py-0">
          
          <motion.div 
            initial={{ opacity: 0, x: 24 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute inset-y-0 right-0 w-[68%] xl:w-[72%] h-full z-0 pointer-events-none"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)" }}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image src={CYG_IMAGES.hero} alt="CYG WMS Hero" fill priority className="object-contain object-right opacity-90" sizes="75vw" />
            </div>
          </motion.div>

          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none w-full" style={{ background: "linear-gradient(to right, #050505 0%, rgba(5,5,5,0.96) 28%, rgba(5,5,5,0.65) 45%, rgba(5,5,5,0.2) 55%, transparent 100%)" }} />

          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-center max-w-[600px]">
                
                <motion.div variants={fadeUp} className="text-[11px] lg:text-[12px] font-mono text-[#A1A1AA] tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                  <span>WMS WAREHOUSE MANAGEMENT SYSTEM</span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.08] tracking-tight text-[#F5F5F7] mb-4">
                  CYG 智能仓储管理系统
                </motion.h1>
                <motion.h2 variants={fadeUp} className="text-[18px] md:text-[22px] font-medium text-[#A1A1AA] mb-8">
                  Web 管理端 + RF 手持终端｜双端全链路设计
                </motion.h2>

                <motion.p variants={fadeUp} className="text-[15px] lg:text-[16px] text-[#A1A1AA] leading-[1.8] mb-10">
                  将客户原型拆解为可复用的 Web 模板、RF 作业流程、权限模型与设计规范，支撑多客户场景下的快速交付与持续迭代。
                </motion.p>

                {/* Chips */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-12">
                  {['Web 管理端', 'RF 手持终端', '模板矩阵', '权限模型'].map((chip, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-[#111113]/80 border border-white/10 rounded-[8px] text-[13px] text-[#A1A1AA] transition-colors cursor-default">
                      {chip}
                    </span>
                  ))}
                </motion.div>

                {/* Key Metrics */}
                <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 max-w-[600px] border-t border-white/10 pt-8">
                  <div className="flex flex-col"><span className="text-[28px] font-medium text-[#F5F5F7]">28</span><span className="text-[11px] text-[#6E6E73] uppercase tracking-wider mt-1">Web 页面</span></div>
                  <div className="flex flex-col"><span className="text-[28px] font-medium text-[#F5F5F7]">48<span className="text-[16px] font-normal text-[#F5521B] ml-0.5">+</span></span><span className="text-[11px] text-[#6E6E73] uppercase tracking-wider mt-1">弹窗/小窗</span></div>
                  <div className="flex flex-col"><span className="text-[28px] font-medium text-[#F5F5F7]">4</span><span className="text-[11px] text-[#6E6E73] uppercase tracking-wider mt-1">收货模式</span></div>
                  <div className="flex flex-col"><span className="text-[28px] font-medium text-[#F5521B]">Live</span><span className="text-[11px] text-[#6E6E73] uppercase tracking-wider mt-1">已上线</span></div>
                </motion.div>

              </div>
              
              {/* Mobile Hero Image */}
              <motion.div variants={fadeUp} className="lg:hidden relative w-full h-[340px] mt-8 rounded-[20px] overflow-hidden bg-[#111113] border border-white/10">
                <Image src={CYG_IMAGES.hero} alt="CYG WMS Hero" fill className="object-contain p-6" />
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            02. Situation & Tension
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#F5F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="项目约束与设计判断" 
              subtitle="CYG WMS 面向多客户、多仓库、多作业流程交付。设计重点不是复刻原型，而是把高频场景抽象成可复用结构，同时保留非标业务的扩展空间。"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              <motion.div variants={fadeUp} className="lg:col-span-5">
                <div className="bg-[#FFFFFF] rounded-[20px] p-8 md:p-10 h-full flex flex-col justify-center border border-black/5">
                  <div className="text-[11px] text-[#86868B] font-mono tracking-widest uppercase mb-4">Context</div>
                  <h3 className="text-[24px] font-semibold text-[#1D1D1F] tracking-tight mb-8">
                    从页面交付到系统沉淀
                  </h3>
                  
                  <div className="flex flex-col gap-8">
                    <div>
                      <div className="text-[13px] font-mono text-[#1D1D1F] font-semibold mb-3 border-b border-black/5 pb-2">PROJECT INPUT</div>
                      <ul className="space-y-2 text-[14px] text-[#515154]">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#1D1D1F] rounded-full" />客户 HTML 原型</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#1D1D1F] rounded-full" />Web 管理端 + RF 手持终端</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#1D1D1F] rounded-full" />多客户、多流程复用</li>
                      </ul>
                    </div>

                    <div>
                      <div className="text-[13px] font-mono text-[#F5521B] font-semibold mb-3 border-b border-black/5 pb-2">MY ROLE</div>
                      <ul className="space-y-2 text-[14px] text-[#515154]">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F5521B] rounded-full" />RF 端 UI 与交互独立负责</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F5521B] rounded-full" />Web 端组件体系协作</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F5521B] rounded-full" />输出流程、模板、权限模型与规范沉淀</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-4">
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
                    <div key={idx} className="bg-[#FFFFFF] border border-black/5 rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-l-4 hover:border-l-[#F5521B] transition-all duration-300 border-l-4 border-l-transparent">
                      <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-[#F5F5F7] rounded-full text-[#1D1D1F]">
                        <Icon size={18} />
                      </div>
                      
                      <div className="grow">
                        <h4 className="text-[17px] font-semibold text-[#1D1D1F] mb-3">{card.title}</h4>
                        <div className="space-y-2.5">
                          <div className="text-[14px]">
                            <span className="text-[#86868B] w-[72px] inline-block">业务现实</span>
                            <span className="text-[#515154]">{card.reality}</span>
                          </div>
                          <div className="text-[14px]">
                            <span className="text-[#86868B] w-[72px] inline-block">设计风险</span>
                            <span className="text-[#515154]">{card.risk}</span>
                          </div>
                          <div className="text-[14px] bg-[#F5F5F7] px-3 py-2 rounded-[8px] mt-2 border border-black/5">
                            <span className="text-[#F5521B] w-[72px] inline-block font-medium">设计回应</span>
                            <span className="text-[#1D1D1F] font-medium">{card.response}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            03. Web vs RF (Refined)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="双端信息密度差异：同一业务，不同终端不能照搬" 
              subtitle="同一个入库任务，Web 需要承载查询、配置和批量管理；RF 则只服务现场当前动作。两端不是视觉适配关系，而是任务密度重组关系。"
            />

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)] gap-8 mb-10">
              
              {/* Web Card */}
              <motion.div variants={fadeUp} className="bg-[#F5F5F7] rounded-[20px] border border-black/5 flex flex-col h-full">
                <div className="p-8 pb-6 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Monitor size={18} className="text-[#1D1D1F]" />
                      <h4 className="text-[20px] font-semibold text-[#1D1D1F]">Web 管理端</h4>
                    </div>
                    <p className="text-[14px] text-[#6E6E73]">高密度配置 · 表格 / 弹窗 / 表单区块</p>
                  </div>
                  <span className="bg-white px-3 py-1.5 rounded-[8px] border border-black/5 text-[12px] font-semibold text-[#1D1D1F]">全量字段呈现</span>
                </div>
                <div className="px-8 pb-8 grow flex flex-col">
                  <div className="relative w-full aspect-[16/10] lg:aspect-[16/9] rounded-[14px] overflow-hidden border border-black/10 bg-white cursor-zoom-in" onClick={() => setPreviewImage({src: CYG_IMAGES.webView, alt: "Web View"})}>
                    <Image src={CYG_IMAGES.webView} alt="Web View" fill className="object-cover object-top" />
                  </div>
                </div>
              </motion.div>

              {/* RF Card */}
              <motion.div variants={fadeUp} className="bg-[#F5F5F7] rounded-[20px] border border-black/5 flex flex-col h-full">
                <div className="p-8 pb-6 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone size={18} className="text-[#1D1D1F]" />
                      <h4 className="text-[20px] font-semibold text-[#1D1D1F]">RF 手持终端</h4>
                    </div>
                    <p className="text-[14px] text-[#6E6E73]">现场扫码 · 小屏 / 戴手套</p>
                  </div>
                </div>
                <div className="px-8 pb-8 grow flex flex-col items-center">
                  <div 
                    className="relative w-full max-w-[280px] aspect-[9/16] rounded-[14px] overflow-hidden bg-transparent cursor-zoom-in" 
                    onClick={() => setPreviewImage({src: CYG_IMAGES.rfView, alt: "RF View"})}
                  >
                    <Image src={CYG_IMAGES.rfView} alt="RF View" fill className="object-contain object-top" />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="pl-5 border-l-2 border-[#F5521B]">
              <p className="text-[16px] text-[#1D1D1F] font-medium leading-relaxed">
                Web 负责系统完整性，RF 负责现场确定性。两端不是视觉适配关系，而是任务密度重组关系。
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ==========================================
            04. Web Template Matrix
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#F5F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Text */}
              <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col justify-center sticky top-[100px]">
                <div className="inline-block text-[#F5521B] font-mono tracking-widest text-[11px] uppercase mb-4">Web Matrix</div>
                <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1D1D1F] tracking-tight mb-6 leading-[1.15]">
                  把后台页面拆解为可复用资产
                </h2>
                <p className="text-[15px] text-[#515154] leading-relaxed mb-10">
                  标准化不是追求 100% 配置化，而是让高频标准场景不再重复设计开发。Web 端被拆解为列表、弹窗、表单区块与导航规则，非标业务保留单独评估入口。
                </p>

                <div className="flex flex-col gap-6">
                  {[
                    { title: "1. 列表 / 弹窗模板", desc: "覆盖勾选、序号、Tab + 弹窗等高频查询与批量操作。" },
                    { title: "2. 表单区块复用", desc: "将概要、基础、策略、包装、库位等长表单拆成可组合结构。" },
                    { title: "3. 导航与反馈规则", desc: "统一侧边栏、弹窗层级和状态反馈，降低研发理解成本。" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1"><CheckCircle2 size={18} className="text-[#1D1D1F]" /></div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#1D1D1F] mb-1">{item.title}</div>
                        <div className="text-[14px] text-[#6E6E73] leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Showcase */}
              <motion.div variants={fadeUp} className="lg:col-span-8 flex flex-col gap-5">
                <div 
                  className="relative w-full h-[520px] lg:h-[640px] bg-[#111113] border border-white/10 rounded-[20px] overflow-hidden cursor-zoom-in group flex flex-col"
                  onClick={() => setPreviewImage({src: webMatrixScreens[activeMatrixIndex].src, alt: webMatrixScreens[activeMatrixIndex].title})}
                >
                  <div className="grow relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeMatrixIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-6 md:p-10"
                      >
                        <Image 
                          src={webMatrixScreens[activeMatrixIndex].src} 
                          alt={webMatrixScreens[activeMatrixIndex].title}
                          fill 
                          className="object-contain p-6 md:p-10"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Bottom Info Bar */}
                  <div className="border-t border-white/10 bg-[#050505]/50 px-6 py-4 flex flex-col">
                    <div className="text-[14px] font-semibold text-[#F5F5F7] mb-1">{webMatrixScreens[activeMatrixIndex].title}</div>
                    <div className="text-[13px] text-[#A1A1AA]">{webMatrixScreens[activeMatrixIndex].caption}</div>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
                  {webMatrixScreens.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMatrixIndex(idx)}
                      className={`relative shrink-0 w-[140px] h-[84px] rounded-[12px] overflow-hidden border transition-all duration-300 outline-none flex flex-col bg-[#111113] ${
                        activeMatrixIndex === idx 
                          ? 'border-[#F5521B] opacity-100' 
                          : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <Image src={screen.src} alt={screen.title} fill className="object-cover object-top" />
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            05. RF Field Operation
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#111113]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="四种收货模式 × 一套组件外壳" 
              subtitle="四种收货模式对应不同客户现场的作业差异。设计策略不是压平业务，而是在统一扫码框、信息卡片和操作栏的前提下，让字段组合与流程深度按场景变化。"
              dark
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: CYG_IMAGES.rfMain, title: "01 待办列表", strategy: "统一任务入口，减少现场人员在多层菜单中查找。" },
                { img: CYG_IMAGES.rfModeStandard, title: "02 标准收货", strategy: "字段核对较重，支持逐件扫描与数量确认。" },
                { img: CYG_IMAGES.rfModeComplex, title: "03 ASN 收货", strategy: "以箱维度组织流程，支持明细与汇总切换。" },
                { img: CYG_IMAGES.rfModeLite, title: "04 按单收货", strategy: "保留品名、应收 / 已收和当前数量，快速完成确认。" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col bg-[#1D1D1F] rounded-[20px] overflow-hidden border border-white/10 group">
                  <div className="relative w-full h-[460px] lg:h-[500px] bg-[#050505] overflow-hidden cursor-zoom-in" onClick={() => setPreviewImage({src: item.img, alt: item.title})}>
                    <Image src={item.img} alt={item.title} fill className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  
                  <div className="p-6 grow flex flex-col bg-[#1D1D1F] border-t border-white/5 min-h-[120px]">
                    <span className="text-[15px] font-semibold text-white tracking-wide mb-2">{item.title}</span>
                    <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                      {item.strategy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            06. Operation Rhythm (Refined)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="操作节奏分层：轻流程快确认，重流程强校验" 
              subtitle="组件复用 ≠ 节奏一刀切。根据流程的重要度和风险等级，同一套 UI 组件被赋予不同的操作阻力。"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Switcher List */}
              <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-4">
                {rhythmFlows.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveFlowIndex(idx)}
                    className={`text-left p-5 md:p-6 rounded-[18px] border transition-all duration-300 relative overflow-hidden ${
                      activeFlowIndex === idx 
                        ? 'bg-white border-[#F5521B]' 
                        : 'bg-[#F5F5F7] border-black/5 hover:border-black/10'
                    }`}
                  >
                    {activeFlowIndex === idx && (
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F5521B]" />
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[18px] font-semibold text-[#1D1D1F]">{item.flow}</h3>
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-black/5 px-2 py-1 rounded text-[#515154]">
                        {item.weightLabel}
                      </span>
                    </div>
                    <div className="text-[13px] font-mono font-semibold text-[#1D1D1F] tracking-wide mb-3 opacity-80">
                      {item.nodes}
                    </div>
                    <p className="text-[14px] text-[#6E6E73] leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </motion.div>

              {/* Right: Preview Panel */}
              <motion.div variants={fadeUp} className="lg:col-span-7 bg-[#F5F5F7] border border-black/5 rounded-[20px] min-h-[560px] lg:min-h-[620px] flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFlowIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-[340px] aspect-[9/16] rounded-[18px] overflow-hidden bg-white border border-black/5 cursor-zoom-in"
                    onClick={() => setPreviewImage({src: rhythmFlows[activeFlowIndex].src, alt: rhythmFlows[activeFlowIndex].flow})}
                  >
                    <Image 
                      src={rhythmFlows[activeFlowIndex].src} 
                      alt={rhythmFlows[activeFlowIndex].flow} 
                      fill 
                      className="object-contain object-top" 
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            07. Danger Ops Feedback (Refined)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#F5F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <SectionHeader 
              title="危险操作反馈与容错机制" 
              subtitle="在嘈杂、高频、戴手套操作的仓库现场，误触会直接影响库存数据准确性。危险操作需要通过手势阻力、二次确认和低打扰反馈建立容错闭环。"
            />
            
            <div className="bg-white border border-black/5 rounded-[20px] p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Device */}
                <motion.div variants={fadeUp} className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="w-full max-w-[300px] bg-[#F5F5F7] rounded-[20px] p-3 border border-black/5">
                    <ProcessMediaCard 
                      mediaType={feedbackMotion.mediaType}
                      src={feedbackMotion.src}
                      poster={feedbackMotion.poster}
                      aspectRatioClassName="aspect-[9/16] w-full rounded-[14px]"
                    />
                  </div>
                </motion.div>

                {/* Right Rules */}
                <motion.div variants={fadeUp} className="lg:col-span-8 flex flex-col gap-3 md:gap-4">
                  
                  <div className="bg-[#F5F5F7] border border-black/5 rounded-[14px] p-5 flex gap-4">
                    <span className="font-mono text-[#86868B] text-[13px] mt-0.5">01</span>
                    <div>
                      <h4 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">左滑删除</h4>
                      <p className="text-[14px] text-[#515154] leading-relaxed">通过手势增加操作阻力，避免高频列表中的直列按钮误触。</p>
                    </div>
                  </div>

                  <div className="bg-[#F5F5F7] border border-black/5 rounded-[14px] p-5 flex gap-4">
                    <span className="font-mono text-[#86868B] text-[13px] mt-0.5">02</span>
                    <div>
                      <h4 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">二次确认</h4>
                      <p className="text-[14px] text-[#515154] leading-relaxed">危险操作前置确认，明确对象、结果与不可逆风险。</p>
                    </div>
                  </div>

                  <div className="bg-[#F5F5F7] border border-black/5 rounded-[14px] p-5 flex gap-4">
                    <span className="font-mono text-[#86868B] text-[13px] mt-0.5">03</span>
                    <div>
                      <h4 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">成功反馈</h4>
                      <p className="text-[14px] text-[#515154] leading-relaxed">低打扰 Toast 反馈，保证连续作业不中断。</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-[#F5521B] pl-4 mt-5">
                    <p className="text-[14px] font-medium text-[#1D1D1F]">
                      目标不是增加步骤，而是在高风险动作前增加必要阻力，在低风险反馈中减少打扰。
                    </p>
                  </div>

                </motion.div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* ==========================================
            08. Permission
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              <motion.div variants={fadeUp} className="flex flex-col gap-6 order-2 lg:order-1">
                <div>
                  <h3 className="text-[28px] font-semibold text-[#1D1D1F] tracking-tight mb-4">权限颗粒度：安全边界与配置成本的平衡</h3>
                  <p className="text-[15px] text-[#515154] leading-relaxed">
                    权限不是越细越好。按钮级权限会显著增加配置与测试成本。当前系统更适合控制在菜单、用户和仓库三层，既保证安全边界，也控制管理复杂度。
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-[#F5F5F7] p-5 rounded-[16px] border border-black/5">
                    <div className="font-semibold text-[15px] text-[#1D1D1F] mb-2">1. 菜单权限</div>
                    <div className="text-[13px] text-[#6E6E73] leading-relaxed">控制可见业务模块。</div>
                  </div>
                  <div className="bg-[#F5F5F7] p-5 rounded-[16px] border border-black/5">
                    <div className="font-semibold text-[15px] text-[#1D1D1F] mb-2">2. 用户范围</div>
                    <div className="text-[13px] text-[#6E6E73] leading-relaxed">控制角色与组织范围。</div>
                  </div>
                  <div className="bg-[#F5F5F7] p-5 rounded-[16px] border border-black/5">
                    <div className="font-semibold text-[15px] text-[#1D1D1F] mb-2">3. 仓库数据</div>
                    <div className="text-[13px] text-[#6E6E73] leading-relaxed">隔离物理仓库数据边界。</div>
                  </div>
                </div>

                <div className="pl-4 border-l-2 border-[#1D1D1F] mt-4">
                  <span className="text-[14px] text-[#1D1D1F] font-medium">不采用按钮级权限：配置成本高、测试成本高，收益不足以覆盖交付复杂度。</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative aspect-[4/3] w-full rounded-[20px] bg-[#F5F5F7] overflow-hidden flex items-center justify-center p-6 cursor-zoom-in order-1 lg:order-2 border border-black/5" onClick={() => setPreviewImage({src: CYG_IMAGES.permission, alt: "Permission"})}>
                <Image src={CYG_IMAGES.permission} alt="Permission UI Pattern" fill className="object-contain p-6 md:p-10" />
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            09. Design Rules (Refined Spec Board)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-[#050505] text-[#F5F5F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="border border-white/15 rounded-[20px] overflow-hidden bg-[#050505] flex flex-col divide-y divide-white/15">

              {/* 1. Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
                <div className="lg:col-span-8 p-6 md:p-8">
                  <div className="text-[11px] font-mono text-[#A1A1AA] tracking-widest uppercase mb-3">DESIGN SYSTEM / 交付规范</div>
                  <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight mb-3 text-white">设计规范与交付沉淀</h2>
                  <p className="text-[14px] text-[#A1A1AA] leading-relaxed max-w-[640px]">
                    这套规范用于约束 Web 管理端与 RF 手持终端在多客户交付中的颜色语义、字体层级、组件状态和危险操作反馈，减少重复设计、低级返工和跨端理解成本。
                  </p>
                </div>
                <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-end gap-2">
                  <div className="border border-white/15 px-3 py-1.5 text-[11px] font-mono text-[#A1A1AA] bg-[#111113]">01 Color Semantics</div>
                  <div className="border border-white/15 px-3 py-1.5 text-[11px] font-mono text-[#A1A1AA] bg-[#111113]">02 Typography Scale</div>
                  <div className="border border-white/15 px-3 py-1.5 text-[11px] font-mono text-[#A1A1AA] bg-[#111113]">03 Component States</div>
                </div>
              </div>

              {/* 2. Type Specimen Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col">
                  <div className="text-[11px] font-mono text-[#A1A1AA] uppercase mb-6">Brand Type</div>
                  <div className="text-[64px] md:text-[80px] lg:text-[96px] xl:text-[104px] font-light tracking-tight leading-none mb-8 border-b border-white/15 pb-6 truncate">
                    CYG WMS
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[12px] text-[#A1A1AA] font-mono">
                    <div>
                      <div className="mb-1 text-white/70">中文 / 英文 / 数字</div>
                      <div>PingFang SC / Noto Sans SC</div>
                      <div>Inter / SF Pro Display</div>
                      <div className="mt-4 mb-1 text-white/70">Mono 字体</div>
                      <div>JetBrains Mono / ui-monospace</div>
                    </div>
                    <div>
                      <div className="mb-1 text-white/70">字重使用规范</div>
                      <div>Regular (400) - 正文 / 数据</div>
                      <div>Medium (500) - 标签 / 辅助元素</div>
                      <div>Semibold (600) - 标题 / 强调</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 grid grid-cols-3 divide-x divide-white/15">
                  <div className="flex flex-col p-4 md:p-6 pb-0 overflow-hidden relative min-h-[180px] md:min-h-[220px]">
                    <span className="text-[11px] font-mono text-[#A1A1AA]">Light</span>
                    <div className="absolute -bottom-6 left-4 text-[96px] md:text-[120px] font-light text-white/10 leading-none select-none">Aa</div>
                  </div>
                  <div className="flex flex-col p-4 md:p-6 pb-0 overflow-hidden relative min-h-[180px] md:min-h-[220px]">
                    <span className="text-[11px] font-mono text-[#A1A1AA]">Regular</span>
                    <div className="absolute -bottom-6 left-4 text-[96px] md:text-[120px] font-normal text-white/20 leading-none select-none">Aa</div>
                  </div>
                  <div className="flex flex-col p-4 md:p-6 pb-0 overflow-hidden relative min-h-[180px] md:min-h-[220px]">
                    <span className="text-[11px] font-mono text-[#A1A1AA]">Semibold</span>
                    <div className="absolute -bottom-8 left-4 text-[96px] md:text-[120px] font-semibold text-white/40 leading-none select-none">仓</div>
                  </div>
                </div>
              </div>

              {/* 3. Color Palette Row */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="text-[11px] font-mono text-[#A1A1AA] uppercase mb-4">Color Palette / 色彩语义</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/15 border border-white/15 rounded-[12px] overflow-hidden">
                  {[
                    { name: "Dark Board", usage: "深色展示板", hex: "#050505", text: "#F5F5F7" },
                    { name: "Off White", usage: "页面浅底", hex: "#F5F5F7", text: "#1D1D1F" },
                    { name: "Surface", usage: "内容容器", hex: "#FFFFFF", text: "#1D1D1F" },
                    { name: "Accent Orange", usage: "项目强调", hex: "#F5521B", text: "#FFFFFF" },
                    { name: "Danger Red", usage: "危险操作", hex: "#C62828", text: "#FFFFFF" },
                    { name: "Success Green", usage: "完成状态", hex: "#2DA562", text: "#FFFFFF" }
                  ].map((color, i) => (
                    <div key={i} className="h-[96px] md:h-[108px] flex flex-col justify-between p-3" style={{ backgroundColor: color.hex, color: color.text }}>
                      <span className="text-[12px] font-semibold">{color.name}</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] opacity-70">{color.usage}</span>
                        <span className="text-[10px] font-mono opacity-50">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Bottom Row: Type Scale + Evidence */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
                
                {/* Type Scale */}
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-[11px] font-mono text-[#A1A1AA] uppercase mb-4">Typography Scale</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 text-[#A1A1AA]">
                    {[
                      { label: "Hero Title", size: "64–72px", weight: "W600" },
                      { label: "Section Title", size: "36–44px", weight: "W600" },
                      { label: "Card Title", size: "18–22px", weight: "W600" },
                      { label: "Body", size: "15–17px", weight: "W400" },
                      { label: "Mono Label", size: "11–12px", weight: "W500" }
                    ].map((scale, i) => (
                      <div key={i} className="flex flex-col border-t border-white/15 pt-3">
                        <span className="text-[12px] text-white font-medium mb-1">{scale.label}</span>
                        <span className="text-[11px] font-mono">{scale.size} / {scale.weight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evidence */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-[11px] font-mono text-[#A1A1AA] uppercase mb-4">Spec Evidence</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-[120px] md:h-[140px] rounded-[10px] overflow-hidden bg-[#111113] border border-white/15 cursor-zoom-in" onClick={() => setPreviewImage({src: CYG_IMAGES.designSpec1, alt: "Spec Typography & Colors"})}>
                      <Image src={CYG_IMAGES.designSpec1} alt="Spec Typography & Colors" fill className="object-contain p-2 md:p-3" />
                    </div>
                    <div className="relative h-[120px] md:h-[140px] rounded-[10px] overflow-hidden bg-[#111113] border border-white/15 cursor-zoom-in" onClick={() => setPreviewImage({src: CYG_IMAGES.designSpec2, alt: "Component Rules"})}>
                      <Image src={CYG_IMAGES.designSpec2} alt="Component Rules" fill className="object-contain p-2 md:p-3" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
            10. Outcome & Reflection (Refined)
            ========================================== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="py-20 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              
              {/* Left: Outcome & Metric Strip */}
              <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col">
                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] mb-4">项目交付成果</h3>
                <p className="text-[14px] text-[#515154] leading-relaxed mb-8">
                  这次交付不是单纯完成页面数量，而是把高频页面、RF 作业流、权限模型和设计规范沉淀为可复用资产，降低后续多客户交付的重复成本。
                </p>

                {/* Horizontal Metric Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-black/10 rounded-[20px] overflow-hidden divide-x divide-y lg:divide-y-0 divide-black/10">
                  {[
                    { label: "Web 端页面", value: "28", highlight: false },
                    { label: "弹窗 / 小窗组件", value: "48+", highlight: false },
                    { label: "收货模式落地", value: "4", highlight: false },
                    { label: "系统交付状态", value: "Live", highlight: true }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 flex flex-col justify-between h-[132px] md:h-[140px] hover:bg-[#F5F5F7]/50 transition-colors">
                      <span className="text-[11px] font-mono tracking-widest text-[#86868B] uppercase">{stat.label}</span>
                      <span className={`text-[36px] md:text-[40px] font-semibold tracking-tight leading-none ${stat.highlight ? 'text-[#F5521B]' : 'text-[#1D1D1F]'}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Reflection */}
              <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col">
                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] mb-8">关键复盘与下一版优化</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="relative pl-5 border-l-2 border-[#1D1D1F]">
                    <h4 className="text-[16px] md:text-[17px] font-semibold text-[#1D1D1F] mb-2">1. 主操作色与危险色需要解耦</h4>
                    <p className="text-[14px] text-[#515154] leading-relaxed">
                      品牌色可以保留在识别层，但在工业 WMS 中，红色天然承担异常、删除和危险语义。下一版应更早拆分主操作色与警告色，避免削弱一线操作员对风险状态的判断。
                    </p>
                  </div>
                  
                  <div className="relative pl-5 border-l-2 border-[#1D1D1F]">
                    <h4 className="text-[16px] md:text-[17px] font-semibold text-[#1D1D1F] mb-2">2. 组件可以复用，但流程阻力必须分层</h4>
                    <p className="text-[14px] text-[#515154] leading-relaxed">
                      标准收货和极简按单收货不应该套用同一节奏。组件外壳可以复用，但轻流程应快速闭环，重流程需要增加核对、确认和异常阻断。
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
        <footer className="bg-[#111113] py-12 relative z-10 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-white/40 text-[12px] font-medium leading-relaxed max-w-[600px]">
              CONFIDENTIALITY NOTICE: 本案例已做脱敏处理，界面内容仅用于展示设计推演逻辑、架构思维与交付规范准则，不含客户敏感生产经营数据。
            </p>
            <div className="text-white/40 text-[12px] font-semibold tracking-widest uppercase">
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
