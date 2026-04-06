"use client";

import Image from "next/image";
import styles from "./UxMethodologySection.module.css";

const imgUxProcess = "/images/uxproseed.svg";

export function UxMethodologySection() {
  return (
    <section className={styles.root} aria-labelledby="ux-methodology-title">
      <div className={styles.bg} />

      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <h2 id="ux-methodology-title" className={styles.title}>
            UX 方法论
          </h2>
          <p className={styles.description}>
            我的 UX 理念是挖掘核心问题，以用户为中心，同时兼顾用户需求与商业目标。擅长在迭代节奏中创新，在延迟、Token
            预算、基础设施等 AI
            系统特有的约束条件下，设计并落地兼顾可用性、信任感与可量化影响的产品体验。
          </p>
        </div>

        <div className={styles.spacer} />

        <div className={styles.processBlock}>
          <div className={styles.processImageWrapper}>
            <Image
              src={imgUxProcess}
              alt="从发现问题、定义问题到塑造方案、传达方案的 UX 方法论流程图"
              fill
              className={styles.processImage}
              priority
            />
          </div>

          <div className={styles.processLabels}>
            <div className={styles.processStep}>
              <span className={styles.processStepEn}>Problem Finding</span>
              <span className={styles.processStepZh}>发现问题</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processStepEn}>Problem Framing</span>
              <span className={styles.processStepZh}>定义问题</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processStepEn}>Solution Shaping</span>
              <span className={styles.processStepZh}>塑造方案</span>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processStepEn}>Solution Pitching</span>
              <span className={styles.processStepZh}>传达方案</span>
            </div>
          </div>
        </div>

        <div className={styles.spacer} />
      </div>
    </section>
  );
}
