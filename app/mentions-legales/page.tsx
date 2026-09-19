import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Justebati",
  description:
    "Mentions légales du site justebati.fr — éditeur, hébergeur, propriété intellectuelle, contact.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Mentions légales
          </h1>
          <p className="mb-8 text-base leading-[1.65] text-navy-muted">
            Conformément aux dispositions légales applicables, les présentes mentions précisent l'éditeur, l'hébergeur et les conditions d'utilisation du site justebati.fr.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Éditeur du site
          </h2>
          <div className="mb-6 space-y-1 text-base text-navy-muted">
            <p><strong>Nom / raison sociale :</strong> [À compléter — client]</p>
            <p><strong>Forme juridique :</strong> [À compléter]</p>
            <p><strong>Capital social :</strong> [À compléter si applicable]</p>
            <p><strong>Siège social :</strong> [À compléter]</p>
            <p><strong>SIRET :</strong> [À compléter]</p>
            <p><strong>RCS / RM :</strong> [À compléter si applicable]</p>
            <p><strong>TVA intracommunautaire :</strong> [À compléter si applicable]</p>
            <p><strong>Directeur / directrice de la publication :</strong> [À compléter]</p>
            <p><strong>Téléphone :</strong> 01 00 00 00 00</p>
            <p><strong>E-mail :</strong> contact@exemple.fr</p>
          </div>
          <p className="mb-6 text-sm italic text-navy-muted">
            (Les mentions éditeur ci-dessus sont des placeholders en attendant les informations client. Le site reste en mode contrôle.)
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Réalisation
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            Conception et réalisation : <strong>Dédale Agency</strong>.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Hébergement
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            Hébergement : <strong>Dédale Agency</strong> (infrastructure de production / déploiement type Vercel — précisions techniques à finaliser si exigence nominative distincte).
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Propriété intellectuelle
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            L'ensemble des contenus du site (textes, structure, éléments graphiques, photographies fournies pour le site) est protégé. Toute reproduction non autorisée est interdite, sauf usage privé ou citation courte avec mention de la source.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Responsabilité
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            Les informations publiées le sont à titre informatif sur l'activité d'expertise bâtiment. Elles ne constituent ni un conseil juridique, ni une offre de travaux. Justebati ne vend aucun travaux.
          </p>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Contact
          </h2>
          <p className="mb-6 text-base text-navy-muted">
            Pour toute question relative au site : 01 00 00 00 00 — contact@exemple.fr.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/politique-de-confidentialite"
              className="text-copper-hover underline underline-offset-2 hover:text-copper"
            >
              Politique de confidentialité →
            </Link>
            <Link
              href="/contact"
              className="text-copper-hover underline underline-offset-2 hover:text-copper"
            >
              Contact →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
