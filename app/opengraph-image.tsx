import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.baseline}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F4F0E7",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: "40px" }}
          >
            <path
              d="M8 32V8M8 32H32"
              stroke="#9C6B3C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="8" cy="8" r="2" fill="#9C6B3C" />
            <circle cx="32" cy="32" r="2" fill="#9C6B3C" />
          </svg>
          <div
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "#1A1814",
              marginBottom: "20px",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#8A8478",
              maxWidth: "900px",
            }}
          >
            {siteConfig.baseline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
