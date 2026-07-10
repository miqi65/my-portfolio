import { ProjectSectionItem } from "@/data/projects";

interface Props {
  title?: string;
  items: ProjectSectionItem[];
  language: "en" | "zh";
}

export default function ProjectSection({ title, items, language }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-[24px] md:px-[48px] py-16 md:py-32 border-t border-foreground/10">
      {title && (
        <h2 className="uppercase tracking-wider text-[11px] md:text-[12px] text-muted mb-16 md:mb-24 font-sans">
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-24 md:gap-40">
        {items.map((item, index) => {
          const lLabel = item.label[language] || item.label.en;
          const lTitle = item.title[language] || item.title.en;
          const lDesc = item.description[language] || item.description.en;
          const layout = item.layout || "text-only";

          // 文字块结构
          const TextBlock = () => (
            <div className="flex flex-col gap-4 max-w-[600px]">
              <span className="font-serif text-muted text-[13px] italic">{lLabel}</span>
              <h3 className="font-serif text-foreground text-[20px] md:text-[28px] leading-tight">{lTitle}</h3>
              <p className="font-serif text-muted text-[14px] md:text-[16px] leading-[1.6] opacity-90">{lDesc}</p>
            </div>
          );

          // 图片块结构
          const ImageBlock = () => item.image ? (
            <div className="w-full bg-muted/5 relative overflow-hidden flex-1">
              <img 
                loading="lazy"
                decoding="async"
                src={item.image} 
                alt="" 
                className="w-full h-auto block object-cover text-transparent"
                onError={(e) => { e.currentTarget.src = "/images/placeholders/project-placeholder.jpg"; }}
              />
            </div>
          ) : null;

          return (
            <div key={index} className="w-full">
              {layout === "full" && (
                <div className="flex flex-col gap-8 md:gap-12">
                  <ImageBlock />
                  <TextBlock />
                </div>
              )}
              {layout === "image-left" && (
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                  <div className="w-full md:w-[60%]"><ImageBlock /></div>
                  <div className="w-full md:w-[40%]"><TextBlock /></div>
                </div>
              )}
              {layout === "image-right" && (
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                  <div className="w-full md:w-[60%]"><ImageBlock /></div>
                  <div className="w-full md:w-[40%]"><TextBlock /></div>
                </div>
              )}
              {layout === "text-only" && (
                <TextBlock />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
