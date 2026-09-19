import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-night text-on-night">
      <div className="mx-auto px-6 py-12 lg:px-12 lg:py-16">
        <div className="grid gap-10 border-b border-[#2A2824] pb-9 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="mb-3 font-display text-[22px] font-bold">JusteBati</div>
            <p className="max-w-[36ch] text-[13px] leading-relaxed text-on-night/55">
              Cabinet d&apos;expertise bâtiment indépendant pour particuliers. Aucun travaux à vendre.
            </p>
          </div>

          <div>
            <h4 className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.08em] text-oxide">
              Missions
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/expertise-avant-achat", label: "Avant achat" },
                { href: "/expertise-fissures", label: "Fissures" },
                { href: "/expertise-humidite", label: "Humidité" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-on-night/80 transition-colors hover:text-on-night"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.08em] text-oxide">
              Cabinet
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/lexpert", label: "L'expert" },
                { href: "/comment-ca-se-passe", label: "Méthode" },
                { href: "/faq", label: "FAQ" },
                { href: "/mentions-legales", label: "Mentions légales" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-on-night/80 transition-colors hover:text-on-night"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 font-mono text-[10px] uppercase tracking-[0.06em] text-on-night/40">
          <span>JB · Colophon</span>
          <span>France · 2026</span>
          <span>Indépendant</span>
        </div>
      </div>
    </footer>
  );
}
