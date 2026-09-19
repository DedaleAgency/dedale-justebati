"use client";

import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ContactFormValidation from "./ContactFormValidation";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Échec de l'envoi");

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("L'envoi a échoué. Réessayez ou appelez le 01 00 00 00 00.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border-2 border-oxide bg-sand p-8 text-center">
        <h3 className="mb-2 font-display text-[1.5rem] font-medium text-ink">
          Demande bien reçue
        </h3>
        <p className="mb-6 text-mist">
          Merci. Nous revenons vers vous rapidement pour votre devis d&apos;expertise. En cas
          d&apos;urgence, appelez le 01 00 00 00 00.
        </p>
        <Button asChild variant="secondary">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ContactFormValidation />
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="prenom" className="mb-2 block text-sm font-medium text-ink">
            Prénom *
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
          />
        </div>
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-medium text-ink">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="mb-2 block text-sm font-medium text-ink">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="06 00 00 00 00"
            required
            pattern="[0-9\s]+"
            className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
          />
        </div>
        <div>
          <label htmlFor="codePostal" className="mb-2 block text-sm font-medium text-ink">
            Code postal *
          </label>
          <input
            type="text"
            id="codePostal"
            name="codePostal"
            placeholder="00000"
            required
            pattern="[0-9]{5}"
            className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="typeBien" className="mb-2 block text-sm font-medium text-ink">
            Type de bien *
          </label>
          <select
            id="typeBien"
            name="typeBien"
            required
            className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
          >
            <option value="">Sélectionnez...</option>
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="typeMission" className="mb-2 block text-sm font-medium text-ink">
            Type de mission *
          </label>
          <select
            id="typeMission"
            name="typeMission"
            required
            className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
          >
            <option value="">Sélectionnez...</option>
            <option value="avant-achat">Expertise avant achat</option>
            <option value="fissures">Expertise fissures</option>
            <option value="humidite">Expertise humidité</option>
            <option value="malfacons">Malfaçons et réception de travaux</option>
            <option value="assurance">Assistance assurance / sinistre</option>
            <option value="litige">Litige avec un artisan</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-ink">
          Décrivez votre besoin *
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          required
          placeholder="Ex. fissures apparues après l'été, visite avant compromis prévue le..."
          className="w-full border border-line bg-paper px-4 py-3 text-ink transition-colors focus:border-oxide focus:outline-none focus:ring-2 focus:ring-oxide"
        />
      </div>

      {error && (
        <div className="border border-oxide bg-oxide/10 p-4 text-sm text-ink">{error}</div>
      )}

      <div className="text-sm text-mist">
        En envoyant ce formulaire, vous acceptez que Justebati traite vos données pour répondre à
        votre demande. Voir la{" "}
        <Link href="/politique-de-confidentialite" className="text-oxide underline">
          politique de confidentialité
        </Link>
        .
      </div>

      <Button type="submit" className="w-full bg-ink text-paper hover:bg-oxide md:w-auto">
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>
    </form>
  );
}
