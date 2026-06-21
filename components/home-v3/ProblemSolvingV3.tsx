'use client'

import { motion } from 'framer-motion'
import { HOME_V3 } from './tokens'

const problems = [
  { num: '01', title: '模糊需求 → 清晰方案', output: '业务地图 / 链路清单', action: '把抽象想法拆成角色、流程、任务和边界。', icon: <path d="M3 12C5 4 19 4 21 12M3 12C5 20 19 20 21 12" strokeWidth="1.5" strokeLinecap="round"/> },
  { num: '02', title: '旧流程 → 协作流程', output: '状态规则 / 权限定义', action: '识别关键节点，明确自动化与人的协作边界。', icon: <path d="M4 8h16M4 16h16M9 4v16" strokeWidth="1.5" strokeLinecap="round"/> },
  { num: '03', title: '静态 UI → 演示 Demo', output: '高保真原型 / 场景脚本', action: '用交互原型前置验证，避免开发后频繁报错。', icon: <><rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5"/><path d="M8 10l3 3-3 3" strokeWidth="1.5" strokeLinecap="round"/></> },
  { num: '04', title: '开发前 → 风险清单', output: '风险清单 / 验收标准', action: '提前暴露数据、算法、硬件和上线的不确定性。', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round"/></> },
]

export default function ProblemSolvingV3() {
  return (
    <section id="problems" className={`relative border-t border-[#1F211F] ${HOME_V3.layout.sectionY}`}>
      <div className={HOME_V3.layout.container}>
        <div className="mb-16 text-center max-w-[600px] mx-auto">
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-4">03 / CAPABILITIES</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-[#F2F5EF]">我解决什么业务问题</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group bg-[#121212] border border-[#2A2C29] rounded-[20px] p-8 hover:border-[#B8E351]/50 hover:bg-[#161816] transition-all"
            >
              <div className="w-12 h-12 mb-8 rounded-full bg-[#1A1C1A] border border-[#2A2C29] flex items-center justify-center text-[#A7AEA1] group-hover:text-[#B8E351] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">{p.icon}</svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#F2F5EF] mb-2">{p.title}</h3>
              <p className="text-[13px] text-[#A7AEA1] mb-8">{p.action}</p>
              
              <div className="mt-auto pt-4 border-t border-[#1F211F] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#6F766B] uppercase tracking-widest">Deliverable</span>
                <span className="text-[11px] font-medium text-[#F2F5EF] px-2 py-1 bg-[#1A1C1A] rounded">{p.output}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
