import Image from "next/image";

interface SeqPhotoProps {
  wideImage: string;
  wideAlt: string;
  detailImage: string;
  detailAlt: string;
}

export default function SeqPhoto({ wideImage, wideAlt, detailImage, detailAlt }: SeqPhotoProps) {
  return (
    <section
      className="grid border-b border-ink lg:grid-cols-[1.3fr_1fr]"
      aria-label="Distance vers preuve"
    >
      <div className="relative min-h-[420px] overflow-hidden">
        <Image
          src={wideImage}
          alt={wideAlt}
          fill
          className="object-cover"
          style={{ filter: "saturate(0.55) contrast(1.06)" }}
        />
        <div className="absolute left-4 top-4 border border-ink bg-paper px-[10px] py-[6px] font-mono text-[11px] uppercase tracking-[0.06em]">
          A · Distance
        </div>
      </div>
      <div className="relative min-h-[420px] overflow-hidden border-t border-ink lg:border-l lg:border-t-0">
        <Image
          src={detailImage}
          alt={detailAlt}
          fill
          className="object-cover"
          style={{
            filter: "saturate(0.4) contrast(1.12)",
            clipPath: "polygon(0 0, 100% 0, 100% 86%, 88% 100%, 0 100%)",
          }}
        />
        <div className="absolute left-4 top-4 border border-ink bg-paper px-[10px] py-[6px] font-mono text-[11px] uppercase tracking-[0.06em]">
          B · Preuve
        </div>
      </div>
    </section>
  );
}
