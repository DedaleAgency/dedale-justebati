import { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Devis expertise bâtiment",
  description:
    "Décrivez votre besoin : avant achat, fissures, humidité, malfaçons, sinistre ou litige. Réponse soignée. Expertise indépendante — sans travaux à vendre.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Contact
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Demander un devis d'expertise
          </h1>
          <p className="mb-12 text-[17px] leading-[1.65] text-navy-muted">
            Décrivez votre besoin. Nous revenons vers vous avec une proposition adaptée. Justebati : expertise bâtiment indépendante — sans travaux à vendre.
          </p>

          <div className="mb-12 rounded-sm border border-border-on-paper bg-paper p-8">
            <h2 className="mb-4 font-serif text-[22px] leading-[1.25] text-navy">
              Coordonnées
            </h2>
            <div className="space-y-2 text-base">
              <p className="flex items-center gap-2">
                <span className="text-navy-muted">Téléphone :</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-medium text-copper-hover hover:text-copper"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-navy-muted">E-mail :</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-copper-hover hover:text-copper"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 font-serif text-[22px] leading-[1.25] text-navy">
              Formulaire de devis
            </h2>
            <ContactForm />
          </div>

          <div className="rounded-sm border border-border-on-paper bg-paper p-8">
            <h2 className="mb-4 font-serif text-[22px] leading-[1.25] text-navy">
              Après l'envoi
            </h2>
            <p className="text-base leading-[1.65] text-navy-muted">
              Nous étudions votre message et vous recontactons pour préciser le devis (périmètre, conditions, délais indicatifs). Voir aussi :{" "}
              <a href="/comment-ca-se-passe" className="text-copper-hover underline hover:text-copper">
                Comment ça se passe
              </a>
              {" · "}
              <a href="/faq" className="text-copper-hover underline hover:text-copper">
                FAQ
              </a>
              {" · "}
              <a href="/lexpert" className="text-copper-hover underline hover:text-copper">
                L'expert
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
