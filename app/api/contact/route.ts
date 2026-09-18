import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validation basique
    const required = [
      "prenom",
      "nom",
      "telephone",
      "codePostal",
      "typeBien",
      "typeMission",
      "description",
    ];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        );
      }
    }

    // Dans un vrai environnement, ici on enverrait un email
    // Pour l'instant, on simule juste un succès
    console.log("Demande de devis reçue:", data);

    // Stub OK - en production, intégrer un service d'envoi d'email
    return NextResponse.json(
      { success: true, message: "Demande bien reçue" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
