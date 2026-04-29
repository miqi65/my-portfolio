import imgDashboard from "figma:asset/c99b0bb128810f73530e1cc3f6d12298beb607c7.png";
import imgPCBEditor from "figma:asset/8ab141dce670b7b6e762d96a6f8f33936d2ae24b.png";
import imgSidebar from "figma:asset/03233149131de7072335e813105af1d3a37edf24.png";

// Simplified MacBook frame as a component
function MacbookFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ maxWidth: "720px" }}>
      {/* Screen casing */}
      <div
        className="relative w-full rounded-lg overflow-hidden"
        style={{
          backgroundColor: "#3A4245",
          padding: "12px 12px 8px 12px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
        }}
      >
        {/* Camera dot */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#262C2D" }} />
        </div>
        {/* Screen area */}
        <div
          className="w-full rounded overflow-hidden"
          style={{ backgroundColor: "#121515", aspectRatio: "16/10" }}
        >
          {children}
        </div>
      </div>
      {/* Base */}
      <div
        className="w-full rounded-b-sm"
        style={{
          height: "12px",
          background: "linear-gradient(to bottom, #535458, #818286)",
          marginTop: "-1px",
        }}
      />
    </div>
  );
}

export function SolutionsSection() {
  return (
    <section id="solutions">
      {/* Solution header */}
      <div style={{ backgroundColor: "#fafbfb" }} className="pt-24 pb-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="pb-6 mb-6"
            style={{ borderBottom: "1px solid #e8e8ea" }}
          >
            <h2
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 600,
                lineHeight: 1.07,
                letterSpacing: "-0.5px",
                color: "#1d1d1f",
                marginBottom: "8px",
              }}
            >
              解决方案
            </h2>
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "20px",
                color: "rgba(24,24,25,0.65)",
                letterSpacing: "-0.2px",
              }}
            >
              通过设计解决 PCB 生产的系列问题
            </p>
          </div>
        </div>
      </div>

      {/* Solution 1: 生产动态实时更新 */}
      <div style={{ backgroundColor: "#fafbfb" }} className="pb-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text left */}
            <div>
              <p
                className="mb-3"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#0066cc",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                解决方案 01
              </p>
              <h3
                className="mb-5"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-0.4px",
                  color: "#1d1d1f",
                }}
              >
                生产动态实时更新
              </h3>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "rgba(24,24,25,0.8)",
                  letterSpacing: "-0.2px",
                }}
              >
                后台直接查看生产状态，数据与机台实时联动，帮助用户把控实时生产数据，
                在任何地点都可以对生产进行监控。
              </p>
            </div>

            {/* Laptop mockup right */}
            <div className="flex justify-center lg:justify-end">
              <MacbookFrame>
                <img
                  src={imgDashboard}
                  alt="PCB系统生产监控界面"
                  className="w-full h-full object-cover"
                />
              </MacbookFrame>
            </div>
          </div>
        </div>
      </div>

      {/* Solution 2: 生产/物料可视化 */}
      <div style={{ backgroundColor: "#f2f2f2" }} className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Title centered */}
          <div className="text-center mb-4">
            <h3
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.4px",
                color: "#1d1d1f",
                marginBottom: "12px",
              }}
            >
              生产/物料可视化
            </h3>
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "17px",
                lineHeight: 1.6,
                color: "rgba(24,24,25,0.7)",
                maxWidth: "640px",
                margin: "0 auto",
                letterSpacing: "-0.2px",
              }}
            >
              在可视化的条件下进行数据修改设置，提高物料识别率和WIP状态，敏捷应对各项异常，
              重新生成可执行需求。
            </p>
          </div>

          {/* Screenshots */}
          <div className="mt-12 flex gap-4 items-start justify-center">
            {/* Main screenshot */}
            <div
              className="flex-1 max-w-[760px] rounded-lg overflow-hidden"
              style={{
                boxShadow: "0 4px 40px rgba(108,117,134,0.2)",
              }}
            >
              <img
                src={imgPCBEditor}
                alt="PCB物料可视化界面"
                className="w-full object-cover rounded-lg"
              />
            </div>
            {/* Side screenshot */}
            <div
              className="hidden lg:block rounded-lg overflow-hidden opacity-80"
              style={{
                width: "180px",
                flexShrink: 0,
                boxShadow: "0 4px 40px rgba(108,117,134,0.2)",
              }}
            >
              <img
                src={imgSidebar}
                alt="物料列表"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {["可视化插件操作", "实时WIP状态", "物料精准识别", "异常敏捷响应"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  color: "#0066cc",
                  backgroundColor: "rgba(0,102,204,0.08)",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
