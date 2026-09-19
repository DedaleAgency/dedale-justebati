import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cartouche from "@/components/Cartouche";

export const metadata: Metadata = {
  title: "Expertise humidité",
  description:
    "Moisissures, infiltrations, remontées capillaires ? Expertise humidité indépendante. On cherche la cause, pas un traitement à vendre. Devis.",
  alternates: {
    canonical: "/expertise-humidite",
  },
};

export default function ExpertiseHumiditePage() {
  return (
    <>
      <PageLayout>
        <Cartouche
          fields={[
            { label: "Doc.", value: "JB-M03" },
            { label: "Mission", value: "Humidité" },
            { label: "Statut", value: "Indépendant" },
            { label: "Travaux", value: "Aucun" },
          ]}
        />
        <div className="mb-4 mt-6 font-mono text-[11px] uppercase tracking-[0.07em] text-oxide">
          Diagnostic humidité
        </div>
        <h1 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Expertise humidité
        </h1>
        <div className="prose max-w-none">
          <p className="lead">
            Moisissures, taches, odeurs, salpêtre : l&apos;humidité dans un bâtiment peut avoir
            plusieurs causes. Justebati inspecte votre bien, identifie l&apos;origine du désordre
            et vous remet un diagnostic clair. Nous ne vendons aucun traitement.
          </p>

          <h2>Pourquoi faire expertiser l&apos;humidité</h2>
          <p>
            Un excès d&apos;humidité peut dégrader le bâti, affecter la santé des occupants et
            entraîner des coûts de traitement élevés. Avant d&apos;entreprendre des travaux, il
            faut comprendre la cause : infiltration, condensation, remontée capillaire,
            défaut d&apos;étanchéité, fuite cachée. Justebati ne vend pas de solution « clé en
            main » : nous apportons le diagnostic technique indépendant.
          </p>

          <h2>Les types d&apos;humidité les plus courants</h2>
          <ul>
            <li>
              <strong>Infiltration</strong> : eau qui pénètre par la toiture, les façades, les
              menuiseries ou les fondations
            </li>
            <li>
              <strong>Condensation</strong> : vapeur d&apos;eau qui se condense sur les parois
              froides (ventilation insuffisante, pont thermique)
            </li>
            <li>
              <strong>Remontée capillaire</strong> : eau du sol qui remonte dans les murs par
              capillarité (absence ou défaillance de barrière étanche)
            </li>
            <li>
              <strong>Fuite</strong> : canalisation, chasse d&apos;eau, évacuation défectueuse
            </li>
          </ul>
          <p>
            L&apos;expert observe les traces, mesure si nécessaire l&apos;humidité des matériaux,
            étudie la configuration du bien et formule une hypothèse de cause.
          </p>

          <h2>Ce que l&apos;expert regarde</h2>
          <ul>
            <li>Localisation et étendue des traces d&apos;humidité</li>
            <li>Type de désordre : moisissures, salpêtre, cloques, décollement</li>
            <li>Configuration du bâti : ventilation, isolation, exposition</li>
            <li>
              Points sensibles : caves, murs enterrés, combles, pièces humides (salle de bain,
              cuisine)
            </li>
            <li>Indices de défaut d&apos;étanchéité ou de fuite</li>
          </ul>

          <h2>Le rapport d&apos;expertise</h2>
          <p>
            Vous recevez un document écrit et illustré qui décrit les désordres constatés, expose
            la ou les causes probables, et recommande une solution : ventilation, réparation
            d&apos;étanchéité, traitement de remontée, réfection de revêtement. Le chiffrage des
            travaux est donné à titre indicatif — Justebati ne les réalise pas.
          </p>

          <h2>Justebati vs entreprise de traitement</h2>
          <p>
            Beaucoup d&apos;entreprises qui diagnostiquent l&apos;humidité vendent également le
            traitement. Justebati n&apos;en vend aucun : notre rémunération, c&apos;est la mission
            d&apos;expertise. Le rapport reste neutre et vous pouvez le partager avec
            l&apos;artisan de votre choix.
          </p>

          <h2>Pour qui ?</h2>
          <p>
            Propriétaires ou locataires confrontés à des problèmes d&apos;humidité (moisissures,
            taches, odeurs), en phase de diagnostic ou en litige, qui veulent un avis technique
            neutre avant d&apos;engager des travaux.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-ink text-paper hover:bg-oxide">
            <Link href="/contact">Demander une expertise humidité</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/comment-ca-se-passe">Comment ça se passe</Link>
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
              <Link href="/expertise-avant-achat">Expertise avant achat</Link>
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
