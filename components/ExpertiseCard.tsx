import Link from "next/link";

interface ExpertiseCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ExpertiseCard({
  title,
  description,
  href,
}: ExpertiseCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-copper"
    >
      <h3 className="mb-3 text-xl font-display text-ink group-hover:text-copper">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-stone">{description}</p>
      <span className="text-sm font-medium text-copper">En savoir plus →</span>
    </Link>
  );
}
