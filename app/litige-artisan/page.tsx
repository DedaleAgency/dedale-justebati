import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Litige artisan",
  description:
    "Conflit avec un artisan ou une entreprise ? Constat technique indépendant pour négocier ou constituer un dossier. Aucun travaux à vendre. Devis.",
  alternates: {
    canonical: "/litige-artisan",
  },
};

export default function LitigeArtisanPage() {
  return (
    <>
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mb-12">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/mur-01.jpg"
                alt="Détail de mur et maçonnerie - litige artisan"
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
            Litige avec un artisan : expert bâtiment
          </h1>
          <p className="mb-8 text-[17px] leading-[1.65] text-navy-muted">
            Désaccord sur la qualité des travaux, retards, non-conformités, facturation contestée liée à des désordres : un constat technique indépendant clarifie les faits.
          </p>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Justebati dresse ce constat. Le rapport peut servir à négocier à l'amiable ou à alimenter un dossier plus formel avec votre conseil. Nous ne vendons aucun travaux.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            À quoi sert le constat
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Décrire objectivement les désordres</li>
            <li className="list-disc">Les illustrer par des photos datées</li>
            <li className="list-disc">Distinguer ce qui est établi, ce qui est probable, ce qui reste à vérifier</li>
            <li className="list-disc">Formuler des préconisations techniques et, si pertinent, un chiffrage des reprises</li>
          </ul>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le rapport ne remplace pas un avis juridique. Il fournit la base technique sur laquelle s'appuyer.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Amiable, puis éventuelle suite
          </h2>
          <p className="mb-4 text-base leading-[1.65] text-navy-muted">
            Dans de nombreux cas, un constat clair ouvre une discussion constructive avec l'entreprise. Si le litige s'intensifie, le même document peut nourrir une expertise amiable ou contradictoire, selon les décisions que vous prenez avec votre conseil.
          </p>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Pour les désordres liés à une réception ou à des malfaçons clairement identifiées, voir aussi la page malfaçons et réception.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Indépendance
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Justebati n'est lié ni à l'artisan, ni à une entreprise de reprise. Aucune commission, aucun travaux vendus. Nous ne réalisons pas les diagnostics obligatoires ni d'estimation immobilière.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Reprise des travaux</li>
            <li className="list-disc">Médiation juridique ou représentation</li>
            <li className="list-disc">Promesse d'issue favorable au litige</li>
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
              href="/expertise-malfacons-reception"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Expertise malfaçons
            </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
