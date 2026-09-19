import Link from "next/link";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border-on-navy bg-navy text-paper">
      <div className="container-custom section-spacing">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-2">
            <Logo variant="inverse" className="mb-4 h-6 w-auto" />
            <p className="mb-4 text-sm text-paper-muted">
              {siteConfig.baseline}
            </p>
            <p className="text-sm text-paper-muted">
              Cabinet d&apos;expertise bâtiment indépendant. Aucun travaux à
              vendre.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/lexpert"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  L&apos;expert
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-se-passe"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Comment ça se passe
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Prestations */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
              Expertises
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/expertise-avant-achat"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Avant achat
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-fissures"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Fissures
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-humidite"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Humidité
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-malfacons-reception"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Malfaçons
                </Link>
              </li>
              <li>
                <Link
                  href="/assistance-expertise-assurance"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/litige-artisan"
                  className="text-paper-muted transition-colors duration-base hover:text-copper-light"
                >
                  Litige artisan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 border-t border-border-on-navy pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-paper-muted md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <p>
                &copy; {new Date().getFullYear()} {siteConfig.name}
              </p>
              <Link
                href="/mentions-legales"
                className="transition-colors duration-base hover:text-copper-light"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="transition-colors duration-base hover:text-copper-light"
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
