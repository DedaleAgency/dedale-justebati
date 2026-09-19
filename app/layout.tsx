import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import JsonLd from "@/components/JsonLd";
import { jetbrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.baseline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.baseline,
  robots: {
    index: !siteConfig.noIndex,
    follow: !siteConfig.noIndex,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(jetbrainsMono.variable)}
    >
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
