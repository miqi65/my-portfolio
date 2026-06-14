"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
// [SMART_IMAGE_COMPONENT] 正文智能图片组件（自带高度限制与路径提示防崩塌）
// ==========================================
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
  aspectRatioClassName = "w-full h-[420px] md:h-[520px]", 
  fallbackHeightClass = "h-[120px] md:h-[140px]",
  objectFit = "contain" 
}: CaseImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full mt-10 md:mt-14 bg-[#F7F7F5] border border-[#DBDADD] rounded-[16px] flex flex-col items-center justify-center px-6 text-center transition-all ${fallbackHeightClass}`}>
        <span className="text-[#AAA9AB] text-[11px] font-mono tracking-widest">
          [ 暂无图像证据流: {src} ]
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatioClassName} mt-10 md:mt-14 w-full bg-[#F7F7F5] rounded-[16px] md:rounded-[24px] overflow-hidden transition-all duration-500 border border-[#DBDADD]/40`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F5F5F3] animate-pulse z-0" />
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

// ==========================================
// [HERO_IMAGE_COMPONENT] Hero 右侧大图智能组件
// ==========================================
function HeroProductImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 bg-[#F7F7F5] border border-[#DBDADD]/50 rounded-[24px] flex flex-col items-center justify-center px-6 text-center">
        <span className="text-[#AAA9AB] text-[11px] font-mono tracking-widest">
          [ 缺失首屏核心展示图: {src} ]
        </span>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && <div className="absolute inset-0 bg-[#F7F7F5] animate-pulse rounded-[24px] z-0" />}
      <Image 
        src={src} 
        alt={alt}
        fill
        priority
        sizes="(max-w: 1280px) 100vw, 800px"
        className={`object-contain object-center lg:object-right transition-opacity duration-700 z-10 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </>
  );
}

export default function CaseStudyTemplate() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#222222] font-sans selection:bg-[#75FB90] selection:text-[#000000] antialiased">
      
      {/* 极简顶导 - 规范 1280px 容器 */}
      <nav className="fixed top-0 w-full z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#DBDADD]/40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/#cases" className="flex items-center gap-2 text-sm font-medium text-[#AAA9AB] hover:text-[#000000] transition-colors group">
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回作品集</span>
          </Link>
          <div className="text-[11px] tracking-widest text-[#AAA9AB] uppercase font-mono hidden sm:block">
            Miki Portfolio · Case Study Template
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        
        {/* ==========================================
            1. Hero 首屏 (左右 Split 布排画布)
            ========================================== */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="relative w-full min-h-[calc(100vh-64px)] pt-24 pb-16 lg:pt-24 flex items-center bg-[#FFFFFF] overflow-hidden"
        >
          {/* 右侧微光渲染层 */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-[#F5F5F3] to-transparent opacity-60 rounded-full blur-[120px] pointer-events-none z-0"></div>

          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* 左侧文字信息流 (5列) */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-center max-w-[520px]">
              
              {/* 方向分类微型标签 */}
              <div className="text-[11px] lg:text-[12px] font-mono text-[#AAA9AB] tracking-[0.12em] uppercase mb-5 flex flex-wrap items-center gap-2">
                <span>[META_TAG_1]</span>
                <span className="w-1 h-1 rounded-full bg-[#DBDADD]"></span>
                <span>[META_TAG_2]</span>
              </div>

              {/* 主标题 */}
              <h1 className="text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-semibold text-[#000000] leading-[1.08] lg:leading-[1.12] tracking-tight mb-5">
                [PROJECT_TITLE_LINE_1]<br className="hidden md:block lg:hidden"/>[PROJECT_TITLE_LINE_2]
              </h1>

              {/* 核心一句流精简陈述 */}
              <p className="text-[20px] lg:text-[24px] text-[#333333] leading-[1.6] mb-6">
                [PROJECT_ONE_LINER_SUBTITLE]
              </p>

              {/* 技能标签矩阵 */}
              <div className="flex flex-wrap gap-2.5 mb-6 lg:mb-8">
                {['[SKILL_TAG_1]', '[SKILL_TAG_2]', '[SKILL_TAG_3]', '[SKILL_TAG_4]'].map((chip, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-transparent border border-[#DBDADD] rounded-[8px] text-[13px] text-[#333333] hover:border-[#75FB90] transition-colors cursor-default">
                    {chip}
                  </span>
                ))}
              </div>

              {/* 深入产品背景陈述 */}
              <p className="text-[16px] lg:text-[18px] text-[#555555] leading-[1.9] mb-8 lg:mb-10">
                [PROJECT_HERO_DESCRIPTION_PARAGRAPH]
              </p>

              {/* 核心硬核数字排雷 */}
              <div className="grid grid-cols-2 lg:flex lg:flex-nowrap gap-x-8 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-[24px] lg:text-[28px] font-semibold text-[#000000] leading-tight">[NUM_METRIC_1]<span className="text-[16px] font-normal text-[#333333] ml-1">[UNIT_1]</span></span>
                  <span className="text-[12px] text-[#AAA9AB] uppercase tracking-wider mt-1">[LABEL_METRIC_1]</span>
                </div>
                <div className="w-px h-10 bg-[#DBDADD] hidden lg:block"></div>
                <div className="flex flex-col">
                  <span className="text-[24px] lg:text-[28px] font-semibold text-[#000000] leading-tight">[NUM_METRIC_2]<span className="text-[16px] font-normal text-[#333333] ml-1">[UNIT_2]</span></span>
                  <span className="text-[12px] text-[#AAA9AB] uppercase tracking-wider mt-1">[LABEL_METRIC_2]</span>
                </div>
                <div className="w-px h-10 bg-[#DBDADD] hidden lg:block"></div>
                <div className="flex flex-col">
                  <span className="text-[24px] lg:text-[28px] font-semibold text-[#000000] leading-tight">[NUM_METRIC_3]<span className="text-[16px] font-normal text-[#333333] ml-1">[UNIT_3]</span></span>
                  <span className="text-[12px] text-[#AAA9AB] uppercase tracking-wider mt-1">[LABEL_METRIC_3]</span>
                </div>
              </div>

            </motion.div>

            {/* 右侧主产品效果渲染图 (7列：融合画布，支持边缘羽化) */}
            <motion.div 
              initial={{ opacity: 0, x: 24, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative w-full h-[300px] md:h-[420px] lg:h-[680px] xl:h-[720px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),rgba(255,255,255,0)_70%)] pointer-events-none z-0" />
              
              {/* CSS Mask 渐变无缝边缘消隐融合逻辑 */}
              <div 
                className="relative w-full h-full z-10"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 100%)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 100%)"
                }}
              >
                <HeroProductImage 
                  src="/images/[PROJECT_ID]/[PROJECT_ID]-hero-product.png" 
                  alt="[PROJECT_TITLE] HMI 核心场景渲染" 
                />
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ==========================================
            正文排版骨架流容器 (严格限定 1280px 秩序)
            ========================================== */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-24">
          
          {/* ==========================================
              2. 30 秒快速快读摘要区
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
                <h4 className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase mb-3">[SUMMARY_KEY_1]</h4>
                <p className="text-[15px] lg:text-[16px] text-[#000000] leading-[1.6] font-medium">
                  [SUMMARY_VALUE_1_LINE_1] <br className="hidden md:block"/>[SUMMARY_VALUE_1_LINE_2]
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:border-l md:border-[#DBDADD]/40 md:pl-8 lg:pl-12">
                <h4 className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase mb-3 flex items-center gap-2">
                  [SUMMARY_KEY_2]
                  <span className="w-1.5 h-1.5 bg-[#75FB90] rounded-full"></span>
                </h4>
                <p className="text-[15px] lg:text-[16px] text-[#000000] leading-[1.6]">
                  [SUMMARY_VALUE_2_CONTENT]
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:border-l md:border-[#DBDADD]/40 md:pl-8 lg:pl-12">
                <h4 className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase mb-3">[SUMMARY_KEY_3]</h4>
                <p className="text-[15px] lg:text-[16px] text-[#000000] leading-[1.6]">
                  [SUMMARY_VALUE_3_CONTENT]
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              3. Problem / Context 背景剖析模块
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
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">[SECTION_03_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  [SECTION_03_TITLE_LINE_1]<br className="hidden lg:block"/>[SECTION_03_TITLE_LINE_2]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-6 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8]">
                  [SECTION_03_THESIS_STATEMENT_PROMPT]
                </p>
                <p className="text-[16px] lg:text-[17px] text-[#333333] leading-[1.9]">
                  [SECTION_03_DESCRIPTION_BODY_TEXT]
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              4. System Complexity 系统复杂度拆解模块
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
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">[SECTION_04_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  [SECTION_04_TITLE]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-8">
                  [SECTION_04_THESIS_STATEMENT]
                </p>
                <ul className="flex flex-col gap-5 border-t border-[#DBDADD]/40 pt-6">
                  {[
                    { title: '[LIST_04_ITEM_1_KEY]', desc: '[LIST_04_ITEM_1_VALUE]' },
                    { title: '[LIST_04_ITEM_2_KEY]', desc: '[LIST_04_ITEM_2_VALUE]' },
                    { title: '[LIST_04_ITEM_3_KEY]', desc: '[LIST_04_ITEM_3_VALUE]' },
                    { title: '[LIST_04_ITEM_4_KEY]', desc: '[LIST_04_ITEM_4_VALUE]' }
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
                src="/images/[PROJECT_ID]/[PROJECT_ID]-complexity-map.webp" 
                alt="[SECTION_04_TITLE] 视觉证据图说"
                objectFit="contain"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              5. Human-AI Boundary 人机边界模块
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
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">[SECTION_05_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  [SECTION_05_TITLE]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-8">
                  [SECTION_05_THESIS_STATEMENT]
                </p>
                
                <div className="flex flex-col gap-6 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] border-t border-[#DBDADD]/40 pt-6">
                  <div>
                    <strong className="text-[#000000] block mb-1">[MATRIX_05_ROLE_1_TITLE]</strong>
                    [MATRIX_05_ROLE_1_DESCRIPTION]
                  </div>
                  <div>
                    <strong className="text-[#000000] block mb-1">[MATRIX_05_ROLE_2_TITLE]</strong>
                    [MATRIX_05_ROLE_2_DESCRIPTION]
                  </div>
                  <div>
                    <strong className="text-[#000000] block mb-1">[MATRIX_05_ROLE_3_TITLE]</strong>
                    [MATRIX_05_ROLE_3_DESCRIPTION]
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/[PROJECT_ID]/[PROJECT_ID]-human-ai-boundary.webp" 
                alt="[SECTION_05_TITLE] 人机关系框架流"
                objectFit="contain"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              6. Design Challenge 业务深水区挑战
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
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">[SECTION_06_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  [SECTION_06_TITLE]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-5">
                  [SECTION_06_THESIS_STATEMENT]
                </p>
                <div className="text-[16px] lg:text-[17px] text-[#333333] leading-[1.9]">
                  <p className="mb-4">
                    [SECTION_06_CONTEXT_SUMMARY]
                  </p>
                  <div className="bg-[#F7F7F5] p-6 lg:p-8 rounded-[12px] border border-[#DBDADD]/40 mt-4">
                    <strong className="text-[#000000] text-base lg:text-[17px] font-semibold block mb-3">[INSIGHT_06_BOX_TITLE]</strong>
                    <p className="text-base lg:text-[17px] text-[#333333] leading-[1.8]">
                      [INSIGHT_06_BOX_CONTENT]
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/[PROJECT_ID]/[PROJECT_ID]-before-engineering-ui.webp" 
                alt="重构前的原始设计特征比对证据"
                objectFit="contain"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              7. Key Decisions / Trade-off 设计判断与取舍
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
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">[SECTION_07_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  [SECTION_07_TITLE]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-10 max-w-[720px]">
                <div>
                  <strong className="text-[#000000] text-[17px] lg:text-[18px] font-semibold block mb-3">[TRADE_OFF_07_ITEM_1_TITLE]</strong>
                  <p className="text-base lg:text-[18px] text-[#333333] leading-[1.9]">
                    [TRADE_OFF_07_ITEM_1_CONTENT]
                  </p>
                </div>
                <div className="border-t border-[#DBDADD]/40 pt-8">
                  <strong className="text-[#000000] text-[17px] lg:text-[18px] font-semibold block mb-3">[TRADE_OFF_07_ITEM_2_TITLE]</strong>
                  <p className="text-base lg:text-[18px] text-[#333333] leading-[1.9]">
                    [TRADE_OFF_07_ITEM_2_CONTENT]
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/[PROJECT_ID]/[PROJECT_ID]-layout-ab-comparison.webp" 
                alt="关键控制布局决策之 A/B 设计凭证比对"
                objectFit="contain"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              8. Exception & Takeover 异常容错阻断机制
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
                <span className="text-[11px] lg:text-xs font-mono text-[#AAA9AB] tracking-widest uppercase block mb-4 lg:mb-5">[SECTION_08_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.25]">
                  [SECTION_08_TITLE]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-8">
                  [SECTION_08_THESIS_STATEMENT]
                </p>
                <div className="flex flex-col gap-5 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] pl-2 border-l-2 border-[#DBDADD]/60">
                  <div className="pl-4">
                    <strong className="text-[#000000]">[LADDER_08_LEVEL_1_KEY]：</strong> [LADDER_08_LEVEL_1_VALUE]
                  </div>
                  <div className="pl-4">
                    <strong className="text-[#000000]">[LADDER_08_LEVEL_2_KEY]：</strong> [LADDER_08_LEVEL_2_VALUE]
                  </div>
                  <div className="pl-4">
                    <strong className="text-[#000000]">[LADDER_08_LEVEL_3_KEY]：</strong> [LADDER_08_LEVEL_3_VALUE]
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/[PROJECT_ID]/[PROJECT_ID]-exception-takeover-ladder.webp" 
                alt="极端风险边界保护系统梯次模型流图"
                aspectRatioClassName="w-full h-[280px] md:h-[400px] lg:h-[460px]"
                objectFit="contain"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              9. UI System / States 界面规约与设计资产
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] font-mono text-[#AAA9AB] tracking-widest uppercase block mb-3 md:mb-4">[SECTION_09_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.3]">
                  [SECTION_09_TITLE]
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                <p className="text-[17px] lg:text-[18px] text-[#000000] font-semibold leading-[1.8] mb-6">
                  [SECTION_09_THESIS_STATEMENT]
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-[16px] lg:text-[17px] text-[#333333] leading-[1.8] border-t border-[#DBDADD]/40 pt-6">
                  <li><strong className="text-[#000000] block mb-1">[RULE_09_ITEM_1_TITLE]</strong> [RULE_09_ITEM_1_CONTENT]</li>
                  <li><strong className="text-[#000000] block mb-1">[RULE_09_ITEM_2_TITLE]</strong> [RULE_09_ITEM_2_CONTENT]</li>
                  <li><strong className="text-[#000000] block mb-1">[RULE_09_ITEM_3_TITLE]</strong> [RULE_09_ITEM_3_CONTENT]</li>
                  <li><strong className="text-[#000000] block mb-1">[RULE_09_ITEM_4_TITLE]</strong> [RULE_09_ITEM_4_CONTENT]</li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <CaseImage 
                src="/images/[PROJECT_ID]/[PROJECT_ID]-ui-states-permission.webp" 
                alt="全链路系统高保真界面、数据字典与设计规约凭证合集"
                objectFit="contain"
              />
            </motion.div>
          </motion.section>

          {/* ==========================================
              10. Outcome / Reflection 结果凭证与反思复盘
              ========================================== */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 md:py-24 border-t border-[#DBDADD]/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
              <motion.div variants={fadeInUp} className="lg:col-span-4">
                <span className="text-[11px] font-mono text-[#AAA9AB] tracking-widest uppercase block mb-3 md:mb-4">[SECTION_10_LABEL]</span>
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#000000] leading-[1.3]">
                  [SECTION_10_TITLE]
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-8 max-w-[720px]">
                {/* 核心指标轻量精细排布（无框，强对比） */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 border-b border-[#DBDADD]/40 pb-10">
                  <div>
                    <div className="text-[36px] md:text-[44px] font-light text-[#000000] mb-1 leading-none">[METRIC_1_NUMBER]</div>
                    <div className="text-[14px] text-[#333333]">[METRIC_1_TXT_DESCRIPTION]</div>
                  </div>
                  <div>
                    <div className="text-[36px] md:text-[44px] font-light text-[#000000] mb-1 leading-none">[METRIC_2_NUMBER]</div>
                    <div className="text-[14px] text-[#333333]">[METRIC_2_TXT_DESCRIPTION]</div>
                  </div>
                  <div>
                    <div className="text-[36px] md:text-[44px] font-light text-[#000000] mb-1 leading-none">[METRIC_3_NUMBER]</div>
                    <div className="text-[14px] text-[#333333]">[METRIC_3_TXT_DESCRIPTION]</div>
                  </div>
                </div>

                {/* 深度文字性客观复盘 */}
                <div className="flex flex-col gap-8 text-[16px] lg:text-[17px] text-[#333333] leading-[1.9]">
                  <p>
                    [PROJECT_FINAL_DELIVERY_SUMMARY_VERIFICATION]
                  </p>
                  <div>
                    <strong className="text-[#000000] font-semibold block mb-1">[REFLECTION_10_POINT_1_TITLE]</strong>
                    [REFLECTION_10_POINT_1_CONTENT]
                  </div>
                  <div>
                    <strong className="text-[#000000] font-semibold block mb-1">[REFLECTION_10_POINT_2_TITLE]</strong>
                    [REFLECTION_10_POINT_2_CONTENT]
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ==========================================
              11. 去敏与法律边界低调陈述（页面页脚）
              ========================================== */}
          <footer className="mt-12 md:mt-20 border-t border-[#DBDADD]/40 pt-8 pb-10">
            <p className="text-[#AAA9AB] text-[11px] lg:text-[12px] font-mono leading-[1.6]">
              * Confidentiality Notice: [PSEUDONYM_DISCLAIMER_STATEMENT_TEXT]
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}