"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// 极简轻量的进入动效
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// ==========================================
// 数据字典：交付范围节选界面图集
// ==========================================
const selectedScreens = [
  {
    title: "实时监控首页",
    type: "Monitoring",
    src: "/images/p1/selected/01-realtime-monitor.webp",
    caption: "16 路相机、多路检测画面、统计信息、日志与设备状态集中展示。"
  },
  {
    title: "2D 相机设置",
    type: "Camera Config",
    src: "/images/p1/selected/02-2d-camera-settings.webp",
    caption: "用于管理 2D 相机参数、状态与配置入口。"
  },
  {
    title: "3D 相机设置",
    type: "Camera Config",
    src: "/images/p1/selected/03-3d-camera-settings.webp",
    caption: "用于管理 3D 相机状态、参数与检测配置。"
  },
  {
    title: "参数编辑",
    type: "Parameter",
    src: "/images/p1/selected/04-parameter-editing.webp",
    caption: "工程师用于调整检测参数与查看局部检测预览。"
  },
  {
    title: "缺陷分析",
    type: "Analysis",
    src: "/images/p1/selected/05-defect-analysis.webp",
    caption: "承接缺陷结果、图像预览、标签与追溯信息。"
  },
  {
    title: "统计信息",
    type: "Statistics",
    src: "/images/p1/selected/06-statistics.webp",
    caption: "用于查看产线统计、缺陷分布与结果概览。"
  },
  {
    title: "图像数据存储",
    type: "Traceability",
    src: "/images/p1/selected/07-image-storage.webp",
    caption: "用于图像结果、物料、批次与检测记录追溯。"
  },
  {
    title: "日志",
    type: "Log",
    src: "/images/p1/selected/08-log.webp",
    caption: "用于记录关键操作、异常与系统事件。"
  },
  {
    title: "用户权限",
    type: "Permission",
    src: "/images/p1/selected/09-user-permission.webp",
    caption: "用于区分不同角色的可见范围与操作边界。"
  },
  {
    title: "通讯设置",
    type: "System Setting",
    src: "/images/p1/selected/10-communication-settings.webp",
    caption: "用于系统通讯参数配置与设备连接管理。"
  },
  {
    title: "工控设置",
    type: "Industrial Control",
    src: "/images/p1/selected/11-control-settings.webp",
    caption: "用于工控参数配置与高风险操作边界管理。"
  }
];

// ==========================================
// 正文智能图片组件 CaseImage (增强版)
// ==========================================
interface CaseImageProps {
  src: string;
  alt: string;
  aspectRatioClassName?: string;
  fallbackHeightClass?: string;
  objectFit?: "cover" | "contain";
  caption?: string;
  imageType?: "Desensitized screen" | "Design diagram" | "Concept visualization" | "Selected screens";
}

function CaseImage({ 
  src, 
  alt, 
  aspectRatioClassName = "w-full h-[420px] md:h-[520px]", 
  fallbackHeightClass = "h-[120px] md:h-[140px]",
  objectFit = "contain",
  caption,
  imageType
}: CaseImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full mt-10 md:mt-14 bg-[#F7F7F5] border border-[#DBDADD] rounded-[16px] flex flex-col items-center justify-center px-6 text-center transition-all ${fallbackHeightClass}`}>
        <span className="text-[#AAA9AB] text-[11px] font-mono tracking-widest">
          image pending: {src}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3 mt-10 md:mt-14">
      <div className={`group relative ${aspectRatioClassName} w-full bg-[#F7F7F5] rounded-[16px] md:rounded-[24px] overflow-hidden transition-all duration-500 border border-[#DBDADD]/40`}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#F5F5F3] animate-pulse z-0" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-w: 1280px) 100vw, 1280px"
          className={`transition-all duration-700 ease-[0.22,1,0.36,1] z-10 group-hover:scale-[1.025] ${isLoaded ? "opacity-100" : "opacity-0"} ${
            objectFit === "cover" ? "object-cover" : "object-contain p-4 md:p-8"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </div>
      
      {/* 图注区 */}
      {(imageType || caption) && (
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-2">
          {imageType && (
            <span className="text-[11px] font-mono text-[#AAA9AB] whitespace-nowrap pt-[2px]">
              {imageType.toLowerCase()}
            </span>
          )}
          {caption && (
            <span className="text-[13px] text-[#555555] leading-[1.6]">
              {caption}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ==========================================
// Hero 专属无缝背景/产品图组件
// ==========================================
function HeroBgImage({ src, className, imgClassName }: { src: string, className?: string, imgClassName?: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center px-6 text-center bg-[#F7F7F5] ${className}`}>
        <span className="text-[#AAA9AB] text-[11px] font-mono tracking-widest">
          image missing: {src}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      {!isLoaded && <div className="absolute inset-0 bg-[#FFFFFF] animate-pulse z-0" />}
      <Image 
        src={src} 
        alt="工业 AI 视觉质检系统 HMI 产品展示"
        fill
        priority
        sizes="(max-w: 1024px) 100vw, 75vw"
        className={`transition-opacity duration-700 z-10 ${imgClassName} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function ProjectP1Editorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (isCarouselPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % selectedScreens.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isCarouselPaused]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#222222] font-sans selection:bg-[#75FB90] selection:text-[#000000] antialiased">
      
      {/* 极简顶导 - 统一宽度 1280px */}
      <nav className="fixed top-0 w-full z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#DBDADD]/40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-sm font-medium text-[#AAA9AB] hover:text-[#000000] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#AAA9AB] uppercase font-mono hidden sm:block">
            Miki Portfolio · Case Study
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        
        {/* ==========================================
            1. Hero 首屏 (满屏背景图融合排版 - 方案 B)
            ========================================== */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          // 高度设定为满屏，底色纯白
          className="relative w-full min-h-screen lg:min-h-[900px] xl:min-h-[960px] flex items-center bg-[#FFFFFF] overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0"
        >
          {/* ============================== 
              桌面端专属：右侧满屏背景层 (z-0) 
              ============================== */}
          <motion.div 
            initial={{ opacity: 0, x: 24, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            // 定位于右侧 68%-72% 宽度，高度 100%
            className="hidden lg:block absolute inset-y-0 right-0 w-[68%] xl:w-[72%] h-full z-0 pointer-events-none"
            style={{
              // 优化：将黑框区域从 10% 缩小到 6%，保全更多的左边缘图像细节
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)"
            }}
          >
            <HeroBgImage 
              src="/images/p1/p1-hero-industrial-ai-hmi.png" 
              className="absolute inset-0 w-full h-full" 
              imgClassName="object-contain object-right" 
            />
          </motion.div>

          {/* ============================== 
              桌面端专属：精确收束的白色渐变阅读安全遮罩 (z-10) 
              ============================== */}
          <div 
            className="hidden lg:block absolute inset-0 z-10 pointer-events-none w-full" 
            style={{
              // 优化：使用极其精密的 CSS 渐变，使其在 54% 左右完全消失，不再污染屏幕主体
              background: "linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.16) 49%, rgba(255,255,255,0) 54%, rgba(255,255,255,0) 100%)"
            }}
          />

          {/* ============================== 
              左侧文字内容区 (z-20) 
              ============================== */}
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* 左侧文字区块 (占 6 列，最大宽度 520px) */}
              <motion.div variants={fadeInUp} className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center max-w-[520px]">
                
                {/* 标签行 */}
                <div className="text-[11px] lg:text-[12px] font-mono text-[#AAA9AB] tracking-[0.12em] uppercase mb-5 flex items-center gap-2">
                  <span>工业软件</span>
                  <span className="w-1 h-1 rounded-full bg-[#DBDADD]"></span>
                  <span>Industrial AI</span>
                </div>

                {/* H1 */}
                <h1 className="text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-semibold text-[#000000] leading-[1.08] lg:leading-[1.12] tracking-tight mb-5">
                  工业 AI 视觉<br className="hidden md:block lg:hidden"/>质检系统
                </h1>

                {/* 一句话说明 */}
                <p className="text-[20px] lg:text-[24px] text-[#333333] leading-[1.6] mb-6">
                  面向铝型材挤压产线的 AI 表面质检 HMI。
                </p>

                {/* 能力标签 (轻量 Chip) */}
                <div className="flex flex-wrap gap-2.5 mb-6 lg:mb-8">
                  {['AI 视觉检测', 'HMI 设计', '缺陷识别', '数据可视化'].map((chip, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#DBDADD] rounded-[8px] text-[13px] text-[#333333] hover:border-[#75FB90] transition-colors cursor-default">
                      {chip}
                    </span>
                  ))}
                </div>

                {/* 补充说明段落 */}
                <p className="text-[16px] lg:text-[18px] text-[#555555] leading-[1.9] mb-8 lg:mb-10">
                  系统基于多相机协同与深度学习算法，实时识别铝型材表面缺陷并进行分级统计。HMI 提供检测、分析、追溯与报表能力，帮助工厂实现质检数字化与精益管理。
                </p>

                {/* 关键数字区 */}
                <div className="grid grid-cols-2 lg:flex lg:flex-nowrap gap-x-8 gap-y-6">
                  <div className="flex flex-col">
                    <span className="text-[24px] lg:text-[28px] font-semibold text-[#000000] leading-tight">16<span className="text-[16px] font-normal text-[#333333] ml-1">路</span></span>
                    <span className="text-[12px] text-[#AAA9AB] uppercase tracking-wider mt-1">工业相机</span>
                  </div>
                  <div className="w-px h-10 bg-[#DBDADD] hidden lg:block"></div>
                  <div className="flex flex-col">
                    <span className="text-[24px] lg:text-[28px] font-semibold text-[#000000] leading-tight">11<span className="text-[16px] font-normal text-[#333333] ml-1">类</span></span>
                    <span className="text-[12px] text-[#AAA9AB] uppercase tracking-wider mt-1">缺陷检测</span>
                  </div>
                  <div className="w-px h-10 bg-[#DBDADD] hidden lg:block"></div>
                  <div className="flex flex-col">
                    <span className="text-[24px] lg:text-[28px] font-semibold text-[#000000] leading-tight">4<span className="text-[16px] font-normal text-[#333333] ml-1">类</span></span>
                    <span className="text-[12px] text-[#AAA9AB] uppercase tracking-wider mt-1">角色任务</span>
                  </div>
                </div>

              </motion.div>

              {/* ============================== 
                  移动端专属：普通流产品图块 
                  ============================== */}
              <motion.div 
                variants={fadeInUp} 
                className="lg:hidden relative w-full h-[320px] sm:h-[380px]"
              >
                <HeroBgImage 
                  src="/images/p1/p1-hero-industrial-ai-hmi.png" 
                  className="absolute inset-0 w-full h-full rounded-[16px] border border-[#DBDADD]/40 overflow-hidden" 
                  imgClassName="object-contain object-center p-4 bg-[#F8F8F6]" 
                />
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ==========================================
          正文全局外层容器 - 统一约束在 1280px 宽度
          ========================================== 
        */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-24">
          
          {/* ==========================================
              2. 30 秒摘要区 
              距离 Hero 大图底部 80px - 96px
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 md:mb-24 border-y border-[#DBDADD]/60 py-10 md:py-14 mt-20 md:mt-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <motion.div variants={fadeInUp}>
                <h4 className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase mb-3">What</h4>
                <p className="text-[15px] lg:text-[16px] text-[#000000] leading-[1.6] font-medium">
                  工业 AI 表面质检 HMI <br className="hidden md:block"/>/ 工业软件系统
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:border-l md:border-[#DBDADD]/40 md:pl-8 lg:pl-12">
                <h4 className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase mb-3 flex items-center gap-2">
                  My Role
                  <span className="w-1.5 h-1.5 bg-[#75FB90] rounded-full"></span>
                </h4>
                <p className="text-[15px] lg:text-[16px] text-[#000000] leading-[1.6]">
                  信息架构、HMI 界面、角色权限、监控布局、异常接管入口。
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:border-l md:border-[#DBDADD]/40 md:pl-8 lg:pl-12">
                <h4 className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase mb-3">Evidence</h4>
                <p className="text-[15px] lg:text-[16px] text-[#000000] leading-[1.6]">
                  107 页工程文档输入 · 16 路工业相机 · 11 个核心模块交付 · 4 类角色任务。
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              3. Problem / Context 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-b border-[#DBDADD]/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Problem / Context</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  从人工目视检测，<br className="hidden lg:block"/>到 AI 表面质检 HMI
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-6 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8]">
                  新设备引入后，如何在一块屏幕上同时满足四类工种截然不同的专业需求？
                </p>
                <p className="text-[16px] lg:text-[17px] text-[#333333] leading-[1.9]">
                  客户需要做一套铝型材挤压产线的 AI 表面质检系统，目标是替代高漏检率的人工目视检测。系统底层接入 2D + 3D 双模态共 16 路工业相机，覆盖 11 类缺陷识别与分拣，并要求前端 HMI 界面同时服务好工程师、操作员、维护工程师、质检人员的业务闭环。
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              4. System Complexity 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-20 md:py-28 border-b border-[#DBDADD]/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">System Complexity</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  为什么这不是一次<br className="hidden lg:block"/>简单的 UI 美化？
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-8">
                  这个项目的难点不是 UI 美化，而是把多路检测结果、工厂角色任务和高风险操作放进同一个可读可控的 HMI 中。
                </p>
                <ul className="flex flex-col gap-5 border-t border-[#DBDADD]/40 pt-6">
                  {[
                    { title: '视觉输入复杂', desc: '2D + 3D 双模态，16 路工业相机并发高频推流。' },
                    { title: '缺陷结果复杂', desc: '11 类缺陷类型，由算法侧实时识别并输出计算结果。' },
                    { title: '角色任务复杂', desc: '工程师调参数，操作员盯预警，维护管急停，质检查数据。' },
                    { title: '主屏信息复杂', desc: '实时画面、统计数据、缺陷柱状图、设备状态、日志同时存在。' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#75FB90] mt-2.5 shrink-0"></div>
                      <div className="text-[16px] lg:text-[17px] leading-[1.8] text-[#333333]">
                        <span className="font-semibold text-[#000000] mr-2">{item.title}:</span>
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/p1/p1-system-complexity-map.webp" 
                alt="16路并发监控与复杂度拆解示意图"
                objectFit="contain"
                imageType="Design diagram"
                caption="系统复杂度示意图，用于说明多路输入、多角色任务和主屏信息承接关系。"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              5. Human-AI Boundary 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-20 md:py-28 border-b border-[#DBDADD]/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Human-AI Boundary</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  算法不是全自动替代，<br className="hidden lg:block"/>界面需协助人理解与接管
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-8">
                  AI 不是全自动替代，极端的安全防线依然由人锚定。界面需要帮助人理解、确认、接管和追溯。
                </p>
                <div className="flex flex-col gap-6 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] border-t border-[#DBDADD]/40 pt-6">
                  <div>
                    <strong className="text-[#000000] block mb-1">1. 算法侧的职责：</strong>
                    负责识别异常缺陷、处理多路画面光电结果、输出参数特征，并触发底层预警状态。
                  </div>
                  <div>
                    <strong className="text-[#000000] block mb-1">2. 现场人类的职责：</strong>
                    判断是否需要人工干预、重点关注高危异常相机位、调整算法冗余参数边界，以及执行产线急停。
                  </div>
                  <div>
                    <strong className="text-[#000000] block mb-1">3. HMI 系统的映射转译：</strong>
                    将底层结果组织成可读的缺陷框、可辨识的警报优先级、符合物理直觉的画面分组，以及安全的防御操作入口。
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/p1/p1-human-ai-boundary.webp" 
                alt="人机边界设计梳理"
                objectFit="contain"
                imageType="Design diagram"
                caption="人机协作边界示意图，用于说明算法侧、HMI 层与现场人工接管之间的职责划分。"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              6. Design Challenge 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Design Challenge</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  信息密度、工厂习惯<br className="hidden lg:block"/>与 UX 风险的平衡
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-5">
                  如何在嘈杂、高压的工厂屏幕前，让操作员迅速定位 16 路数据中的异常区域，并绝对避免误操作？
                </p>
                <div className="text-[16px] lg:text-[17px] text-[#333333] leading-[1.9]">
                  <p className="mb-4">
                    16 路相机画面、全产线统计数据、设备状态和独立操作都被要求置于监控首页。
                  </p>
                  <p>
                    设备信息面板、清除工位信息、一键清除系统信息等破坏性功能，从 UX 角度存在极大的误操作风险。但客户和开发团队反馈这是工厂端反复要求的既有习惯。我的设计判断是在无法改变既有习惯的前提下，通过角色界面隔离控制风险。
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/p1/p1-before-engineering-ui.webp" 
                alt="原始工程界面与设计前状态"
                aspectRatioClassName="w-full h-[320px] md:h-[460px]"
                objectFit="contain"
                imageType="Desensitized screen"
                caption="脱敏后的工程界面节选，用于说明原始信息密度与设计前状态。"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              7. Key Decisions / Trade-off 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Key Decisions & Trade-off</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  在理想方案与<br className="hidden lg:block"/>可落地工程之间做判断
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-6">
                  作为顾问，在“信息利用率最优”与“开发成本可控”之间，需要提供理性的决策依据。
                </p>
                <ul className="flex flex-col gap-5 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] border-t border-[#DBDADD]/40 pt-6">
                  <li className="flex items-start gap-3">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#DBDADD] mt-[11px] shrink-0"></div>
                    <div>监控首页做过 A/B 两版布局。方案 B 是我更倾向的 16 路独立平铺结合中间 3D 截面图。但最终客户选择了方案 A。</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#DBDADD] mt-[11px] shrink-0"></div>
                    <div>方案 A 将界面按物理方位（上/下/左/右）分组，这更符合操作员对机床产线方位的直觉映射，也有效降低了高并发流媒体的渲染成本。</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#DBDADD] mt-[11px] shrink-0"></div>
                    <div>在通用化产品的定位下，为规避高昂的维护成本，权限架构止步于“菜单级隔离”，果断放弃了 ROI 极低的按钮级微观管控。</div>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/p1/p1-layout-ab-comparison.webp" 
                alt="监控首页方案 A 与方案 B 布局决策对比"
                objectFit="contain"
                imageType="Desensitized screen"
                caption="监控首页 A/B 方案对比节选，用于说明方案选择与工程取舍。"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              8. Exception & Takeover 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Exception & Takeover</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  异常与接管：必须<br className="hidden lg:block"/>存在最后一道防线
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-8">
                  黑盒算法必定存在震荡期，系统规划了三级阶梯状的容错架构，但在预算和项目话语权之下，最终仅做出了部分落地。
                </p>
                <div className="flex flex-col gap-5 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] pl-2 border-l-2 border-[#DBDADD]/60">
                  <div className="pl-4">
                    <strong className="text-[#000000] font-semibold mr-2">轻度：在线调参。</strong>
                    允许工程师在 HMI 内微调置信度参数，修正局部误报。
                  </div>
                  <div className="pl-4">
                    <strong className="text-[#000000] font-semibold mr-2">中度：缺陷开关手动接管。</strong>
                    操作员可切断局部机位 AI 算法，降级为人工复核（因工期压力，此层设计未落地）。
                  </div>
                  <div className="pl-4">
                    <strong className="text-[#000000] font-semibold mr-2">极端：软硬联动急停。</strong>
                    物理按钮拍击配合系统拦截，直接切断检测流程。
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/p1/p1-exception-takeover-ladder.webp" 
                alt="异常与接管：三级阶梯容错模型"
                aspectRatioClassName="w-full h-[280px] md:h-[400px] lg:h-[460px]"
                objectFit="contain"
                imageType="Design diagram"
                caption="三级异常接管机制示意图，其中中度接管为概念方案，未作为最终落地功能呈现。"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              9. UI System / States 
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">UI System & States</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  界面状态规则：<br className="hidden lg:block"/>让复杂结果可追溯
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-6">
                  设计师的核心贡献并不在提升算法精度，而是通过严谨的状态机和权限矩阵，让系统变得安全、可被追溯。
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] border-t border-[#DBDADD]/40 pt-6">
                  <li><strong className="text-[#000000] block mb-1">相机卡片状态：</strong>明确定义了空闲、检测中、离线、预警的视觉分层机制。</li>
                  <li><strong className="text-[#000000] block mb-1">检测结果状态：</strong>规范了 BBox 缺陷边框在高光与叠层下的渲染权重。</li>
                  <li><strong className="text-[#000000] block mb-1">危险操作状态：</strong>确立了所有涉及数据擦除和重置的置灰与多层验证规范。</li>
                  <li><strong className="text-[#000000] block mb-1">角色可见规则：</strong>通过矩阵打磨 4 大工种操作流，阻断跨工序界限的越权干扰。</li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/p1/p1-ui-states-permission.webp" 
                alt="HMI UI状态规则与多角色权限矩阵交付清单"
                objectFit="contain"
                imageType="Design diagram"
                caption="状态规则与权限矩阵示意图，用于说明安全、追溯与角色可见边界。"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              NEW: Selected Screens / 交付范围节选
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              
              <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Selected Screens</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25] mb-6">
                  交付范围节选：<br className="hidden xl:block"/>不是单一首页，<br className="hidden lg:block xl:hidden"/>而是完整 HMI 产品结构
                </h2>
                
                <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-[#F7F7F5] border border-[#DBDADD]/80 rounded-[6px] text-[11px] text-[#555555] font-mono tracking-wider w-fit mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBDADD]"></span>
                  Desensitized screens / 脱敏界面节选
                </div>

                <p className="text-[16px] lg:text-[17px] text-[#333333] leading-[1.9] mb-8">
                  以下为脱敏后的核心界面节选，用于展示项目并非单一监控首页优化，而是覆盖实时监控、相机配置、参数编辑、缺陷分析、统计信息、图像数据存储、日志、用户权限与系统设置的 HMI 产品结构交付。
                </p>

                <div className="text-[13px] text-[#AAA9AB] leading-[1.6] p-4 bg-[#F7F7F5]/60 rounded-[12px] border border-[#DBDADD]/40 mt-auto">
                  * 公开作品集仅展示脱敏节选；完整交付细节可在面试中按需补充说明。
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-5">
                {/* 大图展示区 */}
                <div 
                  className="group relative w-full h-[420px] md:h-[560px] lg:h-[620px] bg-[#F7F7F5] rounded-[16px] md:rounded-[24px] border border-[#DBDADD]/40 overflow-hidden"
                  onMouseEnter={() => setIsCarouselPaused(true)}
                  onMouseLeave={() => setIsCarouselPaused(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedScreens[activeIndex].src}
                        alt={selectedScreens[activeIndex].title}
                        fill
                        sizes="(max-w: 1280px) 100vw, 800px"
                        className="object-contain p-4 md:p-8 transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.025]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 状态与图注区 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[15px] font-medium text-[#000000]">{selectedScreens[activeIndex].title}</span>
                    <span className="text-[11px] font-mono text-[#AAA9AB] px-1.5 py-0.5 bg-[#F7F7F5] rounded-[4px] uppercase tracking-wider">{selectedScreens[activeIndex].type}</span>
                  </div>
                  <span className="text-[13px] text-[#555555] sm:max-w-[60%] sm:text-right leading-[1.5]">
                    {selectedScreens[activeIndex].caption}
                  </span>
                </div>

                {/* 缩略图列表 */}
                <div 
                  className="flex items-center gap-3 overflow-x-auto pb-3 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  onMouseEnter={() => setIsCarouselPaused(true)}
                  onMouseLeave={() => setIsCarouselPaused(false)}
                >
                  {selectedScreens.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative shrink-0 w-[96px] h-[60px] rounded-[8px] overflow-hidden border transition-all duration-300 ease-out outline-none ${
                        activeIndex === idx 
                          ? 'border-[#000000] opacity-100 shadow-sm' 
                          : 'border-[#DBDADD]/40 opacity-50 hover:opacity-100 hover:-translate-y-[2px]'
                      }`}
                    >
                      <Image
                        src={screen.src}
                        alt={`Thumbnail for ${screen.title}`}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.section>

          {/* ==========================================
              10. Outcome / Reflection
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">Outcome & Reflection</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  完成交付，<br className="hidden lg:block"/>保留真实的业务边界
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-[#DBDADD]/40 pb-10">
                  <div>
                    <div className="text-[36px] md:text-[44px] font-light text-[#000000] mb-1 leading-none">11</div>
                    <div className="text-[14px] text-[#333333]">核心模块从 0-1 交付</div>
                  </div>
                  <div>
                    <div className="text-[36px] md:text-[44px] font-light text-[#000000] mb-1 leading-none">4<span className="text-sm text-[#AAA9AB] ml-0.5">类</span></div>
                    <div className="text-[14px] text-[#333333]">多维角色权限分层</div>
                  </div>
                  <div>
                    <div className="text-[36px] md:text-[44px] font-light text-[#000000] mb-1 leading-none">16<span className="text-sm text-[#AAA9AB] ml-0.5">路</span></div>
                    <div className="text-[14px] text-[#333333]">物理监控分组体系</div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 text-[16px] lg:text-[17px] text-[#333333] leading-[1.9]">
                  <p>
                    成功将原始的纯工程师工具，重构为了一套面向工厂多角色的 HMI 标准产品。全套界面、交互与权限资产已获开发团队与项目负责人审核确认并落地。
                  </p>
                  <div>
                    <strong className="text-[#000000] font-semibold block mb-1">设计复盘与反思：</strong>
                    如果重来，我一定会争取亲赴产线观摩。依赖工程师口头转述的“工人习惯”存在认知滤镜，亲临现场才能做出更底气的设计决策。同时，我本应更强势地推动“中度手动容错机制”的落地，在早期模型的不稳定期内，过度依赖底层急停按钮会让系统显得极其脆弱。
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              11. 匿名去敏 Footer
              ========================================== */}
          <footer className="mt-8 md:mt-16 border-t border-[#DBDADD]/40 pt-8 pb-10">
            <p className="text-[#AAA9AB] text-[11px] lg:text-[12px] font-mono leading-[1.6]">
              * Client depicted as AsterVision AI is a pseudonym. 受保密协议约束，项目客户作为一家初创公司统一匿名代称，且不呈现任何未经授权的真实检测效率数据。
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}