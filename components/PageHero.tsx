import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({ imageSrc, imageAlt }: PageHeroProps) {
  return (
    <div className="relative -mx-6 mb-8 h-[32vh] overflow-hidden border-b border-ink lg:-mx-12 lg:h-[40vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        style={{ filter: "saturate(0.48) contrast(1.08)" }}
      />
    </div>
  );
}
