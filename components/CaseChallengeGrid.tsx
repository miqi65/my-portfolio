import { ProjectChallenge } from "@/data/projects";

interface Props {
  label: string;
  headline: string;
  items: ProjectChallenge[];
  language: "en" | "zh";
}

export default function CaseChallengeGrid({ label, headline, items, language }: Props) {
  return (
    <section className="w-full py-[120px] md:py-[180px] max-w-[1440px] mx-auto px-[20px] md:px-[32px] border-t border-foreground/15">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16">
        <div className="md:col-span-4">
          <span className="uppercase text-[12px] font-bold tracking-[0.08em] text-foreground block mb-8">
            [{label}]
          </span>
          <h2 className="text-[32px] md:text-[48px] font-black leading-[1.1] tracking-tight text-foreground">
            {headline}
          </h2>
        </div>
        
        <div className="md:col-start-6 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[56px]">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 pt-6 border-t border-foreground/15">
              <span className="text-[20px] font-black text-foreground">{item.number}</span>
              <h4 className="text-[18px] md:text-[20px] font-black text-foreground">
                {item.title[language] ?? item.title.en}
              </h4>
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-muted font-medium">
                {item.body[language] ?? item.body.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}