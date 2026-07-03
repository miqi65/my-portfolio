import { ProjectPrinciple } from "@/data/projects";

interface Props {
  label: string;
  items: ProjectPrinciple[];
  language: "en" | "zh";
}

export default function CasePrinciples({ label, items, language }: Props) {
  return (
    <section className="w-full py-[100px] md:py-[160px] max-w-[1440px] mx-auto px-[20px] md:px-[32px]">
      <span className="uppercase text-[12px] font-bold tracking-[0.08em] text-foreground block mb-12">
        [{label}]
      </span>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3 pt-4 border-t border-foreground/15">
            <h4 className="text-[16px] md:text-[18px] font-black text-foreground">
              {item.title[language] ?? item.title.en}
            </h4>
            <p className="text-[12px] md:text-[14px] leading-[1.6] text-muted font-medium">
              {item.body[language] ?? item.body.en}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}