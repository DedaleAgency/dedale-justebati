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
          backgroundColor: "#0B1623",
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
          <div
            style={{
              fontSize: "80px",
              fontWeight: "400",
              color: "#EDE9E1",
              marginBottom: "30px",
              fontFamily: "serif",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "rgba(237, 233, 225, 0.65)",
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
