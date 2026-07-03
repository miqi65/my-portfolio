import SafeImage from "./SafeImage";
import { LocalizedText } from "@/data/projects";

interface Props {
  label: string;
  title: string;
  body: string;
  value: string;
  valuePrefix: string;
  image: string;
  layout: "full" | "image-left" | "image-right";
}

export default function CaseSplit({ label, title, body, value, valuePrefix, image, layout }: Props) {
  const TextContent = () => (
    <div className="flex flex-col gap-4 max-w-[520px]">
      <span className="uppercase text-[10px] font-bold tracking-[0.06em] text-muted">{label}</span>
      <h3 className="text-[24px] md:text-[32px] font-black leading-[1.2] text-foreground">{title}</h3>
      <p className="text-[14px] md:text-[16px] leading-[1.7] text-muted font-medium mb-4">{body}</p>
      <div className="pt-4 border-t border-foreground/15">
        <p className="text-[13px] md:text-[14px] leading-[1.6] text-foreground font-semibold">
          <span className="text-muted mr-2">{valuePrefix}</span>{value}
        </p>
      </div>
    </div>
  );

  if (layout === "full") {
    return (
      <div className="w-full flex flex-col gap-8 md:gap-16 my-[80px] md:my-[160px]">
        <div className="w-full aspect-video md:aspect-[21/9]">
          <SafeImage src={image} className="w-full h-full" />
        </div>
        <div className="px-0 md:px-[8vw]"><TextContent /></div>
      </div>
    );
  }

  const isImgRight = layout === "image-right";
  return (
    <div className={`w-full flex flex-col ${isImgRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 my-[80px] md:my-[160px]`}>
      <div className="w-full md:w-1/2 flex justify-start">
        <TextContent />
      </div>
      <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3]">
        <SafeImage src={image} className="w-full h-full" />
      </div>
    </div>
  );
}