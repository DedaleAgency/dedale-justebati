import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Expertise avant achat",
  description:
    "Sécurisez votre achat : bilan technique indépendant avant compromis. Fissures, humidité, structure. Rapport clair — sans travaux à vendre. Devis.",
  alternates: {
    canonical: "/expertise-avant-achat",
  },
};

export default function ExpertiseAvantAchatPage() {
  return (
    <>
      <PageLayout>
        <PageHero
          imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
          imageAlt="Façade de maison individuelle vue de la rue"
        />
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-M01" },
            { label: "Mission", value: "Avant achat" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Sécuriser l&apos;achat
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Expertise avant achat immobilier
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Avant de signer, vous avez besoin d&apos;autre chose qu&apos;un dossier de diagnostics
            réglementaires. Justebati réalise un bilan technique indépendant du bien : état du
            bâti, points de vigilance, distinction entre défauts cosmétiques et désordres graves,
            et ordre de grandeur des travaux à prévoir.
          </p>
          <p className="lead">
            Objectif : décider en connaissance de cause — ou négocier en s&apos;appuyant sur des
            faits.
          </p>

          <h2>Pourquoi sécuriser avant le compromis</h2>
          <p>
            Un bien peut paraître sain et cacher des désordres coûteux : fissures évolutives,
            humidité structurelle, toiture fatiguée, malfaçons anciennes. Les diagnostics
            obligatoires (DPE, amiante, etc.) ne remplacent pas une expertise pathologique du bâti.
            Justebati ne réalise pas ces diagnostics ni d&apos;estimation immobilière : notre
            mission, c&apos;est le regard technique indépendant.
          </p>
          <p>
            Intervenir avant le compromis — ou avant la fin du délai de rétractation, selon votre
            calendrier — permet d&apos;éviter une mauvaise surprise après signature.
          </p>

          <h2>Ce que l&apos;expert regarde</h2>
          <p>Selon le type de bien et votre brief, la visite porte notamment sur :</p>
          <ul>
            <li>Structure et stabilité apparente (murs, planchers, ouvertures)</li>
            <li>Fissures : localisation, ouverture, indices d&apos;évolution</li>
            <li>
              Humidité : traces, odeurs, points d&apos;infiltration, risques de capillarité
            </li>
            <li>Enveloppe : toiture, façades, menuiseries, étanchéité visible</li>
            <li>Points de désordre récurrents (combles, caves, pièces humides)</li>
            <li>Indices de malfaçons ou de travaux récents à questionner</li>
          </ul>
          <p>
            L&apos;expert ne se substitue pas à un diagnostiqueur réglementaire. Il complète le
            dossier avec une lecture constructive et pathologique.
          </p>

          <h2>Le livrable : un rapport clair</h2>
          <p>
            À l&apos;issue de la mission, vous recevez un rapport écrit illustré de photos. Il
            synthétise les constats, hiérarchise les urgences et propose un chiffrage des travaux à
            prévoir. Vous pouvez le partager avec votre notaire, votre banque ou votre conseil —
            sans ambiguïté sur la nature de la mission.
          </p>
          <p>
            Justebati ne vend aucun travaux. Le chiffrage sert à anticiper, pas à vous orienter
            vers un chantier « maison ».
          </p>

          <h2>Expertise Justebati vs diagnostiqueur</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Diagnostiqueur</th>
                <th>Justebati</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Cadre</strong>
                </td>
                <td>Diagnostics obligatoires à la vente</td>
                <td>Expertise technique volontaire</td>
              </tr>
              <tr>
                <td>
                  <strong>Objet</strong>
                </td>
                <td>Conformité réglementaire (DPE, amiante…)</td>
                <td>Pathologie du bâti, désordres, travaux à prévoir</td>
              </tr>
              <tr>
                <td>
                  <strong>Indépendance travaux</strong>
                </td>
                <td>Variable selon les structures</td>
                <td>Aucun travaux vendus</td>
              </tr>
              <tr>
                <td>
                  <strong>Livrable type</strong>
                </td>
                <td>Diagnostics réglementaires</td>
                <td>Rapport d&apos;expertise + photos + chiffrage</td>
              </tr>
            </tbody>
          </table>
          <p>Les deux approches peuvent coexister. Elles ne se remplacent pas.</p>

          <h2>Pour qui ?</h2>
          <p>
            Acquéreurs de maison ou d&apos;appartement, en projet d&apos;achat ou en phase de
            négociation, qui veulent un avis technique neutre avant de s&apos;engager.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander un devis avant achat</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/comment-ca-se-passe">Voir le déroulement d&apos;une mission</Link>
          </Button>
        </div>
      </PageLayout>

      <div className="border-b border-ink bg-sand px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-[1.5rem] font-medium">Liens utiles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary">
              <Link href="/expertise-fissures">Expertise fissures</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/expertise-humidite">Expertise humidité</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
