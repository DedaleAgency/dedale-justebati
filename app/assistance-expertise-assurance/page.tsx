import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise sinistre & sécheresse",
  description:
    "Sinistre, sécheresse, refus d'indemnisation : assistance technique indépendante face à l'assureur. Rapport clair pour défendre votre dossier. Devis.",
  alternates: {
    canonical: "/assistance-expertise-assurance",
  },
};

export default function AssistanceAssurancePage() {
  return (
    <>
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mb-12">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/beton-01.jpg"
                alt="Détail de structure béton - assistance expertise assurance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
              Expertise bâtiment
            </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Assistance expertise d'assurance et sinistre
          </h1>
          <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
            Face à un sinistre (sécheresse, dégât des eaux, autre désordre déclaré), l'assureur mandate souvent son propre expert. Vous pouvez vous faire assister d'un expert technique indépendant pour documenter votre position.
          </p>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Justebati fournit une assistance technique : constat, analyse, rapport. Nous ne promettons aucun résultat d'indemnisation ni aucun montant de prise en charge.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que couvre l'assistance
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Selon le dossier :
          </p>
          <ul className="mb-4 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Constat des désordres et documentation photographique</li>
            <li className="list-disc">Analyse technique des causes probables</li>
            <li className="list-disc">Lecture critique des éléments transmis par l'assureur ou son expert</li>
            <li className="list-disc">Rapport exploitable pour votre dossier (amiable ou, le cas échéant, avec votre conseil)</li>
          </ul>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le périmètre est fixé avant mission. Il dépend du type de sinistre et de l'état du dossier.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Sécheresse et fissures
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Les sinistres liés au retrait-gonflement des argiles associent souvent fissures et procédure d'assurance. L'expertise fissures et l'assistance sinistre se complètent.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Indépendance
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Justebati n'est pas lié à un assureur. Nous ne vendons aucun travaux de réparation. Le rapport reste un outil technique au service du particulier.
          </p>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Nous ne réalisons pas les diagnostics obligatoires ni d'estimation immobilière.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas — et ne promet pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Aucune promesse d'indemnisation ou de « gain » face à l'assureur</li>
            <li className="list-disc">Aucune vente de travaux de reprise</li>
            <li className="list-disc">Aucun conseil juridique (rôle de l'avocat)</li>
            <li className="list-disc">Diagnostics réglementaires et estimation immobilière</li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Demander un devis
            </Link>
            <Link
              href="/expertise-fissures"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Expertise fissures
            </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
