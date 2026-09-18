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
    <header className="sticky top-0 z-50 border-b border-line/50 bg-paper/80 backdrop-blur-md">
      <nav className="container-custom">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-10 md:flex">
            <div className="group relative">
              <button className="text-sm font-medium text-ink transition-colors hover:text-oxide">
                Expertises
              </button>
              <div className="absolute left-0 top-full hidden pt-3 group-hover:block">
                <div className="w-72 border border-line/30 bg-paper/95 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                  {expertises.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded px-4 py-2 text-sm text-ink transition-colors hover:bg-sand hover:text-oxide"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/lexpert"
              className="text-sm font-medium text-ink transition-colors hover:text-oxide"
            >
              L&apos;expert
            </Link>
            <Link
              href="/comment-ca-se-passe"
              className="text-sm font-medium text-ink transition-colors hover:text-oxide"
            >
              Comment ça se passe
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-ink transition-colors hover:text-oxide"
            >
              FAQ
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm font-medium text-oxide transition-colors hover:text-ink"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-lg bg-oxide px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
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
              className={`block h-0.5 w-6 bg-ink transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-line py-4 md:hidden">
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-xs font-mono font-medium uppercase tracking-wider text-mist">
                  Expertises
                </div>
                {expertises.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm text-ink transition-colors hover:text-oxide"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/lexpert"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-ink transition-colors hover:text-oxide"
              >
                L&apos;expert
              </Link>
              <Link
                href="/comment-ca-se-passe"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-ink transition-colors hover:text-oxide"
              >
                Comment ça se passe
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-ink transition-colors hover:text-oxide"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 block rounded-lg bg-oxide px-6 py-2.5 text-center text-sm font-medium text-paper"
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
