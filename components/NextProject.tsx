import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  nextProject: Project;
  language: "en" | "zh";
}

export default function NextProject({ nextProject, language }: Props) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-[24px] md:px-[48px] py-24 md:py-40 border-t border-foreground/10 mt-20">
      <Link
        href={`/work/${nextProject.slug}`}
        className="group flex flex-col md:flex-row items-start md:items-center w-full md:w-[70vw] mx-auto gap-[16px] md:gap-[24px] font-serif text-[13px] md:text-[14px]"
      >
        <div className="flex items-center gap-[12px] md:gap-[24px] whitespace-nowrap">
          <span className="text-muted tracking-wide uppercase font-sans text-[11px]">
            {language === "en" ? "Next Project" : "下一个项目"}
          </span>
          <span className="text-foreground transition-opacity group-hover:opacity-60 text-[18px]">
            {nextProject.title[language] || nextProject.title.en}
          </span>
        </div>
        <span className="relative h-px w-full md:flex-1 overflow-hidden bg-foreground/15 mt-2 md:mt-0">
          <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-out group-hover:scale-x-100" />
        </span>
      </Link>
    </div>
  );
}