import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  mono?: boolean;
}

export default function Logo({ className = "", mono = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={siteConfig.name}
    >
      {/* Symbole : équerre stylisée */}
      <g>
        <path
          d="M8 32V8M8 32H32"
          stroke={mono ? "currentColor" : "#9C6B3C"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="8"
          r="1.5"
          fill={mono ? "currentColor" : "#9C6B3C"}
        />
        <circle
          cx="32"
          cy="32"
          r="1.5"
          fill={mono ? "currentColor" : "#9C6B3C"}
        />
      </g>

      {/* Wordmark */}
      <text
        x="48"
        y="28"
        fontFamily="var(--font-fraunces)"
        fontSize="24"
        fontWeight="600"
        fill="currentColor"
      >
        {siteConfig.name}
      </text>
    </svg>
  );
}
