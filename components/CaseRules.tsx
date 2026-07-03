import SafeImage from "./SafeImage";
import { ProjectRule } from "@/data/projects";

interface Props {
  label: string;
  items: ProjectRule[];
  image: string;
  language: "en" | "zh";
}

export default function CaseRules({ label, items, image, language }: Props) {
  return (
    <section className="w-full py-[100px] md:py-[160px] max-w-[1440px] mx-auto px-[20px] md:px-[32px] border-t border-foreground/15">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-[80px] md:mb-[120px]">
        <div className="md:col-span-4">
          <h2 className="uppercase text-[12px] font-bold tracking-[0.08em] text-foreground">
            [{label}]
          </h2>
        </div>
        <div className="md:col-start-6 md:col-span-7 flex flex-col gap-0 border-t border-foreground/15">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 py-6 border-b border-foreground/15">
              <h4 className="text-[16px] font-black text-foreground md:w-[35%] shrink-0">
                {item.title[language] ?? item.title.en}
              </h4>
              <p className="text-[14px] leading-[1.6] text-muted font-medium md:w-[65%]">
                {item.body[language] ?? item.body.en}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full aspect-video md:aspect-[21/9]">
        <SafeImage src={image} className="w-full h-full" />
      </div>
    </section>
  );
}