interface CartoucheField {
  label: string;
  value: string;
}

interface CartoucheProps {
  fields: CartoucheField[];
}

export default function Cartouche({ fields }: CartoucheProps) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-[6px] border-b border-line pb-[18px] font-mono text-[11px] uppercase tracking-[0.04em] text-mist">
      {fields.map((field, index) => (
        <span key={index}>
          {field.label} · <strong className="font-medium text-ink">{field.value}</strong>
        </span>
      ))}
    </div>
  );
}
