import { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site justebati.fr — éditeur, hébergeur, propriété intellectuelle, contact.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-display md:text-5xl">
          Mentions légales
        </h1>
        <div className="prose-custom">
          <p>
            Conformément aux dispositions légales applicables, les présentes
            mentions précisent l&apos;identité de l&apos;éditeur du site
            justebati.fr et les conditions d&apos;utilisation des contenus.
          </p>

          <h2>Éditeur du site</h2>
          <p>Le site <strong>justebati.fr</strong> est édité par :</p>
          <ul>
            <li>
              Raison sociale / nom : <em>[Nom ou raison sociale de l&apos;éditeur — à fournir]</em>
            </li>
            <li>
              Forme juridique : <em>[à fournir]</em>
            </li>
            <li>
              Capital social : <em>[à fournir, le cas échéant]</em>
            </li>
            <li>
              Siège social : <em>[adresse complète — à fournir]</em>
            </li>
            <li>
              SIRET : <em>[à fournir]</em>
            </li>
            <li>
              RCS / RM : <em>[à fournir, le cas échéant]</em>
            </li>
            <li>
              Numéro de TVA intracommunautaire : <em>[à fournir, le cas échéant]</em>
            </li>
            <li>
              Directeur de la publication : <em>[nom — à fournir]</em>
            </li>
            <li>Contact : 01 00 00 00 00 — contact@exemple.fr</li>
          </ul>
          <p className="text-sm italic text-stone">
            (Les mentions d&apos;éditeur ci-dessus sont des placeholders en
            attendant les informations client. Le site reste en mode contrôle.)
          </p>

          <h2>Réalisation et hébergement</h2>
          <ul>
            <li>
              <strong>Conception et réalisation :</strong> Dédale Agency
            </li>
            <li>
              <strong>Hébergement :</strong> Dédale Agency — infrastructure
              d&apos;hébergement / déploiement (notamment via prestataire cloud
              type Vercel). Pour toute question technique relative à
              l&apos;hébergement du site, contactez Dédale Agency via les
              coordonnées publiées sur le site de l&apos;agence.
            </li>
          </ul>
          <p className="text-sm italic text-stone">
            (Coordonnées légales complètes de l&apos;hébergeur technique final à
            compléter si une obligation de mention nominative distincte
            s&apos;applique après choix d&apos;infra définitif.)
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus du site (textes, visuels, identité,
            structure) est protégé. Toute reproduction non autorisée est
            interdite. Les marques et logos tiers éventuellement cités restent
            la propriété de leurs titulaires.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations publiées le sont à titre indicatif. Elles ne
            constituent pas un conseil juridique. Justebati s&apos;efforce
            d&apos;assurer l&apos;exactitude des contenus ; l&apos;éditeur ne
            saurait être tenu responsable d&apos;un usage inapproprié des
            informations du site.
          </p>
          <p>
            L&apos;expertise bâtiment proposée ne se substitue pas aux
            diagnostics réglementaires obligatoires ni à une estimation
            immobilière.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données collectées via le site (formulaires,
            cookies éventuels) est décrit dans la{" "}
            <a href="/politique-de-confidentialite">
              politique de confidentialité
            </a>
            .
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions :
            contact@exemple.fr ou 01 00 00 00 00.
          </p>
        </div>
      </div>
    </Section>
  );
}
