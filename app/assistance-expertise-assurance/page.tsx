import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Assistance expertise d'assurance et sinistre",
  description:
    "Sinistre sécheresse, dégât des eaux, litige d'indemnisation : assistance technique indépendante face à l'expert d'assurance. Devis.",
  alternates: {
    canonical: "/assistance-expertise-assurance",
  },
};

export default function AssistanceExpertiseAssurancePage() {
  return (
    <>
      <PageLayout>
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-M05" },
            { label: "Mission", value: "Assurance" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Sinistre & expertise contradictoire
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Assistance expertise d&apos;assurance et sinistre
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Face à un sinistre (sécheresse, dégât des eaux, fissures, catastrophe naturelle), vous
            avez le droit de faire appel à un expert indépendant pour vous assister lors de
            l&apos;expertise d&apos;assurance. Justebati documente les désordres et défend vos
            intérêts techniques face à l&apos;expert mandaté par votre compagnie.
          </p>

          <h2>Pourquoi se faire assister</h2>
          <p>
            L&apos;expert d&apos;assurance représente la compagnie. Son rapport conditionne
            l&apos;indemnisation. Vous avez intérêt à ce que les désordres soient correctement
            documentés, chiffrés et imputés. Un expert indépendant à vos côtés rééquilibre le
            dialogue technique.
          </p>
          <p>
            Justebati ne garantit aucun résultat d&apos;indemnisation — nous ne sommes pas
            avocats, ni représentants juridiques. Notre rôle est technique : documenter, étayer,
            contredire si nécessaire.
          </p>

          <h2>Les cas les plus fréquents</h2>
          <ul>
            <li>
              <strong>Sécheresse</strong> : fissures liées au retrait-gonflement des argiles,
              reconnaissance catastrophe naturelle
            </li>
            <li>
              <strong>Dégât des eaux</strong> : infiltration, fuite, rupture de canalisation
            </li>
            <li>
              <strong>Tempête</strong> : dommages toiture, menuiseries, structure
            </li>
            <li>
              <strong>Incendie</strong> : bilan structurel post-sinistre
            </li>
            <li>
              <strong>Litige d&apos;indemnisation</strong> : désaccord sur le montant ou la
              cause
            </li>
          </ul>

          <h2>Ce que fait l&apos;expert Justebati</h2>
          <ul>
            <li>Participation à la visite contradictoire avec l&apos;expert d&apos;assurance</li>
            <li>Documentation photographique et technique des désordres</li>
            <li>
              Qualification de la cause, de l&apos;étendue et de la gravité des désordres
            </li>
            <li>Chiffrage contradictoire des travaux de remise en état</li>
            <li>
              Rédaction d&apos;un rapport technique à joindre au dossier d&apos;indemnisation
            </li>
          </ul>

          <h2>Le rapport d&apos;expertise</h2>
          <p>
            Vous recevez un document écrit et illustré qui synthétise les constats, qualifie les
            désordres, contredit éventuellement l&apos;analyse de l&apos;expert d&apos;assurance,
            et chiffre les travaux nécessaires. Ce rapport peut être transmis à votre assureur ou à
            votre avocat.
          </p>

          <h2>Sécheresse : reconnaissance catastrophe naturelle</h2>
          <p>
            Si vous suspectez un sinistre sécheresse, l&apos;arrêté de catastrophe naturelle est un
            préalable à l&apos;indemnisation. L&apos;expertise Justebati documente les fissures et
            leur lien probable avec le retrait-gonflement des argiles. Nous ne déclenchons pas
            l&apos;arrêté cat-nat (c&apos;est une décision préfectorale), mais nous étayons votre
            dossier.
          </p>

          <h2>Pour qui ?</h2>
          <p>
            Assurés en sinistre (sécheresse, dégât des eaux, tempête, incendie) ou en litige
            d&apos;indemnisation avec leur compagnie, qui veulent un appui technique indépendant
            lors de l&apos;expertise contradictoire.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander une assistance sinistre</Link>
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
              <Link href="/expertise-fissures">Expertise fissures</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/litige-artisan">Litige avec un artisan</Link>
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
