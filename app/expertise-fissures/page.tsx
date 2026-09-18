import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expertise fissures maison",
  description:
    "Fissures sur murs ou façade ? Cause, gravité et préconisations par un expert indépendant. Rapport exploitable — aucun travaux vendus. Demandez un devis.",
  alternates: {
    canonical: "/expertise-fissures",
  },
};

export default function ExpertiseFissuresPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Expertise fissures maison
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-mist">
              Une fissure sur un mur, une façade ou un plafond inquiète — à
              juste titre. Toutes ne menacent pas la structure. Certaines
              signalent un mouvement du sol, un défaut constructif ou un
              sinistre (dont sécheresse). Justebati établit un constat technique
              indépendant : cause probable, gravité, suivi ou réparation, et
              préconisations claires.
            </p>
            <p className="text-xl text-mist">
              Nous ne vendons aucun travaux. Le rapport sert à comprendre et à
              agir — pas à vous vendre un chantier.
            </p>

            <h2>Cosmétique ou structurel ?</h2>
            <p>L&apos;expertise distingue notamment :</p>
            <ul>
              <li>
                <strong>Fissures de surface</strong> : enduit, peinture, retrait
                de matériaux — souvent sans enjeu structurel immédiat
              </li>
              <li>
                <strong>Fissures traversantes ou évolutives</strong> : indices
                de mouvement, tassement, poussée, ou désordre plus profond
              </li>
              <li>
                <strong>Fissures en lien avec le sol</strong> : argiles,
                sécheresse, drainage — à croiser avec le contexte du site
              </li>
            </ul>
            <p>
              L&apos;ouverture, l&apos;orientation, la localisation (angles,
              ouvertures, joints) et l&apos;historique du bien guident
              l&apos;analyse. L&apos;objectif : hiérarchiser le risque, pas
              dramatiser ni minimiser.
            </p>

            <h2>Ce que contient le rapport</h2>
            <ul>
              <li>Description et cartographie des désordres observés</li>
              <li>Hypothèses de cause documentées par les constats</li>
              <li>Appréciation de la gravité et des urgences</li>
              <li>
                Préconisations (surveillance, investigations complémentaires,
                principes de réparation)
              </li>
              <li>Chiffrage des travaux à prévoir, le cas échéant</li>
              <li>Illustrations photographiques</li>
            </ul>
            <p>
              Justebati ne réalise pas les diagnostics obligatoires (DPE,
              amiante…) ni d&apos;estimation immobilière.
            </p>

            <h2>Lien avec la sécheresse et l&apos;assurance</h2>
            <p>
              Certaines fissures s&apos;inscrivent dans un contexte de
              retrait-gonflement des argiles ou de sinistre déclaré. Dans ce
              cas, un constat technique indépendant peut appuyer votre dialogue
              avec l&apos;assureur. Justebati propose une{" "}
              <a href="/assistance-expertise-assurance">
                assistance expertise d&apos;assurance et sinistre
              </a>{" "}
              — sans promettre d&apos;indemnisation ni de résultat chiffré face
              à la compagnie.
            </p>

            <h2>Quand faire appel ?</h2>
            <ul>
              <li>Fissures apparues ou qui s&apos;élargissent</li>
              <li>Désordres après travaux, extension ou sinistre</li>
              <li>
                Achat d&apos;un bien présentant des fissures visibles
              </li>
              <li>
                Demande d&apos;avis avant de lancer une réparation
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis fissures</Button>
            <Button href="/assistance-expertise-assurance" variant="secondary">
              Assistance sinistre / sécheresse
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
