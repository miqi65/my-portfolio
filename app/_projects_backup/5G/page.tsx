"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Maximize2 } from "lucide-react";
import Link from "next/link";

// ==========================================
// [ANIMATION_CONFIG] 极简轻量级长页下滑进入动效
// ==========================================
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
// [COMPONENTS] 复用与定制化小组件
// ==========================================

// 1. 智能图片组件（处理 Fallback 与暗黑风格）
interface CaseImageProps {
  src: string;
  alt: string;
  aspectRatioClassName?: string;
  fallbackHeightClass?: string;
  objectFit?: "cover" | "contain";
}

function CaseImage({ 
  src, 
  alt, 
  aspectRatioClassName = "w-full h-[320px] md:h-[480px]", 
  fallbackHeightClass = "h-[120px] md:h-[140px]",
  objectFit = "contain" 
}: CaseImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full mt-10 md:mt-14 bg-[#080F15] border border-white/5 rounded-[16px] flex flex-col items-center justify-center px-6 text-center transition-all ${fallbackHeightClass}`}>
        <span className="text-white/40 text-[11px] font-mono tracking-widest">
          [ 暂无图像证据流: {src} ]
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatioClassName} mt-10 md:mt-14 w-full bg-[#080F15]/50 backdrop-blur-sm rounded-[16px] md:rounded-[24px] overflow-hidden transition-all duration-500 border border-white/10 group`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0B1520] animate-pulse z-0" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-w: 1280px) 100vw, 1280px"
        className={`transition-opacity duration-700 z-10 ${isLoaded ? "opacity-100" : "opacity-0"} ${
          objectFit === "cover" ? "object-cover" : "object-contain p-4 md:p-8"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

// 2. 双图网格组件 (专为 Section 06 设计)
function EvidenceImageGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 md:gap-6 mt-10 md:mt-14">
      {/* 图 1 - 交互流 */}
      <div className="group relative bg-[#080F15]/60 backdrop-blur-sm border border-white/10 rounded-[16px] md:rounded-[24px] overflow-hidden p-6 md:p-8 transition-colors hover:border-[#28B5D8]/40 flex flex-col h-full">
        <div className="relative w-full h-[280px] md:h-[400px] mb-6 rounded-[8px] overflow-hidden bg-[#050B10]">
          <Image
            src="/Project_P4/images/interaction%20flow.png"
            alt="Interaction Flow"
            fill
            className="object-contain"
            sizes="(max-w: 1280px) 100vw, 800px"
          />
        </div>
        <div className="mt-auto pt-4 border-t border-white/10">
          <span className="text-[11px] font-mono text-[#72D8F4] tracking-widest uppercase block mb-2">Fig. 01 — Interaction Flow</span>
          <p className="text-[13px] text-white/60 leading-relaxed">
            Chatbot 交互优化分析：基于「贴近用户真实环境」原则，拆解线性对话流程与信息传达策略。
          </p>
        </div>
      </div>

      {/* 图 2 - 视觉规范 */}
      <div className="group relative bg-[#080F15]/60 backdrop-blur-sm border border-white/10 rounded-[16px] md:rounded-[24px] overflow-hidden p-6 md:p-8 transition-colors hover:border-[#28B5D8]/40 flex flex-col h-full">
        <div className="relative w-full h-[280px] md:h-[400px] mb-6 rounded-[8px] overflow-hidden bg-[#050B10]">
          <Image
            src="/Project_P4/images/Design%20System.jpg"
            alt="Design System"
            fill
            className="object-contain"
            sizes="(max-w: 1280px) 100vw, 400px"
          />
        </div>
        <div className="mt-auto pt-4 border-t border-white/10">
          <span className="text-[11px] font-mono text-[#72D8F4] tracking-widest uppercase block mb-2">Fig. 02 — Design System</span>
          <p className="text-[13px] text-white/60 leading-relaxed">
            5G 消息视觉规范：定义色彩、字体、图片比例等「最小公约数」适配标准。
          </p>
        </div>
      </div>
    </div>
  );
}

// 3. 挑战卡片组件 (Section 04)
function ChallengeCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#080F15]/40 backdrop-blur-sm p-6 lg:p-8 rounded-[16px] border border-white/10 hover:border-[#28B5D8]/50 transition-colors duration-300 group">
      <h4 className="text-[15px] md:text-[16px] font-semibold text-white/90 mb-3 group-hover:text-[#72D8F4] transition-colors">{title}</h4>
      <p className="text-[14px] text-white/60 leading-[1.8]">{desc}</p>
    </div>
  );
}

// 4. 策略步骤组件 (Section 05)
function StrategyStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="flex-1 min-w-[240px] relative">
      <div className="text-[10px] font-mono text-[#72D8F4] tracking-widest uppercase mb-3 flex items-center gap-3">
        {step}
        <div className="flex-1 h-px bg-gradient-to-r from-[#28B5D8]/40 to-transparent"></div>
      </div>
      <h4 className="text-[16px] font-medium text-white/90 mb-3">{title}</h4>
      <p className="text-[14px] text-white/60 leading-[1.8]">{desc}</p>
    </div>
  );
}

// 5. 核心指标条
function MetricStrip({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[32px] lg:text-[40px] font-semibold text-white leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-[#72D8F4]">
        {num}
      </span>
      <span className="text-[12px] text-white/50 uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
}

export default function CaseStudyTemplate() {
  return (
    <div className="min-h-screen bg-[#050B10] text-white/80 font-sans selection:bg-[#28B5D8]/30 selection:text-white antialiased relative">
      
      {/* 极简顶导 - 规范 1280px 容器 */}
      <nav className="fixed top-0 w-full z-50 bg-[#050B10]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[11px] tracking-widest text-white/40 uppercase font-mono hidden sm:block">
            Miki Portfolio · Supplement Case
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        
        {/* ==========================================
            01. Hero 首屏
            ========================================== */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="relative w-full min-h-[calc(100vh-64px)] pt-24 pb-16 lg:pt-32 flex items-center overflow-hidden"
        >
          {/* 背景光效与纹理 */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(40,181,216,0.12)_0%,transparent_60%)] pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* 左侧文字信息流 (5列) */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-center">
              
              <div className="text-[11px] lg:text-[12px] font-mono text-white/50 tracking-[0.12em] uppercase mb-6 flex flex-wrap items-center gap-2">
                <span>PROJECT 04 · SUPPLEMENT</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-[#72D8F4]">INTERACTION DESIGN · DESIGN SYSTEM</span>
              </div>

              <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-white/90 leading-[1.1] tracking-tight mb-6">
                5G消息 Chatbot<br />交互规范体系
              </h1>

              <p className="text-[18px] lg:text-[20px] text-white/70 leading-[1.6] mb-6 font-light">
                在原生短信入口的强约束环境中，建立可复用的 Chatbot 交互与视觉适配规范。
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {['交互规范', '视觉适配', 'Chatbot UX', 'Design System'].map((chip, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#080F15] border border-white/10 rounded-[6px] text-[12px] text-white/70">
                    {chip}
                  </span>
                ))}
              </div>

              <p className="text-[15px] lg:text-[16px] text-white/50 leading-[1.9] mb-10">
                5G 消息运行在手机原生短信入口，交互链路、卡片渲染和容错方式都受到平台限制。我作为团队唯一交互与视觉设计负责人，将多个项目中的设计经验沉淀为一套「最小公约数」规范，用于降低后续项目的适配成本与协作成本。
              </p>

              {/* 指标 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-white/10">
                <MetricStrip num="3" label="获奖项目" />
                <MetricStrip num="40+" label="内部培训场次" />
                <MetricStrip num="15" label="推行团队人数" />
              </div>

            </motion.div>

            {/* 右侧视觉排版 (7列) - 两张设计稿错位叠放 */}
            <motion.div 
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-10 lg:mt-0"
            >
              <div className="absolute inset-0 bg-[#0B1520]/30 rounded-[24px] border border-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                {/* 网格背景 */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* 底部卡片 */}
                <div className="absolute top-[10%] left-[5%] md:left-[10%] w-[70%] md:w-[60%] aspect-[4/3] rounded-[12px] overflow-hidden shadow-2xl shadow-[#050B10] border border-white/10 opacity-70 transform rotate-[-2deg] transition-transform hover:rotate-0 hover:z-20 hover:opacity-100 duration-500">
                  <Image 
                    src="/Project_P4/images/interaction%20flow.png" 
                    alt="Interaction Flow Context" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                {/* 顶部卡片 */}
                <div className="absolute bottom-[10%] right-[5%] md:right-[10%] w-[75%] md:w-[65%] aspect-video rounded-[12px] overflow-hidden shadow-2xl shadow-[#050B10] border border-white/20 transform rotate-[3deg] transition-transform hover:rotate-0 hover:z-20 duration-500 z-10">
                  <Image 
                    src="/Project_P4/images/Design%20System.jpg" 
                    alt="Design System Context" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* 统一页面容器限制 */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-24">
          
          {/* ==========================================
              02. 30 秒摘要
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 md:mb-24 border-y border-white/10 py-10 md:py-14 mt-10 md:mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <motion.div variants={fadeInUp}>
                <h4 className="text-[11px] lg:text-xs font-mono text-white/40 tracking-widest uppercase mb-3">项目角色</h4>
                <p className="text-[14px] lg:text-[15px] text-white/80 leading-[1.6]">
                  某运营商 5G 消息服务商 <br className="hidden md:block"/>团队唯一交互与视觉设计负责人 <br className="hidden md:block"/>2021–2022
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:border-l md:border-white/10 md:pl-8 lg:pl-12">
                <h4 className="text-[11px] lg:text-xs font-mono text-white/40 tracking-widest uppercase mb-3 flex items-center gap-2">
                  核心问题
                  <span className="w-1.5 h-1.5 bg-[#72D8F4] rounded-full"></span>
                </h4>
                <p className="text-[14px] lg:text-[15px] text-white/80 leading-[1.6]">
                  原生短信入口限制强，用户只能沿「1-1-1」线性链路逐步选择，容错成本高。
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:border-l md:border-white/10 md:pl-8 lg:pl-12">
                <h4 className="text-[11px] lg:text-xs font-mono text-white/40 tracking-widest uppercase mb-3">设计结果</h4>
                <p className="text-[14px] lg:text-[15px] text-white/80 leading-[1.6]">
                  沉淀最小公约数适配规范，并通过 40+ 次培训推行到 15 人团队。
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              03. Context | 为什么这个项目不是普通 Chatbot
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-b border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#72D8F4] tracking-widest uppercase block mb-4 lg:mb-5">03 / CONTEXT</span>
                <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white/90 leading-[1.3]">
                  不是 App 内聊天，<br className="hidden lg:block"/>而是原生短信入口里的强约束交互
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-8 max-w-[720px]">
                <p className="text-[16px] lg:text-[17px] text-white/70 leading-[1.9]">
                  5G 消息运行在手机原生短信入口，设计不能像 App Chatbot 一样自由定义交互路径。用户只能在有限选项中逐步推进，一旦信息层级、按钮颗粒度或反馈时机设计不当，就会造成理解成本和回退成本上升。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { t: '原生入口', d: '依赖手机系统短信环境，不是独立 App。' },
                    { t: '线性链路', d: '用户按「1-1-1」逐步选择，跳转和回退空间有限。' },
                    { t: '高容错成本', d: '每一步都必须足够明确，减少用户重新选择和中途退出。' }
                  ].map((card, i) => (
                    <div key={i} className="bg-[#0B1520]/50 border border-white/5 p-5 rounded-[12px]">
                      <div className="text-[13px] font-semibold text-white/90 mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#28B5D8] rounded-full"></span>
                        {card.t}
                      </div>
                      <div className="text-[13px] text-white/50 leading-[1.6]">{card.d}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              04. Core Challenge | 设计难点
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-b border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[96px]">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] lg:text-xs font-mono text-[#72D8F4] tracking-widest uppercase block mb-4 lg:mb-5">04 / CORE CHALLENGE</span>
                <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white/90 leading-[1.3]">
                  真正的难点是<br className="hidden lg:block"/>兼容性、容错和用户跨度
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <ChallengeCard 
                    title="线性流程限制" 
                    desc="用户只能逐步选择推进，不能依赖复杂的立体导航和自由输入来纠错。"
                  />
                  <ChallengeCard 
                    title="厂商渲染差异" 
                    desc="各主流手机厂商（华米OV等）对卡片比例、图片裁切、按钮排版的渲染极不一致。"
                  />
                  <ChallengeCard 
                    title="无法分版本下发" 
                    desc="技术架构限制，设计不能为每个手机厂商单独维护一套完整适配方案。"
                  />
                  <ChallengeCard 
                    title="用户画像跨度大" 
                    desc="目标受众从学生群体跨越到政务办事人员，理解能力和使用场景差异极其明显。"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              05. Minimum Common Rule | 最小公约数适配规范
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-b border-white/5"
          >
            <div className="flex flex-col gap-10">
              <motion.div variants={fadeInUp} className="max-w-[720px]">
                <span className="text-[11px] lg:text-xs font-mono text-[#72D8F4] tracking-widest uppercase block mb-4 lg:mb-5">05 / DESIGN STRATEGY</span>
                <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white/90 leading-[1.3] mb-6">
                  放弃单项目最优解，建立可复用的最小公约数规范
                </h2>
                <p className="text-[16px] lg:text-[17px] text-white/70 leading-[1.8]">
                  这个项目的关键判断，不是追求某一个页面在某一台手机上最好看，而是<strong className="text-white font-medium">保证设计在不同厂商、不同业务、不同用户理解能力下都能稳定传达信息</strong>。
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-12 pt-8 border-t border-white/10 mt-2">
                <StrategyStep 
                  step="STEP 01. Visual Rule" 
                  title="视觉层：限定安全区" 
                  desc="只在各厂商共有的安全区内表达关键信息，彻底抛弃容易失真的绝对图片比例、过细文字和复杂的多列布局。"
                />
                <StrategyStep 
                  step="STEP 02. Interaction Rule" 
                  title="交互层：极致降维" 
                  desc="把每一步的选项压缩到用户不需要反复思考的颗粒度，确保单向链路顺畅，极大降低误选和全局回退成本。"
                />
                <StrategyStep 
                  step="STEP 03. Team Reuse" 
                  title="协作层：经验沉淀" 
                  desc="将散落的经验沉淀为可量化的规范与培训内容，帮助后续项目团队直接复用，避免每次从零进行基础判断。"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              06. Design Output | 设计输出
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-b border-white/5"
          >
            <div className="max-w-[720px] mb-8">
              <span className="text-[11px] font-mono text-[#72D8F4] tracking-widest uppercase block mb-4">06 / DESIGN OUTPUT</span>
              <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white/90 leading-[1.3] mb-5">
                交互流程与视觉规范沉淀
              </h2>
              <p className="text-[15px] lg:text-[16px] text-white/60 leading-[1.8]">
                最终输出包括 Chatbot 交互流程分析与 5G 消息视觉规范。前者用于拆解线性对话流程中的信息传达策略，后者用于定义色彩、字体、图片比例等跨厂商适配标准。
              </p>
            </div>

            <motion.div variants={fadeInUp}>
              <EvidenceImageGrid />
            </motion.div>
          </motion.section>

          {/* ==========================================
              07. Outcome | 结果与价值
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] font-mono text-[#72D8F4] tracking-widest uppercase block mb-3 md:mb-4">07 / OUTCOME & VALUE</span>
                <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white/90 leading-[1.3]">
                  从单次设计交付，<br className="hidden lg:block"/>到团队可复用规范
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                {/* 结果文字 */}
                <p className="text-[16px] lg:text-[17px] text-white/80 leading-[1.9] mb-10">
                  3 个直接负责设计的项目于 2021 年分别获得「绽放杯」三等奖、优秀创新奖及智慧教育优秀奖，其中智慧校园项目入选国家 5G+ 智慧教育应用试点。
                </p>

                {/* 核心指标矩阵 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-white/10 py-8">
                  <div>
                    <div className="text-[32px] font-semibold text-white mb-1">3</div>
                    <div className="text-[13px] text-white/50">获奖项目</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-semibold text-white mb-1">40+</div>
                    <div className="text-[13px] text-white/50">内部培训场次</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-semibold text-white mb-1">15</div>
                    <div className="text-[13px] text-white/50">规范推行人数</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-semibold text-white mb-1 text-[#28B5D8]">1<span className="text-[18px] ml-1">套</span></div>
                    <div className="text-[13px] text-white/50">交互与视觉规范</div>
                  </div>
                </div>

                {/* 补充复盘 */}
                <div className="bg-[#080F15]/50 border border-white/10 p-6 md:p-8 rounded-[16px]">
                  <h4 className="text-[14px] font-semibold text-white/90 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#72D8F4] rounded-full"></span>
                    Reflection
                  </h4>
                  <p className="text-[14px] text-white/60 leading-[1.8]">
                    这个项目的价值不在于单个页面视觉，而在于把高度受限、难以标准化的 5G 消息 Chatbot 设计，转化为团队可以理解、复用和执行的规范体系。它能体现我在强约束场景下的交互判断、规范沉淀和跨项目复用能力。
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              底部去敏申明
              ========================================== */}
          <footer className="mt-8 border-t border-white/10 pt-8 pb-10">
            <p className="text-white/30 text-[11px] font-mono leading-[1.6]">
              * Confidentiality Notice: 项目涉及客户与业务信息已做去敏处理，页面仅展示设计方法、交互结构与已公开/可展示成果，不包含敏感数据。
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
} 