import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expert bâtiment indépendant",
  description:
    "Justebati : expertise bâtiment pour particuliers. Avant achat, fissures, humidité, malfaçons, sinistres. Indépendant — aucun travaux à vendre. Devis.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Expert bâtiment indépendant | Justebati",
    description:
      "Expertise bâtiment pour particuliers. Avant achat, fissures, humidité, malfaçons, sinistres. Indépendant — aucun travaux à vendre.",
  },
};

export default function HomePage() {
  const missions = [
    {
      title: "Avant achat",
      description: "Bilan technique avant le compromis.",
      href: "/expertise-avant-achat",
      image: "/images/facade-beton.jpg",
    },
    {
      title: "Fissures",
      description: "Cause, gravité, cosmétique ou structurel.",
      href: "/expertise-fissures",
      image: "/images/fissure-01.jpg",
    },
    {
      title: "Humidité",
      description: "Identification de l'origine, sans vente de traitement.",
      href: "/expertise-humidite",
      image: "/images/humidite-mold.jpg",
    },
    {
      title: "Malfaçons et réception",
      description: "Constat, réserves, non-conformités.",
      href: "/expertise-malfacons-reception",
      image: "/images/peinture-01.jpg",
    },
    {
      title: "Assurance et sinistre",
      description: "Assistance technique indépendante, notamment sécheresse.",
      href: "/assistance-expertise-assurance",
      image: "/images/beton-01.jpg",
    },
    {
      title: "Litige artisan",
      description: "Constat pour négocier ou constituer un dossier.",
      href: "/litige-artisan",
      image: "/images/mur-01.jpg",
    },
  ];

  return (
    <>
      {/* Hero Overlay Navy */}
      <section className="relative min-h-[85vh] overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/fissure-02.jpg"
            alt="Détail de fissure sur enduit"
            fill
            className="animate-ken-burns object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(11,22,35,0.88) 0%, rgba(11,22,35,0.70) 45%, rgba(11,22,35,0.35) 100%)",
            }}
          />
        </div>
        <div className="container-custom relative flex min-h-[85vh] items-center">
          <div className="max-w-[580px] py-20">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
              Expertise bâtiment indépendante
            </div>
            <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-paper">
              Expertise bâtiment indépendante — sans travaux à vendre
            </h1>
            <p className="mb-8 text-[17px] leading-[1.65] text-paper-muted">
              Justebati est un cabinet d'expertise bâtiment pour particuliers. Inspection sur site, analyse des désordres, rapport écrit avec photos et chiffrage des travaux à prévoir.
            </p>
            <p className="mb-8 text-[17px] leading-[1.65] text-paper-muted">
              Nous ne vendons aucun travaux. Notre rôle s'arrête au diagnostic technique et au conseil clair.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
              >
                Demander un devis
              </Link>
              <Link
                href="/comment-ca-se-passe"
                className="inline-flex items-center justify-center rounded-sm border border-paper/35 px-[22px] py-3 text-[13px] font-semibold text-paper transition-colors duration-base hover:border-paper hover:bg-paper-subtle"
              >
                Comment ça se passe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Six missions — Liste éditoriale */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2]">
              Six missions
            </h2>
            <p className="mx-auto max-w-2xl text-navy-muted">
              Avant achat, fissures, humidité, malfaçons, assurance, litige : chaque expertise apporte un regard technique neutre, sans travaux à vendre.
            </p>
          </div>
          <div className="space-y-0">
            {missions.map((mission, index) => (
              <Link
                key={mission.href}
                href={mission.href}
                className="group grid grid-cols-1 gap-6 border-t border-border-on-paper py-7 transition-colors duration-base hover:bg-navy/[0.03] sm:grid-cols-[140px,1fr,auto] sm:items-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[140/88] sm:w-[140px]">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-[22px] leading-[1.25] text-navy">
                    {mission.title}
                  </h3>
                  <p className="text-sm text-navy-muted">{mission.description}</p>
                </div>
                <div className="flex items-center text-copper transition-colors group-hover:text-copper-hover">
                  <span className="text-xl">→</span>
                </div>
              </Link>
            ))}
            <div className="border-t border-border-on-paper" />
          </div>
        </div>
      </section>

      {/* Indépendance */}
      <section className="section-spacing bg-navy">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-paper">
              Indépendance
            </h2>
            <div className="space-y-4 text-base leading-[1.65] text-paper-muted">
              <p>
                Justebati ne réalise pas de travaux, ne propose pas d'entreprise partenaires et ne perçoit aucune commission sur des interventions. Le rapport reste neutre : ce que le bâtiment présente, ce qu'il faut prévoir, ce que cela peut coûter.
              </p>
              <p>
                Nous ne réalisons pas les diagnostics obligatoires (DPE, amiante, plomb, etc.) ni d'estimation immobilière.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/pierre-mur.jpg"
                alt="Détail pierre de mur"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/toiture-01.jpg"
                alt="Détail de toiture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/platre-algues.jpg"
                alt="Détail plâtre et algues"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
              Comment ça se passe
            </h2>
            <p className="mb-12 text-navy-muted">
              Contact, visite sur site, analyse, chiffrage, rapport remis. Chaque étape est documentée.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { num: "01", label: "Contact", desc: "Décrivez votre besoin" },
              { num: "02", label: "Visite", desc: "Sur site" },
              { num: "03", label: "Analyse", desc: "Des désordres" },
              { num: "04", label: "Chiffrage", desc: "Travaux à prévoir" },
              { num: "05", label: "Rapport", desc: "Remis illustré" },
            ].map((step) => (
              <div key={step.num} className="border-t-2 border-copper pt-5">
                <div className="mb-2 text-sm font-medium text-navy-muted">
                  {step.num}
                </div>
                <h3 className="mb-1 font-serif text-[18px] text-navy">
                  {step.label}
                </h3>
                <p className="text-[13px] text-navy-muted">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/comment-ca-se-passe"
              className="text-copper-hover underline underline-offset-2 transition-colors duration-base hover:text-copper"
            >
              Le détail du déroulé →
            </Link>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="section-spacing bg-navy">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-paper">
              Pour qui
            </h2>
            <div className="space-y-4 text-base leading-[1.65] text-paper-muted">
              <p>
                Propriétaires et acquéreurs : avant un achat, face à un désordre, en désaccord avec un artisan, ou dans le cadre d'un sinistre et d'une expertise d'assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spacing bg-graphite">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-paper">
              Demander un devis
            </h2>
            <p className="mb-8 text-base leading-[1.65] text-paper-muted">
              Décrivez votre situation. Nous vous répondons avec une proposition adaptée à la mission.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-copper px-[28px] py-[14px] text-[15px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
              >
                Demander un devis
              </Link>
              <a
                href="tel:0100000000"
                className="text-[15px] text-paper-muted transition-colors duration-base hover:text-paper"
              >
                ou appeler 01 00 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
