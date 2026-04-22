'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./ProfileIntroSection.module.css";

const profileImage = "/images/me.png";

const SUFFIXES = [
  '一个 B 端产品设计师',
  'AI builder',
  '一个跨界杂学家',
  '设计工程派',
  '永远在迭代',
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export function ProfileIntroSection() {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = SUFFIXES[index];

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === '') {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % SUFFIXES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(t);
  }, [displayed, index, isDeleting]);

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
            <span className={styles.typewriter}>
              {displayed}
              <span className={styles.cursor} />
            </span>
          </h2>

          <div className={styles.description}>
            <p>
              11 年设计功底，专注 AI 产品体验与设计工程化——让设计融合 AI，于繁复中取清明。
            </p>
            <p>
              足迹横跨工业 AI 视觉质检、WMS/MES、IoT 监控与 B 端 SaaS，覆盖 Web、App 与工控大屏。服务过制造业龙头与早期科技团队。
            </p>
            <p>
              2022 年起深耕 AI 方向，研究算法系统如何在真实生产中落地、融合、增值。与团队协同，把抽象的模型与数据凝练为日常可倚赖的界面。
            </p>
            <p>敏捷探边界，从容成规模。</p>
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
