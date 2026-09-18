import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  mono?: boolean;
  monogramOnly?: boolean;
}

export default function Logo({
  className = "",
  mono = false,
  monogramOnly = false,
}: LogoProps) {
  const accentColor = mono ? "currentColor" : "#A85A3A";

  if (monogramOnly) {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label={`${siteConfig.name} monogramme`}
      >
        <g strokeWidth="1.5" stroke={accentColor} fill="none">
          <path d="M12 8 L12 20" strokeLinecap="square" />
          <path d="M10 20 L28 20" strokeLinecap="square" />
          <path d="M28 20 L28 32" strokeLinecap="square" />
          <path
            d="M20 8 C20 8, 24 8, 26 12 C28 16, 28 18, 28 20"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 260 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={siteConfig.name}
    >
      <g strokeWidth="1.5" stroke={accentColor} fill="none">
        <path d="M6 4 L6 16" strokeLinecap="square" />
        <path d="M4 16 L22 16" strokeLinecap="square" />
        <path d="M22 16 L22 28" strokeLinecap="square" />
        <path
          d="M14 4 C14 4, 18 4, 20 8 C22 12, 22 14, 22 16"
          strokeLinecap="round"
        />
      </g>

      <text
        x="40"
        y="26"
        fontFamily="var(--font-newsreader)"
        fontSize="22"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        Justebati
      </text>
    </svg>
  );
}
