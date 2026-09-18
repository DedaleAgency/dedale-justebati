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
      className="group block overflow-hidden rounded-lg border border-line bg-paper transition-all hover:-translate-y-0.5 hover:border-oxide"
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-display text-ink group-hover:text-oxide">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-mist">{description}</p>
        <span className="text-sm font-medium text-oxide">En savoir plus →</span>
      </div>
    </Link>
  );
}
