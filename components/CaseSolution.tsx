import SafeImage from "./SafeImage";

interface Props {
  label: string;
  title: string;
  body: string;
  value: string;
  valuePrefix: string;
  image: string;
  layout: "full" | "image-left" | "image-right";
}

export default function CaseSolution({ label, title, body, value, valuePrefix, image, layout }: Props) {
  const TextContent = () => (
    <div className="flex flex-col gap-5 max-w-[560px]">
      <span className="uppercase text-[12px] font-bold tracking-[0.08em] text-foreground">[{label}]</span>
      <h3 className="text-[24px] md:text-[32px] font-black leading-[1.2] text-foreground">{title}</h3>
      <p className="text-[14px] md:text-[16px] leading-[1.7] text-muted font-medium">{body}</p>
      <div className="pt-5 mt-2 border-t border-foreground/15">
        <span className="uppercase text-[11px] font-bold tracking-[0.06em] text-foreground block mb-2">
          [{valuePrefix}]
        </span>
        <p className="text-[14px] md:text-[15px] leading-[1.6] text-foreground font-semibold">
          {value}
        </p>
      </div>
    </div>
  );

  if (layout === "full") {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] my-[100px] md:my-[160px]">
        <div className="w-full aspect-video md:aspect-[21/9] mb-[60px] md:mb-[100px]">
          <SafeImage src={image} className="w-full h-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Use left alignment with grid offset for text in full layout */}
          <div className="md:col-start-2 md:col-span-8">
            <TextContent />
          </div>
        </div>
      </section>
    );
  }

  const isImgRight = layout === "image-right";
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] my-[100px] md:my-[160px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 items-center">
        <div className={`md:col-span-4 flex flex-col ${isImgRight ? 'md:col-start-1 md:row-start-1' : 'md:col-start-9 md:row-start-1'}`}>
          <TextContent />
        </div>
        <div className={`md:col-span-7 aspect-[4/3] ${isImgRight ? 'md:col-start-6 md:row-start-1' : 'md:col-start-1 md:row-start-1'}`}>
          <SafeImage src={image} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}