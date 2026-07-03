interface Props {
    label: string;
    headline?: string;
    body: string | string[];
    isList?: boolean;
  }
  
  export default function CaseTextBlock({ label, headline, body, isList = false }: Props) {
    return (
      <section className="w-full py-[120px] md:py-[180px] max-w-[1440px] mx-auto px-[20px] md:px-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-start-7 md:col-span-6 flex flex-col gap-6 max-w-[760px]">
            <span className="uppercase text-[12px] font-bold tracking-[0.08em] text-foreground block mb-2">
              [{label}]
            </span>
            
            {headline && (
              <h2 className="text-[clamp(38px,4vw,72px)] font-black leading-[0.98] tracking-[-0.055em] text-foreground mb-4">
                {headline}
              </h2>
            )}
            
            {isList && Array.isArray(body) ? (
              <ul className="flex flex-col gap-0 border-t border-foreground/15 mt-4">
                {body.map((item, idx) => (
                  <li key={idx} className="text-[15px] md:text-[17px] leading-[1.8] text-foreground font-medium py-6 border-b border-foreground/15">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[15px] md:text-[17px] leading-[1.8] text-muted font-medium mt-4">
                {body}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }