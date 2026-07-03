import SafeImage from "./SafeImage";

export default function CaseStatement({ text, image }: { text: string, image: string }) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] my-[60px] md:my-[100px]">
      <div className="relative w-full h-[520px] md:h-[640px] bg-[#111] overflow-hidden">
        <SafeImage src={image} className="w-full h-full opacity-65" />
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center p-6 md:p-12">
          <h2 className="text-white text-center font-black leading-[1.08] tracking-tight text-[36px] md:text-[54px] max-w-[900px]">
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
}