import Link from "next/link";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ok-dark text-on-dark">
      <div className="container-custom section-spacing">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-2">
            <Logo className="mb-4 h-8 w-auto text-on-dark" mono />
            <p className="mb-4 text-sm text-stone">
              {siteConfig.baseline}
            </p>
            <p className="text-sm text-stone">
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
                  className="text-stone transition-colors hover:text-copper"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/lexpert"
                  className="text-stone transition-colors hover:text-copper"
                >
                  L&apos;expert
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-se-passe"
                  className="text-stone transition-colors hover:text-copper"
                >
                  Comment ça se passe
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-stone transition-colors hover:text-copper"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone transition-colors hover:text-copper"
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
                  className="text-stone transition-colors hover:text-copper"
                >
                  Avant achat
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-fissures"
                  className="text-stone transition-colors hover:text-copper"
                >
                  Fissures
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-humidite"
                  className="text-stone transition-colors hover:text-copper"
                >
                  Humidité
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-malfacons-reception"
                  className="text-stone transition-colors hover:text-copper"
                >
                  Malfaçons
                </Link>
              </li>
              <li>
                <Link
                  href="/assistance-expertise-assurance"
                  className="text-stone transition-colors hover:text-copper"
                >
                  Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/litige-artisan"
                  className="text-stone transition-colors hover:text-copper"
                >
                  Litige artisan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 border-t border-stone/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-stone md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <p>
                &copy; {new Date().getFullYear()} {siteConfig.name}
              </p>
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-copper"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="transition-colors hover:text-copper"
              >
                Confidentialité
              </Link>
            </div>
            <p className="text-center md:text-right">
              Réalisation{" "}
              <span className="text-copper">Dédale Agency</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
