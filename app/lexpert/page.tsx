import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

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
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            L&apos;expert Justebati
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-stone">
              Justebati, c&apos;est une démarche : regarder le bâti avec
              rigueur, formuler des constats utilisables, et rester indépendant
              de tout chantier. L&apos;expert intervient pour les particuliers —
              avant un achat, face à un désordre, en réception, en litige ou en
              sinistre.
            </p>
            <p>
              Nous ne publions ici ni diplômes inventés, ni années
              d&apos;expérience fictives, ni certifications non fournies. Ce qui
              définit Justebati dès maintenant, c&apos;est la méthode et
              l&apos;indépendance.
            </p>

            <h2>Indépendance</h2>
            <p>
              Justebati ne vend aucun travaux. Aucun partenariat occulté avec
              une entreprise de rénovation. Aucune commission sur des traitements
              « anti-humidité » ou des reprises structurelles. La rémunération,
              c&apos;est la mission d&apos;expertise.
            </p>
            <p>
              Justebati ne réalise pas non plus les diagnostics obligatoires
              (DPE, amiante, etc.) ni d&apos;estimation immobilière. Le périmètre
              est clair : pathologie et technique du bâti, rapport écrit,
              chiffrage des travaux à prévoir.
            </p>

            <h2>Méthode</h2>
            <ol>
              <li>
                <strong>Écoute du besoin</strong> — contexte, urgence, documents
                déjà en main
              </li>
              <li>
                <strong>Visite structurée</strong> — observation systématique des
                points sensibles
              </li>
              <li>
                <strong>Analyse</strong> — distinction cosmétique / grave,
                hypothèses de cause
              </li>
              <li>
                <strong>Chiffrage</strong> — ordre de grandeur des travaux à
                prévoir
              </li>
              <li>
                <strong>Rapport</strong> — écrit, illustré, exploitable pour
                décider ou négocier
              </li>
            </ol>
            <p>
              Le détail opérationnel est sur{" "}
              <a href="/comment-ca-se-passe">
                Comment se déroule une expertise
              </a>
              .
            </p>

            <h2>Pour les particuliers</h2>
            <p>
              Le ton et le livrable sont conçus pour des non-spécialistes :
              phrases claires, photos annotées, priorités hiérarchisées. Vous
              devez pouvoir transmettre le rapport à un notaire, un artisan, un
              assureur ou un conseil sans le « traduire ».
            </p>

            <h2>Missions les plus demandées</h2>
            <ul>
              <li>
                <a href="/expertise-avant-achat">Expertise avant achat</a>
              </li>
              <li>
                <a href="/expertise-fissures">Expertise fissures</a>
              </li>
              <li>
                <a href="/assistance-expertise-assurance">
                  Assistance assurance et sinistre
                </a>
              </li>
            </ul>

            <h2>Faire connaissance</h2>
            <p>
              Pour présenter votre situation et obtenir un devis :{" "}
              <a href="/contact">contact</a> ou 01 00 00 00 00 /
              contact@exemple.fr.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis</Button>
            <Button href="/comment-ca-se-passe" variant="secondary">
              Voir le déroulement
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
