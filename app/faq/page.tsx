import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ expertise bâtiment",
  description:
    "Indépendance, tarifs, délais, différence avec un diagnostiqueur, sinistres : réponses claires aux questions sur l'expertise Justebati. Contact & devis.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const faqs = [
    {
      question: "Justebati est-il vraiment indépendant ?",
      answer:
        "Oui. Justebati ne vend aucun travaux, ne réalise pas d'interventions de reprise et ne perçoit pas de commission sur des entreprises partenaires. Le rapport reste un document technique neutre.",
    },
    {
      question: "Quelle différence avec un diagnostiqueur ?",
      answer:
        "Le diagnostiqueur réalise les diagnostics réglementaires obligatoires à la vente (DPE, amiante, plomb, etc.). L'expert bâtiment analyse les désordres du bâti (fissures, humidité, structure, malfaçons) et produit un rapport pathologique avec préconisations et, si pertinent, chiffrage. Justebati ne réalise pas les diagnostics obligatoires. Les deux démarches se complètent.",
    },
    {
      question: "Proposez-vous des travaux ?",
      answer:
        "Non. Justebati ne vend ni ne réalise de travaux. Nous ne proposons pas non plus d'estimation immobilière.",
    },
    {
      question: "Combien coûte une expertise ?",
      answer:
        "Les tarifs dépendent du type de mission, de la taille du bien et du périmètre. Aucun prix n'est affiché ici sans validation client. Demandez un devis : nous répondons avec une proposition claire.",
    },
    {
      question: "Quels sont les délais ?",
      answer:
        "Les délais de visite et de remise du rapport varient selon la mission et la charge. Ils sont précisés dans le devis. Aucune fourchette chiffrée n'est publiée tant qu'elle n'est pas validée.",
    },
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "Justebati intervient en région Provence-Alpes-Côte d'Azur. Chaque déplacement fait l'objet d'un devis personnalisé en fonction de la localisation du bien et de la nature de l'expertise.",
    },
    {
      question: "Intervenez-vous en cas de sinistre ou face à un assureur ?",
      answer:
        "Oui, en assistance technique indépendante : constat, analyse, rapport pour nourrir votre dossier. Nous ne promettons aucun résultat d'indemnisation.",
    },
    {
      question: "Le rapport peut-il servir dans un litige ?",
      answer:
        "Le rapport est un constat technique documenté. Il peut servir de base à une négociation ou à un dossier, en lien avec votre conseil. Justebati ne fournit pas de conseil juridique.",
    },
  ];

  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Aide
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Questions fréquentes
          </h1>
          <p className="mb-12 text-[17px] leading-[1.65] text-navy-muted">
            Réponses directes. Pour un devis personnalisé : page Contact ou 01 00 00 00 00.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-border-on-paper pt-6">
                <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-navy">
                  {faq.question}
                </h2>
                <p className="text-base leading-[1.65] text-navy-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Demander un devis
            </Link>
            <Link
              href="/comment-ca-se-passe"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Comment ça se passe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
