"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact et cadrage",
    description:
      "Vous décrivez votre besoin. Nous précisons le périmètre et vous envoyons un devis clair.",
  },
  {
    number: "02",
    title: "Visite sur site",
    description:
      "L'expert se rend sur place, observe, mesure, photographie les zones concernées.",
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Lecture des constats, hypothèses de cause, distinction entre cosmétique et grave.",
  },
  {
    number: "04",
    title: "Chiffrage",
    description:
      "Ordre de grandeur des travaux à prévoir pour vous aider à décider ou négocier.",
  },
  {
    number: "05",
    title: "Rapport écrit",
    description:
      "Document illustré avec constats, préconisations et chiffrage. Exploitable immédiatement.",
  },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Timeline line - desktop only */}
      <div className="absolute left-0 top-0 hidden h-full w-px bg-line md:left-1/2 md:block" />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-start md:items-center`}
          >
            {/* Step number badge */}
            <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-oxide bg-paper font-mono text-sm font-medium text-oxide md:absolute md:left-1/2 md:mb-0 md:-translate-x-1/2">
              {step.number}
            </div>

            {/* Content */}
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <h3 className="mb-2 text-xl font-display text-ink">
                {step.title}
              </h3>
              <p className="leading-relaxed text-mist">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
