import { ProjectMetaItem } from "@/data/projects";

interface Props {
  meta: ProjectMetaItem[];
  language: "en" | "zh";
}

export default function ProjectMeta({ meta, language }: Props) {
  if (!meta || meta.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-[24px] md:px-[48px] py-16 md:py-24 border-t border-foreground/10">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-6">
        {meta.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="uppercase tracking-wider text-[10px] md:text-[11px] text-muted font-sans">
              {item.label[language] || item.label.en}
            </span>
            <span className="text-[13px] md:text-[14px] text-foreground font-serif leading-[1.4] opacity-90">
              {item.value[language] || item.value.en}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}