interface StepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function Step({ number, title, description, isLast }: StepProps) {
  return (
    <article
      className={`relative border-line px-[22px] py-7 lg:py-9 ${
        isLast ? "" : "border-r"
      }`}
    >
      <span className="mb-[14px] block font-mono text-[11px] uppercase tracking-[0.06em] text-oxide">
        {number}
      </span>
      <h3 className="mb-2 text-[15px] font-semibold leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-mist">{description}</p>
    </article>
  );
}

export default function FriseEtapes() {
  const steps = [
    { number: "01", title: "Vous décrivez", description: "Votre besoin (appel ou formulaire)." },
    { number: "02", title: "Visite", description: "Sur site et relevés." },
    { number: "03", title: "Analyse", description: "Désordres et gravité." },
    { number: "04", title: "Chiffrage", description: "Travaux à prévoir." },
    { number: "05", title: "Rapport", description: "Écrit illustré remis." },
  ];

  return (
    <div className="grid border-t border-ink lg:grid-cols-5">
      {steps.map((step, index) => (
        <Step key={index} {...step} isLast={index === steps.length - 1} />
      ))}
    </div>
  );
}
