"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setIsVisible(scrollPercentage > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2.5 border-t border-line/30 bg-oxide/95 px-6 py-3.5 text-sm font-medium text-paper shadow-[0_-2px_8px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:bg-ink md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "max(0.875rem, env(safe-area-inset-bottom))" }}
      aria-label={`Appeler ${siteConfig.name}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-4.5 w-4.5 flex-shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
      <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
    </a>
  );
}
