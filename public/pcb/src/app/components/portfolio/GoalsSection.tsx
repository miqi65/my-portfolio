const goalCards = [
  {
    problem: "项目运行状态不明确",
    solution: "通过首页呈现数据信息，以日志辅助用户进行关键决策。",
  },
  {
    problem: "人工反复校验插件状态",
    solution: "通过可视化插件与实时数据做到快速精准识别物料并进入WIP状态。",
  },
  {
    problem: "传统机械预警不及时",
    solution: "提供预警，帮助用户及时发现故障，减少停机时间降低成本。",
  },
  {
    problem: "手动进行项目资料存储",
    solution: "帮助用户管理项目资料，设置可复用并添加自定义功能。",
  },
  {
    problem: "传统权限管理",
    solution: "期望将人员权限与数据接口结合起来，让权限管理更便捷。",
  },
];

export function GoalsSection() {
  return (
    <section id="goals" style={{ backgroundColor: "#f6fbff" }} className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-0.5px",
              color: "#414042",
            }}
          >
            获得设计目标
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {goalCards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                border: "2px dashed #cccccc",
                borderRadius: "16px",
                padding: "28px 24px",
              }}
            >
              {/* Problem */}
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#414042",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                {card.problem}
              </p>

              {/* Arrow */}
              <div className="flex justify-center mb-4">
                <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
                  <line x1="12" y1="0" x2="12" y2="26" stroke="#DBDBDB" strokeWidth="4" />
                  <path d="M4 20 L12 32 L20 20" stroke="#DBDBDB" strokeWidth="4" fill="none" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Solution */}
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#414042",
                  lineHeight: 1.6,
                }}
              >
                "{card.solution}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
