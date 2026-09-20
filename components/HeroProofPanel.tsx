"use client";

interface ProofItem {
  icon: React.ReactElement;
  text: string;
}

const proofItems: ProofItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Aucun travaux à vendre",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: "Intervention sous 10 jours",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M12 18v-6" />
        <path d="M9 15h6" />
      </svg>
    ),
    text: "Rapport illustré détaillé",
  },
];

export default function HeroProofPanel() {
  return (
    <>
      {/* Desktop side panel */}
      <div className="hidden lg:block lg:w-[280px] xl:w-[320px]">
        <div className="rounded-sm border border-paper/20 bg-navy/40 p-6 backdrop-blur-sm">
          <div className="space-y-4">
            {proofItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 text-copper">
                  {item.icon}
                </div>
                <p className="text-[14px] leading-[1.5] text-paper">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stacked below CTAs */}
      <div className="mt-8 lg:hidden">
        <div className="grid gap-3 sm:grid-cols-3">
          {proofItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 rounded-sm border border-paper/20 bg-navy/40 p-3 backdrop-blur-sm">
              <div className="flex-shrink-0 text-copper">
                {item.icon}
              </div>
              <p className="text-[13px] leading-[1.4] text-paper">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
