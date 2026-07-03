import { LocalizedText } from "@/data/projects";

interface Props {
  title: LocalizedText;
  summary: LocalizedText;
  heroImage: string;
  language: "en" | "zh";
}

export default function ProjectHero({ title, summary, heroImage, language }: Props) {
  return (
    <section className="w-full pt-[20vh] pb-[10vh] max-w-[1280px] mx-auto px-[24px] md:px-[48px]">
      <h1 className="font-serif text-foreground leading-[1.1] text-[clamp(42px,6vw,100px)] md:w-[75%] mb-8 md:mb-12">
        {title[language] || title.en}
      </h1>
      <p className="font-serif text-muted text-[16px] md:text-[20px] leading-[1.6] max-w-[640px] mb-16 md:mb-24">
        {summary[language] || summary.en}
      </p>
      
      <div className="w-full relative aspect-video md:aspect-[21/9] bg-muted/10 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover block text-transparent"
          onError={(e) => { e.currentTarget.src = "/images/placeholders/project-placeholder.jpg"; }}
        />
      </div>
    </section>
  );
}