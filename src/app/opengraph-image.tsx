import { ImageResponse } from "next/og";

export const alt = "Ian Lee — Web Developer in Vancouver, BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card. Mirrors the Hero: Track Indigo ground, a spotlight on the
 * right, and Signal Red carrying the role line. Audiowide is not available to the
 * image renderer, so the card uses the system sans.
 */
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
          padding: "0 90px",
          backgroundColor: "#1e1b4b",
          backgroundImage:
            "radial-gradient(60% 85% at 88% 50%, #1e3a8a 0%, rgba(30, 58, 138, 0) 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 6,
            borderRadius: 3,
            backgroundColor: "#dc2626",
            marginBottom: 44,
          }}
        />
        <div style={{ display: "flex", fontSize: 42, color: "#dc2626", fontWeight: 600 }}>
          Web Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            color: "#ffffff",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Ian Lee
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#f3f4f6", marginTop: 28 }}>
          React · Next.js · Node · PostgreSQL
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9ca3af", marginTop: 18 }}>
          Vancouver, BC
        </div>
      </div>
    ),
    { ...size }
  );
}
