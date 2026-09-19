import Link from "next/link";

interface MissionRowProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export default function MissionRow({ number, title, description, href }: MissionRowProps) {
  return (
    <Link
      href={href}
      className="grid grid-cols-[80px_1fr_1.1fr_120px] items-center gap-6 border-b border-line px-6 py-7 transition-colors hover:bg-sand lg:px-12 lg:gap-8"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-oxide">
        {number}
      </span>
      <h3 className="font-sans text-[1.05rem] font-semibold leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-mist">
        {description}
      </p>
      <span className="text-right font-mono text-[11px] uppercase tracking-[0.06em] text-ink">
        En savoir plus →
      </span>
    </Link>
  );
}
