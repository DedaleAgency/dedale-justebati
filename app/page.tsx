import { Metadata } from "next";
import Section from "@/components/Section";
import ExpertiseCard from "@/components/ExpertiseCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expert bâtiment indépendant",
  description:
    "Justebati : expertise bâtiment pour particuliers. Avant achat, fissures, humidité, malfaçons, sinistres. Indépendant — aucun travaux à vendre. Devis.",
  openGraph: {
    title: "Expert bâtiment indépendant | Justebati",
    description:
      "Expertise bâtiment pour particuliers. Avant achat, fissures, humidité, malfaçons, sinistres. Indépendant — aucun travaux à vendre.",
  },
};

export default function HomePage() {
  const expertises = [
    {
      title: "Expertise avant achat",
      description:
        "Sécurisez votre projet avant le compromis : bilan technique indépendant, points de vigilance, ordre de grandeur des travaux.",
      href: "/expertise-avant-achat",
    },
    {
      title: "Expertise fissures",
      description:
        "Cause, gravité, suivi ou réparation : un constat précis pour savoir si la fissure est cosmétique ou structurelle.",
      href: "/expertise-fissures",
    },
    {
      title: "Expertise humidité",
      description:
        "Moisissures, infiltrations, remontées capillaires : on cherche la cause, pas un traitement à vendre.",
      href: "/expertise-humidite",
    },
    {
      title: "Malfaçons et réception",
      description:
        "Assistance à la réception, réserves, non-conformités : un constat indépendant pour défendre vos intérêts.",
      href: "/expertise-malfacons-reception",
    },
    {
      title: "Assistance assurance et sinistre",
      description:
        "Sécheresse, dégât des eaux, litige d'indemnisation : une assistance technique indépendante face à l'assureur.",
      href: "/assistance-expertise-assurance",
    },
    {
      title: "Litige avec un artisan",
      description:
        "Constat pour négocier à l'amiable ou constituer un dossier solide. Aucun travaux à vendre.",
      href: "/litige-artisan",
    },
  ];

  return (
    <>
      {/* Hero */}
      <Section background="dark">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-display leading-tight md:text-5xl lg:text-6xl">
            Expertise bâtiment indépendante — sans travaux à vendre
          </h1>
          <p className="mb-8 text-xl text-stone">
            L&apos;œil indépendant sur votre bâti.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-stone">
            Justebati est un cabinet d&apos;expertise bâtiment pour
            particuliers. Nous inspectons votre bien, identifions les désordres
            et vous remettons un rapport clair — avec photos et préconisations.
            Nous ne vendons aucun travaux.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis</Button>
            <Button href="#prestations" variant="secondary">
              Découvrir nos prestations
            </Button>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-display text-center md:text-4xl">
            Ce que Justebati fait pour vous
          </h2>
          <div className="prose-custom">
            <p>
              Sur site, l&apos;expert observe la structure, l&apos;enveloppe,
              les points sensibles (fissures, humidité, toiture, malfaçons). Il
              distingue le cosmétique du grave. Il chiffre les travaux à
              prévoir. Il formalise le tout dans un rapport écrit exploitable —
              pour décider, négocier ou constituer un dossier.
            </p>
            <p>
              Justebati ne réalise pas les diagnostics obligatoires (DPE,
              amiante, etc.) ni d&apos;estimation immobilière. Notre métier,
              c&apos;est l&apos;expertise technique du bâti.
            </p>
          </div>
        </div>
      </Section>

      {/* Expertises */}
      <Section background="paper-2" id="prestations">
        <h2 className="mb-12 text-center text-3xl font-display md:text-4xl">
          Six missions, une même exigence
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertises.map((expertise) => (
            <ExpertiseCard key={expertise.href} {...expertise} />
          ))}
        </div>
      </Section>

      {/* Indépendance */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-display md:text-4xl">
            Pourquoi l&apos;indépendance change tout
          </h2>
          <div className="prose-custom text-center">
            <p>
              Beaucoup d&apos;intervenants du bâtiment ont un intérêt à vous
              vendre des travaux. Justebati n&apos;en a aucun : nous ne
              réalisons pas les chantiers que nous préconisons. Notre
              rémunération, c&apos;est la mission d&apos;expertise. Votre
              rapport reste neutre, lisible et utilisable.
            </p>
          </div>
        </div>
      </Section>

      {/* Comment ça se passe */}
      <Section background="paper-2">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-display md:text-4xl">
            Comment ça se passe — en bref
          </h2>
          <ol className="mb-8 space-y-3 text-left">
            <li className="flex items-start">
              <span className="mr-3 font-mono text-copper">01.</span>
              <span>Vous décrivez votre besoin (appel ou formulaire).</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-mono text-copper">02.</span>
              <span>Visite sur site et relevés.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-mono text-copper">03.</span>
              <span>Analyse des désordres et de leur gravité.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-mono text-copper">04.</span>
              <span>Chiffrage des travaux à prévoir.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-mono text-copper">05.</span>
              <span>Remise du rapport écrit illustré.</span>
            </li>
          </ol>
          <p className="text-stone">
            Le détail étape par étape est sur{" "}
            <a href="/comment-ca-se-passe" className="text-copper underline">
              Comment se déroule une expertise
            </a>
            .
          </p>
        </div>
      </Section>

      {/* Pour qui */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-display md:text-4xl">
            Pour qui ?
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-copper">•</span>
              <span>
                Acquéreurs qui veulent un regard technique avant d&apos;acheter
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-copper">•</span>
              <span>
                Propriétaires confrontés à un désordre (fissures, humidité,
                toiture, structure)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-copper">•</span>
              <span>
                Maîtres d&apos;ouvrage en réception ou face à des malfaçons
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-copper">•</span>
              <span>
                Assurés en sinistre (dont sécheresse) qui veulent un appui
                technique indépendant
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-copper">•</span>
              <span>
                Particuliers en litige avec un artisan ou une entreprise
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Ce que Justebati ne fait pas */}
      <Section background="paper-2">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-display md:text-4xl">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-stone">×</span>
              <span>Estimation de la valeur marchande d&apos;un bien</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-stone">×</span>
              <span>
                Diagnostics réglementaires obligatoires (DPE, amiante, plomb,
                termites, etc.)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-stone">×</span>
              <span>Travaux, rénovation, vente de traitements</span>
            </li>
          </ul>
          <p className="mt-6 text-center text-stone">
            Besoin d&apos;un diagnostiqueur ou d&apos;un agent immobilier ? Ce
            n&apos;est pas notre rôle. Besoin d&apos;un œil technique
            indépendant sur le bâti ? C&apos;est le nôtre.
          </p>
        </div>
      </Section>

      {/* CTA Final */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-display md:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mb-8 text-lg text-stone">
            Décrivez votre besoin, nous revenons vers vous avec un devis clair —
            sans engagement de chantier.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis</Button>
            <Button href="tel:0100000000" variant="secondary">
              Appeler 01 00 00 00 00
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
