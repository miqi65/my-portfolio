"use client";

import React from "react";
import { motion } from "framer-motion";

// ==========================================
// 静态资源路径集中定义 (请在实际项目中替换)
// ==========================================
const HERO_IMAGE = "/images/yxd/hero.jpg"; // 替换为真实的友讯达封面图路径
const VISUAL_SYSTEM_IMAGE = "/images/yxd/hero.jpg"; // 替换为产品大图路径

// ==========================================
// 动画配置
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// ==========================================
// 公共组件
// ==========================================
const SectionHeader = ({ id, en, zh }: { id: string; en: string; zh: string }) => (
  <div className="mb-12 border-b border-[#151515] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <span className="font-mono text-xs uppercase tracking-wider text-[#5B5B54] block mb-2">{id} — {en}</span>
      <h2 className="text-2xl md:text-3xl font-medium text-[#151515] font-sans">{zh}</h2>
    </div>
  </div>
);

// ==========================================
// 主页面组件
// ==========================================
export default function FactoryDashboardCase() {
  return (
    <main className="bg-[#F4F4EF] min-h-screen text-[#151515] font-sans selection:bg-[#B8E351] selection:text-[#151515]">
      
      {/* 01 HERO / 案例总览 */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div variants={fadeInUp}>
              <a href="/" className="inline-flex items-center text-sm font-mono text-[#5B5B54] hover:text-[#151515] mb-12 transition-colors">
                ← Back to Index
              </a>
              <div className="font-mono text-xs uppercase tracking-wider text-[#5B5B54] mb-4">Case Study / B2B SaaS</div>
              <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
                友讯达数据大屏<br />
                <span className="text-2xl md:text-3xl text-[#5B5B54] font-normal mt-2 block">Factory Data Visualization Dashboard</span>
              </h1>
              <p className="text-lg text-[#151515] leading-relaxed mb-12 max-w-md">
                把分散、滞后、难理解的生产数据，转化为管理者、生产主管、工程师和质检人员都能快速理解的实时决策界面。
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-[#151515]/20">
              <div>
                <div className="font-mono text-xs text-[#5B5B54] mb-1">Role</div>
                <div className="text-sm font-medium">主设计师</div>
              </div>
              <div>
                <div className="font-mono text-xs text-[#5B5B54] mb-1">Duration</div>
                <div className="text-sm font-medium">2 个月</div>
              </div>
              <div>
                <div className="font-mono text-xs text-[#5B5B54] mb-1">Client</div>
                <div className="text-sm font-medium">友讯达科技</div>
              </div>
              <div>
                <div className="font-mono text-xs text-[#5B5B54] mb-1">Scope</div>
                <div className="text-sm font-medium">研究 / UX / UI</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Panel */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <div className="relative border border-[#151515] bg-[#FAFAF7] p-4 md:p-8 overflow-hidden group">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(21,21,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,21,21,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              {/* Image Frame */}
              <div className="relative z-10 border border-[#151515]/10 shadow-sm bg-white aspect-[16/10] overflow-hidden">
                <img src={HERO_IMAGE} alt="友讯达大屏概览" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
              </div>
              {/* Tech Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#151515]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#151515]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#151515]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#151515]" />
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 border-x border-b border-[#151515] bg-[#B8E351]/10">
              <div className="p-4 border-r border-[#151515]">
                <div className="font-mono text-2xl md:text-3xl font-medium text-[#151515]">+43%</div>
                <div className="text-xs text-[#5B5B54] mt-1">生产效率提升</div>
              </div>
              <div className="p-4 border-r border-[#151515]">
                <div className="font-mono text-2xl md:text-3xl font-medium text-[#151515]">79%</div>
                <div className="text-xs text-[#5B5B54] mt-1">满意度 ≥6 分</div>
              </div>
              <div className="p-4">
                <div className="font-mono text-2xl md:text-3xl font-medium text-[#151515]">31%</div>
                <div className="text-xs text-[#5B5B54] mt-1">满分 10 分占比</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 02 Business Context / 业务上下文 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="02" en="Business Context" zh="业务上下文" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h3 className="font-mono text-sm uppercase text-[#151515] mb-4 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-[#151515] block" /> Background / 项目背景
              </h3>
              <p className="text-[#5B5B54] leading-relaxed mb-8">
                庞大的生产数据基准上，友讯达期望提升生产数据的价值，同时降低数据分析成本。项目核心在于通过可视化设计实现数据驱动的生产管理，从而达到提升效率、降低成本、优化资源利用率以及实现实时决策支持的商业目标。
              </p>
              {/* 降级的静态数据卡 */}
              <div className="flex gap-4">
                <div className="flex-1 border border-[#151515]/20 p-4 bg-white">
                  <div className="font-mono text-xs text-[#5B5B54] mb-2">行业规模趋势</div>
                  <div className="h-16 flex items-end gap-1">
                    <div className="w-1/4 bg-[#151515]/10 h-[40%]" />
                    <div className="w-1/4 bg-[#151515]/20 h-[60%]" />
                    <div className="w-1/4 bg-[#151515]/40 h-[80%]" />
                    <div className="w-1/4 bg-[#151515] h-[100%]" />
                  </div>
                </div>
                <div className="flex-1 border border-[#151515]/20 p-4 bg-white">
                  <div className="font-mono text-xs text-[#5B5B54] mb-2">数据结构占比</div>
                  <div className="h-16 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-12 h-12 stroke-[#151515] fill-none stroke-[4]">
                      <path strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path strokeDasharray="25, 100" className="stroke-[#B8E351]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-mono text-sm uppercase text-[#9B302B] mb-4 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9B302B] block" /> Core Pain Points / 核心痛点
              </h3>
              <div className="border border-[#151515] p-6 bg-[#FAFAF7]">
                <p className="text-[#151515] text-lg leading-relaxed font-medium mb-6">
                  企业拥有大量底层数据，但数据能力无法有效透出，导致数据价值流失。传统方式面临四大阻力：
                </p>
                <ul className="space-y-4 font-mono text-sm text-[#5B5B54]">
                  <li className="flex gap-4 border-t border-[#151515]/10 pt-4">
                    <span className="text-[#151515]">01</span>
                    <span>查询难度大，跨系统数据孤岛严重。</span>
                  </li>
                  <li className="flex gap-4 border-t border-[#151515]/10 pt-4">
                    <span className="text-[#151515]">02</span>
                    <span>数据分析专业要求高，一线人员难以使用。</span>
                  </li>
                  <li className="flex gap-4 border-t border-[#151515]/10 pt-4">
                    <span className="text-[#151515]">03</span>
                    <span>维护成本高，定制化图表开发繁琐。</span>
                  </li>
                  <li className="flex gap-4 border-t border-[#151515]/10 pt-4">
                    <span className="text-[#151515]">04</span>
                    <span>响应时间慢，无法支撑实时的现场决策。</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 03 Operational Complexity Map / 生产运营复杂度地图 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="03" en="Operational Complexity Map" zh="生产运营复杂度地图" />
          
          <div className="flex flex-col lg:flex-row gap-8 border border-[#151515] p-8 bg-[#F4F4EF] relative">
            {/* Inputs */}
            <motion.div variants={fadeInUp} className="flex-1 border border-[#151515]/20 bg-white p-6">
              <div className="font-mono text-xs uppercase text-[#5B5B54] mb-6 border-b border-[#151515]/10 pb-2">Data Inputs / 离散数据源</div>
              <div className="space-y-2">
                {['设备运行状态', '实时生产数据', '质检抽样数据', '能耗与效率指标'].map((item, i) => (
                  <div key={i} className="px-3 py-2 border border-[#151515]/10 text-sm font-mono text-[#5B5B54] bg-[#FAFAF7]">
                    <span className="text-[#151515] mr-2">IN_{i+1}</span>{item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core System */}
            <motion.div variants={fadeInUp} className="lg:w-[320px] border-2 border-[#151515] bg-[#151515] text-white p-6 flex flex-col justify-center relative">
              <div className="absolute top-1/2 -left-4 w-4 h-px bg-[#151515] hidden lg:block" />
              <div className="absolute top-1/2 -right-4 w-4 h-px bg-[#151515] hidden lg:block" />
              <div className="font-mono text-xs uppercase text-[#B8E351] mb-2">Core System</div>
              <h4 className="text-xl font-medium mb-4">友讯达可视化中枢</h4>
              <p className="text-sm text-white/70 font-mono leading-relaxed">
                实时处理、过滤噪音、按权限和角色分发高优指标与异常信号。
              </p>
            </motion.div>

            {/* Outputs (Roles) */}
            <motion.div variants={fadeInUp} className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[#151515]/20 bg-white p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-sans font-medium text-[#151515]">管理者 <span className="font-mono text-xs text-[#5B5B54]">/ Manager</span></div>
                  <span className="w-2 h-2 rounded-full bg-[#B8E351]" />
                </div>
                <div className="text-sm text-[#5B5B54] font-mono border-t border-[#151515]/10 pt-2">看整体产能与效率 / 投资回报评估</div>
              </div>
              <div className="border border-[#151515]/20 bg-white p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-sans font-medium text-[#151515]">生产主管 <span className="font-mono text-xs text-[#5B5B54]">/ Supervisor</span></div>
                  <span className="w-2 h-2 rounded-full bg-[#B8E351]" />
                </div>
                <div className="text-sm text-[#5B5B54] font-mono border-t border-[#151515]/10 pt-2">看生产线瓶颈 / 任务调配进度</div>
              </div>
              <div className="border border-[#151515]/20 bg-white p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-sans font-medium text-[#151515]">工程师 <span className="font-mono text-xs text-[#5B5B54]">/ Engineer</span></div>
                  <span className="w-2 h-2 rounded-full bg-[#9B302B]" />
                </div>
                <div className="text-sm text-[#5B5B54] font-mono border-t border-[#151515]/10 pt-2">看设备运行状态 / 预防性维护告警</div>
              </div>
              <div className="border border-[#151515]/20 bg-white p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-sans font-medium text-[#151515]">质检人员 <span className="font-mono text-xs text-[#5B5B54]">/ QA</span></div>
                  <span className="w-2 h-2 rounded-full bg-[#9B302B]" />
                </div>
                <div className="text-sm text-[#5B5B54] font-mono border-t border-[#151515]/10 pt-2">看质量异常 / 溯源与良率分析</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 04 Research Evidence / 用户访谈证据 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="04" en="Research Evidence" zh="用户访谈证据" />
          
          <div className="border border-[#151515] bg-white text-[#151515]">
            <div className="hidden md:grid grid-cols-12 border-b border-[#151515] bg-[#FAFAF7] font-mono text-xs text-[#5B5B54] p-4">
              <div className="col-span-1">ID</div>
              <div className="col-span-2">USER ROLE</div>
              <div className="col-span-5">PAIN POINT / QUOTE</div>
              <div className="col-span-4">DESIGN IMPLICATION</div>
            </div>

            {[
              { id: '01', role: '管理层', quote: '无实时准确的数据和指标，只能基于不完整的信息或感性判断进行决策。', impl: '全局视角的宏观指标区，必须保证实时刷新。' },
              { id: '02', role: '工程师', quote: '设备运行状态不及时上报，难以准确判断设备维护的时机和方式。', impl: '设备状态拓扑图，增加预测性维护预警（#9B302B）。' },
              { id: '03', role: '质检员', quote: '无质量问题的可视化分析，难以快速定位和解决质量异常。', impl: '增加良率趋势图与异常节点快速下钻能力。' },
              { id: '04', role: '生产主管', quote: '无法快速处理生产线上的问题和瓶颈，缺乏可靠的数据支持。', impl: '生产线瓶颈节点高亮，支持跨环节数据对比。' }
            ].map((row, i) => (
              <motion.div key={i} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 border-b border-[#151515]/20 last:border-b-0 p-4 md:items-center gap-4 md:gap-0 hover:bg-[#F4F4EF] transition-colors">
                <div className="col-span-1 font-mono text-sm">{row.id}</div>
                <div className="col-span-2 font-mono text-sm border border-[#151515]/10 px-2 py-1 inline-block w-fit md:w-auto text-center bg-white">{row.role}</div>
                <div className="col-span-5 text-sm font-medium pr-8">"{row.quote}"</div>
                <div className="col-span-4 text-sm text-[#5B5B54] font-mono">→ {row.impl}</div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 p-6 bg-[#151515] text-[#F4F4EF] border border-[#151515] flex gap-4 items-start">
            <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-current text-[#B8E351]">
              <path d="M12 2L22 20H2L12 2ZM12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16ZM11 10V14H13V10H11Z"/>
            </svg>
            <div>
              <div className="font-mono text-xs text-[#B8E351] mb-2 uppercase">Synthesis Summary</div>
              <p className="text-sm md:text-base">
                不同角色的诉求截然不同，但共同目标是寻找一个<strong>实时、准确、且具备强可读性</strong>的单一真相来源（Single Source of Truth）。设计机遇在于：如何通过合理的权限分层和视觉降噪，让大屏同时满足多角色的决策需求。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 05 Data-to-Decision Workflow / 数据到决策流程 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20 overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="05" en="Data-to-Decision Workflow" zh="数据到决策流程" />
          
          <div className="flex flex-col md:flex-row gap-0 border border-[#151515] bg-white">
            {[
              { id: '01', title: 'Data Capture', sub: '数据采集', act: 'IoT 设备 / ERP系统接入' },
              { id: '02', title: 'Data Structuring', sub: '数据整理', act: '清洗噪音 / 数据归一化' },
              { id: '03', title: 'Visual Priority', sub: '指标优先级', act: '定义关键 KPI 视觉层级' },
              { id: '04', title: 'Exception Signal', sub: '异常信号', act: '触发告警 / 阈值高亮显示' },
              { id: '05', title: 'Decision Support', sub: '决策支持', act: '下钻分析 / 现场调度依据' }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex-1 p-6 border-b md:border-b-0 md:border-r border-[#151515] last:border-0 relative group">
                <div className="font-mono text-2xl text-[#151515]/20 mb-4 group-hover:text-[#B8E351] transition-colors">{step.id}</div>
                <div className="font-mono text-sm uppercase font-bold text-[#151515] mb-1">{step.title}</div>
                <div className="text-xs text-[#5B5B54] mb-8">{step.sub}</div>
                
                <div className="absolute left-6 right-6 bottom-16 h-px bg-[#151515]/10 hidden md:block" />
                
                <div className="mt-auto pt-8">
                  <div className="text-xs font-mono bg-[#FAFAF7] border border-[#151515]/20 px-2 py-1 inline-block text-[#5B5B54]">
                    {step.act}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 06 Product Visual System / 产品视觉系统 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20 bg-[#FAFAF7]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="06" en="Product Visual System" zh="产品视觉系统" />
          
          <div className="relative border border-[#151515] p-2 md:p-12 bg-white">
            <img src={VISUAL_SYSTEM_IMAGE} alt="友讯达大屏视觉系统" className="w-full border border-[#151515]/10 shadow-sm" />
            
            {/* Annotations (Desktop only for precision, fallback to list on mobile) */}
            <div className="hidden lg:block">
              <div className="absolute top-16 left-8 bg-white border border-[#151515] p-3 text-xs font-mono shadow-sm">
                <div className="text-[#151515] font-bold mb-1">A. KPI Priority</div>
                <div className="text-[#5B5B54]">关键指标置顶优先</div>
              </div>
              <div className="absolute bottom-32 left-8 bg-white border border-[#151515] p-3 text-xs font-mono shadow-sm">
                <div className="text-[#151515] font-bold mb-1">B. Real-time Status</div>
                <div className="text-[#5B5B54]">生产线动态实时映射</div>
              </div>
              <div className="absolute top-32 right-8 bg-white border border-[#151515] p-3 text-xs font-mono shadow-sm">
                <div className="text-[#9B302B] font-bold mb-1">C. Exception Visibility</div>
                <div className="text-[#5B5B54]">异常阈值显性化报警</div>
              </div>
              <div className="absolute bottom-16 right-8 bg-white border border-[#151515] p-3 text-xs font-mono shadow-sm">
                <div className="text-[#151515] font-bold mb-1">D. Management Overview</div>
                <div className="text-[#5B5B54]">全局趋势多维度探索</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 07 Design Principles / 设计原则 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="07" en="Design Principles" zh="设计原则" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: '01', title: 'Make data readable', zh: '让数据可读', act: '采用高可读性字体与克制的视觉元素，避免过度装饰，让数据本身成为绝对视觉焦点。', biz: '降低一线人员的认知负荷，加快数据获取速度。' },
              { id: '02', title: 'Make status visible', zh: '让状态可见', act: '色彩设计严格遵循工业规范，符合工厂心智（绿/蓝正常，红/橙异常）。', biz: '消除状态信息差，确保跨部门理解的一致性。' },
              { id: '03', title: 'Make exceptions actionable', zh: '让异常可处理', act: '不仅是展示异常红点，更提供下钻至具体设备或工序的链路。', biz: '缩短从“发现问题”到“采取行动”的响应时间。' },
              { id: '04', title: 'Make decisions faster', zh: '让决策更快', act: '模块化布局设计，按相关性和层级严格排布，建立清晰的阅读动线。', biz: '支撑管理层在极短时间内完成运营上下文的评估。' }
            ].map((p, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-[#151515] bg-white flex flex-col h-full">
                <div className="p-6 border-b border-[#151515]/10 flex items-center justify-between bg-[#FAFAF7]">
                  <div className="font-mono text-sm uppercase font-bold text-[#151515]">{p.title}</div>
                  <div className="font-mono text-xs text-[#5B5B54]">{p.zh}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div>
                    <div className="text-xs font-mono text-[#5B5B54] mb-1">Design Action</div>
                    <p className="text-sm text-[#151515] leading-relaxed">{p.act}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-[#151515]/10">
                    <div className="text-xs font-mono text-[#5B5B54] mb-1">Business Value</div>
                    <p className="text-sm font-medium text-[#151515]">{p.biz}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 08 Interaction Model / 交互模型 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20 bg-[#151515] text-[#F4F4EF]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="mb-12 border-b border-[#F4F4EF]/20 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF]/60 block mb-2">08 — Interaction Model</span>
            <h2 className="text-2xl md:text-3xl font-medium font-sans">系统行为模型</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-[#F4F4EF]/20">
            {[
              { title: 'Dynamic Metrics', zh: '动态指标映射' },
              { title: 'Production Sim.', zh: '生产线模拟' },
              { title: 'Drill-down', zh: '深层下钻分析' },
              { title: 'Personalized', zh: '个性化视图配置' },
              { title: 'Smart Alerts', zh: '智能告警分发' }
            ].map((col, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 border-b md:border-b-0 md:border-r border-[#F4F4EF]/20 last:border-0 hover:bg-[#F4F4EF]/5 transition-colors">
                <div className="font-mono text-xs text-[#B8E351] mb-2">CAP_{i+1}</div>
                <div className="font-mono text-sm uppercase font-bold mb-1">{col.title}</div>
                <div className="text-xs text-[#F4F4EF]/60">{col.zh}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 09 Outcome / 结果与评估 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="09" en="Outcome" zh="结果与业务影响" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={fadeInUp} className="border border-[#151515] p-6 bg-[#B8E351]/10">
                <div className="font-mono text-4xl md:text-5xl font-medium text-[#151515] mb-2">+43%</div>
                <div className="text-sm font-medium text-[#151515]">生产效率提升</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="border border-[#151515] p-6 bg-white">
                <div className="font-mono text-4xl md:text-5xl font-medium text-[#151515] mb-2">79%</div>
                <div className="text-sm font-medium text-[#151515]">满意度评分 ≥6 分</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="border border-[#151515] p-6 bg-white sm:col-span-2">
                <div className="font-mono text-4xl md:text-5xl font-medium text-[#151515] mb-2">31%</div>
                <div className="text-sm font-medium text-[#151515]">系统体验满分 (10分)</div>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="flex flex-col justify-center">
              <h3 className="font-mono text-sm uppercase text-[#151515] mb-4 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-[#151515] block" /> Business Value / 业务价值
              </h3>
              <p className="text-lg text-[#151515] leading-relaxed mb-6">
                系统投入运用后，数据更容易被看见、异常更容易被发现、管理层更容易做出判断、现场反馈链路更短。
              </p>
              <div className="border-l-2 border-[#151515]/20 pl-4 py-1">
                <p className="text-xs text-[#5B5B54] font-mono leading-relaxed">
                  * Attribution Boundary: 此处展示数据为项目投入运用后的客户整体业务反馈结果。数字化转型成果是软硬件、管理与设计共同作用的结果，优异的界面体验扮演了将底层数据能力成功转化为现场生产力的关键触点角色。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 10 Reflection / 设计复盘 */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-b border-[#151515]/20 bg-[#FAFAF7]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <SectionHeader id="10" en="Reflection" zh="专业复盘" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <div className="font-mono text-xs uppercase text-[#151515] mb-4 border-b border-[#151515]/10 pb-2">What I Proven / 核心产出证明</div>
              <p className="text-sm text-[#5B5B54] leading-relaxed">
                作为拥有十年经验的高级产品设计师，在这个项目中，我证明了能够将晦涩庞杂的底层数据逻辑，转化为符合严谨工业美学（Apple/Swiss 极简风格）且极具商业决策价值的业务界面。设计不再是表层的视觉包装，而是链接机器数据与人工决策的体验工程。
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="font-mono text-xs uppercase text-[#151515] mb-4 border-b border-[#151515]/10 pb-2">Future iterations / 下一步迭代方向</div>
              <p className="text-sm text-[#5B5B54] leading-relaxed">
                复盘当前方案，如果进行迭代，我将进一步深入挖掘 B2B 复杂系统的护城河特性：引入更细颗粒度的 RBAC（基于角色的权限访问控制）、强化异常信号的闭环追溯链路，并构建一套更具延展性的、适应未来如 PCBA 等高精尖 AI 工业视觉检测场景的底层设计系统（Design System）。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 11 Footer / 案例收尾 */}
      <footer className="py-12 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-xs text-[#5B5B54]">
          Factory Data Visualization Dashboard © {new Date().getFullYear()} Miki. All rights reserved.
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase">
          <a href="/" className="text-[#151515] hover:text-[#B8E351] transition-colors">Return to Index</a>
          <a href="/#contact" className="text-[#151515] hover:text-[#B8E351] transition-colors">Contact Me</a>
        </div>
      </footer>
      
    </main>
  );
}