interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "paper" | "paper-2" | "dark";
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
    "paper-2": "bg-paper-2",
    dark: "bg-ok-dark text-on-dark",
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
