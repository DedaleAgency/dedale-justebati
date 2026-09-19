"use client";

import { useEffect } from "react";

export default function ContactFormValidation() {
  useEffect(() => {
    const form = document.querySelector("form");
    if (!form) return;

    const inputs = form.querySelectorAll("input, textarea, select");
    
    inputs.forEach((input) => {
      if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement) {
        input.addEventListener("invalid", (e) => {
          e.preventDefault();
          
          if (input.validity.valueMissing) {
            input.setCustomValidity("Ce champ est obligatoire.");
          } else if (input.validity.typeMismatch && input instanceof HTMLInputElement && input.type === "email") {
            input.setCustomValidity("Veuillez saisir une adresse email valide.");
          } else if (input.validity.tooShort && (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) {
            input.setCustomValidity(`Ce champ doit contenir au moins ${input.minLength} caractères.`);
          } else {
            input.setCustomValidity("");
          }
        });

        input.addEventListener("input", () => {
          input.setCustomValidity("");
        });
      }
    });
  }, []);

  return null;
}
