import imgBg from "figma:asset/7fb591fc24fce1f239469f3224ff1c1853176e15.png";

const barData = [
  { year: "2017", value: 2.35, heightPct: 62 },
  { year: "2018", value: 2.79, heightPct: 74 },
  { year: "2019", value: 3.41, heightPct: 90, highlight: true },
];

const products = ["MES", "ALC", "WMS", "BTCS", "ISPC", "FAST"];

export function OverviewSection() {
  return (
    <section id="overview">
      {/* White header */}
      <div style={{ backgroundColor: "#ffffff" }} className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="mb-8"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-0.5px",
              color: "#1d1d1f",
            }}
          >
            项目概览
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px]">
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "17px",
                lineHeight: 1.6,
                color: "#1d1d1f",
                letterSpacing: "-0.2px",
              }}
            >
              长园达明致力于成为国际领先的PCB制造解决方案提供商。随着行业的发展和客户需求的增长，
              达明对打造数字化工厂有了更高的要求，希望通过信息化手段解决发展痛点，增强核心竞争力。
            </p>
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "17px",
                lineHeight: 1.6,
                color: "#1d1d1f",
                letterSpacing: "-0.2px",
              }}
            >
              自千禧年购入进口PCB系统以来，无合适团队接手项目，该项目每年亏损几十万美金，
              在市场发展与政策扶持下，对达明来说，重启这个项目预示着新的转折。
            </p>
          </div>
        </div>
      </div>

      {/* Dark section */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#1a1a1c" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={imgBg}
            alt=""
            className="absolute w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,26,28,0.85)" }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-16">
          {/* Section headers */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                外部环境 · 年度增长
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                相关政策
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                已上线项目
              </p>
            </div>
          </div>

          {/* Three columns content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Col 1: Bar Chart */}
            <div>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "16px",
                }}
              >
                单位 / 万亿元
              </p>
              {/* Y-axis labels + bars */}
              <div className="flex gap-3 items-end" style={{ height: "200px" }}>
                {/* Y labels */}
                <div className="flex flex-col justify-between h-full pb-6 text-right pr-2">
                  {["4", "3", "2", "1", "0"].map((l) => (
                    <span
                      key={l}
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {l}
                    </span>
                  ))}
                </div>
                {/* Bars */}
                <div className="flex gap-4 items-end flex-1 h-full">
                  {barData.map((d) => (
                    <div key={d.year} className="flex flex-col items-center gap-1 flex-1">
                      <span
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                          fontSize: d.highlight ? "14px" : "12px",
                          fontWeight: d.highlight ? 700 : 400,
                          color: d.highlight ? "#ffffff" : "rgba(255,255,255,0.7)",
                          marginBottom: "4px",
                        }}
                      >
                        {d.value}
                      </span>
                      <div
                        className="w-full rounded-t-sm transition-all"
                        style={{
                          height: `${d.heightPct * 1.4}px`,
                          backgroundColor: d.highlight ? "#3f8ef7" : "rgba(255,255,255,0.6)",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.7)",
                          marginTop: "6px",
                        }}
                      >
                        {d.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Quote below chart */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <p
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  2019年中国工业互联网产业{" "}
                  <span style={{ fontWeight: 600, textDecoration: "underline" }}>
                    增加值规模达3.41万亿元
                  </span>
                  ，
                  <span style={{ fontWeight: 600, textDecoration: "underline" }}>
                    增速达22.14%
                  </span>
                  ，同比增长2.97个百分点。
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    textAlign: "right",
                  }}
                >
                  ——《电子信息产业工业互联网发展报告》
                </p>
              </div>
            </div>

            {/* Col 2: Policy text */}
            <div>
              <div
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.8)",
                }}
                className="flex flex-col gap-4"
              >
                <p>
                  发改委发布《产业结构调整指导目录（2019年本）》，将"新型电子元器件（高密度印刷电路板和柔性电路板等）
                  制造"列入"鼓励发展的重点行业；
                </p>
                <p>
                  2020年，工信部发布《印制电路板行业规范条件》企业名单（第二批），
                  继续推动印刷电路板行业优化布局、产品结构调整和转型升级。
                </p>
                <p>
                  《"双千兆"网络协同发展行动计划（2021-2023年）》和《5G应用"扬帆"行动计划（2021-2023年）》
                  支持和引导5G通信领域的发展，促进PCB产品的需求增长。
                </p>
              </div>
              {/* Internal env label */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <p
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  内部环境
                </p>
                <p
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  长园达明（CYGDM）已上线项目——MES、ALC、WMS、BTCS、ISPC、Fast
                  等多款基于SaaS的B端产品由我们团队主导设计并推动落地。
                </p>
              </div>
            </div>

            {/* Col 3: Product orbit */}
            <div className="flex flex-col items-center">
              {/* Orbit visualization */}
              <div className="relative flex items-center justify-center" style={{ width: "260px", height: "260px" }}>
                {/* Outer circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "260px",
                    height: "260px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                />
                {/* Middle circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "190px",
                    height: "190px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                />
                {/* Center circle */}
                <div
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    width: "110px",
                    height: "110px",
                    backgroundColor: "#3f8ef7",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "rgba(244,247,249,0.95)",
                      letterSpacing: "1px",
                    }}
                  >
                    SAAS
                  </span>
                </div>
                {/* Satellite products */}
                {products.map((name, i) => {
                  const angle = (i * 360) / products.length - 90;
                  const rad = (angle * Math.PI) / 180;
                  const r = 118;
                  const x = 130 + r * Math.cos(rad);
                  const y = 130 + r * Math.sin(rad);
                  return (
                    <div
                      key={name}
                      className="absolute flex items-center justify-center rounded-full"
                      style={{
                        width: "48px",
                        height: "48px",
                        left: `${x - 24}px`,
                        top: `${y - 24}px`,
                        backgroundColor: "#3f8ef7",
                        border: "2px solid rgba(237,245,254,0.6)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#ffffff",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p
                className="mt-6 text-center"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.5,
                  maxWidth: "220px",
                }}
              >
                6 款已上线 B 端 SaaS 产品，涵盖制造业核心场景
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
