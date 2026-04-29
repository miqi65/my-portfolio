import imgOldPCB from "figma:asset/2e033cda65dba1b6407a3b2ca15f51c89c7fe663.png";

export function StrategySection() {
  return (
    <section id="strategy" style={{ backgroundColor: "#ffffff" }} className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: screenshot */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-full rounded-lg overflow-hidden"
              style={{
                boxShadow: "0 4px 40px rgba(108,117,134,0.18)",
                border: "1px solid #e8e8ea",
              }}
            >
              <img
                src={imgOldPCB}
                alt="原始的PCB系统"
                className="w-full object-cover"
              />
            </div>
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "14px",
                color: "#7a7a7a",
                letterSpacing: "-0.1px",
              }}
            >
              原始的 PCB 系统
            </p>
          </div>

          {/* Right: text */}
          <div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.07,
                letterSpacing: "-0.5px",
                color: "#1d1d1f",
              }}
            >
              项目策略
            </h2>
            <div
              className="flex flex-col gap-5"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "#1d1d1f",
                letterSpacing: "-0.2px",
              }}
            >
              <p>
                为了加快产品上市的速度，我们的任务是在现有的功能框架的基础上设计和构建PCB系统，
                这样的策略是比较容易上手且风险最小的。
              </p>
              <p>
                假设很简单，即使是荷兰20年前设计的系统，思路也与现代市面流通的pcb系统框架一致，
                可以降低客户的学习成本，并且利用现有的基础框架更快的进入市场。
              </p>
              <p>这个决策对创造和谐的用户体验产生了重要的影响。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
