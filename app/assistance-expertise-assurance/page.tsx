import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expertise sinistre & sécheresse",
  description:
    "Sinistre, sécheresse, refus d'indemnisation : assistance technique indépendante face à l'assureur. Rapport clair pour défendre votre dossier. Devis.",
  alternates: {
    canonical: "/assistance-expertise-assurance",
  },
};

export default function AssistanceExpertiseAssurancePage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Assistance expertise d&apos;assurance et sinistre
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-mist">
              Face à un sinistre — dégât des eaux, événement climatique,
              sécheresse et fissures associées — l&apos;assureur mandate souvent
              son propre expert. Vous pouvez, de votre côté, vous faire assister
              par un expert indépendant. Justebati apporte un regard technique
              neutre pour documenter les désordres et éclairer votre dossier.
            </p>
            <p className="text-xl font-semibold text-ink">
              Important : Justebati ne promet aucune indemnisation, aucun
              montant, ni aucun résultat face à la compagnie. Notre rôle est
              technique : constater, analyser, formaliser.
            </p>

            <h2>À quoi sert l&apos;assistance technique ?</h2>
            <ul>
              <li>
                Décrire les désordres de façon précise et photographiée
              </li>
              <li>
                Proposer une lecture constructive des causes apparentes
              </li>
              <li>
                Préparer ou accompagner les échanges contradictoires sur le plan
                technique
              </li>
              <li>
                Disposer d&apos;un rapport exploitable pour votre conseil ou
                votre assureur
              </li>
            </ul>
            <p>
              Vous restez maître des décisions (déclaration, négociation,
              recours). L&apos;expertise indépendante renforce la clarté du
              débat ; elle ne le remplace pas.
            </p>

            <h2>Sécheresse et fissures</h2>
            <p>
              Les épisodes de sécheresse peuvent s&apos;accompagner de
              mouvements de sol et de fissuration du bâti. Une{" "}
              <a href="/expertise-fissures">expertise fissures</a> peut
              s&apos;inscrire dans ce contexte, seule ou en lien avec une
              procédure d&apos;assurance. Là encore : constat et analyse, sans
              promesse d&apos;indemnisation.
            </p>

            <h2>Ce que Justebati ne fait pas</h2>
            <ul>
              <li>
                Défendre juridiquement votre dossier (rôle de l&apos;avocat ou
                du conseil)
              </li>
              <li>Vendre des travaux de réparation</li>
              <li>
                Réaliser les diagnostics obligatoires (DPE, amiante…) ou une
                estimation immobilière
              </li>
              <li>
                Garantir l&apos;issue d&apos;une négociation avec
                l&apos;assureur
              </li>
            </ul>

            <h2>Déroulement type</h2>
            <p>
              Contact et cadrage de la mission → visite et constats → analyse →
              rapport écrit. Le détail est sur{" "}
              <a href="/comment-ca-se-passe">
                Comment se déroule une expertise
              </a>
              .
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">
              Demander un devis assistance sinistre
            </Button>
            <Button href="/expertise-fissures" variant="secondary">
              Expertise fissures
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
            <Button href="/litige-artisan" variant="secondary">
              Litige artisan
            </Button>
            <Button href="/comment-ca-se-passe" variant="secondary">
              Comment ça se passe
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
