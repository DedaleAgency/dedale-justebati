import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Justebati collecte et traite vos données personnelles : formulaire de contact, conformité RGPD.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <PageLayout maxWidth="narrow">
      <Cartouche
        fields={[
          { label: "Doc.", value: "JB-CONF" },
          { label: "Objet", value: "Confidentialité" },
          { label: "", value: "" },
          { label: "", value: "" },
        ]}
      />
      <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
        Protection des données
      </div>
      <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
        Politique de confidentialité
      </h1>
      <div className="prose max-w-none">
        <h2>Responsable du traitement</h2>
        <p>
          Justebati, [adresse placeholder Ville-Centre, Dépt. 00], est responsable du traitement de
          vos données personnelles.
        </p>

        <h2>Données collectées</h2>
        <p>
          Via le formulaire de contact, nous collectons : prénom, nom, téléphone, code postal, type
          de bien, type de mission, description du besoin. Ces données sont nécessaires pour
          répondre à votre demande de devis.
        </p>

        <h2>Finalité</h2>
        <p>
          Vos données servent uniquement à répondre à votre demande d&apos;expertise : analyse du
          besoin, établissement d&apos;un devis, suivi de la mission le cas échéant.
        </p>

        <h2>Destinataires</h2>
        <p>
          Vos données ne sont pas transmises à des tiers, sauf obligation légale. Elles ne sont pas
          utilisées à des fins commerciales ou publicitaires.
        </p>

        <h2>Conservation</h2>
        <p>
          Vos données sont conservées pendant la durée nécessaire au traitement de votre demande,
          puis archivées selon les obligations légales (comptabilité, garantie décennale le cas
          échéant).
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données. Pour
          exercer ces droits, contactez-nous à contact@exemple.fr.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise aucun cookie de suivi publicitaire ou analytique tiers. Aucun
          consentement cookie n&apos;est requis.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question relative au traitement de vos données : contact@exemple.fr ou 01 00 00
          00 00.
        </p>
      </div>
    </PageLayout>
  );
}
