import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: "narrow" | "default" | "wide";
}

export default function PageLayout({ children, maxWidth = "default" }: PageLayoutProps) {
  const widthClasses = {
    narrow: "max-w-3xl",
    default: "max-w-4xl",
    wide: "max-w-6xl",
  };

  return (
    <div className="border-b border-ink px-6 py-16 lg:px-12 lg:py-24">
      <div className={`mx-auto ${widthClasses[maxWidth]}`}>
        {children}
      </div>
    </div>
  );
}
