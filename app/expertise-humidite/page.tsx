import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise humidité maison",
  description:
    "Humidité, moisissures, infiltrations : identification de la cause par un expert indépendant. Pas de vente de traitement. Rapport clair. Demandez un devis.",
  alternates: {
    canonical: "/expertise-humidite",
  },
};

export default function ExpertiseHumiditePage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Expertise bâtiment
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Expertise humidité maison
          </h1>
          <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
            Humidité, moisissures, salpêtre, infiltrations : le symptôme visible ne dit pas toujours la cause. Traiter sans identifier l'origine expose à des travaux inutiles ou incomplets.
          </p>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Justebati identifie la cause probable, documente les désordres et remet un rapport avec préconisations. Nous ne vendons aucun traitement ni aucun travaux.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Causes fréquentes
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Selon le bien, l'humidité peut provenir de :
          </p>
          <ul className="mb-4 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Remontées capillaires</li>
            <li className="list-disc">Infiltrations de façade, toiture ou menuiseries</li>
            <li className="list-disc">Condensation liée à la ventilation ou à l'occupation</li>
            <li className="list-disc">Fuites de réseaux</li>
            <li className="list-disc">Défauts d'étanchéité ou de drainage</li>
          </ul>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le rapport sépare observations, hypothèses et recommandations. Il précise ce qui relève d'une action corrective et ce qui demande une investigation complémentaire.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Pourquoi une expertise indépendante
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Beaucoup d'offres commerciales lient diagnostic et vente de solution (injection, cuvelage, déshumidificateur). Justebati s'arrête au diagnostic. Vous gardez la liberté de choisir l'entreprise et le procédé.
          </p>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Nous ne réalisons pas les diagnostics obligatoires (DPE, amiante…) ni d'estimation immobilière.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Livrable
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Rapport écrit, photos, analyse de cause, préconisations et, lorsque c'est pertinent, chiffrage des travaux à prévoir. Outil de décision, pas de vente.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Vente de traitements anti-humidité</li>
            <li className="list-disc">Réalisation de travaux</li>
            <li className="list-disc">Diagnostics réglementaires</li>
            <li className="list-disc">Estimation de valeur immobilière</li>
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
