import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Cartouche from "@/components/Cartouche";
import MissionRow from "@/components/MissionRow";
import FriseEtapes from "@/components/FriseEtapes";
import SeqPhoto from "@/components/SeqPhoto";
import CoteAnnotation from "@/components/CoteAnnotation";
import Link from "next/link";
import Image from "next/image";

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
  const missions = [
    {
      number: "M01",
      title: "Expertise avant achat",
      description: "Sécurisez votre projet avant le compromis : bilan technique indépendant, points de vigilance, ordre de grandeur des travaux.",
      href: "/expertise-avant-achat",
    },
    {
      number: "M02",
      title: "Expertise fissures",
      description: "Cause, gravité, suivi ou réparation : un constat précis pour savoir si la fissure est cosmétique ou structurelle.",
      href: "/expertise-fissures",
    },
    {
      number: "M03",
      title: "Expertise humidité",
      description: "Moisissures, infiltrations, remontées capillaires : on cherche la cause, pas un traitement à vendre.",
      href: "/expertise-humidite",
    },
    {
      number: "M04",
      title: "Malfaçons et réception",
      description: "Assistance à la réception, réserves, non-conformités : un constat indépendant pour défendre vos intérêts.",
      href: "/expertise-malfacons-reception",
    },
    {
      number: "M05",
      title: "Assistance assurance et sinistre",
      description: "Sécheresse, dégât des eaux, litige d'indemnisation : une assistance technique indépendante face à l'assureur.",
      href: "/assistance-expertise-assurance",
    },
    {
      number: "M06",
      title: "Litige avec un artisan",
      description: "Constat pour négocier à l'amiable ou constituer un dossier solide. Aucun travaux à vendre.",
      href: "/litige-artisan",
    },
  ];

  return (
    <>
      <section className="grid border-b border-ink lg:grid-cols-[7fr_5fr] lg:min-h-[88vh]">
        <div className="relative min-h-[42vh] overflow-hidden bg-night lg:min-h-[88vh]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Mur en béton avec détail de joint architectural"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.5) contrast(1.08)" }}
            priority
          />
          <CoteAnnotation
            number="01"
            label="Joint pierre"
            position={{ left: "12%", top: "38%" }}
          />
          <CoteAnnotation
            number="02"
            label="Point sensible"
            position={{ left: "52%", top: "58%" }}
          />
          <div className="absolute bottom-4 left-4 border-l-2 border-oxide bg-night/45 px-[10px] py-[6px] font-mono text-[10px] uppercase tracking-[0.08em] text-on-night">
            Photo · façade · lumière rasante
          </div>
        </div>

        <div className="flex flex-col border-t border-ink px-6 py-9 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
          <Cartouche
            fields={[
              { label: "Doc.", value: "JB-01" },
              { label: "Accueil", value: "" },
              { label: "Statut", value: "Indépendant" },
              { label: "Travaux", value: "Aucun" },
            ]}
          />
          <div className="mb-[10px] mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
            Observation terrain
          </div>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.02em]">
            Expertise bâtiment indépendante — sans travaux à vendre
          </h1>
          <p className="mb-7 max-w-[38ch] text-[15px] leading-relaxed text-mist">
            L&apos;œil indépendant sur votre bâti. Justebati inspecte votre bien, identifie les
            désordres et vous remet un rapport clair — avec photos et préconisations. Nous ne
            vendons aucun travaux.
          </p>
          <div className="mt-auto flex flex-col items-start gap-[14px]">
            <Button asChild className="bg-ink text-paper hover:bg-oxide">
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Link
              href="#missions"
              className="relative border-b border-oxide pb-[2px] text-[13px] font-medium hover:text-oxide"
            >
              Découvrir nos prestations
            </Link>
          </div>
        </div>
      </section>

      <section className="grid border-b border-ink px-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:px-12 lg:py-20">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
            Ce que Justebati fait
          </div>
          <h2 className="max-w-[16ch] font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-medium leading-[1.2] tracking-[-0.015em]">
            Un regard technique neutre. Pas un devis de chantier déguisé.
          </h2>
        </div>
        <div className="mt-6 space-y-4 text-mist lg:mt-0">
          <p>
            Vous achetez, vous constatez une fissure, vous doutez d&apos;une humidité, vous êtes en
            litige ou face à un sinistre : vous avez besoin d&apos;un regard technique neutre.
          </p>
          <p>
            Sur site, l&apos;expert observe la structure, l&apos;enveloppe, les points sensibles (fissures,
            humidité, toiture, malfaçons). Il distingue le cosmétique du grave. Il chiffre les
            travaux à prévoir. Il formalise le tout dans un rapport écrit exploitable — pour
            décider, négocier ou constituer un dossier.
          </p>
        </div>
      </section>

      <section className="grid border-b border-ink lg:grid-cols-[5fr_7fr]" id="independance">
        <div className="border-b border-line bg-sand px-6 py-14 lg:border-b-0 lg:border-r lg:px-10 lg:py-16">
          <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.04em] text-oxide">
            Notes de terrain
          </div>
          <ul className="space-y-0">
            {[
              { n: "01", label: "Structure", desc: "Points sensibles, charges, désordres structurels" },
              { n: "02", label: "Enveloppe", desc: "Toiture, façades, joints, infiltrations" },
              { n: "03", label: "Gravité", desc: "Cosmétique vs grave — distinction écrite" },
              { n: "04", label: "Chiffrage", desc: "Ordre de grandeur des travaux à prévoir" },
            ].map((item) => (
              <li
                key={item.n}
                className="border-b border-line py-[14px] font-mono text-[12px] tracking-[0.02em]"
              >
                {item.n} — {item.label}
                <span className="mt-1 block font-sans text-[14px] normal-case tracking-normal text-mist">
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center px-6 py-14 lg:px-14 lg:py-16">
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[0.04em] text-mist">
            Conclusion · rapport
          </div>
          <h2 className="mb-[18px] max-w-[18ch] font-display text-[clamp(1.6rem,2.5vw,2.3rem)] font-medium leading-[1.2] tracking-[-0.015em]">
            Pourquoi l&apos;indépendance change tout
          </h2>
          <p className="max-w-[46ch] text-mist">
            Beaucoup d&apos;intervenants du bâtiment ont un intérêt à vous vendre des travaux. Justebati
            n&apos;en a aucun : nous ne réalisons pas les chantiers que nous préconisons. Notre
            rémunération, c&apos;est la mission d&apos;expertise. Votre rapport reste neutre, lisible et
            utilisable.
          </p>
        </div>
      </section>

      <section className="border-b border-ink" id="missions">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-line px-6 py-12 lg:flex-row lg:items-baseline lg:px-12 lg:py-10">
          <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-medium tracking-[-0.015em]">
            Six missions, une même exigence
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-mist">
            Index · JB-M01 → M06
          </span>
        </div>
        {missions.map((mission) => (
          <MissionRow key={mission.number} {...mission} />
        ))}
      </section>

      <section className="border-b border-ink" id="process">
        <div className="px-6 py-12 lg:px-12 lg:pb-2 lg:pt-14">
          <div className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
            Déroulement
          </div>
          <h2 className="mb-2 font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-medium tracking-[-0.015em]">
            Comment ça se passe — en bref
          </h2>
          <p className="mb-6 max-w-[48ch] text-mist">
            Le détail étape par étape est sur la page méthode.
          </p>
          <Link href="/comment-ca-se-passe" className="text-[13px] text-ink underline decoration-oxide hover:text-oxide">
            Voir le déroulé complet →
          </Link>
        </div>
        <FriseEtapes />
      </section>

      <SeqPhoto
        wideImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
        wideAlt="Volume bâti, vue d'ensemble de la façade"
        detailImage="https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2074&auto=format&fit=crop"
        detailAlt="Fissure fine sur enduit, vue rapprochée"
      />

      <section className="grid border-b border-ink lg:grid-cols-2">
        <article className="border-b border-line bg-paper px-6 py-14 lg:border-b-0 lg:border-r lg:px-12 lg:py-16">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
            Pour qui ?
          </div>
          <h2 className="mb-5 font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-medium leading-[1.2] tracking-[-0.015em]">
            Ceux qui ont besoin d&apos;un œil technique neutre
          </h2>
          <ul className="space-y-0">
            {[
              "Acquéreurs avant d&apos;acheter",
              "Propriétaires face à un désordre",
              "Maîtres d&apos;ouvrage en réception",
              "Assurés en sinistre (dont sécheresse)",
              "Particuliers en litige avec un artisan",
            ].map((item, i) => (
              <li
                key={i}
                className="border-b border-line py-[10px] text-[14.5px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="bg-night px-6 py-14 text-on-night lg:px-12 lg:py-16">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.07em] text-[#C4502A]">
            Ce que Justebati ne fait pas
          </div>
          <h2 className="mb-5 font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-medium leading-[1.2] tracking-[-0.015em]">
            Clarifier le périmètre
          </h2>
          <ul className="space-y-0">
            {[
              "Estimation de la valeur marchande d'un bien",
              "Diagnostics réglementaires (DPE, amiante, plomb…)",
              "Travaux, rénovation, vente de traitements",
            ].map((item, i) => (
              <li
                key={i}
                className="border-b border-[#2A2824] py-[10px] text-[14.5px] text-on-night/78"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] text-on-night/55">
            Besoin d&apos;un diagnostiqueur ou d&apos;un agent immobilier ? Ce n&apos;est pas notre rôle. Besoin
            d&apos;un œil technique indépendant sur le bâti ? C&apos;est le nôtre.
          </p>
        </article>
      </section>

      <section className="grid items-end gap-10 border-b border-ink bg-sand px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-12 lg:py-20">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
            Prochaine étape
          </div>
          <h2 className="max-w-[16ch] font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.02em]">
            Demandez un devis. Ou appelez.
          </h2>
          <p className="mt-3 max-w-[40ch] text-mist">
            Décrivez votre bien et votre problème — nous revenons vers vous pour cadrer la mission.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <Link href="tel:0100000000" className="text-[13px] font-medium text-ink hover:text-oxide">
            Appeler le 01 00 00 00 00
          </Link>
          <a href="mailto:contact@exemple.fr" className="text-[13px] font-medium text-ink hover:text-oxide">
            contact@exemple.fr
          </a>
        </div>
      </section>
    </>
  );
}
