import Link from "next/link";

interface MissionCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactElement;
}

export default function MissionCard({
  title,
  description,
  href,
  icon,
}: MissionCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-sm border border-border-on-paper bg-paper p-6 transition-all duration-base hover:border-copper hover:shadow-sm"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-surface text-copper">
        {icon}
      </div>
      <h3 className="mb-2 font-serif text-[20px] leading-[1.25] text-navy transition-colors duration-base group-hover:text-copper">
        {title}
      </h3>
      <p className="mb-4 text-[15px] leading-[1.6] text-navy-muted">
        {description}
      </p>
      <span className="text-[13px] font-semibold text-copper">
        En savoir plus →
      </span>
    </Link>
  );
}
