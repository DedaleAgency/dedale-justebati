import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Expertise avant achat | Expert bâtiment Justebati",
  description:
    "Sécurisez votre achat : bilan technique indépendant avant compromis. Fissures, humidité, structure. Rapport clair — sans travaux à vendre. Devis.",
};

export default function ExpertiseAvantAchatPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-display md:text-5xl">
            Expertise avant achat immobilier
          </h1>
          <div className="prose-custom">
            <p className="text-xl text-stone">
              Avant de signer, vous avez besoin d&apos;autre chose qu&apos;un
              dossier de diagnostics réglementaires. Justebati réalise un bilan
              technique indépendant du bien : état du bâti, points de
              vigilance, distinction entre défauts cosmétiques et désordres
              graves, et ordre de grandeur des travaux à prévoir.
            </p>
            <p className="text-xl text-stone">
              Objectif : décider en connaissance de cause — ou négocier en
              s&apos;appuyant sur des faits.
            </p>

            <h2>Pourquoi sécuriser avant le compromis</h2>
            <p>
              Un bien peut paraître sain et cacher des désordres coûteux :
              fissures évolutives, humidité structurelle, toiture fatiguée,
              malfaçons anciennes. Les diagnostics obligatoires (DPE, amiante,
              etc.) ne remplacent pas une expertise pathologique du bâti.
              Justebati ne réalise pas ces diagnostics ni d&apos;estimation
              immobilière : notre mission, c&apos;est le regard technique
              indépendant.
            </p>
            <p>
              Intervenir avant le compromis — ou avant la fin du délai de
              rétractation, selon votre calendrier — permet d&apos;éviter une
              mauvaise surprise après signature.
            </p>

            <h2>Ce que l&apos;expert regarde</h2>
            <p>
              Selon le type de bien et votre brief, la visite porte notamment
              sur :
            </p>
            <ul>
              <li>
                Structure et stabilité apparente (murs, planchers, ouvertures)
              </li>
              <li>
                Fissures : localisation, ouverture, indices d&apos;évolution
              </li>
              <li>
                Humidité : traces, odeurs, points d&apos;infiltration, risques
                de capillarité
              </li>
              <li>
                Enveloppe : toiture, façades, menuiseries, étanchéité visible
              </li>
              <li>
                Points de désordre récurrents (combles, caves, pièces humides)
              </li>
              <li>
                Indices de malfaçons ou de travaux récents à questionner
              </li>
            </ul>
            <p>
              L&apos;expert ne se substitue pas à un diagnostiqueur
              réglementaire. Il complète le dossier avec une lecture
              constructive et pathologique.
            </p>

            <h2>Le livrable : un rapport clair</h2>
            <p>
              À l&apos;issue de la mission, vous recevez un rapport écrit
              illustré de photos. Il synthétise les constats, hiérarchise les
              urgences et propose un chiffrage des travaux à prévoir. Vous
              pouvez le partager avec votre notaire, votre banque ou votre
              conseil — sans ambiguïté sur la nature de la mission.
            </p>
            <p>
              Justebati ne vend aucun travaux. Le chiffrage sert à anticiper,
              pas à vous orienter vers un chantier « maison ».
            </p>

            <h2>Expertise Justebati vs diagnostiqueur</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-line">
                <thead>
                  <tr className="bg-paper-2">
                    <th className="border border-line p-3 text-left"></th>
                    <th className="border border-line p-3 text-left">
                      Diagnostiqueur
                    </th>
                    <th className="border border-line p-3 text-left">
                      Justebati
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-line p-3 font-medium">
                      Cadre
                    </td>
                    <td className="border border-line p-3">
                      Diagnostics obligatoires à la vente
                    </td>
                    <td className="border border-line p-3">
                      Expertise technique volontaire
                    </td>
                  </tr>
                  <tr className="bg-paper-2">
                    <td className="border border-line p-3 font-medium">
                      Objet
                    </td>
                    <td className="border border-line p-3">
                      Conformité réglementaire (DPE, amiante…)
                    </td>
                    <td className="border border-line p-3">
                      Pathologie du bâti, désordres, travaux à prévoir
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-line p-3 font-medium">
                      Indépendance travaux
                    </td>
                    <td className="border border-line p-3">
                      Variable selon les structures
                    </td>
                    <td className="border border-line p-3">
                      Aucun travaux vendus
                    </td>
                  </tr>
                  <tr className="bg-paper-2">
                    <td className="border border-line p-3 font-medium">
                      Livrable type
                    </td>
                    <td className="border border-line p-3">
                      Diagnostics réglementaires
                    </td>
                    <td className="border border-line p-3">
                      Rapport d&apos;expertise + photos + chiffrage
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Les deux approches peuvent coexister. Elles ne se remplacent pas.</p>

            <h2>Pour qui ?</h2>
            <p>
              Acquéreurs de maison ou d&apos;appartement, en projet
              d&apos;achat ou en phase de négociation, qui veulent un avis
              technique neutre avant de s&apos;engager.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/contact">Demander un devis avant achat</Button>
            <Button href="/comment-ca-se-passe" variant="secondary">
              Voir le déroulement d&apos;une mission
            </Button>
          </div>
        </div>
      </Section>

      <Section background="paper-2">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-display">
            Liens utiles
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/expertise-fissures" variant="secondary">
              Expertise fissures
            </Button>
            <Button href="/expertise-humidite" variant="secondary">
              Expertise humidité
            </Button>
            <Button href="/faq" variant="secondary">
              FAQ
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
