'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HOME_V3 } from './tokens'

const works = [
  { id: '01', name: 'WMS 仓储系统', type: 'WAREHOUSE SYSTEM', tags: 'WMS', href: '/Project_P2/index.html', img: '/Project_P2/images/P2_01_hero_mockup.png' },
  { id: '02', name: '友讯达数据大屏', type: 'DATA VISUALIZATION', tags: 'Data Viz', href: '/友讯达/project/友讯达大屏/index.html', img: '/友讯达/project/友讯达大屏/友讯达封面图.jpg' },
  { id: '03', name: '轨迹定位系统', type: 'TRACKING PLATFORM', tags: 'Geo Tracking', href: '/国家能源/project/Portfolio.html', img: '/国家能源/project/assets/bg-cover.png' },
  { id: '04', name: 'Chatbot 设计规范', type: 'INTERACTION STANDARD', tags: 'AI Guide', href: '/Project_P4/index.html', img: '/images/p4-cover.png' },
]

export default function MoreWorkV3() {
  const [hoveredIdx, setHoveredIdx] = useState(0)

  return (
    <section id="more-work" className={`relative border-t border-[#1F211F] bg-[#050505] ${HOME_V3.layout.sectionY}`}>
      <div className={HOME_V3.layout.container}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
          
          <div>
            <div className="mb-12">
              <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-4">04 / PROJECT INDEX</p>
              <h2 className="text-[clamp(32px,4vw,48px)] font-black text-[#F2F5EF]">更多项目档案</h2>
            </div>
            
            <div className="border-t border-[#1F211F]">
              {works.map((w, i) => (
                <a key={w.id} href={w.href} onMouseEnter={() => setHoveredIdx(i)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[#1F211F] hover:bg-[#121212] transition-colors -mx-4 px-4 rounded-lg"
                >
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <span className="text-[12px] font-mono text-[#6F766B]">{w.id}</span>
                    <div>
                      <h4 className="text-[18px] sm:text-[20px] font-bold text-[#F2F5EF] group-hover:text-[#B8E351] transition-colors">{w.name}</h4>
                      <p className="text-[10px] font-mono tracking-widest text-[#6F766B] mt-1">{w.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="px-3 py-1 border border-[#2A2C29] bg-[#161816] rounded-full text-[11px] text-[#A7AEA1]">{w.tags}</span>
                    <svg className="w-5 h-5 text-[#6F766B] group-hover:text-[#B8E351] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[#2A2C29] bg-[#121212] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={hoveredIdx} 
                src={works[hoveredIdx].img} 
                initial={{ opacity: 0, scale: 1.05 }} 
                animate={{ opacity: 0.8, scale: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
            <div className="absolute inset-0 border-[4px] border-[#121212]/50 pointer-events-none rounded-[24px]" />
          </div>

        </div>
      </div>
    </section>
  )
}