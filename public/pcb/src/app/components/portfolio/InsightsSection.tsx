const quotes = [
  {
    text: "用户只能通过项目日志来确认项目是否顺利，并进行对应的策略调整。",
  },
  {
    text: "用户需要通过机台跟操作后台来回操作确认机器状态，以确认插件顺利对孔。",
  },
  {
    text: "机台故障在系统上只有硬件红黄灯亮起预警，用户需要检查机台才能发现当前报警原因。",
  },
  {
    text: "项目资料对接只能通过人工使用存储设备额外导入。",
  },
  {
    text: "用户分为因业务需要经常进行机台操作和主要进行项目管理偶尔查看机台运作情况两类。",
  },
  {
    text: "人员权限管理依靠额外OA进行管控，人工进行权限输入。",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" style={{ backgroundColor: "#f2f2f2" }} className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-0.5px",
              color: "#1d1d1f",
              marginBottom: "12px",
            }}
          >
            用户洞察
          </h2>
          <p
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              color: "#1d1d1f",
              letterSpacing: "-0.2px",
            }}
          >
            为了了解用户想要的产品是怎么样的，我们进行了员工访谈
          </p>
        </div>

        {/* Quotes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {quotes.map((q, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "28px 24px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "40px",
                  lineHeight: 1,
                  color: "#0066cc",
                  opacity: 0.3,
                  marginBottom: "8px",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "#1d1d1f",
                  letterSpacing: "-0.1px",
                }}
              >
                {q.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
