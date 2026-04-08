import styles from "./ToolboxSection.module.css";

type Tool = {
  name: string;
  url: string;
  logo: string;
  size: number;
};

const tools: Tool[] = [
  // Row 1 (highest usage frequency)
  { name: "Figma", url: "https://www.figma.com/", logo: "/icons/figma.svg", size: 57.67 },
  { name: "Notion", url: "https://www.notion.so/", logo: "/icons/notion.svg", size: 54.88 },
  { name: "Stitch", url: "https://stitch.withgoogle.com/", logo: "/icons/stitch.svg", size: 52 },
  { name: "Gemini", url: "https://gemini.google.com/", logo: "/icons/gemini.svg", size: 64 },
  { name: "Mobbin", url: "https://mobbin.com/", logo: "/icons/mobbin.svg", size: 72 },

  // Row 2
  { name: "ChatGPT", url: "https://chat.openai.com/", logo: "/icons/openai.svg", size: 48.3 },
  { name: "Claude", url: "https://claude.ai/", logo: "/icons/anthropic.svg", size: 52.11 },
  { name: "GitHub", url: "https://github.com/", logo: "/icons/github.svg", size: 52.89 },
  { name: "Cursor", url: "https://cursor.com/", logo: "/icons/cursor.svg", size: 59.22 },
  { name: "v0", url: "https://v0.dev/", logo: "/icons/vercel.svg", size: 52.89 },

  // Row 3
  { name: "Framer", url: "https://www.framer.com/", logo: "/icons/framer.svg", size: 66.69 },
  { name: "UX Pilot", url: "https://uxpilot.ai/", logo: "/icons/UX Pilot AI.svg", size: 56 },
  { name: "Vercel v0", url: "https://v0.app/", logo: "/icons/Vercel v0.svg", size: 80 },
  { name: "Midjourney", url: "https://www.midjourney.com/", logo: "/icons/midjourney.svg", size: 75.89 },
  { name: "Maze", url: "https://maze.co/", logo: "/icons/maze.svg", size: 54 },
];

export function ToolboxSection() {
  return (
    <section className={styles.section} aria-label="工具箱">
      <div className={styles.bgLayer} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>工具箱</h2>
          <p className={styles.desc}>
            这些是我在日常项目中高频使用的工具，用于提升从研究、设计到交付的效率。
            我也会持续学习新的方法与策略，打磨设计能力。
          </p>
        </header>

        <div className={styles.grid}>
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className={styles.iconCell}
              aria-label={tool.name}
              title={tool.name}
            >
              <span
                className={styles.iconWrap}
                style={{
                  width: `${tool.size}px`,
                  height: `${tool.size}px`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logo}
                  alt={tool.name}
                  width={Math.round(tool.size)}
                  height={Math.round(tool.size)}
                  className={styles.icon}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
