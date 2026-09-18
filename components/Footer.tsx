import Link from "next/link";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-night text-on-night">
      <div className="container-custom section-spacing">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-2">
            <Logo className="mb-4 h-8 w-auto text-on-dark" mono />
            <p className="mb-4 text-sm text-mist">
              {siteConfig.baseline}
            </p>
            <p className="text-sm text-mist">
              Cabinet d&apos;expertise bâtiment indépendant. Aucun travaux à
              vendre.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-mono font-medium uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/lexpert"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  L&apos;expert
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-se-passe"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Comment ça se passe
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Prestations */}
          <div>
            <h3 className="mb-4 text-sm font-mono font-medium uppercase tracking-wider">
              Expertises
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/expertise-avant-achat"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Avant achat
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-fissures"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Fissures
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-humidite"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Humidité
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-malfacons-reception"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Malfaçons
                </Link>
              </li>
              <li>
                <Link
                  href="/assistance-expertise-assurance"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/litige-artisan"
                  className="text-mist transition-colors hover:text-oxide"
                >
                  Litige artisan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 border-t border-mist/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-mist md:flex-row md:space-y-0">
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
