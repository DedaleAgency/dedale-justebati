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
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Façade en pierre"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/75 via-night/60 to-night/85" />
        
        {/* Filet vertical gauche */}
        <div className="absolute left-8 top-32 bottom-32 w-px bg-on-night/20 lg:left-16" />
        
        <div className="relative flex h-full items-center">
          <div className="container-custom">
            <div className="max-w-5xl">
              {/* Label mono */}
              <div className="mb-8 flex items-center gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-night/60">
                  Expertise indépendante
                </span>
                <div className="h-px w-16 bg-on-night/30" />
              </div>
              
              <h1 className="mb-10 text-[3rem] font-display leading-[1.1] tracking-[-0.03em] text-on-night md:text-7xl lg:text-8xl">
                Expertise bâtiment indépendante —<br />
                <span className="text-on-night/80">sans travaux à vendre</span>
              </h1>
              
              <div className="mb-12 h-px w-24 bg-oxide" />
              
              <p className="mb-12 max-w-2xl text-xl leading-relaxed text-on-night/85 md:text-2xl">
                Justebati est un cabinet d&apos;expertise bâtiment pour
                particuliers. Nous inspectons votre bien, identifions les
                désordres et vous remettons un rapport clair — avec photos et
                préconisations. Nous ne vendons aucun travaux.
              </p>
              
              <div className="flex flex-col items-start gap-5 sm:flex-row">
                <Button href="/contact">Demander un avis</Button>
                <a
                  href="#prestations"
                  className="group flex items-center gap-3 text-sm font-medium text-on-night/90 transition-colors hover:text-on-night"
                >
                  <span>Découvrir nos missions</span>
                  <span className="text-oxide transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filet horizontal bas */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-on-night/20" />
      </section>

      {/* Introduction */}
      <Section>
        <div className="hairline-top pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-baseline gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">
                01
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                  Notre mission
                </span>
              </div>
            </div>
            <h2 className="mb-16 text-5xl font-display leading-[1.15] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              Ce que Justebati<br />fait pour vous
            </h2>
            <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Sur site, l&apos;expert observe la structure, l&apos;enveloppe,
                  les points sensibles (fissures, humidité, toiture, malfaçons).
                </p>
                <p>
                  Il distingue le cosmétique du grave. Il chiffre les travaux à
                  prévoir. Il formalise le tout dans un rapport écrit exploitable.
                </p>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-mist">
                <p>
                  Pour décider, négocier ou constituer un dossier.
                </p>
                <p>
                  Justebati ne réalise pas les diagnostics obligatoires (DPE,
                  amiante, etc.) ni d&apos;estimation immobilière. Notre métier,
                  c&apos;est l&apos;expertise technique du bâti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expertises */}
      <Section background="sand" id="prestations">
        <div className="hairline-top pt-16">
          <div className="mb-12 flex items-baseline gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">
              02
            </span>
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                Prestations
              </span>
            </div>
          </div>
          <h2 className="mb-20 max-w-4xl text-5xl font-display leading-[1.15] tracking-[-0.02em] md:text-6xl lg:text-7xl">
            Six missions,<br />une même exigence
          </h2>
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {expertises.map((expertise) => (
              <ExpertiseCard key={expertise.href} {...expertise} />
            ))}
          </div>
        </div>
      </Section>

      {/* Indépendance */}
      <Section background="dark">
        <div className="hairline-top border-on-night/20 pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-baseline gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-night/40">
                03
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-night/60">
                  Indépendance
                </span>
              </div>
            </div>
            <h2 className="mb-16 text-5xl font-display leading-[1.15] tracking-[-0.02em] text-on-night md:text-6xl lg:text-7xl">
              Pourquoi l&apos;indépendance<br />change tout
            </h2>
            <div className="max-w-3xl">
              <div className="mb-8 h-px w-24 bg-oxide" />
              <p className="text-xl leading-relaxed text-on-night/85 md:text-2xl">
                Beaucoup d&apos;intervenants du bâtiment ont un intérêt à vous
                vendre des travaux. Justebati n&apos;en a aucun : nous ne réalisons
                pas les chantiers que nous préconisons. Notre rémunération,
                c&apos;est la mission d&apos;expertise. Votre rapport reste neutre,
                lisible et utilisable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Comment ça se passe */}
      <Section background="sand">
        <div className="hairline-top pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-baseline gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">
                04
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                  Déroulement
                </span>
              </div>
            </div>
            <h2 className="mb-20 text-5xl font-display leading-[1.15] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              Comment ça se passe<br />— en bref
            </h2>
            <ol className="mb-12 space-y-8">
            <li className="flex items-start gap-8 border-l border-line/40 pl-8">
              <span className="font-mono text-xs font-medium text-oxide">
                01
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-display">Contact</h3>
                <p className="leading-relaxed text-mist">
                  Vous décrivez votre besoin (appel ou formulaire).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-8 border-l border-line/40 pl-8">
              <span className="font-mono text-xs font-medium text-oxide">
                02
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-display">Visite</h3>
                <p className="leading-relaxed text-mist">
                  Visite sur site et relevés.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-8 border-l border-line/40 pl-8">
              <span className="font-mono text-xs font-medium text-oxide">
                03
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-display">Analyse</h3>
                <p className="leading-relaxed text-mist">
                  Analyse des désordres et de leur gravité.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-8 border-l border-line/40 pl-8">
              <span className="font-mono text-xs font-medium text-oxide">
                04
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-display">Chiffrage</h3>
                <p className="leading-relaxed text-mist">
                  Chiffrage des travaux à prévoir.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-8 border-l border-line/40 pl-8">
              <span className="font-mono text-xs font-medium text-oxide">
                05
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-display">Rapport</h3>
                <p className="leading-relaxed text-mist">
                  Remise du rapport écrit illustré.
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-12 flex items-center gap-4 text-sm">
            <span className="text-mist">Le détail complet</span>
            <div className="h-px w-8 bg-line" />
            <a
              href="/comment-ca-se-passe"
              className="font-medium text-oxide transition-colors hover:text-ink"
            >
              Comment se déroule une expertise →
            </a>
          </div>
          </div>
        </div>
      </Section>

      {/* Pour qui */}
      <Section>
        <div className="hairline-top pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-baseline gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">
                05
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                  Public
                </span>
              </div>
            </div>
            <h2 className="mb-16 text-5xl font-display leading-[1.15] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              Pour qui ?
            </h2>
            <ul className="space-y-6">
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
        </div>
      </Section>

      {/* Ce que Justebati ne fait pas */}
      <Section background="sand">
        <div className="hairline-top pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-baseline gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">
                06
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                  Hors périmètre
                </span>
              </div>
            </div>
            <h2 className="mb-16 text-5xl font-display leading-[1.15] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              Ce que Justebati<br />ne fait pas
            </h2>
            <ul className="mb-12 space-y-6">
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
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="dark">
        <div className="hairline-top border-on-night/20 pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-baseline gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-night/40">
                07
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-night/60">
                  Contact
                </span>
              </div>
            </div>
            <h2 className="mb-12 text-5xl font-display leading-[1.15] tracking-[-0.02em] text-on-night md:text-6xl lg:text-7xl">
              Parlons de<br />votre projet
            </h2>
            <div className="mb-16 h-px w-24 bg-oxide" />
            <p className="mb-16 max-w-2xl text-xl leading-relaxed text-on-night/85 md:text-2xl">
              Décrivez votre besoin, nous revenons vers vous avec un avis clair —
              sans engagement de chantier.
            </p>
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <Button href="/contact">Demander un avis</Button>
              <a
                href="tel:0100000000"
                className="group flex items-center gap-3 text-sm font-medium text-on-night/90 transition-colors hover:text-on-night"
              >
                <span>Appeler 01 00 00 00 00</span>
                <span className="text-oxide transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
