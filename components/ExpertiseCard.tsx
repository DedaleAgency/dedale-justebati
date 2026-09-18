import Link from "next/link";
import Image from "next/image";

interface ExpertiseCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export default function ExpertiseCard({
  title,
  description,
  href,
  imageUrl,
}: ExpertiseCardProps) {
  return (
    <Link
      href={href}
      className="group block border-t border-line/40 pt-6 transition-all hover:border-oxide/60"
    >
      {imageUrl && (
        <div className="relative mb-6 h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/30 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
        </div>
      )}
      <div>
        <h3 className="mb-4 text-2xl font-display leading-tight text-ink transition-colors group-hover:text-oxide">
          {title}
        </h3>
        <p className="mb-5 leading-relaxed text-mist">{description}</p>
        <div className="flex items-center gap-2 text-sm font-medium text-oxide">
          <span>En savoir plus</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
