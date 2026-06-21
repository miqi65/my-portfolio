'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HOME_V3 } from './tokens'

const navItems = [
  { label: '首页', href: '#intro' },
  { label: '验证路径', href: '#validation' },
  { label: '核心案例', href: '#cases' },
  { label: '能力', href: '#problems' },
  { label: '档案库', href: '#more-work' },
  { label: '方法与关于', href: '#about' },
]

const consoleNodes = [
  { id: '01', title: 'Vague Requirement', sub: '模糊需求', status: 'done', output: '业务地图 / 目标对齐' },
  { id: '02', title: 'Business Constraint', sub: '业务与约束拆解', status: 'done', output: '角色链路 / 限制清单' },
  { id: '03', title: 'Human-AI Boundary', sub: '人机边界判断', status: 'active', output: '接管机制 / MVP范围' },
  { id: '04', title: 'Prototype Demo', sub: '可演示原型', status: 'pending', output: '交互模型 / 反馈证据' },
  { id: '05', title: 'Risk Checklist', sub: '开发前风险确认', status: 'danger', output: '数据安全 / 上线标准' },
]

function ValidationConsole() {
  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <div className="relative w-full h-[520px] rounded-[24px] border border-[#2A2C29] bg-[#121212] shadow-2xl flex flex-col overflow-hidden">
      {/* Console Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-[#1F211F] bg-[#161816]">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8E351] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8E351]"></span>
          </span>
          <span className="text-[10px] text-[#B8E351] font-mono tracking-widest uppercase">System: Live Prototype</span>
        </div>
        <span className="text-[10px] text-[#6F766B] font-mono tracking-widest uppercase">Decision Ready</span>
      </div>

      {/* Console Body */}
      <div className="flex-1 flex flex-col justify-center px-8 relative">
        <div className="absolute left-[47px] top-10 bottom-10 w-[1px] bg-[#1F211F] z-0" />
        
        <div className="flex flex-col gap-6 z-10">
          {consoleNodes.map((node, idx) => {
            const isActive = activeIndex === idx
            return (
              <div 
                key={node.id} 
                className="flex items-center gap-6 group cursor-pointer"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div className={`w-[32px] h-[32px] shrink-0 rounded-full border flex items-center justify-center text-[10px] font-mono transition-colors duration-300
                  ${isActive ? (node.status === 'danger' ? 'border-[#9B302B] bg-[#9B302B]/10 text-[#9B302B]' : 'border-[#B8E351] bg-[#B8E351]/10 text-[#B8E351]') 
                  : 'border-[#2A2C29] bg-[#0A0A0A] text-[#6F766B]'}`}>
                  {node.id}
                </div>
                <div className={`flex-1 flex justify-between items-center border-b pb-2 transition-colors duration-300 ${isActive ? 'border-[#3A3C39]' : 'border-[#1F211F]'}`}>
                  <div>
                    <h4 className={`text-[14px] font-bold tracking-wide transition-colors ${isActive ? 'text-[#F2F5EF]' : 'text-[#6F766B]'}`}>{node.title}</h4>
                    <p className={`text-[12px] transition-colors ${isActive ? 'text-[#A7AEA1]' : 'text-[#4F544B]'}`}>{node.sub}</p>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        className="hidden sm:block text-[11px] font-mono text-[#B8E351] bg-[#B8E351]/10 px-3 py-1 rounded-full border border-[#B8E351]/20"
                      >
                        {node.output}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function HeroV3() {
  return (
    <section id="intro" data-section-id="intro" className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center">
      <header className="absolute top-0 w-full z-30 border-b border-[#1F211F] bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className={`${HOME_V3.layout.container} flex h-16 items-center justify-between`}>
          <a href="#intro" className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#B8E351] shadow-[0_0_12px_rgba(184,227,81,0.4)] rounded-[2px]" />
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#F2F5EF]">MIKI.DESIGN</p>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} data-miki-nav-href={item.href}
                 className="text-[11px] font-mono tracking-widest text-[#A7AEA1] hover:text-[#B8E351] transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className={`${HOME_V3.layout.container} relative z-10 pt-32 pb-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: HOME_V3.motion.section }}>
            <div className="inline-flex items-center gap-2 border border-[#1F211F] bg-[#121212] px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[#B8E351] rounded-full" />
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#A7AEA1]">Senior Product Designer</span>
            </div>
            
            <h1 className="text-[clamp(40px,5vw,72px)] font-black leading-[1.05] tracking-tight text-[#F2F5EF] mb-6">
              将复杂需求推进为<br/>
              <span className="text-[#B8E351]">清晰可验的产品方案</span>
            </h1>
            
            <p className="text-[18px] sm:text-[20px] font-medium text-[#F2F5EF] flex items-center gap-3 mb-6">
              B端复杂系统 <span className="text-[#3A3C39]">/</span> 工业AI <span className="text-[#3A3C39]">/</span> 智能硬件 <span className="text-[#3A3C39]">/</span> HMI
            </p>
            
            <p className="text-[15px] leading-relaxed text-[#A7AEA1] max-w-[560px] mb-10">
              我不只是画界面。我擅长把模糊的业务诉求，转化为严谨的任务流程、可演示交互原型、人机协作边界与开发前风险清单，帮助团队减少沟通内耗与研发返工。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cases" className="group flex items-center justify-center h-[52px] px-8 bg-[#B8E351] text-[#0A0A0A] font-bold text-[14px] rounded-[12px] hover:bg-[#cbf765] transition-all">
                查看核心案例
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/杨蜜萁_高级UI_UX设计师.pdf" target="_blank" className="flex items-center justify-center h-[52px] px-8 border border-[#2A2C29] text-[#F2F5EF] font-bold text-[14px] rounded-[12px] hover:bg-[#1A1A1A] hover:border-[#A7AEA1] transition-all">
                下载简历 PDF
              </a>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <ValidationConsole />
          </motion.div>
        </div>
      </div>
    </section>
  )
}