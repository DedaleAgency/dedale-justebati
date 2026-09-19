import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "L'expert bâtiment",
  description:
    "Parcours, indépendance et méthode de l'expert Justebati. Une expertise au service des particuliers — sans aucun travaux à vendre. Contactez-nous.",
  alternates: {
    canonical: "/lexpert",
  },
};

export default function ExpertPage() {
  return (
    <>
      <PageLayout>
        <PageHero
          imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Vue intérieure d'une pièce avec fenêtre et lumière naturelle"
        />
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-EX" },
            { label: "Objet", value: "L'expert" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Méthode & indépendance
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          L&apos;expert Justebati
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Justebati, c&apos;est une démarche : regarder le bâti avec rigueur, formuler des
            constats utilisables, et rester indépendant de tout chantier. L&apos;expert intervient
            pour les particuliers — avant un achat, face à un désordre, en réception, en litige ou
            en sinistre.
          </p>
          <p>
            Nous ne publions ici ni diplômes inventés, ni années d&apos;expérience fictives, ni
            certifications non fournies. Ce qui définit Justebati dès maintenant, c&apos;est la
            méthode et l&apos;indépendance.
          </p>

          <h2>Indépendance</h2>
          <p>
            Justebati ne vend aucun travaux. Aucun partenariat occulté avec une entreprise de
            rénovation. Aucune commission sur des traitements « anti-humidité » ou des reprises
            structurelles. La rémunération, c&apos;est la mission d&apos;expertise.
          </p>
          <p>
            Justebati ne réalise pas non plus les diagnostics obligatoires (DPE, amiante, etc.) ni
            d&apos;estimation immobilière. Le périmètre est clair : pathologie et technique du bâti,
            rapport écrit, chiffrage des travaux à prévoir.
          </p>

          <h2>Méthode</h2>
          <ol>
            <li>
              <strong>Écoute du besoin</strong> — contexte, urgence, documents déjà en main
            </li>
            <li>
              <strong>Visite structurée</strong> — observation systématique des points sensibles
            </li>
            <li>
              <strong>Analyse</strong> — distinction cosmétique / grave, hypothèses de cause
            </li>
            <li>
              <strong>Chiffrage</strong> — ordre de grandeur des travaux à prévoir
            </li>
            <li>
              <strong>Rapport</strong> — écrit, illustré, exploitable pour décider ou négocier
            </li>
          </ol>
          <p>
            Le détail opérationnel est sur{" "}
            <Link href="/comment-ca-se-passe">Comment se déroule une expertise</Link>.
          </p>

          <h2>Pour les particuliers</h2>
          <p>
            Le ton et le livrable sont conçus pour des non-spécialistes : phrases claires, photos
            annotées, priorités hiérarchisées. Vous devez pouvoir transmettre le rapport à un
            notaire, un artisan, un assureur ou un conseil sans le « traduire ».
          </p>

          <h2>Missions les plus demandées</h2>
          <ul>
            <li>
              <Link href="/expertise-avant-achat">Expertise avant achat</Link>
            </li>
            <li>
              <Link href="/expertise-fissures">Expertise fissures</Link>
            </li>
            <li>
              <Link href="/assistance-expertise-assurance">Assistance assurance et sinistre</Link>
            </li>
          </ul>

          <h2>Faire connaissance</h2>
          <p>
            Pour présenter votre situation et obtenir un devis : <Link href="/contact">contact</Link>{" "}
            ou 01 00 00 00 00 / contact@exemple.fr.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/comment-ca-se-passe">Voir le déroulement</Link>
          </Button>
        </div>
      </PageLayout>
    </>
  );
}
