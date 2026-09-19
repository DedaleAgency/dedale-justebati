import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Déroulement d'une expertise",
  description:
    "Prise de contact, visite, analyses, rapport : le déroulé d'une mission Justebati, étape par étape. Transparent, technique, indépendant. Demandez un devis.",
  alternates: {
    canonical: "/comment-ca-se-passe",
  },
};

export default function CommentCaSePassePage() {
  return (
    <section className="section-light section-spacing">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
            Déroulé de mission
          </div>
          <h1 className="mb-6 font-serif text-[clamp(1.875rem,3.2vw,2.375rem)] leading-[1.15] tracking-[-0.01em] text-navy">
            Comment se déroule une expertise
          </h1>
          <p className="mb-12 text-[17px] leading-[1.65] text-navy-muted">
            Cinq étapes. Un rapport à la fin. Aucun travaux vendu en chemin.
          </p>

          <div className="space-y-10">
            <div className="border-t-2 border-copper pt-5">
              <div className="mb-2 text-sm font-semibold text-copper">01</div>
              <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-navy">
                Contact
              </h2>
              <p className="text-base leading-[1.65] text-navy-muted">
                Vous décrivez le besoin : type de mission, type de bien, code postal, urgence éventuelle. Nous précisons le périmètre, les conditions d'accès et le devis.
              </p>
              <p className="mt-3 text-base leading-[1.65] text-navy-muted">
                Téléphone : 01 00 00 00 00 — e-mail : contact@exemple.fr — ou formulaire sur la page Contact.
              </p>
            </div>

            <div className="border-t-2 border-copper pt-5">
              <div className="mb-2 text-sm font-semibold text-copper">02</div>
              <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-navy">
                Visite
              </h2>
              <p className="text-base leading-[1.65] text-navy-muted">
                Inspection sur site. Observation méthodique des zones concernées, relevés, photographies. Vous êtes informé des limites d'accès (combles, vides sanitaires, parties communes si applicable).
              </p>
            </div>

            <div className="border-t-2 border-copper pt-5">
              <div className="mb-2 text-sm font-semibold text-copper">03</div>
              <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-navy">
                Analyse
              </h2>
              <p className="text-base leading-[1.65] text-navy-muted">
                Les observations sont classées. On distingue ce qui est établi, ce qui reste hypothétique, et ce qui nécessite un avis complémentaire. La gravité des désordres est évaluée dans ce cadre.
              </p>
            </div>

            <div className="border-t-2 border-copper pt-5">
              <div className="mb-2 text-sm font-semibold text-copper">04</div>
              <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-navy">
                Chiffrage
              </h2>
              <p className="text-base leading-[1.65] text-navy-muted">
                Lorsque les éléments le permettent, le rapport intègre une estimation des travaux à prévoir. Ce chiffrage est indicatif et technique. Il ne constitue ni un devis de travaux, ni une offre commerciale de Justebati — nous ne réalisons pas les travaux.
              </p>
            </div>

            <div className="border-t-2 border-copper pt-5">
              <div className="mb-2 text-sm font-semibold text-copper">05</div>
              <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-navy">
                Rapport
              </h2>
              <p className="text-base leading-[1.65] text-navy-muted">
                Document écrit, daté, illustré. Il reprend le contexte, les constats, l'analyse, les préconisations et le chiffrage le cas échéant. Vous l'utilisez pour décider, négocier, ou constituer un dossier.
              </p>
              <p className="mt-3 text-base leading-[1.65] text-navy-muted">
                Les délais de remise dépendent de la mission. Ils sont indiqués dans le devis.
              </p>
            </div>
          </div>

          <h2 className="mb-4 mt-12 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Selon votre besoin
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-navy-muted">
            Le même schéma s'applique, avec un focus adapté, pour :
          </p>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Expertise avant achat</li>
            <li className="list-disc">Fissures</li>
            <li className="list-disc">Humidité</li>
            <li className="list-disc">Malfaçons et réception</li>
            <li className="list-disc">Assistance assurance / sinistre</li>
            <li className="list-disc">Litige artisan</li>
          </ul>

          <h2 className="mb-4 mt-8 font-serif text-[clamp(1.625rem,2.5vw,2rem)] leading-[1.2] text-navy">
            Ce que Justebati ne fait pas
          </h2>
          <ul className="mb-6 ml-6 space-y-2 text-base leading-[1.65] text-navy-muted">
            <li className="list-disc">Vente de travaux</li>
            <li className="list-disc">Diagnostics obligatoires (DPE, amiante…)</li>
            <li className="list-disc">Estimation immobilière</li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-copper px-[22px] py-3 text-[13px] font-semibold text-white transition-colors duration-base hover:bg-copper-hover"
            >
              Demander un devis
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-sm border border-border-on-paper px-[22px] py-3 text-[13px] font-semibold text-navy transition-colors duration-base hover:bg-navy/[0.03]"
            >
              Questions fréquentes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
