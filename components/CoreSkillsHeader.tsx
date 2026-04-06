import styles from "./CoreSkillsHeader.module.css";

export function CoreSkillsHeader() {
  return (
    <section className={styles.section} aria-labelledby="core-skills-title">
      <div className={styles.bgLayer} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="core-skills-title" className={styles.title}>
            核心技能
          </h2>
          <p className={styles.subtitle}>
            我始终致力于运用合适的方法技巧，通过协作的方式达成最佳结果。以下是我的核心能力矩阵：
          </p>
        </div>
      </div>
    </section>
  );
}
