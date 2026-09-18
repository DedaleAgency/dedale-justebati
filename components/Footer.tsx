import Link from "next/link";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line/30 bg-night text-on-night">
      <div className="container-custom py-24 md:py-32">
        <div className="mb-20 grid gap-16 md:grid-cols-12">
          {/* Marque */}
          <div className="md:col-span-6">
            <Logo className="mb-8 h-8 w-auto text-on-night" mono />
            <p className="mb-6 text-xl font-display leading-relaxed text-on-night/90">
              {siteConfig.baseline}
            </p>
            <p className="leading-relaxed text-on-night/60">
              Cabinet d&apos;expertise bâtiment indépendant. Aucun travaux à
              vendre.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-6 text-xs font-mono font-medium uppercase tracking-widest text-on-night/60">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/lexpert"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  L&apos;expert
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-se-passe"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Comment ça se passe
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Prestations */}
          <div className="md:col-span-4">
            <h3 className="mb-6 text-xs font-mono font-medium uppercase tracking-widest text-on-night/60">
              Expertises
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/expertise-avant-achat"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Avant achat
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-fissures"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Fissures
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-humidite"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Humidité
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-malfacons-reception"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Malfaçons
                </Link>
              </li>
              <li>
                <Link
                  href="/assistance-expertise-assurance"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/litige-artisan"
                  className="text-on-night/60 transition-colors hover:text-on-night"
                >
                  Litige artisan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-on-night/10 pt-10">
          <div className="flex flex-col items-center justify-between space-y-4 font-mono text-xs tracking-wider text-on-night/40 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <p>
                &copy; {new Date().getFullYear()} {siteConfig.name}
              </p>
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-oxide"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="transition-colors hover:text-oxide"
              >
                Confidentialité
              </Link>
            </div>
            <p className="text-center md:text-right">
              Réalisation{" "}
              <span className="text-oxide">Dédale Agency</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
