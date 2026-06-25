"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Network, ListFilter, Eye, Users, 
  Gauge, Crosshair, LineChart, Route, Layers3, 
  Palette, AlertTriangle, RefreshCcw, Activity, Boxes 
} from "lucide-react";

const IMAGE_PATHS = {
  hero: [
    "/images/yuxunda/友讯达封面图.jpg",
    "/images/yuxunda/yuxunda-dashboard.jpg",
    "/友讯达封面图.jpg",
    "友讯达封面图.jpg"
  ],
  interview: [
    "/uploads/用户访谈设计策略.svg",
    "../uploads/用户访谈设计策略.svg"
  ]
};

const smoothEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: smoothEase } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -24 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: smoothEase } 
  },
};

const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.98 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: smoothEase } 
  },
};

const revealClip = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 1.2, ease: smoothEase }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

interface SmartImageProps {
  srcList: string[];
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain";
  priority?: boolean;
}

function SmartImageWithFallback({ 
  srcList, 
  alt, 
  className = "", 
  objectFit = "contain",
  priority = false
}: SmartImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const hasFailedAll = currentIndex >= srcList.length;
  const currentSrc = !hasFailedAll ? srcList[currentIndex] : "";
  const isNextImageCompatible = currentSrc.startsWith("/") && !currentSrc.includes("..");

  if (hasFailedAll) {
    return (
      <div className={`w-full max-h-[96px] bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[8px] flex items-center justify-center px-4 py-6 transition-all ${className}`}>
        <span className="text-[#8A9BB0] text-[12px] font-medium tracking-wide flex items-center gap-2">
          <AlertTriangle size={14} aria-hidden="true" />
          视觉资源加载受限
        </span>
      </div>
    );
  }

  const baseImageClasses = `transition-opacity duration-1000 z-10 w-full h-full ${isLoaded ? "opacity-100" : "opacity-0"} ${objectFit === "cover" ? "object-cover" : "object-contain"}`;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[rgba(105,128,150,0.03)] animate-pulse z-0" />
      )}
      {isNextImageCompatible ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-w: 1280px) 100vw, 1280px"
          className={baseImageClasses}
          onLoad={() => setIsLoaded(true)}
          onError={() => setCurrentIndex(prev => prev + 1)}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={`absolute inset-0 ${baseImageClasses}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setCurrentIndex(prev => prev + 1)}
        />
      )}
    </div>
  );
}

function MiniEvidenceStrip({ data, title }: { data: { label: string; value: number; color?: string }[], title: string }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className="flex flex-col gap-3 w-full">
      <h5 className="text-[12px] font-medium text-[#8A9BB0] tracking-wide uppercase">{title}</h5>
      <div className="flex flex-col gap-2.5">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[13px] text-[#B8C4D2]">
              <span>{item.label}</span>
              <span className="font-medium text-[#E8EEF6]">{item.value}%</span>
            </div>
            <div className="w-full h-[3px] bg-[rgba(105,128,150,0.10)] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: smoothEase, delay: 0.2 + idx * 0.1 }}
                className="h-full rounded-full" 
                style={{ backgroundColor: item.color || '#5BA7C7' }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function YuxundaDataScreenCase() {
  return (
    <div className="min-h-screen bg-[#03070D] text-[#B8C4D2] font-sans selection:bg-[#5BA7C7] selection:text-[#03070D] antialiased">
      
      <nav className="fixed top-0 w-full z-50 bg-[#03070D]/80 backdrop-blur-lg border-b border-[rgba(105,128,150,0.08)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link 
            href="/#cases" 
            className="flex items-center gap-2 text-[13px] font-medium text-[#8A9BB0] hover:text-[#E8EEF6] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CC8DE] focus-visible:ring-offset-4 focus-visible:ring-offset-[#03070D] rounded-sm"
          >
            <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" className="group-hover:-translate-x-1 transition-transform duration-300 motion-reduce:transition-none motion-reduce:transform-none" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[12px] text-[#5D6D82] font-medium hidden sm:block tracking-wide">
            Miki Portfolio · Yuxunda Dashboard
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden pt-14">
        
        {/* 01 Hero */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="relative w-full min-h-[760px] lg:min-h-[820px] py-16 lg:py-0 flex items-center overflow-hidden"
        >
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-center relative z-10">
            
            <motion.div variants={fadeInUp} className="flex flex-col justify-center max-w-[500px]">
              <div className="text-[12px] font-medium text-[#5BA7C7] tracking-widest uppercase mb-6 flex flex-wrap items-center gap-3">
                <span>Smart Factory</span>
                <span className="w-1 h-1 rounded-full bg-[#5BA7C7]/40" aria-hidden="true"></span>
                <span>Data Viz</span>
              </div>

              <h1 className="text-[44px] md:text-[52px] lg:text-[60px] font-medium text-[#E8EEF6] leading-[1.1] tracking-tight mb-6">
                友讯达<br className="hidden lg:block"/>数据大屏
              </h1>

              <p className="text-[18px] lg:text-[20px] text-[#E8EEF6] leading-[1.6] mb-5 font-medium">
                将底层设备与生产数据，转译为现场管理语言。
              </p>

              <p className="text-[15px] text-[#B8C4D2] leading-[1.7] mb-10">
                主导智能工厂数据大屏设计，通过重新构建信息架构与视觉层级，帮助管理层远距离快速识别产线状态、异常风险与效率瓶颈。
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
                <div className="flex flex-col">
                  <span className="text-[28px] lg:text-[32px] font-light text-[#7CC8DE] leading-tight flex items-baseline gap-1">+43<span className="text-[16px] font-medium">%</span></span>
                  <span className="text-[12px] font-medium text-[#8A9BB0] mt-2">生产效率提升</span>
                </div>
                <div className="flex flex-col relative before:content-[''] before:absolute before:left-[-16px] before:top-1/4 before:h-1/2 before:w-[1px] before:bg-[rgba(105,128,150,0.16)]">
                  <span className="text-[28px] lg:text-[32px] font-light text-[#E8EEF6] leading-tight flex items-baseline gap-1">79<span className="text-[16px] font-medium text-[#8A9BB0]">%</span></span>
                  <span className="text-[12px] font-medium text-[#8A9BB0] mt-2">满意度 ≥6分占比</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] border-t border-[rgba(105,128,150,0.10)] pt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[#5D6D82] font-medium">角色</span>
                  <span className="text-[#E8EEF6]">主设计师</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#5D6D82] font-medium">客户</span>
                  <span className="text-[#E8EEF6]">友讯达科技</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#5D6D82] font-medium">周期</span>
                  <span className="text-[#E8EEF6]">2 个月</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 32, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: smoothEase }}
              className="relative w-full aspect-[16/10] max-h-[560px] rounded-[16px] flex items-center justify-center p-4 lg:p-8 border border-[rgba(105,128,150,0.08)]"
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(91,167,199,0.06) 0%, transparent 60%), linear-gradient(rgba(105,128,150,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(105,128,150,0.04) 1px, transparent 1px)',
                backgroundSize: '100% 100%, 32px 32px, 32px 32px'
              }}
            >
              <SmartImageWithFallback 
                srcList={IMAGE_PATHS.hero} 
                alt="友讯达大屏主视觉" 
                priority 
              />
            </motion.div>

          </div>
        </motion.section>

        {/* 02 Quick Read */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={revealClip}
          className="w-full bg-[#08101A] border-y border-[rgba(105,128,150,0.10)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 md:py-10">
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              <motion.div variants={fadeInUp} className="flex flex-col gap-2 md:pr-10">
                <h4 className="text-[12px] font-medium text-[#8A9BB0] tracking-wide uppercase">业务问题</h4>
                <p className="text-[15px] text-[#B8C4D2] leading-[1.6]">
                  生产数据存在，但分散在系统和岗位中，难以被快速理解和用于现场决策。
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2 md:px-10 md:border-l border-[rgba(105,128,150,0.10)]">
                <h4 className="text-[12px] font-medium text-[#8A9BB0] tracking-wide uppercase">设计策略</h4>
                <p className="text-[15px] text-[#B8C4D2] leading-[1.6]">
                  重新组织生产、设备、质量与异常信息，形成管理层可读的大屏信息架构。
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2 md:pl-10 md:border-l border-[rgba(105,128,150,0.10)]">
                <h4 className="text-[12px] font-medium text-[#7CC8DE] tracking-wide uppercase">最终结果</h4>
                <p className="text-[15px] text-[#E8EEF6] leading-[1.6]">
                  上线后生产效率提升 +43%，满意度 ≥6 分占比 79%，满分评价占比 31%。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 03 Business Context */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase">03 — Context</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] leading-[1.3]">
                把底层数据转化为<br className="hidden lg:block"/>现场管理视图
              </h2>
              <div className="h-[1px] w-12 bg-[#7CC8DE] mt-2 opacity-50" aria-hidden="true" />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-10 lg:pl-8">
              <div className="text-[16px] text-[#B8C4D2] leading-[1.8] space-y-6">
                <p>
                  客户企业拥有庞大的生产数据基数，但数据分散在系统、岗位和流程中。管理人员需要快速看到产线状态、设备运行、质量异常和效率变化，但传统查询方式依赖人工汇总和经验判断，信息传递慢，分析成本高。
                </p>
                <p className="text-[18px] text-[#E8EEF6] font-medium border-l-2 border-[#5BA7C7] pl-5 py-1">
                  这个项目的目标不是做一个“炫酷大屏”，而是把底层数据转化为可被管理层快速理解、可用于现场判断、可支持持续优化的生产管理语言。
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 border-t border-[rgba(105,128,150,0.10)] pt-10">
                <MiniEvidenceStrip 
                  title="数据来源分布" 
                  data={[
                    { label: "生产 MES", value: 45, color: "#5BA7C7" },
                    { label: "设备 IoT", value: 30, color: "#7CC8DE" },
                    { label: "质量 QMS", value: 25, color: "rgba(105,128,150,0.6)" }
                  ]} 
                />
                <MiniEvidenceStrip 
                  title="上线后满意度分布" 
                  data={[
                    { label: "满分评价 (10分)", value: 31, color: "#5BA7C7" },
                    { label: "及格以上 (≥6分)", value: 79, color: "#7CC8DE" }
                  ]} 
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 04 Core Challenge */}
        <section className="w-full relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#03070D,#08101A)] border-y border-[rgba(105,128,150,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(105,128,150,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" aria-hidden="true" />
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-[1024px] mx-auto px-6 relative z-10 flex flex-col items-center text-center"
          >
            <motion.span variants={fadeInUp} className="text-[12px] font-medium text-[#5BA7C7] tracking-widest uppercase mb-8">04 — Core Challenge</motion.span>
            
            <motion.h2 
              variants={blurIn} 
              className="text-[24px] md:text-[32px] lg:text-[40px] font-light text-[#E8EEF6] leading-[1.5] tracking-tight mb-16 max-w-[860px]"
            >
              核心挑战不是“如何把数据画出来”，而是在有限时间内，判断<strong className="font-medium text-[#7CC8DE] font-normal mx-1">哪些数据值得上屏</strong>，并让管理者在远距离短时间内看懂产线状态。
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
              {[
                { title: '数据极度分散', icon: Network },
                { title: '指标优先级不清', icon: ListFilter },
                { title: '远距阅读压力高', icon: Eye }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-3 text-[#B8C4D2]">
                  <item.icon size={18} strokeWidth={1.5} className="text-[#5D6D82]" aria-hidden="true" />
                  <span className="text-[15px] font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 05 Research Findings */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div variants={fadeInRight} className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">05 — Research</span>
                <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6]">
                  探索目标与角色还原
                </h2>
              </div>
              
              <div className="flex flex-col gap-8 relative before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-[rgba(105,128,150,0.10)]">
                {[
                  { role: '管理层', focus: '关注整体效率、产线负荷、异常趋势' },
                  { role: '生产主管', focus: '关注订单进度、产能瓶颈、人员协作' },
                  { role: '质量团队', focus: '关注异常分布、质量波动、问题定位' },
                  { role: '设备维护', focus: '关注设备状态、维护时机、故障预警' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#03070D] border-2 border-[#101B28] flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D6D82]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[#E8EEF6] font-medium mb-1 text-[15px]">{item.role}</div>
                      <div className="text-[#8A9BB0] text-[14px] leading-[1.6]">{item.focus}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
              <div className="mb-10 text-[16px] text-[#B8C4D2] leading-[1.7] space-y-4">
                <p>
                  不同角色的职责不同，但他们都需要更实时、更准确、更容易理解的生产数据，用来<strong className="text-[#E8EEF6] font-medium">判断状态、发现异常、制定改进动作。</strong>
                </p>
                <div className="bg-[rgba(91,167,199,0.04)] border-l-2 border-[#5BA7C7] py-4 px-6 text-[#E8EEF6] text-[15px] font-medium rounded-r-sm">
                  设计机会：如何把底层离散的生产数据转译成管理者能直观阅读的视觉语言？
                </div>
              </div>
              
              <div className="w-full h-[220px] md:h-[260px]">
                <SmartImageWithFallback 
                  srcList={IMAGE_PATHS.interview}
                  alt="用户访谈与设计策略推导模型"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 06 Data Priority */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)] overflow-hidden"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">06 — Architecture</span>
            <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6]">
              信息架构与指标分层
            </h2>
          </motion.div>

          <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: smoothEase }}
              className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[rgba(105,128,150,0.16)] origin-left z-0 motion-reduce:hidden" 
              aria-hidden="true"
            />
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: smoothEase }}
              className="lg:hidden absolute left-[28px] top-[40px] bottom-[40px] w-[1px] bg-[rgba(105,128,150,0.16)] origin-top z-0 motion-reduce:hidden" 
              aria-hidden="true"
            />

            {[
              { level: 'L1', name: '一眼判断', items: '总产量、效率、异常、设备状态', icon: Gauge, color: 'text-[#7CC8DE]' },
              { level: 'L2', name: '定位问题', items: '产线、设备、订单、质量分布', icon: Crosshair, color: 'text-[#5BA7C7]' },
              { level: 'L3', name: '解释原因', items: '趋势、对比、历史记录、异常明细', icon: LineChart, color: 'text-[#8A9BB0]' },
              { level: 'L4', name: '管理决策', items: '瓶颈、负荷、维护、优先级', icon: Route, color: 'text-[#5D6D82]' }
            ].map((tier, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className="relative z-10 flex lg:flex-col items-start lg:items-center gap-5 lg:gap-6 lg:w-[22%] bg-[#03070D] lg:bg-transparent pr-4 lg:pr-0"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#08101A] border border-[rgba(105,128,150,0.2)] flex items-center justify-center relative shadow-[0_0_15px_rgba(3,7,13,0.8)]">
                  <tier.icon size={20} strokeWidth={1.5} className={tier.color} aria-hidden="true" />
                </div>
                <div className="flex flex-col lg:items-center lg:text-center pt-2 lg:pt-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[12px] font-bold text-[#5BA7C7] bg-[#08101A] px-2 py-0.5 rounded border border-[#5BA7C7]/20">{tier.level}</span>
                    <h3 className="text-[16px] font-medium text-[#E8EEF6]">{tier.name}</h3>
                  </div>
                  <p className="text-[#8A9BB0] text-[14px] leading-[1.6] mt-1 lg:mt-2">
                    {tier.items}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 07 Final Solution */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1440px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">07 — Solution</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6]">
                最终大屏呈现
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div>
                <strong className="text-[#E8EEF6] block text-[15px] mb-2 font-medium">全局优先</strong>
                <p className="text-[#8A9BB0] text-[14px] leading-[1.6]">关键KPI置于视觉中枢最高层级。</p>
              </div>
              <div className="md:border-l border-[rgba(105,128,150,0.10)] md:pl-6">
                <strong className="text-[#E8EEF6] block text-[15px] mb-2 font-medium">异常突出</strong>
                <p className="text-[#8A9BB0] text-[14px] leading-[1.6]">用高亮冷色系将异常从深海背景提取。</p>
              </div>
              <div className="md:border-l border-[rgba(105,128,150,0.10)] md:pl-6">
                <strong className="text-[#E8EEF6] block text-[15px] mb-2 font-medium">趋势辅助</strong>
                <p className="text-[#8A9BB0] text-[14px] leading-[1.6]">微缩趋势图辅助管理者判断变化方向。</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] bg-[#08101A] rounded-[16px] border border-[rgba(105,128,150,0.12)] shadow-2xl overflow-hidden group">
            <SmartImageWithFallback 
              srcList={IMAGE_PATHS.hero} 
              alt="最终大屏可视化方案呈现"
              objectFit="cover"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute top-[12%] left-[6%] z-20 bg-[rgba(3,7,13,0.68)] backdrop-blur-md border border-[rgba(105,128,150,0.2)] px-4 py-2.5 rounded shadow-lg hidden md:block"
            >
              <div className="text-[#E8EEF6] text-[13px] font-medium mb-0.5">1. 全局 KPI 区</div>
              <div className="text-[#8A9BB0] text-[12px]">统揽产线核心指标表现</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute top-[48%] right-[8%] z-20 bg-[rgba(3,7,13,0.68)] backdrop-blur-md border border-[rgba(105,128,150,0.2)] px-4 py-2.5 rounded shadow-lg hidden md:block"
            >
              <div className="text-[#E8EEF6] text-[13px] font-medium mb-0.5">2. 异常与趋势区</div>
              <div className="text-[#8A9BB0] text-[12px]">波动状态高亮预警提取</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-[15%] left-[22%] z-20 bg-[rgba(3,7,13,0.68)] backdrop-blur-md border border-[rgba(105,128,150,0.2)] px-4 py-2.5 rounded shadow-lg hidden md:block"
            >
              <div className="text-[#E8EEF6] text-[13px] font-medium mb-0.5">3. 设备运行区</div>
              <div className="text-[#8A9BB0] text-[12px]">支持向下钻取到具体工位</div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 08 Visual Rules */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 md:py-32 border-b border-[rgba(105,128,150,0.10)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase">08 — Visual Rules</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6] leading-[1.3]">
                严谨克制的视觉规范
              </h2>
              <p className="text-[#8A9BB0] text-[15px] leading-[1.7] mt-4">
                大屏不是艺术品，而是工具。我们去除了所有无意义的 3D 装饰与高饱和渐变，回归数据呈现本身。
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <div className="bg-[#08101A] border border-[rgba(105,128,150,0.10)] rounded-[12px] overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(105,128,150,0.10)] border-b border-[rgba(105,128,150,0.10)]">
                  <div className="p-8">
                    <Eye size={18} strokeWidth={1.5} className="text-[#5BA7C7] mb-4" aria-hidden="true" />
                    <h3 className="text-[#E8EEF6] font-medium mb-2 text-[15px]">远距离可读</h3>
                    <p className="text-[#5D6D82] text-[14px] leading-[1.6]">关键数值使用高对比、大字号和稳定字重，保证车间环境远距离可识别。</p>
                  </div>
                  <div className="p-8">
                    <Layers3 size={18} strokeWidth={1.5} className="text-[#5BA7C7] mb-4" aria-hidden="true" />
                    <h3 className="text-[#E8EEF6] font-medium mb-2 text-[15px]">层级明确</h3>
                    <p className="text-[#5D6D82] text-[14px] leading-[1.6]">总览、异常、明细数据分层展示，通过空间留白避免同等抢占注意力。</p>
                  </div>
                </div>

                <div className="w-full bg-[#03070D] py-5 px-8 flex flex-wrap items-center justify-center gap-6 border-b border-[rgba(105,128,150,0.10)]">
                  <div className="flex items-center gap-2 text-[12px] text-[#8A9BB0] font-medium">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#5BA7C7]" aria-hidden="true" /> KPI
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#8A9BB0] font-medium">
                    <div className="w-4 h-1 rounded-sm bg-[#5D6D82]" aria-hidden="true" /> Trend
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#E8EEF6] bg-[rgba(124,200,222,0.1)] px-2 py-0.5 rounded border border-[#7CC8DE]/30 font-medium">
                    Alert
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#5D6D82] font-mono">
                    DIN Alternate
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(105,128,150,0.10)]">
                  <div className="p-8">
                    <Palette size={18} strokeWidth={1.5} className="text-[#5BA7C7] mb-4" aria-hidden="true" />
                    <h3 className="text-[#E8EEF6] font-medium mb-2 text-[15px]">冷色科技感</h3>
                    <p className="text-[#5D6D82] text-[14px] leading-[1.6]">以深蓝黑为底，使用冷色高亮关键数据，去掉过度装饰和干扰色。</p>
                  </div>
                  <div className="p-8">
                    <AlertTriangle size={18} strokeWidth={1.5} className="text-[#5BA7C7] mb-4" aria-hidden="true" />
                    <h3 className="text-[#E8EEF6] font-medium mb-2 text-[15px]">异常最小化打扰</h3>
                    <p className="text-[#5D6D82] text-[14px] leading-[1.6]">高饱和预警色只在真正需要响应的位置出现，避免整屏大面积标红。</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 09 Interaction Logic */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full border-y border-[rgba(105,128,150,0.10)] py-20 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">09 — Logic</span>
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#E8EEF6]">大屏交互流</h2>
            </motion.div>

            <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-4 mt-8">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: smoothEase }}
                className="hidden md:block absolute left-0 right-0 top-[15px] h-[1px] bg-[rgba(105,128,150,0.12)] z-0 origin-left motion-reduce:hidden" 
                aria-hidden="true" 
              />
              <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-[1px] bg-[rgba(105,128,150,0.12)] z-0" aria-hidden="true" />

              {[
                { title: '实时刷新', desc: '轻量动态变化', icon: RefreshCcw },
                { title: '异常抬升', desc: '跃迁至高层级', icon: AlertTriangle },
                { title: '趋势对比', desc: '历史横向比较', icon: LineChart },
                { title: '模块分区', desc: '关联生产与质量', icon: Boxes },
                { title: '状态闭环', desc: '从发现到复盘', icon: Activity }
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex md:flex-col items-start gap-4 md:gap-5 md:flex-1 group">
                  <div className="w-8 h-8 rounded-full bg-[#03070D] border border-[rgba(105,128,150,0.3)] group-hover:bg-[#08101A] transition-colors flex items-center justify-center shrink-0">
                    <step.icon size={14} strokeWidth={1.5} className="text-[#8A9BB0] group-hover:text-[#7CC8DE] transition-colors" aria-hidden="true" />
                  </div>
                  <div className="pt-1 md:pt-0">
                    <h3 className="text-[#E8EEF6] font-medium text-[15px] mb-1">{step.title}</h3>
                    <p className="text-[#5D6D82] text-[13px] leading-[1.6]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 10 Outcome */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 md:py-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 max-w-[500px]">
              <div>
                <span className="text-[12px] font-medium text-[#5D6D82] tracking-wider uppercase block mb-3">10 — Outcome</span>
                <h2 className="text-[32px] md:text-[40px] font-medium text-[#E8EEF6] leading-[1.2]">
                  从数据可见<br/>到决策可用
                </h2>
              </div>
              <p className="text-[#B8C4D2] text-[16px] leading-[1.7] mt-2">
                项目上线后，结合客户反馈和使用后的业务表现，该屏幕真正融入了工厂的日常早会与异常调度流中。数据从后台报表变成了现场管理的共同语言。
              </p>
              <div className="mt-8 pt-8 border-t border-[rgba(105,128,150,0.10)]">
                <p className="text-[#5D6D82] text-[12px] leading-[1.6]">
                  注：本页展示的界面数据与涉密信息已进行脱敏处理。核心反馈基于项目整体统计结果。
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-12 lg:border-l border-[rgba(105,128,150,0.10)] lg:pl-16">
              <div>
                <div className="text-[64px] md:text-[80px] font-light text-[#7CC8DE] leading-none tracking-tight mb-3">
                  +43<span className="text-[28px] font-medium">%</span>
                </div>
                <div className="text-[#8A9BB0] font-medium tracking-wide text-[15px]">生产异常响应与决策效率提升</div>
              </div>
              
              <div className="h-[1px] w-full bg-[rgba(105,128,150,0.06)]" aria-hidden="true" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <div className="text-[48px] md:text-[56px] font-light text-[#E8EEF6] leading-none tracking-tight mb-2">
                    79<span className="text-[20px] font-medium text-[#8A9BB0]">%</span>
                  </div>
                  <div className="text-[#5D6D82] font-medium tracking-wide text-[14px]">满意度 ≥6 分占比</div>
                </div>

                <div>
                  <div className="text-[48px] md:text-[56px] font-light text-[#E8EEF6] leading-none tracking-tight mb-2">
                    31<span className="text-[20px] font-medium text-[#8A9BB0]">%</span>
                  </div>
                  <div className="text-[#5D6D82] font-medium tracking-wide text-[14px]">给予满分 10 分占比</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}