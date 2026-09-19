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
      className="grid grid-cols-[60px_1fr] items-start gap-4 border-b border-line px-6 py-7 transition-colors hover:bg-sand lg:grid-cols-[80px_1fr_1.1fr_120px] lg:items-center lg:gap-8 lg:px-12"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-oxide">
        {number}
      </span>
      <div className="min-w-0">
        <h3 className="mb-1 font-sans text-[1.05rem] font-semibold leading-tight tracking-tight">
          {title}
        </h3>
        <p className="mb-2 text-[14px] leading-relaxed text-mist lg:mb-0">
          {description}
        </p>
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.06em] text-ink lg:hidden">
          En savoir plus →
        </span>
      </div>
      <p className="hidden text-[14px] leading-relaxed text-mist lg:block">
        {description}
      </p>
      <span className="hidden text-right font-mono text-[11px] uppercase tracking-[0.06em] text-ink lg:block">
        En savoir plus →
      </span>
    </Link>
  );
}
