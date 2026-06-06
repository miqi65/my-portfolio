'use client'

type CaseMeta = {
  label: string
  value: string
}

type CaseItem = {
  num: '01' | '02' | '03'
  metaLabel: string
  name: string
  description: string
  businessProblem: string
  role: string
  output: string
  tags: string[]
  href: string
  previewMain: string
  previewAlt: string
  previewPosition?: 'object-center' | 'object-top'
  info: [CaseMeta, CaseMeta, CaseMeta]
}

const SECTION_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

const cases: CaseItem[] = [
  {
    num: '01',
    metaLabel: '01 / AI HMI',
    name: '工业 AI 视觉质检系统',
    description:
      '把工程师工具界面重构为工厂现场可用的 AI 操作系统，让检测结果可理解、可接管、可追溯。',
    businessProblem: 'AI 检测结果难解释、异常接管链路不清晰，现场操作需要更强的可控性。',
    role: '需求拆解 / HMI 信息架构 / 关键流程原型 / 交互规范',
    output: '核心流程、角色权限、异常处理、可验证原型',
    tags: ['工业视觉', '角色权限', '异常接管', '工控容错'],
    href: '/Project_P1/index.html',
    previewMain: '/Project_P1/images/p1-cover-hero.jpg',
    previewAlt: '工业 AI 视觉质检系统封面图',
    previewPosition: 'object-center',
    info: [
      { label: '客户行业', value: '智能制造' },
      { label: '项目周期', value: '3.5 个月' },
      { label: '我的角色', value: 'UI/UX' },
    ],
  },
  {
    num: '02',
    metaLabel: '02 / MES',
    name: 'PCB 制造执行系统',
    description:
      '把老旧生产系统重构为可监控、可协同、可追踪的制造执行平台，提升生产过程透明度与协作效率。',
    businessProblem: '订单、工序和异常分散在旧系统里，管理者很难快速判断生产状态。',
    role: '复杂流程梳理 / 订单追踪体验 / 数据看板 / 权限协作',
    output: '制造执行平台、订单链路、异常监控、交付规范',
    tags: ['制造执行', '复杂流程', '订单追踪', '角色权限'],
    href: '/pcb/portfolio-PCB-2026.html',
    previewMain: '/images/pcb2026/108-screen.png',
    previewAlt: 'PCB 制造执行系统封面图',
    previewPosition: 'object-top',
    info: [
      { label: '客户行业', value: '制造执行' },
      { label: '项目周期', value: '2-3 个月' },
      { label: '我的角色', value: 'UI/UX' },
    ],
  },
  {
    num: '03',
    metaLabel: '03 / AI Workflow',
    name: 'AI 时代设计交付链路重构',
    description:
      '把设计规则、组件规范和原型验证转化为 Agent 可读取的交付系统，减少标注、解释和样式返工。',
    businessProblem: 'AI 参与设计到开发后，交付信息需要更结构化，才能减少理解偏差。',
    role: '设计系统规则 / Agent 交付规范 / 原型验证 / 风险识别',
    output: '设计规则、组件语义、交互原型、协作说明',
    tags: ['Design System', 'Figma MCP', 'Cursor'],
    href: '/Project_P3/index.html',
    previewMain: '/Project_P3/images/p3image-3.png',
    previewAlt: 'AI 设计交付链路重构封面图',
    previewPosition: 'object-top',
    info: [
      { label: '应用场景', value: '设计交付' },
      { label: '项目周期', value: '持续迭代' },
      { label: '我的角色', value: 'UI/UX' },
    ],
  },
]

function CasePreview({ item }: { item: CaseItem }) {
  return (
    <div className="h-full overflow-hidden rounded-[8px] bg-[#F4F4EF]">
      <img
        src={item.previewMain}
        alt={item.previewAlt}
        className={`h-full w-full object-cover ${item.previewPosition ?? 'object-center'} transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        loading="lazy"
      />
    </div>
  )
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex min-h-8 items-center rounded-[8px] border border-[rgba(16,24,40,0.08)] bg-[#F8F7F3] px-3 text-[12px] leading-4 text-[rgba(15,23,42,0.58)]"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function MetaGrid({ info }: { info: CaseItem['info'] }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-t border-[rgba(16,24,40,0.08)] pt-4">
      {info.map((entry) => (
        <div key={entry.label} className="min-w-0">
          <p className="text-[12px] leading-4 text-[rgba(15,23,42,0.42)]">{entry.label}</p>
          <p className="mt-1 truncate text-[13px] font-medium leading-5 text-[#101318]">{entry.value}</p>
        </div>
      ))}
    </div>
  )
}

function CaseCard({ item }: { item: CaseItem }) {
  const [metaNum, metaName = ''] = item.metaLabel.split('/').map((text) => text.trim())

  return (
    <article className="group flex min-h-[440px] min-w-0 flex-col overflow-hidden rounded-[8px] border border-[rgba(16,24,40,0.08)] bg-white p-4 shadow-[0_16px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(117,171,42,0.4)] hover:shadow-[0_24px_64px_rgba(15,23,42,0.10)] focus-within:border-[rgba(117,171,42,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6">
      <div className="flex items-center gap-4">
        <p className="text-[12px] font-semibold uppercase leading-4 text-[rgba(15,23,42,0.48)]">
          <span className="text-[#7FB12B]">{metaNum}</span>
          <span> / {metaName}</span>
        </p>
      </div>

      <div className="mt-3 h-[164px] shrink-0 sm:h-[184px] lg:h-[208px] xl:h-[196px]">
        <CasePreview item={item} />
      </div>

      <h3 className="mt-9 min-h-8 text-[20px] font-semibold leading-6 text-[#101318] sm:text-[24px] sm:leading-7">
        {item.name}
      </h3>
      <p className="mt-3 min-h-12 text-[12px] leading-5 text-[rgba(15,23,42,0.6)] sm:text-[14px] sm:leading-6">
        {item.description}
      </p>
      <div className="mt-1">
        <TagList tags={item.tags} />
      </div>
      <div className="mt-3">
        <MetaGrid info={item.info} />
      </div>
      <a
        href={item.href}
        className="mt-4 inline-flex min-h-12 items-center gap-1 self-start text-[14px] font-bold leading-5 text-[#7FB12B] transition duration-200 hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FB12B] motion-reduce:transition-none motion-reduce:hover:translate-x-0"
        aria-label={`查看案例：${item.name}`}
      >
        查看案例
        <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  )
}

export default function SelectedWorkSection() {
  return (
    <section
      id="cases"
      data-section-id="cases"
      className="relative scroll-mt-16 overflow-hidden border-b border-[rgba(16,24,40,0.08)] bg-[#F8F7F3] py-16 text-[#111111] sm:py-20 lg:scroll-mt-0 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,rgba(15,23,42,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.45)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className={`relative ${SECTION_CONTAINER}`}>
        <div className="max-w-[820px]">
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase leading-4 text-[rgba(15,23,42,0.58)]">
            <span className="size-2 rounded-full bg-[#7FB12B]" aria-hidden="true" />
            02 / SELECTED WORK
          </p>
          <h2 className="mt-2 text-[44px] font-semibold leading-[56px] text-[#111111] sm:text-[56px] sm:leading-[68px] lg:text-[64px] lg:leading-[80px]">
            核心项目
          </h2>
          <p className="mt-4 text-[16px] font-semibold leading-6 text-[#252A31] lg:whitespace-nowrap">
            复杂系统 / AI 应用 / 产品验证
          </p>
          <p className="mt-2 max-w-[760px] text-[14px] leading-6 text-[rgba(15,23,42,0.58)] sm:text-[16px] sm:leading-7">
            用真实项目展示复杂系统、AI 应用和智能硬件产品从需求到方案落地的能力。
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <CaseCard key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
