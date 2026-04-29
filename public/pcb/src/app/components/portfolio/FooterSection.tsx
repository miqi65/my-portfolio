export function FooterSection() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f7",
        borderTop: "1px solid #e0e0e0",
        padding: "64px 32px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Project summary */}
          <div>
            <h4
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "16px",
                letterSpacing: "-0.1px",
              }}
            >
              项目信息
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "客户", val: "长园达明 (CYGDM)" },
                { label: "时间", val: "2020, Jan–Sep" },
                { label: "角色", val: "UI & UX 设计 / 用户研究" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "12px",
                      color: "#7a7a7a",
                      minWidth: "36px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "12px",
                      color: "#333333",
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Outcomes */}
          <div>
            <h4
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "16px",
                letterSpacing: "-0.1px",
              }}
            >
              核心成果
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "管理效率提升 +28%",
                "插件效率提升 +17%",
                "人工介入率降低 -10%",
                "工程导入耗时降低 -17%",
              ].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#0066cc",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "12px",
                      color: "#333333",
                    }}
                  >
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Skills */}
          <div>
            <h4
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "16px",
                letterSpacing: "-0.1px",
              }}
            >
              职能范围
            </h4>
            <div className="flex flex-wrap gap-2">
              {["洞察与创意", "体验策略", "愿景规划", "范围定义", "设计执行", "验证测试", "用户研究"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "11px",
                      color: "#333333",
                      backgroundColor: "#e0e0e0",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #d2d2d7", paddingTop: "24px" }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "12px",
                color: "#7a7a7a",
                letterSpacing: "-0.12px",
              }}
            >
              PCB 系统重新设计 · 长园达明 · 2020
            </p>
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "12px",
                color: "#7a7a7a",
                letterSpacing: "-0.12px",
              }}
            >
              UX 设计作品集案例展示
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
