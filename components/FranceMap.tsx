"use client";

interface FranceMapProps {
  className?: string;
}

export default function FranceMap({ className = "" }: FranceMapProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 300 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-label="Silhouette de la France métropolitaine"
      >
        <path
          d="M150 20 C165 18, 180 22, 190 30 L200 40 C210 50, 220 65, 225 80 L230 95 C232 110, 235 125, 240 140 L245 160 C248 175, 250 190, 252 205 L253 225 C252 240, 248 255, 242 268 L230 290 C220 305, 205 315, 188 322 L165 330 C145 332, 125 330, 108 325 L85 315 C70 308, 58 295, 50 280 L42 260 C38 245, 35 230, 33 215 L32 195 C33 180, 35 165, 38 150 L42 130 C45 115, 50 100, 56 85 L65 65 C75 48, 90 35, 108 28 L130 22 Z"
          fill="#E8E0D2"
          stroke="#A67C52"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="150"
          cy="170"
          r="4"
          fill="#A67C52"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
