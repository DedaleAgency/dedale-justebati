import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page demandée n'existe pas ou a été déplacée. Retrouvez l'accueil, les prestations ou le contact Justebati.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-display md:text-5xl">
          Page introuvable
        </h1>
        <p className="mb-8 text-lg text-mist">
          Cette page n&apos;existe pas, ou l&apos;adresse a changé. Reprenez
          depuis l&apos;accueil, parcourez les prestations, ou contactez-nous
          pour un devis.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button href="/">Accueil</Button>
          <Button href="/#prestations" variant="secondary">
            Prestations
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </Section>
  );
}
