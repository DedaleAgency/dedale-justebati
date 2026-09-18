interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "paper" | "sand" | "dark";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "paper",
  id,
}: SectionProps) {
  const bgStyles = {
    paper: "bg-paper",
    sand: "bg-sand",
    dark: "bg-night text-on-night",
  };

  return (
    <section
      id={id}
      className={`${bgStyles[background]} section-spacing ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
