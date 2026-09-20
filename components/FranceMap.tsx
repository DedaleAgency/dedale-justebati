"use client";

interface FranceMapProps {
  className?: string;
}

export default function FranceMap({ className = "" }: FranceMapProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-label="Silhouette de la France métropolitaine"
      >
        <path
          d="M 200 50
             L 220 45 L 240 48 L 260 55 L 280 65 L 295 80
             L 305 95 L 315 115 L 320 135 L 322 155
             L 320 175 L 315 195 L 310 215 L 305 235
             L 300 255 L 295 275 L 288 295 L 280 315
             L 270 330 L 255 345 L 240 355 L 220 365
             L 200 370 L 180 368 L 160 363 L 140 355
             L 120 345 L 105 335 L 92 320 L 85 305
             L 80 285 L 78 265 L 75 245 L 73 225
             L 70 205 L 68 185 L 70 165 L 75 145
             L 82 125 L 92 105 L 105 88 L 120 75
             L 140 65 L 160 58 L 180 52 Z"
          fill="#E8E0D2"
          stroke="#A67C52"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        
        <circle
          cx="200"
          cy="210"
          r="5"
          fill="#A67C52"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
