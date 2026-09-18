import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expertise malfaçons & réception",
  description:
    "Malfaçons, non-conformités, assistance à la réception : constat indépendant, réserves exploitables. Rapport technique — sans travaux à vendre. Devis.",
  alternates: {
    canonical: "/expertise-malfacons-reception",
  },
};

export default function ExpertiseMalfaconsPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Expertise malfaçons et réception de travaux
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-mist">
              Travaux mal exécutés, non-conformités, réception qui approche :
              Justebati établit un constat technique indépendant.
              L&apos;objectif est de documenter les désordres, de formuler des
              réserves exploitables et de vous donner un appui clair — pour
              négocier, faire reprendre, ou constituer un dossier.
            </p>
            <p className="text-xl text-mist">
              Nous ne vendons aucun travaux. Nous ne sommes pas
              l&apos;entreprise qui a réalisé le chantier.
            </p>

            <h2>Assistance à la réception</h2>
            <p>
              La réception est un moment décisif : c&apos;est souvent à cette
              étape que les réserves doivent être consignées. Une présence ou un
              passage d&apos;expert peut aider à :
            </p>
            <ul>
              <li>
                Repérer les non-conformités visibles et les désordres apparents
              </li>
              <li>
                Formuler des réserves précises, localisées et photographiées
              </li>
              <li>
                Distinguer le détail cosmétique du défaut à faire reprendre
              </li>
              <li>
                Préparer la suite (levée de réserves, échanges avec
                l&apos;entreprise)
              </li>
            </ul>
            <p>
              Selon le cadre du chantier (construction neuve, rénovation,
              extension), les enjeux juridiques et contractuels varient.
              Justebati apporte le regard technique ; votre conseil (avocat,
              notaire, association de consommateurs) reste compétent sur le
              droit.
            </p>

            <h2>Malfaçons après travaux</h2>
            <p>
              Si les travaux sont déjà livrés et que des désordres apparaissent
              — fissures, étanchéité, finitions, structure apparente —
              l&apos;expertise formalise le constat. Le rapport peut servir de
              base à une discussion amiable ou, le cas échéant, à un dossier
              plus formel. Voir aussi{" "}
              <a href="/litige-artisan">litige avec un artisan</a>.
            </p>

            <h2>CCMI, VEFA et cadres contractuels</h2>
            <p>
              Dans certains projets (notamment construction de maison
              individuelle ou acquisition en VEFA), la réception et les
              garanties légales suivent des règles spécifiques. Justebati
              n&apos;invente pas de procédure à votre place : nous documentons
              l&apos;état technique du bien et des ouvrages observés, pour que
              vous puissiez agir dans le cadre qui est le vôtre.
            </p>

            <h2>Ce que contient le rapport</h2>
            <ul>
              <li>
                Inventaire des désordres et non-conformités constatés
              </li>
              <li>Photos localisées</li>
              <li>Commentaires de gravité et d&apos;urgence</li>
              <li>
                Préconisations de reprise ou d&apos;investigations
              </li>
              <li>Chiffrage des travaux à prévoir, le cas échéant</li>
            </ul>
            <p>
              Justebati ne réalise pas les diagnostics obligatoires (DPE,
              amiante…) ni d&apos;estimation immobilière.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">
              Demander un devis malfaçons / réception
            </Button>
            <Button href="/litige-artisan" variant="secondary">
              Litige avec un artisan
            </Button>
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-display">
            Liens utiles
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/comment-ca-se-passe" variant="secondary">
              Comment ça se passe
            </Button>
            <Button href="/expertise-fissures" variant="secondary">
              Expertise fissures
            </Button>
            <Button href="/faq" variant="secondary">
              FAQ
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
