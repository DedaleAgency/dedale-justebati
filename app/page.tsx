import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import HeroProofPanel from "@/components/HeroProofPanel";
import MissionCard from "@/components/MissionCard";
import FranceMap from "@/components/FranceMap";

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
            <div className="max-w-[580px]">
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
              <HeroProofPanel />
            </div>
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

      {/* Nos expertises — Grille de cartes + panneau CTA */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2]">
              Notre <span className="text-copper">expertise</span> à votre service
            </h2>
            <p className="mx-auto max-w-2xl text-navy-muted">
              Avant achat, fissures, humidité, malfaçons, assurance, litige : chaque expertise apporte un regard technique neutre, sans travaux à vendre.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr,340px]">
            <div className="grid gap-6 sm:grid-cols-2">
              <MissionCard
                title="Avant achat"
                description="Bilan technique avant le compromis."
                href="/expertise-avant-achat"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                }
              />
              <MissionCard
                title="Fissures"
                description="Cause, gravité, cosmétique ou structurel."
                href="/expertise-fissures"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                }
              />
              <MissionCard
                title="Humidité"
                description="Identification de l'origine, sans vente de traitement."
                href="/expertise-humidite"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                }
              />
              <MissionCard
                title="Malfaçons et réception"
                description="Constat, réserves, non-conformités."
                href="/expertise-malfacons-reception"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                }
              />
              <MissionCard
                title="Assurance et sinistre"
                description="Assistance technique indépendante, notamment sécheresse."
                href="/assistance-expertise-assurance"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                }
              />
              <MissionCard
                title="Litige artisan"
                description="Constat pour négocier ou constituer un dossier."
                href="/litige-artisan"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                }
              />
            </div>
            
            {/* Panneau CTA */}
            <div className="flex flex-col items-center justify-center rounded-sm border border-border-on-paper bg-surface p-8 text-center lg:sticky lg:top-24 lg:self-start">
              <div className="mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-16 w-16 text-copper">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M9 3v18" />
                  <path d="M16 8h-6" />
                  <path d="M16 12h-6" />
                  <path d="M16 16h-6" />
                </svg>
              </div>
              <h3 className="mb-4 font-serif text-[24px] leading-[1.2] text-navy">
                Obtenir un devis
              </h3>
              <p className="mb-6 text-[15px] leading-[1.6] text-navy-muted">
                Décrivez votre situation. Nous vous répondons avec une proposition adaptée.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-navy px-[24px] py-[12px] text-[14px] font-semibold text-paper transition-colors duration-base hover:bg-navy/90"
              >
                Mon devis
              </Link>
            </div>
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

      {/* Nos étapes — Bande dark avec cercles outlined */}
      <section className="section-spacing bg-navy">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-paper">
              Nos <span className="text-copper">étapes</span>
            </h2>
            <p className="text-paper-muted">
              De la prise de contact à la remise du rapport, chaque étape est documentée et transparente.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { 
                num: "1", 
                label: "Contact", 
                desc: "Vous décrivez votre besoin. Nous précisons le périmètre et vous envoyons un devis clair." 
              },
              { 
                num: "2", 
                label: "Visite", 
                desc: "L'expert se rend sur place, observe, mesure, photographie les zones concernées." 
              },
              { 
                num: "3", 
                label: "Analyse", 
                desc: "Lecture des constats, hypothèses de cause, distinction entre cosmétique et grave." 
              },
              { 
                num: "4", 
                label: "Chiffrage", 
                desc: "Ordre de grandeur des travaux à prévoir pour vous aider à décider ou négocier." 
              },
              { 
                num: "5", 
                label: "Rapport", 
                desc: "Document illustré avec constats, préconisations et chiffrage. Exploitable immédiatement." 
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-copper font-mono text-[26px] font-bold text-paper">
                  {step.num}
                </div>
                <h3 className="mb-3 font-serif text-[20px] text-paper">
                  {step.label}
                </h3>
                <p className="text-[14px] leading-[1.6] text-paper-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention France — Split layout */}
      <section className="section-light section-spacing">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-center">
              <div>
                <h2 className="mb-6 font-serif text-[clamp(1.875rem,3vw,2.25rem)] leading-[1.15] text-navy">
                  Notre zone <span className="text-copper">d'intervention</span>
                </h2>
                <div className="mb-8 space-y-4 text-[16px] leading-[1.65] text-navy-muted">
                  <p>
                    Justebati intervient sur l'ensemble de la France métropolitaine pour vos expertises bâtiment. Avant achat, fissures, humidité, malfaçons, sinistre ou litige : nous nous déplaçons sur site pour établir un diagnostic technique complet.
                  </p>
                  <p>
                    Grâce à notre réseau et notre organisation, nous garantissons des interventions efficaces et adaptées, que ce soit pour des projets locaux ou à l'échelle nationale.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-copper px-[24px] py-[12px] text-[14px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
                >
                  Programmer une intervention
                </Link>
              </div>
              <div className="flex justify-center md:justify-end">
                <FranceMap className="h-auto w-full max-w-[400px]" />
              </div>
            </div>
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
