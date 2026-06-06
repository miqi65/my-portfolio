'use client'

import type { ReactNode } from 'react'

const SECTION_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

const svgPaths = {
  personHead:
    'M6 6.2C7.21503 6.2 8.2 5.21503 8.2 4C8.2 2.78497 7.21503 1.8 6 1.8C4.78497 1.8 3.8 2.78497 3.8 4C3.8 5.21503 4.78497 6.2 6 6.2Z',
  personBody: 'M2 11C2 8.8 3.8 7 6 7C8.2 7 10 8.8 10 11',
  aiBox:
    'M9 3H3C2.17157 3 1.5 3.67157 1.5 4.5V8.5C1.5 9.32843 2.17157 10 3 10H9C9.82843 10 10.5 9.32843 10.5 8.5V4.5C10.5 3.67157 9.82843 3 9 3Z',
  aiDotA:
    'M4 7.3C4.44183 7.3 4.8 6.94183 4.8 6.5C4.8 6.05817 4.44183 5.7 4 5.7C3.55817 5.7 3.2 6.05817 3.2 6.5C3.2 6.94183 3.55817 7.3 4 7.3Z',
  aiDotB:
    'M6 7.3C6.44183 7.3 6.8 6.94183 6.8 6.5C6.8 6.05817 6.44183 5.7 6 5.7C5.55817 5.7 5.2 6.05817 5.2 6.5C5.2 6.94183 5.55817 7.3 6 7.3Z',
  aiDotC:
    'M8 7.3C8.44183 7.3 8.8 6.94183 8.8 6.5C8.8 6.05817 8.44183 5.7 8 5.7C7.55817 5.7 7.2 6.05817 7.2 6.5C7.2 6.94183 7.55817 7.3 8 7.3Z',
  aiAntenna:
    'M4.5 3V2C4.5 1.60218 4.65804 1.22064 4.93934 0.93934C5.22064 0.658035 5.60218 0.5 6 0.5C6.39782 0.5 6.77936 0.658035 7.06066 0.93934C7.34196 1.22064 7.5 1.60218 7.5 2V3',
  humanHead:
    'M6 6C7.10457 6 8 5.10457 8 4C8 2.89543 7.10457 2 6 2C4.89543 2 4 2.89543 4 4C4 5.10457 4.89543 6 6 6Z',
  humanBody: 'M2 11C2 9.3 3.8 8 6 8C8.2 8 10 9.3 10 11',
  targetOuter:
    'M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z',
  targetInner:
    'M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z',
}

function ArrowRight() {
  return (
    <svg className="size-5 shrink-0" fill="none" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 10H16M12 14L16 10L12 6"
        stroke="#747B70"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
    </svg>
  )
}

function PersonSvg({ color = '#747B70' }: { color?: string }) {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 12 12" aria-hidden="true">
      <path d={svgPaths.personHead} stroke={color} />
      <path d={svgPaths.personBody} stroke={color} strokeLinecap="round" />
    </svg>
  )
}

function RolePill({ name }: { name: string }) {
  return (
    <div className="relative w-full rounded-[8px] bg-[rgba(255,255,255,0.04)]">
      <div className="pointer-events-none absolute inset-0 rounded-[8px] border border-[rgba(242,245,239,0.16)]" />
      <div className="flex min-h-8 items-center gap-2 px-2 py-2">
        <PersonSvg />
        <span className="whitespace-nowrap text-[12px] font-normal leading-4 text-[#a8aea5]">{name}</span>
      </div>
    </div>
  )
}

function FlowTag({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`relative shrink-0 rounded-[8px] ${
        active ? 'bg-[rgba(142,234,28,0.14)]' : 'bg-[rgba(255,255,255,0.04)]'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[8px] border ${
          active ? 'border-[rgba(142,234,28,0.4)]' : 'border-[rgba(242,245,239,0.16)]'
        }`}
      />
      <div className="flex min-h-8 items-center gap-2 px-3 py-2">
        <div className={`size-2 shrink-0 rounded-full ${active ? 'bg-[#8eea1c]' : 'bg-[#747b70]'}`} />
        <span
          className={`whitespace-nowrap text-[12px] leading-4 ${
            active ? 'font-bold text-[#8eea1c]' : 'font-normal text-[#a8aea5]'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[rgba(242,245,239,0.16)]" />
}

function MetaFooter({ output, caseRef }: { output: string; caseRef: string }) {
  return (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
      <div className="min-w-0">
        <span className="block text-[12px] font-normal uppercase leading-4 tracking-wider text-[#747b70]">
          输出物
        </span>
        <span className="block truncate pt-1 text-[12px] font-medium leading-4 text-[#a8aea5]">{output}</span>
      </div>
      <div className="min-w-0 border-l border-[rgba(242,245,239,0.16)] pl-4">
        <span className="block text-[12px] font-normal uppercase leading-4 tracking-wider text-[#747b70]">
          对应案例
        </span>
        <span className="block truncate pt-1 text-[12px] font-bold leading-4 text-[#8eea1c]">{caseRef}</span>
      </div>
    </div>
  )
}

function RoleTaskDiagram() {
  const roles = ['管理员', '工程师', '采购', '生产主管']
  const stages = [
    { label: '需求提出', active: true },
    { label: '需求评审' },
    { label: '方案确定' },
    { label: '执行落地' },
    { label: '效果验证' },
  ]

  return (
    <div className="flex h-52 w-full shrink-0 gap-4">
      <div className="flex h-full w-24 shrink-0 flex-col items-start justify-center gap-2">
        {roles.map((role) => (
          <RolePill key={role} name={role} />
        ))}
      </div>

      <div className="relative h-full w-2 shrink-0">
        <div className="absolute bottom-0 left-1 top-0 w-px bg-[rgba(242,245,239,0.16)]" />
        {[25, 50, 75].map((pct) => (
          <div
            key={pct}
            className="absolute size-2 rounded-full bg-[#747b70]"
            style={{ top: `${pct}%`, transform: 'translateY(-50%)' }}
          />
        ))}
      </div>

      <div className="flex h-full min-w-0 flex-1 flex-col items-start justify-between">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex w-full flex-col items-start">
            <FlowTag label={stage.label} active={stage.active} />
            {index < stages.length - 1 && (
              <div className="pl-4">
                <div className="h-2 w-px bg-[rgba(242,245,239,0.16)]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AiIcon({ size = 12, color = '#8EEA1C' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 12 12" aria-hidden="true">
      <path d={svgPaths.aiBox} stroke={color} />
      <path d={svgPaths.aiDotA} fill={color} />
      <path d={svgPaths.aiDotB} fill={color} />
      <path d={svgPaths.aiDotC} fill={color} />
      <path d={svgPaths.aiAntenna} stroke={color} />
    </svg>
  )
}

function HumanIcon({ size = 12, color = '#F5B84B' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 12 12" aria-hidden="true">
      <path d={svgPaths.humanHead} stroke={color} />
      <path d={svgPaths.humanBody} stroke={color} strokeLinecap="round" />
    </svg>
  )
}

function StepArrow() {
  return (
    <div className="flex h-7 w-3 shrink-0 items-center justify-center" aria-hidden="true">
      <svg fill="none" viewBox="0 0 10 6" width="10" height="6">
        <path d="M0 3H8M5.5 5L8 3L5.5 1" stroke="#F2F5EF" strokeLinecap="round" strokeOpacity="0.2" />
      </svg>
    </div>
  )
}

function AiHumanFlow() {
  const steps = [
    { label: '数据收集', kind: 'ai' as const, badge: 'AI辅助' },
    { label: '初步分析', kind: 'ai' as const, badge: 'AI辅助' },
    { label: '人工复核', kind: 'human' as const, badge: '人工确认' },
    { label: '决策同步', kind: 'human' as const, badge: '人工确认' },
    { label: '执行行动', kind: 'ai' as const, badge: 'AI辅助' },
    { label: '结果验证', kind: 'ai' as const, badge: 'AI辅助' },
  ]
  const roles = [
    { label: '系统/AI', kind: 'ai' as const },
    { label: '系统/AI', kind: 'ai' as const },
    { label: '业务人员', kind: 'human' as const },
    { label: '业务负责人', kind: 'human' as const },
    { label: '系统/AI', kind: 'ai' as const },
    { label: '系统/AI', kind: 'ai' as const },
  ]

  return (
    <div className="flex w-full flex-col gap-0 overflow-hidden">
      <p className="mb-2 text-[12px] font-normal leading-4 tracking-normal text-[#747b70]">AI / 人工边界流程图</p>
      <div className="flex w-full items-start">
        {steps.map((step, index) => {
          const isAi = step.kind === 'ai'

          return (
            <div key={step.label} className="flex min-w-0 flex-1 items-start">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
                <div
                  className="relative size-8 shrink-0 rounded-[8px]"
                  style={{ backgroundColor: isAi ? 'rgba(142,234,28,0.14)' : 'rgba(245,184,75,0.1)' }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[8px] border"
                    style={{ borderColor: isAi ? 'rgba(142,234,28,0.3)' : 'rgba(245,184,75,0.3)' }}
                  />
                  <div className="flex size-full items-center justify-center p-px">
                    {isAi ? <AiIcon /> : <HumanIcon />}
                  </div>
                </div>
                <p className="w-full text-center text-[11px] font-normal leading-4 text-[#a8aea5]">{step.label}</p>
                <div
                  className="flex h-4 shrink-0 items-center rounded-[4px] px-1"
                  style={{
                    width: isAi ? '32px' : '40px',
                    backgroundColor: isAi ? 'rgba(142,234,28,0.14)' : 'rgba(245,184,75,0.1)',
                  }}
                >
                  <p className="text-[8px] font-bold leading-3" style={{ color: isAi ? '#8eea1c' : '#f5b84b' }}>
                    {step.badge}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && <StepArrow />}
            </div>
          )
        })}
      </div>

      <div className="mb-2 mt-3 flex items-center gap-2">
        <div className="h-px flex-1 bg-[rgba(242,245,239,0.16)]" />
        <span className="shrink-0 text-[8px] font-normal leading-3 text-[#747b70]">责任主体</span>
        <div className="h-px flex-1 bg-[rgba(242,245,239,0.16)]" />
      </div>

      <div className="flex w-full items-start">
        {roles.map((role, index) => {
          const isAi = role.kind === 'ai'

          return (
            <div key={`${role.label}-${index}`} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <div
                className="relative size-8 shrink-0 rounded-[8px]"
                style={{ backgroundColor: isAi ? 'rgba(255,255,255,0.06)' : 'rgba(245,184,75,0.1)' }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[8px] border"
                  style={{ borderColor: isAi ? 'rgba(242,245,239,0.16)' : 'rgba(245,184,75,0.25)' }}
                />
                <div className="flex size-full items-center justify-center">
                  {isAi ? <AiIcon size={14} color="#747B70" /> : <HumanIcon size={14} color="#F5B84B" />}
                </div>
              </div>
              <p
                className="w-full truncate text-center text-[9px] font-normal leading-3"
                style={{ color: isAi ? '#747b70' : '#f5b84b' }}
              >
                {role.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PrototypeValidation() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="relative mt-3 w-full rounded-[8px] bg-[rgba(255,255,255,0.04)]">
        <div className="pointer-events-none absolute inset-0 rounded-[8px] border border-[rgba(242,245,239,0.16)]" />
        <div className="absolute -top-3 left-2 bg-[#030503] px-1">
          <span className="text-[11px] font-normal leading-4 tracking-normal text-[#747b70]">线框稿（低保真）</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex items-center gap-1">
            <div className="flex shrink-0 items-center gap-1">
              {[0, 1, 2].map((dot) => (
                <div key={dot} className="size-1 rounded-full bg-[rgba(242,245,239,0.2)]" />
              ))}
            </div>
            <div className="h-2 flex-1 rounded-[4px] bg-[rgba(255,255,255,0.06)]" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-5 rounded-[4px] border border-[rgba(242,245,239,0.12)] bg-[rgba(255,255,255,0.05)]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center" aria-hidden="true">
        <div className="h-3 w-px bg-[#8eea1c]" />
        <svg fill="none" viewBox="0 0 10 7" width="10" height="7">
          <path d="M0 0L5 6.5L10 0" fill="#8EEA1C" />
        </svg>
      </div>

      <div className="relative mt-3 w-full rounded-[8px] bg-[rgba(142,234,28,0.1)]">
        <div className="pointer-events-none absolute inset-0 rounded-[8px] border border-[rgba(142,234,28,0.28)]" />
        <div className="absolute -top-3 left-2 bg-[#030503] px-1">
          <span className="text-[11px] font-normal leading-4 tracking-normal text-[#8eea1c]">
            可交互原型（中保真）
          </span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex items-center gap-1 border-b border-[rgba(142,234,28,0.2)] pb-1">
            <div className="h-2 w-5 rounded-[4px] bg-[rgba(142,234,28,0.35)]" />
            {[1, 2, 3].map((key) => (
              <div key={key} className="h-2 w-4 rounded-[4px] bg-[rgba(255,255,255,0.06)]" />
            ))}
          </div>
          <div className="flex gap-1">
            <div className="flex w-5 shrink-0 flex-col gap-1">
              <div className="h-2 w-full rounded-[4px] bg-[rgba(142,234,28,0.25)]" />
              {[1, 2, 3].map((key) => (
                <div key={key} className="h-2 w-full rounded-[4px] bg-[rgba(255,255,255,0.06)]" />
              ))}
            </div>
            <div className="grid flex-1 grid-cols-2 gap-1">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="h-5 rounded-[4px] border bg-[rgba(255,255,255,0.06)]"
                  style={{ borderColor: index === 0 ? 'rgba(142,234,28,0.4)' : 'rgba(242,245,239,0.1)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
        {['点击路径', '任务流程', '数据反馈', '异常处理'].map((label) => (
          <div key={label} className="flex items-center gap-1">
            <div className="relative size-2 rounded-[4px] border border-[rgba(142,234,28,0.4)] bg-[rgba(142,234,28,0.15)]">
              <div className="absolute inset-0 rounded-[4px] bg-[#8eea1c]" />
            </div>
            <span className="whitespace-nowrap text-[11px] font-normal leading-4 text-[#a8aea5]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RiskMatrix() {
  const rows = [
    { risk: '权限', impact: '高', impactC: '#d84a4a', prob: '中', status: '已识别', statusC: '#8eea1c', strategy: '最小权限设计 + 操作日志' },
    { risk: '数据', impact: '高', impactC: '#d84a4a', prob: '中', status: '已识别', statusC: '#8eea1c', strategy: '校验规则 + 数据脱敏', alt: true },
    { risk: '算法', impact: '中', impactC: '#f5b84b', prob: '中', status: '评估中', statusC: '#f5b84b', strategy: 'A/B测试 + 人工复核' },
    { risk: '硬件', impact: '中', impactC: '#f5b84b', prob: '低', status: '监控中', statusC: '#3d8bff', strategy: '接口校验 + 性能预警', alt: true },
    { risk: '上线', impact: '高', impactC: '#d84a4a', prob: '中', status: '已识别', statusC: '#8eea1c', strategy: '灰度发布 + 监控告警' },
  ]

  return (
    <div className="relative h-52 w-full overflow-hidden rounded-[8px] border border-[rgba(242,245,239,0.16)]">
      <div className="grid h-8 grid-cols-[40px_32px_40px_48px_minmax(0,1fr)] items-center border-b border-[rgba(242,245,239,0.16)] bg-[rgba(255,255,255,0.04)] px-2 text-[11px] font-bold leading-4 tracking-normal text-[#747b70]">
        <span>风险</span>
        <span>影响</span>
        <span>可能性</span>
        <span>状态</span>
        <span>应对策略</span>
      </div>
      {rows.map((row, index) => (
        <div
          key={row.risk}
          className="grid h-8 grid-cols-[40px_32px_40px_48px_minmax(0,1fr)] items-center border-b border-[rgba(242,245,239,0.16)] px-2 text-[11px] leading-4 last:border-b-0"
          style={{ backgroundColor: row.alt ? 'rgba(255,255,255,0.02)' : 'transparent' }}
        >
          <span className="text-[#a8aea5]">{row.risk}</span>
          <span className="font-bold" style={{ color: row.impactC }}>
            {row.impact}
          </span>
          <span className="font-semibold text-[#f5b84b]">{row.prob}</span>
          <span className="font-bold" style={{ color: row.statusC }}>
            {row.status}
          </span>
          <span className="truncate text-[11px] leading-4 text-[#747b70]">{row.strategy}</span>
        </div>
      ))}
    </div>
  )
}

function CardShell({
  number,
  title,
  description,
  output,
  caseRef,
  children,
}: {
  number: string
  title: string
  description: string
  output: string
  caseRef: string
  children: ReactNode
}) {
  return (
    <article className="group relative min-w-0 rounded-[12px] bg-[rgba(7,9,7,0.82)] transition duration-200 hover:-translate-y-1 hover:bg-[rgba(9,13,8,0.92)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="pointer-events-none absolute inset-0 rounded-[12px] border border-[rgba(242,245,239,0.16)] transition duration-200 group-hover:border-[rgba(142,234,28,0.32)]" />
      <div className="flex min-h-[512px] flex-col items-start gap-4 p-5 sm:p-6">
        <div className="flex w-full items-center justify-between">
          <span className="text-[36px] font-medium leading-9 text-[#8eea1c]">{number}</span>
          <ArrowRight />
        </div>
        <h3 className="w-full text-[16px] font-bold leading-6 text-[#f2f5ef]">{title}</h3>
        <p className="min-h-12 text-[13px] font-normal leading-5 text-[#a8aea5] sm:text-[14px] sm:leading-6 lg:min-h-6 lg:whitespace-nowrap min-[1680px]:min-h-24 min-[1680px]:whitespace-normal">
          {description}
        </p>
        <Divider />
        <div className="flex h-52 w-full shrink-0 flex-col">{children}</div>
        <Divider />
        <MetaFooter output={output} caseRef={caseRef} />
      </div>
    </article>
  )
}

function SectionHeader() {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex items-center gap-2">
        <span className="text-[12px] font-bold leading-4 tracking-widest text-[#8eea1c]">03</span>
        <span className="text-[12px] font-normal uppercase leading-4 tracking-widest text-[#747b70]">
          / Problem Solving
        </span>
      </div>
      <h2 className="pt-4 text-[40px] font-black leading-[48px] tracking-normal text-[#f2f5ef] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
        我<span className="text-[#8eea1c]">解决</span>什么问题
      </h2>
      <p className="mt-2 max-w-[760px] text-[14px] font-normal leading-6 text-[#a8aea5] sm:text-[16px] sm:leading-7">
        从模糊需求到清晰方案，从旧流程到更可控的协作流程，从静态界面到可验证原型，从开发前到风险识别。
      </p>
    </div>
  )
}

function BottomBanner() {
  return (
    <div className="relative w-full rounded-[12px] bg-[rgba(7,9,7,0.82)]">
      <div className="pointer-events-none absolute inset-0 rounded-[12px] border border-[rgba(242,245,239,0.16)]" />
      <div className="flex flex-col gap-6 px-5 py-5 md:flex-row md:items-center md:px-7 md:py-5">
        <div className="flex shrink-0 items-center gap-3">
          <div className="relative size-8 shrink-0 rounded-[8px] bg-[rgba(142,234,28,0.14)]">
            <div className="pointer-events-none absolute inset-0 rounded-[8px] border border-[rgba(142,234,28,0.3)]" />
            <div className="flex size-full items-center justify-center">
              <svg className="size-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <path d={svgPaths.targetOuter} stroke="#8EEA1C" strokeWidth="1.2" />
                <path d={svgPaths.targetInner} stroke="#8EEA1C" strokeWidth="1.2" />
                <path d="M8 1.5V3.5" stroke="#8EEA1C" strokeLinecap="round" strokeWidth="1.2" />
                <path d="M8 12.5V14.5" stroke="#8EEA1C" strokeLinecap="round" strokeWidth="1.2" />
                <path d="M1.5 8H3.5" stroke="#8EEA1C" strokeLinecap="round" strokeWidth="1.2" />
                <path d="M12.5 8H14.5" stroke="#8EEA1C" strokeLinecap="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-[14px] font-bold leading-5 text-[#f2f5ef]">方法驱动结果</span>
            <span className="text-[12px] font-normal leading-4 text-[#747b70]">系统化思考 x 结构化输出 x 可验证落地</span>
          </div>
        </div>

        <div className="hidden h-px flex-1 bg-[rgba(242,245,239,0.16)] md:block" />

        <a
          href="/Project_P1/index.html"
          className="relative inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full px-5 py-3 text-[14px] font-bold leading-5 text-[#f2f5ef] transition duration-200 hover:text-[#8eea1c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8eea1c] md:self-auto"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full border border-[rgba(242,245,239,0.16)]" />
          探索完整项目案例
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </div>
  )
}

export default function CoreCasesSection() {
  return (
    <section
      id="problems"
      data-section-id="problems"
      className="relative scroll-mt-16 overflow-hidden border-b border-[rgba(242,245,239,0.12)] bg-[#030503] py-16 text-[#f2f5ef] sm:py-20 lg:scroll-mt-0 lg:py-[72px]"
    >
      <div className={`relative ${SECTION_CONTAINER}`}>
        <div className="flex w-full flex-col items-start">
          <SectionHeader />

          <div className="grid w-full grid-cols-1 items-stretch gap-6 pt-8 md:grid-cols-2 min-[1680px]:grid-cols-4">
            <CardShell
              number="01"
              title="模糊需求 -> 清晰方案"
              description="把老板和客户的抽象想法拆成角色、流程、任务和边界，让团队先知道要解决什么。"
              output="角色任务图 / 流程图"
              caseRef="P1 / PCB"
            >
              <RoleTaskDiagram />
            </CardShell>
            <CardShell
              number="02"
              title="旧流程 -> 更清晰的协作流程"
              description="识别每步骤并结合自动化辅助，明确协作边界与交付标准，让流程更稳定、责任更清晰。"
              output="AI / 人工边界图"
              caseRef="P1 / P3"
            >
              <AiHumanFlow />
            </CardShell>
            <CardShell
              number="03"
              title="静态 UI -> 可验证原型"
              description="用原型帮助团队提前识别方案是否值得推进，而不是等开发后才发现问题。"
              output="交互原型 / 点击路径"
              caseRef="P1 / PCB"
            >
              <PrototypeValidation />
            </CardShell>
            <CardShell
              number="04"
              title="开发前 -> 风险清单"
              description="提前暴露权限、数据、算法、硬件和上线风险，减少后期返工。"
              output="风险清单 / 边界说明"
              caseRef="P1 / PCB / P3"
            >
              <RiskMatrix />
            </CardShell>
          </div>

          <div className="w-full pt-10">
            <BottomBanner />
          </div>
        </div>
      </div>
    </section>
  )
}
