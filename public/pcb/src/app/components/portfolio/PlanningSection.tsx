const ganttData = [
  {
    label: "Engine1.0",
    color: "#3f8ef7",
    start: 0,
    span: 3,
    row: 0,
  },
  {
    label: "UI设计",
    color: "#3f8ef7",
    start: 1,
    span: 2,
    row: 1,
  },
  {
    label: "Engine2.0",
    color: "#3f8ef7",
    start: 3,
    span: 3,
    row: 0,
  },
  {
    label: "新功能",
    color: "#3f8ef7",
    start: 4,
    span: 2,
    row: 1,
  },
  {
    label: "持续完善库",
    color: "#3f8ef7",
    start: 5,
    span: 1,
    row: 2,
  },
];

const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sept"];

const infoCards = [
  {
    title: "设计规划",
    desc: "项目的每个功能阶段都已经规划好了，以旧版荷兰PCB系统为基础进行设计和开发。设计和审批通过每个功能后，开发团队就开始落地实施。",
  },
  {
    title: "团队协作",
    desc: "我与产品经理合作，根据平台的环境翻译产品功能。设计与功能更匹配的交互，同时还与硬件开发工程师合作，直至推动当前功能落地。",
  },
  {
    title: "周期紧张",
    desc: "从限定的发版日期往前推进工作，意味着设计被开发赶着进行。除开开发所需的时间，在剩余的时间里创造好的设计，在紧张的氛围里，带来了许多沟通协调跟时间挑战。",
  },
];

// Gantt chart uses a 6-column grid (one per month)
const COLS = 6;

export function PlanningSection() {
  return (
    <section id="planning" style={{ backgroundColor: "#f5f5f7" }} className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Title */}
        <h2
          className="mb-12"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 600,
            lineHeight: 1.07,
            letterSpacing: "-0.5px",
            color: "#1d1d1f",
          }}
        >
          项目规划
        </h2>

        {/* Gantt Chart */}
        <div
          className="rounded-lg overflow-hidden mb-16"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e8e8ea",
            boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* Month headers */}
          <div
            className="grid border-b"
            style={{
              gridTemplateColumns: `120px repeat(${COLS}, 1fr)`,
              borderColor: "#e8e8ea",
            }}
          >
            <div style={{ padding: "10px 16px" }} />
            {months.map((m) => (
              <div
                key={m}
                style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#7a7a7a",
                  borderLeft: "1px solid #e8e8ea",
                }}
              >
                {m}
              </div>
            ))}
          </div>

          {/* Gantt rows */}
          {[0, 1, 2].map((row) => {
            const rowItems = ganttData.filter((d) => d.row === row);
            return (
              <div
                key={row}
                className="grid relative"
                style={{
                  gridTemplateColumns: `120px repeat(${COLS}, 1fr)`,
                  borderBottom: row < 2 ? "1px solid #f0f0f0" : "none",
                  minHeight: "44px",
                }}
              >
                {/* Row label */}
                <div style={{ padding: "10px 16px" }} />
                {/* Background columns */}
                {months.map((m) => (
                  <div
                    key={m}
                    style={{ borderLeft: "1px solid #f0f0f0" }}
                  />
                ))}
                {/* Bar items */}
                {rowItems.map((item) => (
                  <div
                    key={item.label}
                    className="absolute flex items-center"
                    style={{
                      left: `calc(120px + (100% - 120px) / ${COLS} * ${item.start} + 4px)`,
                      width: `calc((100% - 120px) / ${COLS} * ${item.span} - 8px)`,
                      top: "7px",
                      height: "30px",
                      backgroundColor: item.color,
                      borderRadius: "4px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#ffffff",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Info cards */}
        <div
          className="rounded-2xl p-8 grid md:grid-cols-3 gap-8"
          style={{ backgroundColor: "#edf5fe" }}
        >
          {infoCards.map((card) => (
            <div key={card.title}>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  letterSpacing: "-0.2px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#333333",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
