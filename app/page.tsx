import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import HeroProofPanel from "@/components/HeroProofPanel";
import { FadeUp, StaggerContainer, StaggerItem, HeroAnimated, HeroItem } from "@/components/AnimatedWrappers";

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
                "linear-gradient(105deg, rgba(31,26,20,0.86) 0%, rgba(31,26,20,0.56) 55%, rgba(31,26,20,0.38) 100%)",
            }}
          />
        </div>
        <div className="container-custom relative flex min-h-[85vh] items-center">
          <div className="flex w-full flex-col items-start gap-8 py-20 lg:flex-row lg:items-center lg:justify-between">
            <HeroAnimated className="max-w-[580px]">
              <HeroItem className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
                Expertise bâtiment indépendante
              </HeroItem>
              <HeroItem className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-paper">
                Expertise bâtiment indépendante — sans travaux à vendre
              </HeroItem>
              <HeroItem className="mb-8 text-[17px] leading-[1.65] text-paper-muted">
                Justebati est un cabinet d'expertise bâtiment pour particuliers. Inspection sur site, analyse des désordres, rapport écrit avec photos et chiffrage des travaux à prévoir.
              </HeroItem>
              <HeroItem className="mb-8 text-[17px] leading-[1.65] text-paper-muted">
                Nous ne vendons aucun travaux. Notre rôle s'arrête au diagnostic technique et au conseil clair.
              </HeroItem>
              <HeroItem className="flex flex-col gap-4 sm:flex-row">
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
              </HeroItem>
              <HeroItem className="mt-8 lg:hidden">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: "✓", text: "Aucun travaux à vendre" },
                    { icon: "⏱", text: "Intervention sous 10 jours" },
                    { icon: "📄", text: "Rapport illustré détaillé" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-sm border border-paper/20 bg-navy/40 p-3 backdrop-blur-sm">
                      <span className="text-copper">{item.icon}</span>
                      <p className="text-[13px] leading-[1.4] text-paper">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </HeroItem>
            </HeroAnimated>
            <HeroProofPanel />
          </div>
        </div>
      </section>

      {/* Cabinet — Editorial + Image */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
                Cabinet
              </div>
              <h2 className="mb-6 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
                Expertise technique du bâti pour particuliers
              </h2>
              <p className="mb-4 text-[17px] leading-[1.65] text-navy">
                Structure, enveloppe, fissures, humidité, toiture, malfaçons : nous distinguons le cosmétique du grave et chiffrons les travaux à prévoir.
              </p>
              <p className="text-sm text-navy-muted">
                Hors périmètre : DPE et diagnostics réglementaires, estimation immobilière, travaux.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/fissure-02.jpg"
                alt="Détail fissure et ferraillage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Six missions — Rangées éditoriales (Direction C) */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <FadeUp className="mb-12">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper-hover">
              Missions
            </div>
            <h2 className="mb-4 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2]">
              Six expertises, <em className="font-serif italic text-copper">une</em> indépendance
            </h2>
            <p className="max-w-2xl text-[16px] text-navy-muted">
              Avant achat, fissures, humidité, malfaçons, assurance, litige : chaque expertise apporte un regard technique neutre, sans travaux à vendre.
            </p>
          </FadeUp>
          <StaggerContainer className="space-y-0">
            {missions.map((mission, index) => (
              <StaggerItem key={mission.href}>
                <Link
                  href={mission.href}
                  className="group grid grid-cols-1 gap-6 border-t border-border-on-paper py-7 transition-colors duration-base hover:bg-navy/[0.02] sm:grid-cols-[140px,1fr,auto] sm:items-center"
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
                    <p className="max-w-[520px] text-[14px] text-navy-muted">{mission.description}</p>
                  </div>
                  <div className="flex items-center text-[13px] font-semibold text-copper-hover transition-colors group-hover:text-copper">
                    En savoir plus →
                  </div>
                </Link>
              </StaggerItem>
            ))}
            <div className="border-t border-border-on-paper" />
          </StaggerContainer>
        </div>
      </section>

      {/* Indépendance */}
      <section className="bg-white section-spacing">
        <div className="container-custom">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
              Indépendance
            </h2>
            <div className="space-y-4 text-base leading-[1.65] text-navy-muted">
              <p>
                Justebati ne réalise pas de travaux, ne propose pas d'entreprise partenaires et ne perçoit aucune commission sur des interventions. Le rapport reste neutre : ce que le bâtiment présente, ce qu'il faut prévoir, ce que cela peut coûter.
              </p>
              <p>
                Nous ne réalisons pas les diagnostics obligatoires (DPE, amiante, plomb, etc.) ni d'estimation immobilière.
              </p>
            </div>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-3 sm:grid-cols-3">
            <StaggerItem className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/pierre-mur.jpg"
                alt="Détail pierre de mur"
                fill
                className="object-cover"
              />
            </StaggerItem>
            <StaggerItem className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/toiture-01.jpg"
                alt="Détail de toiture"
                fill
                className="object-cover"
              />
            </StaggerItem>
            <StaggerItem className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/platre-algues.jpg"
                alt="Détail plâtre et algues"
                fill
                className="object-cover"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Méthode — StepRail 5 temps sur surface-dark */}
      <section className="section-spacing bg-navy">
        <div className="container-custom">
          <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
              Méthode
            </div>
            <h2 className="mb-6 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-paper">
              Comment ça se <em className="font-serif italic text-copper">passe</em>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { 
                num: "01", 
                label: "Prise de contact", 
                desc: "Vous décrivez le besoin. Nous cadrons la mission et le devis — sans engagement de travaux." 
              },
              { 
                num: "02", 
                label: "Visite", 
                desc: "Inspection sur site, relevés et photographies des désordres constatés." 
              },
              { 
                num: "03", 
                label: "Analyses", 
                desc: "Lecture technique des causes probables et de la gravité — méthode documentée." 
              },
              { 
                num: "04", 
                label: "Rapport", 
                desc: "Livrable clair : constats, photos, préconisations. Exploitable pour vous." 
              },
              { 
                num: "05", 
                label: "Suites", 
                desc: "Échanges sur le rapport si besoin. Nous ne réalisons ni ne vendons les travaux." 
              },
            ].map((step) => (
              <StaggerItem 
                key={step.num} 
                className="border-t-2 border-copper pt-5"
              >
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
                  {step.num}
                </div>
                <h3 className="mb-2 font-serif text-[18px] leading-[1.2] text-paper">
                  {step.label}
                </h3>
                <p className="text-[13px] leading-[1.55] text-paper-muted">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Zone d'intervention PACA — Split layout avec SVG */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid gap-12 md:grid-cols-[1.05fr,0.95fr] md:items-center">
              <StaggerItem>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper-hover">
                  Couverture
                </div>
                <h2 className="mb-6 font-serif text-[clamp(1.875rem,3vw,2.25rem)] leading-[1.15] text-navy">
                  Zone d'<em className="font-serif italic text-copper">intervention</em>
                </h2>
                <div className="mb-8 space-y-4 text-[16px] leading-[1.65] text-navy-muted">
                  <p>
                    Justebati intervient en région Provence-Alpes-Côte d'Azur pour vos expertises bâtiment. Avant achat, fissures, humidité, malfaçons, sinistre ou litige : nous nous déplaçons sur site pour établir un diagnostic technique complet.
                  </p>
                  <p>
                    Déplacement et devis selon la nature de la mission. Nos interventions couvrent l'ensemble de la région PACA.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-copper px-[24px] py-[12px] text-[14px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
                >
                  Demander un devis
                </Link>
              </StaggerItem>
              <StaggerItem className="flex justify-center md:justify-end">
                <Image
                  src="/maps/carte-intervention.svg"
                  alt="Région Provence-Alpes-Côte d'Azur"
                  width={423}
                  height={364}
                  className="h-auto w-full max-w-[340px]"
                />
              </StaggerItem>
            </StaggerContainer>
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
