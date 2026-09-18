import { Metadata } from "next";
import Section from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ expertise bâtiment | Justebati",
  description:
    "Indépendance, tarifs, délais, différence avec un diagnostiqueur, sinistres : réponses claires aux questions sur l'expertise Justebati. Contact & devis.",
};

const faqItems = [
  {
    question: "Justebati est-il vraiment indépendant ?",
    answer:
      "Oui. Justebati ne vend aucun travaux et ne perçoit aucune commission sur des chantiers ou traitements. La mission d'expertise est l'unique objet de la prestation.",
  },
  {
    question: "Quelle différence avec un diagnostiqueur ?",
    answer:
      "Le diagnostiqueur réalise les diagnostics réglementaires obligatoires à la vente (DPE, amiante, etc.). Justebati réalise une expertise technique du bâti : pathologie, désordres, préconisations, chiffrage des travaux à prévoir. Les deux démarches sont complémentaires ; Justebati ne remplace pas le diagnostiqueur et ne réalise pas ces diagnostics.",
  },
  {
    question: "Faites-vous des estimations immobilières ?",
    answer: "Non. Justebati n'estime pas la valeur marchande d'un bien.",
  },
  {
    question: "Vendez-vous des travaux ou des traitements ?",
    answer:
      "Non. Aucun travaux à vendre, aucun traitement « anti-humidité » commercialisé. Le rapport peut chiffrer des travaux à prévoir ; leur réalisation relève d'autres intervenants, choisis librement par vous.",
  },
  {
    question: "Combien coûte une expertise ?",
    answer:
      "Les tarifs dépendent du type de mission, de la taille du bien et du périmètre. Aucun prix n'est affiché ici sans validation client. Demandez un devis : réponse soignée, sans engagement de chantier.",
  },
  {
    question: "Quels sont les délais ?",
    answer:
      "Les délais de visite et de remise du rapport varient selon la mission et la disponibilité. Ils sont annoncés lors du devis. Voir le déroulement.",
  },
  {
    question: "Dans quelle zone intervenez-vous ?",
    answer:
      "Zone d'intervention à confirmer. Placeholder actuel : Ville-Centre et département 00. Indiquez votre code postal dans le formulaire de contact : nous vous dirons si la mission est possible.",
  },
  {
    question: "Que contient le rapport ?",
    answer:
      "Un document écrit avec constats, photos, analyse de gravité, préconisations et, le cas échéant, chiffrage des travaux à prévoir. Exploitable pour décider, négocier ou documenter un dossier.",
  },
  {
    question: "Intervenez-vous en cas de sinistre ou de sécheresse ?",
    answer:
      "Oui, dans le cadre d'une assistance expertise d'assurance et sinistre. Assistance technique indépendante uniquement — sans promesse d'indemnisation ni de résultat face à l'assureur. Pour les fissures associées, voir aussi l'expertise fissures.",
  },
  {
    question: "Pouvez-vous m'aider en litige avec un artisan ?",
    answer:
      "Oui : constat technique pour litige artisan, souvent lié aux malfaçons et à la réception. Le volet juridique reste celui de votre conseil.",
  },
  {
    question: "Qui réalise la visite ?",
    answer:
      "L'expert Justebati. Présentation de la démarche et de la méthode sur la page L'expert.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Questions fréquentes
          </h1>
          <p className="mb-12 text-lg text-stone">
            Réponses courtes sur l&apos;indépendance, le périmètre, le déroulé
            et les situations typiques. Pour un cas précis :{" "}
            <a href="/contact" className="text-copper underline">
              demandez un devis
            </a>{" "}
            ou appelez le 01 00 00 00 00.
          </p>

          <FaqAccordion items={faqItems} />

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis</Button>
            <Button href="tel:0100000000" variant="secondary">
              Appeler 01 00 00 00 00
            </Button>
          </div>
        </div>
      </Section>

      <Section background="paper-2">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-display">
            Liens utiles
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/lexpert" variant="secondary">
              L&apos;expert
            </Button>
            <Button href="/comment-ca-se-passe" variant="secondary">
              Comment ça se passe
            </Button>
            <Button href="/expertise-avant-achat" variant="secondary">
              Avant achat
            </Button>
            <Button href="/expertise-fissures" variant="secondary">
              Fissures
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
