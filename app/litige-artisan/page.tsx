import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Litige artisan",
  description:
    "Conflit avec un artisan ou une entreprise ? Constat technique indépendant pour négocier ou constituer un dossier. Aucun travaux à vendre. Devis.",
  alternates: {
    canonical: "/litige-artisan",
  },
};

export default function LitigeArtisanPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Litige avec un artisan : expert bâtiment
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-stone">
              Désaccord sur la qualité des travaux, travaux inachevés, malfaçons
              contestées : le conflit avec un artisan ou une entreprise se joue
              souvent sur des faits techniques mal établis. Justebati produit un
              constat indépendant — clair, photographié, hiérarchisé — pour
              négocier à l&apos;amiable ou préparer un dossier plus formel.
            </p>
            <p className="text-xl text-stone">
              Nous ne vendons aucun travaux. Nous n&apos;avons aucun intérêt à
              « reprendre le chantier ».
            </p>

            <h2>De l&apos;amiable à l&apos;expertise</h2>
            <p>Dans de nombreux cas, un rapport précis permet de :</p>
            <ol>
              <li>
                <strong>Objectiver</strong> les désordres et les non-conformités
              </li>
              <li>
                <strong>Négocier</strong> une reprise, une réduction ou un
                échéancier
              </li>
              <li>
                <strong>Préparer</strong>, si besoin, une expertise plus
                contradictoire ou un recours avec votre conseil
              </li>
            </ol>
            <p>
              Justebati intervient sur le volet technique. Le cadrage juridique
              (mise en demeure, garanties, procédures) relève de votre avocat ou
              de votre conseil.
            </p>

            <h2>Lien avec les malfaçons et la réception</h2>
            <p>
              Si le différend naît à la réception ou juste après les travaux,
              voir aussi l&apos;
              <a href="/expertise-malfacons-reception">
                expertise malfaçons et réception
              </a>
              . Les deux missions se complètent selon le moment du conflit.
            </p>

            <h2>Contenu du constat</h2>
            <ul>
              <li>Description localisée des désordres</li>
              <li>Photos et repères</li>
              <li>Appréciation technique (gravité, urgence)</li>
              <li>
                Préconisations de reprise ou d&apos;investigations
              </li>
              <li>Chiffrage des travaux à prévoir, le cas échéant</li>
            </ul>
            <p>
              Justebati ne réalise pas les diagnostics obligatoires (DPE,
              amiante…) ni d&apos;estimation immobilière.
            </p>

            <h2>Quand nous contacter ?</h2>
            <ul>
              <li>
                Travaux que vous jugez non conformes au devis ou aux règles de
                l&apos;art
              </li>
              <li>Refus de reprise par l&apos;entreprise</li>
              <li>
                Besoin d&apos;un tiers technique avant une médiation ou une
                procédure
              </li>
              <li>
                Volonté de documenter l&apos;état des lieux avant que la
                situation n&apos;évolue
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">
              Demander un devis litige artisan
            </Button>
            <Button href="/expertise-malfacons-reception" variant="secondary">
              Malfaçons et réception
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
            <Button href="/assistance-expertise-assurance" variant="secondary">
              Assistance assurance
            </Button>
            <Button href="/comment-ca-se-passe" variant="secondary">
              Comment ça se passe
            </Button>
            <Button href="/faq" variant="secondary">
              FAQ
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
