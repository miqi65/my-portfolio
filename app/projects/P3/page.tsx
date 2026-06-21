"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
// [修改 P1.8] 删除未使用的 CheckSquare import
import { ArrowLeft, X, ZoomIn, AlertTriangle, Cpu, XCircle } from "lucide-react";
import Link from "next/link";

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
}

function EvidenceFrame({ src, alt, caption, badge, evidenceType, onZoom }: EvidenceFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const renderHtmlEvidence = () => {
    switch (evidenceType) {
      case 'brief':
        return (
          <div className="absolute inset-0 bg-[#FAFAF7] flex flex-col md:flex-row text-[#151515] font-sans overflow-y-auto">
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
              <span className="font-mono text-[12px] text-[#151515] bg-[#B8E351] px-2 py-0.5 w-fit mb-6 uppercase tracking-widest">Decision Brief</span>
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
          <div className="absolute inset-0 bg-[#FAFAF7] p-6 md:p-8 flex flex-col text-[#151515] font-sans overflow-y-auto">
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
          <div className="absolute inset-0 bg-[#151515] text-[#FAFAF7] p-6 md:p-8 flex flex-col font-mono overflow-y-auto">
            <span className="text-[12px] text-[#B8E351] mb-6 uppercase tracking-widest border-b border-[#444440] pb-2">Context Package / 结构化上下文</span>
            <div lang="en" className="text-[13px] md:text-[14px] leading-[1.7] text-[#A3A3A3] whitespace-pre-wrap">
<span className="text-[#CFE8F7]">Business Goal:</span> Resolve anomalies, not just monitoring.<br/>
<span className="text-[#CFE8F7]">Target User:</span> Line Operator.<br/>
<span className="text-[#CFE8F7]">State Rules:</span><br/>
&nbsp;&nbsp;<span className="text-[#B8E351]">- Offline:</span> Disable live feed, show grey placeholder, block write actions.<br/>
&nbsp;&nbsp;<span className="text-[#B8E351]">- Low_Confidence:</span> Flag warning, require human manual confirmation.<br/>
<span className="text-[#CFE8F7]">Permission Rules:</span> Operator can mark false positive. Supervisor handles system reset.<br/>
<span className="text-[#CFE8F7]">Tone of Voice:</span> Concise, instructional, urgent for errors.
            </div>
          </div>
        );
      case 'compare':
        return (
          <div className="absolute inset-0 flex flex-col md:flex-row bg-[#E5E5E5] gap-px overflow-y-auto font-sans">
            <div className="md:w-1/2 bg-[#FAFAF7] p-6 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-[#9B302B] text-white text-[12px] px-3 py-1 font-mono tracking-widest">RAW AI DRAFT</div>
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
              <div className="absolute top-0 right-0 bg-[#151515] text-[#B8E351] text-[12px] px-3 py-1 font-mono tracking-widest">HUMAN REFINED</div>
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
          <div className="absolute inset-0 bg-[#FAFAF7] flex flex-col md:flex-row p-0 font-sans overflow-y-auto">
            <div className="md:w-2/5 p-6 border-b md:border-b-0 md:border-r border-[rgba(21,21,21,0.18)] flex flex-col justify-center bg-[#F4F4EF]">
              <span className="text-[12px] font-mono font-bold uppercase tracking-widest mb-3 border-b border-[rgba(21,21,21,0.18)] pb-2 text-[#151515]">Demo Verified / 已验证路径</span>
              <ul className="text-[14px] text-[#151515] space-y-2 font-medium">
                <li>1. 异常高亮发现</li>
                <li>2. 影响原因理解</li>
                <li>3. 权限判断与人工接管</li>
                <li>4. 处理结果日志记录</li>
              </ul>
            </div>
            <div className="md:w-3/5 p-6 bg-[#FAFAF7] flex flex-col">
              <span className="text-[#9B302B] text-[12px] font-mono font-bold uppercase tracking-widest mb-4 border-b border-[rgba(21,21,21,0.18)] pb-2">Pre-development Risk List</span>
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
          EVIDENCE
        </span>
      </div>
      
      <div className="relative w-full h-[360px] md:h-[420px] bg-[#E5E5E5] group border-b border-[rgba(21,21,21,0.18)]">
        {!isLoaded && !hasError && <div className="absolute inset-0 animate-pulse motion-reduce:animate-none bg-[#F4F4EF] z-0" />}
        {hasError ? renderHtmlEvidence() : (
          <button 
            type="button"
            className="absolute inset-0 w-full h-full cursor-zoom-in outline-none focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-[#B8E351] z-10 block"
            onClick={() => onZoom({ src, alt })}
            aria-label={`放大查看产出凭证: ${alt}`}
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
            MIKI PORTFOLIO / WORKFLOW
          </div>
        </div>
      </nav>

      <main className="pt-14 pb-24 overflow-x-hidden">
        
        {/* ==========================================
            01. HERO (统一字体，主次分明)
            ========================================== */}
        <section className="w-full border-b border-[#151515] bg-[linear-gradient(to_right,rgba(21,21,21,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.03)_1px,transparent_1px)] bg-[size:40px_40px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex border-b border-[#151515] text-[12px] font-mono tracking-widest uppercase text-[#5C5C57] px-6 lg:px-8 py-3 bg-[#FAFAF7]">
              <span className="font-bold text-[#151515]">P3 · AI PRODUCT DESIGN DELIVERY</span>
            </div>

            <motion.div initial="hidden" animate="visible" variants={staggerFast} className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
              
              <div className="hidden md:flex flex-col items-center justify-between col-span-1 bg-[#B8E351] border-r border-[#151515] py-8">
                <div className="w-4 h-4 bg-[#151515]"></div>
                <div className="[writing-mode:vertical-lr] rotate-180 font-mono text-[12px] tracking-[0.3em] uppercase text-[#151515] font-bold">
                  METHODOLOGY
                </div>
                <div className="font-mono text-[12px] text-[#151515]">SYS_01</div>
              </div>

              <div className="col-span-1 md:col-span-6 flex flex-col justify-center px-6 lg:px-12 py-16 border-r-0 md:border-r border-[#151515] bg-[#FAFAF7]/90">
                <motion.h1 variants={revealUp} className="text-[clamp(32px,4vw,56px)] font-sans font-semibold text-[#151515] leading-[1.15] tracking-tight mb-4">
                  业务驱动、AI 辅助的<br />产品设计交付流
                </motion.h1>
                <motion.div variants={revealUp} className="text-[15px] text-[#5C5C57] font-sans font-normal mb-8">
                  Business-Driven, AI-Assisted Product Design Workflow
                </motion.div>

                <motion.p variants={revealUp} className="text-[16px] md:text-[17px] text-[#151515] font-sans leading-[1.7] max-w-[500px] mb-12">
                  把模糊业务需求转化为可演示、可评估、可推进的产品方案。并通过产品上下文、设计判断、可验证 Demo 与 QA 规则控制交付质量。
                </motion.p>

                <motion.div variants={revealUp} className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 border-t border-[rgba(21,21,21,0.18)] pt-5 mt-auto">
                  {[
                    ['案例性质', '方法验证案例'],
                    ['经验来源', '工业 AI 真实场景（已脱敏抽象）'],
                    ['我的角色', '工作流与原型设计'],
                    ['核心输出', '简报 / Demo / 风险']
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
                    <div className="w-2 h-2 bg-[#151515]"></div> 我定义什么 / WHAT I DEFINE
                  </div>
                  <ul className="text-[15px] text-[#151515] font-sans leading-[1.7] space-y-1 font-medium">
                    <li>- 业务问题</li>
                    <li>- 屏幕目的</li>
                    <li>- 用户路径</li>
                    <li>- 成功判断标准</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={revealUp} className="flex-1 p-6 lg:p-8 border-b border-[#151515] bg-[#CFE8F7]">
                  <div className="font-mono text-[12px] font-bold text-[#151515] mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <Cpu size={14} className="text-[#151515]"/> AI 加速什么 / WHAT AI ACCELERATES
                  </div>
                  <ul className="text-[15px] text-[#444440] font-sans leading-[1.7] space-y-1">
                    <li>- 方案探索</li>
                    <li>- UI 初稿</li>
                    <li>- 原型代码</li>
                    <li>- 重复性检查</li>
                  </ul>
                </motion.div>

                <motion.div variants={revealUp} className="flex-1 p-6 lg:p-8 bg-[#FAFAF7] border-t-4 border-[#B8E351]">
                  <div className="font-mono text-[12px] font-bold text-[#151515] mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <div className="w-2 h-2 bg-[#B8E351] rounded-none"></div> 团队得到什么 / WHAT THE TEAM GETS
                  </div>
                  <ul className="text-[15px] text-[#151515] font-sans font-bold leading-[1.7] space-y-1">
                    <li>- 业务决策简报</li>
                    <li>- 可决策原型</li>
                    <li>- 开发前风险清单</li>
                    <li>- 产品上下文与规则</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          
          {/* ==========================================
              02. OWNERSHIP & WHY THIS MATTERS
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16">
            <div className="border border-[#151515] bg-[#151515] flex flex-col md:flex-row mb-16">
               <div className="flex-1 p-6 lg:p-8 bg-[#FAFAF7] border-b md:border-b-0 md:border-r border-[rgba(21,21,21,0.18)]">
                  <div className="text-[12px] font-mono text-[#151515] font-bold mb-4 flex items-center gap-2 tracking-widest">
                    <div className="w-2 h-2 bg-[#151515]"></div> 我负责 / MY OWNERSHIP
                  </div>
                  <ul className="text-[15px] text-[#151515] font-sans font-medium leading-[1.7] space-y-1">
                    <li>- 业务问题拆解与屏幕目的定义</li>
                    <li>- Context 结构设计与 AI 方案筛选</li>
                    <li>- Figma 人工精修与 Demo 验证</li>
                    <li>- 状态与风险检查、Design QA</li>
                  </ul>
               </div>
               
               {/* [修改 P0] 修复对比度：将原来暗色背景上的半透明卡片 bg-[#CFE8F7]/20 替换为浅蓝实底 bg-[#CFE8F7]，增加 font-medium 保障字号清晰，并在移动端增加顶边框避免混淆。 */}
               <div className="flex-1 p-6 lg:p-8 bg-[#CFE8F7] text-[#151515] border-t md:border-t-0 border-[#151515]">
                  <div className="text-[12px] font-mono text-[#151515] font-bold mb-4 flex items-center gap-2 tracking-widest">
                    <Cpu size={14} className="text-[#151515]" /> AI 辅助 / AI ASSISTANCE
                  </div>
                  <ul className="text-[15px] font-sans font-medium leading-[1.7] space-y-1 text-[#444440]">
                    <li>- 结构化信息整理</li>
                    <li>- UI 方案快速探索</li>
                    <li>- 初稿与验证代码生成</li>
                    <li>- 重复性设计规范检查</li>
                    <li>- 交付文档初步整理</li>
                  </ul>
               </div>
            </div>

            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">01</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Observation / 问题判断</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">AI 提高了生成速度，也放大了错误方向的成本</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border border-[#151515] bg-[#151515] gap-px">
              {[
                { title: "方向偏离", text: "生成极快，但缺乏业务对齐，方向可能在起步时就未被充分验证。" },
                { title: "边界缺失", text: "界面看似完整，但经常遗漏高风险的权限转移与极端异常状态。" },
                { title: "交付错觉", text: "能点击的 Demo 不等于具备团队可顺利推进的开发与验收条件。" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={revealUp} className="p-6 md:p-8 flex flex-col bg-[#FAFAF7]">
                  <h4 className="text-[18px] font-sans font-bold text-[#151515] mb-4">{item.title}</h4>
                  <p className="text-[15px] font-sans text-[#444440] leading-[1.65]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ==========================================
              03. PROCESS (明确的人机分工交付流)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">02</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Process / 过程说明</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">明确人工与 AI 分工的端到端交付流</h2>
              </div>
            </div>

            <div className="flex flex-col border border-[#151515] bg-[#151515] gap-px">
              {[
                {
                  phase: "01 判断方向", en: "DECIDE", goal: "确认业务问题、用户任务和成功判断标准。",
                  steps: [
                    { name: "Align", judge: "确认业务目标、约束与成功标准", ai: "识别信息缺口", out: "业务决策简报" },
                    { name: "Frame", judge: "定义屏幕目的、任务与异常路径", ai: "比较流程分歧", out: "屏幕目的说明" }
                  ]
                },
                {
                  phase: "02 构建方案", en: "BUILD", goal: "组织产品上下文，生成多个方向并通过人工判断选择和精修。",
                  steps: [
                    { name: "Context", judge: "明确必须保持一致的设计与业务规则", ai: "上下文结构化", out: "产品上下文包" },
                    { name: "Generate", judge: "判断优先级、删除无效方向与精修", ai: "快速探索初稿", out: "方案筛选对比" }
                  ]
                },
                {
                  phase: "03 验证交付", en: "VALIDATE", goal: "通过 Demo、风险清单和规则帮助团队判断是否值得投入开发。",
                  steps: [
                    { name: "Prototype", judge: "关键路径逻辑与状态完整性把控", ai: "辅助构建代码", out: "可决策原型" },
                    { name: "Deliver", judge: "识别风险、明确前端与数据的交付边界", ai: "遗漏排查辅助", out: "开发前风险清单" }
                  ]
                }
              ].map((phase, idx) => (
                <div key={idx} className="bg-[#FAFAF7] flex flex-col lg:flex-row">
                  <div className="lg:w-1/4 p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)] bg-[#FAFAF7]">
                    <h3 className="text-[18px] font-sans font-bold text-[#151515] mb-1">{phase.phase}</h3>
                    <span className="font-mono text-[12px] text-[#5C5C57] block mb-3 uppercase tracking-widest">{phase.en}</span>
                    <p className="text-[15px] font-sans text-[#444440] leading-[1.65]">{phase.goal}</p>
                  </div>
                  <div className="lg:w-3/4 flex flex-col">
                    {phase.steps.map((step, sIdx) => (
                      <div key={sIdx} className="grid grid-cols-1 md:grid-cols-12 border-b border-[rgba(21,21,21,0.18)] last:border-b-0">
                        <div className="col-span-1 md:col-span-5 p-5 border-b md:border-b-0 md:border-r border-[rgba(21,21,21,0.18)]">
                          <h4 className="font-mono text-[12px] text-[#5C5C57] block mb-2 uppercase tracking-widest">{step.name}</h4>
                          <div className="text-[14px] font-sans font-bold text-[#151515] mb-1">设计判断</div>
                          <div className="text-[15px] font-sans text-[#444440] leading-[1.6]">{step.judge}</div>
                        </div>
                        <div className="col-span-1 md:col-span-4 p-5 border-b md:border-b-0 md:border-r border-[rgba(21,21,21,0.18)] bg-[#CFE8F7]/20 flex flex-col justify-center">
                          <div className="text-[14px] font-sans font-bold text-[#151515] mb-1 mt-2 md:mt-0">AI 辅助</div>
                          <div className="text-[15px] font-sans text-[#444440] leading-[1.6]">{step.ai}</div>
                        </div>
                        <div className="col-span-1 md:col-span-3 p-5 flex flex-col justify-center">
                          <span className="font-mono text-[12px] text-[#5C5C57] block mb-1 uppercase tracking-widest">阶段产出</span>
                          <div className="text-[15px] font-sans font-bold text-[#151515]">{step.out}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ==========================================
              04. APPLIED EVIDENCE (具体场景贯穿)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-6 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">03</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Applied Evidence / 应用证据</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">贯穿全链路的真实方法产出</h2>
              </div>
            </div>
            
            <div className="mb-10 text-[15px] text-[#444440] bg-[#FAFAF7] border border-[#151515] p-4 font-sans">
              <strong className="text-[#151515]">贯穿场景：</strong> 工业 AI 质检异常处置 (基于真实项目抽象的脱敏方法演示，不代表新增上线项目)。<br/>
              <strong className="text-[#151515]">核心问题：</strong> 如何帮助操作员在多设备和多状态环境中，优先发现、理解并处理高风险异常？
            </div>

            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={revealUp}>
                  <EvidenceFrame 
                    src="/images/p3_assets/evidence-01.webp" 
                    alt="业务决策简报示例" 
                    badge="FIG.01 / DECISION BRIEF"
                    evidenceType="brief"
                    caption="从模糊需求到业务决策简报：明确业务目标、待确认事项与成功判断标准。" 
                    onZoom={setLightboxData} 
                  />
                </motion.div>
                <motion.div variants={revealUp}>
                  <EvidenceFrame 
                    src="/images/p3_assets/evidence-02.webp" 
                    alt="屏幕目的与路径示例" 
                    badge="FIG.02 / SCREEN PURPOSE"
                    evidenceType="flow"
                    caption="定义屏幕目的与异常处理路径：覆盖从正常监控到人工接管的完整异常阻断分支。" 
                    onZoom={setLightboxData} 
                  />
                </motion.div>
              </div>

              <motion.div variants={revealUp}>
                <EvidenceFrame 
                  src="/images/p3_assets/context-package.webp" 
                  alt="产品上下文包" 
                  badge="FIG.03 / CONTEXT PACKAGE" 
                  evidenceType="context"
                  caption="沉淀产品上下文包：将业务目标、状态机规则和权限拦截逻辑转换为清晰的约束结构供 AI 读取。" 
                  onZoom={setLightboxData} 
                />
              </motion.div>

              <motion.div variants={revealUp}>
                <EvidenceFrame 
                  src="/images/p3_assets/ai-draft-vs-human.webp" 
                  alt="初稿对比与精修批注" 
                  badge="FIG.04 / RAW AI VS. HUMAN REFINED"
                  evidenceType="compare"
                  caption="AI 初稿与人工精修：修正 AI 强加的无效 KPI，按业务重要性重构异常列队，并补全离线缺省态。" 
                  onZoom={setLightboxData} 
                />
              </motion.div>

              <motion.div variants={revealUp}>
                <EvidenceFrame 
                  src="/images/p3_assets/qa-checklist.webp" 
                  alt="Demo 与交付风险清单" 
                  badge="FIG.05 / DEMO & RISK LIST" 
                  evidenceType="demo"
                  caption="可决策原型与开发前风险清单：明确界面背后的接口延迟风险、置信度来源依赖，设定断网灰态的安全验收标准。" 
                  onZoom={setLightboxData} 
                />
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              05. WHAT CHANGED (风险与取舍)
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">04</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Human Judgment / 风险与取舍</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">人工判断与被放弃的方案</h2>
              </div>
            </div>

            {/* 被放弃的方案 */}
            <div className="mb-10 bg-[#FAFAF7] border border-[#151515] p-6 md:p-8">
              <div className="font-mono text-[12px] text-[#9B302B] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <XCircle size={16} /> 被放弃的方案 / REJECTED OPTIONS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                <div>
                  <h4 className="text-[16px] font-bold text-[#151515] mb-2">方案 A：KPI Dashboard</h4>
                  <p className="text-[15px] text-[#9B302B] mb-2 font-medium">问题：视觉完整，但不能帮助操作员优先处理异常。</p>
                  <p className="text-[15px] text-[#151515] mb-2"><strong className="text-[#444440]">放弃原因：</strong>数据展示没有转化为行动优先级。</p>
                  <p className="text-[15px] text-[#444440]"><strong className="text-[#151515]">保留内容：</strong>仅保留少量必要指标。</p>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#151515] mb-2">方案 B：设备卡片平铺</h4>
                  <p className="text-[15px] text-[#9B302B] mb-2 font-medium">问题：能看到设备，但无法理解异常影响和处理顺序。</p>
                  <p className="text-[15px] text-[#151515] mb-2"><strong className="text-[#444440]">放弃原因：</strong>设备视角强于任务视角。</p>
                  <p className="text-[15px] text-[#444440]"><strong className="text-[#151515]">保留内容：</strong>设备状态降级为异常上下文。</p>
                </div>
              </div>
              <div className="mt-8 pt-5 border-t border-[rgba(21,21,21,0.18)] text-[15px] font-sans font-bold text-[#151515]">
                最终决策：优先聚焦异常任务的信息结构。<span className="font-normal text-[#444440] ml-2 text-[15px]">结果并非由 AI 自动生成，而是基于业务风险与用户任务作出的取舍。</span>
              </div>
            </div>

            <div className="border border-[#151515] bg-[#FAFAF7]">
              <div className="hidden lg:grid grid-cols-12 border-b border-[#151515] bg-[#151515] text-[#FAFAF7] text-[12px] font-mono tracking-widest uppercase">
                <div className="col-span-3 p-4 border-r border-[#444440]">原始方案</div>
                <div className="col-span-3 p-4 border-r border-[#444440]">为什么不能推进</div>
                <div className="col-span-3 p-4 border-r border-[#444440]">设计判断</div>
                <div className="col-span-3 p-4">最终决策 & 关联证据</div>
              </div>

              {[
                { draft: "首页堆叠 KPI 和图表", why: "无法定位操作重点", judge: "用户需优先发现异常", final: "异常摘要与操作前置", link: "FIG.04" },
                { draft: "只覆盖正常使用状态", why: "忽略生产真实环境", judge: "必须覆盖离线与错误", final: "补全离线等异常路径", link: "FIG.05" },
                { draft: "危险操作入口平铺", why: "极易引发误触", judge: "高危动作需二次确认", final: "增加权限与阻断确认", link: "FIG.02" },
                { draft: "Demo 可点但边界不清", why: "研发无法估算排期", judge: "可运行不代表可开发", final: "补充接口依赖与清单", link: "FIG.05" }
              ].map((row, idx) => (
                <motion.div key={idx} variants={revealUp} className="grid grid-cols-1 lg:grid-cols-12 border-b border-[rgba(21,21,21,0.18)] last:border-b-0 hover:bg-[#F4F4EF] transition-colors font-sans">
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)]">
                    <span className="lg:hidden text-[12px] font-mono text-[#5C5C57] block mb-2 uppercase tracking-widest">原始方案</span>
                    <span className="text-[15px] text-[#5C5C57] line-through decoration-[rgba(21,21,21,0.4)]">{row.draft}</span>
                  </div>
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)] bg-[#FFF0ED]">
                    <span className="lg:hidden text-[12px] font-mono text-[#9B302B] block mb-2 uppercase tracking-widest">为什么不能推进</span>
                    <span className="text-[15px] text-[#9B302B] font-medium">{row.why}</span>
                  </div>
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(21,21,21,0.18)]">
                    <span className="lg:hidden text-[12px] font-mono text-[#151515] block mb-2 uppercase tracking-widest">设计判断</span>
                    <span className="text-[15px] text-[#151515] font-bold">{row.judge}</span>
                  </div>
                  <div className="col-span-1 lg:col-span-3 p-5 lg:p-6 bg-[#FAFAF7] flex flex-col justify-center">
                    <span className="lg:hidden text-[12px] font-mono text-[#151515] block mb-2 uppercase tracking-widest">最终决策</span>
                    <span className="text-[15px] text-[#151515] leading-[1.65] mb-3">{row.final}</span>
                    <span className="text-[12px] font-mono text-[#151515] border border-[#151515] w-fit px-2 py-0.5">关联 {row.link}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ==========================================
              06. QUALITY GATES & BOUNDARIES
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">05</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Quality & Boundary / 质量阀与边界</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">把控交付物质量，守住安全边界</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#151515] bg-[#151515] gap-px">
              <div className="lg:col-span-4 bg-[#FFF0ED] flex flex-col">
                <div className="bg-[#151515] px-5 py-3 text-[#FFF0ED] font-mono text-[12px] tracking-widest uppercase font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#9B302B]"></div> 边界说明
                </div>
                <div className="p-6 md:p-8">
                  <ul className="text-[15px] font-sans text-[#9B302B] leading-[1.7] font-medium list-none space-y-4">
                    <li className="flex gap-3 items-start"><AlertTriangle size={18} className="mt-1 shrink-0" /> 不替代商业决策。</li>
                    <li className="flex gap-3 items-start"><AlertTriangle size={18} className="mt-1 shrink-0" /> 不替代真实用户研究。</li>
                    <li className="flex gap-3 items-start"><AlertTriangle size={18} className="mt-1 shrink-0" /> 不替代复杂工程架构判断。</li>
                    <li className="flex gap-3 items-start"><AlertTriangle size={18} className="mt-1 shrink-0" /> 不生成完整生产级代码。</li>
                    <li className="flex gap-3 items-start"><AlertTriangle size={18} className="mt-1 shrink-0" /> 不交付未经人工评估的 AI 初稿。</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#FAFAF7] flex flex-col font-sans">
                <div className="bg-[#151515] px-5 py-3 text-[#FAFAF7] font-mono text-[12px] tracking-widest uppercase">
                  核心检查点
                </div>
                <div>
                  {[
                    { name: "业务对齐", en: "BUSINESS FIT", check: "是否解决了正确的操作流问题？", risk: "界面完整，但并未帮助操作员处理致命硬件异常。", out: "业务决策简报" },
                    { name: "任务清晰度", en: "TASK CLARITY", check: "信息是否足以支撑用户判断下一步？", risk: "数据丰富，但用户不知点击哪里可以接管错误设备。", out: "屏幕目的" },
                    { name: "状态完整性", en: "STATE COMPLETENESS", check: "空、加载、失败、无权限和离线状态是否完整？", risk: "AI 忽略了设备断网场景，导致后期逻辑大改。", out: "状态矩阵" },
                    { name: "一致性检验", en: "CRAFT & CONSISTENCY", check: "组件与业务术语是否一致？", risk: "同一种异常在不同层级显示了不同的警告色。", out: "产品上下文包" },
                    { name: "交付成熟度", en: "DELIVERY READINESS", check: "工程约束与数据接口边界是否清晰？", risk: "设计了动画，但后端接口存在 2 秒的强制延迟。", out: "开发前风险清单" }
                  ].map((gate, idx) => (
                    <motion.div key={idx} variants={revealUp} className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 md:p-6 border-b border-[rgba(21,21,21,0.18)] last:border-0 hover:bg-[#F4F4EF] transition-colors">
                      <div className="w-full sm:w-[140px] shrink-0 flex flex-col">
                        <h4 className="font-bold text-[#151515] text-[16px]">{gate.name}</h4>
                        <span className="font-mono text-[12px] text-[#5C5C57]">{gate.en}</span>
                      </div>
                      <div className="flex-1 text-[15px] leading-[1.65]">
                        <div className="text-[#151515] font-bold mb-1">检查：{gate.check}</div>
                        <div className="text-[#9B302B] mb-4">本场景风险：{gate.risk}</div>
                        <div className="text-[#151515] font-mono font-bold text-[12px] uppercase border border-[rgba(21,21,21,0.18)] inline-block px-2.5 py-1">
                          对应交付物：{gate.out}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ==========================================
              07. HEURISTICS & TOOLS
              ========================================== */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerFast} className="py-16 border-t border-[rgba(21,21,21,0.18)]">
            <div className="mb-6 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">06</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Heuristics & Tools / 启发式与工具</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">屏幕级判断与工具分工</h2>
              </div>
            </div>
            <p className="text-[14px] text-[#5C5C57] mb-8 font-sans font-medium">声明：以下为辅助判断的启发式与工具示例，非固定公式或工具排名。</p>

            <div className="flex flex-col lg:flex-row border border-[#151515] bg-[#151515] gap-px font-sans">
              
              <div className="lg:w-3/5 bg-[#FAFAF7] flex flex-col">
                <div className="bg-[#151515] px-5 py-3 text-[#FAFAF7] font-mono text-[12px] tracking-widest uppercase">屏幕级判断示例</div>
                {[
                  { name: "Dashboard", rule: "对于需要快速判断和行动的看板，控制核心指标数量，提供可解释洞察与明确下一步动作。" },
                  { name: "Empty State", rule: "帮助用户理解核心价值，看到示例结果，并顺畅完成第一步激活操作。" },
                  { name: "Settings", rule: "重点处理账单、权限变更、系统集成、数据导出与退出路径等高风险任务。" }
                ].map((pattern, idx) => (
                  <div key={idx} className="p-5 border-b border-[rgba(21,21,21,0.18)] last:border-0">
                    <h4 className="text-[16px] font-bold text-[#151515] mb-2">{pattern.name}</h4>
                    <p className="text-[15px] text-[#444440] leading-[1.65]">{pattern.rule}</p>
                  </div>
                ))}
              </div>

              <div className="lg:w-2/5 bg-[#FAFAF7] flex flex-col">
                <div className="bg-[#151515] px-5 py-3 text-[#FAFAF7] font-mono text-[12px] tracking-widest uppercase border-t lg:border-t-0 border-[#151515]">工具分工</div>
                {[
                  { phase: "THINK", purpose: "需求整理、问题拆解与文案探索。", tools: "Claude / ChatGPT" },
                  { phase: "MAKE", purpose: "UI 探索、原型生成和关键路径验证。", tools: "Figma / Claude Code / Cursor" },
                  { phase: "VERIFY", purpose: "规则同步、状态检查和交付说明。", tools: "MCP / Design System / Manual QA" }
                ].map((row, i) => (
                  <div key={i} className="p-5 border-b border-[rgba(21,21,21,0.18)] last:border-0 bg-[#F4F4EF]">
                    <h4 className="font-mono font-bold text-[#151515] text-[14px] mb-2">{row.phase}</h4>
                    <div className="text-[15px] text-[#151515] mb-2 leading-[1.6] font-medium">{row.purpose}</div>
                    <div className="font-mono text-[12px] text-[#5C5C57]">ex: {row.tools}</div>
                  </div>
                ))}
              </div>

            </div>
          </motion.section>

        </div>

        {/* ==========================================
            07. BUSINESS VALUE & EVOLUTION (收束锚点)
            ========================================== */}
        <section className="w-full bg-[#FAFAF7] text-[#151515] border-t border-[#151515] mt-8 pt-12 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 border-b border-[#151515] pb-4">
              <span className="text-[#151515] font-mono text-[32px] leading-none font-bold">07</span>
              <div>
                <span className="text-[#5C5C57] font-mono text-[12px] uppercase tracking-widest block mb-1">Business Value & Evolution / 业务价值与经验节点</span>
                <h2 className="text-[20px] font-sans font-bold text-[#151515]">推动落地的商业价值与沉淀</h2>
              </div>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 font-sans">
              {[
                { title: "业务决策简报", text: "帮助团队先确认问题和投入边界，再决定是否推进。" },
                { title: "可决策原型", text: "让老板、产品、设计、销售和工程围绕同一个方案讨论。" },
                { title: "开发前风险清单", text: "在开发投入前暴露状态、权限、数据和接口依赖。" },
                { title: "产品上下文与规则", text: "减少不同角色和工具对同一规则的重复解释。" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={revealUp} className="p-8 border border-[#151515] flex flex-col h-full bg-[#F4F4EF] text-[#151515] relative">
                  <div className="font-mono text-[40px] font-bold leading-none mb-6 text-[#151515]">0{idx+1}</div>
                  <h4 className="text-[18px] font-bold mb-3">{item.title}</h4>
                  <p className="text-[15px] leading-[1.65] mt-auto text-[#444440] font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="border-t border-[#151515] pt-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 font-mono text-[12px]">
                 {[
                   { year: "2019", name: "CYG WMS" },
                   { year: "2025", name: "Industrial AI HMI" },
                   { year: "2025+", name: "MCP MVP" },
                   { year: "2026", name: "Business-driven AI Workflow", active: true }
                 ].map((t, i) => (
                    <div key={i} className={`flex flex-col border-l pl-4 ${t.active ? 'border-[#B8E351]' : 'border-[rgba(21,21,21,0.18)]'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {t.active && <div className="w-2 h-2 rounded-none bg-[#B8E351]"></div>}
                        <span className={`font-bold ${t.active ? 'text-[#151515]' : 'text-[#5C5C57]'}`}>{t.year}</span>
                      </div>
                      <div className={`font-sans text-[15px] ${t.active ? 'text-[#151515] font-bold' : 'text-[#5C5C57]'}`}>
                        {t.name}
                      </div>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}