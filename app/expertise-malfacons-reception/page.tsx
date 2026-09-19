import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise malfaçons & réception | Justebati",
  description:
    "Malfaçons, non-conformités, assistance à la réception : constat indépendant, réserves exploitables. Rapport technique — sans travaux à vendre. Devis.",
  alternates: {
    canonical: "/expertise-malfacons-reception",
  },
};

export default function ExpertiseMalfaconsPage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Expertise bâtiment
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Expertise malfaçons et réception de travaux
          </h1>
          <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
            Travaux mal exécutés, non-conformités, réception à préparer ou à sécuriser : Justebati dresse un constat technique indépendant. Le rapport documente les désordres et formule des réserves exploitables.
          </p>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Nous ne vendons aucun travaux. Notre mission s'arrête au constat et au conseil.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Malfaçons
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            L'expertise peut porter sur :
          </p>
          <ul className="mb-4 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Défauts d'exécution visibles</li>
            <li className="list-disc">Non-conformités aux règles de l'art ou aux documents contractuels</li>
            <li className="list-disc">Désordres sur ouvrages neufs ou rénovés</li>
            <li className="list-disc">Points à formuler en réserves avant ou après réception</li>
          </ul>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le rapport décrit les faits, les photographie et indique les suites techniques recommandées. Il peut servir de base à une discussion amiable ou à un dossier plus formel.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Assistance à la réception
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            La réception est un moment décisif : elle déclenche les garanties et fige une partie des recours. Une assistance indépendante permet de relever les réserves avant de lever les clés ou de signer sans réserve.
          </p>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Selon le contexte (maison neuve, rénovation, extension), le périmètre de visite est défini à l'avance.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Lien avec un litige artisan
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Si le désaccord avec l'entreprise s'installe, le constat technique nourrit la négociation ou le dossier. Voir aussi la page litige artisan.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Reprise des travaux ou vente d'interventions</li>
            <li className="list-disc">Diagnostics réglementaires obligatoires</li>
            <li className="list-disc">Estimation immobilière</li>
            <li className="list-disc">Conseil juridique (rôle de l'avocat ou du conseil du client)</li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Demander un devis
            </Link>
            <Link
              href="/litige-artisan"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Litige avec un artisan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
