import Link from "next/link";
import SafeImage from "./SafeImage";
import { Project } from "@/data/projects";

export default function NextProjectHero({ nextProject, language }: { nextProject: Project, language: "en"|"zh" }) {
  const bracketLabel = language === "en" ? "[NEXT PROJECT]" : "[下一个项目]";
  
  return (
    <Link href={`/work/${nextProject.slug}`} className="group block w-full bg-background text-foreground mt-[120px] md:mt-[200px] border-t border-foreground/15">
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-32 px-[20px] relative overflow-hidden">
        
        <span className="uppercase text-[12px] font-bold tracking-[0.08em] text-foreground mb-8 text-center">
          {bracketLabel}
        </span>
        
        <h2 className="font-black leading-[0.95] tracking-[-0.06em] text-[clamp(56px,10vw,160px)] text-center max-w-[1200px] z-10 transition-transform duration-700 ease-out group-hover:scale-[1.01]">
          {nextProject.title[language] ?? nextProject.title.en}
        </h2>
        
        <div className="w-[280px] md:w-[420px] aspect-[16/9] mt-12 overflow-hidden z-10 border border-foreground/10">
          <SafeImage src={nextProject.cover} className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        </div>

        {/* Footer info row */}
        <div className="absolute bottom-8 left-0 w-full px-[20px] md:px-[32px] flex justify-between items-center text-[11px] font-bold tracking-[0.08em] uppercase text-muted">
          <span>COLLECTION OF WORK</span>
          <span className="hidden md:block">↑</span>
          <span>COPYRIGHT 2026</span>
        </div>
      </div>
    </Link>
  );
}