import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confidentialité | Justebati",
  description:
    "Traitement des données personnelles, formulaires et cookies sur justebati.fr — transparence RGPD.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Politique de confidentialité
          </h1>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            La présente politique décrit le traitement des données personnelles collectées via le site justebati.fr, notamment via le formulaire de contact et les éventuels cookies.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Responsable de traitement
          </h2>
          <div className="mb-6 space-y-1 text-base text-navy-muted">
            <p><strong>Éditeur / responsable :</strong> [À compléter — raison sociale client]</p>
            <p><strong>Contact :</strong> contact@exemple.fr — 01 00 00 00 00</p>
            <p><strong>Adresse :</strong> [À compléter]</p>
          </div>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Données collectées
          </h2>
          <p className="mb-4 text-base text-navy-muted">
            Via le formulaire de devis / contact, peuvent être collectés :
          </p>
          <ul className="mb-6 ml-6 space-y-2 text-base text-navy-muted">
            <li className="list-disc">Identité : prénom, nom</li>
            <li className="list-disc">Coordonnées : téléphone, éventuellement e-mail si fourni</li>
            <li className="list-disc">Contexte : code postal, type de bien, type de mission, description libre</li>
          </ul>
          <p className="mb-6 text-base text-navy-muted">
            Aucune donnée sensible n'est demandée par le formulaire standard.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Finalités
          </h2>
          <ul className="mb-4 ml-6 space-y-2 text-base text-navy-muted">
            <li className="list-disc">Répondre aux demandes de devis et de contact</li>
            <li className="list-disc">Organiser les missions d'expertise</li>
            <li className="list-disc">Assurer le suivi commercial et administratif des dossiers</li>
            <li className="list-disc">Respecter les obligations légales applicables</li>
          </ul>
          <p className="mb-6 text-base text-navy-muted">
            Base légale principale : exécution de mesures précontractuelles / contrat, et intérêt légitime de répondre aux sollicitations.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Destinataires
          </h2>
          <p className="mb-4 text-base text-navy-muted">
            Les données sont traitées par Justebati (éditeur). Elles peuvent être accessibles aux prestataires techniques strictement nécessaires (hébergement, envoi d'e-mails transactionnels), dans le cadre de leurs missions.
          </p>
          <p className="mb-6 text-base text-navy-muted">
            Elles ne sont pas vendues. Justebati ne vend par ailleurs aucun travaux.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Durée de conservation
          </h2>
          <p className="mb-4 text-base text-navy-muted">
            Les durées exactes seront fixées selon la politique interne du client. En principe :
          </p>
          <ul className="mb-6 ml-6 space-y-2 text-base text-navy-muted">
            <li className="list-disc">Demandes sans suite : conservation limitée au temps nécessaire au traitement de la demande</li>
            <li className="list-disc">Dossiers de mission : conservation pour la durée de la relation et les obligations légales / responsabilité professionnelle</li>
          </ul>
          <p className="mb-6 text-base text-navy-muted">
            Précisions à compléter dès validation client.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Cookies et mesure d'audience
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            Le détail des cookies et outils d'analytics réellement déployés sera mis à jour à la mise en production. Tant que non déployés, aucun bandeau cookies non nécessaire n'est requis au-delà du strict technique.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Vos droits
          </h2>
          <p className="mb-4 text-base text-navy-muted">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité le cas échéant. Vous pouvez introduire une réclamation auprès de la CNIL.
          </p>
          <p className="mb-6 text-base text-navy-muted">
            Pour exercer vos droits : contact@exemple.fr — 01 00 00 00 00.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Mise à jour
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            Cette politique pourra être mise à jour. La version publiée sur justebati.fr prévaut.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/mentions-legales"
              className="text-copper-hover underline underline-offset-2 hover:text-copper"
            >
              Mentions légales →
            </Link>
            <Link
              href="/contact"
              className="text-copper-hover underline underline-offset-2 hover:text-copper"
            >
              Contact →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
