import { ProjectMetaItem } from "@/data/projects";
import Link from "next/link";

interface Props {
  title: string;
  meta: ProjectMetaItem[];
  language: "en" | "zh";
}

export default function CaseHero({ title, meta, language }: Props) {
  const titleClass =
    language === "zh"
      ? "whitespace-nowrap text-[clamp(48px,6.6vw,112px)]"
      : "text-[clamp(44px,6vw,104px)]";

  return (
    <section className="flex min-h-[640px] w-full flex-col justify-between border-t border-foreground bg-background px-[24px] py-[32px] text-foreground md:px-[40px]">
      <div className="flex items-start justify-between gap-[24px] font-mono text-[12px] uppercase leading-none tracking-[0.08em] md:text-[14px]">
        <Link href="/" className="transition-opacity hover:opacity-60">
          Collection of work
        </Link>
        <Link
          href="/"
          className="bg-foreground px-[8px] py-[4px] text-background transition-opacity hover:opacity-80"
        >
          Close project
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-0 py-[64px] md:py-[80px]">
        <h1 className={`mx-auto max-w-[1280px] text-center font-black uppercase leading-[0.9] tracking-[-0.06em] text-foreground ${titleClass}`}>
          {title}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-[24px] border-t border-foreground/15 pt-[32px] sm:grid-cols-2 md:grid-cols-4 md:gap-[40px]">
        {meta.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-[12px]">
            <span className="font-mono text-[11px] uppercase leading-none tracking-[0.08em] text-muted md:text-[13px]">
              [{item.label[language] ?? item.label.en}]
            </span>
            <span className="text-[18px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-foreground md:text-[28px]">
              {item.value[language] ?? item.value.en}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
