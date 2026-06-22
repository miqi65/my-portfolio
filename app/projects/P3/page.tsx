"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, X, ZoomIn, AlertTriangle } from "lucide-react";
import Link from "next/link";

// ==========================================
// 全局控制开关：是否显示占位图
// ==========================================
const USE_PLACEHOLDER_EVIDENCE = true;

// ==========================================
// 1. 无障碍动效预设 (支持 prefers-reduced-motion)
// ==========================================
function useMotionVariants() {
  const shouldReduceMotion = useReducedMotion();
  return {
    revealUp: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
      visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] } }
    },
    staggerFast: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } }
    }
  };
}

// ==========================================
// 2. 组件：无障碍全屏看图 (Lightbox)
// ==========================================
interface LightboxData { src: string; alt: string; }

function ImageLightbox({ data, onClose }: { data: LightboxData, onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const previousActiveElement = document.activeElement as HTMLElement;
    
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') onClose(); 
      if (e.key === 'Tab') {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => { 
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-[#151515]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`放大查看: ${data.alt}`}
      onClick={onClose}
    >
      <button 
        type="button"
        ref={closeBtnRef}
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="关闭放大视图"
        className="absolute top-4 right-4 md:top-6 md:right-6 text-[#F4F4EF] hover:text-[#B8E351] transition-colors bg-[#151515] border border-white/20 w-11 h-11 flex items-center justify-center z-[110] outline-none focus-visible:ring-2 focus-visible:ring-[#B8E351]"
      >
        <X size={24} strokeWidth={1.5} />
      </button>
      <div className="relative w-full max-w-[95vw] h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <Image src={data.src} alt={data.alt} fill className="object-contain" sizes="100vw" priority />
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. 组件：结构化证据图板 (EvidenceFrame)
// ==========================================
interface EvidenceFrameProps {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  evidenceType: 'brief' | 'flow' | 'context' | 'compare' | 'demo';
  onZoom: (data: LightboxData) => void;
  isPlaceholder?: boolean;
  placeholderTitle?: string;
  placeholderDesc?: string;
  placeholderFile?: string;
}

function EvidenceFrame({ src, alt, caption, badge, evidenceType, onZoom, isPlaceholder, placeholderTitle, placeholderDesc, placeholderFile }: EvidenceFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const renderHtmlEvidence = () => {
    switch (evidenceType) {
      case 'brief':
        return (
          <div className="absolute inset-0 bg-[#FAFAF7] flex flex-col md:flex-row text-[#151515] font-sans overflow-y-auto z-10">
            <div className="md:w-1/2 bg-[#F4F4EF] p-6 md:p-8 border-b md:border-b-0 md:border-r border-[rgba(21,21,21,0.18)] flex flex-col">
              <span className="font-mono text-[12px] text-[#5C5C57] mb-3 uppercase tracking-widest">Fuzzy Request / 原始需求</span>
              <p className="text-[16px] font-medium leading-[1.7] mb-8">“希望首页能看到所有设备和检测情况。”</p>
              <span className="font-mono text-[12px] text-[#9B302B] mb-3 block uppercase tracking-widest">Pending Confirmation / 待确认项</span>
              <ul className="text-[14px] space-y-2 text-[#444440] font-medium">
                <li>- 谁需要优先查看？</li>
                <li>- 最重要的异常是什么？</li>
                <li>- 用户看到异常后要做什么？</li>
                <li>- 哪些判断必须由人工完成？</li>
              </ul>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 bg-[#FAFAF7] flex flex-col">
              <span className="font-mono text-[12px] text-[#151515] bg-[#B8E351] px-2 py-0.5 w-fit mb-6 uppercase tracking-widest">决策简报 / Decision Brief</span>
              <div className="space-y-6 text-[15px]">
                <div>
                  <strong className="block mb-1 text-[#151515]">转化后的业务问题：</strong>
                  <span className="text-[#444440] leading-[1.6]">如何帮助操作员在多设备和多状态环境中，优先发现、理解并处理高风险异常？</span>
                </div>
                <div>
                  <strong className="block mb-1 text-[#151515]">成功判断标准：</strong>
                  <span className="text-[#444440] leading-[1.6]">异常处理闭环耗时缩短；操作员能准确接管错误检测并记录原因。</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'flow':
        return (
          <div className="absolute inset-0 bg-[#FAFAF7] p-6 md:p-8 flex flex-col text-[#151515] font-sans overflow-y-auto z-10">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-[#151515] text-[#F4F4EF] px-3 py-1 text-[14px] font-medium">目标用户：操作员</div>
              <div className="border border-[#151515] px-3 py-1 text-[14px] font-medium">目的：将复杂状态压缩为异常优先级与下一步动作</div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full text-[14px] font-medium mb-8">
              <div className="bg-[#E5E5E5] px-4 py-2 w-full md:w-auto text-center">正常监控</div>
              <ArrowLeft className="rotate-[-90deg] md:rotate-180 hidden md:block text-[#5C5C57]" size={16} />
              <div className="bg-[#B8E351] border border-[#151515] px-4 py-2 w-full md:w-auto text-center font-bold">异常发现</div>
              <ArrowLeft className="rotate-[-90deg] md:rotate-180 hidden md:block text-[#5C5C57]" size={16} />
              <div className="bg-[#E5E5E5] px-4 py-2 w-full md:w-auto text-center">查看原因</div>
              <ArrowLeft className="rotate-[-90deg] md:rotate-180 hidden md:block text-[#5C5C57]" size={16} />
              <div className="bg-[#151515] text-[#FAFAF7] px-4 py-2 w-full md:w-auto flex-1 text-center">人工确认或接管</div>
            </div>
            <div className="flex flex-wrap gap-2 text-[13px]">
              <span className="bg-[#FFF0ED] text-[#9B302B] border border-[#9B302B] px-3 py-1 font-medium">异常分支排查：</span>
              <span className="bg-[#FAFAF7] border border-[rgba(21,21,21,0.18)] px-3 py-1">设备离线</span>
              <span className="bg-[#FAFAF7] border border-[rgba(21,21,21,0.18)] px-3 py-1">数据延迟</span>
              <span className="bg-[#FAFAF7] border border-[rgba(21,21,21,0.18)] px-3 py-1">低置信度</span>
              <span className="bg-[#FAFAF7] border border-[rgba(21,21,21,0.18)] px-3 py-1">无权限拦截</span>
            </div>
          </div>
        );
      case 'context':
        return (
          <div className="absolute inset-0 bg-[#151515] text-[#FAFAF7] p-6 md:p-8 flex flex-col font-mono overflow-y-auto z-10">
            <span className="text-[12px] text-[#B8E351] mb-6 uppercase tracking-widest border-b border-[#444440] pb-2">结构化上下文 / Context Package</span>
            <div lang="en" className="text-[13px] md:text-[14px] leading-[1.7] text-[#A3A3A3] whitespace-pre-wrap">
<span className="text-[#CFE8F7]">业务目标 / Business Goal:</span> Resolve anomalies, not just monitoring.<br/>
<span className="text-[#CFE8F7]">目标用户 / Target User:</span> Line Operator.<br/>
<span className="text-[#CFE8F7]">状态规则 / State Rules:</span><br/>
&nbsp;&nbsp;<span className="text-[#B8E351]">- 离线 / Offline:</span> Disable live feed, show grey placeholder, block write actions.<br/>
&nbsp;&nbsp;<span className="text-[#B8E351]">- 低置信度 / Low Confidence:</span> Flag warning, require human manual confirmation.<br/>
<span className="text-[#CFE8F7]">权限规则 / Permission Rules:</span> Operator can mark false positive. Supervisor handles system reset.<br/>
<span className="text-[#CFE8F7]">语气规则 / Tone of Voice:</span> Concise, instructional, urgent for errors.
            </div>
          </div>
        );
      case 'compare':
        return (
          <div className="absolute inset-0 flex flex-col md:flex-row bg-[#E5E5E5] gap-px overflow-y-auto font-sans z-10">
            <div className="md:w-1/2 bg-[#FAFAF7] p-6 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-[#9B302B] text-white text-[12px] px-3 py-1 font-mono tracking-widest">AI 初稿 / RAW AI DRAFT</div>
              <div className="text-[15px] font-bold text-[#151515] mb-4">AI 初稿：KPI 堆叠</div>
              <div className="w-full h-8 bg-[#E5E5E5] mb-3"></div>
              <div className="flex gap-3 mb-4">
                <div className="flex-1 h-16 bg-[#E5E5E5] flex items-center justify-center text-[12px] text-[#5C5C57]">指标 1</div>
                <div className="flex-1 h-16 bg-[#E5E5E5] flex items-center justify-center text-[12px] text-[#5C5C57]">指标 2</div>
                <div className="flex-1 h-16 bg-[#E5E5E5] flex items-center justify-center text-[12px] text-[#5C5C57]">指标 3</div>
              </div>
              <div className="w-full flex-1 border border-[#9B302B] bg-[#FFF0ED] p-3 text-[13px] text-[#9B302B] font-medium mt-auto">
                缺陷批注：没有异常优先级，所有操作入口同权，只覆盖正常运行状态。
              </div>
            </div>
            <div className="md:w-1/2 bg-[#FAFAF7] p-6 flex flex-col relative border-l-4 border-[#B8E351]">
              <div className="absolute top-0 right-0 bg-[#151515] text-[#B8E351] text-[12px] px-3 py-1 font-mono tracking-widest">人工精修 / HUMAN REFINED</div>
              <div className="text-[15px] font-bold text-[#151515] mb-4">设计精修：异常与动作前置</div>
              <div className="w-full bg-[#FFF0ED] border border-[#9B302B] p-3 mb-4 flex justify-between items-center">
                <span className="text-[14px] text-[#9B302B] font-bold">1 项待处理异常 (相机 03 离线)</span>
                <span className="bg-[#9B302B] text-white text-[12px] px-3 py-1 font-medium">立即处理</span>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1">
                <div className="bg-[#E5E5E5] flex items-center justify-center text-[12px] text-[#5C5C57]">正常画面</div>
                <div className="bg-[#E5E5E5] flex items-center justify-center text-[12px] text-[#5C5C57]">正常画面</div>
                <div className="bg-[#F4F4EF] border-2 border-dashed border-[#5C5C57] flex items-center justify-center text-[12px] text-[#5C5C57] font-medium">
                  离线灰态 + 重连入口
                </div>
              </div>
            </div>
          </div>
        );
      case 'demo':
        return (
          <div className="absolute inset-0 bg-[#FAFAF7] flex flex-col md:flex-row p-0 font-sans overflow-y-auto z-10">
            <div className="md:w-2/5 p-6 border-b md:border-b-0 md:border-r border-[rgba(21,21,21,0.18)] flex flex-col justify-center bg-[#F4F4EF]">
              <span className="text-[12px] font-mono font-bold uppercase tracking-widest mb-3 border-b border-[rgba(21,21,21,0.18)] pb-2 text-[#151515]">已验证路径 / Demo Verified</span>
              <ul className="text-[14px] text-[#151515] space-y-2 font-medium">
                <li>1. 异常高亮发现</li>
                <li>2. 影响原因理解</li>
                <li>3. 权限判断与人工接管</li>
                <li>4. 处理结果日志记录</li>
              </ul>
            </div>
            <div className="md:w-3/5 p-6 bg-[#FAFAF7] flex flex-col">
              <span className="text-[#9B302B] text-[12px] font-mono font-bold uppercase tracking-widest mb-4 border-b border-[rgba(21,21,21,0.18)] pb-2">开发前风险清单 / Pre-development Risk List</span>
              <ul className="text-[14px] text-[#151515] space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#9B302B] mt-1.5 shrink-0"></div>
                  <span><strong className="text-[#9B302B] mr-1">实时数据延迟：</strong>WebSocket 推送可能存在延迟，前端需做兜底。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#9B302B] mt-1.5 shrink-0"></div>
                  <span><strong className="text-[#9B302B] mr-1">设备离线反馈：</strong>断网时前端必须即刻阻断写入操作并呈现灰态。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#9B302B] mt-1.5 shrink-0"></div>
                  <span><strong className="text-[#9B302B] mr-1">算法置信度：</strong>该字段后端未落库，需工程侧介入补全。</span>
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col h-full bg-[#FAFAF7] border border-[#151515]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#151515] bg-[#151515] text-[#FAFAF7]">
        <span className="font-mono text-[12px] tracking-widest uppercase">{badge}</span>
        <span className="font-mono text-[12px] opacity-60 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-[#B8E351]"></div>
          证据 / EVIDENCE
        </span>
      </div>
      
      <div className="relative w-full h-[360px] md:h-[420px] bg-[#E5E5E5] group border-b border-[rgba(21,21,21,0.18)]">
        {isPlaceholder ? (
           <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F4F4EF] z-10 border border-[rgba(21,21,21,0.05)]">
             <div className="text-[12px] font-mono font-bold bg-[#B8E351] text-[#151515] px-3 py-1 mb-6 uppercase tracking-widest">
               IMAGE PLACEHOLDER
             </div>
             <h4 className="text-[18px] font-sans font-bold text-[#151515] mb-3">{placeholderTitle}</h4>
             <p className="text-[14px] font-sans text-[#5C5C57] mb-6 max-w-[420px] leading-[1.6]">
               {placeholderDesc}
             </p>
             <div className="text-[12px] font-mono text-[#5C5C57] border border-[rgba(21,21,21,0.18)] px-4 py-3 bg-[#FAFAF7]">
               <div className="mb-1">文件建议: {placeholderFile}</div>
               <div>比例建议: 16:9 或 3:2</div>
             </div>
           </div>
        ) : (
          <>
            {!isLoaded && !hasError && <div className="absolute inset-0 animate-pulse motion-reduce:animate-none bg-[#F4F4EF] z-0" />}
            {hasError ? renderHtmlEvidence() : (
              <button 
                type="button"
                className="absolute inset-0 w-full h-full cursor-zoom-in outline-none focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-[#B8E351] z-10 block"
                onClick={() => onZoom({ src, alt })}
                aria-label={`放大查看方法证据: ${alt}`}
              >
                <Image
                  src={src} alt={alt} fill sizes="(max-width: 1280px) 100vw, 1280px"
                  className={`object-contain transition-transform duration-[400ms] ease-out group-hover:scale-[1.015] ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setIsLoaded(true)} onError={() => setHasError(true)}
                />
                <div className="absolute top-4 right-4 bg-[#151515] border border-[rgba(255,255,255,0.2)] p-2 text-[#FAFAF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <ZoomIn size={16} strokeWidth={1.5} />
                </div>
              </button>
            )}
          </>
        )}
      </div>

      {caption && (
        <div className="px-5 py-4 bg-[#FAFAF7] text-[15px] text-[#151515] font-sans leading-[1.7]">
          {caption}
        </div>
      )}
    </div>
  );
}

// ==========================================
// 主页面
// ==========================================
export default function AIWorkflowPage() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const { revealUp, staggerFast } = useMotionVariants();

  return (
    <div className="min-h-screen bg-[#F4F4EF] text-[#151515] font-sans selection:bg-[#B8E351] selection:text-[#151515] antialiased">
      
      <AnimatePresence>
        {lightboxData && <ImageLightbox data={lightboxData} onClose={() => setLightboxData(null)} />}
      </AnimatePresence>

      <nav className="fixed top-0 w-full z-50 bg-[#151515] text-[#FAFAF7] h-14 border-b border-[#444440] flex items-center">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-[14px] font-medium text-[#A3A3A3] hover:text-[#FAFAF7] transition-colors group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E351]">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[12px] tracking-[0.2em] text-[#A3A3A3] uppercase font-mono hidden sm:block">
            P3 · AI 辅助产品验证 / PRODUCT VALIDATION
          </div>
        </div>
      </nav>

      <main className="pt-14 pb-24 overflow-x-hidden">
        
        {/* ==========================================
            01. HERO
            ========================================== */}
        <section className="w-full border-b border-[#151515] bg-[linear-gradient(to_right,rgba(21,21,21,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.03)_1px,transparent_1px)] bg-[size:40px_40px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex border-b border-[#151515] text-[12px] font-mono tracking-widest uppercase text-[#5C5C57] px-6 lg:px-8 py-3 bg-[#FAFAF7]">
              <span className="font-bold text-[#151515]">P3 · AI 辅助产品验证 / PRODUCT VALIDATION</span>
            </div>

            <motion.div initial="hidden" animate="visible" variants={staggerFast} className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
              
              <div className="hidden md:flex flex-col items-center justify-between col-span-1 bg-[#B8E351] border-r border-[#151515] py-8">
                <div className="w-4 h-4 bg-[#151515]"></div>
                <div className="[writing-mode:vertical-lr] rotate-180 font-mono text-[12px] tracking-[0.3em] uppercase text-[#151515] font-bold">
                  方法 / METHODOLOGY
                </div>
                <div className="font-mono text-[12px] text-[#151515]">METHOD_01</div>
              </div>

              <div className="col-span-1 md:col-span-6 flex flex-col justify-center px-6 lg:px-12 py-16 border-r-0 md:border-r border-[#151515] bg-[#FAFAF7]/90">
                <motion.h1 variants={revealUp} className="text-[clamp(32px,4vw,56px)] font-sans font-semibold text-[#151515] leading-[1.15] tracking-tight mb-4">
                  AI辅助产品方案验证与交付方法
                </motion.h1>
                <motion.div variants={revealUp} className="text-[15px] text-[#5C5C57] font-sans font-normal mb-8">
                  AI-Assisted Product Validation & Delivery Method
                </motion.div>

                <motion.p variants={revealUp} className="text-[16px] md:text-[17px] text-[#151515] font-sans leading-[1.7] max-w-[500px] mb-12">
                  将模糊需求拆解为业务问题、用户路径、可演示 Demo 与开发前风险清单，帮助团队在投入开发前看清方向、边界和风险。
                </motion.p>

                <motion.div variants={revealUp} className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 border-t border-[rgba(21,21,21,0.18)] pt-5 mt-auto">
                  {[
                    ['案例类型', '方法型演示'],
                    ['场景来源', '脱敏工业 AI 场景'],
                    ['我的角色', '产品设计 / 工作流验证'],
                    ['核心产出', '决策简报 / Demo / 风险清单']
                  ].map(([label, val], idx) => (
                    <div key={idx} className="flex flex-col border-l border-[rgba(21,21,21,0.18)] pl-3 first:border-l-0 first:pl-0">
                      <span className="text-[12px] font-sans text-[#5C5C57] mb-1">{label}</span>
                      <span className="text-[14px] font-sans font-bold text-[#151515]">{val}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="col-span-1 md:col-span-5 flex flex-col bg-[#FAFAF7]">
                <motion.div variants={revealUp} className="flex-1 p-6 lg:p-8 border-b border-[#151515] bg-[#FAFAF7]">
                  <div className="font-mono text-[12px] font-bold text-[#151515] mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <div className="w-2 h-2 bg-[#151515]"></div> 我判断什么 / WHAT I DECIDE
                  </div>
                  <ul className="text-[15px] text-[#151515] font-sans leading-[1.7] space-y-1 font-medium">
                    <li>- 业务问题</li>
                    <li>- 用户路径</li>
                    <li>- 成功标准</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={revealUp} className="flex-1 p-6 lg:p-8 border-b border-[#151515] bg-[#CFE8F7]">
                  <div className="font-mono text-[12px] font-bold text-[#151515] mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <div className="w-2 h-2 bg-[#151515] rounded-full"></div> AI 辅助什么 / WHAT AI HELPS
                  </div>
                  <ul className="text-[15px] text-[#444440] font-sans leading-[1.7] space-y-1">
                    <li>- 方案探索</li>
                    <li>- 初稿生成</li>
                    <li>- 规则检查</li>
                  </ul>
                </motion.div>

                <motion.div variants={revealUp} className="flex-1 p-6 lg:p-8 bg-[#FAFAF7] border-t-4 border-[#B8E351]">
                  <div className="font-mono text-[12px] font-bold text-[#151515] mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <div className="w-2 h-2 bg-[#B8E351] rounded-none"></div> 团队拿到什么 / WHAT THE TEAM GETS
                  </div>
                  <ul className="text-[15px] text-[#151515] font-sans font-bold leading-[1.7] space-y-1">
                    <li>- 决策简报</li>
                    <li>- 可演示 Demo</li>
                    <li>- 风险清单</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            OWNERSHIP CALLOUT (可信说明)
            ========================================== */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mt-8 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp} className="bg-[#CFE8F7] border border-[#151515] p-5 md:p-6 text-[#151515] text-[15px] font-sans font-medium flex items-start gap-3">
             <div className="mt-1 shrink-0 w-2 h-2 bg-[#151515]"></div>
             <div className="space-y-3">
               <p><strong className="text-[#151515]">适用场景：</strong>B 端系统、AI 应用、工业软件、HMI、智能硬件后台等需要多角色、多状态、多异常路径判断的产品场景。</p>
               <p><strong className="text-[#151515]">边界说明：</strong>本页是基于既有工业 AI 场景抽象的 AI 辅助产品方案验证方法演示，不代表原项目当时使用 AI 辅助交付。AI 用于加快探索、生成和检查；业务判断、路径定义、状态边界和交付质量仍由设计师负责。</p>
             </div>
          </motion.div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          
          {/* ==========================================
              01. WHY THIS MATTERS (为什么需要这套方法)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="pb-16">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">01</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Why This Matters / 问题判断</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">为什么需要这套方法</h2>
              </div>
            </div>

            <p className="text-[16px] text-[#444440] font-sans mb-8">
              AI 能快速生成界面，但复杂 B 端产品更需要先判断方向、边界和风险。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 border border-[#151515] bg-[#151515] gap-px">
              {[
                { title: "方向偏离", text: "生成很快，但不一定解决正确问题。" },
                { title: "边界缺失", text: "界面完整，不代表状态、权限和异常路径完整。" },
                { title: "交付错觉", text: "能点击的 Demo，不等于工程可以直接投入开发。" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={revealUp} className="p-6 md:p-8 flex flex-col bg-[#FAFAF7]">
                  <h4 className="text-[18px] font-sans font-bold text-[#151515] mb-4">{item.title}</h4>
                  <p className="text-[15px] font-sans text-[#444440] leading-[1.65]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ==========================================
              02. WORKFLOW (从模糊需求到可交付方案)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">02</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Workflow / 人机分工</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">从模糊需求到可交付方案</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#151515] border border-[#151515]">
              {[
                {
                  step: "步骤 01 / STEP 01", title: "判断方向",
                  judge: "确认业务问题、用户任务和成功标准。",
                  ai: "整理信息缺口和流程分歧。",
                  out: "业务决策简报"
                },
                {
                  step: "步骤 02 / STEP 02", title: "构建方案",
                  judge: "定义状态规则、权限边界和关键路径。",
                  ai: "快速生成多个方案初稿。",
                  out: "产品上下文包 + 方案对比"
                },
                {
                  step: "步骤 03 / STEP 03", title: "验证交付",
                  judge: "检查异常状态、数据依赖和开发边界。",
                  ai: "辅助生成 Demo 和遗漏检查。",
                  out: "可演示 Demo + 开发前风险清单"
                }
              ].map((phase, idx) => (
                <motion.div key={idx} variants={revealUp} className="bg-[#FAFAF7] p-6 lg:p-8 flex flex-col">
                  <span className="font-mono text-[12px] text-[#5C5C57] block mb-2 uppercase tracking-widest">{phase.step}</span>
                  <h3 className="text-[20px] font-sans font-bold text-[#151515] mb-6">{phase.title}</h3>
                  
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="text-[12px] font-mono text-[#5C5C57] mb-1 font-bold">设计判断</div>
                      <div className="text-[15px] font-sans text-[#151515] font-medium leading-[1.6]">{phase.judge}</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-mono text-[#5C5C57] mb-1 font-bold">AI 辅助</div>
                      <div className="text-[15px] font-sans text-[#444440] leading-[1.6]">{phase.ai}</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-[rgba(21,21,21,0.18)]">
                    <span className="font-mono text-[12px] text-[#5C5C57] block mb-1 uppercase tracking-widest">产出</span>
                    <div className="text-[15px] font-sans font-bold text-[#151515]">{phase.out}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ==========================================
              03. APPLIED EVIDENCE (关键交付物节选)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-6 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">03</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Applied Evidence / 方法证据</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">关键交付物节选</h2>
              </div>
            </div>
            
            <p className="text-[16px] text-[#444440] font-sans mb-10 leading-[1.65]">
              <strong className="text-[#151515]">贯穿场景：</strong>工业 AI 质检异常处置。以下基于既有项目场景抽象，展示从模糊需求到风险清单的 AI 辅助方法演示，不代表原项目当时使用 AI 辅助交付。
            </p>

            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={revealUp}>
                  <EvidenceFrame 
                    src="/images/p3_assets/evidence-01.webp" 
                    alt="业务决策简报示例" 
                    badge="FIG.01 / 决策简报 / DECISION BRIEF"
                    evidenceType="brief"
                    caption="将一句模糊需求转成可讨论的业务问题、确认项和成功标准。" 
                    onZoom={setLightboxData}
                    isPlaceholder={USE_PLACEHOLDER_EVIDENCE}
                    placeholderTitle="待替换图：业务决策简报"
                    placeholderDesc="展示模糊需求如何被拆成业务问题、待确认项和成功判断标准。"
                    placeholderFile="/images/p3_assets/evidence-01.webp"
                  />
                </motion.div>
                <motion.div variants={revealUp}>
                  <EvidenceFrame 
                    src="/images/p3_assets/evidence-02.webp" 
                    alt="屏幕目的与路径示例" 
                    badge="FIG.02 / 屏幕目的 / SCREEN PURPOSE"
                    evidenceType="flow"
                    caption="明确这个屏幕解决什么任务，以及异常出现后用户该怎么处理。" 
                    onZoom={setLightboxData}
                    isPlaceholder={USE_PLACEHOLDER_EVIDENCE}
                    placeholderTitle="待替换图：屏幕目的与异常路径"
                    placeholderDesc="展示正常监控、异常发现、查看原因、人工确认/接管之间的任务路径。"
                    placeholderFile="/images/p3_assets/evidence-02.webp"
                  />
                </motion.div>
              </div>

              <motion.div variants={revealUp}>
                <EvidenceFrame 
                  src="/images/p3_assets/context-package.webp" 
                  alt="产品上下文包" 
                  badge="FIG.03 / 产品上下文包 / CONTEXT PACKAGE" 
                  evidenceType="context"
                  caption="把状态、权限、术语和业务规则整理成 AI 可读取的约束。" 
                  onZoom={setLightboxData}
                  isPlaceholder={USE_PLACEHOLDER_EVIDENCE}
                  placeholderTitle="待替换图：产品上下文包"
                  placeholderDesc="展示业务目标、目标用户、状态规则、权限规则和语气规则如何被整理成 AI 可读取约束。"
                  placeholderFile="/images/p3_assets/context-package.webp"
                />
              </motion.div>

              <motion.div variants={revealUp}>
                <EvidenceFrame 
                  src="/images/p3_assets/ai-draft-vs-human.webp" 
                  alt="初稿对比与精修批注" 
                  badge="FIG.04 / AI 初稿与人工精修 / RAW AI VS. HUMAN REFINED"
                  evidenceType="compare"
                  caption="保留 AI 的生成速度，但用人工判断修正优先级、异常状态和动作入口。" 
                  onZoom={setLightboxData}
                  isPlaceholder={USE_PLACEHOLDER_EVIDENCE}
                  placeholderTitle="待替换图：AI 初稿与人工精修对比"
                  placeholderDesc="展示 AI 初稿的问题，以及人工如何修正优先级、异常状态和动作入口。"
                  placeholderFile="/images/p3_assets/ai-draft-vs-human.webp"
                />
              </motion.div>

              <motion.div variants={revealUp}>
                <EvidenceFrame 
                  src="/images/p3_assets/qa-checklist.webp" 
                  alt="Demo 与交付风险清单" 
                  badge="FIG.05 / Demo 与风险清单 / DEMO & RISK LIST" 
                  evidenceType="demo"
                  caption="在开发前暴露接口、数据、权限和异常状态风险。" 
                  onZoom={setLightboxData}
                  isPlaceholder={USE_PLACEHOLDER_EVIDENCE}
                  placeholderTitle="待替换图：Demo 与开发前风险清单"
                  placeholderDesc="展示已验证路径、关键交互 Demo，以及接口、数据、权限、异常状态等开发前风险。"
                  placeholderFile="/images/p3_assets/qa-checklist.webp"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              04. HUMAN JUDGMENT (我如何筛掉错误方案)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">04</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Human Judgment / 方案取舍</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">我如何筛掉错误方案</h2>
              </div>
            </div>

            <div className="border border-[#151515] bg-[#FAFAF7]">
              <div className="hidden lg:grid grid-cols-12 border-b border-[#151515] bg-[#151515] text-[#FAFAF7] text-[12px] font-mono tracking-widest uppercase">
                <div className="col-span-3 p-4 border-r border-[#444440]">原始方案</div>
                <div className="col-span-3 p-4 border-r border-[#444440]">问题</div>
                <div className="col-span-3 p-4 border-r border-[#444440]">设计判断</div>
                <div className="col-span-3 p-4">最终处理</div>
              </div>

              {[
                { draft: "首页堆满 KPI", why: "看似完整，但不能指导操作。", judge: "操作员需要先处理异常。", final: "异常摘要与操作入口前置。" },
                { draft: "只覆盖正常状态", why: "不符合真实生产环境。", judge: "必须覆盖离线、延迟、无权限。", final: "补齐异常路径。" },
                { draft: "高危操作平铺", why: "容易误触。", judge: "危险操作需要确认和权限拦截。", final: "增加阻断与二次确认。" },
                { draft: "Demo 可点但边界不清", why: "工程无法估算投入。", judge: "可运行不等于可开发。", final: "补充接口依赖和风险清单。" }
              ].map((row, idx) => (
                <motion.div key={idx} variants={revealUp} className="grid grid-cols-1 lg:grid-cols-12 border-b border-[rgba(21,21,21,0.18)] last:border-b-0 hover:bg-[#F4F4EF] transition-colors font-sans">
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)]">
                    <span className="lg:hidden text-[12px] font-mono text-[#5C5C57] block mb-2 uppercase tracking-widest">原始方案</span>
                    <span className="text-[15px] text-[#5C5C57] line-through decoration-[rgba(21,21,21,0.4)]">{row.draft}</span>
                  </div>
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)] bg-[#FFF0ED]">
                    <span className="lg:hidden text-[12px] font-mono text-[#9B302B] block mb-2 uppercase tracking-widest">问题</span>
                    <span className="text-[15px] text-[#9B302B] font-medium">{row.why}</span>
                  </div>
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)]">
                    <span className="lg:hidden text-[12px] font-mono text-[#151515] block mb-2 uppercase tracking-widest">设计判断</span>
                    <span className="text-[15px] text-[#151515] font-bold">{row.judge}</span>
                  </div>
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 bg-[#FAFAF7] flex flex-col justify-center">
                    <span className="lg:hidden text-[12px] font-mono text-[#151515] block mb-2 uppercase tracking-widest">最终处理</span>
                    <span className="text-[15px] text-[#151515] leading-[1.65]">{row.final}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ==========================================
              05. QUALITY GATE (交付前质量检查)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">05</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Quality Gate / 质量阀</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">交付前质量检查</h2>
              </div>
            </div>

            {/* Top Warning Callout */}
            <motion.div variants={revealUp} className="bg-[#FFF0ED] border border-[#9B302B] p-5 md:p-6 text-[#9B302B] text-[15px] font-sans font-medium mb-8 flex items-start gap-3">
              <div className="mt-0.5 shrink-0"><AlertTriangle size={18} /></div>
              <div>AI 不替代商业决策、真实用户研究、工程架构判断和生产级代码。所有 AI 初稿必须经过人工评估后才能进入交付。</div>
            </motion.div>

            <div className="border border-[#151515] bg-[#FAFAF7] flex flex-col font-sans">
              {[
                { name: "业务对齐", check: "是否解决正确问题？", risk: "界面完整，但没有服务关键任务。", out: "业务决策简报" },
                { name: "任务清晰", check: "用户是否知道下一步做什么？", risk: "信息很多，但操作路径不清楚。", out: "屏幕目的" },
                { name: "状态完整", check: "空、加载、失败、离线、无权限是否覆盖？", risk: "只覆盖正常状态，后期容易返工。", out: "状态矩阵" },
                { name: "规则一致", check: "术语、组件、状态和警告等级是否统一？", risk: "同类异常在不同页面表达不一致。", out: "产品上下文包" },
                { name: "交付成熟", check: "接口、数据、权限和工程边界是否清楚？", risk: "Demo 可运行，但无法直接估算开发。", out: "开发前风险清单" }
              ].map((gate, idx) => (
                <motion.div key={idx} variants={revealUp} className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 md:p-6 border-b border-[rgba(21,21,21,0.18)] last:border-0 hover:bg-[#F4F4EF] transition-colors">
                  <div className="w-full sm:w-[140px] shrink-0 flex flex-col">
                    <h4 className="font-bold text-[#151515] text-[16px]">{gate.name}</h4>
                  </div>
                  <div className="flex-1 text-[15px] leading-[1.65]">
                    <div className="text-[#151515] font-bold mb-1">检查：{gate.check}</div>
                    <div className="text-[#9B302B] mb-4">风险：{gate.risk}</div>
                    <div className="text-[#151515] font-mono font-bold text-[12px] uppercase border border-[rgba(21,21,21,0.18)] inline-block px-2.5 py-1">
                      对应交付物：{gate.out}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* ==========================================
            06. BUSINESS VALUE (雇主能获得什么)
            ========================================== */}
        <section className="w-full bg-[#FAFAF7] text-[#151515] border-t border-[#151515] mt-8 pt-12 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">06</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Business Value / 业务价值</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">雇主能获得什么</h2>
              </div>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 font-sans">
              {[
                { title: "减少无效开发", text: "开发前先判断方向是否值得投入，避免做完才发现目标不清。" },
                { title: "提高决策效率", text: "老板、产品、工程、销售围绕同一个 Demo 讨论，减少反复解释。" },
                { title: "提前暴露落地风险", text: "在开发前识别接口、数据、权限和异常状态问题。" },
                { title: "形成可复用规则", text: "把状态、组件、术语和交付规则整理成可复用上下文，减少重复沟通。" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={revealUp} className="p-8 border border-[#151515] flex flex-col h-full bg-[#F4F4EF] text-[#151515] relative">
                  <div className="font-mono text-[40px] font-bold leading-none mb-6 text-[#151515]">0{idx+1}</div>
                  <h4 className="text-[18px] font-bold mb-3">{item.title}</h4>
                  <p className="text-[15px] leading-[1.65] mt-auto text-[#444440] font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center">
              <span className="text-[14px] text-[#5C5C57] font-sans font-medium">工具只用于辅助生成、检查和验证；最终判断由设计师完成。</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}