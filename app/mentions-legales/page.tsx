import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Justebati — expertise bâtiment indépendante.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <PageLayout maxWidth="narrow">
      <Cartouche
        fields={[
          { label: "Doc.", value: "JB-LEG" },
          { label: "Objet", value: "Mentions légales" },
          { label: "", value: "" },
          { label: "", value: "" },
        ]}
      />
      <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
        Informations légales
      </div>
      <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
        Mentions légales
      </h1>
      <div className="prose max-w-none">
        <h2>Éditeur du site</h2>
        <p>
          <strong>Justebati</strong>
          <br />
          [Adresse placeholder : Ville-Centre, Dépt. 00]
          <br />
          SIRET : [à compléter]
          <br />
          Email : contact@exemple.fr
          <br />
          Téléphone : 01 00 00 00 00
        </p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, logo, structure) est la propriété
          de Justebati, sauf mention contraire. Toute reproduction, même partielle, est interdite
          sans autorisation préalable.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées uniquement pour
          répondre à votre demande. Voir la{" "}
          <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>

        <h2>Cookies</h2>
        <p>Ce site n&apos;utilise aucun cookie de suivi publicitaire ou analytique tiers.</p>

        <h2>Crédits</h2>
        <p>
          Conception et développement par <a href="https://dedale.agency" target="_blank" rel="noopener noreferrer">Dedale Agency</a>.
        </p>
      </div>
    </PageLayout>
  );
}
