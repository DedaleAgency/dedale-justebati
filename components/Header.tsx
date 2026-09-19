"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const expertises = [
    { name: "Expertise avant achat", href: "/expertise-avant-achat" },
    { name: "Expertise fissures", href: "/expertise-fissures" },
    { name: "Expertise humidité", href: "/expertise-humidite" },
    {
      name: "Malfaçons et réception",
      href: "/expertise-malfacons-reception",
    },
    {
      name: "Assistance assurance",
      href: "/assistance-expertise-assurance",
    },
    { name: "Litige artisan", href: "/litige-artisan" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-on-navy bg-navy/90 backdrop-blur-[10px]">
      <nav className="container-custom">
        <div className="flex h-[70px] items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo variant="inverse" className="h-7 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <div className="group relative">
              <button className="text-[13px] font-medium text-paper-muted transition-colors duration-base hover:text-paper">
                Expertises
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="w-64 rounded-sm border border-border-on-navy bg-graphite p-2 shadow-sm">
                  {expertises.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-sm px-4 py-2 text-sm text-paper transition-colors duration-base hover:bg-paper-subtle hover:text-copper-light"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/lexpert"
              className="text-[13px] font-medium text-paper-muted transition-colors duration-base hover:text-paper"
            >
              L&apos;expert
            </Link>
            <Link
              href="/comment-ca-se-passe"
              className="text-[13px] font-medium text-paper-muted transition-colors duration-base hover:text-paper"
            >
              Comment ça se passe
            </Link>
            <Link
              href="/faq"
              className="text-[13px] font-medium text-paper-muted transition-colors duration-base hover:text-paper"
            >
              FAQ
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-[13px] font-medium text-copper-light transition-colors duration-base hover:text-copper"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-paper transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-paper transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-paper transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border-on-navy py-4 md:hidden">
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
                  Expertises
                </div>
                {expertises.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm text-paper transition-colors hover:text-copper-light"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/lexpert"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-paper transition-colors hover:text-copper-light"
              >
                L&apos;expert
              </Link>
              <Link
                href="/comment-ca-se-passe"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-paper transition-colors hover:text-copper-light"
              >
                Comment ça se passe
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-paper transition-colors hover:text-copper-light"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 block rounded-sm bg-copper px-6 py-2.5 text-center text-sm font-semibold text-white"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
