import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — JusteBati",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center border-b border-ink px-6 py-24 text-center">
      <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
        Erreur 404
      </div>
      <h1 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.02em]">
        Page introuvable
      </h1>
      <p className="mb-8 max-w-[46ch] text-[15px] leading-relaxed text-mist">
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil
        ou consultez nos prestations.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild className="bg-ink text-paper hover:bg-oxide">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/#missions">Voir nos missions</Link>
        </Button>
      </div>
    </div>
  );
}
