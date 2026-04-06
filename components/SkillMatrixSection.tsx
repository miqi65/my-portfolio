import styles from "./SkillMatrixSection.module.css";

const columns = [
  {
    title: "用户研究",
    items: [
      "实地调研 / 情境访谈",
      "可用性测试",
      "启发式评估",
      "数据埋点分析",
      "竞品分析",
    ],
  },
  {
    title: "交互设计",
    items: [
      "信息架构",
      "用户流程设计",
      "响应式 / 多端设计",
      "工控大屏 HMI",
      "高保真原型",
    ],
  },
  {
    title: "视觉 & 系统",
    items: [
      "企业级 Design System",
      "组件库架构",
      "Design Token 体系",
      "设计规范文档",
      "多模态界面系统",
    ],
  },
  {
    title: "AI & 工程化",
    items: [
      "AI 产品设计",
      "Design-to-Code 管线",
      "Figma MCP + Cursor",
      "设计自动化",
    ],
  },
];

export function SkillMatrixSection() {
  return (
    <section className={styles.section} aria-label="核心技能矩阵">
      <div className={styles.bgLayer} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {columns.map((col) => (
            <article key={col.title} className={styles.column}>
              <h3 className={styles.title}>{col.title}</h3>
              <ul className={styles.list}>
                {col.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
