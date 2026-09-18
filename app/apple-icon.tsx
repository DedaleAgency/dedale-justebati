import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F3EB",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="1.5" stroke="#A85A3A" fill="none">
            <path d="M12 8 L12 20" strokeLinecap="square" />
            <path d="M10 20 L28 20" strokeLinecap="square" />
            <path d="M28 20 L28 32" strokeLinecap="square" />
            <path
              d="M20 8 C20 8, 24 8, 26 12 C28 16, 28 18, 28 20"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
