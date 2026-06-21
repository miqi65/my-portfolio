'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HOME_V3 } from './tokens'

const stages = [
  { num: '01', title: '拆业务', en: 'Deconstruct', inputs: ['老板模糊目标', '客户现场场景描述', '现有技术与物理限制'], action: '将抽象愿景转化为具体的角色、任务与业务模型', outputs: ['业务流程地图', '角色任务链路', '约束与限制清单'] },
  { num: '02', title: '做判断', en: 'Decide', inputs: ['多角色的功能诉求冲突', 'AI算法的不确定性边界', '开发资源与周期约束'], action: '界定系统哪些必须自动化，哪些必须保留人工干预', outputs: ['功能优先级矩阵', '人机接管边界定义', 'MVP核心范围'] },
  { num: '03', title: '做原型', en: 'Prototype', inputs: ['筛选出的关键路径', '核心页面的状态流转', '信息架构草图'], action: '用交互原型取代口头讨论，前置验证产品体验可行性', outputs: ['可交互高保真 Demo', '异常状态分支', '验证体验证据'] },
  { num: '04', title: '控风险', en: 'Mitigate', inputs: ['即将进入研发的方案', '软硬件跨端协同场景', '历史脏数据结构'], action: '在写下第一行代码前，穷举体验与落地漏洞', outputs: ['安全风险自查清单', '权限与状态枚举', '开发验收标准'], isRisk: true },
]

export default function ProductValidationPathV3() {
  const [active, setActive] = useState(0)

  return (
    <section id="validation" className={`relative border-t border-[#1F211F] ${HOME_V3.layout.sectionY}`}>
      <div className={HOME_V3.layout.container}>
        <div className="mb-16">
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-4">01 / VALIDATION PATH</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-[#F2F5EF]">从模糊需求到可推进方案</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          {/* Left: Path Selector */}
          <div className="flex flex-col gap-4 relative">
            <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-[1px] bg-[#1F211F] -z-10" />
            {stages.map((s, i) => {
              const isActive = active === i
              return (
                <button key={s.num} onClick={() => setActive(i)} className={`flex items-center gap-6 p-4 rounded-[16px] transition-all text-left ${isActive ? 'bg-[#161816] border border-[#2A2C29] shadow-lg' : 'hover:bg-[#121212] border border-transparent'}`}>
                  <div className={`w-[24px] h-[24px] shrink-0 rounded-full flex items-center justify-center text-[10px] font-mono transition-colors ${isActive ? 'bg-[#B8E351] text-[#0A0A0A]' : 'bg-[#1F211F] text-[#A7AEA1]'}`}>{s.num}</div>
                  <div>
                    <h3 className={`text-[18px] font-bold transition-colors ${isActive ? 'text-[#F2F5EF]' : 'text-[#6F766B]'}`}>{s.title}</h3>
                    <p className="text-[11px] font-mono tracking-widest text-[#6F766B]">{s.en}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Detail Panel */}
          <div className="bg-[#121212] border border-[#2A2C29] rounded-[24px] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="h-full flex flex-col">
                
                <h3 className="text-[24px] font-bold text-[#F2F5EF] mb-8 pb-6 border-b border-[#1F211F]">
                  <span className="text-[#B8E351] mr-3">{stages[active].num}</span>
                  {stages[active].title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 mb-8">
                  <div>
                    <div className="inline-flex px-3 py-1 bg-[#1A1C1A] border border-[#2A2C29] rounded-full text-[10px] font-mono text-[#A7AEA1] uppercase tracking-widest mb-4">Input</div>
                    <ul className="space-y-3">
                      {stages[active].inputs.map(item => (
                        <li key={item} className="text-[14px] text-[#A7AEA1] flex gap-3"><span className="text-[#3A3C39]">—</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-4 border ${stages[active].isRisk ? 'bg-[#9B302B]/10 border-[#9B302B]/30 text-[#9B302B]' : 'bg-[#B8E351]/10 border-[#B8E351]/30 text-[#B8E351]'}`}>Output</div>
                    <ul className="space-y-3">
                      {stages[active].outputs.map(item => (
                        <li key={item} className="text-[14px] font-medium text-[#F2F5EF] flex gap-3">
                          <span className={stages[active].isRisk ? 'text-[#9B302B]' : 'text-[#B8E351]'}>›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto bg-[#161816] border border-[#1F211F] rounded-[12px] p-5">
                  <p className="text-[13px] text-[#A7AEA1]"><span className="font-mono text-[#6F766B] uppercase tracking-widest mr-3 text-[10px]">Action</span> {stages[active].action}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}