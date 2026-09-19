import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Expertise fissures maison",
  description:
    "Fissure sur votre bien : cause, gravité, évolution ? Expertise indépendante fissures maison et appartement. Rapport clair — aucun travaux à vendre.",
  alternates: {
    canonical: "/expertise-fissures",
  },
};

export default function ExpertiseFissuresPage() {
  return (
    <>
      <PageLayout>
        <PageHero
          imageSrc="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
          imageAlt="Fissure sur mur en béton, détail de pathologie"
        />
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-M02" },
            { label: "Mission", value: "Fissures" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Diagnostic fissures
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Expertise fissures maison
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Une fissure peut être cosmétique ou révéler un désordre structurel. L&apos;expert
            Justebati inspecte le bien, identifie la cause probable, évalue la gravité et propose
            un suivi ou une réparation adaptée. Sans vendre de travaux.
          </p>

          <h2>Quand faire appel à un expert fissures</h2>
          <p>
            Vous venez de constater une fissure sur votre bien (mur, façade, plafond, dalle). Vous
            vous demandez si elle évolue, si elle nécessite des travaux, si elle peut affecter la
            solidité ou la valeur du bâti. Justebati ne réalise pas les travaux : nous apportons le
            regard technique neutre pour comprendre et décider.
          </p>

          <h2>Ce que l&apos;expert analyse</h2>
          <ul>
            <li>Localisation et orientation de la fissure</li>
            <li>Ouverture, profondeur, tracé</li>
            <li>Indices d&apos;évolution (jauges, photos anciennes si disponibles)</li>
            <li>
              Contexte : nature du sol, fondations, sinistres antérieurs, travaux récents, climat
            </li>
            <li>Présence de désordres associés (humidité, déformation, épaufrures)</li>
          </ul>

          <h2>Les causes les plus fréquentes</h2>
          <p>
            Les fissures peuvent avoir plusieurs origines : retrait/gonflement d&apos;argile
            (sécheresse), tassement différentiel, défaut de fondation, poussée latérale, infiltration
            répétée, malfaçon de construction, ou simple retrait thermique. L&apos;expert croise les
            indices pour établir une hypothèse de cause.
          </p>

          <h2>Le rapport d&apos;expertise</h2>
          <p>
            Vous recevez un document écrit et illustré qui décrit les fissures constatées,
            hiérarchise leur gravité, expose la ou les causes probables, et recommande une conduite
            : surveillance simple, réparation cosmétique, ou intervention structurelle. Le chiffrage
            des travaux est donné à titre indicatif — Justebati ne les réalise pas.
          </p>

          <h2>Fissure structurelle ou cosmétique ?</h2>
          <p>
            Une fissure fine et stable, sans ouverture évolutive, peut être cosmétique. Une fissure
            traversante, en escalier, ou accompagnée de déformation nécessite une attention
            particulière. L&apos;expert vous aide à faire la distinction.
          </p>

          <h2>Cas particulier : sécheresse et catastrophe naturelle</h2>
          <p>
            Si vous suspectez un sinistre sécheresse (reconnaissance cat-nat), l&apos;expertise
            Justebati peut servir de base à votre déclaration auprès de l&apos;assureur. Nous ne
            remplaçons pas l&apos;expert d&apos;assurance, mais nous documentons les désordres de
            manière indépendante.
          </p>

          <h2>Pour qui ?</h2>
          <p>
            Propriétaires confrontés à des fissures sur maison ou appartement, en phase
            d&apos;observation ou en litige, qui veulent un avis technique neutre avant
            d&apos;engager des travaux ou de constituer un dossier.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander une expertise fissures</Link>
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
              <Link href="/expertise-avant-achat">Expertise avant achat</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/expertise-humidite">Expertise humidité</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/assistance-expertise-assurance">Assistance assurance</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
