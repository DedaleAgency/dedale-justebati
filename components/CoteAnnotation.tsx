interface CoteAnnotationProps {
  number: string;
  label: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export default function CoteAnnotation({ number, label, position }: CoteAnnotationProps) {
  return (
    <div
      className="absolute border border-oxide bg-night/55 px-[7px] py-[3px] font-mono text-[10px] uppercase tracking-[0.08em] text-on-night"
      style={position}
    >
      {number} — {label}
    </div>
  );
}
