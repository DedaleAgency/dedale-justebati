import { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Confidentialité | Justebati",
  description:
    "Traitement des données personnelles, formulaires et cookies sur justebati.fr — transparence RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-display md:text-5xl">
          Politique de confidentialité
        </h1>
        <div className="prose-custom">
          <p>
            La présente politique décrit la manière dont les données personnelles
            sont traitées sur le site <strong>justebati.fr</strong>, édité par
            Justebati (coordonnées éditeur : voir{" "}
            <a href="/mentions-legales">mentions légales</a>).
          </p>
          <p>
            Justebati s&apos;engage à traiter vos données de façon loyale,
            limitée au nécessaire, et conforme au Règlement général sur la
            protection des données (RGPD) et à la loi Informatique et Libertés.
          </p>

          <h2>Responsable du traitement</h2>
          <p>Le responsable du traitement est l&apos;éditeur du site Justebati :</p>
          <ul>
            <li>
              Identité : <em>[raison sociale / nom — à fournir]</em>
            </li>
            <li>
              Adresse : <em>[à fournir]</em>
            </li>
            <li>Contact : contact@exemple.fr — 01 00 00 00 00</li>
          </ul>

          <h2>Données collectées</h2>

          <h3>Formulaire de contact / devis</h3>
          <p>
            Lorsque vous utilisez le formulaire, nous collectons notamment :
            prénom, nom, téléphone, code postal, type de bien, type de mission,
            description libre. Ces données sont nécessaires pour répondre à votre
            demande de devis ou de contact.
          </p>

          <h3>Données de navigation</h3>
          <p>
            Des données techniques peuvent être collectées automatiquement
            (adresse IP, type de navigateur, pages consultées, horodatage), via
            journaux serveur ou outils de mesure d&apos;audience le cas échéant.
          </p>

          <h2>Finalités</h2>
          <ul>
            <li>Traiter et répondre à vos demandes de devis ou de contact</li>
            <li>
              Assurer le suivi de la relation commerciale liée à une mission
              d&apos;expertise
            </li>
            <li>
              Améliorer le site et mesurer l&apos;audience (si outils activés)
            </li>
            <li>Respecter les obligations légales applicables</li>
          </ul>

          <h2>Base légale</h2>
          <ul>
            <li>
              Exécution de mesures précontractuelles à votre demande (devis,
              prise de contact)
            </li>
            <li>
              Intérêt légal à assurer la sécurité et le bon fonctionnement du
              site
            </li>
            <li>
              Consentement, le cas échéant, pour certains cookies non essentiels
            </li>
            <li>Obligation légale lorsque applicable</li>
          </ul>

          <h2>Destinataires</h2>
          <p>
            Les données sont destinées à Justebati. Elles peuvent être transmises
            à des prestataires techniques (hébergement, envoi d&apos;e-mails,
            maintenance) strictement pour les besoins du service, dans le cadre
            d&apos;accords appropriés.
          </p>
          <p>Justebati ne vend pas vos données personnelles.</p>

          <h2>Durée de conservation</h2>
          <ul>
            <li>
              Demandes de devis / contact sans suite : durée limitée nécessaire
              au suivi, puis archivage ou suppression selon la politique interne
            </li>
            <li>
              Clients / missions : conservation pour la durée de la relation et
              des obligations légales (comptables, contentieuses) applicables
            </li>
            <li>
              Journaux techniques : durée courte, liée à la sécurité et au
              diagnostic
            </li>
          </ul>
          <p>
            Les durées exactes seront précisées dès validation client / process
            interne.
          </p>

          <h2>Cookies</h2>
          <p>Le site peut utiliser :</p>
          <ul>
            <li>
              <strong>Cookies essentiels</strong> : fonctionnement technique
              (session, sécurité, préférences de consentement)
            </li>
            <li>
              <strong>Cookies de mesure d&apos;audience</strong> : uniquement
              s&apos;ils sont mis en place, et selon le régime de consentement
              applicable
            </li>
          </ul>
          <p>
            Vous pouvez configurer votre navigateur pour refuser certains
            cookies. Un bandeau de consentement sera affiché si des cookies non
            essentiels sont déployés.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation, d&apos;opposition,
            et de portabilité le cas échéant. Vous pouvez également définir des
            directives relatives au sort de vos données après décès.
          </p>
          <p>
            Pour exercer vos droits : contact@exemple.fr ou 01 00 00 00 00.
            Joignez un élément permettant de justifier votre identité si
            nécessaire.
          </p>
          <p>
            Vous pouvez introduire une réclamation auprès de la CNIL
            (www.cnil.fr).
          </p>

          <h2>Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles raisonnables sont mises
            en œuvre pour protéger les données contre l&apos;accès non autorisé,
            la perte ou l&apos;altération. Aucun système n&apos;est infaillible ;
            en cas d&apos;incident notable, les procédures légales de
            notification seront suivies le cas échéant.
          </p>

          <h2>Modifications</h2>
          <p>
            Cette politique peut être mise à jour. La version en ligne fait foi.
            Date de dernière mise à jour indicative : 18 septembre 2026.
          </p>

          <h2>Contact</h2>
          <p>
            Questions relatives à la confidentialité : contact@exemple.fr —
            01 00 00 00 00.
          </p>
          <p>
            Voir aussi les <a href="/mentions-legales">mentions légales</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}
