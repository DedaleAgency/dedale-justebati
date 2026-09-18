import { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Devis expertise bâtiment | Justebati",
  description:
    "Décrivez votre besoin : avant achat, fissures, humidité, malfaçons, sinistre ou litige. Réponse soignée. Expertise indépendante — sans travaux à vendre.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Demander un devis d&apos;expertise
          </h1>
          <div className="prose-custom mb-12">
            <p className="text-xl text-stone">
              Décrivez votre situation. Nous revenons vers vous avec un devis
              d&apos;expertise adapté — sans engagement de travaux. Justebati ne
              vend aucun travaux, ne réalise pas les diagnostics obligatoires
              (DPE, amiante…) ni d&apos;estimation immobilière.
            </p>
          </div>

          <div className="mb-12 rounded-lg border border-line bg-paper-2 p-8">
            <h2 className="mb-4 text-2xl font-display">Coordonnées</h2>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="text-stone">Téléphone :</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-medium text-copper hover:text-ink"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-stone">E-mail :</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-copper hover:text-ink"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-display">Formulaire de devis</h2>
            <ContactForm />
          </div>

          <div className="mt-12 rounded-lg border border-line bg-paper-2 p-8">
            <h2 className="mb-4 text-2xl font-display">Après l&apos;envoi</h2>
            <p className="leading-relaxed text-stone">
              Nous étudions votre message et vous recontactons pour préciser le
              devis (périmètre, conditions, délais indicatifs). Pour le déroulé
              type d&apos;une mission :{" "}
              <a href="/comment-ca-se-passe" className="text-copper underline">
                Comment ça se passe
              </a>
              . Questions générales :{" "}
              <a href="/faq" className="text-copper underline">
                FAQ
              </a>
              . Qui intervient :{" "}
              <a href="/lexpert" className="text-copper underline">
                L&apos;expert
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
