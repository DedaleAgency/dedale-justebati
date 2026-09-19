import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Expertise malfaçons et réception de travaux",
  description:
    "Assistance à la réception, constat malfaçons, réserves : expertise indépendante pour défendre vos intérêts. Aucun travaux à vendre. Devis.",
  alternates: {
    canonical: "/expertise-malfacons-reception",
  },
};

export default function ExpertiseMalfaconsReceptionPage() {
  return (
    <>
      <PageLayout>
        <PageHero
          imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Détails de finitions sur mur et joints"
        />
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-M04" },
            { label: "Mission", value: "Malfaçons" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Réception & conformité
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Expertise malfaçons et réception de travaux
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            À la réception d&apos;un chantier ou face à des malfaçons, vous avez besoin d&apos;un
            œil technique neutre. Justebati établit un constat indépendant des désordres,
            non-conformités et réserves. Sans lien avec l&apos;entreprise.
          </p>

          <h2>Assistance à la réception</h2>
          <p>
            La réception de travaux est un moment clé : vous constatez la conformité au devis, la
            finition, les éventuels désordres apparents. Passé ce délai, certaines réclamations
            deviennent plus complexes. Justebati peut vous accompagner pour établir un procès-verbal
            de réserves étayé et photographié.
          </p>

          <h2>Constat malfaçons après réception</h2>
          <p>
            Vous avez réceptionné un chantier et découvrez ensuite des malfaçons : défaut
            d&apos;étanchéité, fissures post-travaux, non-respect du DTU, finitions bâclées.
            L&apos;expert Justebati documente les désordres, qualifie leur nature (apparent,
            vice caché, non-conformité) et vous aide à constituer un dossier solide pour négocier ou
            engager une action.
          </p>

          <h2>Ce que l&apos;expert inspecte</h2>
          <ul>
            <li>Conformité apparente au devis et aux règles de l&apos;art</li>
            <li>Finitions : enduits, peintures, joints, menuiseries</li>
            <li>Étanchéité : toiture, terrasse, menuiseries, salles d&apos;eau</li>
            <li>
              Désordres structurels ou fonctionnels : fissures, déformations, infiltrations
            </li>
            <li>Points de non-conformité technique (DTU, normes)</li>
          </ul>

          <h2>Le rapport d&apos;expertise</h2>
          <p>
            Vous recevez un document écrit et illustré qui décrit les désordres constatés, qualifie
            leur gravité (apparent, vice caché, non-conformité), et propose des préconisations de
            remise en conformité. Le chiffrage des travaux correctifs est donné à titre indicatif —
            Justebati ne les réalise pas.
          </p>

          <h2>Justebati ne remplace pas un avocat ou un expert judiciaire</h2>
          <p>
            Notre mission est technique : nous documentons les désordres de manière indépendante.
            Si un litige aboutit devant le tribunal, un expert judiciaire sera désigné. Le rapport
            Justebati peut servir de base à votre dossier, mais ne s&apos;y substitue pas.
          </p>

          <h2>Pour qui ?</h2>
          <p>
            Maîtres d&apos;ouvrage en phase de réception, propriétaires confrontés à des malfaçons
            après travaux, ou particuliers en litige avec une entreprise qui veulent un constat
            technique neutre.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un constat malfaçons</Link>
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
              <Link href="/litige-artisan">Litige avec un artisan</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/expertise-avant-achat">Expertise avant achat</Link>
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
