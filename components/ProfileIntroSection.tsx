import Image from "next/image";
import styles from "./ProfileIntroSection.module.css";

const profileImage = "/images/me.png";

export function ProfileIntroSection() {
  return (
    <section className={styles.section} aria-label="个人介绍">
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.imageFrame}>
            <Image
              src={profileImage}
              alt="杨蜜萁个人形象"
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>

        <div className={styles.rightCol}>
          <h2 className={styles.title}>
            <span className={styles.name}>杨蜜萁</span>
            <span className={styles.role}>AI 产品设计师</span>
          </h2>

          <div className={styles.description}>
            <p>
              凭借 12 年复杂 B 端与智能硬件设计经验，我在工业场景中打磨出一套独特的设计直觉——在约束最多的地方，做最合适的设计。
            </p>
            <p>
              我的工作横跨 IoT 监控、WMS/MES 制造执行系统、AI 语义产品与工业视觉质检 HMI，覆盖 Web、App 与工控大屏全端。这些场景的共同点是：系统复杂、数据密集、容错代价高。
            </p>
            <p>
              持续深耕工业 AI 与软硬一体化方向。帮助团队将高密度业务逻辑转化为操作者无障碍使用的界面——同时构建让设计规模化交付的AI设计体系：从企业级 Design System变成自动化设计到代码的交付流程。
            </p>
            <p>快速落地，0-1规模化。期待你的联系。</p>
          </div>

          <div className={styles.actions}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="/杨蜜萁_高级产品设计师_13622962831.pdf"
              download
            >
              简历
            </a>
            <a
              className={`${styles.btn} ${styles.btnSecondary}`}
              href="https://xhslink.com/m/AjJa4jzxN3Y"
              target="_blank"
              rel="noreferrer"
            >
              小红书
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
