import imgBg from "figma:asset/0d463ae03b4d5d0c96742799d2fbcc75bad93590.png";
import imgBg1 from "figma:asset/91a2a81a06731793b7804a326a5b8c3dc8c99cd3.png";
import imgLaptop from "figma:asset/e61a0a5617df8e3ae01b9ad58bed878848c9c1ce.png";

const meta = [
  { label: "客户", value: "长园达明" },
  { label: "担任角色", value: "UI&UX设计 / 用户研究" },
  { label: "职能范围", value: "洞察与创意 · 体验策略与愿景 · 规划与范围定义 · 设计执行与验证" },
  { label: "项目时间", value: "2020, Jan–Sep" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#0a0a0c" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={imgBg}
          alt=""
          className="absolute w-full h-full object-cover opacity-30"
        />
        <img
          src={imgBg1}
          alt=""
          className="absolute w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen max-w-[1440px] mx-auto px-8 lg:px-16 pt-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center py-20 lg:py-0 lg:max-w-[520px]">
          {/* Label */}
          <p
            className="text-[12px] tracking-[2px] uppercase mb-6"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: "#2997ff",
              fontWeight: 600,
            }}
          >
            案例研究 · PCB 制造系统
          </p>

          {/* Title */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-0.5px",
              color: "#ffffff",
            }}
          >
            PCB 系统
          </h1>

          {/* Divider */}
          <div className="w-full h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

          {/* Description */}
          <p
            className="mb-10"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "-0.2px",
            }}
          >
            主导重新设计了 PCB 系统。提升了用户的管理（+28%）与插件（+17%）效率，
            降低了人工介入率（-10%）与工程导入耗时（-17%）
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { num: "+28%", desc: "管理效率" },
              { num: "+17%", desc: "插件效率" },
              { num: "-10%", desc: "人工介入率" },
              { num: "-17%", desc: "工程导入耗时" },
            ].map((m) => (
              <div key={m.desc} className="flex flex-col">
                <span
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "28px",
                    fontWeight: 600,
                    color: "#2997ff",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.1,
                  }}
                >
                  {m.num}
                </span>
                <span
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {m.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />

          {/* Meta */}
          <div className="flex flex-col gap-4">
            {meta.map((m) => (
              <div key={m.label} className="flex gap-6">
                <span
                  className="w-20 shrink-0"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "-0.1px",
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.5,
                  }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Laptop mockup */}
        <div className="flex-1 flex items-center justify-center lg:justify-end py-10 lg:py-0">
          <img
            src={imgLaptop}
            alt="PCB系统界面展示"
            className="w-full max-w-[820px] object-contain"
            style={{
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "11px",
            color: "#ffffff",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          向下滚动
        </span>
        <div className="w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
      </div>
    </section>
  );
}
