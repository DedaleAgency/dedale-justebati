import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";
import FriseEtapes from "@/components/FriseEtapes";

export const metadata: Metadata = {
  title: "Déroulement d'une expertise",
  description:
    "Prise de contact, visite, analyses, rapport : le déroulé d'une mission Justebati, étape par étape. Transparent, technique, indépendant. Demandez un devis.",
  alternates: {
    canonical: "/comment-ca-se-passe",
  },
};

export default function CommentCaSePasse() {
  return (
    <>
      <PageLayout>
        <PageHero
          imageSrc="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop"
          imageAlt="Carnet de notes et documents techniques"
        />
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-MET" },
            { label: "Objet", value: "Méthode" },
            { label: "Process", value: "5 étapes" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Process transparent
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Comment se déroule une expertise
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Une mission Justebati suit un déroulé simple et transparent. Cinq étapes, du premier
            contact au rapport. Pas de surprise sur le rôle de l&apos;expert : constater, analyser,
            chiffrer, écrire — sans vendre de travaux.
          </p>
        </div>
      </PageLayout>

      <div className="border-b border-ink">
        <FriseEtapes />
      </div>

      <PageLayout>
        <div className="prose max-w-none">
          <h2>Étape 1 — Contact et cadrage</h2>
          <p>
            Vous appelez le 01 00 00 00 00 ou <Link href="/contact">demandez un devis</Link>. Vous
            décrivez le bien, le problème et votre objectif (achat, désordre, réception, litige,
            sinistre). Nous précisons le périmètre de la mission et les conditions
            d&apos;intervention.
          </p>
          <p>Aucun engagement de chantier. Un devis d&apos;expertise, clair.</p>

          <h2>Étape 2 — Visite sur site</h2>
          <p>
            L&apos;expert se rend sur place. Il observe les zones concernées et, selon la mission,
            élargit le regard aux points sensibles du bâti. Photos, mesures, notes. Votre présence
            est utile pour préciser l&apos;historique (travaux, sinistres, évolutions).
          </p>

          <h2>Étape 3 — Analyse</h2>
          <p>
            Retour au cabinet : lecture des constats, hypothèses de cause, distinction entre
            désordre cosmétique et enjeu plus grave. Si une investigation complémentaire est
            souhaitable (hors mission), elle est signalée sans ambiguïté.
          </p>

          <h2>Étape 4 — Chiffrage des travaux à prévoir</h2>
          <p>
            Lorsque c&apos;est pertinent, l&apos;expert établit un ordre de grandeur des travaux à
            prévoir. Ce chiffrage aide à décider ou négocier. Il ne constitue pas un devis de
            travaux Justebati : nous ne réalisons pas les chantiers.
          </p>

          <h2>Étape 5 — Rapport écrit</h2>
          <p>
            Vous recevez un rapport illustré : constats, analyse, préconisations, chiffrage le cas
            échéant. Document transmissible à vos interlocuteurs (notaire, artisan, assureur,
            conseil).
          </p>
          <p>
            Les délais exacts dépendent de la mission et de la charge ; ils sont précisés lors du
            devis. Voir aussi la <Link href="/faq">FAQ</Link>.
          </p>

          <h2>Selon votre besoin</h2>
          <ul>
            <li>
              <Link href="/expertise-avant-achat">Avant achat</Link>
            </li>
            <li>
              <Link href="/expertise-fissures">Fissures</Link>
            </li>
            <li>
              <Link href="/expertise-humidite">Humidité</Link>
            </li>
            <li>
              <Link href="/expertise-malfacons-reception">Malfaçons et réception</Link>
            </li>
            <li>
              <Link href="/assistance-expertise-assurance">Assurance et sinistre</Link>
            </li>
            <li>
              <Link href="/litige-artisan">Litige artisan</Link>
            </li>
          </ul>

          <h2>Rappel d&apos;indépendance</h2>
          <p>
            Justebati ne vend aucun travaux, ne réalise pas les diagnostics obligatoires (DPE,
            amiante…) ni d&apos;estimation immobilière.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/faq">Lire la FAQ</Link>
          </Button>
        </div>
      </PageLayout>
    </>
  );
}
