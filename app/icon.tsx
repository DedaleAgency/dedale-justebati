import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F1A14",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#A67C52",
            fontFamily: "serif",
          }}
        >
          J
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
