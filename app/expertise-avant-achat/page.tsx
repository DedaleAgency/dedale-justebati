import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expertise avant achat | Expert bâtiment Justebati",
  description:
    "Sécurisez votre achat : bilan technique indépendant avant compromis. Fissures, humidité, structure. Rapport clair — sans travaux à vendre. Devis.",
  alternates: {
    canonical: "/expertise-avant-achat",
  },
};

export default function ExpertiseAvantAchatPage() {
  return (
    <>
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
              Expertise bâtiment
            </div>
            <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
              Expertise avant achat immobilier
            </h1>
            <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
              Avant de signer le compromis, un bilan technique indépendant permet de connaître l'état réel du bien : structure, enveloppe, humidité, toiture, points de vigilance visibles.
            </p>
            <p className="mb-8 text-base leading-[1.65] text-navy-muted">
              Justebati réalise cette inspection sur site et remet un rapport écrit avec photos et estimation des travaux à prévoir. Nous ne vendons aucun travaux.
            </p>

            <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
              Ce que couvre le bilan
            </h2>
            <p className="mb-4 text-base leading-[1.65] text-navy-muted">
              Selon le bien et l'accès, l'expertise peut porter sur :
            </p>
            <ul className="mb-4 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
              <li className="list-disc">Fissures et signes de mouvement</li>
              <li className="list-disc">Humidité, infiltrations, moisissures</li>
              <li className="list-disc">Toiture, charpente, couverture (parties visibles)</li>
              <li className="list-disc">Structure et éléments porteurs accessibles</li>
              <li className="list-disc">Malfaçons ou défauts d'exécution apparents</li>
              <li className="list-disc">Points à surveiller ou à faire vérifier par un spécialiste</li>
            </ul>
            <p className="mb-6 text-base leading-[1.65] text-navy-muted">
              Le périmètre exact est confirmé avant la mission.
            </p>

            <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
              Différence avec un diagnostiqueur
            </h2>
            <p className="mb-4 text-base leading-[1.65] text-navy-muted">
              Les diagnostics obligatoires (DPE, amiante, plomb, etc.) répondent à une obligation légale de vente. L'expertise avant achat répond à une question différente : l'état pathologique du bâti, la gravité des désordres, le coût prévisible des remises en état.
            </p>
            <p className="mb-6 text-base leading-[1.65] text-navy-muted">
              Justebati ne réalise pas les diagnostics réglementaires. Les deux démarches sont complémentaires, pas interchangeables.
            </p>

            <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
              Livrable
            </h2>
            <p className="mb-4 text-base leading-[1.65] text-navy-muted">
              Un rapport clair, daté, illustré de photos. Il distingue les observations, les hypothèses techniques et les préconisations. Un chiffrage des travaux à prévoir accompagne le diagnostic lorsque les éléments le permettent.
            </p>
            <p className="mb-6 text-base leading-[1.65] text-navy-muted">
              Ce rapport vous aide à décider, à négocier, ou à demander des informations complémentaires au vendeur. Il ne constitue pas une estimation immobilière.
            </p>

            <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
              Ce que Justebati ne fait pas
            </h2>
            <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
              <li className="list-disc">Vente de travaux</li>
              <li className="list-disc">Diagnostics obligatoires (DPE, amiante…)</li>
              <li className="list-disc">Estimation de valeur du bien</li>
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
    </>
  );
}
