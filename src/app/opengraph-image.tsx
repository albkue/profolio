import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #38bdf8)",
            color: "white",
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          ES
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, color: "#0f172a" }}>
          Eng Sothy
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#475569",
            marginTop: 24,
            maxWidth: 820,
          }}
        >
          Backend APIs, ML pipelines, and production-shaped, containerized
          services.
        </div>
      </div>
    ),
    { ...size },
  );
}
