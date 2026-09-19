import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Litige avec un artisan",
  description:
    "Désaccord, malfaçons, travaux mal réalisés : constat technique indépendant pour négocier ou constituer un dossier. Aucun travaux à vendre.",
  alternates: {
    canonical: "/litige-artisan",
  },
};

export default function LitigeArtisanPage() {
  return (
    <>
      <PageLayout>
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-M06" },
            { label: "Mission", value: "Litige" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Constat contradictoire
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Expertise litige avec un artisan
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Désaccord sur la qualité des travaux, malfaçons, non-respect du devis, abandon de
            chantier : vous avez besoin d&apos;un constat technique neutre pour négocier à
            l&apos;amiable ou constituer un dossier solide. Justebati documente les désordres sans
            lien avec l&apos;entreprise.
          </p>

          <h2>Pourquoi faire constater un litige</h2>
          <p>
            Avant d&apos;engager une procédure (médiateur, conciliateur, tribunal), vous devez
            étayer vos griefs : photos, description technique des désordres, qualification des
            non-conformités, chiffrage des travaux correctifs. Un rapport d&apos;expertise
            indépendant solidifie votre position.
          </p>
          <p>
            Justebati ne se substitue pas à un avocat, un médiateur ou un expert judiciaire. Notre
            mission est technique : documenter les désordres de manière indépendante pour vous aider
            à négocier ou à constituer un dossier.
          </p>

          <h2>Les motifs de litige les plus courants</h2>
          <ul>
            <li>Malfaçons apparentes : finitions bâclées, défauts visibles</li>
            <li>Non-conformité au devis ou aux règles de l&apos;art (DTU)</li>
            <li>Désordres fonctionnels : infiltrations, défaut d&apos;étanchéité</li>
            <li>Abandon de chantier ou retard excessif</li>
            <li>Désaccord sur le montant final ou les prestations réalisées</li>
          </ul>

          <h2>Ce que l&apos;expert fait</h2>
          <ul>
            <li>Visite du chantier et relevé photographique des désordres</li>
            <li>Description technique et qualification des non-conformités</li>
            <li>Comparaison avec le devis, le DTU, les règles de l&apos;art</li>
            <li>Chiffrage des travaux correctifs ou de reprise nécessaires</li>
            <li>Rédaction d&apos;un rapport écrit exploitable pour négocier ou engager une action</li>
          </ul>

          <h2>Le rapport d&apos;expertise</h2>
          <p>
            Vous recevez un document écrit et illustré qui décrit les désordres constatés, qualifie
            leur gravité, évalue le coût des travaux correctifs et vous aide à argumenter votre
            position. Ce rapport peut être transmis à l&apos;artisan, au médiateur, à votre
            assurance de protection juridique ou à votre avocat.
          </p>

          <h2>Négociation amiable ou judiciaire</h2>
          <p>
            Dans la majorité des cas, un rapport technique indépendant permet de débloquer une
            négociation amiable. Si le litige aboutit devant le tribunal, un expert judiciaire sera
            désigné par le juge. Le rapport Justebati peut servir de base à votre dossier, mais ne
            s&apos;y substitue pas.
          </p>

          <h2>Pour qui ?</h2>
          <p>
            Particuliers en désaccord avec un artisan ou une entreprise, en phase de négociation ou
            de constitution de dossier, qui veulent un constat technique neutre pour défendre leurs
            intérêts.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un constat litige</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/comment-ca-se-passe">Comment ça se passe</Link>
          </Button>
        </div>
      </PageLayout>

      <div className="border-b border-ink bg-sand px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-[1.5rem] font-medium">Liens utiles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary">
              <Link href="/expertise-malfacons-reception">Malfaçons et réception</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/assistance-expertise-assurance">Assistance assurance</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
