import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'expert bâtiment",
  description:
    "Parcours, indépendance et méthode de l'expert Justebati. Une expertise au service des particuliers — sans aucun travaux à vendre. Contactez-nous.",
  alternates: {
    canonical: "/lexpert",
  },
};

export default function LexpertPage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Le cabinet
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            L'expert Justebati
          </h1>
          <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
            Justebati est un cabinet d'expertise bâtiment dédié aux particuliers. La méthode prime sur la mise en avant personnelle : observation sur site, analyse rigoureuse, rapport clair.
          </p>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Nous n'inventons pas de biographie. Les éléments de parcours, formations et qualifications seront publiés lorsqu'ils auront été fournis et validés.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Indépendance
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Le principe est simple : Justebati ne vend aucun travaux. Pas d'entreprise partenaire à recommander contre commission. Pas de pression commerciale liée à un chiffre d'affaires « travaux ».
          </p>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Cette indépendance conditionne la qualité du conseil. Le rapport décrit ce que le bâtiment présente, pas ce qu'il faudrait vendre.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Méthode
          </h2>
          <ol className="mb-6 ml-6 space-y-3 text-base leading-[1.65] text-navy-muted">
            <li className="list-decimal"><strong>Écoute du besoin</strong> — type de mission, urgence, documents déjà disponibles.</li>
            <li className="list-decimal"><strong>Visite sur site</strong> — inspection méthodique, relevés, photographies.</li>
            <li className="list-decimal"><strong>Analyse</strong> — distinction entre observations, hypothèses et conclusions.</li>
            <li className="list-decimal"><strong>Chiffrage</strong> — estimation des travaux à prévoir lorsque les éléments le permettent.</li>
            <li className="list-decimal"><strong>Rapport</strong> — document écrit, structuré, exploitable pour décider ou négocier.</li>
          </ol>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le détail du déroulé figure sur la page Comment ça se passe.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Travaux et vente de traitements</li>
            <li className="list-disc">Diagnostics obligatoires (DPE, amiante…)</li>
            <li className="list-disc">Estimation immobilière</li>
            <li className="list-disc">Promesse d'indemnisation en sinistre</li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Demander un devis
            </Link>
            <Link
              href="/comment-ca-se-passe"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Voir le déroulement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
