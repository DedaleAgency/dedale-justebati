import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ExpertiseCard from "@/components/ExpertiseCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: {
    absolute: "Justebati — L'œil indépendant sur votre bâti.",
  },
  description:
    "Justebati : expertise bâtiment pour particuliers. Avant achat, fissures, humidité, malfaçons, sinistres. Indépendant — aucun travaux à vendre. Devis.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Justebati — L'œil indépendant sur votre bâti.",
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
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Expertise fissures",
      description:
        "Cause, gravité, suivi ou réparation : un constat précis pour savoir si la fissure est cosmétique ou structurelle.",
      href: "/expertise-fissures",
      imageUrl:
        "https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Expertise humidité",
      description:
        "Moisissures, infiltrations, remontées capillaires : on cherche la cause, pas un traitement à vendre.",
      href: "/expertise-humidite",
      imageUrl:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Malfaçons et réception",
      description:
        "Assistance à la réception, réserves, non-conformités : un constat indépendant pour défendre vos intérêts.",
      href: "/expertise-malfacons-reception",
      imageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    },
    {
      title: "Assistance assurance et sinistre",
      description:
        "Sécheresse, dégât des eaux, litige d'indemnisation : une assistance technique indépendante face à l'assureur.",
      href: "/assistance-expertise-assurance",
      imageUrl:
        "https://images.unsplash.com/photo-1590478583248-318d36c11144?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Litige avec un artisan",
      description:
        "Constat pour négocier à l'amiable ou constituer un dossier solide. Aucun travaux à vendre.",
      href: "/litige-artisan",
      imageUrl:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Façade en pierre"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/60 to-night/80" />
        <div className="relative flex h-full items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="mb-8 text-[2.5rem] font-display leading-[1.15] text-on-night md:text-6xl lg:text-7xl">
                Expertise bâtiment indépendante — sans travaux à vendre
              </h1>
              <p className="mb-6 text-2xl font-display text-on-night/95 md:text-3xl">
                L&apos;œil indépendant sur votre bâti.
              </p>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-night/85">
                Justebati est un cabinet d&apos;expertise bâtiment pour
                particuliers. Nous inspectons votre bien, identifions les
                désordres et vous remettons un rapport clair — avec photos et
                préconisations. Nous ne vendons aucun travaux.
              </p>
              <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button href="/contact">Demander un devis</Button>
                <Button href="#prestations" variant="secondary">
                  Découvrir nos prestations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-wider text-mist">
              Notre mission
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mb-12 text-4xl font-display md:text-5xl">
            Ce que Justebati fait pour vous
          </h2>
          <div className="prose-custom space-y-6 text-lg">
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
      <Section background="sand" id="prestations">
        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-sm uppercase tracking-wider text-mist">
            Prestations
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>
        <h2 className="mb-16 text-4xl font-display md:text-5xl lg:text-6xl">
          Six missions, une même exigence
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertises.map((expertise) => (
            <ExpertiseCard key={expertise.href} {...expertise} />
          ))}
        </div>
      </Section>

      {/* Indépendance */}
      <Section background="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-display md:text-4xl">
            Pourquoi l&apos;indépendance change tout
          </h2>
          <p className="text-lg leading-relaxed text-on-night/80">
            Beaucoup d&apos;intervenants du bâtiment ont un intérêt à vous
            vendre des travaux. Justebati n&apos;en a aucun : nous ne réalisons
            pas les chantiers que nous préconisons. Notre rémunération,
            c&apos;est la mission d&apos;expertise. Votre rapport reste neutre,
            lisible et utilisable.
          </p>
        </div>
      </Section>

      {/* Comment ça se passe */}
      <Section background="sand">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-wider text-mist">
              Déroulement
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mb-12 text-4xl font-display md:text-5xl">
            Comment ça se passe — en bref
          </h2>
          <ol className="mb-10 space-y-6">
            <li className="flex items-start gap-6 border-l-2 border-oxide pl-6">
              <span className="font-mono text-sm font-medium text-oxide">
                01
              </span>
              <div>
                <h3 className="mb-1 text-lg font-display">Contact</h3>
                <p className="text-mist">
                  Vous décrivez votre besoin (appel ou formulaire).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6 border-l-2 border-oxide pl-6">
              <span className="font-mono text-sm font-medium text-oxide">
                02
              </span>
              <div>
                <h3 className="mb-1 text-lg font-display">Visite</h3>
                <p className="text-mist">Visite sur site et relevés.</p>
              </div>
            </li>
            <li className="flex items-start gap-6 border-l-2 border-oxide pl-6">
              <span className="font-mono text-sm font-medium text-oxide">
                03
              </span>
              <div>
                <h3 className="mb-1 text-lg font-display">Analyse</h3>
                <p className="text-mist">
                  Analyse des désordres et de leur gravité.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6 border-l-2 border-oxide pl-6">
              <span className="font-mono text-sm font-medium text-oxide">
                04
              </span>
              <div>
                <h3 className="mb-1 text-lg font-display">Chiffrage</h3>
                <p className="text-mist">Chiffrage des travaux à prévoir.</p>
              </div>
            </li>
            <li className="flex items-start gap-6 border-l-2 border-oxide pl-6">
              <span className="font-mono text-sm font-medium text-oxide">
                05
              </span>
              <div>
                <h3 className="mb-1 text-lg font-display">Rapport</h3>
                <p className="text-mist">Remise du rapport écrit illustré.</p>
              </div>
            </li>
          </ol>
          <p className="text-mist">
            Le détail étape par étape est sur{" "}
            <a
              href="/comment-ca-se-passe"
              className="font-medium text-oxide underline decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              Comment se déroule une expertise
            </a>
            .
          </p>
        </div>
      </Section>

      {/* Pour qui */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-wider text-mist">
              Public
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mb-12 text-4xl font-display md:text-5xl">Pour qui ?</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxide" />
              <span className="text-lg">
                Acquéreurs qui veulent un regard technique avant d&apos;acheter
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxide" />
              <span className="text-lg">
                Propriétaires confrontés à un désordre (fissures, humidité,
                toiture, structure)
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxide" />
              <span className="text-lg">
                Maîtres d&apos;ouvrage en réception ou face à des malfaçons
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxide" />
              <span className="text-lg">
                Assurés en sinistre (dont sécheresse) qui veulent un appui
                technique indépendant
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxide" />
              <span className="text-lg">
                Particuliers en litige avec un artisan ou une entreprise
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Ce que Justebati ne fait pas */}
      <Section background="sand">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-wider text-mist">
              Hors périmètre
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mb-12 text-4xl font-display md:text-5xl">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-2xl text-mist">×</span>
              <span className="text-lg">
                Estimation de la valeur marchande d&apos;un bien
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-2xl text-mist">×</span>
              <span className="text-lg">
                Diagnostics réglementaires obligatoires (DPE, amiante, plomb,
                termites, etc.)
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-2xl text-mist">×</span>
              <span className="text-lg">
                Travaux, rénovation, vente de traitements
              </span>
            </li>
          </ul>
          <p className="text-lg text-mist">
            Besoin d&apos;un diagnostiqueur ou d&apos;un agent immobilier ? Ce
            n&apos;est pas notre rôle. Besoin d&apos;un œil technique
            indépendant sur le bâti ? C&apos;est le nôtre.
          </p>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-display md:text-5xl lg:text-6xl">
            Parlons de votre projet
          </h2>
          <p className="mb-12 text-xl leading-relaxed text-on-night/80">
            Décrivez votre besoin, nous revenons vers vous avec un devis clair —
            sans engagement de chantier.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
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
