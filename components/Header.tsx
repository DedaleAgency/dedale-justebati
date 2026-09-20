"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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

  // Determine header style based on page and scroll state
  const headerBg = isHomePage && !isScrolled 
    ? "bg-transparent" 
    : "bg-paper/95 backdrop-blur-[10px] border-b border-border-on-paper";
  
  const textColor = isHomePage && !isScrolled 
    ? "text-paper" 
    : "text-navy";
  
  const textColorMuted = isHomePage && !isScrolled 
    ? "text-paper-muted" 
    : "text-navy-muted";

  const textColorHover = isHomePage && !isScrolled 
    ? "hover:text-paper" 
    : "hover:text-navy";

  const dropdownBg = isHomePage && !isScrolled
    ? "bg-navy/95 border-border-on-navy"
    : "bg-paper border-border-on-paper";

  const dropdownItemHover = isHomePage && !isScrolled
    ? "hover:bg-paper-subtle"
    : "hover:bg-navy/[0.03]";

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isHomePage && !isScrolled 
          ? "rgba(31, 26, 20, 0)" 
          : "rgba(245, 240, 230, 0.95)",
      }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-50 ${isHomePage && !isScrolled ? "" : "border-b border-border-on-paper"}`}
    >
      <nav className="container-custom">
        <div className="flex h-[70px] items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo 
              variant={isHomePage && !isScrolled ? "inverse" : "default"} 
              className="h-7 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <div className="group relative">
              <button 
                className={`text-[13px] font-medium ${textColorMuted} transition-colors duration-base ${textColorHover}`}
              >
                Expertises
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className={`w-64 rounded-sm border ${dropdownBg} p-2 shadow-sm backdrop-blur-[10px]`}>
                  {expertises.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-sm px-4 py-2 text-sm ${textColor} transition-colors duration-base ${dropdownItemHover}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/lexpert"
              className={`text-[13px] font-medium ${textColorMuted} transition-colors duration-base ${textColorHover}`}
            >
              L&apos;expert
            </Link>
            <Link
              href="/comment-ca-se-passe"
              className={`text-[13px] font-medium ${textColorMuted} transition-colors duration-base ${textColorHover}`}
            >
              Comment ça se passe
            </Link>
            <Link
              href="/faq"
              className={`text-[13px] font-medium ${textColorMuted} transition-colors duration-base ${textColorHover}`}
            >
              FAQ
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-[13px] font-medium text-copper-hover transition-colors duration-base hover:text-copper"
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
              className={`block h-0.5 w-6 transition-transform ${isHomePage && !isScrolled ? "bg-paper" : "bg-navy"} ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity ${isHomePage && !isScrolled ? "bg-paper" : "bg-navy"} ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform ${isHomePage && !isScrolled ? "bg-paper" : "bg-navy"} ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`border-t py-4 md:hidden ${isHomePage && !isScrolled ? "border-paper/20 bg-navy/95 backdrop-blur-[10px]" : "border-border-on-paper bg-paper"}`}>
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
                    className={`block py-2 text-sm transition-colors ${isHomePage && !isScrolled ? "text-paper hover:text-copper" : "text-navy hover:text-copper"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/lexpert"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${isHomePage && !isScrolled ? "text-paper hover:text-copper" : "text-navy hover:text-copper"}`}
              >
                L&apos;expert
              </Link>
              <Link
                href="/comment-ca-se-passe"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${isHomePage && !isScrolled ? "text-paper hover:text-copper" : "text-navy hover:text-copper"}`}
              >
                Comment ça se passe
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${isHomePage && !isScrolled ? "text-paper hover:text-copper" : "text-navy hover:text-copper"}`}
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
    </motion.header>
  );
}
