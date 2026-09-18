import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

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
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Expertise humidité maison
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-mist">
              Taches, odeurs, moisissures, salpêtre, peinture qui cloque :
              l&apos;humidité a plusieurs causes, et le mauvais traitement coûte
              cher. Justebati identifie l&apos;origine probable du désordre —
              infiltration, condensation, remontées capillaires, défaut
              d&apos;étanchéité — et vous remet un rapport indépendant.
            </p>
            <p className="text-xl text-mist">
              Nous ne vendons aucun traitement ni travaux. Notre rôle
              s&apos;arrête à l&apos;expertise et aux préconisations.
            </p>

            <h2>Causes fréquentes (repères)</h2>
            <p>
              Sans se substituer à la visite, les situations rencontrées
              incluent souvent :
            </p>
            <ul>
              <li>
                <strong>Infiltrations</strong> : toiture, noues, façades,
                menuiseries, réseaux
              </li>
              <li>
                <strong>Condensation</strong> : ventilation insuffisante, ponts
                thermiques, usages
              </li>
              <li>
                <strong>Remontées capillaires</strong> : absence ou défaillance
                de rupture de capillarité, niveaux bas
              </li>
              <li>
                <strong>Défauts d&apos;étanchéité</strong> : terrasses, salles
                d&apos;eau, joints
              </li>
            </ul>
            <p>
              Chaque cause appelle une réponse différente. Traiter les symptômes
              sans la cause ne règle rien durablement — d&apos;où
              l&apos;intérêt d&apos;un constat neutre avant d&apos;engager des
              travaux.
            </p>

            <h2>Ce que l&apos;expert fait sur site</h2>
            <ul>
              <li>
                Relevés visuels et photographiques des zones touchées
              </li>
              <li>
                Lecture du contexte constructif (âge, matériaux, transformations)
              </li>
              <li>Recherche d&apos;indices de provenance de l&apos;eau</li>
              <li>
                Distinction entre désordre localisé et problème plus large
              </li>
              <li>
                Préconisations d&apos;investigations complémentaires si
                nécessaire
              </li>
              <li>Chiffrage des travaux à prévoir, selon les constats</li>
            </ul>
            <p>
              Justebati ne réalise pas les diagnostics obligatoires (DPE,
              amiante…) ni d&apos;estimation immobilière.
            </p>

            <h2>Rapport exploitable</h2>
            <p>
              Vous repartez avec un document écrit : constats, hypothèses de
              cause, niveau d&apos;urgence, pistes de remédiation et ordre de
              grandeur financier. De quoi dialoguer avec un artisan, un bureau
              d&apos;études ou votre assureur — sans pression commerciale de
              notre part.
            </p>

            <h2>Humidité et projet d&apos;achat</h2>
            <p>
              Une trace d&apos;humidité au moment de la visite d&apos;un bien à
              acquérir mérite un regard technique avant engagement. Voir aussi
              l&apos;
              <a href="/expertise-avant-achat">expertise avant achat</a>.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis humidité</Button>
            <Button href="/comment-ca-se-passe" variant="secondary">
              Voir comment se déroule une mission
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
            <Button href="/expertise-avant-achat" variant="secondary">
              Expertise avant achat
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
