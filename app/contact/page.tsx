import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Contact & devis expertise bâtiment",
  description:
    "Demandez un devis d'expertise bâtiment. Formulaire ou téléphone : 01 00 00 00 00. Réponse rapide. Justebati — expert indépendant, aucun travaux à vendre.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageLayout maxWidth="narrow">
      <Cartouche
        fields={[
          { label: "Doc.", value: "JB-CNT" },
          { label: "Objet", value: "Contact" },
          { label: "Téléphone", value: "01 00 00 00 00" },
          { label: "Email", value: "contact@exemple.fr" },
        ]}
      />
      <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
        Demander un devis
      </div>
      <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
        Contact & devis
      </h1>
      <div className="prose max-w-none">
        <p className="lead">
          Décrivez votre situation dans le formulaire ci-dessous ou appelez directement le 01 00 00
          00 00. Nous vous revenons avec un devis clair — sans engagement de chantier.
        </p>
      </div>

      <div className="my-12 space-y-6">
        <div className="grid gap-6 border-b border-line pb-6 sm:grid-cols-2">
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
              Téléphone
            </div>
            <a
              href="tel:0100000000"
              className="text-[17px] font-medium text-ink hover:text-oxide"
            >
              01 00 00 00 00
            </a>
          </div>
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
              Email
            </div>
            <a
              href="mailto:contact@exemple.fr"
              className="text-[17px] font-medium text-ink hover:text-oxide"
            >
              contact@exemple.fr
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-display text-[1.5rem] font-medium">Formulaire de contact</h2>
          <ContactForm />
        </div>
      </div>

      <div className="prose max-w-none">
        <h3>Ce que nous avons besoin de savoir</h3>
        <ul>
          <li>Type de bien (maison, appartement)</li>
          <li>Localisation approximative (code postal)</li>
          <li>Nature du besoin (achat, fissures, humidité, litige, sinistre…)</li>
          <li>Contexte rapide (quand, où, quoi)</li>
        </ul>
        <p>
          Justebati ne vend aucun travaux. Le devis concerne uniquement la mission d&apos;expertise.
        </p>
      </div>
    </PageLayout>
  );
}
