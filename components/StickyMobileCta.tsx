"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-4 border-t border-line bg-ink px-4 py-3 lg:hidden">
      <a
        href="tel:0100000000"
        className="text-[13px] font-semibold text-paper hover:text-sand"
      >
        Appeler 01 00 00 00 00
      </a>
      <span className="text-paper/40">|</span>
      <Button asChild size="sm" variant="secondary" className="bg-paper text-ink hover:bg-sand">
        <Link href="/contact">Devis</Link>
      </Button>
    </div>
  );
}
