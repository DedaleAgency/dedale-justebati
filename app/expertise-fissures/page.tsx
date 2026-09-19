import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise fissures maison",
  description:
    "Fissures sur murs ou façade ? Cause, gravité et préconisations par un expert indépendant. Rapport exploitable — aucun travaux vendus. Demandez un devis.",
  alternates: {
    canonical: "/expertise-fissures",
  },
};

export default function ExpertiseFissuresPage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Expertise bâtiment
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Expertise fissures maison
          </h1>
          <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
            Une fissure n'est pas toujours structurelle. Elle n'est pas non plus toujours bénigne. L'expertise consiste à en établir la nature, la cause probable et la gravité, puis à formuler des préconisations.
          </p>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Justebati inspecte sur site, documente par photos et remet un rapport. Aucun travaux n'est vendu à l'issue de la mission.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Cause et gravité
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Selon le contexte, une fissure peut relever de :
          </p>
          <ul className="mb-4 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Retrait ou gonflement des argiles (sécheresse)</li>
            <li className="list-disc">Tassement différentiel des fondations</li>
            <li className="list-disc">Dilatation thermique, retrait de matériaux</li>
            <li className="list-disc">Défaut d'exécution ou surcharge locale</li>
            <li className="list-disc">Vieillissement de l'enduit (fissure cosmétique)</li>
          </ul>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le rapport distingue ce qui relève du cosmétique et ce qui engage la structure ou la stabilité. Cette distinction oriente les suites : surveillance, réparation, ou approfondissement.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Cosmétique ou structurel
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Une fissure d'enduit superficielle n'appelle pas la même réponse qu'une fissure traversante, en escalier, ou associée à des désordres sur ouvertures et planchers. L'expertise fixe le niveau d'alerte et les actions recommandées.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Lien avec la sécheresse et l'assurance
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Les désordres liés au retrait-gonflement des argiles font souvent l'objet de déclarations de sinistre. Un constat technique indépendant peut nourrir le dossier face à l'assureur.
          </p>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Justebati propose une assistance technique dans ce cadre. Nous ne promettons aucun résultat d'indemnisation.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Réparation ou vente de travaux de reprise</li>
            <li className="list-disc">Diagnostics réglementaires obligatoires</li>
            <li className="list-disc">Estimation immobilière</li>
            <li className="list-disc">Promesse de prise en charge assureur</li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Demander un devis
            </Link>
            <Link
              href="/assistance-expertise-assurance"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Assistance assurance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
