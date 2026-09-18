import { Metadata } from "next";
import Section from "@/components/Section";
import ProcessSteps from "@/components/ProcessSteps";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Déroulement d'une expertise | Justebati",
  description:
    "Prise de contact, visite, analyses, rapport : le déroulé d'une mission Justebati, étape par étape. Transparent, technique, indépendant. Demandez un devis.",
};

export default function CommentCaSePasse() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Comment se déroule une expertise
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-stone">
              Une mission Justebati suit un déroulé simple et transparent. Cinq
              étapes, du premier contact au rapport. Pas de surprise sur le rôle
              de l&apos;expert : constater, analyser, chiffrer, écrire — sans
              vendre de travaux.
            </p>
          </div>
        </div>
      </Section>

      <Section background="paper-2">
        <div className="mx-auto max-w-5xl">
          <ProcessSteps />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="prose-custom">
            <h2>Étape 1 — Contact et cadrage</h2>
            <p>
              Vous appelez le 01 00 00 00 00 ou{" "}
              <a href="/contact">demandez un devis</a>. Vous décrivez le bien,
              le problème et votre objectif (achat, désordre, réception, litige,
              sinistre). Nous précisons le périmètre de la mission et les
              conditions d&apos;intervention.
            </p>
            <p>Aucun engagement de chantier. Un devis d&apos;expertise, clair.</p>

            <h2>Étape 2 — Visite sur site</h2>
            <p>
              L&apos;expert se rend sur place. Il observe les zones concernées
              et, selon la mission, élargit le regard aux points sensibles du
              bâti. Photos, mesures, notes. Votre présence est utile pour
              préciser l&apos;historique (travaux, sinistres, évolutions).
            </p>

            <h2>Étape 3 — Analyse</h2>
            <p>
              Retour au cabinet : lecture des constats, hypothèses de cause,
              distinction entre désordre cosmétique et enjeu plus grave. Si une
              investigation complémentaire est souhaitable (hors mission), elle
              est signalée sans ambiguïté.
            </p>

            <h2>Étape 4 — Chiffrage des travaux à prévoir</h2>
            <p>
              Lorsque c&apos;est pertinent, l&apos;expert établit un ordre de
              grandeur des travaux à prévoir. Ce chiffrage aide à décider ou
              négocier. Il ne constitue pas un devis de travaux Justebati : nous
              ne réalisons pas les chantiers.
            </p>

            <h2>Étape 5 — Rapport écrit</h2>
            <p>
              Vous recevez un rapport illustré : constats, analyse,
              préconisations, chiffrage le cas échéant. Document transmissable à
              vos interlocuteurs (notaire, artisan, assureur, conseil).
            </p>
            <p>
              Les délais exacts dépendent de la mission et de la charge ; ils
              sont précisés lors du devis. Voir aussi la <a href="/faq">FAQ</a>.
            </p>

            <h2>Selon votre besoin</h2>
            <ul>
              <li>
                <a href="/expertise-avant-achat">Avant achat</a>
              </li>
              <li>
                <a href="/expertise-fissures">Fissures</a>
              </li>
              <li>
                <a href="/expertise-humidite">Humidité</a>
              </li>
              <li>
                <a href="/expertise-malfacons-reception">
                  Malfaçons et réception
                </a>
              </li>
              <li>
                <a href="/assistance-expertise-assurance">
                  Assurance et sinistre
                </a>
              </li>
              <li>
                <a href="/litige-artisan">Litige artisan</a>
              </li>
            </ul>

            <h2>Rappel d&apos;indépendance</h2>
            <p>
              Justebati ne vend aucun travaux, ne réalise pas les diagnostics
              obligatoires (DPE, amiante…) ni d&apos;estimation immobilière.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis</Button>
            <Button href="/faq" variant="secondary">
              Lire la FAQ
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
