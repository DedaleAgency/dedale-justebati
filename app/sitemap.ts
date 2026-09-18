import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/expertise-avant-achat",
    "/expertise-fissures",
    "/expertise-humidite",
    "/expertise-malfacons-reception",
    "/assistance-expertise-assurance",
    "/litige-artisan",
    "/lexpert",
    "/comment-ca-se-passe",
    "/faq",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.includes("expertise") || route === "/contact" ? 0.9 : 0.7,
  }));
}
