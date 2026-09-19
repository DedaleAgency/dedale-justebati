"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Prestations", anchor: "#missions" },
    { href: "/comment-ca-se-passe", label: "Méthode" },
    { href: "/lexpert", label: "L'expert" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/96 backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between px-6 py-[18px] lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.anchor ? `${link.href}${link.anchor}` : link.href}
              className="text-[13px] font-medium text-ink transition-colors hover:text-oxide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0100000000"
            className="font-mono text-[11px] tracking-[0.04em] text-ink hover:text-oxide"
          >
            01 00 00 00 00
          </a>
          <Button asChild size="sm" className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.anchor ? `${link.href}${link.anchor}` : link.href}
                className="text-base font-medium text-ink hover:text-oxide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0100000000"
              className="font-mono text-sm tracking-wider text-ink hover:text-oxide"
            >
              01 00 00 00 00
            </a>
            <Button asChild className="bg-ink text-paper hover:bg-oxide">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
