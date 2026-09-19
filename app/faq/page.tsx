import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "FAQ expertise bâtiment",
  description:
    "Indépendance, tarifs, délais, différence avec un diagnostiqueur, sinistres : réponses claires aux questions sur l'expertise Justebati. Contact & devis.",
  alternates: {
    canonical: "/faq",
  },
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
      <PageLayout>
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-FAQ" },
            { label: "Objet", value: "Questions" },
            { label: "Statut", value: "Public" },
            { label: "", value: "" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Questions fréquentes
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Questions fréquentes
        </h1>
        <p className="mb-12 text-[15px] leading-relaxed text-mist">
          Réponses courtes sur l&apos;indépendance, le périmètre, le déroulé et les situations
          typiques. Pour un cas précis : <Link href="/contact" className="text-oxide underline">demandez un devis</Link> ou
          appelez le 01 00 00 00 00.
        </p>

        <FaqAccordion items={faqItems} />

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="tel:0100000000">Appeler 01 00 00 00 00</a>
          </Button>
        </div>
      </PageLayout>

      <div className="border-b border-ink bg-sand px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-[1.5rem] font-medium">En savoir plus</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary">
              <Link href="/comment-ca-se-passe">Comment ça se passe</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/lexpert">L&apos;expert</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/">Accueil</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
